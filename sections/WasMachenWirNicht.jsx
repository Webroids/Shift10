// Shift10 Landingpage — Was machen wir nicht?
// Dark section mirroring Process style: 3 cards with custom animations
//  - 01 Wir verkaufen euch nichts → price tag with no-sale strike
//  - 02 Wir betreiben keine KI-Lösungen → server rack powering off
//  - 03 Wir schulen nicht im Dauerbetrieb → calendar with partner handoff
function WasMachenWirNichtSection() {

  // ─── Animation 1: floating price tags that get struck through ───
  const NoSaleBackdrop = () => (
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, overflow: "hidden",
      maskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
      WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
      pointerEvents: "none"
    }}>
      <svg viewBox="0 0 220 150" preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%", opacity: 0.65 }}>
        {/* Price tag shapes */}
        {[
          { x: 20, y: 18, label: "CHF 0", d: 0.0 },
          { x: 80, y: 42, label: "€ 0",   d: 0.5 },
          { x: 148, y: 14, label: "$ 0",  d: 1.0 },
          { x: 38, y: 82, label: "£ 0",   d: 1.5 },
          { x: 160, y: 72, label: "¥ 0",  d: 2.0 },
        ].map((t, i) => (
          <g key={i} style={{ animation: `wmwn-float 4.5s ease-in-out ${t.d}s infinite` }}>
            {/* tag body */}
            <rect x={t.x} y={t.y} width={42} height={20} rx="3"
              fill="rgba(0,0,0,0.03)" stroke="rgba(0,0,0,0.12)" strokeWidth="0.6" />
            {/* hole */}
            <circle cx={t.x + 5} cy={t.y + 10} r="2"
              fill="none" stroke="rgba(0,0,0,0.18)" strokeWidth="0.6" />
            {/* label */}
            <text x={t.x + 12} y={t.y + 13.5}
              fontFamily="monospace" fontSize="7" fill="rgba(0,0,0,0.35)">{t.label}</text>
            {/* strike */}
            <line x1={t.x + 2} y1={t.y + 10} x2={t.x + 40} y2={t.y + 10}
              stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round"
              style={{ animation: `wmwn-strike-draw 3s ease-in-out ${t.d + 0.4}s infinite` }} />
          </g>
        ))}
        {/* Handshake icon bottom center */}
        <g transform="translate(90, 95)" opacity="0.18">
          <path d="M5 10c3-3 7-3 10 0l5-5" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" strokeLinecap="round"/>
          <path d="M20 5c3 3 3 7 0 10" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="none" strokeLinecap="round"/>
        </g>
      </svg>
    </div>
  );

  // ─── Animation 2: server rack — processes shutting down one by one ───
  const NoServerBackdrop = () => (
    <div aria-hidden="true" style={{
      position: "absolute", inset: 0, overflow: "hidden",
      maskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
      WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 50%, transparent 90%)",
      pointerEvents: "none",
      display: "flex", alignItems: "flex-start", justifyContent: "center",
      paddingTop: 16
    }}>
      <svg viewBox="0 0 160 130" preserveAspectRatio="xMidYMid meet"
        style={{ width: "70%", height: "70%", opacity: 0.7 }}>
        {/* Server rows */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(0, ${i * 22})`}>
            <rect x="8" y="4" width="144" height="16" rx="2"
              fill="rgba(0,0,0,0.02)" stroke="rgba(0,0,0,0.10)" strokeWidth="0.6" />
            {/* LED indicator — goes off with delay */}
            <circle cx="20" cy="12" r="2.5"
              fill="var(--color-accent)"
              style={{ animation: `wmwn-led-off 6s ease-in-out ${i * 0.7}s infinite` }} />
            {/* Activity bars */}
            {[0,1,2,3].map((b) => (
              <rect key={b} x={34 + b * 18} y="8" width="12" height="8" rx="1"
                fill="rgba(0,0,0,0.06)"
                style={{ animation: `wmwn-bar-off 6s ease-in-out ${i * 0.7 + b * 0.15}s infinite` }} />
            ))}
          </g>
        ))}
        {/* Power symbol at bottom */}
        <g transform="translate(68, 118)" opacity="0.3">
          <circle cx="12" cy="12" r="8" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeDasharray="3 3"/>
          <line x1="12" y1="4" x2="12" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
        </g>
      </svg>
    </div>
  );

  // ─── Animation 3: calendar — months cycle with partner logo stamps ───
  const NoTrainingBackdrop = () => {
    const months = ["JAN", "FEB", "MRZ", "APR", "MAI", "JUN"];
    const partners = ["ZHAW", "Suisse AI", "Partner"];
    return (
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, overflow: "hidden",
        maskImage: "linear-gradient(180deg, #000 0%, #000 40%, transparent 90%)",
        WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 40%, transparent 90%)",
        pointerEvents: "none",
        padding: "18px 20px"
      }}>
        {/* Calendar grid */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {months.map((m, i) => (
            <div key={i} style={{
              width: 54, height: 44, borderRadius: 6,
              border: "1px solid rgba(0,0,0,0.08)",
              background: "rgba(0,0,0,0.025)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 3,
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 9,
                letterSpacing: "0.12em", color: "rgba(0,0,0,0.3)"
              }}>{m}</div>
              {/* Partner badge on some months */}
              {i % 2 === 0 && (
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 7.5,
                  color: "var(--color-accent)",
                  letterSpacing: "0.06em",
                  animation: `wmwn-badge-pop 4s ease-in-out ${i * 0.4}s infinite`
                }}>{partners[i % partners.length]}</div>
              )}
              {/* Arrow pointing to partner */}
              {i % 2 !== 0 && (
                <div style={{
                  fontSize: 10, color: "rgba(0,0,0,0.2)",
                  animation: `wmwn-arrow-pulse 4s ease-in-out ${i * 0.4}s infinite`
                }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const cards = [
    {
      n: "01",
      title: "Wir verkaufen euch nichts.",
      eyebrow: "UNABHÄNGIG",
      body: "Wir zeigen, was in der KI gerade möglich ist — ob ihr aktiv werdet, entscheidet ihr. An keinem Tool verdienen wir mit, darum ist unsere Empfehlung unabhängig.",
      icon: (c) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      ),
      Backdrop: NoSaleBackdrop
    },
    {
      n: "02",
      title: "Wir betreiben keine KI-Lösungen.",
      eyebrow: "PARTNER-NETZWERK",
      body: "Eine produktive Lösung bauen, betreiben und supporten braucht ein dediziertes Team. Für massgeschneiderte Make-Softwarelösungen arbeiten wir mit Partnern wie der Suisse AI zusammen.",
      icon: (c) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      Backdrop: NoServerBackdrop
    },
    {
      n: "03",
      title: "Wir schulen nicht im Dauerbetrieb.",
      eyebrow: "WEITERFÜHREND",
      body: "Aufbauend auf unseren Konzepten übernimmt ein Partner wie die ZHAW die laufenden Schulungen. So wird auch in grösseren KMU jede Berufsgruppe auf ihrem Niveau regelmässig abgeholt — z. B. an monatlichen AI-Welcome Days.",
      icon: (c) => (
        <svg viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
        </svg>
      ),
      Backdrop: NoTrainingBackdrop
    }
  ];

  return (
    <section id="was-machen-wir-nicht" className="section" style={{ paddingTop: 120, paddingBottom: 120, background: "var(--color-accent)" }}>
      <style>{`
        @keyframes wmwn-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes wmwn-strike-draw {
          0%, 20%  { stroke-dasharray: 0 60; opacity: 0; }
          50%, 80% { stroke-dasharray: 60 0; opacity: 1; }
          100%     { stroke-dasharray: 0 60; opacity: 0; }
        }
        @keyframes wmwn-led-off {
          0%, 30%  { fill: var(--color-accent); opacity: 1; }
          50%, 100%{ fill: rgba(0,0,0,0.08); opacity: 0.4; }
        }
        @keyframes wmwn-bar-off {
          0%, 30%  { fill: rgba(255,77,0,0.3); }
          50%, 100%{ fill: rgba(0,0,0,0.06); }
        }
        @keyframes wmwn-badge-pop {
          0%, 20%  { opacity: 0; transform: scale(0.7); }
          35%, 70% { opacity: 1; transform: scale(1); }
          90%, 100%{ opacity: 0; transform: scale(0.7); }
        }
        @keyframes wmwn-arrow-pulse {
          0%, 100% { opacity: 0.15; }
          50%      { opacity: 0.6; color: rgba(255,77,0,0.7); }
        }
        @keyframes wmwn-medal-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-6px); }
        }
        .wmwn-card {
          transition: transform 400ms var(--ease-out, cubic-bezier(0,0,0.2,1)),
                      border-color 400ms var(--ease-out, cubic-bezier(0,0,0.2,1));
        }
        .wmwn-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.12);
        }
        @media (prefers-reduced-motion: reduce) {
          .wmwn-card *, [style*="wmwn"] { animation: none !important; }
        }
      `}</style>

      <div className="dotgrid" style={{ color: "rgba(255,255,255,0.35)" }} />

      <div className="container" style={{ position: "relative" }}>

        {/* Centered intro */}
        <div style={{ textAlign: "center", maxWidth: 720, marginInline: "auto" }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.6)"
          }}>Klarheit · Scope</div>
          <h2 style={{
            marginTop: 16, fontWeight: 500,
            fontSize: "clamp(36px, 4vw, 56px)",
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.025em",
            textWrap: "balance",
            color: "var(--color-white)"
          }}>Was machen wir nicht?</h2>
          <p style={{
            marginTop: 20, fontSize: 16, color: "rgba(255,255,255,0.8)",
            maxWidth: 540, marginInline: "auto", lineHeight: 1.65
          }}>Klare Grenzen schaffen echtes Vertrauen — und zeigen, wo wir mit starken Partnern übergeben.</p>
        </div>

        {/* 3-card grid */}
        <div style={{
          marginTop: 64,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16
        }} className="s10-grid-3">
          {cards.map(function(card, idx) {
            return (
              <div key={idx} className="wmwn-card" style={{
                position: "relative",
                background: "var(--color-white)",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
                minHeight: 380,
                display: "flex",
                flexDirection: "column"
              }}>
                {/* Step number */}
                <div style={{
                  position: "absolute", top: 14, right: 16,
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  letterSpacing: "0.12em",
                  color: "var(--color-neutral-400)",
                  zIndex: 3
                }}>{card.n}</div>

                {/* Visual area */}
                <div style={{
                  position: "relative",
                  flex: "1 1 auto",
                  minHeight: 220,
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  <card.Backdrop />
                  {/* Medallion */}
                  <div style={{
                    position: "relative", zIndex: 2,
                    width: 86, height: 86, borderRadius: "50%",
                    background: "var(--color-accent)",
                    boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 14px 40px rgba(255,77,0,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    animation: `wmwn-medal-float 5.5s ease-in-out ${idx * 0.6}s infinite`
                  }}>
                    <div style={{ width: 36, height: 36, color: "var(--color-white)" }}>
                      {card.icon("currentColor")}
                    </div>
                  </div>
                </div>

                {/* Copy */}
                <div style={{ padding: "20px 22px 26px" }}>
                  <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 11,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    color: "var(--color-neutral-400)",
                    marginBottom: 10
                  }}>{card.eyebrow}</div>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em",
                    lineHeight: 1.15, margin: 0,
                    color: "var(--color-black)"
                  }}>{card.title}</h3>
                  <p style={{
                    marginTop: 12,
                    fontSize: 14, lineHeight: 1.6,
                    color: "var(--color-neutral-600)"
                  }}>{card.body}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

Object.assign(window, { WasMachenWirNichtSection });
