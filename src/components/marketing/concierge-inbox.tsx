"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, MessageCircle, Ticket, Tag, CheckCircle2, ChevronRight, User } from "lucide-react";

export function ConciergeInbox() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // 0: Initial state, showing past thread
    // 1: User asks a question
    // 2: Concierge typing
    // 3: Concierge responds with offer
    // 4: Offer card activates / expands
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 6); // Add an extra delay step before looping
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative py-12">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-brand/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-peach/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 pointer-events-none" />

      {/* Left Phone: Concierge Thread */}
      <div className="relative w-[280px] md:w-[320px] h-[500px] md:h-[580px] rounded-[2rem] md:rounded-[2.5rem] border-[6px] md:border-8 border-white bg-surface shadow-2xl overflow-hidden shrink-0 z-10 flex flex-col">
        {/* Phone Notch */}
        <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-30">
          <div className="w-24 h-5 bg-white rounded-b-xl" />
        </div>

        {/* App Header */}
        <div className="px-5 pt-8 pb-4 bg-white/80 backdrop-blur-xl border-b border-border/50 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground leading-tight">FanFeed Concierge</h3>
              <p className="text-[10px] text-brand font-medium">Active Now</p>
            </div>
          </div>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto relative z-10">
          
          {/* Past Message */}
          <div className="flex gap-3">
            <div className="w-6 h-6 rounded-full bg-brand/10 shrink-0 flex items-center justify-center mt-1">
              <Sparkles className="w-3 h-3 text-brand" />
            </div>
            <div className="bg-white border border-border/50 rounded-2xl rounded-tl-sm p-3 shadow-sm text-sm text-foreground">
              Based on your history, I thought you'd love these presale tickets to the Knicks game.
            </div>
          </div>

          <div className="flex gap-3 flex-row-reverse">
            <div className="w-6 h-6 rounded-full bg-surface-elevated shrink-0 flex items-center justify-center mt-1 border border-border">
              <User className="w-3 h-3 text-muted-foreground" />
            </div>
            <div className="bg-brand text-white rounded-2xl rounded-tr-sm p-3 shadow-sm text-sm">
              Got 'em! Thanks. Anything coming up for Odesza?
            </div>
          </div>

          {/* Dynamic User Question */}
          <div className={cn(
            "flex gap-3 flex-row-reverse transition-all duration-500",
            step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden"
          )}>
            <div className="w-6 h-6 rounded-full bg-surface-elevated shrink-0 flex items-center justify-center mt-1 border border-border">
              <User className="w-3 h-3 text-muted-foreground" />
            </div>
            <div className="bg-brand text-white rounded-2xl rounded-tr-sm p-3 shadow-sm text-sm">
              Also, when is the new merch dropping?
            </div>
          </div>

          {/* Typing Indicator */}
          <div className={cn(
            "flex gap-3 transition-all duration-300",
            step === 2 ? "opacity-100" : "opacity-0 hidden"
          )}>
            <div className="w-6 h-6 rounded-full bg-brand/10 shrink-0 flex items-center justify-center mt-1">
              <Sparkles className="w-3 h-3 text-brand" />
            </div>
            <div className="bg-white border border-border/50 rounded-2xl rounded-tl-sm p-3 shadow-sm flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" />
              <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>

          {/* Concierge Response & Offer */}
          <div className={cn(
            "flex gap-3 transition-all duration-500",
            step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 hidden"
          )}>
            <div className="w-6 h-6 rounded-full bg-brand/10 shrink-0 flex items-center justify-center mt-1">
              <Sparkles className="w-3 h-3 text-brand" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="bg-white border border-border/50 rounded-2xl rounded-tl-sm p-3 shadow-sm text-sm text-foreground">
                Just for you! Here's early access to the Red Rocks exclusive hoodie before it goes public.
              </div>
              <div className="bg-brand/5 border border-brand/20 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:bg-brand/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0 border border-border">
                  <Tag className="w-5 h-5 text-brand" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-foreground">Early Access Merch</p>
                  <p className="text-[10px] text-muted-foreground">Expires in 2 hours</p>
                </div>
                <ChevronRight className="w-4 h-4 text-brand" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Input Area */}
        <div className="p-4 bg-white/80 backdrop-blur-xl border-t border-border/50">
          <div className="h-10 rounded-full bg-surface border border-border/50 px-4 flex items-center text-muted-foreground text-sm">
            Ask your concierge...
          </div>
        </div>
      </div>

      {/* Connection Indicator (Desktop Only) */}
      <div className="hidden lg:flex items-center justify-center z-0">
        <div className="h-[2px] w-24 bg-gradient-to-r from-border via-brand/30 to-border relative">
          <div className={cn(
            "absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-brand shadow-[0_0_10px_rgba(124,92,252,0.8)] transition-all duration-[1500ms] ease-in-out",
            step >= 4 ? "left-full opacity-100" : "left-0 opacity-0"
          )} />
        </div>
      </div>

      {/* Right Phone/Card: Curated Offer */}
      <div className="relative z-20 w-[280px] md:w-[320px] shrink-0 mt-4 lg:mt-0">
        
        {/* Floating Labels */}
        <div className={cn(
          "absolute -top-4 -right-4 bg-emerald-500 text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg z-30 transition-all duration-500 delay-300 flex items-center gap-1.5",
          step >= 4 ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-2"
        )}>
          <CheckCircle2 className="w-3 h-3" />
          Exclusive Access
        </div>

        <div className={cn(
          "rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-white/80 backdrop-blur-xl shadow-2xl p-5 relative overflow-hidden transition-all duration-700 ease-out",
          step >= 4 ? "scale-100 opacity-100 translate-y-0 ring-4 ring-brand/10" : "scale-95 opacity-50 translate-y-4 grayscale"
        )}>
          {/* Card Header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-surface flex items-center justify-center">
              <Tag className="w-3 h-3 text-muted-foreground" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Fan Inbox</span>
          </div>

          {/* Product Image Mock */}
          <div className="w-full h-48 rounded-xl bg-gradient-to-br from-purple-50 to-peach/30 border border-border/50 mb-4 relative overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <img src="/img/hoodie.png" alt="Odesza Hoodie" className="w-32 h-32 object-contain drop-shadow-md rotate-[-5deg] group-hover:rotate-0 transition-transform" />
            </div>
            
            <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-semibold text-brand shadow-sm">
              Limited Run
            </div>
          </div>

          {/* Details */}
          <h4 className="text-lg font-semibold text-foreground mb-1 leading-tight">Red Rocks Tour Hoodie</h4>
          <p className="text-xs text-muted-foreground mb-4">You attended the show. Now get the gear before anyone else.</p>

          <button className="w-full py-3 rounded-xl bg-foreground text-white text-sm font-semibold shadow-md hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2">
            Claim Your Access
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Stacked cards effect behind */}
        <div className={cn(
          "absolute -bottom-4 left-4 right-4 h-10 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-lg -z-10 transition-all duration-700 delay-100",
          step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )} />
        <div className={cn(
          "absolute -bottom-8 left-8 right-8 h-10 bg-white/20 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm -z-20 transition-all duration-700 delay-200",
          step >= 4 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        )} />

      </div>

    </div>
  );
}
