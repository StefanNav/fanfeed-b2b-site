"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Smartphone, Monitor, Mail, MessageSquare, Ticket, User,
  Globe, Database, BarChart3, LayoutTemplate, Layers
} from "lucide-react";

const SURFACES = [
  {
    id: "app",
    label: "Native App",
    icon: Smartphone,
    desc: "Memory timeline embedded in the team app",
    color: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20",
    ring: "ring-blue-500",
  },
  {
    id: "crm",
    label: "CRM Workflow",
    icon: Database,
    desc: "Fan intelligence synced to your system of record",
    color: "from-emerald-400 to-teal-500",
    shadow: "shadow-emerald-500/20",
    ring: "ring-emerald-500",
  },
  {
    id: "email",
    label: "Email & SMS",
    icon: Mail,
    desc: "Hyper-personalized dynamic content blocks",
    color: "from-orange-400 to-red-500",
    shadow: "shadow-orange-500/20",
    ring: "ring-orange-500",
  },
  {
    id: "venue",
    label: "Venue Site",
    icon: Globe,
    desc: "Interactive fan galleries and digital scrapbooks",
    color: "from-purple-700 to-pink-500",
    shadow: "shadow-purple-700/20",
    ring: "ring-purple-700",
  },
  {
    id: "staff",
    label: "Staff Tools",
    icon: Monitor,
    desc: "Internal dashboards and VIP alert systems",
    color: "from-sky-400 to-blue-500",
    shadow: "shadow-sky-500/20",
    ring: "ring-sky-500",
  },
  {
    id: "chat",
    label: "Support Chat",
    icon: MessageSquare,
    desc: "AI concierge with full fan purchase context",
    color: "from-fuchsia-500 to-rose-500",
    shadow: "shadow-fuchsia-500/20",
    ring: "ring-fuchsia-500",
  }
];

export function EmbeddedEverywhere() {
  const [activeSurface, setActiveSurface] = useState(SURFACES[0]);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 relative">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left: The Map */}
        <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full max-w-[500px] mx-auto z-10 flex items-center justify-center">
          
          {/* Central FanFeed Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-foreground text-white flex flex-col items-center justify-center shadow-xl z-20 shadow-brand/20 border border-white/10">
            <Layers className="w-8 h-8 mb-1 text-brand-light" />
            <span className="text-[10px] font-semibold tracking-widest uppercase">Studio</span>
          </div>

          {/* Orbiting Surfaces */}
          {SURFACES.map((surface, i) => {
            const angle = (i * 360) / SURFACES.length;
            const radius = 140; // Desktop radius
            
            // Calculate positions using simple trig
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            const isActive = surface.id === activeSurface.id;

            return (
              <button
                key={surface.id}
                onClick={() => setActiveSurface(surface)}
                className={cn(
                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border shadow-lg flex flex-col items-center justify-center transition-all duration-500 hover:scale-110",
                  isActive ? "scale-110 ring-2 ring-offset-2 border-transparent z-30" : "border-border/50 opacity-70 hover:opacity-100 z-10 hover:border-brand/30",
                  isActive ? surface.ring : "",
                  isActive ? surface.shadow : ""
                )}
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 1.15 : 1})`,
                }}
              >
                <surface.icon className={cn(
                  "w-6 h-6 md:w-8 md:h-8 mb-1 transition-colors duration-300",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )} />
                <span className={cn(
                  "text-[8px] md:text-[10px] font-semibold uppercase tracking-wider text-center leading-tight px-1",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}>
                  {surface.label}
                </span>

                {/* Connection Line to Center */}
                <div 
                  className={cn(
                    "absolute top-1/2 left-1/2 h-[2px] origin-left -z-10 transition-all duration-500",
                    isActive ? "bg-brand opacity-60" : "bg-border/50 opacity-30"
                  )}
                  style={{
                    width: `${radius - 40}px`,
                    transform: `translateY(-50%) rotate(${angle + 180}deg)`,
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Dynamic Context Panel */}
        <div className="relative z-20">
          <div className="relative bg-white/60 backdrop-blur-xl border border-border/50 rounded-[2rem] p-8 md:p-10 shadow-xl overflow-hidden min-h-[320px] flex flex-col justify-center">
            
            {/* Dynamic Gradient Background Wash */}
            <div className={cn(
              "absolute inset-0 opacity-10 bg-gradient-to-br transition-all duration-700 ease-in-out",
              activeSurface.color
            )} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br transition-all duration-500",
                  activeSurface.color
                )}>
                  <activeSurface.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground block mb-0.5">Integration Point</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-tight">
                    {activeSurface.label}
                  </h3>
                </div>
              </div>

              <p className="text-base md:text-lg text-foreground font-medium mb-6">
                {activeSurface.desc}
              </p>

              {/* Abstract Visual Representation of the "Layer" */}
              <div className="w-full bg-surface border border-border/50 rounded-xl p-4 overflow-hidden relative group">
                {/* Simulated native app UI */}
                <div className="w-full h-2 bg-border rounded-full mb-3 opacity-50" />
                <div className="w-3/4 h-2 bg-border rounded-full mb-6 opacity-50" />
                
                {/* The injected FanFeed module */}
                <div className={cn(
                  "w-full rounded-lg border-2 border-dashed p-3 relative overflow-hidden transition-all duration-500",
                  activeSurface.ring.replace('ring-', 'border-').replace('500', '400')
                )}>
                  <div className={cn(
                    "absolute inset-0 opacity-10 bg-gradient-to-r",
                    activeSurface.color
                  )} />
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <Layers className="w-3 h-3 text-brand" />
                    <span className="text-[10px] font-semibold text-foreground">FanFeed Module</span>
                  </div>
                  <div className="w-full h-8 bg-white/80 rounded border border-border/50 relative z-10" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
