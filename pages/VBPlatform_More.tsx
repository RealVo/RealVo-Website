// pages/VBPlatform_More.tsx
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
  FolderKanban,
  Globe,
} from 'lucide-react';

type FeatureBlock = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ElementType;
  visualSide: 'left' | 'right'; // controls the alternating pattern
  pills?: string[]; // optional “pills” slot inside the row (not in hero)
  note?: string; // optional small line under bullets
};

const CORE_PILLS = [
  'Permissions Control',
  'Search & Filter Results',
  'Add Notes & Tags',
  'AI Transcription',
  'CRM-ready Data Exports',
  'Engagement Analytics',
];

const FEATURE_BLOCKS: FeatureBlock[] = [
  {
    id: 'core',
    kicker: 'Core platform capabilities',
    title: 'Everything teams need to review, govern, and deliver.',
    description:
      'VideoBooth.tv keeps content organized and accessible across stakeholders, programs, and campaigns — without chasing files.',
    bullets: [
      'Built for multi-stakeholder review workflows',
      'Campaign-level organization for large programs',
      'Governed access and controls',
      'Built for repeatable, real-world delivery',
    ],
    pills: CORE_PILLS,
    icon: ShieldCheck,
    visualSide: 'right',
  },
  {
    id: 'library',
    kicker: 'Library & Organization',
    title: 'A centralized content library for every recording.',
    description:
      'Keep campaigns, groups, and sessions structured — so teams can review, shortlist, and publish with confidence.',
    bullets: [
      'Campaign + group structure for large programs',
      'Fast browsing with thumbnails + playback',
      'Designed for high-volume capture',
      'Reduce duplication and scattered file storage',
    ],
    icon: FolderKanban,
    visualSide: 'left',
  },
  {
    id: 'search',
    kicker: 'Search & Filters',
    title: 'Find what you need in seconds.',
    description:
      'Search and filter across sessions to quickly isolate the moments that matter — by campaign, date ranges, and more.',
    bullets: [
      'Search across groups and sessions',
      'Filters to narrow large result sets',
      'Quickly shortlist usable clips',
      'Designed for repeatable review workflows',
    ],
    icon: Search,
    visualSide: 'right',
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
    icon: FileText,
    visualSide: 'left',
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
    icon: Lock,
    visualSide: 'right',
    note: 'Enterprise Secure (GDPR-ready / workflow-friendly controls).',
  },
  {
    id: 'moderation',
    kicker: 'Moderation & Approvals',
    title: 'Keep publishing under control.',
    description:
      'Review content before it goes live. Maintain brand and program standards with moderation-friendly workflows.',
    bullets: [
      'Approve or decline sessions before publishing',
      'Keep internal content private',
      'Support brand-safe publishing',
      'Clear review flow for teams',
    ],
    icon: CheckCircle2,
    visualSide: 'left',
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
    icon: Play,
    visualSide: 'right',
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
    icon: BarChart2,
    visualSide: 'left',
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
    icon: Download,
    visualSide: 'right',
  },
  {
    id: 'sharing',
    kicker: 'Online Sharing Service',
    title: 'Extend reach with branded sharing and galleries.',
    description:
      'Publish content externally with branded microsites and sharing workflows — ideal for campaigns that need public visibility.',
    bullets: [
      'Branded viewing via microsites and galleries',
      'Curated collections for campaigns and programs',
      'Moderation-ready external publishing',
      'Engagement tracking across viewing experiences',
    ],
    icon: Globe,
    visualSide: 'left',
    note: 'Add-on service (positioned as a platform extension).',
  },
];

function FeatureRow({ block }: { block: FeatureBlock }) {
  const isRight = block.visualSide === 'right';
  const Icon = block.icon;

  return (
    <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-start">
      {/* Text */}
      <div className={isRight ? '' : 'lg:order-2'}>
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

        {block.pills && block.pills.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {block.pills.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <ul className="mt-5 space-y-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 list-disc pl-5">
          {block.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {block.note && (
          <p className="mt-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {block.note}
          </p>
        )}
      </div>

      {/* Visual Accent (no screenshots) */}
      <div className={`${isRight ? '' : 'lg:order-1'} flex items-start justify-center`}>
        <div className="w-full max-w-[520px] rounded-3xl border border-slate-200/70 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-realvo-blue/10 dark:bg-sky-500/10 text-realvo-blue dark:text-sky-400">
              <Icon size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {block.kicker}
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {block.description}
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {block.bullets.slice(0, 4).map((b) => (
              <div
                key={b}
                className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-realvo-teal" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              { icon: Users, label: 'Multi-stakeholder' },
              { icon: SlidersHorizontal, label: 'Campaign-ready' },
              { icon: Share2, label: 'Delivery workflows' },
              { icon: Layers, label: 'Organized library' },
            ].map((item) => {
              const I = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-700 dark:text-slate-200"
                >
                  <I size={14} className="text-realvo-blue dark:text-sky-400" />
                  {item.label}
                </span>
              );
            })}
          </div>

          <div className="mt-5">
            <Link
              to="/#vbtv"
              className="inline-flex items-center text-xs font-medium text-realvo-blue dark:text-sky-400 hover:text-realvo-blue/80 dark:hover:text-sky-300"
            >
              See the rotating preview on the Platform section <span className="ml-1 text-base">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const VBPlatform_More: React.FC = () => {
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
              href="/#vbtv"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Platform
            </a>

            {/* HERO (match UseCases.tsx structure) */}
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                Platform
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                VideoBooth.tv platform features for review, governance, and delivery.
                <span className="block text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400 mt-2">
                  A secure portal for organizing content, managing approvals, and delivering recordings at scale —
                  built for real-world programs and multi-stakeholder workflows.
                </span>
              </h1>
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
              <a
                href="/#vbtv"
                className="inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
              >
                <span className="mr-1.5 text-base">←</span>
                Back to Platform section
              </a>

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
