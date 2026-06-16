import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [headline, setHeadline] = useState(
    "Tap a button and let the chaos begin ✨",
  );
  const [fortune, setFortune] = useState(
    "No fortune yet — maybe your next click is lucky.",
  );

  const surprises = [
    "You just unlocked +10 creative energy ⚡",
    "Plot twist: your next idea is the one 🚀",
    "Design instinct = dangerously good today 🎨",
    "Tiny progress today, huge flex tomorrow 💪",
    "You found the secret button. Respect. 🕶️",
  ];

  const fortunes = [
    "A bold idea is about to become a real project.",
    "Your next commit will feel very satisfying.",
    "An unexpected collab is closer than you think.",
    "Coffee + focus = masterpiece mode activated.",
    "Something you start this week will be worth showing off.",
  ];

  const vibes = [
    "from-rose-500/25 via-orange-400/25 to-yellow-300/25",
    "from-sky-500/25 via-cyan-400/25 to-emerald-300/25",
    "from-indigo-500/25 via-violet-500/25 to-fuchsia-400/25",
    "from-lime-400/25 via-emerald-400/25 to-teal-400/25",
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const randomItem = (list) => list[Math.floor(Math.random() * list.length)];

  const handleMystery = () => {
    toggleTheme();
    setHeadline(randomItem(surprises));
  };

  const handleFortune = () => {
    setFortune(randomItem(fortunes));
  };

  return (
    <>
      <div>
        <h1 className="font-sans">Emanunfolding</h1>
      </div>

      <section id="center">
        <div className="size-60 overflow-hidden rounded-full border-4 border-red-500/70">
          <img
            src="/Me.jpeg"
            alt="Might be a picture of me"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className={`w-full max-w-2xl rounded-2xl border border-white/10 p-6 shadow-xl backdrop-blur`}
        >
          <h2 className="mb-2 text-sm uppercase tracking-[0.18em] text-slate-300">
            Hey, I am Emmanuel Tembo
          </h2>
          <h1 className="mb-2 text-4xl font-bold text-white">
            Developer. Artist. Designer.
          </h1>
          <h2 className="mb-6 text-xl text-slate-200">
            Portfolio coming soon...
          </h2>

          <div className="grid gap-3 sm:grid-cols-3">
            <button
              className="rounded-lg bg-rose-700 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
              onClick={handleMystery}
            >
              👀 See what this button does
            </button>

            <button
              className="rounded-lg bg-pink-600/50 px-4 py-2 font-medium text-white transition hover:bg-pink-700"
              onClick={handleFortune}
            >
              🔮 Random fortune
            </button>
          </div>

          <p className="mt-5 rounded-lg bg-black/50 p-3 text-sm text-slate-100">
            {headline}
          </p>
          <p className="mt-3 rounded-lg bg-black/50 p-3 text-sm text-slate-100">
            {fortune}
          </p>

        </div>
      </section>
      <div className="ticks"></div>
    </>
  );
}

export default App;
