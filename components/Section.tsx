import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark' | 'teal' | 'slate' | 'light-blue';
  padding?: 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  background = 'white',
  padding = 'lg'
}) => {
  const bgStyles: Record<NonNullable<SectionProps['background']>, string> = {
    white: 'bg-white dark:bg-realvo-charcoal',
    light: 'bg-realvo-light dark:bg-[#232830]',
    dark: 'bg-realvo-blue text-white',
    teal: 'bg-realvo-teal/10 dark:bg-realvo-teal/20',

    // NEW COLORS
    slate: 'bg-[#6A7F93] text-white',
    'light-blue': 'bg-[#EEF2F5]'
  };

  const paddingStyles: Record<NonNullable<SectionProps['padding']>, string> = {
    sm: 'pt-8 pb-8 md:pt-10 md:pb-10',
    md: 'pt-12 pb-12 md:pt-16 md:pb-16',
    lg: 'pt-20 pb-20 md:pt-28 md:pb-28'
  };

  // Sticky header anchor offset (applies to any section with an id)
const scrollMarginClass = id ? 'scroll-mt-12 md:scroll-mt-10' : '';

  return (
    <section
      id={id}
      className={`${paddingStyles[padding]} px-4 sm:px-6 lg:px-8 ${bgStyles[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {id ? <div id={id} className="h-0 scroll-mt-20 md:scroll-mt-16" /> : null}
        {children}
      </div>
    </section>
  );
};

export default Section;

