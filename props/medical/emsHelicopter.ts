import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const EMS_HELICOPTER_URL = "https://raw.githubusercontent.com/regtable/assets/main/props/medical/ems-helicopter.glb";
export const EMS_FLIGHT_CONFIG = {
  cycleSeconds: 300,
  spinUpSeconds: 8,
  liftSeconds: 10,
  outboundSeconds: 18,
  awaySeconds: 26,
  inboundSeconds: 18,
  landSeconds: 10,
  hoverHeight: 16,
  farHeight: 70,
  farX: -180,
  farZ: -180,
};

const ease = (x: number) => { const t = Math.max(0, Math.min(1, x)); return t * t * (3 - 2 * t); };
const heading = Math.atan2(EMS_FLIGHT_CONFIG.farX, EMS_FLIGHT_CONFIG.farZ);
export type EMSFlightPose = { phase: string; x: number; y: number; z: number; yaw: number; pitch: number; visible: boolean; rotorSpeed: number };

// Absolute sampling avoids drift and handles tab suspension without replaying missed flights.
// First departure begins at five minutes; later departures are also five minutes apart.
export function sampleEMSFlight(elapsed: number): EMSFlightPose {
  const c = EMS_FLIGHT_CONFIG;
  const p: EMSFlightPose = { phase: "parked", x: 0, y: 0, z: 0, yaw: heading, pitch: 0, visible: true, rotorSpeed: 0 };
  let t = Math.max(0, elapsed) - c.cycleSeconds;
  if (t < 0) return p;
  t %= c.cycleSeconds;
  if (t < c.spinUpSeconds) { p.phase = "spin-up"; p.rotorSpeed = ease(t / c.spinUpSeconds); return p; }
  t -= c.spinUpSeconds;
  p.rotorSpeed = 1;
  if (t < c.liftSeconds) { p.phase = "lift"; p.y = c.hoverHeight * ease(t / c.liftSeconds); return p; }
  t -= c.liftSeconds;
  if (t < c.outboundSeconds) {
    const u = ease(t / c.outboundSeconds); p.phase = "outbound";
    p.x = c.farX * u; p.z = c.farZ * u; p.y = c.hoverHeight + (c.farHeight - c.hoverHeight) * u;
    p.pitch = -.1 * Math.sin(Math.PI * u); return p;
  }
  t -= c.outboundSeconds;
  p.x = c.farX; p.z = c.farZ; p.y = c.farHeight;
  if (t < c.awaySeconds) { p.phase = "away"; p.visible = false; return p; }
  t -= c.awaySeconds;
  if (t < c.inboundSeconds) {
    const u = ease(t / c.inboundSeconds); p.phase = "inbound";
    p.x *= 1 - u; p.z *= 1 - u; p.y = c.farHeight + (c.hoverHeight - c.farHeight) * u;
    // Face the pad during approach, then smoothly return to the parked heading.
    p.yaw = heading + Math.PI * (1 - ease((u - .7) / .3));
    p.pitch = -.07 * Math.sin(Math.PI * u); return p;
  }
  t -= c.inboundSeconds;
  p.x = p.z = 0;
  if (t < c.landSeconds) { p.phase = "landing"; p.y = c.hoverHeight * (1 - ease(t / c.landSeconds)); return p; }
  t -= c.landSeconds;
  p.y = 0;
  if (t < c.spinUpSeconds) { p.phase = "spin-down"; p.rotorSpeed = 1 - ease(t / c.spinUpSeconds); return p; }
  return { ...p, phase: "parked", rotorSpeed: 0 };
}

export interface EMSHelicopterInstance {
  group: THREE.Group;
  ready: Promise<void>;
  update: (delta: number) => void;
  dispose: () => void;
  readonly status: "loading" | "ready" | "error" | "disposed";
}

export function createEMSHelicopter(options: { position?: THREE.Vector3; url?: string; camera?: THREE.Camera; sound?: boolean; audioUrl?: string } = {}): EMSHelicopterInstance {
  const group = new THREE.Group(); group.name = "EMSHelicopterFlight";
  const origin = (options.position ?? new THREE.Vector3(-73, 12.14, 20)).clone();
  group.position.copy(origin);
  let status: EMSHelicopterInstance["status"] = "loading";
  let model: THREE.Group | null = null, mainRotor: THREE.Object3D | undefined, tailRotor: THREE.Object3D | undefined;
  let started = 0, lastSample = 0;
  const listener = options.camera && options.sound !== false ? new THREE.AudioListener() : null;
  const sound = listener ? new THREE.PositionalAudio(listener) : null;
  let audioUnlocked = false;
  if (listener && sound) {
    options.camera!.add(listener); group.add(sound);
    sound.setRefDistance(12); sound.setRolloffFactor(1.6); sound.setMaxDistance(240);
    sound.setDistanceModel("inverse"); sound.setLoop(true); sound.setVolume(0);
    sound.gain.gain.setValueAtTime(0, listener.context.currentTime);
    const tryPlay = () => { if (audioUnlocked && sound.buffer && !sound.isPlaying && status !== "disposed") sound.play(); };
    const unlock = () => { listener.context.resume().then(() => { audioUnlocked = true; tryPlay(); }).catch(() => {}); };
    window.addEventListener("pointerdown", unlock); window.addEventListener("keydown", unlock);
    group.userData.removeAudioGestures = () => { window.removeEventListener("pointerdown", unlock); window.removeEventListener("keydown", unlock); };
    new THREE.AudioLoader().load(options.audioUrl ?? "https://raw.githubusercontent.com/regtable/assets/main/props/medical/rotor-wash.wav", buffer => {
      if (status === "disposed") return;
      sound.setBuffer(buffer); tryPlay();
    }, undefined, error => console.warn("EMS rotor sound unavailable:", error));
  }
  const release = (root: THREE.Object3D) => {
    const geometries = new Set<THREE.BufferGeometry>(), materials = new Set<THREE.Material>(), textures = new Set<THREE.Texture>();
    root.traverse(node => {
      const mesh = node as THREE.Mesh;
      if (!mesh.isMesh) return;
      geometries.add(mesh.geometry);
      for (const m of Array.isArray(mesh.material) ? mesh.material : [mesh.material]) {
        materials.add(m);
        for (const value of Object.values(m)) if ((value as THREE.Texture)?.isTexture) textures.add(value as THREE.Texture);
      }
    });
    geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); textures.forEach(t => t.dispose());
  };
  const ready = new GLTFLoader().loadAsync(options.url ?? EMS_HELICOPTER_URL).then(gltf => {
    if (status === "disposed") { release(gltf.scene); return; }
    model = gltf.scene;
    mainRotor = model.getObjectByName("MainRotor"); tailRotor = model.getObjectByName("TailRotor");
    if (!mainRotor || !tailRotor) { release(model); model = null; throw new Error("EMS GLB is missing its rotor pivots"); }
    model.traverse(node => { const mesh = node as THREE.Mesh; if (mesh.isMesh) { mesh.castShadow = true; mesh.receiveShadow = true; } });
    group.add(model); started = performance.now(); lastSample = 0; status = "ready";
    const pose = sampleEMSFlight(0); group.rotation.y = pose.yaw;
  }).catch(error => {
    if (status !== "disposed") { status = "error"; console.error("EMS helicopter could not load:", error); }
    // A failed prop must not prevent the rest of the scene from rendering.
  });
  const update = (_delta: number) => {
    if (status !== "ready") return;
    const elapsed = Math.max(0, (performance.now() - started) / 1000);
    const pose = sampleEMSFlight(elapsed), dt = Math.min(.1, Math.max(0, elapsed - lastSample)); lastSample = elapsed;
    group.visible = pose.visible; group.userData.flightPhase = pose.phase;
    if (sound) sound.setVolume(pose.visible ? .6 * pose.rotorSpeed : 0);
    group.position.set(origin.x + pose.x, origin.y + pose.y, origin.z + pose.z);
    group.rotation.set(pose.pitch, pose.yaw, 0, "YXZ");
    // Named local pivots preserve the Blender blade hierarchies; no whole-body spinning.
    if (mainRotor) mainRotor.rotation.y = (mainRotor.rotation.y + dt * 35 * pose.rotorSpeed) % (Math.PI * 2);
    if (tailRotor) tailRotor.rotation.x = (tailRotor.rotation.x + dt * 65 * pose.rotorSpeed) % (Math.PI * 2);
  };
  const dispose = () => {
    if (status === "disposed") return; status = "disposed";
    group.userData.removeAudioGestures?.();
    if (sound) { if (sound.isPlaying) sound.stop(); sound.disconnect(); sound.buffer = null; }
    listener?.removeFromParent(); group.removeFromParent(); if (model) release(model); group.clear(); model = null;
  };
  return { group, ready, update, dispose, get status() { return status; } };
}
