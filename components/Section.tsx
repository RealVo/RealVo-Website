import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark';
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
    dark: 'bg-realvo-blue text-white'
  };

  const paddingStyles = {
    sm: 'py-8 md:py-10',
    md: 'py-12 md:py-16',
    lg: 'py-20 md:py-28'
  };

  return (
    <section
      id={id}
      className={`${paddingStyles[padding]} px-4 sm:px-6 lg:px-8 ${bgStyles[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;

