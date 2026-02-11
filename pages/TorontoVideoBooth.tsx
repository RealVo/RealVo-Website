import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TorontoVideoBooth: React.FC = () => {
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * CTA animation trigger (unchanged pattern)
   */
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [ctaAnimKey, setCtaAnimKey] = useState(0);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) setCtaAnimKey(k => k + 1);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
            {/* Hero */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-10">
              {/* Copy (LEFT) */}
              <div className="space-y-4 sm:space-y-5 lg:pt-1">
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Toronto Video Booth Rentals for Organizations
                  </h1>

                  <p className="text-base sm:text-lg font-normal text-slate-500">
                    A fully managed, enterprise-grade video booth rental
                    solution designed to capture real stories and meaningful
                    insight.
                  </p>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'Enclosed, seated booth',
                    'Maximum privacy and comfort',
                    'Guided on-screen prompts',
                    'Commanding on-site presence',
                  ].map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                  Designed for teams that require more than casual testimonials
                  or DIY recordings. Participants are guided through a calm,
                  sound-controlled environment — producing consistent framing,
                  clear audio, and usable video stories.
                </p>

                <p className="text-sm sm:text-base text-realvo-blue font-semibold max-w-xl">
                  Built on over 20 years of real-world experience delivering professional video capture.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-realvo-blue text-white hover:bg-realvo-blue/90 transition"
                  >
                    Speak With Our Team
                  </a>
                </div>
              </div>

              {/* Visual (RIGHT) */}
              <div>
                <div className="relative rounded-3xl bg-white overflow-hidden shadow-sm border border-slate-200">
                  <div className="aspect-[4/3] w-full bg-white flex items-center justify-center p-0">
                    <img
                      src="/private_booth.png"
                      alt="RealVo enclosed video booth deployment"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>

                {/* Single caption ONLY (no duplicates anywhere else) */}
                <p className="mt-3 text-xs text-slate-500 mx-auto text-center">
                  Illustration only. UX, branding, and configuration are
                  customized per project.
                </p>

                {/* Local deployments note (under image to balance whitespace) */}
                <div className="mt-4 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-600">
                  <span className="font-semibold text-slate-700">
                    Local deployments only.
                  </span>{' '}
                  Limited availability across the Greater Toronto Area.
                </div>
              </div>
            </div>

            {/* Who this is for */}
<div className="mt-12 sm:mt-16 bg-slate-100 py-10">
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2">
    <p className="col-span-full text-lg sm:text-xl font-medium text-slate-800 leading-relaxed">
      Our Toronto video booth rentals support corporate environments, universities, healthcare institutions, and community organizations seeking professional on-site video capture.
    </p>

    <div
      className="
        group
        bg-white
        p-10 rounded-2xl
        border border-slate-300
        shadow-md
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-3">
        Who this is for
      </h2>
      <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-700 list-disc pl-5">
        <li>Employee &amp; leadership storytelling</li>
        <li>Customer, client, or patient testimonials</li>
        <li>Student, alumni &amp; donor reflections</li>
        <li>Conference insights &amp; speaker reactions</li>
      </ul>
    </div>

    <div
      className="
        group
        bg-white
        p-10 rounded-2xl
        border border-slate-300
        shadow-md
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg
      "
    >
      <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-3">
        Not intended for
      </h2>
      <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-700 list-disc pl-5">
        <li>Weddings, parties, or novelty events</li>
        <li>Consumer photo booth rentals</li>
        <li>DIY tablet testimonial stations</li>
        <li>High-volume entertainment activations</li>
      </ul>
    </div>
  </div>
</div>

            {/* Technical specifications */}
            <div className="mt-10 sm:mt-14">
              <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-4 sm:mb-5">
                Technical Specifications
              </h2>

              <div className="grid gap-y-6 gap-x-10 text-xs sm:text-sm text-slate-700 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p className="font-semibold">Camera &amp; audio</p>
                  <p className="text-slate-600">
                    HD 1080p camera (30 fps) with directional microphone system
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Lighting</p>
                  <p className="text-slate-600">
                    Dimmable lighting optimized for flattering skin tones
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Power</p>
                  <p className="text-slate-600">
                    Single standard 15A outlet (dedicated where possible)
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Footprint</p>
                  <p className="text-slate-600">
                    Approx. 8&apos;W × 8&apos;L × 8&apos;H (plus queue space)
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Setup time</p>
                  <p className="text-slate-600">
                    ~1.5–2 hours from arrival to first recording
                  </p>
                </div>

                <div>
                  <p className="font-semibold">On-site support</p>
                  <p className="text-slate-600">
                    RealVo technician(s) or trained partner staff
                  </p>
                </div>
              </div>

              <p className="mt-10 pt-6 border-t border-slate-200 text-sm sm:text-base text-slate-600">
                Captured content is securely managed, reviewed, and organized
                through the VideoBooth.tv platform, with export options for
                internal communications, research, and reporting needs.
              </p>
            </div>

            {/* CTA band */}
            <div
              ref={ctaRef}
              className="mt-14 sm:mt-18 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 sm:px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            >
              <div>
                <p className="text-sm font-semibold tracking-wide text-slate-200/90 mb-2">
                  Serving Toronto &amp; the GTA
                </p>

                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  Make voices{' '}
                  <span
                    key={ctaAnimKey}
                    className="text-realvo-teal animate-pulse-once-light"
                  >
                    matter
                  </span>
                  .
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                  Let’s discuss your upcoming project.
                </p>
              </div>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-realvo-teal text-white hover:bg-realvo-teal/90 transition"
              >
                Talk to us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TorontoVideoBooth;

