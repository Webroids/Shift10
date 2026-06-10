// Shift10 Landingpage — Über Mike (authority)
function MikeSection() {
  const [expanded, setExpanded] = React.useState(false);

  const trias = [
  { label: "Ausbildung", value: "Informatik-Master", sub: "Hochschule Konstanz" },
  { label: "Hauptberuf", value: "KI-Spezialist", sub: "Regionale Bank" },
  { label: "Vorträge", value: "~ 50 Events", sub: "Inspiration vermittelt" }];


  return (
    <section id="ueber-mike" className="section">
      <div className="container">
        <div className="s10-grid-2" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 80, alignItems: "center" }}>
          {/* Portrait */}
          <div style={{
            position: "relative",
            aspectRatio: "4/5",
            background: "var(--color-neutral-900)",
            border: "1px solid var(--color-neutral-200)",
            overflow: "hidden"
          }}>
            <img
              src="assets/mike.webp"
              alt="Mike Bänziger"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
            <div style={{
              position: "absolute", left: 16, bottom: 16,
              fontFamily: "var(--font-mono)", fontSize: 10,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.8)",
              background: "rgba(0,0,0,0.45)",
              padding: "6px 10px",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(4px)"
            }}>MIKE_BÄNZIGER · CH-TG</div>
          </div>

          <div>
            <span className="eyebrow">ÜBER SHIFT10</span>
            <h2 className="display display--md" style={{ marginTop: 24, fontWeight: 500 }}>
              Kein Theoretiker.<br />
              <em style={{ fontStyle: "normal", color: "var(--color-accent)", fontWeight: "500" }}>Ein Praktiker.</em>
            </h2>

            {/* First paragraph always visible */}
            <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.7, color: "var(--color-neutral-700)" }}>
              Mike hat 8 Jahre KI Erfahrung, arbeitet hauptberuflich 70% als Spezialist für Datenmanagement und Künstliche Intelligenz bei der Thurgauer Kantonalbank. Das gibt ihm einen Blick, den die meisten KI-Coaches nicht haben: Er weiss aus dem Tagesgeschäft, was Datenschutz & Compliance, aber auch verständliche und gewinnbringende Prozesse bedeuten.
            </p>

            {/* Expandable paragraphs */}
            <div style={{
              overflow: "hidden",
              maxHeight: expanded ? 800 : 0,
              transition: "max-height 500ms cubic-bezier(0.4,0,0.2,1)"
            }}>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: "var(--color-neutral-600)" }}>
                Seine Grundlagen hat er an der Hochschule Konstanz gelegt: Bachelor in Wirtschaftsinformatik, Master in Informatik. Im Rahmen des Studiums wurde er mit seinem Team beim IDEA CUP ausgezeichnet, dem uni übergreifenden Ideenwettbewerb des Inkubators Kilometer1. Darauffolgend wurde ein KI-Software-Startup in München aufgezogen und nach 3.5 Jahren wieder beerdigt.
              </p>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: "var(--color-neutral-600)" }}>
                Erfahrung mit KI-Workshops hat er seit 2023: Als Innovationsmanager bei der TKB nahm er sich des Themas unternehmensweit an — von Verhaltensrichtlinien für Mitarbeitende über Schulungen, Mitarbeit in KI-Projekten bis zu einem begleitenden Eventformat Sandwich-Talk. Seither stand er bei mehr als 45 Vorträgen auf der Buehne, mit über 90 Gastreferenten aus Unternehmen und mehr als 2'200 Teilnehmenden. Bereits in seinem vorherigen Job, als IT-Projektleiter und Assistent des CIO bei der Rhätischen Bahn, war Mike an KI-Projekten beteiligt — etwa 2018 an einem Chatbot für internationale Touristen der RhB.
              </p>
            </div>

            {/* Read more / less toggle */}
            <button
              onClick={() => setExpanded(function(e) { return !e; })}
              style={{
                marginTop: 20,
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "none", border: "none", padding: 0,
                fontFamily: "var(--font-display)", fontSize: 15,
                fontWeight: 600, letterSpacing: "-0.01em",
                color: "var(--color-accent)", cursor: "pointer"
              }}
              onMouseEnter={function(e) { e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={function(e) { e.currentTarget.style.opacity = "1"; }}
            >
              {expanded ? "Weniger anzeigen" : "Mehr lesen"}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 300ms" }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <div className="s10-mike-trias" style={{
              marginTop: 40,
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              border: "1px solid var(--color-neutral-200)"
            }}>
              {trias.map((t, i) =>
              <div key={i} style={{
                padding: "24px 22px",
                borderLeft: i === 0 ? "none" : "1px solid var(--color-neutral-200)"
              }}>
                  <div className="mono" style={{ color: "var(--color-neutral-500)", letterSpacing: "0.16em", marginBottom: 10 }}>
                    {t.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.2 }}>
                    {t.value}
                  </div>
                  <div style={{ marginTop: 4, fontSize: 13, color: "var(--color-neutral-500)" }}>
                    {t.sub}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

Object.assign(window, { MikeSection });