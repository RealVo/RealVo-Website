import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';

interface Client {
  name: string;
  logo: string;
  className: string;
}

const clients: Client[] = [
  { name: "Microsoft", logo: "/microsoft.png", className: "h-24 md:h-32" },
  { name: "Stanford University", logo: "/stanford.png", className: "h-24 md:h-32" },
  { name: "UPMC", logo: "/upmc.png", className: "h-24 md:h-32" },
  { name: "Ford", logo: "/ford.png", className: "h-24 md:h-32" },
  { name: "Duke University", logo: "/duke.png", className: "h-24 md:h-32" },
  { name: "Barnes Jewish Hospital", logo: "/BarnesJewishHospital.png", className: "h-24 md:h-32" },
  { name: "ATT", logo: "/ATT.png", className: "h-24 md:h-32" },
  { name: "Indiana University", logo: "/IndianaU.png", className: "h-24 md:h-32" },
  { name: "CP Rail", logo: "/CPRail.png", className: "h-24 md:h-32" },
  { name: "Banner Health", logo: "/BannerHealth.png", className: "h-24 md:h-32" },
  { name: "Kelloggs", logo: "/Kelloggs.png", className: "h-24 md:h-32" },
  { name: "Purdue", logo: "/Purdue.png", className: "h-24 md:h-32" },
  { name: "Memorial Healthcare System", logo: "/Memorial.png", className: "h-24 md:h-32" },
  { name: "Mastercard", logo: "/Mastercard.png", className: "h-24 md:h-32" }
];

const TrustedBy: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    const parent = img.parentElement;
    if (parent) {
      img.style.display = 'none';
      if (!parent.innerText) {
        parent.innerText = img.alt;
        parent.className =
          "flex-shrink-0 flex items-center justify-center px-4 text-lg font-bold text-gray-400 whitespace-nowrap";
      }
    }
  };

  useEffect(() => {
    let frameId: number;

    const updateActive = () => {
      const elems = logoRefs.current;
      if (!elems.length) {
        frameId = requestAnimationFrame(updateActive);
        return;
      }

      const centerX = window.innerWidth / 2;
      let closestIndex: number | null = null;
      let closestDistance = Infinity;

      elems.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const logoCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(logoCenterX - centerX);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== null) {
        setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
      }

      frameId = requestAnimationFrame(updateActive);
    };

    frameId = requestAnimationFrame(updateActive);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <Section
      padding="sm"
      className="border-y border-gray-100 dark:border-gray-800 overflow-hidden"
      background="light"
    >
      <div className="text-center mb-10">
        <h3 className="text-lg font-medium tracking-tight text-gray-600 dark:text-gray-300">
          Built on over 15 years of enterprise video capture experience.
        </h3>
      </div>

      <div className="relative w-full overflow-hidden group">
        <div className="flex animate-scroll w-max gap-16 px-8 hover:[animation-play-state:paused] items-center">
          {[...clients, ...clients].map((client, i) => {
            const isActive = i === activeIndex;

            return (
              <div
                key={i}
                ref={(el) => (logoRefs.current[i] = el)}
                className="flex-shrink-0 flex items-center justify-center mx-4"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${client.className} w-auto object-contain transform transition-all duration-700 ease-in-out cursor-pointer dark:invert-[.25] dark:hover:invert-0
                    ${
                      isActive
                        ? 'opacity-100 grayscale-0 scale-105'
                        : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'
                    }`}
                  onError={handleError}
                />
              </div>
            );
          })}
        </div>

        {/* Edge fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-realvo-light dark:from-[#232830] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-realvo-light dark:from-[#232830] to-transparent z-10 pointer-events-none" />
      </div>
    </Section>
  );
};

export default TrustedBy;

