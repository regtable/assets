import * as THREE from "three";
import { generateImage, generateSong } from "@flowmusic/sdk";

interface HotelRooms {
  group: THREE.Object3D;
  ready: Promise<unknown>;
  readonly modalOpen: boolean;
  update(delta: number, player: THREE.Vector3, muted: boolean): void;
  handleClick(object: THREE.Object3D): boolean;
  checkCollision(candidate: THREE.Vector3, current: THREE.Vector3, radius: number): boolean;
  dispose(): void;
}

const MANIFEST = "https://raw.githubusercontent.com/regtable/assets/main/retro-road/sunset-76/upper-rooms/manifest.json";

export function createHotel76RoomsLoader(scene: THREE.Scene) {
  let instance: HotelRooms | null = null, disposed = false;
  const abort = new AbortController();
  const timeout = setTimeout(() => abort.abort(), 20000);
  const ready = (async () => {
    let pending: HotelRooms | null = null;
    try {
      const response = await fetch(`${MANIFEST}?t=${Date.now()}`, { cache: "no-store", signal: abort.signal });
      if (!response.ok) throw new Error(`Hotel manifest HTTP ${response.status}`);
      const manifest = await response.json();
      const url = new URL(manifest.moduleUrl);
      if (url.protocol !== "https:" || !["cdn.jsdelivr.net", "raw.githubusercontent.com"].includes(url.hostname)) throw new Error("Invalid hotel module URL");
      const module = await import(/* @vite-ignore */ url.href);
      if (disposed) return;
      pending = module.createHotel76Upstairs({
        services: { generateImage, generateSong },
        onModalChange(open: boolean) { if (open && document.pointerLockElement) document.exitPointerLock(); }
      });
      await pending!.ready;
      if (disposed) { pending!.dispose(); return; }
      instance = pending; scene.add(instance!.group);
    } catch (error) { pending?.dispose(); if (!disposed) console.warn("Hotel room assets unavailable; existing hotel stays usable", error); }
    finally { clearTimeout(timeout); }
  })();
  return {
    ready,
    get modalOpen() { return instance?.modalOpen ?? false; },
    update(delta: number, player: THREE.Vector3, muted: boolean) { instance?.update(delta, player, muted); },
    handleClick(object: THREE.Object3D) { return instance?.handleClick(object) ?? false; },
    checkCollision(candidate: THREE.Vector3, current: THREE.Vector3, radius: number) { return instance?.checkCollision(candidate, current, radius) ?? false; },
    dispose() { if (disposed) return; disposed = true; abort.abort(); clearTimeout(timeout); instance?.dispose(); instance = null; }
  };
}
