"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  FileSearch,
  CheckCircle2,
  MailWarning,
  MessageSquareWarning,
  Workflow,
  ShieldAlert,
  Send,
  Bot,
  BarChart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const WORKFLOWS = [
  {
    id: "email",
    label: "Email Outreach",
    painPoint: {
      icon: MailWarning,
      title: "Overpriced email vendor",
      desc: "Paying $5k/mo for a clunky CRM just to send basic campaigns.",
    },
    solution: {
      icon: FileSearch,
      title: "Custom outreach engine",
      desc: "A lightweight email tool built directly on top of your data.",
    },
    product: {
      icon: Send,
      title: "Shipped: FanMailer",
      stats: ["$0 monthly license", "100% data ownership", "2-week build"],
      color: "from-blue-500 to-indigo-600",
    },
  },
  {
    id: "support",
    label: "Fan Support",
    painPoint: {
      icon: MessageSquareWarning,
      title: "Clunky support workflow",
      desc: "Agents digging through 3 systems to answer 'Where are my tickets?'",
    },
    solution: {
      icon: FileSearch,
      title: "AI Concierge Console",
      desc: "A unified inbox that instantly surfaces the fan's purchase history.",
    },
    product: {
      icon: Bot,
      title: "Shipped: FanAssist AI",
      stats: ["80% faster resolution", "Unified profile view", "3-week build"],
      color: "from-purple-700 to-pink-500",
    },
  },
  {
    id: "campaigns",
    label: "Sponsor Ops",
    painPoint: {
      icon: Workflow,
      title: "Fragmented campaign ops",
      desc: "Tracking sponsor activations across 12 different spreadsheets.",
    },
    solution: {
      icon: FileSearch,
      title: "Activation Dashboard",
      desc: "A central hub to launch, track, and report on partner campaigns.",
    },
    product: {
      icon: BarChart,
      title: "Shipped: Partner Hub",
      stats: ["Real-time ROI", "Automated reporting", "4-week build"],
      color: "from-emerald-400 to-teal-500",
    },
  },
  {
    id: "ugc",
    label: "Content Moderation",
    painPoint: {
      icon: ShieldAlert,
      title: "Manual UGC moderation",
      desc: "Interns spending hours manually approving fan photos for the big screen.",
    },
    solution: {
      icon: FileSearch,
      title: "Branded Review Tool",
      desc: "An auto-filtering queue that flags safe content for one-click approval.",
    },
    product: {
      icon: ShieldCheck,
      title: "Shipped: ScreenClear",
      stats: ["95% time saved", "AI safety filters", "2-week build"],
      color: "from-orange-400 to-red-500",
    },
  },
];

export function PainPointToProduct() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Handle auto-rotation and progress bar
  useEffect(() => {
    const duration = 5000; // 5 seconds per slide
    const interval = 50; // Update progress every 50ms
    const steps = duration / interval;
    
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        currentStep = 0;
        setProgress(0);
        setActiveIndex((prev) => (prev + 1) % WORKFLOWS.length);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeWorkflow = WORKFLOWS[activeIndex];

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 sm:px-6 flex flex-col items-center">
      
      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 relative z-20">
        {WORKFLOWS.map((workflow, index) => (
          <button
            key={workflow.id}
            onClick={() => {
              setActiveIndex(index);
              setProgress(0);
            }}
            className={cn(
              "relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 overflow-hidden border",
              index === activeIndex 
                ? "text-foreground border-border/50 bg-white shadow-sm" 
                : "text-muted-foreground border-transparent hover:bg-surface hover:text-foreground"
            )}
          >
            <span className="relative z-10">{workflow.label}</span>
            {/* Progress bar background for active tab */}
            {index === activeIndex && (
              <div 
                className="absolute top-0 left-0 bottom-0 bg-brand/10 z-0 transition-all duration-75 ease-linear"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Main Transformation Flow */}
      <div className="w-full relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 min-h-[400px]">
        
        {/* Background Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-border via-border to-border -translate-y-1/2 z-0" />

        {/* Step 1: Pain Point */}
        <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center group">
          <div className="mb-4 px-3 py-1 rounded-full bg-surface border border-border text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
            The Problem
          </div>
          <div className="w-full bg-white border border-red-100 rounded-2xl p-6 shadow-sm relative overflow-hidden transition-all duration-500">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-400" />
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4 text-red-500">
              <activeWorkflow.painPoint.icon className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2 leading-tight">
              {activeWorkflow.painPoint.title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {activeWorkflow.painPoint.desc}
            </p>
          </div>
        </div>

        {/* Arrow 1 */}
        <div className="z-10 text-muted-foreground/30 rotate-90 md:rotate-0 my-2 md:my-0">
          <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        {/* Step 2: Solution Scope */}
        <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center">
          <div className="mb-4 px-3 py-1 rounded-full bg-surface border border-border text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
            The Scope
          </div>
          <div className="w-full bg-surface border border-border/50 rounded-2xl p-6 shadow-sm relative overflow-hidden transition-all duration-500 delay-100">
            <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center mb-4 text-brand">
              <activeWorkflow.solution.icon className="w-5 h-5" />
            </div>
            <h4 className="font-semibold text-foreground mb-2 leading-tight">
              {activeWorkflow.solution.title}
            </h4>
            <p className="text-sm text-muted-foreground">
              {activeWorkflow.solution.desc}
            </p>
          </div>
        </div>

        {/* Arrow 2 */}
        <div className="z-10 text-muted-foreground/30 rotate-90 md:rotate-0 my-2 md:my-0">
          <ArrowRight className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        {/* Step 3: Shipped Product */}
        <div className="relative z-10 w-full md:w-1/3 flex flex-col items-center">
          <div className="mb-4 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-[10px] font-semibold text-brand uppercase tracking-widest flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3" />
            The Product
          </div>
          <div className="w-full bg-foreground rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all duration-500 delay-200 group-hover:-translate-y-1">
            <div className={cn(
              "absolute inset-0 opacity-20 bg-gradient-to-br transition-colors duration-500",
              activeWorkflow.product.color
            )} />
            
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-white">
                <activeWorkflow.product.icon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-white mb-4 text-lg leading-tight">
                {activeWorkflow.product.title}
              </h4>
              
              <ul className="space-y-2">
                {activeWorkflow.product.stats.map((stat, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/70 text-xs font-medium">
                    <Sparkles className="w-3 h-3 text-brand-light shrink-0" />
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
