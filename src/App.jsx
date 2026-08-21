import React, { useEffect, useState } from "react";
import Home from "./Home.jsx";
import Game from "./Game.jsx";

function getOrCreatePlayerId() {
  let id = localStorage.getItem("puzzle_player_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("puzzle_player_id", id);
  }
  return id;
}

export default function App() {
  const [room, setRoom] = useState(null); // { code, name }
  const playerId = getOrCreatePlayerId();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const roomFromUrl = params.get("room");
    if (roomFromUrl) {
      setRoom({ code: roomFromUrl.toUpperCase(), name: "" , pendingJoin: true});
    }
  }, []);

  if (room && room.code) {
    return (
      <Game
        roomCode={room.code}
        playerId={playerId}
        playerName={room.name}
        pendingJoin={!!room.pendingJoin}
        onLeave={() => {
          window.history.replaceState({}, "", window.location.pathname);
          setRoom(null);
        }}
      />
    );
  }

  return <Home playerId={playerId} onEnterRoom={(code, name) => setRoom({ code, name })} />;
}
