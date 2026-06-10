// Shift10 Landingpage — Angebot (offer) — bento-style feature grid
// Three modules (Workshops / Vorträge / Maschine), each with:
//   - eyebrow product name
//   - tagline as headline
//   - description body
// No prices — that lives in #preise.
function AngebotSection() {
  return (
    <section id="angebot" className="section section--bone" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="container">
        {/* Centered intro */}
        <div style={{ textAlign: "center", maxWidth: 720, marginInline: "auto", marginBottom: 64 }}>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.16em",
            textTransform: "uppercase", color: "var(--color-neutral-500)"
          }}></div>
          <h2 style={{
            marginTop: 14,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 500, letterSpacing: "-0.03em",
            margin: 0, marginTop: 14,
            textWrap: "balance"
          }}>Zwei Wege, dein erster Touchpoint.

          </h2>
          <p style={{
            marginTop: 16,
            fontSize: 17, lineHeight: 1.55,
            color: "var(--color-neutral-500)",
            maxWidth: 580, marginInline: "auto"
          }}>Vom 45-Minuten-Vortrag bis zur Mac-Mini-Teststation, die eine Woche bei euch im Büro steht. Du wählst, wie du einsteigst.

          </p>
        </div>

        {/* Bento grid: 12 cols */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "minmax(0, auto)",
          gap: 14
        }} className="s10-bento">
          {/* CARD A — Workshops (tall, left) — the hero offer */}
          <div className="s10-bento-a" style={cardStyle({ col: "span 7", row: "span 2" })}>
            <div aria-hidden="true" style={{
              position: "absolute", inset: 0,
              backgroundImage: "linear-gradient(180deg, rgba(255,77,0,0.05) 0%, transparent 60%)",
              pointerEvents: "none"
            }} />
            {/* Dot field accent corner */}
            <div aria-hidden="true" style={{
              position: "absolute", top: 24, right: 24,
              width: 140, height: 100,
              backgroundImage: "radial-gradient(rgba(255,77,0,0.45) 1px, transparent 1px)",
              backgroundSize: "10px 10px",
              opacity: 0.5,
              pointerEvents: "none",
              maskImage: "radial-gradient(ellipse at top right, #000 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at top right, #000 30%, transparent 75%)"
            }} />

            <div style={{ position: "relative", padding: 32, display: "flex", flexDirection: "column", gap: 22, height: "100%" }}>
              {/* Icon tile */}
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: "var(--color-accent)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 8px 24px rgba(255,77,0,0.25)"
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="2" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M5 19l2-2" />
                </svg>
              </div>

              <div>
                <div style={eyebrowStyle}>KI-Workshops</div>
                <h3 style={taglineStyle}>"2 Freitage, die dein Team verändern."</h3>
                <p style={bodyStyle}>
                  Praxisworkshop an deinen echten Prozessen. 10+ kuratierte Apps. Danach: 1 Woche Mac-Mini-Teststation im Büro.
                </p>
              </div>

              <div style={{ flex: 1 }} />

              {/* Process strip */}
              <div className="s10-workshop-steps" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0,
                paddingTop: 16, borderTop: "1px solid var(--color-neutral-200)"
              }}>
                {[
                ["Tag 1", "Prozesse + Tools"],
                ["Tag 2", "Hands-on bauen"],
                ["Woche 3", "Testmaschine bei dir"]].
                map(([k, v], i) =>
                <div key={i} style={{
                  paddingLeft: i === 0 ? 0 : 16,
                  borderLeft: i === 0 ? "none" : "1px solid var(--color-neutral-200)"
                }}>
                    <div style={{
                    fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-accent)"
                  }}>{k}</div>
                    <div style={{ marginTop: 6, fontSize: 14, fontWeight: 500 }}>{v}</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CARD B — Vorträge (top right) */}
          <div className="s10-bento-b" style={cardStyle({ col: "span 5", row: "span 1" })}>
            <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={eyebrowStyle}>KI-Vorträge & Keynotes</div>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32, fontWeight: 600, letterSpacing: "-0.03em",
                  color: "var(--color-accent)", lineHeight: 1
                }}>45 Min</div>
              </div>
              <h3 style={taglineStyle}>"45 Minuten, die hängenbleiben."</h3>
              <p style={bodyStyle}>Live-Demos, spannende Fakten, echte Beispiele. Für Firmen-Events, Kaderveranstaltungen, Verbandstage und direkt im Unternhemen.

              </p>
            </div>
          </div>

          {/* CARD C — Maschine (bottom right) */}
          <div className="s10-bento-c" style={cardStyle({ col: "span 5", row: "span 1" })}>
            <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, height: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={eyebrowStyle}>KI-Maschine</div>
                {/* Mac-mini glyph */}
                <div style={{
                  width: 44, height: 28,
                  borderRadius: 4,
                  background: "var(--color-neutral-100, #f3f3f1)",
                  border: "1px solid var(--color-neutral-200)",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute", top: 11, left: 6,
                    width: 6, height: 6, borderRadius: "50%",
                    background: "var(--color-accent)"
                  }} />
                </div>
              </div>
              <h3 style={taglineStyle}>"Unsere Spielwiese für Ihr Team"</h3>
              <p style={bodyStyle}>Mac-Mini mit den wichtigsten KI-Premium-Tools vorinstaliert, keine Installation, keine Registrierung und einfachster Bedienung. Im und nach dem Workshop 1 Woche lang testen.

              </p>
            </div>
          </div>

          {/* CARD D — Bottom full-width: footer / CTA strip */}
          <div className="s10-bento-cta" style={cardStyle({ col: "span 12", row: "span 1", featured: true })}>
            <div style={{
              padding: "20px 28px", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
              flexWrap: "wrap"
            }} className="s10-angebot-cta">
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "6px 12px", borderRadius: 999,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)"
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent)" }} />
                  Verfügbar auf Anfrage
                </span>
                <div style={{ fontSize: 16, color: "rgba(255,255,255,0.8)" }}>Nicht sicher, was passt? Wir beraten euch gerne.

                </div>
              </div>
              <a href="#kontakt" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "12px 22px",
                borderRadius: 999,
                background: "var(--color-accent)",
                color: "#fff",
                fontWeight: 500, fontSize: 15,
                textDecoration: "none",
                whiteSpace: "nowrap"
              }}>
                Kostenloses Erstgespräch <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

const cardStyle = ({ col, row, featured }) => ({
  gridColumn: col,
  gridRow: row,
  position: "relative",
  background: featured ? "var(--color-black)" : "var(--color-white)",
  color: featured ? "#fff" : "inherit",
  border: featured ? "1px solid var(--color-black)" : "1px solid var(--color-neutral-200)",
  borderRadius: 16,
  overflow: "hidden",
  boxShadow: "0 1px 0 rgba(0,0,0,0.02)"
});

const eyebrowStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: 11, letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--color-neutral-500)"
};

const taglineStyle = {
  fontFamily: "var(--font-display)",
  fontSize: 26, fontWeight: 500, letterSpacing: "-0.025em",
  lineHeight: 1.2, margin: 0, marginTop: 10,
  color: "var(--color-black)",
  textWrap: "balance"
};

const bodyStyle = {
  marginTop: 12,
  fontSize: 15, lineHeight: 1.6,
  color: "var(--color-neutral-500)"
};

Object.assign(window, { AngebotSection });