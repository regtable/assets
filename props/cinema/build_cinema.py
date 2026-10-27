import bpy, math, random
from mathutils import Vector
random.seed(7)
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
for c in list(bpy.data.collections):
    if c.name!='Collection': bpy.data.collections.remove(c)
scene=bpy.context.scene
def mat(name,color,metal=0,rough=.65,emission=0):
    m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
    if emission:p.inputs['Emission Color'].default_value=(*color,1);p.inputs['Emission Strength'].default_value=emission
    return m
brick=mat('Oxblood brick',(0.14,.042,.027));gold=mat('Warm brass',(0.61,.34,.055),.72,.25);dark=mat('Black lacquer',(.025,.023,.022),.2,.3);cream=mat('Sandstone',(.47,.31,.18));red=mat('Burgundy upholstery',(.26,.018,.025));glass=mat('Smoked window',(.055,.09,.13),.15,.25);carpet=mat('Deep velvet carpet',(.075,.018,.027));star=mat('Star lights',(1,.72,.31),.1,.3,1.6);screen=mat('Screen housing',(.01,.012,.02));wood=mat('Walnut',(.15,.062,.028));blue=mat('Planetarium midnight',(.015,.03,.08),.2,.28)
img=bpy.data.images.load(__import__('os').path.abspath('cinema-update/brick.jpg'));img.pack();tex=brick.node_tree.nodes.new('ShaderNodeTexImage');tex.image=img;brick.node_tree.links.new(tex.outputs['Color'],brick.node_tree.nodes.get('Principled BSDF').inputs['Base Color'])
cols={}
for n in ['CinemaExterior','CinemaInterior','PlanetariumInterior']:
 c=bpy.data.collections.new(n);scene.collection.children.link(c);e=bpy.data.objects.new(n,None);c.objects.link(e);cols[n]=(c,e)
current='CinemaExterior'
def move(obj,name,material):
    obj.name=name
    for c in list(obj.users_collection):c.objects.unlink(obj)
    cols[current][0].objects.link(obj);obj.parent=cols[current][1]
    if material:obj.data.materials.append(material)
    return obj
def box(name,x,y,z,w,h,d,m):
    bpy.ops.mesh.primitive_cube_add(size=1,location=(x,-z,y));o=bpy.context.object;o.scale=(w,d,h);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);return move(o,name,m)
def cylinder(name,x,y,z,r,h,m,vertices=16):
    bpy.ops.mesh.primitive_cylinder_add(vertices=vertices,radius=r,depth=h,location=(x,-z,y));return move(bpy.context.object,name,m)
def sphere(name,x,y,z,r,m):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=16,ring_count=8,radius=r,location=(x,-z,y));return move(bpy.context.object,name,m)
def beam(name,a,b,r,m):
    a=Vector((a[0],-a[2],a[1]));b=Vector((b[0],-b[2],b[1]));v=b-a
    bpy.ops.mesh.primitive_cylinder_add(vertices=8,radius=r,depth=v.length,location=(a+b)/2);o=bpy.context.object;o.rotation_euler=v.to_track_quat('Z','Y').to_euler();return move(o,name,m)
# All coordinates are world-relative: world origin is (12, 0, -56.5); facade is z=+16.5.
box('Foundation',0,.12,0,24,.24,33,dark)
box('West exterior wall',-11.85,3,0,.3,6,33,brick);box('East exterior wall',11.85,3,0,.3,6,33,brick);box('Rear exterior wall',0,3,-16.35,24,6,.3,brick)
# Front has a generous central opening; glass panels flank it.
for x,w in [(-8.4,7.2),(8.4,7.2)]:
 box('Front wall pier',x,3,16.35,w,6,.3,brick);box('Tall front window',x,3.05,16.53,w-.55,3.45,.04,glass)
 for j in range(1,5):box('Window mullion',x-w/2+j*w/5,3.05,16.57,.055,3.45,.05,gold)
for x in [-4.8,4.8]:box('Entrance pillar',x,3,16.35,.38,6,.42,gold)
box('Entrance header',0,4.85,16.35,9.2,2.3,.3,brick);box('Blank future marquee',0,5.27,16.62,16.5,1.12,.18,dark)
for y in [4.72,5.82]:box('Marquee brass border',0,y,16.73,16.6,.06,.08,gold)
for x in [-8.3,8.3]:box('Marquee brass end',x,5.27,16.73,.06,1.14,.08,gold)
for i in range(36):sphere('Marquee bulb',-8.05+i*.46,4.62,16.76,.055,star)
for y in [.34,3.95,5.95,6.15]:
 box('Facade horizontal gold trim',0,y,16.57,24,.09,.08,gold)
 box('West horizontal trim',-11.99,y,0,.08,.09,33,gold);box('East horizontal trim',11.99,y,0,.08,.09,33,gold)
# Roof remains a single visible exterior roof. Planetarium dome has a partial sphere.
box('Roof terrace',-1.75,6.02,0,20.5,.24,33,cream)
box('Roof terrace rear',10.25,6.02,-8,3.5,.24,17,cream)
box('Roof terrace front',10.25,6.02,15.9,3.5,.24,1.2,cream)
for x in [-11.6,11.6]:
 for z in range(-16,17,2):cylinder('Terrace post',x,6.65,z,.045,1.1,gold)
 beam('Terrace rail',(x,7.15,-16),(x,7.15,16),.045,gold)
for z in [-16.1,16.1]:
 for x in range(-10,11,2):cylinder('Terrace post',x,6.65,z,.045,1.1,gold)
 beam('Terrace rail',(-11.6,7.15,z),(11.6,7.15,z),.045,gold)
# Dome sits over centre-rear terrace and has a dark starry inner surface.
for i in range(48):
 a=2*math.pi*i/48;x=6.6*math.cos(a);z=-3+6.6*math.sin(a)
 if abs(x)<1.45 and z>2:continue
 o=box('Planetarium curved wall',x,7.5,z,.9,2.7,.18,dark);o.rotation_euler.z=-a-math.pi/2
for x in [-4.5,4.5]:box('Dome door columns',x,7.15,3.7,.2,2.3,.2,gold)
for i in range(24):
 a=2*math.pi*i/24;cylinder('Dome rib pillar',6.6*math.cos(a),7.5,-3+6.6*math.sin(a),.035,2.8,gold,8)
bpy.ops.mesh.primitive_uv_sphere_add(segments=48,ring_count=24,radius=1,location=(0,3,8.83));dome=bpy.context.object
import bmesh
bm=bmesh.new();bm.from_mesh(dome.data);bmesh.ops.delete(bm,geom=[v for v in bm.verts if v.co.z < -0.0001],context='VERTS');bm.to_mesh(dome.data);bm.free()
dome.scale=(6.7,6.7,4.0);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);move(dome,'Planetarium dome',blue)
for polygon in dome.data.polygons:polygon.use_smooth=True
for i in range(8):
 a=i*math.pi/4
 for j in range(12):
  t0=j*math.pi/24;t1=(j+1)*math.pi/24
  beam('Dome arch',(6.71*math.cos(t0)*math.cos(a),8.83+4*math.sin(t0),-3+6.71*math.cos(t0)*math.sin(a)),(6.71*math.cos(t1)*math.cos(a),8.83+4*math.sin(t1),-3+6.71*math.cos(t1)*math.sin(a)),.035,gold)
for x,z in [(-10,14),(10,14),(-10,-14),(10,-14)]:cylinder('Rooftop lamp post',x,7.2,z,.075,2.4,gold);sphere('Lamp globe',x,8.45,z,.25,star)
current='CinemaInterior'
box('Lobby floor',0,.025,12,23.3,.05,8.4,cream);box('Auditorium carpet',-1,.03,-4.4,21.2,.06,24,carpet)
# Separating wall has two open doorways, x=-6 and +5.
for x,w in [(-10,4),(-.5,7),(8.2,2.4)]:box('Lobby partition',x,2.8,8.5,w,5.6,.22,brick)
for x in [-6,5]:
 for dx in [-1.15,1.15]:box('Auditorium door frame',x+dx,1.45,8.5,.1,2.9,.28,gold)
 box('Auditorium lintel',x,3,8.5,2.4,.14,.28,gold)
box('Auditorium divider',-.5,2.9,-4, .22,5.8,24.5,brick)
for x in [-6,5]:
 box('Screen border',x,3.1,-16.08,9.2,4.9,.12,gold);box('Screen back',x,3.1,-16.0,8.95,4.65,.12,screen)
 # Rearward-facing screen plane is added at runtime at z=-15.89.
 for row in range(6):
  for seat in range(5):
   sx=x-3.6+seat*1.8;sz=-12+row*3.1
   box('Seat base',sx,.48,sz,1.15,.25,.95,red);box('Seat back',sx,1.05,sz+.39,1.18,1.15,.2,red)
   for dx in [-.63,.63]:box('Seat arm',sx+dx,.65,sz,.1,.3,.9,gold)
box('Reception counter',-5, .65,12.2,4,1.3,1.0,wood);box('Counter gold top',-5,1.33,12.2,4.1,.1,1.1,gold)
for x in [-9,0,9]:cylinder('Lobby pendant rod',x,4.75,13,.035,1.8,gold);sphere('Lobby pendant globe',x,3.8,13,.28,star)
# Enclosed staircase rises from front to rear along east interior edge, 34 shallow steps.
for i in range(34):
 z=14.9-i*.36;y=(i+1)*6/34
 box('Rooftop stair tread',10.55,y-.065,z,2.15,.13,.37,cream);box('Stair nosing',10.55,y,z+.17,2.15,.035,.03,gold)
for i in range(0,34,4):cylinder('Stair baluster',9.55,(i+1)*6/34+.5,14.9-i*.36,.035,1,gold)
beam('Stair handrail',(9.55,1.18,14.9),(9.55,7,3.02),.045,gold)
current='PlanetariumInterior'
box('Planetarium carpet',0,6.2,-3,12.3,.08,12.3,blue)
cylinder('Planetarium central projector',0,6.8,-3,.36,1.2,gold);sphere('Star projector',0,7.5,-3,.48,dark)
for i in range(16):
 a=i*2*math.pi/16;x=4.8*math.cos(a);z=-3+4.8*math.sin(a)
 o=box('Observatory seat',x,6.68,z,1,.32,.75,red);o.rotation_euler.z=-a
 sphere('Planetarium star',4.8*math.cos(a),9.2+(i%3)*.5,-3+4.8*math.sin(a),.045,star)
# Grouping geometry by collection/material drastically reduces draw calls while retaining culling groups.
for collection,parent in cols.values():
 groups={}
 for obj in list(collection.objects):
  if obj.type=='MESH':groups.setdefault(obj.data.materials[0].name,[]).append(obj)
 for name,objects in groups.items():
  bpy.ops.object.select_all(action='DESELECT')
  for o in objects:o.select_set(True)
  bpy.context.view_layer.objects.active=objects[0];bpy.ops.object.join();objects[0].name=collection.name+'_'+name;objects[0].parent=parent
bpy.ops.wm.save_as_mainfile(filepath=__import__('os').path.abspath('cinema-update/cinema-planetarium.blend'))
bpy.ops.export_scene.gltf(filepath=__import__('os').path.abspath('cinema-update/cinema-planetarium.glb'),export_format='GLB',export_yup=True,export_apply=True)
