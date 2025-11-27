import React from 'react';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-realvo-charcoal transition-colors duration-300">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        <img
          src="/realvo-logo.svg"
          alt="RealVo Logo"
          className="h-8 w-auto dark:invert-0"
        />
      </a>

      {/* Navigation */}
      <nav className="hidden md:flex gap-10 text-realvo-charcoal dark:text-white">
        <a href="#why-realvo" className="hover:text-realvo-blue transition">Why RealVo</a>
        <a href="#how-it-works" className="hover:text-realvo-blue transition">How It Works</a>
        <a href="#solutions" className="hover:text-realvo-blue transition">Solutions</a>
        <a href="#pricing" className="hover:text-realvo-blue transition">Pricing</a>
      </nav>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <Button size="sm" variant="primary">
          Contact Us
        </Button>
      </div>
    </header>
  );
};

export default Header;
