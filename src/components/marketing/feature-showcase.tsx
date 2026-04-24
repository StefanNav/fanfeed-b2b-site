"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SegmentBuilder } from "./segment-builder";
import { ActionEngine } from "./action-engine";
import { AudienceMap } from "./audience-map";
import { CommandCenter } from "./command-center";
import { UgcCenter } from "./ugc-center";
import { cn } from "@/lib/utils";
import { RetroGrid } from "@/components/ui/retro-grid";
import { SectionHeader } from "../ui/section";

const FEATURES = [
  {
    id: "ugc",
    label: "UGC Center",
    mobileLabel: "UGC",
    title: "An easy and reliable way to get UGC",
    description:
      "Users opt in to share on the public feed. You get surfaced all the media you can pick from, with permission already granted.",
    component: UgcCenter,
  },
  {
    id: "segments",
    label: "Segmentation",
    mobileLabel: "Segments",
    title: "Turn complex data into actionable audiences",
    description:
      "Combine behavioral, transactional, and identity signals to build high-converting segments in seconds.",
    component: SegmentBuilder,
  },
  // {
  //   id: "actions",
  //   label: "Action Engine",
  //   title: "Activate fans with precision at scale",
  //   description:
  //     "Connect your segments directly to marketing tools, ad platforms, and workflows to trigger targeted campaigns instantly.",
  //   component: ActionEngine,
  // },
  {
    id: "map",
    label: "Audience Map",
    mobileLabel: "Map",
    title: "See the big picture, activate the details",
    description:
      "Instantly identify clusters of high-value fans and spot emerging trends across your entire database before they happen.",
    component: AudienceMap,
  },
  {
    id: "command",
    label: "Command Center",
    mobileLabel: "Command",
    title: "Your fan intelligence command center",
    description:
      "Stop stitching together spreadsheets. Get a unified view of your entire audience, from macro trends down to individual fan behavior.",
    component: CommandCenter,
  },
];

const CYCLE_DURATION = 4000;

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(FEATURES[0].id);
  const [autoCycling, setAutoCycling] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number | null>(null);

  const activeIndex = FEATURES.findIndex((f) => f.id === activeFeature);

  const advanceToNext = useCallback(() => {
    setActiveFeature((prev) => {
      const idx = FEATURES.findIndex((f) => f.id === prev);
      return FEATURES[(idx + 1) % FEATURES.length].id;
    });
    setProgress(0);
    startRef.current = Date.now();
  }, []);

  // Start auto-cycling when section enters viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAutoCycling(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle effect
  useEffect(() => {
    if (!autoCycling) return;
    
    if (startRef.current === null) {
      startRef.current = Date.now();
    }

    // Progress ticker (~60fps)
    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - (startRef.current ?? Date.now());
      setProgress(Math.min(elapsed / CYCLE_DURATION, 1));
    }, 16);

    // Advance timer
    timerRef.current = setInterval(() => {
      advanceToNext();
    }, CYCLE_DURATION);

    return () => {
      clearInterval(progressTimer);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [autoCycling, advanceToNext]);

  const handleManualSelect = (featureId: string) => {
    setAutoCycling(false);
    setActiveFeature(featureId);
    setProgress(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const active = FEATURES.find((f) => f.id === activeFeature) || FEATURES[0];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 bg-gradient-to-b from-transparent to-peach/30">
      {/* Orbs — hidden on mobile for GPU perf */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden md:block">
        <img
          src="/img/bg.jpg"
          alt=""
          className="absolute left-1/2 top-3/4 -translate-x-1/2 -translate-y-1/2 h-auto max-w-none opacity-60"
          aria-hidden="true"
        />
      </div>
      <RetroGrid className="z-0 opacity-50" />
      <div className="mx-auto max-w-7xl mr-auto px-6 lg:px-8 relative z-10">
        {/* Title row with pagination dots */}
        <SectionHeader
          title={
            <AnimatePresence mode="wait">
              <motion.span
                key={active.id}
                className="block"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {active.title}
              </motion.span>
            </AnimatePresence>
          }
          description={
            <AnimatePresence mode="wait">
              <motion.span
                key={active.id}
                className="block"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {active.description}
              </motion.span>
            </AnimatePresence>
          }
          align="row"
        >
          <div className="flex items-center gap-2">
            {FEATURES.map((feature, i) => (
              <button
                key={feature.id}
                onClick={() => handleManualSelect(feature.id)}
                className="relative h-2.5 w-2.5 rounded-full bg-foreground/15 overflow-hidden"
                aria-label={`Go to ${feature.label}`}
              >
                <span
                  className="absolute inset-0 rounded-full bg-foreground/60 origin-left"
                  style={{
                    transform: `scaleX(${
                      i < activeIndex
                        ? 1
                        : i === activeIndex
                        ? autoCycling
                          ? progress
                          : 1
                        : 0
                    })`,
                    transition: i === activeIndex && autoCycling
                      ? "none"
                      : "transform 0.3s ease",
                  }}
                />
              </button>
            ))}
          </div>
        </SectionHeader>

        {/* Toggle Buttons */}
        <div className="flex flex-wrap mt-4 md:mt-6 justify-center p-1 md:p-1.5 mb-8 md:mb-16 max-w-fit mr-auto bg-white rounded-full border border-border/60">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              onClick={() => handleManualSelect(feature.id)}
              className={cn(
                "px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 outline-none",
                activeFeature === feature.id
                  ? "bg-[#413149] text-white shadow-md"
                  : "text-muted hover:text-foreground hover:bg-black/5"
              )}
            >
              <span className="md:hidden">{feature.mobileLabel}</span>
              <span className="hidden md:inline">{feature.label}</span>
            </button>
          ))}
        </div>
        {/* Feature Component Container — only active tab rendered */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {(() => {
              const Comp = active.component;
              return (
                <motion.div
                  key={active.id}
                  aria-hidden="true"
                  role="img"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  <Comp />
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
