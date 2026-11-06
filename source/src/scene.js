import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createChurch } from './church.js';
import { createNave } from './nave.js';
import { setupGallery } from './gallery.js';

const SEED = 20261104;
function mulberry32(a) { return function () { a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const rand = mulberry32(SEED);
const container = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.03;
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const HORIZON = new THREE.Color(0xd8e1df);
scene.background = HORIZON;
scene.fog = new THREE.Fog(HORIZON, 95, 245);
const camera = new THREE.PerspectiveCamera(43, innerWidth / innerHeight, .15, 650);
camera.position.set(50, 34, 72);
if (innerWidth / innerHeight < .75) camera.position.set(64, 40, 88);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 14, -4);
controls.enableDamping = true;
controls.dampingFactor = .065;
controls.minDistance = 18;
controls.maxDistance = 125;
controls.maxPolarAngle = Math.PI / 2 - .025;
controls.minPolarAngle = .16;
controls.autoRotateSpeed = .48;
controls.zoomToCursor = true;
controls.update();

// Ciel procédural, lumière chaude principale et remplissage froid.
const skyUniforms = {
  topColor: { value: new THREE.Color(0x77a8c2) },
  horizonColor: { value: HORIZON.clone() },
  sunColor: { value: new THREE.Color(0xfff0cf) },
  sunDirection: { value: new THREE.Vector3(-.48, .64, .45).normalize() },
};
const sky = new THREE.Mesh(new THREE.SphereGeometry(360, 32, 20), new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false, uniforms: skyUniforms,
  vertexShader: 'varying vec3 vDir; void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
  fragmentShader: `varying vec3 vDir; uniform vec3 topColor; uniform vec3 horizonColor; uniform vec3 sunColor; uniform vec3 sunDirection;
  void main(){float h=clamp(vDir.y,0.0,1.0);vec3 col=mix(horizonColor,topColor,pow(h,0.55));float s=max(dot(normalize(vDir),sunDirection),0.0);col+=sunColor*(pow(s,650.0)*0.8+pow(s,24.0)*0.12+pow(s,4.0)*0.035);gl_FragColor=vec4(col,1.0);}`
}));
scene.add(sky);
const hemi = new THREE.HemisphereLight(0xc6dfeb, 0x756655, 1.55); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffe6c4, 3.15);
sun.position.set(-42, 65, 38); sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -48; sun.shadow.camera.right = 48; sun.shadow.camera.top = 55; sun.shadow.camera.bottom = -45;
sun.shadow.camera.near = 8; sun.shadow.camera.far = 155; sun.shadow.normalBias = .045; sun.shadow.bias = -.00015;
sun.target.position.set(0, 8, -6); scene.add(sun, sun.target);
const fill = new THREE.DirectionalLight(0xb6d3e0, .7); fill.position.set(45, 24, -32); scene.add(fill);
const bounce = new THREE.DirectionalLight(0xe1c3a1, .24); bounce.position.set(0, -12, 15); scene.add(bounce);

const groundMat = new THREE.MeshStandardMaterial({ color: 0x9da38f, roughness: 1 });
const ground = new THREE.Mesh(new THREE.CircleGeometry(350, 72), groundMat);
ground.rotation.x = -Math.PI / 2; ground.position.y = -.07; ground.receiveShadow = true; scene.add(ground);
function box(w, h, d, x, y, z, material, parent = scene) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material); m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
}
const plazaMat = new THREE.MeshStandardMaterial({ color: 0x9d7b70, roughness: .96 });
const plaza = box(74, .12, 60, 0, -.005, -1, plazaMat); plaza.castShadow = false;
const pathMat = new THREE.MeshStandardMaterial({ color: 0xc4b8a5, roughness: .95 });
box(26, .07, 6.5, 0, .075, 19.5, pathMat).castShadow = false;
const roadMat = new THREE.MeshStandardMaterial({ color: 0x555b5a, roughness: .97 });
box(170, .10, 20, 0, -.005, 35, roadMat).castShadow = false;
for (let i = -4; i <= 4; i++) box(3.4, .025, .38, i * 6.0, .065, 27.2, pathMat).castShadow = false;
// Bandes latérales de pelouse.
const grassMat = new THREE.MeshStandardMaterial({ color: 0x718064, roughness: 1 });
for (const side of [-1, 1]) box(15, .15, 48, side * 25, .02, -7, grassMat).castShadow = false;

const { church, chapel, hotspots } = createChurch(); scene.add(church, chapel);
// Points d'intérêt à l'intérieur de l'église (repère de la maquette, en mètres).
Object.assign(hotspots, {
  orgue: new THREE.Vector3(0, 9.2, -1.3),
  autel: new THREE.Vector3(0, 3.7, -22.1),
  crucifix: new THREE.Vector3(5.85, 6.4, -19.7),
  vitraux: new THREE.Vector3(0, 9.4, -30.3),
  frise: new THREE.Vector3(-3.2, 5.4, -29.6),
  piliers: new THREE.Vector3(-6.6, 4.4, -11.5),
  voutes: new THREE.Vector3(0, 15.0, -9.9),
  vitre: new THREE.Vector3(-10.4, 3.6, -1.0),
});
const nave = createNave(); scene.add(nave);

// Mobilier urbain simple et familier.
const darkMetal = new THREE.MeshStandardMaterial({ color: 0x262e2c, roughness: .55, metalness: .5 });
const wood = new THREE.MeshStandardMaterial({ color: 0x9c4f3e, roughness: .82 });
const paleStone = new THREE.MeshStandardMaterial({ color: 0xd9d2c3, roughness: .9 });
const lampGlass = new THREE.MeshStandardMaterial({ color: 0xffe2a8, emissive: 0xffc46b, emissiveIntensity: .35, roughness: .28 });
function lamp(x, z, scale = 1) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.scale.setScalar(scale); scene.add(g);
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(.085, .14, 5.8, 10), darkMetal); pole.position.y = 2.9; pole.castShadow = true; g.add(pole);
  const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 5.7, 0), new THREE.Vector3(.1, 6.3, 0), new THREE.Vector3(.8, 6.5, 0), new THREE.Vector3(1.35, 6.0, 0)]);
  const arm = new THREE.Mesh(new THREE.TubeGeometry(curve, 18, .065, 7, false), darkMetal); arm.castShadow = true; g.add(arm);
  const lantern = new THREE.Mesh(new THREE.CylinderGeometry(.24, .34, .65, 6), lampGlass); lantern.position.set(1.35, 5.63, 0); lantern.castShadow = true; g.add(lantern);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(.42, .28, 6), darkMetal); cap.position.set(1.35, 6.08, 0); g.add(cap);
}
lamp(-15.5, 13.0); lamp(16.0, 11.0); lamp(-20, -22, .9);
function bench(x, z, rotation = 0) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotation; scene.add(g);
  for (const sx of [-1, 1]) box(.18, .72, .72, sx * 1.05, .38, 0, paleStone, g);
  for (let i = 0; i < 4; i++) box(2.5, .09, .13, 0, .76, -.25 + i * .17, wood, g);
  for (let i = 0; i < 3; i++) { const slat = box(2.5, .13, .09, 0, 1.0 + i * .18, -.37, wood, g); slat.rotation.x = -.12; }
}
bench(22, 10, -Math.PI / 2); bench(-22, -12, Math.PI / 2);

// Platanes stylisés : troncs, branches et couronnes irrégulières.
const trunkMat = new THREE.MeshStandardMaterial({ color: 0x756b56, roughness: 1 });
const leafMats = [0x667f4d, 0x7e8b50, 0x929358, 0x536f48].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: .96, flatShading: true }));
function tree(x, z, height = 13, spread = 4.4) {
  const g = new THREE.Group(); g.position.set(x, 0, z); scene.add(g);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.34, .57, height * .67, 9), trunkMat); trunk.position.y = height * .335; trunk.castShadow = true; g.add(trunk);
  for (let i = 0; i < 4; i++) {
    const a = i * Math.PI / 2 + rand() * .6;
    const branch = new THREE.Mesh(new THREE.CylinderGeometry(.11, .23, height * .38, 7), trunkMat);
    branch.position.set(Math.cos(a) * spread * .24, height * .63, Math.sin(a) * spread * .24);
    branch.rotation.z = Math.cos(a) * .62; branch.rotation.x = -Math.sin(a) * .62; branch.castShadow = true; g.add(branch);
  }
  for (let i = 0; i < 13; i++) {
    const a = rand() * Math.PI * 2, r = Math.sqrt(rand()) * spread * .72;
    const leaf = new THREE.Mesh(new THREE.IcosahedronGeometry(spread * (.42 + rand() * .18), 1), leafMats[Math.floor(rand() * leafMats.length)]);
    leaf.position.set(Math.cos(a) * r, height * .77 + (rand() - .35) * spread, Math.sin(a) * r);
    leaf.scale.y = .75 + rand() * .3; leaf.rotation.set(rand(), rand(), rand()); leaf.castShadow = true; leaf.receiveShadow = true; g.add(leaf);
  }
}
tree(-23, 12, 14, 4.6); tree(32, 5, 15, 4.8); tree(-25, -25, 14, 4.4); tree(23, -29, 13, 4.1);

// Quelques volumes urbains au loin pour donner de la profondeur sans concurrencer l’église.
const wallMats = [0xc5b9a7, 0xd0c8b9, 0xbfb7a9].map(c => new THREE.MeshStandardMaterial({ color: c, roughness: .95 }));
const roofMat = new THREE.MeshStandardMaterial({ color: 0x596164, roughness: .9 });
function cityBlock(x, z, w, d, h, material) {
  box(w, h, d, x, h / 2, z, material);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.hypot(w, d) * .53, 2.8, 4), roofMat); roof.position.set(x, h + 1.4, z); roof.rotation.y = Math.PI / 4; roof.scale.set(w / Math.hypot(w, d), 1, d / Math.hypot(w, d)); roof.castShadow = true; scene.add(roof);
}
cityBlock(-47, -25, 18, 14, 11, wallMats[0]); cityBlock(48, -35, 20, 16, 12, wallMats[1]);
cityBlock(-58, 10, 15, 13, 10, wallMats[2]); cityBlock(58, 7, 18, 14, 10, wallMats[0]);
cityBlock(-24, -65, 22, 16, 13, wallMats[1]); cityBlock(27, -70, 20, 15, 11, wallMats[2]);

const views = {
  overview: { position: [50, 34, 72], target: [0, 15, -4] },
  parvis: { position: [2, 9.5, 39], target: [0, 12.8, 5] },
  clocher: { position: [22, 29, 45], target: [0, 28, 5.3] },
  rosace: { position: [42, 17, -1], target: [13, 12, -16] },
  // Dans le bas-côté gauche, à l'entrée de l'église, face à la paroi vitrée de la Chapelle des Marins.
  chapelle: { position: [-9.3, 3.55, -1.0], target: [-9.55, 3.57, -1.0], inside: 'nave' },
  // Dans la nef : points de vue d'où l'on tourne la tête.
  nef: { position: [0, 3.5, -1.0], target: [0, 3.53, -1.25], inside: 'nave' },
  'nef-milieu': { position: [0, 3.5, -10.0], target: [0, 3.55, -10.25], inside: 'nave' },
  'nef-choeur': { position: [0, 3.5, -18.4], target: [0, 3.44, -18.65], inside: 'nave' },
  'nef-bascote': { position: [-8.7, 3.4, -1.6], target: [-8.7, 3.43, -1.85], inside: 'nave' },
  'nef-orgue': { position: [0, 3.5, -15.0], target: [0, 3.62, -14.76], inside: 'nave' },
};
// Regarder un point depuis un endroit de la nef : la cible reste tout près de l'œil.
function toward(eye, look) {
  const e = new THREE.Vector3(...eye), d = new THREE.Vector3(...look).sub(e).normalize().multiplyScalar(.25);
  return { position: eye, target: e.add(d).toArray(), inside: 'nave' };
}
Object.assign(views, {
  'poi-orgue': toward([0, 3.5, -12.5], [0, 8.8, -1.3]),
  'poi-autel': toward([0, 3.5, -18.6], [0, 3.0, -22.1]),
  'poi-crucifix': toward([2.2, 3.5, -18.4], [5.85, 6.2, -19.7]),
  'poi-vitraux': toward([0, 3.85, -21.0], [0, 8.6, -30.3]),
  'poi-frise': toward([-.8, 3.85, -21.5], [-3.2, 5.3, -29.6]),
  'poi-piliers': toward([-3.2, 3.5, -8.4], [-6.6, 4.6, -12.5]),
  'poi-voutes': toward([0, 3.5, -7.0], [0, 15.0, -10.5]),
});
const OUTSIDE = { minAzimuthAngle: -Infinity, maxAzimuthAngle: Infinity, minDistance: 18, maxDistance: 125, minPolarAngle: .16, maxPolarAngle: Math.PI / 2 - .025, fov: 43, pan: true };
// À l'intérieur, la cible reste tout près de l'œil : glisser revient à tourner la tête.
const INSIDE = { minAzimuthAngle: Math.PI / 2 - 1.15, maxAzimuthAngle: Math.PI / 2 + 1.15, minDistance: .15, maxDistance: .45, minPolarAngle: .55, maxPolarAngle: Math.PI - .45, fov: 64, pan: false };
const NAVE = { ...INSIDE, minAzimuthAngle: -Infinity, maxAzimuthAngle: Infinity, minPolarAngle: .3, maxPolarAngle: Math.PI - .35 };
// Pendant un passage animé (entrée ou sortie), aucune limite ne retient la caméra.
const TRANSIT = { minAzimuthAngle: -Infinity, maxAzimuthAngle: Infinity, minDistance: .05, maxDistance: 400, minPolarAngle: .02, maxPolarAngle: Math.PI - .02, pan: false };
let inside = false, inNave = false;
function setInside(mode, transit = false) {
  const on = !!mode; inside = on || transit; inNave = mode === 'nave';
  const l = transit ? { ...TRANSIT, fov: mode === 'nave' ? NAVE.fov : OUTSIDE.fov } : mode === 'nave' ? NAVE : on ? INSIDE : OUTSIDE;
  church.visible = mode !== 'nave'; nave.visible = mode === 'nave';
  document.body.classList.toggle('in-nave', mode === 'nave');
  Object.assign(controls, { minAzimuthAngle: l.minAzimuthAngle, maxAzimuthAngle: l.maxAzimuthAngle, minDistance: l.minDistance, maxDistance: l.maxDistance, minPolarAngle: l.minPolarAngle, maxPolarAngle: l.maxPolarAngle, enablePan: l.pan });
  controls.zoomToCursor = !on;
  controls.enableZoom = !(mode === 'nave' && !transit);
  camera.fov = on && innerWidth / innerHeight < .75 ? 84 : l.fov; camera.updateProjectionMatrix();
  document.body.classList.toggle('inside', inside);
}
const details = {
  orgue: { kicker: 'Au-dessus de l’entrée', title: 'La tribune d’orgue', text: 'Portée par les deux premiers piliers, la tribune accueille le buffet d’orgue néogothique en bois sombre, ses tourelles et ses tuyaux de façade, derrière une balustrade en fer forgé.', view: 'poi-orgue', go: 'Se tourner vers l’orgue', photo: 'nef-orgue' },
  autel: { kicker: 'Le chœur', title: 'L’autel', text: 'Entre les septièmes piliers s’ouvre le chœur surélevé, là où officie le prêtre. L’autel de marbre blanc se dresse au-delà de la marche.', view: 'poi-autel', go: 'S’approcher de l’autel', photo: 'choeur' },
  crucifix: { kicker: 'Le chœur', title: 'Le crucifix', text: 'Accroché au septième pilier, le grand crucifix de bois marque l’entrée du chœur. En face, une bannière bleue lui répond.', view: 'poi-crucifix', go: 'Regarder le crucifix', photo: 'choeur' },
  vitraux: { kicker: 'La lumière du chœur', title: 'Les vitraux de l’abside', text: 'Trois grandes verrières éclairent le fond du chœur, au-dessus de la frise peinte, sous la voûte nervurée de l’abside.', view: 'poi-vitraux', go: 'Lever les yeux', photo: 'choeur' },
  frise: { kicker: 'Le chœur', title: 'La frise peinte', text: 'Tout autour de l’abside, une grande frise peinte déroule une foule de personnages, au-dessus des stalles de bois.', view: 'poi-frise', go: 'Regarder la frise', photo: 'choeur' },
  piliers: { kicker: 'La nef', title: 'Les sept piliers', text: 'De chaque côté, sept piliers de pierre en faisceau, coiffés de chapiteaux à feuillages, portent les grandes arcades. Les premiers soutiennent la tribune, les septièmes ouvrent le chœur.', view: 'poi-piliers', go: 'Longer les piliers', photo: 'bas-cote' },
  voutes: { kicker: 'La nef', title: 'Les voûtes', text: 'Les voûtes d’ogives associent des voûtains rouges à des nervures de pierre blanche qui se croisent en clés de voûte au milieu de chaque travée.', view: 'poi-voutes', go: 'Lever les yeux', photo: 'nef-choeur' },
  vitre: { kicker: 'Depuis 1519', title: 'La Chapelle des Marins', text: 'À gauche en entrant, la paroi vitrée laisse voir la chapelle : plafond de bois peint, retables dorés et grille en fer forgé.', view: 'chapelle', go: 'S’approcher de la vitre', photo: 'chapelle-marins' },
  parvis: { kicker: 'Bienvenue', title: 'Le parvis', text: 'Le large escalier de pierre mène au portail principal. Ses ogives superposées, ses colonnettes et ses portes sombres structurent l’entrée de l’église.', view: 'nef', go: 'Entrer dans l’église', photo: 'facade-escalier' },
  clocher: { kicker: 'Le repère', title: 'Le clocher', text: 'La tour associe la brique rouge à des chaînages de pierre claire. Au-dessus de l’horloge, les baies jumelées précèdent les pinacles et la grande flèche octogonale.', view: 'clocher', photo: 'clocher-carrefour' },
  chapelle: { kicker: 'Depuis 1519', title: 'La Chapelle des Marins', text: 'Elle abrite la Vierge rejetée par les flots aux pieds du frère Thomas Illyricus en 1519. Reconstruite ici en 1722, ravagée par un incendie en 1986, elle a été restituée en 1987 dans son état de 1723 : plafond de bois peint, retables dorés et grille en fer forgé. On la découvre à gauche en entrant dans l’église, à travers des parois vitrées.', view: 'chapelle', go: 'Regarder par la vitre', photo: 'chapelle-marins-histoire' },
  rosace: { kicker: 'La lumière', title: 'La rosace', text: 'Sur le transept, la rosace compose un motif rayonnant de huit pétales. Son cercle de pierre contraste délicatement avec le mur de brique.', view: 'rosace', photo: 'transept-rose' },
};
let cameraTween = null;
function setView(name) {
  const v = views[name]; if (!v) return;
  setInside(v.inside || false);
  const toTarget = new THREE.Vector3(...v.target), toPos = new THREE.Vector3(...v.position);
  if (name === 'overview' && innerWidth / innerHeight < .75) toPos.sub(toTarget).multiplyScalar(1.28).add(toTarget);
  cameraTween = { start: performance.now(), fromPos: camera.position.clone(), fromTarget: controls.target.clone(), toPos, toTarget, dur: REDUCED ? 0 : 1150 };
  markActive(name);
}
function markActive(name) {
  document.querySelectorAll('.view-btn').forEach(b => {
    const on = b.dataset.view === name || (b.dataset.view === 'nef' && name.startsWith('nef') && !!b.closest('.view-dock'));
    b.classList.toggle('active', on); if (on) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current');
  });
}

// --- Passage fluide entre l'extérieur et l'intérieur -----------------------------------
// La caméra monte l'escalier, franchit le grand portail (court fondu) et entre dans la nef ;
// la sortie fait le chemin inverse. Sans animation si l'appareil demande moins de mouvement.
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fadeEl = document.getElementById('fade'), announcer = document.getElementById('announce');
const fade = on => fadeEl.classList.toggle('on', on);
const announce = text => { announcer.textContent = ''; setTimeout(() => { announcer.textContent = text; }, 30); };
const PLACES = { 'poi-orgue': 'Vous regardez la tribune d’orgue.', 'poi-autel': 'Vous êtes devant l’autel.', 'poi-crucifix': 'Vous regardez le crucifix.', 'poi-vitraux': 'Vous regardez les vitraux de l’abside.', 'poi-frise': 'Vous regardez la frise peinte.', 'poi-piliers': 'Vous longez les piliers.', 'poi-voutes': 'Vous regardez les voûtes.', nef: 'Vous êtes à l’entrée de la nef, sous la tribune d’orgue portée par les piliers 1.', 'nef-milieu': 'Vous êtes au milieu de la nef.', 'nef-choeur': 'Vous êtes devant le chœur, entre les piliers 7, face à l’autel.', 'nef-bascote': 'Vous êtes dans le bas-côté gauche.', 'nef-orgue': 'Vous regardez la tribune d’orgue.', chapelle: 'Vous êtes à gauche de l’entrée, devant la paroi vitrée de la Chapelle des Marins.' };
let path = null;
function runPath(steps) {
  path = { steps, i: -1 }; controls.enabled = false; cameraTween = null; nextStep();
}
function nextStep() {
  if (!path) return;
  const st = path.steps[++path.i];
  if (!st) { path = null; controls.enabled = true; return; }
  st.before?.();
  if (st.jump) { camera.position.set(...st.jump[0]); controls.target.set(...st.jump[1]); }
  if (st.to) cameraTween = { start: performance.now(), fromPos: camera.position.clone(), fromTarget: controls.target.clone(), toPos: new THREE.Vector3(...st.to[0]), toTarget: new THREE.Vector3(...st.to[1]), dur: REDUCED ? 0 : st.dur, onEnd: nextStep };
  else setTimeout(nextStep, REDUCED ? 60 : st.wait || 0);
  needsRender = true;
}
const walkHint = document.getElementById('walk-hint');
let walkHintTimer = null;
function showWalkHint() { walkHint.classList.add('show'); clearTimeout(walkHintTimer); walkHintTimer = setTimeout(() => walkHint.classList.remove('show'), 7000); }
function enterChurch(then = 'nef') {
  const v = views[then];
  announce('Vous montez l’escalier et entrez par le grand portail.');
  hideZoomHint();
  // Depuis l'arrière ou les côtés, on contourne d'abord l'église par le haut pour rejoindre le parvis.
  const detour = camera.position.z < 12 ? [{ to: [[camera.position.x >= 0 ? 34 : -34, 24, 34], [0, 8, 4]], dur: 1300 }] : [];
  runPath([
    ...detour,
    { before: () => { setInside(false, true); document.getElementById('detail-card').classList.remove('open'); }, to: [[0, 4.8, 25], [0, 5.4, 8]], dur: 1500 },
    { to: [[0, 4.0, 11.8], [0, 4.0, 8]], dur: 1500 },
    { before: () => fade(true), to: [[0, 3.8, 10.3], [0, 3.8, 7]], dur: 380 },
    { before: () => { setInside('nave', true); fade(false); }, jump: [[0, 3.5, 1.5], [0, 3.5, -1.5]], to: [[0, 3.5, -1.0], [0, 3.53, -1.25]], dur: 1500 },
    ...(then !== 'nef' ? [{ to: [v.position, v.target], dur: 1700 }] : []),
    { before: () => { setInside('nave'); markActive(then); announce(PLACES[then] + ' Touchez le sol pour y marcher, ou utilisez les flèches du clavier : haut et bas pour avancer, gauche et droite pour tourner.'); showWalkHint(); } },
  ]);
}
function leaveChurch(then = 'parvis') {
  const v = views[then];
  announce('Vous sortez par le grand portail.');
  runPath([
    { before: () => { setInside('nave', true); fade(true); }, to: [[0, 3.5, -.6], [0, 3.5, 1.5]], dur: 500 },
    { before: () => { setInside(false, true); fade(false); }, jump: [[0, 3.8, 10.0], [0, 4.0, 13]], to: [[0, 4.6, 16], [0, 4.4, 24]], dur: 1300 },
    { to: [v.position, v.target], dur: 1800 },
    { before: () => { setInside(false); markActive(then); announce('Vous êtes à l’extérieur de l’église.'); } },
  ]);
}
// --- Zoomer vers l'église fait entrer dans la nef -----------------------------------------
// Arrivé au zoom maximal à l'extérieur, un message invite à continuer ; un geste de plus
// (molette ou pincement) déclenche l'entrée par le grand portail.
const zoomHint = document.getElementById('zoom-hint');
let zoomPush = 0, zoomHintTimer = null;
function hideZoomHint() { zoomPush = 0; zoomHint.classList.remove('show'); }
function pushInward(amount) {
  if (inside || path) return;
  if (camera.position.distanceTo(controls.target) > OUTSIDE.minDistance + .6) { hideZoomHint(); return; }
  zoomPush += amount;
  zoomHint.classList.add('show'); clearTimeout(zoomHintTimer);
  zoomHintTimer = setTimeout(hideZoomHint, 2600);
  if (zoomPush >= 3) enterChurch('nef');
}
renderer.domElement.addEventListener('wheel', e => { if (e.deltaY < 0) pushInward(Math.min(1.5, Math.max(.5, -e.deltaY / 100))); }, { passive: true });
let pinch = null;
renderer.domElement.addEventListener('touchstart', e => { pinch = e.touches.length === 2 ? Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY) : null; }, { passive: true });
renderer.domElement.addEventListener('touchmove', e => {
  if (e.touches.length !== 2 || pinch === null) return;
  const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
  if (d > pinch * 1.12) { pushInward(1); pinch = d; } else if (d < pinch * .9) pinch = d;
}, { passive: true });
document.getElementById('zoom-hint-go').addEventListener('click', () => enterChurch('nef'));

// Toute navigation passe par ici : entrée ou sortie animée quand on change de côté du portail.
function goTo(name) {
  const v = views[name]; if (!v || path) return;
  const wantNave = v.inside === 'nave';
  if (wantNave && !inNave) enterChurch(name);
  else if (!wantNave && inNave) leaveChurch(name);
  else { setView(name); if (wantNave) announce(PLACES[name] || ''); }
}
function openDetail(name) {
  const d = details[name]; if (!d) return;
  document.getElementById('card-kicker').textContent = d.kicker;
  document.getElementById('card-title').textContent = d.title;
  document.getElementById('card-text').textContent = d.text;
  document.getElementById('card-go').dataset.view = d.view;
  document.getElementById('card-go').textContent = d.go || 'Admirer de plus près';
  const ph = document.getElementById('card-photo');
  ph.hidden = !d.photo; if (d.photo) { ph.dataset.file = d.photo; ph.querySelector('img').src = `./photos/miniatures/${d.photo}.jpg`; ph.querySelector('img').alt = `Photo : ${d.title}`; }
  document.getElementById('detail-card').classList.add('open');
}
document.querySelectorAll('.view-btn').forEach(b => b.addEventListener('click', () => goTo(b.dataset.view)));
document.querySelectorAll('.hotspot').forEach(b => b.addEventListener('click', () => openDetail(b.dataset.hotspot)));
document.getElementById('card-photo').addEventListener('click', e => gallery.openFile(e.currentTarget.dataset.file));
document.getElementById('detail-close').addEventListener('click', () => document.getElementById('detail-card').classList.remove('open'));
document.getElementById('card-go').addEventListener('click', e => { document.getElementById('detail-card').classList.remove('open'); goTo(e.currentTarget.dataset.view); });
const rotateBtn = document.getElementById('rotate-btn');
rotateBtn.addEventListener('click', () => { controls.autoRotate = !controls.autoRotate; rotateBtn.classList.toggle('active', controls.autoRotate); rotateBtn.setAttribute('aria-pressed', String(controls.autoRotate)); });
controls.addEventListener('start', () => { if (!path) cameraTween = null; if (controls.autoRotate) { controls.autoRotate = false; rotateBtn.classList.remove('active'); rotateBtn.setAttribute('aria-pressed', 'false'); } });

let golden = false;
document.getElementById('light-btn').addEventListener('click', e => {
  golden = !golden; e.currentTarget.classList.toggle('active', golden);
  sun.color.set(golden ? 0xffb46f : 0xffe6c4); sun.intensity = golden ? 3.6 : 3.15;
  sun.position.set(golden ? -60 : -42, golden ? 30 : 65, golden ? 28 : 38);
  hemi.intensity = golden ? 1.05 : 1.55; fill.intensity = golden ? .48 : .7;
  const horizon = new THREE.Color(golden ? 0xe7c8ac : 0xd8e1df);
  skyUniforms.horizonColor.value.copy(horizon); skyUniforms.topColor.value.set(golden ? 0x7e8295 : 0x77a8c2);
  skyUniforms.sunColor.value.set(golden ? 0xffb36b : 0xfff0cf); skyUniforms.sunDirection.value.set(golden ? -.78 : -.48, golden ? .28 : .64, .45).normalize();
  scene.fog.color.copy(horizon); scene.background.copy(horizon); renderer.toneMappingExposure = golden ? .96 : 1.03;
  renderer.shadowMap.needsUpdate = true;
  draw(true);
});
document.getElementById('screenshot-btn').addEventListener('click', () => {
  draw(true);
  const a = document.createElement('a');
  a.href = renderer.domElement.toDataURL('image/png');
  a.download = 'notre-dame-arcachon-vue-3d.png';
  document.body.appendChild(a); a.click(); a.remove();
});
const drawer = document.getElementById('photo-drawer'), scrim = document.getElementById('scrim');
function photoDrawer(open) { drawer.classList.toggle('open', open); scrim.classList.toggle('open', open); drawer.setAttribute('aria-hidden', String(!open)); }
document.getElementById('photos-btn').addEventListener('click', () => photoDrawer(true));
document.getElementById('photos-close').addEventListener('click', () => photoDrawer(false)); scrim.addEventListener('click', () => photoDrawer(false));
const help = document.getElementById('help-dialog');
document.getElementById('help-btn').addEventListener('click', () => help.showModal());
document.getElementById('help-close').addEventListener('click', () => help.close()); document.getElementById('understood').addEventListener('click', () => help.close());
const gallery = setupGallery(document.getElementById('gallery'));
addEventListener('keydown', e => { if (e.key === 'Escape' && !gallery.isOpen()) photoDrawer(false); });
// --- Marcher librement dans la nef ------------------------------------------------------
// Toucher le sol pour y aller, molette ou pincement pour avancer et reculer, clavier pour tout.
// On ne traverse ni les piliers, ni les bancs, ni les murs ; le chœur surélevé relève le regard.
const PIERS_Z = [-2.8, -5.7, -8.6, -11.5, -14.4, -17.3, -20.2];
const clampN = (v, a, b) => Math.min(b, Math.max(a, v));
function walkable(x, z) {
  x = clampN(x, -10.2, 10.2); z = clampN(z, -30.2, 2.0);
  if (z > -.45) { x = Math.min(x, -7.0); }                                   // seul le bas-côté gauche longe la chapelle
  if (z < -20.7 && Math.abs(x) > 6.15) x = Math.sign(x) * (z < -22.5 ? 5.9 : 6.15);   // murs du chœur
  if (z < -24.4) { const dx = x, dz = z + 24.8, r = Math.hypot(dx, dz); if (r > 4.5) { x = dx * 4.5 / r; z = -24.8 + dz * 4.5 / r; } }
  const push = (cx, cz, rad) => { const dx = x - cx, dz = z - cz, d = Math.hypot(dx, dz); if (d < rad) { const k = d > 1e-4 ? rad / d : 1; x = cx + (d > 1e-4 ? dx : rad) * k; z = cz + (d > 1e-4 ? dz : 0) * k; } };
  for (const pz of PIERS_Z) for (const px of [-6.6, 6.6]) push(px, pz, .95);
  for (const [x0, x1, z0, z1] of [[.55, 5.85, -19.05, -3.25], [-5.85, -.55, -19.05, -3.25], [-1.5, 1.5, -22.8, -21.4]]) {
    if (x > x0 && x < x1 && z > z0 && z < z1) {
      const opts = [[x0 - .01, z, x - x0], [x1 + .01, z, x1 - x], [x, z0 - .01, z - z0], [x, z1 + .01, z1 - z]].sort((a, b) => a[2] - b[2]);
      x = opts[0][0]; z = opts[0][1];
    }
  }
  return [x, z];
}
const eyeAt = z => 3.5 + (z < -20.0 ? .35 : 0);
const lookDir = new THREE.Vector3();
function walkTo(x, z, dur) {
  [x, z] = walkable(x, z);
  lookDir.copy(controls.target).sub(camera.position);
  const toPos = new THREE.Vector3(x, eyeAt(z), z);
  const d = toPos.distanceTo(camera.position);
  cameraTween = { start: performance.now(), fromPos: camera.position.clone(), fromTarget: controls.target.clone(), toPos, toTarget: toPos.clone().add(lookDir), dur: REDUCED ? 0 : dur ?? clampN(d / 3.2 * 1000, 250, 2600) };
  markActive(''); needsRender = true;
  return d;
}
function stepWalk(dist) {
  lookDir.copy(controls.target).sub(camera.position); lookDir.y = 0;
  if (lookDir.lengthSq() < 1e-6) return;
  lookDir.normalize().multiplyScalar(dist);
  const [x, z] = walkable(camera.position.x + lookDir.x, camera.position.z + lookDir.z);
  const move = new THREE.Vector3(x - camera.position.x, eyeAt(z) - camera.position.y, z - camera.position.z);
  camera.position.add(move); controls.target.add(move); cameraTween = null; needsRender = true; markActive('');
}
// Repère au sol de la destination.
const marker = new THREE.Mesh(new THREE.RingGeometry(.22, .34, 32), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: .85, depthWrite: false }));
marker.rotation.x = -Math.PI / 2; marker.visible = false; scene.add(marker);
let markerTimer = null;
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
let tap = null;
renderer.domElement.addEventListener('pointerdown', e => { tap = { x: e.clientX, y: e.clientY, t: performance.now() }; });
renderer.domElement.addEventListener('pointerup', e => {
  if (!tap || !inNave || path) return;
  const moved = Math.hypot(e.clientX - tap.x, e.clientY - tap.y), dt = performance.now() - tap.t; tap = null;
  if (moved > 7 || dt > 450) return;
  const r = renderer.domElement.getBoundingClientRect();
  ndc.set((e.clientX - r.left) / r.width * 2 - 1, -(e.clientY - r.top) / r.height * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObject(nave, true).find(h => h.object.isMesh);
  if (!hit) return;
  let { x, z } = hit.point;
  if (hit.point.y > 2.4) {                                                    // mur, pilier, voûte : on s'en approche
    const dx = x - camera.position.x, dz = z - camera.position.z, d = Math.hypot(dx, dz);
    const keep = Math.max(0, d - 1.4); x = camera.position.x + dx / (d || 1) * keep; z = camera.position.z + dz / (d || 1) * keep;
  }
  [x, z] = walkable(x, z);
  marker.position.set(x, (z < -20.0 ? 2.16 : 1.83), z); marker.visible = true;
  clearTimeout(markerTimer); markerTimer = setTimeout(() => { marker.visible = false; needsRender = true; }, 1600);
  walkTo(x, z);
});
renderer.domElement.addEventListener('wheel', e => { if (inNave && !path) { e.preventDefault(); stepWalk(clampN(-e.deltaY / 100, -1.5, 1.5) * .6); } }, { passive: false });
let walkPinch = null;
renderer.domElement.addEventListener('touchstart', e => { walkPinch = e.touches.length === 2 ? Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY) : null; }, { passive: true });
renderer.domElement.addEventListener('touchmove', e => {
  if (!inNave || path || e.touches.length !== 2 || walkPinch === null) return;
  const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
  stepWalk((d - walkPinch) * .03); walkPinch = d;
}, { passive: true });

// Clavier. Dans la nef : ↑/↓ (ou Z/W, S) avancer et reculer, ←/→ (ou Q/A, D) tourner,
// Page↑/Page↓ regarder en haut ou en bas. Dehors : les flèches font tourner autour de l'église.
const sph = new THREE.Spherical(), off = new THREE.Vector3();
function turnView(dTheta, dPhi) {
  cameraTween = null;
  off.copy(camera.position).sub(controls.target); sph.setFromVector3(off);
  sph.theta += dTheta; sph.phi += dPhi;
  off.setFromSpherical(sph); camera.position.copy(controls.target).add(off); controls.update(); needsRender = true;
}
addEventListener('keydown', e => {
  if (path || gallery.isOpen() || document.querySelector('dialog[open]') || /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName || '')) return;
  const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
  if (inNave) {
    const fwd = { ArrowUp: 1, z: 1, w: 1, ArrowDown: -1, s: -1 }[k];
    const turn = { ArrowLeft: 1, q: 1, a: 1, ArrowRight: -1, d: -1 }[k];
    const look = { PageUp: 1, PageDown: -1 }[k];
    if (fwd) { e.preventDefault(); stepWalk(fwd * .7); }
    else if (turn) { e.preventDefault(); turnView(turn * .12, 0); }
    else if (look) { e.preventDefault(); turnView(0, look * .08); }
    return;
  }
  const turn = { ArrowLeft: [.12, 0], ArrowRight: [-.12, 0], ArrowUp: [0, -.08], ArrowDown: [0, .08] }[k];
  if (!turn) return;
  e.preventDefault(); turnView(turn[0], turn[1] * (inside ? -1 : 1));
});

const projected = new THREE.Vector3();
function updateHotspots() {
  document.querySelectorAll('.hotspot').forEach(el => {
    const p = hotspots[el.dataset.hotspot]; projected.copy(p).project(camera);
    const zoneIn = el.dataset.zone === 'in';
    let visible = (zoneIn ? inNave && !path && camera.position.distanceTo(p) < 24 : !inside) && projected.z > -1 && projected.z < 1 && Math.abs(projected.x) < .96 && Math.abs(projected.y) < .92;
    if (el.dataset.hotspot === 'parvis' && camera.position.z < 0) visible = false;
    if (el.dataset.hotspot === 'rosace' && camera.position.x < 9) visible = false;
    if (el.dataset.hotspot === 'chapelle' && camera.position.x > -12) visible = false;
    el.style.display = visible ? 'flex' : 'none';
    if (visible) { el.style.left = `${(projected.x * .5 + .5) * innerWidth}px`; el.style.top = `${(-projected.y * .5 + .5) * innerHeight}px`; }
  });
}
let needsRender = true;
function draw(force = false) {
  let animating = false;
  if (cameraTween) {
    const dur = cameraTween.dur ?? 1150, raw = dur > 0 ? Math.min(1, (performance.now() - cameraTween.start) / dur) : 1, t = raw * raw * (3 - 2 * raw);
    camera.position.lerpVectors(cameraTween.fromPos, cameraTween.toPos, t); controls.target.lerpVectors(cameraTween.fromTarget, cameraTween.toTarget, t);
    if (raw >= 1) { const done = cameraTween.onEnd; cameraTween = null; if (done) setTimeout(done, 0); } else animating = true;
  }
  const changed = controls.update();
  if (force || needsRender || changed || animating || controls.autoRotate) {
    renderer.render(scene, camera); updateHotspots(); drawPlan(); needsRender = false;
  }
}
renderer.setAnimationLoop(() => draw());
window.__seek = () => { cameraTween = null; controls.autoRotate = false; draw(true); };
// Pour les vérifications automatiques : placer la caméra librement à l'extérieur.
window.__cam = (p, t) => { cameraTween = null; setInside(false, true); camera.position.set(...p); controls.target.set(...t); controls.update(); draw(true); };
window.__play = () => draw(true);
window.__SCENE_STATS__ = () => ({ calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries });
// --- Mini-plan : « vous êtes ici », et toucher le plan pour s'y rendre --------------------
const planBox = document.getElementById('plan'), plan = document.getElementById('plan-canvas'), pctx = plan.getContext('2d');
const PLAN = { x0: -21, x1: 21, z0: -32, z1: 19 };                    // chœur en haut, parvis en bas
const SHAPES = {
  terrace: [[-16, -28.5, 16, 9.85]],
  steps: [[-10.4, 9.45, 10.4, 17.2]],
  church: [[-10.6, -24.4, 10.6, 0], [-10.6, 0, -6.6, 2.4], [-15.2, -20.25, 15.2, -11.75], [-9.15, 0, 9.15, 9], [9, 3, 11.35, 9]],
  tower: [[-3.65, 1.6, 3.65, 8.9]],
  chapel: [[-19.4, -4.6, -11.2, 2.6]],
  annex: [[-12.55, -8.05, -11.05, -4.65], [-14.1, -11.5, -11.1, -8.1]],
};
let planSize = { w: 0, h: 0 };
function toPlan(x, z) { return [(x - PLAN.x0) / (PLAN.x1 - PLAN.x0) * planSize.w, (z - PLAN.z0) / (PLAN.z1 - PLAN.z0) * planSize.h]; }
function fromPlan(px, py) { return [PLAN.x0 + px / planSize.w * (PLAN.x1 - PLAN.x0), PLAN.z0 + py / planSize.h * (PLAN.z1 - PLAN.z0)]; }
function sizePlan() {
  const r = plan.getBoundingClientRect(), dpr = Math.min(devicePixelRatio, 2);
  planSize = { w: r.width, h: r.height }; plan.width = r.width * dpr; plan.height = r.height * dpr; pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
const inside2D = (x, z, rects) => rects.some(([a, b, c, d]) => x >= a && x <= c && z >= b && z <= d);
const inChurch = (x, z) => inside2D(x, z, SHAPES.church) || Math.hypot(x, z + 25) < 6.9;
function drawPlan() {
  if (planBox.classList.contains('collapsed')) return;
  if (!planSize.w) sizePlan();
  const { w, h } = planSize; pctx.clearRect(0, 0, w, h);
  const rect = (rs, fill, stroke) => rs.forEach(([a, b, c, d]) => { const [x0, y0] = toPlan(a, b), [x1, y1] = toPlan(c, d); pctx.fillStyle = fill; pctx.fillRect(x0, y0, x1 - x0, y1 - y0); if (stroke) { pctx.strokeStyle = stroke; pctx.strokeRect(x0, y0, x1 - x0, y1 - y0); } });
  rect(SHAPES.terrace, 'rgba(160,130,120,.35)'); rect(SHAPES.steps, 'rgba(220,210,190,.9)');
  const ch = inNave ? 'rgba(240,232,214,.98)' : 'rgba(178,96,70,.85)';
  rect(SHAPES.church, ch);
  const [ax, ay] = toPlan(0, -25), [rx] = toPlan(6.9, 0), r = rx - toPlan(0, 0)[0];
  pctx.fillStyle = ch; pctx.beginPath(); pctx.arc(ax, ay, r, Math.PI, 0); pctx.fill();
  rect(SHAPES.tower, 'rgba(214,200,170,.98)', 'rgba(120,100,80,.6)');
  rect(SHAPES.chapel, 'rgba(150,120,90,.95)'); rect(SHAPES.annex, 'rgba(205,196,182,.95)');
  if (inNave) {                                                          // piliers, autel, tribune
    pctx.fillStyle = 'rgba(120,105,85,.95)';
    for (const z of PIERS_Z) for (const x of [-6.6, 6.6]) { const [px, py] = toPlan(x, z); pctx.beginPath(); pctx.arc(px, py, 2.2, 0, Math.PI * 2); pctx.fill(); }
    rect([[-1.25, -22.7, 1.25, -21.5]], 'rgba(255,255,255,.95)', 'rgba(120,105,85,.8)');
    rect([[-6.35, -2.8, 6.35, 0]], 'rgba(120,80,50,.35)');
    rect([[-10.65, -4.15, -10.5, 2.15]], 'rgba(90,160,200,.95)');
  }
  // Vous êtes ici : point et cône de vision.
  let [cx, cy] = toPlan(camera.position.x, camera.position.z);
  const off = cx < 6 || cx > w - 6 || cy < 6 || cy > h - 6;
  cx = Math.min(w - 6, Math.max(6, cx)); cy = Math.min(h - 6, Math.max(6, cy));
  const dx = controls.target.x - camera.position.x, dz = controls.target.z - camera.position.z, a = Math.atan2(dz, dx);
  pctx.fillStyle = 'rgba(166,83,61,.28)'; pctx.beginPath(); pctx.moveTo(cx, cy); pctx.arc(cx, cy, inNave ? 30 : 22, a - .5, a + .5); pctx.closePath(); pctx.fill();
  pctx.fillStyle = '#a6533d'; pctx.strokeStyle = '#fff'; pctx.lineWidth = 2;
  pctx.beginPath(); pctx.arc(cx, cy, off ? 4 : 5, 0, Math.PI * 2); pctx.fill(); pctx.stroke(); pctx.lineWidth = 1;
}
plan.addEventListener('click', e => {
  if (path) return;
  const r = plan.getBoundingClientRect(), [x, z] = fromPlan(e.clientX - r.left, e.clientY - r.top);
  if (inside2D(x, z, SHAPES.chapel)) { goTo('chapelle'); return; }
  if (inChurch(x, z)) {
    if (inNave) { walkTo(x, z); announce('Vous vous déplacez dans la nef.'); }
    else { enterChurch('nef'); }
    return;
  }
  if (inNave) { leaveChurch('parvis'); return; }
  // Dehors : on tourne autour de l'église pour regarder l'endroit touché.
  const t = new THREE.Vector3(x * .5, 9, z * .5), o = camera.position.clone().sub(controls.target);
  const dir = new THREE.Vector3(x, 0, z).normalize(); const dist = Math.max(40, o.length());
  const toPos = t.clone().add(new THREE.Vector3(dir.x * dist * .9, dist * .45, dir.z * dist * .9));
  cameraTween = { start: performance.now(), fromPos: camera.position.clone(), fromTarget: controls.target.clone(), toPos, toTarget: t, dur: REDUCED ? 0 : 1100 };
  markActive(''); needsRender = true;
});
document.getElementById('plan-toggle').addEventListener('click', () => {
  const c = planBox.classList.toggle('collapsed');
  document.getElementById('plan-toggle').setAttribute('aria-expanded', String(!c));
  try { localStorage.setItem('plan-collapsed', c ? '1' : '0'); } catch (e) {}
  if (!c) { sizePlan(); draw(true); }
});
try { if (localStorage.getItem('plan-collapsed') === '1') { planBox.classList.add('collapsed'); document.getElementById('plan-toggle').setAttribute('aria-expanded', 'false'); } } catch (e) {}
addEventListener('resize', () => { if (!planBox.classList.contains('collapsed')) sizePlan(); });

addEventListener('scene-dirty', () => draw(true));   // une texture photo vient d'arriver
addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; if (inside) { camera.fov = camera.aspect < .75 ? 84 : INSIDE.fov; camera.updateProjectionMatrix(); } camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6)); draw(true); });
draw(true);
requestAnimationFrame(() => requestAnimationFrame(() => { const loading = document.getElementById('loading'); if (loading) { loading.classList.add('done'); setTimeout(() => loading.remove(), 700); } window.__SCENE_READY__ = true; }));
const params = new URLSearchParams(location.search);
if (params.has('t')) window.__seek(Number(params.get('t')));
if (params.get('capture') === '1') { renderer.setAnimationLoop(null); controls.enableDamping = false; document.getElementById('loading')?.remove(); draw(true); window.__SCENE_READY__ = true; }
