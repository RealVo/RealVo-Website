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
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            {/* Back link */}
            <a
              href="/"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 hover:text-realvo-blue transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to RealVo
            </a>

            {/* Hero */}
<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-start lg:gap-10">
  {/* Copy */}
  <div className="space-y-5 sm:space-y-6">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue mb-2">
        Toronto &amp; GTA
      </p>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
        Structured Video Booth Rentals
        <span className="block text-base sm:text-lg font-normal text-slate-500 mt-1">
          A premium, enclosed video booth experience for organizations across Toronto and the Greater Toronto Area.
        </span>
      </h1>
    </div>

    {/* (keep your pills, paragraphs, VBPlatform line, CTA here) */}
    {/* ... */}
  </div>

  {/* Visual */}
  <div>
    <div className="relative rounded-3xl bg-white overflow-hidden shadow-sm border border-slate-200">
      <div className="aspect-[4/3] w-full bg-slate-50 flex items-center justify-center p-6">
        <img
          src="/private_booth.png"
          alt="RealVo enclosed video booth deployment"
          className="h-full w-full object-contain"
        />
      </div>
    </div>

    <p className="mt-3 text-xs text-slate-500 max-w-sm">
      Illustrative deployment shown. Booth configuration, branding, and exterior / backdrop wraps are project-specific.
    </p>

    <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs sm:text-sm text-slate-600 max-w-md">
      <span className="font-semibold text-slate-700">Local deployments only.</span>{' '}
      Limited availability across Toronto &amp; the GTA. Exploratory conversations welcome.
    </div>
  </div>
</div>
            
                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'Enclosed, seated booth',
                    'Sound-dampened environment',
                    'Guided on-screen prompts',
                    'Consistent framing & audio',
                    'Commanding on-site presence',
                    'Local Toronto deployment',
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
                  RealVo provides a structured video booth designed for organizations that need more than casual testimonials or DIY
                  recordings. Participants are guided through a calm, distraction-free experience — resulting in consistent, usable video stories.
                </p>

                <p className="text-sm sm:text-base text-slate-600 max-w-xl">
                  Built on over 20 years of real-world experience delivering structured video capture for organizations.
                </p>

                <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
                  Captured content is securely managed, reviewed, and organized through the VideoBooth.tv platform.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-realvo-blue text-white hover:bg-realvo-blue/90 transition"
                  >
                    Start a Toronto conversation
                  </a>
                </div>
              </div>
            </div>

            {/* Who this is for */}
            <div className="mt-12 sm:mt-16 grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-3">
                  Who this is for
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-700 list-disc pl-5">
                  <li>Employee experience &amp; engagement initiatives</li>
                  <li>University and college student storytelling</li>
                  <li>Community, research, and qualitative insight projects</li>
                  <li>Internal communications and program feedback</li>
                </ul>
              </div>

              <div>
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

            {/* Technical specifications */}
            <div className="mt-12 sm:mt-16">
              <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-4 sm:mb-5">
                Technical specifications
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
            </div>

            {/* CTA band */}
            <div
              ref={ctaRef}
              className="mt-14 sm:mt-18 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 sm:px-8 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            >
              <div>
                <p className="text-sm font-semibold tracking-wide text-slate-200/90 mb-2">
                  Toronto &amp; GTA deployments
                </p>

                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  Make voices{' '}
                  <span key={ctaAnimKey} className="text-realvo-teal animate-pulse-once-light">
                    matter
                  </span>
                  .
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                  Exploratory conversations welcome. Local projects only.
                </p>
              </div>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-realvo-teal text-white hover:bg-realvo-teal/90 transition whitespace-nowrap"
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
