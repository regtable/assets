import * as THREE from "three";
import { LoadedAreaResult } from "./areaManifestLoader";

type Room = { min: THREE.Vector3; max: THREE.Vector3; strength: number };
type Emitter = { source: THREE.Object3D; light: THREE.PointLight | THREE.SpotLight };

// Diffuse room irradiance approximation, not path-traced GI. It is fixed in world
// space and derives its energy/colour from the installed lamps, never the camera.
export function installRoomBounce(areas: LoadedAreaResult[], fixtures: Emitter[]): () => void {
 const rooms: Room[] = [];
 for(const area of areas){
  let custom=false;
  area.group.traverse(n=>{
   if(n.userData.role!=='light_volume')return;
   const box=new THREE.Box3().setFromObject(n);if(box.isEmpty())return;
   rooms.push({min:box.min,max:box.max,strength:typeof n.userData.bounceStrength==='number'?Math.max(0,n.userData.bounceStrength):.18});
   n.visible=false;custom=true;
  });
  if(custom)continue;
  const boxes: number[][] = area.id==='store' ? [[-35,-.15,-36,35,12.2,40],[-32,-.15,-56,-12,12.2,-36]] : area.id==='backroom' ? [[12,-.15,-56,32,12.2,-36]] : ['garage','crate_digger_record_shop'].includes(area.id) ? [[-93,-.15,0,-53,12.2,40]] : [];
  for(const b of boxes)rooms.push({min:new THREE.Vector3(...b.slice(0,3) as [number,number,number]),max:new THREE.Vector3(...b.slice(3) as [number,number,number]),strength:.18});
 }
 if(!rooms.length)return()=>{};
 const energy=rooms.map(()=>new THREE.Color(0,0,0));
 for(const f of fixtures){
  const centre=new THREE.Box3().setFromObject(f.source).getCenter(new THREE.Vector3());
  rooms.forEach((r,i)=>{
   if(!new THREE.Box3(r.min,r.max).containsPoint(centre))return;
   const area=Math.max(1,(r.max.x-r.min.x)*(r.max.z-r.min.z));
   const solidAngle=(f.light as THREE.SpotLight).isSpotLight?2*Math.PI*(1-Math.cos((f.light as THREE.SpotLight).angle)):4*Math.PI;
   energy[i].add(f.light.color.clone().multiplyScalar(f.light.intensity*solidAngle*r.strength/area));
  });
 }
 const materials=new Set<THREE.MeshStandardMaterial>();
 for(const area of areas)area.group.traverse(n=>{const mesh=n as THREE.Mesh;if(mesh.isMesh)for(const m of Array.isArray(mesh.material)?mesh.material:[mesh.material])if((m as THREE.MeshStandardMaterial).isMeshStandardMaterial)materials.add(m as THREE.MeshStandardMaterial);});
 const undo: (()=>void)[]=[];
 for(const material of materials){
  const previous=material.onBeforeCompile,previousKey=material.customProgramCacheKey;
  material.onBeforeCompile=(shader,renderer)=>{
   previous.call(material,shader,renderer);
   shader.uniforms.roomMin={value:rooms.map(r=>r.min)};shader.uniforms.roomMax={value:rooms.map(r=>r.max)};shader.uniforms.roomEnergy={value:energy};
   shader.vertexShader='varying vec3 vRoomWorldPosition;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <project_vertex>',`#include <project_vertex>
    vec4 roomPosition=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     roomPosition=instanceMatrix*roomPosition;
    #endif
    vRoomWorldPosition=(modelMatrix*roomPosition).xyz;`);
   shader.fragmentShader=`varying vec3 vRoomWorldPosition;
    uniform vec3 roomMin[${rooms.length}];uniform vec3 roomMax[${rooms.length}];uniform vec3 roomEnergy[${rooms.length}];\n`+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <lights_fragment_begin>',`#include <lights_fragment_begin>
    #if defined(RE_IndirectDiffuse)
     vec3 roomWorldNormal=inverseTransformDirection(geometryNormal,viewMatrix);
     for(int roomIndex=0;roomIndex<${rooms.length};roomIndex++){
      vec3 edge=min(vRoomWorldPosition-roomMin[roomIndex],roomMax[roomIndex]-vRoomWorldPosition);
      if(min(min(edge.x,edge.y),edge.z)>=0.0){
       vec3 inward=(roomMin[roomIndex]+roomMax[roomIndex])*0.5-vRoomWorldPosition;
       bool outward=min(min(edge.x,edge.y),edge.z)<0.4 && dot(roomWorldNormal,inward)<0.0;
       if(!outward)irradiance+=roomEnergy[roomIndex];
      }
     }
    #endif`);
  };
  material.customProgramCacheKey=()=>previousKey.call(material)+'|room-bounce-v1-'+rooms.length;
  material.needsUpdate=true;
  undo.push(()=>{material.onBeforeCompile=previous;material.customProgramCacheKey=previousKey;material.needsUpdate=true;});
 }
 return()=>undo.forEach(f=>f());
}