/**
 * Standalone procedural Zen Tree built from the original Three.js source.
 * The GLB remains a separate, static, offline Blender reference.
 */
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';
import {createPetalEmitter, ZEN_PETAL_COLORS} from '../zen_corner/petal_emitter.mjs';

export const ZEN_TREE_PETAL_PRESET = Object.freeze({
  shape: 'cherry', count: 160, size: 0.085,
  spawnRadius: 3.2, spawnHeight: [1.2, 6.8], floorY: 0.06,
  fallSpeed: [0.22, 0.48], swayAmplitude: [0.25, 0.60],
  swayFrequency: [1.2, 2.8], tumbleSpeed: [1.6, 3.8],
  colors: ZEN_PETAL_COLORS
});
function asVector3(value) {
  return Array.isArray(value)
    ? new THREE.Vector3(value[0]??0,value[1]??0,value[2]??0)
    : new THREE.Vector3(value?.x??0,value?.y??0,value?.z??0);
}
function applyScale(target, scale) {
  if (typeof scale === 'number') target.setScalar(scale);
  else if (Array.isArray(scale)) target.set(scale[0]??1,scale[1]??1,scale[2]??1);
  else target.set(scale?.x??1,scale?.y??1,scale?.z??1);
}
function makeMaterials(overrides={}) {
  const owned = [];
  function pick(key,make) {
    if (overrides[key]) return overrides[key];
    const mat=make();owned.push(mat);return mat;
  }
  // Original ./trim textures were not included; these can be overridden.
  const barkMat=pick('treeBarkMat',()=>new THREE.MeshStandardMaterial({
    color:'#4b3020',roughness:0.92,metalness:0.03
  }));
  const soilMat=pick('pottingSoilMat',()=>new THREE.MeshStandardMaterial({
    color:'#241b12',roughness:1,metalness:0
  }));
  const darkGoldTrimMat=pick('darkGoldTrimMat',()=>new THREE.MeshStandardMaterial({
    color:'#a77932',roughness:0.38,metalness:0.70,side:THREE.DoubleSide
  }));
  return {barkMat,soilMat,darkGoldTrimMat,owned};
}
function mergeBufferGeometries(geos) {
  let totalVerts = 0;
  let totalIndices = 0;
  for (let i = 0; i < geos.length; i++) {
    totalVerts += geos[i].attributes.position.count;
    totalIndices += geos[i].index ? geos[i].index.count : 0;
  }
  const posArr = new Float32Array(totalVerts * 3);
  const normArr = new Float32Array(totalVerts * 3);
  const uvArr = new Float32Array(totalVerts * 2);
  const idxArr = totalVerts > 65535 ? new Uint32Array(totalIndices) : new Uint16Array(totalIndices);

  let vOffset = 0;
  let iOffset = 0;
  for (let i = 0; i < geos.length; i++) {
    const g = geos[i];
    posArr.set(g.attributes.position.array, vOffset * 3);
    if (g.attributes.normal) {
      normArr.set(g.attributes.normal.array, vOffset * 3);
    }
    if (g.attributes.uv) {
      uvArr.set(g.attributes.uv.array, vOffset * 2);
    }
    if (g.index) {
      const idx = g.index;
      for (let j = 0; j < idx.count; j++) {
        idxArr[iOffset + j] = idx.getX(j) + vOffset;
      }
      iOffset += idx.count;
    }
    vOffset += g.attributes.position.count;
    g.dispose();
  }

  const merged = new THREE.BufferGeometry();
  merged.setAttribute("position", new THREE.BufferAttribute(posArr, 3));
  merged.setAttribute("normal", new THREE.BufferAttribute(normArr, 3));
  merged.setAttribute("uv", new THREE.BufferAttribute(uvArr, 2));
  if (totalIndices > 0) {
    merged.setIndex(new THREE.BufferAttribute(idxArr, 1));
  }
  return merged;
}

/**
 * Creates the tree directly from geometry (synchronous).
 * options: position, scene, rotationY, scale, petals,
 *          emitterOptions, emitterFactory, materials.
 */
export function createZenTree({
  position=[0,0,0], scene, rotationY=0, scale=1, petals=true,
  emitterOptions={}, emitterFactory=createPetalEmitter, materials={}
}={}) {
  const {barkMat,soilMat,darkGoldTrimMat,owned}=makeMaterials(materials);
  const treeGroup = new THREE.Group();
  // Planter pivot is at local origin; world placement supplied at creation.
  treeGroup.position.set(0, 0, 0);

  const POT_HEIGHT = 0.52;
  const POT_RADIUS_TOP = 1.76;
  const POT_RADIUS_BTM = 1.62;
  const POT_RIM_WIDTH = 0.12;
  const POT_RIM_HEIGHT = 0.08;

  // 1. Base Plinth Collar at sand level (Y: 0.00m to 0.05m, radius 1.66m)
  // Structured annular geometry with continuous UVs: dark bronze base at sand, golden luster streak around center
  const createBasePlinthGeometry = (
    rIn,
    rOutTop,
    rOutBtm,
    height,
    segments = 64
  ) => {
    const positions = [], normals = [], uvs = [], indices = [];
    const rMidCollar = (rIn + rOutTop) / 2;
    const profile = [
      [rIn, height, 0.12],          // Inner top edge touching pot body in dark bronze
      [rMidCollar, height, 0.50],   // Collar ledge crest (golden luster peak u=0.50!)
      [rOutTop, height, 0.85],      // Outer top shoulder of ledge (dark bronze)
      [rOutTop, height * 0.50, 0.50],// Mid-height of vertical face (golden luster streak!)
      [rOutBtm, 0.00, 0.08],        // Bottom edge at sand (deep antique bronze)
    ];
    const numPts = profile.length;
    const vRepeats = 8;

    for (let s = 0; s <= segments; s++) {
      const uFrac = s / segments;
      const theta = uFrac * Math.PI * 2;
      const cosT = Math.cos(theta), sinT = Math.sin(theta);

      for (let p = 0; p < numPts; p++) {
        const [r, y, uVal] = profile[p];
        positions.push(r * cosT, y, r * sinT);
        uvs.push(uVal, uFrac * vRepeats);

        if (p < 3) {
          normals.push(0, 1, 0); // Top collar ledge facing UP
        } else {
          normals.push(cosT, 0.1, sinT); // Outer face facing outward
        }
      }
    }

    for (let s = 0; s < segments; s++) {
      const ringA = s * numPts, ringB = (s + 1) * numPts;
      for (let p = 0; p < numPts - 1; p++) {
        indices.push(ringA + p, ringB + p, ringA + p + 1);
        indices.push(ringA + p + 1, ringB + p, ringB + p + 1);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    return geo;
  };

  const potBasePlinthGeo = createBasePlinthGeometry(
    POT_RADIUS_BTM - 0.02,
    POT_RADIUS_BTM + 0.02,
    POT_RADIUS_BTM + 0.04,
    0.05,
    64
  );
  const potBasePlinth = new THREE.Mesh(potBasePlinthGeo, darkGoldTrimMat);
  potBasePlinth.position.y = 0.0;
  treeGroup.add(potBasePlinth);

  // 2. Raised Pot Body (Tapered architectural cylinder from Y: 0.04m to POT_HEIGHT)
  const potBodyH = POT_HEIGHT - 0.04;
  const potBodyGeo = new THREE.CylinderGeometry(POT_RADIUS_TOP, POT_RADIUS_BTM, potBodyH, 64, 1, true);
  const pbUv = potBodyGeo.attributes.uv;
  if (pbUv) {
    for (let i = 0; i < pbUv.count; i++) {
      const origU = pbUv.getX(i);
      const origV = pbUv.getY(i);
      // Full contrast range: 0.08 dark bronze at bottom, 0.50 golden luster streak at waist, 0.92 dark bronze at top rim
      const u = 0.08 + origV * 0.84;
      pbUv.setXY(i, u, origU * 6.0);
    }
    pbUv.needsUpdate = true;
  }
  const potBody = new THREE.Mesh(potBodyGeo, darkGoldTrimMat);
  potBody.position.y = 0.04 + potBodyH / 2;
  treeGroup.add(potBody);

  // 360° Upward-Facing Gold Planter Rim: v=0.50 shine peak across top face with normal pointing straight UP [0, 1, 0]
  const createCircularPlanterRimGeometry = (
    rIn,
    rOut,
    topY,
    height,
    segments = 64
  ) => {
    const rMid = (rIn + rOut) / 2;
    const profile = [
      [rIn, topY - height, 0.08],       // Inner bottom against soil (dark bronze)
      [rIn, topY - 0.01, 0.22],         // Inner vertical face
      [rIn + 0.015, topY, 0.38],        // Inner chamfer
      [rMid, topY + 0.012, 0.50],       // Top crown crest facing upward (radiant gold luster peak!)
      [rOut - 0.015, topY, 0.62],       // Outer chamfer
      [rOut, topY - 0.01, 0.78],        // Outer top edge
      [rOut, topY - height, 0.92],      // Outer bottom face (dark bronze)
    ];

    const positions = [], normals = [], uvs = [];
    const numProfilePts = profile.length;
    const uRepeats = 8;

    for (let s = 0; s <= segments; s++) {
      const uFrac = s / segments;
      const theta = uFrac * Math.PI * 2;
      const cosT = Math.cos(theta), sinT = Math.sin(theta);

      for (let p = 0; p < numProfilePts; p++) {
        const [r, y, v] = profile[p];
        positions.push(r * cosT, y, r * sinT);
        uvs.push(v, uFrac * uRepeats);

        if (p === 0) normals.push(-cosT, 0, -sinT);
        else if (p === 1) normals.push(-cosT * 0.7, 0.7, -sinT * 0.7);
        else if (p === 2) normals.push(0, 1, 0); // Top face normal points straight UP!
        else if (p === 5) normals.push(cosT * 0.7, 0.7, sinT * 0.7);
        else if (p === 6) normals.push(cosT, 0, sinT);
        else normals.push(cosT * 0.3, 0.9, sinT * 0.3);
      }
    }

    const indices = [];
    for (let s = 0; s < segments; s++) {
      const ringA = s * numProfilePts, ringB = (s + 1) * numProfilePts;
      for (let p = 0; p < numProfilePts - 1; p++) {
        indices.push(ringA + p, ringB + p, ringA + p + 1);
        indices.push(ringA + p + 1, ringB + p, ringB + p + 1);
      }
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
    geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
    geo.setIndex(indices);
    return geo;
  };

  // 3. Proud raised gold rim capping the top of the pot (rises cleanly above the soil)
  const planterRimGeo = createCircularPlanterRimGeometry(
    POT_RADIUS_TOP - POT_RIM_WIDTH,
    POT_RADIUS_TOP + 0.04,
    POT_HEIGHT,
    POT_RIM_HEIGHT,
    64
  );
  const planterRim = new THREE.Mesh(planterRimGeo, darkGoldTrimMat);
  planterRim.name = "ZenGardenTreePlanterGoldRim360";
  treeGroup.add(planterRim);

  // 4. Sunken Potting Soil Bed inside the pot (8cm below the rim so the gold lip stands proud!)
  const soilBed = new THREE.Mesh(
    new THREE.CylinderGeometry(POT_RADIUS_TOP - 0.04, POT_RADIUS_TOP - 0.06, 0.12, 48),
    soilMat
  );
  soilBed.position.y = POT_HEIGHT - 0.135;
  treeGroup.add(soilBed);

  // Sturdy upright sculptural trunk rising cleanly from inside the pot
  const trunkCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, POT_HEIGHT - 0.06, 0),
    new THREE.Vector3(0.08, POT_HEIGHT + 0.65, 0.05),
    new THREE.Vector3(-0.06, POT_HEIGHT + 1.40, -0.04),
    new THREE.Vector3(0.02, 2.60, 0.01)
  ]);
  const trunkGeo = new THREE.TubeGeometry(trunkCurve, 18, 0.30, 12, false);
  const trunkMesh = new THREE.Mesh(trunkGeo, barkMat);
  treeGroup.add(trunkMesh);

  // Ascending scaffold limbs spreading outward and climbing upward (Y: 2.50m to 5.85m)
  const boughCurves = [
    // 1. North-West main bough
    {
      curve: [
        new THREE.Vector3(0.02, 2.50, 0.01),
        new THREE.Vector3(-0.95, 3.35, -0.65),
        new THREE.Vector3(-1.85, 4.25, -1.25),
        new THREE.Vector3(-2.60, 4.90, -1.60)
      ],
      rad: 0.15
    },
    // 1b. North-West sub-branchlet
    {
      curve: [
        new THREE.Vector3(-1.85, 4.25, -1.25),
        new THREE.Vector3(-2.25, 4.75, -0.55),
        new THREE.Vector3(-2.85, 5.15, -0.30)
      ],
      rad: 0.09
    },
    // 2. North-East main bough
    {
      curve: [
        new THREE.Vector3(0.02, 2.50, 0.01),
        new THREE.Vector3(0.85, 3.40, -0.75),
        new THREE.Vector3(1.75, 4.30, -1.35),
        new THREE.Vector3(2.50, 4.95, -1.65)
      ],
      rad: 0.15
    },
    // 2b. North-East sub-branchlet
    {
      curve: [
        new THREE.Vector3(1.75, 4.30, -1.35),
        new THREE.Vector3(2.20, 4.80, -0.60),
        new THREE.Vector3(2.80, 5.20, -0.35)
      ],
      rad: 0.09
    },
    // 3. South-West main bough
    {
      curve: [
        new THREE.Vector3(0.02, 2.50, 0.01),
        new THREE.Vector3(-0.85, 3.30, 0.75),
        new THREE.Vector3(-1.65, 4.15, 1.45),
        new THREE.Vector3(-2.40, 4.80, 1.85)
      ],
      rad: 0.15
    },
    // 3b. South-West sub-branchlet
    {
      curve: [
        new THREE.Vector3(-1.65, 4.15, 1.45),
        new THREE.Vector3(-2.15, 4.65, 0.75),
        new THREE.Vector3(-2.75, 5.05, 0.50)
      ],
      rad: 0.09
    },
    // 4. South-East main bough
    {
      curve: [
        new THREE.Vector3(0.02, 2.50, 0.01),
        new THREE.Vector3(0.90, 3.35, 0.70),
        new THREE.Vector3(1.80, 4.20, 1.35),
        new THREE.Vector3(2.55, 4.85, 1.75)
      ],
      rad: 0.15
    },
    // 4b. South-East sub-branchlet
    {
      curve: [
        new THREE.Vector3(1.80, 4.20, 1.35),
        new THREE.Vector3(2.25, 4.70, 0.65),
        new THREE.Vector3(2.85, 5.10, 0.40)
      ],
      rad: 0.09
    },
    // 5. Central upward spire bough
    {
      curve: [
        new THREE.Vector3(0.02, 2.50, 0.01),
        new THREE.Vector3(-0.15, 3.70, -0.10),
        new THREE.Vector3(0.12, 4.85, 0.10),
        new THREE.Vector3(0.00, 5.85, 0.00)
      ],
      rad: 0.14
    }
  ];

  boughCurves.forEach(({ curve, rad }) => {
    const bCurve = new THREE.CatmullRomCurve3(curve);
    const bMesh = new THREE.Mesh(new THREE.TubeGeometry(bCurve, 16, rad, 8, false), barkMat);
    treeGroup.add(bMesh);
  });

  const createSakuraSprayTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, 512, 512);

      ctx.strokeStyle = "#27160d";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(256, 490);
      ctx.quadraticCurveTo(256, 330, 200, 210);
      ctx.moveTo(235, 310);
      ctx.quadraticCurveTo(310, 240, 390, 130);
      ctx.moveTo(210, 210);
      ctx.quadraticCurveTo(145, 145, 85, 95);
      ctx.stroke();

      const drawFlower = (fx, fy, r, ang, petalColor, centerColor) => {
        ctx.save();
        ctx.translate(fx, fy);
        ctx.rotate(ang);

        for (let p = 0; p < 5; p++) {
          const pAngle = (p * Math.PI * 2) / 5;
          ctx.save();
          ctx.rotate(pAngle);

          const pGrad = ctx.createRadialGradient(0, r * 0.4, 1, 0, r * 0.55, r);
          pGrad.addColorStop(0.0, "#b88232");
          pGrad.addColorStop(0.40, petalColor);
          pGrad.addColorStop(1.0, "#191007");
          ctx.fillStyle = pGrad;

          ctx.beginPath();
          ctx.ellipse(0, r * 0.55, r * 0.38, r * 0.55, 0, 0, Math.PI * 2);
          ctx.fill();

          ctx.restore();
        }

        ctx.fillStyle = centerColor;
        ctx.beginPath();
        ctx.arc(0, 0, r * 0.22, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      };

      const flowerColors = [
        "#191007",
        "#24180c",
        "#24180c",
        "#3d2812",
        "#3d2812",
        "#5e401b",
        "#5e401b",
        "#734b22",
        "#855b24",
        "#855b24",
        "#9a6a32",
        "#b88232",
        "#c6923b"
      ];
      for (let i = 0; i < 90; i++) {
        const ang = Math.random() * Math.PI * 2;
        const dist = Math.pow(Math.random(), 0.7) * 215;
        const fx = 256 + Math.cos(ang) * dist;
        const fy = 256 + Math.sin(ang) * (dist * 0.85);
        const fr = 16 + Math.random() * 22;
        const fCol = flowerColors[Math.floor(Math.random() * flowerColors.length)];
        drawFlower(fx, fy, fr, Math.random() * Math.PI, fCol, "#c6923b");
      }

      for (let b = 0; b < 45; b++) {
        const bx = 40 + Math.random() * 432;
        const by = 40 + Math.random() * 432;
        ctx.fillStyle = "#3d2812";
        ctx.beginPath();
        ctx.ellipse(bx, by, 7, 12, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  };

  const sprayTex = createSakuraSprayTexture();
  const sprayMat = new THREE.MeshStandardMaterial({
    map: sprayTex,
    transparent: true,
    alphaTest: 0.25,
    roughness: 0.55,
    metalness: 0.05,
    side: THREE.DoubleSide
  });

  const canopyGeos = [];

  const addBlossomCluster = (x, y, z, scale, droopAngle = 0) => {
    const angles = [0, Math.PI / 2, Math.PI / 4, -Math.PI / 4];
    angles.forEach((rotY) => {
      const cardGeo = new THREE.PlaneGeometry(scale, scale);
      if (droopAngle !== 0) {
        cardGeo.rotateX(droopAngle);
      }
      cardGeo.rotateY(rotY);
      cardGeo.translate(x, y, z);
      canopyGeos.push(cardGeo);
    });
  };

  // 1. Lower Canopy Umbrella Skirt (Y: 3.15m to 3.80m) — airy perimeter, open center
  const skirtCount = 14;
  for (let s = 0; s < skirtCount; s++) {
    const ang = (s / skirtCount) * Math.PI * 2 + 0.1;
    const r = 2.40 + Math.sin(s * 2.5) * 0.45;
    const sx = Math.cos(ang) * r;
    const sz = Math.sin(ang) * r;
    const sy = 3.15 + (s % 3) * 0.25;
    addBlossomCluster(sx, sy, sz, 1.65 + Math.random() * 0.35);
  }

  // 2. Mid Canopy Spreading Dome (Y: 3.90m to 5.40m) — follows branch scaffolding
  for (let my = 3.90; my <= 5.40; my += 0.50) {
    const yFactor = 1.0 - Math.pow((my - 4.65) / 1.5, 2);
    const targetRadius = 1.80 + Math.max(0.3, yFactor) * 1.35;
    const count = 9;
    for (let c = 0; c < count; c++) {
      const ang = (c / count) * Math.PI * 2 + my * 0.65;
      const r = targetRadius * (0.85 + Math.random() * 0.30);
      const mx = Math.cos(ang) * r;
      const mz = Math.sin(ang) * r;
      addBlossomCluster(mx, my, mz, 1.75 + Math.random() * 0.40);
    }
  }

  // 3. Upper Canopy & Crest Dome (Y: 5.50m to 6.80m)
  for (let uy = 5.50; uy <= 6.80; uy += 0.35) {
    const peakR = Math.max(0.4, (6.90 - uy) * 1.45);
    const count = uy >= 6.4 ? 5 : 7;
    for (let c = 0; c < count; c++) {
      const ang = (c / count) * Math.PI * 2 + uy * 0.5;
      const r = peakR * (0.75 + Math.random() * 0.35);
      const ux = Math.cos(ang) * r;
      const uz = Math.sin(ang) * r;
      addBlossomCluster(ux, uy, uz, 1.60 + Math.random() * 0.35);
    }
  }

  const mergedCanopyGeo = mergeBufferGeometries(canopyGeos);
  const canopyMesh = new THREE.Mesh(mergedCanopyGeo, sprayMat);
  canopyMesh.name = "SakuraCanopy";
  treeGroup.add(canopyMesh);

  treeGroup.name='ZenTreeStandalone';
  treeGroup.position.copy(asVector3(position));
  treeGroup.rotation.y=rotationY;
  applyScale(treeGroup.scale,scale);
  treeGroup.userData.zenTree=true;

  const emitter=petals?emitterFactory({...ZEN_TREE_PETAL_PRESET,...emitterOptions}):null;
  if(emitter) {
    if(!emitter.group || typeof emitter.update!=='function') throw new TypeError('Invalid emitter');
    treeGroup.add(emitter.group);
  }
  if(scene) scene.add(treeGroup);
  let disposed=false;
  let diagnostic='NORMAL';
  const initialVisible=treeGroup.visible;
  const initialCanopyVisible=canopyMesh.visible;

  function update(delta) {
    if(!disposed && treeGroup.visible) emitter?.update(delta);
  }
  function checkCollision(candidate,playerRadius=0) {
    if(disposed || !treeGroup.visible) return false;
    treeGroup.updateWorldMatrix(true,false);
    const center=treeGroup.getWorldPosition(new THREE.Vector3());
    const scale=treeGroup.getWorldScale(new THREE.Vector3());
    const radius=1.76*Math.max(Math.abs(scale.x),Math.abs(scale.z))+playerRadius;
    return Math.hypot(candidate.x-center.x,candidate.z-center.z)<radius;
  }
  function setDiagnosticMode(mode) {
    if(disposed)return;
    if(!['NORMAL','NO CANOPY','PAUSE PETALS','TREE OFF','GARDEN OFF'].includes(mode))
      throw new RangeError('Unknown diagnostic mode: '+mode);
    diagnostic=mode;
    treeGroup.visible=initialVisible;
    canopyMesh.visible=initialCanopyVisible;
    emitter?.start?.();
    if(mode==='NO CANOPY')canopyMesh.visible=false;
    if(mode==='PAUSE PETALS')emitter?.stop?.();
    if(mode==='TREE OFF'||mode==='GARDEN OFF'){
      treeGroup.visible=false;
      emitter?.stop?.();
    }
  }
  function dispose() {
    if(disposed)return;
    disposed=true;
    emitter?.dispose?.();
    treeGroup.removeFromParent();
    const geos=new Set(),mats=new Set(owned),external=new Set(Object.values(materials));
    const texs=new Set();
    treeGroup.traverse(obj=>{
      if(!obj.isMesh)return;
      if(obj.geometry)geos.add(obj.geometry);
      const mm=Array.isArray(obj.material)?obj.material:[obj.material];
      for(const mat of mm)if(mat && !external.has(mat))mats.add(mat);
    });
    for(const geo of geos)geo.dispose();
    for(const mat of mats){
      if(mat.map)texs.add(mat.map);
      mat.dispose();
    }
    for(const tex of texs)tex.dispose();
  }
  return {
    group:treeGroup,emitter,update,dispose,checkCollision,
    setDiagnosticMode,getDiagnosticMode:()=>diagnostic,
    setPosition(value){if(!disposed)treeGroup.position.copy(asVector3(value));},
    setWind(value){if(!disposed)emitter?.setWind?.(value);},
    get disposed(){return disposed;}
  };
}
export const loadZenTree=createZenTree;
