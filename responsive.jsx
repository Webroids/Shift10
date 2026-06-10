// Shift10 — shared responsive breakpoint hook
// Loaded before all section components so useBreakpoint is globally available.

function useBreakpoint() {
  const get = () => ({
    isMobile:  window.innerWidth < 640,   // phones
    isTablet:  window.innerWidth < 1024,  // tablets + phones (not desktop)
    isDesktop: window.innerWidth >= 1024,
    w: window.innerWidth,
  });
  const [bp, setBp] = React.useState(get);
  React.useEffect(() => {
    const fn = () => setBp(get());
    window.addEventListener('resize', fn, { passive: true });
    return () => window.removeEventListener('resize', fn);
  }, []);
  return bp;
}

Object.assign(window, { useBreakpoint });
