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
        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          HEADER_OFFSET;

        window.scrollTo({
          top: y,
          behavior: 'smooth',
        });

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
