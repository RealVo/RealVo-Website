import React, { useEffect, useRef, useState } from 'react';
import Section from './Section';

interface Client {
  name: string;
  logo: string;
  className: string;
}

const clients: Client[] = [
  // Original 14
  { name: "Microsoft", logo: "/trusted_by_logos/microsoft.png", className: "h-24 md:h-32" },
  { name: "Stanford University", logo: "/trusted_by_logos/stanford.png", className: "h-24 md:h-32" },
  { name: "UPMC", logo: "/trusted_by_logos/upmc.png", className: "h-24 md:h-32" },
  { name: "Ford", logo: "/trusted_by_logos/ford.png", className: "h-24 md:h-32" },
  { name: "Duke University", logo: "/trusted_by_logos/duke.png", className: "h-24 md:h-32" },
  { name: "Barnes Jewish Hospital", logo: "/trusted_by_logos/BarnesJewishHospital.png", className: "h-24 md:h-32" },
  { name: "ATT", logo: "/trusted_by_logos/ATT.png", className: "h-24 md:h-32" },
  { name: "Indiana University", logo: "/trusted_by_logos/IndianaU.png", className: "h-24 md:h-32" },
  { name: "CP Rail", logo: "/trusted_by_logos/CPRail.png", className: "h-24 md:h-32" },
  { name: "Banner Health", logo: "/trusted_by_logos/BannerHealth.png", className: "h-24 md:h-32" },
  { name: "Kelloggs", logo: "/trusted_by_logos/Kelloggs.png", className: "h-24 md:h-32" },
  { name: "Purdue", logo: "/trusted_by_logos/Purdue.png", className: "h-24 md:h-32" },
  { name: "Memorial Healthcare System", logo: "/trusted_by_logos/Memorial.png", className: "h-24 md:h-32" },
  { name: "Mastercard", logo: "/trusted_by_logos/Mastercard.png", className: "h-24 md:h-32" },
  // New 16
  { name: "Aviva", logo: "/trusted_by_logos/Aviva.png", className: "h-24 md:h-32" },
  { name: "Campbells", logo: "/trusted_by_logos/Campbells.png", className: "h-24 md:h-32" },
  { name: "City of Brampton", logo: "/trusted_by_logos/CityofBrampton.png", className: "h-24 md:h-32" },
  { name: "GlaxoSmithKline", logo: "/trusted_by_logos/GlaxoSmithKline.png", className: "h-24 md:h-32" },
  { name: "Laughing Cow", logo: "/trusted_by_logos/LaughingCow.png", className: "h-24 md:h-32" },
  { name: "Lego", logo: "/trusted_by_logos/Lego.png", className: "h-24 md:h-32" },
  { name: "LinkedIn", logo: "/trusted_by_logos/LinkedIn.png", className: "h-24 md:h-32" },
  { name: "Mohawk College", logo: "/trusted_by_logos/MohawkCollege.png", className: "h-24 md:h-32" },
  { name: "Novartis", logo: "/trusted_by_logos/Novartis.png", className: "h-24 md:h-32" },
  { name: "Participaction", logo: "/trusted_by_logos/Participaction.png", className: "h-24 md:h-32" },
  { name: "Rogers Sportsnet", logo: "/trusted_by_logos/RogersSportsnet.png", className: "h-24 md:h-32" },
  { name: "Swiss Chalet", logo: "/trusted_by_logos/SwissChalet.png", className: "h-24 md:h-32" },
  { name: "TD Bank", logo: "/trusted_by_logos/TDBank.png", className: "h-24 md:h-32" },
  { name: "Telus", logo: "/trusted_by_logos/Telus.png", className: "h-24 md:h-32" },
  { name: "Zendesk", logo: "/trusted_by_logos/Zendesk.png", className: "h-24 md:h-32" },
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
          Built on over 20 years of real-world experience.
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
