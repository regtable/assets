/**
 * Zen Tree — standalone GLB loader and optional reusable falling foliage.
 *
 * No Zen Corner mesh, GLB, or loader is imported. The only cross-asset
 * dependency is the standalone petal emitter module.
 *
 * The host supplies its own configured GLTFLoader instance, avoiding
 * competing copies of Three.js and leaving scene/animation ownership with
 * the integrating application.
 */
export const ZEN_TREE_MODEL_URL = new URL('./zen_tree.glb', import.meta.url).href;
export const ZEN_TREE_PETAL_MODULE_URL = new URL('../zen_corner/petal_emitter.mjs', import.meta.url).href;

export const ZEN_TREE_PETAL_PRESET = Object.freeze({
  name: 'ZenTreeFallingPetals',
  shape: 'cherry',
  count: 160,
  size: 0.085,
  spawnRadius: 3.2,
  spawnHeight: [1.2, 6.8],
  floorY: 0.06,
  fallSpeed: [0.22, 0.48],
  swayAmplitude: [0.25, 0.60],
  swayFrequency: [1.2, 2.8],
  tumbleSpeed: [1.6, 3.8],
  colors: ['#191007', '#24180c', '#3d2812', '#5e401b',
           '#734b22', '#855b24', '#9a6a32', '#b88232']
});

function setPosition(target, value) {
  if (Array.isArray(value)) target.set(value[0] ?? 0, value[1] ?? 0, value[2] ?? 0);
  else if (value && typeof value === 'object') target.set(value.x ?? 0, value.y ?? 0, value.z ?? 0);
  else throw new TypeError('position must be [x, y, z] or a Vector3-like value');
}

function setScale(target, value) {
  if (typeof value === 'number') target.setScalar(value);
  else if (Array.isArray(value)) target.set(value[0] ?? 1, value[1] ?? 1, value[2] ?? 1);
  else if (value && typeof value === 'object') target.set(value.x ?? 1, value.y ?? 1, value.z ?? 1);
  else throw new TypeError('scale must be a number, [x, y, z] or Vector3-like value');
}

/**
 * @param {object} options
 * @param {object} options.loader - App-supplied THREE.GLTFLoader (loadAsync or load).
 * @param {object} [options.scene] - Scene/group to attach the loaded tree.
 * @param {string} [options.modelUrl] - Overrides the packaged GLB URL.
 * @param {boolean} [options.petals=true] - Attach the reusable emitter.
 * @param {string} [options.emitterModuleUrl] - Overrides the sibling emitter URL.
 * @param {Function} [options.emitterFactory] - Optional injected createPetalEmitter.
 * @param {object} [options.emitterOptions] - Overrides the default cherry preset.
 * @param {number[]|object} [options.position] - World position of planter base.
 * @param {number|number[]|object} [options.scale]
 * @param {number} [options.rotationY]
 *
 * @returns {Promise<{group, update, checkCollision, setDiagnosticMode,
 *   getDiagnosticMode, emitter, dispose, setPosition, setWind}>}
 */
export async function loadZenTree({
  loader,
  scene,
  modelUrl = ZEN_TREE_MODEL_URL,
  petals = true,
  emitterModuleUrl = ZEN_TREE_PETAL_MODULE_URL,
  emitterFactory,
  emitterOptions = {},
  position = [0, 0, 0],
  rotationY = 0,
  scale = 1
} = {}) {
  if (!loader || (typeof loader.loadAsync !== 'function' && typeof loader.load !== 'function')) {
    throw new TypeError('loadZenTree requires a configured GLTFLoader as options.loader');
  }
  const gltf = typeof loader.loadAsync === 'function'
    ? await loader.loadAsync(modelUrl)
    : await new Promise((resolve, reject) => loader.load(modelUrl, resolve, undefined, reject));

  const group = gltf?.scene ?? gltf?.scenes?.[0];
  if (!group || typeof group.add !== 'function') {
    throw new Error('Zen Tree GLB did not contain a usable scene');
  }
  group.name = 'ZenTreeStandalone';
  setPosition(group.position, position);
  setScale(group.scale, scale);
  group.rotation.y = rotationY;
  group.userData.zenTree = true;

  let emitter = null;
  if (petals) {
    const makeEmitter = emitterFactory ?? (await import(emitterModuleUrl)).createPetalEmitter;
    if (typeof makeEmitter !== 'function') throw new TypeError('Missing createPetalEmitter export');
    emitter = makeEmitter({ ...ZEN_TREE_PETAL_PRESET, ...emitterOptions });
    if (!emitter?.group || typeof emitter.update !== 'function') {
      throw new TypeError('Petal emitter did not return a valid emitter instance');
    }
    const anchor = group.getObjectByName?.('FoliageEmitterAnchor') ?? group;
    anchor.add(emitter.group);
  }

  if (scene) scene.add(group);

  const canopy = group.getObjectByName?.('SakuraCanopyBronzeGold');
  let mode = 'NORMAL';
  let disposed = false;

  function update(deltaSeconds) {
    if (!disposed) emitter?.update(deltaSeconds);
  }
  function checkCollision(candidatePos, playerRadius = 0) {
    if (disposed || !group.visible) return false;
    group.updateWorldMatrix?.(true, false);
    const center = group.getWorldPosition(group.position.clone());
    const worldScale = group.getWorldScale(group.scale.clone());
    const radius = 1.80 * Math.max(Math.abs(worldScale.x), Math.abs(worldScale.z)) + playerRadius;
    return Math.hypot(candidatePos.x - center.x, candidatePos.z - center.z) < radius;
  }
  function setDiagnosticMode(nextMode = 'NORMAL') {
    if (disposed) return;
    const valid = ['NORMAL', 'NO CANOPY', 'PAUSE PETALS', 'TREE OFF', 'GARDEN OFF'];
    if (!valid.includes(nextMode)) throw new RangeError('Unknown Zen Tree diagnostic mode: ' + nextMode);
    mode = nextMode;
    group.visible = true;
    if (canopy) canopy.visible = true;
    emitter?.start();
    if (nextMode === 'NO CANOPY' && canopy) canopy.visible = false;
    if (nextMode === 'PAUSE PETALS') emitter?.stop();
    if (nextMode === 'TREE OFF' || nextMode === 'GARDEN OFF') {
      group.visible = false;
      emitter?.stop();
    }
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    emitter?.dispose();
    group.removeFromParent();
    const geometries = new Set();
    const materials = new Set();
    group.traverse(object => {
      if (object.isMesh) {
        if (object.geometry) geometries.add(object.geometry);
        const list = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of list) if (material) materials.add(material);
      }
    });
    for (const geo of geometries) geo.dispose();
    for (const material of materials) material.dispose();
  }
  return {
    group,
    emitter,
    update,
    checkCollision,
    setDiagnosticMode,
    getDiagnosticMode: () => mode,
    setPosition(value) { if (!disposed) setPosition(group.position, value); },
    setWind(value) { if (!disposed) emitter?.setWind(value); },
    dispose,
    get disposed() { return disposed; }
  };
}
export const createZenTree = loadZenTree;
