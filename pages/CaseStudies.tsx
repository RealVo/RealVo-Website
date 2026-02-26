import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type CaseStudy = {
  id: string;
  client: string;
  sector: string;
  year: string;
  headline: string;
  teaser: string;          // short 1–2 sentence card teaser
  fullStory: string;       // full copy shown inside lightbox
  pullQuote?: string;
  pullQuoteAttrib?: string;
  tags: string[];
  image: string;           // card thumbnail
  imageAlt: string;
  lightboxImages?: { src: string; alt: string }[];  // slider images
  placeholder?: boolean;
};

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const CASE_STUDIES: CaseStudy[] = [
  // ── DUKE CHAPEL ──────────────────────────────────────────────────────────
  {
    id: 'duke-chapel',
    client: 'Duke Chapel',
    sector: 'Higher Education',
    year: '2023',
    headline: '"Say the Thing" — Student Storytelling Across Campus',
    teaser:
      'Three custom Free-standing Kiosks deployed across Duke University campus — inviting hundreds of students, faculty, and visitors to reflect and record.',
    fullStory:
      `In early 2023, Duke University Chapel approached VideoBooth to help add an element of connectivity for their students to their "Say the Thing" campaign — an effort to help students develop moral agency through storytelling. Championed by Rev. Leah Torrey, three Freestanding VideoKiosks were purchased by Duke Chapel in anticipation of deploying them across campus.\n\nThrough collaboration with Rev. Torrey and her team, VideoBooth developed a system that mirrors the thought-evoking elements of the "Say the Thing" campaign, meeting students with timeless quotes before encouraging them to reflect. The three units were then deployed across campus alongside their custom-built "The Booth" structures where hundreds of students, faculty, and visitors have left their thoughts.\n\nThe Booth is still active across Duke campus, ready and waiting for the next insightful reflection. Students are encouraged to return to The Booth as their tenure at Duke matures and explore how their perspective has changed. They are always open and will be for years to come.`,
    pullQuote: 'the future is actually in your mouth. you have to articulate the world you want to live in.',
    pullQuoteAttrib: '— Ocean Vuong, as featured in The Booth',
    tags: ['Freestanding Kiosk', 'Higher Education', 'Community Voice', 'Permanent Installation'],
    image: '/case_studies/duke/dukecs_collage.webp',
    imageAlt: 'Duke Chapel — "The Booth" kiosks deployed across campus',
    lightboxImages: [
      { src: '/case_studies/duke/dukecs_1.webp', alt: 'Duke Chapel — The Booth on campus' },
      { src: '/case_studies/duke/dukecs_2.webp', alt: 'Duke Chapel — The Booth on campus' },
      { src: '/case_studies/duke/dukecs_3.webp', alt: 'Duke Chapel — The Booth on campus' },
      { src: '/case_studies/duke/dukecs_4.webp', alt: 'Duke Chapel — The Booth on campus' },
      { src: '/case_studies/duke/dukecs_5.webp', alt: 'Duke Chapel — The Booth on campus' },
      { src: '/case_studies/duke/dukecs_6.webp', alt: 'Duke Chapel — The Booth on campus' },
    ],
  },

  // ── PLACEHOLDERS ─────────────────────────────────────────────────────────
  {
    id: 'placeholder-corporate',
    client: 'Fortune 500 Client',
    sector: 'Corporate / Internal Comms',
    year: '2022',
    headline: 'Employee Storytelling at Scale — All-Hands Launch Event',
    teaser:
      'Over 400 employee recordings collected across two days during a major internal rebranding initiative.',
    fullStory:
      `A Fortune 500 company used RealVo to capture authentic employee voices during a major internal rebranding. Over 400 recordings were collected across two days, feeding directly into the company's intranet and leadership communications.`,
    tags: ['Private Enclosed Booth', 'Employee Storytelling', 'Enterprise', 'Internal Comms'],
    image: '/case_studies/placeholder-corporate.webp',
    imageAlt: 'Corporate employee storytelling event',
    placeholder: true,
  },
  {
    id: 'placeholder-healthcare',
    client: 'Regional Health System',
    sector: 'Healthcare',
    year: '2021',
    headline: 'Patient & Staff Voices for a Community Campaign',
    teaser:
      'Real patient and staff stories collected across three hospital campuses for an annual community report.',
    fullStory:
      'A regional health network activated RealVo kiosks across three hospital campuses to collect patient and staff stories for an annual community report — replacing static surveys with real, emotional narratives.',
    tags: ['Desktop Tablet Kiosk', 'Healthcare', 'Testimonials', 'Community'],
    image: '/case_studies/placeholder-healthcare.webp',
    imageAlt: 'Healthcare storytelling campaign',
    placeholder: true,
  },
  {
    id: 'placeholder-conference',
    client: 'Industry Conference',
    sector: 'Events & Conferences',
    year: '2022',
    headline: 'Live Conference Capture — Speaker Reactions & Attendee Insights',
    teaser:
      'A 2,000-person conference captured live reactions and takeaways in real time, building a rich post-event content library.',
    fullStory:
      'A 2,000-person industry conference deployed a Private Enclosed Booth in the main hall to capture live reactions, speaker highlights, and attendee takeaways — producing a rich post-event content library in real time.',
    tags: ['Private Enclosed Booth', 'Conference', 'Live Capture', 'Content Library'],
    image: '/case_studies/placeholder-conference.webp',
    imageAlt: 'Conference video capture activation',
    placeholder: true,
  },
  {
    id: 'placeholder-nonprofit',
    client: 'National Nonprofit',
    sector: 'Nonprofit / Advocacy',
    year: '2019–2020',
    headline: 'Community Voice Program — 12-Month Listening Initiative',
    teaser:
      'Over 1,200 community stories collected across five cities through a year-long hybrid listening program.',
    fullStory:
      'A national nonprofit used an Online Video Booth alongside on-site kiosks to run a year-long community listening program — collecting over 1,200 stories from underserved communities across five cities.',
    tags: ['Online Video Booth', 'Nonprofit', 'Listening Program', 'Multi-city'],
    image: '/case_studies/placeholder-nonprofit.webp',
    imageAlt: 'Nonprofit community voice program',
    placeholder: true,
  },
  {
    id: 'placeholder-university',
    client: 'Canadian University',
    sector: 'Higher Education',
    year: '2018',
    headline: 'Alumni & Donor Engagement — Convocation Weekend',
    teaser:
      'Alumni stories and donor testimonials captured at convocation, fuelling a multi-channel fundraising campaign.',
    fullStory:
      'A Canadian university activated RealVo booths during convocation weekend to capture alumni stories and donor testimonials — generating content that fuelled a multi-channel fundraising campaign launched the following month.',
    tags: ['Freestanding Kiosk', 'Higher Education', 'Alumni', 'Fundraising'],
    image: '/case_studies/placeholder-university.webp',
    imageAlt: 'University alumni engagement at convocation',
    placeholder: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Lightbox Component
// ─────────────────────────────────────────────────────────────────────────────
function Lightbox({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = study.lightboxImages ?? [{ src: study.image, alt: study.imageAlt }];
  const total = images.length;

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i - 1 + total) % total);
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((i) => (i + 1) % total);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 sm:px-8 py-8 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${study.client} case study`}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white text-sm transition"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Image slider */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          {/* Blurred background */}
          <img
          src={images[imgIndex].src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-md opacity-60"
          aria-hidden="true"
        />
        {/* Main image */}
        <img
          src={images[imgIndex].src}
          alt={images[imgIndex].alt}
          className="relative z-10 w-full h-full object-contain transition-opacity duration-300"
        />
      </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white w-9 h-9 flex items-center justify-center text-lg transition"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70 text-white w-9 h-9 flex items-center justify-center text-lg transition"
                aria-label="Next image"
              >
                ›
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setImgIndex(i); }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === imgIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="inline-flex items-center gap-1.5 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-realvo-teal shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-realvo-blue dark:text-sky-400">
              {study.client} · {study.sector} · {study.year}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-4 leading-snug">
            {study.headline}
          </h2>

          {study.pullQuote && (
            <blockquote className="border-l-2 border-realvo-teal pl-4 mb-5 text-sm italic text-slate-500 dark:text-slate-400 leading-relaxed">
              <span>"{study.pullQuote}"</span>
              {study.pullQuoteAttrib && (
                <footer className="mt-1 not-italic text-xs text-slate-400 dark:text-slate-500">
                  {study.pullQuoteAttrib}
                </footer>
              )}
            </blockquote>
          )}

          <div className="space-y-4">
            {study.fullStory.split('\n\n').map((para, i) => (
              <p key={i} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mt-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Card Component
// ─────────────────────────────────────────────────────────────────────────────
function CaseStudyCard({
  study,
  onOpen,
}: {
  study: CaseStudy;
  onOpen: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`group flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${!study.placeholder ? 'cursor-pointer' : ''}`}
      onClick={!study.placeholder ? onOpen : undefined}
      role={!study.placeholder ? 'button' : undefined}
      tabIndex={!study.placeholder ? 0 : undefined}
      onKeyDown={!study.placeholder ? (e) => { if (e.key === 'Enter') onOpen(); } : undefined}
    >
      {/* Thumbnail */}
      <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        {!imgError ? (
          <img
            src={study.image}
            alt={study.imageAlt}
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 gap-2">
            <div className="w-12 h-12 rounded-full bg-realvo-teal/20 flex items-center justify-center">
              <span className="text-realvo-teal text-2xl">▶</span>
            </div>
            <span className="text-xs text-slate-400 dark:text-slate-500">Image coming soon</span>
          </div>
        )}

        {/* Sector badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300">
            {study.sector}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center rounded-full bg-realvo-blue/90 dark:bg-sky-600/90 backdrop-blur-sm px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-white">
            {study.year}
          </span>
        </div>

        {/* Placeholder ribbon */}
        {study.placeholder && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center rounded-full bg-amber-400/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-amber-900">
              Case study coming soon
            </span>
          </div>
        )}

        {/* View story hint on hover — real cards only */}
        {!study.placeholder && (
          <div className="absolute inset-0 bg-realvo-blue/0 group-hover:bg-realvo-blue/10 transition-all duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-semibold text-realvo-blue dark:text-sky-400">
              View case study
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3">

        <div className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-realvo-teal shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-realvo-blue dark:text-sky-400">
            {study.client}
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-snug">
          {study.headline}
        </h3>

        {study.pullQuote && (
          <blockquote className="border-l-2 border-realvo-teal pl-3 text-xs sm:text-sm italic text-slate-500 dark:text-slate-400 leading-relaxed">
            <span>"{study.pullQuote}"</span>
            {study.pullQuoteAttrib && (
              <footer className="mt-1 not-italic text-[10px] sm:text-xs text-slate-400 dark:text-slate-500">
                {study.pullQuoteAttrib}
              </footer>
            )}
          </blockquote>
        )}

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
          {study.teaser}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {!study.placeholder && (
          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xs font-semibold text-realvo-blue dark:text-sky-400 group-hover:underline">
              Read full story →
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────
const CaseStudies: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const [ctaAnimKey, setCtaAnimKey] = useState(0);
  const [openStudy, setOpenStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setCtaAnimKey((k) => k + 1);
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = openStudy ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [openStudy]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

            <a
              href="/"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Home
            </a>

            <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                Case Studies
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Real voices. Real results.
                <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-2">
                  See how organizations across sectors have used RealVo to capture, share, and act on the voices that matter most.
                </span>
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  onOpen={() => setOpenStudy(study)}
                />
              ))}
            </div>

            <div
              ref={ctaRef}
              className="mt-12 sm:mt-16 lg:mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 px-5 sm:px-8 py-7 sm:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-5"
            >
              <div>
                <p className="text-sm sm:text-base font-semibold tracking-wide text-slate-200/90 mb-2">
                  Ready to build your own story?
                </p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                  Make voices{' '}
                  <span key={ctaAnimKey} className="text-realvo-teal animate-pulse-once-light">
                    matter
                  </span>
                  .
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl">
                  From single-day events to permanent installations — RealVo adapts to your program, your brand, and your people.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium bg-realvo-teal text-white hover:bg-realvo-teal/90 transition whitespace-nowrap md:px-7 md:py-3.5"
              >
                Let's get started
              </a>
            </div>

          </div>
        </section>
      </main>

      <Footer />

      {openStudy && (
        <Lightbox study={openStudy} onClose={() => setOpenStudy(null)} />
      )}
    </div>
  );
};

export default CaseStudies;
