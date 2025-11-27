import React from 'react';
import Section from './Section';

const Hero: React.FC = () => {
  return (
    <Section
      id="hero"
      background="white"
      className="pt-10 md:pt-16 pb-10 md:pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-realvo-blue bg-realvo-light rounded-full">
            Enterprise Storytelling Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-realvo-charcoal mb-6 leading-tight">
            Authentic Voices.
            <br />
            Real Impact.
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            From corporate conferences and campus events to healthcare or
            community programs, RealVo gives people a trusted way to share their
            voices and experiences on video — in person or online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-realvo-blue text-white rounded-lg font-semibold hover:bg-realvo-blue/90 transition"
            >
              Contact Us
            </a>

            <a
              href="#howitworks"
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
            >
              How RealVo Works
            </a>
          </div>
        </div>

        {/* RIGHT SIDE PLACEHOLDER / VISUAL */}
        <div className="hidden lg:block">
          <div className="relative h-[420px] w-full bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
            {/* This is your existing hero animation / video / graphic */}
            {/* Keeping as-is since your original site displays fine */}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
