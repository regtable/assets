/**
 * Reusable lightweight foliage emitter for Three.js r180.
 * Procedural, slightly curled shapes batched in one InstancedMesh per type.
 * Units are metres and coordinates are local to emitter.group.
 */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

export const FOLIAGE_SHAPES = Object.freeze(['cherry', 'maple', 'oak', 'ginkgo', 'birch', 'willow']);
export const ZEN_PETAL_COLORS = Object.freeze([
  '#191007', '#24180c', '#3d2812', '#5e401b',
  '#734b22', '#855b24', '#9a6a32', '#b88232'
]);

const clamp = (value, lo, hi) => Math.max(lo, Math.min(hi, value));
const randomBetween = (rng, range) => range[0] + rng() * (range[1] - range[0]);
const asRange = (value, fallback) => {
  if (Array.isArray(value) && value.length === 2 && value.every(Number.isFinite)) {
    return value[0] <= value[1] ? value : [value[1], value[0]];
  }
  if (Number.isFinite(value)) return [value, value];
  return fallback;
};
const asVector3 = (value, fallback = [0, 0, 0]) => {
  const v = value ?? fallback;
  return Array.isArray(v)
    ? new THREE.Vector3(v[0] ?? 0, v[1] ?? 0, v[2] ?? 0)
    : new THREE.Vector3(v.x ?? 0, v.y ?? 0, v.z ?? 0);
};

function polygon(points) {
  const shape = new THREE.Shape();
  shape.moveTo(...points[0]);
  for (let i = 1; i < points.length; i++) shape.lineTo(...points[i]);
  shape.closePath();
  return shape;
}

/** Return one standalone geometry; the caller owns and disposes it. */
export function createFoliageGeometry(shape = 'cherry') {
  if (!FOLIAGE_SHAPES.includes(shape)) {
    throw new RangeError('Unknown foliage shape: ' + shape);
  }
  let path;
  switch (shape) {
    case 'cherry':
      path = new THREE.Shape();
      path.moveTo(0, -0.50);
      path.bezierCurveTo(-0.18, -0.28, -0.35, 0.04, -0.30, 0.31);
      path.bezierCurveTo(-0.23, 0.47, -0.07, 0.49, 0, 0.45);
      path.bezierCurveTo(0.07, 0.49, 0.23, 0.47, 0.30, 0.31);
      path.bezierCurveTo(0.35, 0.04, 0.18, -0.28, 0, -0.50);
      path.closePath();
      break;
    case 'maple':
      path = polygon([
        [0, -0.50], [-0.08, -0.18], [-0.30, -0.28], [-0.24, -0.08],
        [-0.49, 0.03], [-0.29, 0.14], [-0.40, 0.37], [-0.16, 0.31],
        [0, 0.55], [0.16, 0.31], [0.40, 0.37], [0.29, 0.14],
        [0.49, 0.03], [0.24, -0.08], [0.30, -0.28], [0.08, -0.18]
      ]);
      break;
    case 'oak': {
      const left = [], right = [];
      for (let i = 0; i <= 16; i++) {
        const y = -0.48 + i / 16;
        const envelope = Math.pow(Math.max(0, 1 - Math.abs(y - 0.02) * 1.75), 0.6);
        const width = (0.14 + 0.25 * envelope) * (0.83 + 0.17 * Math.cos(i * Math.PI * 0.75));
        left.push([-width, y]); right.push([width, y]);
      }
      path = polygon([...left, ...right.reverse()]);
      break;
    }
    case 'ginkgo': {
      const points = [[0, -0.5], [-0.11, -0.21]];
      for (let i = 0; i <= 14; i++) {
        const theta = Math.PI - i * Math.PI / 14;
        const r = i === 7 ? 0.37 : 0.54;
        points.push([Math.cos(theta) * r, 0.02 + Math.sin(theta) * r]);
      }
      points.push([0.11, -0.21]);
      path = polygon(points);
      break;
    }
    case 'birch': {
      const points = [[0, -0.50]];
      for (let i = 1; i <= 11; i++) {
        const y = -0.50 + i / 11;
        const width = 0.32 * Math.sin(Math.PI * i / 11);
        points.push([-width * (i % 2 ? 1.10 : 0.91), y]);
      }
      for (let i = 10; i >= 1; i--) {
        const y = -0.50 + i / 11;
        const width = 0.32 * Math.sin(Math.PI * i / 11);
        points.push([width * (i % 2 ? 1.10 : 0.91), y]);
      }
      path = polygon(points);
      break;
    }
    case 'willow':
      path = new THREE.Shape();
      path.moveTo(0, -0.57);
      path.bezierCurveTo(-0.10, -0.34, -0.10, 0.14, -0.035, 0.45);
      path.quadraticCurveTo(0, 0.60, 0.035, 0.45);
      path.bezierCurveTo(0.10, 0.14, 0.10, -0.34, 0, -0.57);
      path.closePath();
      break;
  }
  const geometry = new THREE.ShapeGeometry(path, 5);
  const positions = geometry.getAttribute('position');
  const curl = shape === 'willow' ? 0.13 : shape === 'cherry' ? 0.04 : 0.08;
  for (let i = 0; i < positions.count; i++) {
    const x = positions.getX(i), y = positions.getY(i);
    positions.setZ(i, -(x * x) * curl - y * 0.012);
  }
  positions.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

/**
 * options: { shape, shapes, geometry, count, size, colors, opacity,
 *   spawnRadius, spawnHeight:[min,max], floorY, fallSpeed:[min,max],
 *   swayAmplitude:[min,max], swayFrequency:[min,max], tumbleSpeed:[min,max],
 *   wind:[x,y,z], position:[x,y,z], random:()=>number, active:boolean }
 *
 * If geometry is supplied, the emitter clones it for safe disposal.
 * Call update(deltaSeconds) once each frame.
 */
export function createPetalEmitter(options = {}) {
  const rng = options.random ?? Math.random;
  const count = clamp(Math.floor(options.count ?? 160), 0, 10000);
  const shapeNames = options.geometry
    ? ['custom']
    : (options.shapes?.length ? options.shapes : [options.shape ?? 'cherry']);
  for (const name of shapeNames) {
    if (name !== 'custom' && !FOLIAGE_SHAPES.includes(name)) {
      throw new RangeError('Unknown foliage shape: ' + name);
    }
  }
  const radius = Math.max(0, options.spawnRadius ?? 3.2);
  const floorY = options.floorY ?? 0.06;
  const spawnHeight = asRange(options.spawnHeight, [1.20, 6.80]);
  const fallSpeed = asRange(options.fallSpeed, [0.22, 0.48]);
  const swayAmplitude = asRange(options.swayAmplitude, [0.25, 0.60]);
  const swayFrequency = asRange(options.swayFrequency, [1.2, 2.8]);
  const tumbleSpeed = asRange(options.tumbleSpeed, [1.6, 3.8]);
  const colors = options.colors?.length ? options.colors : ZEN_PETAL_COLORS;
  const size = Math.max(0.001, options.size ?? 0.085);
  const wind = asVector3(options.wind);
  const group = new THREE.Group();
  group.name = options.name ?? 'FoliageEmitter';
  group.position.copy(asVector3(options.position));

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff, side: THREE.DoubleSide,
    transparent: true, opacity: clamp(options.opacity ?? 0.94, 0, 1),
    depthWrite: false, fog: false
  });
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const batches = shapeNames.map(name => ({name, particles: [], mesh: null}));
  const allParticles = [];
  const spawn = (p, initial = false) => {
    const angle = rng() * Math.PI * 2;
    const distance = Math.sqrt(rng()) * radius;
    p.baseX = Math.cos(angle) * distance;
    p.baseZ = Math.sin(angle) * distance;
    p.y = initial ? randomBetween(rng, spawnHeight) : randomBetween(rng, [Math.max(floorY + 0.1, spawnHeight[0]), spawnHeight[1]]);
    p.phase = rng() * Math.PI * 2;
    p.driftX = 0;
    p.driftZ = 0;
  };
  for (let i = 0; i < count; i++) {
    const batch = batches[i % batches.length];
    const p = {
      batch, index: batch.particles.length,
      baseX: 0, baseZ: 0, y: 0, phase: 0,
      driftX: 0, driftZ: 0,
      scale: 0.85 + rng() * 0.45,
      falling: randomBetween(rng, fallSpeed),
      swayAmp: randomBetween(rng, swayAmplitude),
      swayFreq: randomBetween(rng, swayFrequency),
      tumbleFreq: randomBetween(rng, tumbleSpeed),
      rotX: rng() * Math.PI * 2, rotY: rng() * Math.PI * 2, rotZ: rng() * Math.PI * 2,
      rotSpeedX: (rng() - 0.5) * 2.8,
      rotSpeedY: (rng() - 0.5) * 2.4,
      rotSpeedZ: (rng() - 0.5) * 2.6,
      color: colors[i % colors.length]
    };
    spawn(p, true);
    batch.particles.push(p);
    allParticles.push(p);
  }

  for (const batch of batches) {
    if (!batch.particles.length) continue;
    const geometry = batch.name === 'custom'
      ? options.geometry.clone() : createFoliageGeometry(batch.name);
    const mesh = new THREE.InstancedMesh(geometry, material, batch.particles.length);
    mesh.name = 'FoliageEmitter | ' + batch.name;
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    mesh.frustumCulled = false;
    batch.mesh = mesh;
    group.add(mesh);
    for (const p of batch.particles) {
      color.set(p.color);
      mesh.setColorAt(p.index, color);
    }
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }

  let clock = 0;
  let active = options.active !== false;
  let disposed = false;
  const place = p => {
    const x = clamp(p.baseX + p.driftX + Math.sin(clock * p.swayFreq + p.phase) * p.swayAmp, -radius, radius);
    const z = clamp(p.baseZ + p.driftZ + Math.cos(clock * p.swayFreq * 0.8 + p.phase) * p.swayAmp * 0.7, -radius, radius);
    const tilt = Math.sin(clock * p.tumbleFreq + p.phase) * 0.35;
    dummy.position.set(x, p.y, z);
    dummy.rotation.set(p.rotX + tilt, p.rotY, p.rotZ + tilt * 0.6);
    dummy.scale.setScalar(size * p.scale);
    dummy.updateMatrix();
    p.batch.mesh.setMatrixAt(p.index, dummy.matrix);
  };
  for (const p of allParticles) place(p);
  for (const batch of batches) if (batch.mesh) batch.mesh.instanceMatrix.needsUpdate = true;

  function update(delta = 0) {
    if (!active || disposed || !Number.isFinite(delta) || delta <= 0) return;
    const dt = Math.min(delta, 0.1);
    clock += dt;
    for (const p of allParticles) {
      p.y -= p.falling * dt;
      if (p.y < floorY) spawn(p);
      p.driftX += wind.x * dt;
      p.driftZ += wind.z * dt;
      p.rotX += p.rotSpeedX * dt;
      p.rotY += p.rotSpeedY * dt;
      p.rotZ += p.rotSpeedZ * dt;
      place(p);
    }
    for (const batch of batches) if (batch.mesh) batch.mesh.instanceMatrix.needsUpdate = true;
  }
  function setPosition(valueOrX, y, z) {
    if (disposed) return;
    if (typeof valueOrX === 'number') group.position.set(valueOrX, y ?? 0, z ?? 0);
    else group.position.copy(asVector3(valueOrX));
  }
  function setWind(valueOrX, y, z) {
    if (disposed) return;
    if (typeof valueOrX === 'number') wind.set(valueOrX, y ?? 0, z ?? 0);
    else wind.copy(asVector3(valueOrX));
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    active = false;
    group.removeFromParent();
    for (const batch of batches) {
      if (batch.mesh) {
        batch.mesh.geometry.dispose();
        group.remove(batch.mesh);
      }
    }
    material.dispose();
  }
  return {
    group, update, setPosition, setWind,
    start() { if (!disposed) active = true; },
    stop() { active = false; },
    dispose,
    get active() { return active; },
    get disposed() { return disposed; },
    get particleCount() { return count; }
  };
}

export const createFoliageEmitter = createPetalEmitter;
