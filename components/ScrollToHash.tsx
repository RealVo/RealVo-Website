import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_OFFSET = 120; // adjust if needed (96–140 typical)

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;

  const y =
    el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  // Temporarily disable smooth scrolling so we land exactly
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = 'auto';

  window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });

  // Re-enable whatever was set before
  root.style.scrollBehavior = prev;

  return true;
}

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');
    let cancelled = false;

    // Try immediately + after a few “settle” moments to defeat layout shifts
    const attempts = [0, 50, 150, 300, 600];

    const timers: number[] = [];

    attempts.forEach((ms) => {
      const t = window.setTimeout(() => {
        if (cancelled) return;
        scrollToId(id);
      }, ms);
      timers.push(t);
    });

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
