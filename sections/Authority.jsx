// Shift10 Landingpage — Authority / TKB section
// A single inline marquee row with the copy embedded as one of the items.
function AuthoritySection() {
  // Render brand names as wordmarks. Each entry is {name, style}.
  // The copy line sits in the middle of the strip, separated by dots.
  const wordmarks = [
  { kind: "logo", text: "MF GmbH", font: "var(--font-display)", weight: 700, size: 36, letter: "-0.01em" },
  { kind: "logo", text: "Swiss Bitcoin Developer Association", font: "var(--font-display)", weight: 500, size: 30, letter: "-0.01em" },
  { kind: "logo", text: "C-Pictures", font: "var(--font-display)", weight: 600, size: 36, letter: "-0.02em" }];


  const renderItem = (it, idx) => {
    if (it.kind === "copy") {
      return (
        <span key={idx} style={{
          display: "inline-flex", alignItems: "center",
          fontSize: 22, fontWeight: 400, color: "var(--color-black)",
          whiteSpace: "nowrap"
        }}>
          Über{" "}
          <span style={{ color: "var(--color-accent)", fontWeight: 600, marginLeft: 8, marginRight: 8 }}>
            50 Workshops
          </span>
          mit Schweizer Unternehmen
        </span>);

    }
    return (
      <span key={idx} style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        fontFamily: it.font,
        fontWeight: it.weight,
        fontSize: it.size,
        letterSpacing: it.letter,
        color: it.color || "var(--color-black)",
        fontStyle: it.italic ? "italic" : "normal",
        whiteSpace: "nowrap"
      }}>
        {it.prefix && <span style={{ color: "var(--color-accent)", fontSize: it.size * 0.95 }}>{it.prefix}</span>}
        {it.text}
      </span>);

  };

  return (
    <section id="autoritaet" className="section section--white" style={{
      paddingTop: 48, paddingBottom: 48,
      position: "relative", overflow: "hidden"
    }}>
      <style>{`
        @keyframes s10-marquee-ltr {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* Inline marquee strip */}
      <div aria-hidden="true" style={{
        opacity: 0.6,
        position: "relative",
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
          {/* Two identical halves of 10 repeats each — animation slides one half (-50%) then loops */}
          {[...Array(2)].flatMap((_, half) =>
            [...Array(10)].flatMap((_, rep) =>
              wordmarks.map((it, idx) => renderItem(it, half * 10 * wordmarks.length + rep * wordmarks.length + idx))
            )
          )}
        </div>
      </div>
    </section>);

}