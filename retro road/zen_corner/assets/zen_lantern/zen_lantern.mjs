import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
function createZenTreeLightPole(options = {}) {
  const group = new THREE.Group();
  group.name = "ZenTree_CornerLantern_Ishidoro";
  if (options.position) group.position.copy(Array.isArray(options.position) ? new THREE.Vector3(...options.position) : options.position);
  group.scale.setScalar(options.scale ?? 1);
  group.rotation.y = options.rotationY ?? 0;
  const gold = new THREE.MeshStandardMaterial({ color: 9990191, metalness: 0.75, roughness: 0.35 });
  const wood = new THREE.MeshStandardMaterial({ color: 2364684, roughness: 0.82 });
  const glow = new THREE.MeshStandardMaterial({ color: 16765536, emissive: 16759602, emissiveIntensity: 1.8, roughness: 0.7 });
  function mesh(g, m, x, y, z) {
    const o = new THREE.Mesh(g, m);
    o.position.set(x, y, z);
    group.add(o);
    return o;
  }
  function cone(rt, rb, h, y, material, segments = 8) {
    return mesh(new THREE.CylinderGeometry(rt, rb, h, segments), material, 0, y, 0);
  }
  cone(0.24, 0.32, 0.1, 0.05, gold);
  cone(0.116, 0.116, 0.026, 0.11, gold);
  cone(0.1, 0.12, 0.75, 0.475, wood);
  cone(0.34, 0.2, 0.09, 0.895, wood);
  cone(0.345, 0.345, 0.02, 0.94, gold);
  mesh(new THREE.BoxGeometry(0.236, 0.228, 0.236), glow, 0, 1.07, 0);
  for (const x of [-0.12, 0.12]) for (const z of [-0.12, 0.12]) mesh(new THREE.BoxGeometry(0.02, 0.26, 0.02), gold, x, 1.07, z);
  for (const y of [0.948, 1.192]) for (const z of [-0.12, 0.12]) {
    mesh(new THREE.BoxGeometry(0.22, 0.016, 0.02), gold, 0, y, z);
    mesh(new THREE.BoxGeometry(0.02, 0.016, 0.22), gold, z, y, 0);
  }
  cone(0, 0.36, 0.24, 1.32, wood, 6);
  cone(0.368, 0.368, 0.02, 1.2, gold, 6);
  for (let k = 0; k < 6; k++) {
    const a = k * Math.PI / 3, p = new THREE.Vector3(0, 1.44, 0), q = new THREE.Vector3(Math.sin(a) * 0.35, 1.21, Math.cos(a) * 0.35), d = q.clone().sub(p);
    const o = mesh(new THREE.BoxGeometry(0.018, 0.016, d.length()), gold, ...p.clone().add(q).multiplyScalar(0.5).toArray());
    o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), d.normalize());
  }
  mesh(new THREE.SphereGeometry(0.045, 16, 12), gold, 0, 1.46, 0);
  if (options.addPointLight !== false) {
    const l = new THREE.PointLight(16707722, 1.8, 6);
    l.position.set(0, 1.07, 0);
    group.add(l);
  }
  return group;
}
const createZenLantern = createZenTreeLightPole;
function disposeZenLantern(group) {
  const geometries = /* @__PURE__ */ new Set(), materials = /* @__PURE__ */ new Set();
  group.traverse((o) => {
    if (o instanceof THREE.Mesh) {
      geometries.add(o.geometry);
      (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => materials.add(m));
    }
  });
  geometries.forEach((g) => g.dispose());
  materials.forEach((m) => m.dispose());
  group.removeFromParent();
}
export {
  createZenLantern,
  createZenTreeLightPole,
  disposeZenLantern
};
