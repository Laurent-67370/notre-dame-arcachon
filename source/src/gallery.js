// Galerie de photos : vignettes groupées par thème et visionneuse plein écran.
const SECTIONS = [
  ['Extérieur', [
    ['panorama-flanc', 'Panorama : le clocher, le pignon à la Vierge et le flanc sous les platanes'],
    ['facade-portail', 'Le pignon à la niche de la Vierge, sa rose et son portail à crochets'],
    ['portail-niche', 'Le portail latéral, ses colonnettes et sa porte bordeaux'],
    ['portail-lateral-clocher', 'La façade du clocher, son portail vitré et la grande baie'],
    ['portail-chapelle', 'Le grand portail ouvert et la Chapelle des Marins en moellons'],
    ['facade-escalier', 'La façade et le grand escalier'],
    ['facade-soleil', 'La façade au soleil, l’horloge et le beffroi'],
    ['clocher-carrefour', 'Le clocher depuis le carrefour'],
    ['rue-fleche', 'La flèche de pierre vue depuis la rue'],
    ['clocher-grille', 'Le clocher de profil, derrière la grille'],
    ['portail-lateral', 'Le portail latéral et le clocher'],
    ['portail-lateral-2', 'Le portail latéral, autre cadrage'],
    ['flanc-nord', 'Le flanc : transept, rose, porche et colonne mariale'],
    ['entree-notre-dame', 'L’entrée « Notre Dame » et le flanc de la nef'],
    ['transept-rose', 'Le pignon du transept : rose à huit pétales et frontispice'],
    ['transept-platane', 'Le transept et la flèche derrière les platanes'],
  ]],
  ['Intérieur', [
    ['nef-choeur', 'La nef vers le chœur : voûtes d’ogives aux voûtains rouges'],
    ['nef-orgue', 'La nef vers la tribune d’orgue'],
    ['choeur', 'Le chœur, ses vitraux et la frise peinte'],
    ['bas-cote', 'Le bas-côté et les piliers en faisceau'],
  ]],
  ['Chapelle des Marins', [
    ['chapelle-marins', 'Plafond de bois peint, retables dorés et grille en fer forgé'],
    ['chapelle-marins-histoire', 'Le panneau historique : de 1519 à la restauration de 1987'],
  ]],
  ['Premières références', [
    ['facade', 'La façade, le portail ogival et la flèche du clocher'],
    ['transept', 'Le transept, la grande rosace et la statue latérale'],
    ['rosace', 'La rosace et les contrastes entre brique rouge et pierre claire'],
  ]],
];

export function setupGallery(container) {
  const photos = [];
  for (const [title, items] of SECTIONS) {
    const h = document.createElement('h3'); h.className = 'gallery-title';
    h.textContent = `${title} · ${items.length}`; container.appendChild(h);
    const grid = document.createElement('div'); grid.className = 'gallery-grid'; container.appendChild(grid);
    for (const [file, caption] of items) {
      const index = photos.push({ file, caption }) - 1;
      const btn = document.createElement('button'); btn.className = 'thumb'; btn.type = 'button';
      btn.setAttribute('aria-label', `Agrandir : ${caption}`);
      const img = document.createElement('img');
      img.src = `./photos/miniatures/${file}.jpg`; img.alt = caption; img.loading = 'lazy'; img.decoding = 'async';
      btn.appendChild(img); btn.addEventListener('click', () => open(index)); grid.appendChild(btn);
    }
  }

  const box = document.getElementById('lightbox');
  const big = box.querySelector('img'), text = box.querySelector('.lb-caption'), count = box.querySelector('.lb-count');
  let current = 0;
  function show(i) {
    current = (i + photos.length) % photos.length;
    const p = photos[current];
    big.src = `./photos/${p.file}.jpg`; big.alt = p.caption;
    text.textContent = p.caption; count.textContent = `${current + 1} / ${photos.length}`;
    new Image().src = `./photos/${photos[(current + 1) % photos.length].file}.jpg`;
  }
  function open(i) { show(i); if (!box.open) box.showModal(); }
  box.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
  box.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
  box.querySelector('.lb-close').addEventListener('click', () => box.close());
  box.addEventListener('click', e => { if (e.target === box) box.close(); });
  box.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
  let startX = null;
  box.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX; startX = null;
    if (Math.abs(dx) > 45) show(current + (dx < 0 ? 1 : -1));
  });
  return { isOpen: () => box.open, count: photos.length };
}
