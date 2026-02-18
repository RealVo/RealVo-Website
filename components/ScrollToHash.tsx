import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');
    let rafId = 0;
    let attempts = 0;
    const maxAttempts = 30; // ~0.5s at 60fps

    const tryScroll = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return; // success
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        rafId = requestAnimationFrame(tryScroll);
      }
    };

    // kick off on next frame to allow route render
    rafId = requestAnimationFrame(tryScroll);

    return () => cancelAnimationFrame(rafId);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
