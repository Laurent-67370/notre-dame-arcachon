(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const za="180",ss={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gh=0,xl=1,Wh=2,zc=1,kc=2,On=3,li=0,Ye=1,Ge=2,si=0,rs=1,Ml=2,yl=3,Sl=4,Xh=5,Ei=100,qh=101,Yh=102,Zh=103,jh=104,Kh=200,Jh=201,$h=202,Qh=203,ko=204,Ho=205,tu=206,eu=207,nu=208,iu=209,su=210,ru=211,ou=212,au=213,lu=214,Vo=0,Go=1,Wo=2,cs=3,Xo=4,qo=5,Yo=6,Zo=7,Hc=0,cu=1,hu=2,ri=0,uu=1,fu=2,du=3,Vc=4,pu=5,mu=6,gu=7,Gc=300,hs=301,us=302,jo=303,Ko=304,Wr=306,Ri=1e3,ni=1001,Jo=1002,yn=1003,_u=1004,rr=1005,An=1006,to=1007,wi=1008,Cn=1009,Wc=1010,Xc=1011,Hs=1012,ka=1013,Ci=1014,zn=1015,$s=1016,Ha=1017,Va=1018,Vs=1020,qc=35902,Yc=35899,Zc=1021,jc=1022,Mn=1023,Gs=1026,Ws=1027,Kc=1028,Ga=1029,Jc=1030,Wa=1031,Xa=1033,Dr=33776,Ir=33777,Ur=33778,Nr=33779,$o=35840,Qo=35841,ta=35842,ea=35843,na=36196,ia=37492,sa=37496,ra=37808,oa=37809,aa=37810,la=37811,ca=37812,ha=37813,ua=37814,fa=37815,da=37816,pa=37817,ma=37818,ga=37819,_a=37820,va=37821,xa=36492,Ma=36494,ya=36495,Sa=36283,Ea=36284,Ta=36285,ba=36286,vu=3200,xu=3201,$c=0,Mu=1,ei="",Ce="srgb",fs="srgb-linear",zr="linear",ue="srgb",zi=7680,El=519,yu=512,Su=513,Eu=514,Qc=515,Tu=516,bu=517,wu=518,Au=519,Tl=35044,bl="300 es",Rn=2e3,kr=2001;class Ui{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,wa=180/Math.PI;function _s(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function Ru(i,t){return(i%t+t)%t}function eo(i,t,e){return(1-e)*i+e*t}function Rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Cu={DEG2RAD:Fr};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],M=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=M;return}if(u!==M||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*M,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),R=Math.atan2(L,p*T);m=Math.sin(m*R)/L,a=Math.sin(a*R)/L}const x=a*T;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+M*x,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return no.copy(this).projectOnVector(t),this.sub(no)}reflect(t){return this.sub(no.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const no=new A,wl=new Pi;class jt{constructor(t,e,n,s,r,o,a,l,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],T=s[1],S=s[4],x=s[7],L=s[2],R=s[5],D=s[8];return r[0]=o*M+a*T+l*L,r[3]=o*m+a*S+l*R,r[6]=o*p+a*x+l*D,r[1]=c*M+h*T+u*L,r[4]=c*m+h*S+u*R,r[7]=c*p+h*x+u*D,r[2]=d*M+f*T+g*L,r[5]=d*m+f*S+g*R,r[8]=d*p+f*x+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return t[0]=u*M,t[1]=(s*c-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=d*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-a*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(io.makeScale(t,e)),this}rotate(t){return this.premultiply(io.makeRotation(-t)),this}translate(t,e){return this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const io=new jt;function th(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pu(){const i=Xs("canvas");return i.style.display="block",i}const Al={};function qs(i){i in Al||(Al[i]=!0,console.warn(i))}function Lu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Rl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Du(){const i={enabled:!0,workingColorSpace:fs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?zr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[fs]:{primaries:t,whitePoint:n,transfer:zr,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:Rl,fromXYZ:Cl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}const oe=Du();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ki;class Iu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ki===void 0&&(ki=Xs("canvas")),ki.width=t.width,ki.height=t.height;const s=ki.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ki}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uu=0;class qa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(so(s[o].image)):r.push(so(s[o]))}else r=so(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nu=0;const ro=new A;class We extends Ui{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=ni,s=ni,r=An,o=wi,a=Mn,l=Cn,c=We.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=_s(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ro).x}get height(){return this.source.getSize(ro).y}get depth(){return this.source.getSize(ro).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=Gc;We.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(f+1)/2,L=(p+1)/2,R=(h+d)/4,D=(u+M)/4,O=(g+m)/4;return S>x&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=D/n):x>L?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=R/s,r=O/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=D/r,s=O/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-M)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fu extends Ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new We(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new qa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Fu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class eh extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ou extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(t.matrixWorld),this.union(or)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),ar.subVectors(this.max,Cs),Hi.subVectors(t.a,Cs),Vi.subVectors(t.b,Cs),Gi.subVectors(t.c,Cs),Xn.subVectors(Vi,Hi),qn.subVectors(Gi,Vi),di.subVectors(Hi,Gi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-di.z,di.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,di.z,0,-di.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-di.y,di.x,0];return!oo(e,Hi,Vi,Gi,ar)||(e=[1,0,0,0,1,0,0,0,1],!oo(e,Hi,Vi,Gi,ar))?!1:(lr.crossVectors(Xn,qn),e=[lr.x,lr.y,lr.z],oo(e,Hi,Vi,Gi,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Dn=[new A,new A,new A,new A,new A,new A,new A,new A],mn=new A,or=new Qs,Hi=new A,Vi=new A,Gi=new A,Xn=new A,qn=new A,di=new A,Cs=new A,ar=new A,lr=new A,pi=new A;function oo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bu=new Qs,Ps=new A,ao=new A;class Ya{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);const e=Ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(ao)),this.expandByPoint(Ps.copy(t.center).sub(ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const In=new A,lo=new A,cr=new A,Yn=new A,co=new A,hr=new A,ho=new A;class Za{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lo.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(lo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(cr),a=Yn.dot(this.direction),l=-Yn.dot(cr),c=Yn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const M=1/h;u*=M,d*=M,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lo).addScaledVector(cr,d),f}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){co.subVectors(e,t),hr.subVectors(n,t),ho.crossVectors(co,hr);let o=this.direction.dot(ho),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(hr.crossVectors(Yn,hr));if(l<0)return null;const c=a*this.direction.dot(co.cross(Yn));if(c<0||l+c>o)return null;const h=-a*Yn.dot(ho);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,M,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,M,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),o=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,M=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-M*c,e[9]=-a*l,e[2]=M-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,M=c*u;e[0]=d+M*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=M+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,M=c*u;e[0]=d-M*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=M-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,M=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+M,e[1]=l*u,e[5]=M*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,M=a*c;e[0]=l*h,e[4]=M-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-M*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,M=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+M,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=M*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zu,t,ku)}lookAt(t,e,n){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Zn.crossVectors(n,nn),Zn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Zn.crossVectors(n,nn)),Zn.normalize(),ur.crossVectors(nn,Zn),s[0]=Zn.x,s[4]=ur.x,s[8]=nn.x,s[1]=Zn.y,s[5]=ur.y,s[9]=nn.y,s[2]=Zn.z,s[6]=ur.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],T=n[3],S=n[7],x=n[11],L=n[15],R=s[0],D=s[4],O=s[8],E=s[12],y=s[1],F=s[5],W=s[9],X=s[13],nt=s[2],tt=s[6],et=s[10],ht=s[14],Z=s[3],pt=s[7],Et=s[11],yt=s[15];return r[0]=o*R+a*y+l*nt+c*Z,r[4]=o*D+a*F+l*tt+c*pt,r[8]=o*O+a*W+l*et+c*Et,r[12]=o*E+a*X+l*ht+c*yt,r[1]=h*R+u*y+d*nt+f*Z,r[5]=h*D+u*F+d*tt+f*pt,r[9]=h*O+u*W+d*et+f*Et,r[13]=h*E+u*X+d*ht+f*yt,r[2]=g*R+M*y+m*nt+p*Z,r[6]=g*D+M*F+m*tt+p*pt,r[10]=g*O+M*W+m*et+p*Et,r[14]=g*E+M*X+m*ht+p*yt,r[3]=T*R+S*y+x*nt+L*Z,r[7]=T*D+S*F+x*tt+L*pt,r[11]=T*O+S*W+x*et+L*Et,r[15]=T*E+S*X+x*ht+L*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+M*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],T=u*m*c-M*d*c+M*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*M*c-g*u*c+g*a*f-o*M*f-h*a*p+o*u*p,L=g*u*l-h*M*l-g*a*d+o*M*d+h*a*m-o*u*m,R=e*T+n*S+s*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return t[0]=T*D,t[1]=(M*d*r-u*m*r-M*s*f+n*m*f+u*s*p-n*d*p)*D,t[2]=(a*m*r-M*l*r+M*s*c-n*m*c-a*s*p+n*l*p)*D,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*D,t[4]=S*D,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*D,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*D,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*D,t[8]=x*D,t[9]=(g*u*r-h*M*r-g*n*f+e*M*f+h*n*p-e*u*p)*D,t[10]=(o*M*r-g*a*r+g*n*c-e*M*c-o*n*p+e*a*p)*D,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*D,t[12]=L*D,t[13]=(h*M*s-g*u*s+g*n*d-e*M*d-h*n*m+e*u*m)*D,t[14]=(g*a*s-o*M*s-g*n*l+e*M*l+o*n*m-e*a*m)*D,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*D,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,M=o*h,m=o*u,p=a*u,T=l*c,S=l*h,x=l*u,L=n.x,R=n.y,D=n.z;return s[0]=(1-(M+p))*L,s[1]=(f+x)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(f-x)*R,s[5]=(1-(d+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+S)*D,s[9]=(m-T)*D,s[10]=(1-(d+M))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Wi.set(s[0],s[1],s[2]).length();const o=Wi.set(s[4],s[5],s[6]).length(),a=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const c=1/r,h=1/o,u=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Rn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,M;if(l)g=r/(o-r),M=o*r/(o-r);else if(a===Rn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===kr)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,M;if(l)g=1/(o-r),M=o/(o-r);else if(a===Rn)g=-2/(o-r),M=-(o+r)/(o-r);else if(a===kr)g=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wi=new A,gn=new ve,zu=new A(0,0,0),ku=new A(1,1,1),Zn=new A,ur=new A,nn=new A,Pl=new ve,Ll=new Pi;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hu=0;const Dl=new A,Xi=new Pi,Un=new ve,fr=new A,Ls=new A,Vu=new A,Gu=new Pi,Il=new A(1,0,0),Ul=new A(0,1,0),Nl=new A(0,0,1),Fl={type:"added"},Wu={type:"removed"},qi={type:"childadded",child:null},uo={type:"childremoved",child:null};class Be extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new A,e=new Pn,n=new Pi,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new jt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ls,fr,this.up):Un.lookAt(fr,Ls,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Un),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fl),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wu),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fl),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,Vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new A(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new A,Nn=new A,fo=new A,Fn=new A,Yi=new A,Zi=new A,Ol=new A,po=new A,mo=new A,go=new A,_o=new de,vo=new de,xo=new de;class xn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){_n.subVectors(s,e),Nn.subVectors(n,e),fo.subVectors(t,e);const o=_n.dot(_n),a=_n.dot(Nn),l=_n.dot(fo),c=Nn.dot(Nn),h=Nn.dot(fo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return _o.setScalar(0),vo.setScalar(0),xo.setScalar(0),_o.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_o,r.x),o.addScaledVector(vo,r.y),o.addScaledVector(xo,r.z),o}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),Nn.subVectors(t,e),_n.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),_n.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Yi.subVectors(s,n),Zi.subVectors(r,n),po.subVectors(t,n);const l=Yi.dot(po),c=Zi.dot(po);if(l<=0&&c<=0)return e.copy(n);mo.subVectors(t,s);const h=Yi.dot(mo),u=Zi.dot(mo);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Yi,o);go.subVectors(t,r);const f=Yi.dot(go),g=Zi.dot(go);if(g>=0&&f<=g)return e.copy(r);const M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Zi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ol.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Ol,a);const p=1/(m+M+d);return o=M*p,a=d*p,e.copy(n).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},dr={h:0,s:0,l:0};function Mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Ru(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Mo(o,r,t+1/3),this.g=Mo(o,r,t),this.b=Mo(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){const n=nh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return oe.workingToColorSpace(He.copy(this),t),Math.round(Jt(He.r*255,0,255))*65536+Math.round(Jt(He.g*255,0,255))*256+Math.round(Jt(He.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ce){oe.workingToColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(dr);const n=eo(jn.h,dr.h,e),s=eo(jn.s,dr.s,e),r=eo(jn.l,dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new te;te.NAMES=nh;let Xu=0;class tr extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=rs,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Ho,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ka extends tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new A,pr=new vt;let qu=0;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ke(e,this.array),n=Ke(n,this.array),s=Ke(s,this.array),r=Ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tl&&(t.usage=this.usage),t}}class ih extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sh extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Yu=0;const un=new ve,yo=new Be,ji=new A,sn=new Qs,Ds=new Qs,Ue=new A;class Oe extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(th(t)?sh:ih)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return yo.lookAt(t),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(sn.min,Ds.min),sn.expandByPoint(Ue),Ue.addVectors(sn.max,Ds.max),sn.expandByPoint(Ue)):(sn.expandByPoint(Ds.min),sn.expandByPoint(Ds.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),Ue.add(ji)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new A,l[O]=new A;const c=new A,h=new A,u=new A,d=new vt,f=new vt,g=new vt,M=new A,m=new A;function p(O,E,y){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,O),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(F),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),a[O].add(M),a[E].add(M),a[y].add(M),l[O].add(m),l[E].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let O=0,E=T.length;O<E;++O){const y=T[O],F=y.start,W=y.count;for(let X=F,nt=F+W;X<nt;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}const S=new A,x=new A,L=new A,R=new A;function D(O){L.fromBufferAttribute(s,O),R.copy(L);const E=a[O];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(R,E);const F=x.dot(l[O])<0?-1:1;o.setXYZW(O,S.x,S.y,S.z,F)}for(let O=0,E=T.length;O<E;++O){const y=T[O],F=y.start,W=y.count;for(let X=F,nt=F+W;X<nt;X+=3)D(t.getX(X+0)),D(t.getX(X+1)),D(t.getX(X+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),M=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new pn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new ve,mi=new Za,mr=new Ya,zl=new A,gr=new A,_r=new A,vr=new A,So=new A,xr=new A,kl=new A,Mr=new A;class _e extends Be{constructor(t=new Oe,e=new Ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(So.fromBufferAttribute(u,t),o?xr.addScaledVector(So,h):xr.addScaledVector(So.sub(e),h))}e.add(xr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(mr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(mr,zl)===null||mi.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Bl.copy(r).invert(),mi.copy(t.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,L=S;x<L;x+=3){const R=a.getX(x),D=a.getX(x+1),O=a.getX(x+2);s=yr(this,p,t,n,c,h,u,R,D,O),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=yr(this,o,t,n,c,h,u,T,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,L=S;x<L;x+=3){const R=x,D=x+1,O=x+2;s=yr(this,p,t,n,c,h,u,R,D,O),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){const T=m,S=m+1,x=m+2;s=yr(this,o,t,n,c,h,u,T,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zu(i,t,e,n,s,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===li,a),l===null)return null;Mr.copy(a),Mr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Mr);return c<e.near||c>e.far?null:{distance:c,point:Mr.clone(),object:i}}function yr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,gr),i.getVertexPosition(l,_r),i.getVertexPosition(c,vr);const h=Zu(i,t,e,n,gr,_r,vr,kl);if(h){const u=new A;xn.getBarycoord(kl,gr,_r,vr,u),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,u,new vt)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new vt)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new A,materialIndex:0};xn.getNormal(gr,_r,vr,d.normal),h.face=d,h.barycoord=u}return h}class hi extends Oe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(M,m,p,T,S,x,L,R,D,O,E){const y=x/D,F=L/O,W=x/2,X=L/2,nt=R/2,tt=D+1,et=O+1;let ht=0,Z=0;const pt=new A;for(let Et=0;Et<et;Et++){const yt=Et*F-X;for(let zt=0;zt<tt;zt++){const Qt=zt*y-W;pt[M]=Qt*T,pt[m]=yt*S,pt[p]=nt,c.push(pt.x,pt.y,pt.z),pt[M]=0,pt[m]=0,pt[p]=R>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(zt/D),u.push(1-Et/O),ht+=1}}for(let Et=0;Et<O;Et++)for(let yt=0;yt<D;yt++){const zt=d+yt+tt*Et,Qt=d+yt+tt*(Et+1),ie=d+(yt+1)+tt*(Et+1),ee=d+(yt+1)+tt*Et;l.push(zt,Qt,ee),l.push(Qt,ie,ee),Z+=6}a.addGroup(f,Z,E),f+=Z,d+=ht}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function ju(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function rh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const Ku={clone:ds,merge:qe};var Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oh extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new A,Hl=new vt,Vl=new vt;class rn extends oh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Hl,Vl),e.subVectors(Vl,Hl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Ji=1;class Qu extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ki,Ji,t,e);s.layers=this.layers,this.add(s);const r=new rn(Ki,Ji,t,e);r.layers=this.layers,this.add(r);const o=new rn(Ki,Ji,t,e);o.layers=this.layers,this.add(o);const a=new rn(Ki,Ji,t,e);a.layers=this.layers,this.add(a);const l=new rn(Ki,Ji,t,e);l.layers=this.layers,this.add(l);const c=new rn(Ki,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ah extends We{constructor(t=[],e=hs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tf extends Li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ah(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hi(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:si});r.uniforms.tEquirect.value=e;const o=new _e(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=An),new Qu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class me extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ef={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ef)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ja{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new Ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nf extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const To=new A,sf=new A,rf=new jt;class $n{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=To.subVectors(n,e).cross(sf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(To),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||rf.getNormalMatrix(t),s=this.coplanarPoint(To).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Ya,of=new vt(.5,.5),Sr=new A;class $a{constructor(t=new $n,e=new $n,n=new $n,s=new $n,r=new $n,o=new $n){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],T=r[12],S=r[13],x=r[14],L=r[15];if(s[0].setComponents(c-o,f-h,p-g,L-T).normalize(),s[1].setComponents(c+o,f+h,p+g,L+T).normalize(),s[2].setComponents(c+a,f+u,p+M,L+S).normalize(),s[3].setComponents(c-a,f-u,p-M,L-S).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,p-m,L-x).normalize();else if(s[4].setComponents(c-l,f-d,p-m,L-x).normalize(),e===Rn)s[5].setComponents(c+l,f+d,p+m,L+x).normalize();else if(e===kr)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=of.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vs extends We{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lh extends We{constructor(t,e,n=Ci,s,r,o,a=yn,l=yn,c,h=Gs,u=1){if(h!==Gs&&h!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ch extends We{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bn extends Oe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new A,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Fe extends Oe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const M=[],m=n/2;let p=0;T(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function T(){const x=new A,L=new A;let R=0;const D=(e-t)/n;for(let O=0;O<=r;O++){const E=[],y=O/r,F=y*(e-t)+t;for(let W=0;W<=s;W++){const X=W/s,nt=X*l+a,tt=Math.sin(nt),et=Math.cos(nt);L.x=F*tt,L.y=-y*n+m,L.z=F*et,u.push(L.x,L.y,L.z),x.set(tt,D,et).normalize(),d.push(x.x,x.y,x.z),f.push(X,1-y),E.push(g++)}M.push(E)}for(let O=0;O<s;O++)for(let E=0;E<r;E++){const y=M[E][O],F=M[E+1][O],W=M[E+1][O+1],X=M[E][O+1];(t>0||E!==0)&&(h.push(y,F,X),R+=3),(e>0||E!==r-1)&&(h.push(F,W,X),R+=3)}c.addGroup(p,R,0),p+=R}function S(x){const L=g,R=new vt,D=new A;let O=0;const E=x===!0?t:e,y=x===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const F=g;for(let W=0;W<=s;W++){const nt=W/s*l+a,tt=Math.cos(nt),et=Math.sin(nt);D.x=E*et,D.y=m*y,D.z=E*tt,u.push(D.x,D.y,D.z),d.push(0,y,0),R.x=tt*.5+.5,R.y=et*.5*y+.5,f.push(R.x,R.y),g++}for(let W=0;W<s;W++){const X=L+W,nt=F+W;x===!0?h.push(nt,nt+1,X):h.push(nt+1,nt,X),O+=3}c.addGroup(p,O,x===!0?1:2),p+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ae extends Fe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ae(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qa extends Oe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const S=new A,x=new A,L=new A;for(let R=0;R<e.length;R+=3)f(e[R+0],S),f(e[R+1],x),f(e[R+2],L),l(S,x,L,T)}function l(T,S,x,L){const R=L+1,D=[];for(let O=0;O<=R;O++){D[O]=[];const E=T.clone().lerp(x,O/R),y=S.clone().lerp(x,O/R),F=R-O;for(let W=0;W<=F;W++)W===0&&O===R?D[O][W]=E:D[O][W]=E.clone().lerp(y,W/F)}for(let O=0;O<R;O++)for(let E=0;E<2*(R-O)-1;E++){const y=Math.floor(E/2);E%2===0?(d(D[O][y+1]),d(D[O+1][y]),d(D[O][y])):(d(D[O][y+1]),d(D[O+1][y+1]),d(D[O+1][y]))}}function c(T){const S=new A;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(T),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const T=new A;for(let S=0;S<r.length;S+=3){T.x=r[S+0],T.y=r[S+1],T.z=r[S+2];const x=m(T)/2/Math.PI+.5,L=p(T)/Math.PI+.5;o.push(x,1-L)}g(),u()}function u(){for(let T=0;T<o.length;T+=6){const S=o[T+0],x=o[T+2],L=o[T+4],R=Math.max(S,x,L),D=Math.min(S,x,L);R>.9&&D<.1&&(S<.2&&(o[T+0]+=1),x<.2&&(o[T+2]+=1),L<.2&&(o[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function f(T,S){const x=T*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const T=new A,S=new A,x=new A,L=new A,R=new vt,D=new vt,O=new vt;for(let E=0,y=0;E<r.length;E+=9,y+=6){T.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),R.set(o[y+0],o[y+1]),D.set(o[y+2],o[y+3]),O.set(o[y+4],o[y+5]),L.copy(T).add(S).add(x).divideScalar(3);const F=m(L);M(R,y+0,T,F),M(D,y+2,S,F),M(O,y+4,x,F)}}function M(T,S,x,L){L<0&&T.x===1&&(o[S]=T.x-1),x.x===0&&x.z===0&&(o[S]=L/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.vertices,t.indices,t.radius,t.details)}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new A,s=[],r=[],o=[],a=new A,l=new ve;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Jt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Jt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class tl extends Ln{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class af extends tl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function el(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Er=new A,bo=new el,wo=new el,Ao=new el;class Xr extends Ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Er.subVectors(s[0],s[1]).add(s[0]),c=Er);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Er.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Er),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),bo.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,M,m),wo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,M,m),Ao.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,M,m)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),wo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ao.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(bo.calc(l),wo.calc(l),Ao.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Gl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function lf(i,t){const e=1-i;return e*e*t}function cf(i,t){return 2*(1-i)*i*t}function hf(i,t){return i*i*t}function Bs(i,t,e,n){return lf(i,t)+cf(i,e)+hf(i,n)}function uf(i,t){const e=1-i;return e*e*e*t}function ff(i,t){const e=1-i;return 3*e*e*i*t}function df(i,t){return 3*(1-i)*i*i*t}function pf(i,t){return i*i*i*t}function zs(i,t,e,n,s){return uf(i,t)+ff(i,e)+df(i,n)+pf(i,s)}class hh extends Ln{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mf extends Ln{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y),zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uh extends Ln{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gf extends Ln{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends Ln{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,s.x,r.x,o.x),Bs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dh extends Ln{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(t,s.x,r.x,o.x),Bs(t,s.y,r.y,o.y),Bs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ph extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Gl(a,l.x,c.x,h.x,u.x),Gl(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var Hr=Object.freeze({__proto__:null,ArcCurve:af,CatmullRomCurve3:Xr,CubicBezierCurve:hh,CubicBezierCurve3:mf,EllipseCurve:tl,LineCurve:uh,LineCurve3:gf,QuadraticBezierCurve:fh,QuadraticBezierCurve3:dh,SplineCurve:ph});class _f extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Hr[s.type]().fromJSON(s))}return this}}class Ys extends _f{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new uh(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new fh(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new hh(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ph(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new tl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ne extends Ys{constructor(t){super(t),this.uuid=_s(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ys().fromJSON(s))}return this}}function vf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=mh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ef(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Zs(r,o,e,a,l,c,0),o}function mh(i,t,e,n,s){let r;if(s===Uf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Wl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Wl(o/n|0,i[o],i[o+1],r);return r&&ps(r,r.next)&&(Ks(r),r=r.next),r}function Di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ps(e,e.next)||Se(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Rf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Mf(i,n,s,r):xf(i)){t.push(l.i,i.i,c.i),Ks(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=yf(Di(i),t),Zs(i,t,e,n,s,r,2)):o===2&&Sf(i,t,e,n,s,r):Zs(Di(i),t,e,n,s,r,1);break}}}function xf(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ns(s,a,r,l,o,c,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),M=Math.max(a,l,c),m=Math.max(h,u,d),p=Aa(f,g,t,e,n),T=Aa(M,m,t,e,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=p&&x&&x.z<=T;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Ns(a,h,l,u,c,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ns(a,h,l,u,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Ns(a,h,l,u,c,d,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=M&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Ns(a,h,l,u,c,d,x.x,x.y)&&Se(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function yf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ps(n,s)&&_h(n,e,e.next,s)&&js(n,s)&&js(s,n)&&(t.push(n.i,e.i,s.i),Ks(e),Ks(e.next),e=i=s),e=e.next}while(e!==i);return Di(e)}function Sf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lf(o,a)){let l=vh(o,a);o=Di(o,o.next),l=Di(l,l.next),Zs(o,t,e,n,s,r,0),Zs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ef(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=mh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pf(c))}s.sort(Tf);for(let r=0;r<s.length;r++)e=bf(s[r],e);return e}function Tf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bf(i,t){const e=wf(i,t);if(!e)return t;const n=vh(e,i);return Di(n,n.next),Di(e,e.next)}function wf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ps(i,e))return e;do{if(ps(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&gh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);js(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Af(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Af(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function Rf(i,t,e,n){let s=i;do s.z===0&&(s.z=Aa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Cf(s)}function Cf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Aa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ns(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&gh(i,t,e,n,s,r,o,a)}function Lf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Df(i,t)&&(js(i,t)&&js(t,i)&&If(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||ps(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ps(i,t){return i.x===t.x&&i.y===t.y}function _h(i,t,e,n){const s=br(Se(i,t,e)),r=br(Se(i,t,n)),o=br(Se(e,n,i)),a=br(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Tr(i,e,t)||r===0&&Tr(i,n,t)||o===0&&Tr(e,i,n)||a===0&&Tr(e,t,n))}function Tr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function br(i){return i>0?1:i<0?-1:0}function Df(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&_h(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function js(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function If(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function vh(i,t){const e=Ra(i.i,i.x,i.y),n=Ra(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wl(i,t,e,n){const s=Ra(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ra(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Uf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Nf{static triangulate(t,e,n=2){return vf(t,e,n)}}class kn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return kn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Xl(t),ql(n,t);let o=t.length;e.forEach(Xl);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ql(n,e[l]);const a=Nf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Xl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ql(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ti extends Oe{constructor(t=new Ne([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Ff;let S,x=!1,L,R,D,O;p&&(S=p.getSpacedPoints(h),x=!0,d=!1,L=p.computeFrenetFrames(h,!1),R=new A,D=new A,O=new A),d||(m=0,f=0,g=0,M=0);const E=a.extractPoints(c);let y=E.shape;const F=E.holes;if(!kn.isClockWise(y)){y=y.reverse();for(let ut=0,lt=F.length;ut<lt;ut++){const U=F[ut];kn.isClockWise(U)&&(F[ut]=U.reverse())}}function X(ut){const U=10000000000000001e-36;let V=ut[0];for(let Y=1;Y<=ut.length;Y++){const K=Y%ut.length,rt=ut[K],Dt=rt.x-V.x,bt=rt.y-V.y,b=Dt*Dt+bt*bt,_=Math.max(Math.abs(rt.x),Math.abs(rt.y),Math.abs(V.x),Math.abs(V.y)),P=U*_*_;if(b<=P){ut.splice(K,1),Y--;continue}V=rt}}X(y),F.forEach(X);const nt=F.length,tt=y;for(let ut=0;ut<nt;ut++){const lt=F[ut];y=y.concat(lt)}function et(ut,lt,U){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ut.clone().addScaledVector(lt,U)}const ht=y.length;function Z(ut,lt,U){let V,Y,K;const rt=ut.x-lt.x,Dt=ut.y-lt.y,bt=U.x-ut.x,b=U.y-ut.y,_=rt*rt+Dt*Dt,P=rt*b-Dt*bt;if(Math.abs(P)>Number.EPSILON){const G=Math.sqrt(_),$=Math.sqrt(bt*bt+b*b),q=lt.x-Dt/G,St=lt.y+rt/G,j=U.x-b/$,Rt=U.y+bt/$,mt=((j-q)*b-(Rt-St)*bt)/(rt*b-Dt*bt);V=q+rt*mt-ut.x,Y=St+Dt*mt-ut.y;const dt=V*V+Y*Y;if(dt<=2)return new vt(V,Y);K=Math.sqrt(dt/2)}else{let G=!1;rt>Number.EPSILON?bt>Number.EPSILON&&(G=!0):rt<-Number.EPSILON?bt<-Number.EPSILON&&(G=!0):Math.sign(Dt)===Math.sign(b)&&(G=!0),G?(V=-Dt,Y=rt,K=Math.sqrt(_)):(V=rt,Y=Dt,K=Math.sqrt(_/2))}return new vt(V/K,Y/K)}const pt=[];for(let ut=0,lt=tt.length,U=lt-1,V=ut+1;ut<lt;ut++,U++,V++)U===lt&&(U=0),V===lt&&(V=0),pt[ut]=Z(tt[ut],tt[U],tt[V]);const Et=[];let yt,zt=pt.concat();for(let ut=0,lt=nt;ut<lt;ut++){const U=F[ut];yt=[];for(let V=0,Y=U.length,K=Y-1,rt=V+1;V<Y;V++,K++,rt++)K===Y&&(K=0),rt===Y&&(rt=0),yt[V]=Z(U[V],U[K],U[rt]);Et.push(yt),zt=zt.concat(yt)}let Qt;if(m===0)Qt=kn.triangulateShape(tt,F);else{const ut=[],lt=[];for(let U=0;U<m;U++){const V=U/m,Y=f*Math.cos(V*Math.PI/2),K=g*Math.sin(V*Math.PI/2)+M;for(let rt=0,Dt=tt.length;rt<Dt;rt++){const bt=et(tt[rt],pt[rt],K);Ot(bt.x,bt.y,-Y),V===0&&ut.push(bt)}for(let rt=0,Dt=nt;rt<Dt;rt++){const bt=F[rt];yt=Et[rt];const b=[];for(let _=0,P=bt.length;_<P;_++){const G=et(bt[_],yt[_],K);Ot(G.x,G.y,-Y),V===0&&b.push(G)}V===0&&lt.push(b)}}Qt=kn.triangulateShape(ut,lt)}const ie=Qt.length,ee=g+M;for(let ut=0;ut<ht;ut++){const lt=d?et(y[ut],zt[ut],ee):y[ut];x?(D.copy(L.normals[0]).multiplyScalar(lt.x),R.copy(L.binormals[0]).multiplyScalar(lt.y),O.copy(S[0]).add(D).add(R),Ot(O.x,O.y,O.z)):Ot(lt.x,lt.y,0)}for(let ut=1;ut<=h;ut++)for(let lt=0;lt<ht;lt++){const U=d?et(y[lt],zt[lt],ee):y[lt];x?(D.copy(L.normals[ut]).multiplyScalar(U.x),R.copy(L.binormals[ut]).multiplyScalar(U.y),O.copy(S[ut]).add(D).add(R),Ot(O.x,O.y,O.z)):Ot(U.x,U.y,u/h*ut)}for(let ut=m-1;ut>=0;ut--){const lt=ut/m,U=f*Math.cos(lt*Math.PI/2),V=g*Math.sin(lt*Math.PI/2)+M;for(let Y=0,K=tt.length;Y<K;Y++){const rt=et(tt[Y],pt[Y],V);Ot(rt.x,rt.y,u+U)}for(let Y=0,K=F.length;Y<K;Y++){const rt=F[Y];yt=Et[Y];for(let Dt=0,bt=rt.length;Dt<bt;Dt++){const b=et(rt[Dt],yt[Dt],V);x?Ot(b.x,b.y+S[h-1].y,S[h-1].x+U):Ot(b.x,b.y,u+U)}}}st(),ft();function st(){const ut=s.length/3;if(d){let lt=0,U=ht*lt;for(let V=0;V<ie;V++){const Y=Qt[V];Ut(Y[2]+U,Y[1]+U,Y[0]+U)}lt=h+m*2,U=ht*lt;for(let V=0;V<ie;V++){const Y=Qt[V];Ut(Y[0]+U,Y[1]+U,Y[2]+U)}}else{for(let lt=0;lt<ie;lt++){const U=Qt[lt];Ut(U[2],U[1],U[0])}for(let lt=0;lt<ie;lt++){const U=Qt[lt];Ut(U[0]+ht*h,U[1]+ht*h,U[2]+ht*h)}}n.addGroup(ut,s.length/3-ut,0)}function ft(){const ut=s.length/3;let lt=0;Lt(tt,lt),lt+=tt.length;for(let U=0,V=F.length;U<V;U++){const Y=F[U];Lt(Y,lt),lt+=Y.length}n.addGroup(ut,s.length/3-ut,1)}function Lt(ut,lt){let U=ut.length;for(;--U>=0;){const V=U;let Y=U-1;Y<0&&(Y=ut.length-1);for(let K=0,rt=h+m*2;K<rt;K++){const Dt=ht*K,bt=ht*(K+1),b=lt+V+Dt,_=lt+Y+Dt,P=lt+Y+bt,G=lt+V+bt;Xt(b,_,P,G)}}}function Ot(ut,lt,U){l.push(ut),l.push(lt),l.push(U)}function Ut(ut,lt,U){le(ut),le(lt),le(U);const V=s.length/3,Y=T.generateTopUV(n,s,V-3,V-2,V-1);I(Y[0]),I(Y[1]),I(Y[2])}function Xt(ut,lt,U,V){le(ut),le(lt),le(V),le(lt),le(U),le(V);const Y=s.length/3,K=T.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);I(K[0]),I(K[1]),I(K[3]),I(K[1]),I(K[2]),I(K[3])}function le(ut){s.push(l[ut*3+0]),s.push(l[ut*3+1]),s.push(l[ut*3+2])}function I(ut){r.push(ut.x),r.push(ut.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Of(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Hr[s.type]().fromJSON(s)),new Ti(n,t.options)}}const Ff={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new vt(r,o),new vt(a,l),new vt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new vt(o,1-l),new vt(c,1-u),new vt(d,1-g),new vt(M,1-p)]:[new vt(a,1-l),new vt(h,1-u),new vt(f,1-g),new vt(m,1-p)]}};function Of(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class qr extends Qa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qr(t.radius,t.detail)}}class oi extends Oe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],M=[],m=[];for(let p=0;p<h;p++){const T=p*d-o;for(let S=0;S<c;S++){const x=S*u-r;g.push(x,-T,0),M.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const S=T+c*p,x=T+c*(p+1),L=T+1+c*(p+1),R=T+1+c*p;f.push(S,x,R),f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}class nl extends Oe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/s,f=new A,g=new vt;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let M=0;M<s;M++){const m=M*(n+1);for(let p=0;p<n;p++){const T=p+m,S=T,x=T+n+1,L=T+n+2,R=T+1;a.push(S,x,R),a.push(x,L,R)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fn extends Oe{constructor(t=new Ne([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function c(h){const u=s.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;kn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];kn.isClockWise(T)===!0&&(g[m]=T.reverse())}const M=kn.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];f=f.concat(T)}for(let m=0,p=f.length;m<p;m++){const T=f[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=M.length;m<p;m++){const T=M[m],S=T[0]+u,x=T[1]+u,L=T[2]+u;n.push(S,x,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Bf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new fn(n,t.curveSegments)}}function Bf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class vn extends Oe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new A,d=new A,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){const T=[],S=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){const R=L/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),M.push(d.x,d.y,d.z),m.push(R+x,1-S),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const S=h[p][T+1],x=h[p][T],L=h[p+1][T],R=h[p+1][T+1];(p!==0||o>0)&&f.push(S,x,R),(p!==n-1||l<Math.PI)&&f.push(x,L,R)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(M,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class bn extends Oe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new A,u=new A,d=new A;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const M=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const M=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;o.push(M,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class er extends Oe{constructor(t=new dh(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,l=new A,c=new vt;let h=new A;const u=[],d=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function M(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),T(),p()}function m(S){h=t.getPointAt(S/e,h);const x=o.normals[S],L=o.binormals[S];for(let R=0;R<=s;R++){const D=R/s*Math.PI*2,O=Math.sin(D),E=-Math.cos(D);l.x=E*x.x+O*L.x,l.y=E*x.y+O*L.y,l.z=E*x.z+O*L.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=e;S++)for(let x=1;x<=s;x++){const L=(s+1)*(S-1)+(x-1),R=(s+1)*S+(x-1),D=(s+1)*S+x,O=(s+1)*(S-1)+x;g.push(L,R,O),g.push(R,D,O)}}function T(){for(let S=0;S<=e;S++)for(let x=0;x<=s;x++)c.x=S/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new er(new Hr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ft extends tr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zf extends tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kf extends tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ro={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Hf{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Vf=new Hf;class il{constructor(t){this.manager=t!==void 0?t:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}il.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i=new WeakMap;class Gf extends il{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ro.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=$i.get(o);u===void 0&&(u=[],$i.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=Xs("img");function l(){h(),e&&e(this);const u=$i.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}$i.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Ro.remove(`image:${t}`);const d=$i.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}$i.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ro.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class Wf extends il{constructor(t){super(t)}load(t,e,n,s){const r=new We,o=new Gf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class sl extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xf extends sl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Co=new ve,Yl=new A,Zl=new A;class xh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yl),Zl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zl),e.updateMatrixWorld(),Co.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const jl=new ve,Is=new A,Po=new A;class qf extends xh{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Is.setFromMatrixPosition(t.matrixWorld),n.position.copy(Is),Po.copy(n.position),Po.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Po),n.updateMatrixWorld(),s.makeTranslation(-Is.x,-Is.y,-Is.z),jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl,n.coordinateSystem,n.reversedDepth)}}class Ca extends sl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Mh extends oh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yf extends xh{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rl extends sl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Yf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zf extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Kl=new ve;class jf{constructor(t,e,n=0,s=1/0){this.ray=new Za(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Kl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kl),this}intersectObject(t,e=!0,n=[]){return Pa(t,this,n,e),n.sort(Jl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pa(t[s],this,n,e);return n.sort(Jl),n}}function Jl(i,t){return i.distance-t.distance}function Pa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Pa(r[o],t,e,!0)}}class La{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kf extends Ui{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $l(i,t,e,n){const s=Jf(n);switch(e){case Zc:return i*t;case Kc:return i*t/s.components*s.byteLength;case Ga:return i*t/s.components*s.byteLength;case Jc:return i*t*2/s.components*s.byteLength;case Wa:return i*t*2/s.components*s.byteLength;case jc:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case Xa:return i*t*4/s.components*s.byteLength;case Dr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qo:case ea:return Math.max(i,16)*Math.max(t,8)/4;case $o:case ta:return Math.max(i,8)*Math.max(t,8)/2;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case aa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case xa:case Ma:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sa:case Ea:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ta:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jf(i){switch(i){case Cn:case Wc:return{byteLength:1,components:1};case Hs:case Xc:case $s:return{byteLength:2,components:1};case Ha:case Va:return{byteLength:2,components:4};case Ci:case ka:case zn:return{byteLength:4,components:1};case qc:case Yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);function yh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $f(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,u[d]=M)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const M=u[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
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
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
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
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fd=`#ifdef USE_IRIDESCENCE
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
#endif`,dd=`#ifdef USE_BUMPMAP
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sd=`#define PI 3.141592653589793
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
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Td=`vec3 transformedNormal = objectNormal;
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
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Od=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
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
}`,Hd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wd=`uniform bool receiveShadow;
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
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
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
#endif`,Jd=`struct PhysicalMaterial {
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
}`,$d=`
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
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
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,np=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lp=`#if defined( USE_POINTS_UV )
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
#endif`,cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pp=`#ifdef USE_MORPHTARGETS
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
#endif`,mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ip=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Op=`float getShadowMask() {
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
}`,Bp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qp=`#ifdef USE_TRANSMISSION
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
#endif`,Yp=`#ifdef USE_TRANSMISSION
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qp=`uniform sampler2D t2D;
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,om=`#define DISTANCE
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
}`,am=`#define DISTANCE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`uniform float scale;
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
}`,um=`uniform vec3 diffuse;
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
}`,fm=`#include <common>
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
}`,dm=`uniform vec3 diffuse;
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
}`,pm=`#define LAMBERT
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
}`,mm=`#define LAMBERT
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
}`,gm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,vm=`#define NORMAL
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
}`,xm=`#define NORMAL
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
}`,Mm=`#define PHONG
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
}`,ym=`#define PHONG
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
}`,Sm=`#define STANDARD
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
}`,Em=`#define STANDARD
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
}`,Tm=`#define TOON
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
}`,bm=`#define TOON
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
}`,wm=`uniform float size;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Qf,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:od,batching_pars_vertex:ad,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:fd,bumpmap_pars_fragment:dd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:_d,color_fragment:vd,color_pars_fragment:xd,color_pars_vertex:Md,color_vertex:yd,common:Sd,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:Td,displacementmap_pars_vertex:bd,displacementmap_vertex:wd,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Pd,envmap_fragment:Ld,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Id,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:Xd,envmap_vertex:Nd,fog_vertex:Fd,fog_pars_vertex:Od,fog_fragment:Bd,fog_pars_fragment:zd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Hd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Gd,lights_pars_begin:Wd,lights_toon_fragment:qd,lights_toon_pars_fragment:Yd,lights_phong_fragment:Zd,lights_phong_pars_fragment:jd,lights_physical_fragment:Kd,lights_physical_pars_fragment:Jd,lights_fragment_begin:$d,lights_fragment_maps:Qd,lights_fragment_end:tp,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:np,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:sp,map_fragment:rp,map_pars_fragment:op,map_particle_fragment:ap,map_particle_pars_fragment:lp,metalnessmap_fragment:cp,metalnessmap_pars_fragment:hp,morphinstance_vertex:up,morphcolor_vertex:fp,morphnormal_vertex:dp,morphtarget_pars_vertex:pp,morphtarget_vertex:mp,normal_fragment_begin:gp,normal_fragment_maps:_p,normal_pars_fragment:vp,normal_pars_vertex:xp,normal_vertex:Mp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Ep,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:bp,opaque_fragment:wp,packing:Ap,premultiplied_alpha_fragment:Rp,project_vertex:Cp,dithering_fragment:Pp,dithering_pars_fragment:Lp,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Ip,shadowmap_pars_fragment:Up,shadowmap_pars_vertex:Np,shadowmap_vertex:Fp,shadowmask_pars_fragment:Op,skinbase_vertex:Bp,skinning_pars_vertex:zp,skinning_vertex:kp,skinnormal_vertex:Hp,specularmap_fragment:Vp,specularmap_pars_fragment:Gp,tonemapping_fragment:Wp,tonemapping_pars_fragment:Xp,transmission_fragment:qp,transmission_pars_fragment:Yp,uv_pars_fragment:Zp,uv_pars_vertex:jp,uv_vertex:Kp,worldpos_vertex:Jp,background_vert:$p,background_frag:Qp,backgroundCube_vert:tm,backgroundCube_frag:em,cube_vert:nm,cube_frag:im,depth_vert:sm,depth_frag:rm,distanceRGBA_vert:om,distanceRGBA_frag:am,equirect_vert:lm,equirect_frag:cm,linedashed_vert:hm,linedashed_frag:um,meshbasic_vert:fm,meshbasic_frag:dm,meshlambert_vert:pm,meshlambert_frag:mm,meshmatcap_vert:gm,meshmatcap_frag:_m,meshnormal_vert:vm,meshnormal_frag:xm,meshphong_vert:Mm,meshphong_frag:ym,meshphysical_vert:Sm,meshphysical_frag:Em,meshtoon_vert:Tm,meshtoon_frag:bm,points_vert:wm,points_frag:Am,shadow_vert:Rm,shadow_frag:Cm,sprite_vert:Pm,sprite_frag:Lm},At={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},wn={basic:{uniforms:qe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:qe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new te(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:qe([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:qe([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:qe([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new te(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:qe([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:qe([At.points,At.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:qe([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:qe([At.common,At.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:qe([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:qe([At.sprite,At.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:qe([At.common,At.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:qe([At.lights,At.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};wn.physical={uniforms:qe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const wr={r:0,b:0,g:0},_i=new Pn,Dm=new ve;function Im(i,t,e,n,s,r,o){const a=new te(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function M(S){let x=!1;const L=g(S);L===null?p(a,l):L&&L.isColor&&(p(L,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,x){const L=g(x);L&&(L.isCubeTexture||L.mapping===Wr)?(h===void 0&&(h=new _e(new hi(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ds(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(_i)),h.material.toneMapped=oe.getTransfer(L.colorSpace)!==ue,(u!==L||d!==L.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new _e(new oi(2,2),new Wn({name:"BackgroundMaterial",uniforms:ds(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=oe.getTransfer(L.colorSpace)!==ue,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=L,d=L.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(wr,rh(i)),n.buffers.color.setClear(wr.r,wr.g,wr.b,x,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:M,addToRenderList:m,dispose:T}}function Um(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,F,W,X,nt){let tt=!1;const et=u(X,W,F);r!==et&&(r=et,c(r.object)),tt=f(y,X,W,nt),tt&&g(y,X,W,nt),nt!==null&&t.update(nt,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,x(y,F,W,X),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,F,W){const X=W.wireframe===!0;let nt=n[y.id];nt===void 0&&(nt={},n[y.id]=nt);let tt=nt[F.id];tt===void 0&&(tt={},nt[F.id]=tt);let et=tt[X];return et===void 0&&(et=d(l()),tt[X]=et),et}function d(y){const F=[],W=[],X=[];for(let nt=0;nt<e;nt++)F[nt]=0,W[nt]=0,X[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:X,object:y,attributes:{},index:null}}function f(y,F,W,X){const nt=r.attributes,tt=F.attributes;let et=0;const ht=W.getAttributes();for(const Z in ht)if(ht[Z].location>=0){const Et=nt[Z];let yt=tt[Z];if(yt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),Et===void 0||Et.attribute!==yt||yt&&Et.data!==yt.data)return!0;et++}return r.attributesNum!==et||r.index!==X}function g(y,F,W,X){const nt={},tt=F.attributes;let et=0;const ht=W.getAttributes();for(const Z in ht)if(ht[Z].location>=0){let Et=tt[Z];Et===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(Et=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(Et=y.instanceColor));const yt={};yt.attribute=Et,Et&&Et.data&&(yt.data=Et.data),nt[Z]=yt,et++}r.attributes=nt,r.attributesNum=et,r.index=X}function M(){const y=r.newAttributes;for(let F=0,W=y.length;F<W;F++)y[F]=0}function m(y){p(y,0)}function p(y,F){const W=r.newAttributes,X=r.enabledAttributes,nt=r.attributeDivisors;W[y]=1,X[y]===0&&(i.enableVertexAttribArray(y),X[y]=1),nt[y]!==F&&(i.vertexAttribDivisor(y,F),nt[y]=F)}function T(){const y=r.newAttributes,F=r.enabledAttributes;for(let W=0,X=F.length;W<X;W++)F[W]!==y[W]&&(i.disableVertexAttribArray(W),F[W]=0)}function S(y,F,W,X,nt,tt,et){et===!0?i.vertexAttribIPointer(y,F,W,nt,tt):i.vertexAttribPointer(y,F,W,X,nt,tt)}function x(y,F,W,X){M();const nt=X.attributes,tt=W.getAttributes(),et=F.defaultAttributeValues;for(const ht in tt){const Z=tt[ht];if(Z.location>=0){let pt=nt[ht];if(pt===void 0&&(ht==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),ht==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor)),pt!==void 0){const Et=pt.normalized,yt=pt.itemSize,zt=t.get(pt);if(zt===void 0)continue;const Qt=zt.buffer,ie=zt.type,ee=zt.bytesPerElement,st=ie===i.INT||ie===i.UNSIGNED_INT||pt.gpuType===ka;if(pt.isInterleavedBufferAttribute){const ft=pt.data,Lt=ft.stride,Ot=pt.offset;if(ft.isInstancedInterleavedBuffer){for(let Ut=0;Ut<Z.locationSize;Ut++)p(Z.location+Ut,ft.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ut=0;Ut<Z.locationSize;Ut++)m(Z.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ut=0;Ut<Z.locationSize;Ut++)S(Z.location+Ut,yt/Z.locationSize,ie,Et,Lt*ee,(Ot+yt/Z.locationSize*Ut)*ee,st)}else{if(pt.isInstancedBufferAttribute){for(let ft=0;ft<Z.locationSize;ft++)p(Z.location+ft,pt.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ft=0;ft<Z.locationSize;ft++)m(Z.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let ft=0;ft<Z.locationSize;ft++)S(Z.location+ft,yt/Z.locationSize,ie,Et,yt*ee,yt/Z.locationSize*ft*ee,st)}}else if(et!==void 0){const Et=et[ht];if(Et!==void 0)switch(Et.length){case 2:i.vertexAttrib2fv(Z.location,Et);break;case 3:i.vertexAttrib3fv(Z.location,Et);break;case 4:i.vertexAttrib4fv(Z.location,Et);break;default:i.vertexAttrib1fv(Z.location,Et)}}}}T()}function L(){O();for(const y in n){const F=n[y];for(const W in F){const X=F[W];for(const nt in X)h(X[nt].object),delete X[nt];delete F[W]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const F=n[y.id];for(const W in F){const X=F[W];for(const nt in X)h(X[nt].object),delete X[nt];delete F[W]}delete n[y.id]}function D(y){for(const F in n){const W=n[F];if(W[y.id]===void 0)continue;const X=W[y.id];for(const nt in X)h(X[nt].object),delete X[nt];delete W[y.id]}}function O(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function Nm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let M=0;M<u;M++)g+=h[M]*d[M];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Mn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const O=D===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Cn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==zn&&!O)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:R}}function Om(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new $n,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,S=T*4;let x=p.clippingState||null;l.value=x,x=h(g,d,S,f);for(let L=0;L!==S;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const M=u!==null?u.length:0;let m=null;if(M!==0){if(m=l.value,g!==!0||m===null){const p=f+M*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==M;++S,x+=4)o.copy(u[S]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Bm(i){let t=new WeakMap;function e(o,a){return a===jo?o.mapping=hs:a===Ko&&(o.mapping=us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jo||a===Ko)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const is=4,Ql=[.125,.215,.35,.446,.526,.582],bi=20,Lo=new Mh,tc=new te;let Do=null,Io=0,Uo=0,No=!1;const Si=(1+Math.sqrt(5))/2,Qi=1/Si,ec=[new A(-Si,Qi,0),new A(Si,Qi,0),new A(-Qi,0,Si),new A(Qi,0,Si),new A(0,Si,-Qi),new A(0,Si,Qi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],zm=new A;class nc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=zm}=r;Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Io,Uo),this._renderer.xr.enabled=No,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:$s,format:Mn,colorSpace:fs,depthBuffer:!1},s=ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ic(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=km(r)),this._blurMaterial=Hm(r,t,e)}return s}_compileMaterial(t){const e=new _e(this._lodPlanes[0],t);this._renderer.compile(e,Lo)}_sceneToCubeUV(t,e,n,s,r){const l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(tc),u.toneMapping=ri,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const M=new Ka({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),m=new _e(new hi,M);let p=!1;const T=t.background;T?T.isColor&&(M.color.copy(T),t.background=null,p=!0):(M.color.copy(tc),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const L=this._cubeSize;Ar(s,x*L,S>2?L:0,L,L),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new _e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ar(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ec[(s-r-1)%ec.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _e(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bi-1),M=r/g,m=isFinite(r)?1+Math.floor(h*M):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);const p=[];let T=0;for(let D=0;D<bi;++D){const O=D/M,E=Math.exp(-O*O/2);p.push(E),D===0?T+=E:D<m&&(T+=2*E)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const x=this._sizeLods[s],L=3*x*(s>S-is?s-S+is:0),R=4*(this._cubeSize-x);Ar(e,L,R,3*x,2*x),l.setRenderTarget(e),l.render(u,Lo)}}function km(i){const t=[],e=[],n=[];let s=i;const r=i-is+1+Ql.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-is?l=Ql[o-i+is-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,M=3,m=2,p=1,T=new Float32Array(M*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let R=0;R<f;R++){const D=R%3*2/3-1,O=R>2?0:-1,E=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];T.set(E,M*g*R),S.set(d,m*g*R);const y=[R,R,R,R,R,R];x.set(y,p*g*R)}const L=new Oe;L.setAttribute("position",new pn(T,M)),L.setAttribute("uv",new pn(S,m)),L.setAttribute("faceIndex",new pn(x,p)),t.push(L),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ic(i,t,e){const n=new Li(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hm(i,t,e){const n=new Float32Array(bi),s=new A(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function sc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function rc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function ol(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===jo||l===Ko,h=l===hs||l===us;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new nc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new nc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wm(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let M=0;if(f!==null){const T=f.array;M=f.version;for(let S=0,x=T.length;S<x;S+=3){const L=T[S+0],R=T[S+1],D=T[S+2];d.push(L,R,R,D,D,L)}}else if(g!==void 0){const T=g.array;M=g.version;for(let S=0,x=T.length/3-1;S<x;S+=3){const L=S+0,R=S+1,D=S+2;d.push(L,R,R,D,D,L)}}else return;const m=new(th(d)?sh:ih)(d,1);m.version=M;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Xm(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,M){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,M,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*M[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ym(i,t,e){const n=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),M===!0&&(x=2),m===!0&&(x=3);let L=a.attributes.position.count*x,R=1;L>t.maxTextureSize&&(R=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const D=new Float32Array(L*R*4*u),O=new eh(D,L,R,u);O.type=zn,O.needsUpdate=!0;const E=x*4;for(let F=0;F<u;F++){const W=p[F],X=T[F],nt=S[F],tt=L*R*4*F;for(let et=0;et<W.count;et++){const ht=et*E;g===!0&&(s.fromBufferAttribute(W,et),D[tt+ht+0]=s.x,D[tt+ht+1]=s.y,D[tt+ht+2]=s.z,D[tt+ht+3]=0),M===!0&&(s.fromBufferAttribute(X,et),D[tt+ht+4]=s.x,D[tt+ht+5]=s.y,D[tt+ht+6]=s.z,D[tt+ht+7]=0),m===!0&&(s.fromBufferAttribute(nt,et),D[tt+ht+8]=s.x,D[tt+ht+9]=s.y,D[tt+ht+10]=s.z,D[tt+ht+11]=nt.itemSize===4?s.w:1)}}d={count:u,texture:O,size:new vt(L,R)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const M=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",M),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Zm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Sh=new We,oc=new lh(1,1),Eh=new eh,Th=new Ou,bh=new ah,ac=[],lc=[],cc=new Float32Array(16),hc=new Float32Array(9),uc=new Float32Array(4);function xs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ac[s];if(r===void 0&&(r=new Float32Array(s),ac[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Yr(i,t){let e=lc[t];e===void 0&&(e=new Int32Array(t),lc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function $m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Qm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;uc.set(n),i.uniformMatrix2fv(this.addr,!1,uc),Le(e,n)}}function tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;hc.set(n),i.uniformMatrix3fv(this.addr,!1,hc),Le(e,n)}}function eg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;cc.set(n),i.uniformMatrix4fv(this.addr,!1,cc),Le(e,n)}}function ng(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function hg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(oc.compareFunction=Qc,r=oc):r=Sh,e.setTexture2D(t||r,s)}function ug(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Th,s)}function fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bh,s)}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Eh,s)}function pg(i){switch(i){case 5126:return jm;case 35664:return Km;case 35665:return Jm;case 35666:return $m;case 35674:return Qm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return dg}}function mg(i,t){i.uniform1fv(this.addr,t)}function gg(i,t){const e=xs(t,this.size,2);i.uniform2fv(this.addr,e)}function _g(i,t){const e=xs(t,this.size,3);i.uniform3fv(this.addr,e)}function vg(i,t){const e=xs(t,this.size,4);i.uniform4fv(this.addr,e)}function xg(i,t){const e=xs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mg(i,t){const e=xs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yg(i,t){const e=xs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Sg(i,t){i.uniform1iv(this.addr,t)}function Eg(i,t){i.uniform2iv(this.addr,t)}function Tg(i,t){i.uniform3iv(this.addr,t)}function bg(i,t){i.uniform4iv(this.addr,t)}function wg(i,t){i.uniform1uiv(this.addr,t)}function Ag(i,t){i.uniform2uiv(this.addr,t)}function Rg(i,t){i.uniform3uiv(this.addr,t)}function Cg(i,t){i.uniform4uiv(this.addr,t)}function Pg(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sh,r[o])}function Lg(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Th,r[o])}function Dg(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bh,r[o])}function Ig(i,t,e){const n=this.cache,s=t.length,r=Yr(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Eh,r[o])}function Ug(i){switch(i){case 5126:return mg;case 35664:return gg;case 35665:return _g;case 35666:return vg;case 35674:return xg;case 35675:return Mg;case 35676:return yg;case 5124:case 35670:return Sg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return bg;case 5125:return wg;case 36294:return Ag;case 36295:return Rg;case 36296:return Cg;case 35678:case 36198:case 36298:case 36306:case 35682:return Pg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ig}}class Ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=pg(e.type)}}class Fg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ug(e.type)}}class Og{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function fc(i,t){i.seq.push(t),i.map[t.id]=t}function Bg(i,t,e){const n=i.name,s=n.length;for(Fo.lastIndex=0;;){const r=Fo.exec(n),o=Fo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fc(e,c===void 0?new Ng(a,i,t):new Fg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Og(a),fc(e,u)),e=u}}}class Or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Bg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function dc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const zg=37297;let kg=0;function Hg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const pc=new jt;function Vg(i){oe._getMatrix(pc,oe.workingColorSpace,i);const t=`mat3( ${pc.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case zr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Hg(i.getShaderSource(t),a)}else return r}function Gg(i,t){const e=Vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Wg(i,t){let e;switch(t){case uu:e="Linear";break;case fu:e="Reinhard";break;case du:e="Cineon";break;case Vc:e="ACESFilmic";break;case mu:e="AgX";break;case gu:e="Neutral";break;case pu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rr=new A;function Xg(){oe.getLuminanceCoefficients(Rr);const i=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Yg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Fs(i){return i!==""}function gc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(jg,Jg)}const Kg=new Map;function Jg(i,t){let e=Kt[t];if(e===void 0){const n=Kg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Da(e)}const $g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vc(i){return i.replace($g,Qg)}function Qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function t0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function e0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function n0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===us&&(t="ENVMAP_MODE_REFRACTION"),t}function i0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Hc:t="ENVMAP_BLENDING_MULTIPLY";break;case cu:t="ENVMAP_BLENDING_MIX";break;case hu:t="ENVMAP_BLENDING_ADD";break}return t}function s0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function r0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=t0(e),c=e0(e),h=n0(e),u=i0(e),d=s0(e),f=qg(e),g=Yg(r),M=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),p.length>0&&(p+=`
`)):(m=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),p=[xc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Gg("linearToOutputTexel",e.outputColorSpace),Xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),o=Da(o),o=gc(o,e),o=_c(o,e),a=Da(a),a=gc(a,e),a=_c(a,e),o=vc(o),a=vc(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+o,x=T+p+a,L=dc(s,s.VERTEX_SHADER,S),R=dc(s,s.FRAGMENT_SHADER,x);s.attachShader(M,L),s.attachShader(M,R),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function D(F){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(M)||"",X=s.getShaderInfoLog(L)||"",nt=s.getShaderInfoLog(R)||"",tt=W.trim(),et=X.trim(),ht=nt.trim();let Z=!0,pt=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,L,R);else{const Et=mc(s,L,"vertex"),yt=mc(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+tt+`
`+Et+`
`+yt)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(et===""||ht==="")&&(pt=!1);pt&&(F.diagnostics={runnable:Z,programLog:tt,vertexShader:{log:et,prefix:m},fragmentShader:{log:ht,prefix:p}})}s.deleteShader(L),s.deleteShader(R),O=new Or(s,M),E=Zg(s,M)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,zg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=R,this}let o0=0;class a0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new l0(t),e.set(t,n)),n}}class l0{constructor(t){this.id=o0++,this.code=t,this.usedTimes=0}}function c0(i,t,e,n,s,r,o){const a=new ja,l=new a0,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,F,W,X){const nt=W.fog,tt=X.geometry,et=E.isMeshStandardMaterial?W.environment:null,ht=(E.isMeshStandardMaterial?e:t).get(E.envMap||et),Z=ht&&ht.mapping===Wr?ht.image.height:null,pt=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Et=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,yt=Et!==void 0?Et.length:0;let zt=0;tt.morphAttributes.position!==void 0&&(zt=1),tt.morphAttributes.normal!==void 0&&(zt=2),tt.morphAttributes.color!==void 0&&(zt=3);let Qt,ie,ee,st;if(pt){const Zt=wn[pt];Qt=Zt.vertexShader,ie=Zt.fragmentShader}else Qt=E.vertexShader,ie=E.fragmentShader,l.update(E),ee=l.getVertexShaderID(E),st=l.getFragmentShaderID(E);const ft=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Ot=X.isInstancedMesh===!0,Ut=X.isBatchedMesh===!0,Xt=!!E.map,le=!!E.matcap,I=!!ht,ut=!!E.aoMap,lt=!!E.lightMap,U=!!E.bumpMap,V=!!E.normalMap,Y=!!E.displacementMap,K=!!E.emissiveMap,rt=!!E.metalnessMap,Dt=!!E.roughnessMap,bt=E.anisotropy>0,b=E.clearcoat>0,_=E.dispersion>0,P=E.iridescence>0,G=E.sheen>0,$=E.transmission>0,q=bt&&!!E.anisotropyMap,St=b&&!!E.clearcoatMap,j=b&&!!E.clearcoatNormalMap,Rt=b&&!!E.clearcoatRoughnessMap,mt=P&&!!E.iridescenceMap,dt=P&&!!E.iridescenceThicknessMap,ct=G&&!!E.sheenColorMap,ot=G&&!!E.sheenRoughnessMap,Nt=!!E.specularMap,wt=!!E.specularColorMap,qt=!!E.specularIntensityMap,k=$&&!!E.transmissionMap,gt=$&&!!E.thicknessMap,Mt=!!E.gradientMap,It=!!E.alphaMap,xt=E.alphaTest>0,at=!!E.alphaHash,Pt=!!E.extensions;let Vt=ri;E.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Vt=i.toneMapping);const se={shaderID:pt,shaderType:E.type,shaderName:E.name,vertexShader:Qt,fragmentShader:ie,defines:E.defines,customVertexShaderID:ee,customFragmentShaderID:st,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&X._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&X.instanceColor!==null,instancingMorph:Ot&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:fs,alphaToCoverage:!!E.alphaToCoverage,map:Xt,matcap:le,envMap:I,envMapMode:I&&ht.mapping,envMapCubeUVHeight:Z,aoMap:ut,lightMap:lt,bumpMap:U,normalMap:V,displacementMap:d&&Y,emissiveMap:K,normalMapObjectSpace:V&&E.normalMapType===Mu,normalMapTangentSpace:V&&E.normalMapType===$c,metalnessMap:rt,roughnessMap:Dt,anisotropy:bt,anisotropyMap:q,clearcoat:b,clearcoatMap:St,clearcoatNormalMap:j,clearcoatRoughnessMap:Rt,dispersion:_,iridescence:P,iridescenceMap:mt,iridescenceThicknessMap:dt,sheen:G,sheenColorMap:ct,sheenRoughnessMap:ot,specularMap:Nt,specularColorMap:wt,specularIntensityMap:qt,transmission:$,transmissionMap:k,thicknessMap:gt,gradientMap:Mt,opaque:E.transparent===!1&&E.blending===rs&&E.alphaToCoverage===!1,alphaMap:It,alphaTest:xt,alphaHash:at,combine:E.combine,mapUv:Xt&&M(E.map.channel),aoMapUv:ut&&M(E.aoMap.channel),lightMapUv:lt&&M(E.lightMap.channel),bumpMapUv:U&&M(E.bumpMap.channel),normalMapUv:V&&M(E.normalMap.channel),displacementMapUv:Y&&M(E.displacementMap.channel),emissiveMapUv:K&&M(E.emissiveMap.channel),metalnessMapUv:rt&&M(E.metalnessMap.channel),roughnessMapUv:Dt&&M(E.roughnessMap.channel),anisotropyMapUv:q&&M(E.anisotropyMap.channel),clearcoatMapUv:St&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:j&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:ot&&M(E.sheenRoughnessMap.channel),specularMapUv:Nt&&M(E.specularMap.channel),specularColorMapUv:wt&&M(E.specularColorMap.channel),specularIntensityMapUv:qt&&M(E.specularIntensityMap.channel),transmissionMapUv:k&&M(E.transmissionMap.channel),thicknessMapUv:gt&&M(E.thicknessMap.channel),alphaMapUv:It&&M(E.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(V||bt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!tt.attributes.uv&&(Xt||It),fog:!!nt,useFog:E.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Lt,skinning:X.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Xt&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===ue,decodeVideoTextureEmissive:K&&E.emissiveMap.isVideoTexture===!0&&oe.getTransfer(E.emissiveMap.colorSpace)===ue,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ge,flipSided:E.side===Ye,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Pt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&E.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)y.push(F),y.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(T(y,E),S(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function T(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const y=g[E.type];let F;if(y){const W=wn[y];F=Ku.clone(W.uniforms)}else F=E.uniforms;return F}function L(E,y){let F;for(let W=0,X=h.length;W<X;W++){const nt=h[W];if(nt.cacheKey===y){F=nt,++F.usedTimes;break}}return F===void 0&&(F=new r0(i,y,E,r),h.push(F)),F}function R(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function D(E){l.remove(E)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:D,programs:h,dispose:O}}function h0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Mc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function yc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,M,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=M,p.group=m),t++,p}function a(u,d,f,g,M,m){const p=o(u,d,f,g,M,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,M,m){const p=o(u,d,f,g,M,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||u0),n.length>1&&n.sort(d||Mc),s.length>1&&s.sort(d||Mc)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function f0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new yc,i.set(n,[o])):s>=r.length?(o=new yc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function d0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new te};break;case"SpotLight":e={position:new A,direction:new A,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function p0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let m0=0;function g0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _0(i){const t=new d0,e=p0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new ve,o=new ve;function a(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,T=0,S=0,x=0,L=0,R=0,D=0;c.sort(g0);for(let E=0,y=c.length;E<y;E++){const F=c[E],W=F.color,X=F.intensity,nt=F.distance,tt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=W.r*X,u+=W.g*X,d+=W.b*X;else if(F.isLightProbe){for(let et=0;et<9;et++)n.probe[et].addScaledVector(F.sh.coefficients[et],X);D++}else if(F.isDirectionalLight){const et=t.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ht=F.shadow,Z=e.get(F);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=tt,n.directionalShadowMatrix[f]=F.shadow.matrix,T++}n.directional[f]=et,f++}else if(F.isSpotLight){const et=t.get(F);et.position.setFromMatrixPosition(F.matrixWorld),et.color.copy(W).multiplyScalar(X),et.distance=nt,et.coneCos=Math.cos(F.angle),et.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),et.decay=F.decay,n.spot[M]=et;const ht=F.shadow;if(F.map&&(n.spotLightMap[L]=F.map,L++,ht.updateMatrices(F),F.castShadow&&R++),n.spotLightMatrix[M]=ht.matrix,F.castShadow){const Z=e.get(F);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,n.spotShadow[M]=Z,n.spotShadowMap[M]=tt,x++}M++}else if(F.isRectAreaLight){const et=t.get(F);et.color.copy(W).multiplyScalar(X),et.halfWidth.set(F.width*.5,0,0),et.halfHeight.set(0,F.height*.5,0),n.rectArea[m]=et,m++}else if(F.isPointLight){const et=t.get(F);if(et.color.copy(F.color).multiplyScalar(F.intensity),et.distance=F.distance,et.decay=F.decay,F.castShadow){const ht=F.shadow,Z=e.get(F);Z.shadowIntensity=ht.intensity,Z.shadowBias=ht.bias,Z.shadowNormalBias=ht.normalBias,Z.shadowRadius=ht.radius,Z.shadowMapSize=ht.mapSize,Z.shadowCameraNear=ht.camera.near,Z.shadowCameraFar=ht.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=tt,n.pointShadowMatrix[g]=F.shadow.matrix,S++}n.point[g]=et,g++}else if(F.isHemisphereLight){const et=t.get(F);et.skyColor.copy(F.color).multiplyScalar(X),et.groundColor.copy(F.groundColor).multiplyScalar(X),n.hemi[p]=et,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const O=n.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==M||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==T||O.numPointShadows!==S||O.numSpotShadows!==x||O.numSpotMaps!==L||O.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=D,O.directionalLength=f,O.pointLength=g,O.spotLength=M,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=T,O.numPointShadows=S,O.numSpotShadows=x,O.numSpotMaps=L,O.numLightProbes=D,n.version=m0++)}function l(c,h){let u=0,d=0,f=0,g=0,M=0;const m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[M];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function Sc(i){const t=new _0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function v0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Sc(i),t.set(s,[a])):r>=o.length?(a=new Sc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const x0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y0(i,t,e){let n=new $a;const s=new vt,r=new vt,o=new de,a=new zf({depthPacking:xu}),l=new kf,c={},h=e.maxTextureSize,u={[li]:Ye,[Ye]:li,[Ge]:Ge},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:x0,fragmentShader:M0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new _e(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let p=this.type;this.render=function(R,D,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),W=i.state;W.setBlending(si),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=p!==On&&this.type===On,nt=p===On&&this.type!==On;for(let tt=0,et=R.length;tt<et;tt++){const ht=R[tt],Z=ht.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ht,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);const pt=Z.getFrameExtents();if(s.multiply(pt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,Z.mapSize.y=r.y)),Z.map===null||X===!0||nt===!0){const yt=this.type!==On?{minFilter:yn,magFilter:yn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Li(s.x,s.y,yt),Z.map.texture.name=ht.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const Et=Z.getViewportCount();for(let yt=0;yt<Et;yt++){const zt=Z.getViewport(yt);o.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),W.viewport(o),Z.updateMatrices(ht,yt),n=Z.getFrustum(),x(D,O,Z.camera,ht,this.type)}Z.isPointLightShadow!==!0&&this.type===On&&T(Z,O),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,F)};function T(R,D){const O=t.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Li(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(D,null,O,d,M,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(D,null,O,f,M,null)}function S(R,D,O,E){let y=null;const F=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)y=F;else if(y=O.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const W=y.uuid,X=D.uuid;let nt=c[W];nt===void 0&&(nt={},c[W]=nt);let tt=nt[X];tt===void 0&&(tt=y.clone(),nt[X]=tt,D.addEventListener("dispose",L)),y=tt}if(y.visible=D.visible,y.wireframe=D.wireframe,E===On?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:u[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=i.properties.get(y);W.light=O}return y}function x(R,D,O,E,y){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===On)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const X=t.update(R),nt=R.material;if(Array.isArray(nt)){const tt=X.groups;for(let et=0,ht=tt.length;et<ht;et++){const Z=tt[et],pt=nt[Z.materialIndex];if(pt&&pt.visible){const Et=S(R,pt,E,y);R.onBeforeShadow(i,R,D,O,X,Et,Z),i.renderBufferDirect(O,null,X,Et,R,Z),R.onAfterShadow(i,R,D,O,X,Et,Z)}}}else if(nt.visible){const tt=S(R,nt,E,y);R.onBeforeShadow(i,R,D,O,X,tt,null),i.renderBufferDirect(O,null,X,tt,R,null),R.onAfterShadow(i,R,D,O,X,tt,null)}}const W=R.children;for(let X=0,nt=W.length;X<nt;X++)x(W[X],D,O,E,y)}function L(R){R.target.removeEventListener("dispose",L);for(const O in c){const E=c[O],y=R.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const S0={[Vo]:Go,[Wo]:Yo,[Xo]:Zo,[cs]:qo,[Go]:Vo,[Yo]:Wo,[Zo]:Xo,[qo]:cs};function E0(i,t){function e(){let k=!1;const gt=new de;let Mt=null;const It=new de(0,0,0,0);return{setMask:function(xt){Mt!==xt&&!k&&(i.colorMask(xt,xt,xt,xt),Mt=xt)},setLocked:function(xt){k=xt},setClear:function(xt,at,Pt,Vt,se){se===!0&&(xt*=Vt,at*=Vt,Pt*=Vt),gt.set(xt,at,Pt,Vt),It.equals(gt)===!1&&(i.clearColor(xt,at,Pt,Vt),It.copy(gt))},reset:function(){k=!1,Mt=null,It.set(-1,0,0,0)}}}function n(){let k=!1,gt=!1,Mt=null,It=null,xt=null;return{setReversed:function(at){if(gt!==at){const Pt=t.get("EXT_clip_control");at?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),gt=at;const Vt=xt;xt=null,this.setClear(Vt)}},getReversed:function(){return gt},setTest:function(at){at?ft(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(at){Mt!==at&&!k&&(i.depthMask(at),Mt=at)},setFunc:function(at){if(gt&&(at=S0[at]),It!==at){switch(at){case Vo:i.depthFunc(i.NEVER);break;case Go:i.depthFunc(i.ALWAYS);break;case Wo:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case Xo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}It=at}},setLocked:function(at){k=at},setClear:function(at){xt!==at&&(gt&&(at=1-at),i.clearDepth(at),xt=at)},reset:function(){k=!1,Mt=null,It=null,xt=null,gt=!1}}}function s(){let k=!1,gt=null,Mt=null,It=null,xt=null,at=null,Pt=null,Vt=null,se=null;return{setTest:function(Zt){k||(Zt?ft(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(Zt){gt!==Zt&&!k&&(i.stencilMask(Zt),gt=Zt)},setFunc:function(Zt,xe,Ie){(Mt!==Zt||It!==xe||xt!==Ie)&&(i.stencilFunc(Zt,xe,Ie),Mt=Zt,It=xe,xt=Ie)},setOp:function(Zt,xe,Ie){(at!==Zt||Pt!==xe||Vt!==Ie)&&(i.stencilOp(Zt,xe,Ie),at=Zt,Pt=xe,Vt=Ie)},setLocked:function(Zt){k=Zt},setClear:function(Zt){se!==Zt&&(i.clearStencil(Zt),se=Zt)},reset:function(){k=!1,gt=null,Mt=null,It=null,xt=null,at=null,Pt=null,Vt=null,se=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,M=!1,m=null,p=null,T=null,S=null,x=null,L=null,R=null,D=new te(0,0,0),O=0,E=!1,y=null,F=null,W=null,X=null,nt=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,ht=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(Z)[1]),et=ht>=1):Z.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),et=ht>=2);let pt=null,Et={};const yt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),Qt=new de().fromArray(yt),ie=new de().fromArray(zt);function ee(k,gt,Mt,It){const xt=new Uint8Array(4),at=i.createTexture();i.bindTexture(k,at),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<Mt;Pt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(gt+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return at}const st={};st[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(cs),U(!1),V(xl),ft(i.CULL_FACE),ut(si);function ft(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Lt(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function Ot(k,gt){return u[k]!==gt?(i.bindFramebuffer(k,gt),u[k]=gt,k===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=gt),k===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ut(k,gt){let Mt=f,It=!1;if(k){Mt=d.get(gt),Mt===void 0&&(Mt=[],d.set(gt,Mt));const xt=k.textures;if(Mt.length!==xt.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Pt=xt.length;at<Pt;at++)Mt[at]=i.COLOR_ATTACHMENT0+at;Mt.length=xt.length,It=!0}}else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,It=!0);It&&i.drawBuffers(Mt)}function Xt(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const le={[Ei]:i.FUNC_ADD,[qh]:i.FUNC_SUBTRACT,[Yh]:i.FUNC_REVERSE_SUBTRACT};le[Zh]=i.MIN,le[jh]=i.MAX;const I={[Kh]:i.ZERO,[Jh]:i.ONE,[$h]:i.SRC_COLOR,[ko]:i.SRC_ALPHA,[su]:i.SRC_ALPHA_SATURATE,[nu]:i.DST_COLOR,[tu]:i.DST_ALPHA,[Qh]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[iu]:i.ONE_MINUS_DST_COLOR,[eu]:i.ONE_MINUS_DST_ALPHA,[ru]:i.CONSTANT_COLOR,[ou]:i.ONE_MINUS_CONSTANT_COLOR,[au]:i.CONSTANT_ALPHA,[lu]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(k,gt,Mt,It,xt,at,Pt,Vt,se,Zt){if(k===si){M===!0&&(Lt(i.BLEND),M=!1);return}if(M===!1&&(ft(i.BLEND),M=!0),k!==Xh){if(k!==m||Zt!==E){if((p!==Ei||x!==Ei)&&(i.blendEquation(i.FUNC_ADD),p=Ei,x=Ei),Zt)switch(k){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}T=null,S=null,L=null,R=null,D.set(0,0,0),O=0,m=k,E=Zt}return}xt=xt||gt,at=at||Mt,Pt=Pt||It,(gt!==p||xt!==x)&&(i.blendEquationSeparate(le[gt],le[xt]),p=gt,x=xt),(Mt!==T||It!==S||at!==L||Pt!==R)&&(i.blendFuncSeparate(I[Mt],I[It],I[at],I[Pt]),T=Mt,S=It,L=at,R=Pt),(Vt.equals(D)===!1||se!==O)&&(i.blendColor(Vt.r,Vt.g,Vt.b,se),D.copy(Vt),O=se),m=k,E=!1}function lt(k,gt){k.side===Ge?Lt(i.CULL_FACE):ft(i.CULL_FACE);let Mt=k.side===Ye;gt&&(Mt=!Mt),U(Mt),k.blending===rs&&k.transparent===!1?ut(si):ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const It=k.stencilWrite;a.setTest(It),It&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),K(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function U(k){y!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),y=k)}function V(k){k!==Gh?(ft(i.CULL_FACE),k!==F&&(k===xl?i.cullFace(i.BACK):k===Wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),F=k}function Y(k){k!==W&&(et&&i.lineWidth(k),W=k)}function K(k,gt,Mt){k?(ft(i.POLYGON_OFFSET_FILL),(X!==gt||nt!==Mt)&&(i.polygonOffset(gt,Mt),X=gt,nt=Mt)):Lt(i.POLYGON_OFFSET_FILL)}function rt(k){k?ft(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function Dt(k){k===void 0&&(k=i.TEXTURE0+tt-1),pt!==k&&(i.activeTexture(k),pt=k)}function bt(k,gt,Mt){Mt===void 0&&(pt===null?Mt=i.TEXTURE0+tt-1:Mt=pt);let It=Et[Mt];It===void 0&&(It={type:void 0,texture:void 0},Et[Mt]=It),(It.type!==k||It.texture!==gt)&&(pt!==Mt&&(i.activeTexture(Mt),pt=Mt),i.bindTexture(k,gt||st[k]),It.type=k,It.texture=gt)}function b(){const k=Et[pt];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(k){Qt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Qt.copy(k))}function ot(k){ie.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ie.copy(k))}function Nt(k,gt){let Mt=c.get(gt);Mt===void 0&&(Mt=new WeakMap,c.set(gt,Mt));let It=Mt.get(k);It===void 0&&(It=i.getUniformBlockIndex(gt,k.name),Mt.set(k,It))}function wt(k,gt){const It=c.get(gt).get(k);l.get(gt)!==It&&(i.uniformBlockBinding(gt,It,k.__bindingPointIndex),l.set(gt,It))}function qt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,Et={},u={},d=new WeakMap,f=[],g=null,M=!1,m=null,p=null,T=null,S=null,x=null,L=null,R=null,D=new te(0,0,0),O=0,E=!1,y=null,F=null,W=null,X=null,nt=null,Qt.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:Lt,bindFramebuffer:Ot,drawBuffers:Ut,useProgram:Xt,setBlending:ut,setMaterial:lt,setFlipSided:U,setCullFace:V,setLineWidth:Y,setPolygonOffset:K,setScissorTest:rt,activeTexture:Dt,bindTexture:bt,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:P,texImage2D:mt,texImage3D:dt,updateUBOMapping:Nt,uniformBlockBinding:wt,texStorage2D:j,texStorage3D:Rt,texSubImage2D:G,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:St,scissor:ct,viewport:ot,reset:qt}}function T0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return f?new OffscreenCanvas(b,_):Xs("canvas")}function M(b,_,P){let G=1;const $=bt(b);if(($.width>P||$.height>P)&&(G=P/Math.max($.width,$.height)),G<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(G*$.width),St=Math.floor(G*$.height);u===void 0&&(u=g(q,St));const j=_?g(q,St):u;return j.width=q,j.height=St,j.getContext("2d").drawImage(b,0,0,q,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+St+")."),j}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(b,_,P,G,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=_;if(_===i.RED&&(P===i.FLOAT&&(q=i.R32F),P===i.HALF_FLOAT&&(q=i.R16F),P===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(q=i.R8UI),P===i.UNSIGNED_SHORT&&(q=i.R16UI),P===i.UNSIGNED_INT&&(q=i.R32UI),P===i.BYTE&&(q=i.R8I),P===i.SHORT&&(q=i.R16I),P===i.INT&&(q=i.R32I)),_===i.RG&&(P===i.FLOAT&&(q=i.RG32F),P===i.HALF_FLOAT&&(q=i.RG16F),P===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(q=i.RG8UI),P===i.UNSIGNED_SHORT&&(q=i.RG16UI),P===i.UNSIGNED_INT&&(q=i.RG32UI),P===i.BYTE&&(q=i.RG8I),P===i.SHORT&&(q=i.RG16I),P===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(q=i.RGB8UI),P===i.UNSIGNED_SHORT&&(q=i.RGB16UI),P===i.UNSIGNED_INT&&(q=i.RGB32UI),P===i.BYTE&&(q=i.RGB8I),P===i.SHORT&&(q=i.RGB16I),P===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),P===i.UNSIGNED_INT&&(q=i.RGBA32UI),P===i.BYTE&&(q=i.RGBA8I),P===i.SHORT&&(q=i.RGBA16I),P===i.INT&&(q=i.RGBA32I)),_===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),_===i.RGBA){const St=$?zr:oe.getTransfer(G);P===i.FLOAT&&(q=i.RGBA32F),P===i.HALF_FLOAT&&(q=i.RGBA16F),P===i.UNSIGNED_BYTE&&(q=St===ue?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(b,_){let P;return b?_===null||_===Ci||_===Vs?P=i.DEPTH24_STENCIL8:_===zn?P=i.DEPTH32F_STENCIL8:_===Hs&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ci||_===Vs?P=i.DEPTH_COMPONENT24:_===zn?P=i.DEPTH_COMPONENT32F:_===Hs&&(P=i.DEPTH_COMPONENT16),P}function L(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==yn&&b.minFilter!==An?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){const _=b.target;_.removeEventListener("dispose",R),O(_),_.isVideoTexture&&h.delete(_)}function D(b){const _=b.target;_.removeEventListener("dispose",D),y(_)}function O(b){const _=n.get(b);if(_.__webglInit===void 0)return;const P=b.source,G=d.get(P);if(G){const $=G[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(b),Object.keys(G).length===0&&d.delete(P)}n.remove(b)}function E(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const P=b.source,G=d.get(P);delete G[_.__cacheKey],o.memory.textures--}function y(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let $=0;$<_.__webglFramebuffer[G].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[G][$]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=b.textures;for(let G=0,$=P.length;G<$;G++){const q=n.get(P[G]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(P[G])}n.remove(b)}let F=0;function W(){F=0}function X(){const b=F;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),F+=1,b}function nt(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function tt(b,_){const P=n.get(b);if(b.isVideoTexture&&rt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&P.__version!==b.version){const G=b.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(P,b,_);return}}else b.isExternalTexture&&(P.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+_)}function et(b,_){const P=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){st(P,b,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+_)}function ht(b,_){const P=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){st(P,b,_);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+_)}function Z(b,_){const P=n.get(b);if(b.version>0&&P.__version!==b.version){ft(P,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+_)}const pt={[Ri]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},Et={[yn]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[to]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},yt={[yu]:i.NEVER,[Au]:i.ALWAYS,[Su]:i.LESS,[Qc]:i.LEQUAL,[Eu]:i.EQUAL,[wu]:i.GEQUAL,[Tu]:i.GREATER,[bu]:i.NOTEQUAL};function zt(b,_){if(_.type===zn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===An||_.magFilter===to||_.magFilter===rr||_.magFilter===wi||_.minFilter===An||_.minFilter===to||_.minFilter===rr||_.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,pt[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,pt[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,pt[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Et[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Et[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===yn||_.minFilter!==rr&&_.minFilter!==wi||_.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Qt(b,_){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));const G=_.source;let $=d.get(G);$===void 0&&($={},d.set(G,$));const q=nt(_);if(q!==b.__cacheKey){$[q]===void 0&&($[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),$[q].usedTimes++;const St=$[b.__cacheKey];St!==void 0&&($[b.__cacheKey].usedTimes--,St.usedTimes===0&&E(_)),b.__cacheKey=q,b.__webglTexture=$[q].texture}return P}function ie(b,_,P){return Math.floor(Math.floor(b/P)/_)}function ee(b,_,P,G){const q=b.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,P,G,_.data);else{q.sort((dt,ct)=>dt.start-ct.start);let St=0;for(let dt=1;dt<q.length;dt++){const ct=q[St],ot=q[dt],Nt=ct.start+ct.count,wt=ie(ot.start,_.width,4),qt=ie(ct.start,_.width,4);ot.start<=Nt+1&&wt===qt&&ie(ot.start+ot.count-1,_.width,4)===wt?ct.count=Math.max(ct.count,ot.start+ot.count-ct.start):(++St,q[St]=ot)}q.length=St+1;const j=i.getParameter(i.UNPACK_ROW_LENGTH),Rt=i.getParameter(i.UNPACK_SKIP_PIXELS),mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let dt=0,ct=q.length;dt<ct;dt++){const ot=q[dt],Nt=Math.floor(ot.start/4),wt=Math.ceil(ot.count/4),qt=Nt%_.width,k=Math.floor(Nt/_.width),gt=wt,Mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qt),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,qt,k,gt,Mt,P,G,_.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,j),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function st(b,_,P){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);const $=Qt(b,_),q=_.source;e.bindTexture(G,b.__webglTexture,i.TEXTURE0+P);const St=n.get(q);if(q.version!==St.__version||$===!0){e.activeTexture(i.TEXTURE0+P);const j=oe.getPrimaries(oe.workingColorSpace),Rt=_.colorSpace===ei?null:oe.getPrimaries(_.colorSpace),mt=_.colorSpace===ei||j===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let dt=M(_.image,!1,s.maxTextureSize);dt=Dt(_,dt);const ct=r.convert(_.format,_.colorSpace),ot=r.convert(_.type);let Nt=S(_.internalFormat,ct,ot,_.colorSpace,_.isVideoTexture);zt(G,_);let wt;const qt=_.mipmaps,k=_.isVideoTexture!==!0,gt=St.__version===void 0||$===!0,Mt=q.dataReady,It=L(_,dt);if(_.isDepthTexture)Nt=x(_.format===Ws,_.type),gt&&(k?e.texStorage2D(i.TEXTURE_2D,1,Nt,dt.width,dt.height):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,ct,ot,null));else if(_.isDataTexture)if(qt.length>0){k&&gt&&e.texStorage2D(i.TEXTURE_2D,It,Nt,qt[0].width,qt[0].height);for(let xt=0,at=qt.length;xt<at;xt++)wt=qt[xt],k?Mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,wt.width,wt.height,ct,ot,wt.data):e.texImage2D(i.TEXTURE_2D,xt,Nt,wt.width,wt.height,0,ct,ot,wt.data);_.generateMipmaps=!1}else k?(gt&&e.texStorage2D(i.TEXTURE_2D,It,Nt,dt.width,dt.height),Mt&&ee(_,dt,ct,ot)):e.texImage2D(i.TEXTURE_2D,0,Nt,dt.width,dt.height,0,ct,ot,dt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){k&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Nt,qt[0].width,qt[0].height,dt.depth);for(let xt=0,at=qt.length;xt<at;xt++)if(wt=qt[xt],_.format!==Mn)if(ct!==null)if(k){if(Mt)if(_.layerUpdates.size>0){const Pt=$l(wt.width,wt.height,_.format,_.type);for(const Vt of _.layerUpdates){const se=wt.data.subarray(Vt*Pt/wt.data.BYTES_PER_ELEMENT,(Vt+1)*Pt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,Vt,wt.width,wt.height,1,ct,se)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,wt.width,wt.height,dt.depth,ct,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xt,Nt,wt.width,wt.height,dt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,xt,0,0,0,wt.width,wt.height,dt.depth,ct,ot,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,xt,Nt,wt.width,wt.height,dt.depth,0,ct,ot,wt.data)}else{k&&gt&&e.texStorage2D(i.TEXTURE_2D,It,Nt,qt[0].width,qt[0].height);for(let xt=0,at=qt.length;xt<at;xt++)wt=qt[xt],_.format!==Mn?ct!==null?k?Mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,xt,0,0,wt.width,wt.height,ct,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,xt,Nt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,wt.width,wt.height,ct,ot,wt.data):e.texImage2D(i.TEXTURE_2D,xt,Nt,wt.width,wt.height,0,ct,ot,wt.data)}else if(_.isDataArrayTexture)if(k){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,It,Nt,dt.width,dt.height,dt.depth),Mt)if(_.layerUpdates.size>0){const xt=$l(dt.width,dt.height,_.format,_.type);for(const at of _.layerUpdates){const Pt=dt.data.subarray(at*xt/dt.data.BYTES_PER_ELEMENT,(at+1)*xt/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,dt.width,dt.height,1,ct,ot,Pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,ct,ot,dt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,ct,ot,dt.data);else if(_.isData3DTexture)k?(gt&&e.texStorage3D(i.TEXTURE_3D,It,Nt,dt.width,dt.height,dt.depth),Mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,ct,ot,dt.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,ct,ot,dt.data);else if(_.isFramebufferTexture){if(gt)if(k)e.texStorage2D(i.TEXTURE_2D,It,Nt,dt.width,dt.height);else{let xt=dt.width,at=dt.height;for(let Pt=0;Pt<It;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Nt,xt,at,0,ct,ot,null),xt>>=1,at>>=1}}else if(qt.length>0){if(k&&gt){const xt=bt(qt[0]);e.texStorage2D(i.TEXTURE_2D,It,Nt,xt.width,xt.height)}for(let xt=0,at=qt.length;xt<at;xt++)wt=qt[xt],k?Mt&&e.texSubImage2D(i.TEXTURE_2D,xt,0,0,ct,ot,wt):e.texImage2D(i.TEXTURE_2D,xt,Nt,ct,ot,wt);_.generateMipmaps=!1}else if(k){if(gt){const xt=bt(dt);e.texStorage2D(i.TEXTURE_2D,It,Nt,xt.width,xt.height)}Mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,ot,dt)}else e.texImage2D(i.TEXTURE_2D,0,Nt,ct,ot,dt);m(_)&&p(G),St.__version=q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ft(b,_,P){if(_.image.length!==6)return;const G=Qt(b,_),$=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+P);const q=n.get($);if($.version!==q.__version||G===!0){e.activeTexture(i.TEXTURE0+P);const St=oe.getPrimaries(oe.workingColorSpace),j=_.colorSpace===ei?null:oe.getPrimaries(_.colorSpace),Rt=_.colorSpace===ei||St===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const mt=_.isCompressedTexture||_.image[0].isCompressedTexture,dt=_.image[0]&&_.image[0].isDataTexture,ct=[];for(let at=0;at<6;at++)!mt&&!dt?ct[at]=M(_.image[at],!0,s.maxCubemapSize):ct[at]=dt?_.image[at].image:_.image[at],ct[at]=Dt(_,ct[at]);const ot=ct[0],Nt=r.convert(_.format,_.colorSpace),wt=r.convert(_.type),qt=S(_.internalFormat,Nt,wt,_.colorSpace),k=_.isVideoTexture!==!0,gt=q.__version===void 0||G===!0,Mt=$.dataReady;let It=L(_,ot);zt(i.TEXTURE_CUBE_MAP,_);let xt;if(mt){k&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,It,qt,ot.width,ot.height);for(let at=0;at<6;at++){xt=ct[at].mipmaps;for(let Pt=0;Pt<xt.length;Pt++){const Vt=xt[Pt];_.format!==Mn?Nt!==null?k?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,0,0,Vt.width,Vt.height,Nt,Vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,qt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,0,0,Vt.width,Vt.height,Nt,wt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt,qt,Vt.width,Vt.height,0,Nt,wt,Vt.data)}}}else{if(xt=_.mipmaps,k&&gt){xt.length>0&&It++;const at=bt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,It,qt,at.width,at.height)}for(let at=0;at<6;at++)if(dt){k?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,ct[at].width,ct[at].height,Nt,wt,ct[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,qt,ct[at].width,ct[at].height,0,Nt,wt,ct[at].data);for(let Pt=0;Pt<xt.length;Pt++){const se=xt[Pt].image[at].image;k?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,0,0,se.width,se.height,Nt,wt,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,qt,se.width,se.height,0,Nt,wt,se.data)}}else{k?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Nt,wt,ct[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,qt,Nt,wt,ct[at]);for(let Pt=0;Pt<xt.length;Pt++){const Vt=xt[Pt];k?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,0,0,Nt,wt,Vt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Pt+1,qt,Nt,wt,Vt.image[at])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),q.__version=$.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Lt(b,_,P,G,$,q){const St=r.convert(P.format,P.colorSpace),j=r.convert(P.type),Rt=S(P.internalFormat,St,j,P.colorSpace),mt=n.get(_),dt=n.get(P);if(dt.__renderTarget=_,!mt.__hasExternalTextures){const ct=Math.max(1,_.width>>q),ot=Math.max(1,_.height>>q);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,q,Rt,ct,ot,_.depth,0,St,j,null):e.texImage2D($,q,Rt,ct,ot,0,St,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),K(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,$,dt.__webglTexture,0,Y(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,$,dt.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(b,_,P){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const G=_.depthTexture,$=G&&G.isDepthTexture?G.type:null,q=x(_.stencilBuffer,$),St=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=Y(_);K(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,q,_.width,_.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,b)}else{const G=_.textures;for(let $=0;$<G.length;$++){const q=G[$],St=r.convert(q.format,q.colorSpace),j=r.convert(q.type),Rt=S(q.internalFormat,St,j,q.colorSpace),mt=Y(_);P&&K(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Rt,_.width,_.height):K(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,Rt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(_.depthTexture);G.__renderTarget=_,(!G.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),tt(_.depthTexture,0);const $=G.__webglTexture,q=Y(_);if(_.depthTexture.format===Gs)K(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===Ws)K(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Xt(b){const _=n.get(b),P=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const G=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",$)};G.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=G}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const G=b.texture.mipmaps;G&&G.length>0?Ut(_.__webglFramebuffer[0],b):Ut(_.__webglFramebuffer,b)}else if(P){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),Ot(_.__webglDepthbuffer[G],b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,q)}}else{const G=b.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ot(_.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function le(b,_,P){const G=n.get(b);_!==void 0&&Lt(G.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Xt(b)}function I(b){const _=b.texture,P=n.get(b),G=n.get(_);b.addEventListener("dispose",D);const $=b.textures,q=b.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,o.memory.textures++),q){P.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[j]=[];for(let Rt=0;Rt<_.mipmaps.length;Rt++)P.__webglFramebuffer[j][Rt]=i.createFramebuffer()}else P.__webglFramebuffer[j]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)P.__webglFramebuffer[j]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(St)for(let j=0,Rt=$.length;j<Rt;j++){const mt=n.get($[j]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&K(b)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){const Rt=$[j];P.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[j]);const mt=r.convert(Rt.format,Rt.colorSpace),dt=r.convert(Rt.type),ct=S(Rt.internalFormat,mt,dt,Rt.colorSpace,b.isXRRenderTarget===!0),ot=Y(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ct,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,P.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(P.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),zt(i.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)Lt(P.__webglFramebuffer[j][Rt],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Rt);else Lt(P.__webglFramebuffer[j],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let j=0,Rt=$.length;j<Rt;j++){const mt=$[j],dt=n.get(mt);let ct=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ct=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,dt.__webglTexture),zt(ct,mt),Lt(P.__webglFramebuffer,b,mt,i.COLOR_ATTACHMENT0+j,ct,0),m(mt)&&p(ct)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,G.__webglTexture),zt(j,_),_.mipmaps&&_.mipmaps.length>0)for(let Rt=0;Rt<_.mipmaps.length;Rt++)Lt(P.__webglFramebuffer[Rt],b,_,i.COLOR_ATTACHMENT0,j,Rt);else Lt(P.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,j,0);m(_)&&p(j),e.unbindTexture()}b.depthBuffer&&Xt(b)}function ut(b){const _=b.textures;for(let P=0,G=_.length;P<G;P++){const $=_[P];if(m($)){const q=T(b),St=n.get($).__webglTexture;e.bindTexture(q,St),p(q),e.unbindTexture()}}}const lt=[],U=[];function V(b){if(b.samples>0){if(K(b)===!1){const _=b.textures,P=b.width,G=b.height;let $=i.COLOR_BUFFER_BIT;const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(b),j=_.length>1;if(j)for(let mt=0;mt<_.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const Rt=b.texture.mipmaps;Rt&&Rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<_.length;mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const dt=n.get(_[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,P,G,0,0,P,G,$,i.NEAREST),l===!0&&(lt.length=0,U.length=0,lt.push(i.COLOR_ATTACHMENT0+mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(lt.push(q),U.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let mt=0;mt<_.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const dt=n.get(_[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Y(b){return Math.min(s.maxSamples,b.samples)}function K(b){const _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function rt(b){const _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function Dt(b,_){const P=b.colorSpace,G=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==fs&&P!==ei&&(oe.getTransfer(P)===ue?(G!==Mn||$!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function bt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=tt,this.setTexture2DArray=et,this.setTexture3D=ht,this.setTextureCube=Z,this.rebindTextures=le,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=K}function b0(i,t){function e(n,s=ei){let r;const o=oe.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wc)return i.BYTE;if(n===Xc)return i.SHORT;if(n===Hs)return i.UNSIGNED_SHORT;if(n===ka)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===$s)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===jc)return i.RGB;if(n===Mn)return i.RGBA;if(n===Gs)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===Kc)return i.RED;if(n===Ga)return i.RED_INTEGER;if(n===Jc)return i.RG;if(n===Wa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===Dr||n===Ir||n===Ur||n===Nr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Qo||n===ta||n===ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===na||n===ia||n===sa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===na||n===ia)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===la)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ha)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ua)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ma)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ga)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_a)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===va)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xa||n===Ma||n===ya)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===xa)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sa||n===Ea||n===Ta||n===ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const w0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class R0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ch(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:w0,fragmentShader:A0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C0 extends Ui{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const M=typeof XRWebGLBinding<"u",m=new R0,p={},T=e.getContextAttributes();let S=null,x=null;const L=[],R=[],D=new vt;let O=null;const E=new rn;E.viewport=new de;const y=new rn;y.viewport=new de;const F=[E,y],W=new Zf;let X=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ft=L[st];return ft===void 0&&(ft=new Eo,L[st]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(st){let ft=L[st];return ft===void 0&&(ft=new Eo,L[st]=ft),ft.getGripSpace()},this.getHand=function(st){let ft=L[st];return ft===void 0&&(ft=new Eo,L[st]=ft),ft.getHandSpace()};function tt(st){const ft=R.indexOf(st.inputSource);if(ft===-1)return;const Lt=L[ft];Lt!==void 0&&(Lt.update(st.inputSource,st.frame,c||o),Lt.dispatchEvent({type:st.type,data:st.inputSource}))}function et(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",ht);for(let st=0;st<L.length;st++){const ft=R[st];ft!==null&&(R[st]=null,L[st].disconnect(ft))}X=null,nt=null,m.reset();for(const st in p)delete p[st];t.setRenderTarget(S),f=null,d=null,u=null,s=null,x=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){a=st,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",et),s.addEventListener("inputsourceschange",ht),T.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Lt=null,Ot=null,Ut=null;T.depth&&(Ut=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Lt=T.stencil?Ws:Gs,Ot=T.stencil?Vs:Ci);const Xt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Li(d.textureWidth,d.textureHeight,{format:Mn,type:Cn,depthTexture:new lh(d.textureWidth,d.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Lt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Lt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Lt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Li(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ht(st){for(let ft=0;ft<st.removed.length;ft++){const Lt=st.removed[ft],Ot=R.indexOf(Lt);Ot>=0&&(R[Ot]=null,L[Ot].disconnect(Lt))}for(let ft=0;ft<st.added.length;ft++){const Lt=st.added[ft];let Ot=R.indexOf(Lt);if(Ot===-1){for(let Xt=0;Xt<L.length;Xt++)if(Xt>=R.length){R.push(Lt),Ot=Xt;break}else if(R[Xt]===null){R[Xt]=Lt,Ot=Xt;break}if(Ot===-1)break}const Ut=L[Ot];Ut&&Ut.connect(Lt)}}const Z=new A,pt=new A;function Et(st,ft,Lt){Z.setFromMatrixPosition(ft.matrixWorld),pt.setFromMatrixPosition(Lt.matrixWorld);const Ot=Z.distanceTo(pt),Ut=ft.projectionMatrix.elements,Xt=Lt.projectionMatrix.elements,le=Ut[14]/(Ut[10]-1),I=Ut[14]/(Ut[10]+1),ut=(Ut[9]+1)/Ut[5],lt=(Ut[9]-1)/Ut[5],U=(Ut[8]-1)/Ut[0],V=(Xt[8]+1)/Xt[0],Y=le*U,K=le*V,rt=Ot/(-U+V),Dt=rt*-U;if(ft.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Dt),st.translateZ(rt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Ut[10]===-1)st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const bt=le+rt,b=I+rt,_=Y-Dt,P=K+(Ot-Dt),G=ut*I/b*bt,$=lt*I/b*bt;st.projectionMatrix.makePerspective(_,P,G,$,bt,b),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function yt(st,ft){ft===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ft.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;let ft=st.near,Lt=st.far;m.texture!==null&&(m.depthNear>0&&(ft=m.depthNear),m.depthFar>0&&(Lt=m.depthFar)),W.near=y.near=E.near=ft,W.far=y.far=E.far=Lt,(X!==W.near||nt!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),X=W.near,nt=W.far),W.layers.mask=st.layers.mask|6,E.layers.mask=W.layers.mask&3,y.layers.mask=W.layers.mask&5;const Ot=st.parent,Ut=W.cameras;yt(W,Ot);for(let Xt=0;Xt<Ut.length;Xt++)yt(Ut[Xt],Ot);Ut.length===2?Et(W,E,y):W.projectionMatrix.copy(E.projectionMatrix),zt(st,W,Ot)};function zt(st,ft,Lt){Lt===null?st.matrix.copy(ft.matrixWorld):(st.matrix.copy(Lt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ft.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=wa*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(st){l=st,d!==null&&(d.fixedFoveation=st),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=st)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(st){return p[st]};let Qt=null;function ie(st,ft){if(h=ft.getViewerPose(c||o),g=ft,h!==null){const Lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ot=!1;Lt.length!==W.cameras.length&&(W.cameras.length=0,Ot=!0);for(let I=0;I<Lt.length;I++){const ut=Lt[I];let lt=null;if(f!==null)lt=f.getViewport(ut);else{const V=u.getViewSubImage(d,ut);lt=V.viewport,I===0&&(t.setRenderTargetTextures(x,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(x))}let U=F[I];U===void 0&&(U=new rn,U.layers.enable(I),U.viewport=new de,F[I]=U),U.matrix.fromArray(ut.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(ut.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(lt.x,lt.y,lt.width,lt.height),I===0&&(W.matrix.copy(U.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ot===!0&&W.cameras.push(U)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=n.getBinding();const I=u.getDepthInformation(Lt[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Ut&&Ut.includes("camera-access")&&M){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<Lt.length;I++){const ut=Lt[I].camera;if(ut){let lt=p[ut];lt||(lt=new ch,p[ut]=lt);const U=u.getCameraImage(ut);lt.sourceTexture=U}}}}for(let Lt=0;Lt<L.length;Lt++){const Ot=R[Lt],Ut=L[Lt];Ot!==null&&Ut!==void 0&&Ut.update(Ot,ft,c||o)}Qt&&Qt(st,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),g=null}const ee=new yh;ee.setAnimationLoop(ie),this.setAnimationLoop=function(st){Qt=st},this.dispose=function(){}}}const vi=new Pn,P0=new ve;function L0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),S=T.envMap,x=T.envMapRotation;S&&(m.envMap.value=S,vi.copy(x),vi.x*=-1,vi.y*=-1,vi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(P0.makeRotationFromEuler(vi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const x=S.program;n.uniformBlockBinding(T,x)}function c(T,S){let x=s[T.id];x===void 0&&(g(T),x=h(T),s[T.id]=x,T.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(T,L);const R=t.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){const S=u();T.__bindingPointIndex=S;const x=i.createBuffer(),L=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=s[T.id],x=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,D=x.length;R<D;R++){const O=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,y=O.length;E<y;E++){const F=O[E];if(f(F,R,E,L)===!0){const W=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let nt=0;for(let tt=0;tt<X.length;tt++){const et=X[tt],ht=M(et);typeof et=="number"||typeof et=="boolean"?(F.__data[0]=et,i.bufferSubData(i.UNIFORM_BUFFER,W+nt,F.__data)):et.isMatrix3?(F.__data[0]=et.elements[0],F.__data[1]=et.elements[1],F.__data[2]=et.elements[2],F.__data[3]=0,F.__data[4]=et.elements[3],F.__data[5]=et.elements[4],F.__data[6]=et.elements[5],F.__data[7]=0,F.__data[8]=et.elements[6],F.__data[9]=et.elements[7],F.__data[10]=et.elements[8],F.__data[11]=0):(et.toArray(F.__data,nt),nt+=ht.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,S,x,L){const R=T.value,D=S+"_"+x;if(L[D]===void 0)return typeof R=="number"||typeof R=="boolean"?L[D]=R:L[D]=R.clone(),!0;{const O=L[D];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return L[D]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(T){const S=T.uniforms;let x=0;const L=16;for(let D=0,O=S.length;D<O;D++){const E=Array.isArray(S[D])?S[D]:[S[D]];for(let y=0,F=E.length;y<F;y++){const W=E[y],X=Array.isArray(W.value)?W.value:[W.value];for(let nt=0,tt=X.length;nt<tt;nt++){const et=X[nt],ht=M(et),Z=x%L,pt=Z%ht.boundary,Et=Z+pt;x+=pt,Et!==0&&L-Et<ht.storage&&(x+=L-Et),W.__data=new Float32Array(ht.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=ht.storage}}}const R=x%L;return R>0&&(x+=L-R),T.__size=x,T.__cache={},this}function M(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class I0{constructor(t={}){const{canvas:e=Pu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),M=new Int32Array(4);let m=null,p=null;const T=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let L=!1;this._outputColorSpace=Ce;let R=0,D=0,O=null,E=-1,y=null;const F=new de,W=new de;let X=null;const nt=new te(0);let tt=0,et=e.width,ht=e.height,Z=1,pt=null,Et=null;const yt=new de(0,0,et,ht),zt=new de(0,0,et,ht);let Qt=!1;const ie=new $a;let ee=!1,st=!1;const ft=new ve,Lt=new A,Ot=new de,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function le(){return O===null?Z:1}let I=n;function ut(v,C){return e.getContext(v,C)}try{const v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${za}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",xt,!1),I===null){const C="webgl2";if(I=ut(C,v),I===null)throw ut(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let lt,U,V,Y,K,rt,Dt,bt,b,_,P,G,$,q,St,j,Rt,mt,dt,ct,ot,Nt,wt,qt;function k(){lt=new Gm(I),lt.init(),Nt=new b0(I,lt),U=new Fm(I,lt,t,Nt),V=new E0(I,lt),U.reversedDepthBuffer&&d&&V.buffers.depth.setReversed(!0),Y=new qm(I),K=new h0,rt=new T0(I,lt,V,K,U,Nt,Y),Dt=new Bm(x),bt=new Vm(x),b=new $f(I),wt=new Um(I,b),_=new Wm(I,b,Y,wt),P=new Zm(I,_,b,Y),dt=new Ym(I,U,rt),j=new Om(K),G=new c0(x,Dt,bt,lt,U,wt,j),$=new L0(x,K),q=new f0,St=new v0(lt),mt=new Im(x,Dt,bt,V,P,f,l),Rt=new y0(x,P,U),qt=new D0(I,Y,U,V),ct=new Nm(I,lt,Y),ot=new Xm(I,lt,Y),Y.programs=G.programs,x.capabilities=U,x.extensions=lt,x.properties=K,x.renderLists=q,x.shadowMap=Rt,x.state=V,x.info=Y}k();const gt=new C0(x,I);this.xr=gt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const v=lt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=lt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(v){v!==void 0&&(Z=v,this.setSize(et,ht,!1))},this.getSize=function(v){return v.set(et,ht)},this.setSize=function(v,C,H=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=v,ht=C,e.width=Math.floor(v*Z),e.height=Math.floor(C*Z),H===!0&&(e.style.width=v+"px",e.style.height=C+"px"),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(et*Z,ht*Z).floor()},this.setDrawingBufferSize=function(v,C,H){et=v,ht=C,Z=H,e.width=Math.floor(v*H),e.height=Math.floor(C*H),this.setViewport(0,0,v,C)},this.getCurrentViewport=function(v){return v.copy(F)},this.getViewport=function(v){return v.copy(yt)},this.setViewport=function(v,C,H,z){v.isVector4?yt.set(v.x,v.y,v.z,v.w):yt.set(v,C,H,z),V.viewport(F.copy(yt).multiplyScalar(Z).round())},this.getScissor=function(v){return v.copy(zt)},this.setScissor=function(v,C,H,z){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,C,H,z),V.scissor(W.copy(zt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(v){V.setScissorTest(Qt=v)},this.setOpaqueSort=function(v){pt=v},this.setTransparentSort=function(v){Et=v},this.getClearColor=function(v){return v.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,H=!0){let z=0;if(v){let N=!1;if(O!==null){const J=O.texture.format;N=J===Xa||J===Wa||J===Ga}if(N){const J=O.texture.type,_t=J===Cn||J===Ci||J===Hs||J===Vs||J===Ha||J===Va,Tt=mt.getClearColor(),Ct=mt.getClearAlpha(),kt=Tt.r,Gt=Tt.g,Bt=Tt.b;_t?(g[0]=kt,g[1]=Gt,g[2]=Bt,g[3]=Ct,I.clearBufferuiv(I.COLOR,0,g)):(M[0]=kt,M[1]=Gt,M[2]=Bt,M[3]=Ct,I.clearBufferiv(I.COLOR,0,M))}else z|=I.COLOR_BUFFER_BIT}C&&(z|=I.DEPTH_BUFFER_BIT),H&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),mt.dispose(),q.dispose(),St.dispose(),K.dispose(),Dt.dispose(),bt.dispose(),P.dispose(),wt.dispose(),qt.dispose(),G.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Ie),gt.removeEventListener("sessionend",an),ln.stop()};function Mt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const v=Y.autoReset,C=Rt.enabled,H=Rt.autoUpdate,z=Rt.needsUpdate,N=Rt.type;k(),Y.autoReset=v,Rt.enabled=C,Rt.autoUpdate=H,Rt.needsUpdate=z,Rt.type=N}function xt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function at(v){const C=v.target;C.removeEventListener("dispose",at),Pt(C)}function Pt(v){Vt(v),K.remove(v)}function Vt(v){const C=K.get(v).programs;C!==void 0&&(C.forEach(function(H){G.releaseProgram(H)}),v.isShaderMaterial&&G.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,H,z,N,J){C===null&&(C=Ut);const _t=N.isMesh&&N.matrixWorld.determinant()<0,Tt=Oi(v,C,H,z,N);V.setMaterial(z,_t);let Ct=H.index,kt=1;if(z.wireframe===!0){if(Ct=_.getWireframeAttribute(H),Ct===void 0)return;kt=2}const Gt=H.drawRange,Bt=H.attributes.position;let $t=Gt.start*kt,ce=(Gt.start+Gt.count)*kt;J!==null&&($t=Math.max($t,J.start*kt),ce=Math.min(ce,(J.start+J.count)*kt)),Ct!==null?($t=Math.max($t,0),ce=Math.min(ce,Ct.count)):Bt!=null&&($t=Math.max($t,0),ce=Math.min(ce,Bt.count));const Ee=ce-$t;if(Ee<0||Ee===1/0)return;wt.setup(N,z,Tt,H,Ct);let ge,pe=ct;if(Ct!==null&&(ge=b.get(Ct),pe=ot,pe.setIndex(ge)),N.isMesh)z.wireframe===!0?(V.setLineWidth(z.wireframeLinewidth*le()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(N.isLine){let Ht=z.linewidth;Ht===void 0&&(Ht=1),V.setLineWidth(Ht*le()),N.isLineSegments?pe.setMode(I.LINES):N.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else N.isPoints?pe.setMode(I.POINTS):N.isSprite&&pe.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))pe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ht=N._multiDrawStarts,Me=N._multiDrawCounts,re=N._multiDrawCount,tn=Ct?b.get(Ct).bytesPerElement:1,Bi=K.get(z).currentProgram.getUniforms();for(let en=0;en<re;en++)Bi.setValue(I,"_gl_DrawID",en),pe.render(Ht[en]/tn,Me[en])}else if(N.isInstancedMesh)pe.renderInstances($t,Ee,N.count);else if(H.isInstancedBufferGeometry){const Ht=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Me=Math.min(H.instanceCount,Ht);pe.renderInstances($t,Ee,Me)}else pe.render($t,Ee)};function se(v,C,H){v.transparent===!0&&v.side===Ge&&v.forceSinglePass===!1?(v.side=Ye,v.needsUpdate=!0,Ze(v,C,H),v.side=li,v.needsUpdate=!0,Ze(v,C,H),v.side=Ge):Ze(v,C,H)}this.compile=function(v,C,H=null){H===null&&(H=v),p=St.get(H),p.init(C),S.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(C.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),v!==H&&v.traverseVisible(function(N){N.isLight&&N.layers.test(C.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let _t=0;_t<J.length;_t++){const Tt=J[_t];se(Tt,H,N),z.add(Tt)}else se(J,H,N),z.add(J)}),p=S.pop(),z},this.compileAsync=function(v,C,H=null){const z=this.compile(v,C,H);return new Promise(N=>{function J(){if(z.forEach(function(_t){K.get(_t).currentProgram.isReady()&&z.delete(_t)}),z.size===0){N(v);return}setTimeout(J,10)}lt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Zt=null;function xe(v){Zt&&Zt(v)}function Ie(){ln.stop()}function an(){ln.start()}const ln=new yh;ln.setAnimationLoop(xe),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(v){Zt=v,gt.setAnimationLoop(v),v===null?ln.stop():ln.start()},gt.addEventListener("sessionstart",Ie),gt.addEventListener("sessionend",an),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(C),C=gt.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,C,O),p=St.get(v,S.length),p.init(C),S.push(p),ft.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),ie.setFromProjectionMatrix(ft,Rn,C.reversedDepth),st=this.localClippingEnabled,ee=j.init(this.clippingPlanes,st),m=q.get(v,T.length),m.init(),T.push(m),gt.enabled===!0&&gt.isPresenting===!0){const J=x.xr.getDepthSensingMesh();J!==null&&Ni(J,C,-1/0,x.sortObjects)}Ni(v,C,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pt,Et),Xt=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,Xt&&mt.addToRenderList(m,v),this.info.render.frame++,ee===!0&&j.beginShadows();const H=p.state.shadowsArray;Rt.render(H,v,C),ee===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),C.isArrayCamera){const J=C.cameras;if(N.length>0)for(let _t=0,Tt=J.length;_t<Tt;_t++){const Ct=J[_t];En(z,N,v,Ct)}Xt&&mt.render(v);for(let _t=0,Tt=J.length;_t<Tt;_t++){const Ct=J[_t];Ts(m,v,Ct,Ct.viewport)}}else N.length>0&&En(z,N,v,C),Xt&&mt.render(v),Ts(m,v,C);O!==null&&D===0&&(rt.updateMultisampleRenderTarget(O),rt.updateRenderTargetMipmap(O)),v.isScene===!0&&v.onAfterRender(x,v,C),wt.resetDefaultState(),E=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],ee===!0&&j.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ni(v,C,H,z){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ie.intersectsSprite(v)){z&&Ot.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ft);const _t=P.update(v),Tt=v.material;Tt.visible&&m.push(v,_t,Tt,H,Ot.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ie.intersectsObject(v))){const _t=P.update(v),Tt=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ot.copy(v.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Ot.copy(_t.boundingSphere.center)),Ot.applyMatrix4(v.matrixWorld).applyMatrix4(ft)),Array.isArray(Tt)){const Ct=_t.groups;for(let kt=0,Gt=Ct.length;kt<Gt;kt++){const Bt=Ct[kt],$t=Tt[Bt.materialIndex];$t&&$t.visible&&m.push(v,_t,$t,H,Ot.z,Bt)}}else Tt.visible&&m.push(v,_t,Tt,H,Ot.z,null)}}const J=v.children;for(let _t=0,Tt=J.length;_t<Tt;_t++)Ni(J[_t],C,H,z)}function Ts(v,C,H,z){const N=v.opaque,J=v.transmissive,_t=v.transparent;p.setupLightsView(H),ee===!0&&j.setGlobalState(x.clippingPlanes,H),z&&V.viewport(F.copy(z)),N.length>0&&ui(N,C,H),J.length>0&&ui(J,C,H),_t.length>0&&ui(_t,C,H),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function En(v,C,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Li(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?$s:Cn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const J=p.state.transmissionRenderTarget[z.id],_t=z.viewport||F;J.setSize(_t.z*x.transmissionResolutionScale,_t.w*x.transmissionResolutionScale);const Tt=x.getRenderTarget(),Ct=x.getActiveCubeFace(),kt=x.getActiveMipmapLevel();x.setRenderTarget(J),x.getClearColor(nt),tt=x.getClearAlpha(),tt<1&&x.setClearColor(16777215,.5),x.clear(),Xt&&mt.render(H);const Gt=x.toneMapping;x.toneMapping=ri;const Bt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),ee===!0&&j.setGlobalState(x.clippingPlanes,z),ui(v,H,z),rt.updateMultisampleRenderTarget(J),rt.updateRenderTargetMipmap(J),lt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let ce=0,Ee=C.length;ce<Ee;ce++){const ge=C[ce],pe=ge.object,Ht=ge.geometry,Me=ge.material,re=ge.group;if(Me.side===Ge&&pe.layers.test(z.layers)){const tn=Me.side;Me.side=Ye,Me.needsUpdate=!0,bs(pe,H,z,Ht,Me,re),Me.side=tn,Me.needsUpdate=!0,$t=!0}}$t===!0&&(rt.updateMultisampleRenderTarget(J),rt.updateRenderTargetMipmap(J))}x.setRenderTarget(Tt,Ct,kt),x.setClearColor(nt,tt),Bt!==void 0&&(z.viewport=Bt),x.toneMapping=Gt}function ui(v,C,H){const z=C.isScene===!0?C.overrideMaterial:null;for(let N=0,J=v.length;N<J;N++){const _t=v[N],Tt=_t.object,Ct=_t.geometry,kt=_t.group;let Gt=_t.material;Gt.allowOverride===!0&&z!==null&&(Gt=z),Tt.layers.test(H.layers)&&bs(Tt,C,H,Ct,Gt,kt)}}function bs(v,C,H,z,N,J){v.onBeforeRender(x,C,H,z,N,J),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(x,C,H,z,v,J),N.transparent===!0&&N.side===Ge&&N.forceSinglePass===!1?(N.side=Ye,N.needsUpdate=!0,x.renderBufferDirect(H,C,z,N,v,J),N.side=li,N.needsUpdate=!0,x.renderBufferDirect(H,C,z,N,v,J),N.side=Ge):x.renderBufferDirect(H,C,z,N,v,J),v.onAfterRender(x,C,H,z,N,J)}function Ze(v,C,H){C.isScene!==!0&&(C=Ut);const z=K.get(v),N=p.state.lights,J=p.state.shadowsArray,_t=N.state.version,Tt=G.getParameters(v,N.state,J,C,H),Ct=G.getProgramCacheKey(Tt);let kt=z.programs;z.environment=v.isMeshStandardMaterial?C.environment:null,z.fog=C.fog,z.envMap=(v.isMeshStandardMaterial?bt:Dt).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,kt===void 0&&(v.addEventListener("dispose",at),kt=new Map,z.programs=kt);let Gt=kt.get(Ct);if(Gt!==void 0){if(z.currentProgram===Gt&&z.lightsStateVersion===_t)return ws(v,Tt),Gt}else Tt.uniforms=G.getUniforms(v),v.onBeforeCompile(Tt,x),Gt=G.acquireProgram(Tt,Ct),kt.set(Ct,Gt),z.uniforms=Tt.uniforms;const Bt=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Bt.clippingPlanes=j.uniform),ws(v,Tt),z.needsLights=w(v),z.lightsStateVersion=_t,z.needsLights&&(Bt.ambientLightColor.value=N.state.ambient,Bt.lightProbe.value=N.state.probe,Bt.directionalLights.value=N.state.directional,Bt.directionalLightShadows.value=N.state.directionalShadow,Bt.spotLights.value=N.state.spot,Bt.spotLightShadows.value=N.state.spotShadow,Bt.rectAreaLights.value=N.state.rectArea,Bt.ltc_1.value=N.state.rectAreaLTC1,Bt.ltc_2.value=N.state.rectAreaLTC2,Bt.pointLights.value=N.state.point,Bt.pointLightShadows.value=N.state.pointShadow,Bt.hemisphereLights.value=N.state.hemi,Bt.directionalShadowMap.value=N.state.directionalShadowMap,Bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Bt.spotShadowMap.value=N.state.spotShadowMap,Bt.spotLightMatrix.value=N.state.spotLightMatrix,Bt.spotLightMap.value=N.state.spotLightMap,Bt.pointShadowMap.value=N.state.pointShadowMap,Bt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Gt,z.uniformsList=null,Gt}function Fi(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=Or.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function ws(v,C){const H=K.get(v);H.outputColorSpace=C.outputColorSpace,H.batching=C.batching,H.batchingColor=C.batchingColor,H.instancing=C.instancing,H.instancingColor=C.instancingColor,H.instancingMorph=C.instancingMorph,H.skinning=C.skinning,H.morphTargets=C.morphTargets,H.morphNormals=C.morphNormals,H.morphColors=C.morphColors,H.morphTargetsCount=C.morphTargetsCount,H.numClippingPlanes=C.numClippingPlanes,H.numIntersection=C.numClipIntersection,H.vertexAlphas=C.vertexAlphas,H.vertexTangents=C.vertexTangents,H.toneMapping=C.toneMapping}function Oi(v,C,H,z,N){C.isScene!==!0&&(C=Ut),rt.resetTextureUnits();const J=C.fog,_t=z.isMeshStandardMaterial?C.environment:null,Tt=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:fs,Ct=(z.isMeshStandardMaterial?bt:Dt).get(z.envMap||_t),kt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Bt=!!H.morphAttributes.position,$t=!!H.morphAttributes.normal,ce=!!H.morphAttributes.color;let Ee=ri;z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ee=x.toneMapping);const ge=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,pe=ge!==void 0?ge.length:0,Ht=K.get(z),Me=p.state.lights;if(ee===!0&&(st===!0||v!==y)){const Xe=v===y&&z.id===E;j.setState(z,v,Xe)}let re=!1;z.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Me.state.version||Ht.outputColorSpace!==Tt||N.isBatchedMesh&&Ht.batching===!1||!N.isBatchedMesh&&Ht.batching===!0||N.isBatchedMesh&&Ht.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ht.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ht.instancing===!1||!N.isInstancedMesh&&Ht.instancing===!0||N.isSkinnedMesh&&Ht.skinning===!1||!N.isSkinnedMesh&&Ht.skinning===!0||N.isInstancedMesh&&Ht.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ht.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ht.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ht.instancingMorph===!1&&N.morphTexture!==null||Ht.envMap!==Ct||z.fog===!0&&Ht.fog!==J||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==j.numPlanes||Ht.numIntersection!==j.numIntersection)||Ht.vertexAlphas!==kt||Ht.vertexTangents!==Gt||Ht.morphTargets!==Bt||Ht.morphNormals!==$t||Ht.morphColors!==ce||Ht.toneMapping!==Ee||Ht.morphTargetsCount!==pe)&&(re=!0):(re=!0,Ht.__version=z.version);let tn=Ht.currentProgram;re===!0&&(tn=Ze(z,C,N));let Bi=!1,en=!1,As=!1;const ye=tn.getUniforms(),cn=Ht.uniforms;if(V.useProgram(tn.program)&&(Bi=!0,en=!0,As=!0),z.id!==E&&(E=z.id,en=!0),Bi||y!==v){V.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ye.setValue(I,"projectionMatrix",v.projectionMatrix),ye.setValue(I,"viewMatrix",v.matrixWorldInverse);const je=ye.map.cameraPosition;je!==void 0&&je.setValue(I,Lt.setFromMatrixPosition(v.matrixWorld)),U.logarithmicDepthBuffer&&ye.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ye.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,en=!0,As=!0)}if(N.isSkinnedMesh){ye.setOptional(I,N,"bindMatrix"),ye.setOptional(I,N,"bindMatrixInverse");const Xe=N.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ye.setValue(I,"boneTexture",Xe.boneTexture,rt))}N.isBatchedMesh&&(ye.setOptional(I,N,"batchingTexture"),ye.setValue(I,"batchingTexture",N._matricesTexture,rt),ye.setOptional(I,N,"batchingIdTexture"),ye.setValue(I,"batchingIdTexture",N._indirectTexture,rt),ye.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&ye.setValue(I,"batchingColorTexture",N._colorsTexture,rt));const hn=H.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&dt.update(N,H,tn),(en||Ht.receiveShadow!==N.receiveShadow)&&(Ht.receiveShadow=N.receiveShadow,ye.setValue(I,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(cn.envMap.value=Ct,cn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&C.environment!==null&&(cn.envMapIntensity.value=C.environmentIntensity),en&&(ye.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&sr(cn,As),J&&z.fog===!0&&$.refreshFogUniforms(cn,J),$.refreshMaterialUniforms(cn,z,Z,ht,p.state.transmissionRenderTarget[v.id]),Or.upload(I,Fi(Ht),cn,rt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Or.upload(I,Fi(Ht),cn,rt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ye.setValue(I,"center",N.center),ye.setValue(I,"modelViewMatrix",N.modelViewMatrix),ye.setValue(I,"normalMatrix",N.normalMatrix),ye.setValue(I,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Xe=z.uniformsGroups;for(let je=0,Qr=Xe.length;je<Qr;je++){const fi=Xe[je];qt.update(fi,tn),qt.bind(fi,tn)}}return tn}function sr(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function w(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,C,H){const z=K.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),K.get(v.texture).__webglTexture=C,K.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){const H=K.get(v);H.__webglFramebuffer=C,H.__useDefaultFramebuffer=C===void 0};const B=I.createFramebuffer();this.setRenderTarget=function(v,C=0,H=0){O=v,R=C,D=H;let z=!0,N=null,J=!1,_t=!1;if(v){const Ct=K.get(v);if(Ct.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(Ct.__webglFramebuffer===void 0)rt.setupRenderTarget(v);else if(Ct.__hasExternalTextures)rt.rebindTextures(v,K.get(v.texture).__webglTexture,K.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Bt=v.depthTexture;if(Ct.__boundDepthTexture!==Bt){if(Bt!==null&&K.has(Bt)&&(v.width!==Bt.image.width||v.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(v)}}const kt=v.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(_t=!0);const Gt=K.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Gt[C])?N=Gt[C][H]:N=Gt[C],J=!0):v.samples>0&&rt.useMultisampledRTT(v)===!1?N=K.get(v).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[H]:N=Gt,F.copy(v.viewport),W.copy(v.scissor),X=v.scissorTest}else F.copy(yt).multiplyScalar(Z).floor(),W.copy(zt).multiplyScalar(Z).floor(),X=Qt;if(H!==0&&(N=B),V.bindFramebuffer(I.FRAMEBUFFER,N)&&z&&V.drawBuffers(v,N),V.viewport(F),V.scissor(W),V.setScissorTest(X),J){const Ct=K.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,Ct.__webglTexture,H)}else if(_t){const Ct=C;for(let kt=0;kt<v.textures.length;kt++){const Gt=K.get(v.textures[kt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+kt,Gt.__webglTexture,H,Ct)}}else if(v!==null&&H!==0){const Ct=K.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ct.__webglTexture,H)}E=-1},this.readRenderTargetPixels=function(v,C,H,z,N,J,_t,Tt=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=K.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct){V.bindFramebuffer(I.FRAMEBUFFER,Ct);try{const kt=v.textures[Tt],Gt=kt.format,Bt=kt.type;if(!U.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-z&&H>=0&&H<=v.height-N&&(v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Tt),I.readPixels(C,H,z,N,Nt.convert(Gt),Nt.convert(Bt),J))}finally{const kt=O!==null?K.get(O).__webglFramebuffer:null;V.bindFramebuffer(I.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(v,C,H,z,N,J,_t,Tt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=K.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_t!==void 0&&(Ct=Ct[_t]),Ct)if(C>=0&&C<=v.width-z&&H>=0&&H<=v.height-N){V.bindFramebuffer(I.FRAMEBUFFER,Ct);const kt=v.textures[Tt],Gt=kt.format,Bt=kt.type;if(!U.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Tt),I.readPixels(C,H,z,N,Nt.convert(Gt),Nt.convert(Bt),0);const ce=O!==null?K.get(O).__webglFramebuffer:null;V.bindFramebuffer(I.FRAMEBUFFER,ce);const Ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lu(I,Ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$t),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J),I.deleteBuffer($t),I.deleteSync(Ee),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,H=0){const z=Math.pow(2,-H),N=Math.floor(v.image.width*z),J=Math.floor(v.image.height*z),_t=C!==null?C.x:0,Tt=C!==null?C.y:0;rt.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,_t,Tt,N,J),V.unbindTexture()};const Q=I.createFramebuffer(),it=I.createFramebuffer();this.copyTextureToTexture=function(v,C,H=null,z=null,N=0,J=null){J===null&&(N!==0?(qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let _t,Tt,Ct,kt,Gt,Bt,$t,ce,Ee;const ge=v.isCompressedTexture?v.mipmaps[J]:v.image;if(H!==null)_t=H.max.x-H.min.x,Tt=H.max.y-H.min.y,Ct=H.isBox3?H.max.z-H.min.z:1,kt=H.min.x,Gt=H.min.y,Bt=H.isBox3?H.min.z:0;else{const hn=Math.pow(2,-N);_t=Math.floor(ge.width*hn),Tt=Math.floor(ge.height*hn),v.isDataArrayTexture?Ct=ge.depth:v.isData3DTexture?Ct=Math.floor(ge.depth*hn):Ct=1,kt=0,Gt=0,Bt=0}z!==null?($t=z.x,ce=z.y,Ee=z.z):($t=0,ce=0,Ee=0);const pe=Nt.convert(C.format),Ht=Nt.convert(C.type);let Me;C.isData3DTexture?(rt.setTexture3D(C,0),Me=I.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(rt.setTexture2DArray(C,0),Me=I.TEXTURE_2D_ARRAY):(rt.setTexture2D(C,0),Me=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);const re=I.getParameter(I.UNPACK_ROW_LENGTH),tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Bi=I.getParameter(I.UNPACK_SKIP_PIXELS),en=I.getParameter(I.UNPACK_SKIP_ROWS),As=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Gt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Bt);const ye=v.isDataArrayTexture||v.isData3DTexture,cn=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){const hn=K.get(v),Xe=K.get(C),je=K.get(hn.__renderTarget),Qr=K.get(Xe.__renderTarget);V.bindFramebuffer(I.READ_FRAMEBUFFER,je.__webglFramebuffer),V.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let fi=0;fi<Ct;fi++)ye&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,K.get(v).__webglTexture,N,Bt+fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,K.get(C).__webglTexture,J,Ee+fi)),I.blitFramebuffer(kt,Gt,_t,Tt,$t,ce,_t,Tt,I.DEPTH_BUFFER_BIT,I.NEAREST);V.bindFramebuffer(I.READ_FRAMEBUFFER,null),V.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||K.has(v)){const hn=K.get(v),Xe=K.get(C);V.bindFramebuffer(I.READ_FRAMEBUFFER,Q),V.bindFramebuffer(I.DRAW_FRAMEBUFFER,it);for(let je=0;je<Ct;je++)ye?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,N,Bt+je):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,N),cn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xe.__webglTexture,J,Ee+je):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xe.__webglTexture,J),N!==0?I.blitFramebuffer(kt,Gt,_t,Tt,$t,ce,_t,Tt,I.COLOR_BUFFER_BIT,I.NEAREST):cn?I.copyTexSubImage3D(Me,J,$t,ce,Ee+je,kt,Gt,_t,Tt):I.copyTexSubImage2D(Me,J,$t,ce,kt,Gt,_t,Tt);V.bindFramebuffer(I.READ_FRAMEBUFFER,null),V.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else cn?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Me,J,$t,ce,Ee,_t,Tt,Ct,pe,Ht,ge.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,J,$t,ce,Ee,_t,Tt,Ct,pe,ge.data):I.texSubImage3D(Me,J,$t,ce,Ee,_t,Tt,Ct,pe,Ht,ge):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,$t,ce,_t,Tt,pe,Ht,ge.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,$t,ce,ge.width,ge.height,pe,ge.data):I.texSubImage2D(I.TEXTURE_2D,J,$t,ce,_t,Tt,pe,Ht,ge);I.pixelStorei(I.UNPACK_ROW_LENGTH,re),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Bi),I.pixelStorei(I.UNPACK_SKIP_ROWS,en),I.pixelStorei(I.UNPACK_SKIP_IMAGES,As),J===0&&C.generateMipmaps&&I.generateMipmap(Me),V.unbindTexture()},this.initRenderTarget=function(v){K.get(v).__webglFramebuffer===void 0&&rt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?rt.setTextureCube(v,0):v.isData3DTexture?rt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?rt.setTexture2DArray(v,0):rt.setTexture2D(v,0),V.unbindTexture()},this.resetState=function(){R=0,D=0,O=null,V.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}const Ec={type:"change"},al={type:"start"},wh={type:"end"},Cr=new Za,Tc=new $n,U0=Math.cos(70*Cu.DEG2RAD),we=new A,Je=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oo=1e-6;class N0 extends Kf{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new A,this.cursor=new A,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new A,this._lastQuaternion=new Pi,this._lastTargetPosition=new A,this._quat=new Pi().setFromUnitVectors(t.up,new A(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new La,this._sphericalDelta=new La,this._scale=1,this._panOffset=new A,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new A,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O0.bind(this),this._onPointerDown=F0.bind(this),this._onPointerUp=B0.bind(this),this._onContextMenu=X0.bind(this),this._onMouseWheel=H0.bind(this),this._onKeyDown=V0.bind(this),this._onTouchStart=G0.bind(this),this._onTouchMove=W0.bind(this),this._onMouseDown=z0.bind(this),this._onMouseMove=k0.bind(this),this._interceptControlDown=q0.bind(this),this._interceptControlUp=Y0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ec),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Je:n>Math.PI&&(n-=Je),s<-Math.PI?s+=Je:s>Math.PI&&(s-=Je),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new A(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new A(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Cr.origin.copy(this.object.position),Cr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Cr.direction))<U0?this.object.lookAt(this.target):(Tc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Cr.intersectPlane(Tc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Oo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oo||this._lastTargetPosition.distanceToSquared(this.target)>Oo?(this.dispatchEvent(Ec),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Je/60*this.autoRotateSpeed*t:Je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Je*this._rotateDelta.x/e.clientHeight),this._rotateUp(Je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function F0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function O0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function B0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(wh),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function z0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case ss.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case ss.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(al)}function k0(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function H0(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(al),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(wh))}function V0(i){this.enabled!==!1&&this._handleKeyDown(i)}function G0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(al)}function W0(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function X0(i){this.enabled!==!1&&i.preventDefault()}function q0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z0(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Oe;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(const h in r){const u=bc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let M=0;M<o[h].length;++M)f.push(o[h][M][d]);const g=bc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function bc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new pn(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const M=h.getComponent(d,g);a.setComponent(d+u,g,M)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const j0=new Wf;function Ai(i,t=[1,1],{tile:e=!0,offset:n=[0,0]}={}){const s=j0.load(`./textures/${i}.jpg`,()=>dispatchEvent(new Event("scene-dirty")));return s.colorSpace=Ce,s.wrapS=s.wrapT=e?Ri:ni,s.repeat.set(...t),s.offset.set(...n),s.anisotropy=8,s}const $e=Math.PI*2;function K0(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Te=K0(33120);function Ms(i,t,e=[1,1]){const n=document.createElement("canvas");n.width=n.height=i;const s=n.getContext("2d");t(s,i);const r=new vs(n);return r.colorSpace=Ce,r.wrapS=r.wrapT=Ri,r.repeat.set(...e),r.anisotropy=8,r}function J0(){return Ms(512,(i,t)=>{i.fillStyle="#b8aa96",i.fillRect(0,0,t,t);const e=32,n=86,s=["#a96f58","#b67a60","#9e644f","#bd8267","#a56b55","#c08a70"];for(let r=-1;r<t/e+1;r++){const o=r&1?-n/2:0;for(let a=o;a<t;a+=n){const l=2+Te()*1.5;i.fillStyle=s[Math.floor(Te()*s.length)],i.fillRect(a+l,r*e+l,n-l*2,e-l*2),i.fillStyle=`rgba(255,225,195,${.025+Te()*.05})`,i.fillRect(a+l,r*e+l,n-l*2,2);for(let c=0;c<7;c++)i.fillStyle=`rgba(65,35,25,${Te()*.08})`,i.fillRect(a+Te()*n,r*e+Te()*e,2+Te()*6,1)}}},[3.2,3.2])}function $0(){return Ms(256,(i,t)=>{i.fillStyle="#d9cfb9",i.fillRect(0,0,t,t);for(let e=0;e<7e3;e++){const n=Te()>.5?255:70;i.fillStyle=`rgba(${n},${n},${n},${Te()*.035})`,i.fillRect(Te()*t,Te()*t,1+Te()*2,1+Te()*2)}},[2,2])}function wc(i,t,e,n,s){return Ms(512,(r,o)=>{r.fillStyle=i,r.fillRect(0,0,o,o);for(let a=0;a<o/e+1;a++)for(let l=-(a%2)*n/2;l<o;l+=n)r.fillStyle=t[Math.floor(Te()*t.length)],r.fillRect(l+1,a*e+1,n-2,e-2),r.fillStyle=`rgba(30,12,8,${s})`,r.fillRect(l+1,a*e+e-5,n-2,4),r.fillStyle="rgba(255,220,190,.07)",r.fillRect(l+2,a*e+2,n-4,1)},[3,5])}function Q0(){return Ms(256,(i,t)=>{i.fillStyle="#c9bca4",i.fillRect(0,0,t,t);const e=["#4a2e22","#5b3a2a","#3d261d","#6a4532","#54362a","#2f211b"];for(let n=0;n<260;n++){const s=14+Te()*26,r=9+Te()*14,o=Te()*t,a=Te()*t;i.fillStyle=e[Math.floor(Te()*e.length)],i.beginPath(),i.ellipse(o,a,s/2,r/2,Te()*.5-.25,0,$e),i.fill()}},[6,1])}function t_(){const i=document.createElement("canvas");i.width=1024,i.height=512;const t=i.getContext("2d");t.fillStyle="#e4dbc4",t.fillRect(0,0,1024,512);for(let s=0;s<1024;s+=32)t.fillStyle=`rgba(90,70,45,${.05+Te()*.05})`,t.fillRect(s,0,2,512);t.strokeStyle="#8c4a38",t.lineWidth=9,t.strokeRect(24,24,976,464),t.beginPath();for(let s=0;s<8;s++){const r=s*$e/8+Math.PI/8;t.lineTo(512+Math.cos(r)*230,256+Math.sin(r)*175)}t.closePath(),t.stroke();for(const s of[70,790])t.strokeRect(s,70,164,372);t.lineWidth=4,t.strokeStyle="#a8644a";for(const s of[88,808])t.strokeRect(s,88,128,336);t.beginPath(),t.ellipse(512,256,120,86,0,0,$e),t.stroke();function e(s,r,o,a,l){t.strokeStyle=l,t.lineWidth=6,t.beginPath(),t.arc(s,r,o,Math.PI*(a?.1:1.1),Math.PI*(a?1.6:2.6)),t.stroke(),t.beginPath(),t.arc(s+o*1.8*(a?-1:1),r+o*.4,o*.7,0,Math.PI*1.4),t.stroke(),t.fillStyle=l,t.beginPath(),t.ellipse(s+o*.9*(a?-1:1),r-o*.9,o*.5,o*.22,.6,0,$e),t.fill()}for(const[s,r,o,a,l]of[[300,120,30,0,"#5f7f8c"],[724,120,30,1,"#5f7f8c"],[300,392,30,0,"#b0823a"],[724,392,30,1,"#b0823a"],[152,170,22,0,"#b0823a"],[872,170,22,1,"#b0823a"],[152,342,22,0,"#5f7f8c"],[872,342,22,1,"#5f7f8c"],[430,256,24,1,"#5f7f8c"],[594,256,24,0,"#5f7f8c"]])e(s,r,o,a,l);t.fillStyle="#6d8796",t.beginPath(),t.ellipse(512,256,52,36,0,0,$e),t.fill(),t.fillStyle="#e9e1cc",t.beginPath(),t.ellipse(512,262,15,26,0,0,$e),t.fill();const n=new vs(i);return n.colorSpace=Ce,n.anisotropy=8,n}function e_(){return Ms(512,(i,t)=>{i.fillStyle="#6e4a36",i.fillRect(0,0,t,t);const e=["#9c5a3c","#a8653f","#8b4f37","#b37350","#7f4733","#a26a4c"];i.save(),i.translate(t/2,t/2),i.rotate(Math.PI/4),i.translate(-t,-t);for(let n=0;n<t*2;n+=46)for(let s=0;s<t*2;s+=46)i.fillStyle=e[Math.floor(Te()*e.length)],i.fillRect(n+2,s+2,42,42);i.restore()},[3,2])}function n_(){return Ms(256,(i,t)=>{i.fillStyle="#b4c0c2",i.fillRect(0,0,t,t),i.strokeStyle="#c9a85a",i.lineWidth=4,i.strokeRect(26,30,t-52,t-60),i.strokeStyle="rgba(255,255,255,.35)",i.lineWidth=2,i.strokeRect(36,40,t-72,t-80)},[4,1])}function i_(){const i=document.createElement("canvas");i.width=1024,i.height=256;const t=i.getContext("2d");t.strokeStyle="#141414",t.lineCap="round",t.lineWidth=5,t.strokeRect(4,4,1016,248),t.lineWidth=3;for(let n=32;n<1024;n+=48)t.beginPath(),t.moveTo(n,6),t.lineTo(n,250),t.stroke();for(let n=56;n<1024;n+=96)t.beginPath(),t.arc(n,40,14,Math.PI*.2,Math.PI*1.8),t.stroke(),t.beginPath(),t.arc(n,216,14,Math.PI*1.2,Math.PI*2.8),t.stroke();t.lineWidth=4,t.beginPath(),t.moveTo(0,20),t.lineTo(1024,20),t.moveTo(0,236),t.lineTo(1024,236),t.stroke();const e=new vs(i);return e.colorSpace=Ce,e}function s_(){const i=document.createElement("canvas");i.width=256,i.height=384;const t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,384);e.addColorStop(0,"#5a5040"),e.addColorStop(1,"#2c2620"),t.fillStyle=e,t.fillRect(0,0,256,384),t.fillStyle="rgba(240,210,130,.55)",t.beginPath(),t.arc(128,105,46,0,$e),t.fill(),t.fillStyle="#e8d6bd",t.beginPath(),t.ellipse(128,110,22,27,0,0,$e),t.fill(),t.fillStyle="#35588a",t.beginPath(),t.moveTo(128,82),t.quadraticCurveTo(64,160,72,350),t.lineTo(184,350),t.quadraticCurveTo(192,160,128,82),t.fill(),t.fillStyle="#c6574a",t.beginPath(),t.moveTo(110,150),t.lineTo(146,150),t.lineTo(154,350),t.lineTo(102,350),t.fill();const n=new vs(i);return n.colorSpace=Ce,n}function r_(i){const t=i.attributes.position,e=i.attributes.normal,n=new Float32Array(t.count*2);for(let s=0;s<t.count;s++){const r=t.getX(s),o=t.getY(s),a=t.getZ(s),l=Math.abs(e.getX(s)),c=Math.abs(e.getY(s)),h=Math.abs(e.getZ(s));c>=l&&c>=h?(n[s*2]=r,n[s*2+1]=a):l>=h?(n[s*2]=a,n[s*2+1]=o):(n[s*2]=r,n[s*2+1]=o)}i.setAttribute("uv",new pn(n,2))}function Ia(i,t=new Set){i.updateMatrixWorld(!0);const e=new Map;i.traverse(n=>{if(!n.isMesh)return;const s=n.geometry.index?n.geometry.toNonIndexed():n.geometry.clone();for(const r of Object.keys(s.attributes))["position","normal","uv"].includes(r)||s.deleteAttribute(r);s.applyMatrix4(n.matrixWorld),t.has(n.material)&&s.attributes.normal&&r_(s),e.has(n.material)||e.set(n.material,[]),e.get(n.material).push(s)}),i.clear();for(const[n,s]of e){const r=new _e(Z0(s,!1),n);r.castShadow=!0,r.receiveShadow=!0,i.add(r),s.forEach(o=>o.dispose())}}function o_(){const i=new me;i.name="Église Notre-Dame d’Arcachon";const t=new me;t.name="Chapelle des Marins";let e=i;J0();const n=$0(),s=wc("#4a2f27",["#6b4033","#74463a","#623a2f","#7a4b3c","#5e372c"],22,30,.22),r=wc("#7a3d26",["#b2603f","#c06a45","#a85a3a","#bb7350","#9f5034"],40,22,.28);Q0();const o={brick:new Ft({map:Ai("brique",[.8,.8]),roughness:.9,color:16774382}),stone:new Ft({map:Ai("pierre",[.55,.4]),roughness:.83,color:16775920}),stoneDark:new Ft({color:8551535,roughness:.96}),roof:new Ft({map:s,roughness:.86,color:15917786}),canal:new Ft({map:r,roughness:.88,color:16180440}),spire:new Ft({map:n,roughness:.86,color:14867661}),ironstone:new Ft({map:Ai("garluche",[.45,.9]),roughness:.97}),rubble:new Ft({map:Ai("moellons",[.5,.35]),roughness:.97}),plaque:new Ft({color:16052972,roughness:.5}),glass:new Ft({color:1521732,roughness:.3,metalness:.12,emissive:463640,emissiveIntensity:.35}),glassBlue:new Ft({color:3235186,roughness:.28,metalness:.08,emissive:728361,emissiveIntensity:.45}),door:new Ft({color:5906998,roughness:.6,side:Ge}),doorway:new Ft({color:1446159,roughness:1}),white:new Ft({color:15855592,roughness:.7}),rail:new Ft({color:1908510,roughness:.5,metalness:.4}),metal:new Ft({color:2698283,roughness:.48,metalness:.58}),clock:new Ft({color:15985881,roughness:.55}),statue:new Ft({color:15263711,roughness:.78,side:Ge}),blue:new Ft({color:4163268,roughness:.55,side:Ge})};function a(w,B,Q=e,it=!0){const v=new _e(w,B);return v.castShadow=it,v.receiveShadow=!0,Q.add(v),v}function l(w,B,Q,it,v,C,H=o.stone,z=e){const N=a(new hi(w,B,Q),H,z);return N.position.set(it,v,C),N}function c(w,B,Q,it,v,C,H,z,N=e){const J=a(new Fe(w,B,Q,it),z,N);return J.position.set(v,C,H),J}function h(w,B,Q,it=0){const v=Math.min(B*.82,Q*.46),C=it+Q-v;return w.moveTo(-B/2,it),w.lineTo(-B/2,C),w.quadraticCurveTo(-B/2,it+Q-v*.23,0,it+Q),w.quadraticCurveTo(B/2,it+Q-v*.23,B/2,C),w.lineTo(B/2,it),w.closePath(),w}function u(w,B,Q,it=o.stone){const v=h(new Ne,w,B),C=h(new Ys,w-Q*2,B-Q*1.65,Q);return v.holes.push(C),a(new fn(v,20),it,new me,!1)}function d(w,B,Q={}){const it=new me,v=u(w,B,Q.frame||.24);it.add(v);const C=h(new Ne,w-.34,B-.31,.16),H=a(new fn(C,20),Q.blue?o.glassBlue:o.glass,it,!1);if(H.position.z=.018,l(w+.28,.17,.24,0,-.03,.07,o.stone,it),Q.mullion!==!1&&l(.11,B*.66,.12,0,B*.34,.1,o.stone,it),Q.louvers)for(let z=0;z<7;z++){const N=l(w-.42,.12,.15,0,.48+z*(B*.54/7),.13,o.metal,it);N.rotation.x=-.18}return it}function f(w,B,Q={}){const it=new me,v=u(w,B,.27);v.position.z=.015,it.add(v);const C=(w-.62)/2;for(const H of[-1,1]){const z=d(C,B*.76,{frame:.15,mullion:!1,louvers:Q.louvers,blue:Q.blue});z.position.set(H*(C/2+.08),.12,.045),it.add(z)}if(l(.18,B*.76,.2,0,B*.38,.14,o.stone,it),Q.quatrefoil){const H=g(w*.15);H.position.set(0,B*.82,.13),it.add(H)}return it}function g(w){const B=new me;for(let Q=0;Q<4;Q++){const it=Q*Math.PI/2,v=a(new Bn(w*.62,20),o.glass,B,!1);v.position.set(Math.cos(it)*w*.55,Math.sin(it)*w*.55,0);const C=a(new bn(w*.62,w*.1,6,24),o.stone,B,!1);C.position.copy(v.position),C.position.z=.03}return B}function M(w){const B=new me,Q=a(new Bn(w*.92,64),o.glassBlue,B,!1);Q.position.z=.01;for(const[v,C]of[[w,.19],[w*.86,.1],[w*.25,.09]]){const H=a(new bn(v,C,8,64),o.stone,B,!1);H.position.z=.08}for(let v=0;v<8;v++){const C=v*$e/8,H=w*.53,z=a(new Bn(w*.225,24),v%2?o.glass:o.glassBlue,B,!1);z.scale.set(.78,1.22,1),z.rotation.z=C-Math.PI/2,z.position.set(Math.cos(C)*H,Math.sin(C)*H,.055);const N=a(new bn(w*.225,.065,6,28),o.stone,B,!1);N.scale.copy(z.scale),N.rotation.z=z.rotation.z,N.position.copy(z.position),N.position.z=.11;const J=l(.075,w*.49,.09,Math.cos(C)*w*.68,Math.sin(C)*w*.68,.12,o.stone,B);J.rotation.z=C-Math.PI/2}const it=a(new Bn(w*.17,28),o.glass,B,!1);return it.position.z=.14,B}function m(w){const B=new me,Q=a(new Bn(w,48),o.clock,B,!1);Q.position.z=.03;const it=a(new bn(w,.1,8,48),o.stone,B,!1);it.position.z=.08;for(let H=0;H<12;H++){const z=H*$e/12,N=l(H%3?.035:.055,w*.16,.04,Math.sin(z)*w*.76,Math.cos(z)*w*.76,.1,o.metal,B);N.rotation.z=-z}const v=l(.065,w*.52,.06,-.12,.16,.13,o.metal,B);v.rotation.z=.65;const C=l(.045,w*.72,.06,.2,.23,.14,o.metal,B);return C.rotation.z=-.72,B}function p(w,B,Q,it,v,C,H=0,z=o.roof,N=e){const J=new me;J.position.set(v,0,C),J.rotation.y=H,N.add(J);const _t=it-Q,Tt=w/2,Ct=Math.hypot(Tt,_t),kt=Math.atan2(_t,Tt);for(const Bt of[-1,1]){const $t=l(Ct+.35,.22,B+.5,Bt*Tt/2,(Q+it)/2,0,z,J);$t.rotation.z=-Bt*kt;const ce=c(.09,.09,B+.6,8,Bt*(Tt+.08),Q-.03,0,o.metal,J);ce.rotation.x=Math.PI/2}const Gt=c(.13,.13,B+.55,8,0,it+.08,0,z,J);return Gt.rotation.x=Math.PI/2,J}function T(w,B,Q,it,v,C,H=0,z=o.brick,N=e){const J=new Ne;J.moveTo(-w/2,B),J.lineTo(w/2,B),J.lineTo(w/2,Q),J.lineTo(0,it),J.lineTo(-w/2,Q),J.closePath();const _t=a(new Ti(J,{depth:.35,bevelEnabled:!1}),z,N);return _t.position.set(v,0,C),_t.rotation.y=H,_t}function S(w,B,Q=e){const it=new me;Q.add(it);const v=(H,z,N)=>(N.moveTo(-H/2,0),N.lineTo(-H/2,z-H/2),N.absarc(0,z-H/2,H/2,Math.PI,0,!0),N.lineTo(H/2,0),N.closePath(),N);a(new fn(v(w,B,new Ne),16),o.glass,it,!1).position.z=.01;const C=v(w+.36,B+.18,new Ne);return C.holes.push(v(w,B,new Ys)),a(new fn(C,16),o.stone,it,!1).position.z=.03,it}function x(w,B,Q){const it=new me;Q.add(it);const v=new Ne;v.moveTo(-w/2,0),v.lineTo(0,B),v.lineTo(w/2,0),v.lineTo(w/2-.3,0),v.lineTo(0,B-.45),v.lineTo(-w/2+.3,0),v.closePath(),a(new Ti(v,{depth:.28,bevelEnabled:!1}),o.stone,it);const C=new Ne;C.moveTo(-w/2+.3,0),C.lineTo(0,B-.45),C.lineTo(w/2-.3,0),C.closePath(),a(new Ti(C,{depth:.12,bevelEnabled:!1}),o.stone,it);const H=6,z=Math.atan2(B,w/2);for(const _t of[-1,1])for(let Tt=1;Tt<=H;Tt++){const Ct=Tt/(H+1),kt=a(new Ae(.09,.32,6),o.stone,it);kt.position.set(_t*(w/2)*(1-Ct),B*Ct+.12,.16),kt.rotation.z=_t*(Math.PI/2-z)*-1+_t*.5}a(new Ae(.12,.5,6),o.stone,it).position.set(0,B+.25,.14);const J=g(.22);return J.position.set(0,B*.38,.3),it.add(J),it}function L(w,B,Q,it,v=1,C=e){const H=.5*v;for(let z=0,N=Q+H/2;N<it;z++,N+=H+.04){const J=z%2===0;l(J?1.15*v:.62*v,H,J?.62*v:1.15*v,w,N,B,o.stone,C)}}function R(w,B,Q,it,v,C,H,z=.3){const N=new me;N.position.set(v,0,C),N.rotation.y=H,i.add(N);const J=new Ne;J.moveTo(-w/2,B),J.lineTo(w/2,B),J.lineTo(w/2,Q),J.lineTo(0,it),J.lineTo(-w/2,Q),J.closePath(),a(new Ti(J,{depth:.3,bevelEnabled:!1}),o.stone,N);for(const Tt of[-1,1]){l(.34,it-Q+.6,.4,Tt*(w/2+.02),Q-.2,.18,o.stone,N);const Ct=a(new Ae(.24,.9,4),o.stone,N);Ct.position.set(Tt*(w/2+.02),Q+.55,.18),Ct.rotation.y=Math.PI/4}const _t=g(z);return _t.position.set(0,Q+(it-Q)*.38,.34),N.add(_t),N}function D(w,B,Q,it=1,v=e){const C=new me;return C.position.set(w,B,Q),C.scale.setScalar(it),v.add(C),l(.12,1.25,.12,0,.55,0,o.metal,C),l(.72,.12,.12,0,.78,0,o.metal,C),C}l(32,1.8,39,0,.9,-9.5,o.stoneDark);for(let w=0;w<9;w++){const B=17.2-w*.84,Q=9.45,it=(w+1)*.2;l(20.8-w*.06,it,B-Q,0,it/2,(B+Q)/2,o.stone),l(20.9-w*.06,.055,.16,0,it+.025,B-.08,o.stoneDark)}for(const w of[-1,1]){const B=l(.65,.65,8.4,w*10.65,.72,13.25,o.stone);B.rotation.x=-.2,c(.48,.58,1,12,w*10.65,1.65,9.6,o.stone),a(new vn(.47,16,12),o.stone).position.set(w*10.65,2.28,9.6)}const O=(()=>{const w=document.createElement("canvas");w.width=256,w.height=64;const B=w.getContext("2d");B.fillStyle="#1d1f1e",B.fillRect(0,2,256,5),B.fillRect(0,56,256,5);for(let it=4;it<256;it+=16)B.fillRect(it,2,3,59);const Q=new vs(w);return Q.wrapS=Ri,Q})(),E=new Ft({map:O,alphaMap:O,alphaTest:.5,transparent:!1,color:1908510,side:Ge});function y(w,B,Q,it){const v=Math.hypot(Q-w,it-B),C=Math.max(1,Math.round(v/4.2));for(let N=0;N<=C;N++){const J=w+(Q-w)*N/C,_t=B+(it-B)*N/C;l(.42,1,.42,J,2.3,_t,o.white),l(.52,.12,.52,J,2.86,_t,o.white);const Tt=a(new vn(.2,12,8),o.white);Tt.position.set(J,3.08,_t),Tt.scale.y=.8}const H=new oi(v,.8);H.attributes.uv.array.forEach((N,J,_t)=>{J%2===0&&(_t[J]=N*v/1.2)});const z=a(H,E,i,!1);z.position.set((w+Q)/2,2.25,(B+it)/2),z.rotation.y=-Math.atan2(it-B,Q-w)}y(15.85,-28.5,15.85,9.85),y(10.9,9.85,15.85,9.85),y(-15.85,9.85,-10.9,9.85),y(-15.85,-28.5,-15.85,-12),y(-15.85,3.2,-15.85,9.85),l(14,12.5,30,0,8.05,-9.5,o.brick);for(const w of[11.55,14.15])l(14.2,.2,30.1,0,w,-9.5,o.stone);T(14,1.8,14.3,20.4,0,5.35),T(14,1.8,14.3,20.4,0,-24.65,Math.PI),p(14.8,30.8,14.3,20.4,0,-9.5);for(const w of[-1,1]){l(4.1,6.4,28.5,w*9,5,-9.2,o.brick),p(4.6,29.1,8.2,10.35,w*9,-9.2,0,o.canal),l(4.3,.95,28.7,w*9,2.27,-9.2,o.ironstone);for(const B of[5.35,8.05])l(4.25,.18,28.6,w*9,B,-9.2,o.stone);for(const B of[1.2,-4.2,-9.6,-21.2]){const Q=d(1.65,3.8,{mullion:!1,blue:!0});Q.position.set(w*11.08,2.8,B),Q.rotation.y=w*Math.PI/2,i.add(Q);const it=d(1.15,2.9,{mullion:!1});it.position.set(w*7.08,10.6,B),it.rotation.y=w*Math.PI/2,i.add(it),l(.75,7.1,1.05,w*11.25,5.35,B-2.25,o.stone);const v=l(.95,.28,1.2,w*11.25,8.95,B-2.25,o.stone);v.rotation.z=w*.13,l(.52,4,.8,w*7.35,12.2,B-2.25,o.stone)}}l(30.4,11.8,8.5,0,7.7,-16,o.brick),l(30.6,.95,8.7,0,2.27,-16,o.ironstone),p(9.1,31,13.6,19.4,0,-16,Math.PI/2);for(const w of[-1,1]){const B=w*15.43,Q=w*.02,it=w*Math.PI/2;T(8.5,1.8,13.6,19.4,w*15.05,-16,it);const v=M(2.3);v.position.set(B,10.9,-16),v.rotation.y=it,i.add(v);const C=a(new bn(2.62,.3,8,64),o.stone);C.position.set(B+Q*4,10.9,-16),C.rotation.y=it;const H=u(7.3,11.9,.42);H.position.set(B+Q*3,3.75,-16),H.rotation.y=it,i.add(H);for(const z of[-3.48,3.48])l(.5,6.4,.5,B+Q*6,4.95,-16+z,o.stone),l(.62,.3,.62,B+Q*6,8.3,-16+z,o.stone);for(const z of[-.72,0,.72]){const N=d(.42,z===0?1.45:1.2,{mullion:!1,frame:.1});N.position.set(B,16.25,-16+z),N.rotation.y=it,i.add(N)}R(3.3,1.8,6.4,8.4,B-w*.08,-16,it,.5);for(const z of[-2.75,2.75])R(1.75,1.8,4.1,5.35,B-w*.1,-16+z,it,.22);l(.06,1.25,.9,B+w*.3,4.1,-16,o.plaque);for(const z of[-4.25,4.25])L(w*15.2,-16+z,1.8,13.5);D(w*15.15,19.55,-16,.8)}c(6.9,6.9,12.2,8,0,7.9,-25,o.brick),c(7,7,.95,8,0,2.27,-25,o.ironstone);const F=a(new Ae(7.35,6.3,8),o.roof);F.position.set(0,17.15,-25),F.rotation.y=Math.PI/8;for(let w=0;w<5;w++){const B=Math.PI*.55+w*Math.PI*.225,Q=d(1.35,3.7,{mullion:!1,blue:!0});Q.position.set(Math.sin(B)*6.65,7,-25+Math.cos(B)*6.65),Q.rotation.y=B,i.add(Q)}for(const w of[-1,1]){l(5.6,8.5,6,w*6.35,6.05,6,o.brick);const B=w>0?11.35:9.15;w>0&&(l(B-9.1,8.5,6,(B+9.1)/2,6.05,6,o.brick),l(B-9,.95,6.2,(B+9)/2,2.27,6,o.ironstone),L(B-.25,8.75,1.8,10.2)),T(6,1.8,10.3,12.3,w*(B-.35),6,w*Math.PI/2),p(6.5,B-3.55+.3,10.3,12.3,w*(B+3.55)/2,6,Math.PI/2),l(5.8,.32,.32,w*6.35,10.2,9.05,o.stone),L(w*8.9,3.25,1.8,10.2);const Q=f(2.15,4.7,{quatrefoil:!1,blue:!0});Q.position.set(w*6.35,3.2,9.24),i.add(Q);const it=M(.55);it.position.set(w*6.35,8.55,9.25),i.add(it),l(5.8,.95,6.2,w*6.35,2.27,6,o.ironstone),L(w*8.9,8.75,1.8,10.2)}const W=M(.5);W.position.set(-9.17,8.3,6),W.rotation.y=-Math.PI/2,i.add(W);const X=new me;X.position.set(11.37,0,6),X.rotation.y=Math.PI/2,i.add(X);for(const w of[-2.75,2.75]){l(.62,8.4,.5,w,6,.22,o.stone,X);const B=a(new Ae(.48,1.3,4),o.stone,X);B.position.set(w,10.85,.22),B.rotation.y=Math.PI/4;const Q=g(.12);Q.position.set(w,10.55,.5),X.add(Q)}for(const[w,B]of[[1.9,.9],[2.05,.6],[2.2,.3]])l(2.6,.15,B,0,w-.05,B/2,o.stone,X);a(new fn(h(new Ne,1.5,3,0),20),o.door,X).position.set(0,2.2,.03);for(const w of[-.36,.36]){const B=g(.12);B.position.set(w,4.25,.06),X.add(B)}for(const[w,B,Q]of[[1.95,3.35,.06],[2.35,3.6,.1]]){const it=u(w,B,.17);it.position.set(0,2.15,Q),X.add(it)}for(const w of[-1,1])for(const B of[1,1.17])c(.065,.075,2.1,8,w*B,3.25,.14,o.stone,X);x(2.9,2,X).position.set(0,4.3,.12);const et=M(.55);et.position.set(0,7.75,.05),X.add(et);const ht=[];for(let w=0;w<=24;w++){const B=-.35+w/24*(Math.PI+.7);ht.push(new A(Math.cos(B)*.98,7.75+Math.sin(B)*.98,.12))}a(new er(new Xr(ht),48,.09,8,!1),o.stone,X);for(const w of[-1,1])l(.22,.26,.22,w*.93,7.33,.14,o.stone,X);l(1,.35,.75,0,12.35,.1,o.stone,X);for(const w of[-.38,.38])for(const B of[-.22,.3])c(.05,.05,1.05,8,w,13.05,.1+B,o.stone,X);c(.13,.2,.62,10,0,12.85,.15,o.white,X),a(new vn(.1,12,8),o.white,X).position.set(0,13.25,.15),l(1.05,.14,.8,0,13.62,.1,o.stone,X);const pt=a(new Ae(.66,1.15,4),o.stone,X);pt.position.set(0,14.27,.1),pt.rotation.y=Math.PI/4,D(0,14.8,.1,.3,X),l(7.3,25,7.3,0,14.3,5.25,o.brick),l(7.5,.95,7.5,0,2.27,5.25,o.ironstone);for(const w of[9,19,25.7])l(7.65,.3,7.65,0,w,5.25,o.stone);for(const w of[-1,1])for(const B of[-1,1]){for(const[C,H,z]of[[1.45,1.8,12.4],[1.35,12.4,19],[1.22,19,26.45]]){const N=w*(3.65-C/2+.32),J=5.25+B*(3.65-C/2+.32);l(C,z-H,C,N,(H+z)/2,J,o.stone);const _t=l(C+.14,.22,C+.14,N,z-.05,J,o.stone);_t.rotation.y=0}const Q=w*3.3,it=5.25+B*3.3,v=a(new Ae(.66,1,4),o.stone);v.position.set(Q,26.7,it),v.rotation.y=Math.PI/4}c(.95,.95,14.6,16,4.1,19.1,1.3,o.stone);for(const w of[19])c(1.05,1.05,.25,16,4.1,w,1.3,o.stone);a(new Ae(1.05,2.4,16),o.spire).position.set(4.1,27.6,1.3);for(const w of[18,21.5,24.5])l(.05,.7,.22,5.03,w,1.3,o.glass);for(const w of[-1,1]){const B=f(2.4,4.6,{quatrefoil:!1});B.position.set(w*3.68,12.7,5.25),B.rotation.y=w*Math.PI/2,i.add(B);const Q=M(.62);Q.position.set(w*3.69,18.2,5.25),Q.rotation.y=w*Math.PI/2,i.add(Q)}const yt=new me;yt.position.set(0,1.8,9.02),yt.scale.x=.8,i.add(yt);for(let w=0;w<3;w++){const B=u(4.35+w*.48,6.15+w*.34,.22,o.stone);B.position.set(0,-.02*w,.04+w*.055),yt.add(B)}h(new Ne,3.82,5.72,0);const zt=new Ne;zt.moveTo(-1.91,0),zt.lineTo(1.91,0),zt.lineTo(1.91,3.9),zt.lineTo(-1.91,3.9),zt.closePath();const Qt=a(new fn(zt),o.doorway,yt),ie=new Ne;h(ie,3.82,5.72,0);const ee=a(new fn(ie,24),o.door,yt);ee.position.z=.025,Qt.position.z=.03,l(3.82,.12,.1,0,3.9,.06,o.door,yt);const st=g(.42);st.position.set(0,4.75,.08),yt.add(st);for(const w of[-1,1]){l(.09,3.85,1.85,w*1.88,1.93,.98,o.door,yt);for(let B=0;B<3;B++)c(.095,.11,4.25,10,w*(2.15+B*.22),2.15,.19+B*.04,o.stone,yt)}const ft=new Ne;ft.moveTo(-3.05,0),ft.lineTo(0,3),ft.lineTo(3.05,0),ft.closePath(),a(new Ti(ft,{depth:.34,bevelEnabled:!1}),o.stone,yt).position.set(0,6,.18);const Ot=g(.42);Ot.position.set(0,6.85,.56),yt.add(Ot),D(0,9,9.45,.55);const Ut=f(3.25,5.3,{quatrefoil:!0,blue:!0});Ut.position.set(0,9.65,9.02),i.add(Ut);const Xt=m(1.05);Xt.position.set(0,16.4,9.04),i.add(Xt);const le=u(4.25,9.3,.34);le.position.set(0,9.25,9.07),i.add(le);const I=f(3.45,4.5,{quatrefoil:!0,louvers:!0});I.position.set(0,20.3,9.03),i.add(I);for(const w of[-1,1]){const B=f(3.25,4.4,{quatrefoil:!0,louvers:!0});B.position.set(w*3.68,20.3,5.25),B.rotation.y=w*Math.PI/2,i.add(B)}l(8.15,.38,8.15,0,26.6,5.25,o.stone);for(let w=0;w<12;w++){const B=-3.6+w*7.2/11;l(.16,.68,.22,B,27.05,9.12,o.stone),l(.22,.68,.16,3.87,27.05,5.25+B,o.stone),l(.22,.68,.16,-3.87,27.05,5.25+B,o.stone)}for(const w of[-1,1])for(const B of[-1,1]){const Q=w*3.25,it=5.25+B*3.25;c(.42,.48,2.1,8,Q,27.6,it,o.stone);const v=a(new Ae(.67,2.5,4),o.stone);v.position.set(Q,29.8,it),v.rotation.y=Math.PI/4,D(Q,31.05,it,.26)}const ut=a(new Ae(3.75,18,8,1),o.spire);ut.position.set(0,36.2,5.25),ut.rotation.y=Math.PI/8;for(let w=0;w<8;w++){const B=w*$e/8+Math.PI/8;for(let Q=0;Q<16;Q++){const it=(Q+.6)/17,v=3.75*(1-it),C=a(new Ae(.13+(1-it)*.1,.5,5),o.stone);C.position.set(Math.cos(B)*(v+.12),27.2+it*18,5.25+Math.sin(B)*(v+.12)),C.rotation.set(0,-B,0),C.rotateZ(-Math.PI/2+.35)}}for(let w=0;w<4;w++){const B=.2+w*.17,Q=3.75*(1-B)*Math.cos(Math.PI/8)+.04;for(let it=0;it<8;it+=2){const v=it*$e/8+w%2*$e/8,C=g(.34-w*.04);C.position.set(Math.cos(v)*Q,27.2+B*18,5.25+Math.sin(v)*Q),C.rotation.y=Math.PI/2-v,i.add(C)}}D(0,45.25,5.25,.9);const lt=new Set([o.brick,o.stone,o.ironstone,o.rubble]);Ia(i,lt),e=t,l(3,4.6,3.4,12.6,4.1,-9.8,o.brick),l(3.2,.9,3.6,12.6,2.25,-9.8,o.ironstone),p(3.6,3.6,6.4,7.6,12.6,-9.8,Math.PI/2,o.canal),T(3.4,1.8,6.4,7.6,14.1,-9.8,Math.PI/2);const U=new me;U.position.set(14.47,1.8,-9.8),U.rotation.y=Math.PI/2,t.add(U),a(new fn(h(new Ne,1.5,2.8,0),16),o.door,U);const V=u(1.95,3.15,.2);V.position.z=.02,U.add(V);for(const w of[-1.55,1.55])L(14.15,-9.8+w,1.8,6.3,.7);const Y=new me;Y.position.set(17.6,0,-9.8),Y.rotation.y=Math.PI/2,t.add(Y);for(let w=0;w<4;w++)c(1.35-w*.25,1.4-w*.25,.2,24,0,.1+w*.2,0,o.stoneDark,Y);c(.42,.48,.5,16,0,1.05,0,o.stone,Y),c(.24,.27,3.4,16,0,3,0,o.stone,Y);for(const w of[1.5,3.4])c(.29,.29,.1,16,0,w,0,o.stone,Y);c(.42,.28,.3,16,0,4.85,0,o.stone,Y),l(.84,.12,.84,0,5.06,0,o.stone,Y);const K=a(new vn(.3,20,14),o.blue,Y);K.position.y=5.32,K.scale.y=.75;const rt=a(new Fe(.15,.27,1.25,16),o.statue,Y);rt.position.y=6.05;const Dt=a(new Fe(.13,.15,.35,16),o.statue,Y);Dt.position.y=6.82,a(new vn(.11,16,12),o.statue,Y).position.set(0,7.15,.02),a(new Fe(.14,.31,1.55,18,1,!0,Math.PI*.3,Math.PI*1.4),o.blue,Y).position.set(0,6.3,-.03),a(new vn(.135,16,10,Math.PI*.8,Math.PI*1.4,0,Math.PI*.62),o.blue,Y).position.set(0,7.17,0);for(const w of[-1,1]){c(.045,.06,.5,8,w*.22,6.62,.07,o.statue,Y).rotation.set(-.35,0,w*.55);const Q=c(.06,.085,.3,8,w*.17,6.76,.04,o.blue,Y);Q.rotation.z=w*.55,a(new vn(.045,8,6),o.statue,Y).position.set(w*.37,6.4,.14)}const P=11.2,G=19.4,$=-4.6,q=2.6,St=.45,j=1.8,Rt=6.6,mt=($+q)/2,dt=(P+G)/2,ct={render:new Ft({map:n,roughness:.95,color:14472906}),zinc:new Ft({color:9081492,roughness:.55,metalness:.3}),wall:new Ft({map:n_(),roughness:.85}),wainscot:new Ft({color:9346722,roughness:.8}),ceiling:new Ft({map:t_(),roughness:.9,side:Ge}),floor:new Ft({map:e_(),roughness:.85}),gold:new Ft({color:13739590,roughness:.38,metalness:.45,emissive:4008456,emissiveIntensity:.55}),painting:new Ft({map:s_(),roughness:.7}),marble:new Ft({color:15526112,roughness:.35}),wood:new Ft({color:8014378,roughness:.6}),iron:new Ft({map:i_(),alphaTest:.5,side:Ge,roughness:.5,metalness:.4,color:2763306}),daylight:new Ft({color:12572388,emissive:10272984,emissiveIntensity:.9,roughness:.3}),candle:new Ft({color:16773846,emissive:16761963,emissiveIntensity:1.6}),glass:new Ft({color:14675694,roughness:.05,metalness:.1,transparent:!0,opacity:.14,depthWrite:!1}),slate:new Ft({color:4935504,roughness:.6}),white:new Ft({color:16185074,roughness:.6})},ot=t;l(G-P,j,q-$,dt,j/2,mt,o.rubble,ot),l(G-P,Rt,St,dt,Rt/2,$+St/2,o.rubble,ot),l(G-P,Rt,St,dt,Rt/2,q-St/2,o.rubble,ot),l(St,Rt,q-$,G-St/2,Rt/2,mt,o.rubble,ot);const Nt=j+3;l(St,j,q-$,P+St/2,j/2,mt,o.rubble,ot),l(St,Rt-Nt,q-$,P+St/2,(Rt+Nt)/2,mt,o.rubble,ot);const wt=a(new Fe(.16,Math.SQRT2,1.7,4,1),o.canal,ot);wt.rotation.y=Math.PI/4,wt.scale.set((G-P)/2+.4,1,(q-$)/2+.4),wt.position.set(dt,Rt+.85-.05,mt);for(const w of[$,q])L(G-.2,w+(w===q?-.2:.2),0,Rt,.9,ot),l(G-P+.1,.22,.62,dt,Rt-.1,w,o.stone,ot);const qt=S(.6,1.5,ot);qt.position.set(G+.01,3.2,mt),qt.rotation.y=Math.PI/2;for(const w of[13.9,17.2])S(.6,1.55,ot).position.set(w,3.2,q+.01);{const w=S(.6,1.55,ot);w.position.set(15.6,3.2,$-.01),w.rotation.y=Math.PI}const k=11.05,gt=12.55,Mt=-8.05,It=$-.05;l(gt-k,3,It-Mt,(k+gt)/2,j+1.5,(Mt+It)/2,ct.render,ot);const xt=l(gt-k+.3,.16,It-Mt+.1,(k+gt)/2+.05,j+3.08,(Mt+It)/2,ct.zinc,ot);xt.rotation.z=-.06,l(.12,.3,It-Mt,gt+.02,j+2.86,(Mt+It)/2,o.stone,ot);for(const w of[-7.25,-5.65]){l(.1,1.55,1.55,gt+.02,j+1.45,w,o.stone,ot);for(const B of[-.46,0,.46]){const Q=d(.34,1.2,{mullion:!1,frame:.07});Q.position.set(gt+.08,j+.78,w+B),Q.rotation.y=Math.PI/2,ot.add(Q)}}l(.05,.7,.34,gt+.03,j+1.5,-4.86,o.plaque,ot);const at=P+St,Pt=G-St,Vt=$+St,se=q-St,Zt=se-Vt,xe=5.6,Ie=1;l(Pt-at,.04,Zt,dt,j+.02,mt,ct.floor,ot);for(const[w,B]of[[Vt+.03,1],[se-.03,-1]]){l(Pt-at,xe-j,.05,dt,(j+xe)/2,w,ct.wall,ot),l(Pt-at,.95,.07,dt,j+.48,w+B*.02,ct.wainscot,ot),l(Pt-at,.12,.14,dt,xe-.05,w+B*.04,ct.gold,ot);const Q=a(new fn(h(new Ne,.62,2.1,0),16),ct.daylight,ot,!1);Q.position.set(15.6,3.3,w+B*.04),Q.rotation.y=B>0?0:Math.PI;const it=u(.82,2.3,.14);it.position.set(15.6,3.2,w+B*.05),it.rotation.y=Q.rotation.y,ot.add(it),l(.95,.1,.16,15.6,3.18,w+B*.08,o.stone,ot)}l(.05,xe+Ie+.2-j,Zt,Pt-.03,(j+xe+Ie+.2)/2,mt,ct.wall,ot),l(.07,.95,Zt,Pt-.05,j+.48,mt,ct.wainscot,ot),l(.05,xe+Ie+.2-Nt,Zt,at+.03,(xe+Ie+.2+Nt)/2,mt,ct.wall,ot);const an=P+St/2;l(.03,Nt-j,q-$-.1,an,(j+Nt)/2,mt,ct.glass,ot);for(const w of[$+.1,mt-1.15,mt,mt+1.15,q-.1])l(.06,Nt-j,.05,an,(j+Nt)/2,w,o.metal,ot);l(.08,.08,q-$,an,Nt-.04,mt,o.metal,ot),l(.08,.05,q-$,an,j+.03,mt,o.metal,ot);for(const w of[-1,1]){const B=mt+w*.32;l(.035,.035,.62,an-.1,j+1.15,B,ct.gold,ot);for(const Q of[-.29,.29])l(.1,.03,.03,an-.05,j+1.15,B+Q,ct.gold,ot);l(.01,.05,.15,an-.02,j+1.38,B,ct.slate,ot)}for(let w=$+.25;w<q-.1;w+=.26)l(.006,.13,.025,an-.02,j+.92,w,ct.white,ot),l(.006,.025,.09,an-.02,j+.95,w,ct.white,ot);l(.04,.45,Zt,P-.02,Nt+.2,mt,ct.render,ot);const ln=((Zt/2)**2+Ie**2)/(2*Ie),Ni=Math.asin(Zt/2/ln),Ts=a(new Fe(ln,ln,Pt-at,48,1,!0,Math.PI/2-Ni,Ni*2),ct.ceiling,ot);Ts.rotation.z=Math.PI/2,Ts.position.set(dt,xe+Ie-ln,mt);for(let w=0;w<5;w++)for(const B of[Vt+1.35,se-1.35]){const Q=at+1+w*.78;l(.38,.07,2.2,Q,j+.45,B,ct.wood,ot),l(.06,.5,2.2,Q-.2,j+.78,B,ct.wood,ot);for(const it of[-1.08,1.08])l(.5,.9,.07,Q-.02,j+.45,B+it,ct.wood,ot)}const En=16.1;l(Pt-En,.16,Zt,(En+Pt)/2,j+.08,mt,o.stone,ot),l(.32,.85,Zt,En,j+.43,mt,ct.wainscot,ot),l(.4,.08,Zt,En,j+.88,mt,o.stone,ot);const ui=a(new oi(Zt,1.9),ct.iron,ot,!1);ui.position.set(En,j+1.83,mt),ui.rotation.y=Math.PI/2;const bs=a(new oi(1.6,.45),ct.iron,ot,!1);bs.position.set(En,j+3.03,mt),bs.rotation.y=Math.PI/2;for(const w of[-.8,.8])l(.06,2.4,.06,En,j+2.05,mt+w,o.metal,ot);const Ze=Pt-.08;l(.75,1,2.2,Ze-.55,j+.66,mt,ct.marble,ot),l(.5,.55,.8,Ze-.3,j+1.43,mt,ct.gold,ot),l(.06,2,1.25,Ze-.02,j+2.85,mt,ct.painting,ot),l(.1,2.3,1.55,Ze+.01,j+2.85,mt,ct.gold,ot);for(const w of[-1.2,-.95,.95,1.2])c(.09,.1,2.7,12,Ze-.25,j+2.65,mt+w,ct.gold,ot);l(.45,.3,3,Ze-.2,j+4.15,mt,ct.gold,ot);const Fi=a(new Ae(1.5,.9,3),ct.gold,ot);Fi.position.set(Ze-.15,j+4.75,mt),Fi.rotation.set(Math.PI/2,0,Math.PI/2),Fi.scale.set(1,.12,1);const ws=a(new bn(.32,.06,8,24),ct.gold,ot);ws.position.set(Ze-.15,j+4.85,mt),ws.rotation.y=Math.PI/2;for(const[w,B]of[[Vt+.08,1],[se-.08,-1]]){l(1.3,.9,.5,17.55,j+.45,w+B*.25,ct.marble,ot),l(.95,1.5,.05,17.55,j+2.15,w+B*.02,ct.painting,ot),l(1.25,1.85,.07,17.55,j+2.15,w,ct.gold,ot);for(const Q of[-.62,.62])c(.07,.08,2,10,17.55+Q,j+2,w+B*.15,ct.gold,ot);l(1.5,.2,.3,17.55,j+3.1,w+B*.12,ct.gold,ot)}for(const[w,B]of[[Vt+.06,1],[se-.06,-1]])for(const Q of[12.9,14.3])l(.9,1.15,.06,Q,j+2.2,w,ct.gold,ot),l(.74,.98,.03,Q,j+2.2,w+B*.03,ct.painting,ot);const Oi=new me;for(const w of[13.7,17.3]){l(.03,.9,.03,w,xe+.55,mt,o.metal,ot);const B=a(new bn(.42,.035,8,32),ct.gold,ot,!1);B.position.set(w,xe-.1,mt),B.rotation.x=Math.PI/2,c(.05,.09,.6,10,w,xe-.1,mt,ct.gold,ot);for(let it=0;it<6;it++){const v=it*$e/6;c(.025,.025,.16,6,w+Math.cos(v)*.42,xe+0,mt+Math.sin(v)*.42,ct.candle,ot)}const Q=new Ca(16767136,9,9,1.6);Q.position.set(w,xe-.2,mt),Oi.add(Q)}const sr=new Ca(16769720,6,6,1.6);sr.position.set(Ze-1.4,j+3.2,mt),Oi.add(sr),Ia(t,lt);for(const w of t.children){const B=w.geometry.attributes.position,Q=w.geometry.attributes.normal,it=w.geometry.attributes.uv;for(let v=0;v<B.count;v++)B.setX(v,-B.getX(v)),Q&&Q.setX(v,-Q.getX(v));for(const v of[B,Q,it]){if(!v)continue;const C=v.array,H=v.itemSize;for(let z=0;z<v.count;z+=3)for(let N=0;N<H;N++){const J=(z+1)*H+N,_t=(z+2)*H+N,Tt=C[J];C[J]=C[_t],C[_t]=Tt}}w.geometry.computeBoundingSphere()}for(const w of Oi.children)w.position.x=-w.position.x;return t.add(Oi),{church:i,chapel:t,materials:o,hotspots:{chapelle:new A(-19.7,7.6,mt),parvis:new A(0,4.2,10.2),clocher:new A(0,28.5,8.8),rosace:new A(15.8,11.2,-16)}}}const Hn=Math.PI*2;function a_(i){return()=>{i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const ii=a_(15190722);function nr(i,t,e,n=[1,1]){const s=document.createElement("canvas");s.width=i,s.height=t,e(s.getContext("2d"),i,t);const r=new vs(s);return r.colorSpace=Ce,r.wrapS=r.wrapT=Ri,r.repeat.set(...n),r.anisotropy=8,r}const l_=()=>nr(256,256,(i,t,e)=>{i.fillStyle="#d7ccb6",i.fillRect(0,0,t,e);for(let n=0;n<6e3;n++){const s=ii()>.5?255:80;i.fillStyle=`rgba(${s},${s},${s-10},${ii()*.05})`,i.fillRect(ii()*t,ii()*e,2,2)}for(let n=0;n<e;n+=64)i.fillStyle="rgba(90,80,60,.18)",i.fillRect(0,n,t,2)},[1,2]),c_=()=>nr(256,256,(i,t,e)=>{i.fillStyle="#3c4041",i.fillRect(0,0,t,e);for(let n=0;n<3e3;n++)i.fillStyle=`rgba(200,200,200,${ii()*.08})`,i.fillRect(ii()*t,ii()*e,2,2);i.strokeStyle="rgba(120,125,126,.55)",i.lineWidth=3,i.beginPath(),i.moveTo(0,0),i.lineTo(t,e),i.moveTo(t,0),i.lineTo(0,e),i.stroke()},[14,16]),h_=()=>nr(128,256,(i,t,e)=>{const n=["#2c5aa8","#b3322a","#e0b23a","#3d8a5c","#6e3a8c","#d9d2b4","#2c5aa8","#2c5aa8"];for(let s=0;s<e;s+=16)for(let r=0;r<t;r+=16)i.fillStyle=n[Math.floor(ii()*n.length)],i.fillRect(r,s,16,16);i.fillStyle="#e8dcae",i.beginPath(),i.ellipse(t/2,e*.42,22,60,0,0,Hn),i.fill(),i.fillStyle="#b3322a",i.beginPath(),i.ellipse(t/2,e*.5,16,44,0,0,Hn),i.fill(),i.fillStyle="#f1d27a",i.beginPath(),i.arc(t/2,e*.22,14,0,Hn),i.fill(),i.strokeStyle="#1a1a1a",i.lineWidth=2;for(let s=0;s<=e;s+=16)i.beginPath(),i.moveTo(0,s),i.lineTo(t,s),i.stroke();for(let s=0;s<=t;s+=16)i.beginPath(),i.moveTo(s,0),i.lineTo(s,e),i.stroke()}),u_=()=>nr(256,256,(i,t)=>{const e=t/2;i.fillStyle="#1b2a4a",i.fillRect(0,0,t,t);const n=["#2c5aa8","#b3322a","#e0b23a","#3d8a5c","#7a3a8c"];for(let s=0;s<8;s++){const r=s*Hn/8;i.fillStyle=n[s%n.length],i.beginPath(),i.ellipse(e+Math.cos(r)*62,e+Math.sin(r)*62,30,46,r+Math.PI/2,0,Hn),i.fill(),i.strokeStyle="#111",i.lineWidth=5,i.stroke()}i.fillStyle="#e0b23a",i.beginPath(),i.arc(e,e,26,0,Hn),i.fill(),i.stroke(),i.lineWidth=9,i.beginPath(),i.arc(e,e,122,0,Hn),i.stroke()}),f_=()=>nr(512,64,(i,t,e)=>{i.strokeStyle="#151515",i.lineWidth=5,i.strokeRect(2,3,t-4,e-6),i.lineWidth=3;for(let n=0;n<t;n+=32)i.beginPath(),i.moveTo(n,e-4),i.lineTo(n,22),i.quadraticCurveTo(n,6,n+16,6),i.quadraticCurveTo(n+32,6,n+32,22),i.stroke(),i.beginPath(),i.arc(n+16,26,6,0,Hn),i.stroke()}),Us={x0:11.2,z0:-4.15,z1:2.15,glassTop:4.8},Jn=2.4;function d_(){const i=new me;i.name="Nef";const t=Ge,e=l_(),n={plaster:new Ft({color:13817812,roughness:.92,side:t}),vault:new Ft({map:Ai("voute",[1.6,1.6]),roughness:.9,side:t,color:15918816}),stone:new Ft({map:e,roughness:.85,side:t}),rib:new Ft({color:15656662,map:e,roughness:.8}),floor:new Ft({map:c_(),roughness:.55}),glass:new Ft({map:h_(),emissiveMap:null,emissive:16777215,emissiveIntensity:0,roughness:.4,side:t}),rose:new Ft({roughness:.4,side:t}),mural:new Ft({map:Ai("frise",[2,1]),roughness:.9,side:t}),choirGlass:new Ft({roughness:.4,side:t,emissive:16777215,emissiveIntensity:.9}),wood:new Ft({color:8079910,roughness:.55}),darkWood:new Ft({color:3877406,roughness:.6,side:t}),pipe:new Ft({color:13685976,metalness:.55,roughness:.28,emissive:2763822}),iron:new Ft({map:f_(),alphaTest:.5,transparent:!1,side:t,color:2763306,roughness:.5}),marble:new Ft({color:15724006,roughness:.35}),uplight:new Ft({color:16769712,emissive:16762746,emissiveIntensity:1.4}),banner:new Ft({color:3108762,roughness:.8,side:t}),flesh:new Ft({color:12032636,roughness:.7})};n.glass.emissiveMap=n.glass.map,n.glass.emissiveIntensity=1,n.choirGlass.map=n.choirGlass.emissiveMap=Ai("vitraux",[1/1.05,1/4],{tile:!1,offset:[.5,0]});const s=u_();n.rose.map=s,n.rose.emissiveMap=s,n.rose.emissive.set(16777215),n.rose.emissiveIntensity=1;const r=(U,V,Y=i)=>{const K=new _e(U,V);return K.castShadow=K.receiveShadow=!0,Y.add(K),K},o=(U,V,Y,K,rt,Dt,bt)=>{const b=r(new hi(U,V,Y),bt);return b.position.set(K,rt,Dt),b},a=(U,V,Y,K,rt,Dt,bt,b)=>{const _=r(new Fe(U,V,Y,K),b);return _.position.set(rt,Dt,bt),_},l=(U,V,Y)=>r(new er(new Xr(U),Math.max(8,U.length*3),V,8,!1),Y);function c(U,V,Y){const K=[],rt=[],Dt=[];let bt=0;for(let _=0;_<U.length;_++)if(_&&(bt+=U[_].distanceTo(U[_-1])),K.push(...U[_].toArray(),...V[_].toArray()),rt.push(bt/4,0,bt/4,U[_].distanceTo(V[_])/4),_){const P=(_-1)*2;Dt.push(P,P+1,P+2,P+1,P+3,P+2)}const b=new Oe;return b.setAttribute("position",new ne(K,3)),b.setAttribute("uv",new ne(rt,2)),b.setIndex(Dt),b.computeVertexNormals(),r(b,Y)}const h=(U,V,Y,K)=>{const rt=[];for(let Dt=0;Dt<=K;Dt++){const bt=Dt/K,b=(1-bt)**2,_=2*(1-bt)*bt,P=bt*bt;rt.push([b*U[0]+_*V[0]+P*Y[0],b*U[1]+_*V[1]+P*Y[1]])}return rt};function u(U,V,Y,K,rt,Dt=14){const bt=U-V/2,b=U+V/2,_=K+(rt-K)*.72,P=h([bt,K],[bt,_],[U,rt],Dt),G=h([U,rt],[b,_],[b,K],Dt).slice(1);return[[bt,Y],...P,...G,[b,Y]]}function d(U,V=[]){const Y=new Ne(U.map(K=>new vt(K[0],K[1])));for(const K of V)Y.holes.push(new Ys(K.map(rt=>new vt(rt[0],rt[1]))));return new fn(Y,4)}const f=1.8,g=6.6,M=10.6,m=-24.4,p=-22.9,T=6,S=7.7,x=10.4,L=15.8,R=[-2.8,-5.7,-8.6,-11.5,-14.4,-17.3,-20.2],D=(()=>{const U=h([-g,x],[-g,x+(L-x)*.78],[0,L],16);return[...U,...U.slice(0,-1).reverse().map(([V,Y])=>[-V,Y])]})(),O=U=>h([U*M,5.6],[U*M,7.7],[U*(g+.25),8.4],12);o(M*2,.02,-p,0,f+.01,p/2,n.floor);const E=[[-g-.25,f],[-g-.25,x+.1],...D.map(([U,V])=>[U,V+.15]),[g+.25,x+.1],...O(1).reverse().map(([U,V])=>[U,V+.12]),[M,f]],y=u(0,2.4,f,f+2.6,f+3.6),F=r(d(E,[y]),n.plaster);F.position.z=-.02;for(const U of[-1,1])o(1.15,3.3,.07,U*1.85,f+1.65,-.07,n.darkWood);const W=r(d([[-M,f],...O(-1).map(([U,V])=>[U,V+.12]),[-g-.25,8.6],[-g-.25,f]]),n.plaster);W.position.z=Jn,o(.5,8.6-f,Jn,-g,(8.6+f)/2,Jn/2,n.plaster),o(M-g-.25,.02,Jn,-17.45/2,f+.01,Jn/2,n.floor);const X=[[-g-.25,f],[-g-.25,x],...D.map(([U,V])=>[U,V+.15]),[g+.25,x],[g+.25,f]],nt=u(0,11,f,9.2,14.4,18);for(const U of[m,m-.6]){const V=r(d(X,[nt]),n.plaster);V.position.z=U}c(nt.map(([U,V])=>new A(U,V,m)),nt.map(([U,V])=>new A(U,V,m-.6)),n.stone),l(nt.slice(1,-1).map(([U,V])=>new A(U*1.01,V+.08,m+.05)),.14,n.rib);const tt=[[.05,-R[0]-.45]];for(let U=0;U<R.length-1;U++)tt.push([-R[U]+.45,-R[U+1]-.45]);for(const U of[-1,1]){const V=[[0,f],[-m,f],[-m,x+.15],[0,x+.15]],Y=tt.map(([_,P])=>u((_+P)/2,P-_,f,T,S));for(const _ of[-.25,.25]){const P=r(d(V,Y),n.plaster);P.rotation.y=Math.PI/2,P.position.x=U*g+_}for(const _ of Y)c(_.map(([P,G])=>new A(U*(g-.25),G,-P)),_.map(([P,G])=>new A(U*(g+.25),G,-P)),n.stone),l(_.slice(1,-1).filter(([,P])=>P>=T-.01).map(([P,G])=>new A(U*(g-.29),G+.06,-P)),.1,n.rib);o(.1,.16,-m,U*(g-.3),S+.45,m/2,n.rib);const K=tt.slice(1).map(([_,P])=>(_+P)/2).concat([22.3]);for(const _ of K)if(Math.abs(_-12.95)<.1||Math.abs(_-15.85)<.1){const P=r(new Bn(.85,32),n.rose);P.position.set(U*(g-.28),9.35,-_),P.rotation.y=Math.PI/2;const G=r(new bn(.88,.09,8,40),n.rib);G.position.copy(P.position),G.rotation.y=Math.PI/2}else{const P=r(d(u(0,.62,0,1,1.75)),n.glass);P.position.set(U*(g-.28),8.5,-_),P.rotation.y=Math.PI/2}if(U>0)o(.05,5.6-f+.15,-p,U*M,(5.6+f)/2,p/2,n.plaster);else{const P=Us.z1,G=Us.z0,$=Us.glassTop;o(.05,5.75-f,Jn-P,-M,(5.75+f)/2,(Jn+P)/2,n.plaster),o(.05,5.75-f,G-p,-M,(5.75+f)/2,(G+p)/2,n.plaster),o(.05,5.75-$,P-G,-M,(5.75+$)/2,(P+G)/2,n.plaster);const q=Us.x0-M;for(const St of[P,G])o(q,$-f,.06,-10.899999999999999,($+f)/2,St,n.plaster);o(q,.06,P-G,-10.899999999999999,$,(P+G)/2,n.plaster),o(q,.02,P-G,-10.899999999999999,f+.01,(P+G)/2,n.floor),o(.12,.14,P-G+.12,-M+.04,$+.07,(P+G)/2,n.rib)}for(const _ of[-4.25,-10.05,-15.85,-21.55]){if(U<0&&_>Us.z0-.5)continue;const P=r(d(u(0,.8,0,1.7,2.6)),n.glass);P.position.set(U*(M-.04),2.6,_),P.rotation.y=Math.PI/2}const rt=O(U),Dt=U<0?Jn:0;c(rt.map(([_,P])=>new A(_,P,Dt)),rt.map(([_,P])=>new A(_,P,p)),n.vault);const bt=r(d([[U*(g+.25),f],[U*M,f],...rt.map(([_,P])=>[_,P+.1])]),n.plaster);bt.position.z=p;const b=[Dt,...R.filter(_=>_>p),p];for(const _ of R)l(rt.map(([P,G])=>new A(P,G-.06,_)),.08,n.rib);for(let _=0;_<b.length-1;_++){const P=b[_],G=b[_+1];for(const[$,q]of[[P,G],[G,P]])l(rt.map(([St,j],Rt)=>new A(St,j-.06,$+(q-$)*Rt/(rt.length-1))),.06,n.rib)}for(const _ of R){const P=U*g;a(.62,.66,.45,8,P,f+.22,_,n.stone),a(.4,.4,T-f-.95,20,P,(f+T)/2-.02,_,n.stone);for(const[$,q]of[[.38,0],[-.38,0],[0,.38],[0,-.38]])a(.15,.15,T-f-.95,12,P+$,(f+T)/2-.02,_+q,n.stone),a(.21,.21,.14,12,P+$,f+.5,_+q,n.stone);a(.62,.45,.5,16,P,T-.3,_,n.stone);for(let $=0;$<10;$++){const q=$*Hn/10;r(new qr(.13,0),n.stone).position.set(P+Math.cos(q)*.55,T-.28+$%2*.12,_+Math.sin(q)*.55)}o(1.05,.14,1.05,P,T+.02,_,n.stone);const G=U*(g-.36);a(.12,.12,x-T,10,G,(x+T)/2,_,n.stone),a(.22,.14,.3,10,G,x-.1,_,n.stone),a(.12,.14,.08,12,U*(g-.75),f+.05,_,n.uplight)}}c(D.map(([U,V])=>new A(U,V,0)),D.map(([U,V])=>new A(U,V,m)),n.vault);const et=[0,...R,m],ht=(U,V=1)=>D.map(([Y,K])=>new A(Y*V,K-.08,U));for(const U of R)l(ht(U),.13,n.rib);for(let U=0;U<et.length-1;U++){const V=et[U],Y=et[U+1],K=D.length-1;for(const[rt,Dt]of[[V,Y],[Y,V]])l(D.map(([bt,b],_)=>new A(bt,b-.08,rt+(Dt-rt)*_/K)),.1,n.rib);a(.26,.2,.16,16,0,L-.16,(V+Y)/2,n.rib)}const Z=-24.8,pt=6,Et=11.6,yt=Math.PI/2-.08,zt=Math.PI+.16;r(new Fe(pt,pt,Et-f,32,1,!0,yt,zt),n.plaster).position.set(0,(Et+f)/2,Z),r(new Fe(pt-.05,pt-.05,2.2,48,1,!0,yt+.12,zt-.24),n.mural).position.set(0,5.3,Z),r(new Fe(pt-.35,pt-.35,1.5,32,1,!0,yt+.1,zt-.2),n.darkWood).position.set(0,f+.35+.75,Z),r(new Fe(pt-.6,pt-.6,.5,32,1,!1,yt+.1,zt-.2),n.wood).position.set(0,f+.35+.25,Z);const ft=r(new vn(pt,32,10,Math.PI-.08,Math.PI+.16,0,Math.PI/2),n.vault);ft.position.set(0,Et,Z),ft.scale.y=.5;for(let U=0;U<=6;U++){const V=Math.PI/2+U*Math.PI/6,Y=[];for(let K=0;K<=10;K++){const rt=K/10*Math.PI/2;Y.push(new A(Math.sin(V)*pt*.985*Math.sin(rt),Et+pt*.5*Math.cos(rt)-.06,Z+Math.cos(V)*pt*.985*Math.sin(rt)))}l(Y.reverse(),.1,n.rib),U>0&&U<6&&a(.1,.1,Et-6.4,8,Math.sin(V)*(pt-.15),(Et+6.4)/2,Z+Math.cos(V)*(pt-.15),n.stone)}for(const U of[Math.PI-.52,Math.PI,Math.PI+.52]){const V=r(d(u(0,1.05,0,3,4)),n.choirGlass);V.position.set(Math.sin(U)*(pt-.06),7.2,Z+Math.cos(U)*(pt-.06)),V.rotation.y=U+Math.PI}const Lt=R[6];o(g*2,.35,Lt-m+.2,0,f+.175,(Lt+m)/2-.1,n.stone),a(pt,pt,.35,32,0,f+.175,Z,n.stone),o(g*2-1.2,.175,.45,0,f+.0875,Lt+.1,n.stone);const Ot=Lt-1.9;o(2.5,.14,1.15,0,f+.35+.95,Ot,n.marble);for(const U of[-1,1])for(const V of[-.4,.4])a(.1,.12,.88,10,U,f+.35+.44,Ot+V,n.marble);o(.14,2.6,.12,g-.75,5.7,-19.75,n.darkWood),o(1.4,.13,.12,g-.75,6.5,-19.75,n.darkWood),a(.1,.07,1.1,8,g-.75,5.7,-19.66,n.flesh),o(.12,.1,1.1,g-.75,6.45,-19.66,n.flesh).rotation.y=Math.PI/2,o(.95,1.9,.03,-g+.7,5,-19.85,n.banner);for(let U=-3.6;U>-19.2;U-=.95)for(const V of[-1,1]){const Y=V*3.2;o(4.8,.07,.42,Y,f+.46,U,n.wood),o(4.8,.55,.06,Y,f+.8,U+.23,n.wood);for(const K of[-2.4,2.4])o(.07,.95,.55,Y+K,f+.47,U+.02,n.wood)}const Ut=R[0]+.45,Xt=T;o(g*2-.5,.3,-Ut,0,Xt,Ut/2,n.stone),r(new oi(g*2-.5,.95),n.iron).position.set(0,Xt+.62,Ut),o(g*2-.5,.08,.12,0,Xt+1.12,Ut,n.darkWood),o(g*2-.5,.45,.5,0,Xt-.2,R[0],n.stone);const I=-1,ut=Xt+.15;o(5.4,4.6,1.3,0,ut+2.3,I,n.darkWood);for(const[U,V,Y]of[[0,1.7,4.2],[-1.85,1.35,3.5],[1.85,1.35,3.5]]){const K=Math.round(V/.16);for(let bt=0;bt<K;bt++){const b=U-V/2+.08+bt*(V-.16)/(K-1),_=1-Math.abs(bt-(K-1)/2)/K,P=Y*(.55+.4*_);a(.055,.055,P,10,b,ut+.5+P/2,I-.7,n.pipe);const G=r(new Ae(.055,.12,10),n.pipe);G.position.set(b,ut+.5,I-.7),G.rotation.x=Math.PI}const rt=u(U,V+.2,ut+.4,ut+Y*.78,ut+Y+.5);l(rt.slice(1,-1).map(([bt,b])=>new A(bt,b,I-.72)),.07,n.darkWood);const Dt=r(new Ae(V*.55,1,3),n.darkWood);Dt.position.set(U,ut+Y+1.05,I-.5),Dt.scale.z=.25;for(const bt of[-1,1])r(new Ae(.1,.7,4),n.darkWood).position.set(U+bt*(V/2+.05),ut+Y+.7,I-.66)}Ia(i);const lt=new me;for(const[U,V,Y,K,rt]of[[0,7,-6,5,20],[0,7,-15,5,20],[0,8,-22,5,16],[0,9,-27,4,12]]){const Dt=new Ca(16767398,K,rt,1);Dt.position.set(U,V,Y),lt.add(Dt)}return i.add(lt),i.visible=!1,i}const p_=[["Extérieur",[["panorama-flanc","Panorama : le clocher, le pignon à la Vierge et le flanc sous les platanes"],["facade-portail","Le pignon à la niche de la Vierge, sa rose et son portail à crochets"],["portail-niche","Le portail latéral, ses colonnettes et sa porte bordeaux"],["portail-lateral-clocher","La façade du clocher, son portail vitré et la grande baie"],["portail-chapelle","Le grand portail ouvert et la Chapelle des Marins en moellons"],["facade-escalier","La façade et le grand escalier"],["facade-soleil","La façade au soleil, l’horloge et le beffroi"],["clocher-carrefour","Le clocher depuis le carrefour"],["rue-fleche","La flèche de pierre vue depuis la rue"],["clocher-grille","Le clocher de profil, derrière la grille"],["portail-lateral","Le portail latéral et le clocher"],["portail-lateral-2","Le portail latéral, autre cadrage"],["flanc-nord","Le flanc : transept, rose, porche et colonne mariale"],["entree-notre-dame","L’entrée « Notre Dame » et le flanc de la nef"],["transept-rose","Le pignon du transept : rose à huit pétales et frontispice"],["transept-platane","Le transept et la flèche derrière les platanes"]]],["Intérieur",[["nef-choeur","La nef vers le chœur : voûtes d’ogives aux voûtains rouges"],["nef-orgue","La nef vers la tribune d’orgue"],["choeur","Le chœur, ses vitraux et la frise peinte"],["bas-cote","Le bas-côté et les piliers en faisceau"]]],["Chapelle des Marins",[["chapelle-marins","Plafond de bois peint, retables dorés et grille en fer forgé"],["chapelle-marins-histoire","Le panneau historique : de 1519 à la restauration de 1987"]]]];function m_(i){const t=[];for(const[u,d]of p_){const f=document.createElement("h3");f.className="gallery-title",f.textContent=`${u} · ${d.length}`,i.appendChild(f);const g=document.createElement("div");g.className="gallery-grid",i.appendChild(g);for(const[M,m]of d){const p=t.push({file:M,caption:m})-1,T=document.createElement("button");T.className="thumb",T.type="button",T.setAttribute("aria-label",`Agrandir : ${m}`);const S=document.createElement("img");S.src=`./photos/miniatures/${M}.jpg`,S.alt=m,S.loading="lazy",S.decoding="async",T.appendChild(S),T.addEventListener("click",()=>l(p)),g.appendChild(T)}}const e=document.getElementById("lightbox"),n=e.querySelector("img"),s=e.querySelector(".lb-caption"),r=e.querySelector(".lb-count");let o=0;function a(u){o=(u+t.length)%t.length;const d=t[o];n.src=`./photos/${d.file}.jpg`,n.alt=d.caption,s.textContent=d.caption,r.textContent=`${o+1} / ${t.length}`,new Image().src=`./photos/${t[(o+1)%t.length].file}.jpg`}function l(u){a(u),e.open||e.showModal()}e.querySelector(".lb-prev").addEventListener("click",()=>a(o-1)),e.querySelector(".lb-next").addEventListener("click",()=>a(o+1)),e.querySelector(".lb-close").addEventListener("click",()=>e.close()),e.addEventListener("click",u=>{u.target===e&&e.close()}),e.addEventListener("keydown",u=>{u.key==="ArrowLeft"&&a(o-1),u.key==="ArrowRight"&&a(o+1)});let c=null;e.addEventListener("touchstart",u=>{c=u.touches[0].clientX},{passive:!0}),e.addEventListener("touchend",u=>{if(c===null)return;const d=u.changedTouches[0].clientX-c;c=null,Math.abs(d)>45&&a(o+(d<0?1:-1))});const h=u=>{const d=t.findIndex(f=>f.file===u);d>=0&&l(d)};return{isOpen:()=>e.open,count:t.length,openFile:h}}const g_=20261104;function __(i){return function(){i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}const Tn=__(g_),v_=document.getElementById("scene"),ae=new I0({antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"});ae.setPixelRatio(Math.min(devicePixelRatio,1.6));ae.setSize(innerWidth,innerHeight);ae.shadowMap.enabled=!0;ae.shadowMap.type=kc;ae.shadowMap.autoUpdate=!1;ae.shadowMap.needsUpdate=!0;ae.toneMapping=Vc;ae.toneMappingExposure=1.03;ae.outputColorSpace=Ce;v_.appendChild(ae.domElement);const De=new nf,ll=new te(14213599);De.background=ll;De.fog=new Ja(ll,95,245);const Wt=new rn(43,innerWidth/innerHeight,.15,650);Wt.position.set(50,34,72);innerWidth/innerHeight<.75&&Wt.position.set(64,40,88);const Yt=new N0(Wt,ae.domElement);Yt.target.set(0,14,-4);Yt.enableDamping=!0;Yt.dampingFactor=.065;Yt.minDistance=18;Yt.maxDistance=125;Yt.maxPolarAngle=Math.PI/2-.025;Yt.minPolarAngle=.16;Yt.autoRotateSpeed=.48;Yt.zoomToCursor=!0;Yt.update();const Os={topColor:{value:new te(7841986)},horizonColor:{value:ll.clone()},sunColor:{value:new te(16773327)},sunDirection:{value:new A(-.48,.64,.45).normalize()}},x_=new _e(new vn(360,32,20),new Wn({side:Ye,depthWrite:!1,uniforms:Os,vertexShader:"varying vec3 vDir; void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`varying vec3 vDir; uniform vec3 topColor; uniform vec3 horizonColor; uniform vec3 sunColor; uniform vec3 sunDirection;
  void main(){float h=clamp(vDir.y,0.0,1.0);vec3 col=mix(horizonColor,topColor,pow(h,0.55));float s=max(dot(normalize(vDir),sunDirection),0.0);col+=sunColor*(pow(s,650.0)*0.8+pow(s,24.0)*0.12+pow(s,4.0)*0.035);gl_FragColor=vec4(col,1.0);}`}));De.add(x_);const Ah=new Xf(13033451,7693909,1.55);De.add(Ah);const ze=new rl(16770756,3.15);ze.position.set(-42,65,38);ze.castShadow=!0;ze.shadow.mapSize.set(2048,2048);ze.shadow.camera.left=-48;ze.shadow.camera.right=48;ze.shadow.camera.top=55;ze.shadow.camera.bottom=-45;ze.shadow.camera.near=8;ze.shadow.camera.far=155;ze.shadow.normalBias=.045;ze.shadow.bias=-15e-5;ze.target.position.set(0,8,-6);De.add(ze,ze.target);const cl=new rl(11981792,.7);cl.position.set(45,24,-32);De.add(cl);const Rh=new rl(14795681,.24);Rh.position.set(0,-12,15);De.add(Rh);const M_=new Ft({color:10331023,roughness:1}),Zr=new _e(new Bn(350,72),M_);Zr.rotation.x=-Math.PI/2;Zr.position.y=-.07;Zr.receiveShadow=!0;De.add(Zr);function Gn(i,t,e,n,s,r,o,a=De){const l=new _e(new hi(i,t,e),o);return l.position.set(n,s,r),l.castShadow=!0,l.receiveShadow=!0,a.add(l),l}const y_=new Ft({color:10320752,roughness:.96}),S_=Gn(74,.12,60,0,-.005,-1,y_);S_.castShadow=!1;const Ch=new Ft({color:12892325,roughness:.95});Gn(26,.07,6.5,0,.075,19.5,Ch).castShadow=!1;const E_=new Ft({color:5593946,roughness:.97});Gn(170,.1,20,0,-.005,35,E_).castShadow=!1;for(let i=-4;i<=4;i++)Gn(3.4,.025,.38,i*6,.065,27.2,Ch).castShadow=!1;const T_=new Ft({color:7438436,roughness:1});for(const i of[-1,1])Gn(15,.15,48,i*25,.02,-7,T_).castShadow=!1;const{church:Ph,chapel:b_,hotspots:Lh}=o_();De.add(Ph,b_);Object.assign(Lh,{orgue:new A(0,9.2,-1.3),autel:new A(0,3.7,-22.1),crucifix:new A(5.85,6.4,-19.7),vitraux:new A(0,9.4,-30.3),frise:new A(-3.2,5.4,-29.6),piliers:new A(-6.6,4.4,-11.5),voutes:new A(0,15,-9.9),vitre:new A(-10.4,3.6,-1)});const hl=d_();De.add(hl);const Bo=new Ft({color:2502188,roughness:.55,metalness:.5}),Ac=new Ft({color:10243902,roughness:.82}),w_=new Ft({color:14275267,roughness:.9}),A_=new Ft({color:16769704,emissive:16761963,emissiveIntensity:.35,roughness:.28});function ul(i,t,e=1){const n=new me;n.position.set(i,0,t),n.scale.setScalar(e),De.add(n);const s=new _e(new Fe(.085,.14,5.8,10),Bo);s.position.y=2.9,s.castShadow=!0,n.add(s);const r=new Xr([new A(0,5.7,0),new A(.1,6.3,0),new A(.8,6.5,0),new A(1.35,6,0)]),o=new _e(new er(r,18,.065,7,!1),Bo);o.castShadow=!0,n.add(o);const a=new _e(new Fe(.24,.34,.65,6),A_);a.position.set(1.35,5.63,0),a.castShadow=!0,n.add(a);const l=new _e(new Ae(.42,.28,6),Bo);l.position.set(1.35,6.08,0),n.add(l)}ul(-15.5,13);ul(16,11);ul(-20,-22,.9);function Dh(i,t,e=0){const n=new me;n.position.set(i,0,t),n.rotation.y=e,De.add(n);for(const s of[-1,1])Gn(.18,.72,.72,s*1.05,.38,0,w_,n);for(let s=0;s<4;s++)Gn(2.5,.09,.13,0,.76,-.25+s*.17,Ac,n);for(let s=0;s<3;s++){const r=Gn(2.5,.13,.09,0,1+s*.18,-.37,Ac,n);r.rotation.x=-.12}}Dh(22,10,-Math.PI/2);Dh(-22,-12,Math.PI/2);const Rc=new Ft({color:7695190,roughness:1}),Cc=[6717261,8293200,9605976,5467976].map(i=>new Ft({color:i,roughness:.96,flatShading:!0}));function jr(i,t,e=13,n=4.4){const s=new me;s.position.set(i,0,t),De.add(s);const r=new _e(new Fe(.34,.57,e*.67,9),Rc);r.position.y=e*.335,r.castShadow=!0,s.add(r);for(let o=0;o<4;o++){const a=o*Math.PI/2+Tn()*.6,l=new _e(new Fe(.11,.23,e*.38,7),Rc);l.position.set(Math.cos(a)*n*.24,e*.63,Math.sin(a)*n*.24),l.rotation.z=Math.cos(a)*.62,l.rotation.x=-Math.sin(a)*.62,l.castShadow=!0,s.add(l)}for(let o=0;o<13;o++){const a=Tn()*Math.PI*2,l=Math.sqrt(Tn())*n*.72,c=new _e(new qr(n*(.42+Tn()*.18),1),Cc[Math.floor(Tn()*Cc.length)]);c.position.set(Math.cos(a)*l,e*.77+(Tn()-.35)*n,Math.sin(a)*l),c.scale.y=.75+Tn()*.3,c.rotation.set(Tn(),Tn(),Tn()),c.castShadow=!0,c.receiveShadow=!0,s.add(c)}}jr(-23,12,14,4.6);jr(32,5,15,4.8);jr(-25,-25,14,4.4);jr(23,-29,13,4.1);const ys=[12958119,13682873,12564393].map(i=>new Ft({color:i,roughness:.95})),R_=new Ft({color:5857636,roughness:.9});function Ss(i,t,e,n,s,r){Gn(e,s,n,i,s/2,t,r);const o=new _e(new Ae(Math.hypot(e,n)*.53,2.8,4),R_);o.position.set(i,s+1.4,t),o.rotation.y=Math.PI/4,o.scale.set(e/Math.hypot(e,n),1,n/Math.hypot(e,n)),o.castShadow=!0,De.add(o)}Ss(-47,-25,18,14,11,ys[0]);Ss(48,-35,20,16,12,ys[1]);Ss(-58,10,15,13,10,ys[2]);Ss(58,7,18,14,10,ys[0]);Ss(-24,-65,22,16,13,ys[1]);Ss(27,-70,20,15,11,ys[2]);const ir={overview:{position:[50,34,72],target:[0,15,-4]},parvis:{position:[2,9.5,39],target:[0,12.8,5]},clocher:{position:[22,29,45],target:[0,28,5.3]},rosace:{position:[42,17,-1],target:[13,12,-16]},chapelle:{position:[-9.3,3.55,-1],target:[-9.55,3.57,-1],inside:"nave"},nef:{position:[0,3.5,-1],target:[0,3.53,-1.25],inside:"nave"},"nef-milieu":{position:[0,3.5,-10],target:[0,3.55,-10.25],inside:"nave"},"nef-choeur":{position:[0,3.5,-18.4],target:[0,3.44,-18.65],inside:"nave"},"nef-bascote":{position:[-8.7,3.4,-1.6],target:[-8.7,3.43,-1.85],inside:"nave"},"nef-orgue":{position:[0,3.5,-15],target:[0,3.62,-14.76],inside:"nave"}};function xi(i,t){const e=new A(...i),n=new A(...t).sub(e).normalize().multiplyScalar(.25);return{position:i,target:e.add(n).toArray(),inside:"nave"}}Object.assign(ir,{"poi-orgue":xi([0,3.5,-12.5],[0,8.8,-1.3]),"poi-autel":xi([0,3.5,-18.6],[0,3,-22.1]),"poi-crucifix":xi([2.2,3.5,-18.4],[5.85,6.2,-19.7]),"poi-vitraux":xi([0,3.85,-21],[0,8.6,-30.3]),"poi-frise":xi([-.8,3.85,-21.5],[-3.2,5.3,-29.6]),"poi-piliers":xi([-3.2,3.5,-8.4],[-6.6,4.6,-12.5]),"poi-voutes":xi([0,3.5,-7],[0,15,-10.5])});const Ua={minAzimuthAngle:-1/0,maxAzimuthAngle:1/0,minDistance:18,maxDistance:125,minPolarAngle:.16,maxPolarAngle:Math.PI/2-.025,fov:43,pan:!0},fl={minAzimuthAngle:Math.PI/2-1.15,maxAzimuthAngle:Math.PI/2+1.15,minDistance:.15,maxDistance:.45,minPolarAngle:.55,maxPolarAngle:Math.PI-.45,fov:64,pan:!1},Pc={...fl,minAzimuthAngle:-1/0,maxAzimuthAngle:1/0,minPolarAngle:.3,maxPolarAngle:Math.PI-.35},C_={minAzimuthAngle:-1/0,maxAzimuthAngle:1/0,minDistance:.05,maxDistance:400,minPolarAngle:.02,maxPolarAngle:Math.PI-.02,pan:!1};let ms=!1,on=!1;function ai(i,t=!1){const e=!!i;ms=e||t,on=i==="nave";const n=t?{...C_,fov:i==="nave"?Pc.fov:Ua.fov}:i==="nave"?Pc:e?fl:Ua;Ph.visible=i!=="nave",hl.visible=i==="nave",document.body.classList.toggle("in-nave",i==="nave"),Object.assign(Yt,{minAzimuthAngle:n.minAzimuthAngle,maxAzimuthAngle:n.maxAzimuthAngle,minDistance:n.minDistance,maxDistance:n.maxDistance,minPolarAngle:n.minPolarAngle,maxPolarAngle:n.maxPolarAngle,enablePan:n.pan}),Yt.zoomToCursor=!e,Yt.enableZoom=!(i==="nave"&&!t),Wt.fov=e&&innerWidth/innerHeight<.75?84:n.fov,Wt.updateProjectionMatrix(),document.body.classList.toggle("inside",ms)}const P_={orgue:{kicker:"Au-dessus de l’entrée",title:"La tribune d’orgue",text:"Portée par les deux premiers piliers, la tribune accueille le buffet d’orgue néogothique en bois sombre, ses tourelles et ses tuyaux de façade, derrière une balustrade en fer forgé.",view:"poi-orgue",go:"Se tourner vers l’orgue",photo:"nef-orgue"},autel:{kicker:"Le chœur",title:"L’autel",text:"Entre les septièmes piliers s’ouvre le chœur surélevé, là où officie le prêtre. L’autel de marbre blanc se dresse au-delà de la marche.",view:"poi-autel",go:"S’approcher de l’autel",photo:"choeur"},crucifix:{kicker:"Le chœur",title:"Le crucifix",text:"Accroché au septième pilier, le grand crucifix de bois marque l’entrée du chœur. En face, une bannière bleue lui répond.",view:"poi-crucifix",go:"Regarder le crucifix",photo:"choeur"},vitraux:{kicker:"La lumière du chœur",title:"Les vitraux de l’abside",text:"Trois grandes verrières éclairent le fond du chœur, au-dessus de la frise peinte, sous la voûte nervurée de l’abside.",view:"poi-vitraux",go:"Lever les yeux",photo:"choeur"},frise:{kicker:"Le chœur",title:"La frise peinte",text:"Tout autour de l’abside, une grande frise peinte déroule une foule de personnages, au-dessus des stalles de bois.",view:"poi-frise",go:"Regarder la frise",photo:"choeur"},piliers:{kicker:"La nef",title:"Les sept piliers",text:"De chaque côté, sept piliers de pierre en faisceau, coiffés de chapiteaux à feuillages, portent les grandes arcades. Les premiers soutiennent la tribune, les septièmes ouvrent le chœur.",view:"poi-piliers",go:"Longer les piliers",photo:"bas-cote"},voutes:{kicker:"La nef",title:"Les voûtes",text:"Les voûtes d’ogives associent des voûtains rouges à des nervures de pierre blanche qui se croisent en clés de voûte au milieu de chaque travée.",view:"poi-voutes",go:"Lever les yeux",photo:"nef-choeur"},vitre:{kicker:"Depuis 1519",title:"La Chapelle des Marins",text:"À gauche en entrant, la paroi vitrée laisse voir la chapelle : plafond de bois peint, retables dorés et grille en fer forgé.",view:"chapelle",go:"S’approcher de la vitre",photo:"chapelle-marins"},parvis:{kicker:"Bienvenue",title:"Le parvis",text:"Le large escalier de pierre mène au portail principal. Ses ogives superposées, ses colonnettes et ses portes sombres structurent l’entrée de l’église.",view:"nef",go:"Entrer dans l’église",photo:"facade-escalier"},clocher:{kicker:"Le repère",title:"Le clocher",text:"La tour associe la brique rouge à des chaînages de pierre claire. Au-dessus de l’horloge, les baies jumelées précèdent les pinacles et la grande flèche octogonale.",view:"clocher",photo:"clocher-carrefour"},chapelle:{kicker:"Depuis 1519",title:"La Chapelle des Marins",text:"Elle abrite la Vierge rejetée par les flots aux pieds du frère Thomas Illyricus en 1519. Reconstruite ici en 1722, ravagée par un incendie en 1986, elle a été restituée en 1987 dans son état de 1723 : plafond de bois peint, retables dorés et grille en fer forgé. On la découvre à gauche en entrant dans l’église, à travers des parois vitrées.",view:"chapelle",go:"Regarder par la vitre",photo:"chapelle-marins-histoire"},rosace:{kicker:"La lumière",title:"La rosace",text:"Sur le transept, la rosace compose un motif rayonnant de huit pétales. Son cercle de pierre contraste délicatement avec le mur de brique.",view:"rosace",photo:"transept-rose"}};let Re=null;function L_(i){const t=ir[i];if(!t)return;ai(t.inside||!1);const e=new A(...t.target),n=new A(...t.position);i==="overview"&&innerWidth/innerHeight<.75&&n.sub(e).multiplyScalar(1.28).add(e),Re={start:performance.now(),fromPos:Wt.position.clone(),fromTarget:Yt.target.clone(),toPos:n,toTarget:e,dur:Js?0:1150},Es(i)}function Es(i){document.querySelectorAll(".view-btn").forEach(t=>{const e=t.dataset.view===i||t.dataset.view==="nef"&&i.startsWith("nef")&&!!t.closest(".view-dock");t.classList.toggle("active",e),e?t.setAttribute("aria-current","true"):t.removeAttribute("aria-current")})}const Js=matchMedia("(prefers-reduced-motion: reduce)").matches,D_=document.getElementById("fade"),Lc=document.getElementById("announce"),Vr=i=>D_.classList.toggle("on",i),gs=i=>{Lc.textContent="",setTimeout(()=>{Lc.textContent=i},30)},Ih={"poi-orgue":"Vous regardez la tribune d’orgue.","poi-autel":"Vous êtes devant l’autel.","poi-crucifix":"Vous regardez le crucifix.","poi-vitraux":"Vous regardez les vitraux de l’abside.","poi-frise":"Vous regardez la frise peinte.","poi-piliers":"Vous longez les piliers.","poi-voutes":"Vous regardez les voûtes.",nef:"Vous êtes à l’entrée de la nef, sous la tribune d’orgue portée par les piliers 1.","nef-milieu":"Vous êtes au milieu de la nef.","nef-choeur":"Vous êtes devant le chœur, entre les piliers 7, face à l’autel.","nef-bascote":"Vous êtes dans le bas-côté gauche.","nef-orgue":"Vous regardez la tribune d’orgue.",chapelle:"Vous êtes à gauche de l’entrée, devant la paroi vitrée de la Chapelle des Marins."};let Qe=null;function Uh(i){Qe={steps:i,i:-1},Yt.enabled=!1,Re=null,Na()}function Na(){if(!Qe)return;const i=Qe.steps[++Qe.i];if(!i){Qe=null,Yt.enabled=!0;return}i.before?.(),i.jump&&(Wt.position.set(...i.jump[0]),Yt.target.set(...i.jump[1])),i.to?Re={start:performance.now(),fromPos:Wt.position.clone(),fromTarget:Yt.target.clone(),toPos:new A(...i.to[0]),toTarget:new A(...i.to[1]),dur:Js?0:i.dur,onEnd:Na}:setTimeout(Na,Js?60:i.wait||0),ci=!0}const Dc=document.getElementById("walk-hint");let Ic=null;function I_(){Dc.classList.add("show"),clearTimeout(Ic),Ic=setTimeout(()=>Dc.classList.remove("show"),7e3)}function Kr(i="nef"){const t=ir[i];gs("Vous montez l’escalier et entrez par le grand portail."),Oa();const e=Wt.position.z<12?[{to:[[Wt.position.x>=0?34:-34,24,34],[0,8,4]],dur:1300}]:[];Uh([...e,{before:()=>{ai(!1,!0),document.getElementById("detail-card").classList.remove("open")},to:[[0,4.8,25],[0,5.4,8]],dur:1500},{to:[[0,4,11.8],[0,4,8]],dur:1500},{before:()=>Vr(!0),to:[[0,3.8,10.3],[0,3.8,7]],dur:380},{before:()=>{ai("nave",!0),Vr(!1)},jump:[[0,3.5,1.5],[0,3.5,-1.5]],to:[[0,3.5,-1],[0,3.53,-1.25]],dur:1500},...i!=="nef"?[{to:[t.position,t.target],dur:1700}]:[],{before:()=>{ai("nave"),Es(i),gs(Ih[i]+" Touchez le sol pour y marcher, ou utilisez les flèches du clavier : haut et bas pour avancer, gauche et droite pour tourner."),I_()}}])}function Nh(i="parvis"){const t=ir[i];gs("Vous sortez par le grand portail."),Uh([{before:()=>{ai("nave",!0),Vr(!0)},to:[[0,3.5,-.6],[0,3.5,1.5]],dur:500},{before:()=>{ai(!1,!0),Vr(!1)},jump:[[0,3.8,10],[0,4,13]],to:[[0,4.6,16],[0,4.4,24]],dur:1300},{to:[t.position,t.target],dur:1800},{before:()=>{ai(!1),Es(i),gs("Vous êtes à l’extérieur de l’église.")}}])}const Fh=document.getElementById("zoom-hint");let Fa=0,Uc=null;function Oa(){Fa=0,Fh.classList.remove("show")}function Oh(i){if(!(ms||Qe)){if(Wt.position.distanceTo(Yt.target)>Ua.minDistance+.6){Oa();return}Fa+=i,Fh.classList.add("show"),clearTimeout(Uc),Uc=setTimeout(Oa,2600),Fa>=3&&Kr("nef")}}ae.domElement.addEventListener("wheel",i=>{i.deltaY<0&&Oh(Math.min(1.5,Math.max(.5,-i.deltaY/100)))},{passive:!0});let ts=null;ae.domElement.addEventListener("touchstart",i=>{ts=i.touches.length===2?Math.hypot(i.touches[0].clientX-i.touches[1].clientX,i.touches[0].clientY-i.touches[1].clientY):null},{passive:!0});ae.domElement.addEventListener("touchmove",i=>{if(i.touches.length!==2||ts===null)return;const t=Math.hypot(i.touches[0].clientX-i.touches[1].clientX,i.touches[0].clientY-i.touches[1].clientY);t>ts*1.12?(Oh(1),ts=t):t<ts*.9&&(ts=t)},{passive:!0});document.getElementById("zoom-hint-go").addEventListener("click",()=>Kr("nef"));function dl(i){const t=ir[i];if(!t||Qe)return;const e=t.inside==="nave";e&&!on?Kr(i):!e&&on?Nh(i):(L_(i),e&&gs(Ih[i]||""))}function U_(i){const t=P_[i];if(!t)return;document.getElementById("card-kicker").textContent=t.kicker,document.getElementById("card-title").textContent=t.title,document.getElementById("card-text").textContent=t.text,document.getElementById("card-go").dataset.view=t.view,document.getElementById("card-go").textContent=t.go||"Admirer de plus près";const e=document.getElementById("card-photo");e.hidden=!t.photo,t.photo&&(e.dataset.file=t.photo,e.querySelector("img").src=`./photos/miniatures/${t.photo}.jpg`,e.querySelector("img").alt=`Photo : ${t.title}`),document.getElementById("detail-card").classList.add("open")}document.querySelectorAll(".view-btn").forEach(i=>i.addEventListener("click",()=>dl(i.dataset.view)));document.querySelectorAll(".hotspot").forEach(i=>i.addEventListener("click",()=>U_(i.dataset.hotspot)));document.getElementById("card-photo").addEventListener("click",i=>ml.openFile(i.currentTarget.dataset.file));document.getElementById("detail-close").addEventListener("click",()=>document.getElementById("detail-card").classList.remove("open"));document.getElementById("card-go").addEventListener("click",i=>{document.getElementById("detail-card").classList.remove("open"),dl(i.currentTarget.dataset.view)});const ks=document.getElementById("rotate-btn");ks.addEventListener("click",()=>{Yt.autoRotate=!Yt.autoRotate,ks.classList.toggle("active",Yt.autoRotate),ks.setAttribute("aria-pressed",String(Yt.autoRotate))});Yt.addEventListener("start",()=>{Qe||(Re=null),Yt.autoRotate&&(Yt.autoRotate=!1,ks.classList.remove("active"),ks.setAttribute("aria-pressed","false"))});let Ve=!1;document.getElementById("light-btn").addEventListener("click",i=>{Ve=!Ve,i.currentTarget.classList.toggle("active",Ve),ze.color.set(Ve?16757871:16770756),ze.intensity=Ve?3.6:3.15,ze.position.set(Ve?-60:-42,Ve?30:65,Ve?28:38),Ah.intensity=Ve?1.05:1.55,cl.intensity=Ve?.48:.7;const t=new te(Ve?15190188:14213599);Os.horizonColor.value.copy(t),Os.topColor.value.set(Ve?8290965:7841986),Os.sunColor.value.set(Ve?16757611:16773327),Os.sunDirection.value.set(Ve?-.78:-.48,Ve?.28:.64,.45).normalize(),De.fog.color.copy(t),De.background.copy(t),ae.toneMappingExposure=Ve?.96:1.03,ae.shadowMap.needsUpdate=!0,Sn(!0)});document.getElementById("screenshot-btn").addEventListener("click",()=>{Sn(!0);const i=document.createElement("a");i.href=ae.domElement.toDataURL("image/png"),i.download="notre-dame-arcachon-vue-3d.png",document.body.appendChild(i),i.click(),i.remove()});const Nc=document.getElementById("photo-drawer"),Bh=document.getElementById("scrim");function Jr(i){Nc.classList.toggle("open",i),Bh.classList.toggle("open",i),Nc.setAttribute("aria-hidden",String(!i))}document.getElementById("photos-btn").addEventListener("click",()=>Jr(!0));document.getElementById("photos-close").addEventListener("click",()=>Jr(!1));Bh.addEventListener("click",()=>Jr(!1));const pl=document.getElementById("help-dialog");document.getElementById("help-btn").addEventListener("click",()=>pl.showModal());document.getElementById("help-close").addEventListener("click",()=>pl.close());document.getElementById("understood").addEventListener("click",()=>pl.close());const ml=m_(document.getElementById("gallery"));addEventListener("keydown",i=>{i.key==="Escape"&&!ml.isOpen()&&Jr(!1)});const zh=[-2.8,-5.7,-8.6,-11.5,-14.4,-17.3,-20.2],Gr=(i,t,e)=>Math.min(e,Math.max(t,i));function gl(i,t){if(i=Gr(i,-10.2,10.2),t=Gr(t,-30.2,2),t>-.45&&(i=Math.min(i,-7)),t<-20.7&&Math.abs(i)>6.15&&(i=Math.sign(i)*(t<-22.5?5.9:6.15)),t<-24.4){const n=i,s=t+24.8,r=Math.hypot(n,s);r>4.5&&(i=n*4.5/r,t=-24.8+s*4.5/r)}const e=(n,s,r)=>{const o=i-n,a=t-s,l=Math.hypot(o,a);if(l<r){const c=l>1e-4?r/l:1;i=n+(l>1e-4?o:r)*c,t=s+(l>1e-4?a:0)*c}};for(const n of zh)for(const s of[-6.6,6.6])e(s,n,.95);for(const[n,s,r,o]of[[.55,5.85,-19.05,-3.25],[-5.85,-.55,-19.05,-3.25],[-1.5,1.5,-22.8,-21.4]])if(i>n&&i<s&&t>r&&t<o){const a=[[n-.01,t,i-n],[s+.01,t,s-i],[i,r-.01,t-r],[i,o+.01,o-t]].sort((l,c)=>l[2]-c[2]);i=a[0][0],t=a[0][1]}return[i,t]}const kh=i=>3.5+(i<-20?.35:0),Qn=new A;function Hh(i,t,e){[i,t]=gl(i,t),Qn.copy(Yt.target).sub(Wt.position);const n=new A(i,kh(t),t),s=n.distanceTo(Wt.position);return Re={start:performance.now(),fromPos:Wt.position.clone(),fromTarget:Yt.target.clone(),toPos:n,toTarget:n.clone().add(Qn),dur:Js?0:Gr(s/3.2*1e3,250,2600)},Es(""),ci=!0,s}function _l(i){if(Qn.copy(Yt.target).sub(Wt.position),Qn.y=0,Qn.lengthSq()<1e-6)return;Qn.normalize().multiplyScalar(i);const[t,e]=gl(Wt.position.x+Qn.x,Wt.position.z+Qn.z),n=new A(t-Wt.position.x,kh(e)-Wt.position.y,e-Wt.position.z);Wt.position.add(n),Yt.target.add(n),Re=null,ci=!0,Es("")}const as=new _e(new nl(.22,.34,32),new Ka({color:16777215,transparent:!0,opacity:.85,depthWrite:!1}));as.rotation.x=-Math.PI/2;as.visible=!1;De.add(as);let Fc=null;const Oc=new jf,Bc=new vt;let es=null;ae.domElement.addEventListener("pointerdown",i=>{es={x:i.clientX,y:i.clientY,t:performance.now()}});ae.domElement.addEventListener("pointerup",i=>{if(!es||!on||Qe)return;const t=Math.hypot(i.clientX-es.x,i.clientY-es.y),e=performance.now()-es.t;if(es=null,t>7||e>450)return;const n=ae.domElement.getBoundingClientRect();Bc.set((i.clientX-n.left)/n.width*2-1,-(i.clientY-n.top)/n.height*2+1),Oc.setFromCamera(Bc,Wt);const s=Oc.intersectObject(hl,!0).find(a=>a.object.isMesh);if(!s)return;let{x:r,z:o}=s.point;if(s.point.y>2.4){const a=r-Wt.position.x,l=o-Wt.position.z,c=Math.hypot(a,l),h=Math.max(0,c-1.4);r=Wt.position.x+a/(c||1)*h,o=Wt.position.z+l/(c||1)*h}[r,o]=gl(r,o),as.position.set(r,o<-20?2.16:1.83,o),as.visible=!0,clearTimeout(Fc),Fc=setTimeout(()=>{as.visible=!1,ci=!0},1600),Hh(r,o)});ae.domElement.addEventListener("wheel",i=>{on&&!Qe&&(i.preventDefault(),_l(Gr(-i.deltaY/100,-1.5,1.5)*.6))},{passive:!1});let Br=null;ae.domElement.addEventListener("touchstart",i=>{Br=i.touches.length===2?Math.hypot(i.touches[0].clientX-i.touches[1].clientX,i.touches[0].clientY-i.touches[1].clientY):null},{passive:!0});ae.domElement.addEventListener("touchmove",i=>{if(!on||Qe||i.touches.length!==2||Br===null)return;const t=Math.hypot(i.touches[0].clientX-i.touches[1].clientX,i.touches[0].clientY-i.touches[1].clientY);_l((t-Br)*.03),Br=t},{passive:!0});const Pr=new La,Lr=new A;function zo(i,t){Re=null,Lr.copy(Wt.position).sub(Yt.target),Pr.setFromVector3(Lr),Pr.theta+=i,Pr.phi+=t,Lr.setFromSpherical(Pr),Wt.position.copy(Yt.target).add(Lr),Yt.update(),ci=!0}addEventListener("keydown",i=>{if(Qe||ml.isOpen()||document.querySelector("dialog[open]")||/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName||""))return;const t=i.key.length===1?i.key.toLowerCase():i.key;if(on){const n={ArrowUp:1,z:1,w:1,ArrowDown:-1,s:-1}[t],s={ArrowLeft:1,q:1,a:1,ArrowRight:-1,d:-1}[t],r={PageUp:1,PageDown:-1}[t];n?(i.preventDefault(),_l(n*.7)):s?(i.preventDefault(),zo(s*.12,0)):r&&(i.preventDefault(),zo(0,r*.08));return}const e={ArrowLeft:[.12,0],ArrowRight:[-.12,0],ArrowUp:[0,-.08],ArrowDown:[0,.08]}[t];e&&(i.preventDefault(),zo(e[0],e[1]*(ms?-1:1)))});const Mi=new A;function N_(){document.querySelectorAll(".hotspot").forEach(i=>{const t=Lh[i.dataset.hotspot];Mi.copy(t).project(Wt);let n=(i.dataset.zone==="in"?on&&!Qe&&Wt.position.distanceTo(t)<24:!ms)&&Mi.z>-1&&Mi.z<1&&Math.abs(Mi.x)<.96&&Math.abs(Mi.y)<.92;i.dataset.hotspot==="parvis"&&Wt.position.z<0&&(n=!1),i.dataset.hotspot==="rosace"&&Wt.position.x<9&&(n=!1),i.dataset.hotspot==="chapelle"&&Wt.position.x>-12&&(n=!1),i.style.display=n?"flex":"none",n&&(i.style.left=`${(Mi.x*.5+.5)*innerWidth}px`,i.style.top=`${(-Mi.y*.5+.5)*innerHeight}px`)})}let ci=!0;function Sn(i=!1){let t=!1;if(Re){const n=Re.dur??1150,s=n>0?Math.min(1,(performance.now()-Re.start)/n):1,r=s*s*(3-2*s);if(Wt.position.lerpVectors(Re.fromPos,Re.toPos,r),Yt.target.lerpVectors(Re.fromTarget,Re.toTarget,r),s>=1){const o=Re.onEnd;Re=null,o&&setTimeout(o,0)}else t=!0}const e=Yt.update();(i||ci||e||t||Yt.autoRotate)&&(ae.render(De,Wt),N_(),B_(),ci=!1)}ae.setAnimationLoop(()=>Sn());window.__seek=()=>{Re=null,Yt.autoRotate=!1,Sn(!0)};window.__cam=(i,t)=>{Re=null,ai(!1,!0),Wt.position.set(...i),Yt.target.set(...t),Yt.update(),Sn(!0)};window.__play=()=>Sn(!0);window.__SCENE_STATS__=()=>({calls:ae.info.render.calls,triangles:ae.info.render.triangles,geometries:ae.info.memory.geometries});const $r=document.getElementById("plan"),ls=document.getElementById("plan-canvas"),he=ls.getContext("2d"),dn={x0:-21,x1:21,z0:-32,z1:19},ti={terrace:[[-16,-28.5,16,9.85]],steps:[[-10.4,9.45,10.4,17.2]],church:[[-10.6,-24.4,10.6,0],[-10.6,0,-6.6,2.4],[-15.2,-20.25,15.2,-11.75],[-9.15,0,9.15,9],[9,3,11.35,9]],tower:[[-3.65,1.6,3.65,8.9]],chapel:[[-19.4,-4.6,-11.2,2.6]],annex:[[-12.55,-8.05,-11.05,-4.65],[-14.1,-11.5,-11.1,-8.1]]};let Ii={w:0,h:0};function yi(i,t){return[(i-dn.x0)/(dn.x1-dn.x0)*Ii.w,(t-dn.z0)/(dn.z1-dn.z0)*Ii.h]}function F_(i,t){return[dn.x0+i/Ii.w*(dn.x1-dn.x0),dn.z0+t/Ii.h*(dn.z1-dn.z0)]}function vl(){const i=ls.getBoundingClientRect(),t=Math.min(devicePixelRatio,2);Ii={w:i.width,h:i.height},ls.width=i.width*t,ls.height=i.height*t,he.setTransform(t,0,0,t,0,0)}const Vh=(i,t,e)=>e.some(([n,s,r,o])=>i>=n&&i<=r&&t>=s&&t<=o),O_=(i,t)=>Vh(i,t,ti.church)||Math.hypot(i,t+25)<6.9;function B_(){if($r.classList.contains("collapsed"))return;Ii.w||vl();const{w:i,h:t}=Ii;he.clearRect(0,0,i,t);const e=(g,M,m)=>g.forEach(([p,T,S,x])=>{const[L,R]=yi(p,T),[D,O]=yi(S,x);he.fillStyle=M,he.fillRect(L,R,D-L,O-R),m&&(he.strokeStyle=m,he.strokeRect(L,R,D-L,O-R))});e(ti.terrace,"rgba(160,130,120,.35)"),e(ti.steps,"rgba(220,210,190,.9)");const n=on?"rgba(240,232,214,.98)":"rgba(178,96,70,.85)";e(ti.church,n);const[s,r]=yi(0,-25),[o]=yi(6.9,0),a=o-yi(0,0)[0];if(he.fillStyle=n,he.beginPath(),he.arc(s,r,a,Math.PI,0),he.fill(),e(ti.tower,"rgba(214,200,170,.98)","rgba(120,100,80,.6)"),e(ti.chapel,"rgba(150,120,90,.95)"),e(ti.annex,"rgba(205,196,182,.95)"),on){he.fillStyle="rgba(120,105,85,.95)";for(const g of zh)for(const M of[-6.6,6.6]){const[m,p]=yi(M,g);he.beginPath(),he.arc(m,p,2.2,0,Math.PI*2),he.fill()}e([[-1.25,-22.7,1.25,-21.5]],"rgba(255,255,255,.95)","rgba(120,105,85,.8)"),e([[-6.35,-2.8,6.35,0]],"rgba(120,80,50,.35)"),e([[-10.65,-4.15,-10.5,2.15]],"rgba(90,160,200,.95)")}let[l,c]=yi(Wt.position.x,Wt.position.z);const h=l<6||l>i-6||c<6||c>t-6;l=Math.min(i-6,Math.max(6,l)),c=Math.min(t-6,Math.max(6,c));const u=Yt.target.x-Wt.position.x,d=Yt.target.z-Wt.position.z,f=Math.atan2(d,u);he.fillStyle="rgba(166,83,61,.28)",he.beginPath(),he.moveTo(l,c),he.arc(l,c,on?30:22,f-.5,f+.5),he.closePath(),he.fill(),he.fillStyle="#a6533d",he.strokeStyle="#fff",he.lineWidth=2,he.beginPath(),he.arc(l,c,h?4:5,0,Math.PI*2),he.fill(),he.stroke(),he.lineWidth=1}ls.addEventListener("click",i=>{if(Qe)return;const t=ls.getBoundingClientRect(),[e,n]=F_(i.clientX-t.left,i.clientY-t.top);if(Vh(e,n,ti.chapel)){dl("chapelle");return}if(O_(e,n)){on?(Hh(e,n),gs("Vous vous déplacez dans la nef.")):Kr("nef");return}if(on){Nh("parvis");return}const s=new A(e*.5,9,n*.5),r=Wt.position.clone().sub(Yt.target),o=new A(e,0,n).normalize(),a=Math.max(40,r.length()),l=s.clone().add(new A(o.x*a*.9,a*.45,o.z*a*.9));Re={start:performance.now(),fromPos:Wt.position.clone(),fromTarget:Yt.target.clone(),toPos:l,toTarget:s,dur:Js?0:1100},Es(""),ci=!0});document.getElementById("plan-toggle").addEventListener("click",()=>{const i=$r.classList.toggle("collapsed");document.getElementById("plan-toggle").setAttribute("aria-expanded",String(!i));try{localStorage.setItem("plan-collapsed",i?"1":"0")}catch{}i||(vl(),Sn(!0))});try{localStorage.getItem("plan-collapsed")==="1"&&($r.classList.add("collapsed"),document.getElementById("plan-toggle").setAttribute("aria-expanded","false"))}catch{}addEventListener("resize",()=>{$r.classList.contains("collapsed")||vl()});addEventListener("scene-dirty",()=>Sn(!0));addEventListener("resize",()=>{Wt.aspect=innerWidth/innerHeight,ms&&(Wt.fov=Wt.aspect<.75?84:fl.fov,Wt.updateProjectionMatrix()),Wt.updateProjectionMatrix(),ae.setSize(innerWidth,innerHeight),ae.setPixelRatio(Math.min(devicePixelRatio,1.6)),Sn(!0)});Sn(!0);requestAnimationFrame(()=>requestAnimationFrame(()=>{const i=document.getElementById("loading");i&&(i.classList.add("done"),setTimeout(()=>i.remove(),700)),window.__SCENE_READY__=!0}));const Ba=new URLSearchParams(location.search);Ba.has("t")&&window.__seek(Number(Ba.get("t")));Ba.get("capture")==="1"&&(ae.setAnimationLoop(null),Yt.enableDamping=!1,document.getElementById("loading")?.remove(),Sn(!0),window.__SCENE_READY__=!0);
