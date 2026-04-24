"use client";

import React, { useState } from "react";
import { 
  IconUsersFillDuo18, 
  IconCalendarFillDuo18, 
  IconBagShoppingFillDuo18, 
  IconEnvelopeOpenFillDuo18, 
  IconMapPinFillDuo18, 
  IconHeartFillDuo18, 
  IconChartActivityFillDuo18,
  IconPlusFillDuo18,
  IconArrowRightFillDuo18,
  IconChartTrendUpFillDuo18,
  IconFilterFillDuo18,
  IconCheckFillDuo18,
  IconBoltFillDuo18,
  IconDotsFillDuo18,
  IconVideo2FillDuo18,
  IconBellDotFillDuo18
} from "nucleo-ui-fill-duo-18";
import { Card } from "@/components/ui/card";

const CONDITIONS = [
  { id: "events", icon: IconCalendarFillDuo18, label: "Attended 3+ events in last 12 months", color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: "spend", icon: IconVideo2FillDuo18, label: "Posted content from your events", color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { id: "email", icon: IconBellDotFillDuo18, label: "Opened one of your notifications", color: "text-purple-900", bg: "bg-purple-700/10" },
  { id: "location", icon: IconMapPinFillDuo18, label: "Lives within 20 miles of venue", color: "text-orange-500", bg: "bg-orange-500/10" },
  { id: "affinity", icon: IconHeartFillDuo18, label: "Follows specific artist / team", color: "text-pink-500", bg: "bg-pink-500/10" },
  { id: "engagement", icon: IconChartActivityFillDuo18, label: "Goes in large groups", color: "text-indigo-500", bg: "bg-indigo-500/10" },
];

export function SegmentBuilder() {
  const [activeConditions, setActiveConditions] = useState<string[]>(["events", "spend"]);
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const toggleCondition = (id: string) => {
    setActiveConditions(prev => 
      prev.includes(id) 
        ? prev.filter(c => c !== id)
        : [...prev, id]
    );
  };

  // Calculate dynamic stats based on selected conditions
  const baseAudience = 125000;
  const audienceMultiplier = activeConditions.length === 0 ? 1 : Math.pow(0.6, activeConditions.length);
  const currentAudience = Math.round(baseAudience * audienceMultiplier);
  
  const baseValue = 45;
  const valueMultiplier = activeConditions.length === 0 ? 1 : 1 + (activeConditions.length * 0.15);
  const avgValue = Math.round(baseValue * valueMultiplier);

  return (
    <div className="w-full max-w-5xl mx-auto rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-white md:bg-white/50 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] overflow-hidden flex flex-col md:flex-row">
      
      {/* Left Panel: Builder */}
      <div className="flex-1 p-5 md:p-8 border-b md:border-b-0 md:border-r border-border/50 bg-white/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 md:gap-4 mb-6 md:mb-8">
          <div>
            <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
              <IconFilterFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand" />
              <h3 className="font-semibold text-sm md:text-base text-foreground">Segment Builder</h3>
            </div>
            <p className="text-xs md:text-sm text-muted">Define your audience criteria</p>
          </div>
          <button className="hidden md:block w-full sm:w-auto px-3 py-1.5 rounded-full border border-border text-[10px] md:text-xs font-medium text-foreground hover:bg-surface transition-colors">
            Save Segment
          </button>
        </div>

        <div className="space-y-2 md:space-y-3 relative before:absolute before:inset-y-0 before:left-3.5 md:before:left-4 before:w-0.5 before:bg-border/50 before:-z-10">
          {CONDITIONS.map((condition, conditionIndex) => {
            const isActive = activeConditions.includes(condition.id);
            const Icon = condition.icon;
            
            return (
              <div 
                key={condition.id}
                className={`relative flex items-center gap-2 md:gap-3 group cursor-pointer ${conditionIndex >= 3 ? 'hidden md:flex' : ''}`}
                onClick={() => toggleCondition(condition.id)}
                onMouseEnter={() => setIsHovering(condition.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                {/* Connector Node */}
                <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center bg-white transition-colors duration-200 z-10 shrink-0
                  ${isActive ? 'border-brand' : 'border-border group-hover:border-brand/50'}`}
                >
                  <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200
                    ${isActive ? 'bg-brand' : 'bg-transparent group-hover:bg-brand/20'}`} 
                  />
                </div>

                {/* Condition Card */}
                <div className={`flex-1 flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-xl border transition-all duration-200
                  ${isActive 
                    ? 'border-brand/30 bg-brand/5 shadow-sm' 
                    : 'border-border/50 bg-white hover:border-border hover:bg-surface'
                  }`}
                >
                  <div className={`p-1.5 md:p-2 rounded-lg ${isActive ? condition.bg : 'bg-surface'} transition-colors duration-200`}>
                    <Icon className={`w-3 h-3 md:w-4 md:h-4 ${isActive ? condition.color : 'text-muted-foreground'}`} />
                  </div>
                  <span className={`text-[10px] md:text-sm font-medium transition-colors duration-200 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {condition.label}
                  </span>
                  
                  {isActive && (
                    <div className="ml-auto flex items-center gap-2">
                      <span className="text-[8px] md:text-[10px] font-semibold tracking-wider text-brand uppercase bg-brand/10 px-1.5 py-0.5 md:px-2 md:py-1 rounded-md">
                        Active
                      </span>
                    </div>
                  )}
                  
                  {!isActive && isHovering === condition.id && (
                    <div className="ml-auto">
                      <IconPlusFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="mt-4 md:mt-6 hidden md:flex items-center gap-1.5 md:gap-2 text-[10px] md:text-sm font-medium text-brand hover:text-brand/80 transition-colors pl-9 md:pl-11">
          <IconPlusFillDuo18 className="w-3 h-3 md:w-4 md:h-4" />
          Add custom condition
        </button>
      </div>

      {/* Right Panel: Results */}
      <div className="w-full md:w-80 bg-[#f8fbff] px-5 py-3 md:p-8 flex flex-col relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <h3 className="font-semibold text-xs md:text-base text-foreground mb-2 md:mb-6 relative z-10">Audience Impact</h3>
        
        {/* Real-time stats */}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-0 md:space-y-6 mb-3 md:mb-8 relative z-10">
          <div>
            <p className="text-[9px] md:text-sm font-medium text-muted mb-0.5 md:mb-1">Total Reachable</p>
            <div className="flex flex-row items-baseline gap-1.5 md:gap-2">
              <span className="text-base md:text-3xl font-semibold text-foreground">
                {currentAudience.toLocaleString()}
              </span>
              <span className="text-[8px] md:text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-1 py-0.5 md:px-1.5 rounded flex w-fit items-center gap-0.5 md:gap-1">
                <IconChartTrendUpFillDuo18 className="w-2 h-2 md:w-3 md:h-3" />
                High
              </span>
            </div>
          </div>
          
          <div className="md:pt-6 md:border-t md:border-blue-900/5">
            <p className="text-[9px] md:text-sm font-medium text-muted mb-0.5 md:mb-1">Est. Value per Fan</p>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 md:gap-2">
              <span className="text-base md:text-2xl font-semibold text-foreground">
                ${avgValue}
              </span>
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="mt-auto relative z-10 hidden md:block">
          <div className="flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4">
            <IconBoltFillDuo18 className="w-3 h-3 md:w-4 md:h-4 text-amber-500" />
            <span className="text-[9px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Suggested Actions
            </span>
          </div>
          
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-2.5 md:p-3 rounded-xl bg-white border border-border/50 hover:border-brand/30 hover:shadow-sm transition-all group text-left">
              <div>
                <p className="text-xs md:text-sm font-medium text-foreground group-hover:text-brand transition-colors">VIP Merch Drop</p>
                <p className="text-[9px] md:text-xs text-muted">High conversion probability</p>
              </div>
              <IconArrowRightFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-brand transition-colors transform group-hover:translate-x-1" />
            </button>
            
            <button className="w-full flex items-center justify-between p-2.5 md:p-3 rounded-xl bg-white border border-border/50 hover:border-brand/30 hover:shadow-sm transition-all group text-left">
              <div>
                <p className="text-xs md:text-sm font-medium text-foreground group-hover:text-brand transition-colors">Early Access Presale</p>
                <p className="text-[9px] md:text-xs text-muted">Best for engaged fans</p>
              </div>
              <IconArrowRightFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4 text-muted-foreground group-hover:text-brand transition-colors transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
