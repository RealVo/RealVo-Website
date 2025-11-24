import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  background?: 'white' | 'light' | 'dark';
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, background = 'white' }) => {
  const bgStyles = {
    white: 'bg-white dark:bg-realvo-charcoal',
    light: 'bg-realvo-light dark:bg-[#232830]', // Slightly lighter than charcoal
    dark: 'bg-realvo-blue text-white',
  };

  return (
    <section id={id} className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${bgStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;