import * as THREE from 'three';
import { mergeByMaterial } from './church.js';

// Intérieur de l'église : nef à trois vaisseaux, sept piliers de pierre en faisceau de chaque côté,
// voûtes d'ogives aux voûtains rouges et nervures blanches, tribune d'orgue et chœur.
// Tout est construit à l'intérieur du volume extérieur (même repère que church.js).

const TAU = Math.PI * 2;
function rng(seed) {
  return () => { seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
const random = rng(15190722);

function canvasTex(w, h, painter, repeat = [1, 1]) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  painter(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...repeat); t.anisotropy = 8; return t;
}
const vaultTex = () => canvasTex(256, 256, (ctx, w, h) => {
  ctx.fillStyle = '#a9533f'; ctx.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 16) { ctx.fillStyle = `rgba(60,20,12,${.06 + random() * .05})`; ctx.fillRect(0, y, w, 2); }
  for (let i = 0; i < 1600; i++) { ctx.fillStyle = `rgba(${random() > .5 ? '255,210,190' : '50,15,8'},${random() * .06})`; ctx.fillRect(random() * w, random() * h, 3, 2); }
}, [6, 3]);
const stoneTex = () => canvasTex(256, 256, (ctx, w, h) => {
  ctx.fillStyle = '#d7ccb6'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 6000; i++) { const v = random() > .5 ? 255 : 80; ctx.fillStyle = `rgba(${v},${v},${v - 10},${random() * .05})`; ctx.fillRect(random() * w, random() * h, 2, 2); }
  for (let y = 0; y < h; y += 64) { ctx.fillStyle = 'rgba(90,80,60,.18)'; ctx.fillRect(0, y, w, 2); }
}, [1, 2]);
const floorTex = () => canvasTex(256, 256, (ctx, w, h) => {
  ctx.fillStyle = '#3c4041'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 3000; i++) { ctx.fillStyle = `rgba(200,200,200,${random() * .08})`; ctx.fillRect(random() * w, random() * h, 2, 2); }
  ctx.strokeStyle = 'rgba(120,125,126,.55)'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(w, h); ctx.moveTo(w, 0); ctx.lineTo(0, h); ctx.stroke();
}, [14, 16]);
// Vitrail : losanges de couleur sertis de plomb.
const glassTex = () => canvasTex(128, 256, (ctx, w, h) => {
  const pal = ['#2c5aa8', '#b3322a', '#e0b23a', '#3d8a5c', '#6e3a8c', '#d9d2b4', '#2c5aa8', '#2c5aa8'];
  for (let y = 0; y < h; y += 16) for (let x = 0; x < w; x += 16) { ctx.fillStyle = pal[Math.floor(random() * pal.length)]; ctx.fillRect(x, y, 16, 16); }
  ctx.fillStyle = '#e8dcae'; ctx.beginPath(); ctx.ellipse(w / 2, h * .42, 22, 60, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#b3322a'; ctx.beginPath(); ctx.ellipse(w / 2, h * .5, 16, 44, 0, 0, TAU); ctx.fill();
  ctx.fillStyle = '#f1d27a'; ctx.beginPath(); ctx.arc(w / 2, h * .22, 14, 0, TAU); ctx.fill();
  ctx.strokeStyle = '#1a1a1a'; ctx.lineWidth = 2;
  for (let y = 0; y <= h; y += 16) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  for (let x = 0; x <= w; x += 16) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
});
const roseTex = () => canvasTex(256, 256, (ctx, w) => {
  const c = w / 2; ctx.fillStyle = '#1b2a4a'; ctx.fillRect(0, 0, w, w);
  const pal = ['#2c5aa8', '#b3322a', '#e0b23a', '#3d8a5c', '#7a3a8c'];
  for (let i = 0; i < 8; i++) {
    const a = i * TAU / 8;
    ctx.fillStyle = pal[i % pal.length]; ctx.beginPath(); ctx.ellipse(c + Math.cos(a) * 62, c + Math.sin(a) * 62, 30, 46, a + Math.PI / 2, 0, TAU); ctx.fill();
    ctx.strokeStyle = '#111'; ctx.lineWidth = 5; ctx.stroke();
  }
  ctx.fillStyle = '#e0b23a'; ctx.beginPath(); ctx.arc(c, c, 26, 0, TAU); ctx.fill(); ctx.stroke();
  ctx.lineWidth = 9; ctx.beginPath(); ctx.arc(c, c, 122, 0, TAU); ctx.stroke();
});
// Frise peinte du chœur : une foule de personnages autour d'une figure centrale.
const muralTex = () => canvasTex(1024, 256, (ctx, w, h) => {
  const g = ctx.createLinearGradient(0, 0, 0, h); g.addColorStop(0, '#c8c2ae'); g.addColorStop(1, '#a9a28c');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  const robes = ['#f0ece2', '#2b2a2c', '#5b4636', '#3d5a7a', '#8a3a30', '#e7e1d2', '#2b2a2c'];
  for (let i = 0; i < 46; i++) {
    const x = 12 + i * 22 + random() * 6, y = 120 + random() * 30, s = .8 + random() * .4;
    if (Math.abs(x - w / 2) < 46) continue;
    ctx.fillStyle = robes[Math.floor(random() * robes.length)];
    ctx.beginPath(); ctx.moveTo(x - 10 * s, h - 10); ctx.lineTo(x - 7 * s, y); ctx.lineTo(x + 7 * s, y); ctx.lineTo(x + 10 * s, h - 10); ctx.fill();
    ctx.fillStyle = '#d9b99a'; ctx.beginPath(); ctx.arc(x, y - 9 * s, 7 * s, 0, TAU); ctx.fill();
  }
  ctx.fillStyle = '#8c7a5c'; ctx.fillRect(w / 2 - 34, 150, 68, 96);
  ctx.fillStyle = '#e8e2d0'; ctx.beginPath(); ctx.moveTo(w / 2 - 16, 150); ctx.lineTo(w / 2 - 10, 70); ctx.lineTo(w / 2 + 10, 70); ctx.lineTo(w / 2 + 16, 150); ctx.fill();
  ctx.fillStyle = '#d9b99a'; ctx.beginPath(); ctx.arc(w / 2, 60, 10, 0, TAU); ctx.fill();
  ctx.strokeStyle = '#d6b25c'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(w / 2, 60, 17, 0, TAU); ctx.stroke();
  ctx.fillStyle = 'rgba(80,60,40,.5)'; ctx.fillRect(0, 0, w, 6); ctx.fillRect(0, h - 6, w, 6);
}, [2, 1]);
const balustradeTex = () => canvasTex(512, 64, (ctx, w, h) => {
  ctx.strokeStyle = '#151515'; ctx.lineWidth = 5; ctx.strokeRect(2, 3, w - 4, h - 6);
  ctx.lineWidth = 3;
  for (let x = 0; x < w; x += 32) {
    ctx.beginPath(); ctx.moveTo(x, h - 4); ctx.lineTo(x, 22); ctx.quadraticCurveTo(x, 6, x + 16, 6); ctx.quadraticCurveTo(x + 32, 6, x + 32, 22); ctx.stroke();
    ctx.beginPath(); ctx.arc(x + 16, 26, 6, 0, TAU); ctx.stroke();
  }
});

export function createNave() {
  const nave = new THREE.Group(); nave.name = 'Nef';
  const D = THREE.DoubleSide;
  const sMap = stoneTex();
  const m = {
    plaster: new THREE.MeshStandardMaterial({ color: 0xd2d7d4, roughness: .92, side: D }),
    vault: new THREE.MeshStandardMaterial({ map: vaultTex(), roughness: .9, side: D }),
    stone: new THREE.MeshStandardMaterial({ map: sMap, roughness: .85, side: D }),
    rib: new THREE.MeshStandardMaterial({ color: 0xeee6d6, map: sMap, roughness: .8 }),
    floor: new THREE.MeshStandardMaterial({ map: floorTex(), roughness: .55 }),
    glass: new THREE.MeshStandardMaterial({ map: glassTex(), emissiveMap: null, emissive: 0xffffff, emissiveIntensity: .0, roughness: .4, side: D }),
    rose: new THREE.MeshStandardMaterial({ roughness: .4, side: D }),
    mural: new THREE.MeshStandardMaterial({ map: muralTex(), roughness: .9, side: D }),
    wood: new THREE.MeshStandardMaterial({ color: 0x7b4a26, roughness: .55 }),
    darkWood: new THREE.MeshStandardMaterial({ color: 0x3b2a1e, roughness: .6, side: D }),
    pipe: new THREE.MeshStandardMaterial({ color: 0xd0d4d8, metalness: .55, roughness: .28, emissive: 0x2a2c2e }),
    iron: new THREE.MeshStandardMaterial({ map: balustradeTex(), alphaTest: .5, transparent: false, side: D, color: 0x2a2a2a, roughness: .5 }),
    marble: new THREE.MeshStandardMaterial({ color: 0xefede6, roughness: .35 }),
    uplight: new THREE.MeshStandardMaterial({ color: 0xffe2b0, emissive: 0xffc77a, emissiveIntensity: 1.4 }),
    banner: new THREE.MeshStandardMaterial({ color: 0x2f6f9a, roughness: .8, side: D }),
    flesh: new THREE.MeshStandardMaterial({ color: 0xb79a7c, roughness: .7 }),
  };
  m.glass.emissiveMap = m.glass.map; m.glass.emissiveIntensity = 1.0;
  const roseMap = roseTex(); m.rose.map = roseMap; m.rose.emissiveMap = roseMap; m.rose.emissive.set(0xffffff); m.rose.emissiveIntensity = 1.0;

  const add = (geo, mat, parent = nave) => { const o = new THREE.Mesh(geo, mat); o.castShadow = o.receiveShadow = true; parent.add(o); return o; };
  const box = (w, h, d, x, y, z, mat) => { const o = add(new THREE.BoxGeometry(w, h, d), mat); o.position.set(x, y, z); return o; };
  const cyl = (rt, rb, h, seg, x, y, z, mat) => { const o = add(new THREE.CylinderGeometry(rt, rb, h, seg), mat); o.position.set(x, y, z); return o; };
  const tube = (pts, r, mat) => add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), Math.max(8, pts.length * 3), r, 8, false), mat);
  // Bande de triangles entre deux polylignes de même longueur.
  function strip(A, B, mat) {
    const pos = [], uv = [], idx = [];
    let len = 0;
    for (let i = 0; i < A.length; i++) {
      if (i) len += A[i].distanceTo(A[i - 1]);
      pos.push(...A[i].toArray(), ...B[i].toArray());
      uv.push(len / 4, 0, len / 4, A[i].distanceTo(B[i]) / 4);
      if (i) { const a = (i - 1) * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx); g.computeVertexNormals();
    return add(g, mat);
  }
  const quad = (p0, c, p1, n) => { const out = []; for (let i = 0; i <= n; i++) { const t = i / n, a = (1 - t) ** 2, b = 2 * (1 - t) * t, d = t * t; out.push([a * p0[0] + b * c[0] + d * p1[0], a * p0[1] + b * c[1] + d * p1[1]]); } return out; };
  // Contour d'une arcade brisée (u, v) : piédroit gauche, arc, piédroit droit.
  function archOutline(cx, w, base, spring, apex, n = 14) {
    const L = cx - w / 2, R = cx + w / 2, k = spring + (apex - spring) * .72;
    const left = quad([L, spring], [L, k], [cx, apex], n), right = quad([cx, apex], [R, k], [R, spring], n).slice(1);
    return [[L, base], ...left, ...right, [R, base]];
  }
  function shapeFrom(pts, holes = []) {
    const s = new THREE.Shape(pts.map(p => new THREE.Vector2(p[0], p[1])));
    for (const h of holes) s.holes.push(new THREE.Path(h.map(p => new THREE.Vector2(p[0], p[1]))));
    return new THREE.ShapeGeometry(s, 4);
  }

  // Dimensions (mètres, repère de la maquette).
  const FLOOR = 1.8, PX = 6.6, AW = 10.6, ZT = -24.4, ZAE = -22.9, CAP = 6.0, ARC = 7.7, VS = 10.4, VA = 15.8;
  const PIERS = [-2.8, -5.7, -8.6, -11.5, -14.4, -17.3, -20.2];        // sept piliers de chaque côté
  const naveCurve = (() => {
    const left = quad([-PX, VS], [-PX, VS + (VA - VS) * .78], [0, VA], 16);
    return [...left, ...left.slice(0, -1).reverse().map(([x, y]) => [-x, y])];
  })();
  const aisleCurve = s => quad([s * AW, 5.6], [s * AW, 7.7], [s * (PX + .25), 8.4], 12);

  // Sol, mur de façade (sous la tribune) et arc triomphal.
  box(AW * 2, .02, -ZAE, 0, FLOOR + .01, ZAE / 2, m.floor);
  const westPts = [[-AW, FLOOR], ...aisleCurve(-1).map(([x, y]) => [x, y + .12]), [-PX - .25, VS + .1], ...naveCurve.map(([x, y]) => [x, y + .15]), [PX + .25, VS + .1], ...aisleCurve(1).reverse().map(([x, y]) => [x, y + .12]), [AW, FLOOR]];
  const door = archOutline(0, 2.4, FLOOR, FLOOR + 2.6, FLOOR + 3.6);
  const west = add(shapeFrom(westPts, [door]), m.plaster); west.position.z = -.02;
  const doorLeaf = add(shapeFrom(door), m.darkWood); doorLeaf.position.z = .1;
  const triPts = [[-PX - .25, FLOOR], [-PX - .25, VS], ...naveCurve.map(([x, y]) => [x, y + .15]), [PX + .25, VS], [PX + .25, FLOOR]];
  const triHole = archOutline(0, 11.0, FLOOR, 9.2, 14.4, 18);
  for (const z of [ZT, ZT - .6]) { const t = add(shapeFrom(triPts, [triHole]), m.plaster); t.position.z = z; }
  strip(triHole.map(([x, y]) => new THREE.Vector3(x, y, ZT)), triHole.map(([x, y]) => new THREE.Vector3(x, y, ZT - .6)), m.stone);
  tube(triHole.slice(1, -1).map(([x, y]) => new THREE.Vector3(x * 1.01, y + .08, ZT + .05)), .14, m.rib);

  // Murs de la nef sur les grandes arcades, des deux côtés.
  const bays = [[0.05, -PIERS[0] - .45]];
  for (let i = 0; i < PIERS.length - 1; i++) bays.push([-PIERS[i] + .45, -PIERS[i + 1] - .45]);
  for (const s of [-1, 1]) {
    const outline = [[0, FLOOR], [-ZT, FLOOR], [-ZT, VS + .15], [0, VS + .15]];
    const holes = bays.map(([u0, u1]) => archOutline((u0 + u1) / 2, u1 - u0, FLOOR, CAP, ARC));
    for (const off of [-.25, .25]) {
      const wall = add(shapeFrom(outline, holes), m.plaster); wall.rotation.y = Math.PI / 2; wall.position.x = s * PX + off;
    }
    for (const h of holes) {
      strip(h.map(([u, v]) => new THREE.Vector3(s * (PX - .25), v, -u)), h.map(([u, v]) => new THREE.Vector3(s * (PX + .25), v, -u)), m.stone);
      tube(h.slice(1, -1).filter(([, v]) => v >= CAP - .01).map(([u, v]) => new THREE.Vector3(s * (PX - .29), v + .06, -u)), .1, m.rib);
    }
    box(.1, .16, -ZT, s * (PX - .3), ARC + .45, ZT / 2, m.rib);                        // cordon sous les fenêtres hautes
    // Fenêtres hautes : lancettes, et deux roses au droit du transept.
    const centers = bays.slice(1).map(([u0, u1]) => (u0 + u1) / 2).concat([22.3]);
    for (const u of centers) {
      if (Math.abs(u - 12.95) < .1 || Math.abs(u - 15.85) < .1) {
        const r = add(new THREE.CircleGeometry(.85, 32), m.rose); r.position.set(s * (PX - .28), 9.35, -u); r.rotation.y = Math.PI / 2;
        const ring = add(new THREE.TorusGeometry(.88, .09, 8, 40), m.rib); ring.position.copy(r.position); ring.rotation.y = Math.PI / 2;
      } else {
        const w = add(shapeFrom(archOutline(0, .62, 0, 1.0, 1.75)), m.glass); w.position.set(s * (PX - .28), 8.5, -u); w.rotation.y = Math.PI / 2;
      }
    }
    // Bas-côté : mur extérieur, vitraux, voûte en demi-berceau, mur de fond.
    box(.05, 5.6 - FLOOR + .15, -ZAE, s * AW, (5.6 + FLOOR) / 2, ZAE / 2, m.plaster);
    for (const z of [-4.25, -10.05, -15.85, -21.55]) {
      const w = add(shapeFrom(archOutline(0, .8, 0, 1.7, 2.6)), m.glass); w.position.set(s * (AW - .04), 2.6, z); w.rotation.y = Math.PI / 2;
    }
    const ac = aisleCurve(s);
    strip(ac.map(([x, y]) => new THREE.Vector3(x, y, 0)), ac.map(([x, y]) => new THREE.Vector3(x, y, ZAE)), m.vault);
    const endWall = add(shapeFrom([[s * (PX + .25), FLOOR], [s * AW, FLOOR], ...ac.map(([x, y]) => [x, y + .1])]), m.plaster); endWall.position.z = ZAE;
    const aisleRibs = [0, ...PIERS.filter(z => z > ZAE), ZAE];
    for (const z of PIERS) tube(ac.map(([x, y]) => new THREE.Vector3(x, y - .06, z)), .08, m.rib);
    for (let i = 0; i < aisleRibs.length - 1; i++) {
      const za = aisleRibs[i], zb = aisleRibs[i + 1];
      for (const [z0, z1] of [[za, zb], [zb, za]]) tube(ac.map(([x, y], k) => new THREE.Vector3(x, y - .06, z0 + (z1 - z0) * k / (ac.length - 1))), .06, m.rib);
    }
    // Piliers en faisceau : noyau, colonnettes, base octogonale, chapiteau feuillagé.
    for (const z of PIERS) {
      const x = s * PX;
      cyl(.62, .66, .45, 8, x, FLOOR + .22, z, m.stone);
      cyl(.4, .4, CAP - FLOOR - .95, 20, x, (FLOOR + CAP) / 2 - .02, z, m.stone);
      for (const [dx, dz] of [[.38, 0], [-.38, 0], [0, .38], [0, -.38]]) {
        cyl(.15, .15, CAP - FLOOR - .95, 12, x + dx, (FLOOR + CAP) / 2 - .02, z + dz, m.stone);
        cyl(.21, .21, .14, 12, x + dx, FLOOR + .5, z + dz, m.stone);
      }
      cyl(.62, .45, .5, 16, x, CAP - .3, z, m.stone);
      for (let k = 0; k < 10; k++) {
        const a = k * TAU / 10, leaf = add(new THREE.IcosahedronGeometry(.13, 0), m.stone);
        leaf.position.set(x + Math.cos(a) * .55, CAP - .28 + (k % 2) * .12, z + Math.sin(a) * .55);
      }
      box(1.05, .14, 1.05, x, CAP + .02, z, m.stone);
      const sx = s * (PX - .36);                                                      // colonnette montant jusqu'aux voûtes
      cyl(.12, .12, VS - CAP, 10, sx, (VS + CAP) / 2, z, m.stone);
      cyl(.22, .14, .3, 10, sx, VS - .1, z, m.stone);
      const up = cyl(.12, .14, .08, 12, s * (PX - .75), FLOOR + .05, z, m.uplight);
    }
  }

  // Voûtes d'ogives de la nef : voûtains rouges, doubleaux, ogives croisées et clés de voûte.
  strip(naveCurve.map(([x, y]) => new THREE.Vector3(x, y, 0)), naveCurve.map(([x, y]) => new THREE.Vector3(x, y, ZT)), m.vault);
  const ribLines = [0, ...PIERS, ZT];
  const rib = (z, k = 1) => naveCurve.map(([x, y]) => new THREE.Vector3(x * k, y - .08, z));
  for (const z of PIERS) tube(rib(z), .13, m.rib);
  for (let i = 0; i < ribLines.length - 1; i++) {
    const za = ribLines[i], zb = ribLines[i + 1], n = naveCurve.length - 1;
    for (const [z0, z1] of [[za, zb], [zb, za]]) tube(naveCurve.map(([x, y], k) => new THREE.Vector3(x, y - .08, z0 + (z1 - z0) * k / n)), .1, m.rib);
    const boss = cyl(.26, .2, .16, 16, 0, VA - .16, (za + zb) / 2, m.rib);
  }

  // Abside : murs, frise peinte, stalles, trois grands vitraux et cul-de-four nervuré.
  const AZ = -24.8, AR = 6.0, AT = 11.6, th0 = Math.PI / 2 - .08, thL = Math.PI + .16;
  const wall = add(new THREE.CylinderGeometry(AR, AR, AT - FLOOR, 32, 1, true, th0, thL), m.plaster); wall.position.set(0, (AT + FLOOR) / 2, AZ);
  const frieze = add(new THREE.CylinderGeometry(AR - .05, AR - .05, 2.2, 48, 1, true, th0 + .12, thL - .24), m.mural); frieze.position.set(0, 5.3, AZ);
  const stalls = add(new THREE.CylinderGeometry(AR - .35, AR - .35, 1.5, 32, 1, true, th0 + .1, thL - .2), m.darkWood); stalls.position.set(0, FLOOR + .35 + .75, AZ);
  const seat = add(new THREE.CylinderGeometry(AR - .6, AR - .6, .5, 32, 1, false, th0 + .1, thL - .2), m.wood); seat.position.set(0, FLOOR + .35 + .25, AZ);
  const dome = add(new THREE.SphereGeometry(AR, 32, 10, Math.PI - .08, Math.PI + .16, 0, Math.PI / 2), m.vault); dome.position.set(0, AT, AZ); dome.scale.y = .5;
  for (let k = 0; k <= 6; k++) {
    const a = Math.PI / 2 + k * Math.PI / 6, pts = [];
    for (let j = 0; j <= 10; j++) { const t = j / 10 * Math.PI / 2; pts.push(new THREE.Vector3(Math.sin(a) * AR * .985 * Math.sin(t), AT + AR * .5 * Math.cos(t) - .06, AZ + Math.cos(a) * AR * .985 * Math.sin(t))); }
    tube(pts.reverse(), .1, m.rib);
    if (k > 0 && k < 6) cyl(.1, .1, AT - 6.4, 8, Math.sin(a) * (AR - .15), (AT + 6.4) / 2, AZ + Math.cos(a) * (AR - .15), m.stone);
  }
  for (const a of [Math.PI - .52, Math.PI, Math.PI + .52]) {
    const w = add(shapeFrom(archOutline(0, 1.05, 0, 3.0, 4.0)), m.glass);
    w.position.set(Math.sin(a) * (AR - .06), 7.2, AZ + Math.cos(a) * (AR - .06)); w.rotation.y = a + Math.PI;
  }
  // Chœur surélevé, autel et crucifix.
  box(PX * 2, .35, 6.6, 0, FLOOR + .175, -21.1, m.stone);
  cyl(AR, AR, .35, 32, 0, FLOOR + .175, AZ, m.stone);
  box(PX * 2, .175, .4, 0, FLOOR + .0875, -17.6, m.stone);
  box(2.5, .14, 1.15, 0, FLOOR + .35 + .95, -19.4, m.marble);
  for (const dx of [-1.0, 1.0]) for (const dz of [-.4, .4]) cyl(.1, .12, .88, 10, dx, FLOOR + .35 + .44, -19.4 + dz, m.marble);
  box(.14, 2.6, .12, PX - .75, 5.7, -19.75, m.darkWood); box(1.4, .13, .12, PX - .75, 6.5, -19.75, m.darkWood);
  cyl(.1, .07, 1.1, 8, PX - .75, 5.7, -19.66, m.flesh); box(.12, .1, 1.1, PX - .75, 6.45, -19.66, m.flesh).rotation.y = Math.PI / 2;
  box(.95, 1.9, .03, -PX + .7, 5.0, -19.85, m.banner);

  // Bancs de part et d'autre de l'allée centrale.
  for (let z = -3.6; z > -16.9; z -= .95) for (const s of [-1, 1]) {
    const cx = s * 3.2;
    box(4.8, .07, .42, cx, FLOOR + .46, z, m.wood);
    box(4.8, .55, .06, cx, FLOOR + .8, z + .23, m.wood);
    for (const e of [-2.4, 2.4]) box(.07, .95, .55, cx + e, FLOOR + .47, z + .02, m.wood);
  }

  // Tribune et buffet d'orgue au-dessus de l'entrée.
  const TZ = -2.45, TY = CAP;
  box(PX * 2 - .5, .3, -TZ, 0, TY, TZ / 2, m.stone);
  const bal = add(new THREE.PlaneGeometry(PX * 2 - .5, .95), m.iron); bal.position.set(0, TY + .62, TZ);
  box(PX * 2 - .5, .08, .12, 0, TY + 1.12, TZ, m.darkWood);
  for (const x of [-3.3, 3.3]) cyl(.24, .28, TY - FLOOR, 14, x, (TY + FLOOR) / 2, TZ + .25, m.stone);
  const OZ = -1.0, OY = TY + .15;
  box(5.4, 4.6, 1.3, 0, OY + 2.3, OZ, m.darkWood);
  for (const [cx, w, h] of [[0, 1.7, 4.2], [-1.85, 1.35, 3.5], [1.85, 1.35, 3.5]]) {
    const n = Math.round(w / .16);
    for (let i = 0; i < n; i++) {
      const x = cx - w / 2 + .08 + i * (w - .16) / (n - 1), t = 1 - Math.abs(i - (n - 1) / 2) / n, ph = h * (.55 + .4 * t);
      cyl(.055, .055, ph, 10, x, OY + .5 + ph / 2, OZ - .7, m.pipe);
      const mouth = add(new THREE.ConeGeometry(.055, .12, 10), m.pipe); mouth.position.set(x, OY + .5, OZ - .7); mouth.rotation.x = Math.PI;
    }
    const arch = archOutline(cx, w + .2, OY + .4, OY + h * .78, OY + h + .5);
    tube(arch.slice(1, -1).map(([x, y]) => new THREE.Vector3(x, y, OZ - .72)), .07, m.darkWood);
    const gable = add(new THREE.ConeGeometry(w * .55, 1.0, 3), m.darkWood); gable.position.set(cx, OY + h + 1.05, OZ - .5); gable.scale.z = .25;
    for (const e of [-1, 1]) { const p = add(new THREE.ConeGeometry(.1, .7, 4), m.darkWood); p.position.set(cx + e * (w / 2 + .05), OY + h + .7, OZ - .66); }
  }

  mergeByMaterial(nave);
  // Éclairage chaud : appliques au pied des piliers et lustres invisibles le long de la nef.
  const lights = new THREE.Group();
  for (const [x, y, z, i, d] of [[0, 7, -6, 5, 20], [0, 7, -15, 5, 20], [0, 8, -22, 5, 16], [0, 9, -27, 4, 12]]) {
    const l = new THREE.PointLight(0xffd9a6, i, d, 1); l.position.set(x, y, z); lights.add(l);
  }
  nave.add(lights);
  nave.visible = false;
  return nave;
}
