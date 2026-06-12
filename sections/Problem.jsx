// Shift10 Landingpage — Problem section
// Centered intro + 3 animated cards. Each card has a distinct micro-animation
// that reinforces its message:
//  - Card 1: mono backdrop scrolls slowly + blinking cursor (stalled / waiting)
//  - Card 2: mono terms fade in/out in sequence (forgotten / dissolves)
//  - Card 3: redaction bars sweep across mono terms (regulated / blocked)
// Medallions float; cards lift on hover.
function ProblemSection() {
  const items = [
    {
      title: "Mitarbeitende nutzen KI: aber gibt es konkrete Vorgaben?",
      body: "Eure Mitarbeitenden nutzen täglich ChatGPT etc. aber meistens ohne klare Vorgaben, welche Daten rein dürfen. Im schlimmsten Fall drohen Klagen wegen Rechtsverletzungen.",
      anim: "stalled",
      icon: (c) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
          <circle cx="12" cy="12" r="9" />
          <rect x="9" y="8" width="2" height="8" fill={c} stroke="none" />
          <rect x="13" y="8" width="2" height="8" fill={c} stroke="none" />
        </svg>
      ),
      bgText: ["AI rollout: 0%", "blocked by IT", "no policy yet", "DSG unclear", "we'll see in Q4", "ChatGPT?", "still waiting", "no budget", "ROI unclear", "tabled again"],
    },
    {
      title: "Der KI-Vortrag war top: aber habt ihr danach etwas umgesetzt? ",
      body: "Zwischen Zuhören und Anwenden steht eine Hürde: Wo anfangen? Welches Tool, welches Abo? Keine Zeit gehabt etwas Auszuprobieren? Also blieb weiterhin alles beim Alten.",
      anim: "fade",
      icon: (c) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
          <rect x="3" y="5" width="18" height="12" rx="1" />
          <path d="M3 9h18M8 17v3M16 17v3M9 20h6" />
        </svg>
      ),
      bgText: ["Slide 12/48", "Q&A 2 min", "key takeaways", "thanks!", "follow up?", "no recording", "we'll circle back", "next quarter", "ping me later", "synergies", "circle back"],
    },
    {
      title: "Die KI-Welt dreht sich zu schnell: aber was ist wirklich relevant? ",
      body: "Jede Woche ein neues Tool, ein neuer Hype. Die eigentliche Frage geht unter: Wo bringt KI eurem Betrieb wirklich etwas respektive wo ist der persönliche Draht zum Kunden mehr wert?",
      anim: "redact",
      icon: (c) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
          <rect x="5" y="11" width="14" height="9" rx="1.5" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          <path d="M12 14v3M10.5 15.5h3" stroke={c} strokeWidth="1.4" />
        </svg>
      ),
      bgText: ["DSG Art. 4", "PII", "Cloud-EU?", "Bank-Geheimnis", "Region: CH", "training data", "Auftragsbearbeitung", "TOMs", "Datenresidenz", "Klassifizierung"],
    },
  ];

  // Build the line list once per card (deterministic)
  const buildLines = (words, n = 18) =>
    Array.from({ length: n }).map((_, i) => ({
      id: i,
      text: `${words[i % words.length]} ${words[(i * 3 + 1) % words.length]} ${words[(i * 5 + 2) % words.length]}`,
    }));

  // ─── Animation 1: scrolling mono text + blinking cursor ───
  const StalledBackdrop = ({ words }) => {
    const lines = buildLines(words, 24);
    return (
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, overflow: "hidden",
        maskImage: "linear-gradient(180deg, #000 0%, #000 35%, transparent 75%)",
        WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 35%, transparent 75%)",
        pointerEvents: "none",
      }}>
        <div style={{
          padding: 18,
          fontFamily: "var(--font-mono)",
          fontSize: 11, lineHeight: 1.7,
          color: "var(--color-neutral-400)",
          opacity: 0.22,
          animation: "s10-scroll-up 26s linear infinite",
        }}>
          {[...lines, ...lines].map((l, i) => (
            <div key={i}>
              {l.text}
              {i % 9 === 4 && (
                <span style={{
                  display: "inline-block", marginLeft: 4,
                  width: 6, height: 11, background: "var(--color-accent)",
                  verticalAlign: "middle",
                  animation: "s10-blink 1.1s steps(2) infinite",
                }} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // ─── Animation 2: each mono line fades in + out in sequence ───
  const FadeBackdrop = ({ words }) => {
    const lines = buildLines(words, 14);
    return (
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, overflow: "hidden",
        maskImage: "linear-gradient(180deg, #000 0%, #000 35%, transparent 75%)",
        WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 35%, transparent 75%)",
        pointerEvents: "none",
      }}>
        <div style={{
          padding: 18,
          fontFamily: "var(--font-mono)",
          fontSize: 11, lineHeight: 1.85,
          color: "var(--color-neutral-400)",
        }}>
          {lines.map((l, i) => (
            <div key={i} style={{
              opacity: 0.22,
              animation: `s10-flicker 7s ease-in-out ${i * 0.35}s infinite`,
            }}>{l.text}</div>
          ))}
        </div>
      </div>
    );
  };

  // ─── Animation 3: redaction bars sweep across mono lines ───
  const RedactBackdrop = ({ words }) => {
    const lines = buildLines(words, 14);
    return (
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, overflow: "hidden",
        maskImage: "linear-gradient(180deg, #000 0%, #000 35%, transparent 75%)",
        WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 35%, transparent 75%)",
        pointerEvents: "none",
      }}>
        <div style={{
          padding: 18,
          fontFamily: "var(--font-mono)",
          fontSize: 11, lineHeight: 1.85,
          color: "var(--color-neutral-400)",
          opacity: 0.7,
        }}>
          {lines.map((l, i) => (
            <div key={i} style={{ position: "relative", display: "block", width: "fit-content", maxWidth: "92%" }}>
              <span style={{ opacity: 0.32 }}>{l.text}</span>
              {/* redaction bar */}
              <span style={{
                position: "absolute", top: -1, left: 0, height: "100%",
                width: "100%",
                background: "var(--color-black)",
                animation: `s10-redact 6s ease-in-out ${i * 0.45}s infinite`,
                transformOrigin: "left center",
                transform: "scaleX(0)",
              }} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBackdrop = (it) => {
    if (it.anim === "stalled") return <StalledBackdrop words={it.bgText} />;
    if (it.anim === "fade")    return <FadeBackdrop words={it.bgText} />;
    if (it.anim === "redact")  return <RedactBackdrop words={it.bgText} />;
    return null;
  };

  return (
    <section id="problem" className="section section--bone" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <style>{`
        @keyframes s10-scroll-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes s10-blink {
          0%, 50%   { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
        @keyframes s10-flicker {
          0%, 100%   { opacity: 0.05; }
          15%, 35%   { opacity: 0.32; }
          55%, 75%   { opacity: 0.12; }
        }
        @keyframes s10-redact {
          0%   { transform: scaleX(0); opacity: 0; }
          12%  { transform: scaleX(0); opacity: 0; }
          24%  { transform: scaleX(1); opacity: 1; }
          74%  { transform: scaleX(1); opacity: 1; }
          88%  { transform: scaleX(0); opacity: 0; transform-origin: right center; }
          100% { transform: scaleX(0); opacity: 0; }
        }
        @keyframes s10-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        .s10-problem-card {
          transition: transform 400ms var(--ease-out), box-shadow 400ms var(--ease-out), border-color 400ms var(--ease-out);
        }
        .s10-problem-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 40px rgba(0,0,0,0.06);
          border-color: var(--color-neutral-300, #d6d4ce);
        }
        .s10-problem-medallion {
          animation: s10-float 5.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .s10-problem-medallion,
          [class*="s10"] *,
          .s10-problem-card * {
            animation: none !important;
          }
        }
      `}</style>

      <div className="container">
        {/* Centered intro */}
        <div style={{ textAlign: "center", maxWidth: 720, marginInline: "auto" }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "var(--color-neutral-500)",
          }}>Hand aufs Herz</div>
          <h2 className="display display--md" style={{
            marginTop: 16, fontWeight: 500,
            fontSize: "clamp(36px, 4vw, 56px)",
            letterSpacing: "-0.025em",
            textWrap: "balance",
          }}>Kommt euch das im Geschäftsalltag bekannt vor?</h2>
        </div>

        {/* 3-card grid */}
        <div style={{
          marginTop: 64,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
        }} className="s10-grid-3">
          {items.map((it, idx) => (
            <div key={idx} className="s10-problem-card" style={{
              position: "relative",
              background: "var(--color-white)",
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid var(--color-neutral-200)",
              minHeight: 340,
              display: "flex",
              flexDirection: "column",
            }}>
              {/* + corner */}
              <div style={{
                position: "absolute", top: 14, right: 14,
                width: 26, height: 26, borderRadius: "50%",
                background: "var(--color-neutral-100, #f3f3f1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--color-neutral-500)",
                fontSize: 18, fontWeight: 300, lineHeight: 1,
                zIndex: 3,
              }}>+</div>

              {/* Visual area */}
              <div style={{
                position: "relative",
                flex: "1 1 auto",
                minHeight: 200,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {renderBackdrop(it)}
                {/* Medallion */}
                <div className="s10-problem-medallion" style={{
                  position: "relative", zIndex: 2,
                  width: 86, height: 86, borderRadius: "50%",
                  background: "var(--color-white)",
                  boxShadow: "0 1px 0 rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.06)",
                  border: "1px solid var(--color-neutral-200)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  animationDelay: `${idx * 0.6}s`,
                }}>
                  <div style={{ width: 36, height: 36, color: "var(--color-accent)" }}>
                    {it.icon("currentColor")}
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div style={{ padding: "20px 22px 24px" }}>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em",
                  lineHeight: 1.3, margin: 0,
                  color: "var(--color-black)",
                }}>{it.title}</h3>
                <p style={{
                  marginTop: 8,
                  fontSize: 14, lineHeight: 1.55,
                  color: "var(--color-neutral-500)",
                }}>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { ProblemSection });
