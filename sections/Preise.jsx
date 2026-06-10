// Shift10 Landingpage — Preise
// White bg, 3-col cards, center dark/featured with EMPFOHLEN badge
function PreiseSection() {
  const plans = [
    {
      tag: "KEYNOTE",
      duration: "1x 45min",
      title: "Vortrag",
      price: "CHF 1'500",
      priceNote: "ZZGL. MWST",
      features: [
        "KI-Grundlagen",
        "KI-Risiken",
        "KI-Geschichte",
        "Übersicht aktueller KI-Software",
        "Grundlagen zum Einsatz von virtuellen Mitarbeitenden"
      ],
      cta: "Keynote anfragen",
      featured: false,
    },
    {
      tag: "HANDS-ON",
      duration: "2x Freitag-Nachmittag",
      title: "Workshop",
      price: "CHF 2'900",
      priceNote: "ZZGL. MWST",
      badge: "EMPFOHLEN",
      features: [
        "Alle Inhalte aus Vortrag",
        "Tutorium zum direkten Anwenden der KI-Software",
        "Massgeschneiderte Anwendungsfälle für euer KMU",
        "Vorinstallierter KI-Computer — eine Woche bei euch mit Max KI-Aboplänen inkludiert"
      ],
      cta: "Workshop buchen",
      featured: true,
    },
    {
      tag: "INDIVIDUELL",
      duration: "On Demand",
      title: "KI-Themen",
      price: "Auf Anfrage",
      priceNote: "PREIS AUF ANFRAGE",
      features: [
        "Vorinstallierte KI-Computer",
        "KI-Strategie und Beratung",
        "KI-Anwendungsfälle erarbeiten und priorisieren",
        "KI-Software evaluieren und Risikoassessment",
        "KI-Enabling und Community Aktivitäten planen"
      ],
      cta: "Kontakt aufnehmen",
      featured: false,
    }
  ];

  return (
    <section id="preise" className="section section--white">
      <div className="container">

        {/* Centered intro */}
        <div style={{ textAlign: "center", maxWidth: 680, marginInline: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 36 }}>
            <div style={{ height: 1, width: 36, background: "var(--color-neutral-300)" }}></div>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--color-neutral-500)"
            }}>Preise · Transparent</span>
            <div style={{ height: 1, width: 36, background: "var(--color-neutral-300)" }}></div>
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 5.5vw, 72px)",
            fontWeight: 700, letterSpacing: "-0.035em",
            lineHeight: 1.03, margin: 0,
            color: "var(--color-black)"
          }}>Klare Preise.<br />
            <span style={{ color: "var(--color-accent)" }}>Keine<br />Überraschungen.</span>
          </h2>
          <p style={{
            marginTop: 28, fontSize: 17, lineHeight: 1.65,
            color: "var(--color-neutral-600)", textWrap: "balance"
          }}>Alle Angebote in Schweizer Franken, ohne Kleingedrucktes. Ihr bekommt genau das, was ihr bucht — massgeschneidert, transparent und mit vollem Fokus auf euren Nutzen.</p>
        </div>

        {/* 3-column card grid */}
        <div style={{
          marginTop: 72,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          border: "1px solid var(--color-neutral-200)",
          borderRadius: 4,
          overflow: "visible",
          position: "relative"
        }} className="s10-pricing-grid">
          {plans.map(function(plan, i) {
            return (
              <div key={i} style={{
                position: "relative",
                background: plan.featured ? "var(--color-black)" : "var(--color-white)",
                borderLeft: i > 0 ? ("1px solid " + (plan.featured || plans[i-1].featured ? "var(--color-black)" : "var(--color-neutral-200)")) : "none",
                padding: "48px 36px 40px",
                display: "flex",
                flexDirection: "column",
              }}>

                {/* EMPFOHLEN badge */}
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: -17, left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--color-accent)",
                    color: "var(--color-white)",
                    fontFamily: "var(--font-mono)", fontSize: 10,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    padding: "5px 16px", borderRadius: 2,
                    whiteSpace: "nowrap"
                  }}>{plan.badge}</div>
                )}

                {/* Tag */}
                <div style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: plan.featured ? "var(--color-accent)" : "var(--color-neutral-500)",
                  marginBottom: 10
                }}>{plan.tag}</div>

                {/* Duration */}
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: 22,
                  fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.15,
                  color: plan.featured ? "var(--color-white)" : "var(--color-black)",
                  marginBottom: 6
                }}>{plan.duration}</div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: 34,
                  fontWeight: 600, letterSpacing: "-0.025em",
                  lineHeight: 1.1, margin: 0,
                  color: plan.featured ? "var(--color-white)" : "var(--color-black)"
                }}>{plan.title}</h3>

                {/* Divider */}
                <div style={{
                  margin: "28px 0",
                  height: 1,
                  background: plan.featured ? "rgba(255,255,255,0.1)" : "var(--color-neutral-200)"
                }}></div>

                {/* Features */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 13 }}>
                  {plan.features.map(function(f, fi) {
                    return (
                      <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <span style={{
                          color: "var(--color-accent)", fontSize: 15,
                          flexShrink: 0, marginTop: 1, fontWeight: 700, lineHeight: 1.4
                        }}>✓</span>
                        <span style={{
                          fontSize: 14, lineHeight: 1.55,
                          color: plan.featured ? "rgba(255,255,255,0.72)" : "var(--color-neutral-700)"
                        }}>{f}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Price */}
                <div style={{ marginTop: 32 }}>
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontSize: plan.price === "Auf Anfrage" ? 26 : 32,
                    fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1,
                    color: plan.featured ? "var(--color-white)" : "var(--color-black)"
                  }}>
                    {plan.price}
                    {plan.priceNote && plan.price !== "Auf Anfrage" && (
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: 12,
                        fontWeight: 400, letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: plan.featured ? "rgba(255,255,255,0.45)" : "var(--color-neutral-400)",
                        marginLeft: 10
                      }}>{plan.priceNote}</span>
                    )}
                  </div>
                </div>

                {/* CTA button */}
                <a href="#kontakt"
                  className={plan.featured ? "btn btn--accent" : "btn btn--ghost"}
                  style={{ marginTop: 40, justifyContent: "center" }}>
                  {plan.cta} <span className="btn-arrow">→</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div style={{
          marginTop: 28,
          fontFamily: "var(--font-mono)", fontSize: 12,
          color: "var(--color-neutral-400)", letterSpacing: "0.05em"
        }}>// Stand: Mai 2026 · Alle Preise zzgl. MwSt</div>

      </div>
    </section>
  );
}

Object.assign(window, { PreiseSection });
