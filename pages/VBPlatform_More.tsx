import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Lock,
  Search,
  FileText,
  Play,
  Download,
  BarChart2,
  ShieldCheck,
  CheckCircle2,
  Share2,
  SlidersHorizontal,
  Users,
  Layers,
  LayoutGrid,
  Globe,
  Sparkles,
} from 'lucide-react';

type FeatureBlock = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  image: { src: string; alt: string };
  icon: React.ElementType;
  imageSide: 'left' | 'right';
};

const HERO_PILLS = [
  'Permissions Control',
  'Search & Filter Results',
  'Add Notes & Tags',
  'AI Transcription',
  'CRM-ready Data Exports',
  'Engagement Analytics',
];

// ✅ Update these screenshots any time you want different visuals per block
const FEATURE_BLOCKS: FeatureBlock[] = [
  {
    id: 'library',
    kicker: 'Content Management Service',
    title: 'A centralized content library for every recording.',
    description:
      'Keep campaigns, groups, and sessions organized — so teams can review, shortlist, and deliver without chasing files.',
    bullets: [
      'Campaign + group structure for large programs',
      'Fast browsing with thumbnails + playback',
      'Consistent organization across activations',
      'Built for high-volume capture',
    ],
    image: { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv library view' },
    icon: Layers,
    imageSide: 'right',
  },
  {
    id: 'search',
    kicker: 'Search & Filters',
    title: 'Find what you need in seconds.',
    description:
      'Search and filter across sessions to isolate the moments that matter — by campaign, group, and more.',
    bullets: [
      'Search across groups and sessions',
      'Filter to narrow large results sets',
      'Quickly shortlist usable clips',
      'Designed for repeatable review workflows',
    ],
    image: { src: '/vbplatform/vbtv_screens_2.png', alt: 'VideoBooth.tv search and filters' },
    icon: Search,
    imageSide: 'left',
  },
  {
    id: 'notes-tags',
    kicker: 'Notes & Tags',
    title: 'Add context that teams can act on.',
    description:
      'Annotate content with notes and tags to capture themes, outcomes, or next steps — without changing the original recordings.',
    bullets: [
      'Notes per video/session',
      'Tag content by theme or category',
      'Organize clips for comms and reporting',
      'Support internal review consistency',
    ],
    image: { src: '/vbplatform/vbtv_screens_3.png', alt: 'VideoBooth.tv notes and tagging' },
    icon: FileText,
    imageSide: 'right',
  },
  {
    id: 'governance',
    kicker: 'Governance & Permissions',
    title: 'Control who can access what.',
    description:
      'Give teams and stakeholders secure access to content — with permission controls that support enterprise workflows.',
    bullets: [
      'Permission-based access',
      'Secure stakeholder review',
      'Reduce file-sharing and duplication',
      'Built for professional programs',
    ],
    image: { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv permissions' },
    icon: Lock,
    imageSide: 'left',
  },
  {
    id: 'transcription',
    kicker: 'AI Transcription',
    title: 'Turn video into searchable text.',
    description:
      'Add transcription to make content easier to scan, review, and reuse — especially at scale.',
    bullets: [
      'Transcribe recordings for quick review',
      'Improve searchability and accessibility',
      'Support faster insight extraction',
      'Reduce manual admin time',
    ],
    image: { src: '/vbplatform/vbtv_screens_3.png', alt: 'VideoBooth.tv transcription' },
    icon: Play,
    imageSide: 'right',
  },
  {
    id: 'analytics',
    kicker: 'Engagement & Reporting',
    title: 'Understand performance across campaigns.',
    description:
      'Track activity and engagement to understand what’s working — and what content is resonating most.',
    bullets: [
      'Engagement analytics at a glance',
      'Activity snapshots by time range',
      'Identify trending sessions',
      'Support post-activation reporting',
    ],
    image: { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv analytics view' },
    icon: BarChart2,
    imageSide: 'left',
  },
  {
    id: 'exports',
    kicker: 'Exports & Delivery',
    title: 'Export content and data in CRM-ready formats.',
    description:
      'Move content into the rest of your workflow — from internal archives to stakeholder reporting and CRM-ready exports.',
    bullets: [
      'Download videos and assets',
      'Export structured metadata',
      'CRM-ready outputs',
      'Designed for real-world delivery needs',
    ],
    image: { src: '/vbplatform/vbtv_screens_2.png', alt: 'VideoBooth.tv exports view' },
    icon: Download,
    imageSide: 'right',
  },

  // ✅ Online Sharing Service (without saying “optional” here)
  {
    id: 'microsite',
    kicker: 'Online Sharing Service',
    title: 'Share through a branded microsite experience.',
    description:
      'Deliver participant videos through a clean, branded viewing experience that works for internal teams or public campaigns.',
    bullets: [
      'Branded redemption and viewing experience',
      'Private sharing for internal audiences',
      'Public campaigns supported when enabled',
      'Mobile-friendly viewing flow',
    ],
    image: { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv branded viewing experience' },
    icon: Globe,
    imageSide: 'left',
  },
  {
    id: 'gallery-embed',
    kicker: 'Galleries & Embeds',
    title: 'Publish curated galleries — and embed where you need them.',
    description:
      'Curate what gets shown, then embed a gallery into your website or intranet to extend impact beyond the event.',
    bullets: [
      'Public-facing gallery when enabled',
      'Controlled curation and visibility',
      'Embeddable experiences for web or intranet',
      'Designed to support storytelling programs',
    ],
    image: { src: '/vbplatform/vbtv_screens_2.png', alt: 'VideoBooth.tv gallery and embed workflows' },
    icon: LayoutGrid,
    imageSide: 'right',
  },
  {
    id: 'moderation',
    kicker: 'Moderation & Approvals',
    title: 'Keep publishing under control.',
    description:
      'Review content before it goes live. Maintain brand and program standards with moderation-friendly workflows.',
    bullets: [
      'Approve or decline before publishing',
      'Keep internal content private',
      'Support brand-safe publishing',
      'Clear review flow for teams',
    ],
    image: { src: '/vbplatform/vbtv_screens_3.png', alt: 'VideoBooth.tv moderation workflow' },
    icon: CheckCircle2,
    imageSide: 'left',
  },
  {
    id: 'treatments',
    kicker: 'Branding Treatments',
    title: 'Make every video feel polished and on-brand.',
    description:
      'Apply branding treatments that align with your campaign — for consistent, professional outputs across the program.',
    bullets: [
      'Intro/outro bumpers and overlays',
      'Captions and subtitles when enabled',
      'Audio tracks supported when provided',
      'Designed for repeatable brand consistency',
    ],
    image: { src: '/vbplatform/vbtv_screens_1.png', alt: 'VideoBooth.tv branding treatments' },
    icon: Sparkles,
    imageSide: 'right',
  },
];

function FeatureRow({ block }: { block: FeatureBlock }) {
  const isImageRight = block.imageSide === 'right';
  const Icon = block.icon;

  return (
    <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-stretch">
      {/* Text */}
      <div className={isImageRight ? '' : 'lg:order-2'}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
          {block.kicker}
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white flex items-start gap-3">
          <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-realvo-light dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/80 text-realvo-blue dark:text-sky-400">
            <Icon size={18} />
          </span>
          <span>{block.title}</span>
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

      {/* Image */}
      <div className={`${isImageRight ? '' : 'lg:order-1'} flex items-start justify-center`}>
        <div className="w-full max-w-[720px] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/80 shadow-xl overflow-hidden">
          <img src={block.image.src} alt={block.image.alt} className="w-full h-auto block" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

const VBPlatform_More: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Preload screenshots for smoother route transitions
    const preload = new Set<string>();
    FEATURE_BLOCKS.forEach((b) => preload.add(b.image.src));
    preload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="flex-grow">
        <section className="w-full">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
            {/* Back link */}
            <Link
              to="/#vbtv"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Platform
            </Link>

            {/* HERO */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] items-start">
              {/* Image / hero visual */}
              <div className="relative rounded-3xl bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-sm border border-slate-200/70 dark:border-slate-800/80">
                <img
                  src="/vbplatform/vbtv_screens_1.png"
                  alt="VideoBooth.tv online portal dashboard"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text content */}
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                    Platform
                  </p>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                    VideoBooth.tv Online Portal
                    <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-2">
                      A private content management dashboard for reviewing, organizing, measuring, and sharing recordings at scale.
                    </span>
                  </h1>
                </div>

                {/* Security row */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 bg-realvo-blue/10 dark:bg-realvo-blue/20 px-3 py-1 rounded-full text-sm font-medium text-realvo-blue dark:text-blue-300">
                    <ShieldCheck size={14} className="text-realvo-teal" aria-hidden="true" />
                    <span>Enterprise Secure</span>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-200/70 dark:border-slate-800/80">
                    <Lock size={14} className="text-realvo-blue dark:text-sky-400" aria-hidden="true" />
                    <span>GDPR-ready • HIPAA when required</span>
                  </div>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {HERO_PILLS.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick value bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { icon: Users, label: 'Built for multi-stakeholder review' },
                    { icon: SlidersHorizontal, label: 'Campaign-level organization' },
                    { icon: Share2, label: 'Private or public sharing workflows' },
                    { icon: ShieldCheck, label: 'Governed access and controls' },
                  ].map((item) => {
                    const I = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-realvo-light dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/80 text-realvo-blue dark:text-sky-400">
                          <I size={18} />
                        </span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-realvo-blue text-white dark:bg-sky-500 dark:text-slate-950 hover:bg-realvo-blue/90 dark:hover:bg-sky-400 transition"
                  >
                    Request a demo
                  </a>
                </div>
              </div>
            </div>

            {/* SERVICES BAND (CMS + Online Sharing) */}
            <div className="mt-10 sm:mt-14 lg:mt-16 grid gap-6 lg:grid-cols-2">
              {/* CMS */}
              <div className="rounded-3xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-realvo-light dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80 text-realvo-blue dark:text-sky-400">
                    <Layers size={18} />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400">
                      Service 1
                    </p>
                    <h2 className="text-lg sm:text-xl font-semibold mt-1">
                      Content Management Service
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      The secure dashboard for reviewing, organizing, and exporting your content — built for real programs and real teams.
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-slate-700 dark:text-slate-200 list-disc pl-5">
                  <li>View and download recordings in bulk</li>
                  <li>Search, filter, tag, and add notes</li>
                  <li>AI transcription for faster review</li>
                  <li>Campaign-level analytics and reporting</li>
                  <li>CRM-ready exports and structured metadata</li>
                </ul>
              </div>

              {/* Online Sharing */}
              <div className="rounded-3xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm p-6 sm:p-7">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-realvo-light dark:bg-slate-950 border border-slate-200/70 dark:border-slate-800/80 text-realvo-blue dark:text-sky-400">
                    <Share2 size={18} />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400">
                      Service 2
                    </p>
                    <h2 className="text-lg sm:text-xl font-semibold mt-1">
                      Online Sharing Service
                    </h2>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Extend impact through branded microsites, curated galleries, and controlled publishing workflows — built inside your VB.tv experience.
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm text-slate-700 dark:text-slate-200 list-disc pl-5">
                  <li>Branded viewing via microsites</li>
                  <li>Curated galleries and embeds for web or intranet</li>
                  <li>Moderation and approvals before publishing</li>
                  <li>Branding treatments: bumpers, overlays, captions</li>
                  <li>Engagement tracking across viewing experiences</li>
                </ul>
              </div>
            </div>

            {/* Feature rows */}
            <div className="mt-10 sm:mt-14 lg:mt-16 space-y-12 sm:space-y-14 lg:space-y-16">
              {FEATURE_BLOCKS.map((block) => (
                <div key={block.id} id={block.id} className="scroll-mt-24">
                  <FeatureRow block={block} />
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <Link
                to="/#vbtv"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
              >
                <span className="mr-1.5 text-base">←</span>
                Back to Platform section
              </Link>

              <a
                href="/#contact"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-realvo-blue dark:text-sky-400 hover:text-realvo-blue/80 dark:hover:text-sky-300"
              >
                Talk to us about your workflow
                <span className="ml-1 text-base">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default VBPlatform_More;


