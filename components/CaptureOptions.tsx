import React from 'react';
import Section from './Section';
import { CaptureOption } from '../types';
import Button from './Button';
import { ImageOff } from 'lucide-react';

const options: CaptureOption[] = [
  {
    title: "Private Enclosed Booth",
    description:
      "Stand-out booth presence that invites people to share their voice comfortably and without distraction.",
    image: "/private_booth.png", // assuming these are in /public
    features: ["Sound Dampened Environment", "High-quality AV Capture", "Premium Brand Messaging"],
  },
  {
    title: "Free-standing Kiosk",
    description:
      "Sleek, approachable kiosk designed to make participation easy and comfortable in open public spaces.",
    image: "/kiosk_booth.png",
    features: ["Compact Footprint Design", "Setup In Minutes", "Flexible Placement Options"],
  },
  {
    title: "Desktop Tablet Kiosk",
    description:
      "Compact kiosk designed for flexible placement in offices, clinics, classrooms, and reception areas.",
    image: "/tablet_booth.png",
    features: ["Countertop Friendly Size", "Lightweight & Portable", "Carry-on Friendly"],
  },
  {
    title: "Virtual Video Booth",
    description:
      "Web-based recording from any device. Capture voices from anywhere in the world.",
    image: "/virtual_booth.png",
    features: ["Mobile Friendly Access", "No Download Required", "Hybrid Program Ready"],
  },
];

const CaptureOptions: React.FC = () => {
  return (
    <Section id="solutions">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white mb-6">
          <span className="text-realvo-blue">On-Site or Online</span> — RealVo Fits Your Program
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          Flexible hardware and software solutions designed for every environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map((option, idx) => (
          <div
            key={idx}
            className="group rounded-brand overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* IMAGE AREA – no background, no overlay */}
            <div className=""h-64 overflow-hidden relative flex items-center justify-center bg-white dark:bg-white p-4">
              <img
                src={option.image}
                alt={option.title}
                title={option.title}
                className="w-full h-full object-contain transform transition-transform duration-700 relative z-10 md:group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('image-error');
                }}
              />
              {/* Fallback placeholder if the image fails */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-4 text-center z-0">
                <ImageOff className="w-10 h-10 mb-2 opacity-50" />
                <span className="text-xs">Image not found:</span>
                <span className="text-xs font-mono mt-1 font-bold text-realvo-blue">
                  {option.image}
                </span>
              </div>
            </div>

            {/* TEXT AREA */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-realvo-charcoal dark:text-white mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
                {option.description}
              </p>

              <ul className="space-y-2 mb-6">
                {option.features.map((feat, i) => (
                  <li
                    key={i}
                    className="text-xs font-medium text-realvo-slate dark:text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-realvo-teal"></span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="secondary">View Specifications</Button>
      </div>
    </Section>
  );
};

export default CaptureOptions;
