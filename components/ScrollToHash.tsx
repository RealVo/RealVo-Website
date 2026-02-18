import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');

    const scroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    };

    // Try immediately, then once more after render/layout settles
    scroll();
    const t = window.setTimeout(scroll, 50);

    return () => window.clearTimeout(t);
  }, [hash, pathname]);

  return null;
};

export default ScrollToHash;
