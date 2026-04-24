"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  Mail, MessageSquare, BarChart3, Workflow, ShieldCheck, 
  Smartphone, Ticket, Search, PieChart, Sparkles, ArrowRight 
} from "lucide-react";

const BUILD_CATEGORIES = [
  {
    id: "outreach",
    title: "Outreach Tools",
    icon: Mail,
    problem: "Generic email blasts get ignored.",
    who: "Marketing & CRM teams",
    connects: "Syncs directly with FanFeed OS unified profiles.",
    color: "from-blue-500/10 to-indigo-500/10",
    border: "border-blue-500/20",
    mock: (
      <div className="flex flex-col gap-2 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-border/50">
        <div className="h-2 w-1/3 bg-blue-500/20 rounded-full" />
        <div className="h-1.5 w-1/2 bg-border rounded-full" />
        <div className="flex gap-1 mt-1">
          <div className="h-4 w-12 bg-blue-500 rounded-sm" />
          <div className="h-4 w-12 bg-surface rounded-sm border border-border" />
        </div>
      </div>
    )
  },
  {
    id: "concierge",
    title: "AI Concierge",
    icon: MessageSquare,
    problem: "Fan support is slow and disconnected from data.",
    who: "Guest Services & Ticketing",
    connects: "Feeds conversational insights back into profiles.",
    color: "from-purple-700/10 to-fuchsia-500/10",
    border: "border-purple-700/20",
    mock: (
      <div className="flex flex-col gap-2 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-border/50">
        <div className="flex justify-end"><div className="h-4 w-16 bg-purple-700 rounded-t-lg rounded-bl-lg" /></div>
        <div className="flex justify-start"><div className="h-6 w-20 bg-surface border border-border rounded-t-lg rounded-br-lg" /></div>
      </div>
    )
  },
  {
    id: "campaign",
    title: "Campaign Dashboards",
    icon: BarChart3,
    problem: "Sponsor ROI is trapped in spreadsheets.",
    who: "Partnerships Teams",
    connects: "Pulls live audience metrics from FanFeed OS.",
    color: "from-emerald-500/10 to-teal-500/10",
    border: "border-emerald-500/20",
    mock: (
      <div className="flex items-end gap-1 p-3 h-16 bg-white/50 backdrop-blur-sm rounded-lg border border-border/50">
        <div className="w-1/4 h-[40%] bg-emerald-500/40 rounded-t-sm" />
        <div className="w-1/4 h-[70%] bg-emerald-500/60 rounded-t-sm" />
        <div className="w-1/4 h-[50%] bg-emerald-500/40 rounded-t-sm" />
        <div className="w-1/4 h-[90%] bg-emerald-500 rounded-t-sm" />
      </div>
    )
  },
  {
    id: "moderation",
    title: "Moderation Systems",
    icon: ShieldCheck,
    problem: "UGC approval for big screens is manual and risky.",
    who: "Game Presentation & Social",
    connects: "Stores approved assets in the fan's memory layer.",
    color: "from-orange-500/10 to-red-500/10",
    border: "border-orange-500/20",
    mock: (
      <div className="grid grid-cols-2 gap-2 p-2 bg-white/50 backdrop-blur-sm rounded-lg border border-border/50">
        <div className="aspect-square bg-orange-500/20 rounded-md flex items-center justify-center"><CheckCircleMock color="text-orange-500" /></div>
        <div className="aspect-square bg-surface border border-border rounded-md" />
      </div>
    )
  },
  {
    id: "activation",
    title: "Sponsor Activations",
    icon: Workflow,
    problem: "Activations feel disjointed from the core fan journey.",
    who: "Partnerships & Marketing",
    connects: "Turns anonymous scans into known profiles.",
    color: "from-pink-500/10 to-rose-500/10",
    border: "border-pink-500/20",
    mock: (
      <div className="flex flex-col gap-1.5 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-border/50">
        <div className="h-2 w-full bg-pink-500/20 rounded-full" />
        <div className="h-6 w-full bg-surface border border-border rounded flex items-center justify-center">
          <div className="h-1 w-8 bg-border rounded-full" />
        </div>
      </div>
    )
  },
  {
    id: "widgets",
    title: "Event Widgets",
    icon: Smartphone,
    problem: "Native apps lack dynamic, personalized fan context.",
    who: "Digital & Product Teams",
    connects: "Embeds FanFeed UI directly into existing apps.",
    color: "from-sky-500/10 to-blue-500/10",
    border: "border-sky-500/20",
    mock: (
      <div className="relative h-16 w-12 mx-auto bg-surface border-2 border-white shadow-sm rounded-xl overflow-hidden flex flex-col">
        <div className="h-2 bg-white border-b border-border/50" />
        <div className="flex-1 p-1"><div className="w-full h-full bg-sky-500/20 rounded-sm" /></div>
      </div>
    )
  },
  {
    id: "discovery",
    title: "Ticket Discovery",
    icon: Search,
    problem: "Fans miss events because alerts aren't personalized.",
    who: "Ticketing & Revenue",
    connects: "Triggers alerts based on FanFeed affinity scores.",
    color: "from-amber-500/10 to-yellow-500/10",
    border: "border-amber-500/20",
    mock: (
      <div className="flex items-center gap-2 p-2 bg-white/50 backdrop-blur-sm rounded-lg border border-border/50">
        <div className="w-8 h-10 bg-amber-500/20 rounded-sm" />
        <div className="flex-1 space-y-1.5">
          <div className="h-1.5 w-3/4 bg-amber-500/40 rounded-full" />
          <div className="h-1 w-1/2 bg-border rounded-full" />
        </div>
      </div>
    )
  },
  {
    id: "reporting",
    title: "Internal Reporting",
    icon: PieChart,
    problem: "Data lives in silos, making executive reporting painful.",
    who: "Strategy & BI Teams",
    connects: "Visualizes the entire FanFeed OS data warehouse.",
    color: "from-teal-500/10 to-cyan-500/10",
    border: "border-teal-500/20",
    mock: (
      <div className="flex gap-2 p-3 bg-white/50 backdrop-blur-sm rounded-lg border border-border/50 h-16">
        <div className="w-8 h-8 rounded-full bg-teal-500/20 shrink-0" />
        <div className="flex-1 flex flex-col justify-center gap-1.5">
          <div className="h-1.5 w-full bg-border rounded-full" />
          <div className="h-1.5 w-2/3 bg-border rounded-full" />
        </div>
      </div>
    )
  },
];

function CheckCircleMock({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={cn("w-3 h-3", color)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function StudioBuildMatrix() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 relative">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-10">
        {BUILD_CATEGORIES.map((category) => {
          const isHovered = hoveredId === category.id;
          
          return (
            <div
              key={category.id}
              className={cn(
                "group relative rounded-[1.5rem] bg-white border transition-all duration-300 overflow-hidden cursor-crosshair h-[220px] flex flex-col",
                isHovered 
                  ? cn("border-transparent shadow-xl scale-[1.02] z-20", "ring-1 ring-black/5") 
                  : "border-border/60 shadow-sm hover:shadow-md z-10"
              )}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Dynamic Gradient Background on Hover */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300",
                category.color,
                isHovered && "opacity-100"
              )} />
              
              {/* Top Section: Visual Mock */}
              <div className="relative h-[90px] p-4 flex items-end justify-center border-b border-border/30 bg-surface/50 overflow-hidden" aria-hidden="true" role="img">
                <div className={cn(
                  "transition-all duration-500 transform origin-bottom w-full max-w-[160px]",
                  isHovered ? "scale-105 -translate-y-1" : "scale-100"
                )}>
                  {category.mock}
                </div>
              </div>

              {/* Bottom Section: Content */}
              <div className="relative p-5 flex-1 flex flex-col bg-white">
                <div className="flex items-center gap-2 mb-1.5 transition-transform duration-300 transform origin-left">
                  <category.icon className={cn(
                    "w-4 h-4 transition-colors",
                    isHovered ? "text-brand" : "text-muted-foreground"
                  )} />
                  <h3 className="font-semibold text-sm text-foreground">{category.title}</h3>
                </div>

                {/* Default State: Brief problem */}
                <div className={cn(
                  "absolute left-5 right-5 top-[44px] transition-all duration-300",
                  isHovered ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
                )}>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {category.problem}
                  </p>
                </div>

                {/* Hover State: Deep Dive Details */}
                <div className={cn(
                  "absolute left-5 right-5 top-[44px] flex flex-col gap-2 transition-all duration-300",
                  isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                )}>
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground block mb-0.5">Built For</span>
                    <p className="text-[11px] font-medium text-foreground">{category.who}</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-brand block mb-0.5 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> OS Connection
                    </span>
                    <p className="text-[11px] font-medium text-foreground leading-tight">{category.connects}</p>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
