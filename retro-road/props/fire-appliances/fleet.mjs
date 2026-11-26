import pickup from './pickup.mjs';
import pump from './pump.mjs';
import {createTrip} from './motion.mjs';

export async function createFleet(group,loader) {
  const xs=[-27.5,-20],models=await Promise.all([pickup(loader),pump(loader)]);
  const queue=[],wheels=[],beacons=[];let active=-1,trip=null,elapsed=0,disposed=false;
  const siren=new Audio(new URL('./weewoo.mp3',import.meta.url).href);siren.loop=true;siren.muted=true;siren.volume=0;
  const silence=()=>{siren.muted=true;siren.pause();siren.volume=0;};
  const onVisibility=()=>{if(document.hidden)silence();};document.addEventListener('visibilitychange',onVisibility);
  models.forEach((model,i)=>{
    group.add(model);model.position.set(xs[i],.015,-13.5);model.rotation.y=0;
    wheels[i]=[];beacons[i]=[];
    model.traverse(o=>{if(/^Wheel_/.test(o.name))wheels[i].push(o);if(/^Beacon_/.test(o.name)&&o.material){o.material=o.material.clone();beacons[i].push(o);}});
  });
  function dispatch(i){if(!disposed&&Number.isInteger(i)&&models[i]&&active!==i&&!queue.includes(i))queue.push(i);}
  const onDispatch=e=>dispatch(e.detail?.vehicle==='pickup'?0:e.detail?.vehicle==='pump'?1:e.detail?.vehicle);
  window.addEventListener('fire-dispatch',onDispatch);
  return {
    dispatch,
    needsDoor:i=>active===i&&!!trip?.needsDoor,
    update(dt,doors,playerPos,muted=true){
      if(disposed)return;
      if(active<0){if(!queue.length){silence();return;}active=queue.shift();trip=createTrip(xs[active]);elapsed=0;}
      const i=active,model=models[i];elapsed+=Number.isFinite(dt)?Math.max(0,dt):0;
      const travel=trip.update(dt,(doors?.[i]??0)>=.96);
      const pose=trip.pose;model.position.set(pose.x,.015,pose.z);model.rotation.y=pose.yaw;model.visible=pose.visible;
      wheels[i].forEach(w=>w.rotation.x-=travel/.45);
      beacons[i].forEach((b,j)=>{if(b.material.emissive){b.material.emissive.setHex(0x006aff);b.material.emissiveIntensity=(Math.floor(elapsed*6)+j)%2?3:0;}});
      const distance=playerPos?Math.hypot(playerPos.x-pose.x,playerPos.z-pose.z):Infinity;
      const audible=!muted&&!document.hidden&&Number.isFinite(distance)&&distance<120&&trip.siren&&pose.x<95&&pose.visible;
      if(audible){siren.volume=.3/(1+(distance/12)**2);siren.muted=false;if(siren.paused)siren.play().catch(()=>{});}else silence();
      if(trip.done){model.position.set(xs[i],.015,-13.5);model.rotation.y=0;model.visible=true;beacons[i].forEach(b=>b.material.emissiveIntensity=0);active=-1;trip=null;silence();}
    },
    dispose(){if(disposed)return;disposed=true;silence();siren.removeAttribute('src');siren.load();document.removeEventListener('visibilitychange',onVisibility);window.removeEventListener('fire-dispatch',onDispatch);
      const resources=new Set();models.forEach(model=>{group.remove(model);model.traverse(o=>{if(o.geometry)resources.add(o.geometry);for(const m of [].concat(o.material||[]))resources.add(m);});});resources.forEach(r=>r.dispose());queue.length=0;}
  };
}
