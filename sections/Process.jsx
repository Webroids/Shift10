// Shift10 Landingpage — So funktioniert's (process)
// Dark-mode mirror of the Problem section: centered intro + 3 cards, each with
// a step-appropriate animation:
//  - 01 Verstehen   → process map: nodes pulse in sequence + traveling signal (analyzing)
//  - 02 Ausprobieren → terminal: commands type, run, scroll up (testing on the machine)
//  - 03 Einführen    → checklist: items get checked off one by one (autonomous launch)
function ProcessSection() {
  const steps = [
  {
    n: "01",
    verb: "Verstehen",
    cta: "Workshop buchen",
    body: "Was KI 2026 wirklich kann, wo die Grenzen liegen und welche Tools sich lohnen — mit klarem Blick auf Chancen und Risiken.",
    meta: ["2× Freitagnachmittag", "Vor Ort", "Auf euch Abgestimmt"],
    anim: "map",
    icon: (c) =>
    <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="6" r="2" />
          <circle cx="19" cy="6" r="2" />
          <circle cx="5" cy="18" r="2" />
          <circle cx="19" cy="18" r="2" />
          <path d="M7 6h10M7 18h10M5 8v8M19 8v8" />
        </svg>

  },
  {
    n: "02",
    verb: "Ausprobieren",
    cta: "Workshop",
    body: "KI praxisorientiert anwenden und Anwendungsfälle umsetzen - KI Enabling in einer Schulung mit entsprechenden Hilfestellungen für jedes Level.",
    meta: ["1 Woche im Office", "10+ Premium-Tools", "Kein Abo nötig"],
    anim: "terminal",
    icon: (c) =>
    <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="1.5" />
          <path d="M7 9l3 2.5L7 14" />
          <path d="M12 14h5" />
          <path d="M3 18l4 3h10l4-3" />
        </svg>

  },
  {
    n: "03",
    verb: "Einführen",
    cta: "Roadmap",
    body: "Euer Team erhält ein Big Picture wie Ihr gemeinsam mit Eurer IT in die KI-Welt einsteigen könnt.\n\n",
    meta: ["Eigene Roadmap erstellen", "KI Reifegrade und Fähigkeiten", "Optional: Konzepte und Enabling-Massnahmen"],
    anim: "checklist",
    icon: (c) =>
    <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6l3 3 6-6" />
          <path d="M4 14l3 3 6-6" />
          <path d="M14 8h6M14 16h6" />
        </svg>

  }];


  // ─── Animation 1: process map — nodes pulse + signal travels along edges ───
  const MapBackdrop = () => {
    // 6 nodes laid out as a small graph; lines are stroke-dashed signals
    const nodes = [
    { x: 28, y: 30, d: 0.0 },
    { x: 92, y: 60, d: 0.4 },
    { x: 156, y: 30, d: 0.8 },
    { x: 60, y: 110, d: 1.6 },
    { x: 124, y: 110, d: 2.0 },
    { x: 188, y: 80, d: 2.4 }];

    const edges = [
    [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [2, 5]];

    return (
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, overflow: "hidden",
        maskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
        WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
        pointerEvents: "none"
      }}>
        <svg viewBox="0 0 220 150" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", opacity: 0.7 }}>
          {/* edges */}
          {edges.map(([a, b], i) => {
            const A = nodes[a],B = nodes[b];
            return (
              <g key={i}>
                <line x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
                <line x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                stroke="var(--color-accent)" strokeWidth="0.9"
                strokeDasharray="4 30" strokeLinecap="round"
                style={{ animation: `s10p-signal 4.5s linear ${i * 0.35}s infinite` }} />
              </g>);

          })}
          {/* nodes */}
          {nodes.map((n, i) =>
          <g key={i}>
              <circle cx={n.x} cy={n.y} r="6"
            fill="rgba(255,255,255,0.05)"
            stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
              <circle cx={n.x} cy={n.y} r="2.4"
            fill="var(--color-accent)"
            style={{ animation: `s10p-pulse 2.4s ease-in-out ${n.d}s infinite`, transformOrigin: `${n.x}px ${n.y}px` }} />
            </g>
          )}
        </svg>
      </div>);

  };

  // ─── Animation 2: terminal — commands type, run, scroll up ───
  const TerminalBackdrop = () => {
    const lines = [
    { p: "$ ", c: "tools/list --premium", t: 0, o: "» 12 tools available" },
    { p: "$ ", c: "demo run \"invoice-extract\"", t: 1.2, o: "» extracted 47 fields" },
    { p: "$ ", c: "compare gpt-4 claude llama", t: 2.6, o: "» benchmark complete" },
    { p: "$ ", c: "deploy --pilot team-finance", t: 4.0, o: "» pilot active" },
    { p: "$ ", c: "metrics --week", t: 5.4, o: "» 6.2h saved / user" }];

    return (
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, overflow: "hidden",
        maskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
        WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
        pointerEvents: "none"
      }}>
        <div style={{
          padding: 18,
          fontFamily: "var(--font-mono)",
          fontSize: 11, lineHeight: 1.85,
          color: "rgba(255,255,255,0.55)"
        }}>
          {lines.map((l, i) =>
          <div key={i} style={{
            opacity: 0,
            animation: `s10p-typeline 7s ease-in-out ${l.t}s infinite`
          }}>
              <span style={{ color: "var(--color-accent)" }}>{l.p}</span>
              <span>{l.c}</span>
              <div style={{ paddingLeft: 14, color: "rgba(255,255,255,0.32)" }}>{l.o}</div>
            </div>
          )}
        </div>
      </div>);

  };

  // ─── Animation 3: checklist — items get checked off one by one ───
  const ChecklistBackdrop = () => {
    const items = [
    "KI-Policy verabschiedet",
    "Tool-Stack ausgewählt",
    "Champions im Team benannt",
    "Use-Cases dokumentiert",
    "DSG-Check abgeschlossen",
    "Onboarding für 12 Personen",
    "Roadmap für Q1 fix",
    "Eigenes Prompt-Playbook"];

    return (
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, overflow: "hidden",
        maskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
        WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
        pointerEvents: "none"
      }}>
        <div style={{
          padding: "18px 18px",
          fontFamily: "var(--font-mono)",
          fontSize: 11, lineHeight: 1.6,
          color: "rgba(255,255,255,0.45)",
          display: "flex", flexDirection: "column", gap: 6
        }}>
          {items.map((it, i) =>
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, position: "relative" }}>
              <span style={{
              width: 11, height: 11, border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 2, position: "relative", flexShrink: 0,
              animation: `s10p-checkbox 9s ease-in-out ${i * 0.6}s infinite`
            }}>
                <span style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--color-accent)", fontSize: 13, fontWeight: 700, lineHeight: 1,
                opacity: 0,
                animation: `s10p-checkmark 9s ease-in-out ${i * 0.6}s infinite`
              }}>✓</span>
              </span>
              <span style={{
              animation: `s10p-strike 9s ease-in-out ${i * 0.6}s infinite`,
              position: "relative"
            }}>{it}</span>
            </div>
          )}
        </div>
      </div>);

  };

  const renderBackdrop = (s) => {
    if (s.anim === "map") return <MapBackdrop />;
    if (s.anim === "terminal") return <TerminalBackdrop />;
    if (s.anim === "checklist") return <ChecklistBackdrop />;
    return null;
  };

  return (
    <section id="so-funktionierts" className="section section--ink" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <style>{`
        @keyframes s10p-signal {
          0%   { stroke-dashoffset: 34; opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes s10p-pulse {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50%      { transform: scale(1.8); opacity: 1; }
        }
        @keyframes s10p-typeline {
          0%, 5%   { opacity: 0; transform: translateY(6px); }
          12%, 70% { opacity: 1; transform: translateY(0); }
          90%, 100%{ opacity: 0; transform: translateY(-6px); }
        }
        @keyframes s10p-checkbox {
          0%, 30%   { background: transparent; border-color: rgba(255,255,255,0.25); }
          45%, 100% { background: var(--color-accent); border-color: var(--color-accent); }
        }
        @keyframes s10p-checkmark {
          0%, 35%   { opacity: 0; transform: scale(0.5); }
          45%, 100% { opacity: 1; transform: scale(1); color: var(--color-black); }
        }
        @keyframes s10p-strike {
          0%, 35%   { opacity: 0.45; color: rgba(255,255,255,0.45); }
          50%, 100% { opacity: 0.85; color: rgba(255,255,255,0.85); }
        }
        @keyframes s10p-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        .s10p-card {
          transition: transform 400ms var(--ease-out), border-color 400ms var(--ease-out), background 400ms var(--ease-out);
        }
        .s10p-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.025);
        }
        .s10p-medallion {
          animation: s10p-float 5.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .s10p-medallion,
          [class*="s10p"] *,
          .s10p-card * {
            animation: none !important;
          }
        }
      `}</style>

      <div className="dotgrid" style={{ color: "var(--color-white)" }} />

      <div className="container" style={{ position: "relative" }}>
        {/* Centered intro */}
        <div style={{ textAlign: "center", maxWidth: 720, marginInline: "auto" }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "var(--color-neutral-500)"
          }}>So funktioniert's</div>
          <h2 className="display display--md" style={{
            marginTop: 16, fontWeight: 500,
            fontSize: "clamp(36px, 4vw, 56px)",
            letterSpacing: "-0.025em",
            textWrap: "balance",
            color: "var(--color-white)"
          }}>Ihr baut KI-Know-how selbst auf.</h2>
          <p className="lead" style={{
            marginTop: 20, fontSize: 16, color: "var(--color-neutral-400)",
            maxWidth: 540, marginInline: "auto"
          }}>Nur so kommt euer KMU wirklich voran. Mit unserem Fachwissen und methodischem Vorgehen legen wir das Fundament — darauf baut ihr selbst weiter auf.</p>
        </div>

        {/* 3-card grid */}
        <div style={{
          marginTop: 64,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16
        }} className="s10-grid-3">
          {steps.map((s, idx) =>
          <div key={idx} className="s10p-card" style={{
            position: "relative",
            background: "rgba(255,255,255,0.015)",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.10)",
            minHeight: 380,
            display: "flex",
            flexDirection: "column"
          }}>
              {/* step number — corner */}
              <div style={{
              position: "absolute", top: 14, right: 16,
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.12em",
              color: "var(--color-accent)",
              zIndex: 3
            }}>{s.n}</div>

              {/* Visual area */}
              <div style={{
              position: "relative",
              flex: "1 1 auto",
              minHeight: 220,
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
                {renderBackdrop(s)}
                {/* Medallion */}
                <div className="s10p-medallion" style={{
                position: "relative", zIndex: 2,
                width: 86, height: 86, borderRadius: "50%",
                background: "var(--color-black)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.10), 0 14px 40px rgba(0,0,0,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                animationDelay: `${idx * 0.6}s`
              }}>
                  <div style={{ width: 36, height: 36, color: "var(--color-accent)" }}>
                    {s.icon("currentColor")}
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div style={{ padding: "20px 22px 26px" }}>
                <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "var(--color-neutral-500)",
                marginBottom: 10
              }}>{s.cta}</div>
                <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em",
                lineHeight: 1.15, margin: 0,
                color: "var(--color-white)"
              }}>{s.verb}</h3>
                <p style={{
                marginTop: 12,
                fontSize: 14, lineHeight: 1.6,
                color: "var(--color-neutral-400)"
              }}>{s.body}</p>
              </div>
            </div>
          )}
        </div>
        {/* CTA block — Cloudflare-style centered banner */}
        <div
          className="s10-process-cta"
          onMouseMove={e => {
            const r = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;
            const dot = e.currentTarget.querySelector('.cta-dot-mouse');
            if (dot) dot.style.background = `radial-gradient(circle 180px at ${x}px ${y}px, rgba(255,255,255,0.22) 0%, transparent 100%)`;
          }}
          onMouseLeave={e => {
            const dot = e.currentTarget.querySelector('.cta-dot-mouse');
            if (dot) dot.style.background = 'none';
          }}
          style={{
            marginTop: 64,
            borderRadius: 20,
            background: "var(--color-accent)",
            padding: "72px 64px 80px",
            position: "relative",
            overflow: "hidden",
        }}>
          <style>{`
            @keyframes ctaFloat {
              0%, 100% { transform: translateY(0px) rotate(var(--r, 0deg)); }
              33%       { transform: translateY(-9px) rotate(var(--r, 0deg)); }
              66%       { transform: translateY(5px) rotate(var(--r, 0deg)); }
            }
            @keyframes ctaGlow {
              0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
              50%       { opacity: 0.6; transform: translateX(-50%) scale(1.18); }
            }
            @media (prefers-reduced-motion: reduce) {
              [style*="ctaFloat"], [style*="ctaGlow"] { animation: none !important; }
            }
          `}</style>
          {/* Depth gradient — lighter left where text is, darker right */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "linear-gradient(105deg, rgba(255,100,10,0.0) 0%, rgba(160,40,0,0.32) 100%)",
            zIndex: 0
          }} />
          {/* Dot texture overlay */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            zIndex: 0
          }} />

          {/* Mouse-reactive dot highlight */}
          <div className="cta-dot-mouse" style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            zIndex: 1, transition: "background 80ms ease-out"
          }} />

          {/* Glow behind the button — bottom-left */}
          <div style={{
            position: "absolute", bottom: -40, left: -20,
            width: 480, height: 280,
            background: "radial-gradient(ellipse at center, rgba(255,230,100,0.55) 0%, rgba(255,180,30,0.28) 40%, transparent 70%)",
            pointerEvents: "none", zIndex: 1,
            animation: "ctaGlow 3.5s ease-in-out infinite"
          }} />


          {/* Black gradient left→right for text readability */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.0) 100%)",
            zIndex: 1
          }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: 680 }}>
            <div style={{ marginBottom: 20 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "6px 14px",
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: 999,
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(4px)"
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.9)", display: "inline-block" }} />
                Jetzt verfügbar
              </span>
            </div>

            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 2.8vw, 40px)",
              fontWeight: 700, letterSpacing: "-0.03em",
              lineHeight: 1.1, margin: 0,
              color: "var(--color-white)",
              textWrap: "balance"
            }}>Noch unsicher, ob ihr unsere Hilfe braucht?</h3>

            <p style={{
              marginTop: 20, fontSize: 16, lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)"
            }}>
              Eure IT ist ja schon mit KI dran? Gut so. Wir ersetzen eure IT nicht, sondern unterstützen auf zwei Ebenen: Enabling und Business-IT-Alignment.
            </p>

            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10, maxWidth: 520 }}>
              {[
                "Operativ befähigen wir eure Mitarbeitenden, KI im Alltag gewinnbringend zu nutzen.",
                "Strategisch beraten wir euer Management und eure IT bei den richtigen Entwicklungspfaden, Reifegraden und konkreten Aktivitäten oder Anwendungsfällen."
              ].map((item, i) =>
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{
                    flexShrink: 0, marginTop: 4,
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    color: "rgba(255,255,255,0.55)", letterSpacing: "0.05em"
                  }}>{i + 1}.</span>
                  <span style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.85)" }}>{item}</span>
                </div>
              )}
            </div>

            <div style={{ marginTop: 40 }}>
              <a href="#kontakt" className="btn btn--primary">
                Kostenloses Erstgespräch <span className="btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>);

}

Object.assign(window, { ProcessSection });