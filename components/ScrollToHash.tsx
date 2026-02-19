import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET = 96; // adjust later if needed

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = decodeURIComponent(hash.slice(1));

    let raf: number | null = null;
    let tries = 0;
    const maxTries = 60; // ~1s at 60fps

    let t1: number | null = null;
    let t2: number | null = null;
    let t3: number | null = null;

    const clearTimers = () => {
      if (t1) window.clearTimeout(t1);
      if (t2) window.clearTimeout(t2);
      if (t3) window.clearTimeout(t3);
      t1 = t2 = t3 = null;
    };

    const attempt = () => {
      const el = document.getElementById(id);

      if (el) {
        clearTimers();

        const targetY = () =>
          el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

        const snapIfOff = (thresholdPx: number) => {
          const diff = targetY() - window.pageYOffset;
          if (Math.abs(diff) > thresholdPx) {
            window.scrollTo({ top: targetY(), behavior: 'auto' });
          }
        };

        // Smooth once
        window.scrollTo({ top: targetY(), behavior: 'smooth' });

        // Then only “snap” if layout shift pushes us off
        t1 = window.setTimeout(() => snapIfOff(12), 180);
        t2 = window.setTimeout(() => snapIfOff(12), 380);
        t3 = window.setTimeout(() => snapIfOff(12), 650);

        return;
      }

      tries += 1;
      if (tries < maxTries) {
        raf = requestAnimationFrame(attempt);
      }
    };

    raf = requestAnimationFrame(attempt);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      clearTimers();
    };
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;

