import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET = 96; // adjust if needed to match header height

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    let raf = 0;
    let tries = 0;
    const maxTries = 60;

    const attempt = () => {
      const el = document.getElementById(id);

      if (el) {
  const scrollToEl = (behavior: ScrollBehavior) => {
    const y =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      HEADER_OFFSET;

    window.scrollTo({ top: y, behavior });
  };

  // 1) Initial scroll
  scrollToEl('auto');

  // 2) Re-apply after layout settles (images/fonts/cards can shift height)
  const t1 = window.setTimeout(() => scrollToEl('auto'), 80);
  const t2 = window.setTimeout(() => scrollToEl('auto'), 220);
  const t3 = window.setTimeout(() => scrollToEl('auto'), 500);

  // Cleanup timers if route changes quickly
  return () => {
    window.clearTimeout(t1);
    window.clearTimeout(t2);
    window.clearTimeout(t3);
  };
}

      tries += 1;
      if (tries < maxTries) raf = requestAnimationFrame(attempt);
    };

    raf = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(raf);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
