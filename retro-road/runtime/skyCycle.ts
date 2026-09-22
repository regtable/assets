import * as THREE from "three";

// One full day lasts 20 real minutes. Start at 21:00 for the record shop's night setting.
export const SKY_CONFIG = { dayLengthSeconds: 1200, startHour: 21, sunIntensity: 2.8, moonIntensity: 0.65, nightSkyFill: 0.12, daySkyFill: 0.5 };

export class SkyCycle {
 private root = new THREE.Group();
 private dome: THREE.Mesh;
 private sun: THREE.Mesh;
 private moon: THREE.Mesh;
 private stars: THREE.Points;
 private light = new THREE.DirectionalLight();
 private skyFill = new THREE.HemisphereLight(0x9bb7e8, 0x292638, 0.12);
 private elapsed = 0;
 private active = "";
 private direction = new THREE.Vector3();
 private skyMaterial: THREE.ShaderMaterial;
 private nightTop = new THREE.Color("#071126");
 private nightHorizon = new THREE.Color("#26344f");
 private dayTop = new THREE.Color("#377bbb");
 private dayHorizon = new THREE.Color("#b9d5e8");
 private sunset = new THREE.Color("#b56c54");
 private disposed = false;
 constructor(private scene: THREE.Scene, private renderer: THREE.WebGLRenderer, coarse: boolean) {
  this.root.name = "ENV__day_night_sky";
  scene.add(this.root);
  this.skyMaterial = new THREE.ShaderMaterial({
   side: THREE.BackSide, depthWrite: false,
   uniforms: { topColor: { value: this.nightTop.clone() }, horizonColor: { value: this.nightHorizon.clone() } },
   vertexShader: `varying vec3 vDirection; void main(){vDirection=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
   fragmentShader: `uniform vec3 topColor;uniform vec3 horizonColor;varying vec3 vDirection;void main(){float h=pow(clamp(normalize(vDirection).y,0.0,1.0),0.55);gl_FragColor=vec4(mix(horizonColor,topColor,h),1.0);\n #include <tonemapping_fragment>\n #include <colorspace_fragment>\n}`
  });
  this.dome = new THREE.Mesh(new THREE.SphereGeometry(230, 32, 16), this.skyMaterial);
  this.dome.name = "Sky dome";this.dome.renderOrder=-100;this.dome.frustumCulled=false;this.root.add(this.dome);
  this.sun = new THREE.Mesh(new THREE.SphereGeometry(3,16,10),new THREE.MeshBasicMaterial({color:0xffedbb,fog:false,toneMapped:false}));
  this.sun.name="Sun";this.root.add(this.sun);
  this.moon = new THREE.Mesh(new THREE.SphereGeometry(2.6,16,10),new THREE.MeshBasicMaterial({color:0xcbd9f0,fog:false,toneMapped:false}));
  this.moon.name="Moon";this.root.add(this.moon);
  // Simple grey crater discs attached to the visible hemisphere; no downloaded sky textures.
  const craterMaterial=new THREE.MeshBasicMaterial({color:0x8c9eb9,fog:false,toneMapped:false});
  for(const [x,y,r] of [[-.8,.7,.45],[.55,-.35,.62],[.75,1.1,.3],[-1.0,-.85,.28]]){
   const crater=new THREE.Mesh(new THREE.CircleGeometry(r,12),craterMaterial);
   crater.position.set(x,y,Math.sqrt(2.6*2.6-x*x-y*y)+.025);this.moon.add(crater);
  }
  const positions:number[]=[],colors:number[]=[];let seed=421;
  const random=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};
  for(let i=0;i<850;i++){
   const y=.06+random()*.94,angle=random()*Math.PI*2,r=Math.sqrt(1-y*y);
   positions.push(Math.cos(angle)*r*218,y*218,Math.sin(angle)*r*218);
   const brightness=.45+random()*.55;colors.push(brightness*.85,brightness*.9,brightness);
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  const starMaterial=new THREE.PointsMaterial({color:0xffffff,size:coarse?1.7:2,sizeAttenuation:false,vertexColors:true,transparent:true,depthWrite:false,fog:false,toneMapped:false});
  starMaterial.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('void main() {','void main() { if(length(gl_PointCoord-vec2(0.5))>0.5) discard;');};
  this.stars=new THREE.Points(geometry,starMaterial);this.stars.name="Night starfield";this.root.add(this.stars);
  this.light.name="Sun or moon directional light";this.light.castShadow=true;
  this.light.shadow.mapSize.set(coarse?512:1024,coarse?512:1024);
  Object.assign(this.light.shadow.camera,{left:-42,right:42,top:42,bottom:-42,near:1,far:180});
  this.light.shadow.camera.updateProjectionMatrix();
  this.light.shadow.bias=-.0002;this.light.shadow.normalBias=.12;
  this.skyFill.name="Outdoor sky illumination";
  scene.add(this.light,this.light.target,this.skyFill);
  this.update(0,new THREE.Vector3());
 }
 update(dt:number,cameraPosition:THREE.Vector3){
  if(this.disposed)return;
  this.elapsed=(this.elapsed+Math.max(0,Math.min(dt,.1)))%SKY_CONFIG.dayLengthSeconds;
  const hour=(SKY_CONFIG.startHour+this.elapsed/SKY_CONFIG.dayLengthSeconds*24)%24;
  const angle=(hour-6)/24*Math.PI*2;
  this.direction.set(Math.cos(angle)*.8,Math.sin(angle),Math.cos(angle)*.6).normalize();
  const altitude=this.direction.y;
  const day=THREE.MathUtils.smoothstep(altitude,-.12,.18);
  const dusk=(1-THREE.MathUtils.smoothstep(Math.abs(altitude),.03,.3));
  this.root.position.copy(cameraPosition);
  this.sun.position.copy(this.direction).multiplyScalar(210);this.sun.visible=altitude>-.08;
  this.moon.position.copy(this.direction).multiplyScalar(-210);this.moon.visible=altitude<.08;
  this.moon.lookAt(cameraPosition);
  (this.stars.material as THREE.PointsMaterial).opacity=1-day;this.stars.visible=day<.99;
  this.skyMaterial.uniforms.topColor.value.copy(this.nightTop).lerp(this.dayTop,day);
  this.skyMaterial.uniforms.horizonColor.value.copy(this.nightHorizon).lerp(this.dayHorizon,day).lerp(this.sunset,dusk*.55);
  if(this.scene.fog instanceof THREE.FogExp2){this.scene.fog.color.copy(this.skyMaterial.uniforms.horizonColor.value);this.scene.fog.density=THREE.MathUtils.lerp(.0025,.0035,day);}
  // A single shadow-casting celestial light switches between sun and moon.
  const isDay=altitude>=0,active=isDay?'sun':'moon';
  const source=this.direction.clone().multiplyScalar(isDay?1:-1);
  const target=new THREE.Vector3(Math.round(cameraPosition.x/4)*4,0,Math.round(cameraPosition.z/4)*4);
  this.light.position.copy(target).addScaledVector(source,85);this.light.target.position.copy(target);
  this.light.color.set(isDay?0xffedd2:0xaec9ff);
  this.light.intensity=(isDay?SKY_CONFIG.sunIntensity:SKY_CONFIG.moonIntensity)*(.25+.75*THREE.MathUtils.smoothstep(Math.abs(altitude),0,.3));
  this.skyFill.intensity=THREE.MathUtils.lerp(SKY_CONFIG.nightSkyFill,SKY_CONFIG.daySkyFill,day);
  if(active!==this.active){this.active=active;this.renderer.shadowMap.needsUpdate=true;}
 }
 getState(){return {hour:(SKY_CONFIG.startHour+this.elapsed/SKY_CONFIG.dayLengthSeconds*24)%24,active:this.active,starsVisible:this.stars.visible,skyFill:this.skyFill.intensity,celestialIntensity:this.light.intensity};}
 dispose(){
  if(this.disposed)return;this.disposed=true;
  const materials=new Set<THREE.Material>();
  this.root.traverse(n=>{const m=n as THREE.Mesh;if(m.geometry)m.geometry.dispose();if(m.material)for(const mat of Array.isArray(m.material)?m.material:[m.material])materials.add(mat);});
  materials.forEach(m=>m.dispose());this.root.removeFromParent();this.light.shadow.map?.dispose();this.light.dispose();this.light.removeFromParent();this.light.target.removeFromParent();this.skyFill.dispose();this.skyFill.removeFromParent();
 }
}