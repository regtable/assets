import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

// Standalone, removable cinema. The rooftop planetarium is part of the GLB.
// The marquee is deliberately blank until a name is chosen.
export const CINEMA_ORIGIN = new THREE.Vector3(12,0,-56.5);
const MODEL='https://raw.githubusercontent.com/regtable/assets/main/props/cinema/cinema-planetarium-v3.glb';
const PROGRAMMES='https://raw.githubusercontent.com/regtable/assets/main/props/cinema/programmes.json';
type ScreenConfig={cycleSeconds:number;links:string[];fallbackText:string};
type Programmes={epochUTC:string;screens:[ScreenConfig,ScreenConfig]};
export const CINEMA_DEFAULTS:Programmes={epochUTC:'2026-01-01T00:00:00Z',screens:[
  {cycleSeconds:300,links:[],fallbackText:'SCREEN 1 · PROGRAMME COMING SOON'},
  {cycleSeconds:300,links:[],fallbackText:'SCREEN 2 · PROGRAMME COMING SOON'}
]};
const positive=(v:unknown)=>typeof v==='number'&&Number.isFinite(v)&&v>=10&&v<=86400;
export function validateProgrammes(value:unknown):Programmes|null{
  if(!value||typeof value!=='object')return null;
  const x=value as {epochUTC?:unknown;screens?:unknown};
  if(typeof x.epochUTC!=='string'||!Number.isFinite(Date.parse(x.epochUTC))||!Array.isArray(x.screens)||x.screens.length!==2)return null;
  const screens=x.screens.map((s:unknown)=>{
    if(!s||typeof s!=='object')return null;const v=s as Record<string,unknown>;
    if(!positive(v.cycleSeconds)||!Array.isArray(v.links)||v.links.length>100||typeof v.fallbackText!=='string'||v.fallbackText.length>120)return null;
    if(!v.links.every(u=>{try{return typeof u==='string'&&new URL(u).protocol==='https:';}catch{return false;}}))return null;
    return {cycleSeconds:v.cycleSeconds as number,links:[...v.links] as string[],fallbackText:v.fallbackText||'PROGRAMME COMING SOON'};
  });
  if(screens.some(s=>!s))return null;return {epochUTC:x.epochUTC,screens:screens as [ScreenConfig,ScreenConfig]};
}
// Stable pseudo-random selection by cycle, shared between visitors.
export function chooseLink(links:string[],cycle:number,screenIndex:number):string|null{
  if(!links.length)return null;if(links.length===1)return links[0];
  const hash=(n:number)=>{let x=(n^Math.imul(screenIndex+1,0x9e3779b1))|0;x=Math.imul(x^(x>>>16),0x7feb352d);x=Math.imul(x^(x>>>15),0x846ca68b);return (x^(x>>>16))>>>0;};
  return links[hash(cycle)%links.length];
}
const near=(a:number,b:number,r:number)=>Math.abs(a-b)<r;
export function createCinema(scene:THREE.Scene,camera:THREE.Camera,container:HTMLElement){
  const group=new THREE.Group();group.name='CinemaPlanetarium';group.position.copy(CINEMA_ORIGIN);scene.add(group);
  let loaded=false,disposed=false,config=CINEMA_DEFAULTS, model:THREE.Object3D|undefined,inside=false;
  let exterior:THREE.Object3D|undefined,interior:THREE.Object3D|undefined,planetarium:THREE.Object3D|undefined;
  const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>(),textures=new Set<THREE.Texture>();
  const doors=new THREE.Group();group.add(doors);
  const doorMat=new THREE.MeshStandardMaterial({color:0x66808c,metalness:.25,roughness:.18,transparent:true,opacity:.32,depthWrite:false});materials.add(doorMat);
  const doorGeo=new THREE.BoxGeometry(2.1,3.6,.12);geometries.add(doorGeo);
  const doorLeaves=[-1,1].map(sign=>{const m=new THREE.Mesh(doorGeo,doorMat);m.position.set(sign*1.05,1.8,16.4);doors.add(m);return m;});
  let audioScreen=-1;
  const audioPanel=document.createElement('div');audioPanel.style.cssText='position:absolute;bottom:145px;left:50%;transform:translateX(-50%);display:none;gap:6px;z-index:65;pointer-events:auto';container.appendChild(audioPanel);
  const displays=[-6,5].map((x,i)=>{
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=512;
    const ctx=canvas.getContext('2d')!;const ct=new THREE.CanvasTexture(canvas);ct.colorSpace=THREE.SRGBColorSpace;
    const video=document.createElement('video');video.crossOrigin='anonymous';video.muted=true;video.loop=true;video.playsInline=true;video.preload='metadata';
    const vt=new THREE.VideoTexture(video);vt.colorSpace=THREE.SRGBColorSpace;
    const mat=new THREE.MeshBasicMaterial({map:ct,fog:false});const geometry=new THREE.PlaneGeometry(8.75,4.45);
    const mesh=new THREE.Mesh(geometry,mat);mesh.position.set(x,3.1,-15.84);mesh.name='CinemaScreen'+(i+1);group.add(mesh);
    let key='',lastDraw=-1;
    const draw=(label:string)=>{ctx.fillStyle='#080d1d';ctx.fillRect(0,0,1024,512);ctx.strokeStyle='#b48b43';ctx.lineWidth=8;ctx.strokeRect(20,20,984,472);ctx.fillStyle='#e7c987';ctx.textAlign='center';ctx.font='bold 35px Georgia';ctx.fillText(label,512,255,900);ctx.font='24px Georgia';ctx.fillText('✦  ✦  ✦',512,310);ct.needsUpdate=true;};
    draw(CINEMA_DEFAULTS.screens[i].fallbackText);
    return {mesh,canvas,ct,video,vt,mat,geometry,draw,
      update(now:number,active:boolean){
        if(!active){if(key){key='';video.pause();video.removeAttribute('src');video.load();mat.map=ct;mat.needsUpdate=true;}return;}
        const c=config.screens[i],epoch=Date.parse(config.epochUTC),period=c.cycleSeconds*1000,cycle=Math.floor((now-epoch)/period),elapsed=((now-epoch)%period+period)%period;
        const url=chooseLink(c.links,cycle,i),nextKey=cycle+'|'+(url||'')+'|'+c.fallbackText;
        if(nextKey!==key){key=nextKey;video.pause();video.removeAttribute('src');video.load();mat.map=ct;mat.needsUpdate=true;draw(c.fallbackText);
          if(url){video.src=url;video.load();video.onloadedmetadata=()=>{if(key!==nextKey||disposed)return;try{if(Number.isFinite(video.duration)&&video.duration>0)video.currentTime=(elapsed/1000)%video.duration;}catch{};if(active)video.play().then(()=>{if(key===nextKey){mat.map=vt;mat.needsUpdate=true;}}).catch(()=>{});};video.onerror=()=>{if(key===nextKey){mat.map=ct;mat.needsUpdate=true;draw('SCREEN '+(i+1)+' · VIDEO UNAVAILABLE');}};}
        }
        if(!active){if(!video.paused)video.pause();}else if(url&&video.readyState>=2&&video.paused){try{if(Number.isFinite(video.duration)&&video.duration>0)video.currentTime=(elapsed/1000)%video.duration;}catch{};video.play().then(()=>{if(key===nextKey){mat.map=vt;mat.needsUpdate=true;}}).catch(()=>{});}
        if(!url&&Math.floor(now/5000)!==lastDraw){lastDraw=Math.floor(now/5000);draw(c.fallbackText);}
      },dispose(){video.pause();video.removeAttribute('src');video.load();ct.dispose();vt.dispose();mat.dispose();geometry.dispose();}
    };
  });
  const audioButtons=displays.map((display,index)=>{const button=document.createElement('button');button.type='button';button.style.cssText='padding:8px 10px;background:#17120d;color:#efd093;border:1px solid #b58a41;border-radius:8px;font:600 12px sans-serif;touch-action:manipulation';
    button.addEventListener('pointerdown',e=>e.stopPropagation());button.addEventListener('click',e=>{e.stopPropagation();audioScreen=audioScreen===index?-1:index;displays.forEach((d,j)=>{d.video.muted=j!==audioScreen;d.video.volume=.3;});if(audioScreen===index&&display.video.src)display.video.play().catch(()=>{});});audioPanel.appendChild(button);return button;});
  const ready=new GLTFLoader().loadAsync(MODEL).then(g=>{
    g.scene.traverse(o=>{const m=o as THREE.Mesh;if(!m.isMesh)return;geometries.add(m.geometry);(Array.isArray(m.material)?m.material:[m.material]).forEach(v=>{materials.add(v);if(v.name==='Planetarium midnight'){v.side=THREE.DoubleSide;v.needsUpdate=true;}const map=(v as THREE.MeshStandardMaterial).map;if(map)textures.add(map);});});
    if(disposed){geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());return;}
    model=g.scene;group.add(model);exterior=model.getObjectByName('CinemaExterior');interior=model.getObjectByName('CinemaInterior');planetarium=model.getObjectByName('PlanetariumInterior');loaded=true;
  }).catch(e=>console.warn('Cinema model unavailable:',e));
  let programmeRequest:AbortController|null=null,programmeTimer:number|undefined,wasInside=false;
  const loadProgrammes=()=>{const request=new AbortController();programmeRequest=request;programmeTimer=window.setTimeout(()=>request.abort(),5000);
    fetch(PROGRAMMES,{cache:'no-store',signal:request.signal}).then(r=>r.ok?r.json():null).then(x=>{const v=validateProgrammes(x);if(v&&!disposed&&!request.signal.aborted)config=v;}).catch(()=>{}).finally(()=>{if(programmeRequest===request){window.clearTimeout(programmeTimer);programmeRequest=null;}});
  };
  const local=(p:THREE.Vector3)=>({x:p.x-CINEMA_ORIGIN.x,z:p.z-CINEMA_ORIGIN.z});
  function blocked(p:THREE.Vector3,c:THREE.Vector3,r=.35){
    if(!loaded)return false;const q=local(p),prev=local(c),foot=p.y-2;
    const inZ=q.z>-16.5-r&&q.z<16.5+r,inX=q.x>-12-r&&q.x<12+r;
    if(foot<5.7){
      const inStairPassage=q.x>=9.1&&q.x<=11.75&&q.z>=.5&&q.z<=15.35;
      if(inZ&&(near(q.x,-12,r+.16)||(near(q.x,12,r+.16)&&!inStairPassage)))return true;
      if(inX&&near(q.z,-16.5,r+.16))return true;
      if(inX&&near(q.z,16.5,r+.16)&&Math.abs(q.x)>2.1-r)return true;
      if(q.z<8.5+r&&q.z>-16.5&&near(q.x,-.5,r+.14))return true;
      if(inX&&near(q.z,8.5,r+.14)){
        const opening=(q.x>-7.15+r&&q.x<-4.85-r)||(q.x>3.85+r&&q.x<6.15-r)||(q.x>=9.1&&q.x<=11.75);
        if(!opening)return true;
      }
    }else if(foot>=5.7&&foot<11){
      const onStairLanding=q.x>=9.1&&q.x<=11.75&&q.z>=.5&&q.z<=15.35;
      if(q.x<-11.65+r||(q.x>11.65-r&&!onStairLanding)||q.x>11.78||q.z<-16.15+r||q.z>16.15-r){if(Math.abs(prev.x)<12&&Math.abs(prev.z)<16.5)return true;}
      const radius=Math.hypot(q.x,q.z+3),was=Math.hypot(prev.x,prev.z+3);
      if(Math.abs(radius-6.6)<r+.12&&!(q.z>2.5&&Math.abs(q.x)<1.3-r)&&Math.abs(radius-6.6)<=Math.abs(was-6.6))return true;
    }
    return false;
  }
  function surface(p:THREE.Vector3,foot:number):number|null{
    if(!loaded)return null;const q=local(p);
    if(q.x>=9.1&&q.x<=11.75&&q.z>=.5&&q.z<=15.35){const y=THREE.MathUtils.clamp((15.25-q.z)/12.2*6,0,6);if(Math.abs(foot-y)<1.2||foot>4.8)return y;}
    if(Math.abs(q.x)<11.65&&Math.abs(q.z)<16.1&&foot>4.8&&foot<8.5)return 6;
    return null;
  }
  return {group,ready,blocked,surface,contains(p:THREE.Vector3){const q=local(p);return loaded&&Math.abs(q.x)<12&&Math.abs(q.z)<16.5&&p.y<13;},
    update(dt:number,p:THREE.Vector3){const q=local(p);inside=loaded&&Math.abs(q.x)<12&&Math.abs(q.z)<16.5&&p.y<13;
      if(inside&&!wasInside)loadProgrammes();if(!inside&&wasInside){programmeRequest?.abort();window.clearTimeout(programmeTimer);programmeRequest=null;}wasInside=inside;
      const viewing=inside&&p.y<7;if(!viewing){audioScreen=-1;displays.forEach(d=>{d.video.muted=true;});}audioPanel.style.display=viewing?'flex':'none';audioButtons.forEach((b,i)=>{b.textContent=audioScreen===i?'Mute screen '+(i+1):'Sound: screen '+(i+1);});
      if(interior)interior.visible=inside&&p.y<8.8;if(planetarium)planetarium.visible=inside&&p.y>7;
      const open=loaded&&Math.abs(q.x)<4&&Math.abs(q.z-16.5)<3;
      doorLeaves.forEach((m,i)=>{m.position.x=THREE.MathUtils.damp(m.position.x,(i?1:-1)*(open?3.2:1.05),7,dt);});
      doors.visible=loaded;displays.forEach((s,i)=>{s.mesh.visible=inside&&p.y<7;s.update(Date.now(),inside&&p.y<7);});
    },dispose(){disposed=true;programmeRequest?.abort();window.clearTimeout(programmeTimer);audioPanel.remove();displays.forEach(s=>s.dispose());group.removeFromParent();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}
  };
}
