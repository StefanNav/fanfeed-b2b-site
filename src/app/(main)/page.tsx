import Image from "next/image";
import {
  Quote,
} from "lucide-react";
import {
  IconSparkleFillDuo18,
  IconCalendarStarFillDuo18,
  IconHeartPulseFillDuo18,
  IconFireFillDuo18,
  IconMedalFillDuo18,
  IconTargetFillDuo18,
} from "nucleo-ui-fill-duo-18";
import { Section, SectionHeader } from "@/components/ui/section";
import { BenefitCard } from "@/components/marketing/benefit-card";
import { RevenueIllustration } from "@/components/marketing/illustrations/revenue-illustration";
import { SegmentationIllustration } from "@/components/marketing/illustrations/segmentation-illustration";
import { FanEquityIllustration } from "@/components/marketing/illustrations/fan-equity-illustration";
import { CACIllustration } from "@/components/marketing/illustrations/cac-illustration";
import { SponsorshipIllustration } from "@/components/marketing/illustrations/sponsorship-illustration";
import { OutreachIllustration } from "@/components/marketing/illustrations/outreach-illustration";
import { CTASection } from "@/components/shared/cta-section";
import { FadeIn } from "@/components/shared/fade-in";
import { JsonLd } from "@/components/shared/json-ld";
import {
  breadcrumbSchema,
  faqSchema,
  softwareAppSchema,
} from "@/lib/structured-data";
import { FeatureShowcase } from "@/components/marketing/feature-showcase";
import { HeroContent } from "@/components/marketing/hero-content";
import { HowItWorksCarousel } from "@/components/marketing/how-it-works-carousel";
import { FaqAccordion } from "@/components/marketing/faq-accordion";

const HOME_FAQS = [
  {
    question: "What is FanFeed?",
    answer:
      "We work with partners to turn fragmented fan data into richer profiles, stronger audience insight, and more effective activation. We build on the systems and data you already have, add new consumer signal, and help create a stronger foundation for segmentation, outreach, and engagement. We can create value from day one, with more unlocked as the ecosystem grows.",
  },
  {
    question: "Who is FanFeed built for?",
    answer:
      "FanFeed is built for sports teams, live entertainment venues, hospitality organizations, and other operators that want a better understanding of their audience. We work closely with front offices, marketing teams, partnerships groups, and operations teams to create practical value early while building toward a stronger long-term fan data advantage.",
  },
  {
    question: "How is FanFeed different from a CRM?",
    answer:
      "Traditional CRMs centralize contact records, but they rarely provide the profile depth needed for real fan understanding. We build on the data you already have by adding richer event, engagement, and behavioral context. That helps create a more useful fan intelligence layer and gives your team better inputs for segmentation, outreach, and engagement.",
  },
  {
    question: "What data sources does FanFeed connect?",
    answer:
      "We build on top of the data sources partners already use, including ticketing, merchandise, food and beverage, CRM, email, mobile and digital engagement, venue behavior, and first-party signal from the FanFeed App. The goal is not just to connect systems, but to make that data more useful and more actionable over time.",
  },
  {
    question: "What is the FanFeed App?",
    answer:
      "The FanFeed App is our consumer touchpoint and a key part of how the ecosystem grows stronger over time. It creates deeper first-party signal through fan activity, event history, affinity, and engagement. That helps partners access richer fan profiles today while expanding long-term value as more fans participate.",
  },
  {
    question: "What is FanFeed Studio?",
    answer:
      "FanFeed Studio is our custom solutions arm. We work with partners to build tools, workflows, and fan-facing experiences that create practical value from day one. That can include internal tools, outreach systems, AI workflows, and custom fan products, all designed to strengthen the broader FanFeed ecosystem over time.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={softwareAppSchema()} />
      <JsonLd
        data={breadcrumbSchema([{ name: "Platform", href: "/" }])}
      />
      <JsonLd data={faqSchema(HOME_FAQS)} />

      {/* ══════════════════════════════════════════════════════
          SECTION 1 & 2 — HERO + PROBLEM
      ══════════════════════════════════════════════════════ */}
      <section className="relative w-full pt-24 pb-20 md:pt-40 md:pb-32 lg:pt-48 bg-gradient-to-b from-[#f5f5f5] to-[#f9f8f6]">

        {/* Orbs Image Background — hidden on mobile for GPU perf */}
        <div className="pointer-events-none absolute inset-0 z-0 h-[220rem] w-full overflow-hidden hidden md:block">
          <img
            src="/img/bg.jpg"
            alt=""
            className="absolute left-1/2 z-0 h-auto w-[180rem] max-w-none -translate-x-1/2 opacity-80"
            aria-hidden="true"
          />
        </div>

        {/* HERO CONTENT */}
        <HeroContent />

        <div className="relative z-10 mx-auto max-w-7xl -m px-6 lg:px-8 pt-16 md:pt-32">
          <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">

            {/* Left: Copy */}
            <div className="space-y-8 md:space-y-12">
              <FadeIn>
                <h2 className="text-[#212123] text-xl md:text-[2rem] leading-snug md:leading-[2.5rem] font-medium tracking-[-0.5px]">
                  Most fan data stops at the point of purchase, leaving limited visibility into audiences and few meaningful ways to engage them.
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h2 className="text-[#212123] text-xl md:text-[2rem] leading-snug md:leading-[2.5rem] font-medium tracking-[-0.5px]">
                 FanFeed helps you build on the data you already have, adding new consumer signals to create a deeper, more actionable view of your audience.
                </h2>
              </FadeIn>
            </div>

            {/* Right: Visual Cards */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md pt-4 md:pt-12">
              <div className="relative flex flex-row items-start">

                {/* Card 1: Basic fan profile */}
                <FadeIn
                  direction="right"
                  delay={0.1}
                  viewportMargin="-50px"
                  className="w-[45%] rounded-xl bg-white p-3 md:p-5 rotate-[-2deg] shrink-0 shadow-lg shadow-violet-300/20"
                >
                  <h3 className="text-[0.6rem] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Basic fan profile
                  </h3>
                  <ul className="mt-3 md:mt-6 space-y-2 md:space-y-4">
                    {["Name", "Email", "Ticket quantity"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 md:gap-3 text-[0.7rem] md:text-sm text-muted">
                        <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-border" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>

                {/* Card 2: FanFeed profile */}
                <FadeIn
                  direction="right"
                  delay={0.2}
                  viewportMargin="-50px"
                  className="w-[60%] rounded-xl bg-white p-3 md:p-5 -ml-4 mt-4 relative z-10 shadow-lg shadow-violet-300/20"
                >
                  <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3">
                    <span className="inline-flex items-center rounded-full bg-[#8780ff] px-2 py-0.5 md:px-3 md:py-1 text-[0.6rem] md:text-xs font-medium text-white shadow-sm">
                      <IconSparkleFillDuo18 className="mr-1 md:mr-1.5 h-2.5 w-2.5 md:h-3 md:w-3" />
                      Enriched
                    </span>
                  </div>
                  <h3 className="text-[0.6rem] md:text-xs font-semibold uppercase tracking-wider text-[#8780ff]">
                    FanFeed profile
                  </h3>
                  <ul className="mt-3 md:mt-6 space-y-2 md:space-y-4">
                    {[
                      { label: "10+ yrs of event history", icon: IconCalendarStarFillDuo18 },
                      { label: "Team / artist affinity", icon: IconHeartPulseFillDuo18 },
                      { label: "Content engagement", icon: IconFireFillDuo18 },
                      { label: "Loyalty signals", icon: IconMedalFillDuo18 },
                      { label: "Purchase intent", icon: IconTargetFillDuo18 },
                    ].map((item, i) => {
                      const ItemIcon = item.icon;
                      return (
                        <li key={i} className="flex items-center gap-2 md:gap-3 text-[0.7rem] md:text-sm font-medium text-foreground">
                          <div className="flex h-4 w-4 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full bg-[#8780ff]/10 text-[#8780ff]">
                            <ItemIcon className="h-2 w-2 md:h-3 md:w-3" />
                          </div>
                          {item.label}
                        </li>
                      );
                    })}
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard SVG Preview */}
        {/* <div className="mt-20 md:mt-36 relative mx-auto max-w-5xl z-10">
          <div className="relative rounded-t-xl border border-border border-b-0 bg-white shadow-2xl h-[220px] sm:h-[300px] md:h-[400px]">
            <video
              ref={null}
              src={'/mp4/gift.mp4'}
              preload="metadata"
              muted
              loop
              playsInline
              autoPlay
              className="absolute z-0 -top-12 md:-top-24 -left-10 md:-left-20 -rotate-[20deg] w-48 h-48 md:w-72 md:h-72 hue-rotate-240 brightness-70 object-contain transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute -bottom-1 left-0 right-0 h-28 md:h-32 bg-gradient-to-t from-white to-transparent z-10" />
            <Image
              src="/svg/dashboard.svg"
              alt="FanFeed Dashboard Preview"
              width={1200}
              height={800}
              className="w-full z-2 relative h-auto object-cover object-top"
              priority
            />
          </div>
        </div> */}
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — WHY DIFFERENT
      ══════════════════════════════════════════════════════ */}
      <Section className="relative overflow-hidden mt-0 !pt-12">
        {/* Soft Gradients instead of dark mode */}
        <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px]  translate-x-1/3 rounded-full bg-lavender/40 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-peach/40 blur-[120px]" />

        <FadeIn>
          <SectionHeader
            title={<span className="text-foreground">Built on uniquely rich fan data</span>}
            align="left"
            description={"FanFeed goes beyond traditional platforms by combining a consumer app with a business platform, continuously capturing fan-generated content, engagement, and first-party signal."}
          />
        </FadeIn>

        <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 min-h-[280px] md:min-h-[380px]">
          <FadeIn
            delay={0.1}
            className="group rounded-2xl md:rounded-3xl flex flex-col p-5 md:p-8 bg-cover bg-center bg-no-repeat relative overflow-hidden min-h-[300px]"
            style={{
              backgroundImage: "url('/img/home/ff-app-highlight.png')",
            }}
          >
              <div className="absolute inset-0 bg-gradient-to-r from-[#f0d9cc]/90 via-[#f0d9cc]/60 to-transparent md:hidden" />
            <div className="absolute inset-0 bg-black/5" />
            <div className="flex flex-col relative z-10 w-[40%] md:w-[40%]">
              <h3 className="text-base md:text-xl font-semibold text-foreground">FanFeed App</h3>
              <p className="mt-1 text-sm md:text-lg text-foreground">
                Access to richer first party data, content, and behavior.
              </p>
            </div>
            <div className="mt-auto w-[40%] md:w-[40%] relative z-2">
              <p className="mt-1 text-sm md:text-lg text-foreground mb-1 md:mb-2">
                See 10+ years of event history in seconds.
              </p>
              {/* <div className="relative text-lg z-10 w-fit flex flex-row items-center">
                Learn more
                <ArrowRight className="ml-2 -mr-1.5 h-4 w-4" />
                </div> */}
            </div>
          </FadeIn>
          <FadeIn
            delay={0.2}
            className="group rounded-2xl md:rounded-3xl flex flex-col p-5 md:p-8 bg-cover bg-center md:bg-center bg-no-repeat relative overflow-hidden min-h-[300px] md:min-h-0"
            style={{
              backgroundImage: "url('/img/home/ff-data-explorer-highlight.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/5" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e8dae8]/90 via-[#e8dae8]/60 to-transparent md:hidden" />
            <div className="flex flex-col relative z-10">
              <h3 className="text-base md:text-xl font-semibold text-foreground">FanFeed OS</h3>
              <p className="mt-1 text-sm md:text-lg text-foreground max-w-[80%] md:max-w-[65%]">
                The intelligence layer for understanding, segmenting, and
                activating fans.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          HOW IT WORKS CAROUSEL
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden mt-0 pt-12 w-full">
        {/* Soft Gradients instead of dark mode */}
        <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px]  translate-x-1/3 rounded-full bg-lavender/40 blur-[120px]" />
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-peach/40 blur-[120px]" />

        <HowItWorksCarousel />
      </section>


    {/* ══════════════════════════════════════════════════════
          SECTION 5 — OUTCOMES / USE CASES
          Card grid on white
      ══════════════════════════════════════════════════════ */}
      <Section>
        <FadeIn>
          <SectionHeader
            title="We can help turn audience engagement into a deeper fan asset"
            description="FanFeed combines richer fan profiles today with a model that gets more powerful with usage."
            className="max-w-6xl"
          />
        </FadeIn>

        <div className="mt-8 md:mt-16 grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
          {[
            {
              iconSrc: "/svg/isometric/cac.svg",
              title: "Lower CAC",
              description: "Build owned audiences. Stop paying to reach fans you already have",
              illustration: <CACIllustration className="h-full w-full" />
            },
            {
              iconSrc: "/svg/isometric/revenue.svg",
              title: "More revenue",
              description: "Convert engagement into ticket sales and upsells with more confidence",
              illustration: <RevenueIllustration className="h-full w-full" />
            },
            {
              iconSrc: "/svg/isometric/sponsorships.svg",
              title: "Better sponsorships",
              description: "Prove and improve ROI with real attribution data your sponsors can trust",
              illustration: <SponsorshipIllustration className="h-full w-full" />
            },
            {
              iconSrc: "/svg/isometric/equity.svg",
              title: "Fan equity",
              description: "Unlock value from fans who never purchased a ticket directly. Every event makes the profile stronger",
              illustration: <FanEquityIllustration className="h-full w-full" />
            },
            {
              iconSrc: "/svg/isometric/segment.svg",
              title: "Smart segmentation",
              description: "Build smarter audiences using a fuller picture of fan behavior and value",
              illustration: <SegmentationIllustration className="h-full w-full" />
            },
            {
              iconSrc: "/svg/isometric/outreach.svg",
              title: "Improved outreach",
              description: "Shape offers, perks, and journeys around real fan context",
              illustration: <OutreachIllustration className="h-full w-full" />
            }
          ].map((item, i) => (
            <FadeIn
              key={item.title}
              className="h-full"
              distance={24}
              viewportMargin="-50px"
              delay={i * 0.05}
            >
              <BenefitCard
                iconSrc={item.iconSrc}
                title={item.title}
                description={item.description}
                illustration={(item as any).illustration}
              />
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          FEATURE SHOWCASE MODULE
      ══════════════════════════════════════════════════════ */}
      <FeatureShowcase />

      {/* ══════════════════════════════════════════════════════
          EXAMPLE PARTNERSHIPS
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-32 lg:py-40">
        {/* Soft atmospheric background */}
        <div className="absolute inset-0 -z-10 bg-background" />
        <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-peach/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title="We're working with teams, artists, venues, and creators"
            description="Leading sports media brands, technology platforms, and global entertainers can all use FanFeed to better understand and activate their audiences."
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* --- COLUMN 1: Kygo & Snapback Sports --- */}
            <div className="flex flex-col gap-8 lg:gap-12 md:mt-16">

              {/* Kygo */}
              <FadeIn
                delay={0.05}
                viewportMargin="-50px"
                className="rounded-[2.5rem] border border-[#442D50]/20 p-8 lg:p-10 transition-transform hover:-translate-y-1 flex flex-col justify-between"
                style={{ background: 'linear-gradient(135deg, #442D50 0%, #2E1A23 100%)' }}
              >
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">Trusted Partner</span>
                  <div className="mt-6 space-y-4">
                    <p className="text-[17px] font-medium leading-relaxed text-white">
                      <strong>Kygo</strong> is one of the most globally recognized names in dance music, capturing a massive audience with 28M+ monthly Spotify listeners and millions of social followers.
                    </p>
                    <p className="text-[14px] leading-relaxed text-muted">
                    </p>
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center">
                      <Image src="/svg/partners/kygo.svg" alt="Kygo" width={32} height={32} className="invert brightness-0 invert" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-white">Kygo</div>
                      <div className="text-[13px] font-medium text-white/60">Global Artist</div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Snapback Sports */}
              <FadeIn
                delay={0.1}
                viewportMargin="-50px"
                className="rounded-[2.5rem] border border-[#e4d8e0] p-8 lg:p-10 transition-transform hover:-translate-y-1 flex flex-col justify-between"
                style={{ background: 'linear-gradient(135deg, #F8E5EA 0%, #E7E2FB 100%)' }}
              >
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Trusted Partner</span>
                  <div className="mt-6 space-y-4">
                    <p className="text-[17px] font-medium leading-relaxed text-foreground">
                      <strong>Snapback Sports</strong> is a leading digital sports media brand reaching over 1.5 million fans through highly engaging sports content.
                    </p>
                    <p className="text-[14px] leading-relaxed text-muted">
                    </p>
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between pt-6 border-t border-blue-900/5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center">
                      <Image src="/svg/partners/snapback.svg" alt="Snapback Sports" width={32} height={32} className="" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-foreground">Snapback Sports</div>
                      <div className="text-[13px] font-medium text-muted">Sports Media</div>
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>

            {/* --- COLUMN 2: Snap! Mobile & Palm Tree Crew --- */}
            <div className="flex flex-col gap-8 lg:gap-12 md:-mt-8">

              {/* Snap! Mobile */}
              <FadeIn
                delay={0.15}
                viewportMargin="-50px"
                className="rounded-[2.5rem] border border-[#e8bfd0] p-8 lg:p-12 transition-transform hover:-translate-y-1 flex flex-col justify-between"
                style={{ background: 'linear-gradient(135deg, #F3CBD1 0%, #FEECE4 100%)' }}
              >
                <div>
                  {/* <Quote className="h-10 w-10 text-[#d4979e] mb-8 rotate-180" /> */}
                  <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Trusted Partner</span>
                  <div className="mt-6 space-y-4">
                    <p className="text-[18px] lg:text-[20px] font-medium leading-relaxed text-foreground">
                      <strong>Snap! Mobile</strong> is a massive community engagement platform powering fundraising and operations for over 150,000 youth programs and 12.5 million participants.

                    </p>
                    <p className="text-[14px] leading-relaxed text-muted">
                    </p>
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between pt-6 border-t border-fuchsia-900/5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center">
                      <Image src="/svg/partners/snap-mobile.svg" alt="Snap! Mobile" width={32} height={32} className="" />
                    </div>
                    <div>
                      <div className="text-[16px] font-bold text-foreground">Snap! Mobile</div>
                      <div className="text-[13px] font-medium text-muted">Youth Programs</div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Palm Tree Crew */}
              <FadeIn
                delay={0.2}
                viewportMargin="-50px"
                className="rounded-[2.5rem] border border-[#4D2B3B]/20 p-8 lg:p-10 transition-transform hover:-translate-y-1 flex flex-col justify-between"
                style={{ background: 'linear-gradient(135deg, #4D2B3B 0%, #2E1A23 100%)' }}
              >
                <div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">Trusted Partner</span>
                  <div className="mt-6 space-y-4">
                    <p className="text-[17px] font-medium leading-relaxed text-white">
                      <strong>Palm Tree Crew</strong> is a global lifestyle and entertainment platform known for blending premium live events, hospitality, and culture across U.S. and European festivals.
                    </p>
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between pt-6 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center">
                      <Image src="/svg/partners/ptc.svg" alt="Palm Tree Crew" width={32} height={32} className="invert brightness-0 invert" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-white">Palm Tree Crew</div>
                      <div className="text-[13px] font-medium text-white/60">Lifestyle & Events</div>
                    </div>
                  </div>
                </div>
              </FadeIn>

            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — PROBLEM
      ══════════════════════════════════════════════════════ */}
      {/* <Section id="problem" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-surface/50" />
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-peach/30 blur-[100px]" />

          <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            title="Artists, teams, and venues struggle to truly know and reach their fans"
            description="Three key gaps stand in the way."
          />
        </motion.div>
        
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              title="Limited fan data"
              videoSrc="/mp4/venn.mp4"
              description={
                <div className="space-y-4">
                  <p>Ticketing data is shallow and usually tied to just one buyer.</p>
                  <ul className="list-disc text-base pl-4 space-y-2 text-muted-foreground">
                    <li>Only the purchaser is known, not the broader attending group</li>
                    <li>Little visibility into fan identity, behavior, or loyalty</li>
                  </ul>
                </div>
              }
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              title="No unified UGC pipeline"
              videoSrc="/mp4/plane.mp4"
              description={
                <div className="space-y-4">
                  <p>Fan content is valuable, but hard to access and even harder to use.</p>
                  <ul className="list-disc text-base pl-4 space-y-2 text-muted-foreground">
                    <li>Teams rely on Instagram DMs and manual permission requests</li>
                    <li>Most fan-created content never gets surfaced or reused</li>
                  </ul>
                </div>
              }
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card
              title="Limited direct communication"
              videoSrc="/mp4/ear.mp4"
              description={
                <div className="space-y-4">
                  <p>Most fan relationships are still controlled by third-party platforms.</p>
                  <ul className="list-disc text-base pl-4 space-y-2 text-muted-foreground">
                    <li>Engagement often ends after the ticket transaction</li>
                    <li>Organizations lack consistent owned channels to reach fans directly</li>
                  </ul>
                </div>
              }
            />
          </motion.div>
        </div>
      </Section> */}

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — APP PREVIEW
          Feature split: text left, visual right
      ══════════════════════════════════════════════════════ */}
      {/* <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-brand-muted px-4 py-1.5 text-xs font-semibold tracking-wider text-brand uppercase">
              FanFeed App
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              The app that helps deepen the fan graph
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Most fan systems are built mostly on transactions. FanFeed App adds
              another layer of identity, engagement, and behavioral signal —
              making FanFeed OS more valuable over time.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Richer first-party engagement",
                "Stronger fan identity",
                "Deeper context around fandom",
                "More long-term profile value",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-muted">
                    <Check className="h-3 w-3 text-brand" aria-hidden="true" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href="/app" variant="outline" className="rounded-full shadow-sm hover:shadow-md transition-shadow">
                Explore the App
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
          <div className="hidden lg:block" aria-hidden="true">
            <div className="mx-auto max-w-sm space-y-4">
              <ProfileCard name="Emily Chen" role="VIP · 12 events attended" score={88} />
              <GaugeCard label="Fan score" value={88} />
              <StatCard label="Engagement signals" value="2,847" trend="up" trendValue="+23%" />
            </div>
          </div>
        </div>
      </Section> */}

      {/* ══════════════════════════════════════════════════════
          FAQ — SEO / AI discoverability
      ══════════════════════════════════════════════════════ */}
      <Section className='!pt-0'>
        <FadeIn>
          <SectionHeader
            title="Frequently asked questions"
          />
        </FadeIn>

        <FaqAccordion items={HOME_FAQS} defaultOpen={0} />
      </Section>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
      ══════════════════════════════════════════════════════ */}
      <FadeIn>
        <CTASection
          headline="Let's build your fan data engine"
          body="Start converting engagement into owned revenue"
          primaryCta={{ label: "Book a demo", href: "/contact" }}
          className="bg-gradient-to-b from-[#f5f0f8] via-[#f8f0f4] to-[#f5f5f5]"
        />
      </FadeIn>
    </>
  );
}
