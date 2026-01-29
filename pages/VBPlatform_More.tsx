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
  CheckCircle2,
  Layers,
  Globe,
} from 'lucide-react';

type FeatureBlock = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ElementType;
};

type FeatureSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  blocks: FeatureBlock[];
};

const SECTIONS: FeatureSection[] = [
  {
    id: 'content-management',
    eyebrow: 'Core',
    title: 'Content Management Tools',
    description:
      'Everything teams need to organize, review, and manage recordings at scale.',
    blocks: [
      {
        id: 'Organization',
        kicker: 'Organization',
        title: 'A top-level program overview of all recorded sessions.',
        description:
          'See every group, session, and recording in one place — with clear structure, activity trends, and quick access to what matters most.',
        bullets: [
          'Group-based organization for multi-location or multi-booth programs',
          'Session volume and activity trends over time',
          'At-a-glance visibility into recent and trending recordings',
          'Direct entry point into group and session review',
        ],
        icon: Layers,
      },
      {
        id: 'search',
        kicker: 'Search & Filters',
        title: 'Find, select, and act on content in seconds.',
        description:
          'Quickly narrow large volumes of recorded sessions, then take action in bulk using tools designed for real-world review and curation workflows.',
        bullets: [
          'Filter by date, visibility, moderation, view status, and responses',
          'Search by keyword, tags, or participant data',
          'Select individual sessions or batch-select filtered results',
          'Perform bulk actions like approve, download, move, compile, or share',
        ],
        icon: Search,
      },
      {
        id: 'session-review',
        kicker: 'Session Review',
        title: 'Everything needed to review and manage a single session.',
        description:
          'Each recorded session opens into a dedicated review workspace where teams can play, edit, annotate, and manage content without leaving the dashboard.',
        bullets: [
          'Centralized playback with session-specific controls',
          'Download individual assets or full session bundles',
          'Add notes and tags tied directly to the session',
          'Manage visibility, approval status, and session actions',
          'Access transcription, metadata, and session-level analytics',
        ],
        icon: Play,
      },
      {
        id: 'notes-tags',
        kicker: 'Notes & Tags',
        title: 'Add context teams can act on.',
        description:
          'Capture internal notes and apply custom tags directly to sessions to support review, editorial workflows, and downstream analysis.',
        bullets: [
          'Add internal notes tied to individual sessions',
          'Apply unlimited custom tags for categorization',
          'Use tags and notes to support review and shortlisting',
          'Filter sessions by notes and tags across groups',
        ],
        icon: FileText,
      },
      {
        id: 'governance',
        kicker: 'Governance & Permissions',
        title: 'Control access without slowing teams down.',
        description:
          'Manage who can view, review, and act on content with permission controls designed for professional, multi-stakeholder programs.',
        bullets: [
          'Permission-based access for teams and stakeholders',
          'Separate internal review from external viewing',
          'Reduce file sharing and content duplication',
          'Designed for enterprise and multi-department workflows',
        ],
        icon: Lock,
      },
      {
        id: 'transcription',
        kicker: 'AI Transcription',
        title: 'Turn video into searchable text automatically.',
        description:
          'Every recorded session is transcribed automatically, making content easier to review, search, and reuse — especially at scale.',
        bullets: [
          'Automatic transcription for every recorded session',
          'Scan content without watching full videos',
          'Improve accessibility and review efficiency',
          'Support faster insight extraction across programs',
        ],
        icon: Play,
      },
      {
        id: 'exports',
        kicker: 'Exports & Delivery',
        title: 'Move content and data into the rest of your workflow.',
        description:
          'Export video assets and structured session data in formats designed for real-world reporting, archiving, and CRM integration.',
        bullets: [
          'Download individual videos or full session asset bundles',
          'Export structured session data in CRM-ready CSV formats',
          'Access raw files, compressed videos, audio, and metadata',
          'Designed for reporting, compliance, and downstream systems',
        ],
        icon: Download,
      },
    ],
  },

  {
    id: 'content-preparation',
    eyebrow: 'Bridge Layer',
    title: 'Content Preparation',
    description:
      'Tools for shaping and packaging recordings before distribution — without altering original source content.',
    blocks: [
      {
        id: 'video-presentation',
        kicker: 'Video Presentation & Branding',
        title: 'Prepare videos for internal or external audiences.',
        description:
          'Apply optional branding and structural elements to individual videos or compiled sessions — without altering the original recordings.',
        bullets: [
          'Add branded intros, outros, and question markers',
          'Apply lower thirds with names, roles, or campaign context',
          'Overlay logos, watermarks, or visual identifiers',
          'Prepare compiled videos for internal or public distribution',
        ],
        icon: Layers,
      },
    ],
  },

  {
    id: 'distribution-engagement',
    eyebrow: 'Optional',
    title: 'Distribution & Engagement',
    description:
      'Controlled delivery for internal distribution, intranet viewing, and public-facing campaigns — with full visibility and access control.',
    blocks: [
      {
        id: 'moderation',
        kicker: 'Moderation & Approvals',
        title: 'Keep content appropriate, controlled, and ready to publish.',
        description:
          'Review and moderate sessions before they’re shared, ensuring content meets program standards and is appropriate for internal or external audiences.',
        bullets: [
          'Approve, decline, or leave sessions unmoderated',
          'Clearly mark content as appropriate or inappropriate',
          'Control visibility for internal or public-facing galleries',
          'Maintain brand and program standards at scale',
        ],
        icon: CheckCircle2,
      },
      {
        id: 'distribution-analytics',
        kicker: 'Engagement & Reporting',
        title: 'Understand activity and engagement across programs.',
        description:
          'Track participation and viewing activity to understand how distributed content is being used — at the campaign, group, and session level.',
        bullets: [
          'View activity and engagement at a glance',
          'Track session volume and trends over time',
          'Identify most-watched and trending content',
          'Support internal reporting and post-program review',
        ],
        icon: BarChart2,
      },
      {
        id: 'distribution-layer',
        kicker: 'Distribution Layer',
        title: 'Deliver curated stories through galleries, microsites, and embeds.',
        description:
          'Extend programs beyond internal review with optional, brand-safe distribution through intranet-friendly galleries, microsites, and embeddable players.',
        bullets: [
          'Branded microsites for internal or public viewing',
          'Curated galleries featuring approved content only',
          'Embeddable layouts for intranets and websites',
          'Optional sharing controls enabled per campaign',
        ],
        icon: Globe,
      },
    ],
  },
];

function FeatureCard({ block }: { block: FeatureBlock }) {
  const Icon = block.icon;

  return (
    <div className="group rounded-3xl bg-white/90 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7">
      <div className="inline-flex items-center gap-2 bg-realvo-light dark:bg-slate-950 px-3 py-1.5 rounded-full text-sm font-medium text-realvo-blue dark:text-sky-400 mb-4">
        <span className="h-2 w-2 rounded-full bg-realvo-teal animate-pulse" />
        {block.kicker}
      </div>

      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 dark:text-white flex items-start gap-3">
        <span
          className="
            mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center
            rounded-xl
            bg-realvo-teal text-white
            dark:bg-realvo-teal dark:text-white
            transition-colors duration-200
            group-hover:bg-realvo-blue group-hover:text-white
          "
        >
          <Icon size={18} />
        </span>
        <span>{block.title}</span>
      </h3>

      <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
        {block.description}
      </p>

      <ul className="mt-5 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200 list-disc pl-5 marker:text-realvo-teal">
        {block.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function SectionBlock({ section }: { section: FeatureSection }) {
  return (
    <div id={section.id} className="scroll-mt-28">
      {/* TEAL SECTION BAND */}
      <div className="mb-8 rounded-3xl bg-realvo-teal px-6 py-8 sm:px-8 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-2">
          {section.eyebrow}
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
  {section.title}
</h2>
        <p className="mt-2 max-w-3xl text-sm sm:text-base text-white/90">
          {section.description}
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {section.blocks.map((block) => (
          <div key={block.id} id={block.id} className="scroll-mt-24">
            <FeatureCard block={block} />
          </div>
        ))}
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
            <Link
              to="/#vbtv"
              className="mb-6 inline-flex items-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-realvo-blue dark:hover:text-sky-400 transition"
            >
              <span className="mr-1.5 text-base">←</span>
              Back to Platform
            </Link>

            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-realvo-blue dark:text-sky-400 mb-2">
                Platform
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
  VideoBooth.tv Features
</h1>
            </div>

            <div className="mt-10 sm:mt-14 lg:mt-16">
              <div className="rounded-3xl border border-slate-200/70 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900/50 p-4 sm:p-6 lg:p-8">
                <div className="space-y-12 sm:space-y-14 lg:space-y-16">
                  {SECTIONS.map((section) => (
                    <SectionBlock key={section.id} section={section} />
                  ))}
                </div>
              </div>
            </div>

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

