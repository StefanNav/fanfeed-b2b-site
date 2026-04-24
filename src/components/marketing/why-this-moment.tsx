"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section";
import { useIsMobile } from "@/lib/use-mobile";
import {
  IconBoltLightningFillDuo18,
  IconLayersFillDuo18,
  IconMicrochipFillDuo18,
  IconGlobeFillDuo18,
  IconArrowUpRightFillDuo18,
  IconCircleQuestionFillDuo18,
} from "nucleo-ui-fill-duo-18";

import Image from "next/image";
import { ArrowUpRight, Linkedin } from "lucide-react";

// --- Types ---

interface FeatureCardData {
  id: string;
  icon: React.ElementType;
  label: string;
  heading: string;
  body: string;
  accent: string;
  accentBg: string;
  gradient: string;
  dark?: boolean;
  shadowDepth: string;
  rotation: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  logo?: string;
  link?: string;
}

// --- Data ---

const CARDS_DATA: FeatureCardData[] = [
  {
    id: "fragmented-data",
    icon: IconLayersFillDuo18,
    label: "The Challenge",
    heading: "Fragmented fan data",
    body: "The systems around the fan were never designed to work as one. Teams rely on disconnected systems, expensive point solutions, and incomplete profiles.",
    accent: "#8B6DAF",
    accentBg: "rgba(139,109,175,0.12)",
    gradient: "linear-gradient(135deg, #F8E5EA 0%, #E7E2FB 100%)",
    shadowDepth:
      "0 2px 4px rgba(0,0,0,0.03), 0 12px 24px rgba(0,0,0,0.07), 0 32px 56px rgba(139,109,175,0.07)",
    rotation: "-1.2deg",
  },
  {
    id: "technical-leverage",
    icon: IconMicrochipFillDuo18,
    label: "The Shift",
    heading: "New technical leverage",
    body: "Modern tooling and AI make it possible to build and ship faster than ever. FanFeed exists to help organizations take advantage of that shift.",
    accent: "rgba(220,200,255,1)",
    accentBg: "rgba(220,200,255,0.15)",
    gradient: "linear-gradient(135deg, #442D50 0%, #2E1A23 100%)",
    dark: true,
    shadowDepth:
      "0 4px 8px rgba(0,0,0,0.04), 0 16px 32px rgba(0,0,0,0.06), 0 40px 64px rgba(68,45,80,0.12)",
    rotation: "0.8deg",
  },
  {
    id: "rising-expectations",
    icon: IconGlobeFillDuo18,
    label: "The Demand",
    heading: "Rising expectations",
    body: "Fans expect more personalized, connected experiences. They no longer settle for generic interactions in a world of hyper-relevance.",
    accent: "#A0616D",
    accentBg: "rgba(160,97,109,0.12)",
    gradient: "linear-gradient(135deg, #F3CBD1 0%, #FEECE4 100%)",
    shadowDepth:
      "0 2px 4px rgba(0,0,0,0.03), 0 10px 20px rgba(0,0,0,0.06), 0 28px 52px rgba(160,97,109,0.08)",
    rotation: "-0.5deg",
  },
];

const TEAM_DATA: TeamMember[] = [
  {
    name: "Cole Rubin",
    role: "Founder",
    description:
      "Cole has 20+ years in live events and founded Dynasty Sports & Entertainment (Logitix), where he served as CEO. The company automated ticket pricing, distribution, and fulfillment for teams, venues, artists, and promoters, grew into a leading inventory and technology provider across primary and secondary markets, processed $4B+ in tickets annually, became the top supplier to secondary platforms, and was acquired by private equity.",
    image: "/img/team/cole-rubin.jpg",
    link: "https://www.linkedin.com/in/cole-rubin-57a65547",
  },
  {
    name: "Jack Phifer",
    role: "Co-Founder / Head of Product",
    description:
      "Startup founder and product leader with 10+ years building and scaling digital platforms serving 100k+ users. MIT Computer Science. He has launched dozens of enterprise and startup products. As Head of Engineering, Jack is building FanFeed's robust technical foundation to help teams capture and activate fan insights at scale.",
    image: "/img/team/jack-phifer.jpg",
    link: "https://www.linkedin.com/in/jack-phifer/",
  },
  {
    name: "Colin Casey",
    role: "Head of Partnerships",
    description:
      "Colin is a partnerships and revenue leader with deep experience across sports, entertainment, and live events. As one of the first hires at FEVO, he helped scale the company into a leading fan commerce platform supporting 800+ major teams, venues, and global entertainment brands. At FanFeed, Colin leads strategic partnerships and commercial growth.",
    image: "/img/team/colin-casey.jpg",
    link: "https://www.linkedin.com/in/colinmcasey/",
  },
  {
    name: "Randy Nichols",
    role: "Head of Music",
    description:
      "Randy is an artist manager and music industry operator with 20+ years across touring, ticketing, and artist development. He has managed large acts, supporting careers with gold records, Grammy nominations, and tens of millions in touring and merchandise revenue. He has advised platforms including Bandsintown and atVenu, which was acquired for more than $200 million.",
    image: "/img/team/randy-nichols.jpg",
    link: "https://www.linkedin.com/in/randynicholsny/",
  },
  {
    name: "Jack Strachan",
    role: "Head of Design",
    description:
      "Product & design leader spanning strategy, UI/UX, and implementation. MIT graduate and creator of a 1.3M subscriber YouTube channel. Chief Design Officer at Scope Labs, where he leads design across dozens of projects. At FanFeed, Jack drives the design vision across the consumer app and enterprise tools, translating complex data into intuitive experiences.",
    image: "/img/team/jack-strachan.png",
    link: "https://www.linkedin.com/in/jack-strachan-7b8075157/",
  },
  {
    name: "Cory O'Shea",
    role: "Head of Engineering",
    description:
      "Engineering leader and MIT Computer Science graduate with experience at Google and Scale AI. Built infrastructure serving millions and co-founded a tutoring company later acquired. At FanFeed, Cory leads platform engineering and systems architecture, ensuring the technical foundation scales reliably as the product grows across teams, venues, and artists.",
    image: "/img/team/cory-oshea.png",
    link: "https://www.linkedin.com/in/cory-oshea/",
  },
];

const SCOPE_DATA: TeamMember = {
  name: "Scope",
  role: "Technical Cofounder",
  description:
    "Scope is the MIT founded product and engineering team behind FanFeed, responsible for platform architecture, product development, and the systems that power everything thats shipped. Scope works closely with FanFeed on roadmap execution, technical strategy, and implementation across both the consumer app and broader platform.",
  logo: "/svg/partners/Scope.svg",
  link: "https://scopelabs.com",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.12,
    },
  }),
};

export function WhyThisMomentMatters() {
  const isMobile = useIsMobile();
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 !pt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24 lg:items-stretch">
        {/* --- LEFT: Content --- */}
        <div className="relative">
          <div className="lg:sticky lg:top-24 space-y-12">
            {/* Eyebrow + Headline + Body */}
            <SectionHeader
              align="left"
              animate
              eyebrow="Industry Context"
              eyebrowIcon={<IconCircleQuestionFillDuo18 className="h-4 w-4" />}
              title="Why this moment matters"
              description="The fan stack is fragmented. Most teams are stuck with disconnected systems, expensive tools, and an incomplete view of their audience. At the same time, it has become much easier to build better software, move faster, and rethink what this stack should look like. FanFeed exists to help teams take advantage of that shift."
              className="m-0"
            />
          </div>
        </div>

        {/* --- RIGHT: Feature Cards (stacked / overlapping) --- */}
        <div className="relative mt-12 space-y-0 lg:mt-0">
          {CARDS_DATA.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
                whileInView={isMobile ? undefined : "visible"}
                viewport={isMobile ? undefined : { once: true, margin: "-60px" }}
                custom={idx}
                variants={isMobile ? undefined : fadeUp}
                {...(isMobile ? { animate: { opacity: 1, y: 0 } } : {})}
                whileHover={{
                  y: -8,
                  rotate: 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                  },
                }}
                style={{
                  rotate: card.rotation,
                  boxShadow: card.shadowDepth,
                  zIndex: idx + 1,
                  position: "relative",
                  marginBottom:
                    idx < CARDS_DATA.length - 1 ? "-10px" : "0px",
                }}
                className={`cursor-default rounded-[2.5rem] border ${card.dark ? 'border-white/10' : 'border-black/5'}`}
              >
                <div
                  className="overflow-hidden rounded-[2.5rem]"
                  style={{
                    background: card.gradient,
                  }}
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-5">
                      {/* Icon Badge */}
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${card.dark ? 'bg-white/10' : ''}`}
                        style={card.dark ? undefined : {
                          background: card.accentBg,
                        }}
                      >
                        <Icon
                          className="h-6 w-6"
                          style={{ color: card.dark ? 'rgba(255,255,255,0.85)' : card.accent }}
                        />
                      </div>

                      <div className="flex-1 space-y-1">
                        <span
                          className={`block text-[10px] font-bold uppercase tracking-[2px] ${card.dark ? 'text-white/50' : ''}`}
                          style={card.dark ? undefined : { color: card.accent }}
                        >
                          {card.label}
                        </span>
                        <h3 className={`mt-2 text-xl font-bold leading-tight tracking-[-0.02em] md:text-2xl ${card.dark ? 'text-white' : 'text-foreground'}`}>
                          {card.heading}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-6 pl-[68px]">
                      <p className={`text-base leading-relaxed md:text-lg ${card.dark ? 'text-white/70' : 'text-muted'}`}>
                        {card.body}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* --- BOTTOM: Team Section --- */}
      <motion.div
        initial={isMobile ? { opacity: 1, y: 0 } : "hidden"}
        whileInView={isMobile ? undefined : "visible"}
        viewport={isMobile ? undefined : { once: true, margin: "-80px" }}
        custom={2}
        variants={isMobile ? undefined : fadeUp}
        {...(isMobile ? { animate: { opacity: 1, y: 0 } } : {})}
        className="mt-32 space-y-16 pt-20"
      >
        <SectionHeader
          align="center"
          title="A team that understands both the industry and the build"
          description="FanFeed brings together deep live events and sports relationships with strong product, design, and engineering execution."
          className="mx-auto"
        />

        <div className="mt-20 space-y-6 lg:space-y-8">
          {/* Scrollable team row — full bleed, gutters match page */}
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
            {/* Solid edge covers + gradient fade overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex">
              <div className="w-1 md:w-4 lg:w-8 bg-[#FAF9F7]" />
              <div className="w-6 md:w-20 lg:w-32 bg-gradient-to-r from-[#FAF9F7] to-transparent" />
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex">
              <div className="w-6 md:w-20 lg:w-32 bg-gradient-to-l from-[#FAF9F7] to-transparent" />
              <div className="w-1 md:w-4 lg:w-8 bg-[#FAF9F7]" />
            </div>
            <div className="overflow-x-auto scrollbar-hide">
            <div
              className="flex gap-5 w-max pb-4"
              style={{ paddingLeft: 'max(1.5rem, calc((100vw - 80rem) / 2 + 2rem))', paddingRight: 'max(1.5rem, calc((100vw - 80rem) / 2 + 2rem))' }}
            >
              {TEAM_DATA.map((member) => (
                <div
                  key={member.name}
                  className="flex flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-white shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] p-1 w-[260px] md:w-[280px] shrink-0"
                >
                  <div className="relative aspect-square w-full shrink-0">
                    <Image
                      src={member.image!}
                      alt={member.name}
                      fill
                      className="object-cover object-top rounded-[1.75rem]"
                    />
                  </div>
                  <div className="flex flex-col justify-start gap-2 p-5 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold tracking-tight text-foreground">{member.name}</h4>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-brand">{member.role}</p>
                      </div>
                      {member.link && (
                        <a href={member.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077b5] transition-colors mt-1 shrink-0">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Full width Scope banner */}
          <div className="overflow-hidden rounded-[2rem] border border-border/50 bg-white shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] mx-auto">
            <div className="flex flex-col md:flex-row items-center p-8 md:px-12 gap-8 lg:gap-16">
              <div className="w-full md:w-1/4 lg:w-1/5 flex justify-center md:justify-start shrink-0">
                 {SCOPE_DATA.link ? (
                    <a
                      href={SCOPE_DATA.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center md:items-start gap-3 transition-colors"
                    >
                      {SCOPE_DATA.logo ? (
                        <div className="relative h-10 w-32 opacity-80 transition-opacity group-hover:opacity-100">
                          <Image src={SCOPE_DATA.logo} alt={SCOPE_DATA.name} fill className="object-contain object-center md:object-left" />
                        </div>
                      ) : (
                        <h4 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">{SCOPE_DATA.name}</h4>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-dark">
                        Learn more
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  ) : (
                    <h4 className="text-xl lg:text-2xl font-bold tracking-tight text-foreground">{SCOPE_DATA.name}</h4>
                  )}
              </div>
              <div className="w-full md:w-3/4 lg:w-4/5 flex flex-col gap-2 text-center md:text-left">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {SCOPE_DATA.description}
                  </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
