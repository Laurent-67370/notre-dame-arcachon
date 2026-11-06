import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { photoTex } from './textures.js';

const TAU = Math.PI * 2;

function rng(seed) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const random = rng(33120);

function canvasTexture(size, painter, repeat = [1, 1]) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  painter(ctx, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(...repeat);
  texture.anisotropy = 8;
  return texture;
}

function brickTexture() {
  return canvasTexture(512, (ctx, s) => {
    ctx.fillStyle = '#b8aa96'; ctx.fillRect(0, 0, s, s);
    const bh = 32, bw = 86;
    const colors = ['#a96f58', '#b67a60', '#9e644f', '#bd8267', '#a56b55', '#c08a70'];
    for (let row = -1; row < s / bh + 1; row++) {
      const offset = (row & 1) ? -bw / 2 : 0;
      for (let x = offset; x < s; x += bw) {
        const inset = 2 + random() * 1.5;
        ctx.fillStyle = colors[Math.floor(random() * colors.length)];
        ctx.fillRect(x + inset, row * bh + inset, bw - inset * 2, bh - inset * 2);
        ctx.fillStyle = `rgba(255,225,195,${0.025 + random() * 0.05})`;
        ctx.fillRect(x + inset, row * bh + inset, bw - inset * 2, 2);
        for (let n = 0; n < 7; n++) {
          ctx.fillStyle = `rgba(65,35,25,${random() * 0.08})`;
          ctx.fillRect(x + random() * bw, row * bh + random() * bh, 2 + random() * 6, 1);
        }
      }
    }
  }, [3.2, 3.2]);
}

function stoneTexture() {
  return canvasTexture(256, (ctx, s) => {
    ctx.fillStyle = '#d9cfb9'; ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 7000; i++) {
      const v = random() > .5 ? 255 : 70;
      ctx.fillStyle = `rgba(${v},${v},${v},${random() * .035})`;
      ctx.fillRect(random() * s, random() * s, 1 + random() * 2, 1 + random() * 2);
    }
  }, [2, 2]);
}

function tileTexture(base, palette, h, w, rowShadow) {
  return canvasTexture(512, (ctx, s) => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, s, s);
    for (let row = 0; row < s / h + 1; row++) {
      for (let x = -(row % 2) * w / 2; x < s; x += w) {
        ctx.fillStyle = palette[Math.floor(random() * palette.length)];
        ctx.fillRect(x + 1, row * h + 1, w - 2, h - 2);
        ctx.fillStyle = `rgba(30,12,8,${rowShadow})`;
        ctx.fillRect(x + 1, row * h + h - 5, w - 2, 4);
        ctx.fillStyle = 'rgba(255,220,190,.07)';
        ctx.fillRect(x + 2, row * h + 2, w - 4, 1);
      }
    }
  }, [3, 5]);
}

// Moellons de garluche : grès ferrugineux brun sombre du soubassement.
function ironstoneTexture() {
  return canvasTexture(256, (ctx, s) => {
    ctx.fillStyle = '#c9bca4'; ctx.fillRect(0, 0, s, s);
    const colors = ['#4a2e22', '#5b3a2a', '#3d261d', '#6a4532', '#54362a', '#2f211b'];
    for (let i = 0; i < 260; i++) {
      const w = 14 + random() * 26, h = 9 + random() * 14, x = random() * s, y = random() * s;
      ctx.fillStyle = colors[Math.floor(random() * colors.length)];
      ctx.beginPath(); ctx.ellipse(x, y, w / 2, h / 2, random() * .5 - .25, 0, TAU); ctx.fill();
    }
  }, [6, 1]);
}

// --- Textures de la Chapelle des Marins ---------------------------------------------
// Plafond de bois peint : planches, grands cadres brun-rouge et rinceaux bleu-gris et ocre.
function paintedCeilingTexture() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 512;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#e4dbc4'; ctx.fillRect(0, 0, 1024, 512);
  for (let x = 0; x < 1024; x += 32) { ctx.fillStyle = `rgba(90,70,45,${.05 + random() * .05})`; ctx.fillRect(x, 0, 2, 512); }
  ctx.strokeStyle = '#8c4a38'; ctx.lineWidth = 9;
  ctx.strokeRect(24, 24, 976, 464);
  ctx.beginPath();                         // grand octogone central
  for (let i = 0; i < 8; i++) { const a = i * TAU / 8 + Math.PI / 8; ctx.lineTo(512 + Math.cos(a) * 230, 256 + Math.sin(a) * 175); }
  ctx.closePath(); ctx.stroke();
  for (const x of [70, 790]) ctx.strokeRect(x, 70, 164, 372);   // cadres latéraux
  ctx.lineWidth = 4; ctx.strokeStyle = '#a8644a';
  for (const x of [88, 808]) ctx.strokeRect(x, 88, 128, 336);
  ctx.beginPath(); ctx.ellipse(512, 256, 120, 86, 0, 0, TAU); ctx.stroke();
  function scroll(x, y, r, flip, color) {   // rinceau en « S »
    ctx.strokeStyle = color; ctx.lineWidth = 6; ctx.beginPath();
    ctx.arc(x, y, r, Math.PI * (flip ? .1 : 1.1), Math.PI * (flip ? 1.6 : 2.6)); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + r * 1.8 * (flip ? -1 : 1), y + r * .4, r * .7, 0, Math.PI * 1.4); ctx.stroke();
    ctx.fillStyle = color; ctx.beginPath(); ctx.ellipse(x + r * .9 * (flip ? -1 : 1), y - r * .9, r * .5, r * .22, .6, 0, TAU); ctx.fill();
  }
  for (const [x, y, r, f, col] of [[300, 120, 30, 0, '#5f7f8c'], [724, 120, 30, 1, '#5f7f8c'], [300, 392, 30, 0, '#b0823a'], [724, 392, 30, 1, '#b0823a'],
    [152, 170, 22, 0, '#b0823a'], [872, 170, 22, 1, '#b0823a'], [152, 342, 22, 0, '#5f7f8c'], [872, 342, 22, 1, '#5f7f8c'], [430, 256, 24, 1, '#5f7f8c'], [594, 256, 24, 0, '#5f7f8c']])
    scroll(x, y, r, f, col);
  ctx.fillStyle = '#6d8796'; ctx.beginPath(); ctx.ellipse(512, 256, 52, 36, 0, 0, TAU); ctx.fill();   // médaillon
  ctx.fillStyle = '#e9e1cc'; ctx.beginPath(); ctx.ellipse(512, 262, 15, 26, 0, 0, TAU); ctx.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
// Sol en tomettes posées en diagonale.
function tometteTexture() {
  return canvasTexture(512, (ctx, s) => {
    ctx.fillStyle = '#6e4a36'; ctx.fillRect(0, 0, s, s);
    const colors = ['#9c5a3c', '#a8653f', '#8b4f37', '#b37350', '#7f4733', '#a26a4c'];
    ctx.save(); ctx.translate(s / 2, s / 2); ctx.rotate(Math.PI / 4); ctx.translate(-s, -s);
    for (let x = 0; x < s * 2; x += 46) for (let y = 0; y < s * 2; y += 46) {
      ctx.fillStyle = colors[Math.floor(random() * colors.length)]; ctx.fillRect(x + 2, y + 2, 42, 42);
    }
    ctx.restore();
  }, [3, 2]);
}
// Murs bleu-gris à panneaux soulignés d'or.
function panelWallTexture() {
  return canvasTexture(256, (ctx, s) => {
    ctx.fillStyle = '#b4c0c2'; ctx.fillRect(0, 0, s, s);
    ctx.strokeStyle = '#c9a85a'; ctx.lineWidth = 4; ctx.strokeRect(26, 30, s - 52, s - 60);
    ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 2; ctx.strokeRect(36, 40, s - 72, s - 80);
  }, [4, 1]);
}
// Grille en fer forgé : barreaux et volutes, sur fond transparent.
function grilleTexture() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 256;
  const ctx = c.getContext('2d'); ctx.strokeStyle = '#141414'; ctx.lineCap = 'round';
  ctx.lineWidth = 5; ctx.strokeRect(4, 4, 1016, 248);
  ctx.lineWidth = 3;
  for (let x = 32; x < 1024; x += 48) { ctx.beginPath(); ctx.moveTo(x, 6); ctx.lineTo(x, 250); ctx.stroke(); }
  for (let x = 56; x < 1024; x += 96) {
    ctx.beginPath(); ctx.arc(x, 40, 14, Math.PI * .2, Math.PI * 1.8); ctx.stroke();
    ctx.beginPath(); ctx.arc(x, 216, 14, Math.PI * 1.2, Math.PI * 2.8); ctx.stroke();
  }
  ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(0, 20); ctx.lineTo(1024, 20); ctx.moveTo(0, 236); ctx.lineTo(1024, 236); ctx.stroke();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
// Tableau d'autel : la Vierge au manteau bleu, nimbée.
function altarPaintingTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 384;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 384); g.addColorStop(0, '#5a5040'); g.addColorStop(1, '#2c2620');
  ctx.fillStyle = g; ctx.fillRect(0, 0, 256, 384);
  ctx.fillStyle = 'rgba(240,210,130,.55)'; ctx.beginPath(); ctx.arc(128, 105, 46, 0, TAU); ctx.fill();
  ctx.fillStyle = '#e8d6bd'; ctx.beginPath(); ctx.ellipse(128, 110, 22, 27, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#35588a'; ctx.beginPath(); ctx.moveTo(128, 82); ctx.quadraticCurveTo(64, 160, 72, 350); ctx.lineTo(184, 350); ctx.quadraticCurveTo(192, 160, 128, 82); ctx.fill();
  ctx.fillStyle = '#c6574a'; ctx.beginPath(); ctx.moveTo(110, 150); ctx.lineTo(146, 150); ctx.lineTo(154, 350); ctx.lineTo(102, 350); ctx.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// Coordonnées de texture « au mètre » : chaque face prend la projection du mur sur son plan
// dominant, si bien que briques et pierres gardent la même taille sur tous les volumes.
function worldUV(geometry) {
  const pos = geometry.attributes.position, nor = geometry.attributes.normal;
  const uv = new Float32Array(pos.count * 2);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    const ax = Math.abs(nor.getX(i)), ay = Math.abs(nor.getY(i)), az = Math.abs(nor.getZ(i));
    if (ay >= ax && ay >= az) { uv[i * 2] = x; uv[i * 2 + 1] = z; }
    else if (ax >= az) { uv[i * 2] = z; uv[i * 2 + 1] = y; }
    else { uv[i * 2] = x; uv[i * 2 + 1] = y; }
  }
  geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}
export function mergeByMaterial(group, worldUVMaterials = new Set()) {
  group.updateMatrixWorld(true);
  const buckets = new Map();
  group.traverse(o => {
    if (!o.isMesh) return;
    const geometry = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    for (const name of Object.keys(geometry.attributes)) if (!['position', 'normal', 'uv'].includes(name)) geometry.deleteAttribute(name);
    geometry.applyMatrix4(o.matrixWorld);
    if (worldUVMaterials.has(o.material) && geometry.attributes.normal) worldUV(geometry);
    if (!buckets.has(o.material)) buckets.set(o.material, []);
    buckets.get(o.material).push(geometry);
  });
  group.clear();
  for (const [material, geometries] of buckets) {
    const combined = new THREE.Mesh(mergeGeometries(geometries, false), material);
    combined.castShadow = true; combined.receiveShadow = true; group.add(combined);
    geometries.forEach(g => g.dispose());
  }
}

export function createChurch() {
  const church = new THREE.Group();
  church.name = 'Église Notre-Dame d’Arcachon';
  // Côté gauche en entrant par le grand portail (x négatif) : chapelle des Marins, annexe,
  // porche latéral et colonne mariale. Construits à droite puis retournés en miroir.
  const chapel = new THREE.Group(); chapel.name = 'Chapelle des Marins';
  let target = church;
  const brickMap = brickTexture(), stoneMap = stoneTexture();
  // Tuiles plates brun-rouge (nef, transept, chevet) et tuiles canal orangées (bas-côtés).
  const roofMap = tileTexture('#4a2f27', ['#6b4033', '#74463a', '#623a2f', '#7a4b3c', '#5e372c'], 22, 30, .22);
  const canalMap = tileTexture('#7a3d26', ['#b2603f', '#c06a45', '#a85a3a', '#bb7350', '#9f5034'], 40, 22, .28);
  const ironMap = ironstoneTexture();
  const mat = {
    // Brique, pierre de taille et garluche : textures découpées dans les photos de l'église.
    brick: new THREE.MeshStandardMaterial({ map: photoTex('brique', [.8, .8]), roughness: .9, color: 0xfff4ee }),
    stone: new THREE.MeshStandardMaterial({ map: photoTex('pierre', [.55, .4]), roughness: .83, color: 0xfffaf0 }),
    stoneDark: new THREE.MeshStandardMaterial({ color: 0x827c6f, roughness: .96 }),
    roof: new THREE.MeshStandardMaterial({ map: roofMap, roughness: .86, color: 0xf2e2da }),
    canal: new THREE.MeshStandardMaterial({ map: canalMap, roughness: .88, color: 0xf6e4d8 }),
    spire: new THREE.MeshStandardMaterial({ map: stoneMap, roughness: .86, color: 0xe2dccd }),
    ironstone: new THREE.MeshStandardMaterial({ map: photoTex('garluche', [.45, .9]), roughness: .97 }),
    rubble: new THREE.MeshStandardMaterial({ map: photoTex('moellons', [.5, .35]), roughness: .97 }),
    plaque: new THREE.MeshStandardMaterial({ color: 0xf4f2ec, roughness: .5 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x173844, roughness: .3, metalness: .12, emissive: 0x071318, emissiveIntensity: .35 }),
    glassBlue: new THREE.MeshStandardMaterial({ color: 0x315d72, roughness: .28, metalness: .08, emissive: 0x0b1d29, emissiveIntensity: .45 }),
    door: new THREE.MeshStandardMaterial({ color: 0x5a2236, roughness: .6, side: THREE.DoubleSide }),
    doorway: new THREE.MeshStandardMaterial({ color: 0x16110f, roughness: 1 }),
    white: new THREE.MeshStandardMaterial({ color: 0xf1efe8, roughness: .7 }),
    rail: new THREE.MeshStandardMaterial({ color: 0x1d1f1e, roughness: .5, metalness: .4 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x292c2b, roughness: .48, metalness: .58 }),
    clock: new THREE.MeshStandardMaterial({ color: 0xf3ecd9, roughness: .55 }),
    statue: new THREE.MeshStandardMaterial({ color: 0xe8e7df, roughness: .78, side: THREE.DoubleSide }),
    blue: new THREE.MeshStandardMaterial({ color: 0x3f86c4, roughness: .55, side: THREE.DoubleSide }),
  };

  function mesh(geometry, material, parent = target, shadow = true) {
    const m = new THREE.Mesh(geometry, material);
    m.castShadow = shadow; m.receiveShadow = true;
    parent.add(m); return m;
  }
  function box(w, h, d, x, y, z, material = mat.stone, parent = target) {
    const m = mesh(new THREE.BoxGeometry(w, h, d), material, parent);
    m.position.set(x, y, z); return m;
  }
  function cylinder(rt, rb, h, segments, x, y, z, material, parent = target) {
    const m = mesh(new THREE.CylinderGeometry(rt, rb, h, segments), material, parent);
    m.position.set(x, y, z); return m;
  }
  function pointedPath(path, w, h, base = 0) {
    const arch = Math.min(w * .82, h * .46), spring = base + h - arch;
    path.moveTo(-w / 2, base); path.lineTo(-w / 2, spring);
    path.quadraticCurveTo(-w / 2, base + h - arch * .23, 0, base + h);
    path.quadraticCurveTo(w / 2, base + h - arch * .23, w / 2, spring);
    path.lineTo(w / 2, base); path.closePath();
    return path;
  }
  function archRing(w, h, thickness, material = mat.stone) {
    const shape = pointedPath(new THREE.Shape(), w, h);
    const hole = pointedPath(new THREE.Path(), w - thickness * 2, h - thickness * 1.65, thickness);
    shape.holes.push(hole);
    return mesh(new THREE.ShapeGeometry(shape, 20), material, new THREE.Group(), false);
  }
  function archWindow(w, h, options = {}) {
    const g = new THREE.Group();
    const ring = archRing(w, h, options.frame || .24);
    g.add(ring);
    const glassShape = pointedPath(new THREE.Shape(), w - .34, h - .31, .16);
    const glass = mesh(new THREE.ShapeGeometry(glassShape, 20), options.blue ? mat.glassBlue : mat.glass, g, false);
    glass.position.z = .018;
    box(w + .28, .17, .24, 0, -.03, .07, mat.stone, g);
    if (options.mullion !== false) box(.11, h * .66, .12, 0, h * .34, .10, mat.stone, g);
    if (options.louvers) {
      for (let i = 0; i < 7; i++) {
        const slat = box(w - .42, .12, .15, 0, .48 + i * (h * .54 / 7), .13, mat.metal, g);
        slat.rotation.x = -.18;
      }
    }
    return g;
  }
  function pairedWindow(w, h, options = {}) {
    const g = new THREE.Group();
    const outer = archRing(w, h, .27); outer.position.z = .015; g.add(outer);
    const innerW = (w - .62) / 2;
    for (const side of [-1, 1]) {
      const win = archWindow(innerW, h * .76, { frame: .15, mullion: false, louvers: options.louvers, blue: options.blue });
      win.position.set(side * (innerW / 2 + .08), .12, .045); g.add(win);
    }
    box(.18, h * .76, .20, 0, h * .38, .14, mat.stone, g);
    if (options.quatrefoil) {
      const q = quatrefoil(w * .15); q.position.set(0, h * .82, .13); g.add(q);
    }
    return g;
  }
  function quatrefoil(r) {
    const g = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const a = i * Math.PI / 2;
      const petal = mesh(new THREE.CircleGeometry(r * .62, 20), mat.glass, g, false);
      petal.position.set(Math.cos(a) * r * .55, Math.sin(a) * r * .55, 0);
      const rim = mesh(new THREE.TorusGeometry(r * .62, r * .10, 6, 24), mat.stone, g, false);
      rim.position.copy(petal.position); rim.position.z = .03;
    }
    return g;
  }
  function roseWindow(radius) {
    const g = new THREE.Group();
    const glass = mesh(new THREE.CircleGeometry(radius * .92, 64), mat.glassBlue, g, false);
    glass.position.z = .01;
    for (const [r, tube] of [[radius, .19], [radius * .86, .10], [radius * .25, .09]]) {
      const ring = mesh(new THREE.TorusGeometry(r, tube, 8, 64), mat.stone, g, false); ring.position.z = .08;
    }
    for (let i = 0; i < 8; i++) {
      const a = i * TAU / 8, rr = radius * .53;
      const petal = mesh(new THREE.CircleGeometry(radius * .225, 24), i % 2 ? mat.glass : mat.glassBlue, g, false);
      petal.scale.set(.78, 1.22, 1); petal.rotation.z = a - Math.PI / 2;
      petal.position.set(Math.cos(a) * rr, Math.sin(a) * rr, .055);
      const rim = mesh(new THREE.TorusGeometry(radius * .225, .065, 6, 28), mat.stone, g, false);
      rim.scale.copy(petal.scale); rim.rotation.z = petal.rotation.z; rim.position.copy(petal.position); rim.position.z = .11;
      const spoke = box(.075, radius * .49, .09, Math.cos(a) * radius * .68, Math.sin(a) * radius * .68, .12, mat.stone, g);
      spoke.rotation.z = a - Math.PI / 2;
    }
    const heart = mesh(new THREE.CircleGeometry(radius * .17, 28), mat.glass, g, false); heart.position.z = .14;
    return g;
  }
  function clockFace(radius) {
    const g = new THREE.Group();
    const face = mesh(new THREE.CircleGeometry(radius, 48), mat.clock, g, false); face.position.z = .03;
    const rim = mesh(new THREE.TorusGeometry(radius, .10, 8, 48), mat.stone, g, false); rim.position.z = .08;
    for (let i = 0; i < 12; i++) {
      const a = i * TAU / 12;
      const tick = box(i % 3 ? .035 : .055, radius * .16, .04, Math.sin(a) * radius * .76, Math.cos(a) * radius * .76, .10, mat.metal, g);
      tick.rotation.z = -a;
    }
    const hour = box(.065, radius * .52, .06, -.12, .16, .13, mat.metal, g); hour.rotation.z = .65;
    const minute = box(.045, radius * .72, .06, .20, .23, .14, mat.metal, g); minute.rotation.z = -.72;
    return g;
  }
  function gableRoof(width, length, eaveY, ridgeY, x, z, rotationY = 0, roofMat = mat.roof, parent = target) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotationY; parent.add(g);
    const rise = ridgeY - eaveY, half = width / 2, slope = Math.hypot(half, rise), angle = Math.atan2(rise, half);
    for (const side of [-1, 1]) {
      const roof = box(slope + .35, .22, length + .5, side * half / 2, (eaveY + ridgeY) / 2, 0, roofMat, g);
      roof.rotation.z = -side * angle;
      const gutter = cylinder(.09, .09, length + .6, 8, side * (half + .08), eaveY - .03, 0, mat.metal, g);
      gutter.rotation.x = Math.PI / 2;
    }
    const ridge = cylinder(.13, .13, length + .55, 8, 0, ridgeY + .08, 0, roofMat, g); ridge.rotation.x = Math.PI / 2;
    return g;
  }
  function gableWall(width, baseY, eaveY, ridgeY, x, z, rotationY = 0, material = mat.brick, parent = target) {
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, baseY); shape.lineTo(width / 2, baseY); shape.lineTo(width / 2, eaveY);
    shape.lineTo(0, ridgeY); shape.lineTo(-width / 2, eaveY); shape.closePath();
    const g = mesh(new THREE.ExtrudeGeometry(shape, { depth: .35, bevelEnabled: false }), material, parent);
    g.position.set(x, 0, z); g.rotation.y = rotationY; return g;
  }
  // Fenêtre en plein cintre (vitrage + encadrement de pierre).
  function roundWindow(w, h, parent = target) {
    const g = new THREE.Group(); parent.add(g);
    const outline = (W, H, path) => { path.moveTo(-W / 2, 0); path.lineTo(-W / 2, H - W / 2); path.absarc(0, H - W / 2, W / 2, Math.PI, 0, true); path.lineTo(W / 2, 0); path.closePath(); return path; };
    mesh(new THREE.ShapeGeometry(outline(w, h, new THREE.Shape()), 16), mat.glass, g, false).position.z = .01;
    const frame = outline(w + .36, h + .18, new THREE.Shape()); frame.holes.push(outline(w, h, new THREE.Path()));
    mesh(new THREE.ShapeGeometry(frame, 16), mat.stone, g, false).position.z = .03;
    return g;
  }
  // Gâble de pierre à crochets, avec fleuron au sommet.
  function crocketGable(w, h, parent) {
    const g = new THREE.Group(); parent.add(g);
    const sh = new THREE.Shape(); sh.moveTo(-w / 2, 0); sh.lineTo(0, h); sh.lineTo(w / 2, 0); sh.lineTo(w / 2 - .3, 0); sh.lineTo(0, h - .45); sh.lineTo(-w / 2 + .3, 0); sh.closePath();
    mesh(new THREE.ExtrudeGeometry(sh, { depth: .28, bevelEnabled: false }), mat.stone, g);
    const fill = new THREE.Shape(); fill.moveTo(-w / 2 + .3, 0); fill.lineTo(0, h - .45); fill.lineTo(w / 2 - .3, 0); fill.closePath();
    mesh(new THREE.ExtrudeGeometry(fill, { depth: .12, bevelEnabled: false }), mat.stone, g);
    const n = 6, slope = Math.atan2(h, w / 2);
    for (const side of [-1, 1]) for (let i = 1; i <= n; i++) {
      const t = i / (n + 1), c = mesh(new THREE.ConeGeometry(.09, .32, 6), mat.stone, g);
      c.position.set(side * (w / 2) * (1 - t), h * t + .12, .16); c.rotation.z = side * (Math.PI / 2 - slope) * -1 + side * .5;
    }
    const finial = mesh(new THREE.ConeGeometry(.12, .5, 6), mat.stone, g); finial.position.set(0, h + .25, .14);
    const q = quatrefoil(.22); q.position.set(0, h * .38, .3); g.add(q);
    return g;
  }
  // Chaînage d'angle en pierre « en dents d'engrenage » : blocs alternés longs / courts.
  function quoins(x, z, y0, y1, size = 1, parent = target) {
    const h = .5 * size;
    for (let i = 0, y = y0 + h / 2; y < y1; i++, y += h + .04) {
      const longX = i % 2 === 0;
      box(longX ? 1.15 * size : .62 * size, h, longX ? .62 * size : 1.15 * size, x, y, z, mat.stone, parent);
    }
  }
  // Petit gâble de pierre (pignon décoratif) avec un remplage en trèfle.
  function stoneGable(width, baseY, eaveY, ridgeY, x, z, rotationY, foil = .3) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotationY; church.add(g);
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, baseY); shape.lineTo(width / 2, baseY); shape.lineTo(width / 2, eaveY);
    shape.lineTo(0, ridgeY); shape.lineTo(-width / 2, eaveY); shape.closePath();
    mesh(new THREE.ExtrudeGeometry(shape, { depth: .3, bevelEnabled: false }), mat.stone, g);
    for (const side of [-1, 1]) {
      box(.34, ridgeY - eaveY + .6, .4, side * (width / 2 + .02), eaveY - .2, .18, mat.stone, g);
      const pin = mesh(new THREE.ConeGeometry(.24, .9, 4), mat.stone, g); pin.position.set(side * (width / 2 + .02), eaveY + .55, .18); pin.rotation.y = Math.PI / 4;
    }
    const q = quatrefoil(foil); q.position.set(0, eaveY + (ridgeY - eaveY) * .38, .34); g.add(q);
    return g;
  }
  function cross(x, y, z, scale = 1, parent = target) {
    const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(scale); parent.add(g);
    box(.12, 1.25, .12, 0, .55, 0, mat.metal, g); box(.72, .12, .12, 0, .78, 0, mat.metal, g);
    return g;
  }

  // Plate-forme et grand escalier du parvis.
  box(32, 1.8, 39, 0, .9, -9.5, mat.stoneDark);
  for (let i = 0; i < 9; i++) {
    const front = 17.2 - i * .84, back = 9.45, top = (i + 1) * .2;
    box(20.8 - i * .06, top, front - back, 0, top / 2, (front + back) / 2, mat.stone);
    box(20.9 - i * .06, .055, .16, 0, top + .025, front - .08, mat.stoneDark);
  }
  for (const side of [-1, 1]) {
    const cheek = box(.65, .65, 8.4, side * 10.65, .72, 13.25, mat.stone);
    cheek.rotation.x = -.20;
    cylinder(.48, .58, 1.0, 12, side * 10.65, 1.65, 9.6, mat.stone);
    const ball = mesh(new THREE.SphereGeometry(.47, 16, 12), mat.stone); ball.position.set(side * 10.65, 2.28, 9.6);
  }

  // Bord de la terrasse : piliers blancs à vases et grille basse.
  const railTex = (() => { const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d'); x.fillStyle = '#1d1f1e'; x.fillRect(0, 2, 256, 5); x.fillRect(0, 56, 256, 5); for (let i = 4; i < 256; i += 16) x.fillRect(i, 2, 3, 59); const t = new THREE.CanvasTexture(c); t.wrapS = THREE.RepeatWrapping; return t; })();
  const railMat = new THREE.MeshStandardMaterial({ map: railTex, alphaMap: railTex, alphaTest: .5, transparent: false, color: 0x1d1f1e, side: THREE.DoubleSide });
  function railing(x0, z0, x1, z1) {
    const len = Math.hypot(x1 - x0, z1 - z0), n = Math.max(1, Math.round(len / 4.2));
    for (let i = 0; i <= n; i++) {
      const x = x0 + (x1 - x0) * i / n, z = z0 + (z1 - z0) * i / n;
      box(.42, 1.0, .42, x, 2.3, z, mat.white); box(.52, .12, .52, x, 2.86, z, mat.white);
      const urn = mesh(new THREE.SphereGeometry(.2, 12, 8), mat.white); urn.position.set(x, 3.08, z); urn.scale.y = .8;
    }
    const plane = new THREE.PlaneGeometry(len, .8); plane.attributes.uv.array.forEach((v, i, a) => { if (i % 2 === 0) a[i] = v * len / 1.2; });
    const r = mesh(plane, railMat, church, false); r.position.set((x0 + x1) / 2, 2.25, (z0 + z1) / 2); r.rotation.y = -Math.atan2(z1 - z0, x1 - x0);
  }
  railing(15.85, -28.5, 15.85, 9.85); railing(10.9, 9.85, 15.85, 9.85); railing(-15.85, 9.85, -10.9, 9.85);
  railing(-15.85, -28.5, -15.85, -12.0); railing(-15.85, 3.2, -15.85, 9.85);

  // Vaisseau central, bas-côtés et transept.
  box(14, 12.5, 30, 0, 8.05, -9.5, mat.brick);
  for (const y of [11.55, 14.15]) box(14.2, .2, 30.1, 0, y, -9.5, mat.stone);
  gableWall(14, 1.8, 14.3, 20.4, 0, 5.35);
  gableWall(14, 1.8, 14.3, 20.4, 0, -24.65, Math.PI);
  gableRoof(14.8, 30.8, 14.3, 20.4, 0, -9.5);
  for (const side of [-1, 1]) {
    box(4.1, 6.4, 28.5, side * 9.0, 5.0, -9.2, mat.brick);
    gableRoof(4.6, 29.1, 8.2, 10.35, side * 9.0, -9.2, 0, mat.canal);
    box(4.3, .95, 28.7, side * 9.0, 2.27, -9.2, mat.ironstone);
    for (const y of [5.35, 8.05]) box(4.25, .18, 28.6, side * 9.0, y, -9.2, mat.stone);
    for (const z of [1.2, -4.2, -9.6, -21.2]) {
      const lower = archWindow(1.65, 3.8, { mullion: false, blue: true });
      lower.position.set(side * 11.08, 2.8, z); lower.rotation.y = side * Math.PI / 2; church.add(lower);
      const upper = archWindow(1.15, 2.9, { mullion: false });
      upper.position.set(side * 7.08, 10.6, z); upper.rotation.y = side * Math.PI / 2; church.add(upper);
      box(.75, 7.1, 1.05, side * 11.25, 5.35, z - 2.25, mat.stone);
      const cap = box(.95, .28, 1.2, side * 11.25, 8.95, z - 2.25, mat.stone); cap.rotation.z = side * .13;
      box(.52, 4.0, .8, side * 7.35, 12.2, z - 2.25, mat.stone);
    }
  }
  box(30.4, 11.8, 8.5, 0, 7.7, -16.0, mat.brick);
  box(30.6, .95, 8.7, 0, 2.27, -16.0, mat.ironstone);
  gableRoof(9.1, 31.0, 13.6, 19.4, 0, -16.0, Math.PI / 2);
  for (const side of [-1, 1]) {
    const face = side * 15.43, out = side * .02, rot = side * Math.PI / 2;
    gableWall(8.5, 1.8, 13.6, 19.4, side * 15.05, -16.0, rot);
    // Grande rose à huit pétales inscrite dans un arc de décharge en pierre.
    const rose = roseWindow(2.3); rose.position.set(face, 10.9, -16.0); rose.rotation.y = rot; church.add(rose);
    const roseFrame = mesh(new THREE.TorusGeometry(2.62, .3, 8, 64), mat.stone); roseFrame.position.set(face + out * 4, 10.9, -16); roseFrame.rotation.y = rot;
    const relieving = archRing(7.3, 11.9, .42); relieving.position.set(face + out * 3, 3.75, -16); relieving.rotation.y = rot; church.add(relieving);
    for (const dz of [-3.48, 3.48]) {
      box(.5, 6.4, .5, face + out * 6, 4.95, -16 + dz, mat.stone);
      const cap = box(.62, .3, .62, face + out * 6, 8.3, -16 + dz, mat.stone);
    }
    // Trois petites lancettes au sommet du pignon.
    for (const dz of [-.72, 0, .72]) {
      const l = archWindow(.42, dz === 0 ? 1.45 : 1.2, { mullion: false, frame: .1 }); l.position.set(face, 16.25, -16 + dz); l.rotation.y = rot; church.add(l);
    }
    // Frontispice de pierre à quadrilobe, flanqué de deux petits gâbles à trèfle, et plaque commémorative.
    stoneGable(3.3, 1.8, 6.4, 8.4, face - side * .08, -16, rot, .5);
    for (const dz of [-2.75, 2.75]) stoneGable(1.75, 1.8, 4.1, 5.35, face - side * .1, -16 + dz, rot, .22);
    box(.06, 1.25, .9, face + side * .3, 4.1, -16, mat.plaque);
    // Chaînages en dents d'engrenage aux angles du transept.
    for (const dz of [-4.25, 4.25]) quoins(side * 15.2, -16 + dz, 1.8, 13.5);
    cross(side * 15.15, 19.55, -16, .8);
  }

  // Chevet polygonal, volontairement interprété à partir des vues disponibles.
  cylinder(6.9, 6.9, 12.2, 8, 0, 7.9, -25.0, mat.brick);
  cylinder(7.0, 7.0, .95, 8, 0, 2.27, -25.0, mat.ironstone);
  const apseRoof = mesh(new THREE.ConeGeometry(7.35, 6.3, 8), mat.roof); apseRoof.position.set(0, 17.15, -25.0); apseRoof.rotation.y = Math.PI / 8;
  for (let i = 0; i < 5; i++) {
    const a = Math.PI * .55 + i * Math.PI * .225;
    const win = archWindow(1.35, 3.7, { mullion: false, blue: true });
    win.position.set(Math.sin(a) * 6.65, 7.0, -25 + Math.cos(a) * 6.65);
    win.rotation.y = a; church.add(win);
  }

  // Façade avant : deux ailes basses encadrant la tour.
  for (const side of [-1, 1]) {
    box(5.6, 8.5, 6.0, side * 6.35, 6.05, 6.0, mat.brick);
    // Pignon tourné vers le côté ; à droite, la travée du portail latéral avance au-delà du bas-côté.
    const outer = side > 0 ? 11.35 : 9.15;
    if (side > 0) { box(outer - 9.1, 8.5, 6.0, (outer + 9.1) / 2, 6.05, 6.0, mat.brick); box(outer - 9.0, .95, 6.2, (outer + 9.0) / 2, 2.27, 6.0, mat.ironstone); quoins(outer - .25, 8.75, 1.8, 10.2); }
    gableWall(6.0, 1.8, 10.3, 12.3, side * (outer - .35), 6.0, side * Math.PI / 2);
    gableRoof(6.5, outer - 3.55 + .3, 10.3, 12.3, side * (outer + 3.55) / 2, 6.0, Math.PI / 2);
    box(5.8, .32, .32, side * 6.35, 10.2, 9.05, mat.stone);                      // corniche de la façade
    quoins(side * 8.9, 3.25, 1.8, 10.2);
    const win = pairedWindow(2.15, 4.7, { quatrefoil: false, blue: true });
    win.position.set(side * 6.35, 3.2, 9.24); church.add(win);
    const oculus = roseWindow(.55); oculus.position.set(side * 6.35, 8.55, 9.25); church.add(oculus);
    box(5.8, .95, 6.2, side * 6.35, 2.27, 6.0, mat.ironstone);
    quoins(side * 8.9, 8.75, 1.8, 10.2);
  }
  // Pignon gauche : simple oculus. Pignon droit : portail latéral contre le clocher.
  const leftOculus = roseWindow(.5); leftOculus.position.set(-9.17, 8.3, 6.0); leftOculus.rotation.y = -Math.PI / 2; church.add(leftOculus);
  const sp = new THREE.Group(); sp.position.set(11.37, 0, 6.0); sp.rotation.y = Math.PI / 2; church.add(sp);
  for (const x of [-2.75, 2.75]) {                                               // contreforts à gâblets
    box(.62, 8.4, .5, x, 6.0, .22, mat.stone, sp);
    const cap = mesh(new THREE.ConeGeometry(.48, 1.3, 4), mat.stone, sp); cap.position.set(x, 10.85, .22); cap.rotation.y = Math.PI / 4;
    const gb = quatrefoil(.12); gb.position.set(x, 10.55, .5); sp.add(gb);
  }
  for (const [y, d] of [[1.9, .9], [2.05, .6], [2.2, .3]]) box(2.6, .15, d, 0, y - .05, d / 2, mat.stone, sp);   // marches
  const sideDoor = mesh(new THREE.ShapeGeometry(pointedPath(new THREE.Shape(), 1.5, 3.0, 0), 20), mat.door, sp); sideDoor.position.set(0, 2.2, .03);
  for (const dx of [-.36, .36]) { const q = quatrefoil(.12); q.position.set(dx, 4.25, .06); sp.add(q); }
  for (const [w, h, z] of [[1.95, 3.35, .06], [2.35, 3.6, .1]]) { const r = archRing(w, h, .17); r.position.set(0, 2.15, z); sp.add(r); }
  for (const s2 of [-1, 1]) for (const dx of [1.0, 1.17]) cylinder(.065, .075, 2.1, 8, s2 * dx, 3.25, .14, mat.stone, sp);
  const sg = crocketGable(2.9, 2.0, sp); sg.position.set(0, 4.3, .12);
  const sideRose = roseWindow(.55); sideRose.position.set(0, 7.75, .05); sp.add(sideRose);
  const hood = [];                                                               // archivolte outrepassée sur corbeaux
  for (let i = 0; i <= 24; i++) { const a = -.35 + i / 24 * (Math.PI + .7); hood.push(new THREE.Vector3(Math.cos(a) * .98, 7.75 + Math.sin(a) * .98, .12)); }
  mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(hood), 48, .09, 8, false), mat.stone, sp);
  for (const s2 of [-1, 1]) box(.22, .26, .22, s2 * .93, 7.33, .14, mat.stone, sp);
  // Niche de la Vierge à l'Enfant au sommet du pignon.
  box(1.0, .35, .75, 0, 12.35, .1, mat.stone, sp);
  for (const dx of [-.38, .38]) for (const dz of [-.22, .3]) cylinder(.05, .05, 1.05, 8, dx, 13.05, .1 + dz, mat.stone, sp);
  cylinder(.13, .2, .62, 10, 0, 12.85, .15, mat.white, sp);
  const vh = mesh(new THREE.SphereGeometry(.1, 12, 8), mat.white, sp); vh.position.set(0, 13.25, .15);
  box(1.05, .14, .8, 0, 13.62, .1, mat.stone, sp);
  const nicheRoof = mesh(new THREE.ConeGeometry(.66, 1.15, 4), mat.stone, sp); nicheRoof.position.set(0, 14.27, .1); nicheRoof.rotation.y = Math.PI / 4;
  cross(0, 14.8, .1, .3, sp);

  // Tour : panneaux de brique entre de puissants contreforts d'angle en pierre.
  box(7.3, 25.0, 7.3, 0, 14.3, 5.25, mat.brick);
  box(7.5, .95, 7.5, 0, 2.27, 5.25, mat.ironstone);
  for (const y of [9.0, 19.0, 25.7]) box(7.65, .3, 7.65, 0, y, 5.25, mat.stone);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    for (const [w, y0, y1] of [[1.45, 1.8, 12.4], [1.35, 12.4, 19.0], [1.22, 19.0, 26.45]]) {
      const x = sx * (3.65 - w / 2 + .32), z = 5.25 + sz * (3.65 - w / 2 + .32);
      box(w, y1 - y0, w, x, (y0 + y1) / 2, z, mat.stone);
      const ledge = box(w + .14, .22, w + .14, x, y1 - .05, z, mat.stone); ledge.rotation.y = 0;
    }
    const x = sx * 3.3, z = 5.25 + sz * 3.3;
    const cap = mesh(new THREE.ConeGeometry(.66, 1.0, 4), mat.stone); cap.position.set(x, 26.7, z); cap.rotation.y = Math.PI / 4;
  }
  // Tourelle d'escalier ronde, accolée à l'angle arrière.
  cylinder(.95, .95, 14.6, 16, 4.1, 19.1, 1.3, mat.stone);
  for (const y of [19.0]) cylinder(1.05, 1.05, .25, 16, 4.1, y, 1.3, mat.stone);
  const turretCap = mesh(new THREE.ConeGeometry(1.05, 2.4, 16), mat.spire); turretCap.position.set(4.1, 27.6, 1.3);
  for (const y of [18, 21.5, 24.5]) box(.05, .7, .22, 5.03, y, 1.3, mat.glass);
  // Faces latérales de la tour : baie géminée et petite rose.
  for (const side of [-1, 1]) {
    const sideWin = pairedWindow(2.4, 4.6, { quatrefoil: false }); sideWin.position.set(side * 3.68, 12.7, 5.25); sideWin.rotation.y = side * Math.PI / 2; church.add(sideWin);
    const sideRose = roseWindow(.62); sideRose.position.set(side * 3.69, 18.2, 5.25); sideRose.rotation.y = side * Math.PI / 2; church.add(sideRose);
  }

  // Portail sculpté et portes doubles.
  const portal = new THREE.Group(); portal.position.set(0, 1.8, 9.02); portal.scale.x = .8; church.add(portal);
  for (let i = 0; i < 3; i++) {
    const ring = archRing(4.35 + i * .48, 6.15 + i * .34, .22, mat.stone);
    ring.position.set(0, -.02 * i, .04 + i * .055); portal.add(ring);
  }
  const doorShape = pointedPath(new THREE.Shape(), 3.82, 5.72, 0);
  const dw = new THREE.Shape(); dw.moveTo(-1.91, 0); dw.lineTo(1.91, 0); dw.lineTo(1.91, 3.9); dw.lineTo(-1.91, 3.9); dw.closePath();
  const doorway = mesh(new THREE.ShapeGeometry(dw), mat.doorway, portal);
  // Tympan bordeaux à quadrilobe vitré, au-dessus des deux battants ouverts.
  const tymp = new THREE.Shape(); pointedPath(tymp, 3.82, 5.72, 0); 
  const tympMesh = mesh(new THREE.ShapeGeometry(tymp, 24), mat.door, portal); tympMesh.position.z = .025;
  doorway.position.z = .03;
  box(3.82, .12, .1, 0, 3.9, .06, mat.door, portal);
  const tq = quatrefoil(.42); tq.position.set(0, 4.75, .08); portal.add(tq);
  for (const side of [-1, 1]) {
    const leaf = box(.09, 3.85, 1.85, side * 1.88, 1.93, .98, mat.door, portal);
    for (let i = 0; i < 3; i++) cylinder(.095, .11, 4.25, 10, side * (2.15 + i * .22), 2.15, .19 + i * .04, mat.stone, portal);
  }
  const canopyShape = new THREE.Shape(); canopyShape.moveTo(-3.05, 0); canopyShape.lineTo(0, 3.0); canopyShape.lineTo(3.05, 0); canopyShape.closePath();
  const canopy = mesh(new THREE.ExtrudeGeometry(canopyShape, { depth: .34, bevelEnabled: false }), mat.stone, portal);
  canopy.position.set(0, 6.0, .18);
  const trefoil = quatrefoil(.42); trefoil.position.set(0, 6.85, .56); portal.add(trefoil);
  cross(0, 9.0, 9.45, .55);

  // Baies de la tour, horloge et clocher ajouré.
  const frontWindow = pairedWindow(3.25, 5.3, { quatrefoil: true, blue: true }); frontWindow.position.set(0, 9.65, 9.02); church.add(frontWindow);
  const clock = clockFace(1.05); clock.position.set(0, 16.4, 9.04); church.add(clock);
  const towerArch = archRing(4.25, 9.3, .34); towerArch.position.set(0, 9.25, 9.07); church.add(towerArch);
  const belfry = pairedWindow(3.45, 4.5, { quatrefoil: true, louvers: true }); belfry.position.set(0, 20.3, 9.03); church.add(belfry);
  for (const side of [-1, 1]) {
    const sideBelfry = pairedWindow(3.25, 4.4, { quatrefoil: true, louvers: true });
    sideBelfry.position.set(side * 3.68, 20.3, 5.25); sideBelfry.rotation.y = side * Math.PI / 2; church.add(sideBelfry);
  }

  // Balustrade, pinacles et flèche octogonale.
  box(8.15, .38, 8.15, 0, 26.6, 5.25, mat.stone);
  for (let i = 0; i < 12; i++) {
    const p = -3.6 + i * 7.2 / 11;
    box(.16, .68, .22, p, 27.05, 9.12, mat.stone);
    box(.22, .68, .16, 3.87, 27.05, 5.25 + p, mat.stone);
    box(.22, .68, .16, -3.87, 27.05, 5.25 + p, mat.stone);
  }
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const x = sx * 3.25, z = 5.25 + sz * 3.25;
    cylinder(.42, .48, 2.1, 8, x, 27.6, z, mat.stone);
    const pinnacle = mesh(new THREE.ConeGeometry(.67, 2.5, 4), mat.stone); pinnacle.position.set(x, 29.8, z); pinnacle.rotation.y = Math.PI / 4;
    cross(x, 31.05, z, .26);
  }
  const spire = mesh(new THREE.ConeGeometry(3.75, 18.0, 8, 1), mat.spire); spire.position.set(0, 36.2, 5.25); spire.rotation.y = Math.PI / 8;
  for (let edge = 0; edge < 8; edge++) {
    const a = edge * TAU / 8 + Math.PI / 8;
    for (let j = 0; j < 16; j++) {
      const f = (j + .6) / 17, r = 3.75 * (1 - f);
      const ornament = mesh(new THREE.ConeGeometry(.13 + (1 - f) * .1, .5, 5), mat.stone);
      ornament.position.set(Math.cos(a) * (r + .12), 27.2 + f * 18, 5.25 + Math.sin(a) * (r + .12));
      ornament.rotation.set(0, -a, 0); ornament.rotateZ(-Math.PI / 2 + .35);
    }
  }
  // Petites ouvertures en quadrilobe sur les faces de la flèche.
  for (let level = 0; level < 4; level++) {
    const f = .2 + level * .17, r = 3.75 * (1 - f) * Math.cos(Math.PI / 8) + .04;
    for (let k = 0; k < 8; k += 2) {
      const a = k * TAU / 8 + (level % 2) * TAU / 8;
      const q = quatrefoil(.34 - level * .04); q.position.set(Math.cos(a) * r, 27.2 + f * 18, 5.25 + Math.sin(a) * r);
      q.rotation.y = Math.PI / 2 - a; church.add(q);
    }
  }
  cross(0, 45.25, 5.25, .9);

  const metric = new Set([mat.brick, mat.stone, mat.ironstone, mat.rubble]);
  mergeByMaterial(church, metric);

  // ---------------------------------------------------------------------------------
  // Chapelle des Marins (1722), accolée au flanc de l'église, et son annexe basse.
  // Intérieur visitable : plafond de bois peint, retables dorés, grille en fer forgé.
  target = chapel;
  // Petit porche latéral (porte bordeaux) près de la colonne mariale.
  box(3.0, 4.6, 3.4, 12.6, 4.1, -9.8, mat.brick);
  box(3.2, .9, 3.6, 12.6, 2.25, -9.8, mat.ironstone);
  gableRoof(3.6, 3.6, 6.4, 7.6, 12.6, -9.8, Math.PI / 2, mat.canal);
  gableWall(3.4, 1.8, 6.4, 7.6, 14.1, -9.8, Math.PI / 2);
  const porchDoor = new THREE.Group(); porchDoor.position.set(14.47, 1.8, -9.8); porchDoor.rotation.y = Math.PI / 2; chapel.add(porchDoor);
  mesh(new THREE.ShapeGeometry(pointedPath(new THREE.Shape(), 1.5, 2.8, 0), 16), mat.door, porchDoor);
  const porchArch = archRing(1.95, 3.15, .2); porchArch.position.z = .02; porchDoor.add(porchArch);
  for (const dz of [-1.55, 1.55]) quoins(14.15, -9.8 + dz, 1.8, 6.3, .7);

  // Colonne mariale devant la porte latérale « Notre Dame » : socle rond à gradins, colonne
  // fine à chapiteau, Vierge aux bras ouverts (robe blanche, manteau bleu) sur un globe bleu.
  // Elle regarde vers la rue, dos à l'église.
  const statue = new THREE.Group(); statue.position.set(17.6, 0, -9.8); statue.rotation.y = Math.PI / 2; chapel.add(statue);
  for (let i = 0; i < 4; i++) cylinder(1.35 - i * .25, 1.4 - i * .25, .2, 24, 0, .1 + i * .2, 0, mat.stoneDark, statue);
  cylinder(.42, .48, .5, 16, 0, 1.05, 0, mat.stone, statue);
  cylinder(.24, .27, 3.4, 16, 0, 3.0, 0, mat.stone, statue);
  for (const y of [1.5, 3.4]) cylinder(.29, .29, .1, 16, 0, y, 0, mat.stone, statue);
  cylinder(.42, .28, .3, 16, 0, 4.85, 0, mat.stone, statue);
  box(.84, .12, .84, 0, 5.06, 0, mat.stone, statue);
  const globe = mesh(new THREE.SphereGeometry(.3, 20, 14), mat.blue, statue); globe.position.y = 5.32; globe.scale.y = .75;
  // Robe blanche, légèrement évasée.
  const robe = mesh(new THREE.CylinderGeometry(.15, .27, 1.25, 16), mat.statue, statue); robe.position.y = 6.05;
  const chest = mesh(new THREE.CylinderGeometry(.13, .15, .35, 16), mat.statue, statue); chest.position.y = 6.82;
  const head = mesh(new THREE.SphereGeometry(.11, 16, 12), mat.statue, statue); head.position.set(0, 7.15, .02);
  // Manteau bleu : voile sur la tête, retombant dans le dos et sur les épaules.
  const mantle = mesh(new THREE.CylinderGeometry(.14, .31, 1.55, 18, 1, true, Math.PI * .3, Math.PI * 1.4), mat.blue, statue); mantle.position.set(0, 6.3, -.03);
  const veil = mesh(new THREE.SphereGeometry(.135, 16, 10, Math.PI * .8, Math.PI * 1.4, 0, Math.PI * .62), mat.blue, statue); veil.position.set(0, 7.17, .0);
  // Bras ouverts vers le bas, mains tendues.
  for (const side of [-1, 1]) {
    const arm = cylinder(.045, .06, .5, 8, side * .22, 6.62, .07, mat.statue, statue); arm.rotation.set(-.35, 0, side * .55);
    const sleeve = cylinder(.06, .085, .3, 8, side * .17, 6.76, .04, mat.blue, statue); sleeve.rotation.z = side * .55;
    const hand = mesh(new THREE.SphereGeometry(.045, 8, 6), mat.statue, statue); hand.position.set(side * .37, 6.4, .14);
  }

  const X0 = 11.2, X1 = 19.4, Z0 = -4.6, Z1 = 2.6, T = .45, FLOOR = 1.8, EAVE = 6.6, CZ = (Z0 + Z1) / 2, CX = (X0 + X1) / 2;
  const cm = {
    render: new THREE.MeshStandardMaterial({ map: stoneMap, roughness: .95, color: 0xdcd6ca }),
    zinc: new THREE.MeshStandardMaterial({ color: 0x8a9294, roughness: .55, metalness: .3 }),
    wall: new THREE.MeshStandardMaterial({ map: panelWallTexture(), roughness: .85 }),
    wainscot: new THREE.MeshStandardMaterial({ color: 0x8e9ea2, roughness: .8 }),
    ceiling: new THREE.MeshStandardMaterial({ map: paintedCeilingTexture(), roughness: .9, side: THREE.DoubleSide }),
    floor: new THREE.MeshStandardMaterial({ map: tometteTexture(), roughness: .85 }),
    gold: new THREE.MeshStandardMaterial({ color: 0xd1a646, roughness: .38, metalness: .45, emissive: 0x3d2a08, emissiveIntensity: .55 }),
    painting: new THREE.MeshStandardMaterial({ map: altarPaintingTexture(), roughness: .7 }),
    marble: new THREE.MeshStandardMaterial({ color: 0xece8e0, roughness: .35 }),
    wood: new THREE.MeshStandardMaterial({ color: 0x7a4a2a, roughness: .6 }),
    iron: new THREE.MeshStandardMaterial({ map: grilleTexture(), alphaTest: .5, side: THREE.DoubleSide, roughness: .5, metalness: .4, color: 0x2a2a2a }),
    daylight: new THREE.MeshStandardMaterial({ color: 0xbfd6e4, emissive: 0x9cc0d8, emissiveIntensity: .9, roughness: .3 }),
    candle: new THREE.MeshStandardMaterial({ color: 0xfff2d6, emissive: 0xffc46b, emissiveIntensity: 1.6 }),
    glass: new THREE.MeshStandardMaterial({ color: 0xdfeeee, roughness: .05, metalness: .1, transparent: true, opacity: .14, depthWrite: false }),
    slate: new THREE.MeshStandardMaterial({ color: 0x4b4f50, roughness: .6 }),
    white: new THREE.MeshStandardMaterial({ color: 0xf6f6f2, roughness: .6 }),
  };
  const C = chapel;
  // Gros œuvre extérieur : moellons de garluche, chaînages et encadrements de pierre.
  box(X1 - X0, FLOOR, Z1 - Z0, CX, FLOOR / 2, CZ, mat.rubble, C);
  box(X1 - X0, EAVE, T, CX, EAVE / 2, Z0 + T / 2, mat.rubble, C);
  box(X1 - X0, EAVE, T, CX, EAVE / 2, Z1 - T / 2, mat.rubble, C);
  box(T, EAVE, Z1 - Z0, X1 - T / 2, EAVE / 2, CZ, mat.rubble, C);
  const GLASS_TOP = FLOOR + 3.0;
  box(T, FLOOR, Z1 - Z0, X0 + T / 2, FLOOR / 2, CZ, mat.rubble, C);
  box(T, EAVE - GLASS_TOP, Z1 - Z0, X0 + T / 2, (EAVE + GLASS_TOP) / 2, CZ, mat.rubble, C);
  // Toit en croupe à faible pente, en tuiles canal.
  const hip = mesh(new THREE.CylinderGeometry(.16, Math.SQRT2, 1.7, 4, 1), mat.canal, C); hip.rotation.y = Math.PI / 4;
  hip.scale.set((X1 - X0) / 2 + .4, 1, (Z1 - Z0) / 2 + .4); hip.position.set(CX, EAVE + .85 - .05, CZ);
  for (const z of [Z0, Z1]) { quoins(X1 - .2, z + (z === Z1 ? -.2 : .2), 0, EAVE, .9, C); box(X1 - X0 + .1, .22, .62, CX, EAVE - .1, z, mat.stone, C); }
  const endWin = roundWindow(.6, 1.5, C); endWin.position.set(X1 + .01, 3.2, CZ); endWin.rotation.y = Math.PI / 2;
  for (const x of [13.9, 17.2]) { const w = roundWindow(.6, 1.55, C); w.position.set(x, 3.2, Z1 + .01); }
  { const w = roundWindow(.6, 1.55, C); w.position.set(15.6, 3.2, Z0 - .01); w.rotation.y = Math.PI; }
  // Annexe basse enduite, ses deux groupes de trois fenêtres et sa plaque (entre le porche et la chapelle).
  const AX0 = 11.05, AX1 = 12.55, AZ0 = -8.05, AZ1 = Z0 - .05;
  box(AX1 - AX0, 3.0, AZ1 - AZ0, (AX0 + AX1) / 2, FLOOR + 1.5, (AZ0 + AZ1) / 2, cm.render, C);
  const flat = box(AX1 - AX0 + .3, .16, AZ1 - AZ0 + .1, (AX0 + AX1) / 2 + .05, FLOOR + 3.08, (AZ0 + AZ1) / 2, cm.zinc, C); flat.rotation.z = -.06;
  box(.12, .3, AZ1 - AZ0, AX1 + .02, FLOOR + 2.86, (AZ0 + AZ1) / 2, mat.stone, C);
  for (const zc of [-7.25, -5.65]) {
    box(.1, 1.55, 1.55, AX1 + .02, FLOOR + 1.45, zc, mat.stone, C);
    for (const dz of [-.46, 0, .46]) { const w = archWindow(.34, 1.2, { mullion: false, frame: .07 }); w.position.set(AX1 + .08, FLOOR + .78, zc + dz); w.rotation.y = Math.PI / 2; C.add(w); }
  }
  box(.05, .7, .34, AX1 + .03, FLOOR + 1.5, -4.86, mat.plaque, C);

  // Intérieur.
  const IX0 = X0 + T, IX1 = X1 - T, IZ0 = Z0 + T, IZ1 = Z1 - T, IW = IZ1 - IZ0, WALL_TOP = 5.6, RISE = 1.0;
  box(IX1 - IX0, .04, IW, CX, FLOOR + .02, CZ, cm.floor, C);
  for (const [z, d] of [[IZ0 + .03, 1], [IZ1 - .03, -1]]) {
    box(IX1 - IX0, WALL_TOP - FLOOR, .05, CX, (FLOOR + WALL_TOP) / 2, z, cm.wall, C);
    box(IX1 - IX0, .95, .07, CX, FLOOR + .48, z + d * .02, cm.wainscot, C);
    box(IX1 - IX0, .12, .14, CX, WALL_TOP - .05, z + d * .04, cm.gold, C);       // corniche dorée
    const pane = mesh(new THREE.ShapeGeometry(pointedPath(new THREE.Shape(), .62, 2.1, 0), 16), cm.daylight, C, false);
    pane.position.set(15.6, 3.3, z + d * .04); pane.rotation.y = d > 0 ? 0 : Math.PI;
    const frame = archRing(.82, 2.3, .14); frame.position.set(15.6, 3.2, z + d * .05); frame.rotation.y = pane.rotation.y; C.add(frame);
    box(.95, .1, .16, 15.6, 3.18, z + d * .08, mat.stone, C);
  }
  box(.05, WALL_TOP + RISE + .2 - FLOOR, IW, IX1 - .03, (FLOOR + WALL_TOP + RISE + .2) / 2, CZ, cm.wall, C);
  box(.07, .95, IW, IX1 - .05, FLOOR + .48, CZ, cm.wainscot, C);
  box(.05, WALL_TOP + RISE + .2 - GLASS_TOP, IW, IX0 + .03, (WALL_TOP + RISE + .2 + GLASS_TOP) / 2, CZ, cm.wall, C);

  // Paroi vitrée entre le bas-côté gauche, à l'entrée de l'église, et la chapelle : portes centrales,
  // poignées en laiton, plaques « TIREZ » et rangée de petites croix blanches.
  const GX0 = X0 + T / 2;
  box(.03, GLASS_TOP - FLOOR, Z1 - Z0 - .1, GX0, (FLOOR + GLASS_TOP) / 2, CZ, cm.glass, C);
  for (const z of [Z0 + .1, CZ - 1.15, CZ, CZ + 1.15, Z1 - .1]) box(.06, GLASS_TOP - FLOOR, .05, GX0, (FLOOR + GLASS_TOP) / 2, z, mat.metal, C);
  box(.08, .08, Z1 - Z0, GX0, GLASS_TOP - .04, CZ, mat.metal, C);
  box(.08, .05, Z1 - Z0, GX0, FLOOR + .03, CZ, mat.metal, C);
  for (const side of [-1, 1]) {
    const z = CZ + side * .32;
    box(.035, .035, .62, GX0 - .1, FLOOR + 1.15, z, cm.gold, C);
    for (const e of [-.29, .29]) box(.1, .03, .03, GX0 - .05, FLOOR + 1.15, z + e, cm.gold, C);
    box(.01, .05, .15, GX0 - .02, FLOOR + 1.38, z, cm.slate, C);
  }
  for (let z = Z0 + .25; z < Z1 - .1; z += .26) {
    box(.006, .13, .025, GX0 - .02, FLOOR + .92, z, cm.white, C);
    box(.006, .025, .09, GX0 - .02, FLOOR + .95, z, cm.white, C);
  }
  box(.04, .45, IW, X0 - .02, GLASS_TOP + .2, CZ, cm.render, C);
  // Voûte lambrissée peinte (segment de cylindre).
  const R = ((IW / 2) ** 2 + RISE ** 2) / (2 * RISE), half = Math.asin((IW / 2) / R);
  const vault = mesh(new THREE.CylinderGeometry(R, R, IX1 - IX0, 48, 1, true, Math.PI / 2 - half, half * 2), cm.ceiling, C);
  vault.rotation.z = Math.PI / 2; vault.position.set(CX, WALL_TOP + RISE - R, CZ);
  // Bancs.
  for (let row = 0; row < 5; row++) for (const zc of [IZ0 + 1.35, IZ1 - 1.35]) {
    const x = IX0 + 1.0 + row * .78;
    box(.38, .07, 2.2, x, FLOOR + .45, zc, cm.wood, C);
    box(.06, .5, 2.2, x - .2, FLOOR + .78, zc, cm.wood, C);
    for (const e of [-1.08, 1.08]) box(.5, .9, .07, x - .02, FLOOR + .45, zc + e, cm.wood, C);
  }
  // Chœur surélevé, muret et grille en fer forgé.
  const GX = 16.1;
  box(IX1 - GX, .16, IW, (GX + IX1) / 2, FLOOR + .08, CZ, mat.stone, C);
  box(.32, .85, IW, GX, FLOOR + .43, CZ, cm.wainscot, C);
  box(.4, .08, IW, GX, FLOOR + .88, CZ, mat.stone, C);
  const grille = mesh(new THREE.PlaneGeometry(IW, 1.9), cm.iron, C, false); grille.position.set(GX, FLOOR + 1.83, CZ); grille.rotation.y = Math.PI / 2;
  const crest = mesh(new THREE.PlaneGeometry(1.6, .45), cm.iron, C, false); crest.position.set(GX, FLOOR + 3.03, CZ); crest.rotation.y = Math.PI / 2;
  for (const dz of [-.8, .8]) box(.06, 2.4, .06, GX, FLOOR + 2.05, CZ + dz, mat.metal, C);
  // Retable du maître-autel.
  const RX = IX1 - .08;
  box(.75, 1.0, 2.2, RX - .55, FLOOR + .66, CZ, cm.marble, C);
  box(.5, .55, .8, RX - .3, FLOOR + 1.43, CZ, cm.gold, C);                       // tabernacle
  box(.06, 2.0, 1.25, RX - .02, FLOOR + 2.85, CZ, cm.painting, C);
  box(.1, 2.3, 1.55, RX + .01, FLOOR + 2.85, CZ, cm.gold, C);
  for (const dz of [-1.2, -.95, .95, 1.2]) cylinder(.09, .1, 2.7, 12, RX - .25, FLOOR + 2.65, CZ + dz, cm.gold, C);
  box(.45, .3, 3.0, RX - .2, FLOOR + 4.15, CZ, cm.gold, C);                       // entablement
  const pediment = mesh(new THREE.ConeGeometry(1.5, .9, 3), cm.gold, C); pediment.position.set(RX - .15, FLOOR + 4.75, CZ); pediment.rotation.set(Math.PI / 2, 0, Math.PI / 2); pediment.scale.set(1, .12, 1);
  const glory = mesh(new THREE.TorusGeometry(.32, .06, 8, 24), cm.gold, C); glory.position.set(RX - .15, FLOOR + 4.85, CZ); glory.rotation.y = Math.PI / 2;
  // Retables latéraux, contre les murs du chœur.
  for (const [z, d] of [[IZ0 + .08, 1], [IZ1 - .08, -1]]) {
    box(1.3, .9, .5, 17.55, FLOOR + .45, z + d * .25, cm.marble, C);
    box(.95, 1.5, .05, 17.55, FLOOR + 2.15, z + d * .02, cm.painting, C);
    box(1.25, 1.85, .07, 17.55, FLOOR + 2.15, z, cm.gold, C);
    for (const dx of [-.62, .62]) cylinder(.07, .08, 2.0, 10, 17.55 + dx, FLOOR + 2.0, z + d * .15, cm.gold, C);
    box(1.5, .2, .3, 17.55, FLOOR + 3.1, z + d * .12, cm.gold, C);
  }
  // Tableaux de la nef.
  for (const [z, d] of [[IZ0 + .06, 1], [IZ1 - .06, -1]]) for (const x of [12.9, 14.3]) {
    box(.9, 1.15, .06, x, FLOOR + 2.2, z, cm.gold, C); box(.74, .98, .03, x, FLOOR + 2.2, z + d * .03, cm.painting, C);
  }
  // Lustres.
  const chapelLights = new THREE.Group();
  for (const x of [13.7, 17.3]) {
    box(.03, .9, .03, x, WALL_TOP + .55, CZ, mat.metal, C);
    const ring = mesh(new THREE.TorusGeometry(.42, .035, 8, 32), cm.gold, C, false); ring.position.set(x, WALL_TOP - .1, CZ); ring.rotation.x = Math.PI / 2;
    const stem = cylinder(.05, .09, .6, 10, x, WALL_TOP - .1, CZ, cm.gold, C);
    for (let i = 0; i < 6; i++) {
      const a = i * TAU / 6;
      cylinder(.025, .025, .16, 6, x + Math.cos(a) * .42, WALL_TOP + .0, CZ + Math.sin(a) * .42, cm.candle, C);
    }
    const light = new THREE.PointLight(0xffd8a0, 9, 9, 1.6); light.position.set(x, WALL_TOP - .2, CZ); chapelLights.add(light);
  }
  const altarLight = new THREE.PointLight(0xffe2b8, 6, 6, 1.6); altarLight.position.set(RX - 1.4, FLOOR + 3.2, CZ); chapelLights.add(altarLight);
  mergeByMaterial(chapel, metric);
  // Miroir gauche/droite : x opposé, normales corrigées, triangles remis dans le bon sens.
  for (const m of chapel.children) {
    const pos = m.geometry.attributes.position, nor = m.geometry.attributes.normal, uv = m.geometry.attributes.uv;
    for (let i = 0; i < pos.count; i++) { pos.setX(i, -pos.getX(i)); if (nor) nor.setX(i, -nor.getX(i)); }
    for (const attr of [pos, nor, uv]) {
      if (!attr) continue;
      const a = attr.array, k = attr.itemSize;
      for (let t = 0; t < attr.count; t += 3) for (let c = 0; c < k; c++) {
        const i1 = (t + 1) * k + c, i2 = (t + 2) * k + c; const tmp = a[i1]; a[i1] = a[i2]; a[i2] = tmp;
      }
    }
    m.geometry.computeBoundingSphere();
  }
  for (const l of chapelLights.children) l.position.x = -l.position.x;
  chapel.add(chapelLights);

  return { church, chapel, materials: mat, hotspots: {
    chapelle: new THREE.Vector3(-19.7, 7.6, CZ),
    parvis: new THREE.Vector3(0, 4.2, 10.2),
    clocher: new THREE.Vector3(0, 28.5, 8.8),
    rosace: new THREE.Vector3(15.8, 11.2, -16),
  } };
}
