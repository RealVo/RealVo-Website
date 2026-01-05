import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type UseCaseBlock = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  image: {
    src: string;
    alt: string;
  };
  imageSide: 'right' | 'left';
};

/**
 * Glyphs (Lucide-adjacent, simple monoline, rounded, on-brand)
 * - Keep strokeWidth consistent with Industries icons (1.8)
 * - Use currentColor so it inherits your RealVo blue
 */
const ListeningGlyph = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Ear */}
    <path d="M12 19a4 4 0 0 1-4-4v-5a4 4 0 1 1 8 0" />
    <path d="M10 14a2 2 0 1 0 4 0" />
    {/* Signal */}
    <path d="M17 8h2" />
    <path d="M17 11h3" />
    <path d="M17 14h2" />
  </svg>
);

const ValidationGlyph = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Speech bubble */}
    <path d="M20 14a4 4 0 0 1-4 4H9l-4 3v-3H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6z" />
    {/* Check */}
    <path d="M8.5 11.5l2 2 4-4" />
  </svg>
);

const EngagementGlyph = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Primary bubble */}
    <path d="M14 16H8l-4 3v-3H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4z" />
    {/* Secondary bubble (participation) */}
    <path d="M20 7h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v2l-3-2h-1" />
    {/* Dots */}
    <path d="M6.5 10.5h.01" />
    <path d="M9.5 10.5h.01" />
    <path d="M12.5 10.5h.01" />
  </svg>
);

const ActionGlyph = () => (
  <svg
    width="72"
    height="72"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Trend line */}
    <path d="M4 15l5-5 4 4 7-7" />
    {/* Arrow head */}
    <path d="M20 7h-4" />
    <path d="M20 7v4" />
    {/* Base axis hint */}
    <path d="M4 19h16" />
  </svg>
);

const USE_CASE_BLOCKS: UseCaseBlock[] = [
  {
    id: 'listening',
    kicker: 'Listening & Understanding',
    title: 'Hear what people really think — in their own words.',
    description:
      'Capture nuanced perspectives that surveys and forms miss — tone, emotion, and context included.',
    bullets: [
      'What’s on their mind check-ins',
      'Confessions and honest reflections',
      'Wishes, hopes, and future vision',
      'Community issues and lived experience',
      'Pulse feedback for quick insight',
    ],
    image: {
      src: '/use-cases/listening.png',
      alt: 'Use case: Listening & Understanding',
    },
    imageSide: 'right',
  },
  {
    id: 'validation',
    kicker: 'Validation & Trust',
    title: 'Build credibility with real voices.',
    description:
      'Turn authentic stories into proof — showing impact, outcomes, and trust through first-person video.',
    bullets: [
      'Testimonials from customers, patients, students, or members',
      'Stories of impact and transformation',
      'Program reflections and outcomes',
      'Lived experiences that add depth and meaning',
      'Leadership or stakeholder perspectives',
    ],
    image: {
      src: '/use-cases/validation.png',
      alt: 'Use case: Validation & Trust',
    },
    imageSide: 'left',
  },
  {
    id: 'engagement',
    kicker: 'Engagement & Participation',
    title: 'Invite participation without pressure.',
    description:
      'Use guided prompts to make it easy for people to contribute — quickly, comfortably, and consistently.',
    bullets: [
      'Storytelling prompts (open-ended)',
      'Voice-based check-ins at events or programs',
      '“Have your say” moments in public spaces',
      'Conference reactions and speaker reflections',
      'Culture and belonging participation prompts',
    ],
    image: {
      src: '/use-cases/engagement.png',
      alt: 'Use case: Engagement & Participation',
    },
    imageSide: 'right',
  },
  {
    id: 'action',
    kicker: 'Action & Change',
    title: 'Turn feedback into better decisions.',
    description:
      'Capture structured insight that helps organizations improve programs, culture, policies, and services.',
    bullets: [
      'Feedback for improvement',
      'Insight for decision-making',
      'Change initiatives and change management',
      'Program evolution and iteration',
      'Culture, policy, or service redesign input',
    ],
    image: {
      src: '/use-cases/action.png',
      alt: 'Use case: Action & Change',
    },
    imageSide: 'left',
  },
];

function UseCaseGlyph({ id }: { id: UseCaseBlock['id'] }) {
  switch (id) {
    case 'listening':
      return <ListeningGlyph />;
    case 'validation':
      return <ValidationGlyph />;
    case 'engagement':
      return <EngagementGlyph />;
    case 'action':
      return <ActionGlyph />;
    default:
      return <ListeningGlyph />;
  }
}

function UseCaseRow({ block }: { block: UseCaseBlock }) {
  const isImageRight = block.imageSide === 'right';

  return (
    <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
      {/* Text */}
      <div className={isImageRight ? '' : 'lg:order-2'}>
        {/* Hero-style Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-realvo-light dark:bg-slate-900 px-3 py-1.5 rounded-full text-sm font-medium text-realvo-blue dark:text-sky-400 mb-3">
          <span className="h-2 w-2 rounded-full bg-realvo-teal animate-pulse" />
          {block.kicker}
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {block.title}
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl">
          {block.description}
        </p>

        <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
          {block.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>

      {/* Image (now: glyph card) */}
      <div className={isImageRight ? '' : 'lg:order-1'}>
        <div
          className="
            relative rounded-3xl overflow-hidden
            bg-white dark:bg-slate-900
            border border-slate-200/70 dark:border-slate-800/80
            shadow-sm
            h-[260px] sm:h-[320px] lg:h-[360px]
            flex items-center justify-center
          "
          aria-label={block.image.alt}
        >
          {/* Centered glyph, on-brand */}
          <div className="text-realvo-blue dark:text-sky-400 scale-[1.35] sm:scale-[1.55]">
            <UseCaseGlyph id={block.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

const UseCases: React.FC = () => {
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
            <a
              href="/#industries"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Industries
            </a>

            {/* Hero */}
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                Use Cases
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                Understand how voices are used across real-world programs.
                <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-2">
                  Intent-based use cases help you design prompts, choose capture options, and publish
                  the right stories in the right places.
                </span>
              </h1>
            </div>

            {/* Use case rows */}
            <div className="mt-10 sm:mt-14 lg:mt-16 space-y-12 sm:space-y-14 lg:space-y-16">
              {USE_CASE_BLOCKS.map((block) => (
                <div key={block.id} id={block.id} className="scroll-mt-24">
                  <UseCaseRow block={block} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UseCases;

