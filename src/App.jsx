import React, { useEffect, useState } from "react";
import Home from "./Home.jsx";
import Game from "./Game.jsx";
import Auth from "./Auth.jsx";
import { auth } from "./firebase.js";
import { onAuthStateChanged, signInAnonymously, signOut } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(undefined);
  const [room, setRoom] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("puzzleTheme") || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("puzzleTheme", theme);
  }, [theme]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomFromUrl = params.get("room");

    if (!roomFromUrl) return;

    const code = roomFromUrl.trim().toUpperCase();
    if (!code || !/^[A-Z0-9_-]{1,32}$/.test(code)) {
      window.history.replaceState({}, "", window.location.pathname);
      return;
    }

    setRoom((current) =>
      current?.code === code
        ? current
        : { code, pendingJoin: true }
    );

    // Giriş yapmış kayıtlı kullanıcı aynen kendi hesabıyla odaya girer.
    // Sadece tamamen çıkış yapılmış bir kullanıcı davet linkini açtıysa
    // geçici anonim oturum oluşturulur.
    if (user === null) {
      signInAnonymously(auth).catch((err) => {
        console.error("Misafir oturumu başlatılamadı:", err);
      });
    }
  }, [user]);


  if (user === undefined) {
    return <div className="auth-loading">Yükleniyor...</div>;
  }

  // Davet linkinden gelen anonim kullanıcı doğrudan odaya girebilir.
  // Normal kullanıcılar için mevcut e-posta doğrulama şartı korunur.
  if (!user && room?.pendingJoin) {
    return <div className="auth-loading">Davete katılınıyor...</div>;
  }

  if (!user) {
    return <Auth initialMode="login" onSuccess={() => {}} />;
  }

  if (!user.isAnonymous && !user.emailVerified) {
    return <Auth initialMode="login" onSuccess={() => {}} />;
  }

  const playerId = user.uid;
  const playerName = user.isAnonymous ? "Misafir" : (user.displayName || "Oyuncu");

  if (room && room.code) {
    return (
      <Game
        roomCode={room.code}
        playerId={playerId}
        playerName={room.playerNameOverride || playerName}
        isGuest={user.isAnonymous}
        pendingJoin={!!room.pendingJoin}
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === "dark" ? "light" : "dark")}
        onLeave={async () => {
          window.history.replaceState({}, "", window.location.pathname);
          setRoom(null);
          // Misafir oturumu yalnızca davet edilen oda süresince yaşar.
          if (user.isAnonymous) {
            try { await signOut(auth); } catch (error) {
              console.error("Misafir oturumu kapatılamadı:", error);
            }
          }
        }}
      />
    );
  }

  return (
    <Home
      playerId={playerId}
      user={user}
      playerName={playerName}
      theme={theme}
      onToggleTheme={() => setTheme((current) => current === "dark" ? "light" : "dark")}
      onEnterRoom={(code, name, pendingJoin = false) => {
        setRoom({
          code,
          pendingJoin,
          playerNameOverride: name || null,
        });
      }}
    />
  );
}
