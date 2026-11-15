import * as THREE from 'three';
export interface ZenLanternOptions { position?: THREE.Vector3 | [number,number,number]; scale?: number; rotationY?: number; addPointLight?: boolean }
export function createZenTreeLightPole(options: ZenLanternOptions = {}): THREE.Group {
 const group=new THREE.Group();group.name='ZenTree_CornerLantern_Ishidoro';
 if(options.position)group.position.copy(Array.isArray(options.position)?new THREE.Vector3(...options.position):options.position);
 group.scale.setScalar(options.scale??1);group.rotation.y=options.rotationY??0;
 const gold=new THREE.MeshStandardMaterial({color:0x98702f,metalness:.75,roughness:.35});
 const wood=new THREE.MeshStandardMaterial({color:0x24150c,roughness:.82});
 const glow=new THREE.MeshStandardMaterial({color:0xffd260,emissive:0xffbb32,emissiveIntensity:1.8,roughness:.7});
 function mesh(g:THREE.BufferGeometry,m:THREE.Material,x:number,y:number,z:number){const o=new THREE.Mesh(g,m);o.position.set(x,y,z);group.add(o);return o;}
 function cone(rt:number,rb:number,h:number,y:number,material:THREE.Material,segments=8){return mesh(new THREE.CylinderGeometry(rt,rb,h,segments),material,0,y,0);}
 cone(.24,.32,.1,.05,gold);cone(.116,.116,.026,.11,gold);cone(.1,.12,.75,.475,wood);cone(.34,.20,.09,.895,wood);cone(.345,.345,.02,.94,gold);
 mesh(new THREE.BoxGeometry(.236,.228,.236),glow,0,1.07,0);
 for(const x of [-.12,.12])for(const z of [-.12,.12])mesh(new THREE.BoxGeometry(.02,.26,.02),gold,x,1.07,z);
 for(const y of [.948,1.192])for(const z of [-.12,.12]){mesh(new THREE.BoxGeometry(.22,.016,.02),gold,0,y,z);mesh(new THREE.BoxGeometry(.02,.016,.22),gold,z,y,0);}
 cone(0,.36,.24,1.32,wood,6);cone(.368,.368,.02,1.20,gold,6);
 for(let k=0;k<6;k++){const a=k*Math.PI/3,p=new THREE.Vector3(0,1.44,0),q=new THREE.Vector3(Math.sin(a)*.35,1.21,Math.cos(a)*.35),d=q.clone().sub(p);const o=mesh(new THREE.BoxGeometry(.018,.016,d.length()),gold,...p.clone().add(q).multiplyScalar(.5).toArray());o.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),d.normalize());}
 mesh(new THREE.SphereGeometry(.045,16,12),gold,0,1.46,0);
 if(options.addPointLight!==false){const l=new THREE.PointLight(0xfef08a,1.8,6);l.position.set(0,1.07,0);group.add(l);}
 return group;
}
export const createZenLantern=createZenTreeLightPole;
export function disposeZenLantern(group:THREE.Group){const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();group.traverse(o=>{if(o instanceof THREE.Mesh){geometries.add(o.geometry);(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));}});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());group.removeFromParent();}
