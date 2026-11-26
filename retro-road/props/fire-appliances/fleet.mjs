import pickup from './pickup.mjs'
import pump from './pump.mjs'
export async function createFleet(group, loader) {
  const xs = [-27.5,-20], parked = -13.5
  const models = await Promise.all([pickup(loader),pump(loader)])
  const routes = xs.map(x => [[x,parked],[x,-29],[x+2,-32.7],[92,-32.7],[100,-32.7],[100,-30],[92,-30],[x+3,-30],[x,-28],[x,parked]])
  const siren = new Audio(new URL('./weewoo.mp3', import.meta.url).href)
  siren.loop = true
  siren.muted = true
  siren.volume = 0
  const silenceSiren = () => { siren.muted = true; siren.pause(); siren.volume = 0 }
  const onVisibilityChange = () => { if (document.hidden) silenceSiren() }
  document.addEventListener('visibilitychange', onVisibilityChange)
  const queue = [], wheels = [], beacons = []
  let active = -1, leg = 1, pause = 0, elapsed = 0, disposed = false
  models.forEach((m,i) => {
    group.add(m)
    m.position.set(xs[i],0.015,parked)
    wheels[i]=[]; beacons[i]=[]
    m.traverse(o=>{if(/^Wheel_/.test(o.name)) wheels[i].push(o)
      if(/^Beacon_/.test(o.name)&&o.material){o.material=o.material.clone();beacons[i].push(o)}})
  })
  function dispatch(i) {
    if(!disposed && Number.isInteger(i)&&models[i]&&active!==i&&!queue.includes(i)) queue.push(i)
  }
  const onDispatch=e=>dispatch(e.detail?.vehicle==='pickup'?0:e.detail?.vehicle==='pump'?1:e.detail?.vehicle)
  window.addEventListener('fire-dispatch',onDispatch)
  return {dispatch, needsDoor:i=>active===i&&(leg<=2||leg>=8),
    update(dt,doors,playerPos,muted=true){
      if(disposed)return
      if(active<0){if(!queue.length){silenceSiren();return}active=queue.shift();leg=1;elapsed=0}
      const i=active,m=models[i]; elapsed+=dt
      const distance = playerPos ? Math.hypot(playerPos.x-m.position.x, playerPos.z-m.position.z) : Infinity
      const audible = !muted && !document.hidden && Number.isFinite(distance) && distance < 120 && leg>=2 && leg<=8 && m.position.x<95
      if (audible) {
        siren.volume = 0.3 / (1 + (distance/12)**2)
        siren.muted = false
        if (siren.paused) siren.play().catch(() => {})
      } else silenceSiren()
      beacons[i].forEach((b,j)=>{if(b.material.emissive){b.material.emissive.setHex(0x006aff);b.material.emissiveIntensity=(Math.floor(elapsed*6)+j)%2?3:0}})
      if((leg===1||leg===9)&&doors[i]<.96)return
      if(pause>0){pause-=dt;return}
      const [x,z]=routes[i][leg],dx=x-m.position.x,dz=z-m.position.z,len=Math.hypot(dx,dz)
      const travel=Math.min(len,Math.min(dt,.1)*(leg===1||leg>=8?2:7))
      if(len>0){m.position.x+=dx/len*travel;m.position.z+=dz/len*travel
        m.rotation.y=Math.atan2(-dx,-dz)+(leg===9?Math.PI:0)
        wheels[i].forEach(w=>w.rotation.x+=(leg===9?1:-1)*travel/.45)}
      if(len<=travel+.0001){if(leg===4)pause=5
        if(++leg===routes[i].length){m.rotation.y=0;beacons[i].forEach(b=>b.material.emissiveIntensity=0);active=-1;silenceSiren()}}
    },
    dispose(){disposed=true;silenceSiren();siren.removeAttribute('src');siren.load();document.removeEventListener('visibilitychange',onVisibilityChange);window.removeEventListener('fire-dispatch',onDispatch);const resources=new Set()
      models.forEach(m=>{group.remove(m);m.traverse(o=>{if(o.geometry)resources.add(o.geometry);for(const mat of [].concat(o.material||[]))resources.add(mat)})});resources.forEach(r=>r.dispose())}
  }
}
