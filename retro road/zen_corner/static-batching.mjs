// Merge compatible static pieces by material and spatial cell. Parent-local
// transforms are baked; moving hinge parents, shader materials and pick targets
// remain independent. No material, UV, normal or triangle-count simplification.
export function batchStaticMeshes(THREE, root, { cellSize = 12, exclude = new Set(), maxVertices = 240000 } = {}) {
  const geometries = [], stats = { sourceMeshes: 0, mergedMeshes: 0, batches: 0, trianglesBefore: 0, trianglesAfter: 0 };
  const parents = [];
  root.traverse(o => { if (!o.isMesh) parents.push(o); });
  for (const parent of parents) {
    const buckets = new Map();
    for (const mesh of [...parent.children]) {
      if (!mesh.isMesh || exclude.has(mesh) || mesh.userData.sceneInteraction || mesh.isSkinnedMesh || mesh.isInstancedMesh || Array.isArray(mesh.material) || mesh.material.transparent || !mesh.visible) continue;
      const source = mesh.geometry;
      if (source.morphAttributes && Object.keys(source.morphAttributes).length || source.groups.length || source.drawRange.start !== 0 || Number.isFinite(source.drawRange.count)) continue;
      if (mesh.matrixAutoUpdate) mesh.updateMatrix();
      const count = source.index ? source.index.count : source.attributes.position.count;
      const attributes = Object.keys(source.attributes).sort();
      if (attributes.some(k => source.attributes[k].isInterleavedBufferAttribute)) continue;
      source.computeBoundingBox(); const centre = source.boundingBox.getCenter(new THREE.Vector3()).applyMatrix4(mesh.matrix);
      const cell = Number.isFinite(cellSize) ? `${Math.floor(centre.x/cellSize)},${Math.floor(centre.y/cellSize)},${Math.floor(centre.z/cellSize)}` : 'all';
      const signature = attributes.map(k => `${k}:${source.attributes[k].itemSize}:${source.attributes[k].normalized}:${source.attributes[k].array.constructor.name}`).join('|');
      const key = `${mesh.material.uuid}/${mesh.castShadow}/${mesh.receiveShadow}/${mesh.renderOrder}/${mesh.layers.mask}/${cell}/${signature}`;
      let bins = buckets.get(key); if (!bins) { bins=[]; buckets.set(key,bins); }
      let bin=bins.at(-1); if (!bin || bin.vertices+count>maxVertices) { bin={meshes:[],vertices:0};bins.push(bin); }
      bin.meshes.push(mesh);bin.vertices+=count;
    }
    for (const bins of buckets.values()) for (const bin of bins) {
      if (bin.meshes.length < 2) continue;
      const first=bin.meshes[0], pieces=[];
      for (const mesh of bin.meshes) {
        const geometry=mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry.clone();
        geometry.applyMatrix4(mesh.matrix);
        if (mesh.matrix.determinant()<0) {
          // Baking reflection removes WebGL's per-object front-face reversal.
          for (const attribute of Object.values(geometry.attributes)) {
            const a=attribute.array,n=attribute.itemSize;
            for(let v=0;v<attribute.count;v+=3)for(let c=0;c<n;c++){const i=(v+1)*n+c,j=(v+2)*n+c,t=a[i];a[i]=a[j];a[j]=t;}
          }
          const tangent=geometry.attributes.tangent;if(tangent)for(let i=0;i<tangent.count;i++)tangent.setW(i,-tangent.getW(i));
        }
        pieces.push(geometry);
      }
      const geometry=new THREE.BufferGeometry();
      for (const key of Object.keys(pieces[0].attributes)) {
        const exemplar=pieces[0].attributes[key], ArrayType=exemplar.array.constructor;
        const size=pieces.reduce((n,g)=>n+g.attributes[key].array.length,0),array=new ArrayType(size);let offset=0;
        for(const part of pieces){array.set(part.attributes[key].array,offset);offset+=part.attributes[key].array.length;}
        geometry.setAttribute(key,new THREE.BufferAttribute(array,exemplar.itemSize,exemplar.normalized));
      }
      geometry.computeBoundingBox();geometry.computeBoundingSphere();
      const batch=new THREE.Mesh(geometry,first.material);batch.name=`Static batch | ${first.material.name||'material'} | ${stats.batches}`;
      batch.castShadow=first.castShadow;batch.receiveShadow=first.receiveShadow;batch.renderOrder=first.renderOrder;batch.layers.mask=first.layers.mask;
      batch.userData.batchedSourceCount=bin.meshes.length;batch.userData.sourceNames=bin.meshes.map(m=>m.name);
      parent.add(batch);geometries.push(geometry);
      for(const mesh of bin.meshes)parent.remove(mesh);
      for(const part of pieces)part.dispose();
      stats.sourceMeshes+=bin.meshes.length;stats.mergedMeshes+=bin.meshes.length-1;stats.batches++;
      stats.trianglesBefore+=bin.vertices/3;stats.trianglesAfter+=geometry.attributes.position.count/3;
    }
  }
  return { stats,
    releaseSources(sourceMap) {
      const used=new Set();root.traverse(o=>{if(o.isMesh)used.add(o.geometry);});
      for(const [key,geometry]of sourceMap)if(!used.has(geometry)){sourceMap.delete(key);geometry.dispose();}
    },
    dispose(){for(const geometry of geometries)geometry.dispose();}
  };
}
