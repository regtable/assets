import * as THREE from "three";
import { LoadedAreaResult } from "./areaManifestLoader";
import { BinCategory } from "./types";
import { BINS_DATA } from "./binsData";

export interface WorldCallbacks {
 onSelectBin?: (bin: BinCategory) => void;
 onOpenNicheDesk?: () => void;
 onOpenPosterPress?: () => void;
 onOpenRadio?: () => void;
}

export interface PickResult {
 hit: boolean;
 distance?: number;
 actionType?: "bin" | "door" | "niche_desk" | "poster_press" | "radio" | "hinge";
 id?: string;
 binData?: BinCategory;
}

export interface ColliderData {
 mesh: THREE.Mesh;
 localBox: THREE.Box3;
 isDoor: boolean;
 doorId?: string;
}

export interface TriggerData {
 mesh: THREE.Mesh;
 localBox: THREE.Box3;
 id: string;
 role: string;
}

export interface DoorData {
 id: string;
 pivotMesh: THREE.Object3D;
 action?: THREE.AnimationAction;
 mixer?: THREE.AnimationMixer;
 isHingeClip: boolean;
 isOpen: boolean;
 targetProgress: number;
 currentProgress: number;
 openAngle: number;
 closedTime: number;
 openTime: number;
}

export interface RegistryCounts {
 bins: number;
 doors: number;
 colliders: number;
 triggers: number;
 actions: number;
}

export class ImportedWorld {
 private loadedAreas: LoadedAreaResult[] = [];
 private callbacks: WorldCallbacks;
 private binsMap = new Map<
 THREE.Object3D,
 {
 binId: string;
 binData: BinCategory;
 }
 >();
 private doorsMap = new Map<string, DoorData>();
 private doorMeshToData = new Map<THREE.Object3D, DoorData>();
 private actionsMap = new Map<THREE.Object3D, "niche_desk" | "poster_press" | "radio">();
 private colliders: ColliderData[] = [];
 private triggers: TriggerData[] = [];
 private mixers: THREE.AnimationMixer[] = [];
 private spawnPosition: THREE.Vector3 | null = null;
 private raycaster = new THREE.Raycaster();
 private isWorldReady = false;

 constructor(loadedAreas: LoadedAreaResult[], callbacks: WorldCallbacks = {}) {
 this.loadedAreas = loadedAreas;
 this.callbacks = callbacks;
 this.initWorld();
 }

 private initWorld(): void {
 let binCount = 0;
 let doorCount = 0;
 let colliderCount = 0;
 let triggerCount = 0;
 let actionCount = 0;

 for (const area of this.loadedAreas) {
 area.group.updateMatrixWorld(true);

 let areaMixer: THREE.AnimationMixer | null = null;
 if (area.animationClips.length > 0) {
 areaMixer = new THREE.AnimationMixer(area.group);
 this.mixers.push(areaMixer);
 }

 area.group.traverse((node) => {
 const userData = node.userData || {};
 const nodeName = node.name || "";
 const normalizedNodeName = nodeName.replace(/[ _-]+/g, " ").toLowerCase();

 if (userData.role === "record_bin") {
 let binId = userData.binId || nodeName;
 let validParsedBin: BinCategory | null = null;
 let rawBinObj: any = null;

 if (typeof userData.bin === "string") {
 try {
 rawBinObj = JSON.parse(userData.bin);
 } catch (_) {}
 } else if (typeof userData.bin === "object" && userData.bin !== null) {
 rawBinObj = userData.bin;
 }

 if (
 rawBinObj &&
 typeof rawBinObj.id === "string" &&
 typeof rawBinObj.name === "string" &&
 (rawBinObj.type === "era" || rawBinObj.type === "genre") &&
 typeof rawBinObj.color === "string" &&
 typeof rawBinObj.description === "string" &&
 Array.isArray(rawBinObj.tags)
 ) {
 validParsedBin = {
 id: rawBinObj.id,
 name: rawBinObj.name,
 type: rawBinObj.type,
 color: rawBinObj.color,
 bannerImageUrl: rawBinObj.bannerImageUrl,
 description: rawBinObj.description,
 yearRange:
 Array.isArray(rawBinObj.yearRange) && rawBinObj.yearRange.length === 2
 ? rawBinObj.yearRange
 : undefined,
 tags: rawBinObj.tags
 };
 binId = validParsedBin.id;
 }

 let matchedBin: BinCategory | undefined = validParsedBin || undefined;

 if (!matchedBin) {
 matchedBin = BINS_DATA.find(
 (b) => b.id === binId || b.name.toLowerCase() === String(binId).toLowerCase()
 );
 }

 if (matchedBin) {
 this.binsMap.set(node, { binId: String(binId), binData: matchedBin });
 binCount++;
 }
 }

 const isInteractiveRole = userData.role === "interactive" || userData.role === "action";
 const actionProp = userData.action || userData.actionType || userData.interactionId;

 let actionType: "niche_desk" | "poster_press" | "radio" | null = null;

 if (
 (isInteractiveRole && actionProp === "niche_desk") ||
 /niche_desk|desk_clerk/i.test(nodeName)
 ) {
 actionType = "niche_desk";
 } else if (
 (isInteractiveRole && actionProp === "poster_press") ||
 /poster_press|poster_clerk/i.test(nodeName)
 ) {
 actionType = "poster_press";
 } else if (
 (isInteractiveRole && actionProp === "radio") ||
 normalizedNodeName === "staff listening station" ||
 normalizedNodeName.includes("staff listening station") ||
 (node.parent &&
 node.parent.name.replace(/[ _-]+/g, " ").toLowerCase() === "staff listening station") ||
 /radio|victrola/i.test(nodeName)
 ) {
 actionType = "radio";
 }

 if (actionType) {
 this.actionsMap.set(node, actionType);
 actionCount++;
 }

 const isStoreDoor = userData.role === "door" || /Pivot__open|door_pivot/i.test(nodeName);
 const isBackroomHinge = /__HINGE|Hinge_/i.test(nodeName);

 if (isStoreDoor || isBackroomHinge) {
 const doorId = userData.interactionId || userData.id || nodeName || `door_${doorCount}`;
 const openAngle =
 typeof userData.openAngle === "number" && Number.isFinite(userData.openAngle)
 ? userData.openAngle
 : Math.PI / 2;

 let matchingClip: THREE.AnimationClip | undefined;
 if (area.animationClips.length > 0) {
 matchingClip = area.animationClips.find((c) => {
 return (
 c.name === userData.animationClip ||
 c.name === nodeName ||
 c.name.startsWith(nodeName + " ") ||
 c.name === nodeName + "__open" ||
 c.name.startsWith(nodeName + "__open")
 );
 });
 }

 let action: THREE.AnimationAction | undefined;
 let closedTime = 0;
 let openTime = 1.0;

 if (matchingClip && areaMixer) {
 action = areaMixer.clipAction(matchingClip);
 action.setLoop(THREE.LoopOnce, 1);
 action.clampWhenFinished = true;

 if (isBackroomHinge) {
 const frame35Time = 35 / 30;
 const frame85Time = 85 / 30;
 closedTime = Math.min(frame35Time, matchingClip.duration);
 openTime = Math.min(frame85Time, matchingClip.duration);
 } else {
 closedTime = 0;
 openTime = matchingClip.duration;
 }

 action.time = closedTime;
 action.play();
 action.paused = true;
 }

 const doorData: DoorData = {
 id: String(doorId),
 pivotMesh: node,
 action,
 mixer: areaMixer || undefined,
 isHingeClip: isBackroomHinge,
 isOpen: false,
 targetProgress: 0,
 currentProgress: 0,
 openAngle,
 closedTime,
 openTime
 };

 this.doorsMap.set(doorData.id, doorData);
 this.doorMeshToData.set(node, doorData);

 node.traverse((child) => {
 this.doorMeshToData.set(child, doorData);
 });

 doorCount++;
 }

 if (
 userData.role === "collider" ||
 userData.shape === "box" ||
 /_collider|_col/i.test(nodeName)
 ) {
 if ((node as THREE.Mesh).isMesh) {
 const mesh = node as THREE.Mesh;
 if (!mesh.geometry.boundingBox) {
 mesh.geometry.computeBoundingBox();
 }
 if (userData.renderCollider !== true) {
 mesh.visible = false;
 }
 if (mesh.geometry.boundingBox) {
 this.colliders.push({
 mesh,
 localBox: mesh.geometry.boundingBox.clone(),
 isDoor: isStoreDoor || isBackroomHinge,
 doorId: userData.doorId || userData.interactionId || nodeName
 });
 colliderCount++;
 }
 }
 }

 if (
 userData.role === "trigger" ||
 userData.role === "shop_volume" ||
 /_trigger|_vol/i.test(nodeName)
 ) {
 if ((node as THREE.Mesh).isMesh) {
 const mesh = node as THREE.Mesh;
 mesh.visible = false;
 if (!mesh.geometry.boundingBox) {
 mesh.geometry.computeBoundingBox();
 }
 if (mesh.geometry.boundingBox) {
 this.triggers.push({
 mesh,
 localBox: mesh.geometry.boundingBox.clone(),
 id: userData.id || nodeName,
 role: String(userData.role)
 });
 triggerCount++;
 }
 }
 }

 if (userData.role === "sound_source") {
 if ((node as THREE.Mesh).isMesh) {
 (node as THREE.Mesh).visible = false;
 }
 }

 if (userData.role === "spawn" || /spawn_point|player_spawn/i.test(nodeName)) {
 if ((node as THREE.Mesh).isMesh) {
 (node as THREE.Mesh).visible = false;
 }
 this.spawnPosition = node.getWorldPosition(new THREE.Vector3());
 }
 });

 if (areaMixer) {
 areaMixer.update(0);
 }
 }

 for (const area of this.loadedAreas) {
 area.group.traverse((node) => {
 if (node.userData.role === "trigger" && node.userData.action === "door") {
 const door = this.doorsMap.get(node.userData.interactionId);
 if (door) this.doorMeshToData.set(node, door);
 }
 });
 }

 this.isWorldReady = true;
 }

 public isReady(): boolean {
 return this.isWorldReady;
 }

 public getSpawnPosition(): THREE.Vector3 | null {
 return this.spawnPosition ? this.spawnPosition.clone() : null;
 }

 public getRegistryCounts(): RegistryCounts {
 return {
 bins: this.binsMap.size,
 doors: this.doorsMap.size,
 colliders: this.colliders.length,
 triggers: this.triggers.length,
 actions: this.actionsMap.size
 };
 }

 public update(dt: number, playerPosition?: THREE.Vector3): void {
 if (!this.isWorldReady) return;

 for (const door of this.doorsMap.values()) {
 const autoClose = door.pivotMesh.userData.autoCloseDistance;
 if (
 playerPosition &&
 typeof autoClose === "number" &&
 autoClose > 0 &&
 door.isOpen &&
 door.pivotMesh.getWorldPosition(new THREE.Vector3()).distanceTo(playerPosition) > autoClose
 ) {
 door.isOpen = false;
 door.targetProgress = 0;
 }

 if (Math.abs(door.currentProgress - door.targetProgress) > 0.001) {
 const step = dt * 2.5;
 if (door.targetProgress > door.currentProgress) {
 door.currentProgress = Math.min(1.0, door.currentProgress + step);
 } else {
 door.currentProgress = Math.max(0.0, door.currentProgress - step);
 }

 if (door.action && door.mixer) {
 const currentTime = THREE.MathUtils.lerp(
 door.closedTime,
 door.openTime,
 door.currentProgress
 );
 door.action.time = currentTime;
 door.mixer.update(0);
 } else {
 door.pivotMesh.rotation.y = THREE.MathUtils.lerp(0, door.openAngle, door.currentProgress);
 }

 door.pivotMesh.updateMatrixWorld(true);
 }
 }
 }

 private checkCollisionAt(pos: THREE.Vector3): boolean {
 const centreWorld = pos.clone();
 centreWorld.y += -1.60 + 0.85;
 const radiusSq = 0.85 * 0.85 - 0.0001;
 const closestLocal = new THREE.Vector3();

 for (const col of this.colliders) {
 const threshold = col.mesh.userData.disableWhenDoorProgressAbove;
 const door = col.doorId ? this.doorsMap.get(col.doorId) : undefined;
 if (door && typeof threshold === "number" && door.currentProgress >= threshold) continue;

 col.mesh.updateMatrixWorld(true);
 const inverseWorld = col.mesh.matrixWorld.clone().invert();
 const centreLocal = centreWorld.clone().applyMatrix4(inverseWorld);

 col.localBox.clampPoint(centreLocal, closestLocal);
 const closestWorld = closestLocal.clone().applyMatrix4(col.mesh.matrixWorld);

 if (centreWorld.distanceToSquared(closestWorld) < radiusSq) {
 return true;
 }
 }
 return false;
 }

 public movePlayer(from: THREE.Vector3, to: THREE.Vector3): THREE.Vector3 {
 const delta = to.clone().sub(from);
 const dist = delta.length();
 if (dist < 0.0001) return to.clone();

 const stepSize = 0.15;
 const steps = Math.ceil(dist / stepSize);
 const stepVec = delta.clone().divideScalar(steps);
 const curr = from.clone();

 for (let i = 0; i < steps; i++) {
 const testX = curr.clone();
 testX.x += stepVec.x;
 if (!this.checkCollisionAt(testX)) {
 curr.x = testX.x;
 }

 const testZ = curr.clone();
 testZ.z += stepVec.z;
 if (!this.checkCollisionAt(testZ)) {
 curr.z = testZ.z;
 }
 }

 return curr;
 }

 public pick(ndc: THREE.Vector2, camera: THREE.Camera): PickResult {
 this.raycaster.setFromCamera(ndc, camera);

 const rootGroups = this.loadedAreas.map((a) => a.group);
 const intersects = this.raycaster.intersectObjects(rootGroups, true);

 const validHits = intersects.filter((hit) => {
 if (hit.distance > 6.0) return false;
 let curr: THREE.Object3D | null = hit.object;
 while (curr) {
 const doorTrigger =
 curr === hit.object &&
 curr.userData.role === "trigger" &&
 this.doorMeshToData.has(curr);
 if (!curr.visible && !doorTrigger) return false;
 curr = curr.parent;
 }
 return true;
 });

 if (validHits.length === 0) {
 return { hit: false };
 }

 const firstHit = validHits[0];
 let curr: THREE.Object3D | null = firstHit.object;

 while (curr && curr !== camera.parent) {
 if (this.binsMap.has(curr)) {
 const binInfo = this.binsMap.get(curr)!;
 if (this.callbacks.onSelectBin) {
 this.callbacks.onSelectBin(binInfo.binData);
 }
 return {
 hit: true,
 distance: firstHit.distance,
 actionType: "bin",
 id: binInfo.binId,
 binData: binInfo.binData
 };
 }

 if (this.doorMeshToData.has(curr)) {
 const door = this.doorMeshToData.get(curr)!;
 door.isOpen = !door.isOpen;
 door.targetProgress = door.isOpen ? 1.0 : 0.0;
 return {
 hit: true,
 distance: firstHit.distance,
 actionType: door.isHingeClip ? "hinge" : "door",
 id: door.id
 };
 }

 if (this.actionsMap.has(curr)) {
 const actionType = this.actionsMap.get(curr)!;
 if (actionType === "niche_desk" && this.callbacks.onOpenNicheDesk) {
 this.callbacks.onOpenNicheDesk();
 } else if (actionType === "poster_press" && this.callbacks.onOpenPosterPress) {
 this.callbacks.onOpenPosterPress();
 } else if (actionType === "radio" && this.callbacks.onOpenRadio) {
 this.callbacks.onOpenRadio();
 }
 return {
 hit: true,
 distance: firstHit.distance,
 actionType,
 id: curr.name
 };
 }

 curr = curr.parent;
 }

 return { hit: true, distance: firstHit.distance };
 }

 public dispose(): void {
 for (const mixer of this.mixers) {
 mixer.stopAllAction();
 mixer.uncacheRoot(mixer.getRoot());
 }
 this.mixers = [];
 this.binsMap.clear();
 this.doorsMap.clear();
 this.doorMeshToData.clear();
 this.actionsMap.clear();
 this.colliders = [];
 this.triggers = [];
 this.loadedAreas = [];
 this.isWorldReady = false;
 }
}