import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export interface AreaManifestItem {
 id: string;
 url: string;
 position?: [number, number, number];
 rotation?: [number, number, number];
 scale?: [number, number, number];
 enabled?: boolean;
}

export interface AreaManifest {
 version: number;
 areas: AreaManifestItem[];
}

export interface LoadedAreaResult {
 id: string;
 group: THREE.Group;
 animationClips: THREE.AnimationClip[];
}

export interface LoadAreasProgress {
 total: number;
 loaded: number;
 currentAreaId?: string;
 status: "fetching_manifest" | "loading_assets" | "completed" | "error";
 error?: string;
}

export class AreaManifestLoader {
 private isCancelled = false;
 private loadedGroups: THREE.Group[] = [];

 public cancel(): void {
 this.isCancelled = true;
 this.dispose();
 }

 public dispose(): void {
 const geometries = new Set<THREE.BufferGeometry>();
 const materials = new Set<THREE.Material>();
 const textures = new Set<THREE.Texture>();

 for (const group of this.loadedGroups) {
 group.traverse((obj) => {
 if ((obj as THREE.Mesh).isMesh) {
 const mesh = obj as THREE.Mesh;
 if (mesh.geometry) geometries.add(mesh.geometry);
 if (mesh.material) {
 const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
 for (const mat of mats) {
 materials.add(mat);
 for (const key of Object.keys(mat)) {
 const prop = (mat as any)[key];
 if (prop && prop.isTexture) {
 textures.add(prop as THREE.Texture);
 }
 }
 }
 }
 }
 });
 if (group.parent) {
 group.parent.remove(group);
 }
 }

 for (const tex of textures) tex.dispose();
 for (const mat of materials) mat.dispose();
 for (const geo of geometries) geo.dispose();

 this.loadedGroups = [];
 }

 public async loadManifest(
 manifestUrl = "https://raw.githubusercontent.com/regtable/assets/main/retro-road/areas.json",
 onProgress?: (progress: LoadAreasProgress) => void
 ): Promise<LoadedAreaResult[]> {
 if (this.isCancelled) return [];

 if (onProgress) {
 onProgress({
 total: 0,
 loaded: 0,
 status: "fetching_manifest"
 });
 }

 const response = await fetch(manifestUrl, { cache: "no-store" });
 if (!response.ok) {
 const errMessage = `Failed to fetch area manifest from ${manifestUrl}: ${response.status} ${response.statusText}`;
 if (onProgress) {
 onProgress({
 total: 0,
 loaded: 0,
 status: "error",
 error: errMessage
 });
 }
 throw new Error(errMessage);
 }

 const json = (await response.json()) as AreaManifest;
 if (json.version !== 1 || !Array.isArray(json.areas)) {
 const errMessage = `Invalid manifest schema or version at ${manifestUrl}`;
 if (onProgress) {
 onProgress({
 total: 0,
 loaded: 0,
 status: "error",
 error: errMessage
 });
 }
 throw new Error(errMessage);
 }

 const seenIds = new Set<string>();
 const validAreas: {
 id: string;
 resolvedUrl: string;
 position: [number, number, number];
 rotation: [number, number, number];
 scale: [number, number, number];
 }[] = [];

 for (let i = 0; i < json.areas.length; i++) {
 const item = json.areas[i];
 if (item.enabled === false) continue;

 if (!item.id || typeof item.id !== "string" || item.id.trim() === "") {
 throw new Error(`Area manifest item at index ${i} is missing a valid id.`);
 }

 const trimmedId = item.id.trim();
 if (seenIds.has(trimmedId)) {
 throw new Error(`Duplicate area ID found in manifest: "${trimmedId}"`);
 }
 seenIds.add(trimmedId);

 if (!item.url || typeof item.url !== "string") {
 throw new Error(`Area "${trimmedId}" is missing a valid url string.`);
 }

 const resolvedUrl = new URL(item.url, manifestUrl).href;

 const validateVector3 = (
 vec: any,
 defaultVec: [number, number, number],
 name: string
 ): [number, number, number] => {
 if (vec === undefined || vec === null) return defaultVec;
 if (
 !Array.isArray(vec) ||
 vec.length !== 3 ||
 !vec.every((n) => typeof n === "number" && Number.isFinite(n))
 ) {
 throw new Error(
 `Area "${trimmedId}" has invalid ${name}: expected 3 finite numbers, got ${JSON.stringify(vec)}`
 );
 }
 return [vec[0], vec[1], vec[2]];
 };

 const position = validateVector3(item.position, [0, 0, 0], "position");
 const rotation = validateVector3(item.rotation, [0, 0, 0], "rotation");
 const scale = validateVector3(item.scale, [1, 1, 1], "scale");

 validAreas.push({
 id: trimmedId,
 resolvedUrl,
 position,
 rotation,
 scale
 });
 }

 if (this.isCancelled) {
 return [];
 }

 const loader = new GLTFLoader();
 const results: LoadedAreaResult[] = [];
 const total = validAreas.length;
 let loaded = 0;

 if (onProgress) {
 onProgress({
 total,
 loaded: 0,
 status: "loading_assets"
 });
 }

 for (const area of validAreas) {
 if (this.isCancelled) {
 this.dispose();
 return [];
 }

 if (onProgress) {
 onProgress({
 total,
 loaded,
 currentAreaId: area.id,
 status: "loading_assets"
 });
 }

 try {
 const gltf = await loader.loadAsync(area.resolvedUrl);
 if (this.isCancelled) {
 const tempGroup = new THREE.Group();
 tempGroup.add(gltf.scene);
 this.loadedGroups.push(tempGroup);
 this.dispose();
 return [];
 }

 const group = new THREE.Group();
 group.name = `AreaGroup_${area.id}`;
 group.position.set(area.position[0], area.position[1], area.position[2]);
 group.rotation.set(area.rotation[0], area.rotation[1], area.rotation[2]);
 group.scale.set(area.scale[0], area.scale[1], area.scale[2]);
 group.add(gltf.scene);

 this.loadedGroups.push(group);
 results.push({
 id: area.id,
 group,
 animationClips: gltf.animations || []
 });

 loaded++;
 if (onProgress) {
 onProgress({
 total,
 loaded,
 currentAreaId: area.id,
 status: "loading_assets"
 });
 }
 } catch (err: any) {
 const errMessage = `Failed to load GLB model for area "${area.id}" from ${
 area.resolvedUrl
 }: ${err?.message || String(err)}`;
 if (onProgress) {
 onProgress({
 total,
 loaded,
 currentAreaId: area.id,
 status: "error",
 error: errMessage
 });
 }
 this.dispose();
 throw new Error(errMessage);
 }
 }

 if (onProgress) {
 onProgress({
 total,
 loaded: total,
 status: "completed"
 });
 }

 return results;
 }
}