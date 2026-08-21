import React, { useState } from "react";
import { ref, set, get } from "firebase/database";
import { db } from "./firebase.js";
import {
  computeGrid,
  generateEdges,
  hashStringToSeed,
  makeRoomCode,
  mulberry32,
  scatterPosition,
} from "./puzzleUtils.js";

const BOARD_MAX_W = 900;

function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target.result;
    };

    reader.onerror = reject;

    img.onload = () => {
      const scale = Math.min(1, 800 / img.width);
      const width = Math.max(1, Math.round(img.width * scale));
      const height = Math.max(1, Math.round(img.height * scale));

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Canvas oluşturulamadı."));
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      const dataUrl = canvas.toDataURL("image/jpeg", 0.6);

      resolve({
        dataUrl,
        width,
        height,
      });
    };

    img.onerror = () => {
      reject(new Error("Fotoğraf yüklenemedi."));
    };

    reader.readAsDataURL(file);
  });
}

export default function Home({ onEnterRoom }) {
  const [mode, setMode] = useState("choose");
  const [name, setName] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [file, setFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleCreate() {
    if (!file) {
      setError("Önce bir fotoğraf seç.");
      return;
    }

    setBusy(true);
    setError("");

    try {
      const { dataUrl, width, height } = await resizeImage(file);

      const { cols, rows } = computeGrid(width, height);

      const boardW = BOARD_MAX_W;
      const boardH = Math.round((height / width) * boardW);

      const pieceW = boardW / cols;
      const pieceH = boardH / rows;

      let code = makeRoomCode();

      for (let i = 0; i < 5; i++) {
        const snap = await get(ref(db, `rooms/${code}`));

        if (!snap.exists()) {
          break;
        }

        code = makeRoomCode();
      }

      const seed = hashStringToSeed(code);
      generateEdges(rows, cols, seed);

      const rand = mulberry32(seed + 1);
      const trayTop = boardH + 60;
      const pieces = {};

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const pos = scatterPosition(
            r,
            c,
            rows,
            cols,
            pieceW,
            pieceH,
            trayTop,
            boardW,
            rand
          );

          pieces[`${r}_${c}`] = {
            x: Math.round(pos.x),
            y: Math.round(pos.y),
            placed: false,
            placedBy: null,
            movedBy: null,
            movedAt: 0,
          };
        }
      }

      await set(ref(db, `rooms/${code}`), {
        image: dataUrl,
        imgWidth: width,
        imgHeight: height,
        rows,
        cols,
        seed,
        boardW,
        boardH,
        createdAt: Date.now(),
        pieces,
        players: {},
      });

      onEnterRoom(code, name.trim() || "Sen");
    } catch (e) {
      console.error(e);

      if (e?.code === "PERMISSION_DENIED") {
        setError("Firebase erişim izni vermedi.");
      } else {
        setError(e?.message || "Bir şeyler ters gitti.");
      }
    } finally {
      setBusy(false);
    }
  }

  async function handleJoin() {
    const code = joinCode.trim().toUpperCase();

    if (!code) {
      setError("Oda kodunu gir.");
      return;
    }

    setBusy(true);
    setError("");

    try {
      const snap = await get(ref(db, `rooms/${code}`));

      if (!snap.exists()) {
        setError("Böyle bir oda bulunamadı.");
        return;
      }

      onEnterRoom(code, name.trim() || "Sevgilin");
    } catch (e) {
      console.error(e);

      if (e?.code === "PERMISSION_DENIED") {
        setError("Firebase erişim izni vermedi.");
      } else {
        setError("Bağlanırken bir sorun oldu.");
      }
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="home">
      <div className="home-card">
        <h1>Bizim Puzzle 💞</h1>

        <p className="subtitle">
          Aynı 500 parçalık puzzle&apos;ı, ayrı ekranlarda birlikte çözün.
        </p>

        {mode === "choose" && (
          <div className="choice-buttons">
            <button
              className="btn primary"
              onClick={() => {
                setError("");
                setMode("create");
              }}
            >
              Oda Oluştur
            </button>

            <button
              className="btn secondary"
              onClick={() => {
                setError("");
                setMode("join");
              }}
            >
              Odaya Katıl
            </button>
          </div>
        )}

        {mode === "create" && (
          <div className="form">
            <label className="field">
              <span>Adın (opsiyonel)</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sen"
                disabled={busy}
              />
            </label>

            <label className="field">
              <span>Fotoğraf seç</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setFile(e.target.files?.[0] || null);
                  setError("");
                }}
                disabled={busy}
              />
            </label>

            {file && !error && (
              <div className="subtitle" style={{ marginBottom: 0 }}>
                Seçilen fotoğraf: {file.name}
              </div>
            )}

            {error && <div className="error">{error}</div>}

            <div className="row-buttons">
              <button
                className="btn ghost"
                onClick={() => {
                  setError("");
                  setMode("choose");
                }}
                disabled={busy}
              >
                Geri
              </button>

              <button
                className="btn primary"
                disabled={busy}
                onClick={handleCreate}
              >
                {busy ? "Hazırlanıyor..." : "Odayı Oluştur"}
              </button>
            </div>
          </div>
        )}

        {mode === "join" && (
          <div className="form">
            <label className="field">
              <span>Adın (opsiyonel)</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sevgilin"
                disabled={busy}
              />
            </label>

            <label className="field">
              <span>Oda kodu</span>
              <input
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                placeholder="Örn: A3F9K"
                maxLength={5}
                disabled={busy}
              />
            </label>

            {error && <div className="error">{error}</div>}

            <div className="row-buttons">
              <button
                className="btn ghost"
                onClick={() => {
                  setError("");
                  setMode("choose");
                }}
                disabled={busy}
              >
                Geri
              </button>

              <button
                className="btn primary"
                disabled={busy}
                onClick={handleJoin}
              >
                {busy ? "Bağlanıyor..." : "Katıl"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}