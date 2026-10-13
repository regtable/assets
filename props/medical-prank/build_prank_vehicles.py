"""CC0 original silly drop-in models. Preserve the live loaders' rotor/wheel nodes."""
import bpy, math, os
from mathutils import Vector
HERE=os.path.dirname(os.path.abspath(__file__))
OUT=os.path.join(HERE,'props','medical-prank');os.makedirs(OUT,exist_ok=True)
def material(n,c,metal=0,emit=0):
    m=bpy.data.materials.new(n);m.diffuse_color=(*c,1);m.use_nodes=True
    p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*c,1);p.inputs['Roughness'].default_value=.33;p.inputs['Metallic'].default_value=metal
    p.inputs['Emission Color'].default_value=(*c,1);p.inputs['Emission Strength'].default_value=emit;return m
def reset(name):
    bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
    global root,yellow,orange,pink,white,black,red,metal,blue,cheese,brown
    root=bpy.data.objects.new(name,None);bpy.context.collection.objects.link(root);root['license']='CC0-1.0';root['forward']='+Z glTF';root['units']='metres';root['temporary_prank']=True
    yellow=material('Rubber duck / banana yellow',(1,.63,.015));orange=material('Beak orange',(1,.16,.015))
    pink=material('Ridiculous hot pink',(.95,.008,.23));white=material('Eyeball white',(.95,.96,.93));black=material('Pupils and tyre rubber',(.008,.012,.009))
    red=material('Red cross and pepperoni',(.7,.015,.02));metal=material('Chrome',(.52,.63,.65),.8)
    blue=material('BeaconBlueLeft',(.025,.15,1),.2,3);cheese=material('Pizza cheese',(1,.7,.18));brown=material('Pizza crust / banana stem',(.35,.12,.025))
def finish(o,n,m,parent=None):o.name=n;o.parent=parent or root;o.data.materials.append(m);return o
def sphere(n,p,s,m,parent=None):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=24,ring_count=12,location=p);o=bpy.context.object;o.scale=s
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    for f in o.data.polygons:f.use_smooth=True
    return finish(o,n,m,parent)
def box(n,p,s,m,parent=None,bevel=.04):
    bpy.ops.mesh.primitive_cube_add(size=1,location=p);o=bpy.context.object;o.scale=s;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    if bevel:
        b=o.modifiers.new('Rounded','BEVEL');b.width=bevel;b.segments=2;bpy.ops.object.modifier_apply(modifier=b.name)
    return finish(o,n,m,parent)
def cylinder(n,p,r,d,m,rot=(0,0,0),parent=None):
    bpy.ops.mesh.primitive_cylinder_add(vertices=24,radius=r,depth=d,location=p,rotation=rot);o=finish(bpy.context.object,n,m,parent)
    for f in o.data.polygons:f.use_smooth=len(f.vertices)==4
    return o
def rod(n,a,b,r,m,parent=None):
    a,b=Vector(a),Vector(b);o=cylinder(n,(a+b)/2,r,(b-a).length,m,parent=parent);o.rotation_euler=(b-a).to_track_quat('Z','Y').to_euler();return o
def pivot(n,p):
    o=bpy.data.objects.new(n,None);bpy.context.collection.objects.link(o);o.parent=root;o.location=p;return o
def batch_export(name):
    groups={}
    for o in list(bpy.context.scene.objects):
        if o.type=='MESH':groups.setdefault((o.parent.name,o.data.materials[0].name),[]).append(o)
    # Save editable parts before batching.
    bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,name+'.blend'))
    for (p,m),obs in groups.items():
        bpy.ops.object.select_all(action='DESELECT')
        for o in obs:o.select_set(True)
        bpy.context.view_layer.objects.active=obs[0]
        if len(obs)>1:bpy.ops.object.join()
        bpy.context.object.name=p+'__'+m
    bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,name+'.glb'),export_format='GLB',export_yup=True,export_extras=True)
def preview(name,scale,look):
    scene=bpy.context.scene;scene.world.use_nodes=True;bg=scene.world.node_tree.nodes['Background'];bg.inputs[0].default_value=(.14,.18,.23,1);bg.inputs[1].default_value=.55
    for p,energy,size in [((6,-8,12),2400,8),((-7,-2,8),1900,7),((0,7,10),2600,6)]:
        bpy.ops.object.light_add(type='AREA',location=p);o=bpy.context.object;o.data.energy=energy;o.data.size=size;o.rotation_euler=(Vector(look)-o.location).to_track_quat('-Z','Y').to_euler()
    floor=material('Preview floor',(.055,.08,.12));box('Preview floor',(0,0,-.13),(200,200,.2),floor)
    bpy.ops.object.camera_add(location=(13,-17,12));cam=bpy.context.object;cam.rotation_euler=(Vector(look)-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.ortho_scale=scale;scene.camera=cam
    scene.render.engine='CYCLES';scene.cycles.samples=20;scene.render.resolution_x=1200;scene.render.resolution_y=900;scene.render.resolution_percentage=100;scene.render.filepath=os.path.join(OUT,name+'.png');bpy.ops.render.render(write_still=True)

reset('Emergency_Quack_Response')
sphere('Giant duck body',(0,.35,2.1),(2.25,3.05,1.85),yellow)
sphere('Duck neck',(0,-1.6,3.45),(1.45,1.35,1.6),yellow)
sphere('Huge duck head',(0,-2.05,4.8),(1.9,1.65,1.65),yellow)
sphere('Duck beak',(0,-3.65,4.35),(1.45,1.18,.36),orange)
box('Grinning beak seam',(0,-4.13,4.32),(2.2,.5,.035),black,bevel=.03)
for s in [-1,1]:
    sphere('Wing',(s*1.95,.55,2.4),(.48,1.65,.85),yellow)
    sphere('Huge googly eye',(s*.98,-3.2,5.2),(.71,.43,.8),white)
    sphere('Crossed pupil',(s*.66,-3.59,5.14),(.25,.09,.35),black)
    sphere('Eye sparkle',(s*.62,-3.68,5.3),(.07,.025,.1),white)
    sphere('Duck foot',(s*1.4,-.5,.24),(.75,1.55,.23),orange)
    rod('Pink rescue skid',(s*1.5,-2,.16),(s*1.5,2.35,.16),.12,pink)
sphere('Duck tail',(0,2.95,2.85),(.85,1.1,.7),yellow)
box('Nurses hat',(0,-2.05,6.2),(2,.85,.5),white,bevel=.1)
box('Hat cross vertical',(0,-2.485,6.2),(.16,.015,.36),red,bevel=.01)
box('Hat cross horizontal',(0,-2.495,6.2),(.5,.015,.13),red,bevel=.01)
rod('Rotor mast',(0,-.15,3.6),(0,-.15,7.2),.12,metal)
main=pivot('MainRotor',(0,-.15,7.2))
for i in range(4):
    a=i*math.pi/2;cx=2.6*math.cos(a);cy=2.6*math.sin(a)
    o=box('Pizza propeller arm',(cx/2,cy/2,.0),(2.6,.25,.12),pink,parent=main);o.rotation_euler.z=a
    cylinder('Pizza rotor crust',(cx,cy,0),1.05,.12,brown,parent=main)
    cylinder('Pizza rotor cheese',(cx,cy,.075),.95,.04,cheese,parent=main)
    for j in range(7):
        b=j*2.4;cylinder('Pepperoni',(cx+.6*math.cos(b),cy+.6*math.sin(b),.11),.13,.03,red,parent=main)
cylinder('Rotor hub',(0,0,.18),.3,.3,metal,parent=main)
tail=pivot('TailRotor',(0,3.3,3.6))
for a in [0,math.pi/2]:
    o=box('Lollipop tail propeller',(0,0,0),(.16,1.8,.2),pink,parent=tail);o.rotation_euler.x=a
cylinder('Lollipop centre',(0,0,0),.25,.15,white,(0,math.pi/2,0),parent=tail)
batch_export('ems-helicopter');preview('duck-helicopter-preview',13,(0,-.1,3.5))

reset('Emergency_Banana_Response')
# Swept curved banana body. Nose is Blender -Y, matching live model +Z glTF.
vs=[];faces=[];N=40;R=20
for i in range(N+1):
    t=-1+2*i/N;y=t*3.15;z=1.05+1.25*t*t;r=.75*(max(.01,1-t*t)**.35)+.09
    for j in range(R):
        a=j*math.tau/R;vs.append((r*math.cos(a),y,z+r*math.sin(a)))
for i in range(N):
    for j in range(R):faces.append((i*R+j,i*R+(j+1)%R,(i+1)*R+(j+1)%R,(i+1)*R+j))
faces.extend([tuple(reversed(range(R))),tuple(N*R+j for j in range(R))])
me=bpy.data.meshes.new('Banana skin');me.from_pydata(vs,[],faces);me.update();o=bpy.data.objects.new('Curved banana',me);bpy.context.collection.objects.link(o);finish(o,o.name,yellow)
for f in me.polygons:f.use_smooth=True
rod('Banana stem',(0,3.1,2.3),(0,3.55,2.65),.14,brown)
rod('Banana nose tip',(0,-3.12,2.3),(0,-3.4,2.5),.12,brown)
for s in [-1,1]:
    sphere('Banana eyeball',(s*.54,-2.3,2.7),(.43,.35,.51),white)
    sphere('Banana pupil',(s*.48,-2.62,2.67),(.2,.07,.27),black)
    sphere('Banana sparkle',(s*.43,-2.69,2.78),(.06,.02,.07),white)
    box('Medical cross vertical',(s*.82,0,1.13),(.02,.16,.6),white)
    box('Medical cross horizontal',(s*.83,0,1.13),(.025,.65,.16),white)
    for y in [-1.9,1.9]:
        w=pivot('Wheel_'+('L' if s<0 else 'R')+('F' if y<0 else 'B'),(s*1.05,y,.46))
        cylinder('Monster tyre',(0,0,0),.46,.32,black,(0,math.pi/2,0),parent=w)
        cylinder('Pink wheel hub',(s*.18,0,0),.29,.07,pink,(0,math.pi/2,0),parent=w)
        cylinder('Gold wheel centre',(s*.22,0,0),.12,.08,metal,(0,math.pi/2,0),parent=w)
        rod('Axle',(0,y,.46),(s*1.05,y,.46),.1,metal)
box('Underbody chassis',(0,0,.55),(1.9,4.6,.15),pink)
box('Emergency light bracket',(0,.2,2.05),(1.5,.5,.12),metal)
for s in [-1,1]:sphere('Ridiculous emergency beacon',(s*.5,.2,2.25),(.3,.25,.22),blue)
box('Rear pink spoiler',(0,2.5,2.5),(2.5,.35,.14),pink)
for s in [-1,1]:rod('Spoiler support',(s*.5,2.5,1.95),(s*.5,2.5,2.5),.035,metal)
batch_export('ems-ambulance');preview('banana-ambulance-preview',9,(0,0,1.2))
print('PRANK MODELS COMPLETE '+OUT)
