import type { Object3D, BufferGeometry } from 'three';
export interface BatchingResult {
  stats: {sourceMeshes:number;mergedMeshes:number;batches:number;trianglesBefore:number;trianglesAfter:number};
  releaseSources(source:Map<string,BufferGeometry>):void;
  dispose():void;
}
export function batchStaticMeshes(three:typeof import('three'),root:Object3D,options?:{cellSize?:number;exclude?:ReadonlySet<unknown>;maxVertices?:number}):BatchingResult;
