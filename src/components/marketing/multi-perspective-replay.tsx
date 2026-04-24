"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Camera, Play, Users, Clock, ChevronRight, ChevronLeft } from "lucide-react";

const PERSPECTIVES = [
  {
    id: "p1",
    author: "Alex_M",
    angle: "Front Row Right",
    time: "8:45:12 PM",
    color: "from-blue-500/80 to-indigo-600/80",
    gradient: "from-blue-500 to-indigo-600",
    image: "/img/ugc/angle1.png",
  },
  {
    id: "p2",
    author: "SarahDance",
    angle: "Center Pit",
    time: "8:45:14 PM",
    color: "from-purple-700/80 to-pink-500/80",
    gradient: "from-purple-700 to-pink-500",
    image: "/img/ugc/angle2.png",
  },
  {
    id: "p3",
    author: "Mike1992",
    angle: "Section 104",
    time: "8:45:11 PM",
    color: "from-emerald-400/80 to-teal-500/80",
    gradient: "from-emerald-400 to-teal-500",
    image: "/img/ugc/angle3.png",
  },
];

export function MultiPerspectiveReplay() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through perspectives
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PERSPECTIVES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % PERSPECTIVES.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + PERSPECTIVES.length) % PERSPECTIVES.length);
  };

  return (
    <div className="w-full max-w-5xl mx-auto pb-12 px-4 sm:px-6 relative flex flex-col items-center">
      
      {/* Background glow tied to active perspective */}
      <div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full blur-[80px] md:blur-[120px] transition-all duration-1000 opacity-20 pointer-events-none bg-gradient-to-br",
          PERSPECTIVES[activeIndex].gradient
        )} 
      />

      {/* Top Anchor Metadata */}
      <div className="text-center mb-8 md:mb-12 relative z-20">
        <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-surface border border-border/50 shadow-sm mb-3 md:mb-4">
          <Play className="w-3 h-3 md:w-4 md:h-4 text-brand fill-brand" />
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-foreground">Top Moment</span>
        </div>
        <h3 className="text-xl md:text-3xl font-semibold text-foreground mb-2">The Game Winner</h3>
        <div className="flex items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground font-medium">
          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Madison Square Garden</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Q4 0:02</span>
        </div>
      </div>

      {/* Interactive Carousel */}
      <div 
        className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        
        {PERSPECTIVES.map((perspective, index) => {
          // Calculate relative position (-1, 0, 1) to determine styling
          // Handle wrap-around logic so it feels like a continuous loop visually if desired, 
          // but for now simple stack is fine.
          let offset = index - activeIndex;
          if (offset < -1) offset += PERSPECTIVES.length; // roughly handles wrap right
          if (offset > 1) offset -= PERSPECTIVES.length; // roughly handles wrap left
          
          const isActive = index === activeIndex;
          const isLeft = offset === -1;
          const isRight = offset === 1;
          const isHidden = Math.abs(offset) > 1;

          // Compute custom styles for 3D rotation since utility classes can be tricky in v4
          let transformStyle = {};
          if (isActive) transformStyle = { transform: "translateX(0) scale(1) rotateY(0deg)" };
          else if (isLeft) transformStyle = { transform: "translateX(-60%) scale(0.85) rotateY(15deg)" };
          else if (isRight) transformStyle = { transform: "translateX(60%) scale(0.85) rotateY(-15deg)" };
          else transformStyle = { transform: "translateX(0) scale(0.75) rotateY(0deg)" };

          return (
            <div
              key={perspective.id}
              className={cn(
                "absolute top-0 w-[240px] md:w-[320px] h-[360px] md:h-[480px] rounded-2xl md:rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] cursor-pointer shadow-2xl",
                isActive ? "z-30 opacity-100" : "",
                isLeft ? "z-20 opacity-50 hover:opacity-80" : "",
                isRight ? "z-20 opacity-50 hover:opacity-80" : "",
                isHidden ? "z-10 opacity-0 pointer-events-none" : ""
              )}
              style={transformStyle}
              onClick={() => {
                setIsAutoPlaying(false);
                setActiveIndex(index);
              }}
            >
              {/* Media Mock Background */}
              {perspective.image ? (
                <img src={perspective.image} alt={perspective.angle} className="absolute inset-0 w-full h-full object-cover" />
              ) : (
                <div className={cn("absolute inset-0 bg-gradient-to-br", perspective.color)} />
              )}
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />

              {/* Top Right Recording Indicator */}
              {isActive && (
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2 py-1 rounded-md bg-red-500/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  REC
                </div>
              )}

              {/* Content Overlay */}
              <div className={cn(
                "absolute inset-x-0 bottom-0 p-5 md:p-6 transition-all duration-500",
                isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <Camera className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs md:text-sm font-semibold leading-tight">@{perspective.author}</p>
                    <p className="text-white/70 text-[9px] md:text-[10px] uppercase tracking-widest">{perspective.angle}</p>
                  </div>
                </div>
                
                {/* Sync Timeline Bar */}
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-4">
                  <div className="h-full bg-white w-1/3 rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  </div>
                </div>
                <p className="text-white/60 text-[8px] md:text-[9px] mt-1.5 font-mono">{perspective.time}</p>
              </div>
            </div>
          );
        })}

      </div>

      {/* Bottom Controls */}
      <div className="mt-8 flex items-center justify-between w-full max-w-[280px] md:max-w-[360px] relative z-20">
        <button 
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border/50 bg-white/50 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
        </button>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border/50 text-xs md:text-sm font-semibold text-foreground shadow-sm">
          <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
          {PERSPECTIVES.length} Perspectives
        </div>

        <button 
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border/50 bg-white/50 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-sm"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-foreground" />
        </button>
      </div>

    </div>
  );
}
