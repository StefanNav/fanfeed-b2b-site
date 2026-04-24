"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, XCircle, CheckCircle2, DollarSign, Database, Lock, Key, Zap, Layers } from "lucide-react";

export function ReplaceTheVendor() {
  const [isReplaced, setIsReplaced] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 flex flex-col items-center">
      
      {/* Toggle Control */}
      <div className="relative bg-surface border border-border/50 rounded-full p-1.5 flex items-center mb-12 md:mb-16 z-20 shadow-sm">
        <button
          onClick={() => setIsReplaced(false)}
          className={cn(
            "relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10",
            !isReplaced ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          )}
        >
          What you have now
        </button>
        <button
          onClick={() => setIsReplaced(true)}
          className={cn(
            "relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 z-10 flex items-center gap-2",
            isReplaced ? "text-white" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {isReplaced && <SparklesIcon className="w-3.5 h-3.5" />}
          What Studio builds
        </button>
        
        {/* Sliding Pill Background */}
        <div 
          className={cn(
            "absolute top-1.5 bottom-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] shadow-sm",
            isReplaced ? "bg-foreground w-[180px] left-[156px]" : "bg-white w-[156px] left-1.5 border border-border/50"
          )}
        />
      </div>

      {/* Main Comparison Area */}
      <div className="relative w-full max-w-4xl min-h-[400px]">
        
        {/* State 1: Fragmented Vendors */}
        <div className={cn(
          "absolute inset-0 transition-all duration-700 ease-in-out flex flex-col md:flex-row items-center justify-center gap-6",
          !isReplaced ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-12 pointer-events-none"
        )}>
          {/* Vendor 1 */}
          <div className="w-full md:w-1/3 bg-white border border-red-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4 border border-red-100">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Email Tool</h4>
            <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium mb-4">
              <DollarSign className="w-3 h-3" /> $60k / year
            </div>
            <p className="text-xs text-muted-foreground">Rigid templates. Disconnected from live ticketing data.</p>
          </div>

          {/* Vendor 2 */}
          <div className="w-full md:w-1/3 bg-white border border-red-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center md:translate-y-8">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4 border border-red-100">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Chat Widget</h4>
            <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium mb-4">
              <DollarSign className="w-3 h-3" /> $24k / year
            </div>
            <p className="text-xs text-muted-foreground">Generic bot. Can't see who the fan actually is.</p>
          </div>

          {/* Vendor 3 */}
          <div className="w-full md:w-1/3 bg-white border border-red-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-4 border border-red-100">
              <Database className="w-6 h-6" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Promo Hub</h4>
            <div className="flex items-center gap-1.5 text-xs text-red-500 font-medium mb-4">
              <DollarSign className="w-3 h-3" /> $40k / year
            </div>
            <p className="text-xs text-muted-foreground">Another silo. You don't own the data it generates.</p>
          </div>

          {/* Connection Lines showing mess (Desktop) */}
          <svg className="absolute inset-0 w-full h-full -z-10 hidden md:block stroke-red-200 pointer-events-none" fill="none" strokeWidth="2" strokeDasharray="4 4">
            <path d="M 300 200 C 400 100, 400 300, 500 200" />
            <path d="M 500 200 C 600 100, 600 300, 700 200" />
            <path d="M 300 200 C 400 300, 600 300, 700 200" />
          </svg>
        </div>

        {/* State 2: Consolidated Studio Build */}
        <div className={cn(
          "absolute inset-0 transition-all duration-700 ease-in-out flex flex-col items-center justify-center",
          isReplaced ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-12 pointer-events-none"
        )}>
          {/* Background Glow */}
          <div className={cn(
            "absolute inset-0 bg-brand/10 rounded-full blur-[100px] transition-opacity duration-1000",
            isReplaced ? "opacity-100" : "opacity-0"
          )} />

          <div className="relative w-full max-w-2xl bg-white border border-brand/20 rounded-[2.5rem] shadow-2xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-8 items-center">
            {/* Left Side: The "One Tool" */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand/10 text-brand text-[10px] font-semibold uppercase tracking-widest mb-6">
                <CheckCircle2 className="w-3 h-3" />
                Custom Solution
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 leading-tight">
                One unified platform you actually own.
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
                Replace 3 disjointed subscriptions with one custom-built FanFeed Studio product that handles outreach, chat, and promos natively.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-muted-foreground uppercase font-semibold">Opex Saved</p>
                    <p className="text-sm font-semibold text-foreground">$124k/yr</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-muted text-brand flex items-center justify-center shrink-0">
                    <Key className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-muted-foreground uppercase font-semibold">IP Control</p>
                    <p className="text-sm font-semibold text-foreground">100% Owned</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Visual Stack */}
            <div className="relative w-[200px] shrink-0 flex flex-col items-center">
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-20 pointer-events-none" />
              
              <div className="w-full bg-surface border border-border/50 rounded-2xl p-4 shadow-sm relative z-10 translate-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="w-4 h-4 text-brand" />
                  <div className="h-2 w-16 bg-border rounded-full" />
                </div>
                <div className="h-1.5 w-full bg-border rounded-full mb-1" />
                <div className="h-1.5 w-3/4 bg-border rounded-full" />
              </div>
              
              <div className="w-[90%] bg-surface border border-border/50 rounded-2xl p-4 shadow-sm relative z-0 -translate-y-2 opacity-80">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-purple-900" />
                  <div className="h-2 w-16 bg-border rounded-full" />
                </div>
              </div>

              <div className="w-[80%] bg-surface border border-border/50 rounded-2xl p-4 shadow-sm relative -z-10 -translate-y-8 opacity-60">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-emerald-500" />
                  <div className="h-2 w-16 bg-border rounded-full" />
                </div>
              </div>
              
              {/* Brace / Merge Icon */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-white border-2 border-brand rounded-full flex items-center justify-center shadow-lg z-30">
                <Zap className="w-5 h-5 text-brand fill-brand/20" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Quick inline icon component to avoid missing import issues
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
      {...props}
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
      <path d="M20 3v4"/>
      <path d="M22 5h-4"/>
      <path d="M4 17v2"/>
      <path d="M5 18H3"/>
    </svg>
  );
}

function Mail(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>; }
function MessageSquare(props: any) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>; }
