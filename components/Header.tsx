import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-white/90 backdrop-blur border-b border-gray-100 sticky top-0 z-30">
      {/* Brand */}
      <a href="#" className="flex items-center gap-2">
        <span className="text-2xl font-extrabold tracking-tight text-realvo-blue">
          RealVo
        </span>
        <span className="inline-flex items-center justify-center rounded-md border border-realvo-blue/30 text-realvo-blue text-[11px] font-semibold px-1.5 py-0.5 leading-none">
          ▷
        </span>
      </a>

      {/* Navigation */}
      <nav className="hidden md:flex gap-8 text-sm font-medium text-realvo-charcoal">
        <a href="#why-realvo" className="hover:text-realvo-blue transition-colors">
          Why RealVo
        </a>
        <a href="#how-it-works" className="hover:text-realvo-blue transition-colors">
          How It Works
        </a>
        <a href="#solutions" className="hover:text-realvo-blue transition-colors">
          Solutions
        </a>
        <a href="#pricing" className="hover:text-realvo-blue transition-colors">
          Pricing
        </a>
      </nav>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <Button size="sm" variant="primary">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
