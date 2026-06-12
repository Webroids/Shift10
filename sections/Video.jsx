// Shift10 Landingpage — Hero Video section (YouTube embed)
function VideoSection() {
  return (
    <section id="video" className="section section--white" style={{ paddingTop: 24, paddingBottom: 120 }}>
      <div className="container">

        {/* Editorial meta strip */}
        <div className="s10-video-meta" style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          marginBottom: 20, paddingBottom: 14,
          borderBottom: "1px solid var(--color-neutral-200)",
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em",
          textTransform: "uppercase", color: "var(--color-neutral-500)"
        }}>
          <span>SHIFT10 · VORSTELLUNG</span>
          <span>06.05.26 · DE / DE-SUB</span>
        </div>

        {/* YouTube embed */}
        <div style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          background: "var(--color-black)",
          overflow: "hidden",
          border: "1px solid var(--color-black)"
        }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/8y1i1xrx1nA?rel=0&modestbranding=1&color=white"
            title="Shift10 Vorstellung"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              border: "none", display: "block"
            }}
          ></iframe>
        </div>

        {/* Caption row */}
        <div style={{
          marginTop: 16, display: "flex", justifyContent: "space-between",
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.10em",
          textTransform: "uppercase", color: "var(--color-neutral-500)"
        }}>
          <span>WAS PASSIERT, WENN MIKE DIE TESTMASCHINE AUFKLAPPT.</span>
          <span>↑ PLAY</span>
        </div>

      </div>
    </section>
  );
}

Object.assign(window, { VideoSection });
