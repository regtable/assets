import * as THREE from 'https://esm.sh/three@0.180.0';
import { GLTFLoader } from 'https://esm.sh/three@0.180.0/examples/jsm/loaders/GLTFLoader.js';

export function createHotelRoom({ config, glbUrl, onRemote = () => {} }) {
  const group = new THREE.Group(); group.name = `Sunset 76 | room ${config.id}`;
  let disposed = false, screen = null, imageVersion = 0;
  const textures = new Set(), screenMaterial = new THREE.MeshBasicMaterial({ color: '#ffffff' });
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=576;
  const context=canvas.getContext('2d'),display=new THREE.CanvasTexture(canvas);
  display.colorSpace=THREE.SRGBColorSpace;display.flipY=false;screenMaterial.map=display;textures.add(display);
  let screenImage=null,screenState={phase:'idle'};
  function drawScreen(){
    if(!context||disposed)return;
    const w=canvas.width,h=canvas.height;context.fillStyle='#101820';context.fillRect(0,0,w,h);
    if(screenImage){const scale=Math.max(w/screenImage.width,h/screenImage.height),iw=screenImage.width*scale,ih=screenImage.height*scale;context.drawImage(screenImage,(w-iw)/2,(h-ih)/2,iw,ih);}
    const s=screenState;
    const message=s.phase==='idle'?'PLEASE USE REMOTE!':s.phase==='generating'?'LOADING YOUR SHOW…':s.phase==='retrying-audio'?`NO AUDIO — RETRYING ${s.audioRetries}/3`:s.phase==='retrying-image'?`MISSING IMAGE — RETRYING ${s.imageRetries}/3`:s.phase==='unavailable'?'SORRY, SERVICE UNAVAILABLE':s.phase==='partial'?(s.imageUrl?'NO AUDIO — PLEASE RE-TUNE':'MISSING IMAGE — PLEASE RE-TUNE'):'';
    const caption=s.audioError||message;
    if(!screenImage){context.textAlign='center';context.fillStyle='#e9c778';context.font='bold 28px sans-serif';context.fillText('SUNSET 76 TELEVISION',w/2,125);context.fillStyle='#ffffff';context.font='bold 34px sans-serif';context.fillText(caption||(s.imageUrl?'LOADING PICTURE…':'PLEASE USE REMOTE!'),w/2,h/2);context.font='24px sans-serif';context.fillStyle='#bac7ce';context.fillText(s.channelName||'Remote control is beneath the television',w/2,h/2+55);}
    else if(caption&&s.phase!=='generating'){context.fillStyle='#071018dc';context.fillRect(0,h-70,w,70);context.textAlign='center';context.fillStyle='#ffffff';context.font='bold 23px sans-serif';context.fillText(caption,w/2,h-27);}
    display.needsUpdate=true;
  }
  function setScreenState(state){
    screenState=state;
    if(state.phase==='idle'||(state.phase==='generating'&&!state.imageUrl&&!state.audioUrl)){screenImage=null;imageVersion++;}
    drawScreen();
  }
  drawScreen();
  function setScreen(imageUrl) {
    const id = ++imageVersion;
    new THREE.TextureLoader().load(imageUrl, texture => {
      if (disposed || id !== imageVersion) { texture.dispose(); return; }
      screenImage=texture.image;drawScreen();texture.dispose();
    }, undefined, error => { if (!disposed) console.warn('TV splash texture unavailable', error); });
  }
  const paintingJobs = [];
  const ready = new GLTFLoader().loadAsync(glbUrl).then(gltf => {
    if (disposed) { release(gltf.scene); return; }
    group.add(gltf.scene);
    gltf.scene.traverse(object => {
      const mesh = object;
      if (!mesh.isMesh) return;
      if (mesh.name.startsWith('REMOTE')) mesh.userData.hotelRemote = String(config.id);
      if (mesh.userData.hotelTV) { screen = mesh; mesh.material = screenMaterial; }
      if (/canvas[ _]solid/.test(mesh.name) && config.eclipseImageUrl) {
        paintingJobs.push(new Promise(resolve => new THREE.TextureLoader().load(config.eclipseImageUrl, texture => {
          if (disposed) { texture.dispose(); resolve(); return; }
          texture.colorSpace = THREE.SRGBColorSpace; texture.flipY = false; textures.add(texture);
          mesh.material = new THREE.MeshStandardMaterial({ map: texture, roughness: .8 }); resolve();
        }, undefined, () => resolve())));
      }
    });
    return Promise.all(paintingJobs);
  });
  const contains = player => player.y >= 6 && player.y < 12 && player.x >= config.bounds.x[0] && player.x <= config.bounds.x[1] && player.z >= config.bounds.z[0] && player.z <= config.bounds.z[1];
  return {
    group, ready, config, contains, setScreen, setScreenState,
    handleClick(object) {
      if (disposed) return false;
      let node = object;
      while (node && node !== group) {
        if (String(node.userData?.hotelRemote) === String(config.id)) { onRemote(config.id); return true; }
        node = node.parent;
      }
      return false;
    },
    checkCollision(candidate, current, radius = .35) {
      if (disposed || Math.min(candidate.y, current.y) < 6 || Math.max(candidate.y, current.y) >= 12) return false;
      const feet = candidate.y - 2;
      return (config.colliders || []).some(b => feet < b.max[1] && candidate.y + .15 > b.min[1] && candidate.x >= b.min[0] - radius && candidate.x <= b.max[0] + radius && candidate.z >= b.min[2] - radius && candidate.z <= b.max[2] + radius);
    },
    dispose() { if (disposed) return; disposed = true; imageVersion++; release(group); screenMaterial.dispose(); textures.forEach(t => t.dispose()); group.removeFromParent(); group.clear(); }
  };
}

function release(root) {
  const geometry = new Set(), materials = new Set(), textures = new Set();
  root.traverse(o => { if (!o.isMesh) return; geometry.add(o.geometry); for (const m of Array.isArray(o.material) ? o.material : [o.material]) { materials.add(m); for (const v of Object.values(m)) if (v?.isTexture) textures.add(v); } });
  geometry.forEach(g => g.dispose()); materials.forEach(m => m.dispose()); textures.forEach(t => t.dispose());
}
