"use client";

import React from "react";
import {
  IconUserShortHairFillDuo18, IconStarFillDuo18, IconChartActivityFillDuo18, IconBagShoppingFillDuo18, IconMapPinFillDuo18, 
  IconMusicFillDuo18, IconShieldFillDuo18, IconBoltFillDuo18, IconTargetFillDuo18, IconEnvelopeFillDuo18, IconTicketFillDuo18, 
  IconCrownFillDuo18, IconGiftFillDuo18, IconUsersFillDuo18, IconCircleCheckFillDuo18, IconChevronRightFillDuo18
} from "nucleo-ui-fill-duo-18";

export function ActionEngine() {
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Dense Fan Profile */}
        <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] border border-border/50 bg-white/50 backdrop-blur-xl shadow-2xl overflow-hidden p-4 md:p-8">
          <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-brand/5 rounded-full blur-[60px] md:blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 md:gap-4 mb-5 md:mb-8 relative z-10">
            <div className="flex items-center gap-3 md:gap-5">
              <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white shadow-sm bg-surface flex items-center justify-center shrink-0">
                <IconUserShortHairFillDuo18 className="w-5 h-5 md:w-8 md:h-8 text-muted-foreground/50" />
                <div className="absolute -bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2 bg-brand text-white text-[8px] md:text-[10px] font-semibold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm flex items-center gap-0.5">
                  <IconStarFillDuo18 className="w-2 h-2 md:w-2.5 md:h-2.5 fill-current" />
                  98
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-xl font-semibold text-foreground flex items-center gap-1.5 md:gap-2">
                  Marcus
                  <IconCircleCheckFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4 text-emerald-500" />
                </h3>
                <div className="text-[10px] md:text-sm text-muted-foreground mt-0.5 md:mt-1 space-y-0.5">
                  <p>m••••••••@gmail.com</p>
                  <p>Joined 2021</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:items-end">
              <div className="inline-flex items-center gap-1 md:gap-1.5 bg-brand/10 text-brand px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-[9px] md:text-xs font-semibold uppercase tracking-wider w-fit mt-1 sm:mt-0 ml-16 sm:ml-0">
                <IconStarFillDuo18 className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 fill-brand" />
                Platinum Tier
              </div>
            </div>
          </div>

          {/* Grid of Data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 relative z-10">
            {/* Event History */}
            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3 text-muted-foreground">
                <IconTicketFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">Event History</span>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex justify-between items-start gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="text-muted-foreground shrink-0">Total Attended</span>
                  <span className="font-semibold text-foreground text-right">24</span>
                </div>
                <div className="flex justify-between items-start gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="text-muted-foreground shrink-0">This Season</span>
                  <span className="font-semibold text-foreground text-right">6</span>
                </div>
                <div className="flex justify-between items-start gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="text-muted-foreground shrink-0">Pref. Section</span>
                  <span className="font-medium text-foreground text-right">Lower / VIP</span>
                </div>
              </div>
            </div>

            {/* Purchase Behavior */}
            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3 text-muted-foreground">
                <IconBagShoppingFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">Spend Data</span>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex justify-between items-start gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="text-muted-foreground shrink-0">Lifetime Value</span>
                  <span className="font-semibold text-emerald-600 text-right">$4,850</span>
                </div>
                <div className="flex justify-between items-start gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="text-muted-foreground shrink-0">Merch Spend</span>
                  <span className="font-semibold text-foreground text-right">$820</span>
                </div>
                <div className="flex justify-between items-start gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="text-muted-foreground shrink-0">Last Purchase</span>
                  <span className="font-medium text-foreground text-right">2 days ago</span>
                </div>
              </div>
            </div>

            {/* Affinities */}
            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3 text-muted-foreground">
                <IconMusicFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">Affinities</span>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <span className="px-2 py-0.5 md:py-1 bg-surface text-[10px] md:text-xs font-medium rounded-md border border-border">Electronic</span>
                <span className="px-2 py-0.5 md:py-1 bg-surface text-[10px] md:text-xs font-medium rounded-md border border-border">Hip Hop</span>
                <span className="px-2 py-0.5 md:py-1 bg-surface text-[10px] md:text-xs font-medium rounded-md border border-border">Kygo</span>
                <span className="px-2 py-0.5 md:py-1 bg-surface text-[10px] md:text-xs font-medium rounded-md border border-border">Illenium</span>
              </div>
            </div>

            {/* Venue Behavior */}
            <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3 text-muted-foreground">
                <IconMapPinFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider">Venue Behavior</span>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <div className="flex justify-between items-start gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="text-muted-foreground shrink-0">Entry Time</span>
                  <span className="font-medium text-foreground text-right">Early (At Open)</span>
                </div>
                <div className="flex justify-between items-start gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="text-muted-foreground shrink-0">F&B Location</span>
                  <span className="font-medium text-foreground text-right">Beer Kiosks</span>
                </div>
                <div className="flex justify-between items-start gap-3 md:gap-4 text-xs md:text-sm">
                  <span className="text-muted-foreground shrink-0">App Usage</span>
                  <span className="font-medium text-foreground text-right">High (In-venue)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Action Engine */}
        <div className="flex flex-col gap-4 md:gap-6 relative">
          {/* Connecting line visible only on desktop */}
          <div className="hidden lg:block absolute top-1/2 -left-12 w-12 h-px bg-border/80 -translate-y-1/2" />
          <div className="hidden lg:block absolute top-1/2 -left-12 w-1.5 h-1.5 rounded-full bg-brand -translate-y-1/2 -translate-x-1.5" />
          
          <div className="mb-1 md:mb-2 text-center md:text-left md:mt-0">
            <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-1.5 md:mb-2">Automated Activation</h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
              Translate deep fan intelligence into targeted, high-converting workflows instantly.
            </p>
          </div>

          <div className="space-y-2 md:space-y-3 relative z-10">
            {[
              { icon: IconCrownFillDuo18, title: "Send premium upgrade offer", desc: "Triggered by high LTV + lower bowl preference", color: "text-amber-500", bg: "bg-amber-50", borderColor: "hover:border-amber-500/30" },
              { icon: IconTicketFillDuo18, title: "Invite to exclusive presale", desc: "Based on affinity match + top 5% engagement", color: "text-blue-500", bg: "bg-blue-50", borderColor: "hover:border-blue-500/30" },
              { icon: IconShieldFillDuo18, title: "Push VIP experience package", desc: "Recommended due to early entry habit", color: "text-purple-900", bg: "bg-purple-200/50/50", borderColor: "hover:border-purple-700/30" },
              { icon: IconGiftFillDuo18, title: "Target with limited merch drop", desc: "Matched to past artist merchandise purchases", color: "text-pink-500", bg: "bg-pink-50", borderColor: "hover:border-pink-500/30" },
              { icon: IconUsersFillDuo18, title: "Build lookalike audience", desc: "Seed campaign with Platinum Tier characteristics", color: "text-emerald-500", bg: "bg-emerald-50", borderColor: "hover:border-emerald-500/30" },
            ].map((action, i) => (
              <div key={i} className={`group flex items-center justify-between p-3 md:p-4 rounded-xl md:rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-md ${action.borderColor} transition-all cursor-pointer`}>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 ${action.bg} ${action.color} group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-xs md:text-sm text-foreground transition-colors">{action.title}</h4>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{action.desc}</p>
                  </div>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-surface text-muted-foreground flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors shrink-0 ml-2">
                  <IconChevronRightFillDuo18 className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
