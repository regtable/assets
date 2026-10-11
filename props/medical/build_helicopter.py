import bpy, math, os
from mathutils import Vector

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = HERE if os.path.basename(HERE) == 'medical' else os.path.join(HERE, 'props', 'medical')
os.makedirs(OUT, exist_ok=True)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

def mat(name, color, metallic=0, rough=.4, emission=0):
    m=bpy.data.materials.new(name); m.diffuse_color=(*color,1); m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value=(*color,1)
    p.inputs['Metallic'].default_value=metallic; p.inputs['Roughness'].default_value=rough
    p.inputs['Emission Color'].default_value=(*color,1); p.inputs['Emission Strength'].default_value=emission
    return m
white=mat('Pearl white air ambulance',(.86,.9,.92),.15)
red=mat('Rescue vermilion',(.72,.025,.045),.12)
navy=mat('Graphite trim',(.018,.028,.045),.35)
glass=mat('Blue smoked cockpit glazing',(.025,.12,.19),.55,.18)
steel=mat('Brushed skid aluminium',(.27,.33,.39),.8)
yellow=mat('High visibility yellow',(.95,.68,.025))
blue=mat('Medical blue',(.025,.22,.65))
lampR=mat('Red beacon',(.95,.03,.025),emission=3)
lampG=mat('Green navigation lamp',(.04,.85,.2),emission=3)
lampW=mat('Landing lamp',(.9,.95,1),emission=3)

root=bpy.data.objects.new('EMS_Helicopter',None); bpy.context.collection.objects.link(root)
root['license']='CC0-1.0'; root['forward']='+Z in glTF'; root['units']='metres'

def finish(o,name,m,parent=root):
    o.name=name; o.data.materials.append(m); o.parent=parent
    return o
def ell(name,loc,scale,m,parent=root):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=24,ring_count=12,location=loc)
    o=bpy.context.object; o.scale=scale
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    for p in o.data.polygons:p.use_smooth=True
    return finish(o,name,m,parent)
def box(name,loc,scale,m,parent=root,bevel=0):
    bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.scale=scale
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    if bevel:
        mod=o.modifiers.new('Soft manufactured edges','BEVEL');mod.width=bevel;mod.segments=2
        bpy.ops.object.modifier_apply(modifier=mod.name)
        o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
    return finish(o,name,m,parent)
def rod(name,a,b,r,m,parent=root,r2=None):
    d=Vector(b)-Vector(a)
    bpy.ops.mesh.primitive_cone_add(vertices=16,radius1=r,radius2=r if r2 is None else r2,depth=d.length,location=(Vector(a)+Vector(b))/2)
    o=bpy.context.object;o.rotation_euler=d.to_track_quat('Z','Y').to_euler()
    for p in o.data.polygons:p.use_smooth=True
    return finish(o,name,m,parent)
def panel(name,verts,m):
    mesh=bpy.data.meshes.new(name);mesh.from_pydata(verts,[],[list(range(len(verts)))]);mesh.update()
    o=bpy.data.objects.new(name,mesh);bpy.context.collection.objects.link(o);finish(o,name,m)
    solid=o.modifiers.new('Panel thickness','SOLIDIFY');solid.thickness=.012
    return o
def text(name,word,loc,size,m,rot):
    bpy.ops.object.text_add(location=loc,rotation=rot);o=bpy.context.object;o.data.body=word
    o.data.align_x='CENTER';o.data.align_y='CENTER';o.data.size=size;o.data.extrude=.001
    bpy.ops.object.convert(target='MESH');return finish(bpy.context.object,name,m)

# Original compact twin-engine rescue aircraft; no manufacturer logos or external assets.
ell('Cabin', (0,0,1.7),(1.18,2.25,1.14),white)
ell('Lower rescue fuselage',(0,-.18,1.25),(1.14,2.12,.63),red)
ell('Cockpit canopy',(0,-1.45,1.95),(1.05,1.23,.84),glass)
ell('Nose lower shell',(0,-1.85,1.35),(.92,.96,.47),white)
rod('Windscreen central frame',(0,-2.53,1.65),(0,-1.98,2.65),.035,white)
for s in [-1,1]:
    # Cabin-side glazing, doors and contrasting livery.
    panel('Sliding cabin window'+str(s),[(s*1.155,-.5,1.88),(s*1.155,.78,1.88),(s*1.065,.84,2.37),(s*1.065,-.52,2.37)],glass)
    rod('Door front seam'+str(s),(s*1.16,-.63,1.12),(s*1.08,-.63,2.4),.012,navy)
    rod('Door rear seam'+str(s),(s*1.15,1.03,1.14),(s*1.03,1.03,2.35),.012,navy)
    box('Door handle'+str(s),(s*1.19,.65,1.75),(.025,.22,.04),steel,bevel=.01)
    box('Rescue stripe'+str(s),(s*1.13,.12,1.57),(.025,2,.12),yellow)
    # Star of life made from three blue bars on a white rescue badge.
    box('Medical badge'+str(s),(s*1.16,.15,1.23),(.025,.65,.52),white,bevel=.04)
    for a in [0,math.pi/3,-math.pi/3]:
        o=box('Star of life'+str(s),(s*1.18,.15,1.23),(.028,.12,.44),blue);o.rotation_euler.x=a
    rod('Star staff'+str(s),(s*1.2,.15,1.08),(s*1.2,.15,1.38),.018,white)
    text('EMS marking'+str(s),'AIR MED', (s*1.19,.13,1.79),.18,navy,(math.pi/2,0,s*math.pi/2))
    ell('Engine cowling'+str(s),(s*.46,.65,2.65),(.43,1.16,.4),white)
    rod('Exhaust'+str(s),(s*.47,1.28,2.67),(s*.47,1.95,2.59),.18,steel)
    rod('Intake'+str(s),(s*.47,-.5,2.66),(s*.47,-.56,2.66),.22,navy)
    # Skids touch z=0; raised nose and braced landing gear.
    rod('Skid rail'+str(s),(s*1.3,-1.92,.095),(s*1.3,1.94,.095),.095,steel)
    rod('Skid curled nose'+str(s),(s*1.3,-1.92,.095),(s*1.3,-2.25,.32),.095,steel)
    for y in [-1.15,1.2]:rod('Landing strut'+str(s),(s*.77,y,.91),(s*1.3,y,.12),.065,steel)
    ell('Navigation lamp'+str(s),(s*1.25,.92,1.7),(.06,.07,.06),lampR if s==-1 else lampG)
rod('Tail boom',(0,1.65,1.95),(0,6.25,2.5),.43,white,r2=.14)
rod('Tail high visibility band',(0,4.58,2.28),(0,5.05,2.34),.245,red,r2=.22)
panel('Tail fin',[(0,5.4,2.25),(0,6.4,2.35),(0,6.05,4.1),(0,5.65,4.05)],red)
box('Horizontal stabilizer',(0,4.76,2.35),(2.5,.66,.08),white,bevel=.025)
for s in [-1,1]:box('Stabilizer tip'+str(s),(s*1.19,4.76,2.4),(.13,.67,.22),red,bevel=.02)
rod('Main rotor mast',(0,0,2.72),(0,0,3.5),.1,steel)
ell('Mast fairing',(0,0,2.85),(.35,.42,.23),navy)
main=bpy.data.objects.new('MainRotor',None);bpy.context.collection.objects.link(main);main.parent=root;main.location=(0,0,3.5)
ell('Rotor hub',(0,0,0),(.25,.25,.11),steel,main)
for a in range(4):
    angle=a*math.pi/2
    blade=box('Main blade '+str(a),(0,0,0),(.28,5.1,.055),navy,main,bevel=.025)
    blade.location=(math.sin(angle)*2.8,math.cos(angle)*2.8,0);blade.rotation_euler.z=-angle
    tip=box('Rotor yellow tip '+str(a),(0,0,0),(.28,.35,.057),yellow,main)
    tip.location=(math.sin(angle)*5.18,math.cos(angle)*5.18,0);tip.rotation_euler.z=-angle
tail=bpy.data.objects.new('TailRotor',None);bpy.context.collection.objects.link(tail);tail.parent=root;tail.location=(.23,6.1,2.6)
rod('Tail rotor axle',(-.1,0,0),(.1,0,0),.085,steel,tail)
for a in range(4):
    angle=a*math.pi/2
    blade=box('Tail blade '+str(a),(0,0,0),(.05,.12,.82),navy,tail,bevel=.015)
    blade.location=(0,math.sin(angle)*.46,math.cos(angle)*.46);blade.rotation_euler.x=-angle
ell('Beacon',(0,.9,3.01),(.08,.08,.08),lampR)
ell('Landing spotlight',(0,-2.46,1.04),(.18,.08,.12),lampW)
rod('Roof aerial',(0,1.5,2.83),(0,1.65,3.32),.014,navy)

# Join geometry by material within each rigid assembly to keep draw calls low.
assemblies={}
for o in list(bpy.context.scene.objects):
    if o.type=='MESH': assemblies.setdefault((o.parent.name,o.data.materials[0].name),[]).append(o)
for (parent_name,material_name),objects in assemblies.items():
    bpy.ops.object.select_all(action='DESELECT')
    for o in objects:o.select_set(True)
    bpy.context.view_layer.objects.active=objects[0]
    if len(objects)>1:bpy.ops.object.join()
    bpy.context.object.name=parent_name+'_'+material_name

# Export real rotor animation clips as well as named runtime pivots.
bpy.context.scene.render.fps=30
for o,axis,name in [(main,2,'MainRotorSpin'),(tail,0,'TailRotorSpin')]:
    o.rotation_mode='XYZ'
    for f,angle in [(1,0),(31,math.tau)]:
        o.rotation_euler[axis]=angle;o.keyframe_insert(data_path='rotation_euler',index=axis,frame=f)
    action=o.animation_data.action;action.name=name
    curves=[fc for layer in action.layers for strip in layer.strips for bag in strip.channelbags for fc in bag.fcurves]
    for fc in curves:
        for k in fc.keyframe_points:k.interpolation='LINEAR'
    track=o.animation_data.nla_tracks.new();track.name=name;track.strips.new(name,1,action)
    o.animation_data.action=None
bpy.context.scene.frame_set(1)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'ems-helicopter.blend'))
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'ems-helicopter.glb'),export_format='GLB',export_yup=True,export_extras=True,export_animations=True,export_animation_mode='NLA_TRACKS')

# Studio render for visual verification; ground is not exported.
box('Studio floor',(0,0,-.2),(200,200,.2),mat('Studio floor',(.07,.09,.12)))
world=bpy.context.scene.world;world.use_nodes=True;world.node_tree.nodes['Background'].inputs[0].default_value=(.18,.21,.28,1)
world.node_tree.nodes['Background'].inputs[1].default_value=.6
for loc,power,size in [((4,-4,12),2300,8),((-6,0,7),1600,7),((0,8,10),2500,6)]:
    bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.data.energy=power;o.data.shape='DISK';o.data.size=size
    o.rotation_euler=(Vector((0,1,1.5))-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(13,-16,10));cam=bpy.context.object
cam.rotation_euler=(Vector((0,1.2,1.5))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=15
scene=bpy.context.scene;scene.camera=cam;scene.render.engine='CYCLES';scene.cycles.samples=32
scene.render.resolution_x=1200;scene.render.resolution_y=900;scene.render.resolution_percentage=100
scene.render.filepath=os.path.join(OUT,'preview.png');bpy.ops.render.render(write_still=True)
