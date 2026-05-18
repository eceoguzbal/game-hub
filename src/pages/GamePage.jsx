import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GAMES } from "./HomePage";

export default function GamePage() {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = GAMES.find((g) => g.id === gameId);

  useEffect(() => {
    const handler = (e) => {
      if (e.data === "BACK_TO_HUB") navigate("/");
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [navigate]);

  if (!game) return <div className="not-found">Oyun bulunamadı.</div>;

  return (
    <div className="game-page">
      <nav className="navbar" style={{ "--nav-color": game.color }}>
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Geri
        </button>
        <span className="nav-title">
          {game.emoji} {game.name}
        </span>
        <span className="nav-owner">{game.owner}</span>
      </nav>
      <iframe
        src={game.url}
        title={game.name}
        className="game-frame"
        allow="fullscreen"
      />
    </div>
  );
}
