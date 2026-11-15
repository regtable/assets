var Ie=0,on=1;var gt=1;var _t=100;var bt=204,yt=205;var Ft=0,Lt=1,Dt=2,K0=3,Ut=4,Ot=5,kt=6,Bt=7,cn=0;var zt=300;var xt=1e3,J0=1001,vt=1002;var ln=1006;var dn=1008;var fn=1009;var hn=1015;var un=1023;var Q0=2300,Pe=2301,Re=2302,Et=2400,Mt=2401,St=2402;var pn=0;var Vt="",Z="srgb",Ct="srgb-linear",wt="linear",Ne="srgb";var E0=7680;var At=519;var Tt=35044;var $0=2e3,Rt=2001;var M0=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,e);e.target=null}}},B=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ws=Math.PI/180,xn=180/Math.PI;function re(){let u=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(B[u&255]+B[u>>8&255]+B[u>>16&255]+B[u>>24&255]+"-"+B[e&255]+B[e>>8&255]+"-"+B[e>>16&15|64]+B[e>>24&255]+"-"+B[t&63|128]+B[t>>8&255]+"-"+B[t>>16&255]+B[t>>24&255]+B[n&255]+B[n>>8&255]+B[n>>16&255]+B[n>>24&255]).toLowerCase()}function A(u,e,t){return Math.max(e,Math.min(t,u))}function vn(u,e){return(u%e+e)%e}function Je(u,e,t){return(1-t)*u+t*e}function W0(u,e){switch(e.constructor){case Float32Array:return u;case Uint32Array:return u/4294967295;case Uint16Array:return u/65535;case Uint8Array:return u/255;case Int32Array:return Math.max(u/2147483647,-1);case Int16Array:return Math.max(u/32767,-1);case Int8Array:return Math.max(u/127,-1);default:throw new Error("Invalid component type.")}}function H(u,e){switch(e.constructor){case Float32Array:return u;case Uint32Array:return Math.round(u*4294967295);case Uint16Array:return Math.round(u*65535);case Uint8Array:return Math.round(u*255);case Int32Array:return Math.round(u*2147483647);case Int16Array:return Math.round(u*32767);case Int8Array:return Math.round(u*127);default:throw new Error("Invalid component type.")}}var L=class u{constructor(e=0,t=0){u.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=A(this.x,e.x,t.x),this.y=A(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=A(this.x,e,t),this.y=A(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(A(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(A(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*i+e.x,this.y=r*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},o0=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,s,a){let c=n[i+0],o=n[i+1],l=n[i+2],d=n[i+3],f=r[s+0],h=r[s+1],p=r[s+2],m=r[s+3];if(a===0){e[t+0]=c,e[t+1]=o,e[t+2]=l,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(d!==m||c!==f||o!==h||l!==p){let _=1-a,b=c*f+o*h+l*p+d*m,E=b>=0?1:-1,C=1-b*b;if(C>Number.EPSILON){let v=Math.sqrt(C),R=Math.atan2(v,b*E);_=Math.sin(_*R)/v,a=Math.sin(a*R)/v}let x=a*E;if(c=c*_+f*x,o=o*_+h*x,l=l*_+p*x,d=d*_+m*x,_===1-a){let v=1/Math.sqrt(c*c+o*o+l*l+d*d);c*=v,o*=v,l*=v,d*=v}}e[t]=c,e[t+1]=o,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,s){let a=n[i],c=n[i+1],o=n[i+2],l=n[i+3],d=r[s],f=r[s+1],h=r[s+2],p=r[s+3];return e[t]=a*p+l*d+c*h-o*f,e[t+1]=c*p+l*f+o*d-a*h,e[t+2]=o*p+l*h+a*f-c*d,e[t+3]=l*p-a*d-c*f-o*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,s=e._order,a=Math.cos,c=Math.sin,o=a(n/2),l=a(i/2),d=a(r/2),f=c(n/2),h=c(i/2),p=c(r/2);switch(s){case"XYZ":this._x=f*l*d+o*h*p,this._y=o*h*d-f*l*p,this._z=o*l*p+f*h*d,this._w=o*l*d-f*h*p;break;case"YXZ":this._x=f*l*d+o*h*p,this._y=o*h*d-f*l*p,this._z=o*l*p-f*h*d,this._w=o*l*d+f*h*p;break;case"ZXY":this._x=f*l*d-o*h*p,this._y=o*h*d+f*l*p,this._z=o*l*p+f*h*d,this._w=o*l*d-f*h*p;break;case"ZYX":this._x=f*l*d-o*h*p,this._y=o*h*d+f*l*p,this._z=o*l*p-f*h*d,this._w=o*l*d+f*h*p;break;case"YZX":this._x=f*l*d+o*h*p,this._y=o*h*d+f*l*p,this._z=o*l*p-f*h*d,this._w=o*l*d-f*h*p;break;case"XZY":this._x=f*l*d-o*h*p,this._y=o*h*d-f*l*p,this._z=o*l*p+f*h*d,this._w=o*l*d+f*h*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],s=t[1],a=t[5],c=t[9],o=t[2],l=t[6],d=t[10],f=n+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(l-c)*h,this._y=(r-o)*h,this._z=(s-i)*h}else if(n>a&&n>d){let h=2*Math.sqrt(1+n-a-d);this._w=(l-c)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(r+o)/h}else if(a>d){let h=2*Math.sqrt(1+a-n-d);this._w=(r-o)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(c+l)/h}else{let h=2*Math.sqrt(1+d-n-a);this._w=(s-i)/h,this._x=(r+o)/h,this._y=(c+l)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(A(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,s=e._w,a=t._x,c=t._y,o=t._z,l=t._w;return this._x=n*l+s*a+i*o-r*c,this._y=i*l+s*c+r*a-n*o,this._z=r*l+s*o+n*c-i*a,this._w=s*l-n*a-i*c-r*o,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,s=this._w,a=s*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let h=1-t;return this._w=h*s+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}let o=Math.sqrt(c),l=Math.atan2(o,a),d=Math.sin((1-t)*l)/o,f=Math.sin(t*l)/o;return this._w=s*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},g=class u{constructor(e=0,t=0,n=0){u.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,s=e.y,a=e.z,c=e.w,o=2*(s*i-a*n),l=2*(a*t-r*i),d=2*(r*n-s*t);return this.x=t+c*o+s*d-a*l,this.y=n+c*l+a*o-r*d,this.z=i+c*d+r*l-s*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=A(this.x,e.x,t.x),this.y=A(this.y,e.y,t.y),this.z=A(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=A(this.x,e,t),this.y=A(this.y,e,t),this.z=A(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(A(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,s=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*s-n*c,this.z=n*a-i*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $e.copy(this).projectOnVector(e),this.sub($e)}reflect(e){return this.sub($e.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(A(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$e=new g,Xt=new o0,S=class u{constructor(e,t,n,i,r,s,a,c,o){u.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,a,c,o)}set(e,t,n,i,r,s,a,c,o){let l=this.elements;return l[0]=e,l[1]=i,l[2]=a,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=s,l[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[3],c=n[6],o=n[1],l=n[4],d=n[7],f=n[2],h=n[5],p=n[8],m=i[0],_=i[3],b=i[6],E=i[1],C=i[4],x=i[7],v=i[2],R=i[5],M=i[8];return r[0]=s*m+a*E+c*v,r[3]=s*_+a*C+c*R,r[6]=s*b+a*x+c*M,r[1]=o*m+l*E+d*v,r[4]=o*_+l*C+d*R,r[7]=o*b+l*x+d*M,r[2]=f*m+h*E+p*v,r[5]=f*_+h*C+p*R,r[8]=f*b+h*x+p*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],c=e[6],o=e[7],l=e[8];return t*s*l-t*a*o-n*r*l+n*a*c+i*r*o-i*s*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],c=e[6],o=e[7],l=e[8],d=l*s-a*o,f=a*c-l*r,h=o*r-s*c,p=t*d+n*f+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=d*m,e[1]=(i*o-l*n)*m,e[2]=(a*n-i*s)*m,e[3]=f*m,e[4]=(l*t-i*c)*m,e[5]=(i*r-a*t)*m,e[6]=h*m,e[7]=(n*c-o*t)*m,e[8]=(s*t-n*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,s,a){let c=Math.cos(r),o=Math.sin(r);return this.set(n*c,n*o,-n*(c*s+o*a)+s+e,-i*o,i*c,-i*(-o*s+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ke.makeScale(e,t)),this}rotate(e){return this.premultiply(Ke.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ke.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ke=new S;function mn(u){for(let e=u.length-1;e>=0;--e)if(u[e]>=65535)return!0;return!1}function Nt(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}var qt={};function It(u){u in qt||(qt[u]=!0,console.warn(u))}var Yt=new S().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zt=new S().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function En(){let u={enabled:!0,workingColorSpace:Ct,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Ne&&(i.r=s0(i.r),i.g=s0(i.g),i.b=s0(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ne&&(i.r=O0(i.r),i.g=O0(i.g),i.b=O0(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Vt?wt:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return It("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),u.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return It("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),u.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return u.define({[Ct]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Yt,fromXYZ:Zt,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Z},outputColorSpaceConfig:{drawingBufferColorSpace:Z}},[Z]:{primaries:e,whitePoint:n,transfer:Ne,toXYZ:Yt,fromXYZ:Zt,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Z}}}),u}var Y=En();function s0(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function O0(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}var A0,Fe=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{A0===void 0&&(A0=Nt("canvas")),A0.width=e.width,A0.height=e.height;let i=A0.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=A0}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Nt("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=s0(r[s]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(s0(t[n]/255)*255):t[n]=s0(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mn=0,Le=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mn++}),this.uuid=re(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Qe(i[s].image)):r.push(Qe(i[s]))}else r=Qe(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Qe(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?Fe.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sn=0,je=new g,k0=class u extends M0{constructor(e=u.DEFAULT_IMAGE,t=u.DEFAULT_MAPPING,n=J0,i=J0,r=ln,s=dn,a=un,c=fn,o=u.DEFAULT_ANISOTROPY,l=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=re(),this.name="",this.source=new Le(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=o,this.format=a,this.internalFormat=null,this.type=c,this.offset=new L(0,0),this.repeat=new L(1,1),this.center=new L(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new S,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(je).x}get height(){return this.source.getSize(je).y}get depth(){return this.source.getSize(je).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zt)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xt:e.x=e.x-Math.floor(e.x);break;case J0:e.x=e.x<0?0:1;break;case vt:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xt:e.y=e.y-Math.floor(e.y);break;case J0:e.y=e.y<0?0:1;break;case vt:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};k0.DEFAULT_IMAGE=null;k0.DEFAULT_MAPPING=zt;k0.DEFAULT_ANISOTROPY=1;var B0=class u{constructor(e=0,t=0,n=0,i=1){u.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,o=c[0],l=c[4],d=c[8],f=c[1],h=c[5],p=c[9],m=c[2],_=c[6],b=c[10];if(Math.abs(l-f)<.01&&Math.abs(d-m)<.01&&Math.abs(p-_)<.01){if(Math.abs(l+f)<.1&&Math.abs(d+m)<.1&&Math.abs(p+_)<.1&&Math.abs(o+h+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(o+1)/2,x=(h+1)/2,v=(b+1)/2,R=(l+f)/4,M=(d+m)/4,T=(p+_)/4;return C>x&&C>v?C<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(C),i=R/n,r=M/n):x>v?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=T/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=M/r,i=T/r),this.set(n,i,r,t),this}let E=Math.sqrt((_-p)*(_-p)+(d-m)*(d-m)+(f-l)*(f-l));return Math.abs(E)<.001&&(E=1),this.x=(_-p)/E,this.y=(d-m)/E,this.z=(f-l)/E,this.w=Math.acos((o+h+b-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=A(this.x,e.x,t.x),this.y=A(this.y,e.y,t.y),this.z=A(this.z,e.z,t.z),this.w=A(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=A(this.x,e,t),this.y=A(this.y,e,t),this.z=A(this.z,e,t),this.w=A(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(A(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var j=class{constructor(e=new g(1/0,1/0,1/0),t=new g(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(J.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(J.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=J.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,J):J.fromBufferAttribute(r,s),J.applyMatrix4(e.matrixWorld),this.expandByPoint(J);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),he.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),he.copy(n.boundingBox)),he.applyMatrix4(e.matrixWorld),this.union(he)}let i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,J),J.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(X0),ue.subVectors(this.max,X0),T0.subVectors(e.a,X0),R0.subVectors(e.b,X0),N0.subVectors(e.c,X0),f0.subVectors(R0,T0),h0.subVectors(N0,R0),y0.subVectors(T0,N0);let t=[0,-f0.z,f0.y,0,-h0.z,h0.y,0,-y0.z,y0.y,f0.z,0,-f0.x,h0.z,0,-h0.x,y0.z,0,-y0.x,-f0.y,f0.x,0,-h0.y,h0.x,0,-y0.y,y0.x,0];return!et(t,T0,R0,N0,ue)||(t=[1,0,0,0,1,0,0,0,1],!et(t,T0,R0,N0,ue))?!1:(pe.crossVectors(f0,h0),t=[pe.x,pe.y,pe.z],et(t,T0,R0,N0,ue))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,J).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(J).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(e0[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),e0[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),e0[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),e0[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),e0[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),e0[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),e0[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),e0[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(e0),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},e0=[new g,new g,new g,new g,new g,new g,new g,new g],J=new g,he=new j,T0=new g,R0=new g,N0=new g,f0=new g,h0=new g,y0=new g,X0=new g,ue=new g,pe=new g,x0=new g;function et(u,e,t,n,i){for(let r=0,s=u.length-3;r<=s;r+=3){x0.fromArray(u,r);let a=i.x*Math.abs(x0.x)+i.y*Math.abs(x0.y)+i.z*Math.abs(x0.z),c=e.dot(x0),o=t.dot(x0),l=n.dot(x0);if(Math.max(-Math.max(c,o,l),Math.min(c,o,l))>a)return!1}return!0}var Cn=new j,q0=new g,tt=new g,j0=class{constructor(e=new g,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Cn.setFromPoints(e).getCenter(n);let i=0;for(let r=0,s=e.length;r<s;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;q0.subVectors(e,this.center);let t=q0.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(q0,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tt.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(q0.copy(e.center).add(tt)),this.expandByPoint(q0.copy(e.center).sub(tt))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},t0=new g,nt=new g,me=new g,u0=new g,it=new g,ge=new g,rt=new g,De=class{constructor(e=new g,t=new g(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,t0)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=t0.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(t0.copy(this.origin).addScaledVector(this.direction,t),t0.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nt.copy(e).add(t).multiplyScalar(.5),me.copy(t).sub(e).normalize(),u0.copy(this.origin).sub(nt);let r=e.distanceTo(t)*.5,s=-this.direction.dot(me),a=u0.dot(this.direction),c=-u0.dot(me),o=u0.lengthSq(),l=Math.abs(1-s*s),d,f,h,p;if(l>0)if(d=s*c-a,f=s*a-c,p=r*l,d>=0)if(f>=-p)if(f<=p){let m=1/l;d*=m,f*=m,h=d*(d+s*f+2*a)+f*(s*d+f+2*c)+o}else f=r,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+o;else f=-r,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+o;else f<=-p?(d=Math.max(0,-(-s*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+o):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+o):(d=Math.max(0,-(s*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),h=-d*d+f*(f+2*c)+o);else f=s>0?-r:r,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*c)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(nt).addScaledVector(me,f),h}intersectSphere(e,t){t0.subVectors(e.center,this.origin);let n=t0.dot(this.direction),i=t0.dot(t0)-n*n,r=e.radius*e.radius;if(i>r)return null;let s=Math.sqrt(r-i),a=n-s,c=n+s;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,s,a,c,o=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,f=this.origin;return o>=0?(n=(e.min.x-f.x)*o,i=(e.max.x-f.x)*o):(n=(e.max.x-f.x)*o,i=(e.min.x-f.x)*o),l>=0?(r=(e.min.y-f.y)*l,s=(e.max.y-f.y)*l):(r=(e.max.y-f.y)*l,s=(e.min.y-f.y)*l),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,t0)!==null}intersectTriangle(e,t,n,i,r){it.subVectors(t,e),ge.subVectors(n,e),rt.crossVectors(it,ge);let s=this.direction.dot(rt),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;u0.subVectors(this.origin,e);let c=a*this.direction.dot(ge.crossVectors(u0,ge));if(c<0)return null;let o=a*this.direction.dot(it.cross(u0));if(o<0||c+o>s)return null;let l=-a*u0.dot(rt);return l<0?null:this.at(l/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Q=class u{constructor(e,t,n,i,r,s,a,c,o,l,d,f,h,p,m,_){u.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,s,a,c,o,l,d,f,h,p,m,_)}set(e,t,n,i,r,s,a,c,o,l,d,f,h,p,m,_){let b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=r,b[5]=s,b[9]=a,b[13]=c,b[2]=o,b[6]=l,b[10]=d,b[14]=f,b[3]=h,b[7]=p,b[11]=m,b[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new u().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/I0.setFromMatrixColumn(e,0).length(),r=1/I0.setFromMatrixColumn(e,1).length(),s=1/I0.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,s=Math.cos(n),a=Math.sin(n),c=Math.cos(i),o=Math.sin(i),l=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=s*l,h=s*d,p=a*l,m=a*d;t[0]=c*l,t[4]=-c*d,t[8]=o,t[1]=h+p*o,t[5]=f-m*o,t[9]=-a*c,t[2]=m-f*o,t[6]=p+h*o,t[10]=s*c}else if(e.order==="YXZ"){let f=c*l,h=c*d,p=o*l,m=o*d;t[0]=f+m*a,t[4]=p*a-h,t[8]=s*o,t[1]=s*d,t[5]=s*l,t[9]=-a,t[2]=h*a-p,t[6]=m+f*a,t[10]=s*c}else if(e.order==="ZXY"){let f=c*l,h=c*d,p=o*l,m=o*d;t[0]=f-m*a,t[4]=-s*d,t[8]=p+h*a,t[1]=h+p*a,t[5]=s*l,t[9]=m-f*a,t[2]=-s*o,t[6]=a,t[10]=s*c}else if(e.order==="ZYX"){let f=s*l,h=s*d,p=a*l,m=a*d;t[0]=c*l,t[4]=p*o-h,t[8]=f*o+m,t[1]=c*d,t[5]=m*o+f,t[9]=h*o-p,t[2]=-o,t[6]=a*c,t[10]=s*c}else if(e.order==="YZX"){let f=s*c,h=s*o,p=a*c,m=a*o;t[0]=c*l,t[4]=m-f*d,t[8]=p*d+h,t[1]=d,t[5]=s*l,t[9]=-a*l,t[2]=-o*l,t[6]=h*d+p,t[10]=f-m*d}else if(e.order==="XZY"){let f=s*c,h=s*o,p=a*c,m=a*o;t[0]=c*l,t[4]=-d,t[8]=o*l,t[1]=f*d+m,t[5]=s*l,t[9]=h*d-p,t[2]=p*d-h,t[6]=a*l,t[10]=m*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wn,e,An)}lookAt(e,t,n){let i=this.elements;return G.subVectors(e,t),G.lengthSq()===0&&(G.z=1),G.normalize(),p0.crossVectors(n,G),p0.lengthSq()===0&&(Math.abs(n.z)===1?G.x+=1e-4:G.z+=1e-4,G.normalize(),p0.crossVectors(n,G)),p0.normalize(),_e.crossVectors(G,p0),i[0]=p0.x,i[4]=_e.x,i[8]=G.x,i[1]=p0.y,i[5]=_e.y,i[9]=G.y,i[2]=p0.z,i[6]=_e.z,i[10]=G.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,s=n[0],a=n[4],c=n[8],o=n[12],l=n[1],d=n[5],f=n[9],h=n[13],p=n[2],m=n[6],_=n[10],b=n[14],E=n[3],C=n[7],x=n[11],v=n[15],R=i[0],M=i[4],T=i[8],D=i[12],U=i[1],O=i[5],l0=i[9],k=i[13],d0=i[2],se=i[6],ae=i[10],oe=i[14],ce=i[3],le=i[7],de=i[11],fe=i[15];return r[0]=s*R+a*U+c*d0+o*ce,r[4]=s*M+a*O+c*se+o*le,r[8]=s*T+a*l0+c*ae+o*de,r[12]=s*D+a*k+c*oe+o*fe,r[1]=l*R+d*U+f*d0+h*ce,r[5]=l*M+d*O+f*se+h*le,r[9]=l*T+d*l0+f*ae+h*de,r[13]=l*D+d*k+f*oe+h*fe,r[2]=p*R+m*U+_*d0+b*ce,r[6]=p*M+m*O+_*se+b*le,r[10]=p*T+m*l0+_*ae+b*de,r[14]=p*D+m*k+_*oe+b*fe,r[3]=E*R+C*U+x*d0+v*ce,r[7]=E*M+C*O+x*se+v*le,r[11]=E*T+C*l0+x*ae+v*de,r[15]=E*D+C*k+x*oe+v*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],s=e[1],a=e[5],c=e[9],o=e[13],l=e[2],d=e[6],f=e[10],h=e[14],p=e[3],m=e[7],_=e[11],b=e[15];return p*(+r*c*d-i*o*d-r*a*f+n*o*f+i*a*h-n*c*h)+m*(+t*c*h-t*o*f+r*s*f-i*s*h+i*o*l-r*c*l)+_*(+t*o*d-t*a*h-r*s*d+n*s*h+r*a*l-n*o*l)+b*(-i*a*l-t*c*d+t*a*f+i*s*d-n*s*f+n*c*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],s=e[4],a=e[5],c=e[6],o=e[7],l=e[8],d=e[9],f=e[10],h=e[11],p=e[12],m=e[13],_=e[14],b=e[15],E=d*_*o-m*f*o+m*c*h-a*_*h-d*c*b+a*f*b,C=p*f*o-l*_*o-p*c*h+s*_*h+l*c*b-s*f*b,x=l*m*o-p*d*o+p*a*h-s*m*h-l*a*b+s*d*b,v=p*d*c-l*m*c-p*a*f+s*m*f+l*a*_-s*d*_,R=t*E+n*C+i*x+r*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/R;return e[0]=E*M,e[1]=(m*f*r-d*_*r-m*i*h+n*_*h+d*i*b-n*f*b)*M,e[2]=(a*_*r-m*c*r+m*i*o-n*_*o-a*i*b+n*c*b)*M,e[3]=(d*c*r-a*f*r-d*i*o+n*f*o+a*i*h-n*c*h)*M,e[4]=C*M,e[5]=(l*_*r-p*f*r+p*i*h-t*_*h-l*i*b+t*f*b)*M,e[6]=(p*c*r-s*_*r-p*i*o+t*_*o+s*i*b-t*c*b)*M,e[7]=(s*f*r-l*c*r+l*i*o-t*f*o-s*i*h+t*c*h)*M,e[8]=x*M,e[9]=(p*d*r-l*m*r-p*n*h+t*m*h+l*n*b-t*d*b)*M,e[10]=(s*m*r-p*a*r+p*n*o-t*m*o-s*n*b+t*a*b)*M,e[11]=(l*a*r-s*d*r-l*n*o+t*d*o+s*n*h-t*a*h)*M,e[12]=v*M,e[13]=(l*m*i-p*d*i+p*n*f-t*m*f-l*n*_+t*d*_)*M,e[14]=(p*a*i-s*m*i-p*n*c+t*m*c+s*n*_-t*a*_)*M,e[15]=(s*d*i-l*a*i+l*n*c-t*d*c-s*n*f+t*a*f)*M,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,s=e.x,a=e.y,c=e.z,o=r*s,l=r*a;return this.set(o*s+n,o*a-i*c,o*c+i*a,0,o*a+i*c,l*a+n,l*c-i*s,0,o*c-i*a,l*c+i*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,s){return this.set(1,n,r,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,s=t._y,a=t._z,c=t._w,o=r+r,l=s+s,d=a+a,f=r*o,h=r*l,p=r*d,m=s*l,_=s*d,b=a*d,E=c*o,C=c*l,x=c*d,v=n.x,R=n.y,M=n.z;return i[0]=(1-(m+b))*v,i[1]=(h+x)*v,i[2]=(p-C)*v,i[3]=0,i[4]=(h-x)*R,i[5]=(1-(f+b))*R,i[6]=(_+E)*R,i[7]=0,i[8]=(p+C)*M,i[9]=(_-E)*M,i[10]=(1-(f+m))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=I0.set(i[0],i[1],i[2]).length(),s=I0.set(i[4],i[5],i[6]).length(),a=I0.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],$.copy(this);let o=1/r,l=1/s,d=1/a;return $.elements[0]*=o,$.elements[1]*=o,$.elements[2]*=o,$.elements[4]*=l,$.elements[5]*=l,$.elements[6]*=l,$.elements[8]*=d,$.elements[9]*=d,$.elements[10]*=d,t.setFromRotationMatrix($),n.x=r,n.y=s,n.z=a,this}makePerspective(e,t,n,i,r,s,a=$0,c=!1){let o=this.elements,l=2*r/(t-e),d=2*r/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i),p,m;if(c)p=r/(s-r),m=s*r/(s-r);else if(a===$0)p=-(s+r)/(s-r),m=-2*s*r/(s-r);else if(a===Rt)p=-s/(s-r),m=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=f,o[12]=0,o[1]=0,o[5]=d,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=p,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,r,s,a=$0,c=!1){let o=this.elements,l=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i),p,m;if(c)p=1/(s-r),m=s/(s-r);else if(a===$0)p=-2/(s-r),m=-(s+r)/(s-r);else if(a===Rt)p=-1/(s-r),m=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=0,o[12]=f,o[1]=0,o[5]=d,o[9]=0,o[13]=h,o[2]=0,o[6]=0,o[10]=p,o[14]=m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},I0=new g,$=new Q,wn=new g(0,0,0),An=new g(1,1,1),p0=new g,_e=new g,G=new g,Jt=new Q,$t=new o0,S0=class u{constructor(e=0,t=0,n=0,i=u.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],s=i[4],a=i[8],c=i[1],o=i[5],l=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(A(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,h),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,o),this._z=0);break;case"YXZ":this._x=Math.asin(-A(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(A(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-A(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,o));break;case"YZX":this._z=Math.asin(A(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,o),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-A(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,o),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $t.setFromEuler(this),this.setFromQuaternion($t,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};S0.DEFAULT_ORDER="XYZ";var Ue=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tn=0,Kt=new g,P0=new o0,n0=new Q,be=new g,Y0=new g,Rn=new g,Nn=new o0,Qt=new g(1,0,0),jt=new g(0,1,0),en=new g(0,0,1),tn={type:"added"},In={type:"removed"},F0={type:"childadded",child:null},st={type:"childremoved",child:null},c0=class u extends M0{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tn++}),this.uuid=re(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=u.DEFAULT_UP.clone();let e=new g,t=new S0,n=new o0,i=new g(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Q},normalMatrix:{value:new S}}),this.matrix=new Q,this.matrixWorld=new Q,this.matrixAutoUpdate=u.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=u.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ue,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return P0.setFromAxisAngle(e,t),this.quaternion.multiply(P0),this}rotateOnWorldAxis(e,t){return P0.setFromAxisAngle(e,t),this.quaternion.premultiply(P0),this}rotateX(e){return this.rotateOnAxis(Qt,e)}rotateY(e){return this.rotateOnAxis(jt,e)}rotateZ(e){return this.rotateOnAxis(en,e)}translateOnAxis(e,t){return Kt.copy(e).applyQuaternion(this.quaternion),this.position.add(Kt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qt,e)}translateY(e){return this.translateOnAxis(jt,e)}translateZ(e){return this.translateOnAxis(en,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(n0.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?be.copy(e):be.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Y0.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?n0.lookAt(Y0,be,this.up):n0.lookAt(be,Y0,this.up),this.quaternion.setFromRotationMatrix(n0),i&&(n0.extractRotation(i.matrixWorld),P0.setFromRotationMatrix(n0),this.quaternion.premultiply(P0.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tn),F0.child=e,this.dispatchEvent(F0),F0.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(In),st.child=e,this.dispatchEvent(st),st.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),n0.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),n0.multiply(e.parent.matrixWorld)),e.applyMatrix4(n0),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tn),F0.child=e,this.dispatchEvent(F0),F0.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Y0,e,Rn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Y0,Nn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let o=0,l=c.length;o<l;o++){let d=c[o];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,o=this.material.length;c<o;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=s(e.geometries),c=s(e.materials),o=s(e.textures),l=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),p=s(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),o.length>0&&(n.textures=o),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=i,n;function s(a){let c=[];for(let o in a){let l=a[o];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};c0.DEFAULT_UP=new g(0,1,0);c0.DEFAULT_MATRIX_AUTO_UPDATE=!0;c0.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var K=new g,i0=new g,at=new g,r0=new g,L0=new g,D0=new g,nn=new g,ot=new g,ct=new g,lt=new g,dt=new B0,ft=new B0,ht=new B0,g0=class u{constructor(e=new g,t=new g,n=new g){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),K.subVectors(e,t),i.cross(K);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){K.subVectors(i,t),i0.subVectors(n,t),at.subVectors(e,t);let s=K.dot(K),a=K.dot(i0),c=K.dot(at),o=i0.dot(i0),l=i0.dot(at),d=s*o-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(o*c-a*l)*f,p=(s*l-a*c)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,r0)===null?!1:r0.x>=0&&r0.y>=0&&r0.x+r0.y<=1}static getInterpolation(e,t,n,i,r,s,a,c){return this.getBarycoord(e,t,n,i,r0)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,r0.x),c.addScaledVector(s,r0.y),c.addScaledVector(a,r0.z),c)}static getInterpolatedAttribute(e,t,n,i,r,s){return dt.setScalar(0),ft.setScalar(0),ht.setScalar(0),dt.fromBufferAttribute(e,t),ft.fromBufferAttribute(e,n),ht.fromBufferAttribute(e,i),s.setScalar(0),s.addScaledVector(dt,r.x),s.addScaledVector(ft,r.y),s.addScaledVector(ht,r.z),s}static isFrontFacing(e,t,n,i){return K.subVectors(n,t),i0.subVectors(e,t),K.cross(i0).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return K.subVectors(this.c,this.b),i0.subVectors(this.a,this.b),K.cross(i0).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return u.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return u.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return u.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return u.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return u.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,s,a;L0.subVectors(i,n),D0.subVectors(r,n),ot.subVectors(e,n);let c=L0.dot(ot),o=D0.dot(ot);if(c<=0&&o<=0)return t.copy(n);ct.subVectors(e,i);let l=L0.dot(ct),d=D0.dot(ct);if(l>=0&&d<=l)return t.copy(i);let f=c*d-l*o;if(f<=0&&c>=0&&l<=0)return s=c/(c-l),t.copy(n).addScaledVector(L0,s);lt.subVectors(e,r);let h=L0.dot(lt),p=D0.dot(lt);if(p>=0&&h<=p)return t.copy(r);let m=h*o-c*p;if(m<=0&&o>=0&&p<=0)return a=o/(o-p),t.copy(n).addScaledVector(D0,a);let _=l*p-h*d;if(_<=0&&d-l>=0&&h-p>=0)return nn.subVectors(r,i),a=(d-l)/(d-l+(h-p)),t.copy(i).addScaledVector(nn,a);let b=1/(_+m+f);return s=m*b,a=f*b,t.copy(n).addScaledVector(L0,s).addScaledVector(D0,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},m0={h:0,s:0,l:0},ye={h:0,s:0,l:0};function ut(u,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?u+(e-u)*6*t:t<1/2?e:t<2/3?u+(e-u)*6*(2/3-t):u}var I=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Z){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Y.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Y.workingColorSpace){return this.r=e,this.g=t,this.b=n,Y.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Y.workingColorSpace){if(e=vn(e,1),t=A(t,0,1),n=A(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=ut(s,r,e+1/3),this.g=ut(s,r,e),this.b=ut(s,r,e-1/3)}return Y.colorSpaceToWorking(this,i),this}setStyle(e,t=Z){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Z){let n=gn[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=s0(e.r),this.g=s0(e.g),this.b=s0(e.b),this}copyLinearToSRGB(e){return this.r=O0(e.r),this.g=O0(e.g),this.b=O0(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Z){return Y.workingToColorSpace(z.copy(this),e),Math.round(A(z.r*255,0,255))*65536+Math.round(A(z.g*255,0,255))*256+Math.round(A(z.b*255,0,255))}getHexString(e=Z){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Y.workingColorSpace){Y.workingToColorSpace(z.copy(this),t);let n=z.r,i=z.g,r=z.b,s=Math.max(n,i,r),a=Math.min(n,i,r),c,o,l=(a+s)/2;if(a===s)c=0,o=0;else{let d=s-a;switch(o=l<=.5?d/(s+a):d/(2-s-a),s){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=o,e.l=l,e}getRGB(e,t=Y.workingColorSpace){return Y.workingToColorSpace(z.copy(this),t),e.r=z.r,e.g=z.g,e.b=z.b,e}getStyle(e=Z){Y.workingToColorSpace(z.copy(this),e);let t=z.r,n=z.g,i=z.b;return e!==Z?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(m0),this.setHSL(m0.h+e,m0.s+t,m0.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(m0),e.getHSL(ye);let n=Je(m0.h,ye.h,t),i=Je(m0.s,ye.s,t),r=Je(m0.l,ye.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},z=new I;I.NAMES=gn;var Pn=0,ee=class extends M0{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pn++}),this.uuid=re(),this.name="",this.type="Material",this.blending=gt,this.side=Ie,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bt,this.blendDst=yt,this.blendEquation=_t,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new I(0,0,0),this.blendAlpha=0,this.depthFunc=K0,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=At,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=E0,this.stencilZFail=E0,this.stencilZPass=E0,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gt&&(n.blending=this.blending),this.side!==Ie&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bt&&(n.blendSrc=this.blendSrc),this.blendDst!==yt&&(n.blendDst=this.blendDst),this.blendEquation!==_t&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==K0&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==At&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==E0&&(n.stencilFail=this.stencilFail),this.stencilZFail!==E0&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==E0&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let s=[];for(let a in r){let c=r[a];delete c.metadata,s.push(c)}return s}if(t){let r=i(e.textures),s=i(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Oe=class extends ee{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new I(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new S0,this.combine=cn,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var P=new g,xe=new L,Fn=0,a0=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fn++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tt,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xe.fromBufferAttribute(this,t),xe.applyMatrix3(e),this.setXY(t,xe.x,xe.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)P.fromBufferAttribute(this,t),P.applyMatrix3(e),this.setXYZ(t,P.x,P.y,P.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)P.fromBufferAttribute(this,t),P.applyMatrix4(e),this.setXYZ(t,P.x,P.y,P.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)P.fromBufferAttribute(this,t),P.applyNormalMatrix(e),this.setXYZ(t,P.x,P.y,P.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)P.fromBufferAttribute(this,t),P.transformDirection(e),this.setXYZ(t,P.x,P.y,P.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=W0(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=H(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=W0(t,this.array)),t}setX(e,t){return this.normalized&&(t=H(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=W0(t,this.array)),t}setY(e,t){return this.normalized&&(t=H(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=W0(t,this.array)),t}setZ(e,t){return this.normalized&&(t=H(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=W0(t,this.array)),t}setW(e,t){return this.normalized&&(t=H(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=H(t,this.array),n=H(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=H(t,this.array),n=H(n,this.array),i=H(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=H(t,this.array),n=H(n,this.array),i=H(i,this.array),r=H(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tt&&(e.usage=this.usage),e}};var ke=class extends a0{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Be=class extends a0{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var z0=class extends a0{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ln=0,q=new Q,pt=new c0,U0=new g,W=new j,Z0=new j,F=new g,V0=class u extends M0{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ln++}),this.uuid=re(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mn(e)?Be:ke)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new S().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return q.makeRotationFromQuaternion(e),this.applyMatrix4(q),this}rotateX(e){return q.makeRotationX(e),this.applyMatrix4(q),this}rotateY(e){return q.makeRotationY(e),this.applyMatrix4(q),this}rotateZ(e){return q.makeRotationZ(e),this.applyMatrix4(q),this}translate(e,t,n){return q.makeTranslation(e,t,n),this.applyMatrix4(q),this}scale(e,t,n){return q.makeScale(e,t,n),this.applyMatrix4(q),this}lookAt(e){return pt.lookAt(e),pt.updateMatrix(),this.applyMatrix4(pt.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(U0).negate(),this.translate(U0.x,U0.y,U0.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new z0(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new j);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new g(-1/0,-1/0,-1/0),new g(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];W.setFromBufferAttribute(r),this.morphTargetsRelative?(F.addVectors(this.boundingBox.min,W.min),this.boundingBox.expandByPoint(F),F.addVectors(this.boundingBox.max,W.max),this.boundingBox.expandByPoint(F)):(this.boundingBox.expandByPoint(W.min),this.boundingBox.expandByPoint(W.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new j0);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new g,1/0);return}if(e){let n=this.boundingSphere.center;if(W.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let a=t[r];Z0.setFromBufferAttribute(a),this.morphTargetsRelative?(F.addVectors(W.min,Z0.min),W.expandByPoint(F),F.addVectors(W.max,Z0.max),W.expandByPoint(F)):(W.expandByPoint(Z0.min),W.expandByPoint(Z0.max))}W.getCenter(n);let i=0;for(let r=0,s=e.count;r<s;r++)F.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(F));if(t)for(let r=0,s=t.length;r<s;r++){let a=t[r],c=this.morphTargetsRelative;for(let o=0,l=a.count;o<l;o++)F.fromBufferAttribute(a,o),c&&(U0.fromBufferAttribute(e,o),F.add(U0)),i=Math.max(i,n.distanceToSquared(F))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new a0(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new g,c[T]=new g;let o=new g,l=new g,d=new g,f=new L,h=new L,p=new L,m=new g,_=new g;function b(T,D,U){o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,D),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,D),p.fromBufferAttribute(r,U),l.sub(o),d.sub(o),h.sub(f),p.sub(f);let O=1/(h.x*p.y-p.x*h.y);isFinite(O)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(O),_.copy(d).multiplyScalar(h.x).addScaledVector(l,-p.x).multiplyScalar(O),a[T].add(m),a[D].add(m),a[U].add(m),c[T].add(_),c[D].add(_),c[U].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let T=0,D=E.length;T<D;++T){let U=E[T],O=U.start,l0=U.count;for(let k=O,d0=O+l0;k<d0;k+=3)b(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let C=new g,x=new g,v=new g,R=new g;function M(T){v.fromBufferAttribute(i,T),R.copy(v);let D=a[T];C.copy(D),C.sub(v.multiplyScalar(v.dot(D))).normalize(),x.crossVectors(R,D);let O=x.dot(c[T])<0?-1:1;s.setXYZW(T,C.x,C.y,C.z,O)}for(let T=0,D=E.length;T<D;++T){let U=E[T],O=U.start,l0=U.count;for(let k=O,d0=O+l0;k<d0;k+=3)M(e.getX(k+0)),M(e.getX(k+1)),M(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new a0(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let i=new g,r=new g,s=new g,a=new g,c=new g,o=new g,l=new g,d=new g;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),m=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),l.subVectors(s,r),d.subVectors(i,r),l.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.fromBufferAttribute(n,_),a.add(l),c.add(l),o.add(l),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(_,o.x,o.y,o.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),l.subVectors(s,r),d.subVectors(i,r),l.cross(d),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)F.fromBufferAttribute(e,t),F.normalize(),e.setXYZ(t,F.x,F.y,F.z)}toNonIndexed(){function e(a,c){let o=a.array,l=a.itemSize,d=a.normalized,f=new o.constructor(c.length*l),h=0,p=0;for(let m=0,_=c.length;m<_;m++){a.isInterleavedBufferAttribute?h=c[m]*a.data.stride+a.offset:h=c[m]*l;for(let b=0;b<l;b++)f[p++]=o[h++]}return new a0(f,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new u,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],o=e(c,n);t.setAttribute(a,o)}let r=this.morphAttributes;for(let a in r){let c=[],o=r[a];for(let l=0,d=o.length;l<d;l++){let f=o[l],h=e(f,n);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let a=0,c=s.length;a<c;a++){let o=s[a];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let o=n[c];e.data.attributes[c]=o.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],l=[];for(let d=0,f=o.length;d<f;d++){let h=o[d];l.push(h.toJSON(e.data))}l.length>0&&(i[c]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let o in i){let l=i[o];this.setAttribute(o,l.clone(t))}let r=e.morphAttributes;for(let o in r){let l=[],d=r[o];for(let f=0,h=d.length;f<h;f++)l.push(d[f].clone(t));this.morphAttributes[o]=l}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let o=0,l=s.length;o<l;o++){let d=s[o];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=new Q,v0=new De,ve=new j0,sn=new g,Ee=new g,Me=new g,Se=new g,mt=new g,Ce=new g,an=new g,we=new g,te=class extends c0{constructor(e=new V0,t=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Ce.set(0,0,0);for(let c=0,o=r.length;c<o;c++){let l=a[c],d=r[c];l!==0&&(mt.fromBufferAttribute(d,e),s?Ce.addScaledVector(mt,l):Ce.addScaledVector(mt.sub(t),l))}t.add(Ce)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ve.copy(n.boundingSphere),ve.applyMatrix4(r),v0.copy(e.ray).recast(e.near),!(ve.containsPoint(v0.origin)===!1&&(v0.intersectSphere(ve,sn)===null||v0.origin.distanceToSquared(sn)>(e.far-e.near)**2))&&(rn.copy(r).invert(),v0.copy(e.ray).applyMatrix4(rn),!(n.boundingBox!==null&&v0.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,v0)))}_computeIntersections(e,t,n){let i,r=this.geometry,s=this.material,a=r.index,c=r.attributes.position,o=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,m=f.length;p<m;p++){let _=f[p],b=s[_.materialIndex],E=Math.max(_.start,h.start),C=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let x=E,v=C;x<v;x+=3){let R=a.getX(x),M=a.getX(x+1),T=a.getX(x+2);i=Ae(this,b,e,n,o,l,d,R,M,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let p=Math.max(0,h.start),m=Math.min(a.count,h.start+h.count);for(let _=p,b=m;_<b;_+=3){let E=a.getX(_),C=a.getX(_+1),x=a.getX(_+2);i=Ae(this,s,e,n,o,l,d,E,C,x),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let p=0,m=f.length;p<m;p++){let _=f[p],b=s[_.materialIndex],E=Math.max(_.start,h.start),C=Math.min(c.count,Math.min(_.start+_.count,h.start+h.count));for(let x=E,v=C;x<v;x+=3){let R=x,M=x+1,T=x+2;i=Ae(this,b,e,n,o,l,d,R,M,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let p=Math.max(0,h.start),m=Math.min(c.count,h.start+h.count);for(let _=p,b=m;_<b;_+=3){let E=_,C=_+1,x=_+2;i=Ae(this,s,e,n,o,l,d,E,C,x),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function Dn(u,e,t,n,i,r,s,a){let c;if(e.side===on?c=n.intersectTriangle(s,r,i,!0,a):c=n.intersectTriangle(i,r,s,e.side===Ie,a),c===null)return null;we.copy(a),we.applyMatrix4(u.matrixWorld);let o=t.ray.origin.distanceTo(we);return o<t.near||o>t.far?null:{distance:o,point:we.clone(),object:u}}function Ae(u,e,t,n,i,r,s,a,c,o){u.getVertexPosition(a,Ee),u.getVertexPosition(c,Me),u.getVertexPosition(o,Se);let l=Dn(u,e,t,n,Ee,Me,Se,an);if(l){let d=new g;g0.getBarycoord(an,Ee,Me,Se,d),i&&(l.uv=g0.getInterpolatedAttribute(i,a,c,o,d,new L)),r&&(l.uv1=g0.getInterpolatedAttribute(r,a,c,o,d,new L)),s&&(l.normal=g0.getInterpolatedAttribute(s,a,c,o,d,new g),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let f={a,b:c,c:o,normal:new g,materialIndex:0};g0.getNormal(Ee,Me,Se,f.normal),l.face=f,l.barycoord=d}return l}function _n(u){let e={};for(let t in u){e[t]={};for(let n in u[t]){let i=u[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function V(u){let e={};for(let t=0;t<u.length;t++){let n=_n(u[t]);for(let i in n)e[i]=n[i]}return e}var H0=class extends c0{constructor(){super(),this.isGroup=!0,this.type="Group"}};var ne=class extends ee{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new I(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new I(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pn,this.normalScale=new L(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new S0,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Te(u,e){return!u||u.constructor===e?u:typeof e.BYTES_PER_ELEMENT=="number"?new e(u):Array.prototype.slice.call(u)}function Un(u){return ArrayBuffer.isView(u)&&!(u instanceof DataView)}var C0=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let s;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}s=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}s=n,n=0;break t}break n}for(;n<s;){let a=n+s>>>1;e<t[a]?s=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let s=0;s!==i;++s)t[s]=n[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ze=class extends C0{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Et,endingEnd:Et}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,s=e+1,a=i[r],c=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Mt:r=e,a=2*t-n;break;case St:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mt:s=e,c=2*n-t;break;case St:s=1,c=n+i[1]-i[0];break;default:s=e-1,c=t}let o=(n-t)*.5,l=this.valueSize;this._weightPrev=o/(t-a),this._weightNext=o/(c-n),this._offsetPrev=r*l,this._offsetNext=s*l}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,o=c-a,l=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(n-t)/(i-t),m=p*p,_=m*p,b=-f*_+2*f*m-f*p,E=(1+f)*_+(-1.5-2*f)*m+(-.5+f)*p+1,C=(-1-h)*_+(1.5+h)*m+.5*p,x=h*_-h*m;for(let v=0;v!==a;++v)r[v]=b*s[l+v]+E*s[o+v]+C*s[c+v]+x*s[d+v];return r}},Ve=class extends C0{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=e*a,o=c-a,l=(n-t)/(i-t),d=1-l;for(let f=0;f!==a;++f)r[f]=s[o+f]*d+s[c+f]*l;return r}},He=class extends C0{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},X=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Te(t,this.TimeBufferType),this.values=Te(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Te(e.times,Array),values:Te(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new He(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ve(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ze(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Q0:t=this.InterpolantFactoryMethodDiscrete;break;case Pe:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Q0;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,s=i-1;for(;r!==i&&n[r]<e;)++r;for(;s!==-1&&n[s]>t;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);let a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,s),e=!1;break}s=c}if(i!==void 0&&Un(i))for(let a=0,c=i.length;a!==c;++a){let o=i[a];if(isNaN(o)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Re,r=e.length-1,s=1;for(let a=1;a<r;++a){let c=!1,o=e[a],l=e[a+1];if(o!==l&&(a!==1||o!==e[0]))if(i)c=!0;else{let d=a*n,f=d-n,h=d+n;for(let p=0;p!==n;++p){let m=t[d+p];if(m!==t[f+p]||m!==t[h+p]){c=!0;break}}}if(c){if(a!==s){e[s]=e[a];let d=a*n,f=s*n;for(let h=0;h!==n;++h)t[f+h]=t[d+h]}++s}}if(r>0){e[s]=e[r];for(let a=r*n,c=s*n,o=0;o!==n;++o)t[c+o]=t[a+o];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};X.prototype.ValueTypeName="";X.prototype.TimeBufferType=Float32Array;X.prototype.ValueBufferType=Float32Array;X.prototype.DefaultInterpolation=Pe;var _0=class extends X{constructor(e,t,n){super(e,t,n)}};_0.prototype.ValueTypeName="bool";_0.prototype.ValueBufferType=Array;_0.prototype.DefaultInterpolation=Q0;_0.prototype.InterpolantFactoryMethodLinear=void 0;_0.prototype.InterpolantFactoryMethodSmooth=void 0;var Ge=class extends X{constructor(e,t,n,i){super(e,t,n,i)}};Ge.prototype.ValueTypeName="color";var We=class extends X{constructor(e,t,n,i){super(e,t,n,i)}};We.prototype.ValueTypeName="number";var Xe=class extends C0{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),o=e*a;for(let l=o+a;o!==l;o+=4)o0.slerpFlat(r,0,s,o-a,s,o,c);return r}},ie=class extends X{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Xe(this.times,this.values,this.getValueSize(),e)}};ie.prototype.ValueTypeName="quaternion";ie.prototype.InterpolantFactoryMethodSmooth=void 0;var b0=class extends X{constructor(e,t,n){super(e,t,n)}};b0.prototype.ValueTypeName="string";b0.prototype.ValueBufferType=Array;b0.prototype.DefaultInterpolation=Q0;b0.prototype.InterpolantFactoryMethodLinear=void 0;b0.prototype.InterpolantFactoryMethodSmooth=void 0;var qe=class extends X{constructor(e,t,n,i){super(e,t,n,i)}};qe.prototype.ValueTypeName="vector";var Ye=class{constructor(e,t,n){let i=this,r=!1,s=0,a=0,c,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,s,a),r=!0},this.itemEnd=function(l){s++,i.onProgress!==void 0&&i.onProgress(l,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return o.push(l,d),this},this.removeHandler=function(l){let d=o.indexOf(l);return d!==-1&&o.splice(d,2),this},this.getHandler=function(l){for(let d=0,f=o.length;d<f;d+=2){let h=o[d],p=o[d+1];if(h.global&&(h.lastIndex=0),h.test(l))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},bn=new Ye,Ze=class{constructor(e){this.manager=e!==void 0?e:bn,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ze.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ht="\\[\\]\\.:\\/",On=new RegExp("["+Ht+"]","g"),Gt="[^"+Ht+"]",kn="[^"+Ht.replace("\\.","")+"]",Bn=/((?:WC+[\/:])*)/.source.replace("WC",Gt),zn=/(WCOD+)?/.source.replace("WCOD",kn),Vn=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gt),Hn=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gt),Gn=new RegExp("^"+Bn+zn+Vn+Hn+"$"),Wn=["material","materials","bones","map"],Pt=class{constructor(e,t,n){let i=n||N.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},N=class u{constructor(e,t,n){this.path=t,this.parsedPath=n||u.parseTrackName(t),this.node=u.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new u.Composite(e,t,n):new u(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(On,"")}static parseTrackName(e){let t=Gn.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Wn.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let s=0;s<r.length;s++){let a=r[s];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=u.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let o=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===o){o=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(o!==void 0){if(e[o]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let s=e[i];if(s===void 0){let o=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+o+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};N.Composite=Pt;N.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};N.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};N.prototype.GetterByBindingType=[N.prototype._getValue_direct,N.prototype._getValue_array,N.prototype._getValue_arrayElement,N.prototype._getValue_toArray];N.prototype.SetterByBindingTypeAndVersioning=[[N.prototype._setValue_direct,N.prototype._setValue_direct_setNeedsUpdate,N.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[N.prototype._setValue_array,N.prototype._setValue_array_setNeedsUpdate,N.prototype._setValue_array_setMatrixWorldNeedsUpdate],[N.prototype._setValue_arrayElement,N.prototype._setValue_arrayElement_setNeedsUpdate,N.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[N.prototype._setValue_fromArray,N.prototype._setValue_fromArray_setNeedsUpdate,N.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var As=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");var Xn=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qn=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Yn=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zn=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jn=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$n=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kn=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qn=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jn=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ei=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ti=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ni=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ii=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ri=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,si=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ai=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oi=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ci=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,li=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,di=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fi=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hi=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ui=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pi=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mi=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gi=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_i=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bi=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yi=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xi=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vi="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ei=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mi=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Si=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ci=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wi=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ai=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ti=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ri=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ni=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ii=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pi=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fi=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Li=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Di=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ui=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Oi=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ki=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bi=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zi=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vi=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hi=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gi=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wi=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xi=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qi=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yi=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zi=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ji=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$i=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ki=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qi=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ji=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,er=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tr=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nr=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ir=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rr=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sr=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ar=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,or=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cr=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lr=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fr=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hr=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ur=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pr=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mr=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gr=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_r=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,br=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yr=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xr=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vr=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Er=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mr=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sr=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cr=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wr=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ar=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tr=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rr=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nr=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ir=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pr=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fr=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lr=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dr=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ur=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Or=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kr=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Br=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hr=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gr=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wr=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xr=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yr=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zr=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jr=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$r=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kr=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qr=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jr=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,es=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ts=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ns=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,is=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rs=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ss=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,as=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,os=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cs=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ls=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ds=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fs=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hs=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,us=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ps=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ms=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gs=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_s=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bs=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ys=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xs=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vs=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Es=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ms=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,w={alphahash_fragment:Xn,alphahash_pars_fragment:qn,alphamap_fragment:Yn,alphamap_pars_fragment:Zn,alphatest_fragment:Jn,alphatest_pars_fragment:$n,aomap_fragment:Kn,aomap_pars_fragment:Qn,batching_pars_vertex:jn,batching_vertex:ei,begin_vertex:ti,beginnormal_vertex:ni,bsdfs:ii,iridescence_fragment:ri,bumpmap_pars_fragment:si,clipping_planes_fragment:ai,clipping_planes_pars_fragment:oi,clipping_planes_pars_vertex:ci,clipping_planes_vertex:li,color_fragment:di,color_pars_fragment:fi,color_pars_vertex:hi,color_vertex:ui,common:pi,cube_uv_reflection_fragment:mi,defaultnormal_vertex:gi,displacementmap_pars_vertex:_i,displacementmap_vertex:bi,emissivemap_fragment:yi,emissivemap_pars_fragment:xi,colorspace_fragment:vi,colorspace_pars_fragment:Ei,envmap_fragment:Mi,envmap_common_pars_fragment:Si,envmap_pars_fragment:Ci,envmap_pars_vertex:wi,envmap_physical_pars_fragment:Oi,envmap_vertex:Ai,fog_vertex:Ti,fog_pars_vertex:Ri,fog_fragment:Ni,fog_pars_fragment:Ii,gradientmap_pars_fragment:Pi,lightmap_pars_fragment:Fi,lights_lambert_fragment:Li,lights_lambert_pars_fragment:Di,lights_pars_begin:Ui,lights_toon_fragment:ki,lights_toon_pars_fragment:Bi,lights_phong_fragment:zi,lights_phong_pars_fragment:Vi,lights_physical_fragment:Hi,lights_physical_pars_fragment:Gi,lights_fragment_begin:Wi,lights_fragment_maps:Xi,lights_fragment_end:qi,logdepthbuf_fragment:Yi,logdepthbuf_pars_fragment:Zi,logdepthbuf_pars_vertex:Ji,logdepthbuf_vertex:$i,map_fragment:Ki,map_pars_fragment:Qi,map_particle_fragment:ji,map_particle_pars_fragment:er,metalnessmap_fragment:tr,metalnessmap_pars_fragment:nr,morphinstance_vertex:ir,morphcolor_vertex:rr,morphnormal_vertex:sr,morphtarget_pars_vertex:ar,morphtarget_vertex:or,normal_fragment_begin:cr,normal_fragment_maps:lr,normal_pars_fragment:dr,normal_pars_vertex:fr,normal_vertex:hr,normalmap_pars_fragment:ur,clearcoat_normal_fragment_begin:pr,clearcoat_normal_fragment_maps:mr,clearcoat_pars_fragment:gr,iridescence_pars_fragment:_r,opaque_fragment:br,packing:yr,premultiplied_alpha_fragment:xr,project_vertex:vr,dithering_fragment:Er,dithering_pars_fragment:Mr,roughnessmap_fragment:Sr,roughnessmap_pars_fragment:Cr,shadowmap_pars_fragment:wr,shadowmap_pars_vertex:Ar,shadowmap_vertex:Tr,shadowmask_pars_fragment:Rr,skinbase_vertex:Nr,skinning_pars_vertex:Ir,skinning_vertex:Pr,skinnormal_vertex:Fr,specularmap_fragment:Lr,specularmap_pars_fragment:Dr,tonemapping_fragment:Ur,tonemapping_pars_fragment:Or,transmission_fragment:kr,transmission_pars_fragment:Br,uv_pars_fragment:zr,uv_pars_vertex:Vr,uv_vertex:Hr,worldpos_vertex:Gr,background_vert:Wr,background_frag:Xr,backgroundCube_vert:qr,backgroundCube_frag:Yr,cube_vert:Zr,cube_frag:Jr,depth_vert:$r,depth_frag:Kr,distanceRGBA_vert:Qr,distanceRGBA_frag:jr,equirect_vert:es,equirect_frag:ts,linedashed_vert:ns,linedashed_frag:is,meshbasic_vert:rs,meshbasic_frag:ss,meshlambert_vert:as,meshlambert_frag:os,meshmatcap_vert:cs,meshmatcap_frag:ls,meshnormal_vert:ds,meshnormal_frag:fs,meshphong_vert:hs,meshphong_frag:us,meshphysical_vert:ps,meshphysical_frag:ms,meshtoon_vert:gs,meshtoon_frag:_s,points_vert:bs,points_frag:ys,shadow_vert:xs,shadow_frag:vs,sprite_vert:Es,sprite_frag:Ms},y={common:{diffuse:{value:new I(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new S},alphaMap:{value:null},alphaMapTransform:{value:new S},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new S}},envmap:{envMap:{value:null},envMapRotation:{value:new S},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new S}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new S}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new S},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new S},normalScale:{value:new L(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new S},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new S}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new S}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new S}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new I(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new I(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new S},alphaTest:{value:0},uvTransform:{value:new S}},sprite:{diffuse:{value:new I(16777215)},opacity:{value:1},center:{value:new L(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new S},alphaMap:{value:null},alphaMapTransform:{value:new S},alphaTest:{value:0}}},yn={basic:{uniforms:V([y.common,y.specularmap,y.envmap,y.aomap,y.lightmap,y.fog]),vertexShader:w.meshbasic_vert,fragmentShader:w.meshbasic_frag},lambert:{uniforms:V([y.common,y.specularmap,y.envmap,y.aomap,y.lightmap,y.emissivemap,y.bumpmap,y.normalmap,y.displacementmap,y.fog,y.lights,{emissive:{value:new I(0)}}]),vertexShader:w.meshlambert_vert,fragmentShader:w.meshlambert_frag},phong:{uniforms:V([y.common,y.specularmap,y.envmap,y.aomap,y.lightmap,y.emissivemap,y.bumpmap,y.normalmap,y.displacementmap,y.fog,y.lights,{emissive:{value:new I(0)},specular:{value:new I(1118481)},shininess:{value:30}}]),vertexShader:w.meshphong_vert,fragmentShader:w.meshphong_frag},standard:{uniforms:V([y.common,y.envmap,y.aomap,y.lightmap,y.emissivemap,y.bumpmap,y.normalmap,y.displacementmap,y.roughnessmap,y.metalnessmap,y.fog,y.lights,{emissive:{value:new I(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:w.meshphysical_vert,fragmentShader:w.meshphysical_frag},toon:{uniforms:V([y.common,y.aomap,y.lightmap,y.emissivemap,y.bumpmap,y.normalmap,y.displacementmap,y.gradientmap,y.fog,y.lights,{emissive:{value:new I(0)}}]),vertexShader:w.meshtoon_vert,fragmentShader:w.meshtoon_frag},matcap:{uniforms:V([y.common,y.bumpmap,y.normalmap,y.displacementmap,y.fog,{matcap:{value:null}}]),vertexShader:w.meshmatcap_vert,fragmentShader:w.meshmatcap_frag},points:{uniforms:V([y.points,y.fog]),vertexShader:w.points_vert,fragmentShader:w.points_frag},dashed:{uniforms:V([y.common,y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:w.linedashed_vert,fragmentShader:w.linedashed_frag},depth:{uniforms:V([y.common,y.displacementmap]),vertexShader:w.depth_vert,fragmentShader:w.depth_frag},normal:{uniforms:V([y.common,y.bumpmap,y.normalmap,y.displacementmap,{opacity:{value:1}}]),vertexShader:w.meshnormal_vert,fragmentShader:w.meshnormal_frag},sprite:{uniforms:V([y.sprite,y.fog]),vertexShader:w.sprite_vert,fragmentShader:w.sprite_frag},background:{uniforms:{uvTransform:{value:new S},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:w.background_vert,fragmentShader:w.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new S}},vertexShader:w.backgroundCube_vert,fragmentShader:w.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:w.cube_vert,fragmentShader:w.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:w.equirect_vert,fragmentShader:w.equirect_frag},distanceRGBA:{uniforms:V([y.common,y.displacementmap,{referencePosition:{value:new g},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:w.distanceRGBA_vert,fragmentShader:w.distanceRGBA_frag},shadow:{uniforms:V([y.lights,y.fog,{color:{value:new I(0)},opacity:{value:1}}]),vertexShader:w.shadow_vert,fragmentShader:w.shadow_frag}};yn.physical={uniforms:V([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new S},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new S},clearcoatNormalScale:{value:new L(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new S},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new S},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new S},sheen:{value:0},sheenColor:{value:new I(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new S},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new S},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new S},transmissionSamplerSize:{value:new L},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new S},attenuationDistance:{value:0},attenuationColor:{value:new I(0)},specularColor:{value:new I(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new S},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new S},anisotropyVector:{value:new L},anisotropyMap:{value:null},anisotropyMapTransform:{value:new S}}]),vertexShader:w.meshphysical_vert,fragmentShader:w.meshphysical_frag};var w0=(1+Math.sqrt(5))/2,G0=1/w0,z3=[new g(-w0,G0,0),new g(w0,G0,0),new g(-G0,0,w0),new g(G0,0,w0),new g(0,w0,-G0),new g(0,w0,G0),new g(-1,1,-1),new g(1,1,-1),new g(-1,1,1),new g(1,1,1)];var V3=new Float32Array(16),H3=new Float32Array(9),G3=new Float32Array(4);var W3={[Ft]:Lt,[Dt]:kt,[Ut]:Bt,[K0]:Ot,[Lt]:Ft,[kt]:Dt,[Bt]:Ut,[Ot]:K0};var q3={minX:-15,maxX:27,minZ:-20,maxZ:40,width:42,depth:60},Wt={geometry:{b2e26a82463d46dc:[-21,-.08,30,-21,.08,30,-21,.08,-30,-21,-.08,30,-21,.08,-30,-21,-.08,-30,-21,-.08,-30,-21,.08,-30,21,.08,-30,-21,-.08,-30,21,.08,-30,21,-.08,-30,21,-.08,-30,21,.08,-30,21,.08,30,21,-.08,-30,21,.08,30,21,-.08,30,21,-.08,30,21,.08,30,-21,.08,30,21,-.08,30,-21,.08,30,-21,-.08,30,-21,-.08,-30,21,-.08,-30,21,-.08,30,-21,-.08,-30,21,-.08,30,-21,-.08,30,21,.08,-30,-21,.08,-30,-21,.08,30,21,.08,-30,-21,.08,30,21,.08,30],"0ec6f2af51ffe213":[-.08,-1.05,.08,-.08,1.05,.08,-.08,1.05,-.08,-.08,-1.05,.08,-.08,1.05,-.08,-.08,-1.05,-.08,-.08,-1.05,-.08,-.08,1.05,-.08,.08,1.05,-.08,-.08,-1.05,-.08,.08,1.05,-.08,.08,-1.05,-.08,.08,-1.05,-.08,.08,1.05,-.08,.08,1.05,.08,.08,-1.05,-.08,.08,1.05,.08,.08,-1.05,.08,.08,-1.05,.08,.08,1.05,.08,-.08,1.05,.08,.08,-1.05,.08,-.08,1.05,.08,-.08,-1.05,.08,-.08,-1.05,-.08,.08,-1.05,-.08,.08,-1.05,.08,-.08,-1.05,-.08,.08,-1.05,.08,-.08,-1.05,.08,.08,1.05,-.08,-.08,1.05,-.08,-.08,1.05,.08,.08,1.05,-.08,-.08,1.05,.08,.08,1.05,.08],"3adcbf525066a12e":[-21,-.06,.055,-21,.06,.055,-21,.06,-.055,-21,-.06,.055,-21,.06,-.055,-21,-.06,-.055,-21,-.06,-.055,-21,.06,-.055,21,.06,-.055,-21,-.06,-.055,21,.06,-.055,21,-.06,-.055,21,-.06,-.055,21,.06,-.055,21,.06,.055,21,-.06,-.055,21,.06,.055,21,-.06,.055,21,-.06,.055,21,.06,.055,-21,.06,.055,21,-.06,.055,-21,.06,.055,-21,-.06,.055,-21,-.06,-.055,21,-.06,-.055,21,-.06,.055,-21,-.06,-.055,21,-.06,.055,-21,-.06,.055,21,.06,-.055,-21,.06,-.055,-21,.06,.055,21,.06,-.055,-21,.06,.055,21,.06,.055],d6fd530d905cd732:[-21.08,-.06,.14,-21.08,.06,.14,-21.08,.06,-.14,-21.08,-.06,.14,-21.08,.06,-.14,-21.08,-.06,-.14,-21.08,-.06,-.14,-21.08,.06,-.14,21.08,.06,-.14,-21.08,-.06,-.14,21.08,.06,-.14,21.08,-.06,-.14,21.08,-.06,-.14,21.08,.06,-.14,21.08,.06,.14,21.08,-.06,-.14,21.08,.06,.14,21.08,-.06,.14,21.08,-.06,.14,21.08,.06,.14,-21.08,.06,.14,21.08,-.06,.14,-21.08,.06,.14,-21.08,-.06,.14,-21.08,-.06,-.14,21.08,-.06,-.14,21.08,-.06,.14,-21.08,-.06,-.14,21.08,-.06,.14,-21.08,-.06,.14,21.08,.06,-.14,-21.08,.06,-.14,-21.08,.06,.14,21.08,.06,-.14,-21.08,.06,.14,21.08,.06,.14],"01bf03c63ff8a57d":[-.0425,-.9,.0325,-.0425,.9,.0325,-.0425,.9,-.0325,-.0425,-.9,.0325,-.0425,.9,-.0325,-.0425,-.9,-.0325,-.0425,-.9,-.0325,-.0425,.9,-.0325,.0425,.9,-.0325,-.0425,-.9,-.0325,.0425,.9,-.0325,.0425,-.9,-.0325,.0425,-.9,-.0325,.0425,.9,-.0325,.0425,.9,.0325,.0425,-.9,-.0325,.0425,.9,.0325,.0425,-.9,.0325,.0425,-.9,.0325,.0425,.9,.0325,-.0425,.9,.0325,.0425,-.9,.0325,-.0425,.9,.0325,-.0425,-.9,.0325,-.0425,-.9,-.0325,.0425,-.9,-.0325,.0425,-.9,.0325,-.0425,-.9,-.0325,.0425,-.9,.0325,-.0425,-.9,.0325,.0425,.9,-.0325,-.0425,.9,-.0325,-.0425,.9,.0325,.0425,.9,-.0325,-.0425,.9,.0325,.0425,.9,.0325],"1cb4447cb81d1bb1":[-7.5,-.06,.055,-7.5,.06,.055,-7.5,.06,-.055,-7.5,-.06,.055,-7.5,.06,-.055,-7.5,-.06,-.055,-7.5,-.06,-.055,-7.5,.06,-.055,7.5,.06,-.055,-7.5,-.06,-.055,7.5,.06,-.055,7.5,-.06,-.055,7.5,-.06,-.055,7.5,.06,-.055,7.5,.06,.055,7.5,-.06,-.055,7.5,.06,.055,7.5,-.06,.055,7.5,-.06,.055,7.5,.06,.055,-7.5,.06,.055,7.5,-.06,.055,-7.5,.06,.055,-7.5,-.06,.055,-7.5,-.06,-.055,7.5,-.06,-.055,7.5,-.06,.055,-7.5,-.06,-.055,7.5,-.06,.055,-7.5,-.06,.055,7.5,.06,-.055,-7.5,.06,-.055,-7.5,.06,.055,7.5,.06,-.055,-7.5,.06,.055,7.5,.06,.055],"6faffb9b8dc3b59a":[-7.58,-.06,.14,-7.58,.06,.14,-7.58,.06,-.14,-7.58,-.06,.14,-7.58,.06,-.14,-7.58,-.06,-.14,-7.58,-.06,-.14,-7.58,.06,-.14,7.58,.06,-.14,-7.58,-.06,-.14,7.58,.06,-.14,7.58,-.06,-.14,7.58,-.06,-.14,7.58,.06,-.14,7.58,.06,.14,7.58,-.06,-.14,7.58,.06,.14,7.58,-.06,.14,7.58,-.06,.14,7.58,.06,.14,-7.58,.06,.14,7.58,-.06,.14,-7.58,.06,.14,-7.58,-.06,.14,-7.58,-.06,-.14,7.58,-.06,-.14,7.58,-.06,.14,-7.58,-.06,-.14,7.58,-.06,.14,-7.58,-.06,.14,7.58,.06,-.14,-7.58,.06,-.14,-7.58,.06,.14,7.58,.06,-.14,-7.58,.06,.14,7.58,.06,.14],"5620125b438321ed":[-21,-.015,2.5,-21,.015,2.5,-21,.015,-2.5,-21,-.015,2.5,-21,.015,-2.5,-21,-.015,-2.5,-21,-.015,-2.5,-21,.015,-2.5,21,.015,-2.5,-21,-.015,-2.5,21,.015,-2.5,21,-.015,-2.5,21,-.015,-2.5,21,.015,-2.5,21,.015,2.5,21,-.015,-2.5,21,.015,2.5,21,-.015,2.5,21,-.015,2.5,21,.015,2.5,-21,.015,2.5,21,-.015,2.5,-21,.015,2.5,-21,-.015,2.5,-21,-.015,-2.5,21,-.015,-2.5,21,-.015,2.5,-21,-.015,-2.5,21,-.015,2.5,-21,-.015,2.5,21,.015,-2.5,-21,.015,-2.5,-21,.015,2.5,21,.015,-2.5,-21,.015,2.5,21,.015,2.5],"51b7a58bf7522874":[-2.5,-.015,12.5,-2.5,.015,12.5,-2.5,.015,-12.5,-2.5,-.015,12.5,-2.5,.015,-12.5,-2.5,-.015,-12.5,-2.5,-.015,-12.5,-2.5,.015,-12.5,2.5,.015,-12.5,-2.5,-.015,-12.5,2.5,.015,-12.5,2.5,-.015,-12.5,2.5,-.015,-12.5,2.5,.015,-12.5,2.5,.015,12.5,2.5,-.015,-12.5,2.5,.015,12.5,2.5,-.015,12.5,2.5,-.015,12.5,2.5,.015,12.5,-2.5,.015,12.5,2.5,-.015,12.5,-2.5,.015,12.5,-2.5,-.015,12.5,-2.5,-.015,-12.5,2.5,-.015,-12.5,2.5,-.015,12.5,-2.5,-.015,-12.5,2.5,-.015,12.5,-2.5,-.015,12.5,2.5,.015,-12.5,-2.5,.015,-12.5,-2.5,.015,12.5,2.5,.015,-12.5,-2.5,.015,12.5,2.5,.015,12.5],c56017441cd4c3f9:[-21,-.025,5,-21,.025,5,-21,.025,-5,-21,-.025,5,-21,.025,-5,-21,-.025,-5,-21,-.025,-5,-21,.025,-5,21,.025,-5,-21,-.025,-5,21,.025,-5,21,-.025,-5,21,-.025,-5,21,.025,-5,21,.025,5,21,-.025,-5,21,.025,5,21,-.025,5,21,-.025,5,21,.025,5,-21,.025,5,21,-.025,5,-21,.025,5,-21,-.025,5,-21,-.025,-5,21,-.025,-5,21,-.025,5,-21,-.025,-5,21,-.025,5,-21,-.025,5,21,.025,-5,-21,.025,-5,-21,.025,5,21,.025,-5,-21,.025,5,21,.025,5],"830268f41e2746da":[-11,-.025,7.5,-11,.025,7.5,-11,.025,-7.5,-11,-.025,7.5,-11,.025,-7.5,-11,-.025,-7.5,-11,-.025,-7.5,-11,.025,-7.5,11,.025,-7.5,-11,-.025,-7.5,11,.025,-7.5,11,-.025,-7.5,11,-.025,-7.5,11,.025,-7.5,11,.025,7.5,11,-.025,-7.5,11,.025,7.5,11,-.025,7.5,11,-.025,7.5,11,.025,7.5,-11,.025,7.5,11,-.025,7.5,-11,.025,7.5,-11,-.025,7.5,-11,-.025,-7.5,11,-.025,-7.5,11,-.025,7.5,-11,-.025,-7.5,11,-.025,7.5,-11,-.025,7.5,11,.025,-7.5,-11,.025,-7.5,-11,.025,7.5,11,.025,-7.5,-11,.025,7.5,11,.025,7.5],"15bd7b23d8c45c93":[-2.5,-.025,12.5,-2.5,.025,12.5,-2.5,.025,-12.5,-2.5,-.025,12.5,-2.5,.025,-12.5,-2.5,-.025,-12.5,-2.5,-.025,-12.5,-2.5,.025,-12.5,2.5,.025,-12.5,-2.5,-.025,-12.5,2.5,.025,-12.5,2.5,-.025,-12.5,2.5,-.025,-12.5,2.5,.025,-12.5,2.5,.025,12.5,2.5,-.025,-12.5,2.5,.025,12.5,2.5,-.025,12.5,2.5,-.025,12.5,2.5,.025,12.5,-2.5,.025,12.5,2.5,-.025,12.5,-2.5,.025,12.5,-2.5,-.025,12.5,-2.5,-.025,-12.5,2.5,-.025,-12.5,2.5,-.025,12.5,-2.5,-.025,-12.5,2.5,-.025,12.5,-2.5,-.025,12.5,2.5,.025,-12.5,-2.5,.025,-12.5,-2.5,.025,12.5,2.5,.025,-12.5,-2.5,.025,12.5,2.5,.025,12.5],"9bc870ae8004fd8f":[-6,-.025,7.5,-6,.025,7.5,-6,.025,-7.5,-6,-.025,7.5,-6,.025,-7.5,-6,-.025,-7.5,-6,-.025,-7.5,-6,.025,-7.5,6,.025,-7.5,-6,-.025,-7.5,6,.025,-7.5,6,-.025,-7.5,6,-.025,-7.5,6,.025,-7.5,6,.025,7.5,6,-.025,-7.5,6,.025,7.5,6,-.025,7.5,6,-.025,7.5,6,.025,7.5,-6,.025,7.5,6,-.025,7.5,-6,.025,7.5,-6,-.025,7.5,-6,-.025,-7.5,6,-.025,-7.5,6,-.025,7.5,-6,-.025,-7.5,6,-.025,7.5,-6,-.025,7.5,6,.025,-7.5,-6,.025,-7.5,-6,.025,7.5,6,.025,-7.5,-6,.025,7.5,6,.025,7.5],a2162646c6d4b889:[-5,-.025,7.5,-5,.025,7.5,-5,.025,-7.5,-5,-.025,7.5,-5,.025,-7.5,-5,-.025,-7.5,-5,-.025,-7.5,-5,.025,-7.5,5,.025,-7.5,-5,-.025,-7.5,5,.025,-7.5,5,-.025,-7.5,5,-.025,-7.5,5,.025,-7.5,5,.025,7.5,5,-.025,-7.5,5,.025,7.5,5,-.025,7.5,5,-.025,7.5,5,.025,7.5,-5,.025,7.5,5,-.025,7.5,-5,.025,7.5,-5,-.025,7.5,-5,-.025,-7.5,5,-.025,-7.5,5,-.025,7.5,-5,-.025,-7.5,5,-.025,7.5,-5,-.025,7.5,5,.025,-7.5,-5,.025,-7.5,-5,.025,7.5,5,.025,-7.5,-5,.025,7.5,5,.025,7.5],"935bcc8c2acdc33b":[-5,-.03,2.5,-5,.03,2.5,-5,.03,-2.5,-5,-.03,2.5,-5,.03,-2.5,-5,-.03,-2.5,-5,-.03,-2.5,-5,.03,-2.5,5,.03,-2.5,-5,-.03,-2.5,5,.03,-2.5,5,-.03,-2.5,5,-.03,-2.5,5,.03,-2.5,5,.03,2.5,5,-.03,-2.5,5,.03,2.5,5,-.03,2.5,5,-.03,2.5,5,.03,2.5,-5,.03,2.5,5,-.03,2.5,-5,.03,2.5,-5,-.03,2.5,-5,-.03,-2.5,5,-.03,-2.5,5,-.03,2.5,-5,-.03,-2.5,5,-.03,2.5,-5,-.03,2.5,5,.03,-2.5,-5,.03,-2.5,-5,.03,2.5,5,.03,-2.5,-5,.03,2.5,5,.03,2.5],"8ee565191a5c7083":[-5,-.025,4.5,-5,.025,4.5,-5,.025,-4.5,-5,-.025,4.5,-5,.025,-4.5,-5,-.025,-4.5,-5,-.025,-4.5,-5,.025,-4.5,5,.025,-4.5,-5,-.025,-4.5,5,.025,-4.5,5,-.025,-4.5,5,-.025,-4.5,5,.025,-4.5,5,.025,4.5,5,-.025,-4.5,5,.025,4.5,5,-.025,4.5,5,-.025,4.5,5,.025,4.5,-5,.025,4.5,5,-.025,4.5,-5,.025,4.5,-5,-.025,4.5,-5,-.025,-4.5,5,-.025,-4.5,5,-.025,4.5,-5,-.025,-4.5,5,-.025,4.5,-5,-.025,4.5,5,.025,-4.5,-5,.025,-4.5,-5,.025,4.5,5,.025,-4.5,-5,.025,4.5,5,.025,4.5],f78b4168f614d06c:[-21,-.1,.5,-21,.1,.5,-21,.1,-.5,-21,-.1,.5,-21,.1,-.5,-21,-.1,-.5,-21,-.1,-.5,-21,.1,-.5,21,.1,-.5,-21,-.1,-.5,21,.1,-.5,21,-.1,-.5,21,-.1,-.5,21,.1,-.5,21,.1,.5,21,-.1,-.5,21,.1,.5,21,-.1,.5,21,-.1,.5,21,.1,.5,-21,.1,.5,21,-.1,.5,-21,.1,.5,-21,-.1,.5,-21,-.1,-.5,21,-.1,-.5,21,-.1,.5,-21,-.1,-.5,21,-.1,.5,-21,-.1,.5,21,.1,-.5,-21,.1,-.5,-21,.1,.5,21,.1,-.5,-21,.1,.5,21,.1,.5],"01ab01eb56c2bce0":[-15,-.03,11.5,-15,.03,11.5,-15,.03,-11.5,-15,-.03,11.5,-15,.03,-11.5,-15,-.03,-11.5,-15,-.03,-11.5,-15,.03,-11.5,15,.03,-11.5,-15,-.03,-11.5,15,.03,-11.5,15,-.03,-11.5,15,-.03,-11.5,15,.03,-11.5,15,.03,11.5,15,-.03,-11.5,15,.03,11.5,15,-.03,11.5,15,-.03,11.5,15,.03,11.5,-15,.03,11.5,15,-.03,11.5,-15,.03,11.5,-15,-.03,11.5,-15,-.03,-11.5,15,-.03,-11.5,15,-.03,11.5,-15,-.03,-11.5,15,-.03,11.5,-15,-.03,11.5,15,.03,-11.5,-15,.03,-11.5,-15,.03,11.5,15,.03,-11.5,-15,.03,11.5,15,.03,11.5],"0158304ea582f055":[-16,-.04,.5,-16,.04,.5,-16,.04,-.5,-16,-.04,.5,-16,.04,-.5,-16,-.04,-.5,-16,-.04,-.5,-16,.04,-.5,16,.04,-.5,-16,-.04,-.5,16,.04,-.5,16,-.04,-.5,16,-.04,-.5,16,.04,-.5,16,.04,.5,16,-.04,-.5,16,.04,.5,16,-.04,.5,16,-.04,.5,16,.04,.5,-16,.04,.5,16,-.04,.5,-16,.04,.5,-16,-.04,.5,-16,-.04,-.5,16,-.04,-.5,16,-.04,.5,-16,-.04,-.5,16,-.04,.5,-16,-.04,.5,16,.04,-.5,-16,.04,-.5,-16,.04,.5,16,.04,-.5,-16,.04,.5,16,.04,.5],"008b9f4e808dd629":[-.5,-.04,11.5,-.5,.04,11.5,-.5,.04,-11.5,-.5,-.04,11.5,-.5,.04,-11.5,-.5,-.04,-11.5,-.5,-.04,-11.5,-.5,.04,-11.5,.5,.04,-11.5,-.5,-.04,-11.5,.5,.04,-11.5,.5,-.04,-11.5,.5,-.04,-11.5,.5,.04,-11.5,.5,.04,11.5,.5,-.04,-11.5,.5,.04,11.5,.5,-.04,11.5,.5,-.04,11.5,.5,.04,11.5,-.5,.04,11.5,.5,-.04,11.5,-.5,.04,11.5,-.5,-.04,11.5,-.5,-.04,-11.5,.5,-.04,-11.5,.5,-.04,11.5,-.5,-.04,-11.5,.5,-.04,11.5,-.5,-.04,11.5,.5,.04,-11.5,-.5,.04,-11.5,-.5,.04,11.5,.5,.04,-11.5,-.5,.04,11.5,.5,.04,11.5],acb433d760dc00e9:[-16,-.035,.035,-16,.035,.035,-16,.035,-.035,-16,-.035,.035,-16,.035,-.035,-16,-.035,-.035,-16,-.035,-.035,-16,.035,-.035,16,.035,-.035,-16,-.035,-.035,16,.035,-.035,16,-.035,-.035,16,-.035,-.035,16,.035,-.035,16,.035,.035,16,-.035,-.035,16,.035,.035,16,-.035,.035,16,-.035,.035,16,.035,.035,-16,.035,.035,16,-.035,.035,-16,.035,.035,-16,-.035,.035,-16,-.035,-.035,16,-.035,-.035,16,-.035,.035,-16,-.035,-.035,16,-.035,.035,-16,-.035,.035,16,.035,-.035,-16,.035,-.035,-16,.035,.035,16,.035,-.035,-16,.035,.035,16,.035,.035],"74f04dd951d0e6c1":[-.0225,-.9,.0225,-.0225,.9,.0225,-.0225,.9,-.0225,-.0225,-.9,.0225,-.0225,.9,-.0225,-.0225,-.9,-.0225,-.0225,-.9,-.0225,-.0225,.9,-.0225,.0225,.9,-.0225,-.0225,-.9,-.0225,.0225,.9,-.0225,.0225,-.9,-.0225,.0225,-.9,-.0225,.0225,.9,-.0225,.0225,.9,.0225,.0225,-.9,-.0225,.0225,.9,.0225,.0225,-.9,.0225,.0225,-.9,.0225,.0225,.9,.0225,-.0225,.9,.0225,.0225,-.9,.0225,-.0225,.9,.0225,-.0225,-.9,.0225,-.0225,-.9,-.0225,.0225,-.9,-.0225,.0225,-.9,.0225,-.0225,-.9,-.0225,.0225,-.9,.0225,-.0225,-.9,.0225,.0225,.9,-.0225,-.0225,.9,-.0225,-.0225,.9,.0225,.0225,.9,-.0225,-.0225,.9,.0225,.0225,.9,.0225],"46aac644311cccf5":[-.06,-.95,.06,-.06,.95,.06,-.06,.95,-.06,-.06,-.95,.06,-.06,.95,-.06,-.06,-.95,-.06,-.06,-.95,-.06,-.06,.95,-.06,.06,.95,-.06,-.06,-.95,-.06,.06,.95,-.06,.06,-.95,-.06,.06,-.95,-.06,.06,.95,-.06,.06,.95,.06,.06,-.95,-.06,.06,.95,.06,.06,-.95,.06,.06,-.95,.06,.06,.95,.06,-.06,.95,.06,.06,-.95,.06,-.06,.95,.06,-.06,-.95,.06,-.06,-.95,-.06,.06,-.95,-.06,.06,-.95,.06,-.06,-.95,-.06,.06,-.95,.06,-.06,-.95,.06,.06,.95,-.06,-.06,.95,-.06,-.06,.95,.06,.06,.95,-.06,-.06,.95,.06,.06,.95,.06],f876ece7c13ce937:[-12.5,-.035,.035,-12.5,.035,.035,-12.5,.035,-.035,-12.5,-.035,.035,-12.5,.035,-.035,-12.5,-.035,-.035,-12.5,-.035,-.035,-12.5,.035,-.035,12.5,.035,-.035,-12.5,-.035,-.035,12.5,.035,-.035,12.5,-.035,-.035,12.5,-.035,-.035,12.5,.035,-.035,12.5,.035,.035,12.5,-.035,-.035,12.5,.035,.035,12.5,-.035,.035,12.5,-.035,.035,12.5,.035,.035,-12.5,.035,.035,12.5,-.035,.035,-12.5,.035,.035,-12.5,-.035,.035,-12.5,-.035,-.035,12.5,-.035,-.035,12.5,-.035,.035,-12.5,-.035,-.035,12.5,-.035,.035,-12.5,-.035,.035,12.5,.035,-.035,-12.5,.035,-.035,-12.5,.035,.035,12.5,.035,-.035,-12.5,.035,.035,12.5,.035,.035],c29df6256dab9012:[-7,-.035,.035,-7,.035,.035,-7,.035,-.035,-7,-.035,.035,-7,.035,-.035,-7,-.035,-.035,-7,-.035,-.035,-7,.035,-.035,7,.035,-.035,-7,-.035,-.035,7,.035,-.035,7,-.035,-.035,7,-.035,-.035,7,.035,-.035,7,.035,.035,7,-.035,-.035,7,.035,.035,7,-.035,.035,7,-.035,.035,7,.035,.035,-7,.035,.035,7,-.035,.035,-7,.035,.035,-7,-.035,.035,-7,-.035,-.035,7,-.035,-.035,7,-.035,.035,-7,-.035,-.035,7,-.035,.035,-7,-.035,.035,7,.035,-.035,-7,.035,-.035,-7,.035,.035,7,.035,-.035,-7,.035,.035,7,.035,.035],"6091c97a62d841b6":[-1,-.035,.035,-1,.035,.035,-1,.035,-.035,-1,-.035,.035,-1,.035,-.035,-1,-.035,-.035,-1,-.035,-.035,-1,.035,-.035,1,.035,-.035,-1,-.035,-.035,1,.035,-.035,1,-.035,-.035,1,-.035,-.035,1,.035,-.035,1,.035,.035,1,-.035,-.035,1,.035,.035,1,-.035,.035,1,-.035,.035,1,.035,.035,-1,.035,.035,1,-.035,.035,-1,.035,.035,-1,-.035,.035,-1,-.035,-.035,1,-.035,-.035,1,-.035,.035,-1,-.035,-.035,1,-.035,.035,-1,-.035,.035,1,.035,-.035,-1,.035,-.035,-1,.035,.035,1,.035,-.035,-1,.035,.035,1,.035,.035],d5f5ef0cb79964a1:[-.025,-.9,.025,-.025,.9,.025,-.025,.9,-.025,-.025,-.9,.025,-.025,.9,-.025,-.025,-.9,-.025,-.025,-.9,-.025,-.025,.9,-.025,.025,.9,-.025,-.025,-.9,-.025,.025,.9,-.025,.025,-.9,-.025,.025,-.9,-.025,.025,.9,-.025,.025,.9,.025,.025,-.9,-.025,.025,.9,.025,.025,-.9,.025,.025,-.9,.025,.025,.9,.025,-.025,.9,.025,.025,-.9,.025,-.025,.9,.025,-.025,-.9,.025,-.025,-.9,-.025,.025,-.9,-.025,.025,-.9,.025,-.025,-.9,-.025,.025,-.9,.025,-.025,-.9,.025,.025,.9,-.025,-.025,.9,-.025,-.025,.9,.025,.025,.9,-.025,-.025,.9,.025,.025,.9,.025],"5ec5fc03e05c58a4":[-5,-.06,2.5,-5,.06,2.5,-5,.06,-2.5,-5,-.06,2.5,-5,.06,-2.5,-5,-.06,-2.5,-5,-.06,-2.5,-5,.06,-2.5,5,.06,-2.5,-5,-.06,-2.5,5,.06,-2.5,5,-.06,-2.5,5,-.06,-2.5,5,.06,-2.5,5,.06,2.5,5,-.06,-2.5,5,.06,2.5,5,-.06,2.5,5,-.06,2.5,5,.06,2.5,-5,.06,2.5,5,-.06,2.5,-5,.06,2.5,-5,-.06,2.5,-5,-.06,-2.5,5,-.06,-2.5,5,-.06,2.5,-5,-.06,-2.5,5,-.06,2.5,-5,-.06,2.5,5,.06,-2.5,-5,.06,-2.5,-5,.06,2.5,5,.06,-2.5,-5,.06,2.5,5,.06,2.5],ccac6e08eb479d47:[-5,-.4,.12,-5,.4,.12,-5,.4,-.12,-5,-.4,.12,-5,.4,-.12,-5,-.4,-.12,-5,-.4,-.12,-5,.4,-.12,5,.4,-.12,-5,-.4,-.12,5,.4,-.12,5,-.4,-.12,5,-.4,-.12,5,.4,-.12,5,.4,.12,5,-.4,-.12,5,.4,.12,5,-.4,.12,5,-.4,.12,5,.4,.12,-5,.4,.12,5,-.4,.12,-5,.4,.12,-5,-.4,.12,-5,-.4,-.12,5,-.4,-.12,5,-.4,.12,-5,-.4,-.12,5,-.4,.12,-5,-.4,.12,5,.4,-.12,-5,.4,-.12,-5,.4,.12,5,.4,-.12,-5,.4,.12,5,.4,.12],"9e624451b02111eb":[-.12,-.4,2.5,-.12,.4,2.5,-.12,.4,-2.5,-.12,-.4,2.5,-.12,.4,-2.5,-.12,-.4,-2.5,-.12,-.4,-2.5,-.12,.4,-2.5,.12,.4,-2.5,-.12,-.4,-2.5,.12,.4,-2.5,.12,-.4,-2.5,.12,-.4,-2.5,.12,.4,-2.5,.12,.4,2.5,.12,-.4,-2.5,.12,.4,2.5,.12,-.4,2.5,.12,-.4,2.5,.12,.4,2.5,-.12,.4,2.5,.12,-.4,2.5,-.12,.4,2.5,-.12,-.4,2.5,-.12,-.4,-2.5,.12,-.4,-2.5,.12,-.4,2.5,-.12,-.4,-2.5,.12,-.4,2.5,-.12,-.4,2.5,.12,.4,-2.5,-.12,.4,-2.5,-.12,.4,2.5,.12,.4,-2.5,-.12,.4,2.5,.12,.4,2.5],bfe739b9d15e1913:[-1.5,-.4,.12,-1.5,.4,.12,-1.5,.4,-.12,-1.5,-.4,.12,-1.5,.4,-.12,-1.5,-.4,-.12,-1.5,-.4,-.12,-1.5,.4,-.12,1.5,.4,-.12,-1.5,-.4,-.12,1.5,.4,-.12,1.5,-.4,-.12,1.5,-.4,-.12,1.5,.4,-.12,1.5,.4,.12,1.5,-.4,-.12,1.5,.4,.12,1.5,-.4,.12,1.5,-.4,.12,1.5,.4,.12,-1.5,.4,.12,1.5,-.4,.12,-1.5,.4,.12,-1.5,-.4,.12,-1.5,-.4,-.12,1.5,-.4,-.12,1.5,-.4,.12,-1.5,-.4,-.12,1.5,-.4,.12,-1.5,-.4,.12,1.5,.4,-.12,-1.5,.4,-.12,-1.5,.4,.12,1.5,.4,-.12,-1.5,.4,.12,1.5,.4,.12],d3a486fdaca231ef:[-2,-.13,.12,-2,.13,.12,-2,.13,-.12,-2,-.13,.12,-2,.13,-.12,-2,-.13,-.12,-2,-.13,-.12,-2,.13,-.12,2,.13,-.12,-2,-.13,-.12,2,.13,-.12,2,-.13,-.12,2,-.13,-.12,2,.13,-.12,2,.13,.12,2,-.13,-.12,2,.13,.12,2,-.13,.12,2,-.13,.12,2,.13,.12,-2,.13,.12,2,-.13,.12,-2,.13,.12,-2,-.13,.12,-2,-.13,-.12,2,-.13,-.12,2,-.13,.12,-2,-.13,-.12,2,-.13,.12,-2,-.13,.12,2,.13,-.12,-2,.13,-.12,-2,.13,.12,2,.13,-.12,-2,.13,.12,2,.13,.12],"2813128562657c98":[-1.975,-.275,.05,-1.975,.275,.05,-1.975,.275,-.05,-1.975,-.275,.05,-1.975,.275,-.05,-1.975,-.275,-.05,-1.975,-.275,-.05,-1.975,.275,-.05,1.975,.275,-.05,-1.975,-.275,-.05,1.975,.275,-.05,1.975,-.275,-.05,1.975,-.275,-.05,1.975,.275,-.05,1.975,.275,.05,1.975,-.275,-.05,1.975,.275,.05,1.975,-.275,.05,1.975,-.275,.05,1.975,.275,.05,-1.975,.275,.05,1.975,-.275,.05,-1.975,.275,.05,-1.975,-.275,.05,-1.975,-.275,-.05,1.975,-.275,-.05,1.975,-.275,.05,-1.975,-.275,-.05,1.975,-.275,.05,-1.975,-.275,.05,1.975,.275,-.05,-1.975,.275,-.05,-1.975,.275,.05,1.975,.275,-.05,-1.975,.275,.05,1.975,.275,.05],"998cc618bdd85eed":[-4.75,-.025,2.25,-4.75,.025,2.25,-4.75,.025,-2.25,-4.75,-.025,2.25,-4.75,.025,-2.25,-4.75,-.025,-2.25,-4.75,-.025,-2.25,-4.75,.025,-2.25,4.75,.025,-2.25,-4.75,-.025,-2.25,4.75,.025,-2.25,4.75,-.025,-2.25,4.75,-.025,-2.25,4.75,.025,-2.25,4.75,.025,2.25,4.75,-.025,-2.25,4.75,.025,2.25,4.75,-.025,2.25,4.75,-.025,2.25,4.75,.025,2.25,-4.75,.025,2.25,4.75,-.025,2.25,-4.75,.025,2.25,-4.75,-.025,2.25,-4.75,-.025,-2.25,4.75,-.025,-2.25,4.75,-.025,2.25,-4.75,-.025,-2.25,4.75,-.025,2.25,-4.75,-.025,2.25,4.75,.025,-2.25,-4.75,.025,-2.25,-4.75,.025,2.25,4.75,.025,-2.25,-4.75,.025,2.25,4.75,.025,2.25],"94de8a2613ed20d1":[-5.1,-.06,.22,-5.1,.06,.22,-5.1,.06,-.22,-5.1,-.06,.22,-5.1,.06,-.22,-5.1,-.06,-.22,-5.1,-.06,-.22,-5.1,.06,-.22,5.1,.06,-.22,-5.1,-.06,-.22,5.1,.06,-.22,5.1,-.06,-.22,5.1,-.06,-.22,5.1,.06,-.22,5.1,.06,.22,5.1,-.06,-.22,5.1,.06,.22,5.1,-.06,.22,5.1,-.06,.22,5.1,.06,.22,-5.1,.06,.22,5.1,-.06,.22,-5.1,.06,.22,-5.1,-.06,.22,-5.1,-.06,-.22,5.1,-.06,-.22,5.1,-.06,.22,-5.1,-.06,-.22,5.1,-.06,.22,-5.1,-.06,.22,5.1,.06,-.22,-5.1,.06,-.22,-5.1,.06,.22,5.1,.06,-.22,-5.1,.06,.22,5.1,.06,.22],"9234bdeaaa226ea1":[-.22,-.06,2.5,-.22,.06,2.5,-.22,.06,-2.5,-.22,-.06,2.5,-.22,.06,-2.5,-.22,-.06,-2.5,-.22,-.06,-2.5,-.22,.06,-2.5,.22,.06,-2.5,-.22,-.06,-2.5,.22,.06,-2.5,.22,-.06,-2.5,.22,-.06,-2.5,.22,.06,-2.5,.22,.06,2.5,.22,-.06,-2.5,.22,.06,2.5,.22,-.06,2.5,.22,-.06,2.5,.22,.06,2.5,-.22,.06,2.5,.22,-.06,2.5,-.22,.06,2.5,-.22,-.06,2.5,-.22,-.06,-2.5,.22,-.06,-2.5,.22,-.06,2.5,-.22,-.06,-2.5,.22,-.06,2.5,-.22,-.06,2.5,.22,.06,-2.5,-.22,.06,-2.5,-.22,.06,2.5,.22,.06,-2.5,-.22,.06,2.5,.22,.06,2.5],"5f86847d0a1b0e34":[-1.5,-.06,.22,-1.5,.06,.22,-1.5,.06,-.22,-1.5,-.06,.22,-1.5,.06,-.22,-1.5,-.06,-.22,-1.5,-.06,-.22,-1.5,.06,-.22,1.5,.06,-.22,-1.5,-.06,-.22,1.5,.06,-.22,1.5,-.06,-.22,1.5,-.06,-.22,1.5,.06,-.22,1.5,.06,.22,1.5,-.06,-.22,1.5,.06,.22,1.5,-.06,.22,1.5,-.06,.22,1.5,.06,.22,-1.5,.06,.22,1.5,-.06,.22,-1.5,.06,.22,-1.5,-.06,.22,-1.5,-.06,-.22,1.5,-.06,-.22,1.5,-.06,.22,-1.5,-.06,-.22,1.5,-.06,.22,-1.5,-.06,.22,1.5,.06,-.22,-1.5,.06,-.22,-1.5,.06,.22,1.5,.06,-.22,-1.5,.06,.22,1.5,.06,.22],"387bc3542a8e12b3":[-.75,-.275,.55,-.75,.275,.55,-.75,.275,-.55,-.75,-.275,.55,-.75,.275,-.55,-.75,-.275,-.55,-.75,-.275,-.55,-.75,.275,-.55,.75,.275,-.55,-.75,-.275,-.55,.75,.275,-.55,.75,-.275,-.55,.75,-.275,-.55,.75,.275,-.55,.75,.275,.55,.75,-.275,-.55,.75,.275,.55,.75,-.275,.55,.75,-.275,.55,.75,.275,.55,-.75,.275,.55,.75,-.275,.55,-.75,.275,.55,-.75,-.275,.55,-.75,-.275,-.55,.75,-.275,-.55,.75,-.275,.55,-.75,-.275,-.55,.75,-.275,.55,-.75,-.275,.55,.75,.275,-.55,-.75,.275,-.55,-.75,.275,.55,.75,.275,-.55,-.75,.275,.55,.75,.275,.55],"3afe110e4d7dbafd":[-.55,-.225,.4,-.55,.225,.4,-.55,.225,-.4,-.55,-.225,.4,-.55,.225,-.4,-.55,-.225,-.4,-.55,-.225,-.4,-.55,.225,-.4,.55,.225,-.4,-.55,-.225,-.4,.55,.225,-.4,.55,-.225,-.4,.55,-.225,-.4,.55,.225,-.4,.55,.225,.4,.55,-.225,-.4,.55,.225,.4,.55,-.225,.4,.55,-.225,.4,.55,.225,.4,-.55,.225,.4,.55,-.225,.4,-.55,.225,.4,-.55,-.225,.4,-.55,-.225,-.4,.55,-.225,-.4,.55,-.225,.4,-.55,-.225,-.4,.55,-.225,.4,-.55,-.225,.4,.55,.225,-.4,-.55,.225,-.4,-.55,.225,.4,.55,.225,-.4,-.55,.225,.4,.55,.225,.4],"29a25cba58bbb5d5":[-.375,-.14,.3,-.375,.14,.3,-.375,.14,-.3,-.375,-.14,.3,-.375,.14,-.3,-.375,-.14,-.3,-.375,-.14,-.3,-.375,.14,-.3,.375,.14,-.3,-.375,-.14,-.3,.375,.14,-.3,.375,-.14,-.3,.375,-.14,-.3,.375,.14,-.3,.375,.14,.3,.375,-.14,-.3,.375,.14,.3,.375,-.14,.3,.375,-.14,.3,.375,.14,.3,-.375,.14,.3,.375,-.14,.3,-.375,.14,.3,-.375,-.14,.3,-.375,-.14,-.3,.375,-.14,-.3,.375,-.14,.3,-.375,-.14,-.3,.375,-.14,.3,-.375,-.14,.3,.375,.14,-.3,-.375,.14,-.3,-.375,.14,.3,.375,.14,-.3,-.375,.14,.3,.375,.14,.3],"63d83ec045145fb5":[-.275,-.425,.04,-.275,.425,.04,-.275,.425,-.04,-.275,-.425,.04,-.275,.425,-.04,-.275,-.425,-.04,-.275,-.425,-.04,-.275,.425,-.04,.275,.425,-.04,-.275,-.425,-.04,.275,.425,-.04,.275,-.425,-.04,.275,-.425,-.04,.275,.425,-.04,.275,.425,.04,.275,-.425,-.04,.275,.425,.04,.275,-.425,.04,.275,-.425,.04,.275,.425,.04,-.275,.425,.04,.275,-.425,.04,-.275,.425,.04,-.275,-.425,.04,-.275,-.425,-.04,.275,-.425,-.04,.275,-.425,.04,-.275,-.425,-.04,.275,-.425,.04,-.275,-.425,.04,.275,.425,-.04,-.275,.425,-.04,-.275,.425,.04,.275,.425,-.04,-.275,.425,.04,.275,.425,.04],"918fccc55c9edb36":[-.11,-1.5,.11,-.11,1.5,.11,-.11,1.5,-.11,-.11,-1.5,.11,-.11,1.5,-.11,-.11,-1.5,-.11,-.11,-1.5,-.11,-.11,1.5,-.11,.11,1.5,-.11,-.11,-1.5,-.11,.11,1.5,-.11,.11,-1.5,-.11,.11,-1.5,-.11,.11,1.5,-.11,.11,1.5,.11,.11,-1.5,-.11,.11,1.5,.11,.11,-1.5,.11,.11,-1.5,.11,.11,1.5,.11,-.11,1.5,.11,.11,-1.5,.11,-.11,1.5,.11,-.11,-1.5,.11,-.11,-1.5,-.11,.11,-1.5,-.11,.11,-1.5,.11,-.11,-1.5,-.11,.11,-1.5,.11,-.11,-1.5,.11,.11,1.5,-.11,-.11,1.5,-.11,-.11,1.5,.11,.11,1.5,-.11,-.11,1.5,.11,.11,1.5,.11],"2fe9e1a3cfbdfce5":[-.19,-.12,.19,-.19,.12,.19,-.19,.12,-.19,-.19,-.12,.19,-.19,.12,-.19,-.19,-.12,-.19,-.19,-.12,-.19,-.19,.12,-.19,.19,.12,-.19,-.19,-.12,-.19,.19,.12,-.19,.19,-.12,-.19,.19,-.12,-.19,.19,.12,-.19,.19,.12,.19,.19,-.12,-.19,.19,.12,.19,.19,-.12,.19,.19,-.12,.19,.19,.12,.19,-.19,.12,.19,.19,-.12,.19,-.19,.12,.19,-.19,-.12,.19,-.19,-.12,-.19,.19,-.12,-.19,.19,-.12,.19,-.19,-.12,-.19,.19,-.12,.19,-.19,-.12,.19,.19,.12,-.19,-.19,.12,-.19,-.19,.12,.19,.19,.12,-.19,-.19,.12,.19,.19,.12,.19],b5b45e4816b1291d:[-.08,-5.35,.08,-.08,5.35,.08,-.08,5.35,-.08,-.08,-5.35,.08,-.08,5.35,-.08,-.08,-5.35,-.08,-.08,-5.35,-.08,-.08,5.35,-.08,.08,5.35,-.08,-.08,-5.35,-.08,.08,5.35,-.08,.08,-5.35,-.08,.08,-5.35,-.08,.08,5.35,-.08,.08,5.35,.08,.08,-5.35,-.08,.08,5.35,.08,.08,-5.35,.08,.08,-5.35,.08,.08,5.35,.08,-.08,5.35,.08,.08,-5.35,.08,-.08,5.35,.08,-.08,-5.35,.08,-.08,-5.35,-.08,.08,-5.35,-.08,.08,-5.35,.08,-.08,-5.35,-.08,.08,-5.35,.08,-.08,-5.35,.08,.08,5.35,-.08,-.08,5.35,-.08,-.08,5.35,.08,.08,5.35,-.08,-.08,5.35,.08,.08,5.35,.08],"71d6c9cde2ecd258":[-.065,-1.55423,.065,-.065,1.55423,.065,-.065,1.55423,-.065,-.065,-1.55423,.065,-.065,1.55423,-.065,-.065,-1.55423,-.065,-.065,-1.55423,-.065,-.065,1.55423,-.065,.065,1.55423,-.065,-.065,-1.55423,-.065,.065,1.55423,-.065,.065,-1.55423,-.065,.065,-1.55423,-.065,.065,1.55423,-.065,.065,1.55423,.065,.065,-1.55423,-.065,.065,1.55423,.065,.065,-1.55423,.065,.065,-1.55423,.065,.065,1.55423,.065,-.065,1.55423,.065,.065,-1.55423,.065,-.065,1.55423,.065,-.065,-1.55423,.065,-.065,-1.55423,-.065,.065,-1.55423,-.065,.065,-1.55423,.065,-.065,-1.55423,-.065,.065,-1.55423,.065,-.065,-1.55423,.065,.065,1.55423,-.065,-.065,1.55423,-.065,-.065,1.55423,.065,.065,1.55423,-.065,-.065,1.55423,.065,.065,1.55423,.065],"44cb67f33e1c4314":[-.065,-2,.065,-.065,2,.065,-.065,2,-.065,-.065,-2,.065,-.065,2,-.065,-.065,-2,-.065,-.065,-2,-.065,-.065,2,-.065,.065,2,-.065,-.065,-2,-.065,.065,2,-.065,.065,-2,-.065,.065,-2,-.065,.065,2,-.065,.065,2,.065,.065,-2,-.065,.065,2,.065,.065,-2,.065,.065,-2,.065,.065,2,.065,-.065,2,.065,.065,-2,.065,-.065,2,.065,-.065,-2,.065,-.065,-2,-.065,.065,-2,-.065,.065,-2,.065,-.065,-2,-.065,.065,-2,.065,-.065,-2,.065,.065,2,-.065,-.065,2,-.065,-.065,2,.065,.065,2,-.065,-.065,2,.065,.065,2,.065],"796c448c486b8a3d":[-15.25,2.87,-28.5,-12,3.5,-28.5,-12,3.5,-39.5,-15.25,2.87,-28.5,-12,3.5,-39.5,-15.25,2.87,-39.5],b6953eeb81ecfc2f:[-12,3.5,-28.5,-8,3.5,-28.5,-8,3.5,-39.5,-12,3.5,-28.5,-8,3.5,-39.5,-12,3.5,-39.5],"7b7cfc885953c699":[-8,3.5,-28.5,-4.75,2.87,-28.5,-4.75,2.87,-39.5,-8,3.5,-28.5,-4.75,2.87,-39.5,-8,3.5,-39.5],"2bd80253bd6a03e5":[-.045,-2.5,.045,-.045,2.5,.045,-.045,2.5,-.045,-.045,-2.5,.045,-.045,2.5,-.045,-.045,-2.5,-.045,-.045,-2.5,-.045,-.045,2.5,-.045,.045,2.5,-.045,-.045,-2.5,-.045,.045,2.5,-.045,.045,-2.5,-.045,.045,-2.5,-.045,.045,2.5,-.045,.045,2.5,.045,.045,-2.5,-.045,.045,2.5,.045,.045,-2.5,.045,.045,-2.5,.045,.045,2.5,.045,-.045,2.5,.045,.045,-2.5,.045,-.045,2.5,.045,-.045,-2.5,.045,-.045,-2.5,-.045,.045,-2.5,-.045,.045,-2.5,.045,-.045,-2.5,-.045,.045,-2.5,.045,-.045,-2.5,.045,.045,2.5,-.045,-.045,2.5,-.045,-.045,2.5,.045,.045,2.5,-.045,-.045,2.5,.045,.045,2.5,.045],"0218d473db24d8fe":[-.0275,-.35,.0275,-.0275,.35,.0275,-.0275,.35,-.0275,-.0275,-.35,.0275,-.0275,.35,-.0275,-.0275,-.35,-.0275,-.0275,-.35,-.0275,-.0275,.35,-.0275,.0275,.35,-.0275,-.0275,-.35,-.0275,.0275,.35,-.0275,.0275,-.35,-.0275,.0275,-.35,-.0275,.0275,.35,-.0275,.0275,.35,.0275,.0275,-.35,-.0275,.0275,.35,.0275,.0275,-.35,.0275,.0275,-.35,.0275,.0275,.35,.0275,-.0275,.35,.0275,.0275,-.35,.0275,-.0275,.35,.0275,-.0275,-.35,.0275,-.0275,-.35,-.0275,.0275,-.35,-.0275,.0275,-.35,.0275,-.0275,-.35,-.0275,.0275,-.35,.0275,-.0275,-.35,.0275,.0275,.35,-.0275,-.0275,.35,-.0275,-.0275,.35,.0275,.0275,.35,-.0275,-.0275,.35,.0275,.0275,.35,.0275],d9415f62ae3c99be:[-.045,-1.425,.045,-.045,1.425,.045,-.045,1.425,-.045,-.045,-1.425,.045,-.045,1.425,-.045,-.045,-1.425,-.045,-.045,-1.425,-.045,-.045,1.425,-.045,.045,1.425,-.045,-.045,-1.425,-.045,.045,1.425,-.045,.045,-1.425,-.045,.045,-1.425,-.045,.045,1.425,-.045,.045,1.425,.045,.045,-1.425,-.045,.045,1.425,.045,.045,-1.425,.045,.045,-1.425,.045,.045,1.425,.045,-.045,1.425,.045,.045,-1.425,.045,-.045,1.425,.045,-.045,-1.425,.045,-.045,-1.425,-.045,.045,-1.425,-.045,.045,-1.425,.045,-.045,-1.425,-.045,.045,-1.425,.045,-.045,-1.425,.045,.045,1.425,-.045,-.045,1.425,-.045,-.045,1.425,.045,.045,1.425,-.045,-.045,1.425,.045,.045,1.425,.045],c3aa2e418fcf2f9f:[-.75,-.27,.65,-.75,.27,.65,-.75,.27,-.65,-.75,-.27,.65,-.75,.27,-.65,-.75,-.27,-.65,-.75,-.27,-.65,-.75,.27,-.65,.75,.27,-.65,-.75,-.27,-.65,.75,.27,-.65,.75,-.27,-.65,.75,-.27,-.65,.75,.27,-.65,.75,.27,.65,.75,-.27,-.65,.75,.27,.65,.75,-.27,.65,.75,-.27,.65,.75,.27,.65,-.75,.27,.65,.75,-.27,.65,-.75,.27,.65,-.75,-.27,.65,-.75,-.27,-.65,.75,-.27,-.65,.75,-.27,.65,-.75,-.27,-.65,.75,-.27,.65,-.75,-.27,.65,.75,.27,-.65,-.75,.27,-.65,-.75,.27,.65,.75,.27,-.65,-.75,.27,.65,.75,.27,.65],"2422ed37e67fc5bd":[0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711],f56af7c5e1104df1:[0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388],d15e0a122c081a74:[0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388],"2ee99a5e7ea74f06":[-.095,-.23,.1,-.095,.23,.1,-.095,.23,-.1,-.095,-.23,.1,-.095,.23,-.1,-.095,-.23,-.1,-.095,-.23,-.1,-.095,.23,-.1,.095,.23,-.1,-.095,-.23,-.1,.095,.23,-.1,.095,-.23,-.1,.095,-.23,-.1,.095,.23,-.1,.095,.23,.1,.095,-.23,-.1,.095,.23,.1,.095,-.23,.1,.095,-.23,.1,.095,.23,.1,-.095,.23,.1,.095,-.23,.1,-.095,.23,.1,-.095,-.23,.1,-.095,-.23,-.1,.095,-.23,-.1,.095,-.23,.1,-.095,-.23,-.1,.095,-.23,.1,-.095,-.23,.1,.095,.23,-.1,-.095,.23,-.1,-.095,.23,.1,.095,.23,-.1,-.095,.23,.1,.095,.23,.1],"819777fc297c22c8":[0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268],"092bacd734f22376":[-1.25,-.3,.425,-1.25,.3,.425,-1.25,.3,-.425,-1.25,-.3,.425,-1.25,.3,-.425,-1.25,-.3,-.425,-1.25,-.3,-.425,-1.25,.3,-.425,1.25,.3,-.425,-1.25,-.3,-.425,1.25,.3,-.425,1.25,-.3,-.425,1.25,-.3,-.425,1.25,.3,-.425,1.25,.3,.425,1.25,-.3,-.425,1.25,.3,.425,1.25,-.3,.425,1.25,-.3,.425,1.25,.3,.425,-1.25,.3,.425,1.25,-.3,.425,-1.25,.3,.425,-1.25,-.3,.425,-1.25,-.3,-.425,1.25,-.3,-.425,1.25,-.3,.425,-1.25,-.3,-.425,1.25,-.3,.425,-1.25,-.3,.425,1.25,.3,-.425,-1.25,.3,-.425,-1.25,.3,.425,1.25,.3,-.425,-1.25,.3,.425,1.25,.3,.425],"757ea27e86b5a2b9":[-1.15,-.02,.325,-1.15,.02,.325,-1.15,.02,-.325,-1.15,-.02,.325,-1.15,.02,-.325,-1.15,-.02,-.325,-1.15,-.02,-.325,-1.15,.02,-.325,1.15,.02,-.325,-1.15,-.02,-.325,1.15,.02,-.325,1.15,-.02,-.325,1.15,-.02,-.325,1.15,.02,-.325,1.15,.02,.325,1.15,-.02,-.325,1.15,.02,.325,1.15,-.02,.325,1.15,-.02,.325,1.15,.02,.325,-1.15,.02,.325,1.15,-.02,.325,-1.15,.02,.325,-1.15,-.02,.325,-1.15,-.02,-.325,1.15,-.02,-.325,1.15,-.02,.325,-1.15,-.02,-.325,1.15,-.02,.325,-1.15,-.02,.325,1.15,.02,-.325,-1.15,.02,-.325,-1.15,.02,.325,1.15,.02,-.325,-1.15,.02,.325,1.15,.02,.325],b0607ba12af94f9d:[-1.075,-.8,.25,-1.075,.8,.25,-1.075,.8,-.25,-1.075,-.8,.25,-1.075,.8,-.25,-1.075,-.8,-.25,-1.075,-.8,-.25,-1.075,.8,-.25,1.075,.8,-.25,-1.075,-.8,-.25,1.075,.8,-.25,1.075,-.8,-.25,1.075,-.8,-.25,1.075,.8,-.25,1.075,.8,.25,1.075,-.8,-.25,1.075,.8,.25,1.075,-.8,.25,1.075,-.8,.25,1.075,.8,.25,-1.075,.8,.25,1.075,-.8,.25,-1.075,.8,.25,-1.075,-.8,.25,-1.075,-.8,-.25,1.075,-.8,-.25,1.075,-.8,.25,-1.075,-.8,-.25,1.075,-.8,.25,-1.075,-.8,.25,1.075,.8,-.25,-1.075,.8,-.25,-1.075,.8,.25,1.075,.8,-.25,-1.075,.8,.25,1.075,.8,.25],"88b5d6308e8d45a3":[0,-.0225,-1,0,.0225,-1,.13053,.0225,-.99144,0,-.0225,-1,.13053,.0225,-.99144,.13053,-.0225,-.99144,.13053,-.0225,-.99144,.13053,.0225,-.99144,.25882,.0225,-.96593,.13053,-.0225,-.99144,.25882,.0225,-.96593,.25882,-.0225,-.96593,.25882,-.0225,-.96593,.25882,.0225,-.96593,.38268,.0225,-.92388,.25882,-.0225,-.96593,.38268,.0225,-.92388,.38268,-.0225,-.92388,.38268,-.0225,-.92388,.38268,.0225,-.92388,.5,.0225,-.86603,.38268,-.0225,-.92388,.5,.0225,-.86603,.5,-.0225,-.86603,.5,-.0225,-.86603,.5,.0225,-.86603,.60876,.0225,-.79335,.5,-.0225,-.86603,.60876,.0225,-.79335,.60876,-.0225,-.79335,.60876,-.0225,-.79335,.60876,.0225,-.79335,.70711,.0225,-.70711,.60876,-.0225,-.79335,.70711,.0225,-.70711,.70711,-.0225,-.70711,.70711,-.0225,-.70711,.70711,.0225,-.70711,.79335,.0225,-.60876,.70711,-.0225,-.70711,.79335,.0225,-.60876,.79335,-.0225,-.60876,.79335,-.0225,-.60876,.79335,.0225,-.60876,.86603,.0225,-.5,.79335,-.0225,-.60876,.86603,.0225,-.5,.86603,-.0225,-.5,.86603,-.0225,-.5,.86603,.0225,-.5,.92388,.0225,-.38268,.86603,-.0225,-.5,.92388,.0225,-.38268,.92388,-.0225,-.38268,.92388,-.0225,-.38268,.92388,.0225,-.38268,.96593,.0225,-.25882,.92388,-.0225,-.38268,.96593,.0225,-.25882,.96593,-.0225,-.25882,.96593,-.0225,-.25882,.96593,.0225,-.25882,.99144,.0225,-.13053,.96593,-.0225,-.25882,.99144,.0225,-.13053,.99144,-.0225,-.13053,.99144,-.0225,-.13053,.99144,.0225,-.13053,1,.0225,-0,.99144,-.0225,-.13053,1,.0225,-0,1,-.0225,-0,1,-.0225,-0,1,.0225,-0,.99144,.0225,.13053,1,-.0225,-0,.99144,.0225,.13053,.99144,-.0225,.13053,.99144,-.0225,.13053,.99144,.0225,.13053,.96593,.0225,.25882,.99144,-.0225,.13053,.96593,.0225,.25882,.96593,-.0225,.25882,.96593,-.0225,.25882,.96593,.0225,.25882,.92388,.0225,.38268,.96593,-.0225,.25882,.92388,.0225,.38268,.92388,-.0225,.38268,.92388,-.0225,.38268,.92388,.0225,.38268,.86603,.0225,.5,.92388,-.0225,.38268,.86603,.0225,.5,.86603,-.0225,.5,.86603,-.0225,.5,.86603,.0225,.5,.79335,.0225,.60876,.86603,-.0225,.5,.79335,.0225,.60876,.79335,-.0225,.60876,.79335,-.0225,.60876,.79335,.0225,.60876,.70711,.0225,.70711,.79335,-.0225,.60876,.70711,.0225,.70711,.70711,-.0225,.70711,.70711,-.0225,.70711,.70711,.0225,.70711,.60876,.0225,.79335,.70711,-.0225,.70711,.60876,.0225,.79335,.60876,-.0225,.79335,.60876,-.0225,.79335,.60876,.0225,.79335,.5,.0225,.86603,.60876,-.0225,.79335,.5,.0225,.86603,.5,-.0225,.86603,.5,-.0225,.86603,.5,.0225,.86603,.38268,.0225,.92388,.5,-.0225,.86603,.38268,.0225,.92388,.38268,-.0225,.92388,.38268,-.0225,.92388,.38268,.0225,.92388,.25882,.0225,.96593,.38268,-.0225,.92388,.25882,.0225,.96593,.25882,-.0225,.96593,.25882,-.0225,.96593,.25882,.0225,.96593,.13053,.0225,.99144,.25882,-.0225,.96593,.13053,.0225,.99144,.13053,-.0225,.99144,.13053,-.0225,.99144,.13053,.0225,.99144,0,.0225,1,.13053,-.0225,.99144,0,.0225,1,0,-.0225,1,0,-.0225,1,0,.0225,1,-.13053,.0225,.99144,0,-.0225,1,-.13053,.0225,.99144,-.13053,-.0225,.99144,-.13053,-.0225,.99144,-.13053,.0225,.99144,-.25882,.0225,.96593,-.13053,-.0225,.99144,-.25882,.0225,.96593,-.25882,-.0225,.96593,-.25882,-.0225,.96593,-.25882,.0225,.96593,-.38268,.0225,.92388,-.25882,-.0225,.96593,-.38268,.0225,.92388,-.38268,-.0225,.92388,-.38268,-.0225,.92388,-.38268,.0225,.92388,-.5,.0225,.86603,-.38268,-.0225,.92388,-.5,.0225,.86603,-.5,-.0225,.86603,-.5,-.0225,.86603,-.5,.0225,.86603,-.60876,.0225,.79335,-.5,-.0225,.86603,-.60876,.0225,.79335,-.60876,-.0225,.79335,-.60876,-.0225,.79335,-.60876,.0225,.79335,-.70711,.0225,.70711,-.60876,-.0225,.79335,-.70711,.0225,.70711,-.70711,-.0225,.70711,-.70711,-.0225,.70711,-.70711,.0225,.70711,-.79335,.0225,.60876,-.70711,-.0225,.70711,-.79335,.0225,.60876,-.79335,-.0225,.60876,-.79335,-.0225,.60876,-.79335,.0225,.60876,-.86603,.0225,.5,-.79335,-.0225,.60876,-.86603,.0225,.5,-.86603,-.0225,.5,-.86603,-.0225,.5,-.86603,.0225,.5,-.92388,.0225,.38268,-.86603,-.0225,.5,-.92388,.0225,.38268,-.92388,-.0225,.38268,-.92388,-.0225,.38268,-.92388,.0225,.38268,-.96593,.0225,.25882,-.92388,-.0225,.38268,-.96593,.0225,.25882,-.96593,-.0225,.25882,-.96593,-.0225,.25882,-.96593,.0225,.25882,-.99144,.0225,.13053,-.96593,-.0225,.25882,-.99144,.0225,.13053,-.99144,-.0225,.13053,-.99144,-.0225,.13053,-.99144,.0225,.13053,-1,.0225,-0,-.99144,-.0225,.13053,-1,.0225,-0,-1,-.0225,-0,-1,-.0225,-0,-1,.0225,-0,-.99144,.0225,-.13053,-1,-.0225,-0,-.99144,.0225,-.13053,-.99144,-.0225,-.13053,-.99144,-.0225,-.13053,-.99144,.0225,-.13053,-.96593,.0225,-.25882,-.99144,-.0225,-.13053,-.96593,.0225,-.25882,-.96593,-.0225,-.25882,-.96593,-.0225,-.25882,-.96593,.0225,-.25882,-.92388,.0225,-.38268,-.96593,-.0225,-.25882,-.92388,.0225,-.38268,-.92388,-.0225,-.38268,-.92388,-.0225,-.38268,-.92388,.0225,-.38268,-.86603,.0225,-.5,-.92388,-.0225,-.38268,-.86603,.0225,-.5,-.86603,-.0225,-.5,-.86603,-.0225,-.5,-.86603,.0225,-.5,-.79335,.0225,-.60876,-.86603,-.0225,-.5,-.79335,.0225,-.60876,-.79335,-.0225,-.60876,-.79335,-.0225,-.60876,-.79335,.0225,-.60876,-.70711,.0225,-.70711,-.79335,-.0225,-.60876,-.70711,.0225,-.70711,-.70711,-.0225,-.70711,-.70711,-.0225,-.70711,-.70711,.0225,-.70711,-.60876,.0225,-.79335,-.70711,-.0225,-.70711,-.60876,.0225,-.79335,-.60876,-.0225,-.79335,-.60876,-.0225,-.79335,-.60876,.0225,-.79335,-.5,.0225,-.86603,-.60876,-.0225,-.79335,-.5,.0225,-.86603,-.5,-.0225,-.86603,-.5,-.0225,-.86603,-.5,.0225,-.86603,-.38268,.0225,-.92388,-.5,-.0225,-.86603,-.38268,.0225,-.92388,-.38268,-.0225,-.92388,-.38268,-.0225,-.92388,-.38268,.0225,-.92388,-.25882,.0225,-.96593,-.38268,-.0225,-.92388,-.25882,.0225,-.96593,-.25882,-.0225,-.96593,.25882,.0225,-.96593,.13053,.0225,-.99144,0,.0225,-1,0,.0225,-1,-.13053,.0225,-.99144,-.25882,.0225,-.96593,-.25882,.0225,-.96593,-.38268,.0225,-.92388,-.5,.0225,-.86603,-.5,.0225,-.86603,-.60876,.0225,-.79335,-.70711,.0225,-.70711,-.70711,.0225,-.70711,-.79335,.0225,-.60876,-.86603,.0225,-.5,-.86603,.0225,-.5,-.92388,.0225,-.38268,-.96593,.0225,-.25882,-.96593,.0225,-.25882,-.99144,.0225,-.13053,-1,.0225,-0,-1,.0225,-0,-.99144,.0225,.13053,-.96593,.0225,.25882,-.96593,.0225,.25882,-.92388,.0225,.38268,-.86603,.0225,.5,-.86603,.0225,.5,-.79335,.0225,.60876,-.70711,.0225,.70711,-.70711,.0225,.70711,-.60876,.0225,.79335,-.5,.0225,.86603,-.5,.0225,.86603,-.38268,.0225,.92388,-.25882,.0225,.96593,-.25882,.0225,.96593,-.13053,.0225,.99144,0,.0225,1,0,.0225,1,.13053,.0225,.99144,.25882,.0225,.96593,.25882,.0225,.96593,.38268,.0225,.92388,.5,.0225,.86603,.5,.0225,.86603,.60876,.0225,.79335,.70711,.0225,.70711,.70711,.0225,.70711,.79335,.0225,.60876,.86603,.0225,.5,.86603,.0225,.5,.92388,.0225,.38268,.96593,.0225,.25882,.96593,.0225,.25882,.99144,.0225,.13053,1,.0225,-0,1,.0225,-0,.99144,.0225,-.13053,.96593,.0225,-.25882,.96593,.0225,-.25882,.92388,.0225,-.38268,.86603,.0225,-.5,.86603,.0225,-.5,.79335,.0225,-.60876,.70711,.0225,-.70711,.70711,.0225,-.70711,.60876,.0225,-.79335,.5,.0225,-.86603,.5,.0225,-.86603,.38268,.0225,-.92388,.25882,.0225,-.96593,.25882,.0225,-.96593,0,.0225,-1,-.25882,.0225,-.96593,-.25882,.0225,-.96593,-.5,.0225,-.86603,-.70711,.0225,-.70711,-.70711,.0225,-.70711,-.86603,.0225,-.5,-.96593,.0225,-.25882,-.96593,.0225,-.25882,-1,.0225,-0,-.96593,.0225,.25882,-.96593,.0225,.25882,-.86603,.0225,.5,-.70711,.0225,.70711,-.70711,.0225,.70711,-.5,.0225,.86603,-.25882,.0225,.96593,-.25882,.0225,.96593,0,.0225,1,.25882,.0225,.96593,.25882,.0225,.96593,.5,.0225,.86603,.70711,.0225,.70711,.70711,.0225,.70711,.86603,.0225,.5,.96593,.0225,.25882,.96593,.0225,.25882,1,.0225,-0,.96593,.0225,-.25882,.96593,.0225,-.25882,.86603,.0225,-.5,.70711,.0225,-.70711,.70711,.0225,-.70711,.5,.0225,-.86603,.25882,.0225,-.96593,.25882,.0225,-.96593,-.25882,.0225,-.96593,-.70711,.0225,-.70711,-.70711,.0225,-.70711,-.96593,.0225,-.25882,-.96593,.0225,.25882,-.96593,.0225,.25882,-.70711,.0225,.70711,-.25882,.0225,.96593,-.25882,.0225,.96593,.25882,.0225,.96593,.70711,.0225,.70711,.70711,.0225,.70711,.96593,.0225,.25882,.96593,.0225,-.25882,.96593,.0225,-.25882,.70711,.0225,-.70711,.25882,.0225,-.96593,.25882,.0225,-.96593,-.70711,.0225,-.70711,-.96593,.0225,.25882,-.96593,.0225,.25882,-.25882,.0225,.96593,.70711,.0225,.70711,.70711,.0225,.70711,.96593,.0225,-.25882,.25882,.0225,-.96593,-.96593,.0225,.25882,.70711,.0225,.70711,.25882,.0225,-.96593,-.25882,-.0225,-.96593,-.25882,.0225,-.96593,-.13053,.0225,-.99144,-.25882,-.0225,-.96593,-.13053,.0225,-.99144,-.13053,-.0225,-.99144,-.13053,-.0225,-.99144,-.13053,.0225,-.99144,0,.0225,-1,-.13053,-.0225,-.99144,0,.0225,-1,0,-.0225,-1,-.13053,-.0225,-.99144,0,-.0225,-1,.13053,-.0225,-.99144,.13053,-.0225,-.99144,.25882,-.0225,-.96593,.38268,-.0225,-.92388,.38268,-.0225,-.92388,.5,-.0225,-.86603,.60876,-.0225,-.79335,.60876,-.0225,-.79335,.70711,-.0225,-.70711,.79335,-.0225,-.60876,.79335,-.0225,-.60876,.86603,-.0225,-.5,.92388,-.0225,-.38268,.92388,-.0225,-.38268,.96593,-.0225,-.25882,.99144,-.0225,-.13053,.99144,-.0225,-.13053,1,-.0225,-0,.99144,-.0225,.13053,.99144,-.0225,.13053,.96593,-.0225,.25882,.92388,-.0225,.38268,.92388,-.0225,.38268,.86603,-.0225,.5,.79335,-.0225,.60876,.79335,-.0225,.60876,.70711,-.0225,.70711,.60876,-.0225,.79335,.60876,-.0225,.79335,.5,-.0225,.86603,.38268,-.0225,.92388,.38268,-.0225,.92388,.25882,-.0225,.96593,.13053,-.0225,.99144,.13053,-.0225,.99144,0,-.0225,1,-.13053,-.0225,.99144,-.13053,-.0225,.99144,-.25882,-.0225,.96593,-.38268,-.0225,.92388,-.38268,-.0225,.92388,-.5,-.0225,.86603,-.60876,-.0225,.79335,-.60876,-.0225,.79335,-.70711,-.0225,.70711,-.79335,-.0225,.60876,-.79335,-.0225,.60876,-.86603,-.0225,.5,-.92388,-.0225,.38268,-.92388,-.0225,.38268,-.96593,-.0225,.25882,-.99144,-.0225,.13053,-.99144,-.0225,.13053,-1,-.0225,-0,-.99144,-.0225,-.13053,-.99144,-.0225,-.13053,-.96593,-.0225,-.25882,-.92388,-.0225,-.38268,-.92388,-.0225,-.38268,-.86603,-.0225,-.5,-.79335,-.0225,-.60876,-.79335,-.0225,-.60876,-.70711,-.0225,-.70711,-.60876,-.0225,-.79335,-.60876,-.0225,-.79335,-.5,-.0225,-.86603,-.38268,-.0225,-.92388,-.38268,-.0225,-.92388,-.25882,-.0225,-.96593,-.13053,-.0225,-.99144,-.13053,-.0225,-.99144,.13053,-.0225,-.99144,.38268,-.0225,-.92388,.38268,-.0225,-.92388,.60876,-.0225,-.79335,.79335,-.0225,-.60876,.79335,-.0225,-.60876,.92388,-.0225,-.38268,.99144,-.0225,-.13053,.99144,-.0225,-.13053,.99144,-.0225,.13053,.92388,-.0225,.38268,.92388,-.0225,.38268,.79335,-.0225,.60876,.60876,-.0225,.79335,.60876,-.0225,.79335,.38268,-.0225,.92388,.13053,-.0225,.99144,.13053,-.0225,.99144,-.13053,-.0225,.99144,-.38268,-.0225,.92388,-.38268,-.0225,.92388,-.60876,-.0225,.79335,-.79335,-.0225,.60876,-.79335,-.0225,.60876,-.92388,-.0225,.38268,-.99144,-.0225,.13053,-.99144,-.0225,.13053,-.99144,-.0225,-.13053,-.92388,-.0225,-.38268,-.92388,-.0225,-.38268,-.79335,-.0225,-.60876,-.60876,-.0225,-.79335,-.60876,-.0225,-.79335,-.38268,-.0225,-.92388,-.13053,-.0225,-.99144,-.13053,-.0225,-.99144,.38268,-.0225,-.92388,.79335,-.0225,-.60876,.79335,-.0225,-.60876,.99144,-.0225,-.13053,.92388,-.0225,.38268,.92388,-.0225,.38268,.60876,-.0225,.79335,.13053,-.0225,.99144,.13053,-.0225,.99144,-.38268,-.0225,.92388,-.79335,-.0225,.60876,-.79335,-.0225,.60876,-.99144,-.0225,.13053,-.92388,-.0225,-.38268,-.92388,-.0225,-.38268,-.60876,-.0225,-.79335,-.13053,-.0225,-.99144,-.13053,-.0225,-.99144,.79335,-.0225,-.60876,.92388,-.0225,.38268,.92388,-.0225,.38268,.13053,-.0225,.99144,-.79335,-.0225,.60876,-.79335,-.0225,.60876,-.92388,-.0225,-.38268,-.13053,-.0225,-.99144,.92388,-.0225,.38268,-.79335,-.0225,.60876,-.13053,-.0225,-.99144],db82c7a816790796:[-1.2,-.07,.275,-1.2,.07,.275,-1.2,.07,-.275,-1.2,-.07,.275,-1.2,.07,-.275,-1.2,-.07,-.275,-1.2,-.07,-.275,-1.2,.07,-.275,1.2,.07,-.275,-1.2,-.07,-.275,1.2,.07,-.275,1.2,-.07,-.275,1.2,-.07,-.275,1.2,.07,-.275,1.2,.07,.275,1.2,-.07,-.275,1.2,.07,.275,1.2,-.07,.275,1.2,-.07,.275,1.2,.07,.275,-1.2,.07,.275,1.2,-.07,.275,-1.2,.07,.275,-1.2,-.07,.275,-1.2,-.07,-.275,1.2,-.07,-.275,1.2,-.07,.275,-1.2,-.07,-.275,1.2,-.07,.275,-1.2,-.07,.275,1.2,.07,-.275,-1.2,.07,-.275,-1.2,.07,.275,1.2,.07,-.275,-1.2,.07,.275,1.2,.07,.275],"78f7233f25ad329e":[-.07,-.27,.23,-.07,.27,.23,-.07,.27,-.23,-.07,-.27,.23,-.07,.27,-.23,-.07,-.27,-.23,-.07,-.27,-.23,-.07,.27,-.23,.07,.27,-.23,-.07,-.27,-.23,.07,.27,-.23,.07,-.27,-.23,.07,-.27,-.23,.07,.27,-.23,.07,.27,.23,.07,-.27,-.23,.07,.27,.23,.07,-.27,.23,.07,-.27,.23,.07,.27,.23,-.07,.27,.23,.07,-.27,.23,-.07,.27,.23,-.07,-.27,.23,-.07,-.27,-.23,.07,-.27,-.23,.07,-.27,.23,-.07,-.27,-.23,.07,-.27,.23,-.07,-.27,.23,.07,.27,-.23,-.07,.27,-.23,-.07,.27,.23,.07,.27,-.23,-.07,.27,.23,.07,.27,.23],e416ac3e7ad4717f:[-1.2,-.375,.06,-1.2,.375,.06,-1.2,.375,-.06,-1.2,-.375,.06,-1.2,.375,-.06,-1.2,-.375,-.06,-1.2,-.375,-.06,-1.2,.375,-.06,1.2,.375,-.06,-1.2,-.375,-.06,1.2,.375,-.06,1.2,-.375,-.06,1.2,-.375,-.06,1.2,.375,-.06,1.2,.375,.06,1.2,-.375,-.06,1.2,.375,.06,1.2,-.375,.06,1.2,-.375,.06,1.2,.375,.06,-1.2,.375,.06,1.2,-.375,.06,-1.2,.375,.06,-1.2,-.375,.06,-1.2,-.375,-.06,1.2,-.375,-.06,1.2,-.375,.06,-1.2,-.375,-.06,1.2,-.375,.06,-1.2,-.375,.06,1.2,.375,-.06,-1.2,.375,-.06,-1.2,.375,.06,1.2,.375,-.06,-1.2,.375,.06,1.2,.375,.06],"62c326006cb475da":[-.325,-.15,.325,-.325,.15,.325,-.325,.15,-.325,-.325,-.15,.325,-.325,.15,-.325,-.325,-.15,-.325,-.325,-.15,-.325,-.325,.15,-.325,.325,.15,-.325,-.325,-.15,-.325,.325,.15,-.325,.325,-.15,-.325,.325,-.15,-.325,.325,.15,-.325,.325,.15,.325,.325,-.15,-.325,.325,.15,.325,.325,-.15,.325,.325,-.15,.325,.325,.15,.325,-.325,.15,.325,.325,-.15,.325,-.325,.15,.325,-.325,-.15,.325,-.325,-.15,-.325,.325,-.15,-.325,.325,-.15,.325,-.325,-.15,-.325,.325,-.15,.325,-.325,-.15,.325,.325,.15,-.325,-.325,.15,-.325,-.325,.15,.325,.325,.15,-.325,-.325,.15,.325,.325,.15,.325],a4baf39765da7bfc:[-.125,-.4,.125,-.125,.4,.125,-.125,.4,-.125,-.125,-.4,.125,-.125,.4,-.125,-.125,-.4,-.125,-.125,-.4,-.125,-.125,.4,-.125,.125,.4,-.125,-.125,-.4,-.125,.125,.4,-.125,.125,-.4,-.125,.125,-.4,-.125,.125,.4,-.125,.125,.4,.125,.125,-.4,-.125,.125,.4,.125,.125,-.4,.125,.125,-.4,.125,.125,.4,.125,-.125,.4,.125,.125,-.4,.125,-.125,.4,.125,-.125,-.4,.125,-.125,-.4,-.125,.125,-.4,-.125,.125,-.4,.125,-.125,-.4,-.125,.125,-.4,.125,-.125,-.4,.125,.125,.4,-.125,-.125,.4,-.125,-.125,.4,.125,.125,.4,-.125,-.125,.4,.125,.125,.4,.125],"13b346ff1b4d222f":[-.26,-.175,.26,-.26,.175,.26,-.26,.175,-.26,-.26,-.175,.26,-.26,.175,-.26,-.26,-.175,-.26,-.26,-.175,-.26,-.26,.175,-.26,.26,.175,-.26,-.26,-.175,-.26,.26,.175,-.26,.26,-.175,-.26,.26,-.175,-.26,.26,.175,-.26,.26,.175,.26,.26,-.175,-.26,.26,.175,.26,.26,-.175,.26,.26,-.175,.26,.26,.175,.26,-.26,.175,.26,.26,-.175,.26,-.26,.175,.26,-.26,-.175,.26,-.26,-.175,-.26,.26,-.175,-.26,.26,-.175,.26,-.26,-.175,-.26,.26,-.175,.26,-.26,-.175,.26,.26,.175,-.26,-.26,.175,-.26,-.26,.175,.26,.26,.175,-.26,-.26,.175,.26,.26,.175,.26],"33e0a9aac92440ee":[-.375,-.075,.375,-.375,.075,.375,-.375,.075,-.375,-.375,-.075,.375,-.375,.075,-.375,-.375,-.075,-.375,-.375,-.075,-.375,-.375,.075,-.375,.375,.075,-.375,-.375,-.075,-.375,.375,.075,-.375,.375,-.075,-.375,.375,-.075,-.375,.375,.075,-.375,.375,.075,.375,.375,-.075,-.375,.375,.075,.375,.375,-.075,.375,.375,-.075,.375,.375,.075,.375,-.375,.075,.375,.375,-.075,.375,-.375,.075,.375,-.375,-.075,.375,-.375,-.075,-.375,.375,-.075,-.375,.375,-.075,.375,-.375,-.075,-.375,.375,-.075,.375,-.375,-.075,.375,.375,.075,-.375,-.375,.075,-.375,-.375,.075,.375,.375,.075,-.375,-.375,.075,.375,.375,.075,.375],"0ce877c0228383db":[-.125,-1,.125,-.125,1,.125,-.125,1,-.125,-.125,-1,.125,-.125,1,-.125,-.125,-1,-.125,-.125,-1,-.125,-.125,1,-.125,.125,1,-.125,-.125,-1,-.125,.125,1,-.125,.125,-1,-.125,.125,-1,-.125,.125,1,-.125,.125,1,.125,.125,-1,-.125,.125,1,.125,.125,-1,.125,.125,-1,.125,.125,1,.125,-.125,1,.125,.125,-1,.125,-.125,1,.125,-.125,-1,.125,-.125,-1,-.125,.125,-1,-.125,.125,-1,.125,-.125,-1,-.125,.125,-1,.125,-.125,-1,.125,.125,1,-.125,-.125,1,-.125,-.125,1,.125,.125,1,-.125,-.125,1,.125,.125,1,.125],"82dea80f33cf080a":[0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711],f827772015b3a48c:[-5,-.0175,7,-5,.0175,7,-5,.0175,-7,-5,-.0175,7,-5,.0175,-7,-5,-.0175,-7,-5,-.0175,-7,-5,.0175,-7,5,.0175,-7,-5,-.0175,-7,5,.0175,-7,5,-.0175,-7,5,-.0175,-7,5,.0175,-7,5,.0175,7,5,-.0175,-7,5,.0175,7,5,-.0175,7,5,-.0175,7,5,.0175,7,-5,.0175,7,5,-.0175,7,-5,.0175,7,-5,-.0175,7,-5,-.0175,-7,5,-.0175,-7,5,-.0175,7,-5,-.0175,-7,5,-.0175,7,-5,-.0175,7,5,.0175,-7,-5,.0175,-7,-5,.0175,7,5,.0175,-7,-5,.0175,7,5,.0175,7],"3d98b75bb31d7c11":[0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268],c9cb8e24be20e024:[0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268],"5936199ce87e4366":[0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268],"6a452fe72dafae33":[0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711],"29b825fb3ef496eb":[0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1],aac0faf80d53b614:[-6,-.025,7,-6,.025,7,-6,.025,-7,-6,-.025,7,-6,.025,-7,-6,-.025,-7,-6,-.025,-7,-6,.025,-7,6,.025,-7,-6,-.025,-7,6,.025,-7,6,-.025,-7,6,-.025,-7,6,.025,-7,6,.025,7,6,-.025,-7,6,.025,7,6,-.025,7,6,-.025,7,6,.025,7,-6,.025,7,6,-.025,7,-6,.025,7,-6,-.025,7,-6,-.025,-7,6,-.025,-7,6,-.025,7,-6,-.025,-7,6,-.025,7,-6,-.025,7,6,.025,-7,-6,.025,-7,-6,.025,7,6,.025,-7,-6,.025,7,6,.025,7],c209318478dee4f1:[-.35,-2,5.5,-.35,2,5.5,-.35,2,-5.5,-.35,-2,5.5,-.35,2,-5.5,-.35,-2,-5.5,-.35,-2,-5.5,-.35,2,-5.5,.35,2,-5.5,-.35,-2,-5.5,.35,2,-5.5,.35,-2,-5.5,.35,-2,-5.5,.35,2,-5.5,.35,2,5.5,.35,-2,-5.5,.35,2,5.5,.35,-2,5.5,.35,-2,5.5,.35,2,5.5,-.35,2,5.5,.35,-2,5.5,-.35,2,5.5,-.35,-2,5.5,-.35,-2,-5.5,.35,-2,-5.5,.35,-2,5.5,-.35,-2,-5.5,.35,-2,5.5,-.35,-2,5.5,.35,2,-5.5,-.35,2,-5.5,-.35,2,5.5,.35,2,-5.5,-.35,2,5.5,.35,2,5.5],d4b066c7b53fbd81:[-.6,-.7,1.2,-.6,.7,1.2,-.6,.7,-1.2,-.6,-.7,1.2,-.6,.7,-1.2,-.6,-.7,-1.2,-.6,-.7,-1.2,-.6,.7,-1.2,.6,.7,-1.2,-.6,-.7,-1.2,.6,.7,-1.2,.6,-.7,-1.2,.6,-.7,-1.2,.6,.7,-1.2,.6,.7,1.2,.6,-.7,-1.2,.6,.7,1.2,.6,-.7,1.2,.6,-.7,1.2,.6,.7,1.2,-.6,.7,1.2,.6,-.7,1.2,-.6,.7,1.2,-.6,-.7,1.2,-.6,-.7,-1.2,.6,-.7,-1.2,.6,-.7,1.2,-.6,-.7,-1.2,.6,-.7,1.2,-.6,-.7,1.2,.6,.7,-1.2,-.6,.7,-1.2,-.6,.7,1.2,.6,.7,-1.2,-.6,.7,1.2,.6,.7,1.2],ae7ae8837943f507:[-.55,-1.25,1.3,-.55,1.25,1.3,-.55,1.25,-1.3,-.55,-1.25,1.3,-.55,1.25,-1.3,-.55,-1.25,-1.3,-.55,-1.25,-1.3,-.55,1.25,-1.3,.55,1.25,-1.3,-.55,-1.25,-1.3,.55,1.25,-1.3,.55,-1.25,-1.3,.55,-1.25,-1.3,.55,1.25,-1.3,.55,1.25,1.3,.55,-1.25,-1.3,.55,1.25,1.3,.55,-1.25,1.3,.55,-1.25,1.3,.55,1.25,1.3,-.55,1.25,1.3,.55,-1.25,1.3,-.55,1.25,1.3,-.55,-1.25,1.3,-.55,-1.25,-1.3,.55,-1.25,-1.3,.55,-1.25,1.3,-.55,-1.25,-1.3,.55,-1.25,1.3,-.55,-1.25,1.3,.55,1.25,-1.3,-.55,1.25,-1.3,-.55,1.25,1.3,.55,1.25,-1.3,-.55,1.25,1.3,.55,1.25,1.3],c94aba9d2661faa9:[-.55,-1.55,1.2,-.55,1.55,1.2,-.55,1.55,-1.2,-.55,-1.55,1.2,-.55,1.55,-1.2,-.55,-1.55,-1.2,-.55,-1.55,-1.2,-.55,1.55,-1.2,.55,1.55,-1.2,-.55,-1.55,-1.2,.55,1.55,-1.2,.55,-1.55,-1.2,.55,-1.55,-1.2,.55,1.55,-1.2,.55,1.55,1.2,.55,-1.55,-1.2,.55,1.55,1.2,.55,-1.55,1.2,.55,-1.55,1.2,.55,1.55,1.2,-.55,1.55,1.2,.55,-1.55,1.2,-.55,1.55,1.2,-.55,-1.55,1.2,-.55,-1.55,-1.2,.55,-1.55,-1.2,.55,-1.55,1.2,-.55,-1.55,-1.2,.55,-1.55,1.2,-.55,-1.55,1.2,.55,1.55,-1.2,-.55,1.55,-1.2,-.55,1.55,1.2,.55,1.55,-1.2,-.55,1.55,1.2,.55,1.55,1.2],"066e12569e1169a7":[-.6,-1,1.1,-.6,1,1.1,-.6,1,-1.1,-.6,-1,1.1,-.6,1,-1.1,-.6,-1,-1.1,-.6,-1,-1.1,-.6,1,-1.1,.6,1,-1.1,-.6,-1,-1.1,.6,1,-1.1,.6,-1,-1.1,.6,-1,-1.1,.6,1,-1.1,.6,1,1.1,.6,-1,-1.1,.6,1,1.1,.6,-1,1.1,.6,-1,1.1,.6,1,1.1,-.6,1,1.1,.6,-1,1.1,-.6,1,1.1,-.6,-1,1.1,-.6,-1,-1.1,.6,-1,-1.1,.6,-1,1.1,-.6,-1,-1.1,.6,-1,1.1,-.6,-1,1.1,.6,1,-1.1,-.6,1,-1.1,-.6,1,1.1,.6,1,-1.1,-.6,1,1.1,.6,1,1.1],fb366e81fbc3ac10:[-.04,-1.675,.275,-.04,1.675,.275,-.04,1.675,-.275,-.04,-1.675,.275,-.04,1.675,-.275,-.04,-1.675,-.275,-.04,-1.675,-.275,-.04,1.675,-.275,.04,1.675,-.275,-.04,-1.675,-.275,.04,1.675,-.275,.04,-1.675,-.275,.04,-1.675,-.275,.04,1.675,-.275,.04,1.675,.275,.04,-1.675,-.275,.04,1.675,.275,.04,-1.675,.275,.04,-1.675,.275,.04,1.675,.275,-.04,1.675,.275,.04,-1.675,.275,-.04,1.675,.275,-.04,-1.675,.275,-.04,-1.675,-.275,.04,-1.675,-.275,.04,-1.675,.275,-.04,-1.675,-.275,.04,-1.675,.275,-.04,-1.675,.275,.04,1.675,-.275,-.04,1.675,-.275,-.04,1.675,.275,.04,1.675,-.275,-.04,1.675,.275,.04,1.675,.275],ee28f8d5ec8c15dc:[-3.5,-.06,5.5,-3.5,.06,5.5,-3.5,.06,-5.5,-3.5,-.06,5.5,-3.5,.06,-5.5,-3.5,-.06,-5.5,-3.5,-.06,-5.5,-3.5,.06,-5.5,3.5,.06,-5.5,-3.5,-.06,-5.5,3.5,.06,-5.5,3.5,-.06,-5.5,3.5,-.06,-5.5,3.5,.06,-5.5,3.5,.06,5.5,3.5,-.06,-5.5,3.5,.06,5.5,3.5,-.06,5.5,3.5,-.06,5.5,3.5,.06,5.5,-3.5,.06,5.5,3.5,-.06,5.5,-3.5,.06,5.5,-3.5,-.06,5.5,-3.5,-.06,-5.5,3.5,-.06,-5.5,3.5,-.06,5.5,-3.5,-.06,-5.5,3.5,-.06,5.5,-3.5,-.06,5.5,3.5,.06,-5.5,-3.5,.06,-5.5,-3.5,.06,5.5,3.5,.06,-5.5,-3.5,.06,5.5,3.5,.06,5.5],"8ec8416b529a317b":[-3.325,-.015,5.325,-3.325,.015,5.325,-3.325,.015,-5.325,-3.325,-.015,5.325,-3.325,.015,-5.325,-3.325,-.015,-5.325,-3.325,-.015,-5.325,-3.325,.015,-5.325,3.325,.015,-5.325,-3.325,-.015,-5.325,3.325,.015,-5.325,3.325,-.015,-5.325,3.325,-.015,-5.325,3.325,.015,-5.325,3.325,.015,5.325,3.325,-.015,-5.325,3.325,.015,5.325,3.325,-.015,5.325,3.325,-.015,5.325,3.325,.015,5.325,-3.325,.015,5.325,3.325,-.015,5.325,-3.325,.015,5.325,-3.325,-.015,5.325,-3.325,-.015,-5.325,3.325,-.015,-5.325,3.325,-.015,5.325,-3.325,-.015,-5.325,3.325,-.015,5.325,-3.325,-.015,5.325,3.325,.015,-5.325,-3.325,.015,-5.325,-3.325,.015,5.325,3.325,.015,-5.325,-3.325,.015,5.325,3.325,.015,5.325],"087a8199293c9144":[-.12,-.04,5.6,-.12,.04,5.6,-.12,.04,-5.6,-.12,-.04,5.6,-.12,.04,-5.6,-.12,-.04,-5.6,-.12,-.04,-5.6,-.12,.04,-5.6,.12,.04,-5.6,-.12,-.04,-5.6,.12,.04,-5.6,.12,-.04,-5.6,.12,-.04,-5.6,.12,.04,-5.6,.12,.04,5.6,.12,-.04,-5.6,.12,.04,5.6,.12,-.04,5.6,.12,-.04,5.6,.12,.04,5.6,-.12,.04,5.6,.12,-.04,5.6,-.12,.04,5.6,-.12,-.04,5.6,-.12,-.04,-5.6,.12,-.04,-5.6,.12,-.04,5.6,-.12,-.04,-5.6,.12,-.04,5.6,-.12,-.04,5.6,.12,.04,-5.6,-.12,.04,-5.6,-.12,.04,5.6,.12,.04,-5.6,-.12,.04,5.6,.12,.04,5.6],"4775997f10e5b17e":[-3.7,-.04,.12,-3.7,.04,.12,-3.7,.04,-.12,-3.7,-.04,.12,-3.7,.04,-.12,-3.7,-.04,-.12,-3.7,-.04,-.12,-3.7,.04,-.12,3.7,.04,-.12,-3.7,-.04,-.12,3.7,.04,-.12,3.7,-.04,-.12,3.7,-.04,-.12,3.7,.04,-.12,3.7,.04,.12,3.7,-.04,-.12,3.7,.04,.12,3.7,-.04,.12,3.7,-.04,.12,3.7,.04,.12,-3.7,.04,.12,3.7,-.04,.12,-3.7,.04,.12,-3.7,-.04,.12,-3.7,-.04,-.12,3.7,-.04,-.12,3.7,-.04,.12,-3.7,-.04,-.12,3.7,-.04,.12,-3.7,-.04,.12,3.7,.04,-.12,-3.7,.04,-.12,-3.7,.04,.12,3.7,.04,-.12,-3.7,.04,.12,3.7,.04,.12],"940da43558ab4959":[18.31,.47,-26.5,18.22,.53,-26.5,18.18,.62,-26.5,18.18,.62,-26.5,18.22,.71,-26.5,18.31,.77,-26.5,18.31,.77,-26.5,18.99,.77,-26.5,19.08,.71,-26.5,19.08,.71,-26.5,19.12,.62,-26.5,19.08,.53,-26.5,19.08,.53,-26.5,18.99,.47,-26.5,18.31,.47,-26.5,18.31,.47,-26.5,18.18,.62,-26.5,18.31,.77,-26.5,18.31,.77,-26.5,19.08,.71,-26.5,19.08,.53,-26.5,18.31,.77,-26.5,19.08,.53,-26.5,18.31,.47,-26.5,18.22,.53,-37.5,18.31,.47,-37.5,18.99,.47,-37.5,18.99,.47,-37.5,19.08,.53,-37.5,19.12,.62,-37.5,19.12,.62,-37.5,19.08,.71,-37.5,18.99,.77,-37.5,18.99,.77,-37.5,18.31,.77,-37.5,18.22,.71,-37.5,18.22,.71,-37.5,18.18,.62,-37.5,18.22,.53,-37.5,18.22,.53,-37.5,18.99,.47,-37.5,19.12,.62,-37.5,19.12,.62,-37.5,18.99,.77,-37.5,18.22,.71,-37.5,19.12,.62,-37.5,18.22,.71,-37.5,18.22,.53,-37.5,18.31,.47,-26.5,18.99,.47,-26.5,18.99,.47,-37.5,18.31,.47,-26.5,18.99,.47,-37.5,18.31,.47,-37.5,18.99,.77,-26.5,18.31,.77,-26.5,18.31,.77,-37.5,18.99,.77,-26.5,18.31,.77,-37.5,18.99,.77,-37.5],"68d9b51c17f37dde":[18.99,.47,-26.5,19.08,.53,-26.5,19.08,.53,-37.5,18.99,.47,-26.5,19.08,.53,-37.5,18.99,.47,-37.5,19.08,.53,-26.5,19.12,.62,-26.5,19.12,.62,-37.5,19.08,.53,-26.5,19.12,.62,-37.5,19.08,.53,-37.5,19.12,.62,-26.5,19.08,.71,-26.5,19.08,.71,-37.5,19.12,.62,-26.5,19.08,.71,-37.5,19.12,.62,-37.5,19.08,.71,-26.5,18.99,.77,-26.5,18.99,.77,-37.5,19.08,.71,-26.5,18.99,.77,-37.5,19.08,.71,-37.5,18.31,.77,-26.5,18.22,.71,-26.5,18.22,.71,-37.5,18.31,.77,-26.5,18.22,.71,-37.5,18.31,.77,-37.5,18.22,.71,-26.5,18.18,.62,-26.5,18.18,.62,-37.5,18.22,.71,-26.5,18.18,.62,-37.5,18.22,.71,-37.5,18.18,.62,-26.5,18.22,.53,-26.5,18.22,.53,-37.5,18.18,.62,-26.5,18.22,.53,-37.5,18.18,.62,-37.5,18.22,.53,-26.5,18.31,.47,-26.5,18.31,.47,-37.5,18.22,.53,-26.5,18.31,.47,-37.5,18.22,.53,-37.5],e670b2d9a20876a2:[0,-.235,-.34,0,.235,-.34,.088,.235,-.32841,0,-.235,-.34,.088,.235,-.32841,.088,-.235,-.32841,.088,-.235,-.32841,.088,.235,-.32841,.17,.235,-.29445,.088,-.235,-.32841,.17,.235,-.29445,.17,-.235,-.29445,.17,-.235,-.29445,.17,.235,-.29445,.24042,.235,-.24042,.17,-.235,-.29445,.24042,.235,-.24042,.24042,-.235,-.24042,.24042,-.235,-.24042,.24042,.235,-.24042,.29445,.235,-.17,.24042,-.235,-.24042,.29445,.235,-.17,.29445,-.235,-.17,.29445,-.235,-.17,.29445,.235,-.17,.32841,.235,-.088,.29445,-.235,-.17,.32841,.235,-.088,.32841,-.235,-.088,.32841,-.235,-.088,.32841,.235,-.088,.34,.235,-0,.32841,-.235,-.088,.34,.235,-0,.34,-.235,-0,.34,-.235,-0,.34,.235,-0,.32841,.235,.088,.34,-.235,-0,.32841,.235,.088,.32841,-.235,.088,.32841,-.235,.088,.32841,.235,.088,.29445,.235,.17,.32841,-.235,.088,.29445,.235,.17,.29445,-.235,.17,.29445,-.235,.17,.29445,.235,.17,.24042,.235,.24042,.29445,-.235,.17,.24042,.235,.24042,.24042,-.235,.24042,.24042,-.235,.24042,.24042,.235,.24042,.17,.235,.29445,.24042,-.235,.24042,.17,.235,.29445,.17,-.235,.29445,.17,-.235,.29445,.17,.235,.29445,.088,.235,.32841,.17,-.235,.29445,.088,.235,.32841,.088,-.235,.32841,.088,-.235,.32841,.088,.235,.32841,0,.235,.34,.088,-.235,.32841,0,.235,.34,0,-.235,.34,0,-.235,.34,0,.235,.34,-.088,.235,.32841,0,-.235,.34,-.088,.235,.32841,-.088,-.235,.32841,-.088,-.235,.32841,-.088,.235,.32841,-.17,.235,.29445,-.088,-.235,.32841,-.17,.235,.29445,-.17,-.235,.29445,-.17,-.235,.29445,-.17,.235,.29445,-.24042,.235,.24042,-.17,-.235,.29445,-.24042,.235,.24042,-.24042,-.235,.24042,-.24042,-.235,.24042,-.24042,.235,.24042,-.29445,.235,.17,-.24042,-.235,.24042,-.29445,.235,.17,-.29445,-.235,.17,-.29445,-.235,.17,-.29445,.235,.17,-.32841,.235,.088,-.29445,-.235,.17,-.32841,.235,.088,-.32841,-.235,.088,-.32841,-.235,.088,-.32841,.235,.088,-.34,.235,-0,-.32841,-.235,.088,-.34,.235,-0,-.34,-.235,-0,-.34,-.235,-0,-.34,.235,-0,-.32841,.235,-.088,-.34,-.235,-0,-.32841,.235,-.088,-.32841,-.235,-.088,-.32841,-.235,-.088,-.32841,.235,-.088,-.29445,.235,-.17,-.32841,-.235,-.088,-.29445,.235,-.17,-.29445,-.235,-.17,-.29445,-.235,-.17,-.29445,.235,-.17,-.24042,.235,-.24042,-.29445,-.235,-.17,-.24042,.235,-.24042,-.24042,-.235,-.24042,-.24042,-.235,-.24042,-.24042,.235,-.24042,-.17,.235,-.29445,-.24042,-.235,-.24042,-.17,.235,-.29445,-.17,-.235,-.29445,.17,.235,-.29445,.088,.235,-.32841,0,.235,-.34,0,.235,-.34,-.088,.235,-.32841,-.17,.235,-.29445,-.17,.235,-.29445,-.24042,.235,-.24042,-.29445,.235,-.17,-.29445,.235,-.17,-.32841,.235,-.088,-.34,.235,-0,-.34,.235,-0,-.32841,.235,.088,-.29445,.235,.17,-.29445,.235,.17,-.24042,.235,.24042,-.17,.235,.29445,-.17,.235,.29445,-.088,.235,.32841,0,.235,.34,0,.235,.34,.088,.235,.32841,.17,.235,.29445,.17,.235,.29445,.24042,.235,.24042,.29445,.235,.17,.29445,.235,.17,.32841,.235,.088,.34,.235,-0,.34,.235,-0,.32841,.235,-.088,.29445,.235,-.17,.29445,.235,-.17,.24042,.235,-.24042,.17,.235,-.29445,.17,.235,-.29445,0,.235,-.34,-.17,.235,-.29445,-.17,.235,-.29445,-.29445,.235,-.17,-.34,.235,-0,-.34,.235,-0,-.29445,.235,.17,-.17,.235,.29445,-.17,.235,.29445,0,.235,.34,.17,.235,.29445,.17,.235,.29445,.29445,.235,.17,.34,.235,-0,.34,.235,-0,.29445,.235,-.17,.17,.235,-.29445,.17,.235,-.29445,-.17,.235,-.29445,-.34,.235,-0,-.34,.235,-0,-.17,.235,.29445,.17,.235,.29445,.17,.235,.29445,.34,.235,-0,.17,.235,-.29445,-.34,.235,-0,.17,.235,.29445,.17,.235,-.29445,-.17,-.235,-.29445,-.17,.235,-.29445,-.088,.235,-.32841,-.17,-.235,-.29445,-.088,.235,-.32841,-.088,-.235,-.32841,-.088,-.235,-.32841,-.088,.235,-.32841,0,.235,-.34,-.088,-.235,-.32841,0,.235,-.34,0,-.235,-.34,-.088,-.235,-.32841,0,-.235,-.34,.088,-.235,-.32841,.088,-.235,-.32841,.17,-.235,-.29445,.24042,-.235,-.24042,.24042,-.235,-.24042,.29445,-.235,-.17,.32841,-.235,-.088,.32841,-.235,-.088,.34,-.235,-0,.32841,-.235,.088,.32841,-.235,.088,.29445,-.235,.17,.24042,-.235,.24042,.24042,-.235,.24042,.17,-.235,.29445,.088,-.235,.32841,.088,-.235,.32841,0,-.235,.34,-.088,-.235,.32841,-.088,-.235,.32841,-.17,-.235,.29445,-.24042,-.235,.24042,-.24042,-.235,.24042,-.29445,-.235,.17,-.32841,-.235,.088,-.32841,-.235,.088,-.34,-.235,-0,-.32841,-.235,-.088,-.32841,-.235,-.088,-.29445,-.235,-.17,-.24042,-.235,-.24042,-.24042,-.235,-.24042,-.17,-.235,-.29445,-.088,-.235,-.32841,-.088,-.235,-.32841,.088,-.235,-.32841,.24042,-.235,-.24042,.24042,-.235,-.24042,.32841,-.235,-.088,.32841,-.235,.088,.32841,-.235,.088,.24042,-.235,.24042,.088,-.235,.32841,.088,-.235,.32841,-.088,-.235,.32841,-.24042,-.235,.24042,-.24042,-.235,.24042,-.32841,-.235,.088,-.32841,-.235,-.088,-.32841,-.235,-.088,-.24042,-.235,-.24042,-.088,-.235,-.32841,-.088,-.235,-.32841,.24042,-.235,-.24042,.32841,-.235,.088,.32841,-.235,.088,.088,-.235,.32841,-.24042,-.235,.24042,-.24042,-.235,.24042,-.32841,-.235,-.088,-.088,-.235,-.32841,.32841,-.235,.088,-.24042,-.235,.24042,-.088,-.235,-.32841],"3a1e00be73c44d75":[0,-.006,-.29,0,.006,-.29,.07506,.006,-.28012,0,-.006,-.29,.07506,.006,-.28012,.07506,-.006,-.28012,.07506,-.006,-.28012,.07506,.006,-.28012,.145,.006,-.25115,.07506,-.006,-.28012,.145,.006,-.25115,.145,-.006,-.25115,.145,-.006,-.25115,.145,.006,-.25115,.20506,.006,-.20506,.145,-.006,-.25115,.20506,.006,-.20506,.20506,-.006,-.20506,.20506,-.006,-.20506,.20506,.006,-.20506,.25115,.006,-.145,.20506,-.006,-.20506,.25115,.006,-.145,.25115,-.006,-.145,.25115,-.006,-.145,.25115,.006,-.145,.28012,.006,-.07506,.25115,-.006,-.145,.28012,.006,-.07506,.28012,-.006,-.07506,.28012,-.006,-.07506,.28012,.006,-.07506,.29,.006,-0,.28012,-.006,-.07506,.29,.006,-0,.29,-.006,-0,.29,-.006,-0,.29,.006,-0,.28012,.006,.07506,.29,-.006,-0,.28012,.006,.07506,.28012,-.006,.07506,.28012,-.006,.07506,.28012,.006,.07506,.25115,.006,.145,.28012,-.006,.07506,.25115,.006,.145,.25115,-.006,.145,.25115,-.006,.145,.25115,.006,.145,.20506,.006,.20506,.25115,-.006,.145,.20506,.006,.20506,.20506,-.006,.20506,.20506,-.006,.20506,.20506,.006,.20506,.145,.006,.25115,.20506,-.006,.20506,.145,.006,.25115,.145,-.006,.25115,.145,-.006,.25115,.145,.006,.25115,.07506,.006,.28012,.145,-.006,.25115,.07506,.006,.28012,.07506,-.006,.28012,.07506,-.006,.28012,.07506,.006,.28012,0,.006,.29,.07506,-.006,.28012,0,.006,.29,0,-.006,.29,0,-.006,.29,0,.006,.29,-.07506,.006,.28012,0,-.006,.29,-.07506,.006,.28012,-.07506,-.006,.28012,-.07506,-.006,.28012,-.07506,.006,.28012,-.145,.006,.25115,-.07506,-.006,.28012,-.145,.006,.25115,-.145,-.006,.25115,-.145,-.006,.25115,-.145,.006,.25115,-.20506,.006,.20506,-.145,-.006,.25115,-.20506,.006,.20506,-.20506,-.006,.20506,-.20506,-.006,.20506,-.20506,.006,.20506,-.25115,.006,.145,-.20506,-.006,.20506,-.25115,.006,.145,-.25115,-.006,.145,-.25115,-.006,.145,-.25115,.006,.145,-.28012,.006,.07506,-.25115,-.006,.145,-.28012,.006,.07506,-.28012,-.006,.07506,-.28012,-.006,.07506,-.28012,.006,.07506,-.29,.006,-0,-.28012,-.006,.07506,-.29,.006,-0,-.29,-.006,-0,-.29,-.006,-0,-.29,.006,-0,-.28012,.006,-.07506,-.29,-.006,-0,-.28012,.006,-.07506,-.28012,-.006,-.07506,-.28012,-.006,-.07506,-.28012,.006,-.07506,-.25115,.006,-.145,-.28012,-.006,-.07506,-.25115,.006,-.145,-.25115,-.006,-.145,-.25115,-.006,-.145,-.25115,.006,-.145,-.20506,.006,-.20506,-.25115,-.006,-.145,-.20506,.006,-.20506,-.20506,-.006,-.20506,-.20506,-.006,-.20506,-.20506,.006,-.20506,-.145,.006,-.25115,-.20506,-.006,-.20506,-.145,.006,-.25115,-.145,-.006,-.25115,.145,.006,-.25115,.07506,.006,-.28012,0,.006,-.29,0,.006,-.29,-.07506,.006,-.28012,-.145,.006,-.25115,-.145,.006,-.25115,-.20506,.006,-.20506,-.25115,.006,-.145,-.25115,.006,-.145,-.28012,.006,-.07506,-.29,.006,-0,-.29,.006,-0,-.28012,.006,.07506,-.25115,.006,.145,-.25115,.006,.145,-.20506,.006,.20506,-.145,.006,.25115,-.145,.006,.25115,-.07506,.006,.28012,0,.006,.29,0,.006,.29,.07506,.006,.28012,.145,.006,.25115,.145,.006,.25115,.20506,.006,.20506,.25115,.006,.145,.25115,.006,.145,.28012,.006,.07506,.29,.006,-0,.29,.006,-0,.28012,.006,-.07506,.25115,.006,-.145,.25115,.006,-.145,.20506,.006,-.20506,.145,.006,-.25115,.145,.006,-.25115,0,.006,-.29,-.145,.006,-.25115,-.145,.006,-.25115,-.25115,.006,-.145,-.29,.006,-0,-.29,.006,-0,-.25115,.006,.145,-.145,.006,.25115,-.145,.006,.25115,0,.006,.29,.145,.006,.25115,.145,.006,.25115,.25115,.006,.145,.29,.006,-0,.29,.006,-0,.25115,.006,-.145,.145,.006,-.25115,.145,.006,-.25115,-.145,.006,-.25115,-.29,.006,-0,-.29,.006,-0,-.145,.006,.25115,.145,.006,.25115,.145,.006,.25115,.29,.006,-0,.145,.006,-.25115,-.29,.006,-0,.145,.006,.25115,.145,.006,-.25115,-.145,-.006,-.25115,-.145,.006,-.25115,-.07506,.006,-.28012,-.145,-.006,-.25115,-.07506,.006,-.28012,-.07506,-.006,-.28012,-.07506,-.006,-.28012,-.07506,.006,-.28012,0,.006,-.29,-.07506,-.006,-.28012,0,.006,-.29,0,-.006,-.29,-.07506,-.006,-.28012,0,-.006,-.29,.07506,-.006,-.28012,.07506,-.006,-.28012,.145,-.006,-.25115,.20506,-.006,-.20506,.20506,-.006,-.20506,.25115,-.006,-.145,.28012,-.006,-.07506,.28012,-.006,-.07506,.29,-.006,-0,.28012,-.006,.07506,.28012,-.006,.07506,.25115,-.006,.145,.20506,-.006,.20506,.20506,-.006,.20506,.145,-.006,.25115,.07506,-.006,.28012,.07506,-.006,.28012,0,-.006,.29,-.07506,-.006,.28012,-.07506,-.006,.28012,-.145,-.006,.25115,-.20506,-.006,.20506,-.20506,-.006,.20506,-.25115,-.006,.145,-.28012,-.006,.07506,-.28012,-.006,.07506,-.29,-.006,-0,-.28012,-.006,-.07506,-.28012,-.006,-.07506,-.25115,-.006,-.145,-.20506,-.006,-.20506,-.20506,-.006,-.20506,-.145,-.006,-.25115,-.07506,-.006,-.28012,-.07506,-.006,-.28012,.07506,-.006,-.28012,.20506,-.006,-.20506,.20506,-.006,-.20506,.28012,-.006,-.07506,.28012,-.006,.07506,.28012,-.006,.07506,.20506,-.006,.20506,.07506,-.006,.28012,.07506,-.006,.28012,-.07506,-.006,.28012,-.20506,-.006,.20506,-.20506,-.006,.20506,-.28012,-.006,.07506,-.28012,-.006,-.07506,-.28012,-.006,-.07506,-.20506,-.006,-.20506,-.07506,-.006,-.28012,-.07506,-.006,-.28012,.20506,-.006,-.20506,.28012,-.006,.07506,.28012,-.006,.07506,.07506,-.006,.28012,-.20506,-.006,.20506,-.20506,-.006,.20506,-.28012,-.006,-.07506,-.07506,-.006,-.28012,.28012,-.006,.07506,-.20506,-.006,.20506,-.07506,-.006,-.28012],"68cd22969602813f":[-15,-.16,11.5,-15,.16,11.5,-15,.16,-11.5,-15,-.16,11.5,-15,.16,-11.5,-15,-.16,-11.5,-15,-.16,-11.5,-15,.16,-11.5,15,.16,-11.5,-15,-.16,-11.5,15,.16,-11.5,15,-.16,-11.5,15,-.16,-11.5,15,.16,-11.5,15,.16,11.5,15,-.16,-11.5,15,.16,11.5,15,-.16,11.5,15,-.16,11.5,15,.16,11.5,-15,.16,11.5,15,-.16,11.5,-15,.16,11.5,-15,-.16,11.5,-15,-.16,-11.5,15,-.16,-11.5,15,-.16,11.5,-15,-.16,-11.5,15,-.16,11.5,-15,-.16,11.5,15,.16,-11.5,-15,.16,-11.5,-15,.16,11.5,15,.16,-11.5,-15,.16,11.5,15,.16,11.5],f881234c83bada65:[-15,-2,.15,-15,2,.15,-15,2,-.15,-15,-2,.15,-15,2,-.15,-15,-2,-.15,-15,-2,-.15,-15,2,-.15,15,2,-.15,-15,-2,-.15,15,2,-.15,15,-2,-.15,15,-2,-.15,15,2,-.15,15,2,.15,15,-2,-.15,15,2,.15,15,-2,.15,15,-2,.15,15,2,.15,-15,2,.15,15,-2,.15,-15,2,.15,-15,-2,.15,-15,-2,-.15,15,-2,-.15,15,-2,.15,-15,-2,-.15,15,-2,.15,-15,-2,.15,15,2,-.15,-15,2,-.15,-15,2,.15,15,2,-.15,-15,2,.15,15,2,.15],"9445c2c035248fc5":[-.15,-2,7.5,-.15,2,7.5,-.15,2,-7.5,-.15,-2,7.5,-.15,2,-7.5,-.15,-2,-7.5,-.15,-2,-7.5,-.15,2,-7.5,.15,2,-7.5,-.15,-2,-7.5,.15,2,-7.5,.15,-2,-7.5,.15,-2,-7.5,.15,2,-7.5,.15,2,7.5,.15,-2,-7.5,.15,2,7.5,.15,-2,7.5,.15,-2,7.5,.15,2,7.5,-.15,2,7.5,.15,-2,7.5,-.15,2,7.5,-.15,-2,7.5,-.15,-2,-7.5,.15,-2,-7.5,.15,-2,7.5,-.15,-2,-7.5,.15,-2,7.5,-.15,-2,7.5,.15,2,-7.5,-.15,2,-7.5,-.15,2,7.5,.15,2,-7.5,-.15,2,7.5,.15,2,7.5],a04eeb290ebe8b3d:[-5.5,-2,.15,-5.5,2,.15,-5.5,2,-.15,-5.5,-2,.15,-5.5,2,-.15,-5.5,-2,-.15,-5.5,-2,-.15,-5.5,2,-.15,5.5,2,-.15,-5.5,-2,-.15,5.5,2,-.15,5.5,-2,-.15,5.5,-2,-.15,5.5,2,-.15,5.5,2,.15,5.5,-2,-.15,5.5,2,.15,5.5,-2,.15,5.5,-2,.15,5.5,2,.15,-5.5,2,.15,5.5,-2,.15,-5.5,2,.15,-5.5,-2,.15,-5.5,-2,-.15,5.5,-2,-.15,5.5,-2,.15,-5.5,-2,-.15,5.5,-2,.15,-5.5,-2,.15,5.5,2,-.15,-5.5,2,-.15,-5.5,2,.15,5.5,2,-.15,-5.5,2,.15,5.5,2,.15],"51b91faa23494f6a":[-4,-.175,.175,-4,.175,.175,-4,.175,-.175,-4,-.175,.175,-4,.175,-.175,-4,-.175,-.175,-4,-.175,-.175,-4,.175,-.175,4,.175,-.175,-4,-.175,-.175,4,.175,-.175,4,-.175,-.175,4,-.175,-.175,4,.175,-.175,4,.175,.175,4,-.175,-.175,4,.175,.175,4,-.175,.175,4,-.175,.175,4,.175,.175,-4,.175,.175,4,-.175,.175,-4,.175,.175,-4,-.175,.175,-4,-.175,-.175,4,-.175,-.175,4,-.175,.175,-4,-.175,-.175,4,-.175,.175,-4,-.175,.175,4,.175,-.175,-4,.175,-.175,-4,.175,.175,4,.175,-.175,-4,.175,.175,4,.175,.175],"4f663e5c527f1072":[-.22,-2,.15,-.22,2,.15,-.22,2,-.15,-.22,-2,.15,-.22,2,-.15,-.22,-2,-.15,-.22,-2,-.15,-.22,2,-.15,.22,2,-.15,-.22,-2,-.15,.22,2,-.15,.22,-2,-.15,.22,-2,-.15,.22,2,-.15,.22,2,.15,.22,-2,-.15,.22,2,.15,.22,-2,.15,.22,-2,.15,.22,2,.15,-.22,2,.15,.22,-2,.15,-.22,2,.15,-.22,-2,.15,-.22,-2,-.15,.22,-2,-.15,.22,-2,.15,-.22,-2,-.15,.22,-2,.15,-.22,-2,.15,.22,2,-.15,-.22,2,-.15,-.22,2,.15,.22,2,-.15,-.22,2,.15,.22,2,.15],f81db431cc73adf8:[-5,-.2,.15,-5,.2,.15,-5,.2,-.15,-5,-.2,.15,-5,.2,-.15,-5,-.2,-.15,-5,-.2,-.15,-5,.2,-.15,5,.2,-.15,-5,-.2,-.15,5,.2,-.15,5,-.2,-.15,5,-.2,-.15,5,.2,-.15,5,.2,.15,5,-.2,-.15,5,.2,.15,5,-.2,.15,5,-.2,.15,5,.2,.15,-5,.2,.15,5,-.2,.15,-5,.2,.15,-5,-.2,.15,-5,-.2,-.15,5,-.2,-.15,5,-.2,.15,-5,-.2,-.15,5,-.2,.15,-5,-.2,.15,5,.2,-.15,-5,.2,-.15,-5,.2,.15,5,.2,-.15,-5,.2,.15,5,.2,.15],"7cbaa260f47d5052":[-.15,-2,4,-.15,2,4,-.15,2,-4,-.15,-2,4,-.15,2,-4,-.15,-2,-4,-.15,-2,-4,-.15,2,-4,.15,2,-4,-.15,-2,-4,.15,2,-4,.15,-2,-4,.15,-2,-4,.15,2,-4,.15,2,4,.15,-2,-4,.15,2,4,.15,-2,4,.15,-2,4,.15,2,4,-.15,2,4,.15,-2,4,-.15,2,4,-.15,-2,4,-.15,-2,-4,.15,-2,-4,.15,-2,4,-.15,-2,-4,.15,-2,4,-.15,-2,4,.15,2,-4,-.15,2,-4,-.15,2,4,.15,2,-4,-.15,2,4,.15,2,4],b2370d8a6badbfc7:[-5,-2,.15,-5,2,.15,-5,2,-.15,-5,-2,.15,-5,2,-.15,-5,-2,-.15,-5,-2,-.15,-5,2,-.15,5,2,-.15,-5,-2,-.15,5,2,-.15,5,-2,-.15,5,-2,-.15,5,2,-.15,5,2,.15,5,-2,-.15,5,2,.15,5,-2,.15,5,-2,.15,5,2,.15,-5,2,.15,5,-2,.15,-5,2,.15,-5,-2,.15,-5,-2,-.15,5,-2,-.15,5,-2,.15,-5,-2,-.15,5,-2,.15,-5,-2,.15,5,2,-.15,-5,2,-.15,-5,2,.15,5,2,-.15,-5,2,.15,5,2,.15],"8c8f8ab6415d2423":[0,-.175,-1.1,0,.175,-1.1,.2146,.175,-1.07886,0,-.175,-1.1,.2146,.175,-1.07886,.2146,-.175,-1.07886,.2146,-.175,-1.07886,.2146,.175,-1.07886,.42095,.175,-1.01627,.2146,-.175,-1.07886,.42095,.175,-1.01627,.42095,-.175,-1.01627,.42095,-.175,-1.01627,.42095,.175,-1.01627,.61113,.175,-.91462,.42095,-.175,-1.01627,.61113,.175,-.91462,.61113,-.175,-.91462,.61113,-.175,-.91462,.61113,.175,-.91462,.77782,.175,-.77782,.61113,-.175,-.91462,.77782,.175,-.77782,.77782,-.175,-.77782,.77782,-.175,-.77782,.77782,.175,-.77782,.91462,.175,-.61113,.77782,-.175,-.77782,.91462,.175,-.61113,.91462,-.175,-.61113,.91462,-.175,-.61113,.91462,.175,-.61113,1.01627,.175,-.42095,.91462,-.175,-.61113,1.01627,.175,-.42095,1.01627,-.175,-.42095,1.01627,-.175,-.42095,1.01627,.175,-.42095,1.07886,.175,-.2146,1.01627,-.175,-.42095,1.07886,.175,-.2146,1.07886,-.175,-.2146,1.07886,-.175,-.2146,1.07886,.175,-.2146,1.1,.175,-0,1.07886,-.175,-.2146,1.1,.175,-0,1.1,-.175,-0,1.1,-.175,-0,1.1,.175,-0,1.07886,.175,.2146,1.1,-.175,-0,1.07886,.175,.2146,1.07886,-.175,.2146,1.07886,-.175,.2146,1.07886,.175,.2146,1.01627,.175,.42095,1.07886,-.175,.2146,1.01627,.175,.42095,1.01627,-.175,.42095,1.01627,-.175,.42095,1.01627,.175,.42095,.91462,.175,.61113,1.01627,-.175,.42095,.91462,.175,.61113,.91462,-.175,.61113,.91462,-.175,.61113,.91462,.175,.61113,.77782,.175,.77782,.91462,-.175,.61113,.77782,.175,.77782,.77782,-.175,.77782,.77782,-.175,.77782,.77782,.175,.77782,.61113,.175,.91462,.77782,-.175,.77782,.61113,.175,.91462,.61113,-.175,.91462,.61113,-.175,.91462,.61113,.175,.91462,.42095,.175,1.01627,.61113,-.175,.91462,.42095,.175,1.01627,.42095,-.175,1.01627,.42095,-.175,1.01627,.42095,.175,1.01627,.2146,.175,1.07886,.42095,-.175,1.01627,.2146,.175,1.07886,.2146,-.175,1.07886,.2146,-.175,1.07886,.2146,.175,1.07886,0,.175,1.1,.2146,-.175,1.07886,0,.175,1.1,0,-.175,1.1,0,-.175,1.1,0,.175,1.1,-.2146,.175,1.07886,0,-.175,1.1,-.2146,.175,1.07886,-.2146,-.175,1.07886,-.2146,-.175,1.07886,-.2146,.175,1.07886,-.42095,.175,1.01627,-.2146,-.175,1.07886,-.42095,.175,1.01627,-.42095,-.175,1.01627,-.42095,-.175,1.01627,-.42095,.175,1.01627,-.61113,.175,.91462,-.42095,-.175,1.01627,-.61113,.175,.91462,-.61113,-.175,.91462,-.61113,-.175,.91462,-.61113,.175,.91462,-.77782,.175,.77782,-.61113,-.175,.91462,-.77782,.175,.77782,-.77782,-.175,.77782,-.77782,-.175,.77782,-.77782,.175,.77782,-.91462,.175,.61113,-.77782,-.175,.77782,-.91462,.175,.61113,-.91462,-.175,.61113,-.91462,-.175,.61113,-.91462,.175,.61113,-1.01627,.175,.42095,-.91462,-.175,.61113,-1.01627,.175,.42095,-1.01627,-.175,.42095,-1.01627,-.175,.42095,-1.01627,.175,.42095,-1.07886,.175,.2146,-1.01627,-.175,.42095,-1.07886,.175,.2146,-1.07886,-.175,.2146,-1.07886,-.175,.2146,-1.07886,.175,.2146,-1.1,.175,-0,-1.07886,-.175,.2146,-1.1,.175,-0,-1.1,-.175,-0,-1.1,-.175,-0,-1.1,.175,-0,-1.07886,.175,-.2146,-1.1,-.175,-0,-1.07886,.175,-.2146,-1.07886,-.175,-.2146,-1.07886,-.175,-.2146,-1.07886,.175,-.2146,-1.01627,.175,-.42095,-1.07886,-.175,-.2146,-1.01627,.175,-.42095,-1.01627,-.175,-.42095,-1.01627,-.175,-.42095,-1.01627,.175,-.42095,-.91462,.175,-.61113,-1.01627,-.175,-.42095,-.91462,.175,-.61113,-.91462,-.175,-.61113,-.91462,-.175,-.61113,-.91462,.175,-.61113,-.77782,.175,-.77782,-.91462,-.175,-.61113,-.77782,.175,-.77782,-.77782,-.175,-.77782,-.77782,-.175,-.77782,-.77782,.175,-.77782,-.61113,.175,-.91462,-.77782,-.175,-.77782,-.61113,.175,-.91462,-.61113,-.175,-.91462,-.61113,-.175,-.91462,-.61113,.175,-.91462,-.42095,.175,-1.01627,-.61113,-.175,-.91462,-.42095,.175,-1.01627,-.42095,-.175,-1.01627,.42095,.175,-1.01627,.2146,.175,-1.07886,0,.175,-1.1,0,.175,-1.1,-.2146,.175,-1.07886,-.42095,.175,-1.01627,-.42095,.175,-1.01627,-.61113,.175,-.91462,-.77782,.175,-.77782,-.77782,.175,-.77782,-.91462,.175,-.61113,-1.01627,.175,-.42095,-1.01627,.175,-.42095,-1.07886,.175,-.2146,-1.1,.175,-0,-1.1,.175,-0,-1.07886,.175,.2146,-1.01627,.175,.42095,-1.01627,.175,.42095,-.91462,.175,.61113,-.77782,.175,.77782,-.77782,.175,.77782,-.61113,.175,.91462,-.42095,.175,1.01627,-.42095,.175,1.01627,-.2146,.175,1.07886,0,.175,1.1,0,.175,1.1,.2146,.175,1.07886,.42095,.175,1.01627,.42095,.175,1.01627,.61113,.175,.91462,.77782,.175,.77782,.77782,.175,.77782,.91462,.175,.61113,1.01627,.175,.42095,1.01627,.175,.42095,1.07886,.175,.2146,1.1,.175,-0,1.1,.175,-0,1.07886,.175,-.2146,1.01627,.175,-.42095,1.01627,.175,-.42095,.91462,.175,-.61113,.77782,.175,-.77782,.77782,.175,-.77782,.61113,.175,-.91462,.42095,.175,-1.01627,.42095,.175,-1.01627,0,.175,-1.1,-.42095,.175,-1.01627,-.42095,.175,-1.01627,-.77782,.175,-.77782,-1.01627,.175,-.42095,-1.01627,.175,-.42095,-1.1,.175,-0,-1.01627,.175,.42095,-1.01627,.175,.42095,-.77782,.175,.77782,-.42095,.175,1.01627,-.42095,.175,1.01627,0,.175,1.1,.42095,.175,1.01627,.42095,.175,1.01627,.77782,.175,.77782,1.01627,.175,.42095,1.01627,.175,.42095,1.1,.175,-0,1.01627,.175,-.42095,1.01627,.175,-.42095,.77782,.175,-.77782,.42095,.175,-1.01627,.42095,.175,-1.01627,-.42095,.175,-1.01627,-1.01627,.175,-.42095,-1.01627,.175,-.42095,-1.01627,.175,.42095,-.42095,.175,1.01627,-.42095,.175,1.01627,.42095,.175,1.01627,1.01627,.175,.42095,1.01627,.175,.42095,1.01627,.175,-.42095,.42095,.175,-1.01627,.42095,.175,-1.01627,-1.01627,.175,-.42095,-.42095,.175,1.01627,-.42095,.175,1.01627,1.01627,.175,.42095,.42095,.175,-1.01627,-.42095,-.175,-1.01627,-.42095,.175,-1.01627,-.2146,.175,-1.07886,-.42095,-.175,-1.01627,-.2146,.175,-1.07886,-.2146,-.175,-1.07886,-.2146,-.175,-1.07886,-.2146,.175,-1.07886,0,.175,-1.1,-.2146,-.175,-1.07886,0,.175,-1.1,0,-.175,-1.1,-.2146,-.175,-1.07886,0,-.175,-1.1,.2146,-.175,-1.07886,.2146,-.175,-1.07886,.42095,-.175,-1.01627,.61113,-.175,-.91462,.61113,-.175,-.91462,.77782,-.175,-.77782,.91462,-.175,-.61113,.91462,-.175,-.61113,1.01627,-.175,-.42095,1.07886,-.175,-.2146,1.07886,-.175,-.2146,1.1,-.175,-0,1.07886,-.175,.2146,1.07886,-.175,.2146,1.01627,-.175,.42095,.91462,-.175,.61113,.91462,-.175,.61113,.77782,-.175,.77782,.61113,-.175,.91462,.61113,-.175,.91462,.42095,-.175,1.01627,.2146,-.175,1.07886,.2146,-.175,1.07886,0,-.175,1.1,-.2146,-.175,1.07886,-.2146,-.175,1.07886,-.42095,-.175,1.01627,-.61113,-.175,.91462,-.61113,-.175,.91462,-.77782,-.175,.77782,-.91462,-.175,.61113,-.91462,-.175,.61113,-1.01627,-.175,.42095,-1.07886,-.175,.2146,-1.07886,-.175,.2146,-1.1,-.175,-0,-1.07886,-.175,-.2146,-1.07886,-.175,-.2146,-1.01627,-.175,-.42095,-.91462,-.175,-.61113,-.91462,-.175,-.61113,-.77782,-.175,-.77782,-.61113,-.175,-.91462,-.61113,-.175,-.91462,-.42095,-.175,-1.01627,-.2146,-.175,-1.07886,-.2146,-.175,-1.07886,.2146,-.175,-1.07886,.61113,-.175,-.91462,.61113,-.175,-.91462,.91462,-.175,-.61113,1.07886,-.175,-.2146,1.07886,-.175,-.2146,1.07886,-.175,.2146,.91462,-.175,.61113,.91462,-.175,.61113,.61113,-.175,.91462,.2146,-.175,1.07886,.2146,-.175,1.07886,-.2146,-.175,1.07886,-.61113,-.175,.91462,-.61113,-.175,.91462,-.91462,-.175,.61113,-1.07886,-.175,.2146,-1.07886,-.175,.2146,-1.07886,-.175,-.2146,-.91462,-.175,-.61113,-.91462,-.175,-.61113,-.61113,-.175,-.91462,-.2146,-.175,-1.07886,-.2146,-.175,-1.07886,.61113,-.175,-.91462,1.07886,-.175,-.2146,1.07886,-.175,-.2146,.91462,-.175,.61113,.2146,-.175,1.07886,.2146,-.175,1.07886,-.61113,-.175,.91462,-1.07886,-.175,.2146,-1.07886,-.175,.2146,-.91462,-.175,-.61113,-.2146,-.175,-1.07886,-.2146,-.175,-1.07886,1.07886,-.175,-.2146,.2146,-.175,1.07886,.2146,-.175,1.07886,-1.07886,-.175,.2146,-.2146,-.175,-1.07886],"131bd34ec27b49d9":[-15,-.2,11.5,-15,.2,11.5,-15,.2,-11.5,-15,-.2,11.5,-15,.2,-11.5,-15,-.2,-11.5,-15,-.2,-11.5,-15,.2,-11.5,15,.2,-11.5,-15,-.2,-11.5,15,.2,-11.5,15,-.2,-11.5,15,-.2,-11.5,15,.2,-11.5,15,.2,11.5,15,-.2,-11.5,15,.2,11.5,15,-.2,11.5,15,-.2,11.5,15,.2,11.5,-15,.2,11.5,15,-.2,11.5,-15,.2,11.5,-15,-.2,11.5,-15,-.2,-11.5,15,-.2,-11.5,15,-.2,11.5,-15,-.2,-11.5,15,-.2,11.5,-15,-.2,11.5,15,.2,-11.5,-15,.2,-11.5,-15,.2,11.5,15,.2,-11.5,-15,.2,11.5,15,.2,11.5],fe2155916e4a905e:[-13.5,-1.5,10,-13.5,1.5,10,-13.5,1.5,-10,-13.5,-1.5,10,-13.5,1.5,-10,-13.5,-1.5,-10,-13.5,-1.5,-10,-13.5,1.5,-10,13.5,1.5,-10,-13.5,-1.5,-10,13.5,1.5,-10,13.5,-1.5,-10,13.5,-1.5,-10,13.5,1.5,-10,13.5,1.5,10,13.5,-1.5,-10,13.5,1.5,10,13.5,-1.5,10,13.5,-1.5,10,13.5,1.5,10,-13.5,1.5,10,13.5,-1.5,10,-13.5,1.5,10,-13.5,-1.5,10,-13.5,-1.5,-10,13.5,-1.5,-10,13.5,-1.5,10,-13.5,-1.5,-10,13.5,-1.5,10,-13.5,-1.5,10,13.5,1.5,-10,-13.5,1.5,-10,-13.5,1.5,10,13.5,1.5,-10,-13.5,1.5,10,13.5,1.5,10],c44e333d406df2b5:[-14.5,-.15,11,-14.5,.15,11,-14.5,.15,-11,-14.5,-.15,11,-14.5,.15,-11,-14.5,-.15,-11,-14.5,-.15,-11,-14.5,.15,-11,14.5,.15,-11,-14.5,-.15,-11,14.5,.15,-11,14.5,-.15,-11,14.5,-.15,-11,14.5,.15,-11,14.5,.15,11,14.5,-.15,-11,14.5,.15,11,14.5,-.15,11,14.5,-.15,11,14.5,.15,11,-14.5,.15,11,14.5,-.15,11,-14.5,.15,11,-14.5,-.15,11,-14.5,-.15,-11,14.5,-.15,-11,14.5,-.15,11,-14.5,-.15,-11,14.5,-.15,11,-14.5,-.15,11,14.5,.15,-11,-14.5,.15,-11,-14.5,.15,11,14.5,.15,-11,-14.5,.15,11,14.5,.15,11],"05a72a49351910e7":[-10.5,-1.325,7.5,-10.5,1.325,7.5,-10.5,1.325,-7.5,-10.5,-1.325,7.5,-10.5,1.325,-7.5,-10.5,-1.325,-7.5,-10.5,-1.325,-7.5,-10.5,1.325,-7.5,10.5,1.325,-7.5,-10.5,-1.325,-7.5,10.5,1.325,-7.5,10.5,-1.325,-7.5,10.5,-1.325,-7.5,10.5,1.325,-7.5,10.5,1.325,7.5,10.5,-1.325,-7.5,10.5,1.325,7.5,10.5,-1.325,7.5,10.5,-1.325,7.5,10.5,1.325,7.5,-10.5,1.325,7.5,10.5,-1.325,7.5,-10.5,1.325,7.5,-10.5,-1.325,7.5,-10.5,-1.325,-7.5,10.5,-1.325,-7.5,10.5,-1.325,7.5,-10.5,-1.325,-7.5,10.5,-1.325,7.5,-10.5,-1.325,7.5,10.5,1.325,-7.5,-10.5,1.325,-7.5,-10.5,1.325,7.5,10.5,1.325,-7.5,-10.5,1.325,7.5,10.5,1.325,7.5],"94d3eb09379c2513":[-11.5,-.15,8.5,-11.5,.15,8.5,-11.5,.15,-8.5,-11.5,-.15,8.5,-11.5,.15,-8.5,-11.5,-.15,-8.5,-11.5,-.15,-8.5,-11.5,.15,-8.5,11.5,.15,-8.5,-11.5,-.15,-8.5,11.5,.15,-8.5,11.5,-.15,-8.5,11.5,-.15,-8.5,11.5,.15,-8.5,11.5,.15,8.5,11.5,-.15,-8.5,11.5,.15,8.5,11.5,-.15,8.5,11.5,-.15,8.5,11.5,.15,8.5,-11.5,.15,8.5,11.5,-.15,8.5,-11.5,.15,8.5,-11.5,-.15,8.5,-11.5,-.15,-8.5,11.5,-.15,-8.5,11.5,-.15,8.5,-11.5,-.15,-8.5,11.5,-.15,8.5,-11.5,-.15,8.5,11.5,.15,-8.5,-11.5,.15,-8.5,-11.5,.15,8.5,11.5,.15,-8.5,-11.5,.15,8.5,11.5,.15,8.5],ae5cd0e74f9d96e4:[-3.85,-.14,.36,-3.85,.14,.36,-3.85,.14,-.36,-3.85,-.14,.36,-3.85,.14,-.36,-3.85,-.14,-.36,-3.85,-.14,-.36,-3.85,.14,-.36,3.85,.14,-.36,-3.85,-.14,-.36,3.85,.14,-.36,3.85,-.14,-.36,3.85,-.14,-.36,3.85,.14,-.36,3.85,.14,.36,3.85,-.14,-.36,3.85,.14,.36,3.85,-.14,.36,3.85,-.14,.36,3.85,.14,.36,-3.85,.14,.36,3.85,-.14,.36,-3.85,.14,.36,-3.85,-.14,.36,-3.85,-.14,-.36,3.85,-.14,-.36,3.85,-.14,.36,-3.85,-.14,-.36,3.85,-.14,.36,-3.85,-.14,.36,3.85,.14,-.36,-3.85,.14,-.36,-3.85,.14,.36,3.85,.14,-.36,-3.85,.14,.36,3.85,.14,.36],"24e6f05a4013b8ea":[-.15,-.28,.325,-.15,.28,.325,-.15,.28,-.325,-.15,-.28,.325,-.15,.28,-.325,-.15,-.28,-.325,-.15,-.28,-.325,-.15,.28,-.325,.15,.28,-.325,-.15,-.28,-.325,.15,.28,-.325,.15,-.28,-.325,.15,-.28,-.325,.15,.28,-.325,.15,.28,.325,.15,-.28,-.325,.15,.28,.325,.15,-.28,.325,.15,-.28,.325,.15,.28,.325,-.15,.28,.325,.15,-.28,.325,-.15,.28,.325,-.15,-.28,.325,-.15,-.28,-.325,.15,-.28,-.325,.15,-.28,.325,-.15,-.28,-.325,.15,-.28,.325,-.15,-.28,.325,.15,.28,-.325,-.15,.28,-.325,-.15,.28,.325,.15,.28,-.325,-.15,.28,.325,.15,.28,.325],"3a2f654b382c3bb6":[-.125,-1.65,2.5,-.125,1.65,2.5,-.125,1.65,-2.5,-.125,-1.65,2.5,-.125,1.65,-2.5,-.125,-1.65,-2.5,-.125,-1.65,-2.5,-.125,1.65,-2.5,.125,1.65,-2.5,-.125,-1.65,-2.5,.125,1.65,-2.5,.125,-1.65,-2.5,.125,-1.65,-2.5,.125,1.65,-2.5,.125,1.65,2.5,.125,-1.65,-2.5,.125,1.65,2.5,.125,-1.65,2.5,.125,-1.65,2.5,.125,1.65,2.5,-.125,1.65,2.5,.125,-1.65,2.5,-.125,1.65,2.5,-.125,-1.65,2.5,-.125,-1.65,-2.5,.125,-1.65,-2.5,.125,-1.65,2.5,-.125,-1.65,-2.5,.125,-1.65,2.5,-.125,-1.65,2.5,.125,1.65,-2.5,-.125,1.65,-2.5,-.125,1.65,2.5,.125,1.65,-2.5,-.125,1.65,2.5,.125,1.65,2.5],ce6331ab84d68545:[-10,-.1,2.5,-10,.1,2.5,-10,.1,-2.5,-10,-.1,2.5,-10,.1,-2.5,-10,-.1,-2.5,-10,-.1,-2.5,-10,.1,-2.5,10,.1,-2.5,-10,-.1,-2.5,10,.1,-2.5,10,-.1,-2.5,10,-.1,-2.5,10,.1,-2.5,10,.1,2.5,10,-.1,-2.5,10,.1,2.5,10,-.1,2.5,10,-.1,2.5,10,.1,2.5,-10,.1,2.5,10,-.1,2.5,-10,.1,2.5,-10,-.1,2.5,-10,-.1,-2.5,10,-.1,-2.5,10,-.1,2.5,-10,-.1,-2.5,10,-.1,2.5,-10,-.1,2.5,10,.1,-2.5,-10,.1,-2.5,-10,.1,2.5,10,.1,-2.5,-10,.1,2.5,10,.1,2.5],"6d873dea1be2af0d":[-10,-1.6,.125,-10,1.6,.125,-10,1.6,-.125,-10,-1.6,.125,-10,1.6,-.125,-10,-1.6,-.125,-10,-1.6,-.125,-10,1.6,-.125,10,1.6,-.125,-10,-1.6,-.125,10,1.6,-.125,10,-1.6,-.125,10,-1.6,-.125,10,1.6,-.125,10,1.6,.125,10,-1.6,-.125,10,1.6,.125,10,-1.6,.125,10,-1.6,.125,10,1.6,.125,-10,1.6,.125,10,-1.6,.125,-10,1.6,.125,-10,-1.6,.125,-10,-1.6,-.125,10,-1.6,-.125,10,-1.6,.125,-10,-1.6,-.125,10,-1.6,.125,-10,-1.6,.125,10,1.6,-.125,-10,1.6,-.125,-10,1.6,.125,10,1.6,-.125,-10,1.6,.125,10,1.6,.125],b758e927a18e1b09:[-.125,-1.6,2.5,-.125,1.6,2.5,-.125,1.6,-2.5,-.125,-1.6,2.5,-.125,1.6,-2.5,-.125,-1.6,-2.5,-.125,-1.6,-2.5,-.125,1.6,-2.5,.125,1.6,-2.5,-.125,-1.6,-2.5,.125,1.6,-2.5,.125,-1.6,-2.5,.125,-1.6,-2.5,.125,1.6,-2.5,.125,1.6,2.5,.125,-1.6,-2.5,.125,1.6,2.5,.125,-1.6,2.5,.125,-1.6,2.5,.125,1.6,2.5,-.125,1.6,2.5,.125,-1.6,2.5,-.125,1.6,2.5,-.125,-1.6,2.5,-.125,-1.6,-2.5,.125,-1.6,-2.5,.125,-1.6,2.5,-.125,-1.6,-2.5,.125,-1.6,2.5,-.125,-1.6,2.5,.125,1.6,-2.5,-.125,1.6,-2.5,-.125,1.6,2.5,.125,1.6,-2.5,-.125,1.6,2.5,.125,1.6,2.5],df92b2fa320dcc74:[-4.5,-1.6,.125,-4.5,1.6,.125,-4.5,1.6,-.125,-4.5,-1.6,.125,-4.5,1.6,-.125,-4.5,-1.6,-.125,-4.5,-1.6,-.125,-4.5,1.6,-.125,4.5,1.6,-.125,-4.5,-1.6,-.125,4.5,1.6,-.125,4.5,-1.6,-.125,4.5,-1.6,-.125,4.5,1.6,-.125,4.5,1.6,.125,4.5,-1.6,-.125,4.5,1.6,.125,4.5,-1.6,.125,4.5,-1.6,.125,4.5,1.6,.125,-4.5,1.6,.125,4.5,-1.6,.125,-4.5,1.6,.125,-4.5,-1.6,.125,-4.5,-1.6,-.125,4.5,-1.6,-.125,4.5,-1.6,.125,-4.5,-1.6,-.125,4.5,-1.6,.125,-4.5,-1.6,.125,4.5,1.6,-.125,-4.5,1.6,-.125,-4.5,1.6,.125,4.5,1.6,-.125,-4.5,1.6,.125,4.5,1.6,.125],"158da0769c5a4cd8":[-1,-.45,.125,-1,.45,.125,-1,.45,-.125,-1,-.45,.125,-1,.45,-.125,-1,-.45,-.125,-1,-.45,-.125,-1,.45,-.125,1,.45,-.125,-1,-.45,-.125,1,.45,-.125,1,-.45,-.125,1,-.45,-.125,1,.45,-.125,1,.45,.125,1,-.45,-.125,1,.45,.125,1,-.45,.125,1,-.45,.125,1,.45,.125,-1,.45,.125,1,-.45,.125,-1,.45,.125,-1,-.45,.125,-1,-.45,-.125,1,-.45,-.125,1,-.45,.125,-1,-.45,-.125,1,-.45,.125,-1,-.45,.125,1,.45,-.125,-1,.45,-.125,-1,.45,.125,1,.45,-.125,-1,.45,.125,1,.45,.125],"08b57a1a963f057c":[-1,-.06,.25,-1,.06,.25,-1,.06,-.25,-1,-.06,.25,-1,.06,-.25,-1,-.06,-.25,-1,-.06,-.25,-1,.06,-.25,1,.06,-.25,-1,-.06,-.25,1,.06,-.25,1,-.06,-.25,1,-.06,-.25,1,.06,-.25,1,.06,.25,1,-.06,-.25,1,.06,.25,1,-.06,.25,1,-.06,.25,1,.06,.25,-1,.06,.25,1,-.06,.25,-1,.06,.25,-1,-.06,.25,-1,-.06,-.25,1,-.06,-.25,1,-.06,.25,-1,-.06,-.25,1,-.06,.25,-1,-.06,.25,1,.06,-.25,-1,.06,-.25,-1,.06,.25,1,.06,-.25,-1,.06,.25,1,.06,.25],"73752e918ce0144b":[-10.25,-.15,2.75,-10.25,.15,2.75,-10.25,.15,-2.75,-10.25,-.15,2.75,-10.25,.15,-2.75,-10.25,-.15,-2.75,-10.25,-.15,-2.75,-10.25,.15,-2.75,10.25,.15,-2.75,-10.25,-.15,-2.75,10.25,.15,-2.75,10.25,-.15,-2.75,10.25,-.15,-2.75,10.25,.15,-2.75,10.25,.15,2.75,10.25,-.15,-2.75,10.25,.15,2.75,10.25,-.15,2.75,10.25,-.15,2.75,10.25,.15,2.75,-10.25,.15,2.75,10.25,-.15,2.75,-10.25,.15,2.75,-10.25,-.15,2.75,-10.25,-.15,-2.75,10.25,-.15,-2.75,10.25,-.15,2.75,-10.25,-.15,-2.75,10.25,-.15,2.75,-10.25,-.15,2.75,10.25,.15,-2.75,-10.25,.15,-2.75,-10.25,.15,2.75,10.25,.15,-2.75,-10.25,.15,2.75,10.25,.15,2.75],b272ddf082c9e09f:[-.11,-1.65,.11,-.11,1.65,.11,-.11,1.65,-.11,-.11,-1.65,.11,-.11,1.65,-.11,-.11,-1.65,-.11,-.11,-1.65,-.11,-.11,1.65,-.11,.11,1.65,-.11,-.11,-1.65,-.11,.11,1.65,-.11,.11,-1.65,-.11,.11,-1.65,-.11,.11,1.65,-.11,.11,1.65,.11,.11,-1.65,-.11,.11,1.65,.11,.11,-1.65,.11,.11,-1.65,.11,.11,1.65,.11,-.11,1.65,.11,.11,-1.65,.11,-.11,1.65,.11,-.11,-1.65,.11,-.11,-1.65,-.11,.11,-1.65,-.11,.11,-1.65,.11,-.11,-1.65,-.11,.11,-1.65,.11,-.11,-1.65,.11,.11,1.65,-.11,-.11,1.65,-.11,-.11,1.65,.11,.11,1.65,-.11,-.11,1.65,.11,.11,1.65,.11],"8a4ee40827b70738":[-.06,-.55,2.5,-.06,.55,2.5,-.06,.55,-2.5,-.06,-.55,2.5,-.06,.55,-2.5,-.06,-.55,-2.5,-.06,-.55,-2.5,-.06,.55,-2.5,.06,.55,-2.5,-.06,-.55,-2.5,.06,.55,-2.5,.06,-.55,-2.5,.06,-.55,-2.5,.06,.55,-2.5,.06,.55,2.5,.06,-.55,-2.5,.06,.55,2.5,.06,-.55,2.5,.06,-.55,2.5,.06,.55,2.5,-.06,.55,2.5,.06,-.55,2.5,-.06,.55,2.5,-.06,-.55,2.5,-.06,-.55,-2.5,.06,-.55,-2.5,.06,-.55,2.5,-.06,-.55,-2.5,.06,-.55,2.5,-.06,-.55,2.5,.06,.55,-2.5,-.06,.55,-2.5,-.06,.55,2.5,.06,.55,-2.5,-.06,.55,2.5,.06,.55,2.5],"1e0c50ee9ad7c91d":[-10,-1.65,.125,-10,1.65,.125,-10,1.65,-.125,-10,-1.65,.125,-10,1.65,-.125,-10,-1.65,-.125,-10,-1.65,-.125,-10,1.65,-.125,10,1.65,-.125,-10,-1.65,-.125,10,1.65,-.125,10,-1.65,-.125,10,-1.65,-.125,10,1.65,-.125,10,1.65,.125,10,-1.65,-.125,10,1.65,.125,10,-1.65,.125,10,-1.65,.125,10,1.65,.125,-10,1.65,.125,10,-1.65,.125,-10,1.65,.125,-10,-1.65,.125,-10,-1.65,-.125,10,-1.65,-.125,10,-1.65,.125,-10,-1.65,-.125,10,-1.65,.125,-10,-1.65,.125,10,1.65,-.125,-10,1.65,-.125,-10,1.65,.125,10,1.65,-.125,-10,1.65,.125,10,1.65,.125],"036e59e91d760ce0":[-8.5,-1.65,.125,-8.5,1.65,.125,-8.5,1.65,-.125,-8.5,-1.65,.125,-8.5,1.65,-.125,-8.5,-1.65,-.125,-8.5,-1.65,-.125,-8.5,1.65,-.125,8.5,1.65,-.125,-8.5,-1.65,-.125,8.5,1.65,-.125,8.5,-1.65,-.125,8.5,-1.65,-.125,8.5,1.65,-.125,8.5,1.65,.125,8.5,-1.65,-.125,8.5,1.65,.125,8.5,-1.65,.125,8.5,-1.65,.125,8.5,1.65,.125,-8.5,1.65,.125,8.5,-1.65,.125,-8.5,1.65,.125,-8.5,-1.65,.125,-8.5,-1.65,-.125,8.5,-1.65,-.125,8.5,-1.65,.125,-8.5,-1.65,-.125,8.5,-1.65,.125,-8.5,-1.65,.125,8.5,1.65,-.125,-8.5,1.65,-.125,-8.5,1.65,.125,8.5,1.65,-.125,-8.5,1.65,.125,8.5,1.65,.125],"89842ee1206230a8":[-.5,-1.65,.125,-.5,1.65,.125,-.5,1.65,-.125,-.5,-1.65,.125,-.5,1.65,-.125,-.5,-1.65,-.125,-.5,-1.65,-.125,-.5,1.65,-.125,.5,1.65,-.125,-.5,-1.65,-.125,.5,1.65,-.125,.5,-1.65,-.125,.5,-1.65,-.125,.5,1.65,-.125,.5,1.65,.125,.5,-1.65,-.125,.5,1.65,.125,.5,-1.65,.125,.5,-1.65,.125,.5,1.65,.125,-.5,1.65,.125,.5,-1.65,.125,-.5,1.65,.125,-.5,-1.65,.125,-.5,-1.65,-.125,.5,-1.65,-.125,.5,-1.65,.125,-.5,-1.65,-.125,.5,-1.65,.125,-.5,-1.65,.125,.5,1.65,-.125,-.5,1.65,-.125,-.5,1.65,.125,.5,1.65,-.125,-.5,1.65,.125,.5,1.65,.125],"39168525984054e0":[-10,-.11,1.9,-10,.11,1.9,-10,.11,-1.9,-10,-.11,1.9,-10,.11,-1.9,-10,-.11,-1.9,-10,-.11,-1.9,-10,.11,-1.9,10,.11,-1.9,-10,-.11,-1.9,10,.11,-1.9,10,-.11,-1.9,10,-.11,-1.9,10,.11,-1.9,10,.11,1.9,10,-.11,-1.9,10,.11,1.9,10,-.11,1.9,10,-.11,1.9,10,.11,1.9,-10,.11,1.9,10,-.11,1.9,-10,.11,1.9,-10,-.11,1.9,-10,-.11,-1.9,10,-.11,-1.9,10,-.11,1.9,-10,-.11,-1.9,10,-.11,1.9,-10,-.11,1.9,10,.11,-1.9,-10,.11,-1.9,-10,.11,1.9,10,.11,-1.9,-10,.11,1.9,10,.11,1.9],"407b5f4ee4a82284":[-6.5,-.11,.6,-6.5,.11,.6,-6.5,.11,-.6,-6.5,-.11,.6,-6.5,.11,-.6,-6.5,-.11,-.6,-6.5,-.11,-.6,-6.5,.11,-.6,6.5,.11,-.6,-6.5,-.11,-.6,6.5,.11,-.6,6.5,-.11,-.6,6.5,-.11,-.6,6.5,.11,-.6,6.5,.11,.6,6.5,-.11,-.6,6.5,.11,.6,6.5,-.11,.6,6.5,-.11,.6,6.5,.11,.6,-6.5,.11,.6,6.5,-.11,.6,-6.5,.11,.6,-6.5,-.11,.6,-6.5,-.11,-.6,6.5,-.11,-.6,6.5,-.11,.6,-6.5,-.11,-.6,6.5,-.11,.6,-6.5,-.11,.6,6.5,.11,-.6,-6.5,.11,-.6,-6.5,.11,.6,6.5,.11,-.6,-6.5,.11,.6,6.5,.11,.6],"11a81d40eabb6d3a":[-.5,-.11,.6,-.5,.11,.6,-.5,.11,-.6,-.5,-.11,.6,-.5,.11,-.6,-.5,-.11,-.6,-.5,-.11,-.6,-.5,.11,-.6,.5,.11,-.6,-.5,-.11,-.6,.5,.11,-.6,.5,-.11,-.6,.5,-.11,-.6,.5,.11,-.6,.5,.11,.6,.5,-.11,-.6,.5,.11,.6,.5,-.11,.6,.5,-.11,.6,.5,.11,.6,-.5,.11,.6,.5,-.11,.6,-.5,.11,.6,-.5,-.11,.6,-.5,-.11,-.6,.5,-.11,-.6,.5,-.11,.6,-.5,-.11,-.6,.5,-.11,.6,-.5,-.11,.6,.5,.11,-.6,-.5,.11,-.6,-.5,.11,.6,.5,.11,-.6,-.5,.11,.6,.5,.11,.6],"53142dcf1a70dbe2":[-10,-.55,.06,-10,.55,.06,-10,.55,-.06,-10,-.55,.06,-10,.55,-.06,-10,-.55,-.06,-10,-.55,-.06,-10,.55,-.06,10,.55,-.06,-10,-.55,-.06,10,.55,-.06,10,-.55,-.06,10,-.55,-.06,10,.55,-.06,10,.55,.06,10,-.55,-.06,10,.55,.06,10,-.55,.06,10,-.55,.06,10,.55,.06,-10,.55,.06,10,-.55,.06,-10,.55,.06,-10,-.55,.06,-10,-.55,-.06,10,-.55,-.06,10,-.55,.06,-10,-.55,-.06,10,-.55,.06,-10,-.55,.06,10,.55,-.06,-10,.55,-.06,-10,.55,.06,10,.55,-.06,-10,.55,.06,10,.55,.06],"410b7a11cdb5f2ca":[-.15956,-.05,.55,-.15956,.05,.55,-.15956,.05,-.55,-.15956,-.05,.55,-.15956,.05,-.55,-.15956,-.05,-.55,-.15956,-.05,-.55,-.15956,.05,-.55,.15956,.05,-.55,-.15956,-.05,-.55,.15956,.05,-.55,.15956,-.05,-.55,.15956,-.05,-.55,.15956,.05,-.55,.15956,.05,.55,.15956,-.05,-.55,.15956,.05,.55,.15956,-.05,.55,.15956,-.05,.55,.15956,.05,.55,-.15956,.05,.55,.15956,-.05,.55,-.15956,.05,.55,-.15956,-.05,.55,-.15956,-.05,-.55,.15956,-.05,-.55,.15956,-.05,.55,-.15956,-.05,-.55,.15956,-.05,.55,-.15956,-.05,.55,.15956,.05,-.55,-.15956,.05,-.55,-.15956,.05,.55,.15956,.05,-.55,-.15956,.05,.55,.15956,.05,.55],d5cacf1793d8ce0f:[0,-1.6,-.18,0,1.6,-.18,.09,1.6,-.15588,0,-1.6,-.18,.09,1.6,-.15588,.09,-1.6,-.15588,.09,-1.6,-.15588,.09,1.6,-.15588,.15588,1.6,-.09,.09,-1.6,-.15588,.15588,1.6,-.09,.15588,-1.6,-.09,.15588,-1.6,-.09,.15588,1.6,-.09,.18,1.6,-0,.15588,-1.6,-.09,.18,1.6,-0,.18,-1.6,-0,.18,-1.6,-0,.18,1.6,-0,.15588,1.6,.09,.18,-1.6,-0,.15588,1.6,.09,.15588,-1.6,.09,.15588,-1.6,.09,.15588,1.6,.09,.09,1.6,.15588,.15588,-1.6,.09,.09,1.6,.15588,.09,-1.6,.15588,.09,-1.6,.15588,.09,1.6,.15588,0,1.6,.18,.09,-1.6,.15588,0,1.6,.18,0,-1.6,.18,0,-1.6,.18,0,1.6,.18,-.09,1.6,.15588,0,-1.6,.18,-.09,1.6,.15588,-.09,-1.6,.15588,-.09,-1.6,.15588,-.09,1.6,.15588,-.15588,1.6,.09,-.09,-1.6,.15588,-.15588,1.6,.09,-.15588,-1.6,.09,-.15588,-1.6,.09,-.15588,1.6,.09,-.18,1.6,-0,-.15588,-1.6,.09,-.18,1.6,-0,-.18,-1.6,-0,-.18,-1.6,-0,-.18,1.6,-0,-.15588,1.6,-.09,-.18,-1.6,-0,-.15588,1.6,-.09,-.15588,-1.6,-.09,.15588,1.6,-.09,.09,1.6,-.15588,0,1.6,-.18,0,1.6,-.18,-.09,1.6,-.15588,-.15588,1.6,-.09,-.15588,1.6,-.09,-.18,1.6,-0,-.15588,1.6,.09,-.15588,1.6,.09,-.09,1.6,.15588,0,1.6,.18,0,1.6,.18,.09,1.6,.15588,.15588,1.6,.09,.15588,1.6,.09,.18,1.6,-0,.15588,1.6,-.09,.15588,1.6,-.09,0,1.6,-.18,-.15588,1.6,-.09,-.15588,1.6,-.09,-.15588,1.6,.09,0,1.6,.18,0,1.6,.18,.15588,1.6,.09,.15588,1.6,-.09,-.15588,1.6,-.09,0,1.6,.18,.15588,1.6,-.09,-.15588,-1.6,-.09,-.15588,1.6,-.09,-.09,1.6,-.15588,-.15588,-1.6,-.09,-.09,1.6,-.15588,-.09,-1.6,-.15588,-.09,-1.6,-.15588,-.09,1.6,-.15588,0,1.6,-.18,-.09,-1.6,-.15588,0,1.6,-.18,0,-1.6,-.18,-.09,-1.6,-.15588,0,-1.6,-.18,.09,-1.6,-.15588,.09,-1.6,-.15588,.15588,-1.6,-.09,.18,-1.6,-0,.18,-1.6,-0,.15588,-1.6,.09,.09,-1.6,.15588,.09,-1.6,.15588,0,-1.6,.18,-.09,-1.6,.15588,-.09,-1.6,.15588,-.15588,-1.6,.09,-.18,-1.6,-0,-.18,-1.6,-0,-.15588,-1.6,-.09,-.09,-1.6,-.15588,-.09,-1.6,-.15588,.09,-1.6,-.15588,.18,-1.6,-0,.18,-1.6,-0,.09,-1.6,.15588,-.09,-1.6,.15588,-.09,-1.6,.15588,-.18,-1.6,-0,-.09,-1.6,-.15588,.18,-1.6,-0,-.09,-1.6,.15588,-.09,-1.6,-.15588],"1ab2458fd7defb67":[0,-1.9,-.18,0,1.9,-.18,.09,1.9,-.15588,0,-1.9,-.18,.09,1.9,-.15588,.09,-1.9,-.15588,.09,-1.9,-.15588,.09,1.9,-.15588,.15588,1.9,-.09,.09,-1.9,-.15588,.15588,1.9,-.09,.15588,-1.9,-.09,.15588,-1.9,-.09,.15588,1.9,-.09,.18,1.9,-0,.15588,-1.9,-.09,.18,1.9,-0,.18,-1.9,-0,.18,-1.9,-0,.18,1.9,-0,.15588,1.9,.09,.18,-1.9,-0,.15588,1.9,.09,.15588,-1.9,.09,.15588,-1.9,.09,.15588,1.9,.09,.09,1.9,.15588,.15588,-1.9,.09,.09,1.9,.15588,.09,-1.9,.15588,.09,-1.9,.15588,.09,1.9,.15588,0,1.9,.18,.09,-1.9,.15588,0,1.9,.18,0,-1.9,.18,0,-1.9,.18,0,1.9,.18,-.09,1.9,.15588,0,-1.9,.18,-.09,1.9,.15588,-.09,-1.9,.15588,-.09,-1.9,.15588,-.09,1.9,.15588,-.15588,1.9,.09,-.09,-1.9,.15588,-.15588,1.9,.09,-.15588,-1.9,.09,-.15588,-1.9,.09,-.15588,1.9,.09,-.18,1.9,-0,-.15588,-1.9,.09,-.18,1.9,-0,-.18,-1.9,-0,-.18,-1.9,-0,-.18,1.9,-0,-.15588,1.9,-.09,-.18,-1.9,-0,-.15588,1.9,-.09,-.15588,-1.9,-.09,.15588,1.9,-.09,.09,1.9,-.15588,0,1.9,-.18,0,1.9,-.18,-.09,1.9,-.15588,-.15588,1.9,-.09,-.15588,1.9,-.09,-.18,1.9,-0,-.15588,1.9,.09,-.15588,1.9,.09,-.09,1.9,.15588,0,1.9,.18,0,1.9,.18,.09,1.9,.15588,.15588,1.9,.09,.15588,1.9,.09,.18,1.9,-0,.15588,1.9,-.09,.15588,1.9,-.09,0,1.9,-.18,-.15588,1.9,-.09,-.15588,1.9,-.09,-.15588,1.9,.09,0,1.9,.18,0,1.9,.18,.15588,1.9,.09,.15588,1.9,-.09,-.15588,1.9,-.09,0,1.9,.18,.15588,1.9,-.09,-.15588,-1.9,-.09,-.15588,1.9,-.09,-.09,1.9,-.15588,-.15588,-1.9,-.09,-.09,1.9,-.15588,-.09,-1.9,-.15588,-.09,-1.9,-.15588,-.09,1.9,-.15588,0,1.9,-.18,-.09,-1.9,-.15588,0,1.9,-.18,0,-1.9,-.18,-.09,-1.9,-.15588,0,-1.9,-.18,.09,-1.9,-.15588,.09,-1.9,-.15588,.15588,-1.9,-.09,.18,-1.9,-0,.18,-1.9,-0,.15588,-1.9,.09,.09,-1.9,.15588,.09,-1.9,.15588,0,-1.9,.18,-.09,-1.9,.15588,-.09,-1.9,.15588,-.15588,-1.9,.09,-.18,-1.9,-0,-.18,-1.9,-0,-.15588,-1.9,-.09,-.09,-1.9,-.15588,-.09,-1.9,-.15588,.09,-1.9,-.15588,.18,-1.9,-0,.18,-1.9,-0,.09,-1.9,.15588,-.09,-1.9,.15588,-.09,-1.9,.15588,-.18,-1.9,-0,-.09,-1.9,-.15588,.18,-1.9,-0,-.09,-1.9,.15588,-.09,-1.9,-.15588],"9a9e019751f1b8b1":[0,-1.5,-.18,0,1.5,-.18,.09,1.5,-.15588,0,-1.5,-.18,.09,1.5,-.15588,.09,-1.5,-.15588,.09,-1.5,-.15588,.09,1.5,-.15588,.15588,1.5,-.09,.09,-1.5,-.15588,.15588,1.5,-.09,.15588,-1.5,-.09,.15588,-1.5,-.09,.15588,1.5,-.09,.18,1.5,-0,.15588,-1.5,-.09,.18,1.5,-0,.18,-1.5,-0,.18,-1.5,-0,.18,1.5,-0,.15588,1.5,.09,.18,-1.5,-0,.15588,1.5,.09,.15588,-1.5,.09,.15588,-1.5,.09,.15588,1.5,.09,.09,1.5,.15588,.15588,-1.5,.09,.09,1.5,.15588,.09,-1.5,.15588,.09,-1.5,.15588,.09,1.5,.15588,0,1.5,.18,.09,-1.5,.15588,0,1.5,.18,0,-1.5,.18,0,-1.5,.18,0,1.5,.18,-.09,1.5,.15588,0,-1.5,.18,-.09,1.5,.15588,-.09,-1.5,.15588,-.09,-1.5,.15588,-.09,1.5,.15588,-.15588,1.5,.09,-.09,-1.5,.15588,-.15588,1.5,.09,-.15588,-1.5,.09,-.15588,-1.5,.09,-.15588,1.5,.09,-.18,1.5,-0,-.15588,-1.5,.09,-.18,1.5,-0,-.18,-1.5,-0,-.18,-1.5,-0,-.18,1.5,-0,-.15588,1.5,-.09,-.18,-1.5,-0,-.15588,1.5,-.09,-.15588,-1.5,-.09,.15588,1.5,-.09,.09,1.5,-.15588,0,1.5,-.18,0,1.5,-.18,-.09,1.5,-.15588,-.15588,1.5,-.09,-.15588,1.5,-.09,-.18,1.5,-0,-.15588,1.5,.09,-.15588,1.5,.09,-.09,1.5,.15588,0,1.5,.18,0,1.5,.18,.09,1.5,.15588,.15588,1.5,.09,.15588,1.5,.09,.18,1.5,-0,.15588,1.5,-.09,.15588,1.5,-.09,0,1.5,-.18,-.15588,1.5,-.09,-.15588,1.5,-.09,-.15588,1.5,.09,0,1.5,.18,0,1.5,.18,.15588,1.5,.09,.15588,1.5,-.09,-.15588,1.5,-.09,0,1.5,.18,.15588,1.5,-.09,-.15588,-1.5,-.09,-.15588,1.5,-.09,-.09,1.5,-.15588,-.15588,-1.5,-.09,-.09,1.5,-.15588,-.09,-1.5,-.15588,-.09,-1.5,-.15588,-.09,1.5,-.15588,0,1.5,-.18,-.09,-1.5,-.15588,0,1.5,-.18,0,-1.5,-.18,-.09,-1.5,-.15588,0,-1.5,-.18,.09,-1.5,-.15588,.09,-1.5,-.15588,.15588,-1.5,-.09,.18,-1.5,-0,.18,-1.5,-0,.15588,-1.5,.09,.09,-1.5,.15588,.09,-1.5,.15588,0,-1.5,.18,-.09,-1.5,.15588,-.09,-1.5,.15588,-.15588,-1.5,.09,-.18,-1.5,-0,-.18,-1.5,-0,-.15588,-1.5,-.09,-.09,-1.5,-.15588,-.09,-1.5,-.15588,.09,-1.5,-.15588,.18,-1.5,-0,.18,-1.5,-0,.09,-1.5,.15588,-.09,-1.5,.15588,-.09,-1.5,.15588,-.18,-1.5,-0,-.09,-1.5,-.15588,.18,-1.5,-0,-.09,-1.5,.15588,-.09,-1.5,-.15588],"9717a1f9aeeab1c3":[0,-1,-0,0,-.92388,-.38268,.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.38268,-.92388,.35355,-.38268,-.85355,0,-.70711,-.70711,.35355,-.38268,-.85355,.2706,-.70711,-.65328,0,0,-1,0,.38268,-.92388,.35355,.38268,-.85355,0,0,-1,.35355,.38268,-.85355,.38268,0,-.92388,0,.70711,-.70711,0,.92388,-.38268,.14645,.92388,-.35355,0,.70711,-.70711,.14645,.92388,-.35355,.2706,.70711,-.65328,0,-.92388,-.38268,0,-.70711,-.70711,.2706,-.70711,-.65328,0,-.92388,-.38268,.2706,-.70711,-.65328,.14645,-.92388,-.35355,0,-.38268,-.92388,0,0,-1,.38268,0,-.92388,0,-.38268,-.92388,.38268,0,-.92388,.35355,-.38268,-.85355,0,.38268,-.92388,0,.70711,-.70711,.2706,.70711,-.65328,0,.38268,-.92388,.2706,.70711,-.65328,.35355,.38268,-.85355,0,.92388,-.38268,0,1,-0,.14645,.92388,-.35355,.14645,-.92388,-.35355,.2706,-.70711,-.65328,.5,-.70711,-.5,.14645,-.92388,-.35355,.5,-.70711,-.5,.2706,-.92388,-.2706,.35355,-.38268,-.85355,.38268,0,-.92388,.70711,0,-.70711,.35355,-.38268,-.85355,.70711,0,-.70711,.65328,-.38268,-.65328,.35355,.38268,-.85355,.2706,.70711,-.65328,.5,.70711,-.5,.35355,.38268,-.85355,.5,.70711,-.5,.65328,.38268,-.65328,.14645,.92388,-.35355,0,1,-0,.2706,.92388,-.2706,0,-1,-0,.14645,-.92388,-.35355,.2706,-.92388,-.2706,.2706,-.70711,-.65328,.35355,-.38268,-.85355,.65328,-.38268,-.65328,.2706,-.70711,-.65328,.65328,-.38268,-.65328,.5,-.70711,-.5,.38268,0,-.92388,.35355,.38268,-.85355,.65328,.38268,-.65328,.38268,0,-.92388,.65328,.38268,-.65328,.70711,0,-.70711,.2706,.70711,-.65328,.14645,.92388,-.35355,.2706,.92388,-.2706,.2706,.70711,-.65328,.2706,.92388,-.2706,.5,.70711,-.5,.65328,-.38268,-.65328,.70711,0,-.70711,.92388,0,-.38268,.65328,-.38268,-.65328,.92388,0,-.38268,.85355,-.38268,-.35355,.65328,.38268,-.65328,.5,.70711,-.5,.65328,.70711,-.2706,.65328,.38268,-.65328,.65328,.70711,-.2706,.85355,.38268,-.35355,.2706,.92388,-.2706,0,1,-0,.35355,.92388,-.14645,0,-1,-0,.2706,-.92388,-.2706,.35355,-.92388,-.14645,.5,-.70711,-.5,.65328,-.38268,-.65328,.85355,-.38268,-.35355,.5,-.70711,-.5,.85355,-.38268,-.35355,.65328,-.70711,-.2706,.70711,0,-.70711,.65328,.38268,-.65328,.85355,.38268,-.35355,.70711,0,-.70711,.85355,.38268,-.35355,.92388,0,-.38268,.5,.70711,-.5,.2706,.92388,-.2706,.35355,.92388,-.14645,.5,.70711,-.5,.35355,.92388,-.14645,.65328,.70711,-.2706,.2706,-.92388,-.2706,.5,-.70711,-.5,.65328,-.70711,-.2706,.2706,-.92388,-.2706,.65328,-.70711,-.2706,.35355,-.92388,-.14645,0,-1,-0,.35355,-.92388,-.14645,.38268,-.92388,0,.65328,-.70711,-.2706,.85355,-.38268,-.35355,.92388,-.38268,0,.65328,-.70711,-.2706,.92388,-.38268,0,.70711,-.70711,0,.92388,0,-.38268,.85355,.38268,-.35355,.92388,.38268,0,.92388,0,-.38268,.92388,.38268,0,1,0,0,.65328,.70711,-.2706,.35355,.92388,-.14645,.38268,.92388,0,.65328,.70711,-.2706,.38268,.92388,0,.70711,.70711,0,.35355,-.92388,-.14645,.65328,-.70711,-.2706,.70711,-.70711,0,.35355,-.92388,-.14645,.70711,-.70711,0,.38268,-.92388,0,.85355,-.38268,-.35355,.92388,0,-.38268,1,0,0,.85355,-.38268,-.35355,1,0,0,.92388,-.38268,0,.85355,.38268,-.35355,.65328,.70711,-.2706,.70711,.70711,0,.85355,.38268,-.35355,.70711,.70711,0,.92388,.38268,0,.35355,.92388,-.14645,0,1,-0,.38268,.92388,0,1,0,0,.92388,.38268,0,.85355,.38268,.35355,1,0,0,.85355,.38268,.35355,.92388,0,.38268,.70711,.70711,0,.38268,.92388,0,.35355,.92388,.14645,.70711,.70711,0,.35355,.92388,.14645,.65328,.70711,.2706,.38268,-.92388,0,.70711,-.70711,0,.65328,-.70711,.2706,.38268,-.92388,0,.65328,-.70711,.2706,.35355,-.92388,.14645,.92388,-.38268,0,1,0,0,.92388,0,.38268,.92388,-.38268,0,.92388,0,.38268,.85355,-.38268,.35355,.92388,.38268,0,.70711,.70711,0,.65328,.70711,.2706,.92388,.38268,0,.65328,.70711,.2706,.85355,.38268,.35355,.38268,.92388,0,0,1,-0,.35355,.92388,.14645,0,-1,-0,.38268,-.92388,0,.35355,-.92388,.14645,.70711,-.70711,0,.92388,-.38268,0,.85355,-.38268,.35355,.70711,-.70711,0,.85355,-.38268,.35355,.65328,-.70711,.2706,.35355,-.92388,.14645,.65328,-.70711,.2706,.5,-.70711,.5,.35355,-.92388,.14645,.5,-.70711,.5,.2706,-.92388,.2706,.85355,-.38268,.35355,.92388,0,.38268,.70711,0,.70711,.85355,-.38268,.35355,.70711,0,.70711,.65328,-.38268,.65328,.85355,.38268,.35355,.65328,.70711,.2706,.5,.70711,.5,.85355,.38268,.35355,.5,.70711,.5,.65328,.38268,.65328,.35355,.92388,.14645,0,1,-0,.2706,.92388,.2706,0,-1,-0,.35355,-.92388,.14645,.2706,-.92388,.2706,.65328,-.70711,.2706,.85355,-.38268,.35355,.65328,-.38268,.65328,.65328,-.70711,.2706,.65328,-.38268,.65328,.5,-.70711,.5,.92388,0,.38268,.85355,.38268,.35355,.65328,.38268,.65328,.92388,0,.38268,.65328,.38268,.65328,.70711,0,.70711,.65328,.70711,.2706,.35355,.92388,.14645,.2706,.92388,.2706,.65328,.70711,.2706,.2706,.92388,.2706,.5,.70711,.5,.65328,.38268,.65328,.5,.70711,.5,.2706,.70711,.65328,.65328,.38268,.65328,.2706,.70711,.65328,.35355,.38268,.85355,.2706,.92388,.2706,0,1,-0,.14645,.92388,.35355,0,-1,-0,.2706,-.92388,.2706,.14645,-.92388,.35355,.5,-.70711,.5,.65328,-.38268,.65328,.35355,-.38268,.85355,.5,-.70711,.5,.35355,-.38268,.85355,.2706,-.70711,.65328,.70711,0,.70711,.65328,.38268,.65328,.35355,.38268,.85355,.70711,0,.70711,.35355,.38268,.85355,.38268,0,.92388,.5,.70711,.5,.2706,.92388,.2706,.14645,.92388,.35355,.5,.70711,.5,.14645,.92388,.35355,.2706,.70711,.65328,.2706,-.92388,.2706,.5,-.70711,.5,.2706,-.70711,.65328,.2706,-.92388,.2706,.2706,-.70711,.65328,.14645,-.92388,.35355,.65328,-.38268,.65328,.70711,0,.70711,.38268,0,.92388,.65328,-.38268,.65328,.38268,0,.92388,.35355,-.38268,.85355,0,-1,-0,.14645,-.92388,.35355,-0,-.92388,.38268,.2706,-.70711,.65328,.35355,-.38268,.85355,-0,-.38268,.92388,.2706,-.70711,.65328,-0,-.38268,.92388,-0,-.70711,.70711,.38268,0,.92388,.35355,.38268,.85355,-0,.38268,.92388,.38268,0,.92388,-0,.38268,.92388,-0,0,1,.2706,.70711,.65328,.14645,.92388,.35355,-0,.92388,.38268,.2706,.70711,.65328,-0,.92388,.38268,-0,.70711,.70711,.14645,-.92388,.35355,.2706,-.70711,.65328,-0,-.70711,.70711,.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.92388,.38268,.35355,-.38268,.85355,.38268,0,.92388,-0,0,1,.35355,-.38268,.85355,-0,0,1,-0,-.38268,.92388,.35355,.38268,.85355,.2706,.70711,.65328,-0,.70711,.70711,.35355,.38268,.85355,-0,.70711,.70711,-0,.38268,.92388,.14645,.92388,.35355,0,1,-0,-0,.92388,.38268,-0,.70711,.70711,-0,.92388,.38268,-.14645,.92388,.35355,-0,.70711,.70711,-.14645,.92388,.35355,-.2706,.70711,.65328,-0,-.92388,.38268,-0,-.70711,.70711,-.2706,-.70711,.65328,-0,-.92388,.38268,-.2706,-.70711,.65328,-.14645,-.92388,.35355,-0,-.38268,.92388,-0,0,1,-.38268,0,.92388,-0,-.38268,.92388,-.38268,0,.92388,-.35355,-.38268,.85355,-0,.38268,.92388,-0,.70711,.70711,-.2706,.70711,.65328,-0,.38268,.92388,-.2706,.70711,.65328,-.35355,.38268,.85355,-0,.92388,.38268,0,1,-0,-.14645,.92388,.35355,0,-1,-0,-0,-.92388,.38268,-.14645,-.92388,.35355,-0,-.70711,.70711,-0,-.38268,.92388,-.35355,-.38268,.85355,-0,-.70711,.70711,-.35355,-.38268,.85355,-.2706,-.70711,.65328,-0,0,1,-0,.38268,.92388,-.35355,.38268,.85355,-0,0,1,-.35355,.38268,.85355,-.38268,0,.92388,-.14645,-.92388,.35355,-.2706,-.70711,.65328,-.5,-.70711,.5,-.14645,-.92388,.35355,-.5,-.70711,.5,-.2706,-.92388,.2706,-.35355,-.38268,.85355,-.38268,0,.92388,-.70711,0,.70711,-.35355,-.38268,.85355,-.70711,0,.70711,-.65328,-.38268,.65328,-.35355,.38268,.85355,-.2706,.70711,.65328,-.5,.70711,.5,-.35355,.38268,.85355,-.5,.70711,.5,-.65328,.38268,.65328,-.14645,.92388,.35355,0,1,-0,-.2706,.92388,.2706,0,-1,-0,-.14645,-.92388,.35355,-.2706,-.92388,.2706,-.2706,-.70711,.65328,-.35355,-.38268,.85355,-.65328,-.38268,.65328,-.2706,-.70711,.65328,-.65328,-.38268,.65328,-.5,-.70711,.5,-.38268,0,.92388,-.35355,.38268,.85355,-.65328,.38268,.65328,-.38268,0,.92388,-.65328,.38268,.65328,-.70711,0,.70711,-.2706,.70711,.65328,-.14645,.92388,.35355,-.2706,.92388,.2706,-.2706,.70711,.65328,-.2706,.92388,.2706,-.5,.70711,.5,-.2706,.92388,.2706,0,1,-0,-.35355,.92388,.14645,0,-1,-0,-.2706,-.92388,.2706,-.35355,-.92388,.14645,-.5,-.70711,.5,-.65328,-.38268,.65328,-.85355,-.38268,.35355,-.5,-.70711,.5,-.85355,-.38268,.35355,-.65328,-.70711,.2706,-.70711,0,.70711,-.65328,.38268,.65328,-.85355,.38268,.35355,-.70711,0,.70711,-.85355,.38268,.35355,-.92388,0,.38268,-.5,.70711,.5,-.2706,.92388,.2706,-.35355,.92388,.14645,-.5,.70711,.5,-.35355,.92388,.14645,-.65328,.70711,.2706,-.2706,-.92388,.2706,-.5,-.70711,.5,-.65328,-.70711,.2706,-.2706,-.92388,.2706,-.65328,-.70711,.2706,-.35355,-.92388,.14645,-.65328,-.38268,.65328,-.70711,0,.70711,-.92388,0,.38268,-.65328,-.38268,.65328,-.92388,0,.38268,-.85355,-.38268,.35355,-.65328,.38268,.65328,-.5,.70711,.5,-.65328,.70711,.2706,-.65328,.38268,.65328,-.65328,.70711,.2706,-.85355,.38268,.35355,-.65328,-.70711,.2706,-.85355,-.38268,.35355,-.92388,-.38268,-0,-.65328,-.70711,.2706,-.92388,-.38268,-0,-.70711,-.70711,-0,-.92388,0,.38268,-.85355,.38268,.35355,-.92388,.38268,-0,-.92388,0,.38268,-.92388,.38268,-0,-1,0,-0,-.65328,.70711,.2706,-.35355,.92388,.14645,-.38268,.92388,-0,-.65328,.70711,.2706,-.38268,.92388,-0,-.70711,.70711,-0,-.35355,-.92388,.14645,-.65328,-.70711,.2706,-.70711,-.70711,-0,-.35355,-.92388,.14645,-.70711,-.70711,-0,-.38268,-.92388,-0,-.85355,-.38268,.35355,-.92388,0,.38268,-1,0,-0,-.85355,-.38268,.35355,-1,0,-0,-.92388,-.38268,-0,-.85355,.38268,.35355,-.65328,.70711,.2706,-.70711,.70711,-0,-.85355,.38268,.35355,-.70711,.70711,-0,-.92388,.38268,-0,-.35355,.92388,.14645,0,1,-0,-.38268,.92388,-0,0,-1,-0,-.35355,-.92388,.14645,-.38268,-.92388,-0,-.38268,-.92388,-0,-.70711,-.70711,-0,-.65328,-.70711,-.2706,-.38268,-.92388,-0,-.65328,-.70711,-.2706,-.35355,-.92388,-.14645,-.92388,-.38268,-0,-1,0,-0,-.92388,0,-.38268,-.92388,-.38268,-0,-.92388,0,-.38268,-.85355,-.38268,-.35355,-.92388,.38268,-0,-.70711,.70711,-0,-.65328,.70711,-.2706,-.92388,.38268,-0,-.65328,.70711,-.2706,-.85355,.38268,-.35355,-.38268,.92388,-0,0,1,-0,-.35355,.92388,-.14645,0,-1,-0,-.38268,-.92388,-0,-.35355,-.92388,-.14645,-.70711,-.70711,-0,-.92388,-.38268,-0,-.85355,-.38268,-.35355,-.70711,-.70711,-0,-.85355,-.38268,-.35355,-.65328,-.70711,-.2706,-1,0,-0,-.92388,.38268,-0,-.85355,.38268,-.35355,-1,0,-0,-.85355,.38268,-.35355,-.92388,0,-.38268,-.70711,.70711,-0,-.38268,.92388,-0,-.35355,.92388,-.14645,-.70711,.70711,-0,-.35355,.92388,-.14645,-.65328,.70711,-.2706,-.85355,-.38268,-.35355,-.92388,0,-.38268,-.70711,0,-.70711,-.85355,-.38268,-.35355,-.70711,0,-.70711,-.65328,-.38268,-.65328,-.85355,.38268,-.35355,-.65328,.70711,-.2706,-.5,.70711,-.5,-.85355,.38268,-.35355,-.5,.70711,-.5,-.65328,.38268,-.65328,-.35355,.92388,-.14645,0,1,-0,-.2706,.92388,-.2706,0,-1,-0,-.35355,-.92388,-.14645,-.2706,-.92388,-.2706,-.65328,-.70711,-.2706,-.85355,-.38268,-.35355,-.65328,-.38268,-.65328,-.65328,-.70711,-.2706,-.65328,-.38268,-.65328,-.5,-.70711,-.5,-.92388,0,-.38268,-.85355,.38268,-.35355,-.65328,.38268,-.65328,-.92388,0,-.38268,-.65328,.38268,-.65328,-.70711,0,-.70711,-.65328,.70711,-.2706,-.35355,.92388,-.14645,-.2706,.92388,-.2706,-.65328,.70711,-.2706,-.2706,.92388,-.2706,-.5,.70711,-.5,-.35355,-.92388,-.14645,-.65328,-.70711,-.2706,-.5,-.70711,-.5,-.35355,-.92388,-.14645,-.5,-.70711,-.5,-.2706,-.92388,-.2706,0,-1,-0,-.2706,-.92388,-.2706,-.14645,-.92388,-.35355,-.5,-.70711,-.5,-.65328,-.38268,-.65328,-.35355,-.38268,-.85355,-.5,-.70711,-.5,-.35355,-.38268,-.85355,-.2706,-.70711,-.65328,-.70711,0,-.70711,-.65328,.38268,-.65328,-.35355,.38268,-.85355,-.70711,0,-.70711,-.35355,.38268,-.85355,-.38268,0,-.92388,-.5,.70711,-.5,-.2706,.92388,-.2706,-.14645,.92388,-.35355,-.5,.70711,-.5,-.14645,.92388,-.35355,-.2706,.70711,-.65328,-.2706,-.92388,-.2706,-.5,-.70711,-.5,-.2706,-.70711,-.65328,-.2706,-.92388,-.2706,-.2706,-.70711,-.65328,-.14645,-.92388,-.35355,-.65328,-.38268,-.65328,-.70711,0,-.70711,-.38268,0,-.92388,-.65328,-.38268,-.65328,-.38268,0,-.92388,-.35355,-.38268,-.85355,-.65328,.38268,-.65328,-.5,.70711,-.5,-.2706,.70711,-.65328,-.65328,.38268,-.65328,-.2706,.70711,-.65328,-.35355,.38268,-.85355,-.2706,.92388,-.2706,0,1,-0,-.14645,.92388,-.35355,-.38268,0,-.92388,-.35355,.38268,-.85355,0,.38268,-.92388,-.38268,0,-.92388,0,.38268,-.92388,0,0,-1,-.2706,.70711,-.65328,-.14645,.92388,-.35355,0,.92388,-.38268,-.2706,.70711,-.65328,0,.92388,-.38268,0,.70711,-.70711,-.14645,-.92388,-.35355,-.2706,-.70711,-.65328,0,-.70711,-.70711,-.14645,-.92388,-.35355,0,-.70711,-.70711,0,-.92388,-.38268,-.35355,-.38268,-.85355,-.38268,0,-.92388,0,0,-1,-.35355,-.38268,-.85355,0,0,-1,0,-.38268,-.92388,-.35355,.38268,-.85355,-.2706,.70711,-.65328,0,.70711,-.70711,-.35355,.38268,-.85355,0,.70711,-.70711,0,.38268,-.92388,-.14645,.92388,-.35355,0,1,-0,0,.92388,-.38268,0,-1,-0,-.14645,-.92388,-.35355,0,-.92388,-.38268,-.2706,-.70711,-.65328,-.35355,-.38268,-.85355,0,-.38268,-.92388,-.2706,-.70711,-.65328,0,-.38268,-.92388,0,-.70711,-.70711]},colors:[[.78,.83,.77,1],[.2,.12,.08,1],[.12,.13,.12,1],[.63,.46,.25,1],[.69,.64,.53,1],[.57,.69,.51,1],[.79,.75,.65,1],[.48,.43,.39,1],[.28,.43,.25,1],[.64,.72,.55,1],[.12,.14,.13,1],[.26,.27,.24,1],[.34,.62,.65,.42],[.11,.34,.36,1],[.45,.45,.39,1],[.34,.35,.3,1],[.38,.69,.69,1],[.22,.12,.07,1],[.16,.17,.16,1],[.42,.24,.12,1],[.53,.51,.44,1],[.3,.29,.26,1],[.19,.15,.1,1],[.28,.42,.22,1],[.74,.71,.63,1],[.38,.23,.14,1],[.48,.47,.41,1],[.54,.25,.21,1],[.35,.46,.28,1],[.7,.67,.59,1],[.25,.27,.25,1],[.4,.39,.34,1],[.24,.51,.53,1],[.53,.36,.27,1],[.56,.37,.21,1],[.25,.14,.08,1],[.45,.31,.21,1],[.76,.72,.63,1],[.24,.13,.09,1],[.34,.24,.19,1],[.19,.21,.21,1],[.72,.69,.6,1],[.47,.32,.21,1],[.25,.16,.11,1],[.22,.24,.23,1],[.32,.22,.15,1],[.33,.46,.3,1],[.5,.27,.22,1],[.39,.52,.3,1]],objects:[["Working area | 42m x 60m","b2e26a82463d46dc",0,[1,0,0,0,0,1,0,0,0,0,1,0,6,-.08,-10,1]],["North road fence | post 00","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,27,1.05,-40,1]],["North road fence | post 01","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,25,1.05,-40,1]],["North road fence | post 02","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,23,1.05,-40,1]],["North road fence | post 03","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,21,1.05,-40,1]],["North road fence | post 04","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,19,1.05,-40,1]],["North road fence | post 05","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,17,1.05,-40,1]],["North road fence | post 06","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,15,1.05,-40,1]],["North road fence | post 07","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,13,1.05,-40,1]],["North road fence | post 08","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,11,1.05,-40,1]],["North road fence | post 09","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,9,1.05,-40,1]],["North road fence | post 10","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,7,1.05,-40,1]],["North road fence | post 11","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,5,1.05,-40,1]],["North road fence | post 12","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,3,1.05,-40,1]],["North road fence | post 13","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,1,1.05,-40,1]],["North road fence | post 14","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,-1,1.05,-40,1]],["North road fence | post 15","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,-3,1.05,-40,1]],["North road fence | post 16","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,-5,1.05,-40,1]],["North road fence | post 17","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,-7,1.05,-40,1]],["North road fence | post 18","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,-9,1.05,-40,1]],["North road fence | post 19","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,-11,1.05,-40,1]],["North road fence | post 20","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,-13,1.05,-40,1]],["North road fence | post 21","0ec6f2af51ffe213",1,[1,0,0,0,0,1,0,0,0,0,1,0,-15,1.05,-40,1]],["North road fence | horizontal rail","3adcbf525066a12e",1,[1,0,0,0,0,1,0,0,0,0,1,0,6,.35,-40,1]],["North road fence | horizontal rail.001","3adcbf525066a12e",1,[1,0,0,0,0,1,0,0,0,0,1,0,6,1.65,-40,1]],["North road fence | protective top cap","d6fd530d905cd732",2,[1,0,0,0,0,1,0,0,0,0,1,0,6,2.12,-40,1]],["North road fence | bamboo infill 000","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,26.93,1,-40,1]],["North road fence | bamboo infill 001","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,26.79,1,-40,1]],["North road fence | bamboo infill 002","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,26.65,1,-40,1]],["North road fence | bamboo infill 003","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,26.51,1,-40,1]],["North road fence | bamboo infill 004","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,26.37,1,-40,1]],["North road fence | bamboo infill 005","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,26.23,1,-40,1]],["North road fence | bamboo infill 006","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,26.09,1,-40,1]],["North road fence | bamboo infill 007","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,25.95,1,-40,1]],["North road fence | bamboo infill 008","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,25.81,1,-40,1]],["North road fence | bamboo infill 009","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,25.67,1,-40,1]],["North road fence | bamboo infill 010","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,25.53,1,-40,1]],["North road fence | bamboo infill 011","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,25.39,1,-40,1]],["North road fence | bamboo infill 012","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,25.25,1,-40,1]],["North road fence | bamboo infill 013","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,25.11,1,-40,1]],["North road fence | bamboo infill 014","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,24.97,1,-40,1]],["North road fence | bamboo infill 015","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,24.83,1,-40,1]],["North road fence | bamboo infill 016","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,24.69,1,-40,1]],["North road fence | bamboo infill 017","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,24.55,1,-40,1]],["North road fence | bamboo infill 018","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,24.41,1,-40,1]],["North road fence | bamboo infill 019","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,24.27,1,-40,1]],["North road fence | bamboo infill 020","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,24.13,1,-40,1]],["North road fence | bamboo infill 021","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,23.99,1,-40,1]],["North road fence | bamboo infill 022","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,23.85,1,-40,1]],["North road fence | bamboo infill 023","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,23.71,1,-40,1]],["North road fence | bamboo infill 024","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,23.57,1,-40,1]],["North road fence | bamboo infill 025","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,23.43,1,-40,1]],["North road fence | bamboo infill 026","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,23.29,1,-40,1]],["North road fence | bamboo infill 027","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,23.15,1,-40,1]],["North road fence | bamboo infill 028","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,23.01,1,-40,1]],["North road fence | bamboo infill 029","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,22.87,1,-40,1]],["North road fence | bamboo infill 030","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,22.73,1,-40,1]],["North road fence | bamboo infill 031","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,22.59,1,-40,1]],["North road fence | bamboo infill 032","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,22.45,1,-40,1]],["North road fence | bamboo infill 033","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,22.31,1,-40,1]],["North road fence | bamboo infill 034","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,22.17,1,-40,1]],["North road fence | bamboo infill 035","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,22.03,1,-40,1]],["North road fence | bamboo infill 036","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,21.89,1,-40,1]],["North road fence | bamboo infill 037","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,21.75,1,-40,1]],["North road fence | bamboo infill 038","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,21.61,1,-40,1]],["North road fence | bamboo infill 039","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,21.47,1,-40,1]],["North road fence | bamboo infill 040","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,21.33,1,-40,1]],["North road fence | bamboo infill 041","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,21.19,1,-40,1]],["North road fence | bamboo infill 042","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,21.05,1,-40,1]],["North road fence | bamboo infill 043","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,20.91,1,-40,1]],["North road fence | bamboo infill 044","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,20.77,1,-40,1]],["North road fence | bamboo infill 045","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,20.63,1,-40,1]],["North road fence | bamboo infill 046","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,20.49,1,-40,1]],["North road fence | bamboo infill 047","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,20.35,1,-40,1]],["North road fence | bamboo infill 048","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,20.21,1,-40,1]],["North road fence | bamboo infill 049","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,20.07,1,-40,1]],["North road fence | bamboo infill 050","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,19.93,1,-40,1]],["North road fence | bamboo infill 051","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,19.79,1,-40,1]],["North road fence | bamboo infill 052","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,19.65,1,-40,1]],["North road fence | bamboo infill 053","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,19.51,1,-40,1]],["North road fence | bamboo infill 054","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,19.37,1,-40,1]],["North road fence | bamboo infill 055","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,19.23,1,-40,1]],["North road fence | bamboo infill 056","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,19.09,1,-40,1]],["North road fence | bamboo infill 057","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,18.95,1,-40,1]],["North road fence | bamboo infill 058","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,18.81,1,-40,1]],["North road fence | bamboo infill 059","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,18.67,1,-40,1]],["North road fence | bamboo infill 060","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,18.53,1,-40,1]],["North road fence | bamboo infill 061","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,18.39,1,-40,1]],["North road fence | bamboo infill 062","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,18.25,1,-40,1]],["North road fence | bamboo infill 063","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,18.11,1,-40,1]],["North road fence | bamboo infill 064","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,17.97,1,-40,1]],["North road fence | bamboo infill 065","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,17.83,1,-40,1]],["North road fence | bamboo infill 066","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,17.69,1,-40,1]],["North road fence | bamboo infill 067","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,17.55,1,-40,1]],["North road fence | bamboo infill 068","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,17.41,1,-40,1]],["North road fence | bamboo infill 069","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,17.27,1,-40,1]],["North road fence | bamboo infill 070","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,17.13,1,-40,1]],["North road fence | bamboo infill 071","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,16.99,1,-40,1]],["North road fence | bamboo infill 072","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,16.85,1,-40,1]],["North road fence | bamboo infill 073","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,16.71,1,-40,1]],["North road fence | bamboo infill 074","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,16.57,1,-40,1]],["North road fence | bamboo infill 075","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,16.43,1,-40,1]],["North road fence | bamboo infill 076","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,16.29,1,-40,1]],["North road fence | bamboo infill 077","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,16.15,1,-40,1]],["North road fence | bamboo infill 078","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,16.01,1,-40,1]],["North road fence | bamboo infill 079","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,15.87,1,-40,1]],["North road fence | bamboo infill 080","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,15.73,1,-40,1]],["North road fence | bamboo infill 081","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,15.59,1,-40,1]],["North road fence | bamboo infill 082","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,15.45,1,-40,1]],["North road fence | bamboo infill 083","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,15.31,1,-40,1]],["North road fence | bamboo infill 084","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,15.17,1,-40,1]],["North road fence | bamboo infill 085","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,15.03,1,-40,1]],["North road fence | bamboo infill 086","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,14.89,1,-40,1]],["North road fence | bamboo infill 087","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,14.75,1,-40,1]],["North road fence | bamboo infill 088","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,14.61,1,-40,1]],["North road fence | bamboo infill 089","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,14.47,1,-40,1]],["North road fence | bamboo infill 090","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,14.33,1,-40,1]],["North road fence | bamboo infill 091","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,14.19,1,-40,1]],["North road fence | bamboo infill 092","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,14.05,1,-40,1]],["North road fence | bamboo infill 093","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,13.91,1,-40,1]],["North road fence | bamboo infill 094","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,13.77,1,-40,1]],["North road fence | bamboo infill 095","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,13.63,1,-40,1]],["North road fence | bamboo infill 096","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,13.49,1,-40,1]],["North road fence | bamboo infill 097","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,13.35,1,-40,1]],["North road fence | bamboo infill 098","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,13.21,1,-40,1]],["North road fence | bamboo infill 099","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,13.07,1,-40,1]],["North road fence | bamboo infill 100","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,12.93,1,-40,1]],["North road fence | bamboo infill 101","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,12.79,1,-40,1]],["North road fence | bamboo infill 102","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,12.65,1,-40,1]],["North road fence | bamboo infill 103","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,12.51,1,-40,1]],["North road fence | bamboo infill 104","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,12.37,1,-40,1]],["North road fence | bamboo infill 105","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,12.23,1,-40,1]],["North road fence | bamboo infill 106","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,12.09,1,-40,1]],["North road fence | bamboo infill 107","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,11.95,1,-40,1]],["North road fence | bamboo infill 108","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,11.81,1,-40,1]],["North road fence | bamboo infill 109","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,11.67,1,-40,1]],["North road fence | bamboo infill 110","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,11.53,1,-40,1]],["North road fence | bamboo infill 111","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,11.39,1,-40,1]],["North road fence | bamboo infill 112","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,11.25,1,-40,1]],["North road fence | bamboo infill 113","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,11.11,1,-40,1]],["North road fence | bamboo infill 114","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,10.97,1,-40,1]],["North road fence | bamboo infill 115","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,10.83,1,-40,1]],["North road fence | bamboo infill 116","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,10.69,1,-40,1]],["North road fence | bamboo infill 117","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,10.55,1,-40,1]],["North road fence | bamboo infill 118","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,10.41,1,-40,1]],["North road fence | bamboo infill 119","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,10.27,1,-40,1]],["North road fence | bamboo infill 120","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,10.13,1,-40,1]],["North road fence | bamboo infill 121","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,9.99,1,-40,1]],["North road fence | bamboo infill 122","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,9.85,1,-40,1]],["North road fence | bamboo infill 123","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,9.71,1,-40,1]],["North road fence | bamboo infill 124","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,9.57,1,-40,1]],["North road fence | bamboo infill 125","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,9.43,1,-40,1]],["North road fence | bamboo infill 126","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,9.29,1,-40,1]],["North road fence | bamboo infill 127","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,9.15,1,-40,1]],["North road fence | bamboo infill 128","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,9.01,1,-40,1]],["North road fence | bamboo infill 129","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,8.87,1,-40,1]],["North road fence | bamboo infill 130","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,8.73,1,-40,1]],["North road fence | bamboo infill 131","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,8.59,1,-40,1]],["North road fence | bamboo infill 132","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,8.45,1,-40,1]],["North road fence | bamboo infill 133","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,8.31,1,-40,1]],["North road fence | bamboo infill 134","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,8.17,1,-40,1]],["North road fence | bamboo infill 135","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,8.03,1,-40,1]],["North road fence | bamboo infill 136","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,7.89,1,-40,1]],["North road fence | bamboo infill 137","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,7.75,1,-40,1]],["North road fence | bamboo infill 138","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,7.61,1,-40,1]],["North road fence | bamboo infill 139","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,7.47,1,-40,1]],["North road fence | bamboo infill 140","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,7.33,1,-40,1]],["North road fence | bamboo infill 141","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,7.19,1,-40,1]],["North road fence | bamboo infill 142","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,7.05,1,-40,1]],["North road fence | bamboo infill 143","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,6.91,1,-40,1]],["North road fence | bamboo infill 144","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,6.77,1,-40,1]],["North road fence | bamboo infill 145","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,6.63,1,-40,1]],["North road fence | bamboo infill 146","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,6.49,1,-40,1]],["North road fence | bamboo infill 147","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,6.35,1,-40,1]],["North road fence | bamboo infill 148","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,6.21,1,-40,1]],["North road fence | bamboo infill 149","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,6.07,1,-40,1]],["North road fence | bamboo infill 150","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,5.93,1,-40,1]],["North road fence | bamboo infill 151","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,5.79,1,-40,1]],["North road fence | bamboo infill 152","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,5.65,1,-40,1]],["North road fence | bamboo infill 153","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,5.51,1,-40,1]],["North road fence | bamboo infill 154","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,5.37,1,-40,1]],["North road fence | bamboo infill 155","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,5.23,1,-40,1]],["North road fence | bamboo infill 156","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,5.09,1,-40,1]],["North road fence | bamboo infill 157","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,4.95,1,-40,1]],["North road fence | bamboo infill 158","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,4.81,1,-40,1]],["North road fence | bamboo infill 159","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,4.67,1,-40,1]],["North road fence | bamboo infill 160","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,4.53,1,-40,1]],["North road fence | bamboo infill 161","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,4.39,1,-40,1]],["North road fence | bamboo infill 162","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,4.25,1,-40,1]],["North road fence | bamboo infill 163","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,4.11,1,-40,1]],["North road fence | bamboo infill 164","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,3.97,1,-40,1]],["North road fence | bamboo infill 165","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,3.83,1,-40,1]],["North road fence | bamboo infill 166","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,3.69,1,-40,1]],["North road fence | bamboo infill 167","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,3.55,1,-40,1]],["North road fence | bamboo infill 168","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,3.41,1,-40,1]],["North road fence | bamboo infill 169","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,3.27,1,-40,1]],["North road fence | bamboo infill 170","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,3.13,1,-40,1]],["North road fence | bamboo infill 171","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,2.99,1,-40,1]],["North road fence | bamboo infill 172","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,2.85,1,-40,1]],["North road fence | bamboo infill 173","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,2.71,1,-40,1]],["North road fence | bamboo infill 174","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,2.57,1,-40,1]],["North road fence | bamboo infill 175","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,2.43,1,-40,1]],["North road fence | bamboo infill 176","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,2.29,1,-40,1]],["North road fence | bamboo infill 177","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,2.15,1,-40,1]],["North road fence | bamboo infill 178","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,2.01,1,-40,1]],["North road fence | bamboo infill 179","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,1.87,1,-40,1]],["North road fence | bamboo infill 180","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,1.73,1,-40,1]],["North road fence | bamboo infill 181","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,1.59,1,-40,1]],["North road fence | bamboo infill 182","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,1.45,1,-40,1]],["North road fence | bamboo infill 183","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,1.31,1,-40,1]],["North road fence | bamboo infill 184","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,1.17,1,-40,1]],["North road fence | bamboo infill 185","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,1.03,1,-40,1]],["North road fence | bamboo infill 186","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,.89,1,-40,1]],["North road fence | bamboo infill 187","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,.75,1,-40,1]],["North road fence | bamboo infill 188","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,.61,1,-40,1]],["North road fence | bamboo infill 189","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,.47,1,-40,1]],["North road fence | bamboo infill 190","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,.33,1,-40,1]],["North road fence | bamboo infill 191","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,.19,1,-40,1]],["North road fence | bamboo infill 192","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,.05,1,-40,1]],["North road fence | bamboo infill 193","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-.09,1,-40,1]],["North road fence | bamboo infill 194","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-.23,1,-40,1]],["North road fence | bamboo infill 195","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-.37,1,-40,1]],["North road fence | bamboo infill 196","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-.51,1,-40,1]],["North road fence | bamboo infill 197","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-.65,1,-40,1]],["North road fence | bamboo infill 198","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-.79,1,-40,1]],["North road fence | bamboo infill 199","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-.93,1,-40,1]],["North road fence | bamboo infill 200","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-1.07,1,-40,1]],["North road fence | bamboo infill 201","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-1.21,1,-40,1]],["North road fence | bamboo infill 202","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-1.35,1,-40,1]],["North road fence | bamboo infill 203","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-1.49,1,-40,1]],["North road fence | bamboo infill 204","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-1.63,1,-40,1]],["North road fence | bamboo infill 205","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-1.77,1,-40,1]],["North road fence | bamboo infill 206","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-1.91,1,-40,1]],["North road fence | bamboo infill 207","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-2.05,1,-40,1]],["North road fence | bamboo infill 208","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-2.19,1,-40,1]],["North road fence | bamboo infill 209","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-2.33,1,-40,1]],["North road fence | bamboo infill 210","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-2.47,1,-40,1]],["North road fence | bamboo infill 211","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-2.61,1,-40,1]],["North road fence | bamboo infill 212","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-2.75,1,-40,1]],["North road fence | bamboo infill 213","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-2.89,1,-40,1]],["North road fence | bamboo infill 214","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-3.03,1,-40,1]],["North road fence | bamboo infill 215","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-3.17,1,-40,1]],["North road fence | bamboo infill 216","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-3.31,1,-40,1]],["North road fence | bamboo infill 217","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-3.45,1,-40,1]],["North road fence | bamboo infill 218","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-3.59,1,-40,1]],["North road fence | bamboo infill 219","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-3.73,1,-40,1]],["North road fence | bamboo infill 220","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-3.87,1,-40,1]],["North road fence | bamboo infill 221","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-4.01,1,-40,1]],["North road fence | bamboo infill 222","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-4.15,1,-40,1]],["North road fence | bamboo infill 223","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-4.29,1,-40,1]],["North road fence | bamboo infill 224","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-4.43,1,-40,1]],["North road fence | bamboo infill 225","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-4.57,1,-40,1]],["North road fence | bamboo infill 226","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-4.71,1,-40,1]],["North road fence | bamboo infill 227","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-4.85,1,-40,1]],["North road fence | bamboo infill 228","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-4.99,1,-40,1]],["North road fence | bamboo infill 229","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-5.13,1,-40,1]],["North road fence | bamboo infill 230","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-5.27,1,-40,1]],["North road fence | bamboo infill 231","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-5.41,1,-40,1]],["North road fence | bamboo infill 232","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-5.55,1,-40,1]],["North road fence | bamboo infill 233","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-5.69,1,-40,1]],["North road fence | bamboo infill 234","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-5.83,1,-40,1]],["North road fence | bamboo infill 235","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-5.97,1,-40,1]],["North road fence | bamboo infill 236","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-6.11,1,-40,1]],["North road fence | bamboo infill 237","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-6.25,1,-40,1]],["North road fence | bamboo infill 238","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-6.39,1,-40,1]],["North road fence | bamboo infill 239","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-6.53,1,-40,1]],["North road fence | bamboo infill 240","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-6.67,1,-40,1]],["North road fence | bamboo infill 241","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-6.81,1,-40,1]],["North road fence | bamboo infill 242","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-6.95,1,-40,1]],["North road fence | bamboo infill 243","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-7.09,1,-40,1]],["North road fence | bamboo infill 244","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-7.23,1,-40,1]],["North road fence | bamboo infill 245","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-7.37,1,-40,1]],["North road fence | bamboo infill 246","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-7.51,1,-40,1]],["North road fence | bamboo infill 247","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-7.65,1,-40,1]],["North road fence | bamboo infill 248","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-7.79,1,-40,1]],["North road fence | bamboo infill 249","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-7.93,1,-40,1]],["North road fence | bamboo infill 250","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-8.07,1,-40,1]],["North road fence | bamboo infill 251","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-8.21,1,-40,1]],["North road fence | bamboo infill 252","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-8.35,1,-40,1]],["North road fence | bamboo infill 253","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-8.49,1,-40,1]],["North road fence | bamboo infill 254","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-8.63,1,-40,1]],["North road fence | bamboo infill 255","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-8.77,1,-40,1]],["North road fence | bamboo infill 256","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-8.91,1,-40,1]],["North road fence | bamboo infill 257","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-9.05,1,-40,1]],["North road fence | bamboo infill 258","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-9.19,1,-40,1]],["North road fence | bamboo infill 259","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-9.33,1,-40,1]],["North road fence | bamboo infill 260","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-9.47,1,-40,1]],["North road fence | bamboo infill 261","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-9.61,1,-40,1]],["North road fence | bamboo infill 262","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-9.75,1,-40,1]],["North road fence | bamboo infill 263","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-9.89,1,-40,1]],["North road fence | bamboo infill 264","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-10.03,1,-40,1]],["North road fence | bamboo infill 265","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-10.17,1,-40,1]],["North road fence | bamboo infill 266","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-10.31,1,-40,1]],["North road fence | bamboo infill 267","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-10.45,1,-40,1]],["North road fence | bamboo infill 268","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-10.59,1,-40,1]],["North road fence | bamboo infill 269","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-10.73,1,-40,1]],["North road fence | bamboo infill 270","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-10.87,1,-40,1]],["North road fence | bamboo infill 271","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-11.01,1,-40,1]],["North road fence | bamboo infill 272","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-11.15,1,-40,1]],["North road fence | bamboo infill 273","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-11.29,1,-40,1]],["North road fence | bamboo infill 274","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-11.43,1,-40,1]],["North road fence | bamboo infill 275","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-11.57,1,-40,1]],["North road fence | bamboo infill 276","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-11.71,1,-40,1]],["North road fence | bamboo infill 277","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-11.85,1,-40,1]],["North road fence | bamboo infill 278","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-11.99,1,-40,1]],["North road fence | bamboo infill 279","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-12.13,1,-40,1]],["North road fence | bamboo infill 280","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-12.27,1,-40,1]],["North road fence | bamboo infill 281","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-12.41,1,-40,1]],["North road fence | bamboo infill 282","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-12.55,1,-40,1]],["North road fence | bamboo infill 283","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-12.69,1,-40,1]],["North road fence | bamboo infill 284","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-12.83,1,-40,1]],["North road fence | bamboo infill 285","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-12.97,1,-40,1]],["North road fence | bamboo infill 286","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-13.11,1,-40,1]],["North road fence | bamboo infill 287","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-13.25,1,-40,1]],["North road fence | bamboo infill 288","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-13.39,1,-40,1]],["North road fence | bamboo infill 289","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-13.53,1,-40,1]],["North road fence | bamboo infill 290","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-13.67,1,-40,1]],["North road fence | bamboo infill 291","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-13.81,1,-40,1]],["North road fence | bamboo infill 292","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-13.95,1,-40,1]],["North road fence | bamboo infill 293","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-14.09,1,-40,1]],["North road fence | bamboo infill 294","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-14.23,1,-40,1]],["North road fence | bamboo infill 295","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-14.37,1,-40,1]],["North road fence | bamboo infill 296","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-14.51,1,-40,1]],["North road fence | bamboo infill 297","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-14.65,1,-40,1]],["North road fence | bamboo infill 298","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-14.79,1,-40,1]],["North road fence | bamboo infill 299","01bf03c63ff8a57d",3,[1,0,0,0,0,1,0,0,0,0,1,0,-14.93,1,-40,1]],["West return fence | post 00","0ec6f2af51ffe213",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.05,-40,1]],["West return fence | post 01","0ec6f2af51ffe213",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.05,-38.125,1]],["West return fence | post 02","0ec6f2af51ffe213",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.05,-36.25,1]],["West return fence | post 03","0ec6f2af51ffe213",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.05,-34.375,1]],["West return fence | post 04","0ec6f2af51ffe213",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.05,-32.5,1]],["West return fence | post 05","0ec6f2af51ffe213",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.05,-30.625,1]],["West return fence | post 06","0ec6f2af51ffe213",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.05,-28.75,1]],["West return fence | post 07","0ec6f2af51ffe213",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.05,-26.875,1]],["West return fence | post 08","0ec6f2af51ffe213",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.05,-25,1]],["West return fence | horizontal rail","1cb4447cb81d1bb1",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,.35,-32.5,1]],["West return fence | horizontal rail.001","1cb4447cb81d1bb1",1,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1.65,-32.5,1]],["West return fence | protective top cap","6faffb9b8dc3b59a",2,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,2.12,-32.5,1]],["West return fence | bamboo infill 000","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-39.9299,1]],["West return fence | bamboo infill 001","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-39.78972,1]],["West return fence | bamboo infill 002","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-39.64953,1]],["West return fence | bamboo infill 003","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-39.50935,1]],["West return fence | bamboo infill 004","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-39.36916,1]],["West return fence | bamboo infill 005","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-39.22897,1]],["West return fence | bamboo infill 006","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-39.08878,1]],["West return fence | bamboo infill 007","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-38.9486,1]],["West return fence | bamboo infill 008","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-38.80841,1]],["West return fence | bamboo infill 009","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-38.66822,1]],["West return fence | bamboo infill 010","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-38.52804,1]],["West return fence | bamboo infill 011","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-38.38785,1]],["West return fence | bamboo infill 012","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-38.24767,1]],["West return fence | bamboo infill 013","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-38.10748,1]],["West return fence | bamboo infill 014","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-37.96729,1]],["West return fence | bamboo infill 015","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-37.8271,1]],["West return fence | bamboo infill 016","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-37.68692,1]],["West return fence | bamboo infill 017","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-37.54673,1]],["West return fence | bamboo infill 018","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-37.40654,1]],["West return fence | bamboo infill 019","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-37.26635,1]],["West return fence | bamboo infill 020","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-37.12617,1]],["West return fence | bamboo infill 021","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-36.98598,1]],["West return fence | bamboo infill 022","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-36.84579,1]],["West return fence | bamboo infill 023","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-36.70561,1]],["West return fence | bamboo infill 024","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-36.56542,1]],["West return fence | bamboo infill 025","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-36.42523,1]],["West return fence | bamboo infill 026","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-36.28505,1]],["West return fence | bamboo infill 027","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-36.14486,1]],["West return fence | bamboo infill 028","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-36.00467,1]],["West return fence | bamboo infill 029","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-35.86449,1]],["West return fence | bamboo infill 030","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-35.7243,1]],["West return fence | bamboo infill 031","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-35.58411,1]],["West return fence | bamboo infill 032","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-35.44392,1]],["West return fence | bamboo infill 033","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-35.30374,1]],["West return fence | bamboo infill 034","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-35.16355,1]],["West return fence | bamboo infill 035","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-35.02337,1]],["West return fence | bamboo infill 036","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-34.88318,1]],["West return fence | bamboo infill 037","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-34.74299,1]],["West return fence | bamboo infill 038","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-34.6028,1]],["West return fence | bamboo infill 039","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-34.46262,1]],["West return fence | bamboo infill 040","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-34.32243,1]],["West return fence | bamboo infill 041","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-34.18224,1]],["West return fence | bamboo infill 042","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-34.04206,1]],["West return fence | bamboo infill 043","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-33.90187,1]],["West return fence | bamboo infill 044","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-33.76168,1]],["West return fence | bamboo infill 045","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-33.62149,1]],["West return fence | bamboo infill 046","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-33.48131,1]],["West return fence | bamboo infill 047","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-33.34112,1]],["West return fence | bamboo infill 048","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-33.20094,1]],["West return fence | bamboo infill 049","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-33.06075,1]],["West return fence | bamboo infill 050","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-32.92056,1]],["West return fence | bamboo infill 051","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-32.78037,1]],["West return fence | bamboo infill 052","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-32.64019,1]],["West return fence | bamboo infill 053","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-32.5,1]],["West return fence | bamboo infill 054","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-32.35981,1]],["West return fence | bamboo infill 055","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-32.21963,1]],["West return fence | bamboo infill 056","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-32.07944,1]],["West return fence | bamboo infill 057","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-31.93925,1]],["West return fence | bamboo infill 058","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-31.79906,1]],["West return fence | bamboo infill 059","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-31.65888,1]],["West return fence | bamboo infill 060","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-31.51869,1]],["West return fence | bamboo infill 061","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-31.3785,1]],["West return fence | bamboo infill 062","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-31.23832,1]],["West return fence | bamboo infill 063","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-31.09813,1]],["West return fence | bamboo infill 064","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-30.95794,1]],["West return fence | bamboo infill 065","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-30.81776,1]],["West return fence | bamboo infill 066","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-30.67757,1]],["West return fence | bamboo infill 067","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-30.53738,1]],["West return fence | bamboo infill 068","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-30.3972,1]],["West return fence | bamboo infill 069","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-30.25701,1]],["West return fence | bamboo infill 070","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-30.11682,1]],["West return fence | bamboo infill 071","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-29.97663,1]],["West return fence | bamboo infill 072","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-29.83645,1]],["West return fence | bamboo infill 073","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-29.69626,1]],["West return fence | bamboo infill 074","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-29.55607,1]],["West return fence | bamboo infill 075","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-29.41589,1]],["West return fence | bamboo infill 076","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-29.2757,1]],["West return fence | bamboo infill 077","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-29.13551,1]],["West return fence | bamboo infill 078","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-28.99533,1]],["West return fence | bamboo infill 079","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-28.85514,1]],["West return fence | bamboo infill 080","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-28.71495,1]],["West return fence | bamboo infill 081","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-28.57477,1]],["West return fence | bamboo infill 082","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-28.43458,1]],["West return fence | bamboo infill 083","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-28.29439,1]],["West return fence | bamboo infill 084","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-28.15421,1]],["West return fence | bamboo infill 085","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-28.01402,1]],["West return fence | bamboo infill 086","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-27.87383,1]],["West return fence | bamboo infill 087","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-27.73364,1]],["West return fence | bamboo infill 088","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-27.59346,1]],["West return fence | bamboo infill 089","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-27.45327,1]],["West return fence | bamboo infill 090","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-27.31308,1]],["West return fence | bamboo infill 091","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-27.1729,1]],["West return fence | bamboo infill 092","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-27.03271,1]],["West return fence | bamboo infill 093","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-26.89252,1]],["West return fence | bamboo infill 094","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-26.75234,1]],["West return fence | bamboo infill 095","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-26.61215,1]],["West return fence | bamboo infill 096","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-26.47196,1]],["West return fence | bamboo infill 097","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-26.33178,1]],["West return fence | bamboo infill 098","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-26.19159,1]],["West return fence | bamboo infill 099","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-26.0514,1]],["West return fence | bamboo infill 100","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-25.91121,1]],["West return fence | bamboo infill 101","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-25.77103,1]],["West return fence | bamboo infill 102","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-25.63084,1]],["West return fence | bamboo infill 103","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-25.49065,1]],["West return fence | bamboo infill 104","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-25.35047,1]],["West return fence | bamboo infill 105","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-25.21028,1]],["West return fence | bamboo infill 106","01bf03c63ff8a57d",3,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-15,1,-25.07009,1]],["Path | south cross-site | 5 m wide","5620125b438321ed",4,[1,0,0,0,0,1,0,0,0,0,1,0,6,.015,7.5,1]],["Path | north cross-site | 5 m wide","5620125b438321ed",4,[1,0,0,0,0,1,0,0,0,0,1,0,6,.015,-22.5,1]],["Path | east courtyard edge | 5 m wide","51b7a58bf7522874",4,[1,0,0,0,0,1,0,0,0,0,1,0,24.5,.015,-7.5,1]],["Path | west courtyard edge | 5 m wide","51b7a58bf7522874",4,[1,0,0,0,0,1,0,0,0,0,1,0,-12.5,.015,-7.5,1]],["ZONE | South lawn | 42 x 10 m","c56017441cd4c3f9",5,[1,0,0,0,0,1,0,0,0,0,1,0,6,.025,15,1]],["ZONE | Courtyard lawn | 22 x 15 m","830268f41e2746da",5,[1,0,0,0,0,1,0,0,0,0,1,0,6,.025,-7.5,1]],["ZONE | Courtyard gravel seating west","15bd7b23d8c45c93",6,[1,0,0,0,0,1,0,0,0,0,1,0,-8,.025,-7.5,1]],["ZONE | Courtyard gravel garden east","15bd7b23d8c45c93",6,[1,0,0,0,0,1,0,0,0,0,1,0,20,.025,-7.5,1]],["ZONE | East sculpture and waterfall | 12 x 15 m","9bc870ae8004fd8f",7,[1,0,0,0,0,1,0,0,0,0,1,0,21,.025,-32.5,1]],["ZONE | North garden gravel","a2162646c6d4b889",6,[1,0,0,0,0,1,0,0,0,0,1,0,10,.025,-32.5,1]],["ZONE | North garden grass","a2162646c6d4b889",5,[1,0,0,0,0,1,0,0,0,0,1,0,0,.025,-32.5,1]],["ZONE | Pond viewing area | 10 x 5 m","935bcc8c2acdc33b",6,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.055,-31.5,1]],["ZONE | West garden grass","8ee565191a5c7083",5,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.025,-35.5,1]],["ZONE | North fence planting border | 42 x 1 m","f78b4168f614d06c",8,[1,0,0,0,0,1,0,0,0,0,1,0,6,.1,-39.5,1]],["ZONE | Shrine placement | 30 x 23 m","01ab01eb56c2bce0",9,[1,0,0,0,0,1,0,0,0,0,1,0,6,.055,-7.5,1]],["PATH | Courtyard inner | south","0158304ea582f055",6,[1,0,0,0,0,1,0,0,0,0,1,0,6,.065,4.5,1]],["PATH | Courtyard inner | north","0158304ea582f055",6,[1,0,0,0,0,1,0,0,0,0,1,0,6,.065,-19.5,1]],["PATH | Courtyard inner | east","008b9f4e808dd629",6,[1,0,0,0,0,1,0,0,0,0,1,0,-9.5,.065,-7.5,1]],["PATH | Courtyard inner | west","008b9f4e808dd629",6,[1,0,0,0,0,1,0,0,0,0,1,0,21.5,.065,-7.5,1]],["FENCE | Courtyard south | rail","acb433d760dc00e9",10,[1,0,0,0,0,1,0,0,0,0,1,0,6,.2,5,1]],["FENCE | Courtyard south | rail.001","acb433d760dc00e9",10,[1,0,0,0,0,1,0,0,0,0,1,0,6,1.55,5,1]],["FENCE | Courtyard south | picket","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.9,5,1]],["FENCE | Courtyard south | picket.001","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-9.75,.9,5,1]],["FENCE | Courtyard south | picket.002","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-9.5,.9,5,1]],["FENCE | Courtyard south | picket.003","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-9.25,.9,5,1]],["FENCE | Courtyard south | picket.004","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-9,.9,5,1]],["FENCE | Courtyard south | picket.005","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-8.75,.9,5,1]],["FENCE | Courtyard south | picket.006","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-8.5,.9,5,1]],["FENCE | Courtyard south | picket.007","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-8.25,.9,5,1]],["FENCE | Courtyard south | picket.008","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-8,.9,5,1]],["FENCE | Courtyard south | picket.009","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7.75,.9,5,1]],["FENCE | Courtyard south | picket.010","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7.5,.9,5,1]],["FENCE | Courtyard south | picket.011","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7.25,.9,5,1]],["FENCE | Courtyard south | picket.012","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7,.9,5,1]],["FENCE | Courtyard south | picket.013","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-6.75,.9,5,1]],["FENCE | Courtyard south | picket.014","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-6.5,.9,5,1]],["FENCE | Courtyard south | picket.015","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-6.25,.9,5,1]],["FENCE | Courtyard south | picket.016","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-6,.9,5,1]],["FENCE | Courtyard south | picket.017","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5.75,.9,5,1]],["FENCE | Courtyard south | picket.018","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5.5,.9,5,1]],["FENCE | Courtyard south | picket.019","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5.25,.9,5,1]],["FENCE | Courtyard south | picket.020","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5,.9,5,1]],["FENCE | Courtyard south | picket.021","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-4.75,.9,5,1]],["FENCE | Courtyard south | picket.022","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-4.5,.9,5,1]],["FENCE | Courtyard south | picket.023","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-4.25,.9,5,1]],["FENCE | Courtyard south | picket.024","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-4,.9,5,1]],["FENCE | Courtyard south | picket.025","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3.75,.9,5,1]],["FENCE | Courtyard south | picket.026","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3.5,.9,5,1]],["FENCE | Courtyard south | picket.027","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3.25,.9,5,1]],["FENCE | Courtyard south | picket.028","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3,.9,5,1]],["FENCE | Courtyard south | picket.029","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-2.75,.9,5,1]],["FENCE | Courtyard south | picket.030","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-2.5,.9,5,1]],["FENCE | Courtyard south | picket.031","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-2.25,.9,5,1]],["FENCE | Courtyard south | picket.032","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-2,.9,5,1]],["FENCE | Courtyard south | picket.033","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-1.75,.9,5,1]],["FENCE | Courtyard south | picket.034","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-1.5,.9,5,1]],["FENCE | Courtyard south | picket.035","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-1.25,.9,5,1]],["FENCE | Courtyard south | picket.036","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-1,.9,5,1]],["FENCE | Courtyard south | picket.037","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-.75,.9,5,1]],["FENCE | Courtyard south | picket.038","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-.5,.9,5,1]],["FENCE | Courtyard south | picket.039","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-.25,.9,5,1]],["FENCE | Courtyard south | picket.040","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,0,.9,5,1]],["FENCE | Courtyard south | picket.041","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,.25,.9,5,1]],["FENCE | Courtyard south | picket.042","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,.5,.9,5,1]],["FENCE | Courtyard south | picket.043","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,.75,.9,5,1]],["FENCE | Courtyard south | picket.044","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,1,.9,5,1]],["FENCE | Courtyard south | picket.045","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,1.25,.9,5,1]],["FENCE | Courtyard south | picket.046","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,1.5,.9,5,1]],["FENCE | Courtyard south | picket.047","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,1.75,.9,5,1]],["FENCE | Courtyard south | picket.048","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,2,.9,5,1]],["FENCE | Courtyard south | picket.049","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,2.25,.9,5,1]],["FENCE | Courtyard south | picket.050","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,2.5,.9,5,1]],["FENCE | Courtyard south | picket.051","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,2.75,.9,5,1]],["FENCE | Courtyard south | picket.052","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,3,.9,5,1]],["FENCE | Courtyard south | picket.053","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,3.25,.9,5,1]],["FENCE | Courtyard south | picket.054","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,3.5,.9,5,1]],["FENCE | Courtyard south | picket.055","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,3.75,.9,5,1]],["FENCE | Courtyard south | picket.056","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,4,.9,5,1]],["FENCE | Courtyard south | picket.057","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,4.25,.9,5,1]],["FENCE | Courtyard south | picket.058","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,4.5,.9,5,1]],["FENCE | Courtyard south | picket.059","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,4.75,.9,5,1]],["FENCE | Courtyard south | picket.060","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,5,.9,5,1]],["FENCE | Courtyard south | picket.061","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,5.25,.9,5,1]],["FENCE | Courtyard south | picket.062","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,5.5,.9,5,1]],["FENCE | Courtyard south | picket.063","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,5.75,.9,5,1]],["FENCE | Courtyard south | picket.064","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,6,.9,5,1]],["FENCE | Courtyard south | picket.065","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,6.25,.9,5,1]],["FENCE | Courtyard south | picket.066","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,6.5,.9,5,1]],["FENCE | Courtyard south | picket.067","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,6.75,.9,5,1]],["FENCE | Courtyard south | picket.068","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,7,.9,5,1]],["FENCE | Courtyard south | picket.069","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,7.25,.9,5,1]],["FENCE | Courtyard south | picket.070","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,7.5,.9,5,1]],["FENCE | Courtyard south | picket.071","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,7.75,.9,5,1]],["FENCE | Courtyard south | picket.072","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,8,.9,5,1]],["FENCE | Courtyard south | picket.073","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,8.25,.9,5,1]],["FENCE | Courtyard south | picket.074","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,8.5,.9,5,1]],["FENCE | Courtyard south | picket.075","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,8.75,.9,5,1]],["FENCE | Courtyard south | picket.076","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,9,.9,5,1]],["FENCE | Courtyard south | picket.077","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,9.25,.9,5,1]],["FENCE | Courtyard south | picket.078","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,9.5,.9,5,1]],["FENCE | Courtyard south | picket.079","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,9.75,.9,5,1]],["FENCE | Courtyard south | picket.080","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,10,.9,5,1]],["FENCE | Courtyard south | picket.081","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,10.25,.9,5,1]],["FENCE | Courtyard south | picket.082","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,10.5,.9,5,1]],["FENCE | Courtyard south | picket.083","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,10.75,.9,5,1]],["FENCE | Courtyard south | picket.084","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,11,.9,5,1]],["FENCE | Courtyard south | picket.085","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,11.25,.9,5,1]],["FENCE | Courtyard south | picket.086","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,11.5,.9,5,1]],["FENCE | Courtyard south | picket.087","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,11.75,.9,5,1]],["FENCE | Courtyard south | picket.088","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,12,.9,5,1]],["FENCE | Courtyard south | picket.089","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,12.25,.9,5,1]],["FENCE | Courtyard south | picket.090","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,12.5,.9,5,1]],["FENCE | Courtyard south | picket.091","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,12.75,.9,5,1]],["FENCE | Courtyard south | picket.092","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,13,.9,5,1]],["FENCE | Courtyard south | picket.093","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,13.25,.9,5,1]],["FENCE | Courtyard south | picket.094","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,13.5,.9,5,1]],["FENCE | Courtyard south | picket.095","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,13.75,.9,5,1]],["FENCE | Courtyard south | picket.096","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,14,.9,5,1]],["FENCE | Courtyard south | picket.097","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,14.25,.9,5,1]],["FENCE | Courtyard south | picket.098","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,14.5,.9,5,1]],["FENCE | Courtyard south | picket.099","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,14.75,.9,5,1]],["FENCE | Courtyard south | picket.100","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,15,.9,5,1]],["FENCE | Courtyard south | picket.101","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,15.25,.9,5,1]],["FENCE | Courtyard south | picket.102","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,15.5,.9,5,1]],["FENCE | Courtyard south | picket.103","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,15.75,.9,5,1]],["FENCE | Courtyard south | picket.104","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,16,.9,5,1]],["FENCE | Courtyard south | picket.105","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,16.25,.9,5,1]],["FENCE | Courtyard south | picket.106","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,16.5,.9,5,1]],["FENCE | Courtyard south | picket.107","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,16.75,.9,5,1]],["FENCE | Courtyard south | picket.108","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,17,.9,5,1]],["FENCE | Courtyard south | picket.109","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,17.25,.9,5,1]],["FENCE | Courtyard south | picket.110","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,17.5,.9,5,1]],["FENCE | Courtyard south | picket.111","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,17.75,.9,5,1]],["FENCE | Courtyard south | picket.112","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,18,.9,5,1]],["FENCE | Courtyard south | picket.113","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,18.25,.9,5,1]],["FENCE | Courtyard south | picket.114","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,18.5,.9,5,1]],["FENCE | Courtyard south | picket.115","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,18.75,.9,5,1]],["FENCE | Courtyard south | picket.116","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,19,.9,5,1]],["FENCE | Courtyard south | picket.117","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,19.25,.9,5,1]],["FENCE | Courtyard south | picket.118","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,19.5,.9,5,1]],["FENCE | Courtyard south | picket.119","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,19.75,.9,5,1]],["FENCE | Courtyard south | picket.120","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,20,.9,5,1]],["FENCE | Courtyard south | picket.121","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,20.25,.9,5,1]],["FENCE | Courtyard south | picket.122","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,20.5,.9,5,1]],["FENCE | Courtyard south | picket.123","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,20.75,.9,5,1]],["FENCE | Courtyard south | picket.124","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,21,.9,5,1]],["FENCE | Courtyard south | picket.125","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,21.25,.9,5,1]],["FENCE | Courtyard south | picket.126","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,21.5,.9,5,1]],["FENCE | Courtyard south | picket.127","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,21.75,.9,5,1]],["FENCE | Courtyard south | picket.128","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,22,.9,5,1]],["FENCE | Courtyard south | post","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.95,5,1]],["FENCE | Courtyard south | post.001","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7.53846,.95,5,1]],["FENCE | Courtyard south | post.002","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5.07692,.95,5,1]],["FENCE | Courtyard south | post.003","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-2.61538,.95,5,1]],["FENCE | Courtyard south | post.004","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-.15385,.95,5,1]],["FENCE | Courtyard south | post.005","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,2.30769,.95,5,1]],["FENCE | Courtyard south | post.006","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,4.76923,.95,5,1]],["FENCE | Courtyard south | post.007","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,7.23077,.95,5,1]],["FENCE | Courtyard south | post.008","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,9.69231,.95,5,1]],["FENCE | Courtyard south | post.009","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,12.15385,.95,5,1]],["FENCE | Courtyard south | post.010","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,14.61539,.95,5,1]],["FENCE | Courtyard south | post.011","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,17.07692,.95,5,1]],["FENCE | Courtyard south | post.012","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,19.53846,.95,5,1]],["FENCE | Courtyard south | post.013","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,22,.95,5,1]],["FENCE | Courtyard east | rail","f876ece7c13ce937",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.2,-7.5,1]],["FENCE | Courtyard east | rail.001","f876ece7c13ce937",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,1.55,-7.5,1]],["FENCE | Courtyard east | picket","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,5,1]],["FENCE | Courtyard east | picket.001","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,4.75,1]],["FENCE | Courtyard east | picket.002","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,4.5,1]],["FENCE | Courtyard east | picket.003","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,4.25,1]],["FENCE | Courtyard east | picket.004","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,4,1]],["FENCE | Courtyard east | picket.005","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,3.75,1]],["FENCE | Courtyard east | picket.006","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,3.5,1]],["FENCE | Courtyard east | picket.007","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,3.25,1]],["FENCE | Courtyard east | picket.008","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,3,1]],["FENCE | Courtyard east | picket.009","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,2.75,1]],["FENCE | Courtyard east | picket.010","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,2.5,1]],["FENCE | Courtyard east | picket.011","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,2.25,1]],["FENCE | Courtyard east | picket.012","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,2,1]],["FENCE | Courtyard east | picket.013","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,1.75,1]],["FENCE | Courtyard east | picket.014","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,1.5,1]],["FENCE | Courtyard east | picket.015","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,1.25,1]],["FENCE | Courtyard east | picket.016","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,1,1]],["FENCE | Courtyard east | picket.017","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,.75,1]],["FENCE | Courtyard east | picket.018","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,.5,1]],["FENCE | Courtyard east | picket.019","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,.25,1]],["FENCE | Courtyard east | picket.020","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,0,1]],["FENCE | Courtyard east | picket.021","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-.25,1]],["FENCE | Courtyard east | picket.022","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-.5,1]],["FENCE | Courtyard east | picket.023","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-.75,1]],["FENCE | Courtyard east | picket.024","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-1,1]],["FENCE | Courtyard east | picket.025","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-1.25,1]],["FENCE | Courtyard east | picket.026","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-1.5,1]],["FENCE | Courtyard east | picket.027","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-1.75,1]],["FENCE | Courtyard east | picket.028","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-2,1]],["FENCE | Courtyard east | picket.029","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-2.25,1]],["FENCE | Courtyard east | picket.030","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-2.5,1]],["FENCE | Courtyard east | picket.031","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-2.75,1]],["FENCE | Courtyard east | picket.032","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-3,1]],["FENCE | Courtyard east | picket.033","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-3.25,1]],["FENCE | Courtyard east | picket.034","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-3.5,1]],["FENCE | Courtyard east | picket.035","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-3.75,1]],["FENCE | Courtyard east | picket.036","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-4,1]],["FENCE | Courtyard east | picket.037","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-4.25,1]],["FENCE | Courtyard east | picket.038","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-4.5,1]],["FENCE | Courtyard east | picket.039","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-4.75,1]],["FENCE | Courtyard east | picket.040","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-5,1]],["FENCE | Courtyard east | picket.041","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-5.25,1]],["FENCE | Courtyard east | picket.042","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-5.5,1]],["FENCE | Courtyard east | picket.043","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-5.75,1]],["FENCE | Courtyard east | picket.044","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-6,1]],["FENCE | Courtyard east | picket.045","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-6.25,1]],["FENCE | Courtyard east | picket.046","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-6.5,1]],["FENCE | Courtyard east | picket.047","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-6.75,1]],["FENCE | Courtyard east | picket.048","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-7,1]],["FENCE | Courtyard east | picket.049","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-7.25,1]],["FENCE | Courtyard east | picket.050","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-7.5,1]],["FENCE | Courtyard east | picket.051","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-7.75,1]],["FENCE | Courtyard east | picket.052","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-8,1]],["FENCE | Courtyard east | picket.053","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-8.25,1]],["FENCE | Courtyard east | picket.054","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-8.5,1]],["FENCE | Courtyard east | picket.055","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-8.75,1]],["FENCE | Courtyard east | picket.056","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-9,1]],["FENCE | Courtyard east | picket.057","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-9.25,1]],["FENCE | Courtyard east | picket.058","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-9.5,1]],["FENCE | Courtyard east | picket.059","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-9.75,1]],["FENCE | Courtyard east | picket.060","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-10,1]],["FENCE | Courtyard east | picket.061","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-10.25,1]],["FENCE | Courtyard east | picket.062","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-10.5,1]],["FENCE | Courtyard east | picket.063","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-10.75,1]],["FENCE | Courtyard east | picket.064","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-11,1]],["FENCE | Courtyard east | picket.065","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-11.25,1]],["FENCE | Courtyard east | picket.066","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-11.5,1]],["FENCE | Courtyard east | picket.067","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-11.75,1]],["FENCE | Courtyard east | picket.068","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-12,1]],["FENCE | Courtyard east | picket.069","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-12.25,1]],["FENCE | Courtyard east | picket.070","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-12.5,1]],["FENCE | Courtyard east | picket.071","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-12.75,1]],["FENCE | Courtyard east | picket.072","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-13,1]],["FENCE | Courtyard east | picket.073","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-13.25,1]],["FENCE | Courtyard east | picket.074","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-13.5,1]],["FENCE | Courtyard east | picket.075","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-13.75,1]],["FENCE | Courtyard east | picket.076","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-14,1]],["FENCE | Courtyard east | picket.077","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-14.25,1]],["FENCE | Courtyard east | picket.078","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-14.5,1]],["FENCE | Courtyard east | picket.079","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-14.75,1]],["FENCE | Courtyard east | picket.080","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-15,1]],["FENCE | Courtyard east | picket.081","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-15.25,1]],["FENCE | Courtyard east | picket.082","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-15.5,1]],["FENCE | Courtyard east | picket.083","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-15.75,1]],["FENCE | Courtyard east | picket.084","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-16,1]],["FENCE | Courtyard east | picket.085","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-16.25,1]],["FENCE | Courtyard east | picket.086","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-16.5,1]],["FENCE | Courtyard east | picket.087","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-16.75,1]],["FENCE | Courtyard east | picket.088","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-17,1]],["FENCE | Courtyard east | picket.089","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-17.25,1]],["FENCE | Courtyard east | picket.090","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-17.5,1]],["FENCE | Courtyard east | picket.091","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-17.75,1]],["FENCE | Courtyard east | picket.092","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-18,1]],["FENCE | Courtyard east | picket.093","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-18.25,1]],["FENCE | Courtyard east | picket.094","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-18.5,1]],["FENCE | Courtyard east | picket.095","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-18.75,1]],["FENCE | Courtyard east | picket.096","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-19,1]],["FENCE | Courtyard east | picket.097","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-19.25,1]],["FENCE | Courtyard east | picket.098","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-19.5,1]],["FENCE | Courtyard east | picket.099","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-19.75,1]],["FENCE | Courtyard east | picket.100","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.9,-20,1]],["FENCE | Courtyard east | post","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,5,1]],["FENCE | Courtyard east | post.001","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,2.5,1]],["FENCE | Courtyard east | post.002","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,0,1]],["FENCE | Courtyard east | post.003","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,-2.5,1]],["FENCE | Courtyard east | post.004","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,-5,1]],["FENCE | Courtyard east | post.005","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,-7.5,1]],["FENCE | Courtyard east | post.006","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,-10,1]],["FENCE | Courtyard east | post.007","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,-12.5,1]],["FENCE | Courtyard east | post.008","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,-15,1]],["FENCE | Courtyard east | post.009","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,-17.5,1]],["FENCE | Courtyard east | post.010","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,-10,.95,-20,1]],["FENCE | Courtyard west | rail","f876ece7c13ce937",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.2,-7.5,1]],["FENCE | Courtyard west | rail.001","f876ece7c13ce937",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,1.55,-7.5,1]],["FENCE | Courtyard west | picket","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,5,1]],["FENCE | Courtyard west | picket.001","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,4.75,1]],["FENCE | Courtyard west | picket.002","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,4.5,1]],["FENCE | Courtyard west | picket.003","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,4.25,1]],["FENCE | Courtyard west | picket.004","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,4,1]],["FENCE | Courtyard west | picket.005","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,3.75,1]],["FENCE | Courtyard west | picket.006","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,3.5,1]],["FENCE | Courtyard west | picket.007","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,3.25,1]],["FENCE | Courtyard west | picket.008","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,3,1]],["FENCE | Courtyard west | picket.009","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,2.75,1]],["FENCE | Courtyard west | picket.010","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,2.5,1]],["FENCE | Courtyard west | picket.011","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,2.25,1]],["FENCE | Courtyard west | picket.012","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,2,1]],["FENCE | Courtyard west | picket.013","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,1.75,1]],["FENCE | Courtyard west | picket.014","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,1.5,1]],["FENCE | Courtyard west | picket.015","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,1.25,1]],["FENCE | Courtyard west | picket.016","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,1,1]],["FENCE | Courtyard west | picket.017","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,.75,1]],["FENCE | Courtyard west | picket.018","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,.5,1]],["FENCE | Courtyard west | picket.019","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,.25,1]],["FENCE | Courtyard west | picket.020","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,0,1]],["FENCE | Courtyard west | picket.021","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-.25,1]],["FENCE | Courtyard west | picket.022","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-.5,1]],["FENCE | Courtyard west | picket.023","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-.75,1]],["FENCE | Courtyard west | picket.024","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-1,1]],["FENCE | Courtyard west | picket.025","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-1.25,1]],["FENCE | Courtyard west | picket.026","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-1.5,1]],["FENCE | Courtyard west | picket.027","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-1.75,1]],["FENCE | Courtyard west | picket.028","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-2,1]],["FENCE | Courtyard west | picket.029","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-2.25,1]],["FENCE | Courtyard west | picket.030","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-2.5,1]],["FENCE | Courtyard west | picket.031","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-2.75,1]],["FENCE | Courtyard west | picket.032","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-3,1]],["FENCE | Courtyard west | picket.033","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-3.25,1]],["FENCE | Courtyard west | picket.034","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-3.5,1]],["FENCE | Courtyard west | picket.035","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-3.75,1]],["FENCE | Courtyard west | picket.036","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-4,1]],["FENCE | Courtyard west | picket.037","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-4.25,1]],["FENCE | Courtyard west | picket.038","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-4.5,1]],["FENCE | Courtyard west | picket.039","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-4.75,1]],["FENCE | Courtyard west | picket.040","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-5,1]],["FENCE | Courtyard west | picket.041","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-5.25,1]],["FENCE | Courtyard west | picket.042","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-5.5,1]],["FENCE | Courtyard west | picket.043","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-5.75,1]],["FENCE | Courtyard west | picket.044","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-6,1]],["FENCE | Courtyard west | picket.045","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-6.25,1]],["FENCE | Courtyard west | picket.046","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-6.5,1]],["FENCE | Courtyard west | picket.047","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-6.75,1]],["FENCE | Courtyard west | picket.048","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-7,1]],["FENCE | Courtyard west | picket.049","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-7.25,1]],["FENCE | Courtyard west | picket.050","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-7.5,1]],["FENCE | Courtyard west | picket.051","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-7.75,1]],["FENCE | Courtyard west | picket.052","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-8,1]],["FENCE | Courtyard west | picket.053","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-8.25,1]],["FENCE | Courtyard west | picket.054","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-8.5,1]],["FENCE | Courtyard west | picket.055","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-8.75,1]],["FENCE | Courtyard west | picket.056","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-9,1]],["FENCE | Courtyard west | picket.057","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-9.25,1]],["FENCE | Courtyard west | picket.058","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-9.5,1]],["FENCE | Courtyard west | picket.059","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-9.75,1]],["FENCE | Courtyard west | picket.060","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-10,1]],["FENCE | Courtyard west | picket.061","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-10.25,1]],["FENCE | Courtyard west | picket.062","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-10.5,1]],["FENCE | Courtyard west | picket.063","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-10.75,1]],["FENCE | Courtyard west | picket.064","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-11,1]],["FENCE | Courtyard west | picket.065","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-11.25,1]],["FENCE | Courtyard west | picket.066","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-11.5,1]],["FENCE | Courtyard west | picket.067","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-11.75,1]],["FENCE | Courtyard west | picket.068","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-12,1]],["FENCE | Courtyard west | picket.069","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-12.25,1]],["FENCE | Courtyard west | picket.070","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-12.5,1]],["FENCE | Courtyard west | picket.071","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-12.75,1]],["FENCE | Courtyard west | picket.072","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-13,1]],["FENCE | Courtyard west | picket.073","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-13.25,1]],["FENCE | Courtyard west | picket.074","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-13.5,1]],["FENCE | Courtyard west | picket.075","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-13.75,1]],["FENCE | Courtyard west | picket.076","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-14,1]],["FENCE | Courtyard west | picket.077","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-14.25,1]],["FENCE | Courtyard west | picket.078","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-14.5,1]],["FENCE | Courtyard west | picket.079","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-14.75,1]],["FENCE | Courtyard west | picket.080","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-15,1]],["FENCE | Courtyard west | picket.081","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-15.25,1]],["FENCE | Courtyard west | picket.082","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-15.5,1]],["FENCE | Courtyard west | picket.083","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-15.75,1]],["FENCE | Courtyard west | picket.084","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-16,1]],["FENCE | Courtyard west | picket.085","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-16.25,1]],["FENCE | Courtyard west | picket.086","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-16.5,1]],["FENCE | Courtyard west | picket.087","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-16.75,1]],["FENCE | Courtyard west | picket.088","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-17,1]],["FENCE | Courtyard west | picket.089","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-17.25,1]],["FENCE | Courtyard west | picket.090","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-17.5,1]],["FENCE | Courtyard west | picket.091","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-17.75,1]],["FENCE | Courtyard west | picket.092","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-18,1]],["FENCE | Courtyard west | picket.093","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-18.25,1]],["FENCE | Courtyard west | picket.094","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-18.5,1]],["FENCE | Courtyard west | picket.095","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-18.75,1]],["FENCE | Courtyard west | picket.096","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-19,1]],["FENCE | Courtyard west | picket.097","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-19.25,1]],["FENCE | Courtyard west | picket.098","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-19.5,1]],["FENCE | Courtyard west | picket.099","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-19.75,1]],["FENCE | Courtyard west | picket.100","74f04dd951d0e6c1",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.9,-20,1]],["FENCE | Courtyard west | post","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,5,1]],["FENCE | Courtyard west | post.001","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,2.5,1]],["FENCE | Courtyard west | post.002","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,0,1]],["FENCE | Courtyard west | post.003","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,-2.5,1]],["FENCE | Courtyard west | post.004","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,-5,1]],["FENCE | Courtyard west | post.005","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,-7.5,1]],["FENCE | Courtyard west | post.006","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,-10,1]],["FENCE | Courtyard west | post.007","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,-12.5,1]],["FENCE | Courtyard west | post.008","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,-15,1]],["FENCE | Courtyard west | post.009","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,-17.5,1]],["FENCE | Courtyard west | post.010","46aac644311cccf5",10,[-0,0,-1,0,0,1,0,0,1,0,-0,0,22,.95,-20,1]],["FENCE | Courtyard north east | rail","c29df6256dab9012",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3,.2,-20,1]],["FENCE | Courtyard north east | rail.001","c29df6256dab9012",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3,1.55,-20,1]],["FENCE | Courtyard north east | picket","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.9,-20,1]],["FENCE | Courtyard north east | picket.001","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-9.75,.9,-20,1]],["FENCE | Courtyard north east | picket.002","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-9.5,.9,-20,1]],["FENCE | Courtyard north east | picket.003","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-9.25,.9,-20,1]],["FENCE | Courtyard north east | picket.004","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-9,.9,-20,1]],["FENCE | Courtyard north east | picket.005","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-8.75,.9,-20,1]],["FENCE | Courtyard north east | picket.006","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-8.5,.9,-20,1]],["FENCE | Courtyard north east | picket.007","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-8.25,.9,-20,1]],["FENCE | Courtyard north east | picket.008","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-8,.9,-20,1]],["FENCE | Courtyard north east | picket.009","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7.75,.9,-20,1]],["FENCE | Courtyard north east | picket.010","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7.5,.9,-20,1]],["FENCE | Courtyard north east | picket.011","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7.25,.9,-20,1]],["FENCE | Courtyard north east | picket.012","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7,.9,-20,1]],["FENCE | Courtyard north east | picket.013","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-6.75,.9,-20,1]],["FENCE | Courtyard north east | picket.014","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-6.5,.9,-20,1]],["FENCE | Courtyard north east | picket.015","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-6.25,.9,-20,1]],["FENCE | Courtyard north east | picket.016","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-6,.9,-20,1]],["FENCE | Courtyard north east | picket.017","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5.75,.9,-20,1]],["FENCE | Courtyard north east | picket.018","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5.5,.9,-20,1]],["FENCE | Courtyard north east | picket.019","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5.25,.9,-20,1]],["FENCE | Courtyard north east | picket.020","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5,.9,-20,1]],["FENCE | Courtyard north east | picket.021","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-4.75,.9,-20,1]],["FENCE | Courtyard north east | picket.022","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-4.5,.9,-20,1]],["FENCE | Courtyard north east | picket.023","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-4.25,.9,-20,1]],["FENCE | Courtyard north east | picket.024","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-4,.9,-20,1]],["FENCE | Courtyard north east | picket.025","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3.75,.9,-20,1]],["FENCE | Courtyard north east | picket.026","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3.5,.9,-20,1]],["FENCE | Courtyard north east | picket.027","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3.25,.9,-20,1]],["FENCE | Courtyard north east | picket.028","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3,.9,-20,1]],["FENCE | Courtyard north east | picket.029","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-2.75,.9,-20,1]],["FENCE | Courtyard north east | picket.030","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-2.5,.9,-20,1]],["FENCE | Courtyard north east | picket.031","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-2.25,.9,-20,1]],["FENCE | Courtyard north east | picket.032","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-2,.9,-20,1]],["FENCE | Courtyard north east | picket.033","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-1.75,.9,-20,1]],["FENCE | Courtyard north east | picket.034","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-1.5,.9,-20,1]],["FENCE | Courtyard north east | picket.035","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-1.25,.9,-20,1]],["FENCE | Courtyard north east | picket.036","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-1,.9,-20,1]],["FENCE | Courtyard north east | picket.037","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-.75,.9,-20,1]],["FENCE | Courtyard north east | picket.038","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-.5,.9,-20,1]],["FENCE | Courtyard north east | picket.039","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,-.25,.9,-20,1]],["FENCE | Courtyard north east | picket.040","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,0,.9,-20,1]],["FENCE | Courtyard north east | picket.041","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,.25,.9,-20,1]],["FENCE | Courtyard north east | picket.042","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,.5,.9,-20,1]],["FENCE | Courtyard north east | picket.043","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,.75,.9,-20,1]],["FENCE | Courtyard north east | picket.044","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,1,.9,-20,1]],["FENCE | Courtyard north east | picket.045","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,1.25,.9,-20,1]],["FENCE | Courtyard north east | picket.046","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,1.5,.9,-20,1]],["FENCE | Courtyard north east | picket.047","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,1.75,.9,-20,1]],["FENCE | Courtyard north east | picket.048","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,2,.9,-20,1]],["FENCE | Courtyard north east | picket.049","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,2.25,.9,-20,1]],["FENCE | Courtyard north east | picket.050","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,2.5,.9,-20,1]],["FENCE | Courtyard north east | picket.051","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,2.75,.9,-20,1]],["FENCE | Courtyard north east | picket.052","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,3,.9,-20,1]],["FENCE | Courtyard north east | picket.053","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,3.25,.9,-20,1]],["FENCE | Courtyard north east | picket.054","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,3.5,.9,-20,1]],["FENCE | Courtyard north east | picket.055","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,3.75,.9,-20,1]],["FENCE | Courtyard north east | picket.056","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,4,.9,-20,1]],["FENCE | Courtyard north east | post","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.95,-20,1]],["FENCE | Courtyard north east | post.001","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-7.66667,.95,-20,1]],["FENCE | Courtyard north east | post.002","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-5.33333,.95,-20,1]],["FENCE | Courtyard north east | post.003","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-3,.95,-20,1]],["FENCE | Courtyard north east | post.004","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,-.66667,.95,-20,1]],["FENCE | Courtyard north east | post.005","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,1.66667,.95,-20,1]],["FENCE | Courtyard north east | post.006","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,4,.95,-20,1]],["FENCE | Courtyard north west | rail","c29df6256dab9012",10,[1,0,0,0,0,1,0,0,0,0,1,0,15,.2,-20,1]],["FENCE | Courtyard north west | rail.001","c29df6256dab9012",10,[1,0,0,0,0,1,0,0,0,0,1,0,15,1.55,-20,1]],["FENCE | Courtyard north west | picket","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,8,.9,-20,1]],["FENCE | Courtyard north west | picket.001","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,8.25,.9,-20,1]],["FENCE | Courtyard north west | picket.002","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,8.5,.9,-20,1]],["FENCE | Courtyard north west | picket.003","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,8.75,.9,-20,1]],["FENCE | Courtyard north west | picket.004","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,9,.9,-20,1]],["FENCE | Courtyard north west | picket.005","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,9.25,.9,-20,1]],["FENCE | Courtyard north west | picket.006","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,9.5,.9,-20,1]],["FENCE | Courtyard north west | picket.007","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,9.75,.9,-20,1]],["FENCE | Courtyard north west | picket.008","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,10,.9,-20,1]],["FENCE | Courtyard north west | picket.009","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,10.25,.9,-20,1]],["FENCE | Courtyard north west | picket.010","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,10.5,.9,-20,1]],["FENCE | Courtyard north west | picket.011","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,10.75,.9,-20,1]],["FENCE | Courtyard north west | picket.012","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,11,.9,-20,1]],["FENCE | Courtyard north west | picket.013","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,11.25,.9,-20,1]],["FENCE | Courtyard north west | picket.014","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,11.5,.9,-20,1]],["FENCE | Courtyard north west | picket.015","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,11.75,.9,-20,1]],["FENCE | Courtyard north west | picket.016","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,12,.9,-20,1]],["FENCE | Courtyard north west | picket.017","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,12.25,.9,-20,1]],["FENCE | Courtyard north west | picket.018","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,12.5,.9,-20,1]],["FENCE | Courtyard north west | picket.019","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,12.75,.9,-20,1]],["FENCE | Courtyard north west | picket.020","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,13,.9,-20,1]],["FENCE | Courtyard north west | picket.021","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,13.25,.9,-20,1]],["FENCE | Courtyard north west | picket.022","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,13.5,.9,-20,1]],["FENCE | Courtyard north west | picket.023","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,13.75,.9,-20,1]],["FENCE | Courtyard north west | picket.024","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,14,.9,-20,1]],["FENCE | Courtyard north west | picket.025","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,14.25,.9,-20,1]],["FENCE | Courtyard north west | picket.026","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,14.5,.9,-20,1]],["FENCE | Courtyard north west | picket.027","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,14.75,.9,-20,1]],["FENCE | Courtyard north west | picket.028","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,15,.9,-20,1]],["FENCE | Courtyard north west | picket.029","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,15.25,.9,-20,1]],["FENCE | Courtyard north west | picket.030","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,15.5,.9,-20,1]],["FENCE | Courtyard north west | picket.031","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,15.75,.9,-20,1]],["FENCE | Courtyard north west | picket.032","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,16,.9,-20,1]],["FENCE | Courtyard north west | picket.033","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,16.25,.9,-20,1]],["FENCE | Courtyard north west | picket.034","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,16.5,.9,-20,1]],["FENCE | Courtyard north west | picket.035","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,16.75,.9,-20,1]],["FENCE | Courtyard north west | picket.036","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,17,.9,-20,1]],["FENCE | Courtyard north west | picket.037","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,17.25,.9,-20,1]],["FENCE | Courtyard north west | picket.038","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,17.5,.9,-20,1]],["FENCE | Courtyard north west | picket.039","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,17.75,.9,-20,1]],["FENCE | Courtyard north west | picket.040","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,18,.9,-20,1]],["FENCE | Courtyard north west | picket.041","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,18.25,.9,-20,1]],["FENCE | Courtyard north west | picket.042","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,18.5,.9,-20,1]],["FENCE | Courtyard north west | picket.043","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,18.75,.9,-20,1]],["FENCE | Courtyard north west | picket.044","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,19,.9,-20,1]],["FENCE | Courtyard north west | picket.045","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,19.25,.9,-20,1]],["FENCE | Courtyard north west | picket.046","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,19.5,.9,-20,1]],["FENCE | Courtyard north west | picket.047","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,19.75,.9,-20,1]],["FENCE | Courtyard north west | picket.048","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,20,.9,-20,1]],["FENCE | Courtyard north west | picket.049","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,20.25,.9,-20,1]],["FENCE | Courtyard north west | picket.050","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,20.5,.9,-20,1]],["FENCE | Courtyard north west | picket.051","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,20.75,.9,-20,1]],["FENCE | Courtyard north west | picket.052","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,21,.9,-20,1]],["FENCE | Courtyard north west | picket.053","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,21.25,.9,-20,1]],["FENCE | Courtyard north west | picket.054","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,21.5,.9,-20,1]],["FENCE | Courtyard north west | picket.055","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,21.75,.9,-20,1]],["FENCE | Courtyard north west | picket.056","74f04dd951d0e6c1",10,[1,0,0,0,0,1,0,0,0,0,1,0,22,.9,-20,1]],["FENCE | Courtyard north west | post","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,8,.95,-20,1]],["FENCE | Courtyard north west | post.001","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,10.33333,.95,-20,1]],["FENCE | Courtyard north west | post.002","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,12.66667,.95,-20,1]],["FENCE | Courtyard north west | post.003","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,15,.95,-20,1]],["FENCE | Courtyard north west | post.004","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,17.33333,.95,-20,1]],["FENCE | Courtyard north west | post.005","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,19.66667,.95,-20,1]],["FENCE | Courtyard north west | post.006","46aac644311cccf5",10,[1,0,0,0,0,1,0,0,0,0,1,0,22,.95,-20,1]],["GATE | east leaf | rail","6091c97a62d841b6",10,[1,0,0,0,0,1,0,0,0,0,1,0,5,.2,-20,1]],["GATE | east leaf | rail.001","6091c97a62d841b6",10,[1,0,0,0,0,1,0,0,0,0,1,0,5,1.55,-20,1]],["GATE | east leaf | picket","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,4,.9,-20,1]],["GATE | east leaf | picket.001","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,4.25,.9,-20,1]],["GATE | east leaf | picket.002","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,4.5,.9,-20,1]],["GATE | east leaf | picket.003","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,4.75,.9,-20,1]],["GATE | east leaf | picket.004","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,5,.9,-20,1]],["GATE | east leaf | picket.005","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,5.25,.9,-20,1]],["GATE | east leaf | picket.006","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,5.5,.9,-20,1]],["GATE | east leaf | picket.007","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,5.75,.9,-20,1]],["GATE | east leaf | picket.008","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,6,.9,-20,1]],["GATE | west leaf | rail","6091c97a62d841b6",10,[1,0,0,0,0,1,0,0,0,0,1,0,7,.2,-20,1]],["GATE | west leaf | rail.001","6091c97a62d841b6",10,[1,0,0,0,0,1,0,0,0,0,1,0,7,1.55,-20,1]],["GATE | west leaf | picket","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,8,.9,-20,1]],["GATE | west leaf | picket.001","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,7.75,.9,-20,1]],["GATE | west leaf | picket.002","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,7.5,.9,-20,1]],["GATE | west leaf | picket.003","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,7.25,.9,-20,1]],["GATE | west leaf | picket.004","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,7,.9,-20,1]],["GATE | west leaf | picket.005","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,6.75,.9,-20,1]],["GATE | west leaf | picket.006","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,6.5,.9,-20,1]],["GATE | west leaf | picket.007","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,6.25,.9,-20,1]],["GATE | west leaf | picket.008","d5f5ef0cb79964a1",10,[1,0,0,0,0,1,0,0,0,0,1,0,6,.9,-20,1]],["POND | floor","5ec5fc03e05c58a4",11,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.06,-36.5,1]],["POND | stone wall | back","ccac6e08eb479d47",11,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.4,-38.88,1]],["POND | stone wall | east end","9e624451b02111eb",11,[1,0,0,0,0,1,0,0,0,0,1,0,-14.88,.4,-36.5,1]],["POND | stone wall | west end","9e624451b02111eb",11,[1,0,0,0,0,1,0,0,0,0,1,0,-5.12,.4,-36.5,1]],["POND | stone wall | front left","bfe739b9d15e1913",11,[1,0,0,0,0,1,0,0,0,0,1,0,-13.5,.4,-34.12,1]],["POND | stone wall | front right","bfe739b9d15e1913",11,[1,0,0,0,0,1,0,0,0,0,1,0,-6.5,.4,-34.12,1]],["POND | stone wall | front sill","d3a486fdaca231ef",11,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.13,-34.12,1]],["POND | glass window | courtyard facing","2813128562657c98",12,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.49,-34.12,1]],["POND | water surface","998cc618bdd85eed",13,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.66,-36.5,1]],["POND | coping | back","94de8a2613ed20d1",14,[1,0,0,0,0,1,0,0,0,0,1,0,-10,.84,-38.87,1]],["POND | coping | east","9234bdeaaa226ea1",14,[1,0,0,0,0,1,0,0,0,0,1,0,-14.87,.84,-36.5,1]],["POND | coping | west","9234bdeaaa226ea1",14,[1,0,0,0,0,1,0,0,0,0,1,0,-5.13,.84,-36.5,1]],["POND | coping | front left","5f86847d0a1b0e34",14,[1,0,0,0,0,1,0,0,0,0,1,0,-13.5,.84,-34.13,1]],["POND | coping | front right","5f86847d0a1b0e34",14,[1,0,0,0,0,1,0,0,0,0,1,0,-6.5,.84,-34.13,1]],["POND | waterfall rock 1","387bc3542a8e12b3",15,[1,0,0,0,0,1,0,0,0,0,1,0,-5.8,.95,-38.2,1]],["POND | waterfall rock 2","3afe110e4d7dbafd",15,[1,0,0,0,0,1,0,0,0,0,1,0,-5.65,1.3,-38.45,1]],["POND | waterfall rock 3","29a25cba58bbb5d5",15,[1,0,0,0,0,1,0,0,0,0,1,0,-5.55,1.6,-38.6,1]],["POND | waterfall cascade","63d83ec045145fb5",16,[1,0,0,0,0,1,0,0,0,0,1,0,-5.85,1.14,-37.95,1]],["PAVILION | post | north pond | east outer","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-14.85,1.5,-39,1]],["PAVILION | stone footing | north pond | east outer","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-14.85,.12,-39,1]],["PAVILION | post | north pond | east inner","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-12,1.5,-39,1]],["PAVILION | stone footing | north pond | east inner","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-12,.12,-39,1]],["PAVILION | post | north pond | west inner","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-8,1.5,-39,1]],["PAVILION | stone footing | north pond | west inner","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-8,.12,-39,1]],["PAVILION | post | north pond | west outer","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,1.5,-39,1]],["PAVILION | stone footing | north pond | west outer","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.12,-39,1]],["PAVILION | post | pond front | east outer","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-14.85,1.5,-34,1]],["PAVILION | stone footing | pond front | east outer","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-14.85,.12,-34,1]],["PAVILION | post | pond front | east inner","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-12,1.5,-34,1]],["PAVILION | stone footing | pond front | east inner","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-12,.12,-34,1]],["PAVILION | post | pond front | west inner","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-8,1.5,-34,1]],["PAVILION | stone footing | pond front | west inner","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-8,.12,-34,1]],["PAVILION | post | pond front | west outer","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,1.5,-34,1]],["PAVILION | stone footing | pond front | west outer","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.12,-34,1]],["PAVILION | post | entrance | east outer","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-14.85,1.5,-29,1]],["PAVILION | stone footing | entrance | east outer","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-14.85,.12,-29,1]],["PAVILION | post | entrance | east inner","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-12,1.5,-29,1]],["PAVILION | stone footing | entrance | east inner","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-12,.12,-29,1]],["PAVILION | post | entrance | west inner","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-8,1.5,-29,1]],["PAVILION | stone footing | entrance | west inner","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-8,.12,-29,1]],["PAVILION | post | entrance | west outer","918fccc55c9edb36",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,1.5,-29,1]],["PAVILION | stone footing | entrance | west outer","2fe9e1a3cfbdfce5",18,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.12,-29,1]],["PAVILION | longitudinal roof beam","b5b45e4816b1291d",17,[-1,0,0,0,-0,-0,-1,0,-0,-1,0,0,-15.05,2.85,-34,1]],["PAVILION | longitudinal roof beam.001","b5b45e4816b1291d",17,[-1,0,0,0,-0,-0,-1,0,-0,-1,0,0,-12,3.45,-34,1]],["PAVILION | longitudinal roof beam.002","b5b45e4816b1291d",17,[-1,0,0,0,-0,-0,-1,0,-0,-1,0,0,-8,3.45,-34,1]],["PAVILION | longitudinal roof beam.003","b5b45e4816b1291d",17,[-1,0,0,0,-0,-0,-1,0,-0,-1,0,0,-4.95,2.85,-34,1]],["PAVILION | transverse roof beam","71d6c9cde2ecd258",19,[-0,0,-1,0,.98119,.19302,-0,0,.19302,-.98119,-0,0,-13.525,3.15,-29,1]],["PAVILION | transverse roof beam.001","44cb67f33e1c4314",19,[-0,0,-1,0,1,-0,-0,0,-0,-1,0,0,-10,3.45,-29,1]],["PAVILION | transverse roof beam.002","71d6c9cde2ecd258",19,[0,0,-1,0,.98119,-.19302,0,0,-.19302,-.98119,-0,0,-6.475,3.15,-29,1]],["PAVILION | transverse roof beam.003","71d6c9cde2ecd258",19,[-0,0,-1,0,.98119,.19302,-0,0,.19302,-.98119,-0,0,-13.525,3.15,-34,1]],["PAVILION | transverse roof beam.004","44cb67f33e1c4314",19,[-0,0,-1,0,1,-0,-0,0,-0,-1,0,0,-10,3.45,-34,1]],["PAVILION | transverse roof beam.005","71d6c9cde2ecd258",19,[0,0,-1,0,.98119,-.19302,0,0,-.19302,-.98119,-0,0,-6.475,3.15,-34,1]],["PAVILION | transverse roof beam.006","71d6c9cde2ecd258",19,[-0,0,-1,0,.98119,.19302,-0,0,.19302,-.98119,-0,0,-13.525,3.15,-39,1]],["PAVILION | transverse roof beam.007","44cb67f33e1c4314",19,[-0,0,-1,0,1,-0,-0,0,-0,-1,0,0,-10,3.45,-39,1]],["PAVILION | transverse roof beam.008","71d6c9cde2ecd258",19,[0,0,-1,0,.98119,-.19302,0,0,-.19302,-.98119,-0,0,-6.475,3.15,-39,1]],["PAVILION | east sloping roof","796c448c486b8a3d",18,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]],["PAVILION | flat central roof","b6953eeb81ecfc2f",18,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]],["PAVILION | west sloping roof","7b7cfc885953c699",18,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]],["PAVILION | garden side railing | rail","2bd80253bd6a03e5",19,[-1,0,0,0,-0,-0,-1,0,-0,-1,0,0,-5.15,.18,-31.5,1]],["PAVILION | garden side railing | rail.001","2bd80253bd6a03e5",19,[-1,0,0,0,-0,-0,-1,0,-0,-1,0,0,-5.15,.88,-31.5,1]],["PAVILION | garden side railing | baluster","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-29,1]],["PAVILION | garden side railing | baluster.001","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-29.41667,1]],["PAVILION | garden side railing | baluster.002","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-29.83333,1]],["PAVILION | garden side railing | baluster.003","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-30.25,1]],["PAVILION | garden side railing | baluster.004","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-30.66667,1]],["PAVILION | garden side railing | baluster.005","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-31.08333,1]],["PAVILION | garden side railing | baluster.006","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-31.5,1]],["PAVILION | garden side railing | baluster.007","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-31.91667,1]],["PAVILION | garden side railing | baluster.008","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-32.33333,1]],["PAVILION | garden side railing | baluster.009","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-32.75,1]],["PAVILION | garden side railing | baluster.010","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-33.16667,1]],["PAVILION | garden side railing | baluster.011","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-33.58333,1]],["PAVILION | garden side railing | baluster.012","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-34,1]],["PAVILION | entrance east railing | rail","d9415f62ae3c99be",19,[-0,0,-1,0,1,-0,-0,0,-0,-1,0,0,-13.425,.18,-29,1]],["PAVILION | entrance east railing | rail.001","d9415f62ae3c99be",19,[-0,0,-1,0,1,-0,-0,0,-0,-1,0,0,-13.425,.88,-29,1]],["PAVILION | entrance east railing | baluster","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-14.85,.53,-29,1]],["PAVILION | entrance east railing | baluster.001","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-14.44286,.53,-29,1]],["PAVILION | entrance east railing | baluster.002","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-14.03571,.53,-29,1]],["PAVILION | entrance east railing | baluster.003","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-13.62857,.53,-29,1]],["PAVILION | entrance east railing | baluster.004","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-13.22143,.53,-29,1]],["PAVILION | entrance east railing | baluster.005","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-12.81429,.53,-29,1]],["PAVILION | entrance east railing | baluster.006","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-12.40714,.53,-29,1]],["PAVILION | entrance east railing | baluster.007","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-12,.53,-29,1]],["PAVILION | entrance west railing | rail","d9415f62ae3c99be",19,[-0,0,-1,0,1,-0,-0,0,-0,-1,0,0,-6.575,.18,-29,1]],["PAVILION | entrance west railing | rail.001","d9415f62ae3c99be",19,[-0,0,-1,0,1,-0,-0,0,-0,-1,0,0,-6.575,.88,-29,1]],["PAVILION | entrance west railing | baluster","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-8,.53,-29,1]],["PAVILION | entrance west railing | baluster.001","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-7.59286,.53,-29,1]],["PAVILION | entrance west railing | baluster.002","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-7.18571,.53,-29,1]],["PAVILION | entrance west railing | baluster.003","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-6.77857,.53,-29,1]],["PAVILION | entrance west railing | baluster.004","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-6.37143,.53,-29,1]],["PAVILION | entrance west railing | baluster.005","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.96429,.53,-29,1]],["PAVILION | entrance west railing | baluster.006","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.55714,.53,-29,1]],["PAVILION | entrance west railing | baluster.007","0218d473db24d8fe",17,[1,0,0,0,0,1,0,0,0,0,1,0,-5.15,.53,-29,1]],["GUARDIAN | east | plinth","c3aa2e418fcf2f9f",20,[1,0,0,0,0,1,0,0,0,0,1,0,-13.25,.27,-27.7,1]],["GUARDIAN | east | body blockout","2422ed37e67fc5bd",20,[.48,0,0,0,0,.62,0,0,0,0,.37,0,-13.25,1.12,-27.7,1]],["GUARDIAN | east | head blockout","f56af7c5e1104df1",20,[.38,0,0,0,0,.34,0,0,0,0,.32,0,-13.17,1.67,-27.4,1]],["GUARDIAN | east | ornamental ball","d15e0a122c081a74",20,[.23,0,0,0,0,.23,0,0,0,0,.23,0,-13,.7,-27.15,1]],["GUARDIAN | east | leg","2ee99a5e7ea74f06",20,[1,0,0,0,0,1,0,0,0,0,1,0,-13.53,.83,-27.48,1]],["GUARDIAN | east | leg.001","2ee99a5e7ea74f06",20,[1,0,0,0,0,1,0,0,0,0,1,0,-12.97,.83,-27.48,1]],["GUARDIAN | west | plinth","c3aa2e418fcf2f9f",20,[1,0,0,0,0,1,0,0,0,0,1,0,-6.75,.27,-27.7,1]],["GUARDIAN | west | body blockout","819777fc297c22c8",20,[.48,0,0,0,0,.62,0,0,0,0,.37,0,-6.75,1.12,-27.7,1]],["GUARDIAN | west | head blockout","819777fc297c22c8",20,[.38,0,0,0,0,.34,0,0,0,0,.32,0,-6.83,1.67,-27.4,1]],["GUARDIAN | west | ornamental ball","d15e0a122c081a74",20,[.23,0,0,0,0,.23,0,0,0,0,.23,0,-7,.7,-27.15,1]],["GUARDIAN | west | leg","2ee99a5e7ea74f06",20,[1,0,0,0,0,1,0,0,0,0,1,0,-7.03,.83,-27.48,1]],["GUARDIAN | west | leg.001","2ee99a5e7ea74f06",20,[1,0,0,0,0,1,0,0,0,0,1,0,-6.47,.83,-27.48,1]],["PLANTER | east | raised base","092bacd734f22376",21,[1,0,0,0,0,1,0,0,0,0,1,0,-13.45,.3,-25.55,1]],["PLANTER | east | soil","757ea27e86b5a2b9",22,[1,0,0,0,0,1,0,0,0,0,1,0,-13.45,.61,-25.55,1]],["PLANTER | east | bamboo placeholder","b0607ba12af94f9d",23,[1,0,0,0,0,1,0,0,0,0,1,0,-13.45,1.43,-25.55,1]],["PLANTER | west | raised base","092bacd734f22376",21,[1,0,0,0,0,1,0,0,0,0,1,0,-6.55,.3,-25.55,1]],["PLANTER | west | soil","757ea27e86b5a2b9",22,[1,0,0,0,0,1,0,0,0,0,1,0,-6.55,.61,-25.55,1]],["PLANTER | west | bamboo placeholder","b0607ba12af94f9d",23,[1,0,0,0,0,1,0,0,0,0,1,0,-6.55,1.43,-25.55,1]],["SEATING GARDEN | oval gravel clearing","88b5d6308e8d45a3",24,[3.6,0,0,0,0,1,0,0,0,0,2.6,0,.3,.085,-31.5,1]],["SEATING GARDEN | bench seat","db82c7a816790796",25,[1,0,0,0,0,1,0,0,0,0,1,0,-.2,.53,-33.1,1]],["SEATING GARDEN | bench support","78f7233f25ad329e",25,[1,0,0,0,0,1,0,0,0,0,1,0,-1.1,.27,-33.1,1]],["SEATING GARDEN | bench support.001","78f7233f25ad329e",25,[1,0,0,0,0,1,0,0,0,0,1,0,.7,.27,-33.1,1]],["SEATING GARDEN | bench back","e416ac3e7ad4717f",25,[1,0,0,0,0,1,0,0,0,0,1,0,-.2,.93,-33.34,1]],["SEATING GARDEN | lantern base","62c326006cb475da",26,[1,0,0,0,0,1,0,0,0,0,1,0,3.1,.15,-29,1]],["SEATING GARDEN | lantern post","a4baf39765da7bfc",26,[1,0,0,0,0,1,0,0,0,0,1,0,3.1,.65,-29,1]],["SEATING GARDEN | lantern light chamber","13b346ff1b4d222f",26,[1,0,0,0,0,1,0,0,0,0,1,0,3.1,1.16,-29,1]],["SEATING GARDEN | lantern cap","33e0a9aac92440ee",26,[1,0,0,0,0,1,0,0,0,0,1,0,3.1,1.4,-29,1]],["SEATING GARDEN | maple trunk placeholder","0ce877c0228383db",25,[1,0,0,0,0,1,0,0,0,0,1,0,-3.1,1,-37,1]],["SEATING GARDEN | maple canopy placeholder","82dea80f33cf080a",27,[1.6,0,0,0,0,.85,0,0,0,0,1.3,0,-3.1,2.55,-37,1]],["DRY GARDEN | gravel field","f827772015b3a48c",24,[1,0,0,0,0,1,0,0,0,0,1,0,10,.065,-32,1]],["DRY GARDEN | stone 00","82dea80f33cf080a",26,[1.1,0,0,0,0,.48,0,0,0,0,.75,0,8,.42,-34,1]],["DRY GARDEN | stone 01","3d98b75bb31d7c11",26,[.7,0,0,0,0,.3,0,0,0,0,.55,0,10,.26,-33.3,1]],["DRY GARDEN | stone 02","c9cb8e24be20e024",26,[.55,0,0,0,0,.23,0,0,0,0,.48,0,8.9,.2,-35.2,1]],["DRY GARDEN | stepping stone 00","5936199ce87e4366",26,[.55,0,0,0,0,.08,0,0,0,0,.38,0,6.3,.11,-26.2,1]],["DRY GARDEN | stepping stone 01","2422ed37e67fc5bd",26,[.55,0,0,0,0,.08,0,0,0,0,.38,0,7.4,.11,-27.5,1]],["DRY GARDEN | stepping stone 02","f56af7c5e1104df1",26,[.55,0,0,0,0,.08,0,0,0,0,.38,0,8.7,.11,-28.5,1]],["DRY GARDEN | stepping stone 03","82dea80f33cf080a",26,[.55,0,0,0,0,.08,0,0,0,0,.38,0,10.2,.11,-29.4,1]],["DRY GARDEN | stepping stone 04","82dea80f33cf080a",26,[.55,0,0,0,0,.08,0,0,0,0,.38,0,11.7,.11,-30.4,1]],["DRY GARDEN | stepping stone 05","6a452fe72dafae33",26,[.55,0,0,0,0,.08,0,0,0,0,.38,0,13,.11,-31.6,1]],["DRY GARDEN | low planting placeholder 00","29b825fb3ef496eb",28,[.85,0,0,0,0,.15,0,0,0,0,.6,0,6,.15,-37.5,1]],["DRY GARDEN | low planting placeholder 01","3d98b75bb31d7c11",28,[.85,0,0,0,0,.15,0,0,0,0,.6,0,13.5,.15,-36.5,1]],["DRY GARDEN | low planting placeholder 02","d15e0a122c081a74",28,[.85,0,0,0,0,.15,0,0,0,0,.6,0,12.8,.15,-26.4,1]],["EAST PATIO | paving","aac0faf80d53b614",29,[1,0,0,0,0,1,0,0,0,0,1,0,21,.075,-32,1]],["WATERFALL | full height wall","c209318478dee4f1",30,[1,0,0,0,0,1,0,0,0,0,1,0,26.65,2,-32,1]],["WATERFALL | rock mass 0","d4b066c7b53fbd81",31,[1,0,0,0,0,1,0,0,0,0,1,0,26.1,.7,-28.2,1]],["WATERFALL | rock mass 1","ae7ae8837943f507",31,[1,0,0,0,0,1,0,0,0,0,1,0,26.1,1.25,-30.8,1]],["WATERFALL | rock mass 2","c94aba9d2661faa9",31,[1,0,0,0,0,1,0,0,0,0,1,0,26.1,1.55,-33.5,1]],["WATERFALL | rock mass 3","066e12569e1169a7",31,[1,0,0,0,0,1,0,0,0,0,1,0,26.1,1,-36,1]],["WATERFALL | cascade placeholder 0","fb366e81fbc3ac10",32,[1,0,0,0,0,1,0,0,0,0,1,0,25.45,2.05,-29.8,1]],["WATERFALL | cascade placeholder 1","fb366e81fbc3ac10",32,[1,0,0,0,0,1,0,0,0,0,1,0,25.45,2.05,-32.1,1]],["WATERFALL | cascade placeholder 2","fb366e81fbc3ac10",32,[1,0,0,0,0,1,0,0,0,0,1,0,25.45,2.05,-34.2,1]],["PADDLING POOL | floor","ee28f8d5ec8c15dc",30,[1,0,0,0,0,1,0,0,0,0,1,0,23.25,.085,-32,1]],["PADDLING POOL | shallow water surface","8ec8416b529a317b",32,[1,0,0,0,0,1,0,0,0,0,1,0,23.25,.24,-32,1]],["PADDLING POOL | brick course 1 | front","087a8199293c9144",33,[1,0,0,0,0,1,0,0,0,0,1,0,19.68,.08,-32,1]],["PADDLING POOL | brick course 1 | north","4775997f10e5b17e",33,[1,0,0,0,0,1,0,0,0,0,1,0,23.25,.08,-37.58,1]],["PADDLING POOL | brick course 1 | south","4775997f10e5b17e",33,[1,0,0,0,0,1,0,0,0,0,1,0,23.25,.08,-26.42,1]],["PADDLING POOL | brick course 2 | front","087a8199293c9144",33,[1,0,0,0,0,1,0,0,0,0,1,0,19.68,.16,-32,1]],["PADDLING POOL | brick course 2 | north","4775997f10e5b17e",33,[1,0,0,0,0,1,0,0,0,0,1,0,23.25,.16,-37.58,1]],["PADDLING POOL | brick course 2 | south","4775997f10e5b17e",33,[1,0,0,0,0,1,0,0,0,0,1,0,23.25,.16,-26.42,1]],["PADDLING POOL | brick course 3 | front","087a8199293c9144",33,[1,0,0,0,0,1,0,0,0,0,1,0,19.68,.24,-32,1]],["PADDLING POOL | brick course 3 | north","4775997f10e5b17e",33,[1,0,0,0,0,1,0,0,0,0,1,0,23.25,.24,-37.58,1]],["PADDLING POOL | brick course 3 | south","4775997f10e5b17e",33,[1,0,0,0,0,1,0,0,0,0,1,0,23.25,.24,-26.42,1]],["WATERFALL BENCH | 11m flattened log seat","940da43558ab4959",34,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]],["WATERFALL BENCH | 11m flattened log seat","68d9b51c17f37dde",35,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]],["WATERFALL BENCH | log round support 1","e670b2d9a20876a2",35,[1,0,0,0,0,1,0,0,0,0,1,0,18.65,.235,-27,1]],["WATERFALL BENCH | support 1 cut face","3a1e00be73c44d75",34,[1,0,0,0,0,1,0,0,0,0,1,0,18.65,.477,-27,1]],["WATERFALL BENCH | log round support 2","e670b2d9a20876a2",35,[1,0,0,0,0,1,0,0,0,0,1,0,18.65,.235,-30.3,1]],["WATERFALL BENCH | support 2 cut face","3a1e00be73c44d75",34,[1,0,0,0,0,1,0,0,0,0,1,0,18.65,.477,-30.3,1]],["WATERFALL BENCH | log round support 3","e670b2d9a20876a2",35,[1,0,0,0,0,1,0,0,0,0,1,0,18.65,.235,-33.7,1]],["WATERFALL BENCH | support 3 cut face","3a1e00be73c44d75",34,[1,0,0,0,0,1,0,0,0,0,1,0,18.65,.477,-33.7,1]],["WATERFALL BENCH | log round support 4","e670b2d9a20876a2",35,[1,0,0,0,0,1,0,0,0,0,1,0,18.65,.235,-37,1]],["WATERFALL BENCH | support 4 cut face","3a1e00be73c44d75",34,[1,0,0,0,0,1,0,0,0,0,1,0,18.65,.477,-37,1]],["SHRINE | base platform | 30 x 23 m","68cd22969602813f",36,[1,0,0,0,0,1,0,0,0,0,1,0,6,.16,-7.5,1]],["SHRINE | lower hall wall | south","f881234c83bada65",37,[1,0,0,0,0,1,0,0,0,0,1,0,6,2.15,3.85,1]],["SHRINE | lower hall wall | east","9445c2c035248fc5",37,[1,0,0,0,0,1,0,0,0,0,1,0,-8.85,2.15,-3.5,1]],["SHRINE | lower hall wall | west","9445c2c035248fc5",37,[1,0,0,0,0,1,0,0,0,0,1,0,20.85,2.15,-3.5,1]],["SHRINE | lower hall wall | north east","a04eeb290ebe8b3d",37,[1,0,0,0,0,1,0,0,0,0,1,0,-3.5,2.15,-10.85,1]],["SHRINE | lower hall wall | north west","a04eeb290ebe8b3d",37,[1,0,0,0,0,1,0,0,0,0,1,0,15.5,2.15,-10.85,1]],["SHRINE | hall entrance lintel","51b91faa23494f6a",38,[1,0,0,0,0,1,0,0,0,0,1,0,6,4,-10.85,1]],["SHRINE | east wing | front pier","4f663e5c527f1072",37,[1,0,0,0,0,1,0,0,0,0,1,0,-8.78,2.15,-18.85,1]],["SHRINE | east wing | front pier.001","4f663e5c527f1072",37,[1,0,0,0,0,1,0,0,0,0,1,0,-4,2.15,-18.85,1]],["SHRINE | east wing | front pier.002","4f663e5c527f1072",37,[1,0,0,0,0,1,0,0,0,0,1,0,.78,2.15,-18.85,1]],["SHRINE | east wing | front lintel","f81db431cc73adf8",38,[1,0,0,0,0,1,0,0,0,0,1,0,-4,3.95,-18.85,1]],["SHRINE | east wing | side wall","7cbaa260f47d5052",37,[1,0,0,0,0,1,0,0,0,0,1,0,-8.85,2.15,-15,1]],["SHRINE | east wing | side wall.001","7cbaa260f47d5052",37,[1,0,0,0,0,1,0,0,0,0,1,0,.85,2.15,-15,1]],["SHRINE | east wing | rear wall","b2370d8a6badbfc7",37,[1,0,0,0,0,1,0,0,0,0,1,0,-4,2.15,-11.15,1]],["SHRINE | west wing | front pier","4f663e5c527f1072",37,[1,0,0,0,0,1,0,0,0,0,1,0,11.22,2.15,-18.85,1]],["SHRINE | west wing | front pier.001","4f663e5c527f1072",37,[1,0,0,0,0,1,0,0,0,0,1,0,16,2.15,-18.85,1]],["SHRINE | west wing | front pier.002","4f663e5c527f1072",37,[1,0,0,0,0,1,0,0,0,0,1,0,20.78,2.15,-18.85,1]],["SHRINE | west wing | front lintel","f81db431cc73adf8",38,[1,0,0,0,0,1,0,0,0,0,1,0,16,3.95,-18.85,1]],["SHRINE | west wing | side wall","7cbaa260f47d5052",37,[1,0,0,0,0,1,0,0,0,0,1,0,11.15,2.15,-15,1]],["SHRINE | west wing | side wall.001","7cbaa260f47d5052",37,[1,0,0,0,0,1,0,0,0,0,1,0,20.85,2.15,-15,1]],["SHRINE | west wing | rear wall","b2370d8a6badbfc7",37,[1,0,0,0,0,1,0,0,0,0,1,0,16,2.15,-11.15,1]],["SHRINE | reception | fire pit placeholder","8c8f8ab6415d2423",39,[1,0,0,0,0,1,0,0,0,0,1,0,6,.5,-15,1]],["SHRINE | second floor deck","131bd34ec27b49d9",36,[1,0,0,0,0,1,0,0,0,0,1,0,6,4.35,-7.5,1]],["SHRINE | second floor mass","fe2155916e4a905e",37,[1,0,0,0,0,1,0,0,0,0,1,0,6,6.05,-7.5,1]],["SHRINE | second tier roof","c44e333d406df2b5",40,[1,0,0,0,0,1,0,0,0,0,1,0,6,7.68,-7.5,1]],["SHRINE | third floor mass","05a72a49351910e7",37,[1,0,0,0,0,1,0,0,0,0,1,0,6,9.15,-7.5,1]],["SHRINE | upper roof","94d3eb09379c2513",40,[1,0,0,0,0,1,0,0,0,0,1,0,6,10.58,-7.5,1]],["WATERFALL BENCH | foot washing return seat","ae5cd0e74f9d96e4",34,[1,0,0,0,0,1,0,0,0,0,1,0,22.5,.62,-26.45,1]],["WATERFALL BENCH | return seat support | west","24e6f05a4013b8ea",33,[1,0,0,0,0,1,0,0,0,0,1,0,19,.28,-26.45,1]],["WATERFALL BENCH | return seat support | east","24e6f05a4013b8ea",33,[1,0,0,0,0,1,0,0,0,0,1,0,26,.28,-26.45,1]],["SHOP | ground | west end","3a2f654b382c3bb6",41,[1,0,0,0,0,1,0,0,0,0,1,0,7.12,1.65,12.5,1]],["SHOP | upper floor slab","ce6331ab84d68545",42,[1,0,0,0,0,1,0,0,0,0,1,0,17,3.4,12.5,1]],["SHOP | upper | front","6d873dea1be2af0d",41,[1,0,0,0,0,1,0,0,0,0,1,0,17,5.1,10,1]],["SHOP | upper | west end","b758e927a18e1b09",41,[1,0,0,0,0,1,0,0,0,0,1,0,7.12,5.1,12.5,1]],["SHOP | upper | east end","b758e927a18e1b09",41,[1,0,0,0,0,1,0,0,0,0,1,0,26.88,5.1,12.5,1]],["SHOP | upper | rear west","df92b2fa320dcc74",41,[1,0,0,0,0,1,0,0,0,0,1,0,11.5,5.1,15,1]],["SHOP | upper | rear east","df92b2fa320dcc74",41,[1,0,0,0,0,1,0,0,0,0,1,0,22.5,5.1,15,1]],["SHOP | upper | rear central lintel","158da0769c5a4cd8",41,[1,0,0,0,0,1,0,0,0,0,1,0,17,6.25,15,1]],["SHOP | upper deck doorway threshold","08b57a1a963f057c",43,[1,0,0,0,0,1,0,0,0,0,1,0,17,3.53,15,1]],["SHOP | roof","73752e918ce0144b",44,[1,0,0,0,0,1,0,0,0,0,1,0,17,6.85,12.5,1]],["SHOP | deck support post","b272ddf082c9e09f",43,[1,0,0,0,0,1,0,0,0,0,1,0,7.25,1.65,19.75,1]],["SHOP | deck support post.001","b272ddf082c9e09f",43,[1,0,0,0,0,1,0,0,0,0,1,0,13.75,1.65,19.75,1]],["SHOP | deck support post.002","b272ddf082c9e09f",43,[1,0,0,0,0,1,0,0,0,0,1,0,20.25,1.65,19.75,1]],["SHOP | deck support post.003","b272ddf082c9e09f",43,[1,0,0,0,0,1,0,0,0,0,1,0,26.75,1.65,19.75,1]],["SHOP | upper deck side railing","8a4ee40827b70738",43,[1,0,0,0,0,1,0,0,0,0,1,0,7.1,4,17.5,1]],["SHOP | upper deck side railing.001","8a4ee40827b70738",43,[1,0,0,0,0,1,0,0,0,0,1,0,26.9,4,17.5,1]],["SHOP | ground | north frontage","1e0c50ee9ad7c91d",41,[1,0,0,0,0,1,0,0,0,0,1,0,17,1.65,10,1]],["SHOP | ground | east end solid","3a2f654b382c3bb6",41,[1,0,0,0,0,1,0,0,0,0,1,0,26.88,1.65,12.5,1]],["SHOP | ground | yard frontage long","036e59e91d760ce0",41,[1,0,0,0,0,1,0,0,0,0,1,0,15.5,1.65,15,1]],["SHOP | ground | yard frontage east pier","89842ee1206230a8",41,[1,0,0,0,0,1,0,0,0,0,1,0,26.5,1.65,15,1]],["SHOP | ground | yard door lintel","158da0769c5a4cd8",41,[1,0,0,0,0,1,0,0,0,0,1,0,25,2.85,15,1]],["SHOP | ground | yard door threshold","08b57a1a963f057c",43,[1,0,0,0,0,1,0,0,0,0,1,0,25,.15,15,1]],["SHOP | deck main outer","39168525984054e0",42,[1,0,0,0,0,1,0,0,0,0,1,0,17,3.4,18.1,1]],["SHOP | deck inner east","407b5f4ee4a82284",42,[1,0,0,0,0,1,0,0,0,0,1,0,20.5,3.4,15.6,1]],["SHOP | deck inner far west","11a81d40eabb6d3a",42,[1,0,0,0,0,1,0,0,0,0,1,0,7.5,3.4,15.6,1]],["SHOP | upper deck back railing","53142dcf1a70dbe2",43,[1,0,0,0,0,1,0,0,0,0,1,0,17,4,19.85,1]],["SHOP | stairs along wall | tread 01","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,8.14706,.15,15.6,1]],["SHOP | stairs along wall | tread 02","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,8.44118,.35,15.6,1]],["SHOP | stairs along wall | tread 03","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,8.73529,.55,15.6,1]],["SHOP | stairs along wall | tread 04","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,9.02941,.75,15.6,1]],["SHOP | stairs along wall | tread 05","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,9.32353,.95,15.6,1]],["SHOP | stairs along wall | tread 06","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,9.61765,1.15,15.6,1]],["SHOP | stairs along wall | tread 07","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,9.91177,1.35,15.6,1]],["SHOP | stairs along wall | tread 08","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,10.20588,1.55,15.6,1]],["SHOP | stairs along wall | tread 09","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,10.5,1.75,15.6,1]],["SHOP | stairs along wall | tread 10","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,10.79412,1.95,15.6,1]],["SHOP | stairs along wall | tread 11","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,11.08823,2.15,15.6,1]],["SHOP | stairs along wall | tread 12","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,11.38235,2.35,15.6,1]],["SHOP | stairs along wall | tread 13","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,11.67647,2.55,15.6,1]],["SHOP | stairs along wall | tread 14","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,11.97059,2.75,15.6,1]],["SHOP | stairs along wall | tread 15","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,12.26471,2.95,15.6,1]],["SHOP | stairs along wall | tread 16","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,12.55882,3.15,15.6,1]],["SHOP | stairs along wall | tread 17","410b7a11cdb5f2ca",42,[1,0,0,0,0,1,0,0,0,0,1,0,12.85294,3.35,15.6,1]],["REAR GARDEN | tree 1 | trunk placeholder","d5cacf1793d8ce0f",45,[1,0,0,0,0,1,0,0,0,0,1,0,-12,1.6,17,1]],["REAR GARDEN | tree 1 | canopy placeholder","5936199ce87e4366",46,[2,0,0,0,0,1.3,0,0,0,0,1.6,0,-12,3.7,17,1]],["REAR GARDEN | tree 2 | trunk placeholder","1ab2458fd7defb67",45,[1,0,0,0,0,1,0,0,0,0,1,0,-5,1.9,16.7,1]],["REAR GARDEN | tree 2 | canopy placeholder","29b825fb3ef496eb",47,[2.3,0,0,0,0,1.3,0,0,0,0,1.84,0,-5,4.3,16.7,1]],["REAR GARDEN | tree 3 | trunk placeholder","9a9e019751f1b8b1",45,[1,0,0,0,0,1,0,0,0,0,1,0,2,1.5,17.7,1]],["REAR GARDEN | tree 3 | canopy placeholder","6a452fe72dafae33",46,[1.8,0,0,0,0,1.3,0,0,0,0,1.44,0,2,3.5,17.7,1]],["REAR GARDEN | grasses placeholder 0","9717a1f9aeeab1c3",48,[.6,0,0,0,0,.2,0,0,0,0,.45,0,-13,.16,13,1]],["REAR GARDEN | grasses placeholder 1","9717a1f9aeeab1c3",48,[.6,0,0,0,0,.2,0,0,0,0,.45,0,-10,.16,18,1]],["REAR GARDEN | grasses placeholder 2","82dea80f33cf080a",48,[.6,0,0,0,0,.2,0,0,0,0,.45,0,-7,.16,12,1]],["REAR GARDEN | grasses placeholder 3","d15e0a122c081a74",48,[.6,0,0,0,0,.2,0,0,0,0,.45,0,-2,.16,18,1]],["REAR GARDEN | grasses placeholder 4","9717a1f9aeeab1c3",48,[.6,0,0,0,0,.2,0,0,0,0,.45,0,2,.16,13,1]],["REAR GARDEN | grasses placeholder 5","2422ed37e67fc5bd",48,[.6,0,0,0,0,.2,0,0,0,0,.45,0,5,.16,18,1]]]};function Cs(u){return/^SHRINE \| (lower hall wall|.*wing \| (front pier|side wall|rear wall))/i.test(u)?!0:/^SHOP \| (ground \||deck support post)/i.test(u)?!/lintel|threshold/i.test(u):/^FENCE \| Courtyard/i.test(u)?/rail|post/i.test(u):/^GATE \|/i.test(u)?/rail/i.test(u):/^(North road fence|West return fence)/i.test(u)?/horizontal rail|post/i.test(u):!!(/^POND \| stone wall/i.test(u)||/^PAVILION \| post/i.test(u)||/^(GUARDIAN \|.*plinth|WATERFALL \| (full height wall|rock mass)|SEATING GARDEN \| bench)/i.test(u))}function Y3(u={}){let e=new H0;e.name="ZenCornerArea";let t=new H0;t.name="ZenCornerModel",e.add(t);let n=new Map;for(let[d,f]of Object.entries(Wt.geometry)){let h=new V0;h.setAttribute("position",new z0(f,3)),h.computeVertexNormals(),n.set(d,h)}let i=Wt.colors.map(d=>new ne({color:new I(d[0],d[1],d[2]),roughness:.75,transparent:d[3]<1,opacity:d[3]})),r=[];for(let[d,f,h,p]of Wt.objects){let m=new te(n.get(f),i[h]);m.name=d,m.matrixAutoUpdate=!1,m.matrix.fromArray(p),m.receiveShadow=!0,t.add(m),Cs(d)&&r.push(m)}if(t.position.set(0,.005,20),u.position){let d=Array.isArray(u.position)?new g(...u.position):u.position;e.position.copy(d),t.position.set(-6,.005,10)}u.rotationY!==void 0&&(e.rotation.y=u.rotationY),u.scale!==void 0&&e.scale.setScalar(u.scale);let s="ready",a=Promise.resolve(t),c=r.map(()=>new j);function o(d,f,h){if(s==="disposed")return!1;e.updateWorldMatrix(!0,!0);for(let p=0;p<r.length;p++){let m=c[p].setFromObject(r[p]);if(!(d.y<m.min.y-2||d.y>m.max.y+1.8)&&d.x>=m.min.x-h&&d.x<=m.max.x+h&&d.z>=m.min.z-h&&d.z<=m.max.z+h)return!0}return!1}function l(){if(s!=="disposed"){s="disposed";for(let d of n.values())d.dispose();for(let d of i)d.dispose();e.removeFromParent(),e.clear()}}return u.onLoad?.(t),{group:e,ready:a,update:()=>{},checkCollision:o,dispose:l,get status(){return s}}}export{q3 as ZEN_CORNER_TARGET_BOUNDS,Y3 as createZenCorner};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
