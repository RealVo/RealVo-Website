import React from 'react';
import Section from './Section';
import { CaptureOption } from '../types';
import Button from './Button';
import { ImageOff } from 'lucide-react';

const options: CaptureOption[] = [
  {
    title: "Private Enclosed Booth",
    description:
      "Sound-dampened, private, reflective environment. Ideal for deep emotional stories in busy venues.",
    image: "/private_booth.png", // assuming these are in /public
    features: ["Maximum Privacy", "Sound Isolation", "Premium Branding"],
  },
  {
    title: "Free-standing Kiosk",
    description:
      "Sleek, open-access capture for conferences and campuses. High visibility and fast deployment.",
    image: "/kiosk_booth.png",
    features: ["High Throughput", "Small Footprint", "Invite Interaction"],
  },
  {
    title: "Desktop Tablet Kiosk",
    description:
      "Compact and ideal for offices, clinics, and classrooms. Fits on any counter or table.",
    image: "/tablet_booth.png",
    features: ["Portable", "Counter-top", "Always-on"],
  },
  {
    title: "Virtual Video Booth",
    description:
      "Secure web-based recording from any device. Capture voices from anywhere in the world.",
    image: "/virtual_booth.png",
    features: ["Remote Access", "No App Required", "Mobile Friendly"],
  },
];

const CaptureOptions: React.FC = () => {
  return (
    <Section id="solutions">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal dark:text-white mb-4">
          Ways to Capture Stories
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Flexible hardware and software solutions designed for professional environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {options.map((option, idx) => (
          <div
            key={idx}
            className="group rounded-brand overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            {/* IMAGE AREA – no background, no overlay */}
            <div className="h-64 overflow-hidden relative flex items-center justify-center">
              <img
                src={option.image}
                alt={option.title}
                title={option.title}
                className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-700 relative z-10"
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

export default CaptureOptions;
