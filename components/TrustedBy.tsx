import React from 'react';
import Section from './Section';

interface Client {
  name: string;
  logo: string;
  className: string;
}

const clients: Client[] = [
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    className: "h-8 md:h-10"
  },
  {
    name: "Stanford University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Stanford_University_logo_2003.svg",
    className: "h-10 md:h-12"
  },
  {
    name: "UPMC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/UPMC_Logo.svg",
    className: "h-6 md:h-8"
  },
  {
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    className: "h-12 md:h-16"
  },
  {
    name: "Duke University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Duke_University_logo.svg",
    className: "h-10 md:h-12"
  },
  {
    name: "Barnes Jewish Hospital",
    logo: "https://logo.clearbit.com/barnesjewish.org",
    className: "h-12 md:h-14"
  }
];

const TrustedBy: React.FC = () => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
     const img = e.currentTarget;
     const parent = img.parentElement;
     if (parent) {
       img.style.display = 'none';
       // Prevent duplicate text nodes if error fires multiple times
       if (!parent.innerText) {
           parent.innerText = img.alt;
           parent.className = "flex-shrink-0 flex items-center justify-center px-4 text-lg font-bold text-gray-400 whitespace-nowrap";
       }
     }
  };

  return (
    <Section className="py-12 border-y border-gray-100 dark:border-gray-800 overflow-hidden" background="light">
      <div className="text-center mb-10">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Trusted by Leading Organizations
        </h3>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        
        {/* Animated Track: Using w-max to let content dictate width, preventing overlap */}
        <div className="flex animate-scroll w-max gap-16 px-8 hover:[animation-play-state:paused] items-center">
            {/* Double the list for seamless loop */}
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center mx-4">
                 <img 
                   src={client.logo} 
                   alt={client.name} 
                   className={`${client.className} w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer dark:invert-[.25] dark:hover:invert-0`}
                   onError={handleError}
                 />
              </div>
            ))}
        </div>
        
        {/* Gradient Fades for smooth edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-realvo-light dark:from-[#232830] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-realvo-light dark:from-[#232830] to-transparent z-10 pointer-events-none"></div>
      </div>
    </Section>
  );
};

export default TrustedBy;