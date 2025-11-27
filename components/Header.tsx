import React, { useEffect, useState } from 'react';
import Button from './Button';

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: 'why-realvo', label: 'Why RealVo' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'industries', label: 'Industries' },
  { id: 'pricing', label: 'Pricing' }
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const viewportTrigger = 140;
      let current: string | null = null;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const inView = rect.top <= viewportTrigger && rect.bottom >= viewportTrigger;

        if (inView) {
          current = item.id;
          break;
        }
      }

      if (!current && window.scrollY < 200) {
        current = null;
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const rect = el.getBoundingClientRect();
    const scrollTarget = window.scrollY + rect.top + yOffset;

    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  };

  const handleNavClick = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <img
            src="/logo.png"
            alt="RealVo"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={[
                  'text-base md:text-lg font-medium transition-all duration-200',
                  'hover:scale-110',
                  isActive
                    ? 'text-realvo-blue scale-110 border-b-2 border-realvo-blue pb-1'
                    : 'text-gray-600 hover:text-realvo-blue'
                ].join(' ')}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" variant="primary">
            Contact Us
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 active:bg-gray-100"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-transform duration-200 ${
                mobileOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-opacity duration-200 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-transform duration-200 ${
                mobileOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={[
                    'block py-2 text-base font-medium',
                    isActive ? 'text-realvo-blue' : 'text-gray-700 hover:text-realvo-blue'
                  ].join(' ')}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="pt-2">
              <Button size="sm" variant="primary" className="w-full">
                Contact Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
