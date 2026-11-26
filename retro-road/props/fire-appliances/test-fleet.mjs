import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const listeners=new Map(),docListeners=new Map();
globalThis.window={addEventListener:(n,f)=>listeners.set(n,f),removeEventListener:n=>listeners.delete(n)};
globalThis.document={hidden:false,addEventListener:(n,f)=>docListeners.set(n,f),removeEventListener:n=>docListeners.delete(n)};
let audio;
globalThis.Audio=class{constructor(){audio=this;this.paused=true;this.plays=0;}play(){this.plays++;this.paused=false;return Promise.resolve();}pause(){this.paused=true;}removeAttribute(){}load(){}};
const source=(await fs.readFile(new URL('./fleet.mjs',import.meta.url),'utf8')).replace(/^import pickup.*$/m,'').replace(/^import pump.*$/m,'').replace("'./motion.mjs'",JSON.stringify(new URL('./motion.mjs',import.meta.url).href)).replace("new URL('./weewoo.mp3',import.meta.url).href","'siren.mp3'");
const models=[];
const setup=`const make=async()=>{const m={position:{x:0,y:0,z:0,set(x,y,z){Object.assign(this,{x,y,z})}},rotation:{y:0},visible:true,traverse(){}};globalThis.__fleetModels.push(m);return m;};const pickup=make,pump=make;\n`;
globalThis.__fleetModels=models;
const {createFleet}=await import('data:text/javascript;base64,'+Buffer.from(setup+source).toString('base64'));
const fleet=await createFleet({add(){},remove(){}},{});
assert(!listeners.has('pointerdown'));assert(!listeners.has('keydown'));
fleet.dispatch(0);fleet.dispatch(1);fleet.dispatch(0);
for(let i=0;i<30;i++)fleet.update(.1,[0,0],{x:-25,z:-29},false);
assert.equal(models[0].position.z,-13.5);assert(fleet.needsDoor(0));assert.equal(audio.plays,0);
let moved=[false,false],played=false,firstParked=false;
for(let frame=0;frame<16000;frame++){
  fleet.update(1/60,[1,1],{x:-25,z:-29},false);
  for(let i=0;i<2;i++)if(models[i].position.z!==-13.5)moved[i]=true;
  if(moved[0]&&models[0].position.z===-13.5)firstParked=true;
  if(moved[1])assert(firstParked,'queued engine must wait for first to park');
  played ||= audio.plays>0;
  if(!audio.paused){fleet.update(0,[1,1],{x:-25,z:-29},true);assert.equal(audio.muted,true);assert.equal(audio.paused,true);}
}
assert.deepEqual(moved,[true,true]);assert(played);
for(const [i,x]of [-27.5,-20].entries()){assert.equal(models[i].position.x,x);assert.equal(models[i].position.z,-13.5);assert.equal(models[i].rotation.y,0);assert.equal(models[i].visible,true);assert.equal(fleet.needsDoor(i),false);}
document.hidden=true;docListeners.get('visibilitychange')();assert(audio.paused);
fleet.dispose();assert.equal(listeners.size,0);assert.equal(docListeners.size,0);
delete globalThis.__fleetModels;
console.log('PASS fleet: both vehicles dispatch, serialise, fully return to exact original poses; door wait, siren mute and no global gesture audio.');
