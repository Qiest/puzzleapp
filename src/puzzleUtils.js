// Seed'den deterministik rastgele sayı üreteci
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
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return h >>> 0;
}

// Hedef parça sayısını gerçekten üretir. Görsel oranına en uygun faktör çifti seçilir.
export function computeGrid(imgW, imgH, targetCount = 100) {
  const target = Math.max(1, Math.round(Number(targetCount) || 100));
  const ratio = Math.max(0.1, Number(imgW) || 1) / Math.max(0.1, Number(imgH) || 1);
  const candidates = [];

  for (let rows = 1; rows <= Math.sqrt(target); rows++) {
    if (target % rows !== 0) continue;
    const cols = target / rows;
    candidates.push({ rows, cols });
    candidates.push({ rows: cols, cols: rows });
  }

  if (!candidates.length) return { rows: 1, cols: target };

  candidates.sort((a, b) => {
    const aRatio = a.cols / a.rows;
    const bRatio = b.cols / b.rows;
    const aScore = Math.abs(Math.log(aRatio / ratio));
    const bScore = Math.abs(Math.log(bRatio / ratio));
    return aScore - bScore;
  });

  return candidates[0];
}

export function generateEdges(rows, cols, seed) {
  const rand = mulberry32(seed);
  const edgesV = Array.from({ length: rows }, () => Array.from({ length: cols - 1 }, () => (rand() > 0.5 ? 1 : -1)));
  const edgesH = Array.from({ length: rows - 1 }, () => Array.from({ length: cols }, () => (rand() > 0.5 ? 1 : -1)));
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
  ctx.bezierCurveTo(a.x + nx * amp * 0.7, a.y + ny * amp * 0.7, knobX - ux * len * 0.18, knobY - uy * len * 0.18, knobX, knobY);
  ctx.bezierCurveTo(knobX + ux * len * 0.18, knobY + uy * len * 0.18, b.x + nx * amp * 0.7, b.y + ny * amp * 0.7, b.x, b.y);
  ctx.lineTo(x1, y1);
}

export function tracePiecePath(ctx, w, h, pad, edges) {
  ctx.beginPath();
  ctx.moveTo(pad, pad);
  drawEdge(ctx, pad, pad, pad + w, pad, edges.top);
  drawEdge(ctx, pad + w, pad, pad + w, pad + h, edges.right);
  drawEdge(ctx, pad + w, pad + h, pad, pad + h, edges.bottom);
  drawEdge(ctx, pad, pad + h, pad, pad, edges.left);
  ctx.closePath();
}

export function scatterPosition(r, c, rows, cols, pieceW, pieceH, trayTop, trayWidth, rand) {
  const cellW = trayWidth / cols;
  const col = Math.floor(rand() * cols);
  const row = Math.floor((r * cols + c) / cols);
  const jitterX = (rand() - 0.5) * (cellW - pieceW) * 0.8;
  const jitterY = (rand() - 0.5) * (pieceH * 0.5);
  return { x: col * cellW + (cellW - pieceW) / 2 + jitterX, y: trayTop + row * pieceH * 1.15 + jitterY };
}

export function createShuffledOrder(count, seed) {
  const order = Array.from({ length: count }, (_, i) => i);
  const rand = mulberry32(seed ^ 0x9e3779b9);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
}

export function makeRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}
