import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createTelevision} from './76-tv-channels/television-persistent.mjs';
class Element{
  constructor(tag){this.tag=tag;this.children=[];this.style={};this.textContent='';}
  append(node){node.parent=this;this.children.push(node);}
  replaceChildren(){this.children=[];}
  remove(){if(this.parent)this.parent.children=this.parent.children.filter(c=>c!==this);}
  focus(){document.activeElement=this;}
  setAttribute(){}
  querySelectorAll(){return walk(this).filter(n=>n.tag==='button'&&!n.disabled);}
}
const walk=e=>[e,...e.children.flatMap(walk)];
globalThis.document={createElement:tag=>new Element(tag),body:new Element('body'),activeElement:null};
const audio=[];
globalThis.Audio=class{constructor(src){this.src=src;this.paused=true;audio.push(this);}play(){this.paused=false;return Promise.resolve();}pause(){this.paused=true;}removeAttribute(){}load(){}};
const fetchOriginal=globalThis.fetch,catalog=JSON.parse(await fs.readFile(new URL('./76-tv-channels/channels.json',import.meta.url)));
globalThis.fetch=async()=>({ok:true,json:async()=>catalog});
let resolveImage,resolveSong,images=0,songs=0;const states=[],pictures=[],opened=[];
const tv=createTelevision({services:{generateImage:()=>{images++;return new Promise(r=>resolveImage=r);},generateSong:()=>{songs++;return new Promise(r=>resolveSong=r);}},onState:s=>states.push(s),onImage:url=>pictures.push(url),onOpenChange:v=>opened.push(v)});
const tick=()=>new Promise(r=>setTimeout(r,0));
function click(text){const b=walk(document.body).find(n=>n.tag==='button'&&n.textContent===text);assert(b,'Missing button '+text);return b.onclick();}
try{
  await tv.open(14,'73 South');assert(tv.isOpen);assert.equal(images,0);assert.equal(songs,0);
  click('Nature');assert(!tv.isOpen,'selecting a channel must close the remote');await tick();assert.equal(images,1);assert.equal(songs,1);assert(states.some(s=>s.phase==='generating'));
  resolveImage({imageUrl:'nature.jpg'});await tick();assert.deepEqual(pictures,['nature.jpg'],'TV image must arrive with remote closed');
  resolveSong({audioUrl:'nature.mp3'});await tick();assert.equal(audio.length,1);assert(!audio[0].paused,'audio must start while remote is closed');assert.equal(tv.roomId,14);
  await tv.open(14,'73 South');assert(tv.isOpen);tv.close();assert(!audio[0].paused,'closing remote must not stop playback');assert.equal(images,1,'reopening must not generate again');
  tv.setMuted(true);assert(audio[0].muted);tv.setMuted(false);assert(!audio[0].muted);
  await tv.open(14);click('Turn TV off');assert(audio[0].paused);assert.equal(tv.roomId,null);assert.equal(states.at(-1).phase,'idle');
  await tv.open(14);click('Nature');await tick();tv.stop();resolveImage({imageUrl:'late.jpg'});resolveSong({audioUrl:'late.mp3'});await tick();assert.equal(audio.length,1,'leaving room must suppress late audio');assert.deepEqual(pictures,['nature.jpg']);
  tv.dispose();assert(!tv.isOpen);assert.equal(document.body.children.length,0);
  console.log('PASS remote auto-closes, image/audio finish on physical TV, closing/reopening preserves playback, mute/off/room-exit stop correctly, late results ignored. Mock generation only.');
}finally{globalThis.fetch=fetchOriginal;}
