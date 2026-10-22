import bpy,math,os
from mathutils import Vector
OUT=os.path.dirname(os.path.abspath(__file__))
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def mat(n,c,metal=0,rough=.4,emit=0,alpha=1):
 m=bpy.data.materials.new(n);m.diffuse_color=(*c,alpha);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*c,alpha);p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough;p.inputs['Alpha'].default_value=alpha;p.inputs['Emission Color'].default_value=(*c,1);p.inputs['Emission Strength'].default_value=emit;return m
black=mat('Black enamel',(.012,.016,.019),.45,.28);gold=mat('Antique brass',(.57,.32,.065),.85,.3);rubber=mat('Tyre rubber',(.009,.011,.013),0,.85);leather=mat('Black leather',(.025,.019,.014),0,.65);chrome=mat('Polished steel',(.45,.48,.5),.9,.24);blue=mat('BlueBeacon',(.01,.08,.8),.1,.22,2);red=mat('TailLamp',(.6,.008,.004),.1,.24,1);glass=mat('Windscreen',(.12,.21,.25),.05,.18,0,.24);lamp=mat('Headlamp',(.92,.79,.45),.2,.22,1)
def empty(n,p=(0,0,0),parent=None):
 o=bpy.data.objects.new(n,None);bpy.context.collection.objects.link(o);o.location=p;o.parent=parent;return o
root=empty('PoliceMotorbike');root['license']='CC0-1.0';root['forward']='glTF +Z';root['units']='metres'
def finish(o,n,m,parent=root):o.name=n;o.data.materials.append(m);o.parent=parent;return o
def box(n,p,s,m,parent=root,bev=.03):
 bpy.ops.mesh.primitive_cube_add(size=1,location=p);o=bpy.context.object;o.scale=s;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
 if bev:b=o.modifiers.new('Rounded edges','BEVEL');b.width=bev;b.segments=2;bpy.ops.object.modifier_apply(modifier=b.name)
 return finish(o,n,m,parent)
def cyl(n,p,r,d,m,rot=(0,0,0),parent=root,v=20):
 bpy.ops.mesh.primitive_cylinder_add(vertices=v,radius=r,depth=d,location=p,rotation=rot);o=finish(bpy.context.object,n,m,parent)
 for f in o.data.polygons:f.use_smooth=len(f.vertices)==4
 return o
def tube(n,a,b,r,m,parent=root):
 a,b=Vector(a),Vector(b);o=cyl(n,(a+b)/2,r,(b-a).length,m,parent=parent);o.rotation_euler=(b-a).to_track_quat('Z','Y').to_euler();return o
def torus(n,p,r,thick,m,rot=(0,0,0),parent=root):
 bpy.ops.mesh.primitive_torus_add(major_radius=r,minor_radius=thick,major_segments=40,minor_segments=8,location=p,rotation=rot);o=finish(bpy.context.object,n,m,parent)
 for f in o.data.polygons:f.use_smooth=True
 return o
steer=empty('Steering',(0,-.82,.38),root)
for n,y,par in [('RearWheel',.78,root),('FrontWheel',0,steer)]:
 pivot=empty(n,(0,y,.38 if par==root else 0),par)
 torus(n+'_Tyre',(0,0,0),.30,.075,rubber,(0,math.pi/2,0),pivot)
 for x in [-.055,.055]:
  torus(n+'_Rim',(x,0,0),.265,.018,gold,(0,math.pi/2,0),pivot)
  for i in range(20):
   a=i*math.tau/20;tube('Spoke',(x,0,0),(x,.26*math.cos(a),.26*math.sin(a)),.005,gold,pivot)
 cyl(n+'_Hub',(0,0,0),.075,.22,gold,(0,math.pi/2,0),pivot)
 cyl(n+'_BrakeDisc',(.09,0,0),.16,.012,chrome,(0,math.pi/2,0),pivot)
for x in [-.15,.15]:
 tube('Main frame',(x,.7,.4),(x,-.6,.95),.026,gold)
 tube('Lower frame',(x,.7,.4),(x,-.55,.32),.024,gold)
 tube('Frame upright',(x,-.55,.32),(x,-.6,.95),.025,gold)
 tube('Front fork',(x,0,0),(x,.16,.65),.028,gold,steer)
 tube('Rear shock',(x,.78,.4),(x,.45,.8),.028,chrome)
 for z in [.5,.55,.6,.65,.7]:torus('Shock spring',(x,.64,z),.035,.008,black)
box('Engine',(0,.0,.44),(.45,.48,.36),black)
for z in [.32,.365,.41,.455,.5,.545]:box('Engine cooling fin',(0,0,z),(.49,.5,.018),gold,bev=.005)
cyl('Engine circular cover',(.265,0,.44),.14,.04,gold,(0,math.pi/2,0))
for x in [-.29,.29]:
 tube('Exhaust',(x,-.2,.32),(x,.98,.24),.032,gold)
 cyl('Exhaust silencer',(x,.7,.24),.055,.6,black,(math.pi/2,0,0))
box('Fuel tank',(0,-.34,.91),(.43,.64,.34),black,bev=.13)
cyl('Fuel cap',(0,-.28,1.09),.045,.018,gold)
box('Rider saddle',(0,.24,.88),(.43,.58,.13),leather,bev=.07)
box('Pillion saddle',(0,.68,.89),(.38,.3,.1),leather,bev=.05)
box('Saddle backrest',(0,.85,1.05),(.38,.08,.28),leather)
for x in [-.42,.42]:
 box('Pannier brass casing',(x,.64,.64),(.29,.65,.46),gold,bev=.04)
 box('Pannier enamel',(x*1.02,.64,.65),(.3,.61,.4),black,bev=.035)
 box('Pannier lid',(x,.64,.89),(.32,.68,.065),black)
 box('Pannier clasp',(x*1.38,.52,.86),(.016,.055,.05),gold)
 for y in [.39,.87]:cyl('Red rear lamps',(x,y,.64),.035,.015,red,(math.pi/2,0,0))
 box('Footboard',(x,-.05,.27),(.24,.48,.035),black)
 for j in range(5):box('Footboard brass groove',(x,-.22+j*.08,.292),(.23,.012,.006),gold,bev=0)
# Curved guards built as swept narrow tubes with a crown strip.
for y in [-.82,.78]:
 for x in [-.09,.09]:
  for i in range(20):
   a=.12+(math.pi-.24)*i/20;b=.12+(math.pi-.24)*(i+1)/20
   tube('Mudguard rim',(x,y+.405*math.cos(a),.38+.405*math.sin(a)),(x,y+.405*math.cos(b),.38+.405*math.sin(b)),.023,gold)
 box('Mudguard crown',(0,y,.79),(.2,.3,.045),black)
box('Rear luggage rack',(0,1.02,.84),(.4,.3,.035),gold)
for x in [-.14,-.07,0,.07,.14]:tube('Rack slat',(x,.91,.86),(x,1.15,.86),.009,black)
tube('Beacon mast',(-.43,.84,.9),(-.43,.84,1.67),.013,gold)
cyl('Beacon blue lens',(-.43,.84,1.7),.065,.14,blue)
for z in [1.625,1.775]:cyl('Beacon cap',(-.43,.84,z),.071,.012,gold)
for x in [-.36,.36]:
 tube('Handlebar',(0,.14,.66),(x,.2,.72),.019,gold,steer)
 tube('Handgrip',(x,.2,.72),(x*1.22,.2,.72),.027,black,steer)
 tube('Mirror stalk',(x,.2,.72),(x,.14,.99),.009,gold,steer)
 cyl('Mirror',(x,.14,1.02),.075,.02,gold,(math.pi/2,0,0),steer)
box('Windscreen',(0,.05,.99),(.6,.025,.4),glass,steer,bev=.025)
for x in [-.31,.31]:tube('Screen frame',(x,.05,.78),(x,.05,1.2),.012,gold,steer)
for z in [.78,1.2]:tube('Screen frame',(-.31,.05,z),(.31,.05,z),.012,gold,steer)
cyl('Headlamp brass housing',(0,-.1,.55),.14,.15,gold,(math.pi/2,0,0),steer)
cyl('Headlamp lens',(0,-.183,.55),.118,.015,lamp,(math.pi/2,0,0),steer)
for x in [-.2,.2]:cyl('Indicator',(x,-.12,.5),.035,.035,gold,(math.pi/2,0,0),steer)
cyl('Speedometer',(0,.24,.72),.065,.035,black,parent=steer)
torus('Speedometer rim',(0,.24,.745),.063,.006,gold,parent=steer)
stand=empty('Kickstand',(0,.1,.35),root);tube('Stand leg',(-.1,0,0),(-.38,.05,-.34),.016,gold,stand);box('Stand foot',(-.38,.05,-.34),(.12,.08,.025),gold,stand)
# Original embossed shield emblems, not a real police force logo.
for x,y,z in [(-.585,.64,.66),(.585,.64,.66),(-.222,-.34,.95),(.222,-.34,.95)]:
 cyl('Police star',(x,y,z),.085,.012,gold,(0,math.pi/2,0),v=10)
 cyl('Badge inset',(x*1.002,y,z),.046,.014,black,(0,math.pi/2,0))
box('Rear number plate',(0,1.14,.43),(.24,.025,.12),gold)
bpy.ops.object.select_all(action='DESELECT')
for o in bpy.context.scene.objects:o.select_set(True)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'police-motorbike.blend'),compress=True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'police-motorbike.glb'),export_format='GLB',use_selection=True,export_yup=True)
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.samples=24
scene.world.color=(.2,.2,.2)
for loc,power,size in [((4,-4,6),950,5),((-3,1,4),700,4),((0,4,5),800,3)]:
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.data.energy=power;o.data.shape='DISK';o.data.size=size;o.rotation_euler=(Vector((0,0,.7))-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(3.4,4.1,2.7));cam=bpy.context.object;cam.rotation_euler=(Vector((0,0,.85))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=3.5;scene.camera=cam
scene.render.resolution_x=1200;scene.render.resolution_y=1000;scene.render.resolution_percentage=100;scene.render.filepath=os.path.join(OUT,'police-motorbike.png');bpy.ops.render.render(write_still=True)
