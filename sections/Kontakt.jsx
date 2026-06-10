// Shift10 Landingpage — Kontakt + Footer
function KontaktSection() {
  const [sent, setSent] = React.useState(false);
  const [topic, setTopic] = React.useState("Workshop");
  const [typedPlaceholder, setTypedPlaceholder] = React.useState("");
  const [msgFocused, setMsgFocused] = React.useState(false);

  const phrases = [
    "Wir möchten einen Workshop für ~15 Personen buchen...",
    "Kannst du einen Keynote-Vortrag bei uns halten?",
    "Wie läuft ein Workshop bei euch genau ab?",
    "Wir brauchen Hilfe beim Aufbau unserer KI-Strategie.",
    "Ich möchte die KI-Testmaschine für eine Woche mieten.",
    "Wie schnell kann ein erster Termin stattfinden?",
  ];

  React.useEffect(() => {
    if (msgFocused) return;
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout;

    const tick = () => {
      const phrase = phrases[phraseIdx];
      if (!deleting) {
        charIdx++;
        setTypedPlaceholder(phrase.slice(0, charIdx));
        if (charIdx === phrase.length) {
          deleting = true;
          timeout = setTimeout(tick, 1800);
        } else {
          timeout = setTimeout(tick, 48);
        }
      } else {
        charIdx--;
        setTypedPlaceholder(phrase.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timeout = setTimeout(tick, 400);
        } else {
          timeout = setTimeout(tick, 22);
        }
      }
    };

    timeout = setTimeout(tick, 600);
    return () => clearTimeout(timeout);
  }, [msgFocused]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    }).then((r) => {
      if (r.ok) setSent(true);
    });
  };

  return (
    <section id="kontakt" className="section section--dark">
      <div className="dotgrid" style={{ color: "var(--color-white)" }} />
      <div className="container" style={{ position: "relative" }}>
        <div
          className="s10-grid-2"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}
        >
          {/* Left: pitch */}
          <div>
            <span className="eyebrow">Kontakt</span>
            <h2
              className="display"
              style={{
                marginTop: 32,
                fontWeight: 500,
                fontSize: "clamp(48px, 6vw, 88px)",
              }}
            >
              Reden wir.
              <br />
              <span className="accent">Konkret.</span>
            </h2>
            <p className="lead" style={{ marginTop: 32, fontSize: 18 }}>
              Schreib uns, was du im Kopf hast. Wir antworten innert einer Woche
              und prüfen die Möglichkeiten mit euch
            </p>

            <div
              style={{
                marginTop: 56,
                display: "flex",
                flexDirection: "column",
                gap: 18,
                fontFamily: "var(--font-mono)",
                fontSize: 13,
              }}
            >
              {[
                ["E-Mail", "mike@shift10.ch"],
                ["Telefon", "+41 44 000 00 00"],
                ["Region", "Thurgau · Schweizweit"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr",
                    gap: 24,
                    padding: "14px 0",
                    borderTop: "1px solid var(--color-neutral-800)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-neutral-500)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontSize: 11,
                    }}
                  >
                    {k}
                  </span>
                  <span style={{ color: "var(--color-white)" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          {/* ─── FORMSPREE: replace YOUR_FORM_ID with the ID from formspree.io/forms ─── */}
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            onSubmit={handleSubmit}
            style={{
              background: "var(--color-neutral-950)",
              border: "1px solid var(--color-neutral-800)",
              padding: 40,
              alignSelf: "start",
            }}
          >
            {sent ? (
              <div style={{ padding: "60px 0", textAlign: "center" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12l4.5 4.5L19 7"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3
                  style={{
                    marginTop: 24,
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Nachricht ist bei uns.
                </h3>
                <p
                  style={{
                    marginTop: 12,
                    color: "var(--color-neutral-400)",
                    fontSize: 15,
                  }}
                >
                  Mike meldet sich innert 24h direkt bei dir.
                </p>
              </div>
            ) : (
              <>
                <div
                  className="mono"
                  style={{
                    color: "var(--color-neutral-500)",
                    letterSpacing: "0.16em",
                    marginBottom: 28,
                  }}
                >
                  ANFRAGE / NEU
                </div>

                {/* Hidden field passes selected topic to Formspree */}
                <input type="hidden" name="Interesse" value={topic} />

                {/* Topic chips */}
                <div className="form-field" style={{ marginBottom: 28 }}>
                  <label
                    className="form-label"
                    style={{ color: "var(--color-neutral-500)" }}
                  >
                    Ich interessiere mich für
                  </label>
                  <div className="row" style={{ marginTop: 8, gap: 8 }}>
                    {["Vortrag", "Workshop", "Maschine", "Sonstiges"].map(
                      (t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setTopic(t)}
                          style={{
                            padding: "8px 14px",
                            background:
                              topic === t
                                ? "var(--color-accent)"
                                : "transparent",
                            color:
                              topic === t
                                ? "var(--color-white)"
                                : "var(--color-neutral-300)",
                            border:
                              "1px solid " +
                              (topic === t
                                ? "var(--color-accent)"
                                : "var(--color-neutral-800)"),
                            borderRadius: 6,
                            fontFamily: "var(--font-body)",
                            fontSize: 13,
                            fontWeight: 500,
                            transition: "all 150ms",
                          }}
                        >
                          {t}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                <div className="form-field" style={{ marginBottom: 24 }}>
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="Name"
                    required
                    className="input"
                    placeholder="Vor- und Nachname"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="form-field" style={{ marginBottom: 24 }}>
                  <label className="form-label" htmlFor="email">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="E-Mail"
                    type="email"
                    required
                    className="input"
                    placeholder="name@firma.ch"
                    style={{ color: "#fff" }}
                  />
                </div>
                <div className="form-field" style={{ marginBottom: 32 }}>
                  <label className="form-label" htmlFor="msg">
                    Nachricht
                  </label>
                  <textarea
                    id="msg"
                    name="Nachricht"
                    required
                    className="textarea"
                    placeholder={
                      msgFocused
                        ? "Was schwebt dir vor? Wie viele Personen? Wann?"
                        : typedPlaceholder || " "
                    }
                    onFocus={() => setMsgFocused(true)}
                    onBlur={(e) => {
                      if (!e.target.value) setMsgFocused(false);
                    }}
                    style={{ color: "#fff" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn--accent"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "16px",
                  }}
                >
                  Anfrage senden <span className="btn-arrow">→</span>
                </button>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 12,
                    color: "var(--color-neutral-500)",
                    lineHeight: 1.5,
                  }}
                >
                  Mit dem Absenden erklärst du dich mit unserer
                  Datenschutzerklärung einverstanden. Daten werden
                  ausschliesslich zur Beantwortung deiner Anfrage verwendet.
                </p>
              </>
            )}
          </form>
        </div>

        {/* Footer */}
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer
      style={{
        background: "var(--color-black)",
        paddingInline: "var(--container-pad, 48px)",
        paddingTop: 40,
        paddingBottom: 40,
        borderTop: "1px solid var(--color-neutral-800)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 24,
      }}
    >
      <div className="row" style={{ gap: 24 }}>
        <img
          src="assets/logo.svg"
          alt="Shift10"
          style={{ height: 28, width: "auto", display: "block" }}
        />
        <span style={{ fontSize: 13, color: "var(--color-neutral-500)" }}>
          © 2026 Shift10 · Mike Bänziger
        </span>
      </div>
      <div className="row" style={{ gap: 28 }}>
        {[
          ["Impressum", "impressum.html"],
          ["Datenschutz", "datenschutz.html"],
          ["AGB", "agb.html"],
        ].map(([l, href]) => (
          <a
            key={l}
            href={href}
            style={{
              fontSize: 13,
              color: "var(--color-neutral-500)",
              textDecoration: "none",
            }}
          >
            {l}
          </a>
        ))}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--color-neutral-700)",
            letterSpacing: "0.1em",
          }}
        >
          v.2026.06
        </span>
      </div>
    </footer>
  );
}

Object.assign(window, { KontaktSection, FooterSection });
