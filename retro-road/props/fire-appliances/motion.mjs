// Metres, seconds; vehicle model faces local -Z. No rendering dependency.
const PARKED_Z = -13.5;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function line(name, a, b, speed, extra = {}) {
  const dx=b[0]-a[0], dz=b[1]-a[1], length=Math.hypot(dx,dz);
  return {name,length,speed,...extra,sample:s=>({x:a[0]+dx*s/length,z:a[1]+dz*s/length,dx,dz})};
}
function curve(name, p, speed, extra = {}) {
  function point(t) {
    const u=1-t;
    return { x:u*u*u*p[0][0]+3*u*u*t*p[1][0]+3*u*t*t*p[2][0]+t*t*t*p[3][0], z:u*u*u*p[0][1]+3*u*u*t*p[1][1]+3*u*t*t*p[2][1]+t*t*t*p[3][1],
      dx:3*u*u*(p[1][0]-p[0][0])+6*u*t*(p[2][0]-p[1][0])+3*t*t*(p[3][0]-p[2][0]), dz:3*u*u*(p[1][1]-p[0][1])+6*u*t*(p[2][1]-p[1][1])+3*t*t*(p[3][1]-p[2][1]) };
  }
  const distances=[0];let last=point(0);
  for(let i=1;i<=192;i++){const next=point(i/192);distances.push(distances[i-1]+Math.hypot(next.x-last.x,next.z-last.z));last=next;}
  return {name,length:distances.at(-1),speed,...extra,sample:s=>{let low=0,high=192;while(high-low>1){const m=(low+high)>>1;if(distances[m]<s)low=m;else high=m;}const t=(low+(s-distances[low])/(distances[high]-distances[low]))/192;return point(clamp(t,0,1));}};
}

export function createTrip(bayX) {
  const stages=[
    line('depart',[bayX,PARKED_Z],[bayX,-26.2],2.4,{door:true}),
    curve('turn-out',[[bayX,-26.2],[bayX,-30.4],[bayX+2,-32.7],[bayX+7,-32.7]],2.8,{door:true,siren:true}),
    line('outbound',[bayX+7,-32.7],[110,-32.7],7,{siren:true}),
    {name:'offsite',wait:5,hidden:true},
    line('return-cruise',[110,-30],[bayX+12,-30],7,{siren:true}),
    // Continue forwards WEST past the bay before selecting reverse.
    line('pull-past',[bayX+12,-30],[bayX-8,-30],3,{door:true}),
    {name:'select-reverse',wait:1.1,door:true},
    // Reverse velocity starts EAST; the nose still faces WEST. It then swings
    // smoothly to face NORTH, ready to reverse straight SOUTH into the bay.
    curve('reverse-turn',[[bayX-8,-30],[bayX-3.8,-30],[bayX,-29.7],[bayX,-25.7]],1.35,{reverse:true,door:true}),
    line('reverse-in',[bayX,-25.7],[bayX,PARKED_Z],1.1,{reverse:true,door:true}),
    {name:'park-stop',wait:.5,door:true}
  ];
  let index=0,distance=0,waitRemaining=0,speed=0,done=false;
  const pose={x:bayX,z:PARKED_Z,yaw:0,visible:true};
  function next() {
    index++;distance=0;
    if(index>=stages.length){done=true;speed=0;Object.assign(pose,{x:bayX,z:PARKED_Z,yaw:0,visible:true});return;}
    if(stages[index].wait!==undefined){waitRemaining=stages[index].wait;speed=0;}
    if(stages[index].name==='offsite') {
      // Portal transport happens only once the whole appliance is beyond the
      // tunnel mouth and hidden, never in the street or during bay parking.
      Object.assign(pose,{x:110,z:-30,yaw:Math.PI/2,visible:false});
    }
  }
  return {
    pose,
    get done(){return done;},get phase(){return done?'parked':stages[index].name;},
    get reverse(){return !done&&!!stages[index].reverse;},
    get needsDoor(){return !done&&!!stages[index].door;},
    get siren(){return !done&&!!stages[index].siren;},
    get speed(){return speed;},
    update(delta,doorOpen=true) {
      if(done)return 0;
      const dt=Number.isFinite(delta)?clamp(delta,0,.1):0;if(!dt)return 0;
      const stage=stages[index];
      if(stage.door&&!doorOpen){speed=0;return 0;}
      if(stage.wait!==undefined){waitRemaining-=dt;if(waitRemaining<=0)next();return 0;}
      const remaining=stage.length-distance, after=stages[index+1];
      const exitSpeed=!after||after.wait!==undefined?0:after.speed;
      const target=Math.min(stage.speed,Math.sqrt(exitSpeed*exitSpeed+2*2.2*remaining));
      const old=speed;speed+=clamp(target-speed,-2.2*dt,1.45*dt);
      const travel=Math.min(remaining,(old+speed)*.5*dt);
      distance+=travel;const sample=stage.sample(distance);
      pose.x=sample.x;pose.z=sample.z;
      const yaw=Math.atan2(-sample.dx,-sample.dz)+(stage.reverse?Math.PI:0);
      const angle=Math.atan2(Math.sin(yaw-pose.yaw),Math.cos(yaw-pose.yaw));pose.yaw+=angle;
      pose.visible=pose.x<105;
      const signed=stage.reverse?-travel:travel;
      if(remaining-travel<1e-7)next();
      return signed;
    }
  };
}
