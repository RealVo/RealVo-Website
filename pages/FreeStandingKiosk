import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Section from '../components/Section';

const FreeStandingKiosk: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* HERO / INTRO */}
        <Section
          id="free-standing-kiosk"
          background="white"
          padding="xl"
          className="border-b border-gray-100"
        >
          <div className="max-w-6xl mx-auto">
            {/* Back link */}
            <a
              href="/#capture-options"
              className="inline-flex items-center text-sm text-realvo-blue mb-6 hover:underline"
            >
              ← Back to Capture Options
            </a>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* LEFT: COPY */}
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-realvo-slate mb-2">
                  Capture Option
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-realvo-charcoal mb-4">
                  Free-standing Kiosk
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  A sleek, open-air kiosk designed for lobbies, corridors, and
                  public spaces—perfect for capturing quick, high-quality
                  messages without needing a full booth footprint.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    'Open, approachable footprint',
                    'Compact, space-efficient design',
                    'Brand-forward screen + body wrap',
                    'Self-guided recording UX',
                    'Multi-location rollout friendly',
                    'Efficient high-traffic throughput',
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="inline-flex items-center rounded-full border border-realvo-light bg-realvo-light/60 px-3 py-1 text-xs font-medium text-realvo-slate"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500">
                  Ideal when you want a visible, always-on capture point where
                  people already walk, wait, or queue.
                </p>
              </div>

              {/* RIGHT: IMAGE */}
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-realvo-teal/10 transform rotate-2" />
                <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-200">
                  <img
                    src="/capture/private-enclosed-booth/kiosk_booth.png"
                    // TODO: update path if you move kiosk images into a dedicated folder
                    alt="RealVo free-standing video kiosk"
                    className="w-full h-full object-contain bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* FEATURES + BENEFITS + CUSTOMIZATION */}
        <Section background="white" padding="lg">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-start">
            {/* COLUMN 1 – Features with purpose */}
            <div className="lg:col-span-2">
              <h2 className="text-xl md:text-2xl font-bold text-realvo-charcoal mb-3">
                Features with purpose
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                The Free-standing Kiosk is built to slot into busy environments
                while still delivering clean, confident recordings that feel
                considered—not improvised.
              </p>

              <ul className="space-y-2.5 text-sm text-gray-700">
                {[
                  'Open, standing-height design encourages spontaneous participation in high-traffic spaces.',
                  'Consistent, studio-grade lighting delivers professional-looking results in varied venue conditions.',
                  'Self-guided prompts support clear, structured content—from quick feedback to short reflections.',
                  'Compact footprint keeps aisles clear while still offering a strong branded presence.',
                  'Fast setup and go-live handled by RealVo or approved partners—low client lift.',
                  'Tight integration with RealVo’s VideoBooth.tv platform for instant uploads, approvals, and publishing.',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2 – Customization + Ideal use cases */}
            <div className="space-y-8">
              {/* Customization options */}
              <div>
                <h3 className="text-lg font-semibold text-realvo-charcoal mb-3">
                  Customization options
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'Audio, text, and photo capture support.',
                    'Immersive branded interface (video intros + voice-over prompts).',
                    'Full exterior kiosk wrap plus on-screen brand elements.',
                    'White-label activation ready for agency or partner programs.',
                    'External display options for live-feed, promo video, or dynamic content.',
                    'Instant upload to VideoBooth.tv with flexible media integrations.',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal use cases */}
              <div>
                <h3 className="text-lg font-semibold text-realvo-charcoal mb-3">
                  Ideal use cases
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    'Event & tradeshow engagement in open areas.',
                    'Product feedback or launch reactions near demo zones.',
                    'Customer or visitor testimonials in lobbies or corridors.',
                    'Training or workshop reflections outside session rooms.',
                    'Community or public program feedback in shared spaces.',
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-realvo-teal shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* TECH SPECS */}
        <Section background="light" padding="lg" className="border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-realvo-charcoal mb-6">
              Technical overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-realvo-charcoal mb-1">
                    Form factor & footprint
                  </h3>
                  <p>
                    Slim, vertical kiosk with a small base footprint—designed to
                    fit standard event aisles, corridors, and lobby spaces.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-realvo-charcoal mb-1">
                    Display & interface
                  </h3>
                  <p>
                    Large, eye-level touch display (typ. 24–32&quot;) with
                    branded UI, guided prompts, and simple call-to-action
                    buttons for participants.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-realvo-charcoal mb-1">
                    Camera & audio
                  </h3>
                  <p>
                    High-definition camera and directional microphone system,
                    optimized for clear speech in open environments.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-realvo-charcoal mb-1">
                    Lighting
                  </h3>
                  <p>
                    Integrated, soft front-facing lighting to keep faces
                    evenly lit in mixed or low-light conditions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-realvo-charcoal mb-1">
                    Power & connectivity
                  </h3>
                  <p>
                    Standard power requirements with options for hard-wired,
                    venue Wi-Fi, or dedicated networking—configured to your
                    deployment.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-realvo-charcoal mb-1">
                    Deployment
                  </h3>
                  <p>
                    Delivered and installed by RealVo or approved partners, with
                    remote monitoring and support available during activations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default FreeStandingKiosk;
