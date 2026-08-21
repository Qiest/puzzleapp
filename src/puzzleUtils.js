export function mulberry32(seed) {
  let a = seed;

  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;

    let t = Math.imul(
      a ^ (a >>> 15),
      1 | a
    );

    t =
      (t +
        Math.imul(
          t ^ (t >>> 7),
          61 | t
        )) ^
      t;

    return (
      ((t ^ (t >>> 14)) >>> 0) /
      4294967296
    );
  };
}

export function hashStringToSeed(str) {
  let h = 0;

  for (let i = 0; i < str.length; i++) {
    h =
      (Math.imul(31, h) +
        str.charCodeAt(i)) |
      0;
  }

  return h >>> 0;
}

// 100 parçalık puzzle
export function computeGrid(
  imgW,
  imgH,
  targetCount = 100
) {
  return {
    cols: 10,
    rows: 10,
  };
}

export function generateEdges(
  rows,
  cols,
  seed
) {
  const rand = mulberry32(seed);

  const edgesV = Array.from(
    { length: rows },
    () =>
      Array.from(
        { length: cols - 1 },
        () => (rand() > 0.5 ? 1 : -1)
      )
  );

  const edgesH = Array.from(
    { length: rows - 1 },
    () =>
      Array.from(
        { length: cols },
        () => (rand() > 0.5 ? 1 : -1)
      )
  );

  return {
    edgesV,
    edgesH,
  };
}

export function pieceEdges(
  r,
  c,
  rows,
  cols,
  edgesV,
  edgesH
) {
  return {
    top:
      r === 0
        ? 0
        : -edgesH[r - 1][c],

    bottom:
      r === rows - 1
        ? 0
        : edgesH[r][c],

    left:
      c === 0
        ? 0
        : -edgesV[r][c - 1],

    right:
      c === cols - 1
        ? 0
        : edgesV[r][c],
  };
}

// Daha düzgün ve birbirine daha iyi oturan puzzle kenarı
function drawEdge(
  ctx,
  x0,
  y0,
  x1,
  y1,
  bump
) {
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

  // Öncekinden biraz daha küçük ve kontrollü çıkıntı
  const amp = len * 0.18 * bump;

  const pt = (t) => ({
    x: x0 + ux * len * t,
    y: y0 + uy * len * t,
  });

  const a = pt(0.32);
  const b = pt(0.68);
  const mid = pt(0.5);

  const knobX = mid.x + nx * amp;
  const knobY = mid.y + ny * amp;

  ctx.lineTo(a.x, a.y);

  ctx.bezierCurveTo(
    a.x + nx * amp * 0.75,
    a.y + ny * amp * 0.75,
    knobX - ux * len * 0.16,
    knobY - uy * len * 0.16,
    knobX,
    knobY
  );

  ctx.bezierCurveTo(
    knobX + ux * len * 0.16,
    knobY + uy * len * 0.16,
    b.x + nx * amp * 0.75,
    b.y + ny * amp * 0.75,
    b.x,
    b.y
  );

  ctx.lineTo(x1, y1);
}

export function tracePiecePath(
  ctx,
  w,
  h,
  pad,
  edges
) {
  ctx.beginPath();

  ctx.moveTo(pad, pad);

  drawEdge(
    ctx,
    pad,
    pad,
    pad + w,
    pad,
    edges.top
  );

  drawEdge(
    ctx,
    pad + w,
    pad,
    pad + w,
    pad + h,
    edges.right
  );

  drawEdge(
    ctx,
    pad + w,
    pad + h,
    pad,
    pad + h,
    edges.bottom
  );

  drawEdge(
    ctx,
    pad,
    pad + h,
    pad,
    pad,
    edges.left
  );

  ctx.closePath();
}

// 100 parçayı daha ferah dağıt
export function scatterPosition(
  r,
  c,
  rows,
  cols,
  pieceW,
  pieceH,
  trayTop,
  trayWidth,
  rand
) {
  const trayCols = 5;

  const index =
    r * cols + c;

  const trayRow =
    Math.floor(index / trayCols);

  const trayCol =
    index % trayCols;

  const cellW =
    trayWidth / trayCols;

  const jitterX =
    (rand() - 0.5) *
    Math.max(
      0,
      (cellW - pieceW) * 0.65
    );

  const jitterY =
    (rand() - 0.5) *
    pieceH *
    0.22;

  return {
    x:
      trayCol * cellW +
      (cellW - pieceW) / 2 +
      jitterX,

    y:
      trayTop +
      trayRow * pieceH * 1.18 +
      jitterY,
  };
}

export function makeRoomCode() {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let code = "";

  for (let i = 0; i < 5; i++) {
    code +=
      chars[
        Math.floor(
          Math.random() * chars.length
        )
      ];
  }

  return code;
}