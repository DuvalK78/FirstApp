import { useState, useEffect, useRef } from "react";

const ALL_TEAMS = [
  { flag: "🇺🇸", name: "États-Unis", capital: "Washington D.C.", aliases: ["etats-unis", "etats unis", "usa", "us", "united states", "amerique"] },
  { flag: "🇲🇽", name: "Mexique", capital: "Mexico City", aliases: ["mexico"] },
  { flag: "🇨🇦", name: "Canada", capital: "Ottawa", aliases: [] },
  { flag: "🇭🇹", name: "Haïti", capital: "Port-au-Prince", aliases: ["haiti"] },
  { flag: "🇵🇦", name: "Panama", capital: "Panama City", aliases: [] },
  { flag: "🇨🇼", name: "Curaçao", capital: "Willemstad", aliases: ["curacao"] },
  { flag: "🇦🇷", name: "Argentine", capital: "Buenos Aires", aliases: ["argentina"] },
  { flag: "🇧🇷", name: "Brésil", capital: "Brasília", aliases: ["bresil", "brazil", "brasil"] },
  { flag: "🇨🇴", name: "Colombie", capital: "Bogotá", aliases: ["colombia"] },
  { flag: "🇺🇾", name: "Uruguay", capital: "Montevideo", aliases: [] },
  { flag: "🇪🇨", name: "Équateur", capital: "Quito", aliases: ["equateur", "ecuador"] },
  { flag: "🇵🇾", name: "Paraguay", capital: "Asunción", aliases: [] },
  { flag: "🇫🇷", name: "France", capital: "Paris", aliases: ["les bleus"] },
  { flag: "🇪🇸", name: "Espagne", capital: "Madrid", aliases: ["spain", "espana"] },
  { flag: "🇩🇪", name: "Allemagne", capital: "Berlin", aliases: ["germany", "deutschland"] },
  { flag: "🇵🇹", name: "Portugal", capital: "Lisbonne", aliases: [] },
  { flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "Angleterre", capital: "Londres", aliases: ["england", "angletterre"] },
  { flag: "🇳🇱", name: "Pays-Bas", capital: "Amsterdam", aliases: ["pays bas", "hollande", "netherlands", "holland"] },
  { flag: "🇧🇪", name: "Belgique", capital: "Bruxelles", aliases: ["belgium"] },
  { flag: "🇭🇷", name: "Croatie", capital: "Zagreb", aliases: ["croatia"] },
  { flag: "🇨🇭", name: "Suisse", capital: "Berne", aliases: ["switzerland", "swiss"] },
  { flag: "🇦🇹", name: "Autriche", capital: "Vienne", aliases: ["austria"] },
  { flag: "🇹🇷", name: "Turquie", capital: "Ankara", aliases: ["turkey", "turkiye"] },
  { flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Écosse", capital: "Édimbourg", aliases: ["ecosse", "scotland"] },
  { flag: "🇳🇴", name: "Norvège", capital: "Oslo", aliases: ["norvege", "norway"] },
  { flag: "🇸🇪", name: "Suède", capital: "Stockholm", aliases: ["suede", "sweden"] },
  { flag: "🇧🇦", name: "Bosnie-Herzégovine", capital: "Sarajevo", aliases: ["bosnie", "bosnie herzegovine", "bosnia"] },
  { flag: "🇨🇿", name: "Tchéquie", capital: "Prague", aliases: ["tcheque", "tchequie", "czech republic", "czech"] },
  { flag: "🇲🇦", name: "Maroc", capital: "Rabat", aliases: ["morocco"] },
  { flag: "🇸🇳", name: "Sénégal", capital: "Dakar", aliases: ["senegal"] },
  { flag: "🇩🇿", name: "Algérie", capital: "Alger", aliases: ["algerie", "algeria"] },
  { flag: "🇬🇭", name: "Ghana", capital: "Accra", aliases: [] },
  { flag: "🇨🇮", name: "Côte d'Ivoire", capital: "Yamoussoukro", aliases: ["cote d ivoire", "cote divoire", "ivory coast", "cote ivoire"] },
  { flag: "🇪🇬", name: "Égypte", capital: "Le Caire", aliases: ["egypte", "egypt"] },
  { flag: "🇿🇦", name: "Afrique du Sud", capital: "Pretoria", aliases: ["afrique du sud", "south africa"] },
  { flag: "🇨🇻", name: "Cap-Vert", capital: "Praia", aliases: ["cap vert", "cape verde", "cabo verde"] },
  { flag: "🇹🇳", name: "Tunisie", capital: "Tunis", aliases: ["tunisia"] },
  { flag: "🇨🇩", name: "RD Congo", capital: "Kinshasa", aliases: ["rd congo", "rdc", "congo", "dr congo"] },
  { flag: "🇯🇵", name: "Japon", capital: "Tokyo", aliases: ["japan"] },
  { flag: "🇰🇷", name: "Corée du Sud", capital: "Séoul", aliases: ["coree du sud", "south korea", "korea"] },
  { flag: "🇮🇷", name: "Iran", capital: "Téhéran", aliases: [] },
  { flag: "🇦🇺", name: "Australie", capital: "Canberra", aliases: ["australia"] },
  { flag: "🇸🇦", name: "Arabie Saoudite", capital: "Riyad", aliases: ["arabie saoudite", "saudi arabia", "arabie"] },
  { flag: "🇶🇦", name: "Qatar", capital: "Doha", aliases: [] },
  { flag: "🇯🇴", name: "Jordanie", capital: "Amman", aliases: ["jordan"] },
  { flag: "🇺🇿", name: "Ouzbékistan", capital: "Tachkent", aliases: ["ouzbekistan", "uzbekistan"] },
  { flag: "🇮🇶", name: "Irak", capital: "Bagdad", aliases: ["iraq"] },
  { flag: "🇳🇿", name: "Nouvelle-Zélande", capital: "Wellington", aliases: ["nouvelle zelande", "new zealand", "nz"] },
];

const COUNT_OPTIONS = [6, 12, 24, 48];
const MAX_WRONG = 4;
const PTS = [5, 4, 3, 2, 1]; // index = wrongCount quand trouvé

function normalize(str) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]/g, "").trim();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function hintLength(name) {
  return name.split(/[\s\-']+/).map(w => Array.from(w).map(() => "﹏").join(" ")).join("  ·  ");
}

function hintInitials(name) {
  return name.split(/[\s\-']+/).map(w => {
    const l = Array.from(w);
    return l[0].toUpperCase() + l.slice(1).map(() => "_").join("");
  }).join("-");
}

function hintEnding(name) {
  return name.split(/[\s\-']+/).map(w => {
    const l = Array.from(w);
    if (l.length <= 2) return w;
    return l.slice(0, l.length - 2).map(() => "_").join("") + l.slice(-2).join("").toLowerCase();
  }).join("-");
}

function HintBox({ icon, label, children }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:10, background:"#140f00", border:"1px solid #f4a26122", borderRadius:4, padding:"8px 12px", width:"100%", boxSizing:"border-box" }}>
      <span style={{ fontSize:16 }}>{icon}</span>
      <span style={{ fontFamily:"'DM Sans',sans-serif", color:"#555", fontSize:11, minWidth:58 }}>{label}</span>
      <span>{children}</span>
    </div>
  );
}

export default function FlagQuiz() {
  const [screen, setScreen] = useState("home"); // home | game | done
  const [count, setCount] = useState(12);
  const [queue, setQueue] = useState([]);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [wrongCount, setWrongCount] = useState(0);
  const [phase, setPhase] = useState("playing"); // playing | correct | revealed
  const [score, setScore] = useState(0);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  const current = queue[idx] || null;
  const maxScore = queue.length * 5;

  function startGame() {
    const q = shuffle(ALL_TEAMS).slice(0, count);
    setQueue(q);
    setIdx(0);
    setInput("");
    setWrongCount(0);
    setPhase("playing");
    setScore(0);
    setResults([]);
    setScreen("game");
  }

  useEffect(() => {
    if (screen === "game" && phase === "playing") {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [idx, screen, phase]);

  function advance(pts) {
    const newResults = [...results, { team: current, pts, wrongCount }];
    setResults(newResults);
    setScore(s => s + pts);
    const next = idx + 1;
    if (next >= queue.length) {
      setTimeout(() => setScreen("done"), 1100);
    } else {
      setTimeout(() => {
        setIdx(next);
        setInput("");
        setWrongCount(0);
        setPhase("playing");
      }, 1100);
    }
  }

  function checkAnswer() {
    if (!input.trim() || !current || phase !== "playing") return;
    const norm = normalize(input);
    const isCorrect = norm === normalize(current.name) || current.aliases.map(normalize).includes(norm);
    if (isCorrect) {
      const pts = PTS[wrongCount] ?? 1;
      setPhase("correct");
      advance(pts);
    } else {
      const nw = wrongCount + 1;
      setWrongCount(nw);
      setInput("");
      if (nw >= MAX_WRONG) {
        setPhase("revealed");
        advance(0);
      }
    }
  }

  function skip() {
    if (phase !== "playing") return;
    setPhase("revealed");
    advance(0);
  }

  function handleKey(e) { if (e.key === "Enter") checkAnswer(); }

  const progress = queue.length ? (idx / queue.length) * 100 : 0;

  // ── ACCUEIL ──────────────────────────────────────────────
  if (screen === "home") {
    return (
      <div style={S.root}>
        <div style={S.card}>
          <div style={{ fontSize: 52, marginBottom: 4 }}>🧀</div>
          <h1 style={S.bigTitle}>FLAG QUIZ</h1>
          <p style={{ ...S.gold, marginBottom: 20 }}>COUPE DU MONDE 2026</p>

          <p style={{ ...S.muted, marginBottom: 12 }}>Combien de drapeaux ?</p>
          <div style={{ display:"flex", gap:10, marginBottom: 24, flexWrap:"wrap", justifyContent:"center" }}>
            {COUNT_OPTIONS.map(n => (
              <button
                key={n}
                onClick={() => setCount(n)}
                style={{
                  ...S.btnGhost,
                  background: count === n ? "#c8a84b" : "transparent",
                  color: count === n ? "#000" : "#888",
                  border: count === n ? "none" : "1px solid #2a2a3a",
                  padding: "10px 22px",
                  fontSize: 20,
                }}
              >
                {n}
              </button>
            ))}
          </div>

          <div style={{ ...S.hintLegend, marginBottom: 20 }}>
            <div style={S.hintRow}><span style={S.pts}>5 pts</span><span>Trouvé du premier coup</span></div>
            <div style={S.hintRow}><span style={S.pts}>4 pts</span><span>Après indice longueur</span></div>
            <div style={S.hintRow}><span style={S.pts}>3 pts</span><span>Après indice capitale</span></div>
            <div style={S.hintRow}><span style={S.pts}>2 pts</span><span>Après indice initiales</span></div>
            <div style={S.hintRow}><span style={S.pts}>1 pt</span><span>Après indice fin du mot</span></div>
            <div style={S.hintRow}><span style={{ ...S.pts, color:"#e63946" }}>0 pt</span><span>Pas trouvé</span></div>
          </div>

          <button style={{ ...S.btn, width:"100%" }} onClick={startGame}>JOUER</button>
        </div>
      </div>
    );
  }

  // ── RÉSULTATS ─────────────────────────────────────────────
  if (screen === "done") {
    const pct = maxScore ? Math.round((score / maxScore) * 100) : 0;
    const emoji = pct === 100 ? "🏆" : pct >= 80 ? "⭐" : pct >= 50 ? "💪" : "📚";
    const label = pct === 100 ? "PARFAIT !" : pct >= 80 ? "EXCELLENT !" : pct >= 50 ? "PAS MAL !" : "À RETRAVAILLER";
    return (
      <div style={S.root}>
        <div style={{ ...S.card, maxWidth:500, width:"100%" }}>
          <div style={{ fontSize:52 }}>{emoji}</div>
          <h1 style={S.bigTitle}>{score} <span style={{ color:"#444", fontSize:"0.5em" }}>/ {maxScore}</span></h1>
          <p style={{ ...S.gold, fontSize:12, letterSpacing:5, marginBottom:4 }}>{pct}%</p>
          <p style={{ ...S.muted, marginBottom:20 }}>{label}</p>

          <div style={{ width:"100%", maxHeight:320, overflowY:"auto", marginBottom:16 }}>
            {results.map((r, i) => (
              <div key={i} style={{
                display:"flex", alignItems:"center", gap:10,
                padding:"7px 12px",
                background: r.pts === 5 ? "#0d2b1a" : r.pts === 0 ? "#2b0d0d" : "#1a1208",
                borderLeft:`3px solid ${r.pts === 5 ? "#2a9d5c" : r.pts === 0 ? "#e63946" : "#f4a261"}`,
                marginBottom:3, borderRadius:2,
                fontFamily:"'DM Sans',sans-serif", fontSize:14,
              }}>
                <span style={{ fontSize:22 }}>{r.team.flag}</span>
                <span style={{ flex:1, color: r.pts === 0 ? "#e63946" : r.pts === 5 ? "#2a9d5c" : "#f4a261" }}>{r.team.name}</span>
                <span style={{ fontFamily:"'Bebas Neue',Impact,sans-serif", fontSize:16, color:"#c8a84b" }}>{r.pts} pt{r.pts !== 1 ? "s" : ""}</span>
              </div>
            ))}
          </div>

          <div style={{ display:"flex", gap:10, width:"100%" }}>
            <button style={{ ...S.btn, flex:1 }} onClick={startGame}>REJOUER</button>
            <button style={{ ...S.btnGhost, flex:1 }} onClick={() => setScreen("home")}>MENU</button>
          </div>
        </div>
      </div>
    );
  }

  // ── JEU ───────────────────────────────────────────────────
  const isCorrect = phase === "correct";
  const isRevealed = phase === "revealed";
  const flagGlow = isCorrect ? "drop-shadow(0 0 24px #2a9d5c99)" : isRevealed ? "drop-shadow(0 0 24px #e6394699)" : "none";
  const dots = Array.from({ length: MAX_WRONG }).map((_, i) => i < wrongCount);

  return (
    <div style={S.root}>
      {/* Progress bar */}
      <div style={{ width:"100%", height:3, background:"#1a1a2e", position:"fixed", top:0, left:0, zIndex:10 }}>
        <div style={{ height:"100%", width:`${progress}%`, background:"#c8a84b", transition:"width 0.5s ease" }} />
      </div>

      {/* Header */}
      <div style={{ display:"flex", justifyContent:"space-between", width:"100%", maxWidth:480, padding:"20px 0 8px" }}>
        <span style={S.muted}>{idx + 1} / {queue.length}</span>
        <span style={{ fontFamily:"'DM Sans',sans-serif", color:"#c8a84b", fontSize:13, fontWeight:700 }}>
          {score} / {maxScore} pts
        </span>
      </div>

      <div style={{ ...S.card, width:"100%", maxWidth:480 }}>

        {/* Drapeau */}
        <div style={{ fontSize:"clamp(80px,20vw,110px)", lineHeight:1, filter:flagGlow, transition:"filter 0.3s", marginBottom:4 }}>
          {current?.flag}
        </div>

        {/* Pastilles */}
        <div style={{ display:"flex", gap:6, marginBottom:12 }}>
          {dots.map((used, i) => (
            <div key={i} style={{ width:8, height:8, borderRadius:"50%", background: used ? "#e63946" : "#1e1e2e", border:"1px solid #333", transition:"background 0.2s" }} />
          ))}
        </div>

        {/* Indices */}
        <div style={{ width:"100%", display:"flex", flexDirection:"column", gap:6, marginBottom:10 }}>
          {wrongCount >= 1 && (
            <HintBox icon="📏" label="Longueur">
              <span style={{ fontFamily:"monospace", fontSize:14, letterSpacing:3, color:"#f4a261" }}>{hintLength(current.name)}</span>
            </HintBox>
          )}
          {wrongCount >= 2 && (
            <HintBox icon="🏛️" label="Capitale">
              <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:14, color:"#f4a261" }}>{current.capital}</span>
            </HintBox>
          )}
          {wrongCount >= 3 && (
            <HintBox icon="🔤" label="Initiales">
              <span style={{ fontFamily:"monospace", fontSize:14, letterSpacing:2, color:"#f4a261" }}>{hintInitials(current.name)}</span>
            </HintBox>
          )}
          {wrongCount >= 4 && (
            <HintBox icon="🔚" label="Fin du mot">
              <span style={{ fontFamily:"monospace", fontSize:14, letterSpacing:2, color:"#f4a261" }}>{hintEnding(current.name)}</span>
            </HintBox>
          )}
        </div>

        {/* Feedback */}
        {isCorrect && (
          <div style={{ color:"#2a9d5c", fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:700, marginBottom:6 }}>
            ✓ {current.name} — <span style={{ color:"#c8a84b" }}>+{PTS[wrongCount - (wrongCount > 0 ? 0 : 0)] ?? 1} pts</span>
          </div>
        )}
        {isRevealed && (
          <div style={{ color:"#e63946", fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:700, marginBottom:6 }}>
            ✗ C'était : <span style={{ color:"#fff" }}>{current.name}</span>
          </div>
        )}

        {/* Input */}
        {phase === "playing" && (
          <>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Quel pays ?"
              style={{
                width:"100%", background:"#111118",
                border:"1px solid #2a2a3a", borderRadius:4,
                padding:"12px 16px", color:"#fff", fontSize:16,
                fontFamily:"'DM Sans',sans-serif", outline:"none",
                boxSizing:"border-box", marginBottom:10,
              }}
            />
            <div style={{ display:"flex", gap:8, width:"100%" }}>
              <button onClick={checkAnswer} style={{ ...S.btn, flex:1 }}>VALIDER</button>
              <button onClick={skip} style={S.btnGhost}>PASSER</button>
            </div>
          </>
        )}
      </div>

      {/* Historique */}
      {results.length > 0 && (
        <div style={{ display:"flex", gap:4, flexWrap:"wrap", justifyContent:"center", marginTop:14, maxWidth:480, width:"100%" }}>
          {results.map((r, i) => (
            <span key={i} title={`${r.team.name} — ${r.pts} pts`} style={{ fontSize:16 }}>
              {r.pts === 5 ? "🟢" : r.pts === 0 ? "🔴" : "🟡"}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

const S = {
  root: { minHeight:"100vh", background:"#0a0a0f", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 16px", fontFamily:"'Bebas Neue',Impact,sans-serif" },
  card: { background:"#0f0f1a", border:"1px solid #1e1e2e", borderRadius:8, padding:"28px 22px", display:"flex", flexDirection:"column", alignItems:"center" },
  bigTitle: { fontSize:"clamp(32px,8vw,56px)", color:"#fff", margin:"0 0 4px", letterSpacing:4, lineHeight:1 },
  gold: { fontSize:13, letterSpacing:4, color:"#c8a84b", margin:0, fontFamily:"'DM Sans',sans-serif" },
  muted: { fontFamily:"'DM Sans',sans-serif", color:"#555", fontSize:12, margin:"6px 0 0", textAlign:"center" },
  hintLegend: { width:"100%", display:"flex", flexDirection:"column", gap:5 },
  hintRow: { display:"flex", alignItems:"center", gap:10, fontFamily:"'DM Sans',sans-serif", fontSize:12, color:"#555" },
  pts: { fontFamily:"'Bebas Neue',Impact,sans-serif", fontSize:14, color:"#c8a84b", minWidth:36 },
  btn: { background:"#c8a84b", color:"#000", border:"none", borderRadius:4, padding:"11px", fontSize:14, letterSpacing:2, fontFamily:"'Bebas Neue',Impact,sans-serif", cursor:"pointer", fontWeight:700, width:"100%" },
  btnGhost: { background:"transparent", color:"#666", border:"1px solid #2a2a3a", borderRadius:4, padding:"11px 16px", fontSize:14, letterSpacing:2, fontFamily:"'Bebas Neue',Impact,sans-serif", cursor:"pointer" },
};
