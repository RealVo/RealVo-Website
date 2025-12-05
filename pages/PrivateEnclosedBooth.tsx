import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivateEnclosedBooth: React.FC = () => {
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            {/* Back link */}
            <button
              type="button"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
              onClick={() => window.history.back()}
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Capture Options
            </button>

            {/* Hero / Overview */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
              {/* Image / hero visual */}
              <div className="relative rounded-3xl bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-sm border border-slate-200/70 dark:border-slate-800/80">
                {/* TODO: replace src with your real hero image path */}
                <img
                  src="/private_booth.png"
                  alt="RealVo Private Enclosed Booth"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-[11px] sm:text-xs font-medium text-white flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Sound-dampened, studio-style capture
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                    Capture Option
                  </p>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                    Private Enclosed Booth
                    <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-1">
                      Designed to immerse participants in a focused and safe space.
                    </span>
                  </h1>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'On-site recording',
                    'Sound-dampened',
                    'High-traffic ready',
                    'Premium presence',
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
                  The RealVo Private Enclosed Booth gives you a stand-out,
                  presence on-site. It invites participants to
                  step away from the noise and record honest, high-quality
                  stories that feel cinematic yet effortless.
                </p>

                {/* Primary CTAs */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-realvo-blue text-white dark:bg-sky-500 dark:text-slate-950 hover:bg-realvo-blue/90 dark:hover:bg-sky-400 transition"
                  >
                    Plan this booth for my event
                  </a>
                  <a
                    href="#tech-specs"
                    className="inline-flex items-center justify-center rounded-full px-4 py-2.5 text-xs sm:text-sm font-medium border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-realvo-blue dark:hover:border-sky-400 transition"
                  >
                    View tech specs
                  </a>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Ideal for
                    </p>
                    <p className="mt-1 font-medium">
                      Conferences, summits & internal events
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Throughput
                    </p>
                    <p className="mt-1 font-medium">30–60 videos per hour*</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Footprint
                    </p>
                    <p className="mt-1 font-medium">
                      Approx. 8&apos; x 8&apos; (plus queue space)
                    </p>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-400 dark:text-slate-500">
                  *Actual throughput depends on prompt length, recording time,
                  and on-site flow.
                </p>
              </div>
            </div>

            {/* Animated image gallery */}
            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <h2 className="text-lg sm:text-xl font-semibold">Booth in action</h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Swipe on mobile • Hover to preview on desktop
                </p>
              </div>

              <div className="relative -mx-4 sm:mx-0">
                <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
                  {[
                    '/images/capture-options/portable-1.jpg',
                    '/images/capture-options/portable-2.jpg',
                    '/images/capture-options/portable-3.jpg',
                    '/images/capture-options/portable-4.jpg',
                  ].map((src, index) => (
                    <div
                      key={src}
                      className="snap-start shrink-0 w-64 sm:w-72 md:w-80 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group relative"
                    >
                      <img
                        src={src}
                        alt={`Private Enclosed Booth example ${index + 1}`}
                        className="w-full h-44 sm:h-52 md:h-56 object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key benefits + Tech specs */}
            <div
              id="tech-specs"
              className="mt-10 sm:mt-14 lg:mt-16 grid gap-10 lg:grid-cols-2"
            >
              {/* Benefits / experience */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Key benefits
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4">
                  The Private Enclosed Booth is built to quietly draw people in,
                  make them feel comfortable, and keep your production values
                  high.
                </p>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                  <li>
                    • <strong>Sound-dampened interior</strong> reduces ambient
                    noise, helping voices sound clear and confident.
                  </li>
                  <li>
                    • <strong>Premium branded exterior</strong> that feels like
                    a feature, not an afterthought, in your event space.
                  </li>
                  <li>
                    • <strong>Guided RealVo prompts</strong> to keep recordings
                    simple, structured, and emotionally engaging.
                  </li>
                  <li>
                    • <strong>Fast participant flow</strong> with clear signage
                    and accessible entry / exit.
                  </li>
                  <li>
                    • <strong>Turn-key setup</strong> handled by the RealVo team
                    or approved partners.
                  </li>
                </ul>

                <div className="mt-6 rounded-2xl border border-emerald-300/40 dark:border-emerald-400/30 bg-emerald-50/60 dark:bg-emerald-950/20 px-4 py-3 text-xs sm:text-sm text-emerald-900 dark:text-emerald-100">
                  <span className="font-semibold">Accessibility note:</span>{' '}
                  entry and interior layout can be tailored to your
                  accessibility and inclusion requirements.
                </div>
              </div>

              {/* Tech specs */}
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Technical specifications
                </h2>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 grid gap-y-3 sm:gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                  <div>
                    <p className="font-semibold">Set up time</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      ~1.5–2 hours from arrival to first recording
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Footprint</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Approx. 8&apos;W x 8&apos;L x 8&apos;H (plus queue space)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Power</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Two standard 15A outlets (dedicated where possible)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Internet</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      10 Mbps up/down preferred (offline fallback options
                      available)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Camera &amp; audio</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Cinema-grade camera and directional microphone system
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Lighting</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Studio soft lighting optimized for flattering skin tones
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Branding surfaces</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Exterior wrap, interior backdrop, and screen interface
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">On-site support</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      RealVo technician(s) or trained partner staff
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Use cases & customization */}
            <div className="mt-10 sm:mt-14 lg:mt-16 grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Ideal use cases
                </h2>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                  <li>
                    • Leadership and employee storytelling at internal summits
                  </li>
                  <li>• Customer or patient testimonials at conferences</li>
                  <li>• Alumni and donor stories at advancement events</li>
                  <li>• Community, health, or wellness program reflections</li>
                  <li>• Any moment where privacy and focus matter</li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Customization options
                </h2>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                  <li>• Full exterior wrap in your brand or campaign creative</li>
                  <li>• Custom backgrounds or physical set dressing inside</li>
                  <li>• Tailored RealVo prompt scripts and question flows</li>
                  <li>• White-label or co-branded participant experience</li>
                  <li>• Integration with your existing video platforms</li>
                </ul>
              </div>
            </div>

            {/* Final CTA band */}
            <div className="mt-12 sm:mt-16 lg:mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-5 sm:px-8 py-7 sm:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 mb-2">
                  Ready to activate RealVo
                </p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  Bring a{' '}
                  <span className="text-realvo-blue/90 dark:text-sky-400 animate-pulse-once">
                    focused
                  </span>{' '}
                  story space to your next event.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                  Share a few details about your program or conference and we&apos;ll
                  recommend the best way to use the Private Enclosed Booth with
                  RealVo.
                </p>
              </div>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-white text-slate-900 hover:bg-slate-100 transition whitespace-nowrap"
              >
                Talk to the RealVo team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivateEnclosedBooth;
