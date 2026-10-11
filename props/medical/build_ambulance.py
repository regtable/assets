import bpy, math, os
from mathutils import Vector
HERE=os.path.dirname(os.path.abspath(__file__))
OUT=HERE if os.path.basename(HERE)=='medical' else os.path.join(HERE,'props','medical')
os.makedirs(OUT,exist_ok=True)
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def material(name,color,metal=0,rough=.45,emission=0):
    m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True;p=m.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value=(*color,1);p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
    p.inputs['Emission Color'].default_value=(*color,1);p.inputs['Emission Strength'].default_value=emission;return m
white=material('Ambulance pearl white',(.88,.9,.88),.15)
red=material('EMS red',(.72,.025,.04),.1);green=material('Service green',(.025,.25,.14))
yellow=material('Reflective yellow',(.95,.72,.025));dark=material('Graphite trim',(.02,.028,.032),.2)
glass=material('Blue grey glazing',(.025,.12,.16),.5,.18);metal=material('Brushed steel',(.35,.42,.45),.8)
blue=material('Star of life blue',(.025,.15,.54));rubber=material('Rubber',(.013,.018,.02),0,.9)
blueL=material('BeaconBlueLeft',(.015,.12,.95),.2,.25,3);blueR=material('BeaconBlueRight',(.015,.18,.95),.2,.25,3)
redLens=material('BeaconRed',(.9,.02,.03),.1,.25,3);lamp=material('Headlamp',(.91,.94,1),.1,.3,2)
root=bpy.data.objects.new('EMS_Ambulance',None);bpy.context.collection.objects.link(root);root['license']='CC0-1.0';root['units']='metres';root['forward']='+Z in glTF'
def finish(o,name,m,parent=root):o.name=name;o.parent=parent;o.data.materials.append(m);return o
def box(name,loc,size,m,parent=root,bevel=.025):
    bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.scale=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    if bevel:
        mod=o.modifiers.new('Rounded manufactured edges','BEVEL');mod.width=bevel;mod.segments=2;bpy.ops.object.modifier_apply(modifier=mod.name)
    return finish(o,name,m,parent)
def text(name,word,loc,size,m,rot):
    bpy.ops.object.text_add(location=loc,rotation=rot);o=bpy.context.object;o.data.body=word;o.data.align_x='CENTER';o.data.align_y='CENTER';o.data.size=size;o.data.extrude=.001;bpy.ops.object.convert(target='MESH');return finish(bpy.context.object,name,m)
box('Rear medical body',(0,.8,1.79),(2.35,3.7,2.04),white,bevel=.13)
box('Cab',(0,-1.81,1.22),(2.22,1.78,1.32),white,bevel=.12)
box('Cab roof',(0,-1.66,2.15),(2.15,1.45,.66),white,bevel=.14)
box('Bonnet',(0,-2.29,1.14),(2.19,.94,.6),white,bevel=.1)
windshield=box('Windscreen',(0,-2.404,2.18),(1.99,.035,.5),glass,bevel=.02)
box('Front bumper',(0,-2.86,.67),(2.27,.16,.22),dark)
box('Rear bumper',(0,2.72,.58),(2.47,.14,.2),metal)
box('Front grille',(0,-2.798,1.02),(.96,.025,.35),dark)
for s in [-1,1]:
    box('Headlamp'+str(s),(s*.82,-2.8,1.01),(.48,.04,.29),lamp)
    box('Cab side window'+str(s),(s*1.115,-1.67,1.98),(.025,.99,.52),glass)
    box('Side mirror arm'+str(s),(s*1.21,-2.09,1.85),(.26,.045,.045),metal)
    box('Side mirror'+str(s),(s*1.35,-2.08,1.86),(.13,.19,.24),dark)
    box('Side rescue band'+str(s),(s*1.183,.8,1.57),(.018,3.61,.38),yellow,bevel=0)
    for i in range(9):box('Battenburg'+str(s),(s*1.196,-.82+i*.4,1.57),(.022,.2,.36),green,bevel=0)
    box('Body red stripe'+str(s),(s*1.185,.8,2.13),(.025,3.61,.08),red,bevel=0)
    for a in [0,math.pi/3,-math.pi/3]:
        o=box('Star of life'+str(s),(s*1.194,.32,2.42),(.025,.1,.54),blue,bevel=0);o.rotation_euler.x=a
    text('EMS identification'+str(s),'AMBULANCE',(s*1.201,1.62,2.42),.21,green,(math.pi/2,0,s*math.pi/2))
    for y in [-1.98,1.85]:
        pivot=bpy.data.objects.new('Wheel_'+('L' if s==-1 else 'R')+('F' if y<0 else 'B'),None);bpy.context.collection.objects.link(pivot);pivot.parent=root;pivot.location=(s*1.14,y,.46)
        bpy.ops.mesh.primitive_cylinder_add(vertices=24,radius=.46,depth=.23,rotation=(0,math.pi/2,0));o=bpy.context.object;finish(o,'Tyre',rubber,pivot)
        bpy.ops.mesh.primitive_cylinder_add(vertices=20,radius=.24,depth=.24,rotation=(0,math.pi/2,0));finish(bpy.context.object,'Wheel rim',metal,pivot)
    box('Lower protective sill'+str(s),(s*1.2,.9,.63),(.11,3.7,.19),dark)
    box('Rear door window'+str(s),(s*.54,2.667,2.1),(.77,.025,.54),glass)
    box('Rear brake lamp'+str(s),(s*1.01,2.69,1.1),(.15,.035,.59),redLens)
box('Lightbar mount',(0,-1.75,2.55),(1.83,.34,.09),dark)
box('Blue lightbar left',(-.52,-1.75,2.68),(.75,.32,.21),blueL)
box('Blue lightbar right',(.52,-1.75,2.68),(.75,.32,.21),blueR)
box('Rear door centre seam',(0,2.674,1.75),(.025,.024,1.8),dark,bevel=0)
text('Rear EMS','AMBULANCE',(0,2.7,2.53),.22,green,(math.pi/2,0,math.pi))
assemblies={}
for o in list(bpy.context.scene.objects):
    if o.type=='MESH':assemblies.setdefault((o.parent.name,o.data.materials[0].name),[]).append(o)
for (p,m),objects in assemblies.items():
    bpy.ops.object.select_all(action='DESELECT')
    for o in objects:o.select_set(True)
    bpy.context.view_layer.objects.active=objects[0]
    if len(objects)>1:bpy.ops.object.join()
    bpy.context.object.name=p+'_'+m
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'ems-ambulance.blend'))
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'ems-ambulance.glb'),export_format='GLB',export_yup=True,export_extras=True)
floor=material('Studio floor',(.06,.08,.11));box('Studio',(0,0,-.15),(200,200,.2),floor)
scene=bpy.context.scene;scene.world.use_nodes=True;scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.2,.25,.33,1);scene.world.node_tree.nodes['Background'].inputs[1].default_value=.5
for loc,power,size in [((5,-5,9),2300,7),((-6,0,6),1700,6),((0,7,7),1800,6)]:
    bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.data.energy=power;o.data.size=size;o.rotation_euler=(Vector((0,0,1))-o.location).to_track_quat('-Z','Y').to_euler()
bpy.ops.object.camera_add(location=(9,-11,7));cam=bpy.context.object;cam.rotation_euler=(Vector((0,0,1.2))-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=9;scene.camera=cam
scene.render.engine='CYCLES';scene.cycles.samples=24;scene.render.resolution_x=1100;scene.render.resolution_y=800;scene.render.resolution_percentage=100;scene.render.filepath=os.path.join(OUT,'ambulance-preview.png');bpy.ops.render.render(write_still=True)
