import assert from 'node:assert/strict';
import {createTrip} from './motion.mjs';

const rad=a=>Math.atan2(Math.sin(a),Math.cos(a));
for(const bay of [-27.5,-20]){
  const trip=createTrip(bay), phases=new Set(), path=[];
  trip.update(.1,false);assert.deepEqual(trip.pose,{x:bay,z:-13.5,yaw:0,visible:true});assert(trip.needsDoor);
  let last={...trip.pose},lastPhase=trip.phase,maxYawStep=0,maxStep=0,stopped=0,reverseTravel=0,sawPast=false;
  for(let i=0;i<30000&&!trip.done;i++){
    const phase=trip.phase,reverse=trip.reverse;
    if(phase==='select-reverse'){
      assert(Math.abs(trip.pose.x-(bay-8))<1e-6);assert(Math.abs(trip.pose.z+30)<1e-6);assert(Math.abs(rad(trip.pose.yaw-Math.PI/2))<1e-6);sawPast=true;stopped++;
    }
    const travel=trip.update(1/60,true),p={...trip.pose};phases.add(phase);
    if(reverse){assert(sawPast,'must stop past bay before reversing');assert(travel<=0);reverseTravel+=-travel;}
    if(last.visible&&p.visible&&phase!=='offsite'&&lastPhase!=='offsite'){
      const d=Math.hypot(p.x-last.x,p.z-last.z),a=Math.abs(rad(p.yaw-last.yaw));maxStep=Math.max(maxStep,d);maxYawStep=Math.max(maxYawStep,a);
      assert(d<.13,'position pop');assert(a<.06,'jerky steering / heading flip');
      if(d>1e-6){const dot=((p.x-last.x)*(-Math.sin(p.yaw))+(p.z-last.z)*(-Math.cos(p.yaw)))/d;assert(reverse?dot<-.97:dot>.97,'visible travel disagrees with forward/reverse gear');}
    }
    if(phase==='reverse-turn'||phase==='reverse-in')assert(trip.needsDoor||trip.done);
    path.push({phase,x:p.x,z:p.z,yaw:p.yaw,visible:p.visible});last=p;lastPhase=phase;
  }
  assert(trip.done,'trip must finish');assert.deepEqual(trip.pose,{x:bay,z:-13.5,yaw:0,visible:true});assert(stopped>=60);assert(reverseTravel>20);assert(phases.has('pull-past'));assert(phases.has('reverse-turn'));assert(phases.has('reverse-in'));
  console.log('PASS bay',bay,JSON.stringify({frames:path.length,maxYawStepDegrees:maxYawStep*180/Math.PI,maxFrameTravel:maxStep,reverseMetres:reverseTravel,stopSeconds:stopped/60}));
  const stalled=createTrip(bay);for(let i=0;i<10;i++)stalled.update(-1,true);assert.equal(stalled.pose.z,-13.5);
}
console.log('PASS continuous tangents, real stop past bay, reverse-only approach, door interlock, and exact repeated parking positions.');
