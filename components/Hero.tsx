import React from 'react';
import Section from './Section';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <Section id="hero" background="white" padding="md">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-realvo-teal/10 text-realvo-teal text-xs font-medium px-3 py-1 rounded-full mb-4">
            Enterprise Storytelling Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-realvo-charcoal mb-6">
            Authentic Voices.
            <br />
            Real Impact.
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-10">
            From corporate conferences and campus events to healthcare or
            community programs, RealVo gives people a trusted way to share their
            voices and experiences on video — in person or online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" variant="primary">
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              How RealVo Works
            </Button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-realvo-light">
            <img
              src="/hero-video-placeholder.png"
              alt="Recording Experience"
              className="w-full h-full object-cover opacity-80"
            />

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-lg p-4 rounded-lg shadow-md max-w-[85%]">
              <span className="block text-xs text-gray-500 mb-1">
                RECORDING IN PROGRESS
              </span>
              <p className="text-sm font-medium text-gray-800">
                “This program really changed how I view leadership...”
              </p>
            </div>

            {/* Insight Badge */}
            <div className="absolute bottom-[-22px] left-6 bg-white shadow-md px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 animate-fade-in-up">
              <span className="inline-block w-4 h-4 rounded-full bg-green-500"></span>
              Insight Captured
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Hero;
