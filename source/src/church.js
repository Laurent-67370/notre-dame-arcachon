import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

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

export function createChurch() {
  const church = new THREE.Group();
  church.name = 'Église Notre-Dame d’Arcachon';
  const brickMap = brickTexture(), stoneMap = stoneTexture();
  // Tuiles plates brun-rouge (nef, transept, chevet) et tuiles canal orangées (bas-côtés).
  const roofMap = tileTexture('#4a2f27', ['#6b4033', '#74463a', '#623a2f', '#7a4b3c', '#5e372c'], 22, 30, .22);
  const canalMap = tileTexture('#7a3d26', ['#b2603f', '#c06a45', '#a85a3a', '#bb7350', '#9f5034'], 40, 22, .28);
  const ironMap = ironstoneTexture();
  const mat = {
    brick: new THREE.MeshStandardMaterial({ map: brickMap, roughness: .91, color: 0xf1d7c6 }),
    stone: new THREE.MeshStandardMaterial({ map: stoneMap, roughness: .83, color: 0xf1e8d4 }),
    stoneDark: new THREE.MeshStandardMaterial({ color: 0x827c6f, roughness: .96 }),
    roof: new THREE.MeshStandardMaterial({ map: roofMap, roughness: .86, color: 0xf2e2da }),
    canal: new THREE.MeshStandardMaterial({ map: canalMap, roughness: .88, color: 0xf6e4d8 }),
    spire: new THREE.MeshStandardMaterial({ map: stoneMap, roughness: .86, color: 0xe2dccd }),
    ironstone: new THREE.MeshStandardMaterial({ map: ironMap, roughness: .97 }),
    plaque: new THREE.MeshStandardMaterial({ color: 0xf4f2ec, roughness: .5 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x173844, roughness: .3, metalness: .12, emissive: 0x071318, emissiveIntensity: .35 }),
    glassBlue: new THREE.MeshStandardMaterial({ color: 0x315d72, roughness: .28, metalness: .08, emissive: 0x0b1d29, emissiveIntensity: .45 }),
    door: new THREE.MeshStandardMaterial({ color: 0x321d25, roughness: .72 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x292c2b, roughness: .48, metalness: .58 }),
    clock: new THREE.MeshStandardMaterial({ color: 0xf3ecd9, roughness: .55 }),
    statue: new THREE.MeshStandardMaterial({ color: 0xe8e7df, roughness: .78 }),
    blue: new THREE.MeshStandardMaterial({ color: 0x548aa0, roughness: .7 }),
  };

  function mesh(geometry, material, parent = church, shadow = true) {
    const m = new THREE.Mesh(geometry, material);
    m.castShadow = shadow; m.receiveShadow = true;
    parent.add(m); return m;
  }
  function box(w, h, d, x, y, z, material = mat.stone, parent = church) {
    const m = mesh(new THREE.BoxGeometry(w, h, d), material, parent);
    m.position.set(x, y, z); return m;
  }
  function cylinder(rt, rb, h, segments, x, y, z, material, parent = church) {
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
  function gableRoof(width, length, eaveY, ridgeY, x, z, rotationY = 0, roofMat = mat.roof, parent = church) {
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
  function gableWall(width, baseY, eaveY, ridgeY, x, z, rotationY = 0, material = mat.brick) {
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, baseY); shape.lineTo(width / 2, baseY); shape.lineTo(width / 2, eaveY);
    shape.lineTo(0, ridgeY); shape.lineTo(-width / 2, eaveY); shape.closePath();
    const g = mesh(new THREE.ExtrudeGeometry(shape, { depth: .35, bevelEnabled: false }), material);
    g.position.set(x, 0, z); g.rotation.y = rotationY; return g;
  }
  // Chaînage d'angle en pierre « en dents d'engrenage » : blocs alternés longs / courts.
  function quoins(x, z, y0, y1, size = 1, parent = church) {
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
  function cross(x, y, z, scale = 1, parent = church) {
    const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(scale); parent.add(g);
    box(.12, 1.25, .12, 0, .55, 0, mat.metal, g); box(.72, .12, .12, 0, .78, 0, mat.metal, g);
    return g;
  }

  // Plate-forme et grand escalier du parvis.
  box(27, 1.8, 39, 0, .9, -9.5, mat.stoneDark);
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

  // Petit porche latéral (porte bordeaux) près de la colonne mariale.
  box(3.0, 4.6, 3.4, 12.6, 4.1, -6.4, mat.brick);
  box(3.2, .9, 3.6, 12.6, 2.25, -6.4, mat.ironstone);
  gableRoof(3.6, 3.6, 6.4, 7.6, 12.6, -6.4, Math.PI / 2, mat.canal);
  gableWall(3.4, 1.8, 6.4, 7.6, 14.1, -6.4, Math.PI / 2);
  const porchDoor = new THREE.Group(); porchDoor.position.set(14.47, 1.8, -6.4); porchDoor.rotation.y = Math.PI / 2; church.add(porchDoor);
  mesh(new THREE.ShapeGeometry(pointedPath(new THREE.Shape(), 1.5, 2.8, 0), 16), mat.door, porchDoor);
  const porchArch = archRing(1.95, 3.15, .2); porchArch.position.z = .02; porchDoor.add(porchArch);
  for (const dz of [-1.55, 1.55]) quoins(14.15, -6.4 + dz, 1.8, 6.3, .7);

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
    gableWall(5.6, 1.8, 10.3, 12.35, side * 6.35, 8.85);
    gableRoof(6.0, 6.5, 10.3, 12.35, side * 6.35, 6.0);
    const win = pairedWindow(2.15, 4.7, { quatrefoil: false, blue: true });
    win.position.set(side * 6.35, 3.2, 9.24); church.add(win);
    const oculus = roseWindow(.55); oculus.position.set(side * 6.35, 8.55, 9.25); church.add(oculus);
    box(5.8, .95, 6.2, side * 6.35, 2.27, 6.0, mat.ironstone);
    quoins(side * 8.9, 8.75, 1.8, 10.2);
    cross(side * 6.35, 12.5, 8.9, .52);
  }

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
  const doors = mesh(new THREE.ShapeGeometry(doorShape, 24), mat.door, portal); doors.position.z = .02;
  box(.07, 4.4, .10, 0, 2.2, .10, mat.metal, portal);
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) cylinder(.095, .11, 4.25, 10, side * (2.15 + i * .22), 2.15, .19 + i * .04, mat.stone, portal);
    const handle = mesh(new THREE.TorusGeometry(.10, .025, 6, 16), mat.metal, portal); handle.position.set(side * .24, 2.15, .16);
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

  // Statue latérale inspirée de la vue du transept.
  const statue = new THREE.Group(); statue.position.set(18.0, 0, -9.0); church.add(statue);
  for (let i = 0; i < 3; i++) cylinder(1.2 - i * .18, 1.3 - i * .18, .22, 12, 0, .11 + i * .22, 0, mat.stoneDark, statue);
  cylinder(.55, .75, 3.4, 12, 0, 2.2, 0, mat.stone, statue);
  cylinder(.8, .55, .32, 12, 0, 4.0, 0, mat.stone, statue);
  const robe = mesh(new THREE.ConeGeometry(.48, 1.9, 12), mat.statue, statue); robe.position.y = 5.0;
  const head = mesh(new THREE.SphereGeometry(.22, 16, 12), mat.statue, statue); head.position.y = 6.15;
  const veil = mesh(new THREE.ConeGeometry(.32, .85, 12, 1, true), mat.blue, statue); veil.position.set(0, 5.95, -.06);
  for (const side of [-1, 1]) {
    const arm = cylinder(.09, .12, .95, 8, side * .34, 5.55, 0, mat.statue, statue); arm.rotation.z = side * -.65;
  }

  // Assemblage par matériau : la maquette reste détaillée sans multiplier les appels de rendu.
  church.updateMatrixWorld(true);
  const buckets = new Map();
  church.traverse(o => {
    if (!o.isMesh) return;
    const geometry = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
    geometry.applyMatrix4(o.matrixWorld);
    if (!buckets.has(o.material)) buckets.set(o.material, []);
    buckets.get(o.material).push(geometry);
  });
  church.clear();
  for (const [material, geometries] of buckets) {
    const merged = mergeGeometries(geometries, false);
    const combined = new THREE.Mesh(merged, material);
    combined.castShadow = true; combined.receiveShadow = true; church.add(combined);
    geometries.forEach(g => g.dispose());
  }
  return { church, materials: mat, hotspots: {
    parvis: new THREE.Vector3(0, 4.2, 10.2),
    clocher: new THREE.Vector3(0, 28.5, 8.8),
    rosace: new THREE.Vector3(15.8, 11.2, -16),
  } };
}
