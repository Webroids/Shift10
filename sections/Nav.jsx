// Shift10 Landingpage — Header / Nav (responsive)
function Nav({ dark }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isTablet } = useBreakpoint();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when resizing to desktop
  React.useEffect(() => {
    if (!isTablet) setMenuOpen(false);
  }, [isTablet]);

  // Lock body scroll while menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: "Home",              href: "#hero" },
    { label: "So funktioniert's", href: "#so-funktionierts" },
    { label: "Über uns",          href: "#ueber-mike" },
    { label: "Kundenstimmen",     href: "#social-proof" },
    { label: "Preise & Angebot",  href: "#preise" },
    { label: "Kontakt",           href: "#kontakt" },
    { label: "FAQ",               href: "#faq" },
  ];

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={"nav" + (dark ? " nav--dark" : "") + (menuOpen ? " nav--menu-open" : "")}
        style={scrolled || menuOpen ? {} : { background: "transparent", borderBottomColor: "transparent" }}
      >
        <a href="#hero" className="logo" onClick={close}>
          <img src="assets/logo.svg" alt="Shift10" style={{ height: 36, width: "auto", display: "block" }} />
        </a>

        {/* Desktop nav links */}
        {!isTablet && (
          <nav className="nav-links">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {!isTablet && (
            <a href="#kontakt" className="btn btn--primary">
              Termin anfragen <span className="btn-arrow">→</span>
            </a>
          )}

          {/* Hamburger toggle */}
          {isTablet && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
              style={{
                background: "none", border: "none", padding: 0,
                cursor: "pointer", display: "flex", flexDirection: "column",
                gap: 5, width: 40, height: 40,
                alignItems: "center", justifyContent: "center",
                color: "var(--color-black)",
              }}
            >
              <span style={{
                display: "block", width: 22, height: 1.5,
                background: "currentColor",
                transition: "transform 260ms var(--ease-out)",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }} />
              <span style={{
                display: "block", width: 22, height: 1.5,
                background: "currentColor",
                transition: "opacity 160ms",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: 22, height: 1.5,
                background: "currentColor",
                transition: "transform 260ms var(--ease-out)",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }} />
            </button>
          )}
        </div>
      </header>

      {/* Full-screen slide-in menu */}
      {isTablet && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "var(--color-white)",
          zIndex: 98,
          display: "flex",
          flexDirection: "column",
          padding: "96px 28px 40px",
          overflowY: "auto",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 320ms var(--ease-out)",
        }}>
          <nav style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 5vw, 32px)",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "var(--color-black)",
                  textDecoration: "none",
                  padding: "18px 0",
                  borderBottom: "1px solid var(--color-neutral-100)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {l.label}
                <span style={{ color: "var(--color-accent)", opacity: 0.7, fontSize: "0.8em" }}>→</span>
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            onClick={close}
            className="btn btn--accent"
            style={{ marginTop: 32, justifyContent: "center", padding: "16px 24px" }}
          >
            Termin anfragen <span className="btn-arrow">→</span>
          </a>
        </div>
      )}
    </>
  );
}

function Shift10Mark({ size = 22, color }) {
  const c = color || "currentColor";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 1,
      fontFamily: "var(--font-display)", fontWeight: 700, fontSize: size,
      letterSpacing: "-0.04em", color: c,
    }}>
      Shift1
      <span style={{
        display: "inline-block", width: size * 0.13, height: size * 0.13,
        borderRadius: "50%", background: "var(--color-accent)",
        margin: `0 ${size * 0.04}px ${size * 0.16}px`,
      }} />
      0
    </span>
  );
}

Object.assign(window, { Nav, Shift10Mark });
