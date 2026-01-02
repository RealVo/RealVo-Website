import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VISIBLE_DESKTOP_IMAGES = 4;

const BOOTH_ACTION_IMAGES = [
  {
    src: '/capture/private-enclosed-booth/air-force-collage.jpg',
    alt: 'RealVo activation - Air Force event',
  },
  {
    src: '/capture/private-enclosed-booth/lucid-collage.jpg',
    alt: 'RealVo activation - Lucid event',
  },
  {
    src: '/capture/private-enclosed-booth/att-collage.jpg',
    alt: 'RealVo activation - AT&T event',
  },
  {
    src: '/capture/private-enclosed-booth/morel-global-collage.jpg',
    alt: 'RealVo activation - Morel Global event',
  },
  {
    src: '/capture/private-enclosed-booth/dollar-general-collage.jpg',
    alt: 'RealVo activation - Dollar General event',
  },
];

const PrivateEnclosedBooth: React.FC = () => {
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(prev =>
      prev === null
        ? null
        : (prev + BOOTH_ACTION_IMAGES.length - 1) % BOOTH_ACTION_IMAGES.length
    );
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex(prev =>
      prev === null
        ? null
        : (prev + 1) % BOOTH_ACTION_IMAGES.length
    );
  };

  const currentLightboxImage =
    lightboxIndex !== null ? BOOTH_ACTION_IMAGES[lightboxIndex] : null;

  // Desktop carousel state (for Booth in action thumbnails)
  const [desktopStartIndex, setDesktopStartIndex] = useState(0);
  const totalImages = BOOTH_ACTION_IMAGES.length;
  const showDesktopArrows = totalImages > VISIBLE_DESKTOP_IMAGES;

  const desktopIndices = Array.from(
    { length: Math.min(VISIBLE_DESKTOP_IMAGES, totalImages) },
    (_, i) => (desktopStartIndex + i) % totalImages
  );

  const handleDesktopNext = () => {
    if (!showDesktopArrows) return;
    setDesktopStartIndex(prev => (prev + 1) % totalImages);
  };

  const handleDesktopPrev = () => {
    if (!showDesktopArrows) return;
    setDesktopStartIndex(prev => (prev - 1 + totalImages) % totalImages);
  };

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
              <div className="relative rounded-3xl bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-sm border border-slate-200/70 dark:border-slate-800/80">
                <img
                  src="/private_booth.png"
                  alt="RealVo Private Enclosed Booth"
                  className="w-full h-full object-cover"
                />
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

                {/* Tags / Feature Pills */}
                <div className="flex flex-wrap gap-2">
                  {[
                    'Self-contained capture studio',
                    'Maximum privacy + comfort',
                    'Commanding on-site presence',
                    'Brand-forward exterior wrap',
                    'Self-guided recording UX',
                    'Efficient high-traffic throughput',
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
                  The Private Enclosed Booth gives you a stand-out presence
                  on-site. It invites participants to step away from the noise and
                  capture honest, high-quality messages — from feedback and
                  reflections to testimonials, well-wishes, and more.
                </p>

                {/* Primary CTA */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-realvo-blue text-white dark:bg-sky-500 dark:text-slate-950 hover:bg-realvo-blue/90 dark:hover:bg-sky-400 transition"
                  >
                    Request pricing &amp; availability
                  </a>
                </div>
              </div>
            </div>

            {/* Booth in action – carousel on desktop, swipe on mobile */}
            <div className="mt-10 sm:mt-14 lg:mt-16">
              <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-4 sm:mb-5">
                Booth in action
              </h2>

              {/* Desktop: 4-image carousel with arrows (no scrollbar) */}
              <div className="hidden md:flex items-center gap-4">
                {showDesktopArrows && (
                  <button
                    type="button"
                    onClick={handleDesktopPrev}
                    className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-realvo-slate/30 bg-white text-realvo-slate hover:bg-realvo-blue hover:border-realvo-blue hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-realvo-blue/60"
                    aria-label="Previous booth in action image"
                  >
                    ‹
                  </button>
                )}

                <div className="flex-1 grid grid-cols-4 gap-4">
                  {desktopIndices.map(imageIndex => {
                    const image = BOOTH_ACTION_IMAGES[imageIndex];
                    return (
                      <button
                        key={imageIndex}
                        type="button"
                        onClick={() => openLightbox(imageIndex)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-realvo-blue/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </button>
                    );
                  })}
                </div>

                {showDesktopArrows && (
                  <button
                    type="button"
                    onClick={handleDesktopNext}
                    className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-realvo-slate/30 bg-white text-realvo-slate hover:bg-realvo-blue hover:border-realvo-blue hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-realvo-blue/60"
                    aria-label="Next booth in action image"
                  >
                    ›
                  </button>
                )}
              </div>

              {/* Mobile: horizontal swipe */}
              <div className="md:hidden overflow-x-auto mx-0">
                <div className="flex gap-4 pb-2 snap-x snap-mandatory">
                  {BOOTH_ACTION_IMAGES.map((image, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => openLightbox(index)}
                      className="group snap-start shrink-0 w-64 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-realvo-blue/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-44 sm:h-52 object-cover transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 md:hidden">
                Swipe sideways to see more images. Tap to view larger.
              </p>
            </div>

            {/* Features with purpose + Tech specs */}
            <div
              id="tech-specs"
              className="mt-10 sm:mt-14 lg:mt-16 grid gap-10 lg:grid-cols-2"
            >
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-4 sm:mb-5">
                  Features with purpose
                </h2>

                <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200">
                  <li className="pl-3 -indent-3">
                    • <strong>Sound-dampened interior</strong> helps participants
                    feel secure and speak freely — with clean, confident audio
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Consistent studio-grade lighting</strong> delivers
                    professional-looking results across every recording
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Immersive participant experience</strong> reduces
                    distractions and encourages honest expression
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Self-guided prompts</strong> support clear,
                    structured content — from quick feedback to deeper
                    reflections
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Smooth participant flow</strong> keeps lines moving
                    and lets more people take part
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Rapid setup + go-live</strong> handled by RealVo
                    means low client lift on-site
                  </li>
                  <li className="pl-3 -indent-3">
                    • <strong>Integrated with VideoBooth.tv</strong>, enabling centralized uploads, approvals, and publishing workflows
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-realvo-blue mb-4 sm:mb-5">
                  Technical specifications
                </h2>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 grid gap-y-3 sm:gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                  <div>
                    <p className="font-semibold">Camera &amp; audio</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      HD 1080p camera (30 fps) with directional microphone system
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Display &amp; interface</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      19" portrait touch display with branded UI and self-guided prompts
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Lighting</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Studio soft lighting optimized for flattering skin tones
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Power</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Single standard 15A outlet (dedicated where possible)
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
                    <p className="font-semibold">Storage</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      970GB Local SSD / USB export, VB.tv upload, or network transfer
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Footprint</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Approx. 8&apos;W x 8&apos;L x 8&apos;H (plus queue space)
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Set up time</p>
                    <p className="text-slate-600 dark:text-slate-300">
                      ~1.5–2 hours from arrival to first recording
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

            <div className="mt-10 sm:mt-14 lg:mt-16 grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Ideal use cases
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
                  <li>Employee &amp; leadership storytelling</li>
                  <li>Customer or patient testimonials</li>
                  <li>Student, alumni &amp; donor reflections</li>
                  <li>Wellness &amp; community voice programs</li>
                  <li>Conference insights &amp; speaker reactions</li>
                  <li>Innovation feedback &amp; idea capture</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Customization options
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
                  <li>Audio, text, and photo capture support</li>
                  <li>Immersive branded interface (video intros + voice-over prompts)</li>
                  <li>Full exterior + interior creative branding</li>
                  <li>White-label activation ready</li>
                  <li>External display options (live-feed, promo reel, or user content)</li>
                  <li>Instant upload to VideoBooth.tv &amp; media integrations</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 sm:mt-14 flex justify-end">
              <a
                href="/capture/free-standing-kiosk"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-realvo-blue dark:text-sky-400 hover:text-realvo-blue/80 dark:hover:text-sky-300"
              >
                Next capture option: Free-standing Kiosk
                <span className="ml-1 text-base">→</span>
              </a>
            </div>

            {/* Final CTA band (IDENTICAL across all capture option pages) */}
            <div className="mt-12 sm:mt-16 lg:mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-5 sm:px-8 py-7 sm:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 mb-2">
                  READY TO ACTIVATE REALVO?
                </p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  Make voices matter.
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                  Capture meaningful insight from the people you serve.
                </p>
              </div>

              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-white text-slate-900 hover:bg-slate-100 transition whitespace-nowrap"
              >
                Let&apos;s get started
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox modal */}
      {currentLightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 sm:px-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Booth in action image viewer"
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-10 right-0 text-slate-200 hover:text-white text-sm sm:text-base"
              onClick={closeLightbox}
            >
              Close ✕
            </button>

            <div className="relative w-full flex items-center justify-center bg-white p-2">
              <img
                src={currentLightboxImage.src}
                alt={currentLightboxImage.alt}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={showPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 sm:-translate-x-10 rounded-full bg-black/60 hover:bg-black/80 text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 sm:translate-x-10 rounded-full bg-black/60 hover:bg-black/80 text-white w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-lg"
            >
              ›
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PrivateEnclosedBooth;
