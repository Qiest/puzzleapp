import { ref, get, set, update, remove, onValue, onDisconnect, onChildAdded, onChildChanged, off } from "firebase/database";
import { db } from "./firebase.js";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import {
  generateEdges,
  pieceEdges,
  tracePiecePath,
  computeGrid,
} from "./puzzleUtils.js";

// NOT: puzzleUtils.js içindeki tabHeight en fazla 18px'e kadar çıkabiliyor
// (Math.min(length * 0.20, 18)). PAD bundan küçük olursa çıkıntılar canvas
// kenarında kırpılıyor ve oyuk/çıkıntı birbirini tam karşılamıyor.
// Bu yüzden PAD, o maksimum değerden büyük olmalı.
const PAD = 30;

const COLORS = ["#ff6f9c", "#7c83fd"];
const GHOST_OPACITY = 0.08;
const FIREBASE_MOVE_INTERVAL = 100;
function totalPiecesForLayout(rows, cols) { return rows * cols; }


export default function Game({
  roomCode,
  playerId,
  playerName,
  isGuest = false,
  pendingJoin,
  onLeave,
  theme = "light",
}) {
  const [needsName, setNeedsName] =
    useState(
      pendingJoin && !playerName
    );

  const [nameInput, setNameInput] =
    useState("");

  const [room, setRoom] =
    useState(null);

  const [players, setPlayers] =
    useState({});

  const [progress, setProgress] =
    useState({
      mine: 0,
      partner: 0,
      total: 0,
    });

  const [toast, setToast] =
    useState("");

  const [full, setFull] =
    useState(false);

  const [copied, setCopied] =
    useState(false);

  const [finished, setFinished] =
    useState(false);

  const [selectedPieceKey, setSelectedPieceKey] = useState(null);
  const [hintsLeft, setHintsLeft] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [showCheatConfirm, setShowCheatConfirm] = useState(false);
  const [reward, setReward] = useState(null);
  const [reaction, setReaction] = useState("");
  const [partnerReaction, setPartnerReaction] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [gameAvatarViewer, setGameAvatarViewer] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatText, setChatText] = useState("");
  const [chatUnread, setChatUnread] = useState(false);

  const startedAtRef = useRef(null);

  const canvasRef =
    useRef(null);

  // Static katman: hareket etmeyen parçalar ve tahta/tepsi arka planı.
  // Dynamic katman: yalnızca o anda hareket eden parçalar + highlight.
  const staticCanvasRef = useRef(null);

  const piecesRef =
    useRef({});

  const pieceCanvasesRef =
    useRef({});

  const zOrderRef =
    useRef({});

  const zCounterRef =
    useRef(1);

  const draggingRef =
    useRef(null);

  const remoteLiveMovesRef = useRef({});

  const lastFirebaseWriteRef =
    useRef(0);

  const initializedRef =
    useRef(false);

  const dirtyRef =
    useRef(true);

  const staticDirtyRef = useRef(true);
  const dynamicDirtyRef = useRef(true);
  const dynamicBoundsRef = useRef([]);

  const highlightRef =
    useRef({
      key: null,
      until: 0,
    });

  const myColorRef =
    useRef(COLORS[0]);
  const rewardSavedRef = useRef(false);
  const cheatedRef = useRef(false);
  const completionDismissedRef = useRef(false);

  const saveCompletionReward = useCallback(async () => {
    if (
      isGuest ||
      rewardSavedRef.current ||
      cheatedRef.current ||
      room?.cheatedBy ||
      !room
    ) return;

    rewardSavedRef.current = true;
    const total = room.totalPieces || room.rows * room.cols;
    const gainedXp =
      (total >= 200 ? 250 : total >= 100 ? 100 : 50) +
      (room.rotatePieces ? 50 : 0);

    try {
      const userRef = ref(db, `users/${playerId}`);
      const snap = await get(userRef);
      const data = snap.val() || {};
      const completed = Number(data.completedPuzzles || 0) + 1;
      const history = Array.isArray(data.history) ? data.history : [];
      history.unshift({
        roomCode,
        pieces: total,
        time: elapsed,
        difficulty: room.difficultyName || "Klasik",
        imageUrl: room.image || "",
        partnerUid: Object.keys(players || {}).find((id) => id !== playerId) || null,
        partnerName: Object.values(players || {}).find((p) => p?.connected)?.name || null,
        completedAt: Date.now(),
      });

      const badges = Array.isArray(data.badges) ? data.badges : [];
      const next = [...badges];
      const add = (id) => {
        if (!next.includes(id)) next.push(id);
      };

      if (completed === 1) add("first");
      if (total >= 100) add("hundred");
      if (total >= 200) add("twohundred");
      if (room.rotatePieces) add("rotator");
      if ((hintsLeft ?? 0) === (room.hintsAllowed ?? 0)) add("perfect");

      const activePlayers = Object.values(players || {}).filter(
        (p) => p?.connected === true
      );
      if (activePlayers.length >= 2) add("team");

      const totalXp = Number(data.xp || 0) + gainedXp;
      await update(userRef, {
        name: data.name || playerName || "Oyuncu",
        xp: totalXp,
        completedPuzzles: completed,
        togetherPuzzles:
          Number(data.togetherPuzzles || 0) +
          (activePlayers.length >= 2 ? 1 : 0),
        totalTime: Number(data.totalTime || 0) + elapsed,
        bestTime: Math.min(
          Number(data.bestTime || Infinity),
          elapsed
        ),
        badges: next,
        history: history.slice(0, 20),
      });

      setReward({
        gainedXp,
        level: Math.floor(totalXp / 500) + 1,
        newBadges: next.filter((id) => !badges.includes(id)),
      });
    } catch (error) {
      console.error("Ödül kaydı hatası:", error);
      rewardSavedRef.current = false;
      setReward(null);
    }
  }, [room, playerId, playerName, roomCode, elapsed, hintsLeft, players, isGuest]);

  const updateProgress =
    useCallback(() => {
      const all =
        Object.values(
          piecesRef.current
        );

      const total =
        all.length;

      if (!total) return;

      const mine =
        all.filter(
          (p) =>
            p.placed &&
            p.placedBy ===
              playerId
        ).length;

      const partner =
        all.filter(
          (p) =>
            p.placed &&
            p.placedBy &&
            p.placedBy !== playerId
        ).length;

      setProgress((current) => ({
        ...current,
        mine,
        partner,
        total,
      }));

      const placedTotal = all.filter((p) => p.placed).length;
      const solvedByCheat =
        Boolean(room?.cheatedBy) ||
        all.some((p) => p?.movedBy === "cheat");

      if (total > 0 && placedTotal === total) {
        if (!completionDismissedRef.current) {
          setFinished(true);
        }
        if (!solvedByCheat) {
          saveCompletionReward();
        } else {
          setReward(null);
        }
      }
    }, [playerId, saveCompletionReward]);

  useEffect(() => {
    if (needsName) return;

    let cancelled = false;

    (async () => {
      try {
        const playersRef =
          ref(
            db,
            `rooms/${roomCode}/players`
          );

        const snap =
          await get(playersRef);

        const existing =
          snap.val() || {};

        const activePlayers =
          Object.values(
            existing
          ).filter(
            (p) =>
              p?.connected === true
          );

        if (
          !existing[playerId] &&
          activePlayers.length >= 2
        ) {
          if (!cancelled) {
            setFull(true);
          }

          return;
        }

        const activeOthers =
          Object.entries(
            existing
          ).filter(
            ([id, p]) =>
              id !== playerId &&
              p?.connected === true
          );

        const usedColors =
          activeOthers.map(
            ([, p]) =>
              p?.color
          );

        const myColor =
          existing[playerId]
            ?.color ||
          COLORS.find(
            (c) =>
              !usedColors.includes(c)
          ) ||
          COLORS[0];

        myColorRef.current =
          myColor;

        const playerRef =
          ref(
            db,
            `rooms/${roomCode}/players/${playerId}`
          );

        // Önce oyuncuyu kaydet; onDisconnect kayıt işlemini engellemesin.
        await set(
          playerRef,
          {
            name:
              (
                playerName ||
                nameInput ||
                "Sen"
              ).trim() ||
              "Sen",

            color:
              myColor,

            connected:
              true,

            joinedAt:
              existing[playerId]
                ?.joinedAt ||
              Date.now(),
          }
        );

        await onDisconnect(playerRef).remove();
        await onDisconnect(ref(db, `rooms/${roomCode}/liveMoves/${playerId}`)).remove();
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

  useEffect(() => {
    if (needsName) return;

    (async () => {
      try {
        const snap =
          await get(
            ref(
              db,
              `rooms/${roomCode}`
            )
          );

        if (!snap.exists()) {
          setFull(true);
          return;
        }

        setRoom(
          snap.val()
        );
      } catch (error) {
        console.error(
          "Oda yükleme hatası:",
          error
        );
      }
    })();
  }, [
    needsName,
    roomCode,
  ]);

  useEffect(() => {
    if (needsName) return;

    const playersRef =
      ref(
        db,
        `rooms/${roomCode}/players`
      );

    const cb =
      onValue(
        playersRef,
        (snap) => {
          setPlayers(
            snap.val() || {}
          );
        }
      );

    return () => {
      cb?.();
    };
  }, [
    needsName,
    roomCode,
  ]);

  useEffect(() => {
    if (needsName || !Object.keys(players || {}).length) return;
    let cancelled = false;
    (async () => {
      const entries = await Promise.all(Object.entries(players).map(async ([id, player]) => {
        if (player?.avatar) return [id, player];
        try {
          const snap = await get(ref(db, `publicProfiles/${id}`));
          const data = snap.val() || {};
          return [id, { ...player, avatar: typeof data.avatar === "string" ? data.avatar : "" }];
        } catch {
          return [id, player];
        }
      }));
      if (cancelled) return;
      const hydrated = Object.fromEntries(entries);
      setPlayers(current => {
        let changed = false;
        const next = { ...current };
        Object.entries(hydrated).forEach(([id, player]) => {
          if (player?.avatar && player.avatar !== current[id]?.avatar) {
            next[id] = { ...current[id], avatar: player.avatar };
            changed = true;
          }
        });
        return changed ? next : current;
      });
    })();
    return () => { cancelled = true; };
  }, [needsName, players]);

  useEffect(() => {
    if (needsName) return;

    const cheatedRefDb = ref(db, `rooms/${roomCode}/cheatedBy`);
    const unsubscribe = onValue(cheatedRefDb, (snap) => {
      const cheatedBy = snap.val() || null;
      if (!cheatedBy) return;
      cheatedRef.current = true;
      setRoom((current) =>
        current ? { ...current, cheatedBy } : current
      );
      setReward(null);
    });

    return () => unsubscribe?.();
  }, [needsName, roomCode]);

  useEffect(() => {
    if (!room || !roomCode) return;

    const chatRef = ref(db, `rooms/${roomCode}/chat`);
    const unsubscribe = onValue(chatRef, (snap) => {
      const data = snap.val() || {};
      const messages = Object.entries(data)
        .map(([id, value]) => ({ id, ...(value || {}) }))
        .sort((a, b) => Number(a.at || 0) - Number(b.at || 0))
        .slice(-100);
      setChatMessages(messages);

      const readAt = Number(localStorage.getItem(`roomChatRead:${roomCode}:${playerId}`) || 0);
      const lastIncoming = [...messages].reverse().find((m) => m.senderId !== playerId);
      setChatUnread(!chatOpen && !!lastIncoming && Number(lastIncoming.at || 0) > readAt);
    });

    return () => unsubscribe?.();
  }, [room, roomCode, playerId, chatOpen]);

  async function sendRoomMessage() {
    const text = chatText.trim();
    if (!text || !roomCode) return;

    const id = `${playerId}_${Date.now()}`;
    await set(ref(db, `rooms/${roomCode}/chat/${id}`), {
      senderId: playerId,
      name: me?.name || playerName || "Oyuncu",
      text: text.slice(0, 300),
      at: Date.now(),
    });
    setChatText("");
  }

  useEffect(() => {
    if (!room) return;
    let cancelled = false;
    setHintsLeft(Number.isFinite(Number(room.hintsAllowed)) ? Number(room.hintsAllowed) : 3);
    setShowPreview(false);
    if (!startedAtRef.current) startedAtRef.current = Date.now();

    const {
      rows,
      cols,
      boardW,
      boardH,
      seed,
      image,
    } = room;

    const pieceW =
      boardW / cols;

    const pieceH =
      boardH / rows;

    const generatedEdges = generateEdges(rows, cols, seed);
    const edgesV = room.edges?.edgesV || generatedEdges.edgesV;
    const edgesH = room.edges?.edgesH || generatedEdges.edgesH;

    const img =
      new Image();

    img.onload = () => {
      const padded =
        document.createElement(
          "canvas"
        );

      padded.width =
        boardW + PAD * 2;

      padded.height =
        boardH + PAD * 2;

      const pctx =
        padded.getContext(
          "2d"
        );

      pctx.drawImage(
        img,
        PAD,
        PAD,
        boardW,
        boardH
      );

      const ghost =
        document.createElement(
          "canvas"
        );

      ghost.width =
        boardW;

      ghost.height =
        boardH;

      ghost
        .getContext("2d")
        .drawImage(
          img,
          0,
          0,
          boardW,
          boardH
        );

      pieceCanvasesRef.current.__ghost =
        ghost;

      for (
        let r = 0;
        r < rows;
        r++
      ) {
        for (
          let c = 0;
          c < cols;
          c++
        ) {
          const key =
            `${r}_${c}`;

          const edges =
            pieceEdges(
              r,
              c,
              rows,
              cols,
              edgesV,
              edgesH
            );

          const pc =
            document.createElement(
              "canvas"
            );

          pc.width =
            pieceW + PAD * 2;

          pc.height =
            pieceH + PAD * 2;

          const ctx =
            pc.getContext(
              "2d"
            );

          tracePiecePath(
            ctx,
            pieceW,
            pieceH,
            PAD,
            edges
          );

          ctx.save();
          ctx.clip();

          // Her parçanın çıkıntıları da fotoğrafla dolsun diye hücrenin
          // çevresindeki görüntüyü PAD kadar geniş kesiyoruz.
          // Böylece parçalar arasında beyaz/şeffaf boşluk görünmez.
          ctx.drawImage(
            img,
            Math.max(0, c * pieceW - PAD),
            Math.max(0, r * pieceH - PAD),
            Math.min(img.width - Math.max(0, c * pieceW - PAD), pieceW + PAD * 2),
            Math.min(img.height - Math.max(0, r * pieceH - PAD), pieceH + PAD * 2),
            c === 0 ? PAD : 0,
            r === 0 ? PAD : 0,
            Math.min(pieceW + PAD * 2, img.width - Math.max(0, c * pieceW - PAD)),
            Math.min(pieceH + PAD * 2, img.height - Math.max(0, r * pieceH - PAD))
          );

          ctx.restore();

          tracePiecePath(
            ctx,
            pieceW,
            pieceH,
            PAD,
            edges
          );

          ctx.lineWidth = 2.2;
          ctx.strokeStyle =
            "rgba(60,40,50,0.32)";

          ctx.stroke();

          pieceCanvasesRef.current[
            key
          ] = pc;

          zOrderRef.current[
            key
          ] = 0;
        }
      }

      dirtyRef.current = true;
      staticDirtyRef.current = true;
      dynamicDirtyRef.current = true;
    };

    img.src = image;
  }, [room]);

  useEffect(() => {
    if (!room) return;

    const reactionsRef = ref(db, `rooms/${roomCode}/reactions`);
    const unsubscribe = onValue(reactionsRef, (snap) => {
      const all = snap.val() || {};
      const others = Object.entries(all)
        .filter(([id, value]) => id !== playerId && value?.text)
        .sort((a, b) => Number(b[1]?.at || 0) - Number(a[1]?.at || 0));

      const latest = others[0]?.[1];
      if (!latest) return;

      const age = Date.now() - Number(latest.at || 0);
      if (age > 5000) return;

      setPartnerReaction({
        name: latest.name || "Diğer oyuncu",
        text: latest.text,
        at: latest.at,
      });

      window.clearTimeout(window.__partnerReactionTimer);
      window.__partnerReactionTimer = window.setTimeout(() => {
        setPartnerReaction(null);
      }, Math.max(500, 5000 - age));
    });

    return () => {
      unsubscribe?.();
      window.clearTimeout(window.__partnerReactionTimer);
    };
  }, [room, roomCode, playerId]);

  // İki oyuncu aynı puzzle tahtasını paylaşır. Parça konumu ve
  // yerleştirme durumu odanın ortak /pieces alanından gelir.
  useEffect(() => {
    if (!room) return;

    const sharedPiecesRef = ref(
      db,
      `rooms/${roomCode}/pieces`
    );

    const handleSharedPiece = (key, p) => {
      if (!p) return;

      if (
        draggingRef.current &&
        draggingRef.current.key === key
      ) {
        return;
      }

      const previous = piecesRef.current[key];
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
          until: Date.now() + 700,
        };

        const moverName =
          players[p.movedBy]?.name ||
          "Diğer oyuncu";

        setToast(`${moverName} bir parça oynattı`);

        clearTimeout(window.__toastTimer);
        window.__toastTimer = window.setTimeout(() => {
          setToast("");
        }, 900);
      }

      dirtyRef.current = true;
      staticDirtyRef.current = true;
      dynamicDirtyRef.current = true;
      updateProgress();
    };

    const addedCb = onChildAdded(
      sharedPiecesRef,
      (snap) => {
        handleSharedPiece(snap.key, snap.val());

        if (
          Object.keys(piecesRef.current).length >=
          room.rows * room.cols
        ) {
          initializedRef.current = true;
          updateProgress();
        }
      }
    );

    const changedCb = onChildChanged(
      sharedPiecesRef,
      (snap) => {
        handleSharedPiece(snap.key, snap.val());
      }
    );

    return () => {
      off(sharedPiecesRef, "child_added", addedCb);
      off(sharedPiecesRef, "child_changed", changedCb);
    };
  }, [
    room,
    roomCode,
    playerId,
    players,
    updateProgress,
  ]);

  useEffect(() => {
    if (!room) return;
    const liveRef = ref(db, `rooms/${roomCode}/liveMoves`);
    const unsubscribe = onValue(liveRef, (snap) => {
      const all = snap.val() || {};
      let remoteSetChanged = false;

      Object.entries(all).forEach(([uid, move]) => {
        if (uid === playerId || !move?.key) return;

        const previous = remoteLiveMovesRef.current[uid];
        if (!previous || previous.key !== move.key) {
          remoteSetChanged = true;
        }

        remoteLiveMovesRef.current[uid] = move;
      });

      Object.keys(remoteLiveMovesRef.current).forEach((uid) => {
        if (!all[uid]) {
          delete remoteLiveMovesRef.current[uid];
          remoteSetChanged = true;
        }
      });

      dirtyRef.current = true;
      dynamicDirtyRef.current = true;

      // Sadece remote oyuncu drag'e başladı/bittiğinde static katmanda o
      // parçayı çıkarıp/geri eklememiz gerekiyor. Pozisyon değişimlerinde
      // static canvası tekrar çizmiyoruz.
      if (remoteSetChanged) {
        staticDirtyRef.current = true;
      }
    });
    return () => {
      unsubscribe?.();
      remoteLiveMovesRef.current = {};
    };
  }, [room, roomCode, playerId]);

  useEffect(() => {
    if (!room) return;
    let raf;
    const animateRemote = () => {
      let moved = false;
      Object.values(remoteLiveMovesRef.current).forEach((move) => {
        const p = piecesRef.current[move.key];
        if (!p || p.placed) return;
        const targetX = Number(move.x);
        const targetY = Number(move.y);
        if (!Number.isFinite(targetX) || !Number.isFinite(targetY)) return;
        const dx = targetX - p.x;
        const dy = targetY - p.y;
        if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2) {
          p.x += dx * 0.42;
          p.y += dy * 0.42;
          moved = true;
        } else {
          p.x = targetX; p.y = targetY;
        }
      });
      if (moved) {
        dirtyRef.current = true;
        dynamicDirtyRef.current = true;
      }
      raf = requestAnimationFrame(animateRemote);
    };
    raf = requestAnimationFrame(animateRemote);
    return () => cancelAnimationFrame(raf);
  }, [room]);

  useEffect(() => {
    if (!room || finished) return;
    const timer = setInterval(() => {
      if (startedAtRef.current) setElapsed(Math.floor((Date.now() - startedAtRef.current) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [room, finished]);

  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
    const s = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function rotatePiece(key) {
    if (!room?.rotatePieces || !key) return;
    const p = piecesRef.current[key];
    if (!p || p.placed) return;

    p.rotation = ((Number(p.rotation) || 0) + 90) % 360;
    setSelectedPieceKey(key);
    dirtyRef.current = true;
    staticDirtyRef.current = true;
    dynamicDirtyRef.current = true;

    update(
      ref(db, `rooms/${roomCode}/pieces/${key}`),
      { rotation: p.rotation, movedBy: playerId, movedAt: Date.now() }
    ).catch(() => {});
  }

  function findPieceAtPoint(px, py) {
    if (!room) return null;

    const pieceW = room.boardW / room.cols;
    const pieceH = room.boardH / room.rows;
    const keys = Object.keys(piecesRef.current).sort(
      (a, b) => (zOrderRef.current[b] || 0) - (zOrderRef.current[a] || 0)
    );

    for (const key of keys) {
      const p = piecesRef.current[key];
      if (!p || p.placed) continue;

      const angle = -((Number(p.rotation) || 0) * Math.PI) / 180;
      const cx = p.x + pieceW / 2;
      const cy = p.y + pieceH / 2;
      const dx = px - cx;
      const dy = py - cy;
      const localX = dx * Math.cos(angle) - dy * Math.sin(angle) + pieceW / 2;
      const localY = dx * Math.sin(angle) + dy * Math.cos(angle) + pieceH / 2;

      if (
        localX >= -PAD &&
        localX <= pieceW + PAD &&
        localY >= -PAD &&
        localY <= pieceH + PAD
      ) {
        return key;
      }
    }

    return null;
  }

  function rotateSelectedPiece() {
    rotatePiece(selectedPieceKey);
  }

  function handleDoubleClick(e) {
    if (!room?.rotatePieces) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const px = (e.clientX - rect.left) * scaleX;
    const py = (e.clientY - rect.top) * scaleY;
    const key = findPieceAtPoint(px, py);

    if (key) rotatePiece(key);
  }

  useEffect(() => {
    let raf;

    const getDynamicKeys = () => {
      const keys = new Set();

      if (draggingRef.current?.key) {
        keys.add(draggingRef.current.key);
      }

      Object.values(remoteLiveMovesRef.current).forEach((move) => {
        if (move?.key) keys.add(move.key);
      });

      return keys;
    };

    const getPieceBounds = (p, pieceW, pieceH) => {
      if (!p) return null;

      const rotation = Number(p.rotation) || 0;
      const angle = Math.abs((rotation % 360) * Math.PI / 180);
      const extraX = rotation % 180 === 0
        ? 0
        : Math.abs(pieceW * Math.cos(angle)) / 2 + Math.abs(pieceH * Math.sin(angle)) / 2 - pieceW / 2;
      const extraY = rotation % 180 === 0
        ? 0
        : Math.abs(pieceW * Math.sin(angle)) / 2 + Math.abs(pieceH * Math.cos(angle)) / 2 - pieceH / 2;

      return {
        x: p.x - PAD - Math.max(0, extraX) - 4,
        y: p.y - PAD - Math.max(0, extraY) - 4,
        w: pieceW + PAD * 2 + Math.max(0, extraX) * 2 + 8,
        h: pieceH + PAD * 2 + Math.max(0, extraY) * 2 + 8,
      };
    };

    function drawPiece(ctx, key, p, pieceW, pieceH, showHighlight = false) {
      const bmp = pieceCanvasesRef.current[key];
      if (!p || !bmp) return;

      ctx.save();

      if (p.placed) {
        ctx.shadowColor = "rgba(120,90,100,0.18)";
        ctx.shadowBlur = 2;
      } else {
        ctx.shadowColor = "rgba(0,0,0,0.18)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetY = 1;
      }

      const rotation = Number(p.rotation) || 0;

      if (rotation) {
        ctx.translate(p.x + pieceW / 2, p.y + pieceH / 2);
        ctx.rotate(rotation * Math.PI / 180);
        ctx.drawImage(bmp, -pieceW / 2 - PAD, -pieceH / 2 - PAD);
      } else {
        ctx.drawImage(bmp, p.x - PAD, p.y - PAD);
      }

      ctx.restore();

      if (showHighlight) {
        ctx.save();
        ctx.strokeStyle = "#ffd166";
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.85;
        ctx.strokeRect(
          p.x - PAD * 0.6,
          p.y - PAD * 0.6,
          pieceW + PAD * 1.2,
          pieceH + PAD * 1.2
        );
        ctx.restore();
      }
    }

    function drawStatic() {
      const canvas = staticCanvasRef.current;
      if (!canvas || !room) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { boardW, boardH, rows, cols } = room;
      const isDark =
        document.documentElement.dataset.theme === "dark" ||
        theme === "dark";

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Tahta
      ctx.fillStyle = isDark ? "#000000" : "#fff5f7";
      roundRect(ctx, 0, 0, boardW, boardH, 18);
      ctx.fill();

      // Önizleme yalnızca istenince static katmanda çizilir.
      const ghost = pieceCanvasesRef.current.__ghost;
      if (ghost && room.previewAllowed !== false && showPreview) {
        ctx.save();
        ctx.globalAlpha = GHOST_OPACITY;
        roundRect(ctx, 0, 0, boardW, boardH, 18);
        ctx.clip();
        ctx.drawImage(ghost, 0, 0);
        ctx.restore();
      }

      ctx.strokeStyle = "rgba(255,111,156,0.28)";
      ctx.lineWidth = 2;
      roundRect(ctx, 1, 1, boardW - 2, boardH - 2, 18);
      ctx.stroke();

      // Tepsi
      const trayTop = boardH + 50;
      ctx.fillStyle = isDark ? "#090909" : "#faf3f6";
      roundRect(
        ctx,
        0,
        trayTop,
        boardW,
        canvas.height - trayTop - 10,
        18
      );
      ctx.fill();

      const pieceW = boardW / cols;
      const pieceH = boardH / rows;
      const dynamicKeys = getDynamicKeys();

      const keys = Object.keys(pieceCanvasesRef.current)
        .filter((k) => k !== "__ghost")
        .sort(
          (a, b) =>
            (zOrderRef.current[a] || 0) -
            (zOrderRef.current[b] || 0)
        );

      for (const key of keys) {
        if (dynamicKeys.has(key)) continue;

        const p = piecesRef.current[key];
        if (!p) continue;

        drawPiece(ctx, key, p, pieceW, pieceH, false);
      }

      staticDirtyRef.current = false;
    }

    function drawDynamic() {
      const canvas = canvasRef.current;
      if (!canvas || !room) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { boardW, boardH, rows, cols } = room;
      const pieceW = boardW / cols;
      const pieceH = boardH / rows;

      // Dynamic canvas transparandır. Önceki hareketli bölgeleri temizleyerek
      // alttaki static canvası tekrar görünür hale getiriyoruz.
      const oldBounds = dynamicBoundsRef.current;
      for (const b of oldBounds) {
        if (!b) continue;
        ctx.clearRect(b.x, b.y, b.w, b.h);
      }

      const nextBounds = [];
      const dynamicKeys = getDynamicKeys();

      dynamicKeys.forEach((key) => {
        const move = Object.values(remoteLiveMovesRef.current).find(
          (m) => m?.key === key
        );
        const p = piecesRef.current[key];

        if (!p) return;

        let drawPieceState = p;

        // Remote oyuncunun canlı pozisyonu, durable state'i değiştirmeden
        // yalnızca dynamic katmanda gösterilir.
        if (move && draggingRef.current?.key !== key) {
          drawPieceState = {
            ...p,
            x: Number(move.x),
            y: Number(move.y),
          };
        }

        if (!Number.isFinite(drawPieceState.x) || !Number.isFinite(drawPieceState.y)) {
          return;
        }

        const highlight =
          highlightRef.current.key === key &&
          Date.now() < highlightRef.current.until;

        drawPiece(
          ctx,
          key,
          drawPieceState,
          pieceW,
          pieceH,
          highlight
        );

        const bounds = getPieceBounds(drawPieceState, pieceW, pieceH);
        if (bounds) nextBounds.push(bounds);
      });

      // Hint edilen parça hareket etmiyorsa da sadece highlight çiz.
      const highlightKey = highlightRef.current.key;
      if (
        highlightKey &&
        !dynamicKeys.has(highlightKey) &&
        Date.now() < highlightRef.current.until
      ) {
        const p = piecesRef.current[highlightKey];
        if (p) {
          ctx.save();
          ctx.strokeStyle = "#ffd166";
          ctx.lineWidth = 3;
          ctx.globalAlpha = 0.85;
          ctx.strokeRect(
            p.x - PAD * 0.6,
            p.y - PAD * 0.6,
            pieceW + PAD * 1.2,
            pieceH + PAD * 1.2
          );
          ctx.restore();

          const bounds = getPieceBounds(p, pieceW, pieceH);
          if (bounds) nextBounds.push(bounds);
        }
      }

      dynamicBoundsRef.current = nextBounds;
      dynamicDirtyRef.current = false;

      // Highlight süresi dolana kadar yeni frame istemeye gerek yok; timeout
      // dirty flag'i zaten tekrar açıyor.
    }

    function draw() {
      raf = requestAnimationFrame(draw);

      if (!room) return;

      if (staticDirtyRef.current) {
        drawStatic();
      }

      if (dynamicDirtyRef.current || staticDirtyRef.current) {
        drawDynamic();
      }

      dirtyRef.current = false;
    }

    draw();

    return () => {
      cancelAnimationFrame(raf);
      dynamicBoundsRef.current = [];
    };
  }, [room, players, showPreview, theme]);
  function handlePointerDown(e) {
    if (e.button === 2) {
      e.preventDefault();
      if (!room?.rotatePieces) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const px = (e.clientX - rect.left) * scaleX;
      const py = (e.clientY - rect.top) * scaleY;
      const key = findPieceAtPoint(px, py);

      if (key) rotatePiece(key);
      return;
    }
    const canvas =
      canvasRef.current;

    if (!canvas || !room) return;

    const rect =
      canvas.getBoundingClientRect();

    const scaleX =
      canvas.width / rect.width;

    const scaleY =
      canvas.height / rect.height;

    const px =
      (e.clientX - rect.left) *
      scaleX;

    const py =
      (e.clientY - rect.top) *
      scaleY;

    const {
      cols,
      boardW,
      boardH,
    } = room;

    const pieceW =
      boardW / cols;

    const pieceH =
      boardH / room.rows;

    const keys =
      Object.keys(
        piecesRef.current
      ).sort(
        (a, b) =>
          (zOrderRef.current[b] || 0) -
          (zOrderRef.current[a] || 0)
      );

    for (
      const key of keys
    ) {
      const p =
        piecesRef.current[key];

      if (!p || p.placed) continue;

      const rotation = ((Number(p.rotation) || 0) * Math.PI) / 180;
      const dx = px - (p.x + pieceW / 2);
      const dy = py - (p.y + pieceH / 2);
      const cos = Math.cos(-rotation);
      const sin = Math.sin(-rotation);
      const localX = dx * cos - dy * sin + pieceW / 2;
      const localY = dx * sin + dy * cos + pieceH / 2;

      if (
        localX >= -PAD &&
        localX <= pieceW + PAD &&
        localY >= -PAD &&
        localY <= pieceH + PAD
      ) {
        draggingRef.current = {
          key,
          offsetX: px - p.x,
          offsetY: py - p.y,
        };

        setSelectedPieceKey(key);

        zCounterRef.current += 1;

        zOrderRef.current[key] =
          zCounterRef.current;

        canvas.setPointerCapture(
          e.pointerId
        );
        lastFirebaseWriteRef.current = Date.now();
        update(ref(db, `rooms/${roomCode}/liveMoves/${playerId}`), {
          key,
          x: Math.round(p.x),
          y: Math.round(p.y),
          movedAt: Date.now(),
        }).catch(() => {});

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
      canvas.width / rect.width;

    const scaleY =
      canvas.height / rect.height;

    const px =
      (e.clientX - rect.left) *
      scaleX;

    const py =
      (e.clientY - rect.top) *
      scaleY;

    const p =
      piecesRef.current[d.key];

    if (!p) return;

    const pieceW =
      room.boardW / room.cols;

    const pieceH =
      room.boardH / room.rows;

    p.x = Math.max(
      -PAD,
      Math.min(
        canvas.width -
          pieceW +
          PAD,
        px - d.offsetX
      )
    );

    p.y = Math.max(
      -PAD,
      Math.min(
        canvas.height -
          pieceH +
          PAD,
        py - d.offsetY
      )
    );

    dirtyRef.current = true;
    dynamicDirtyRef.current = true;

    const now =
      Date.now();

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
          `rooms/${roomCode}/liveMoves/${playerId}`
        ),
        {
          key: d.key,
          x: Math.round(p.x),
          y: Math.round(p.y),
          movedAt: now,
        }
      ).catch(() => {});
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
    } = room;

    const pieceW =
      boardW / cols;

    const pieceH =
      boardH / room.rows;

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
      (Number(p.rotation) || 0) === 0 &&
      dx < threshold &&
      dy < threshold
    ) {
      p.x = correctX;
      p.y = correctY;
      placed = true;
    }

    const now =
      Date.now();

    p.placed = placed;
    p.placedBy =
      placed
        ? playerId
        : null;
    p.movedBy =
      playerId;
    p.movedAt =
      now;

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

    remove(ref(db, `rooms/${roomCode}/liveMoves/${playerId}`)).catch(() => {});
  }

  function findMissingPiece() {
    if (!room) return;

    const available = Object.entries(piecesRef.current).filter(
      ([, p]) => p && !p.placed
    );

    if (!available.length) {
      setToast("Bütün parçalar zaten tamamlandı.");
      return;
    }

    if (hintsLeft !== null && hintsLeft <= 0) {
      setToast("Yardım hakkın kalmadı.");
      return;
    }
    if (hintsLeft !== null) setHintsLeft(h => Math.max(0, h - 1));
    const [key] = available[Math.floor(Math.random() * available.length)];

    highlightRef.current = {
      key,
      until: Date.now() + 2500,
    };

    dirtyRef.current = true;
    dynamicDirtyRef.current = true;

    setToast("İşaretli parçaya bak.");

    clearTimeout(window.__missingPieceTimer);
    window.__missingPieceTimer = setTimeout(() => {
      highlightRef.current = { key: null, until: 0 };
      dirtyRef.current = true;
      dynamicDirtyRef.current = true;
      setToast("");
    }, 2500);
  }

  function completePuzzleCheat() {
    if (!room) return;
    cheatedRef.current = true;

    const now =
      Date.now();

    const updates = {};

    const pieceW =
      room.boardW /
      room.cols;

    const pieceH =
      room.boardH /
      room.rows;

    Object.entries(
      piecesRef.current
    ).forEach(
      ([key, p]) => {
        if (!p) return;

        const [r, c] =
          key
            .split("_")
            .map(Number);

        const x =
          c * pieceW;

        const y =
          r * pieceH;

        p.x = x;
        p.y = y;
        p.rotation = 0;
        p.placed = true;
        p.placedBy = null;
        p.movedBy = "cheat";
        p.movedAt = now;

        updates[
          `rooms/${roomCode}/pieces/${key}/x`
        ] = Math.round(x);

        updates[
          `rooms/${roomCode}/pieces/${key}/y`
        ] = Math.round(y);

        updates[
          `rooms/${roomCode}/pieces/${key}/rotation`
        ] = 0;

        updates[
          `rooms/${roomCode}/pieces/${key}/placed`
        ] = true;

        updates[
          `rooms/${roomCode}/pieces/${key}/placedBy`
        ] = null;

        updates[
          `rooms/${roomCode}/pieces/${key}/movedBy`
        ] = "cheat";

        updates[
          `rooms/${roomCode}/pieces/${key}/movedAt`
        ] = now;
      }
    );

    updates[`rooms/${roomCode}/cheatedBy`] = playerId;
    updates[`rooms/${roomCode}/completionMode`] = "cheat";

    update(ref(db), updates)
      .then(() => {
        setRoom((current) => current ? { ...current, cheatedBy: playerId } : current);
        setFinished(true);
        setToast("Puzzle tamamlandı.");
      })
      .catch((error) => {
        console.error(
          "Puzzle tamamlama hatası:",
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

  async function leaveRoom() {
    if (!roomCode || !playerId) { onLeave?.(); return; }
    try {
      await remove(ref(db, `rooms/${roomCode}/liveMoves/${playerId}`));
      await remove(ref(db, `rooms/${roomCode}/players/${playerId}`));
      const playersSnap = await get(ref(db, `rooms/${roomCode}/players`));
      if (!playersSnap.exists() || Object.keys(playersSnap.val() || {}).length === 0) {
        await remove(ref(db, `rooms/${roomCode}`));
      }
    } catch (error) {
      console.error("Oda çıkış temizliği hatası:", error);
    } finally {
      onLeave?.();
    }
  }

  function copyInviteLink() {
    const url =
      `${window.location.origin}` +
      `${window.location.pathname}` +
      `?room=${roomCode}`;

    navigator.clipboard?.writeText(url);

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
          <h1>Odaya katıl</h1>

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
                placeholder="Adın"
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
          <h1>Bu oda dolu</h1>

          <p className="subtitle">
            Bu odada zaten iki
            oyuncu var.
          </p>

          <button
            className="btn primary"
            onClick={leaveRoom}
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
    room.boardH + 50;

  const pieceH =
    room.boardH /
    room.rows;

  const trayCols = Math.max(5, Math.min(10, Math.ceil(Math.sqrt(totalPiecesForLayout(room.rows, room.cols) * 1.2))));
  const trayRows = Math.ceil((room.rows * room.cols) / trayCols);

  const canvasHeight =
    trayTop +
    trayRows *
      pieceH *
      1.22 +
    pieceH * 2;

  const total =
    progress.total ||
    room.rows *
      room.cols;

  const minePct =
    total
      ? Math.round(
          (progress.mine /
            total) *
            100
        )
      : 0;

  const partnerPct =
    total
      ? Math.round(
          (progress.partner /
            total) *
            100
        )
      : 0;

  const me =
    players[playerId];

  const partnerEntry =
    Object.entries(
      players
    ).find(
      ([id]) =>
        id !== playerId
    );

  const partnerName =
    partnerEntry
      ? partnerEntry[1].name
      : "Diğer oyuncu";

  return (
    <div className="game">
      {gameAvatarViewer && (
        <div className="avatar-viewer-backdrop" onClick={() => setGameAvatarViewer(null)}>
          <div className="avatar-viewer" onClick={e => e.stopPropagation()}>
            <button className="avatar-viewer-close" onClick={() => setGameAvatarViewer(null)} aria-label="Kapat">×</button>
            <img src={gameAvatarViewer.src} alt={gameAvatarViewer.name || "Profil fotoğrafı"} />
            <strong>{gameAvatarViewer.name || "Oyuncu"}</strong>
          </div>
        </div>
      )}
      <div className="game-header">
        <div className="header-left">
          <span className="room-badge">Oda: {roomCode}</span>
          <span className="stat-badge">{room.difficultyName || "Klasik"}</span>
          <span className="stat-badge">{formatTime(elapsed)}</span>
          <span className="stat-badge">Yardım: {hintsLeft ?? 0}</span>

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

          <button
            className="btn tiny ghost"
            onClick={
              findMissingPiece
            }
            title="Rastgele tamamlanmamış bir parçayı gösterir"
          >
            Kayıp parçayı bul
          </button>

          {room.rotatePieces && (
            <button className="btn tiny ghost" onClick={rotateSelectedPiece} disabled={!selectedPieceKey}>
              Parçayı döndür
            </button>
          )}

          {room.previewAllowed !== false && (
            <button className="btn tiny ghost" onClick={() => setShowPreview(v => !v)}>
              {showPreview ? "Önizlemeyi gizle" : "Fotoğrafı göster"}
            </button>
          )}

          <button
            className="btn tiny ghost"
            onClick={() => setShowCheatConfirm(true)}
            title="Kalan parçaları tamamlar"
          >
            Şifreli puzzleı tamamla
          </button>
        </div>

        <button
          className="btn tiny ghost"
          onClick={
            onLeave
          }
        >
          Odadan çık
        </button>
      </div>

      <div className="progress-area">
        <div className="progress-row">
          <span className="game-player-avatar" onClick={() => me?.avatar && setGameAvatarViewer({ src: me.avatar, name: me?.name || "Sen" })}>
            {me?.avatar ? <img src={me.avatar} alt="" /> : <i style={{ background: me?.color || COLORS[0] }} />}
          </span>

          <span className="progress-label">
            {me?.name ||
              "Sen"}
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
          <span className="game-player-avatar" onClick={() => partnerEntry?.[1]?.avatar && setGameAvatarViewer({ src: partnerEntry[1].avatar, name: partnerName })}>
            {partnerEntry?.[1]?.avatar ? <img src={partnerEntry[1].avatar} alt="" /> : <i style={{ background: partnerEntry?.[1]?.color || COLORS[1] }} />}
          </span>

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

      {toast && <div className="toast">{toast}</div>}
      {partnerReaction && <div className="reaction-toast">{partnerReaction.name}: {partnerReaction.text}</div>}

      <div className="game-tools">
        <div className="tool-group"><button className="btn tiny ghost" onClick={() => setZoom((z) => Math.max(0.75, +(z - 0.1).toFixed(2)))}>−</button><span className="zoom-label">{Math.round(zoom * 100)}%</span><button className="btn tiny ghost" onClick={() => setZoom((z) => Math.min(1.6, +(z + 0.1).toFixed(2)))}>+</button><button className="btn tiny ghost" onClick={() => setZoom(1)}>Sığdır</button></div><div className="reaction-group">{["Bulduğum!", "Yaklaştım", "Tamamdır"].map((r) => <button key={r} className="btn tiny ghost" onClick={async () => { setReaction(r); window.clearTimeout(window.__reactionTimer); window.__reactionTimer = window.setTimeout(() => setReaction(""), 1400); await set(ref(db, `rooms/${roomCode}/reactions/${playerId}`), { text: r, name: me?.name || "Sen", at: Date.now() }); }}>{r}</button>)}</div>
      </div>

      <div
        className="canvas-wrap"
        style={{
          position: "relative",
          width: `${Math.min(1400, 900 * zoom)}px`,
          height: `${canvasHeight * (Math.min(1400, 900 * zoom) / canvasWidth)}px`,
          maxWidth: "none",
        }}
      >
        <canvas
          ref={staticCanvasRef}
          width={canvasWidth}
          height={canvasHeight}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            width: "100%",
            height: "100%",
            maxWidth: "none",
            pointerEvents: "none",
          }}
        />
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            width: "100%",
            height: "100%",
            maxWidth: "none",
            touchAction: "none",
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
          onPointerDown={handlePointerDown}
          onDoubleClick={handleDoubleClick}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      <p className="hint">
        Parçaları alttaki
        tepsiden tahtaya
        sürükle. Doğru yere
        yakın bırakınca
        kilitlenir.
      </p>

      <button
        className={`room-chat-launcher ${chatOpen ? "open" : ""}`}
        onClick={() => {
          setChatOpen((v) => {
            const next = !v;
            if (next) {
              localStorage.setItem(`roomChatRead:${roomCode}:${playerId}`, String(Date.now()));
              setChatUnread(false);
            }
            return next;
          });
        }}
        title="Oda sohbeti"
        aria-label="Oda sohbeti"
      >
        <span className="room-chat-launcher-icon" aria-hidden="true"></span>
        <span className="room-chat-launcher-label">Sohbet</span>
        {chatUnread && <b>1</b>}
      </button>

      {chatOpen && (
        <div className="room-chat-panel">
          <div className="room-chat-head">
            <div><span className="panel-kicker">ORTAK ODA</span><strong>Sohbet</strong></div>
            <button className="drawer-close" onClick={() => setChatOpen(false)}>×</button>
          </div>
          <div className="room-chat-messages">
            {chatMessages.length === 0 ? <div className="chat-empty">Henüz mesaj yok. İlk mesajı sen gönder.</div> :
              chatMessages.map(m => <div key={m.id} className={`room-chat-bubble ${m.senderId === playerId ? "mine" : ""}`}><b>{m.senderId === playerId ? "Sen" : m.name || "Oyuncu"}</b><span>{m.text}</span><small>{new Date(m.at).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})}</small></div>)}
          </div>
          <div className="room-chat-compose">
            <input value={chatText} onChange={e => setChatText(e.target.value.slice(0,300))} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendRoomMessage(); } }} placeholder="Mesaj yaz..." />
            <button className="btn primary" onClick={sendRoomMessage}>Gönder</button>
          </div>
        </div>
      )}

      {showCheatConfirm && (
        <div className="modal-backdrop"><div className="confirm-card"><div className="confirm-kicker">KARARINI KESİNLEŞTİR</div><h2>Puzzle'ı senin yerine tamamlayalım mı?</h2><p>Kalan parçalar doğru konum ve yönde otomatik yerleştirilecek. Bu işlem normal çözüm olarak ödüllendirilmeyecek.</p><div className="row-buttons"><button className="btn ghost" onClick={() => setShowCheatConfirm(false)}>Vazgeç</button><button className="btn primary" onClick={() => { setShowCheatConfirm(false); completePuzzleCheat(); }}>Puzzle'ı tamamla</button></div></div></div>
      )}

      {finished && (
        <div className="finish-overlay">
          <div className="finish-orbit orbit-one" /><div className="finish-orbit orbit-two" />
          <div className="finish-card premium-finish">
            <div className="finish-ribbon">PUZZLE TAMAMLANDI</div>
            <div className="finish-photo-frame">
              <img src={room.image} alt="Tamamlanan puzzle" />
              <div className="finish-photo-shine" />
            </div>
            <p className="finish-kicker">BİRLİKTE BİTTİ</p>
            <h2>Bu anıyı tamamladınız.</h2>
            <p className="finish-copy">Son parça yerine oturdu. Şimdi ortaya çıkan fotoğrafın tadını çıkar.</p>
            {reward && <div className="reward-box"><b>+{reward.gainedXp} XP</b><span>Seviye {reward.level}</span>{reward.newBadges?.length > 0 && <em>{reward.newBadges.length} yeni rozet</em>}</div>}
            <div className="finish-stats">
              <div><b>{total}</b><span>parça</span></div>
              <div><b>{formatTime(elapsed)}</b><span>süre</span></div>
              <div><b>{hintsLeft ?? 0}</b><span>kalan yardım</span></div>
            </div>
            <button className="btn primary finish-button" onClick={() => { completionDismissedRef.current = true; setFinished(false); }}>Puzzle'a bak</button>
          </div>
        </div>
      )}
    </div>
  );
}