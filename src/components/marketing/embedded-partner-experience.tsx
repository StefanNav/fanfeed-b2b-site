"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, Menu, Bell, LayoutGrid, MapPin, Ticket, Flame } from "lucide-react";

export function EmbeddedPartnerExperience() {
  const [isPartner, setIsPartner] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsPartner((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 relative">
      
      {/* Description Side */}
      <div className="flex-1 max-w-sm text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-border/50 shadow-sm mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand" />
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-foreground">Powered by FanFeed</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Anywhere your fans are
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          Embed FanFeed's memory layer directly into your existing team, venue, or festival app. Keep your brand front and center while unlocking deep fan intelligence.
        </p>
      </div>

      {/* Visual Side */}
      <div className="relative shrink-0">
        
        {/* Background Ambient Glow */}
        <div className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[80px] transition-colors duration-1000",
          isPartner ? "bg-red-500/20" : "bg-brand/20"
        )} />

        {/* Mobile App Shell */}
        <div className="relative w-[280px] md:w-[320px] h-[520px] md:h-[580px] bg-background border-[6px] md:border-8 border-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden transition-all duration-700">
          
          {/* Header */}
          <div className={cn(
            "pt-12 pb-4 px-5 flex items-center justify-between transition-colors duration-700 relative z-10",
            isPartner ? "bg-[#B91C1C] text-white" : "bg-white text-foreground border-b border-border/50"
          )}>
            <Menu className="w-5 h-5 opacity-80" />
            <div className="font-semibold text-sm tracking-wide">
              {isPartner ? "THE STADIUM APP" : "FANFEED"}
            </div>
            <Bell className="w-5 h-5 opacity-80" />
          </div>

          {/* App Body Content */}
          <div className="p-4 flex flex-col gap-4 relative">
            
            {/* Native App Elements (Faded) */}
            <div className={cn(
              "w-full h-24 rounded-2xl flex items-center p-4 transition-colors duration-700",
              isPartner ? "bg-red-50/50 border border-red-100" : "bg-surface border border-border/50"
            )}>
              <div className="flex-1">
                <div className={cn("w-20 h-3 rounded-full mb-2", isPartner ? "bg-red-200" : "bg-border")} />
                <div className={cn("w-32 h-2 rounded-full", isPartner ? "bg-red-100" : "bg-border/50")} />
              </div>
              <Ticket className={cn("w-6 h-6 opacity-30", isPartner ? "text-red-500" : "text-muted-foreground")} />
            </div>

            {/* Embedded FanFeed Widget */}
            <div className="relative bg-white border border-border/50 rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand via-purple-700 to-orange-400" />
              
              <div className="flex items-center justify-between mb-4 mt-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                  <LayoutGrid className="w-3.5 h-3.5 text-brand" />
                  Your Fan Profile
                </div>
                <span className="text-[9px] font-semibold text-muted-foreground uppercase tracking-widest">Powered</span>
              </div>

              {/* Widget Content */}
              <div className="flex gap-3 mb-4">
                <div className="w-16 h-20 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-600 shadow-sm shrink-0" />
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] text-brand font-semibold uppercase tracking-wider mb-0.5 flex items-center gap-1">
                    <Flame className="w-3 h-3" /> Top Artist
                  </span>
                  <span className="text-sm font-semibold text-foreground leading-tight">Odesza</span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> 4 Events
                  </span>
                </div>
              </div>

              <div className="w-full h-8 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-[10px] font-semibold text-foreground hover:bg-border/50 cursor-pointer transition-colors">
                View Full Memory Board
              </div>
            </div>

            {/* Native App Elements (Faded) */}
            <div className={cn(
              "w-full h-16 rounded-2xl transition-colors duration-700 mt-2",
              isPartner ? "bg-red-50/50 border border-red-100" : "bg-surface border border-border/50"
            )} />

          </div>

          {/* Bottom Nav */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-white border-t border-border/50 flex items-center justify-around px-6">
            <div className="w-6 h-6 rounded bg-muted/20" />
            <div className={cn(
              "w-6 h-6 rounded transition-colors duration-700",
              isPartner ? "bg-red-500" : "bg-brand"
            )} />
            <div className="w-6 h-6 rounded bg-muted/20" />
            <div className="w-6 h-6 rounded bg-muted/20" />
          </div>

        </div>

      </div>

    </div>
  );
}
