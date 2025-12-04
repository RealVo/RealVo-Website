import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const navLinks = [
  { label: 'Why RealVo', targetId: 'why-realvo' },
  { label: 'How It Works', targetId: 'how-it-works' },
  { label: 'Solutions', targetId: 'solutions' },
  { label: 'Who We Serve', targetId: 'industries' },
  { label: 'Pricing', targetId: 'pricing' },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const isHome =
      typeof window !== 'undefined' && window.location.pathname === '/';

    // Always close mobile nav first
    setMobileOpen(false);

    if (isHome) {
      const el = document.getElementById(id);
      if (!el) return;

      // Give the layout a moment to update, then scroll using scrollIntoView
      window.setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      // From a sub-page, go back to the homepage at the correct section
      window.location.href = `/#${id}`;
    }
  };

  const scrollToTop = () => {
    const isHome =
      typeof window !== 'undefined' && window.location.pathname === '/';

    setMobileOpen(false);

    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // From any sub-page, go back to the homepage
      window.location.href = '/';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-realvo-blue rounded-md"
          >
            <img src="/logo.png" alt="RealVo" className="h-7 w-auto" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                type="button"
                onClick={() => scrollToSection(link.targetId)}
                className="relative transition-colors hover:text-realvo-blue"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop Contact button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              variant="primary"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-realvo-blue focus:outline-none focus:ring-2 focus:ring-realvo-blue"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.targetId}
                type="button"
                onClick={() => scrollToSection(link.targetId)}
                className="block w-full text-left py-2 text-[15px] font-medium text-gray-700 hover:text-realvo-blue"
              >
                {link.label}
              </button>
            ))}

            <Button
              size="sm"
              variant="primary"
              className="mt-2 w-full"
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
