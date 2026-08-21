// Seed'den deterministik rastgele sayı üreteci (her iki oyuncu da aynı parça
// şekillerini ve başlangıç dağılımını hesaplasın diye)
export function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashStringToSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return h >>> 0;
}

// 500 parçaya en yakın, görsel oranına uygun grid boyutu üretir (tam 500 hedefler)
export function computeGrid(imgW, imgH, targetCount = 500) {
  const isLandscape = imgW >= imgH;
  // 20 x 25 = 500
  if (isLandscape) return { cols: 25, rows: 20 };
  return { cols: 20, rows: 25 };
}

// rows x cols için kenar tiplerini (iç kenarlar) deterministik üretir
// edgesV[r][c]: piece(r,c) sağ kenarı / piece(r,c+1) sol kenarı (c: 0..cols-2)
// edgesH[r][c]: piece(r,c) alt kenarı / piece(r+1,c) üst kenarı (r: 0..rows-2)
export function generateEdges(rows, cols, seed) {
  const rand = mulberry32(seed);
  const edgesV = Array.from({ length: rows }, () =>
    Array.from({ length: cols - 1 }, () => (rand() > 0.5 ? 1 : -1))
  );
  const edgesH = Array.from({ length: rows - 1 }, () =>
    Array.from({ length: cols }, () => (rand() > 0.5 ? 1 : -1))
  );
  return { edgesV, edgesH };
}

export function pieceEdges(r, c, rows, cols, edgesV, edgesH) {
  return {
    top: r === 0 ? 0 : -edgesH[r - 1][c],
    bottom: r === rows - 1 ? 0 : edgesH[r][c],
    left: c === 0 ? 0 : -edgesV[r][c - 1],
    right: c === cols - 1 ? 0 : edgesV[r][c],
  };
}

// Bir kenarı (düz çizgi ya da yumru/girinti) ctx path'ine ekler
function drawEdge(ctx, x0, y0, x1, y1, bump) {
  if (bump === 0) {
    ctx.lineTo(x1, y1);
    return;
  }
  const dx = x1 - x0;
  const dy = y1 - y0;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const amp = len * 0.22 * bump;
  const pt = (t) => ({ x: x0 + ux * len * t, y: y0 + uy * len * t });
  const a = pt(0.35);
  const b = pt(0.65);
  const mid = pt(0.5);
  const knobX = mid.x + nx * amp;
  const knobY = mid.y + ny * amp;

  ctx.lineTo(a.x, a.y);
  ctx.bezierCurveTo(
    a.x + nx * amp * 0.7,
    a.y + ny * amp * 0.7,
    knobX - ux * len * 0.18,
    knobY - uy * len * 0.18,
    knobX,
    knobY
  );
  ctx.bezierCurveTo(
    knobX + ux * len * 0.18,
    knobY + uy * len * 0.18,
    b.x + nx * amp * 0.7,
    b.y + ny * amp * 0.7,
    b.x,
    b.y
  );
  ctx.lineTo(x1, y1);
}

// Parçanın kenarlıklı (tab boşluğu dahil) path'ini pad ofsetiyle çizer
export function tracePiecePath(ctx, w, h, pad, edges) {
  ctx.beginPath();
  ctx.moveTo(pad, pad);
  drawEdge(ctx, pad, pad, pad + w, pad, edges.top);
  drawEdge(ctx, pad + w, pad, pad + w, pad + h, edges.right);
  drawEdge(ctx, pad + w, pad + h, pad, pad + h, edges.bottom);
  drawEdge(ctx, pad, pad + h, pad, pad, edges.left);
  ctx.closePath();
}

// Tepsi (henüz yerleşmemiş parçalar) alanı için dağınık başlangıç konumu
export function scatterPosition(r, c, rows, cols, pieceW, pieceH, trayTop, trayWidth, rand) {
  const cellW = trayWidth / cols;
  const col = Math.floor(rand() * cols);
  const row = Math.floor((r * cols + c) / cols);
  const jitterX = (rand() - 0.5) * (cellW - pieceW) * 0.8;
  const jitterY = (rand() - 0.5) * (pieceH * 0.5);
  return {
    x: col * cellW + (cellW - pieceW) / 2 + jitterX,
    y: trayTop + row * pieceH * 1.15 + jitterY,
  };
}

export function makeRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}
