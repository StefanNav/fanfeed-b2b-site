import {
  Smartphone,
  ArrowRight,
  Users,
  Heart,
  TrendingUp,
  Shield,
  Target,
  UserCheck,
  Eye,
  Sparkles,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, FeatureCard } from "@/components/ui/card";
import { CTASection } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { generatePageMetadata } from "@/lib/metadata";
import { EventHistoryRecap } from "@/components/marketing/event-history-recap";
import { TimelineMemoryStrip, TimelineMemoryStripStyles } from "@/components/marketing/timeline-memory-strip";
import { MultiPerspectiveReplay } from "@/components/marketing/multi-perspective-replay";
import { ConciergeInbox } from "@/components/marketing/concierge-inbox";
import { EmbeddedPartnerExperience } from "@/components/marketing/embedded-partner-experience";

export const metadata = generatePageMetadata({
  title: "FanFeed App — The consumer layer behind richer fan intelligence",
  description:
    "FanFeed App deepens fan profiles through direct engagement, behavioral signal, and fan-driven activity that traditional systems often miss. A strategic data layer for FanFeed OS.",
  path: "/app",
});

export default function AppPage() {
  return (
    <>
      <TimelineMemoryStripStyles />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Platform", href: "/" },
          { name: "App", href: "/app" },
        ])}
      />

      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-muted/20 via-white to-white pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-wide text-brand uppercase">
              FanFeed App
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The consumer layer behind richer fan intelligence
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              FanFeed App helps deepen fan profiles through direct engagement,
              behavioral signal, and fan-driven activity that traditional systems
              often miss.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" className="bg-[#413149] text-white hover:bg-[#2d2232]">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Event History Recap */}
      <section className="relative overflow-hidden py-24 bg-surface">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-surface -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              See your fandom come to life
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              FanFeed turns the photos you already take into a living record of games, concerts, and moments that matter.
            </p>
          </div>
          <EventHistoryRecap />
        </div>
      </section>

      {/* Section 2.5 — Timeline Memory Strip */}
      <section className="relative overflow-hidden py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              A compounding record of the moments that matter
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              FanFeed gives fans a scrollable memory layer across years of events. It’s not about one-off posts — it’s a living timeline of their fandom.
            </p>
          </div>
          <TimelineMemoryStrip />
        </div>
      </section>

      {/* Section 2.75 — Multi-Perspective Replay */}
      <section className="relative overflow-hidden py-24 bg-surface">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-background -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Relive the same moment through multiple fans
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Capture the power of crowd-sourced event media in one instant. See the game-winning shot or the encore from every angle.
            </p>
          </div>
          <MultiPerspectiveReplay />
        </div>
      </section>

      {/* Section 2.9 — Concierge Inbox */}
      <section className="relative overflow-hidden py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              A concierge built around your fandom
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              From tickets to merch to curated access, FanFeed surfaces the right opportunities at the right time.
            </p>
          </div>
          <ConciergeInbox />
        </div>
      </section>

      {/* Section 2.95 — Embedded Partner Experience */}
      <section className="relative overflow-hidden py-24 bg-surface">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-surface -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <EmbeddedPartnerExperience />
        </div>
      </section>

      {/* Section 3 — Why it matters */}
      <Section background="surface">
        <SectionHeader
          title="A direct fan touchpoint with strategic platform value"
          description="FanFeed App is designed to create stronger fan engagement while contributing meaningful signal back into the FanFeed ecosystem. It gives organizations more than transactional data alone, helping paint a fuller picture of fan identity, interests, and behavior."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <Card
            icon={Eye}
            title="Beyond transactions"
            description="Capture signal that traditional systems often miss."
          />
          <Card
            icon={Heart}
            title="First-party engagement"
            description="Create a more direct relationship with the fan."
          />
          <Card
            icon={TrendingUp}
            title="Long-term profile value"
            description="Make the overall system smarter over time."
          />
        </div>
      </Section>

      {/* Section 5 — Activation possibilities */}
      <Section >
        <SectionHeader
          title="More signal means more ways to activate fans"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={Target}
            title="Smarter segmentation"
            description="Build better audiences using stronger fan context."
          />
          <Card
            icon={Sparkles}
            title="Better personalization"
            description="Deliver more relevant experiences and offers."
          />
          <Card
            icon={UserCheck}
            title="Stronger loyalty insight"
            description="Identify superfans and emerging high-value segments earlier."
          />
          <Card
            icon={Eye}
            title="Deeper fan understanding"
            description="See beyond attendance and purchase history alone."
          />
        </div>
      </Section>

      {/* Section 7 — Final CTA */}
      <CTASection
        headline="See how the app strengthens the full platform"
        body="FanFeed App is one of the reasons FanFeed OS can offer a richer, more durable view of the fan than a traditional data layer alone."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        className='bg-white'
      />
    </>
  );
}
