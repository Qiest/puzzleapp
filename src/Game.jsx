import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  ref,
  onValue,
  onChildAdded,
  onChildChanged,
  update,
  get,
  set,
  off,
  onDisconnect,
} from "firebase/database";
import { db } from "./firebase.js";
import {
  generateEdges,
  pieceEdges,
  tracePiecePath,
} from "./puzzleUtils.js";

const PAD = 12;
const COLORS = ["#ff6f9c", "#7c83fd"];
const GHOST_OPACITY = 0.08;
const FIREBASE_MOVE_INTERVAL = 100;

export default function Game({
  roomCode,
  playerId,
  playerName,
  pendingJoin,
  onLeave,
}) {
  const [needsName, setNeedsName] = useState(
    pendingJoin && !playerName
  );
  const [nameInput, setNameInput] = useState("");
  const [room, setRoom] = useState(null);
  const [players, setPlayers] = useState({});
  const [progress, setProgress] = useState({
    mine: 0,
    partner: 0,
    total: 0,
  });
  const [toast, setToast] = useState("");
  const [full, setFull] = useState(false);
  const [copied, setCopied] = useState(false);

  const canvasRef = useRef(null);
  const piecesRef = useRef({});
  const pieceCanvasesRef = useRef({});
  const zOrderRef = useRef({});
  const zCounterRef = useRef(1);

  const draggingRef = useRef(null);
  const lastFirebaseWriteRef = useRef(0);
  const initializedRef = useRef(false);

  const dirtyRef = useRef(true);
  const highlightRef = useRef({
    key: null,
    until: 0,
  });

  const myColorRef = useRef(COLORS[0]);

  const updateProgress = useCallback(() => {
    const all = Object.values(piecesRef.current);
    const total = all.length;

    if (!total) return;

    const mine = all.filter(
      (p) => p.placed && p.placedBy === playerId
    ).length;

    const partner = all.filter(
      (p) =>
        p.placed &&
        p.placedBy &&
        p.placedBy !== playerId
    ).length;

    setProgress({
      mine,
      partner,
      total,
    });
  }, [playerId]);

  // Oyuncuyu odaya bağla
  useEffect(() => {
    if (needsName) return;

    let cancelled = false;

    (async () => {
      try {
        const playersRef = ref(
          db,
          `rooms/${roomCode}/players`
        );

        const playersSnap = await get(playersRef);
        const existing = playersSnap.val() || {};

        // Sadece aktif oyuncuları say.
        const activeOthers = Object.entries(existing).filter(
          ([id, p]) =>
            id !== playerId &&
            p?.connected === true
        );

        // Zaten iki aktif oyuncu varsa odayı doldur.
        if (!existing[playerId] && activeOthers.length >= 1) {
          if (!cancelled) {
            setFull(true);
          }
          return;
        }

        const usedColors = activeOthers.map(
          ([, p]) => p?.color
        );

        const myColor =
          existing[playerId]?.color ||
          COLORS.find(
            (c) => !usedColors.includes(c)
          ) ||
          COLORS[0];

        myColorRef.current = myColor;

        const playerRef = ref(
          db,
          `rooms/${roomCode}/players/${playerId}`
        );

        // Sayfa kapanırsa Firebase oyuncuyu otomatik silsin.
        await onDisconnect(playerRef).remove();

        await set(playerRef, {
          name:
            (playerName ||
              nameInput ||
              "Sen").trim() || "Sen",
          color: myColor,
          connected: true,
          joinedAt:
            existing[playerId]?.joinedAt ||
            Date.now(),
        });
      } catch (error) {
        console.error(
          "Oyuncu kaydı hatası:",
          error
        );
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [
    needsName,
    roomCode,
    playerId,
    playerName,
    nameInput,
  ]);

  // Odayı yükle
  useEffect(() => {
    if (needsName) return;

    (async () => {
      try {
        const snap = await get(
          ref(db, `rooms/${roomCode}`)
        );

        if (!snap.exists()) {
          setFull(true);
          return;
        }

        setRoom(snap.val());
      } catch (error) {
        console.error(
          "Oda yükleme hatası:",
          error
        );
      }
    })();
  }, [needsName, roomCode]);

  // Oyuncuları dinle
  useEffect(() => {
    if (needsName) return;

    const playersRef = ref(
      db,
      `rooms/${roomCode}/players`
    );

    const cb = onValue(playersRef, (snap) => {
      setPlayers(snap.val() || {});
    });

    return () => {
      off(playersRef, "value", cb);
    };
  }, [needsName, roomCode]);

  // Puzzle parçalarını oluştur
  useEffect(() => {
    if (!room) return;

    const {
      rows,
      cols,
      boardW,
      boardH,
      seed,
      image,
    } = room;

    const pieceW = boardW / cols;
    const pieceH = boardH / rows;

    const { edgesV, edgesH } = generateEdges(
      rows,
      cols,
      seed
    );

    const img = new Image();

    img.onload = () => {
      const padded = document.createElement(
        "canvas"
      );

      padded.width = boardW + PAD * 2;
      padded.height = boardH + PAD * 2;

      const pctx = padded.getContext("2d");

      pctx.drawImage(
        img,
        PAD,
        PAD,
        boardW,
        boardH
      );

      const ghost = document.createElement(
        "canvas"
      );

      ghost.width = boardW;
      ghost.height = boardH;

      ghost
        .getContext("2d")
        .drawImage(img, 0, 0, boardW, boardH);

      pieceCanvasesRef.current.__ghost =
        ghost;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const key = `${r}_${c}`;

          const edges = pieceEdges(
            r,
            c,
            rows,
            cols,
            edgesV,
            edgesH
          );

          const pc =
            document.createElement("canvas");

          pc.width = pieceW + PAD * 2;
          pc.height = pieceH + PAD * 2;

          const ctx = pc.getContext("2d");

          tracePiecePath(
            ctx,
            pieceW,
            pieceH,
            PAD,
            edges
          );

          ctx.save();
          ctx.clip();

          ctx.drawImage(
            padded,
            c * pieceW,
            r * pieceH,
            pieceW + PAD * 2,
            pieceH + PAD * 2,
            0,
            0,
            pieceW + PAD * 2,
            pieceH + PAD * 2
          );

          ctx.restore();

          tracePiecePath(
            ctx,
            pieceW,
            pieceH,
            PAD,
            edges
          );

          ctx.lineWidth = 1.15;
          ctx.strokeStyle =
            "rgba(60,40,50,0.32)";

          ctx.stroke();

          pieceCanvasesRef.current[key] =
            pc;

          zOrderRef.current[key] = 0;
        }
      }

      dirtyRef.current = true;
    };

    img.src = image;
  }, [room]);

  // Parça hareketlerini gerçek zamanlı dinle
  useEffect(() => {
    if (!room) return;

    const piecesRef2 = ref(
      db,
      `rooms/${roomCode}/pieces`
    );

    const handlePiece = (key, p) => {
      if (!p) return;

      if (
        draggingRef.current &&
        draggingRef.current.key === key
      ) {
        return;
      }

      const previous =
        piecesRef.current[key];

      piecesRef.current[key] = p;

      if (
        initializedRef.current &&
        p.movedBy &&
        p.movedBy !== playerId &&
        p.movedAt &&
        (!previous?.movedAt ||
          p.movedAt > previous.movedAt)
      ) {
        highlightRef.current = {
          key,
          until: Date.now() + 900,
        };

        const moverName =
          players[p.movedBy]?.name ||
          "Sevgilin";

        setToast(
          `${moverName} bir parça oynattı`
        );

        clearTimeout(
          window.__toastTimer
        );

        window.__toastTimer =
          window.setTimeout(() => {
            setToast("");
          }, 1300);
      }

      dirtyRef.current = true;
    };

    const addedCb = onChildAdded(
      piecesRef2,
      (snap) => {
        handlePiece(
          snap.key,
          snap.val()
        );

        if (
          Object.keys(
            piecesRef.current
          ).length >=
          room.rows * room.cols
        ) {
          initializedRef.current = true;
          updateProgress();
        }
      }
    );

    const changedCb = onChildChanged(
      piecesRef2,
      (snap) => {
        handlePiece(
          snap.key,
          snap.val()
        );

        updateProgress();
      }
    );

    return () => {
      off(
        piecesRef2,
        "child_added",
        addedCb
      );

      off(
        piecesRef2,
        "child_changed",
        changedCb
      );
    };
  }, [
    room,
    roomCode,
    playerId,
    players,
    updateProgress,
  ]);

  // Canvas çizimi
  useEffect(() => {
    let raf;

    function draw() {
      raf = requestAnimationFrame(draw);

      if (!dirtyRef.current || !room) {
        return;
      }

      dirtyRef.current = false;

      const canvas = canvasRef.current;

      if (!canvas) return;

      const ctx = canvas.getContext("2d");

      const {
        boardW,
        boardH,
        rows,
        cols,
      } = room;

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      ctx.fillStyle = "#fff5f7";

      roundRect(
        ctx,
        0,
        0,
        boardW,
        boardH,
        18
      );

      ctx.fill();

      // Çok silik hedef görüntüsü
      const ghost =
        pieceCanvasesRef.current.__ghost;

      if (ghost) {
        ctx.save();

        ctx.globalAlpha =
          GHOST_OPACITY;

        roundRect(
          ctx,
          0,
          0,
          boardW,
          boardH,
          18
        );

        ctx.clip();

        ctx.drawImage(
          ghost,
          0,
          0
        );

        ctx.restore();
      }

      ctx.strokeStyle =
        "rgba(255,111,156,0.28)";

      ctx.lineWidth = 2;

      roundRect(
        ctx,
        1,
        1,
        boardW - 2,
        boardH - 2,
        18
      );

      ctx.stroke();

      const trayTop =
        boardH + 60;

      ctx.fillStyle = "#faf3f6";

      roundRect(
        ctx,
        0,
        trayTop,
        boardW,
        canvas.height -
          trayTop -
          10,
        18
      );

      ctx.fill();

      const pieceW =
        boardW / cols;

      const pieceH =
        boardH / rows;

      const keys =
        Object.keys(
          pieceCanvasesRef.current
        ).filter(
          (k) => k !== "__ghost"
        );

      keys.sort(
        (a, b) =>
          (zOrderRef.current[a] ||
            0) -
          (zOrderRef.current[b] ||
            0)
      );

      for (const key of keys) {
        const p =
          piecesRef.current[key];

        if (!p) continue;

        const bmp =
          pieceCanvasesRef.current[key];

        if (!bmp) continue;

        ctx.save();

        if (p.placed) {
          ctx.shadowColor =
            "rgba(120,90,100,0.20)";
          ctx.shadowBlur = 2;
        } else {
          ctx.shadowColor =
            "rgba(0,0,0,0.20)";
          ctx.shadowBlur = 4;
          ctx.shadowOffsetY = 1;
        }

        ctx.drawImage(
          bmp,
          p.x - PAD,
          p.y - PAD
        );

        ctx.restore();

        if (
          p.placed &&
          p.placedBy
        ) {
          const color =
            players[p.placedBy]
              ?.color ||
            "#ff6f9c";

          ctx.save();

          ctx.globalAlpha = 0.45;
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;

          ctx.strokeRect(
            p.x,
            p.y,
            pieceW,
            pieceH
          );

          ctx.restore();
        }

        if (
          highlightRef.current
            .key === key &&
          Date.now() <
            highlightRef.current
              .until
        ) {
          ctx.save();

          ctx.strokeStyle =
            "#ffd166";

          ctx.lineWidth = 3;
          ctx.globalAlpha = 0.85;

          ctx.strokeRect(
            p.x - PAD * 0.6,
            p.y - PAD * 0.6,
            pieceW +
              PAD * 1.2,
            pieceH +
              PAD * 1.2
          );

          ctx.restore();

          dirtyRef.current = true;
        }
      }
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [room, players]);

  function handlePointerDown(e) {
    const canvas =
      canvasRef.current;

    if (!canvas || !room) return;

    const rect =
      canvas.getBoundingClientRect();

    const scaleX =
      canvas.width /
      rect.width;

    const scaleY =
      canvas.height /
      rect.height;

    const px =
      (e.clientX -
        rect.left) *
      scaleX;

    const py =
      (e.clientY -
        rect.top) *
      scaleY;

    const {
      cols,
      boardW,
      boardH,
    } = room;

    const pieceW =
      boardW / cols;

    const pieceH =
      boardH /
      room.rows;

    const keys =
      Object.keys(
        piecesRef.current
      ).sort(
        (a, b) =>
          (zOrderRef.current[b] ||
            0) -
          (zOrderRef.current[a] ||
            0)
      );

    for (const key of keys) {
      const p =
        piecesRef.current[key];

      if (!p || p.placed) {
        continue;
      }

      if (
        px >= p.x - PAD &&
        px <=
          p.x +
            pieceW +
            PAD &&
        py >= p.y - PAD &&
        py <=
          p.y +
            pieceH +
            PAD
      ) {
        draggingRef.current = {
          key,
          offsetX:
            px - p.x,
          offsetY:
            py - p.y,
        };

        zCounterRef.current += 1;

        zOrderRef.current[key] =
          zCounterRef.current;

        canvas.setPointerCapture(
          e.pointerId
        );

        break;
      }
    }
  }

  function handlePointerMove(e) {
    const d =
      draggingRef.current;

    if (!d || !room) return;

    const canvas =
      canvasRef.current;

    const rect =
      canvas.getBoundingClientRect();

    const scaleX =
      canvas.width /
      rect.width;

    const scaleY =
      canvas.height /
      rect.height;

    const px =
      (e.clientX -
        rect.left) *
      scaleX;

    const py =
      (e.clientY -
        rect.top) *
      scaleY;

    const p =
      piecesRef.current[d.key];

    if (!p) return;

    p.x =
      px - d.offsetX;

    p.y =
      py - d.offsetY;

    dirtyRef.current = true;

    const now = Date.now();

    if (
      now -
        lastFirebaseWriteRef.current >=
      FIREBASE_MOVE_INTERVAL
    ) {
      lastFirebaseWriteRef.current =
        now;

      update(
        ref(
          db,
          `rooms/${roomCode}/pieces/${d.key}`
        ),
        {
          x: Math.round(p.x),
          y: Math.round(p.y),
          movedBy: playerId,
          movedAt: now,
        }
      ).catch((error) => {
        console.error(
          "Parça senkronizasyon hatası:",
          error
        );
      });
    }
  }

  function handlePointerUp() {
    const d =
      draggingRef.current;

    if (!d || !room) return;

    draggingRef.current = null;

    const {
      cols,
      boardW,
      boardH,
      rows,
    } = room;

    const pieceW =
      boardW / cols;

    const pieceH =
      boardH / rows;

    const [r, c] =
      d.key
        .split("_")
        .map(Number);

    const correctX =
      c * pieceW;

    const correctY =
      r * pieceH;

    const p =
      piecesRef.current[d.key];

    if (!p) return;

    const threshold =
      Math.min(
        pieceW,
        pieceH
      ) * 0.4;

    const dx =
      Math.abs(
        p.x - correctX
      );

    const dy =
      Math.abs(
        p.y - correctY
      );

    let placed = false;

    if (
      dx < threshold &&
      dy < threshold
    ) {
      p.x = correctX;
      p.y = correctY;
      placed = true;
    }

    const now = Date.now();

    p.placed = placed;

    p.placedBy = placed
      ? playerId
      : null;

    p.movedBy = playerId;
    p.movedAt = now;

    dirtyRef.current = true;

    updateProgress();

    update(
      ref(
        db,
        `rooms/${roomCode}/pieces/${d.key}`
      ),
      {
        x: Math.round(p.x),
        y: Math.round(p.y),
        placed,
        placedBy: p.placedBy,
        movedBy: playerId,
        movedAt: now,
      }
    ).catch((error) => {
      console.error(
        "Parça bırakma hatası:",
        error
      );
    });
  }

  function roundRect(
    ctx,
    x,
    y,
    w,
    h,
    r
  ) {
    ctx.beginPath();

    ctx.moveTo(
      x + r,
      y
    );

    ctx.arcTo(
      x + w,
      y,
      x + w,
      y + h,
      r
    );

    ctx.arcTo(
      x + w,
      y + h,
      x,
      y + h,
      r
    );

    ctx.arcTo(
      x,
      y + h,
      x,
      y,
      r
    );

    ctx.arcTo(
      x,
      y,
      x + w,
      y,
      r
    );

    ctx.closePath();
  }

  function copyInviteLink() {
    const url =
      `${window.location.origin}` +
      `${window.location.pathname}` +
      `?room=${roomCode}`;

    navigator.clipboard
      ?.writeText(url);

    setCopied(true);

    setTimeout(
      () => setCopied(false),
      1500
    );
  }

  if (needsName) {
    return (
      <div className="home">
        <div className="home-card">
          <h1>
            Odaya katıl 💌
          </h1>

          <p className="subtitle">
            Oda kodu: {roomCode}
          </p>

          <div className="form">
            <label className="field">
              <span>
                Adın (opsiyonel)
              </span>

              <input
                value={nameInput}
                onChange={(e) =>
                  setNameInput(
                    e.target.value
                  )
                }
                placeholder="Sevgilin"
              />
            </label>

            <button
              className="btn primary"
              onClick={() =>
                setNeedsName(false)
              }
            >
              Katıl
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (full) {
    return (
      <div className="home">
        <div className="home-card">
          <h1>
            Bu oda dolu 🙈
          </h1>

          <p className="subtitle">
            Bu puzzle odasında
            zaten iki oyuncu var.
          </p>

          <button
            className="btn primary"
            onClick={onLeave}
          >
            Geri dön
          </button>
        </div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="home">
        <div className="home-card">
          <p className="subtitle">
            Yükleniyor...
          </p>
        </div>
      </div>
    );
  }

  const canvasWidth =
    room.boardW;

  const trayTop =
    room.boardH + 60;

  const pieceH =
    room.boardH /
    room.rows;

  const canvasHeight =
    trayTop +
    room.rows *
      pieceH *
      1.15 +
    pieceH * 2;

  const total =
    progress.total ||
    room.rows *
      room.cols;

  const minePct = total
    ? Math.round(
        (progress.mine /
          total) *
          100
      )
    : 0;

  const partnerPct = total
    ? Math.round(
        (progress.partner /
          total) *
          100
      )
    : 0;

  const me =
    players[playerId];

  const partnerEntry =
    Object.entries(players).find(
      ([id]) =>
        id !== playerId
    );

  const partnerName =
    partnerEntry
      ? partnerEntry[1].name
      : "Sevgilin (henüz katılmadı)";

  return (
    <div className="game">
      <div className="game-header">
        <div className="header-left">
          <span className="room-badge">
            Oda: {roomCode}
          </span>

          <button
            className="btn tiny"
            onClick={
              copyInviteLink
            }
          >
            {copied
              ? "Kopyalandı ✓"
              : "Davet linkini kopyala"}
          </button>
        </div>

        <button
          className="btn tiny ghost"
          onClick={onLeave}
        >
          Odadan çık
        </button>
      </div>

      <div className="progress-area">
        <div className="progress-row">
          <span
            className="dot"
            style={{
              background:
                me?.color ||
                COLORS[0],
            }}
          />

          <span className="progress-label">
            {me?.name || "Sen"}
          </span>

          <div className="bar">
            <div
              className="bar-fill"
              style={{
                width: `${minePct}%`,
                background:
                  me?.color ||
                  COLORS[0],
              }}
            />
          </div>

          <span className="pct">
            {minePct}%
          </span>
        </div>

        <div className="progress-row">
          <span
            className="dot"
            style={{
              background:
                partnerEntry?.[1]
                  ?.color ||
                COLORS[1],
            }}
          />

          <span className="progress-label">
            {partnerName}
          </span>

          <div className="bar">
            <div
              className="bar-fill"
              style={{
                width: `${partnerPct}%`,
                background:
                  partnerEntry?.[1]
                    ?.color ||
                  COLORS[1],
              }}
            />
          </div>

          <span className="pct">
            {partnerPct}%
          </span>
        </div>
      </div>

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}

      <div className="canvas-wrap">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{
            width: "100%",
            maxWidth:
              canvasWidth,
            touchAction: "none",
          }}
          onPointerDown={
            handlePointerDown
          }
          onPointerMove={
            handlePointerMove
          }
          onPointerUp={
            handlePointerUp
          }
          onPointerCancel={
            handlePointerUp
          }
        />
      </div>

      <p className="hint">
        Parçaları alttaki tepsiden
        tahtaya sürükle. Doğru yere yakın
        bırakınca kilitlenir 💞
      </p>
    </div>
  );
}