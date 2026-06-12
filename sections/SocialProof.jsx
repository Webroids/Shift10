// Shift10 Landingpage — Social Proof (logos + testimonials)
function SocialProofSection() {

  const testimonials = [
  {
    quote: "Mike spricht Klartext. Nach einem Vortrag wurde mir bewusst das KI einen nutzen für meine Alltagsaufgaben hat. Für mich als Inhabergeführte Autowerkstatt warte ich aber mal noch ab.",
    name: "Marcello Fiorenza",
    role: "MF GmbH, Illighausen"
  },
  {
    quote: "Für unseren Verein ist Mike's KI-Setup genial. So können alle unsere Bitcoin Software Entwickler durchstarten und mit praxisorientierten Aufgaben das neue Wissen an alle anderen Mitglieder vermitteln.",
    name: "Sascha Minic",
    role: "Swiss Bitcion Developer Association"
  },
  {
    quote: "Wir hatten das Wissen über KI — aber nie den Schritt in die Praxis geschafft. Mike kam nicht mit einem Standardprogramm, sondern hat zuerst verstanden, wie wir wirklich arbeiten. Die Use Cases waren auf uns zugeschnitten und sofort umsetzbar. Heute haben wir mehrere Prozesse umgestellt und sparen damit täglich messbar Zeit.",
    name: "Samuel Reutimann",
    role: "C-Pictures GmbH Sirnach"
  }];


  return (
    <section id="social-proof" className="section section--bone">
      <div className="container container--wide">
        {/* Client name marquee — same style as AuthoritySection */}
        <style>{`
          @keyframes s10-marquee-ltr {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
        <div style={{ marginBottom: 100, overflow: "hidden", position: "relative" }}>
          <div aria-hidden="true" style={{
            opacity: 0.6,
            maskImage: "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%)"
          }}>
            <div style={{
              display: "flex",
              width: "max-content",
              animation: "s10-marquee-ltr 60s linear infinite",
              alignItems: "center",
              gap: 80,
              whiteSpace: "nowrap",
              willChange: "transform",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden"
            }}>
              {[...Array(2)].flatMap((_, half) =>
                [...Array(10)].flatMap((_, rep) =>
                  [
                    { text: "MF GmbH",                            font: "var(--font-display)", weight: 700, size: 36, letter: "-0.01em" },
                    { text: "Swiss Bitcoin Developer Association", font: "var(--font-display)", weight: 500, size: 30, letter: "-0.01em" },
                    { text: "C-Pictures",                         font: "var(--font-display)", weight: 600, size: 36, letter: "-0.02em" },
                  ].map((it, idx) =>
                    <span key={`${half}-${rep}-${idx}`} style={{
                      fontFamily: it.font,
                      fontWeight: it.weight,
                      fontSize: it.size,
                      letterSpacing: it.letter,
                      color: "var(--color-black)",
                      whiteSpace: "nowrap"
                    }}>{it.text}</span>
                  )
                )
              )}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: 56, maxWidth: 720 }}>
          <h2 className="display display--md" style={{ fontWeight: 500 }}>Kundenstimmen

          </h2>
        </div>

        <div className="s10-testimonials" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {testimonials.map((t, i) =>
          <figure key={i} style={{
            margin: 0,
            padding: "40px 36px",
            background: "var(--color-white)",
            border: "1px solid var(--color-neutral-200)",
            borderLeft: i === 0 ? "1px solid var(--color-neutral-200)" : "none",
            display: "flex", flexDirection: "column"
          }}>
              <span style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              lineHeight: 0.6,
              color: "var(--color-accent)",
              marginBottom: 12
            }}>
                "
              </span>
              <blockquote style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: 19,
              fontWeight: 450,
              lineHeight: 1.45,
              letterSpacing: "-0.01em",
              color: "var(--color-neutral-900)",
              flex: 1
            }}>
                {t.quote}
              </blockquote>
              <figcaption style={{ marginTop: 32, paddingTop: 20, borderTop: "1px solid var(--color-neutral-200)" }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                <div style={{ marginTop: 4, fontSize: 13, color: "var(--color-neutral-500)" }}>{t.role}</div>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>);

}

Object.assign(window, { SocialProofSection });