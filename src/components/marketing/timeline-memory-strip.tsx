"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Calendar, Star, Trophy, Flame, Music } from "lucide-react";

// Mock data for the timeline
const TIMELINE_EVENTS = [
  {
    id: "e1",
    date: "Aug 2018",
    title: "First Game",
    subtitle: "Yankees vs Red Sox",
    venue: "Yankee Stadium",
    type: "sports",
    milestone: "first game",
    icon: Star,
    color: "from-blue-500 to-indigo-600",
    image: "/img/ugc/ugc1.png",
  },
  {
    id: "e2",
    date: "Sep 2019",
    title: "Flume",
    subtitle: "Palaces Tour",
    venue: "The Gorge",
    type: "music",
    icon: Music,
    color: "from-purple-700 to-pink-500",
    image: "/img/ugc/flume.png",
  },
  {
    id: "e3",
    date: "Oct 2021",
    title: "Playoff Run",
    subtitle: "Game 6",
    venue: "TD Garden",
    type: "sports",
    milestone: "playoff run",
    icon: Trophy,
    color: "from-orange-400 to-red-500",
    image: "/img/ugc/celtics.png",
  },
  {
    id: "e4",
    date: "Jul 2022",
    title: "Odesza",
    subtitle: "The Last Goodbye",
    venue: "Red Rocks",
    type: "music",
    icon: Music,
    color: "from-teal-400 to-emerald-500",
    image: "/img/ugc/odesza.png",
  },
  {
    id: "e5",
    date: "May 2023",
    title: "10th Concert",
    subtitle: "Taylor Swift",
    venue: "MetLife Stadium",
    type: "music",
    milestone: "10th concert",
    icon: Star,
    color: "from-fuchsia-500 to-purple-600",
    image: "/img/ugc/ugc2.png",
  },
  {
    id: "e6",
    date: "Aug 2023",
    title: "Summer Festival",
    subtitle: "Lollapalooza",
    venue: "Grant Park",
    type: "music",
    icon: Music,
    color: "from-yellow-400 to-orange-500",
    image: "/img/ugc/ugc3.png",
  },
  {
    id: "e7",
    date: "Nov 2023",
    title: "Busiest Year",
    subtitle: "14 Events Attended",
    venue: "Multiple Venues",
    type: "mixed",
    milestone: "busiest year",
    icon: Flame,
    color: "from-amber-400 to-orange-500",
    image: "/img/ugc/ugc4.png",
  },
];

export function TimelineMemoryStrip() {
  const [activeIndex, setActiveIndex] = useState(3); // Start with an active item in the middle
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Center the active item on mount
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const itemWidth = 280; // Approximate width of an item including gap
      const targetScroll = (activeIndex * itemWidth) - (container.clientWidth / 2) + (itemWidth / 2);
      container.scrollLeft = targetScroll > 0 ? targetScroll : 0;
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="w-full pb-12 relative overflow-hidden group">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-700/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      {/* Main Timeline Line */}
      <div className="absolute top-[60%] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-border/50 to-transparent pointer-events-none" />

      <div 
        ref={containerRef}
        className={cn(
          "w-full flex items-center gap-6 md:gap-12 px-[10vw] md:px-[30vw] overflow-x-auto snap-x snap-mandatory hide-scrollbar transition-all duration-300",
          isDragging ? "cursor-grabbing snap-none" : "cursor-grab"
        )}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
      >
        {TIMELINE_EVENTS.map((event, index) => {
          const isActive = index === activeIndex;
          const MilestoneIcon = event.icon;

          return (
            <div 
              key={event.id}
              className={cn(
                "relative snap-center shrink-0 flex flex-col items-center transition-all duration-500 ease-out py-8",
                isActive ? "scale-100 opacity-100 z-20" : "scale-90 opacity-40 hover:opacity-70 z-10"
              )}
              onClick={() => setActiveIndex(index)}
            >
              {/* Top Metadata (Fades in when active) */}
              <div className={cn(
                "absolute -top-4 w-full text-center transition-all duration-500",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}>
                {event.milestone && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-semibold uppercase tracking-wider mb-3">
                    <MilestoneIcon className="w-3 h-3" />
                    {event.milestone}
                  </span>
                )}
              </div>

              {/* Event Card / Thumbnail */}
              <div className={cn(
                "relative rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-500 shadow-xl",
                isActive ? "w-48 h-64 md:w-64 md:h-80 border border-white/40 ring-4 ring-brand/20" : "w-32 h-48 md:w-40 md:h-56 border border-border/50"
              )}>
                {/* Simulated Image Background */}
                {event.image ? (
                  <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                ) : (
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-80",
                    event.color
                  )} />
                )}
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Date Tag */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4 px-2 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] md:text-xs font-medium">
                  {event.date}
                </div>

                {/* Bottom Info */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all duration-500",
                  isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-80"
                )}>
                  <h3 className="text-white font-semibold text-lg md:text-2xl leading-tight mb-1">
                    {event.title}
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm font-medium mb-3">
                    {event.subtitle}
                  </p>
                  
                  {isActive && (
                    <div className="flex items-center gap-2 text-white/60 text-[10px] md:text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{event.venue}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Timeline Node */}
              <div className="mt-8 relative flex items-center justify-center">
                <div className={cn(
                  "absolute w-[2px] bg-border/50 -top-8 transition-all duration-500",
                  isActive ? "h-4" : "h-6"
                )} />
                <div className={cn(
                  "relative rounded-full border-2 transition-all duration-500",
                  isActive ? "w-5 h-5 md:w-6 md:h-6 bg-brand border-white shadow-[0_0_15px_rgba(var(--brand-rgb),0.5)] z-10" : "w-3 h-3 bg-surface border-border"
                )} />
              </div>

            </div>
          );
        })}
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 bottom-0 left-0 w-[15vw] bg-gradient-to-r from-background to-transparent pointer-events-none z-30" />
      <div className="absolute top-0 bottom-0 right-0 w-[15vw] bg-gradient-to-l from-background to-transparent pointer-events-none z-30" />

      {/* Global subtle stats */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-8 text-[10px] md:text-xs font-semibold text-muted-foreground uppercase tracking-widest opacity-60">
        <span>6 Years</span>
        <span className="w-1 h-1 rounded-full bg-border" />
        <span>42 Events</span>
        <span className="w-1 h-1 rounded-full bg-border" />
        <span>18 Venues</span>
      </div>
      
    </div>
  );
}

// Add some CSS to the global stylesheet or use inline styles for hiding the scrollbar
// Since we can't easily edit global CSS from here without reading it, we'll use a style tag
export function TimelineMemoryStripStyles() {
  return (
    <style dangerouslySetInnerHTML={{__html: `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}} />
  );
}
