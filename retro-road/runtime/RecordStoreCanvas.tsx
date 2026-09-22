import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { BinCategory, ControlsState } from "./types";
import { AreaManifestLoader, LoadAreasProgress } from "./areaManifestLoader";
import { ImportedWorld, RegistryCounts } from "./importedWorld";
import { WorldEffects } from "./worldEffects";
import { SkyCycle } from "./skyCycle";
interface RecordStoreCanvasProps {
bins: BinCategory[];
activeBin: BinCategory | null;
onSelectBin: (bin: BinCategory) => void;
onOpenNicheDesk: () => void;
onOpenPosterPress: () => void;
onOpenVictrola: () => void;
controls: ControlsState;
isMenuOpen: boolean;
isMobile?: boolean;
}
export const RecordStoreCanvas: React.FC<RecordStoreCanvasProps> = ({ bins, activeBin, onSelectBin, onOpenNicheDesk, onOpenPosterPress, onOpenVictrola, controls, isMenuOpen, isMobile = false }) => {
const [loadProgress, setLoadProgress] = useState<LoadAreasProgress | null>(null);
const [worldCounts, setWorldCounts] = useState<RegistryCounts | null>(null);
const [loadAttempt, setLoadAttempt] = useState(0);
const containerRef = useRef<HTMLDivElement>(null);
const [isPointerLocked, setIsPointerLocked] = useState(false);
const [isWelcomeDismissed, setIsWelcomeDismissed] = useState(false);
const pointerLockFailedRef = useRef(false);
const [pointerLockFailed, setPointerLockFailedState] = useState(false);
const [lockErrorMsg, setLockErrorMsg] = useState<string | null>(null);
const setPointerLockFailed = (failed: boolean, errMessage?: string) => {
pointerLockFailedRef.current = failed;
setPointerLockFailedState(failed);
setLockErrorMsg(errMessage || null);
};
const requestCaptureRef = useRef<() => void>(() => { });
const isMenuOpenRef = useRef(isMenuOpen);
isMenuOpenRef.current = isMenuOpen;
const controlsRef = useRef(controls);
controlsRef.current = controls;
const onSelectBinRef = useRef(onSelectBin);
onSelectBinRef.current = onSelectBin;
const onOpenNicheDeskRef = useRef(onOpenNicheDesk);
onOpenNicheDeskRef.current = onOpenNicheDesk;
const onOpenPosterPressRef = useRef(onOpenPosterPress);
onOpenPosterPressRef.current = onOpenPosterPress;
const onOpenVictrolaRef = useRef(onOpenVictrola);
onOpenVictrolaRef.current = onOpenVictrola;
const cameraPosRef = useRef({ x: -50.0, y: 1.6, z: 2.0 });
useEffect(() => {
if (isMenuOpen && document.pointerLockElement) {
document.exitPointerLock();
}
}, [isMenuOpen]);
useEffect(() => {
if (!containerRef.current)
return;
const container = containerRef.current;
const width = container.clientWidth;
const height = container.clientHeight;
const scene = new THREE.Scene();
scene.background = new THREE.Color("#030712");
scene.fog = new THREE.FogExp2("#030712", 0.008);

const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 300);
camera.position.set(cameraPosRef.current.x, cameraPosRef.current.y, cameraPosRef.current.z);
const coarse = window.matchMedia('(pointer: coarse)').matches;
const renderer = new THREE.WebGLRenderer({ antialias: !coarse });
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1.25 : 2));
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);
const skyCycle = new SkyCycle(scene, renderer, coarse);

const domEl = renderer.domElement;
domEl.style.touchAction = 'none';
let disposed = false;
const areaLoader = new AreaManifestLoader();
let importedWorld: ImportedWorld | null = null;
let worldEffects: WorldEffects | null = null;
setWorldCounts(null);
const unlock = () => { if (document.pointerLockElement === domEl)
document.exitPointerLock(); };
areaLoader.loadManifest('https://raw.githubusercontent.com/regtable/assets/main/retro-road/areas.json', p => { if (!disposed)
setLoadProgress(p); }).then(areas => {
if (disposed)
return;
if (!areas.length)
throw new Error('The manifest contains no enabled areas.');
areas.forEach(a => scene.add(a.group));
importedWorld = new ImportedWorld(areas, {
onSelectBin: b => { unlock(); onSelectBinRef.current(b); },
onOpenNicheDesk: () => { unlock(); onOpenNicheDeskRef.current(); },
onOpenPosterPress: () => { unlock(); onOpenPosterPressRef.current(); },
onOpenRadio: () => { unlock(); onOpenVictrolaRef.current(); }
});
const spawn = importedWorld.getSpawnPosition();
if (spawn)
camera.position.copy(spawn);
cameraPosRef.current = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
worldEffects = new WorldEffects(areas, renderer, coarse, scene);
setWorldCounts(importedWorld.getRegistryCounts());
}).catch(error => {
if (disposed)
return;
worldEffects?.dispose();
worldEffects = null;
importedWorld?.dispose();
importedWorld = null;
areaLoader.cancel();
setLoadProgress({ status: 'error', loaded: 0, total: 0, error: String(error?.message || error) });
});
const requestCapture = () => {
if (!importedWorld?.isReady() || isMenuOpenRef.current)
return;
setLockErrorMsg(null);
if (!domEl || typeof domEl.requestPointerLock !== "function") {
setPointerLockFailed(true, "requestPointerLock not supported");
return;
}
try {
const res = domEl.requestPointerLock() as unknown;
if (res && typeof (res as Promise<void>).catch === "function") {
(res as Promise<void>).catch((err: any) => {
const name = err?.name || "PointerLockError";
const msg = err?.message || "Mouse capture was refused in this preview. Drag to look, or test the game in a regular browser.";
setPointerLockFailed(true, `${name}: ${msg}`);
});
}
}
catch (err: any) {
const name = err?.name || "PointerLockError";
const msg = err?.message || "Mouse capture was refused in this preview. Drag to look, or test the game in a regular browser.";
setPointerLockFailed(true, `${name}: ${msg}`);
}
};
requestCaptureRef.current = requestCapture;
const performPick = (x: number, y: number) => {
if (!isMenuOpenRef.current && importedWorld?.isReady())
importedWorld.pick(new THREE.Vector2(x, y), camera);
};
const handlePointerLockChange = () => {
const locked = document.pointerLockElement === domEl;
setIsPointerLocked(locked);
if (locked) {
setPointerLockFailed(false);
}
};
const handlePointerLockError = () => {
if (!lockErrorMsg) {
setPointerLockFailed(true, "PointerLockError: Mouse capture was refused in this preview. Drag to look, or test the game in a regular browser.");
}
};
document.addEventListener("pointerlockchange", handlePointerLockChange);
document.addEventListener("pointerlockerror", handlePointerLockError);
let yaw = -Math.PI / 2;
let pitch = 0;
const touchTapRef = { pointerId: null as number | null, pressStartX: 0, pressStartY: 0, startTime: 0 };
const mouseDragRef = {
isDown: false,
pressStartX: 0,
pressStartY: 0,
lastX: 0,
lastY: 0,
startTime: 0,
hasDragged: false
};
const handleCanvasPointerDown = (e: PointerEvent) => {
if (isMenuOpenRef.current)
return;
if (e.pointerType === "mouse") {
if (e.button !== 0)
return;
if (document.pointerLockElement === domEl) {
performPick(0, 0);
return;
}
mouseDragRef.isDown = true;
mouseDragRef.pressStartX = e.clientX;
mouseDragRef.pressStartY = e.clientY;
mouseDragRef.lastX = e.clientX;
mouseDragRef.lastY = e.clientY;
mouseDragRef.startTime = Date.now();
mouseDragRef.hasDragged = false;
try {
domEl.setPointerCapture(e.pointerId);
}
catch (_) { }
}
else if (e.pointerType === "touch" || e.pointerType === "pen") {
touchTapRef.pointerId = e.pointerId;
touchTapRef.pressStartX = e.clientX;
touchTapRef.pressStartY = e.clientY;
touchTapRef.startTime = Date.now();
}
};
const handleCanvasPointerMove = (e: PointerEvent) => {
if (isMenuOpenRef.current)
return;
if (e.pointerType === "mouse" && mouseDragRef.isDown && document.pointerLockElement !== domEl) {
const deltaX = e.clientX - mouseDragRef.lastX;
const deltaY = e.clientY - mouseDragRef.lastY;
yaw -= deltaX * 0.0025;
pitch -= deltaY * 0.0025;
pitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, pitch));
mouseDragRef.lastX = e.clientX;
mouseDragRef.lastY = e.clientY;
const totalDist = Math.hypot(e.clientX - mouseDragRef.pressStartX, e.clientY - mouseDragRef.pressStartY);
if (totalDist > 10) {
mouseDragRef.hasDragged = true;
}
}
};
const handleCanvasPointerUp = (e: PointerEvent) => {
if (e.pointerType === "mouse" && mouseDragRef.isDown && document.pointerLockElement !== domEl) {
mouseDragRef.isDown = false;
const totalDist = Math.hypot(e.clientX - mouseDragRef.pressStartX, e.clientY - mouseDragRef.pressStartY);
const duration = Date.now() - mouseDragRef.startTime;
if (!mouseDragRef.hasDragged && totalDist <= 10 && duration <= 500) {
if (!pointerLockFailedRef.current) {
requestCapture();
}
else {
const rect = domEl.getBoundingClientRect();
const ndcX = (2 * (e.clientX - rect.left)) / rect.width - 1;
const ndcY = 1 - (2 * (e.clientY - rect.top)) / rect.height;
performPick(ndcX, ndcY);
}
}
}
else if ((e.pointerType === "touch" || e.pointerType === "pen") && e.pointerId === touchTapRef.pointerId) {
const dist = Math.hypot(e.clientX - touchTapRef.pressStartX, e.clientY - touchTapRef.pressStartY);
const duration = Date.now() - touchTapRef.startTime;
touchTapRef.pointerId = null;
if (dist <= 10 && duration <= 500) {
const rect = domEl.getBoundingClientRect();
const ndcX = (2 * (e.clientX - rect.left)) / rect.width - 1;
const ndcY = 1 - (2 * (e.clientY - rect.top)) / rect.height;
performPick(ndcX, ndcY);
}
}
};
const handleCanvasPointerCancel = (e: PointerEvent) => {
if (e.pointerType === "mouse") {
mouseDragRef.isDown = false;
}
else if (e.pointerType === "touch" || e.pointerType === "pen") {
if (e.pointerId === touchTapRef.pointerId) {
touchTapRef.pointerId = null;
}
}
};
const handleLockedMouseMove = (e: MouseEvent) => {
if (isMenuOpenRef.current)
return;
if (document.pointerLockElement === domEl) {
yaw -= e.movementX * 0.0025;
pitch -= e.movementY * 0.0025;
pitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, pitch));
}
};
domEl.addEventListener("pointerdown", handleCanvasPointerDown);
domEl.addEventListener("pointermove", handleCanvasPointerMove);
domEl.addEventListener("pointerup", handleCanvasPointerUp);
domEl.addEventListener("pointercancel", handleCanvasPointerCancel);
domEl.addEventListener("lostpointercapture", handleCanvasPointerCancel);
document.addEventListener("mousemove", handleLockedMouseMove);
let animId: number;
let lastTime = performance.now();
const handleVisibilityReset = () => {
lastTime = performance.now();
};
document.addEventListener("visibilitychange", handleVisibilityReset);
window.addEventListener("focus", handleVisibilityReset);
const animate = () => {
const now = performance.now();
const delta = Math.min((now - lastTime) / 1000, 0.1);
lastTime = now;
animId = requestAnimationFrame(animate);
if (isMenuOpenRef.current) {
worldEffects?.update(delta, camera.position);
skyCycle.update(delta, camera.position);
lastTime = performance.now();
renderer.render(scene, camera);
return;
}
const ctrl = controlsRef.current;
if (ctrl.gyroEnabled) {
yaw = THREE.MathUtils.degToRad(ctrl.gyroAlpha);
pitch = THREE.MathUtils.degToRad(ctrl.gyroBeta - 45);
pitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, pitch));
}
const frameFactor = delta * 60;
if (ctrl.moveX !== 0) {
yaw -= ctrl.moveX * 0.04 * frameFactor;
}
if (ctrl.moveY !== 0) {
pitch -= ctrl.moveY * 0.03 * frameFactor;
pitch = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, pitch));
}
const euler = new THREE.Euler(pitch, yaw, 0, "YXZ");
camera.quaternion.setFromEuler(euler);
const forwardVec = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
forwardVec.y = 0;
forwardVec.normalize();
const rightVec = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
rightVec.y = 0;
rightVec.normalize();
const candidatePos = camera.position.clone();
const moveSpeed = 7.2;
const travel = new THREE.Vector3();
travel.addScaledVector(forwardVec, Number(ctrl.forward) - Number(ctrl.backward));
travel.addScaledVector(rightVec, Number(ctrl.right) - Number(ctrl.left));
if (travel.lengthSq() > 0) {
candidatePos.addScaledVector(travel.normalize(), moveSpeed * delta);
}
if (importedWorld?.isReady()) {
importedWorld.update(delta, camera.position);
camera.position.copy(importedWorld.movePlayer(camera.position, candidatePos));
cameraPosRef.current = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
}
worldEffects?.update(delta, camera.position);
skyCycle.update(delta, camera.position);
renderer.render(scene, camera);
};
animate();
const handleResize = () => {
if (!containerRef.current)
return;
const w = containerRef.current.clientWidth;
const h = containerRef.current.clientHeight;
camera.aspect = w / h;
camera.updateProjectionMatrix();
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1.25 : 2));
renderer.setSize(Math.max(1, w), Math.max(1, h));
};
window.addEventListener("resize", handleResize);
return () => {
disposed = true;
cancelAnimationFrame(animId);
unlock();
requestCaptureRef.current = () => { };
worldEffects?.dispose();
worldEffects = null;
importedWorld?.dispose();
areaLoader.cancel();
skyCycle.dispose();
renderer.dispose();
document.removeEventListener("visibilitychange", handleVisibilityReset);
window.removeEventListener("focus", handleVisibilityReset);
document.removeEventListener("pointerlockchange", handlePointerLockChange);
document.removeEventListener("pointerlockerror", handlePointerLockError);
document.removeEventListener("mousemove", handleLockedMouseMove);
domEl.removeEventListener("pointerdown", handleCanvasPointerDown);
domEl.removeEventListener("pointermove", handleCanvasPointerMove);
domEl.removeEventListener("pointerup", handleCanvasPointerUp);
domEl.removeEventListener("pointercancel", handleCanvasPointerCancel);
domEl.removeEventListener("lostpointercapture", handleCanvasPointerCancel);
window.removeEventListener("resize", handleResize);
if (container.contains(renderer.domElement)) {
container.removeChild(renderer.domElement);
}
};
}, [loadAttempt]);
return (<div ref={containerRef} className="w-full h-full relative cursor-grab active:cursor-grabbing">
{loadProgress && loadProgress.status !== 'completed' && <div className="absolute top-4 left-4 z-30 bg-stone-900/95 p-3 rounded-xl text-xs text-amber-300 max-w-sm">
{loadProgress.status === 'error' ? <><p>World loading failed: {loadProgress.error}</p><button onClick={() => setLoadAttempt(n => n + 1)}>Retry loading</button></> : <p>Loading areas {loadProgress.loaded}/{loadProgress.total || 'pending'}: {loadProgress.currentAreaId || 'manifest'}</p>}
</div>}
{worldCounts && <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-[10px] text-emerald-300 bg-stone-950/80 px-2 rounded pointer-events-none">GLB World Active · Bins: {worldCounts.bins} · Doors: {worldCounts.doors} · Colliders: {worldCounts.colliders} · Triggers: {worldCounts.triggers} · Actions: {worldCounts.actions}</div>}
{isPointerLocked && !isMenuOpen && (<>
<div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
<div className="w-2.5 h-2.5 rounded-full border-2 border-amber-400 bg-amber-400/40 shadow-sm shadow-amber-500"/>
</div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-stone-900/80 backdrop-blur-md border border-stone-800 px-3 py-1 rounded-xl text-[11px] font-mono text-amber-300 shadow-md">
<span>Mouse captured • Press ESC to release</span>
</div>
</>)}
{!isMobile && !isPointerLocked && !isMenuOpen && (<div className="absolute top-4 right-4 z-30 flex flex-col items-end gap-2">
<button type="button" onClick={() => {
requestCaptureRef.current();
}} className="pointer-events-auto px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer border border-amber-300">
Capture Mouse to Look
</button>
{pointerLockFailed && (<div className="bg-stone-900/90 backdrop-blur-md border border-amber-500/50 px-3 py-1.5 rounded-xl text-[11px] text-amber-300/90 shadow-md max-w-xs text-right space-y-0.5 pointer-events-auto">
<p className="font-semibold text-amber-400">
{lockErrorMsg || "PointerLockError: Lock request failed / denied"}
</p>
<p className="text-[10px] text-stone-400">
Click & drag canvas to look • Click objects to inspect
</p>
</div>)}
</div>)}
</div>);
};