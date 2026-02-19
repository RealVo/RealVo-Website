import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.slice(1);
    let raf = 0;
    let tries = 0;
    const maxTries = 60; // ~1s at 60fps

    const attempt = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
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
