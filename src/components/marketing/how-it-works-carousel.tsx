"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section";
import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/use-mobile";

const STEPS = [
  {
    id: 1,
    title: "Fans download the app",
    description: "Sync once, and FanFeed reads 10+ years of content in seconds.",
    image: "/img/home/carousel-1.png",
    textColor: "text-[#2A1E31]", // Dark purple from the first card's text
    position: "bottom",
  },
  {
    id: 2,
    title: "See all of their events",
    description: "Every photo and video, all in one place. Instantly.",
    image: "/img/home/carousel-2.png",
    textColor: "text-white",
    position: "top",
  },
  {
    id: 3,
    title: "Share with friends",
    description: "Invite friends, create shared albums, and compare your fandom.",
    image: "/img/home/carousel-3.png",
    textColor: "text-[#2A1E31]", 
    position: "bottom",
  },
  {
    id: 4,
    title: "And the world",
    description: "Post to public feeds, relive moments, and discover community.",
    image: "/img/home/carousel-4.png",
    textColor: "text-white",
    position: "top",
  },
  {
    id: 5,
    title: "Support artists and share UGC",
    description: "We make fan content fun and make buy in easy.",
    image: "/img/home/carousel-5.png",
    textColor: "text-[#2A1E31]",
    position: "bottom",
  },
];

export function HowItWorksCarousel() {
  const isMobile = useIsMobile();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 to account for rounding errors
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    
    // Get the width of one card plus gap
    const container = scrollContainerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 24; // 1.5rem = 24px (gap-6)
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <motion.div 
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={isMobile ? undefined : { once: true, margin: "-100px" }}
      transition={isMobile ? undefined : { duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      {...(isMobile ? { animate: { opacity: 1, y: 0 } } : {})}
      className="relative w-full overflow-hidden py-8 md:py-12 flex flex-col"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 mb-6 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={isMobile ? undefined : { once: true, margin: "-100px" }}
          transition={isMobile ? undefined : { duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          {...(isMobile ? { animate: { opacity: 1, y: 0 } } : {})}
        >
          <SectionHeader
            title={<span className="text-foreground">How it works</span>}
            align="left"
            className="max-w-xl m-0"
            description={
              "FanFeed unifies and enriches fan data, turning fragmented signals into a complete fan identity."
            }
          />
        </motion.div>
      </div>

      {/* Scrollable Container */}
      <div 
        className="relative w-full"
        style={{
          "--carousel-padding-mobile": "1.5rem",
          "--carousel-padding-desktop": "calc(max(2rem, (100vw - 80rem) / 2 + 2rem))"
        } as React.CSSProperties}
      >
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={cn(
            "flex w-full gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory scrollbar-hide",
            "px-[var(--carousel-padding-mobile)] lg:px-[var(--carousel-padding-desktop)]",
            isDragging ? "cursor-grabbing snap-none" : "cursor-grab"
          )}
          style={{
            // Hide scrollbar but keep functionality
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              whileInView={isMobile ? undefined : { opacity: 1 }}
              viewport={isMobile ? undefined : { once: true, margin: "-50px" }}
              transition={isMobile ? undefined : { duration: 1.0, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              {...(isMobile ? { animate: { opacity: 1 } } : {})}
              className={cn(
                "group shrink-0 rounded-2xl md:rounded-[2rem] flex flex-col p-5 md:p-8 bg-cover bg-center bg-no-repeat relative overflow-hidden transition-transform h-[380px] md:h-[520px] snap-start",
                // Mobile: almost full width, Tablet/Desktop: half of container width minus half gap
                "w-[75vw] md:w-[calc(50vw-1.5rem)] lg:w-[calc(40rem-0.75rem)]"
              )}
              style={{
                backgroundImage: `url('${step.image}')`,
              }}
            >
              <div 
                className={cn(
                  "flex flex-col relative z-10 w-[90%] sm:w-[80%]",
                  step.position === "bottom" ? "mt-auto" : "mt-0"
                )}
              >
                <h3 className={cn("text-base md:text-[22px] font-semibold tracking-tight", step.textColor)}>
                  {step.title}
                </h3>
                <p className={cn("mt-1 text-sm md:text-[17px] leading-relaxed md:leading-[1.6]", step.textColor, "opacity-90")}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons Below Carousel */}
      <motion.div 
        initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
        viewport={isMobile ? undefined : { once: true, margin: "-50px" }}
        transition={isMobile ? undefined : { duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        {...(isMobile ? { animate: { opacity: 1, y: 0 } } : {})}
        className="mx-auto w-full max-w-7xl px-6 lg:px-8 mt-2 md:mt-4 flex justify-end items-center gap-2 md:gap-3"
      >
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={cn(
            "flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-surface transition-all",
            !canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:bg-border active:scale-95"
          )}
          aria-label="Previous step"
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
        </button>
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={cn(
            "flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-surface transition-all",
            !canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:bg-border active:scale-95"
          )}
          aria-label="Next step"
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
        </button>
      </motion.div>

    </motion.div>
  );
}
