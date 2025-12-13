import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark' | 'teal';
  padding?: 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  background = 'white',
  padding = 'lg'
}) => {
  const bgStyles = {
  white: 'bg-white dark:bg-realvo-charcoal',
  light: 'bg-realvo-light dark:bg-[#232830]',
  dark: 'bg-realvo-blue text-white',
  teal: 'bg-realvo-teal/10 dark:bg-realvo-teal/20',

  // NEW COLORS
  slate: 'bg-[#6A7F93] text-white',         // Soft Slate (section-friendly)
  'light-blue': 'bg-[#EEF2F5]'             // Very soft calm background
};

  const paddingStyles = {
    sm: 'py-8 md:py-10',
    md: 'py-12 md:py-16',
    lg: 'py-20 md:py-28'
  };

  // Add scroll margin only for the contact section so it isn't hidden under the sticky header
  const scrollMarginClass =
    id === 'contact' ? 'scroll-mt-24 md:scroll-mt-32' : '';

  return (
    <section
      id={id}
      className={`${scrollMarginClass} ${paddingStyles[padding]} px-4 sm:px-6 lg:px-8 ${bgStyles[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
