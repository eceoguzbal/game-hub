import { useNavigate } from "react-router-dom";

export const GAMES = [
  {
    id: "balloon",
    name: "Balloon Task",
    owner: "Ece",
    url: "https://balloon-frontend-beta.vercel.app",
    emoji: "🎈",
    color: "#FF6B6B",
    bg: "#FFE8E8",
  },
  {
    id: "Hanoi Client",
    name: "Hanoi Client",
    owner: "Rahiq",
    url: "https://hanoi-client.vercel.app/",
    emoji: "🗼",
    color: "#5B8DEF",
    bg: "#E8EFFF",
  },
  {
    id: "Flanker",
    name: "Flanker",
    owner: "Rahiq",
    url: "https://flanker-client.vercel.app/",
    emoji: "⬅️",
    color: "#F4A623",
    bg: "#FFF4E0",
  },
  {
    id: "Simons Says",
    name: "Simon Says",
    owner: "Rahiq",
    url: "https://simon-client.vercel.app",
    emoji: "🔵",
    color: "#3ECFB2",
    bg: "#E3FAF6",
  },
  {
    id: "Colour Stroop",
    name: "Colour Stroop",
    owner: "Ilgın",
    url: "https://colourstrooptaskfinal.vercel.app/",
    emoji: "🎨",
    color: "#E05CB5",
    bg: "#FCE8F6",
  },
  {
    id: "Digit Memory",
    name: "Digit Memory",
    owner: "Ece",
    url: "https://memory-span-nine.vercel.app/",
    emoji: "🔢",
    color: "#9B59B6",
    bg: "#F3E8FF",
  },
  {
    id: "Memory Task",
    name: "Memory Task",
    owner: "Rahiq",
    url: "https://memory-game-rosy-beta.vercel.app/",
    emoji: "🃏",
    color: "#E8703A",
    bg: "#FFF0E8",
  },
  {
    id: "Spatial Memory",
    name: "Spatial Memory",
    owner: "Ruken",
    url: "https://spatial-memory-ruby.vercel.app/",
    emoji: "🧩",
    color: "#2EAFF5",
    bg: "#E5F5FF",
  },
  {
    id: "Go No Go",
    name: "Go No Go",
    owner: "Ruken",
    url: "https://go-no-go-tau.vercel.app/",
    emoji: "🚦",
    color: "#27AE60",
    bg: "#E7F9EE",
  },
  {
    id: "Digit Symbol",
    name: "Digit Symbol",
    owner: "Ilgın",
    url: "https://digitsymbolgame.vercel.app/",
    emoji: "🔣",
    color: "#F06060",
    bg: "#FFECEC",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="header">
        <div className="header-inner">
          <div className="logo">🎮</div>
          <div>
            <h1 className="title">Game Hub</h1>
            <p className="subtitle">Senior Design Project · 2026</p>
          </div>
        </div>
      </header>

      <main className="main">
        <p className="pick-label">Choose a task</p>
        <div className="grid">
          {GAMES.map((game, i) => (
            <button
              key={game.id}
              className="card"
              style={{
                "--card-color": game.color,
                "--card-bg": game.bg,
                animationDelay: `${i * 60}ms`,
              }}
              onClick={() => {
                if (game.url) navigate(`/game/${game.id}`);
              }}
              disabled={!game.url}
            >
              <span className="card-emoji">{game.emoji}</span>
              <span className="card-name">{game.name}</span>
              <span className="card-owner">{game.owner}</span>
              {!game.url && <span className="card-badge">Yakında</span>}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
