import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VirtualVideoBooth: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * CTA "matter" animation trigger:
   * - animates when CTA comes into view
   * - re-animates every time it re-enters
   */
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [ctaAnimKey, setCtaAnimKey] = useState(0);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setCtaAnimKey(k => k + 1);
        }
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
              href="/#solutions"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Capture Options
            </a>

            {/* Hero / Overview */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
              {/* Image / hero visual */}
              <div
                className="
                  relative rounded-3xl bg-white dark:bg-slate-900 overflow-hidden
                  shadow-sm border border-slate-200/70 dark:border-slate-800/80
                  flex items-center justify-center
                  h-[320px] sm:h-[380px] lg:h-[430px]
                "
              >
                <img
                  src="/virtual_booth.png"
                  alt="RealVo Virtual Video Booth"
                  className="h-full w-auto object-contain object-center"
                />
              </div>

              {/* Text content */}
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                    Capture Option
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Virtual Video Booth
                    <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-1">
                      A link-based video capture experience that works anywhere, on any device.
                    </span>
                  </h1>
                </div>

                {/* Tags / Feature Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'No hardware required',
                    'Works on any device',
                    'Link or QR access',
                    'Guided recording flow',
                    'Fast to deploy',
                  ].map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
                  The Virtual Video Booth enables participants to record authentic
                  stories remotely using a simple link. It’s ideal for distributed
                  teams, short pilots, and programs that need speed and reach
                  without physical setup.
                </p>

                {/* Primary CTA */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-realvo-blue text-white dark:bg-sky-500 dark:text-slate-950 hover:bg-realvo-blue/90 dark:hover:bg-sky-400 transition"
                  >
                    Request pricing &amp; access
                  </a>
                </div>
              </div>
            </div>

            {/* Features with purpose */}
            <div className="mt-10 sm:mt-14 lg:mt-16">
              <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-4 sm:mb-5">
                Features with purpose
              </h2>

              <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 max-w-3xl">
                <li className="pl-3 -indent-3">
                  • <strong>Invites participation instantly</strong> using a single link or QR code
                </li>
                <li className="pl-3 -indent-3">
                  • <strong>Guided prompts reduce hesitation</strong> and help participants stay focused
                </li>
                <li className="pl-3 -indent-3">
                  • <strong>No facilitation required</strong>, making it easy to run pilots or time-boxed campaigns
                </li>
                <li className="pl-3 -indent-3">
                  • <strong>Consistent recording quality</strong> across phones, tablets, and laptops
                </li>
                <li className="pl-3 -indent-3">
                  • <strong>Integrated with VideoBooth.tv</strong> for centralized review and publishing
                </li>
              </ul>
            </div>

            {/* Ideal use cases */}
            <div className="mt-10 sm:mt-14 lg:mt-16 grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Ideal use cases
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
                  <li>Remote and hybrid team feedback</li>
                  <li>Distributed community engagement</li>
                  <li>Program pilots and proof-of-concepts</li>
                  <li>Time-sensitive campaigns or initiatives</li>
                  <li>Pre-event or post-event reflections</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Customization options
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
                  <li>Prompt design aligned to your goals</li>
                  <li>Branded intros, outros, and overlays</li>
                  <li>Audio, video, and photo capture</li>
                  <li>Embed on websites or distribute via link</li>
                  <li>Flexible publishing and integration workflows</li>
                </ul>
              </div>
            </div>

            {/* Capture option navigation */}
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <a
                href="/capture/desktop-tablet-kiosk"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-realvo-blue dark:text-sky-400 hover:text-realvo-blue/80 dark:hover:text-sky-300"
              >
                <span className="mr-1 text-base">←</span>
                Previous capture option: Desktop Tablet Kiosk
              </a>
            </div>

            {/* Final CTA band (IDENTICAL across all capture option pages) */}
            <div
              ref={ctaRef}
              className="mt-12 sm:mt-16 lg:mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-5 sm:px-8 py-7 sm:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            >
              <div>
                <p className="text-sm sm:text-base font-semibold tracking-wide text-slate-200/90 mb-2">
                  Ready to activate RealVo?
                </p>

                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  Make voices{' '}
                  <span key={ctaAnimKey} className="text-realvo-teal animate-pulse-once-light">
                    matter
                  </span>
                  .
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                  Capture meaningful insight from the people you serve.
                </p>
              </div>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-realvo-teal text-white hover:bg-realvo-teal/90 transition whitespace-nowrap md:px-7 md:py-3.5"
              >
                Let&apos;s get started
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VirtualVideoBooth;
