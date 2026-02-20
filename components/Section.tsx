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
    sm: 'py-8 md:py-10',
    md: 'py-12 md:py-16',
    lg: 'py-20 md:py-28'
  };

  // Sticky header anchor offset (applies to any section with an id)
const scrollMarginClass = id ? 'scroll-mt-32 md:scroll-mt-24' : '';

  return (
    <section
      id={id}
      className={`${paddingStyles[padding]} px-4 sm:px-6 lg:px-8 ${bgStyles[background]} ${className} ${scrollMarginClass}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;

