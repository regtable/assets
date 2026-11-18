bl_info = {
    'name': 'Three.js Scene and Trigger Exporter',
    'author': 'Codex', 'version': (0, 5, 0),
    'blender': (4, 0, 0), 'location': 'View3D > Sidebar > Three.js',
    'description': 'Export scene geometry, explicit colliders, and proximity-activated hinge triggers to TypeScript',
    'category': 'Import-Export',
}
import bpy, json, hashlib, math, os, base64, mimetypes, gzip
from bpy.props import BoolProperty, FloatProperty, PointerProperty, StringProperty
from bpy.types import Operator, Panel, PropertyGroup
from mathutils import Matrix
from bpy_extras.io_utils import ExportHelper

C = Matrix(((1,0,0,0),(0,0,1,0),(0,-1,0,0),(0,0,0,1)))
def convert_matrix(m):
    v=C @ m @ C.inverted()
    return [round(float(v[r][c]), 6) for c in range(4) for r in range(4)]

def export_audio_zones(objects):
    zones=[]
    for o in objects:
        if o.type!='EMPTY' or not (o.ts_scene.audio_zone or o.get('audio_zone',False)):continue
        if o.empty_display_type!='CUBE':raise ValueError('Audio zone must use Cube display: '+o.name)
        matrix=o.matrix_world @ Matrix.Scale(o.empty_display_size*2,4)
        if abs(matrix.determinant())<1e-10:raise ValueError('Audio zone has zero scale: '+o.name)
        zones.append(dict(name=o.name,zoneMatrix=convert_matrix(matrix)))
    return zones
def color_of(obj, idx):
    mat=obj.material_slots[idx].material if idx < len(obj.material_slots) else None
    return [round(float(v), 5) for v in (mat.diffuse_color if mat else (.7,.7,.7,1))]
def is_child(obj, target):
    cur=obj.parent
    while cur:
        if cur == target: return True
        cur=cur.parent
    return False

RUNTIME = r'''
export interface SceneOptions { position?: THREE.Vector3 | [number,number,number]; rotationY?: number; scale?: number; onLoad?: (model:THREE.Group)=>void; onAudioZoneChange?: (inside:boolean)=>void; generateSong?: (params:{soundPrompt:string;title:string})=>Promise<unknown>; generators?: Record<string,(params:any)=>Promise<any>>; onGenerated?: (result:any,context:any)=>void; onInteractionError?: (error:unknown)=>void }
export interface SceneInstance { group: THREE.Group; ready:Promise<THREE.Group|null>; update:(delta:number,player:THREE.Vector3)=>void; checkCollision:(candidate:THREE.Vector3,current:THREE.Vector3,radius:number)=>boolean; handleClick:(object:THREE.Object3D)=>boolean; dispose:()=>void; readonly status:'loading'|'ready'|'error'|'disposed' }
export function createExportedScene(options:SceneOptions={}):SceneInstance {
 const group=new THREE.Group(), model=new THREE.Group(); group.name='ExportedScene'; group.add(model);
 if(options.position)group.position.copy(Array.isArray(options.position)?new THREE.Vector3(...options.position):options.position);
 if(options.rotationY!==undefined)group.rotation.y=options.rotationY;
 if(options.scale!==undefined)group.scale.setScalar(options.scale);
 const geos=new Map<string,THREE.BufferGeometry>();
 for(const [key,geo] of Object.entries(DATA.geometry)) { const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(geo.position,3));if(geo.uv.length)g.setAttribute('uv',new THREE.Float32BufferAttribute(geo.uv,2));if(geo.color?.length)g.setAttribute('color',new THREE.Float32BufferAttribute(geo.color,3));if(geo.normal?.length)g.setAttribute('normal',new THREE.Float32BufferAttribute(geo.normal,3));else if(geo.normal?.length)g.setAttribute('normal',new THREE.Float32BufferAttribute(geo.normal,3));else if(geo.normal?.length)g.setAttribute('normal',new THREE.Float32BufferAttribute(geo.normal,3));else if(geo.normal?.length)g.setAttribute('normal',new THREE.Float32BufferAttribute(geo.normal,3));else g.computeVertexNormals();geos.set(key,g); }
 const textureLoader=new THREE.TextureLoader();
 const textures=DATA.images.map(()=>null as THREE.Texture|null);
 let status:'loading'|'ready'|'error'|'disposed'='loading';
 const textureJobs=DATA.images.map((image,i)=>new Promise<void>((resolve,reject)=>{textureLoader.load(image.uri,t=>{if(status==='disposed'){t.dispose();resolve();return;}t.colorSpace=image.colorSpace==='linear'?THREE.NoColorSpace:THREE.SRGBColorSpace;textures[i]=t;resolve();},undefined,reject);}));
 const mats=DATA.materials.map(m=>new THREE.MeshStandardMaterial({color:new THREE.Color(m.color[0],m.color[1],m.color[2]),vertexColors:m.vertexColors??false,opacity:m.color[3],transparent:m.alpha,alphaTest:m.alpha?0.45:0,side:m.alpha?THREE.DoubleSide:THREE.FrontSide,roughness:m.roughnessImage>=0?1:(m.roughness??.75),metalness:m.metalness??0,emissive:new THREE.Color(...(m.emission??[0,0,0])),emissiveIntensity:m.emissionStrength??0}));
 const areaLightJob=(DATA.lights??[]).some(l=>l.type==='AREA')?import('https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/lights/RectAreaLightUniformsLib.js').then(m=>m.RectAreaLightUniformsLib.init()):Promise.resolve();
 const emitters:any[]=[];
 const emitterJob=(DATA.emitters??[]).length?import('https://cdn.jsdelivr.net/gh/regtable/assets@930efe668a4795819af6ceda9476d295138402e7/retro%20road/zen_corner/petal_emitter.mjs').then(({createPetalEmitter})=>{if(status==='disposed')return;for(const e of DATA.emitters){const emitter=createPetalEmitter(e.options);emitter.group.name=e.name;emitter.group.matrixAutoUpdate=false;emitter.group.matrix.fromArray(e.matrix);model.add(emitter.group);emitters.push(emitter);}}):Promise.resolve();
 const ready=Promise.all([Promise.allSettled(textureJobs),areaLightJob.catch(e=>console.error('Area light setup failed',e)),emitterJob.catch(e=>console.error('Foliage emitter failed',e))]).then(([results])=>{for(const result of results)if(result.status==='rejected')console.error('Scene texture failed',result.reason);if(status==='disposed')return null;DATA.materials.forEach((m,i)=>{if(m.image>=0){mats[i].map=textures[m.image];mats[i].needsUpdate=true;}if(m.normalImage>=0){mats[i].normalMap=textures[m.normalImage];mats[i].normalScale.setScalar(m.normalScale??1);}if(m.roughnessImage>=0)mats[i].roughnessMap=textures[m.roughnessImage];mats[i].needsUpdate=true;});status='ready';return model;}).catch(e=>{if(status!=='disposed')status='error';console.error('Scene texture, emitter or area light setup failed',e);return null;});
 const hinges=DATA.triggers.map(t=>{const g=new THREE.Group();g.name='Hinge | '+t.name;g.matrixAutoUpdate=false;g.matrix.fromArray(t.hingeMatrix as unknown as number[]);model.add(g);return g;});
 for(const l of DATA.lights??[]){const color=new THREE.Color(...l.color);const light=l.type==='AREA'?new THREE.RectAreaLight(color,l.intensity,l.width,l.height):new THREE.PointLight(color,l.intensity,l.distance);light.name=l.name;light.matrixAutoUpdate=false;light.matrix.fromArray(l.matrix as unknown as number[]);model.add(light);}
 const colliders:THREE.Mesh[]=[];
 for(const o of DATA.objects){const mesh=new THREE.Mesh(geos.get(o.geometry)!,mats[o.material]);mesh.name=o.name;if(o.interaction)mesh.userData.sceneInteraction=o.interaction;mesh.matrixAutoUpdate=false;mesh.matrix.fromArray(o.matrix as unknown as number[]);mesh.receiveShadow=true;mesh.visible=o.visible;(o.trigger<0?model:hinges[o.trigger]).add(mesh);if(o.collider)colliders.push(mesh);}
 const scratch=new THREE.Vector3(), rotation=new THREE.Matrix4(), baseMatrices=hinges.map(h=>h.matrix.clone());
 const state=DATA.triggers.map(()=>({angle:0,hold:0}));
 
 const audioZoneMatrices=(DATA.audioZones??[]).map(z=>new THREE.Matrix4().fromArray(z.zoneMatrix));
 const audioZoneState={initialized:false,inside:false},audioZoneWorld=new THREE.Matrix4(),audioZonePoint=new THREE.Vector3();
 function updateAudioZones(player:THREE.Vector3){
  if(!audioZoneMatrices.length)return;
  const inside=audioZoneMatrices.some(matrix=>{audioZoneWorld.multiplyMatrices(model.matrixWorld,matrix);audioZonePoint.copy(player).applyMatrix4(audioZoneWorld.invert());return Math.abs(audioZonePoint.x)<=.5&&Math.abs(audioZonePoint.y)<=.5&&Math.abs(audioZonePoint.z)<=.5;});
  if(!audioZoneState.initialized||inside!==audioZoneState.inside){audioZoneState.initialized=true;audioZoneState.inside=inside;options.onAudioZoneChange?.(inside);}
 }
 function update(delta:number,player:THREE.Vector3){
  if(status==='disposed')return;for(const e of emitters)e.update(delta);if(!player)return; group.updateWorldMatrix(true,false);model.updateWorldMatrix(true,false);
  const dt=Math.max(0,Math.min(delta,.1));
  updateAudioZones(player);
  for(let i=0;i<DATA.triggers.length;i++){const t=DATA.triggers[i],v=state[i];
   const triggerWorld=new THREE.Matrix4().multiplyMatrices(model.matrixWorld,new THREE.Matrix4().fromArray(t.zoneMatrix as unknown as number[]));
   scratch.copy(player).applyMatrix4(triggerWorld.invert());
   const inside=Math.abs(scratch.x)<=.5&&Math.abs(scratch.y)<=.5&&Math.abs(scratch.z)<=.5;
   if(inside)v.hold=t.delay;else v.hold=Math.max(0,v.hold-dt);
   const target=v.hold>0?t.angle:0;const step=Math.abs(t.angle)*dt/Math.max(.01,t.duration);
   v.angle+=Math.max(-step,Math.min(step,target-v.angle));
   rotation.makeRotationY(v.angle);hinges[i].matrix.copy(baseMatrices[i]).multiply(rotation);hinges[i].matrixWorldNeedsUpdate=true;
  }
 }
 const boxes=colliders.map(()=>new THREE.Box3());
 function checkCollision(candidate:THREE.Vector3,_current:THREE.Vector3,radius:number){
  if(status==='disposed')return false;group.updateWorldMatrix(true,true);
  for(let i=0;i<colliders.length;i++){const b=boxes[i].setFromObject(colliders[i]);
   if(candidate.y<b.min.y-2||candidate.y>b.max.y+1.8)continue;
   if(candidate.x>=b.min.x-radius&&candidate.x<=b.max.x+radius&&candidate.z>=b.min.z-radius&&candidate.z<=b.max.z+radius)return true;
  }return false;
 }
 function dispose(){if(status==='disposed')return;status='disposed';if(audioZoneState.initialized&&audioZoneState.inside){audioZoneState.inside=false;options.onAudioZoneChange?.(false);}for(const e of emitters)e.dispose();for(const g of geos.values())g.dispose();for(const m of mats)m.dispose();for(const t of textures)t?.dispose();group.removeFromParent();group.clear();}
 const pendingGeneration=new Set();
 function handleClick(object:THREE.Object3D){let current:THREE.Object3D|null=object;if(status==='disposed')return false;let owner=current;while(owner&&owner!==model)owner=owner.parent;if(owner!==model)return false;while(current&&current!==model){const action=current.userData.sceneInteraction;if(action){const type=action.type||'song';const api=options.generators?.[type]||(type==='song'?options.generateSong:null);if(pendingGeneration.has(current))return true;if(!api){const error=new Error('Generation service not connected: '+type);if(options.onInteractionError)options.onInteractionError(error);else console.error(error);return true;}const button=current;pendingGeneration.add(button);const params=type==='song'?{soundPrompt:action.prompt,title:action.title||'Generated song'}:{prompt:action.prompt,aspectRatio:action.aspectRatio||'1:1'};Promise.resolve().then(()=>api(params)).then(result=>{if(status!=='disposed')options.onGenerated?.(result,{type,object:button});}).catch(error=>{if(options.onInteractionError)options.onInteractionError(error);else console.error(error);}).finally(()=>pendingGeneration.delete(button));return true;}current=current.parent;}return false;}

 options.onLoad?.(model);return {group,ready,update,checkCollision,handleClick,dispose,get status(){return status;}};
}
'''

def javascript_runtime():
    # This small runtime is maintained alongside the TypeScript template; no external compiler is needed.
    runtime = RUNTIME
    runtime = "\n".join(line for line in runtime.splitlines() if not line.startswith('export interface '))
    replacements = [
        ('options:SceneOptions={}', 'options={}'), ('):SceneInstance {', ') {'),
        ('new Map<string,THREE.BufferGeometry>()','new Map()'),
        (' as unknown as number[]',''), ('geos.get(o.geometry)!','geos.get(o.geometry)'), ('const colliders:THREE.Mesh[]=[]','const colliders=[]'),
        ("let status:'ready'|'disposed'='ready'", "let status='ready'"),
        ('delta:number,player:THREE.Vector3','delta,player'),
        ('player:THREE.Vector3','player'),
        ('candidate:THREE.Vector3,_current:THREE.Vector3,radius:number','candidate,_current,radius'),
        ('object:THREE.Object3D','object'), ('let current:THREE.Object3D|null=object','let current=object'), ('options.generateSong!(', 'options.generateSong('),
        ('null as THREE.Texture|null','null'), ('new Promise<void>','new Promise'), ('const emitters:any[]=[]','const emitters=[]'),
        ("let status:'loading'|'ready'|'error'|'disposed'='loading'","let status='loading'"),
    ]
    for before,after in replacements: runtime=runtime.replace(before,after)
    return runtime

class TSExportSettings(PropertyGroup):
    audio_zone: BoolProperty(name='Audio playback zone',description='Notify the host when the player enters or leaves this box; non-rendered metadata',default=False)
    collision: BoolProperty(name='Solid collider',description='Include this mesh in simple box collision',default=False)
    trigger: BoolProperty(name='Proximity trigger',description='Use this empty as a box-shaped trigger zone',default=False)
    target: PointerProperty(name='Hinge target',description='Empty at the hinge; parent the moving mesh parts to this empty',type=bpy.types.Object)
    angle: FloatProperty(name='Open angle',description='Signed angle around the hinge local Z axis; positive is counterclockwise viewed from above',subtype='ANGLE',default=math.radians(90),min=-math.tau,max=math.tau)
    duration: FloatProperty(name='Open / close duration',subtype='TIME',default=1,min=.05,soft_max=30)
    delay: FloatProperty(name='Close delay',subtype='TIME',default=2,min=0,soft_max=60)

class TS_OT_create_trigger(Operator):
    bl_idname='ts_scene.create_trigger'; bl_label='Create Trigger Zone'; bl_description='Create a configurable box trigger; set its hinge target in the panel'
    def execute(self,context):
        bpy.ops.object.empty_add(type='CUBE',location=context.scene.cursor.location)
        o=context.object;o.name='TS Trigger';o.empty_display_size=.5;o.scale=(4,4,3);o.ts_scene.trigger=True
        return {'FINISHED'}

class TS_OT_generation_button(Operator):
    bl_idname='ts_scene.generation_button';bl_label='Add Generation Click';bl_description='Add reusable generation metadata to the selected mesh'
    def execute(self,context):
        o=context.object
        if not o or o.type!='MESH':return {'CANCELLED'}
        defaults={'interaction_action':'generate','generation_type':'song','interaction_prompt':'','interaction_title':o.name,'generation_aspect_ratio':'1:1'}
        for key,value in defaults.items():
            if key not in o:o[key]=value
        return {'FINISHED'}

class TS_OT_export_scene(Operator, ExportHelper):
    bl_idname='export_scene.typescript_scene';bl_label='Export Three.js TypeScript';bl_options={'REGISTER'}
    filename_ext='.ts'
    filter_glob: StringProperty(default='*.ts',options={'HIDDEN'})
    three_url: StringProperty(name='Three.js module URL',default='https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js',description='Browser ES module URL used by the exported .mjs')
    collection: StringProperty(name='Export collection',description='Name of collection containing exportable meshes and trigger empties')
    compressed: BoolProperty(name='Compressed geometry files',default=True,description='Write bounded gzip geometry files beside TS/MJS; upload these files together')
    def invoke(self,context,event):
        if not self.collection: self.collection=context.collection.name
        context.window_manager.fileselect_add(self);return {'RUNNING_MODAL'}
    def draw(self,context):
        self.layout.prop_search(self,'collection',bpy.data,'collections',text='Export collection')
        self.layout.prop(self,'three_url')
        self.layout.prop(self,'compressed')
    def execute(self,context):
        collection=bpy.data.collections.get(self.collection)
        if not collection:
            self.report({'ERROR'},'Select an export collection');return {'CANCELLED'}
        try: result=export_scene(self.filepath,collection,context,self.three_url,compressed=self.compressed)
        except Exception as e:
            self.report({'ERROR'},str(e));return {'CANCELLED'}
        self.report({'INFO'},'Exported %d meshes and %d triggers'%result);return {'FINISHED'}

def export_scene(path,collection,context,three_url='https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js',compressed=False):
    context.view_layer.update(); objects=list(collection.all_objects)
    triggers=[o for o in objects if o.type=='EMPTY' and o.ts_scene.trigger]
    for t in triggers:
        if not t.ts_scene.target or t.ts_scene.target.type!='EMPTY':raise ValueError('Trigger %s requires an empty hinge target'%t.name)
        if t.ts_scene.target not in objects:raise ValueError('Hinge target for %s must be in export collection'%t.name)
        if abs(t.matrix_world.determinant())<1e-10:raise ValueError('Trigger %s has zero scale'%t.name)
    targets=[t.ts_scene.target for t in triggers]
    if len(set(targets))!=len(targets):raise ValueError('Each trigger must have a distinct hinge target')
    trigger_data=[dict(name=t.name,zoneMatrix=convert_matrix(t.matrix_world @ Matrix.Scale(t.empty_display_size*2,4)),hingeMatrix=convert_matrix(t.ts_scene.target.matrix_world),angle=float(t.ts_scene.angle),duration=float(t.ts_scene.duration),delay=float(t.ts_scene.delay)) for t in triggers]
    audio_zones=export_audio_zones(objects)
    emitters=[]
    for o in objects:
        if o.type=='EMPTY' and o.get('emitter_type')=='foliage' and not o.hide_render:
            options=dict(shape=o.get('shape','cherry'),count=int(o.get('count',160)),spawnRadius=float(o.get('spawn_radius',3.2)),spawnHeight=[float(o.get('spawn_height_min',1.2)),float(o.get('spawn_height_max',6.8))],floorY=float(o.get('floor_y',.06)))
            if o.get('colors'):options['colors']=[s.strip() for s in o['colors'].split(',') if s.strip()]
            emitters.append(dict(name=o.name,matrix=convert_matrix(o.matrix_world),options=options))
    lights=[]
    for o in objects:
        if o.type!='LIGHT' or o.hide_render:continue
        if o.data.type not in ('POINT','AREA'):raise ValueError('Unsupported export light type: '+o.name+' ('+o.data.type+')')
        d=o.data
        # Three point intensity is candela, Blender point power is watts; approximate isotropic conversion.
        width=d.size if d.type=='AREA' else 0; height=(d.size_y if d.shape in ('RECTANGLE','ELLIPSE') else d.size) if d.type=='AREA' else 0
        intensity=d.energy/(4*math.pi) if d.type=='POINT' else d.energy/(math.pi*max(.0001,width*height))
        matrix=o.matrix_world @ Matrix.Rotation(math.pi,4,'X') if d.type=='AREA' else o.matrix_world
        lights.append(dict(name=o.name,type=d.type,color=list(d.color),intensity=intensity,distance=0,width=width,height=height,matrix=convert_matrix(matrix)))
    geometry={};materials=[];material_index={};images=[];image_index={};parts=[];depsgraph=context.evaluated_depsgraph_get()
    def store_image(image, color_space):
        if image is None:return -1
        key=(image.name,color_space)
        if key not in image_index:
            if image.packed_file:raw_image=bytes(image.packed_file.data)
            else:
                with open(bpy.path.abspath(image.filepath,library=image.library),'rb') as f:raw_image=f.read()
            mime=mimetypes.guess_type(image.filepath or image.name)[0] or 'image/png'
            if mime not in ('image/png','image/jpeg','image/webp'):raise ValueError('Unsupported image '+image.name)
            image_index[key]=len(images);images.append(dict(name=image.name,colorSpace=color_space,uri='data:'+mime+';base64,'+base64.b64encode(raw_image).decode('ascii')))
        return image_index[key]
    for o in objects:
        if o.type!='MESH' or (o.hide_render and not o.ts_scene.collision):continue
        matches=[i for i,h in enumerate(targets) if is_child(o,h)]
        if len(matches)>1:raise ValueError('Object %s belongs to multiple hinge targets'%o.name)
        ti=matches[0] if matches else -1
        evaluated=o.evaluated_get(depsgraph);m=evaluated.to_mesh();m.calc_loop_triangles()
        try:
            bymat={}
            for tri in m.loop_triangles:
                arr=bymat.setdefault(m.polygons[tri.polygon_index].material_index,{'position':[],'uv':[],'normal':[],'color':[]})
                for vertex,loop in zip(tri.vertices,tri.loops):
                    v=m.vertices[vertex].co;arr['position'].extend([round(v.x,6),round(v.z,6),round(-v.y,6)])
                    n=m.corner_normals[loop].vector;arr['normal'].extend([round(n.x,6),round(n.z,6),round(-n.y,6)])
                    ca=m.color_attributes.active_color
                    if ca:arr['color'].extend(round(float(x),6) for x in ca.data[loop if ca.domain=='CORNER' else vertex].color[:3])
                    if m.uv_layers.active:
                        uv=m.uv_layers.active.data[loop].uv;arr['uv'].extend([round(uv.x,6),round(uv.y,6)])
            matrix=targets[ti].matrix_world.inverted() @ o.matrix_world if ti>=0 else o.matrix_world
            for mi,vertices in bymat.items():
                raw=json.dumps(vertices,separators=(',',':'));key=hashlib.sha256(raw.encode()).hexdigest()[:20];geometry.setdefault(key,vertices)
                material=o.material_slots[mi].material if mi<len(o.material_slots) else None
                image=None;alpha=False
                if material and material.use_nodes:
                    shader=next((n for n in material.node_tree.nodes if n.type=='BSDF_PRINCIPLED'),None)
                    if shader:
                        links=shader.inputs['Base Color'].links
                        if links and links[0].from_node.type=='TEX_IMAGE':image=links[0].from_node.image
                        alpha=shader.inputs['Alpha'].is_linked or shader.inputs['Alpha'].default_value<.999
                image_id=-1
                if image:
                    if not vertices['uv']:raise ValueError('Textured mesh %s requires an active UV map'%o.name)
                    if image.name not in image_index:
                        if image.packed_file:raw_image=bytes(image.packed_file.data)
                        else:
                            image_path=bpy.path.abspath(image.filepath,library=image.library)
                            if not os.path.isfile(image_path):raise ValueError('Image %s is not saved or packed'%image.name)
                            with open(image_path,'rb') as im:raw_image=im.read()
                        mime=mimetypes.guess_type(image.filepath or image.name)[0] or 'image/png'
                        if mime not in ('image/png','image/jpeg','image/webp'):raise ValueError('Image %s must be PNG, JPEG or WebP'%image.name)
                        image_index[image.name]=len(images);images.append(dict(name=image.name,uri='data:'+mime+';base64,'+base64.b64encode(raw_image).decode('ascii')))
                    image_id=image_index[image.name]
                color=(1,1,1,1) if image or vertices['color'] else tuple(color_of(o,mi))
                normal_id=rough_id=-1;normal_scale=1.;roughness=.75;metalness=0.
                if material and material.use_nodes and shader:
                    roughness=float(shader.inputs['Roughness'].default_value);metalness=float(shader.inputs['Metallic'].default_value)
                    links=shader.inputs['Roughness'].links
                    if links and links[0].from_node.type=='TEX_IMAGE':rough_id=store_image(links[0].from_node.image,'linear')
                    links=shader.inputs['Normal'].links
                    if links and links[0].from_node.type=='NORMAL_MAP':
                        node=links[0].from_node;normal_scale=float(node.inputs['Strength'].default_value);links=node.inputs['Color'].links
                        if links and links[0].from_node.type=='TEX_IMAGE':normal_id=store_image(links[0].from_node.image,'linear')
                emission=(0.,0.,0.);emission_strength=0.
                if material and material.use_nodes and shader:
                    emission=tuple(float(x) for x in shader.inputs['Emission Color'].default_value[:3]);emission_strength=float(shader.inputs['Emission Strength'].default_value)
                spec=(color,image_id,alpha,normal_id,rough_id,normal_scale,roughness,metalness,emission,emission_strength,bool(vertices['color']))
                if spec not in material_index:material_index[spec]=len(materials);materials.append(dict(color=color,image=image_id,alpha=alpha,normalImage=normal_id,roughnessImage=rough_id,normalScale=normal_scale,roughness=roughness,metalness=metalness,emission=emission,emissionStrength=emission_strength,vertexColors=bool(vertices['color'])))
                interaction=dict(action=str(o.get('interaction_action','')),prompt=str(o.get('interaction_prompt','')),title=str(o.get('interaction_title','')),type=str(o.get('generation_type','song')),aspectRatio=str(o.get('generation_aspect_ratio','1:1'))) if o.get('interaction_action') else None
                parts.append(dict(name=o.name,geometry=key,material=material_index[spec],matrix=convert_matrix(matrix),trigger=ti,collider=o.ts_scene.collision,visible=not o.hide_render,interaction=interaction))
        finally:evaluated.to_mesh_clear()
    if not parts:raise ValueError('No renderable mesh objects in collection')
    data={'geometry':geometry,'materials':materials,'images':images,'objects':parts,'triggers':trigger_data,'lights':lights,'emitters':emitters,'audioZones':audio_zones}
    if compressed:
        payload=os.path.splitext(path)[0]+'.json.gz'
        chunks=[]
        if compressed != 'archive':
            batch=[];size=2
            def flush_chunk():
                nonlocal batch,size
                if not batch:return
                chunk=os.path.splitext(path)[0]+'.geometry-'+str(len(chunks))+'.json.gz'
                with gzip.open(chunk,'wt',encoding='utf-8',compresslevel=6) as f:f.write('{'+','.join(batch)+'}')
                chunks.append(os.path.basename(chunk));batch=[];size=2
            for key,geo in geometry.items():
                entry=json.dumps(key)+':'+json.dumps(geo,separators=(',',':'))
                if size+len(entry)>24*1024*1024:flush_chunk()
                batch.append(entry);size+=len(entry)+1
            flush_chunk();data={**data,'geometry':{}}
        with gzip.open(payload,'wt',encoding='utf-8',compresslevel=6) as f:
            json.dump(data,f,separators=(',',':'))
        loader='async function loadSceneData(name){const r=await fetch(new URL(name,import.meta.url));if(!r.ok)throw new Error("Scene data HTTP "+r.status);return new Response(r.body.pipeThrough(new DecompressionStream("gzip"))).json();}\nconst DATA = await loadSceneData('+json.dumps(os.path.basename(payload))+');\n'
        loader+='for(const name of '+json.dumps(chunks)+')Object.assign(DATA.geometry,await loadSceneData(name));\n'
    with open(path,'w',encoding='utf-8') as f:
        f.write('// Generated by Three.js Scene and Trigger Exporter.\nimport * as THREE from "three";\n')
        f.write(loader if compressed else 'const DATA = '+json.dumps(data,separators=(',',':'))+';\n')
        f.write(RUNTIME)
    js_path=os.path.splitext(path)[0]+'.mjs'
    if js_path == path: raise ValueError('TypeScript and JavaScript paths must differ')
    with open(js_path,'w',encoding='utf-8') as f:
        f.write('// Generated by Three.js Scene and Trigger Exporter.\nimport * as THREE from '+json.dumps(three_url)+';\n')
        f.write(loader if compressed else 'const DATA = '+json.dumps(data,separators=(',',':'))+';\n')
        f.write(javascript_runtime())
    return len(parts),len(triggers)

class TS_PT_panel(Panel):
    bl_label='Three.js Export';bl_idname='TS_PT_scene_export';bl_space_type='VIEW_3D';bl_region_type='UI';bl_category='Three.js'
    def draw(self,context):
        layout=self.layout;layout.operator('ts_scene.create_trigger');o=context.object
        if o:
            p=o.ts_scene;layout.label(text='Selected: '+o.name)
            if o.type=='MESH':layout.prop(p,'collision')
            if o.type=='MESH':
                layout.operator('ts_scene.generation_button')
                if o.get('interaction_action'):
                    for key,label in [('generation_type','Type: song / image / video'),('interaction_prompt','Prompt'),('interaction_title','Title'),('generation_aspect_ratio','Image/video aspect ratio')]:
                        if key in o:layout.prop(o,'["'+key+'"]',text=label)
            if o.type=='EMPTY':
                layout.prop(p,'audio_zone')
                layout.prop(p,'trigger')
                if p.trigger:
                    layout.prop(p,'target');layout.prop(p,'angle');layout.prop(p,'duration');layout.prop(p,'delay')
        layout.operator('export_scene.typescript_scene',text='Export TypeScript')
def menu_export(self,context):self.layout.operator(TS_OT_export_scene.bl_idname,text='Three.js Scene (.ts)')
classes=(TSExportSettings,TS_OT_create_trigger,TS_OT_generation_button,TS_OT_export_scene,TS_PT_panel)
def register():
    for c in classes:bpy.utils.register_class(c)
    bpy.types.Object.ts_scene=PointerProperty(type=TSExportSettings)
    bpy.types.TOPBAR_MT_file_export.append(menu_export)
def unregister():
    bpy.types.TOPBAR_MT_file_export.remove(menu_export);del bpy.types.Object.ts_scene
    for c in reversed(classes):bpy.utils.unregister_class(c)
if __name__=='__main__':register()

