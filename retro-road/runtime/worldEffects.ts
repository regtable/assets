import * as THREE from "three";
import { LoadedAreaResult } from "./areaManifestLoader";
import { installRoomBounce } from "./roomBounce";

type Fixture = {
  source: THREE.Object3D;
  light: THREE.PointLight | THREE.SpotLight;
  target?: THREE.Object3D;
  offset: THREE.Vector3;
  direction: THREE.Vector3;
  casts: boolean;
};

export class WorldEffects {
  private root = new THREE.Group();
  private fixtures: Fixture[] = [];
  private mixers: THREE.AnimationMixer[] = [];
  private elapsed = 0;
  private removeRoomBounce: () => void = () => {};

  constructor(
    areas: LoadedAreaResult[],
    private renderer: THREE.WebGLRenderer,
    private coarse: boolean,
    scene: THREE.Scene
  ) {
    this.root.name = "InstalledFixtureLights";
    scene.add(this.root);

    for (const area of areas) {
      const mixer = new THREE.AnimationMixer(area.group);
      let loops = 0;
      const loopNames = new Set<string>();

      area.group.traverse((node) => {
        if (typeof node.userData.loopAnimation === "string") {
          loopNames.add(node.userData.loopAnimation);
        }
      });

      for (const name of loopNames) {
        const clip = area.animationClips.find((c) => c.name === name);
        if (clip) {
          mixer.clipAction(clip).setLoop(THREE.LoopRepeat, Infinity).play();
          loops++;
        }
      }

      if (loops) this.mixers.push(mixer);

      area.group.traverse((node) => {
        const mesh = node as THREE.Mesh;
        if (mesh.isMesh) {
          const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          let emitter = false;
          for (let p: THREE.Object3D | null = node; p; p = p.parent)
            if (p.name.startsWith("LIGHT_")) emitter = true;
          const solid =
            node.visible && !emitter && !mats.some((m) => m.transparent && m.opacity < 0.95);
          mesh.receiveShadow = solid;
          mesh.castShadow = solid;
          for (const m of mats) m.shadowSide = THREE.DoubleSide;
        }

        if (!node.name.startsWith("LIGHT_") || (node as THREE.Light).isLight) return;
        for (let p = node.parent; p; p = p.parent) if (p.name.startsWith("LIGHT_")) return;

        const materials: THREE.MeshStandardMaterial[] = [];
        node.traverse((child) => {
          const m = child as THREE.Mesh;
          if (m.isMesh) {
            for (const mat of Array.isArray(m.material) ? m.material : [m.material]) {
              if ((mat as THREE.MeshStandardMaterial).emissive) {
                materials.push(mat as THREE.MeshStandardMaterial);
              }
            }
          }
        });

        const unique = [...new Set(materials)].filter(
          (m) => m.emissiveIntensity > 0 && Math.max(m.emissive.r, m.emissive.g, m.emissive.b) > 0
        );

        if (!unique.length) {
          console.warn("LIGHT_ mesh has no emissive material:", node.name);
          return;
        }

        const energy = new THREE.Color(0, 0, 0);
        for (const m of unique) {
          energy.add(m.emissive.clone().multiplyScalar(m.emissiveIntensity / unique.length));
        }

        const intensity = Math.max(energy.r, energy.g, energy.b);
        const color = energy.multiplyScalar(1 / intensity);

        const range =
          typeof node.userData.lightRange === "number"
            ? Math.max(0, node.userData.lightRange)
            : 30;
        const spot = node.userData.lightType === "spot";

        const light = spot
          ? new THREE.SpotLight(
              color,
              intensity,
              range,
              typeof node.userData.lightAngle === "number" ? node.userData.lightAngle : 1.25,
              0.4,
              2
            )
          : new THREE.PointLight(color, intensity, range, 2);

        light.name = node.name + "__runtime_light";
        light.shadow.mapSize.set(coarse ? 512 : 1024, coarse ? 512 : 1024);
        light.shadow.radius = coarse ? 3 : 4;
        light.shadow.blurSamples = 8;
        light.shadow.bias = -0.0003;
        light.shadow.normalBias = 0.025;
        light.shadow.camera.near = 0.2;
        light.shadow.camera.far = range || 60;

        const target = spot ? new THREE.Object3D() : undefined;
        if (target) {
          this.root.add(target);
          (light as THREE.SpotLight).target = target;
        }

        const vector = (v: unknown, fallback: number[]) =>
          new THREE.Vector3().fromArray(
            Array.isArray(v) && v.length === 3 && v.every(Number.isFinite)
              ? (v as number[])
              : fallback
          );

        this.root.add(light);
        this.fixtures.push({
          source: node,
          light,
          target,
          offset: vector(node.userData.lightOffset, [0, 0, 0]),
          direction: vector(node.userData.lightDirection, [0, -1, 0]).normalize(),
          casts: spot && node.userData.lightCastsShadow !== false
        });
      });
    }

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;
    renderer.shadowMap.autoUpdate = false;
    this.removeRoomBounce = installRoomBounce(areas, this.fixtures);
  }

  update(dt: number, cameraPosition: THREE.Vector3) {
    for (const mixer of this.mixers) mixer.update(dt);

    for (const f of this.fixtures) {
      const mesh = f.source as THREE.Mesh;
      if (mesh.isMesh) {
        if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
        mesh.geometry.boundingBox!.getCenter(f.light.position);
        f.source.localToWorld(f.light.position);
      } else {
        new THREE.Box3().setFromObject(f.source).getCenter(f.light.position);
      }
      f.light.position.add(f.offset);
      if (f.target) f.target.position.copy(f.light.position).add(f.direction);
    }

    const sorted = [...this.fixtures].sort(
      (a, b) =>
        a.light.position.distanceToSquared(cameraPosition) -
        b.light.position.distanceToSquared(cameraPosition)
    );


    let shadows = 0;

    for (const f of sorted) {
      f.light.visible = true;
      const cast = f.light.visible && f.casts && shadows < (this.coarse ? 1 : 2);
      if (cast) shadows++;
      if (f.light.castShadow !== cast) {
        f.light.castShadow = cast;
        this.renderer.shadowMap.needsUpdate = true;
      }
    }

    this.elapsed += dt;
    if (this.elapsed >= 0.2) {
      this.elapsed = 0;
      this.renderer.shadowMap.needsUpdate = true;
    }
  }

  getCounts() {
    return { loopMixers: this.mixers.length, fixtures: this.fixtures.length };
  }

  dispose() {
    this.removeRoomBounce();
    for (const m of this.mixers) {
      m.stopAllAction();
      m.uncacheRoot(m.getRoot());
    }
    for (const f of this.fixtures) {
      f.light.shadow.map?.dispose();
      (f.light.shadow as any).mapPass?.dispose();
      f.light.dispose();
    }
    this.root.removeFromParent();
    this.fixtures = [];
    this.mixers = [];
  }
}