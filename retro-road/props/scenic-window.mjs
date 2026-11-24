import * as THREE from "https://esm.sh/three@0.170.0";
import { mergeGeometries } from "https://esm.sh/three@0.170.0/examples/jsm/utils/BufferGeometryUtils.js";
const SCENIC_TEXTURE_URLS = {
  DAY: "https://storage.googleapis.com/producer-app-public/producer/eb2b4c3d-f868-416b-9228-54d41c3557cb",
  NIGHT: "https://storage.googleapis.com/producer-app-public/producer/41ca698b-b507-4b50-b899-4026f0cffe1e"
};
function createDarkGoldSilkFabricTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const grad = ctx.createLinearGradient(0, 0, 512, 0);
    grad.addColorStop(0, "#24180c");
    grad.addColorStop(0.12, "#3d2812");
    grad.addColorStop(0.28, "#5e401b");
    grad.addColorStop(0.44, "#855b24");
    grad.addColorStop(0.5, "#b88232");
    grad.addColorStop(0.56, "#855b24");
    grad.addColorStop(0.72, "#5e401b");
    grad.addColorStop(0.88, "#3d2812");
    grad.addColorStop(1, "#24180c");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);
    ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
    for (let x = 0; x < 512; x += 4) {
      ctx.fillRect(x, 0, 2, 512);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
function createSoftScallopedDraperyGeometry(poleWidth = 15.46, topY = 3.39, minDrop = 0.3, maxDrop = 0.44, depthZ = 0.136) {
  const hw = poleWidth / 2;
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const panels = [
    { x0: -hw, x1: -7.61 },
    { x0: -7.61, x1: -3.805 },
    { x0: -3.805, x1: 0 },
    { x0: 0, x1: 3.805 },
    { x0: 3.805, x1: 7.61 },
    { x0: 7.61, x1: hw }
  ];
  const ySegs = 16;
  const dropRange = maxDrop - minDrop;
  panels.forEach((panel, pIdx) => {
    const isWing = pIdx === 0 || pIdx === panels.length - 1;
    const xSegs = isWing ? 12 : 24;
    const panelW = panel.x1 - panel.x0;
    const baseVertex = positions.length / 3;
    for (let iy = 0; iy <= ySegs; iy++) {
      const yFrac = iy / ySegs;
      for (let ix = 0; ix <= xSegs; ix++) {
        const uInPanel = ix / xSegs;
        const x = panel.x0 + uInPanel * panelW;
        const archFrac = uInPanel * 2 % 1;
        const sag = isWing ? 0 : Math.sin(archFrac * Math.PI);
        const bottomDrop = minDrop + dropRange * sag;
        const y = topY - bottomDrop * (1 - yFrac);
        const pleatWave = isWing ? 0 : Math.sin(uInPanel * Math.PI * 8);
        const foldBillow = Math.sin((1 - yFrac) * Math.PI);
        const zRipple = (0.016 * sag + 8e-3 * pleatWave) * foldBillow;
        const z = depthZ + zRipple;
        positions.push(x, y, z);
        uvs.push((pIdx * 2 + uInPanel * 2) * 1.5, (1 - yFrac) * 3);
        const nx = isWing ? 0 : -Math.cos(uInPanel * Math.PI * 8) * 0.25;
        normals.push(nx, 0.08, 0.95);
      }
    }
    const rowVerts = xSegs + 1;
    for (let iy = 0; iy < ySegs; iy++) {
      for (let ix = 0; ix < xSegs; ix++) {
        const a = baseVertex + iy * rowVerts + ix;
        const b = baseVertex + (iy + 1) * rowVerts + ix;
        const c = baseVertex + (iy + 1) * rowVerts + (ix + 1);
        const d = baseVertex + iy * rowVerts + (ix + 1);
        indices.push(a, d, c);
        indices.push(a, c, b);
      }
    }
  });
  const curtainZ = depthZ - 0.048;
  [-hw, hw].forEach((sideX) => {
    const isLeft = sideX < 0;
    const baseIdx = positions.length / 3;
    const yBot = topY - minDrop;
    if (isLeft) {
      positions.push(sideX, yBot, depthZ);
      positions.push(sideX, yBot, curtainZ);
      positions.push(sideX, topY, curtainZ);
      positions.push(sideX, topY, depthZ);
      normals.push(-1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0);
      uvs.push(0, 0, 1, 0, 1, 1, 0, 1);
    } else {
      positions.push(sideX, yBot, curtainZ);
      positions.push(sideX, yBot, depthZ);
      positions.push(sideX, topY, depthZ);
      positions.push(sideX, topY, curtainZ);
      normals.push(1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0);
      uvs.push(0, 0, 1, 0, 1, 1, 0, 1);
    }
    indices.push(baseIdx, baseIdx + 2, baseIdx + 1, baseIdx, baseIdx + 3, baseIdx + 2);
  });
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}
function createHorizontalPoleGeometry(length, radius, radialSegs = 24) {
  const hw = length / 2;
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const lengthSegs = 64;
  for (let i = 0; i <= lengthSegs; i++) {
    const xFrac = i / lengthSegs;
    const x = -hw + xFrac * length;
    const v = xFrac * (length / 1);
    for (let j = 0; j <= radialSegs; j++) {
      const theta = j / radialSegs * Math.PI * 2;
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);
      const z = radius * cosT;
      const y = radius * sinT;
      positions.push(x, y, z);
      normals.push(0, sinT, cosT);
      const u = Math.max(0, Math.min(1, 0.5 + 0.5 * sinT));
      uvs.push(u, v);
    }
  }
  const ringVerts = radialSegs + 1;
  for (let i = 0; i < lengthSegs; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * ringVerts + j;
      const b = (i + 1) * ringVerts + j;
      const c = (i + 1) * ringVerts + (j + 1);
      const d = i * ringVerts + (j + 1);
      indices.push(a, b, c);
      indices.push(a, c, d);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  return geo;
}
function createStraightPleatedCurtainGeometry(isLeft, topY = 3.39, bottomY = -0.06, panelWidth = 0.9, depthZ = 0.088, poleWidth = 15.46) {
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const ySegs = 36;
  const xSegs = 18;
  const totalH = topY - bottomY;
  const poleHW = poleWidth / 2;
  const startX = isLeft ? -poleHW : poleHW - panelWidth;
  for (let iy = 0; iy <= ySegs; iy++) {
    const yFrac = iy / ySegs;
    const y = bottomY + yFrac * totalH;
    for (let ix = 0; ix <= xSegs; ix++) {
      const xFrac = ix / xSegs;
      const x = startX + xFrac * panelWidth;
      const pleatWave = Math.sin(xFrac * Math.PI * 6);
      const z = depthZ + pleatWave * 0.034;
      positions.push(x, y, z);
      uvs.push(xFrac * 3, yFrac * 5);
      const nx = -Math.cos(xFrac * Math.PI * 6) * 0.4;
      normals.push(nx, 0, 0.91);
    }
  }
  const rowVerts = xSegs + 1;
  for (let iy = 0; iy < ySegs; iy++) {
    for (let ix = 0; ix < xSegs; ix++) {
      const a = iy * rowVerts + ix;
      const b = (iy + 1) * rowVerts + ix;
      const c = (iy + 1) * rowVerts + (ix + 1);
      const d = iy * rowVerts + (ix + 1);
      indices.push(a, d, c);
      indices.push(a, c, b);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}
function createMiteredWindowFrameGeometry(width, height, thickness, borderW) {
  const hw = width / 2;
  const hh = height / 2;
  const hd = thickness / 2;
  const ihw = hw - borderW;
  const ihh = hh - borderW;
  const positions = [];
  const normals = [];
  const uvs = [];
  const indices = [];
  const addIndexedQuad = (p0, p1, p2, p3, norm, uv0, uv1, uv2, uv3) => {
    const base = positions.length / 3;
    const ux = p1[0] - p0[0], uy = p1[1] - p0[1], uz = p1[2] - p0[2];
    const vx = p2[0] - p0[0], vy = p2[1] - p0[1], vz = p2[2] - p0[2];
    const cx = uy * vz - uz * vy;
    const cy = uz * vx - ux * vz;
    const cz = ux * vy - uy * vx;
    const dot = cx * norm[0] + cy * norm[1] + cz * norm[2];
    positions.push(...p0, ...p1, ...p2, ...p3);
    normals.push(...norm, ...norm, ...norm, ...norm);
    uvs.push(...uv0, ...uv1, ...uv2, ...uv3);
    if (dot >= 0) {
      indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    } else {
      indices.push(base, base + 2, base + 1, base, base + 3, base + 2);
    }
  };
  const vScaleX = width / 1;
  const vScaleY = height / 1;
  addIndexedQuad([-hw, hh, hd], [hw, hh, hd], [ihw, ihh, hd], [-ihw, ihh, hd], [0, 0, 1], [0, 0], [0, vScaleX], [1, vScaleX], [1, 0]);
  addIndexedQuad([hw, -hh, hd], [-hw, -hh, hd], [-ihw, -ihh, hd], [ihw, -ihh, hd], [0, 0, 1], [0, vScaleX], [0, 0], [1, 0], [1, vScaleX]);
  addIndexedQuad([-hw, -hh, hd], [-hw, hh, hd], [-ihw, ihh, hd], [-ihw, -ihh, hd], [0, 0, 1], [0, 0], [0, vScaleY], [1, vScaleY], [1, 0]);
  addIndexedQuad([hw, hh, hd], [hw, -hh, hd], [ihw, -ihh, hd], [ihw, ihh, hd], [0, 0, 1], [0, 0], [0, vScaleY], [1, vScaleY], [1, 0]);
  addIndexedQuad([hw, hh, -hd], [-hw, hh, -hd], [-ihw, ihh, -hd], [ihw, ihh, -hd], [0, 0, -1], [0, 0], [0, vScaleX], [1, vScaleX], [1, 0]);
  addIndexedQuad([-hw, -hh, -hd], [hw, -hh, -hd], [ihw, -ihh, -hd], [-ihw, -ihh, -hd], [0, 0, -1], [0, vScaleX], [0, 0], [1, 0], [1, vScaleX]);
  addIndexedQuad([-hw, hh, -hd], [-hw, -hh, -hd], [-ihw, -ihh, -hd], [-ihw, ihh, -hd], [0, 0, -1], [0, 0], [0, vScaleY], [1, vScaleY], [1, 0]);
  addIndexedQuad([hw, -hh, -hd], [hw, hh, -hd], [ihw, ihh, -hd], [ihw, -ihh, -hd], [0, 0, -1], [0, 0], [0, vScaleY], [1, vScaleY], [1, 0]);
  addIndexedQuad([-hw, hh, -hd], [hw, hh, -hd], [hw, hh, hd], [-hw, hh, hd], [0, 1, 0], [0, 0], [0, vScaleX], [1, vScaleX], [1, 0]);
  addIndexedQuad([-hw, -hh, hd], [hw, -hh, hd], [hw, -hh, -hd], [-hw, -hh, -hd], [0, -1, 0], [0, 0], [0, vScaleX], [1, vScaleX], [1, 0]);
  addIndexedQuad([-hw, -hh, -hd], [-hw, hh, -hd], [-hw, hh, hd], [-hw, -hh, hd], [-1, 0, 0], [0, 0], [0, vScaleY], [1, vScaleY], [1, 0]);
  addIndexedQuad([hw, hh, -hd], [hw, -hh, -hd], [hw, -hh, hd], [hw, hh, hd], [1, 0, 0], [0, 0], [0, vScaleY], [1, vScaleY], [1, 0]);
  addIndexedQuad([-ihw, ihh, hd], [ihw, ihh, hd], [ihw, ihh, -hd], [-ihw, ihh, -hd], [0, -1, 0], [1, 0], [1, vScaleX], [0, vScaleX], [0, 0]);
  addIndexedQuad([-ihw, -ihh, -hd], [ihw, -ihh, -hd], [ihw, -ihh, hd], [-ihw, -ihh, hd], [0, 1, 0], [1, 0], [1, vScaleX], [0, vScaleX], [0, 0]);
  addIndexedQuad([-ihw, -ihh, hd], [-ihw, ihh, hd], [-ihw, ihh, -hd], [-ihw, -ihh, -hd], [1, 0, 0], [1, 0], [1, vScaleY], [0, vScaleY], [0, 0]);
  addIndexedQuad([ihw, ihh, hd], [ihw, ihh, -hd], [ihw, -ihh, -hd], [ihw, -ihh, hd], [-1, 0, 0], [1, 0], [0, 0], [0, vScaleY], [1, vScaleY]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  return geo;
}
function createMetricBoxGeometry(w, h, d, uvScale = 0.5) {
  const hw = w / 2;
  const hh = h / 2;
  const hd = d / 2;
  const positions = [];
  const normals = [];
  const uvs = [];
  const colors = [];
  const indices = [];
  const addQuadWithShading = (p0, p1, p2, p3, norm, shade) => {
    const base = positions.length / 3;
    positions.push(...p0, ...p1, ...p2, ...p3);
    normals.push(...norm, ...norm, ...norm, ...norm);
    const absNx = Math.abs(norm[0]);
    const absNy = Math.abs(norm[1]);
    const getUV = (p) => {
      if (absNx > 0.5) return [(p[2] + hd) / uvScale, (p[1] + hh) / uvScale];
      if (absNy > 0.5) return [(p[0] + hw) / uvScale, (p[2] + hd) / uvScale];
      return [(p[0] + hw) / uvScale, (p[1] + hh) / uvScale];
    };
    uvs.push(...getUV(p0), ...getUV(p1), ...getUV(p2), ...getUV(p3));
    colors.push(shade, shade, shade, shade, shade, shade, shade, shade, shade, shade, shade, shade);
    indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };
  addQuadWithShading([-hw, -hh, hd], [hw, -hh, hd], [hw, hh, hd], [-hw, hh, hd], [0, 0, 1], 1);
  addQuadWithShading([hw, -hh, -hd], [-hw, -hh, -hd], [-hw, hh, -hd], [hw, hh, -hd], [0, 0, -1], 0.65);
  addQuadWithShading([-hw, -hh, -hd], [-hw, -hh, hd], [-hw, hh, hd], [-hw, hh, -hd], [-1, 0, 0], 0.65);
  addQuadWithShading([hw, -hh, hd], [hw, -hh, -hd], [hw, hh, -hd], [hw, hh, hd], [1, 0, 0], 0.75);
  addQuadWithShading([-hw, hh, hd], [hw, hh, hd], [hw, hh, -hd], [-hw, hh, -hd], [0, 1, 0], 0.85);
  addQuadWithShading([-hw, -hh, -hd], [hw, -hh, -hd], [hw, -hh, hd], [-hw, -hh, hd], [0, -1, 0], 0.5);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  return geo;
}
function createMetricMiteredFrameGeometry(width, height, thickness, borderW, uvScale = 0.5) {
  const hw = width / 2;
  const hh = height / 2;
  const hd = thickness / 2;
  const ihw = hw - borderW;
  const ihh = hh - borderW;
  const positions = [];
  const normals = [];
  const uvs = [];
  const colors = [];
  const indices = [];
  const addIndexedQuadMetric = (p0, p1, p2, p3, norm, shade = 1) => {
    const base = positions.length / 3;
    const ux = p1[0] - p0[0], uy = p1[1] - p0[1], uz = p1[2] - p0[2];
    const vx = p2[0] - p0[0], vy = p2[1] - p0[1], vz = p2[2] - p0[2];
    const cx = uy * vz - uz * vy;
    const cy = uz * vx - ux * vz;
    const cz = ux * vy - uy * vx;
    const dot = cx * norm[0] + cy * norm[1] + cz * norm[2];
    positions.push(...p0, ...p1, ...p2, ...p3);
    normals.push(...norm, ...norm, ...norm, ...norm);
    const absNx = Math.abs(norm[0]);
    const absNy = Math.abs(norm[1]);
    const getMetricUV = (p) => {
      if (absNx > 0.5) return [(p[2] + hd) / uvScale, (p[1] + hh) / uvScale];
      if (absNy > 0.5) return [(p[0] + hw) / uvScale, (p[2] + hd) / uvScale];
      return [(p[0] + hw) / uvScale, (p[1] + hh) / uvScale];
    };
    uvs.push(...getMetricUV(p0), ...getMetricUV(p1), ...getMetricUV(p2), ...getMetricUV(p3));
    colors.push(shade, shade, shade, shade, shade, shade, shade, shade, shade, shade, shade, shade);
    if (dot >= 0) {
      indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
    } else {
      indices.push(base, base + 2, base + 1, base, base + 3, base + 2);
    }
  };
  addIndexedQuadMetric([-hw, hh, hd], [hw, hh, hd], [ihw, ihh, hd], [-ihw, ihh, hd], [0, 0, 1], 1);
  addIndexedQuadMetric([hw, -hh, hd], [-hw, -hh, hd], [-ihw, -ihh, hd], [ihw, -ihh, hd], [0, 0, 1], 1);
  addIndexedQuadMetric([-hw, -hh, hd], [-hw, hh, hd], [-ihw, ihh, hd], [-ihw, -ihh, hd], [0, 0, 1], 1);
  addIndexedQuadMetric([hw, hh, hd], [hw, -hh, hd], [ihw, -ihh, hd], [ihw, ihh, hd], [0, 0, 1], 1);
  addIndexedQuadMetric([hw, hh, -hd], [-hw, hh, -hd], [-ihw, ihh, -hd], [ihw, ihh, -hd], [0, 0, -1], 0.65);
  addIndexedQuadMetric([-hw, -hh, -hd], [hw, -hh, -hd], [ihw, -ihh, -hd], [-ihw, -ihh, -hd], [0, 0, -1], 0.65);
  addIndexedQuadMetric([-hw, hh, -hd], [-hw, -hh, -hd], [-ihw, -ihh, -hd], [-ihw, ihh, -hd], [0, 0, -1], 0.65);
  addIndexedQuadMetric([hw, -hh, -hd], [hw, hh, -hd], [ihw, ihh, -hd], [ihw, -ihh, -hd], [0, 0, -1], 0.65);
  addIndexedQuadMetric([-hw, hh, -hd], [hw, hh, -hd], [hw, hh, hd], [-hw, hh, hd], [0, 1, 0], 0.8);
  addIndexedQuadMetric([-hw, -hh, hd], [hw, -hh, hd], [hw, -hh, -hd], [-hw, -hh, -hd], [0, -1, 0], 0.55);
  addIndexedQuadMetric([-hw, -hh, -hd], [-hw, hh, -hd], [-hw, hh, hd], [-hw, -hh, hd], [-1, 0, 0], 0.65);
  addIndexedQuadMetric([hw, hh, -hd], [hw, -hh, -hd], [hw, -hh, hd], [hw, hh, hd], [1, 0, 0], 0.75);
  addIndexedQuadMetric([-ihw, ihh, hd], [ihw, ihh, hd], [ihw, ihh, -hd], [-ihw, ihh, -hd], [0, -1, 0], 0.55);
  addIndexedQuadMetric([-ihw, -ihh, -hd], [ihw, -ihh, -hd], [ihw, -ihh, hd], [-ihw, -ihh, hd], [0, 1, 0], 0.6);
  addIndexedQuadMetric([-ihw, -ihh, hd], [-ihw, ihh, hd], [-ihw, ihh, -hd], [-ihw, -ihh, -hd], [1, 0, 0], 0.55);
  addIndexedQuadMetric([ihw, ihh, hd], [ihw, ihh, -hd], [ihw, -ihh, -hd], [ihw, -ihh, hd], [-1, 0, 0], 0.55);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geo.setIndex(indices);
  return geo;
}
function createLuxuryTasselPair(isLeft, goldMat, leatherMat, topY = 3.39, anchorX = 7.68, depthZ = 0.225, beadGeometry) {
  const group = new THREE.Group();
  group.name = isLeft ? "Left_Curtain_Luxury_Tassel_Pair" : "Right_Curtain_Luxury_Tassel_Pair";
  const xSign = isLeft ? -1 : 1;
  const cx = anchorX * xSign;
  const sharedBeadGeo = beadGeometry ?? new THREE.SphereGeometry(1, 6, 4);
  const ownsBeadGeo = !beadGeometry;
  const sharedPetalGeo = new THREE.SphereGeometry(1, 6, 4);
  const mountZ = 0.17;
  const hangZ = depthZ;
  const rosetteX = cx - 0.055 * xSign;
  const rosetteGroup = new THREE.Group();
  rosetteGroup.position.set(rosetteX, topY, mountZ);
  const rosetteBase = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.054, 0.018, 24), goldMat);
  rosetteBase.rotation.x = Math.PI / 2;
  rosetteGroup.add(rosetteBase);
  const centerBtn = new THREE.Mesh(new THREE.SphereGeometry(0.026, 16, 12), leatherMat);
  centerBtn.scale.set(1, 1, 0.45);
  centerBtn.position.set(0, 0, 0.01);
  rosetteGroup.add(centerBtn);
  const petalR = 0.011;
  for (let p = 0; p < 14; p++) {
    const ang = p / 14 * Math.PI * 2;
    const petal = new THREE.Mesh(sharedPetalGeo, goldMat);
    petal.scale.set(petalR * 0.6, petalR * 1.25, petalR * 0.5);
    petal.position.set(Math.cos(ang) * 0.044, Math.sin(ang) * 0.044, 5e-3);
    petal.rotation.z = ang;
    rosetteGroup.add(petal);
  }
  group.add(rosetteGroup);
  const buildTasselBody = (headY, posX, posZ, scale, skirtLength) => {
    const tGroup = new THREE.Group();
    tGroup.position.set(posX, headY, posZ);
    const collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02 * scale, 0.028 * scale, 0.022 * scale, 12),
      goldMat
    );
    collar.position.y = 0.026 * scale;
    tGroup.add(collar);
    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.046 * scale, 16, 12),
      goldMat
    );
    bulb.scale.set(1.15, 0.95, 1.15);
    bulb.position.y = 5e-3 * scale;
    tGroup.add(bulb);
    const waist = new THREE.Mesh(
      new THREE.TorusGeometry(0.05 * scale, 9e-3 * scale, 8, 16),
      goldMat
    );
    waist.rotation.x = Math.PI / 2;
    waist.position.y = -0.024 * scale;
    tGroup.add(waist);
    const skirtTopR = 0.046 * scale;
    const skirtBotR = 0.076 * scale;
    const skirtY = -0.03 * scale - skirtLength / 2;
    const skirtMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(skirtTopR, skirtBotR, skirtLength, 20, 1, false),
      leatherMat
    );
    skirtMesh.position.y = skirtY;
    tGroup.add(skirtMesh);
    const innerSkirt = new THREE.Mesh(
      new THREE.CylinderGeometry(skirtTopR * 0.85, skirtBotR * 0.82, skirtLength * 0.96, 16, 1, true),
      leatherMat
    );
    innerSkirt.position.y = skirtY;
    tGroup.add(innerSkirt);
    const numBeads = Math.round(20 * scale);
    const beadRadius = 55e-4 * scale;
    for (let b = 0; b < numBeads; b++) {
      const bAng = b / numBeads * Math.PI * 2;
      const bead = new THREE.Mesh(sharedBeadGeo, goldMat);
      bead.scale.set(beadRadius, beadRadius, beadRadius);
      bead.position.set(
        Math.cos(bAng) * skirtBotR,
        skirtY - skirtLength / 2,
        Math.sin(bAng) * skirtBotR
      );
      tGroup.add(bead);
    }
    [-0.018 * scale, 0, 0.018 * scale].forEach((dx, dIdx) => {
      const dropLen = (dIdx === 1 ? 0.065 : 0.048) * scale;
      const dropCord = new THREE.Mesh(
        new THREE.CylinderGeometry(22e-4 * scale, 22e-4 * scale, dropLen, 8),
        goldMat
      );
      dropCord.position.set(dx, skirtY - skirtLength / 2 - dropLen / 2, dIdx === 1 ? 6e-3 : 0);
      tGroup.add(dropCord);
      const dropTip = new THREE.Mesh(
        new THREE.SphereGeometry(75e-4 * scale, 10, 8),
        goldMat
      );
      dropTip.scale.set(0.8, 1.7, 0.8);
      dropTip.position.set(dx, skirtY - skirtLength / 2 - dropLen - 7e-3 * scale, dIdx === 1 ? 6e-3 : 0);
      tGroup.add(dropTip);
    });
    return tGroup;
  };
  const t1HeadY = 1.3;
  const t1X = cx;
  const t1Z = hangZ;
  const t1Scale = 1.25;
  const t1SkirtH = 0.38;
  group.add(buildTasselBody(t1HeadY, t1X, t1Z, t1Scale, t1SkirtH));
  const cord1Start = new THREE.Vector3(rosetteX, topY - 0.04, mountZ);
  const cord1End = new THREE.Vector3(t1X, t1HeadY + 0.038 * t1Scale, t1Z);
  const midY1_1 = THREE.MathUtils.lerp(cord1Start.y, cord1End.y, 0.35);
  const midY1_2 = THREE.MathUtils.lerp(cord1Start.y, cord1End.y, 0.7);
  const midX1_1 = THREE.MathUtils.lerp(cord1Start.x, cord1End.x, 0.35);
  const midX1_2 = THREE.MathUtils.lerp(cord1Start.x, cord1End.x, 0.7);
  const midZ1_1 = THREE.MathUtils.lerp(mountZ, t1Z, 0.3);
  const midZ1_2 = THREE.MathUtils.lerp(mountZ, t1Z, 0.7);
  const cord1Curve = new THREE.CatmullRomCurve3([
    cord1Start,
    new THREE.Vector3(midX1_1, midY1_1, midZ1_1),
    new THREE.Vector3(midX1_2, midY1_2, midZ1_2),
    cord1End
  ], false, "centripetal");
  const cord1Mesh = new THREE.Mesh(new THREE.TubeGeometry(cord1Curve, 4, 65e-4, 10, false), leatherMat);
  group.add(cord1Mesh);
  [0.35, 0.7].forEach((frac) => {
    const knotPt = cord1Curve.getPoint(frac);
    const knot = new THREE.Mesh(new THREE.TorusGeometry(9e-3, 35e-4, 8, 16), goldMat);
    knot.position.copy(knotPt);
    knot.rotation.x = Math.PI / 2;
    group.add(knot);
  });
  const t2HeadY = 1.75;
  const t2X = cx - 0.125 * xSign;
  const t2Z = hangZ + 0.015;
  const t2Scale = 1.05;
  const t2SkirtH = 0.28;
  group.add(buildTasselBody(t2HeadY, t2X, t2Z, t2Scale, t2SkirtH));
  const cord2Start = new THREE.Vector3(rosetteX, topY - 0.04, mountZ);
  const cord2End = new THREE.Vector3(t2X, t2HeadY + 0.035 * t2Scale, t2Z);
  const midY2_1 = THREE.MathUtils.lerp(cord2Start.y, cord2End.y, 0.35);
  const midY2_2 = THREE.MathUtils.lerp(cord2Start.y, cord2End.y, 0.7);
  const midX2_1 = THREE.MathUtils.lerp(cord2Start.x, cord2End.x, 0.35);
  const midX2_2 = THREE.MathUtils.lerp(cord2Start.x, cord2End.x, 0.7);
  const midZ2_1 = THREE.MathUtils.lerp(mountZ, t2Z, 0.3);
  const midZ2_2 = THREE.MathUtils.lerp(mountZ, t2Z, 0.7);
  const cord2Curve = new THREE.CatmullRomCurve3([
    cord2Start,
    new THREE.Vector3(midX2_1, midY2_1, midZ2_1),
    new THREE.Vector3(midX2_2, midY2_2, midZ2_2),
    cord2End
  ], false, "centripetal");
  const cord2Mesh = new THREE.Mesh(new THREE.TubeGeometry(cord2Curve, 4, 6e-3, 10, false), leatherMat);
  group.add(cord2Mesh);
  [0.45].forEach((frac) => {
    const knotPt = cord2Curve.getPoint(frac);
    const knot = new THREE.Mesh(new THREE.TorusGeometry(85e-4, 32e-4, 8, 16), goldMat);
    knot.position.copy(knotPt);
    knot.rotation.x = Math.PI / 2;
    group.add(knot);
  });
  let isTasselDisposed = false;
  group.userData = {
    dispose: () => {
      if (isTasselDisposed) return;
      isTasselDisposed = true;
      sharedPetalGeo.dispose();
      if (ownsBeadGeo) sharedBeadGeo.dispose();
    }
  };
  return group;
}
function createScenicWindow(options) {
  const { pebbledLongLeatherTexUrl, darkGoldTrimMat } = options;
  const root = new THREE.Group();
  root.name = "Scenic_Window_15x3m_Suite";
  const TOTAL_W = 15.36;
  const TOTAL_H = 3.34;
  const GOLD_BORDER_W = 0.07;
  const BLACK_BORDER_W = 0.04;
  const FRAME_D = 0.08;
  const CENTER_Y = TOTAL_H / 2;
  const CANVAS_W = 15.22;
  const CANVAS_H = 3.2;
  const loader = new THREE.TextureLoader();
  loader.crossOrigin = "anonymous";
  const longPebbleTex = loader.load(pebbledLongLeatherTexUrl);
  longPebbleTex.wrapS = THREE.RepeatWrapping;
  longPebbleTex.wrapT = THREE.RepeatWrapping;
  longPebbleTex.repeat.set(1, 1);
  longPebbleTex.colorSpace = THREE.SRGBColorSpace;
  const darkBlackFrameMat = new THREE.MeshBasicMaterial({
    map: longPebbleTex,
    vertexColors: true,
    side: THREE.DoubleSide,
    fog: false
  });
  const dayTex = loader.load(SCENIC_TEXTURE_URLS.DAY);
  dayTex.colorSpace = THREE.SRGBColorSpace;
  dayTex.wrapS = THREE.ClampToEdgeWrapping;
  dayTex.wrapT = THREE.ClampToEdgeWrapping;
  const nightTex = loader.load(SCENIC_TEXTURE_URLS.NIGHT);
  nightTex.colorSpace = THREE.SRGBColorSpace;
  nightTex.wrapS = THREE.ClampToEdgeWrapping;
  nightTex.wrapT = THREE.ClampToEdgeWrapping;
  const isNightInitial = Boolean(options.isNight);
  const outerGoldGeo = createMiteredWindowFrameGeometry(TOTAL_W, TOTAL_H, FRAME_D, GOLD_BORDER_W);
  const outerGoldMesh = new THREE.Mesh(outerGoldGeo, darkGoldTrimMat);
  outerGoldMesh.name = "Scenic_Outer_Gold_Frame";
  outerGoldMesh.position.set(0, CENTER_Y, 0);
  outerGoldMesh.renderOrder = 10;
  root.add(outerGoldMesh);
  const innerGoldW = TOTAL_W - 2 * GOLD_BORDER_W;
  const innerGoldH = TOTAL_H - 2 * GOLD_BORDER_W;
  const innerBlackGeo = createMetricMiteredFrameGeometry(innerGoldW, innerGoldH, FRAME_D, BLACK_BORDER_W, 0.5);
  const innerBlackMesh = new THREE.Mesh(innerBlackGeo, darkBlackFrameMat);
  innerBlackMesh.name = "Scenic_Inner_Black_Frame";
  innerBlackMesh.position.set(0, CENTER_Y, 0);
  innerBlackMesh.renderOrder = 10;
  root.add(innerBlackMesh);
  const SLAT_W = 0.08;
  const verticalSlats = [
    { x: -3.805, w: SLAT_W, name: "Scenic_Left_Vertical_Slat" },
    { x: 0, w: SLAT_W, name: "Scenic_Center_Black_Pillar" },
    { x: 3.805, w: SLAT_W, name: "Scenic_Right_Vertical_Slat" }
  ];
  verticalSlats.forEach((slat) => {
    const slatMesh = new THREE.Mesh(
      createMetricBoxGeometry(slat.w, CANVAS_H, FRAME_D, 0.5),
      darkBlackFrameMat
    );
    slatMesh.name = slat.name;
    slatMesh.position.set(slat.x, CENTER_Y, 0);
    slatMesh.renderOrder = 10;
    root.add(slatMesh);
  });
  const rearCanvasZ = -FRAME_D / 2;
  const nightPlaneGeo = new THREE.PlaneGeometry(CANVAS_W, CANVAS_H);
  const nightMaterial = new THREE.MeshBasicMaterial({
    map: nightTex,
    side: THREE.FrontSide,
    depthWrite: true,
    fog: false
  });
  const nightMesh = new THREE.Mesh(nightPlaneGeo, nightMaterial);
  nightMesh.name = "Scenic_Night_Canvas";
  nightMesh.position.set(0, CENTER_Y, rearCanvasZ + 1e-3);
  nightMesh.renderOrder = 0;
  nightMesh.visible = isNightInitial;
  root.add(nightMesh);
  const dayPlaneGeo = new THREE.PlaneGeometry(CANVAS_W, CANVAS_H);
  const dayMaterial = new THREE.MeshBasicMaterial({
    map: dayTex,
    side: THREE.FrontSide,
    transparent: true,
    opacity: isNightInitial ? 0 : 1,
    depthWrite: false,
    fog: false
  });
  const dayMesh = new THREE.Mesh(dayPlaneGeo, dayMaterial);
  dayMesh.name = "Scenic_Day_Canvas";
  dayMesh.position.set(0, CENTER_Y, rearCanvasZ + 2e-3);
  dayMesh.renderOrder = 1;
  dayMesh.visible = !isNightInitial;
  root.add(dayMesh);
  const poleGroup = new THREE.Group();
  poleGroup.name = "Scenic_Curtain_Suite";
  const POLE_Y = TOTAL_H + 0.05;
  const VALANCE_Z = 0.136;
  const CURTAIN_Z = 0.088;
  const POLE_Z = VALANCE_Z;
  const POLE_L = 15.46;
  const POLE_R = 0.026;
  const poleGeo = createHorizontalPoleGeometry(POLE_L, POLE_R, 24);
  const poleMesh = new THREE.Mesh(poleGeo, darkGoldTrimMat);
  poleMesh.name = "Gold_Curtain_Pole";
  poleMesh.position.set(0, POLE_Y, POLE_Z);
  poleMesh.renderOrder = 15;
  poleGroup.add(poleMesh);
  [-POLE_L / 2 - 0.015, POLE_L / 2 + 0.015].forEach((fx, fIdx) => {
    const finialGroup = new THREE.Group();
    finialGroup.position.set(fx, POLE_Y, POLE_Z);
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(POLE_R + 0.01, POLE_R + 0.01, 0.03, 16), darkGoldTrimMat);
    collar.rotation.z = Math.PI / 2;
    finialGroup.add(collar);
    const sphereFinial = new THREE.Mesh(new THREE.SphereGeometry(POLE_R * 1.45, 16, 12), darkGoldTrimMat);
    sphereFinial.position.set(fIdx === 0 ? -0.035 : 0.035, 0, 0);
    finialGroup.add(sphereFinial);
    poleGroup.add(finialGroup);
  });
  const bracketXPositions = [-7.62, -3.81, 0, 3.81, 7.62];
  bracketXPositions.forEach((bx) => {
    const bracketGroup = new THREE.Group();
    bracketGroup.position.set(bx, POLE_Y, 0);
    const flangeH = 0.048;
    const wallFlange = new THREE.Mesh(new THREE.BoxGeometry(0.048, flangeH, 0.015), darkGoldTrimMat);
    wallFlange.position.set(0, -flangeH / 2 - 5e-3, 75e-4);
    bracketGroup.add(wallFlange);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, POLE_Z, 12), darkGoldTrimMat);
    arm.rotation.x = Math.PI / 2;
    arm.position.set(0, -0.014, POLE_Z / 2);
    bracketGroup.add(arm);
    poleGroup.add(bracketGroup);
  });
  const goldSilkTex = createDarkGoldSilkFabricTexture();
  const goldSilkMat = new THREE.MeshBasicMaterial({
    map: goldSilkTex,
    side: THREE.DoubleSide,
    fog: false
  });
  const DRAPERY_TOP_Y = POLE_Y - POLE_R - 2e-3;
  const valanceGeo = createSoftScallopedDraperyGeometry(POLE_L, DRAPERY_TOP_Y, 0.3, 0.44, VALANCE_Z);
  const valanceMesh = new THREE.Mesh(valanceGeo, goldSilkMat);
  valanceMesh.name = "Scenic_Soft_Scalloped_Valance";
  valanceMesh.renderOrder = 14;
  poleGroup.add(valanceMesh);
  const curtainBottomY = -0.06;
  const leftCurtainGeo = createStraightPleatedCurtainGeometry(true, DRAPERY_TOP_Y, curtainBottomY, 0.9, CURTAIN_Z, POLE_L);
  const leftCurtainMesh = new THREE.Mesh(leftCurtainGeo, goldSilkMat);
  leftCurtainMesh.name = "Scenic_Left_Tailored_Curtain";
  leftCurtainMesh.renderOrder = 11;
  poleGroup.add(leftCurtainMesh);
  const rightCurtainGeo = createStraightPleatedCurtainGeometry(false, DRAPERY_TOP_Y, curtainBottomY, 0.9, CURTAIN_Z, POLE_L);
  const rightCurtainMesh = new THREE.Mesh(rightCurtainGeo, goldSilkMat);
  rightCurtainMesh.name = "Scenic_Right_Tailored_Curtain";
  rightCurtainMesh.renderOrder = 11;
  poleGroup.add(rightCurtainMesh);
  const blackPebbleTex = loader.load(pebbledLongLeatherTexUrl);
  blackPebbleTex.wrapS = THREE.RepeatWrapping;
  blackPebbleTex.wrapT = THREE.RepeatWrapping;
  blackPebbleTex.repeat.set(2, 2);
  blackPebbleTex.colorSpace = THREE.SRGBColorSpace;
  const blackPebbleMat = new THREE.MeshBasicMaterial({
    map: blackPebbleTex,
    side: THREE.DoubleSide,
    fog: false
  });
  const anchorX = 7.68;
  const leftTassels = createLuxuryTasselPair(true, darkGoldTrimMat, blackPebbleMat, POLE_Y, anchorX, 0.23);
  leftTassels.renderOrder = 15;
  poleGroup.add(leftTassels);
  const rightTassels = createLuxuryTasselPair(false, darkGoldTrimMat, blackPebbleMat, POLE_Y, anchorX, 0.23);
  rightTassels.renderOrder = 15;
  poleGroup.add(rightTassels);
  root.add(poleGroup);
  let currentDayFactor = isNightInitial ? 0 : 1;
  let targetDayFactor = isNightInitial ? 0 : 1;
  const setDayFactor = (f) => {
    const factor = THREE.MathUtils.clamp(f, 0, 1);
    currentDayFactor = factor;
    if (factor >= 0.999) {
      dayMesh.visible = true;
      nightMesh.visible = false;
      dayMaterial.opacity = 1;
    } else if (factor <= 1e-3) {
      dayMesh.visible = false;
      nightMesh.visible = true;
      dayMaterial.opacity = 0;
    } else {
      dayMesh.visible = true;
      nightMesh.visible = true;
      dayMaterial.opacity = factor;
    }
  };
  const setNight = (night) => {
    targetDayFactor = night ? 0 : 1;
  };
  const update = (deltaSeconds) => {
    if (Math.abs(currentDayFactor - targetDayFactor) > 1e-3) {
      const step = (targetDayFactor - currentDayFactor) * Math.min(1, deltaSeconds * 3.5);
      setDayFactor(currentDayFactor + step);
    }
  };
  const sc = options.scale ?? 1;
  root.scale.set(sc, sc, sc);
  if (options.position) root.position.copy(options.position);
  if (options.rotationY !== void 0) root.rotation.y = options.rotationY;
  const ownedGeometries = /* @__PURE__ */ new Set();
  const ownedMaterials = /* @__PURE__ */ new Set([
    darkBlackFrameMat,
    goldSilkMat,
    blackPebbleMat,
    nightMaterial,
    dayMaterial
  ]);
  const ownedTextures = /* @__PURE__ */ new Set([
    longPebbleTex,
    dayTex,
    nightTex,
    goldSilkTex,
    blackPebbleTex
  ]);
  root.traverse((child) => {
    if (child.isMesh) {
      const mesh = child;
      if (mesh.geometry) {
        ownedGeometries.add(mesh.geometry);
      }
    }
  });
  let isDisposed = false;
  const dispose = () => {
    if (isDisposed) return;
    isDisposed = true;
    for (const g of ownedGeometries) {
      g.dispose();
    }
    ownedGeometries.clear();
    for (const m of ownedMaterials) {
      m.dispose();
    }
    ownedMaterials.clear();
    for (const t of ownedTextures) {
      t.dispose();
    }
    ownedTextures.clear();
  };
  root.userData = {
    dayTex,
    nightTex,
    setNight,
    setDayFactor,
    update,
    dispose,
    isDisposed: () => isDisposed,
    dayMesh,
    nightMesh,
    dayMaterial,
    nightMaterial,
    isNight: isNightInitial
  };
  return root;
}
function createScenicWindowMerged(options) {
  const source = createScenicWindow({
    ...options,
    position: void 0,
    rotationY: void 0,
    scale: 1
  });
  source.updateMatrixWorld(true);
  const batchMap = /* @__PURE__ */ new Map();
  let dayMesh = null;
  let nightMesh = null;
  source.traverse((child) => {
    if (child.isMesh) {
      const mesh = child;
      if (!mesh.geometry) return;
      if (mesh.name === "Scenic_Day_Canvas") {
        dayMesh = mesh;
        return;
      }
      if (mesh.name === "Scenic_Night_Canvas") {
        nightMesh = mesh;
        return;
      }
      const mat = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
      if (!mat) return;
      const rOrder = mesh.renderOrder || 0;
      const key = mat.uuid;
      const nonIndexed = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
      if (!nonIndexed.attributes.normal) {
        nonIndexed.computeVertexNormals();
      }
      nonIndexed.applyMatrix4(mesh.matrixWorld);
      let batch = batchMap.get(key);
      if (!batch) {
        batch = { material: mat, renderOrder: Math.max(10, rOrder), geometries: [] };
        batchMap.set(key, batch);
      } else {
        batch.renderOrder = Math.max(batch.renderOrder, rOrder);
      }
      batch.geometries.push(nonIndexed);
    }
  });
  const merged = new THREE.Group();
  merged.name = "Scenic_Window_15x3m_Suite_Merged";
  for (const batch of batchMap.values()) {
    if (batch.geometries.length === 1) {
      const mesh = new THREE.Mesh(batch.geometries[0], batch.material);
      mesh.renderOrder = batch.renderOrder;
      merged.add(mesh);
    } else {
      const mGeo = mergeGeometries(batch.geometries, false);
      if (mGeo) {
        const mesh = new THREE.Mesh(mGeo, batch.material);
        mesh.renderOrder = batch.renderOrder;
        merged.add(mesh);
      } else {
        for (const g of batch.geometries) {
          const mesh = new THREE.Mesh(g, batch.material);
          mesh.renderOrder = batch.renderOrder;
          merged.add(mesh);
        }
      }
    }
  }
  if (nightMesh) merged.add(nightMesh);
  if (dayMesh) merged.add(dayMesh);
  const isNightInitial = Boolean(options.isNight);
  let currentDayFactor = isNightInitial ? 0 : 1;
  let targetDayFactor = isNightInitial ? 0 : 1;
  const dayMaterial = dayMesh ? dayMesh.material : null;
  const nightMaterial = nightMesh ? nightMesh.material : null;
  const setDayFactor = (f) => {
    const factor = THREE.MathUtils.clamp(f, 0, 1);
    currentDayFactor = factor;
    if (dayMesh && nightMesh && dayMaterial) {
      if (factor >= 0.999) {
        dayMesh.visible = true;
        nightMesh.visible = false;
        dayMaterial.opacity = 1;
      } else if (factor <= 1e-3) {
        dayMesh.visible = false;
        nightMesh.visible = true;
        dayMaterial.opacity = 0;
      } else {
        dayMesh.visible = true;
        nightMesh.visible = true;
        dayMaterial.opacity = factor;
      }
    }
  };
  const setNight = (night) => {
    targetDayFactor = night ? 0 : 1;
  };
  const update = (deltaSeconds) => {
    if (Math.abs(currentDayFactor - targetDayFactor) > 1e-3) {
      const step = (targetDayFactor - currentDayFactor) * Math.min(1, deltaSeconds * 3.5);
      setDayFactor(currentDayFactor + step);
    }
  };
  setDayFactor(currentDayFactor);
  const sc = options.scale ?? 1;
  merged.scale.set(sc, sc, sc);
  if (options.position) merged.position.copy(options.position);
  if (options.rotationY !== void 0) merged.rotation.y = options.rotationY;
  let isMergedDisposed = false;
  const dispose = () => {
    if (isMergedDisposed) return;
    isMergedDisposed = true;
    source.userData?.dispose?.();
    for (const batch of batchMap.values()) {
      for (const g of batch.geometries) {
        g.dispose();
      }
      batch.geometries.length = 0;
    }
    batchMap.clear();
    for (const child of merged.children) {
      if (child.isMesh && child !== dayMesh && child !== nightMesh) {
        child.geometry?.dispose();
      }
    }
  };
  merged.userData = {
    dayTex: dayMaterial?.map ?? null,
    nightTex: nightMaterial?.map ?? null,
    setNight,
    setDayFactor,
    update,
    dispose,
    isDisposed: () => isMergedDisposed,
    dayMesh,
    nightMesh,
    dayMaterial,
    nightMaterial,
    isNight: isNightInitial
  };
  return merged;
}
var stdin_default = createScenicWindowMerged;
export {
  SCENIC_TEXTURE_URLS,
  createDarkGoldSilkFabricTexture,
  createHorizontalPoleGeometry,
  createLuxuryTasselPair,
  createMetricBoxGeometry,
  createMetricMiteredFrameGeometry,
  createMiteredWindowFrameGeometry,
  createScenicWindow,
  createScenicWindowMerged,
  createSoftScallopedDraperyGeometry,
  createStraightPleatedCurtainGeometry,
  stdin_default as default
};
