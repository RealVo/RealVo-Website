import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from './Button';

type NavLink =
  | { label: string; targetId: string; href?: never }
  | { label: string; href: string; targetId?: never };

const navLinks: NavLink[] = [
  { label: 'Why RealVo', targetId: 'why-realvo-exists' },
  { label: 'Industries', targetId: 'industries' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Solutions', targetId: 'solutions' },
];

const PROCESS_PLATFORM_ITEMS: NavLink[] = [
  { label: 'Implementation Process', targetId: 'process-platform' },
  { label: 'The User Experience', targetId: 'how-it-works' },
  { label: 'VideoBooth.tv Online Portal', href: '/vbplatform-more' }, // route
];

// Solid filled triangle caret (uses currentColor)
const SolidCaretDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 12 12" aria-hidden="true" focusable="false" className={className}>
    <path d="M6 9.5 1.5 3.5h9L6 9.5Z" fill="currentColor" />
  </svg>
);

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);
  const [processMobileOpen, setProcessMobileOpen] = useState(false);
  const processWrapRef = useRef<HTMLDivElement | null>(null);

  const goToHref = (href: string) => {
    setMobileOpen(false);
    setProcessOpen(false);
    setProcessMobileOpen(false);

    if (typeof window === 'undefined') return;
    window.location.href = href;
  };

  const scrollToTop = () => {
    setMobileOpen(false);
    setProcessOpen(false);
    setProcessMobileOpen(false);

    if (typeof window === 'undefined') return;

    const { pathname, hash } = window.location;
    const isHome = pathname === '/';

    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      if (hash) window.history.replaceState(null, '', '/');
    } else {
      window.location.href = '/';
    }
  };

  // Close the desktop dropdown on outside click + ESC
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!processWrapRef.current) return;
      if (!processWrapRef.current.contains(e.target as Node)) setProcessOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProcessOpen(false);
    };

    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex flex-col items-start leading-tight rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-realvo-blue"
          >
            <img src="/logo-header.png" alt="RealVo" className="h-7 w-auto" />
            <span className="hidden lg:block text-[10px] sm:text-[11px] text-gray-500 tracking-wide mt-1.5">
              Real Voices · Real Stories · Real Insights
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            {navLinks.map((link) => {
              if ('href' in link) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="relative transition-colors hover:text-realvo-blue"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <a
                  key={link.targetId}
                  href={`/#${link.targetId}`}
                  className="relative transition-colors hover:text-realvo-blue"
                >
                  {link.label}
                </a>
              );
            })}

            {/* Process & Platform dropdown (Desktop) */}
            <div
              ref={processWrapRef}
              className="relative"
              onMouseEnter={() => setProcessOpen(true)}
              onMouseLeave={() => setProcessOpen(false)}
            >
              <button
                type="button"
                onClick={() => setProcessOpen((v) => !v)}
                className="inline-flex items-center gap-2 relative transition-colors hover:text-realvo-blue"
                aria-haspopup="menu"
                aria-expanded={processOpen}
              >
                Process &amp; Platform
                <ChevronDown
                  className={`h-4 w-4 text-realvo-blue transition-transform ${
                    processOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div className="absolute left-0 right-0 top-full h-3 pointer-events-none" />

              {processOpen && (
                <div
                  role="menu"
                  className="absolute left-0 mt-0 w-64 rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden"
                >
                  <div className="py-2">
                    {PROCESS_PLATFORM_ITEMS.map((item) => {
                      if ('href' in item) {
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            role="menuitem"
                            onClick={() => setProcessOpen(false)}
                            className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-realvo-blue transition"
                          >
                            {item.label}
                          </a>
                        );
                      }

                      return (
                        <a
                          key={item.targetId}
                          href={`/#${item.targetId}`}
                          role="menuitem"
                          onClick={() => setProcessOpen(false)}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-realvo-blue transition"
                        >
                          {item.label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Program Structure (last) */}
            <a
              href="/#program-structure"
              className="relative transition-colors hover:text-realvo-blue"
            >
              Program Structure
            </a>
          </nav>

          {/* Desktop Contact button */}
          <div className="hidden lg:block">
            <a href="/contact">
              <Button size="sm" variant="primary">
                Contact Us
              </Button>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-realvo-blue focus:outline-none focus:ring-2 focus:ring-realvo-blue"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-1">
            {navLinks.map((link) => {
              if ('href' in link) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-left py-2 text-[15px] font-medium text-gray-700 hover:text-realvo-blue"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <a
                  key={link.targetId}
                  href={`/#${link.targetId}`}
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-left py-2 text-[15px] font-medium text-gray-700 hover:text-realvo-blue"
                >
                  {link.label}
                </a>
              );
            })}

            {/* Mobile accordion: Process & Platform */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setProcessMobileOpen((v) => !v)}
                className="w-full flex items-center justify-between py-2 text-[15px] font-medium text-gray-700 hover:text-realvo-blue"
              >
                <span>Process &amp; Platform</span>
                <SolidCaretDown
                  className={`h-3 w-3 text-realvo-blue transition-transform ${
                    processMobileOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {processMobileOpen && (
                <div className="pl-3">
                  {PROCESS_PLATFORM_ITEMS.map((item) => {
                    if ('href' in item) {
                      return (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => goToHref(item.href)}
                          className="block w-full text-left py-2 text-[15px] font-medium text-gray-700 hover:text-realvo-blue"
                        >
                          {item.label}
                        </button>
                      );
                    }

                    return (
                      <a
                        key={item.targetId}
                        href={`/#${item.targetId}`}
                        onClick={() => {
                          setProcessMobileOpen(false);
                          setMobileOpen(false);
                        }}
                        className="block w-full text-left py-2 text-[15px] font-medium text-gray-700 hover:text-realvo-blue"
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Program Structure (last, mobile) */}
            <a
              href="/#program-structure"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-left py-2 text-[15px] font-medium text-gray-700 hover:text-realvo-blue"
            >
              Program Structure
            </a>

            <a href="/contact" onClick={() => setMobileOpen(false)}>
              <Button size="sm" variant="primary" className="mt-2 w-full">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
