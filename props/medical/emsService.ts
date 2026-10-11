import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const MODEL="https://raw.githubusercontent.com/regtable/assets/main/props/medical/ems-ambulance.glb";
export const EMS_SERVICE_CONFIG={interval:300,startup:6,drive:26,away:35,shutdown:4,parkX:-46,parkZ:22,tunnelX:27,tunnelZ:-29};
const route:[number,number][]=[[-46,22],[-44,16],[-44,-14]];
for(let i=1;i<=24;i++){const a=Math.PI+i/24*Math.PI/2;route.push([-29+15*Math.cos(a),-14+15*Math.sin(a)]);}
route.push([94,-29]);
const lengths=[0];for(let i=1;i<route.length;i++)lengths.push(lengths[i-1]+Math.hypot(route[i][0]-route[i-1][0],route[i][1]-route[i-1][1]));
const ease=(x:number)=>{const t=Math.max(0,Math.min(1,x));return t*t*(3-2*t);};
function routeAt(u:number){const distance=Math.max(0,Math.min(1,u))*lengths[lengths.length-1];let i=1;while(i<lengths.length-1&&lengths[i]<distance)i++;const a=route[i-1],b=route[i],f=(distance-lengths[i-1])/(lengths[i]-lengths[i-1]);return{x:a[0]+(b[0]-a[0])*f,z:a[1]+(b[1]-a[1])*f,yaw:Math.atan2(b[0]-a[0],b[1]-a[1])};}
export function sampleAmbulance(elapsed:number){
  const c=EMS_SERVICE_CONFIG;let t=elapsed-c.interval;
  const parked={x:c.parkX,z:c.parkZ,yaw:Math.PI,phase:"parked",visible:true,engine:0,siren:0};
  if(t<0)return parked;t%=c.interval;
  if(t<c.startup)return{...parked,phase:"starting",engine:ease(t/c.startup),siren:0};t-=c.startup;
  if(t<c.drive)return{...routeAt(ease(t/c.drive)),phase:"outbound",visible:true,engine:1,siren:1};t-=c.drive;
  if(t<c.away)return{...routeAt(1),phase:"away",visible:false,engine:0,siren:0};t-=c.away;
  if(t<c.drive){const u=ease(t/c.drive),p=routeAt(1-u);let yaw=p.yaw+Math.PI;const blend=ease((u-.94)/.06);const delta=Math.atan2(Math.sin(Math.PI-yaw),Math.cos(Math.PI-yaw));yaw+=delta*blend;return{...p,yaw,phase:"inbound",visible:true,engine:1,siren:1};}t-=c.drive;
  if(t<c.shutdown)return{...parked,phase:"shutdown",engine:1-ease(t/c.shutdown)};
  return parked;
}

export function createEMSTunnel(brick:THREE.Material){
  const group=new THREE.Group();group.name="EastRoadOutOfTownTunnel";
  const wallMat=brick.clone();wallMat.side=THREE.DoubleSide;if((wallMat as THREE.MeshBasicMaterial).color)(wallMat as THREE.MeshBasicMaterial).color.set(0x89929c);
  const road=new THREE.MeshStandardMaterial({color:0x222831,roughness:.94});const gold=new THREE.MeshBasicMaterial({color:0xeab308});const metal=new THREE.MeshStandardMaterial({color:0x263238,metalness:.5,roughness:.6});const glow=new THREE.MeshBasicMaterial({color:0xffedc4});
  const geometries:THREE.BufferGeometry[]=[];
  const box=(x:number,y:number,z:number,w:number,h:number,d:number,material:THREE.Material)=>{const geo=new THREE.BoxGeometry(w,h,d);geometries.push(geo);const m=new THREE.Mesh(geo,material);m.position.set(x,y,z);group.add(m);return m;};
  box(58,.002,-29,62,.018,12,road);box(58,1.7,-35.12,62,3.4,.24,wallMat);box(58,1.7,-22.88,62,3.4,.24,wallMat);
  const roof=new THREE.CylinderGeometry(6,6,62,32,1,true,0,Math.PI);roof.rotateZ(Math.PI/2);roof.scale(1,2.8/6,1);geometries.push(roof);const arch=new THREE.Mesh(roof,wallMat);arch.position.set(58,3.4,-29);group.add(arch);
  for(const z of [-29.16,-28.84])box(58,.019,z,62,.018,.055,gold);
  for(const x of [28,38,49,60,71,82]){box(x,5.65,-29,.8,.12,.5,metal);box(x,5.56,-29,.6,.03,.35,glow);}
  const black=new THREE.MeshBasicMaterial({color:0x020304});box(89,3.2,-29,.14,6.4,12,black);
  for(const z of [-35.18,-22.82])box(27.08,1.7,z,.5,3.4,.45,metal);
  const canvas=document.createElement("canvas");canvas.width=1024;canvas.height=128;const ctx=canvas.getContext("2d")!;ctx.fillStyle="#142320";ctx.fillRect(0,0,1024,128);ctx.strokeStyle="#b99346";ctx.lineWidth=7;ctx.strokeRect(5,5,1014,118);ctx.fillStyle="#e4c381";ctx.font="bold 45px Georgia,serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("OUT OF TOWN  •  EMS ACCESS",512,64);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;const signMat=new THREE.MeshBasicMaterial({map:texture});const signGeo=new THREE.PlaneGeometry(10,.95);geometries.push(signGeo);const sign=new THREE.Mesh(signGeo,signMat);sign.position.set(26.97,7.2,-29);sign.rotation.y=-Math.PI/2;group.add(sign);
  const movement=(p:THREE.Vector3,c:THREE.Vector3,r=.35):boolean|null=>{
    if(Math.max(p.x,c.x)<26)return null;
    if(Math.max(p.x,c.x)<=27 && (p.z<-36 || p.z>-22) && (c.z<-36 || c.z>-22))return null;
    if(p.y>6.1||p.z<-35+r||p.z>-23-r||p.x>88-r)return true;
    return false;
  };
  const dispose=()=>{group.removeFromParent();geometries.forEach(g=>g.dispose());[wallMat,road,gold,metal,glow,black,signMat].forEach(m=>m.dispose());texture.dispose();};
  return{group,movement,dispose};
}

export function createEMSAmbulance(camera:THREE.Camera){
  const group=new THREE.Group();group.name="EMS_AmbulanceService";
  group.position.set(-46,0,22);group.rotation.y=Math.PI;
  const listener=new THREE.AudioListener();camera.add(listener);
  const engine=new THREE.PositionalAudio(listener),siren=new THREE.PositionalAudio(listener);group.add(engine,siren);
  const rate=22050,duration=4,length=rate*duration;
  const makeBuffer=(kind:"engine"|"siren")=>{const buffer=listener.context.createBuffer(1,length,rate),data=buffer.getChannelData(0);
    for(let i=0;i<length;i++){const t=i/rate;
      data[i]=kind==="siren"?.48*Math.sin(2*Math.PI*850*t+300*duration*(1-Math.cos(2*Math.PI*t/duration))):.18*Math.sin(2*Math.PI*45*t)+.12*Math.sin(2*Math.PI*90*t)+.05*Math.sin(2*Math.PI*180*t)+.025*Math.sin(2*Math.PI*377*t);
    }return buffer;};
  for(const [sound,kind]of [[engine,"engine"],[siren,"siren"]] as [THREE.PositionalAudio,"engine"|"siren"][]){sound.setBuffer(makeBuffer(kind));sound.setLoop(true);sound.setRefDistance(kind==="engine"?6:12);sound.setRolloffFactor(1.7);sound.setVolume(0);sound.gain.gain.setValueAtTime(0,listener.context.currentTime);}
  let disposed=false,loaded=false,started=0,lastDistance=0;
  const unlock=()=>{listener.context.resume().then(()=>{if(disposed)return;if(!engine.isPlaying)engine.play();if(!siren.isPlaying)siren.play();}).catch(()=>{});};
  window.addEventListener("pointerdown",unlock);window.addEventListener("keydown",unlock);
  const lightLeft=new THREE.PointLight(0x1455ff,0,10,2),lightRight=new THREE.PointLight(0x1455ff,0,10,2);lightLeft.position.set(-.52,2.68,1.75);lightRight.position.set(.52,2.68,1.75);group.add(lightLeft,lightRight);
  let model:THREE.Group|null=null;const wheels:THREE.Object3D[]=[];const lamps:THREE.MeshStandardMaterial[]=[];
  const release=(root:THREE.Object3D)=>{const geometry=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>();root.traverse(n=>{const m=n as THREE.Mesh;if(m.isMesh){geometry.add(m.geometry);(Array.isArray(m.material)?m.material:[m.material]).forEach(v=>materials.add(v));}});geometry.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());};
  const ready=new GLTFLoader().loadAsync(MODEL).then(gltf=>{if(disposed){release(gltf.scene);return;}model=gltf.scene;group.add(model);model.traverse(n=>{if(/^Wheel_[LR][FB]$/.test(n.name))wheels.push(n);const mesh=n as THREE.Mesh;if(mesh.isMesh)for(const m of Array.isArray(mesh.material)?mesh.material:[mesh.material])if(m.name.startsWith("Beacon"))lamps.push(m as THREE.MeshStandardMaterial);});lamps.forEach(m=>m.emissiveIntensity=0);started=performance.now();loaded=true;}).catch(error=>console.error("EMS ambulance failed to load:",error));
  const update=()=>{
    if(disposed||!loaded)return;const elapsed=(performance.now()-started)/1000,p=sampleAmbulance(elapsed);const previous=group.position.clone();group.position.set(p.x,0,p.z);group.rotation.y=p.yaw;group.visible=p.visible;group.userData.servicePhase=p.phase;
    const distance=Math.min(4,group.position.distanceTo(previous));lastDistance+=distance;wheels.forEach(w=>w.rotation.x=lastDistance/.46*(p.phase==="inbound"?-1:1));
    const flash=Math.sin(elapsed*18)>0;lamps.forEach(m=>m.emissiveIntensity=p.siren?((m.name.endsWith("Right")?!flash:flash)?5:.1):0);
    lightLeft.intensity=p.siren&&flash?12:0;lightRight.intensity=p.siren&&!flash?12:0;
    engine.setVolume(p.visible?.26*p.engine:0);siren.setVolume(p.visible?.24*p.siren:0);
  };
  const checkCollision=(p:THREE.Vector3,c:THREE.Vector3,r=.35)=>{
    if(!loaded||!group.visible||Math.min(p.y,c.y)>4)return false;
    const local=(v:THREE.Vector3)=>{const x=v.x-group.position.x,z=v.z-group.position.z,co=Math.cos(group.rotation.y),si=Math.sin(group.rotation.y);return{x:x*co-z*si,z:x*si+z*co};};
    const a=local(p),b=local(c),inside=(v:{x:number;z:number})=>Math.abs(v.x)<1.4+r&&Math.abs(v.z)<3+r;
    if(inside(b))return inside(a)&&Math.hypot(a.x,a.z)<=Math.hypot(b.x,b.z);
    return inside(a);
  };
  const dispose=()=>{if(disposed)return;disposed=true;window.removeEventListener("pointerdown",unlock);window.removeEventListener("keydown",unlock);for(const s of [engine,siren]){if(s.isPlaying)s.stop();s.disconnect();s.buffer=null;}listener.removeFromParent();group.removeFromParent();if(model)release(model);lightLeft.dispose();lightRight.dispose();};
  return{group,ready,update,checkCollision,dispose};
}
