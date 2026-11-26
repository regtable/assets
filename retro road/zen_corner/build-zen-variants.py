import bpy, math, random, json, gzip, base64
from pathlib import Path
from mathutils import Vector
random.seed(76)
OUT=Path(__file__).resolve().parent
PRE=Path(__file__).parent
OUT.mkdir(parents=True,exist_ok=True)

def reset():
 bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
 for m in list(bpy.data.materials):bpy.data.materials.remove(m)
def mat(name,color,metal=0,rough=.8,emission=0):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=rough;p.inputs['Metallic'].default_value=metal
 if emission:p.inputs['Emission Color'].default_value=(*color,1);p.inputs['Emission Strength'].default_value=emission
 return m
def finish(o,name,material,parent=None):
 o.name=name;o.data.materials.append(material)
 if parent:o.parent=parent
 return o
def box(name,loc,size,material,parent=None,bevel=.05):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 if bevel:
  b=o.modifiers.new('Chipped edges','BEVEL');b.width=bevel;b.segments=2;bpy.ops.object.modifier_apply(modifier=b.name)
 return finish(o,name,material,parent)
def ball(name,loc,size,material,parent=None):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=(10 if name in ['Rope knot','Nail'] else 24),ring_count=(5 if name in ['Rope knot','Nail'] else 12),radius=1,location=loc);o=bpy.context.object;o.scale=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 for p in o.data.polygons:p.use_smooth=True
 return finish(o,name,material,parent)
def rod(name,a,b,r,material,parent=None,vertices=10):
 a,b=Vector(a),Vector(b);d=b-a
 bpy.ops.mesh.primitive_cylinder_add(vertices=vertices,radius=r,depth=d.length,location=(a+b)/2);o=bpy.context.object;o.rotation_euler=d.to_track_quat('Z','Y').to_euler()
 return finish(o,name,material,parent)
def text(name,body,loc,size,material,parent=None):
 bpy.ops.object.text_add(location=loc,rotation=(math.pi/2,0,0));o=bpy.context.object;o.data.body=body;o.data.align_x='CENTER';o.data.align_y='CENTER';o.data.size=size;o.data.extrude=.007;o.data.bevel_depth=0;o.data.resolution_u=3;o.data.space_line=1.1
 bpy.ops.object.convert(target='MESH');return finish(o,name,material,parent)
def line(name,points,r,material,parent=None):
 curve=bpy.data.curves.new(name,'CURVE');curve.dimensions='3D';curve.bevel_depth=r;curve.bevel_resolution=2
 s=curve.splines.new('POLY');s.points.add(len(points)-1)
 for p,co in zip(s.points,points):p.co=(*co,1)
 o=bpy.data.objects.new(name,curve);bpy.context.collection.objects.link(o);o.data.materials.append(material)
 if parent:o.parent=parent
 bpy.context.view_layer.objects.active=o;o.select_set(True);bpy.ops.object.convert(target='MESH');o.select_set(False);return o
def empty(name,loc=(0,0,0),parent=None):
 o=bpy.data.objects.new(name,None);bpy.context.collection.objects.link(o);o.location=loc
 if parent:o.parent=parent
 return o

def monolith():
 reset();stone=mat('Weathered charcoal basalt',(.085,.093,.105));black=mat('Deep carved recess',(.009,.007,.009));ivory=mat('Unsettling ivory stone',(.73,.69,.54));red=mat('Red gaze',(.85,.012,.008),rough=.4,emission=1.7);gold=mat('Tarnished brass',(.40,.25,.07),.65,.5)
 ground=mat('Old foundation',(.14,.15,.16));box('Foundation | collision',(9,12,.2),(17,13,.4),ground,bevel=.15)
 root=empty('THE LANDLORD | faces spawn',(9,12,0))
 # World spawn (-72,2,-59), converted into this existing Zen module's Blender coordinates.
 dx,dy=-72-9,79-12;root.rotation_euler.z=math.atan2(dx,-dy)
 box('Plinth | collision',(0,0,1.1),(12,9,1.8),stone,root,.22)
 # Tall faceted monolith, tapering upward into shoulders.
 verts=[]
 for z,w,d in [(1.8,5.5,3.5),(4,5,3.0),(23,4.2,2.9),(27,7,3.4),(29,3.6,2.8)]:
  verts += [(-w,-d,z),(w,-d,z),(w,d,z),(-w,d,z)]
 faces=[(3,2,1,0)]
 for k in range(4):
  for j in range(4):faces.append((4*k+j,4*k+(j+1)%4,4*(k+1)+(j+1)%4,4*(k+1)+j))
 faces.append((16,17,18,19));mesh=bpy.data.meshes.new('Monolith core');mesh.from_pydata(verts,[],faces);mesh.update();o=bpy.data.objects.new('Monolith body | collision',mesh);bpy.context.collection.objects.link(o);finish(o,o.name,stone,root)
 bevel=o.modifiers.new('Basalt softened edges','BEVEL');bevel.width=.22;bevel.segments=2;bpy.context.view_layer.objects.active=o;bpy.ops.object.modifier_apply(modifier=bevel.name)
 for side in [-1,1]:
  ball('Shoulder',(side*6,0,25),(2.1,3.4,2.2),stone,root)
  rod('Long arm',(side*6,-.5,24),(side*5.3,-3.5,12),1.4,stone,root)
  ball('Too-long hand',(side*5.2,-3.9,11.5),(1.7,1.4,2.2),stone,root)
  for j in range(4):rod('Stone finger',(side*5.2+(j-1.5)*.65,-4.8,11.7),(side*5.1+(j-1.5)*.66,-5.0,8.4+abs(j-1.5)*.4),.30,stone,root)
 head=empty('Head | looking down at spawn',(0,-.15,32.9),root);head.rotation_euler.x=math.atan2(30.5,math.hypot(dx,dy))
 ball('Giant cranium',(0,.2,.7),(6.9,4.8,6.4),stone,head)
 box('Jaw',(0,-1,-2.6),(11.0,6.5,4.2),stone,head,.8)
 for side in [-1,1]:
  ball('Ear',(side*6.6,0,.1),(1.0,1.3,2.1),stone,head)
  x=side*2.75;z=1.3+(0.35 if side==1 else 0)
  ball('Deep socket',(x,-4.1,z),(2.8,1.25,2.0),black,head)
  ball('Eye',(x,-4.87,z),(1.85,.8,1.25),ivory,head)
  ball('Red pupil',(x+.18,-5.60,z-.25),(.44,.16,.56),red,head)
  b=box('Heavy judging brow',(x,-4.8,z+1.35),(4.3,1.5,.9),stone,head,.22);b.rotation_euler.y=side*.12
 box('Long nose',(0,-5.0,-.1),(1.45,2.3,3.7),stone,head,.45)
 for side in [-1,1]:ball('Nostril',(side*.70,-6.0,-1.40),(.55,.25,.35),black,head)
 # Disturbingly broad, uneven grin. Individual stone teeth are geometry, not a billboard.
 points=[(x,-4.65,-2.8+.052*x*x) for x in [i*.25 for i in range(-21,22)]]
 line('Carved grin',points,.67,black,head)
 for i in range(13):
  x=(i-6)*.72;z=-2.8+.052*x*x
  t=box('Uneven grin tooth',(x,-5.22,z+.02),(.61,.46,.67+random.random()*.20),ivory,head,.07);t.rotation_euler.y=-x*.025
 for j in range(17):
  x=random.uniform(-4.8,4.8);z=random.uniform(4,26);points=[(x,-3.51,z),(x+.30,-3.52,z-.9),(x+.12,-3.53,z-1.7)]
  line('Basalt fissure',points,.025,black,root)
 box('Plaque',(0,-3.65,4.8),(9.4,.24,2.4),black,root,.06)
 text('Landlord plaque','THE CORNER\nHAS A LANDLORD',(0,-3.81,4.8),.80,gold,root)
 return (9,12,18)

def worksite():
 reset();wood=mat('Stained timber stakes',(.22,.11,.045));rope=mat('Heavy hemp rope',(.60,.44,.23));yellow=mat('Claim notice',(.92,.64,.08));black=mat('Black painted lettering',(.018,.015,.01));metal=mat('Nail heads',(.27,.28,.30),.7,.3)
 # Raw GLB coordinates become the original game's [-15,27] by [-20,40] rectangle after translation.
 corners=[(-14,-19),(26,-19),(26,39),(-14,39)] # Blender Y runs opposite game Z.
 # Keep a generous gateway along the north roadside edge (Blender Y=39 -> game Z=-19).
 segments=[((-14,-19),(26,-19)),((26,-19),(26,39)),((26,39),(10,39)),((4,39),(-14,39)),((-14,39),(-14,-19))]
 stakes=set()
 for a,b in segments:
  distance=math.dist(a,b);count=max(1,math.ceil(distance/5));pts=[(a[0]+(b[0]-a[0])*i/count,a[1]+(b[1]-a[1])*i/count)for i in range(count+1)]
  for x,y in pts:stakes.add((round(x,4),round(y,4)))
  for p,q in zip(pts,pts[1:]):
   for height in [.6,1.05]:line('Sagging claim rope',[(p[0]+(q[0]-p[0])*t,p[1]+(q[1]-p[1])*t,height-.18*math.sin(math.pi*t))for t in [i/12 for i in range(13)]],.045,rope)
 for x,y in sorted(stakes):
  rod('Worksite timber stake',(x,y,0),(x,y,1.4),.095,wood,vertices=8)
  for h in [.60,1.05]:ball('Rope knot',(x,y,h),(.14,.14,.09),rope)
 # Signs face the entrance/road, with a separate sideways notice for the main street.
 for x,y,angle in [(15,38.7,math.pi),(-13.7,9,-math.pi/2)]:
  root=empty('Claim notice',(x,y,0));root.rotation_euler.z=angle
  box('Notice board',(0,0,1.6),(5,.15,2.3),yellow,root,.06)
  for dx in [-1.9,1.9]:rod('Notice leg',(dx,0,0),(dx,0,2.7),.09,wood,root)
  text('Notice text','CORNER CLAIMED\nZEN GARDEN IN PROGRESS\nPLEASE PRETEND THIS IS FINISHED',(0,-.09,1.6),.31,black,root)
  for dx in [-2.30,2.30]:ball('Nail',(dx,-.10,2.5),(.035,.025,.035),metal,root)
 return (6,10,0)

def export(name,target):
 scene=bpy.context.scene;bpy.context.view_layer.update();exportObjects=[o for o in scene.objects if o.type=='MESH']
 # Apply stable transforms to exported geometry; emit raw data matching the existing module's coordinates.
 materials=[];matmap={};objects=[];geometries={};bounds=[]
 for obj in exportObjects:
  dg=bpy.context.evaluated_depsgraph_get();evaluated=obj.evaluated_get(dg);mesh=evaluated.to_mesh();mesh.calc_loop_triangles()
  groups={}
  for tri in mesh.loop_triangles:
   values=groups.setdefault(tri.material_index,{'position':[],'normal':[]})
   for li in tri.loops:
    v=mesh.vertices[mesh.loops[li].vertex_index];co=obj.matrix_world@v.co;normal=obj.matrix_world.to_3x3().inverted().transposed()@v.normal;normal.normalize()
    values['position']+= [round(co.x,5),round(co.z,5),round(-co.y,5)];values['normal'] += [round(normal.x,5),round(normal.z,5),round(-normal.y,5)]
  for mi,values in groups.items():
   material=obj.data.materials[mi] if obj.data.materials else None;key=material.name if material else 'default'
   if key not in matmap:
    matmap[key]=len(materials);p=material.node_tree.nodes.get('Principled BSDF');materials.append({'name':key,'color':list(material.diffuse_color),'roughness':p.inputs['Roughness'].default_value,'metalness':p.inputs['Metallic'].default_value,'emission':list(p.inputs['Emission Color'].default_value)[:3],'emissionStrength':p.inputs['Emission Strength'].default_value})
   geoName=str(len(geometries));geometries[geoName]=values;objects.append({'name':obj.name,'geometry':geoName,'material':matmap[key]})
  evaluated.to_mesh_clear()
  if '| collision' in obj.name:
   coords=[obj.matrix_world@Vector(c)for c in obj.bound_box];bounds.append([min(v.x for v in coords),min(v.z for v in coords),min(-v.y for v in coords),max(v.x for v in coords),max(v.z for v in coords),max(-v.y for v in coords)])
 data={'geometry':geometries,'materials':materials,'objects':objects,'colliders':bounds}
 packed=base64.b64encode(gzip.compress(json.dumps(data,separators=(',',':')).encode(),mtime=0)).decode()
 (OUT/(name+'.data.txt')).write_text(packed)
 # Preserve a directly editable Blender master and a self-contained GLB for either import workflow.
 bpy.ops.object.select_all(action='DESELECT')
 for o in exportObjects:o.select_set(True)
 bpy.ops.export_scene.gltf(filepath=str(OUT/(name+'.glb')),export_format='GLB',use_selection=True,export_apply=True)
 bpy.ops.wm.save_as_mainfile(filepath=str(OUT/(name+'.blend')))
 # Studio preview of the actual geometry.
 floor=mat('Preview ground',(.11,.12,.14));box('PREVIEW ONLY ground',(5,10,-.16),(105,110,.25),floor,bevel=0)
 bpy.ops.object.camera_add(location=(-70,85,47)if name=='zen-monolith'else(-53,75,54));camera=bpy.context.object;camera.rotation_euler=(Vector(target)-camera.location).to_track_quat('-Z','Y').to_euler();camera.data.type='ORTHO';camera.data.ortho_scale=61 if name=='zen-monolith'else 84;scene.camera=camera
 for loc,power,size in [((-30,45,65),18000,35),((35,-20,40),12000,30)]:
  bpy.ops.object.light_add(type='AREA',location=loc);l=bpy.context.object;l.data.energy=power;l.data.shape='DISK';l.data.size=size;l.rotation_euler=(Vector(target)-l.location).to_track_quat('-Z','Y').to_euler()
 scene.world.color=(.25,.25,.25);scene.render.engine='CYCLES';scene.cycles.samples=24;scene.render.resolution_x=1000;scene.render.resolution_y=1000;scene.render.resolution_percentage=100
 scene.render.filepath=str(PRE/(name+'.png'));bpy.ops.render.render(write_still=True)
 print('EXPORTED',name,len(objects),'objects',sum(len(g['position'])//9 for g in geometries.values()),'triangles',len(packed),'packed chars')

export('zen-monolith',monolith());export('zen-worksite',worksite())


