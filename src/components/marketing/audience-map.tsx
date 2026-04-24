"use client";

import React, { useEffect, useState } from "react";
import { 
  IconUsersFillDuo18, 
  IconFilterFillDuo18, 
  IconTargetFillDuo18, 
  IconChartTrendUpFillDuo18, 
  IconBagShoppingFillDuo18, 
  IconCalendarFillDuo18,
  IconCheckFillDuo18,
  IconSearchContentFillDuo18,
  IconSparkleFillDuo18,
  IconArrowUpRightFillDuo18,
  IconVideoFillDuo18
} from "nucleo-ui-fill-duo-18";

// Deterministic PRNG for stable hydration and rendering
const prng = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const generateNodes = (count: number, cx: number, cy: number, radius: number, fillClass: string, seed: number) => {
  return Array.from({ length: count }).map((_, i) => {
    const r1 = prng(seed + i * 1.23);
    const r2 = prng(seed + i * 2.34);
    const r3 = prng(seed + i * 3.45);
    
    // Gaussian-like distribution to cluster in the center
    const distance = r2 * r2 * radius; 
    const angle = r1 * Math.PI * 2;
    
    const x = cx + Math.cos(angle) * distance;
    const y = cy + Math.sin(angle) * distance;
    
    // Slight opacity variation
    const opacity = 0.2 + r3 * 0.8;
    // Size variation
    const size = 1.5 + (r1 * 3);
    
    return (
      <circle 
        key={i} 
        cx={x} 
        cy={y} 
        r={size} 
        className={fillClass} 
        style={{ opacity }} 
      />
    );
  });
};

export function AudienceMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return an empty skeleton with the same layout for hydration matching
    return (
      <div className="w-full max-w-6xl mx-auto h-[380px] md:h-[600px] rounded-[1.5rem] md:rounded-[2.5rem] border border-border/50 bg-white/40 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] relative overflow-hidden" />
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto h-[380px] md:h-[600px] rounded-[1.5rem] md:rounded-[2.5rem] border border-border/50 bg-white md:bg-white/60 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] relative overflow-hidden group">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-surface to-[#f8fbff]" />
      <div className="absolute top-1/2 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand/5 rounded-full blur-[60px] md:blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/5 rounded-full blur-[60px] md:blur-[100px] -translate-x-1/4 translate-y-1/4" />
      <div className="absolute top-0 left-1/4 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-purple-700/5 rounded-full blur-[50px] md:blur-[100px] -translate-y-1/4" />

      {/* SVG Canvas for Nodes */}
      <svg className="absolute inset-0 w-full h-full scale-[1.1] md:scale-100 origin-center" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
        
        {/* Connection line from Selected Cluster to Metadata Panel */}
        <path 
          d="M 650 300 C 750 300, 750 300, 800 300" 
          fill="none" 
          stroke="currentColor" 
          className="text-brand/30 hidden md:block" 
          strokeWidth="1.5" 
          strokeDasharray="4 4" 
        />
        <circle cx="650" cy="300" r="4" className="fill-brand" />

        {/* Selected Cluster Highlight Ring */}
        <circle 
          cx="650" 
          cy="300" 
          r="140" 
          fill="none" 
          stroke="currentColor" 
          className="text-brand/40" 
          strokeWidth="1" 
          strokeDasharray="6 6" 
        />
        <circle 
          cx="650" 
          cy="300" 
          r="140" 
          className="fill-brand/[0.02]" 
        />

        {/* Cluster 1: Casual Attendees (Muted/Background) */}
        <g className="transition-opacity duration-700 opacity-60">
          {generateNodes(150, 380, 180, 140, "fill-slate-400", 100)}
        </g>

        {/* Cluster 2: Local Loyalists (Blue) */}
        <g className="transition-opacity duration-700 opacity-90">
          {generateNodes(220, 280, 380, 120, "fill-blue-400", 200)}
        </g>

        {/* Cluster 3: Emerging Segment (Purple) - connected to filter */}
        <g className="transition-opacity duration-700">
          {/* Subtle pulse ring behind emerging segment */}
          <circle cx="200" cy="350" r="90" className="fill-purple-700/[0.03] animate-pulse" />
          {generateNodes(120, 200, 350, 80, "fill-purple-700", 300)}
        </g>

        {/* Cluster 4: High-Value Target (Main / Selected) */}
        <g className="transition-opacity duration-700">
          {generateNodes(400, 650, 300, 130, "fill-brand", 400)}
        </g>

        {/* Sub-cluster: The extreme high end of the selected cluster (Amber) */}
        <g className="transition-opacity duration-700">
          {generateNodes(50, 680, 280, 40, "fill-amber-400", 500)}
        </g>

      </svg>

      {/* ----------------- UI OVERLAYS ----------------- */}

      {/* Floating Filter Panel (Top Left) */}
      <div className="absolute top-2 left-2 md:top-8 md:left-8 w-[160px] md:w-64 rounded-lg md:rounded-2xl border border-purple-700/20 bg-white md:bg-white/80 md:backdrop-blur-xl shadow-lg p-1.5 md:p-4 z-20">
        <div className="flex items-center justify-between mb-1 md:mb-3">
          <div className="flex items-center gap-1 md:gap-2 text-purple-900">
            <IconFilterFillDuo18 className="w-2 h-2 md:w-4 md:h-4" />
            <span className="text-[7px] md:text-xs font-semibold uppercase tracking-wider">Active Filters</span>
          </div>
          <span className="flex h-1 w-1 md:h-2 md:w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1 w-1 md:h-2 md:w-2 bg-purple-700"></span>
          </span>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <div className="flex items-center justify-between bg-surface rounded md:rounded-lg px-1.5 py-0.5 md:px-3 md:py-2 border border-border/50 text-[7px] md:text-xs font-medium">
            <span className="text-muted-foreground">Recent Event</span>
            <span className="text-foreground">Past 30 Days</span>
          </div>
          <div className="flex items-center justify-between bg-surface rounded md:rounded-lg px-1.5 py-0.5 md:px-3 md:py-2 border border-border/50 text-[7px] md:text-xs font-medium">
            <span className="text-muted-foreground">Behavior</span>
            <span className="text-foreground">App Opened</span>
          </div>
        </div>
        <div className="mt-1 md:mt-3 pt-1 md:pt-3 border-t border-border/50 flex items-center gap-1 md:gap-2">
          <IconSparkleFillDuo18 className="w-2 h-2 md:w-3.5 md:h-3.5 text-purple-900" />
          <span className="text-[6px] md:text-[11px] font-medium text-purple-900 leading-tight">Emerging segment</span>
        </div>
      </div>

      {/* Floating Labels (Positioned absolute over clusters) */}
      <div className="absolute top-[40%] left-[65%] md:top-[25%] md:left-[38%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 hidden sm:block">
        <span className="px-2 py-0.5 md:px-3 md:py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white text-[7px] md:text-[10px] font-semibold uppercase tracking-widest text-muted-foreground shadow-sm">
          Casual Attendees
        </span>
      </div>
      
      <div className="absolute top-[60%] left-[25%] md:bottom-[25%] md:top-auto md:left-[32%] -translate-x-1/2 translate-y-1/2 pointer-events-none z-10 hidden sm:block">
        <span className="px-2 py-0.5 md:px-3 md:py-1.5 rounded-full bg-blue-50/80 backdrop-blur-md border border-blue-100 text-[7px] md:text-[10px] font-semibold uppercase tracking-widest text-blue-600 shadow-sm">
          Local Loyalists
        </span>
      </div>

      {/* Main Metadata Panel (Right Side) */}
      <div className="absolute bottom-2 left-2 right-2 md:auto md:top-1/2 md:right-8 md:bottom-auto md:left-auto md:-translate-y-1/2 md:w-80 rounded-lg md:rounded-3xl border border-brand/20 bg-white md:bg-white/90 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] p-2 md:p-6 z-20">
        <div className="inline-flex items-center gap-1 bg-brand/10 text-brand px-1.5 py-0.5 md:px-2.5 md:py-1 rounded-full text-[6px] md:text-[10px] font-semibold uppercase tracking-wider mb-1 md:mb-4">
          <IconTargetFillDuo18 className="w-1.5 h-1.5 md:w-3.5 md:h-3.5" />
          Selected Segment
        </div>
        
        <h3 className="text-[10px] md:text-xl font-semibold text-foreground mb-0.5 md:mb-1 leading-tight">Premium Candidates</h3>
        <div className="flex items-end gap-1 md:gap-2 mb-1.5 md:mb-6">
          <IconUsersFillDuo18 className="w-2.5 h-2.5 md:w-5 md:h-5 text-muted-foreground mb-0.5 md:mb-1" />
          <span className="text-sm md:text-3xl font-semibold text-foreground leading-none">440</span>
          <span className="text-[7px] md:text-sm font-medium text-muted-foreground mb-0.5 md:mb-1">fans</span>
        </div>

        <div className="space-y-1 md:space-y-3 relative before:absolute before:inset-y-1 before:left-[4.5px] md:before:left-[11px] before:w-px before:bg-border/60">
          
          <div className="flex items-start gap-1.5 md:gap-4 relative">
            <div className="w-2.5 h-2.5 md:w-6 md:h-6 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-white shadow-sm relative z-10 mt-0.5 md:mt-0">
              <IconVideoFillDuo18 className="w-1.5 h-1.5 md:w-3 md:h-3" />
            </div>
            <div>
              <p className="text-[8px] md:text-sm font-semibold text-foreground leading-none">Top content generators</p>
              <p className="text-[6px] md:text-xs text-muted-foreground mt-0.5">Top 15% of all fans</p>
            </div>
          </div>

          <div className="flex items-start gap-1.5 md:gap-4 relative">
            <div className="w-2.5 h-2.5 md:w-6 md:h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-white shadow-sm relative z-10 mt-0.5 md:mt-0">
              <IconCalendarFillDuo18 className="w-1.5 h-1.5 md:w-3 md:h-3" />
            </div>
            <div>
              <p className="text-[8px] md:text-sm font-semibold text-foreground leading-none">High event frequency</p>
              <p className="text-[6px] md:text-xs text-muted-foreground mt-0.5">Attended 4+ this year</p>
            </div>
          </div>

          <div className="flex items-start gap-1.5 md:gap-4 relative">
            <div className="w-2.5 h-2.5 md:w-6 md:h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-white shadow-sm relative z-10 mt-0.5 md:mt-0">
              <IconChartTrendUpFillDuo18 className="w-1.5 h-1.5 md:w-3 md:h-3" />
            </div>
            <div>
              <p className="text-[8px] md:text-sm font-semibold text-foreground leading-none">Strong upgrade potential</p>
              <p className="text-[6px] md:text-xs text-muted-foreground mt-0.5">Scoring highly on intent</p>
            </div>
          </div>

        </div>

        <button className="mt-1.5 md:mt-8 w-full py-1 md:py-3 px-2 md:px-4 bg-foreground text-white rounded md:rounded-xl text-[8px] md:text-sm font-semibold flex items-center justify-center gap-1 md:gap-2 hover:bg-foreground/90 transition-colors shadow-sm">
          Activate Segment
          <IconArrowUpRightFillDuo18 className="w-2 h-2 md:w-4 md:h-4" />
        </button>
      </div>

    </div>
  );
}
