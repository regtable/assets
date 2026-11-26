import * as THREE from 'https://esm.sh/three@0.180.0';
import { GLTFLoader } from 'https://esm.sh/three@0.180.0/examples/jsm/loaders/GLTFLoader.js';

export function createHotelRoom({ config, glbUrl, onRemote = () => {} }) {
  const group = new THREE.Group(); group.name = `Sunset 76 | room ${config.id}`;
  let disposed = false, screen = null, imageVersion = 0;
  const textures = new Set(), screenMaterial = new THREE.MeshBasicMaterial({ color: '#15212c' });
  function setScreen(imageUrl) {
    const id = ++imageVersion;
    new THREE.TextureLoader().load(imageUrl, texture => {
      if (disposed || id !== imageVersion) { texture.dispose(); return; }
      texture.colorSpace = THREE.SRGBColorSpace; texture.flipY = false;
      // Generated 3:2 splash is fitted into the TV's 16:9 screen without stretching.
      const aspect = texture.image.width / texture.image.height, target = 1.55 / .88;
      texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
      if (aspect < target) { texture.repeat.y = aspect / target; texture.offset.y = (1 - texture.repeat.y) / 2; }
      else { texture.repeat.x = target / aspect; texture.offset.x = (1 - texture.repeat.x) / 2; }
      const previous = screenMaterial.map; screenMaterial.color.set('#ffffff'); screenMaterial.map = texture; screenMaterial.needsUpdate = true;
      textures.add(texture); if (previous) { textures.delete(previous); previous.dispose(); }
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
    group, ready, config, contains, setScreen,
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
