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
  const targetY = () =>
    el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

  const snapIfOff = (thresholdPx: number) => {
    const diff = targetY() - window.pageYOffset;
    if (Math.abs(diff) > thresholdPx) {
      window.scrollTo({ top: targetY(), behavior: 'auto' }); // invisible correction
    }
  };

  // 1) Smooth scroll once
  window.scrollTo({ top: targetY(), behavior: 'smooth' });

  // 2) Correct only if layout shift moved us noticeably
  const t1 = window.setTimeout(() => snapIfOff(10), 120);
  const t2 = window.setTimeout(() => snapIfOff(10), 260);
  const t3 = window.setTimeout(() => snapIfOff(10), 520);

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
