import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type CaseStudy = {
  id: string;
  client: string;
  sector: string;          // e.g. "Higher Education"
  year: string;            // e.g. "2023" or "2018–2019"
  headline: string;        // short card title
  summary: string;         // 2–3 sentence card blurb
  pullQuote?: string;      // optional accent quote shown on card
  pullQuoteAttrib?: string;
  tags: string[];          // feature/use-case pills
  image: string;           // path to card thumbnail
  imageAlt: string;
  placeholder?: boolean;   // true = placeholder card (no real content yet)
};

// ─────────────────────────────────────────────────────────────────────────────
// Data
// NOTE: Replace placeholder images with real paths once assets are ready.
// For Duke, swap /case_studies/duke-collage.jpg with the best single image
// if the collage crops poorly at card size.
// ─────────────────────────────────────────────────────────────────────────────
const CASE_STUDIES: CaseStudy[] = [
  // ── REAL CASE STUDY ──────────────────────────────────────────────────────
  {
    id: 'duke-chapel',
    client: 'Duke Chapel',
    sector: 'Higher Education',
    year: '2023',
    headline: '"Say the Thing" — Student Storytelling Across Campus',
    summary:
      'Duke Chapel partnered with VideoBooth to bring student voices into their "Say the Thing" moral-agency campaign. Three custom Free-standing Kiosks were deployed across campus alongside branded "The Booth" structures — greeting students with timeless quotes before inviting them to reflect.',
    pullQuote: 'the future is actually in your mouth. you have to articulate the world you want to live in.',
    pullQuoteAttrib: '— Ocean Vuong, as featured in The Booth',
    tags: ['Freestanding Kiosk', 'Higher Education', 'Community Voice', 'Permanent Installation'],
    // ⚠️  Using collage for now — swap to a single image if card crop is too busy
    image: '/case_studies/duke-collage.jpg',
    imageAlt: 'Duke Chapel — "The Booth" kiosks deployed across campus',
  },

  // ── PLACEHOLDER CARDS (replace content + images when ready) ──────────────
  {
    id: 'placeholder-corporate',
    client: 'Fortune 500 Client',
    sector: 'Corporate / Internal Comms',
    year: '2022',
    headline: 'Employee Storytelling at Scale — All-Hands Launch Event',
    summary:
      'A Fortune 500 company used RealVo to capture authentic employee voices during a major internal rebranding. Over 400 recordings were collected across two days, feeding directly into the company's intranet and leadership communications.',
    tags: ['Private Enclosed Booth', 'Employee Storytelling', 'Enterprise', 'Internal Comms'],
    image: '/case_studies/placeholder-corporate.jpg',
    imageAlt: 'Corporate employee storytelling event',
    placeholder: true,
  },
  {
    id: 'placeholder-healthcare',
    client: 'Regional Health System',
    sector: 'Healthcare',
    year: '2021',
    headline: 'Patient & Staff Voices for a Community Campaign',
    summary:
      'A regional health network activated RealVo kiosks across three hospital campuses to collect patient and staff stories for an annual community report — replacing static surveys with real, emotional narratives.',
    tags: ['Desktop Tablet Kiosk', 'Healthcare', 'Testimonials', 'Community'],
    image: '/case_studies/placeholder-healthcare.jpg',
    imageAlt: 'Healthcare storytelling campaign',
    placeholder: true,
  },
  {
    id: 'placeholder-conference',
    client: 'Industry Conference',
    sector: 'Events & Conferences',
    year: '2022',
    headline: 'Live Conference Capture — Speaker Reactions & Attendee Insights',
    summary:
      'A 2,000-person industry conference deployed a Private Enclosed Booth in the main hall to capture live reactions, speaker highlights, and attendee takeaways — producing a rich post-event content library in real time.',
    tags: ['Private Enclosed Booth', 'Conference', 'Live Capture', 'Content Library'],
    image: '/case_studies/placeholder-conference.jpg',
    imageAlt: 'Conference video capture activation',
    placeholder: true,
  },
  {
    id: 'placeholder-nonprofit',
    client: 'National Nonprofit',
    sector: 'Nonprofit / Advocacy',
    year: '2019–2020',
    headline: 'Community Voice Program — 12-Month Listening Initiative',
    summary:
      'A national nonprofit used an Online Video Booth alongside on-site kiosks to run a year-long community listening program — collecting over 1,200 stories from underserved communities across five cities.',
    tags: ['Online Video Booth', 'Nonprofit', 'Listening Program', 'Multi-city'],
    image: '/case_studies/placeholder-nonprofit.jpg',
    imageAlt: 'Nonprofit community voice program',
    placeholder: true,
  },
  {
    id: 'placeholder-university',
    client: 'Canadian University',
    sector: 'Higher Education',
    year: '2018',
    headline: 'Alumni & Donor Engagement — Convocation Weekend',
    summary:
      'A Canadian university activated RealVo booths during convocation weekend to capture alumni stories and donor testimonials — generating content that fuelled a multi-channel fundraising campaign launched the following month.',
    tags: ['Freestanding Kiosk', 'Higher Education', 'Alumni', 'Fundraising'],
    image: '/case_studies/placeholder-university.jpg',
    imageAlt: 'University alumni engagement at convocation',
    placeholder: true,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Card Component
// ─────────────────────────────────────────────────────────────────────────────
function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

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
          /* Fallback placeholder visual */
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 gap-2">
            <div className="w-12 h-12 rounded-full bg-realvo-teal/20 flex items-center justify-center">
              <span className="text-realvo-teal text-2xl">▶</span>
            </div>
            <span className="text-xs text-slate-400 dark:text-slate-500">Image coming soon</span>
          </div>
        )}

        {/* Sector badge — top left */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300">
            {study.sector}
          </span>
        </div>

        {/* Year badge — top right */}
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
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3">

        {/* Client kicker */}
        <div className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-realvo-teal shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-realvo-blue dark:text-sky-400">
            {study.client}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white leading-snug">
          {study.headline}
        </h3>

        {/* Pull quote — only shown when present */}
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

        {/* Summary */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
          {study.summary}
        </p>

        {/* Tags */}
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

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">

            {/* Back link */}
            <a
              href="/"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Home
            </a>

            {/* Page header */}
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

            {/* Card grid — 3 columns desktop, 2 tablet, 1 mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CASE_STUDIES.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>

            {/* Final CTA band */}
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
    </div>
  );
};

export default CaseStudies;
