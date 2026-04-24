import {
  Wrench,
  ArrowRight,
  Mail,
  MessageSquare,
  BarChart3,
  Workflow,
  Sparkles,
  Users,
  DollarSign,
  Lock,
  Puzzle,
  Clock,
  Zap,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, StepCard } from "@/components/ui/card";
import { CTASection } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { generatePageMetadata } from "@/lib/metadata";
import { PainPointToProduct } from "@/components/marketing/pain-point-to-product";
import { StudioBuildMatrix } from "@/components/marketing/studio-build-matrix";
import { EmbeddedEverywhere } from "@/components/marketing/embedded-everywhere";
import { ReplaceTheVendor } from "@/components/marketing/replace-the-vendor";

export const metadata = generatePageMetadata({
  title: "FanFeed Studio — Custom fan tools and internal systems, built faster",
  description:
    "FanFeed Studio helps teams replace bloated point solutions, launch new capabilities quickly, and build tools they actually own. Custom outreach, AI workflows, dashboards, and more.",
  path: "/studio",
});

export default function StudioPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Platform", href: "/" },
          { name: "Studio", href: "/studio" },
        ])}
      />

      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-muted/20 via-white to-white pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold tracking-wide text-brand uppercase">
              FanFeed Studio
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Custom fan tools and internal systems, built faster
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              FanFeed Studio helps teams replace bloated point solutions, launch
              new capabilities quickly, and build tools they actually own.
            </p>
            <div className="mt-8">
              <Button href="/contact" size="lg" className="bg-[#413149] text-white hover:bg-[#2d2232]">
                Talk to us about a build
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — What Studio is */}
      <section className="relative overflow-hidden py-24 bg-surface">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-surface -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              From operator pain point to shipped product
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              FanFeed Studio works with teams, venues, and operators to design and ship tools tailored to their actual workflows.
            </p>
          </div>
          <PainPointToProduct />
        </div>
      </section>

      {/* Section 2.5 — Studio Build Matrix */}
      <section className="relative overflow-hidden py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              A build capability across the fan stack
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Studio is not one service. It is a library of buildable systems that connect your raw data to tangible fan experiences.
            </p>
          </div>
          <StudioBuildMatrix />
        </div>
      </section>

      {/* Section 2.75 — Embedded Everywhere */}
      <section className="relative overflow-hidden py-24 bg-surface">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-surface -z-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Built to plug into the systems your organization already runs on
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Studio builds tools that live where partners already operate—whether that’s a fan-facing native app or an internal CRM workflow.
            </p>
          </div>
          <EmbeddedEverywhere />
        </div>
      </section>

      {/* Section 2.9 — Replace The Vendor */}
      <section className="relative overflow-hidden py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Stop renting rigid tools. Build the one your team actually needs.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Studio can replace overpriced niche tools with custom systems your team actually owns and controls.
            </p>
          </div>
          <ReplaceTheVendor />
        </div>
      </section>

      {/* Section 3 — Common pain points */}
      <Section background="surface">
        <SectionHeader
          title="The problem with most niche vendors"
          description="Many organizations end up paying too much for narrow products that are expensive, inflexible, and difficult to extend. Studio offers a faster path to tools built around your actual workflow."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={DollarSign}
            title="Too expensive"
            description="Overpaying for tools that only solve one narrow use case."
          />
          <Card
            icon={Lock}
            title="Too rigid"
            description="Products that do not fit how your team actually works."
          />
          <Card
            icon={Puzzle}
            title="Too disconnected"
            description="Systems that create more fragmentation instead of less."
          />
          <Card
            icon={Clock}
            title="Too slow"
            description="Vendors that move slower than the opportunity in front of you."
          />
        </div>
      </Section>

      {/* Section 4 — What we build */}
      <Section>
        <SectionHeader
          title="Examples of what FanFeed Studio can help build"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={Mail}
            title="Outreach systems"
            description="Modern, team-owned email and messaging workflows."
          />
          <Card
            icon={MessageSquare}
            title="Custom chat tools"
            description="Purpose-built bots and fan-facing assistants."
          />
          <Card
            icon={BarChart3}
            title="Internal dashboards"
            description="Tools for engagement teams, partnerships, and operations."
          />
          <Card
            icon={Workflow}
            title="Campaign workflows"
            description="Systems that make fan activation easier to manage."
          />
          <Card
            icon={Sparkles}
            title="AI-powered workflows"
            description="Automations and copilots built around repetitive internal tasks."
          />
          <Card
            icon={Users}
            title="Fan-facing products"
            description="Digital experiences designed around the brand and audience."
          />
        </div>
      </Section>

      {/* Section 5 — How Studio works */}
      <Section background="surface">
        <SectionHeader
          title="A practical path from pain point to shipped product"
          description="Studio is designed to move quickly. We identify the problem, define a tight MVP, build the right solution, and iterate from there."
        />
        <div className="mx-auto mt-14 grid max-w-2xl gap-8">
          <StepCard
            step={1}
            title="Identify the pain point"
            description="Start with the workflow or vendor gap causing the most friction."
          />
          <StepCard
            step={2}
            title="Scope the MVP"
            description="Define the smallest useful product that solves the problem well."
          />
          <StepCard
            step={3}
            title="Build fast"
            description="Design and ship with speed, clarity, and product quality."
          />
          <StepCard
            step={4}
            title="Launch and extend"
            description="Iterate based on usage and connect back into FanFeed where it adds value."
          />
        </div>
      </Section>

      {/* Section 6 — Why teams choose Studio */}
      <Section>
        <SectionHeader title="Why build with FanFeed Studio" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={Shield}
            title="Own the product"
            description="Get a solution you control instead of renting inflexible software."
          />
          <Card
            icon={Zap}
            title="Move faster"
            description="Ship in weeks, not quarters."
          />
          <Card
            icon={DollarSign}
            title="Reduce vendor spend"
            description="Replace costly tools with something better aligned to your business."
          />
          <Card
            icon={TrendingUp}
            title="Extend your fan intelligence"
            description="Build solutions that can connect back into the broader FanFeed ecosystem."
          />
        </div>
      </Section>

      {/* Section 7 — Final CTA */}
      <CTASection
        headline="Have a tool you wish existed — or a vendor you wish you could replace?"
        body="FanFeed Studio helps organizations move faster on the products and workflows that matter most."
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
      />
    </>
  );
}
