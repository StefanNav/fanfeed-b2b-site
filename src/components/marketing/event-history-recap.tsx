"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, MapPin, Music, Calendar, Image as ImageIcon, CheckCircle2, Scan } from "lucide-react";
import { cn } from "@/lib/utils";

export function EventHistoryRecap() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 5 states: 0 (idle), 1 (scan), 2 (data), 3 (timeline add), 4 (hold)
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-brand/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-700/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 pointer-events-none" />

      {/* Left: Camera Roll Process */}
      <div className="relative w-full -mt-28 max-w-[300px] h-[350px] md:h-[400px] flex items-center justify-center shrink-0 z-10">
        
        {/* Base Camera Roll Images */}
        <img src="/img/ugc/flume.png" alt="Past event" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 md:w-52 md:h-72 object-cover rounded-2xl rotate-[-12deg] border-[6px] border-white shadow-lg -ml-8 mt-4" />
        <img src="/img/ugc/celtics.png" alt="Past event" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 md:w-52 md:h-72 object-cover rounded-2xl rotate-[-6deg] border-[6px] border-white shadow-xl -ml-4 mt-2" />

        {/* Active Photo */}
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 md:w-52 md:h-72 rounded-2xl border-[6px] border-white shadow-2xl overflow-hidden transition-all duration-700 ease-in-out bg-white",
          step === 0 ? "scale-100 rotate-0 translate-y-0 opacity-100" : "",
          step === 1 ? "scale-105 rotate-2 -translate-y-4 opacity-100 shadow-[0_20px_40px_rgba(0,0,0,0.2)]" : "",
          step === 2 ? "scale-105 rotate-2 -translate-y-4 opacity-100 shadow-[0_20px_40px_rgba(0,0,0,0.2)]" : "",
          step >= 3 ? "scale-50 rotate-12 translate-x-24 opacity-0" : ""
        )}>
          <img src="/img/ugc/odesza.png" alt="Active event" className="absolute inset-0 w-full h-full object-cover" />

          {/* Scan Line */}
          <div className={cn(
            "absolute left-0 right-0 h-1 bg-white shadow-[0_0_20px_4px_rgba(255,255,255,0.8)] z-20 transition-all duration-[1500ms] ease-linear",
            step === 0 ? "top-0 opacity-0" : "",
            step === 1 ? "top-[95%] opacity-100" : "",
            step >= 2 ? "top-[95%] opacity-0 duration-300" : ""
          )} />
          
          {/* Scan Overlay */}
          <div className={cn(
            "absolute inset-0 bg-brand/20 transition-opacity duration-500",
            step === 1 ? "opacity-100" : "opacity-0"
          )} />
          <div className={cn(
            "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
            step === 1 ? "opacity-100" : "opacity-0"
          )}>
            <Scan className="w-16 h-16 text-white animate-pulse" />
          </div>
        </div>

        {/* Extracted Data Pills */}
        <div className={cn(
          "absolute -right-4 md:-right-8 top-12 md:top-16 bg-white rounded-xl px-3 py-2 shadow-xl border border-border/50 flex items-center gap-2 transition-all duration-500 delay-100 z-30",
          step === 2 ? "opacity-100 translate-x-0" : step < 2 ? "opacity-0 -translate-x-4" : "opacity-0 translate-x-8"
        )}>
          <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand" />
          <span className="text-[10px] md:text-xs font-semibold text-foreground">Oct 12, 2023</span>
        </div>

        <div className={cn(
          "absolute -left-4 md:-left-8 bottom-28 md:bottom-32 bg-white rounded-xl px-3 py-2 shadow-xl border border-border/50 flex items-center gap-2 transition-all duration-500 delay-200 z-30",
          step === 2 ? "opacity-100 translate-x-0" : step < 2 ? "opacity-0 translate-x-4" : "opacity-0 -translate-x-8"
        )}>
          <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-500" />
          <span className="text-[10px] md:text-xs font-semibold text-foreground">Red Rocks</span>
        </div>

        <div className={cn(
          "absolute -right-2 md:-right-4 bottom-12 md:bottom-16 bg-white rounded-xl px-3 py-2 shadow-xl border border-border/50 flex items-center gap-2 transition-all duration-500 delay-300 z-30",
          step === 2 ? "opacity-100 translate-x-0" : step < 2 ? "opacity-0 -translate-x-4" : "opacity-0 translate-x-8"
        )}>
          <Music className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-900" />
          <span className="text-[10px] md:text-xs font-semibold text-foreground">Odesza</span>
        </div>
      </div>

      {/* Right: Recap Card */}
      <div className="relative z-20 w-full max-w-[340px] shrink-0 mt-4 lg:mt-0">
        <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-white/80 backdrop-blur-xl shadow-2xl p-5 md:p-6 relative overflow-hidden transition-transform duration-500 hover:-translate-y-1">
          <div className="absolute top-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-brand via-purple-700 to-orange-400" />

          <div className="flex items-center gap-2 mb-4 md:mb-6 mt-1 md:mt-2">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-brand" />
            <h3 className="font-semibold text-foreground text-sm md:text-lg">Your Event Recap</h3>
          </div>

          <div className="mb-4 md:mb-6">
            <p className="text-[9px] md:text-[10px] font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Events Attended</p>
            <div className="flex items-end gap-2">
              <span className="text-4xl md:text-5xl font-black text-foreground tabular-nums tracking-tight leading-none">
                {step >= 3 ? "24" : "23"}
              </span>
              <span className={cn(
                "text-xs md:text-sm font-semibold text-emerald-500 mb-1 transition-all duration-500",
                step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              )}>
                +1
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 md:gap-3 mb-4 md:mb-6">
            <div className="p-2.5 md:p-3 rounded-xl bg-surface border border-border/50">
              <p className="text-[8px] md:text-[9px] text-muted-foreground uppercase font-semibold tracking-wider mb-0.5 md:mb-1">Top Artist</p>
              <p className="text-xs md:text-sm font-semibold text-foreground truncate">Odesza</p>
            </div>
            <div className="p-2.5 md:p-3 rounded-xl bg-surface border border-border/50">
              <p className="text-[8px] md:text-[9px] text-muted-foreground uppercase font-semibold tracking-wider mb-0.5 md:mb-1">Top Venue</p>
              <p className="text-xs md:text-sm font-semibold text-foreground truncate">Red Rocks</p>
            </div>
          </div>

          <div>
            <p className="text-[9px] md:text-[10px] font-semibold text-foreground uppercase tracking-wider mb-3 md:mb-4">Timeline</p>
            <div className="space-y-3 md:space-y-4 relative before:absolute before:inset-y-2 before:left-[11px] md:before:left-[15px] before:w-[2px] before:bg-border/50">
              
              {/* New Event */}
              <div className={cn(
                "relative flex gap-2.5 md:gap-3 transition-all duration-700 ease-in-out overflow-hidden",
                step >= 3 ? "max-h-20 opacity-100 mb-3 md:mb-4" : "max-h-0 opacity-0 mb-0"
              )}>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 border-2 border-white shadow-sm flex-shrink-0 z-10 relative mt-0.5">
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-3.5 md:h-3.5 bg-brand rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-2 h-2 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs md:text-sm font-semibold text-foreground leading-tight">Odesza</p>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5 md:mt-1">Oct 12 • Red Rocks</p>
                </div>
              </div>

              {/* Past Event 1 */}
              <div className="relative flex gap-2.5 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 border-2 border-white shadow-sm flex-shrink-0 z-10 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs md:text-sm font-semibold text-foreground leading-tight">Flume</p>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5 md:mt-1">Sep 04 • The Gorge</p>
                </div>
              </div>

              {/* Past Event 2 */}
              <div className="relative flex gap-2.5 md:gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-purple-700 to-indigo-600 border-2 border-white shadow-sm flex-shrink-0 z-10 mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs md:text-sm font-semibold text-foreground leading-tight">Rufus Du Sol</p>
                  <p className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5 md:mt-1">Aug 12 • MSG</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
