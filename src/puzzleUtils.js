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

/*
  IMPORTANT:
  Every shared edge is generated from exactly
  the same mathematical curve.

  The neighbouring piece receives the opposite
  bump, so the two edges are exact complements.
*/

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

  const length = Math.hypot(dx, dy);

  if (length === 0) {
    ctx.lineTo(x1, y1);
    return;
  }

  const ux = dx / length;
  const uy = dy / length;

  const nx = -uy;
  const ny = ux;

  /*
    The tab width and height are based only
    on the edge length.

    Because both neighbouring pieces use
    the exact same formula, the shapes match.
  */
  const tabWidth = length * 0.42;
  const tabHeight = Math.min(
    length * 0.20,
    18
  );

  const start =
    length * 0.29;

  const end =
    start + tabWidth;

  const p = (distance) => ({
    x:
      x0 +
      ux * distance,

    y:
      y0 +
      uy * distance,
  });

  const a = p(start);
  const b = p(end);

  const center =
    (start + end) / 2;

  const c = p(center);

  const tipX =
    c.x +
    nx *
      tabHeight *
      bump;

  const tipY =
    c.y +
    ny *
      tabHeight *
      bump;

  ctx.lineTo(
    a.x,
    a.y
  );

  /*
    First half of tab.
  */
  ctx.bezierCurveTo(
    a.x +
      ux *
        tabWidth *
        0.10,
    a.y +
      uy *
        tabWidth *
        0.10,

    a.x +
      ux *
        tabWidth *
        0.20 +
      nx *
        tabHeight *
        bump,

    a.y +
      uy *
        tabWidth *
        0.20 +
      ny *
        tabHeight *
        bump,

    tipX,
    tipY
  );

  /*
    Second half of tab.
  */
  ctx.bezierCurveTo(
    b.x -
      ux *
        tabWidth *
        0.20 +
      nx *
        tabHeight *
        bump,

    b.y -
      uy *
        tabWidth *
        0.20 +
      ny *
        tabHeight *
        bump,

    b.x -
      ux *
        tabWidth *
        0.10,

    b.y -
      uy *
        tabWidth *
        0.10,

    b.x,
    b.y
  );

  ctx.lineTo(
    x1,
    y1
  );
}

export function tracePiecePath(
  ctx,
  w,
  h,
  pad,
  edges
) {
  ctx.beginPath();

  ctx.moveTo(
    pad,
    pad
  );

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
    Math.floor(
      index / trayCols
    );

  const trayCol =
    index % trayCols;

  const cellW =
    trayWidth /
    trayCols;

  const gap =
    Math.max(
      0,
      cellW -
        pieceW
    );

  const jitterX =
    (rand() - 0.5) *
    gap *
    0.55;

  const jitterY =
    (rand() - 0.5) *
    pieceH *
    0.18;

  return {
    x:
      trayCol *
        cellW +
      (cellW -
        pieceW) /
        2 +
      jitterX,

    y:
      trayTop +
      trayRow *
        pieceH *
        1.22 +
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
          Math.random() *
            chars.length
        )
      ];
  }

  return code;
}