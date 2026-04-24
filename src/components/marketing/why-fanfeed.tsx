"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { useIsMobile } from "@/lib/use-mobile";
import {
  IconBoxFillDuo18,
  IconSignalFillDuo18,
  IconBoltLightningFillDuo18,
  IconLayersFillDuo18,
  IconArrowRightFillDuo18,
  IconTargetFillDuo18,
  IconFilter2FillDuo18,
} from "nucleo-ui-fill-duo-18";

// --- Data ---

const FEATURES = [
  {
    icon: IconLayersFillDuo18,
    title: "Platform-first",
    description:
      "Our platform helps you own your data and build directly on top of it",
    delay: 0.1,
  },
  {
    icon: IconFilter2FillDuo18,
    title: "Signal advantage",
    description:
      "Our consumer app provides actute behavioral intent and fan signals",
    delay: 0.2,
  },
  {
    icon: IconBoltLightningFillDuo18,
    title: "Execution advantage",
    description:
      "We have the skill and experience to ship solutions that drive ROI fast",
    delay: 0.3,
  },
];

// --- Sub-components ---

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}) {
  const isMobile = useIsMobile();
  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={isMobile ? undefined : { once: true }}
      transition={isMobile ? undefined : { duration: 0.5, delay }}
      {...(isMobile ? { animate: { opacity: 1, y: 0 } } : {})}
      className="group relative flex flex-col rounded-[1.5rem] border border-border/50 bg-white p-8 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_8px_32px_0_rgba(124,92,252,0.16)]"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/5 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
        <Icon size={28} />
      </div>
      <h3 className="mb-3 text-xl font-bold leading-tight tracking-tight text-foreground">
        {title}
      </h3>
      <p className="text-[17px] leading-relaxed text-muted">
        {description}
      </p>
    </motion.div>
  );
}

// --- Main Component ---

export function WhyFanFeed() {
  return (
    <Section background="lavender">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header row: headline left, description right */}
        <SectionHeader
          align="row"
          animate
          eyebrow="The FanFeed Difference"
          eyebrowIcon={<IconTargetFillDuo18 className="h-4 w-4" />}
          title="Why FanFeed is positioned differently"
          description="Most platforms give you a static record. We help you build a richer, more valuable view of your audience over time."
          className="mb-16"
        />


        {/* Feature cards grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
