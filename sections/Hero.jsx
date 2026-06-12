// Shift10 Landingpage — Hero (3 variants)
//
// Variant A "type"      — typographic / editorial; big rotating word
// Variant B "terminal"  — split layout with live AI prompt mock
// Variant C "matrix"    — full dark, dot grid + system HUD details

function Hero({ variant }) {
  if (variant === "terminal") return <HeroTerminal />;
  if (variant === "matrix") return <HeroMatrix />;
  if (variant === "orbit") return <HeroOrbit />;
  return <HeroType />;
}

/* ─────────────────────────  Variant A — Type  ───────────────────────── */
function HeroType() {
  const words = ["Praxis.", "Tools.", "Resultate.", "Vorsprung."];
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero" style={{ background: "var(--color-white)" }}>
      <div className="dotgrid" style={{ color: "var(--color-black)" }} />
      <div className="hero-inner">
        <div style={{ marginBottom: 40 }}>
          <span className="chip">
            <span className="chip-dot" />
            Verfügbar Q3 2026 · 4 Slots offen
          </span>
        </div>
        <h1 className="display" style={{ maxWidth: "14ch" }}>
          KI für dein Team.<br />
          Keine Slides.{" "}
          <span style={{ position: "relative", display: "inline-block", minWidth: "5.5ch", verticalAlign: "baseline" }}>
            {words.map((w, idx) =>
            <span
              key={w}
              aria-hidden={i !== idx}
              style={{
                position: idx === 0 ? "relative" : "absolute",
                left: 0, top: 0,
                color: "var(--color-accent)",
                opacity: i === idx ? 1 : 0,
                transform: i === idx ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 350ms var(--ease-out), transform 350ms var(--ease-out)",
                whiteSpace: "nowrap"
              }}>
              
                {w}
              </span>
            )}
          </span>
        </h1>
        <p className="lead" style={{ marginTop: 32, fontSize: 20 }}>
          Zwei Freitagnachmittage. Eine Mac-Mini-Testmaschine mit allen Premium-Tools für eine Woche bei dir im Büro.
          Dein Team weiss danach, was KI im Alltag wirklich kann — und was nicht.
        </p>
        <div className="row" style={{ marginTop: 40 }}>
          <a href="#kontakt" className="btn btn--accent">
            Workshop anfragen <span className="btn-arrow">→</span>
          </a>
          <a href="#angebot" className="btn btn--ghost">Angebot ansehen</a>
        </div>

        {/* Bottom proof strip */}
        <div className="s10-hero-stats" style={{
          marginTop: 96,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
          borderTop: "1px solid var(--color-neutral-200)",
          paddingTop: 24
        }}>
          {[
          ["~50", "Vorträge bei Schweizer Grossfirmen"],
          ["2", "Freitagnachmittage pro Workshop"],
          ["10+", "Kuratierte KI-Apps am Start"],
          ["0", "Vendor-Lock-in. Kein Berater-Abo."]].
          map(([n, l], idx) =>
          <div key={idx} style={{ paddingRight: 16 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 1 }} data-stats-num>
                {n}
              </div>
              <div style={{ marginTop: 10, fontSize: 13, color: "var(--color-neutral-500)", lineHeight: 1.45, maxWidth: 22 + "ch" }}>
                {l}
              </div>
            </div>
          )}
        </div>

        {/* AI Tools logo strip */}
        <div style={{
          marginTop: 48,
          display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap"
        }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 11,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--color-neutral-400)", flexShrink: 0
          }}>Tools inkl.</span>
          <div style={{ height: 1, width: 24, background: "var(--color-neutral-200)", flexShrink: 0 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            {[
              { src: "https://svgl.app/library/openai.svg",          label: "OpenAI" },
              { src: "https://svgl.app/library/anthropic_black.svg", label: "Anthropic" },
              { src: "https://svgl.app/library/gemini.svg",          label: "Gemini" },
              { src: "https://svgl.app/library/midjourney.svg",      label: "Midjourney" },
              { src: "https://svgl.app/library/perplexity.svg",      label: "Perplexity" },
              { src: "https://svgl.app/library/xai_light.svg",       label: "xAI" },
            ].map((tool, i) =>
              <div key={i} title={tool.label} style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: 36, height: 36,
                background: "var(--color-neutral-100)",
                border: "1px solid var(--color-neutral-200)",
                borderRadius: 8, padding: 6,
                transition: "border-color 200ms, background 200ms"
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--color-neutral-400)"; e.currentTarget.style.background = "var(--color-white)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-neutral-200)"; e.currentTarget.style.background = "var(--color-neutral-100)"; }}>
                <img src={tool.src} alt={tool.label} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
            )}
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--color-neutral-400)", letterSpacing: "0.08em"
            }}>+4 mehr</span>
          </div>
        </div>

      </div>
    </section>);

}

/* ─────────────────────────  Variant B — Terminal  ───────────────────────── */
function HeroTerminal() {
  const { isTablet } = useBreakpoint();
  return (
    <section className="hero" style={{ background: "var(--color-white)", paddingBottom: 60 }}>
      <div className="hero-inner s10-hero-terminal-grid" style={{ display: "grid", gridTemplateColumns: isTablet ? "1fr" : "1.05fr 0.95fr", gap: isTablet ? 40 : 80, alignItems: "center" }}>
        <div>
          <span className="eyebrow" style={{ marginBottom: 28, display: "inline-flex" }}>
            shift10 / workshops
          </span>
          <h1 className="display" style={{ fontWeight: 500, fontSize: "clamp(48px, 6vw, 88px)" }}>
            <em>KI</em> verstehen.<br />
            <em>KI</em> ausprobieren.<br />
            <em>KI</em> einführen.
          </h1>
          <p className="lead" style={{ marginTop: 36 }}>
            Shift10 bringt dein Team vom „Wir sollten mal mit KI…" zur produktiven Nutzung — mit Workshop, Testmaschine und einem Plan, der nach uns weiterläuft.
          </p>
          <div className="row" style={{ marginTop: 40 }}>
            <a href="#kontakt" className="btn btn--primary">
              Workshop anfragen <span className="btn-arrow">→</span>
            </a>
            <a href="#so-funktionierts" className="btn btn--ghost">So funktioniert's</a>
          </div>
        </div>

        <TerminalMock />
      </div>
    </section>);

}

function TerminalMock() {
  const lines = [
  { kind: "prompt", text: "Wo verschwendet mein Team gerade Zeit?" },
  { kind: "out", text: "Analysiere Prozesse..." },
  { kind: "out", text: "→ E-Mail-Triage: ~6h / Person / Woche" },
  { kind: "out", text: "→ Protokolle aus Calls: ~4h" },
  { kind: "out", text: "→ Recherchen für Offerten: ~3h" },
  { kind: "label", text: "VORSCHLAG" },
  { kind: "result", text: "Drei KI-Tools, drei Prozesse — getestet" },
  { kind: "result", text: "auf der Mac-Mini-Station nächste Woche." }];

  const [shown, setShown] = React.useState(0);
  React.useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((x) => x + 1), shown === 0 ? 700 : 380);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div style={{
      background: "var(--color-black)",
      borderRadius: 8,
      padding: 0,
      color: "var(--color-white)",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: 1.65,
      overflow: "hidden",
      boxShadow: "0 30px 80px rgba(0,0,0,0.18)"
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "12px 16px",
        borderBottom: "1px solid var(--color-neutral-800)"
      }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#3D3D3D" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#3D3D3D" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-accent)" }} />
        <span style={{ marginLeft: 12, color: "var(--color-neutral-500)", fontSize: 11, letterSpacing: "0.06em" }}>
          shift10 ▸ session_01.log
        </span>
      </div>
      <div style={{ padding: "24px 24px 28px", minHeight: 280 }}>
        {lines.slice(0, shown).map((ln, idx) => {
          if (ln.kind === "prompt") return (
            <div key={idx} style={{ color: "var(--color-white)", marginBottom: 14 }}>
              <span style={{ color: "var(--color-accent)" }}>›</span> {ln.text}
            </div>);

          if (ln.kind === "out") return (
            <div key={idx} style={{ color: "var(--color-neutral-400)" }}>{ln.text}</div>);

          if (ln.kind === "label") return (
            <div key={idx} style={{ color: "var(--color-neutral-600)", fontSize: 10, letterSpacing: "0.18em", marginTop: 18, marginBottom: 8 }}>
              {ln.text}
            </div>);

          return (
            <div key={idx} style={{ color: "var(--color-white)" }}>{ln.text}</div>);

        })}
        {shown >= lines.length && <span className="cursor" style={{ background: "var(--color-accent)" }} />}
      </div>
    </div>);

}

/* ─────────────────────────  Variant C — Matrix (dark)  ───────────────────────── */
function HeroMatrix() {
  return (
    <section className="hero section--dark" style={{ paddingTop: 200, paddingBottom: 140 }}>
      <div className="dotgrid" style={{ color: "var(--color-white)" }} />
      <div className="gridlines" style={{ color: "var(--color-white)" }} />

      <span className="hud-mark" style={{ top: 180, left: 40 }} />
      <span className="hud-mark" style={{ top: 180, right: 40 }} />
      <span className="hud-mark" style={{ bottom: 80, left: 40 }} />
      <span className="hud-mark" style={{ bottom: 80, right: 40 }} />

      <div className="hero-inner" style={{ position: "relative", textAlign: "center" }}>
        <div style={{ marginBottom: 36 }}>
          <span className="chip" style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.18)",
            color: "var(--color-neutral-300)"
          }}>
            <span className="chip-dot" />
            Live · 50+ Workshops dokumentiert
          </span>
        </div>

        <h1 className="display" style={{
          fontSize: "clamp(56px, 9vw, 144px)",
          letterSpacing: "-0.045em",
          fontWeight: 500,
          margin: "0 auto"
        }}>
          KI <span className="accent">an</span> der<br />
          Werkbank.
        </h1>

        <p className="lead" style={{
          marginTop: 36, marginLeft: "auto", marginRight: "auto",
          color: "var(--color-neutral-400)",
          fontSize: 19
        }}>
          Kein Berater-Bullshit, keine Heatmaps. Workshop, Testmaschine, dein Team —<br />
          und am Ende ein Plan, der nach uns weiterläuft.
        </p>

        <div className="row row--center" style={{ marginTop: 48 }}>
          <a href="#kontakt" className="btn btn--primary">
            Workshop anfragen <span className="btn-arrow">→</span>
          </a>
          <a href="#angebot" className="btn btn--ghost">Angebot ansehen</a>
        </div>

        {/* Mono spec strip */}
        <div className="row row--center" style={{
          marginTop: 80,
          gap: 40,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--color-neutral-500)",
          letterSpacing: "0.1em",
          textTransform: "uppercase"
        }}>
          <span>SHIFT10 / 26</span>
          <span>·</span>
          <span>CH-LANG: DE</span>
          <span>·</span>
          <span>KMU · KADER · VERBÄNDE</span>
          <span>·</span>
          <span>v.MIKE.B</span>
        </div>
      </div>
    </section>);

}

/* ─────────────────────────  Variant D — Orbit  ───────────────────────── */
// AI tool logos orbiting around the headline.
// Logos are loaded from assets/orbit-logos/ via manifest.json.
// To add/remove a logo: edit manifest.json and drop the SVG in the folder.


const ORBIT_LOGOS = [
  { name: "ChatGPT",      file: "chatgpt.svg",      ring: 0 },
  { name: "Claude",       file: "claude.svg",        ring: 0 },
  { name: "Gemini",       file: "gemini.svg",        ring: 0 },
  { name: "Grok",         file: "grok.svg",          ring: 0 },
  { name: "Perplexity",   file: "perplexity.svg",    ring: 1 },
  { name: "DeepSeek",     file: "deepseek.svg",      ring: 1 },
  { name: "Ollama",       file: "ollama.svg",        ring: 1 },
  { name: "Hugging Face", file: "huggingface.svg",   ring: 2 },
  { name: "MCP",          file: "mcp.svg",           ring: 2 },
  { name: "Codex",        file: "codex.svg",         ring: 2 },
  { name: "Midjourney",   file: "midjourney.svg",    ring: 3 },
  { name: "Firecrawl",    file: "firecrawl.svg",     ring: 3 },
  { name: "Manus",        file: "manus.svg",         ring: 4 },
];

function HeroOrbit() {
  const { isMobile, isTablet } = useBreakpoint();
  const orbitLogos = ORBIT_LOGOS;

  // Scale rings down on smaller screens
  const ringScale = isMobile ? 0.52 : isTablet ? 0.68 : 1;
  const logoScale = isMobile ? 0.7  : isTablet ? 0.82 : 1;
  // Inner ring sized to wrap snugly around the headline text block
  const rings = [
  { r: Math.round(220 * ringScale), dur: 70,  dir: 1,  color: "rgba(0,0,0,0.13)" },
  { r: Math.round(350 * ringScale), dur: 95,  dir: -1, color: "rgba(0,0,0,0.09)" },
  { r: Math.round(500 * ringScale), dur: 120, dir: 1,  color: "rgba(0,0,0,0.07)" },
  { r: Math.round(660 * ringScale), dur: 150, dir: -1, color: "rgba(0,0,0,0.05)" },
  { r: Math.round(820 * ringScale), dur: 180, dir: 1,  color: "rgba(0,0,0,0.03)" }];

  // Fewer logos on smaller screens to avoid crowding
  const visibleLogos = isMobile
    ? orbitLogos.filter(l => l.ring <= 1)
    : isTablet
      ? orbitLogos.filter(l => l.ring <= 2)
      : orbitLogos;

  return (
    <section style={{
      background: "var(--color-white)",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      paddingLeft: 40, paddingRight: 40,
      overflow: "hidden",
      position: "relative",
    }}>
      <div className="hero-inner" style={{ position: "relative", textAlign: "center", width: "100%" }}>

        {/* Orbit stage — scaled on all screen sizes, very light on mobile */}
        <div style={{
          position: "absolute",
          left: "50%", top: "50%",
          width: 0, height: 0,
          pointerEvents: "none",
          opacity: isMobile ? 0.55 : 1,
        }}>
          {/* Orbit rings */}
          {rings.map((ring, ri) =>
          <div key={ri} style={{
            position: "absolute",
            left: -ring.r, top: -ring.r,
            width: ring.r * 2, height: ring.r * 2,
            borderRadius: "50%",
            border: `1px solid ${ring.color}`
          }} />
          )}

          {/* Logo orbits */}
          {rings.map((ring, ri) => {
            const logos = visibleLogos.filter((l) => l.ring === ri);
            return (
              <div key={"r" + ri} style={{
                position: "absolute",
                left: 0, top: 0,
                width: 0, height: 0,
                animation: `orbit-spin ${ring.dur}s linear infinite ${ring.dir < 0 ? "reverse" : ""}`,
                transformOrigin: "0 0"
              }}>
                {logos.map((logo, li) => {
                  const angle = li / logos.length * 360;
                  const rad = angle * Math.PI / 180;
                  const x = Math.cos(rad) * ring.r;
                  const y = Math.sin(rad) * ring.r;
                  return (
                    <div key={logo.name} style={{
                      position: "absolute",
                      left: x, top: y,
                      transform: "translate(-50%, -50%)"
                    }}>
                      <div style={{
                        animation: `orbit-counter ${ring.dur}s linear infinite ${ring.dir < 0 ? "" : "reverse"}`,
                        transformOrigin: "center"
                      }}>
                        <OrbitLogo logo={logo} scale={logoScale} />
                      </div>
                    </div>);

                })}
              </div>);

          })}

          {/* Center glow — sized to cover the text, semi-transparent on mobile */}
          <div style={{
            position: "absolute",
            left: isMobile ? -130 : -260,
            top:  isMobile ? -100 : -200,
            width:  isMobile ? 260 : 520,
            height: isMobile ? 200 : 400,
            borderRadius: "50%",
            background: isMobile
              ? "radial-gradient(ellipse, rgba(255,255,255,0.78) 18%, rgba(255,255,255,0.45) 48%, transparent 72%)"
              : "radial-gradient(ellipse, rgba(255,255,255,1) 28%, rgba(255,255,255,0.88) 52%, transparent 76%)",
            pointerEvents: "none"
          }} />
        </div>

        {/* Foreground content (above orbits) */}
        <div style={{ position: "relative", zIndex: 2, padding: "72px 0" }}>
          <div style={{
            position: "absolute",
            left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? 360 : 700,
            height: isMobile ? 300 : 500,
            background: isMobile
              ? "radial-gradient(ellipse at center, rgba(255,255,255,0.82) 20%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0) 70%)"
              : "radial-gradient(ellipse at center, rgba(255,255,255,1) 28%, rgba(255,255,255,0.88) 48%, rgba(255,255,255,0) 72%)",
            pointerEvents: "none",
            zIndex: -1
          }} />
          <div style={{ marginBottom: 28 }}>
            <span className="chip">
              <span className="chip-dot" />Wissen aus 8 Jahren KI-Erfahrung</span>
          </div>

          <h1 className="display" style={{
            maxWidth: "16ch",
            margin: "0 auto",
            fontWeight: 500,
            fontSize: isMobile ? "clamp(34px, 10vw, 52px)" : "67px"
          }}>
            KI-Workshops für Schweizer KMU.<br />
            <em style={{ fontStyle: "normal", color: "var(--color-accent)", fontWeight: 400, fontSize: isMobile ? "inherit" : 68 }}>Praxis statt Theorie.</em>
          </h1>

          <p className="lead" style={{
            marginTop: 24, marginLeft: "auto", marginRight: "auto",
            fontSize: isMobile ? 16 : 18, maxWidth: 580
          }}>Kein Frontalunterricht. Keine Schablone. Wir arbeiten an euren Anwendungsfällen, und unsere KI-Maschine bleibt danach eine Woche bei euch. Was die KI für euch im 2026 ermöglicht, wendet ihr direkt an.</p>

          <div className="row row--center" style={{ marginTop: 32, flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", gap: isMobile ? 12 : undefined }}>
            <a href="#kontakt" className="btn btn--accent" style={isMobile ? { justifyContent: "center" } : {}}>Unverbindliches Erstgespräch<span className="btn-arrow">→</span>
            </a>
            <a href="#so-funktionierts" className="btn btn--ghost" style={isMobile ? { justifyContent: "center" } : {}}>So funktioniert’s</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbit-counter {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
      `}</style>
    </section>);

}

function OrbitLogo({ logo, scale = 1 }) {
  const base = logo.ring === 0 ? 54 : logo.ring === 1 ? 50 : logo.ring === 2 ? 46 : logo.ring === 3 ? 42 : 38;
  const size = Math.round(base * scale);
  const iconSize = Math.round(size * 0.5);
  return (
    <div
      title={logo.name}
      style={{
        width: size, height: size,
        borderRadius: "50%",
        background: "var(--color-white)",
        border: "1px solid var(--color-neutral-200)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        opacity: logo.ring === 0 ? 1 : logo.ring === 1 ? 0.92 : logo.ring === 2 ? 0.82 : logo.ring === 3 ? 0.7 : 0.55,
        transition: "transform 200ms var(--ease-out), opacity 200ms",
        cursor: "default"
      }}
      onMouseEnter={(e) => {e.currentTarget.style.transform = "scale(1.12)";e.currentTarget.style.opacity = 1;}}
      onMouseLeave={(e) => {e.currentTarget.style.transform = "";e.currentTarget.style.opacity = "";}}>
      <img
        src={"assets/orbit-logos/" + logo.file}
        alt={logo.name}
        style={{ width: iconSize, height: iconSize, objectFit: "contain", display: "block" }}
      />
    </div>
  );
}

Object.assign(window, { Hero, HeroType, HeroTerminal, HeroMatrix, HeroOrbit });