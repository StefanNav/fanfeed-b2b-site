"use client";

import React from "react";
import { 
  IconUserShortHairFillDuo18, 
  IconUsersFillDuo18,
  IconChartActivityFillDuo18, 
  IconTargetFillDuo18, 
  IconBoltFillDuo18, 
  IconMapPinFillDuo18, 
  IconBagShoppingFillDuo18, 
  IconChartTrendUpFillDuo18, 
  IconMusicFillDuo18, 
  IconGlobeFillDuo18, 
  IconTicketFillDuo18, 
  IconArrowRightFillDuo18,
  IconSparkleFillDuo18,
  IconChartBarAxisYFillDuo18,
  IconCreditCardFillDuo18,
  IconImageFillDuo18
} from "nucleo-ui-fill-duo-18";

export function CommandCenter() {
  return (
    <div className="w-full relative">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/4" />
      <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-peach/10 rounded-full blur-[80px] md:blur-[120px] translate-y-1/4" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 auto-rows-auto">
        
        {/* Profile Detail Card (Col 1, Row 1-2) */}
        <div className="lg:row-span-2 rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-white md:bg-white/70 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] px-5 py-3 md:p-6 flex flex-col hover:shadow-[0_8px_32px_0_rgba(124,92,252,0.16)] transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-brand/5 to-transparent opacity-50" />
          
          <div className="flex items-center justify-between mb-3 md:mb-8 relative z-10">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-surface border-2 border-white shadow-sm flex items-center justify-center shrink-0">
                <IconUserShortHairFillDuo18 className="w-3.5 h-3.5 md:w-6 md:h-6 text-muted-foreground/50" />
              </div>
              <div>
                <h4 className="text-sm md:text-lg font-semibold text-foreground">Elena</h4>
                <div className="flex items-center gap-1 md:gap-2 mt-0.5">
                  <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-emerald-500" />
                  <p className="text-[8px] md:text-xs text-muted-foreground font-medium uppercase tracking-wider">TOP BOSTON FANS</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:hidden">
              <span className="text-[9px] text-muted-foreground font-medium"><span className="font-semibold text-foreground">24</span> events</span>
              <span className="w-0.5 h-0.5 rounded-full bg-border" />
              <span className="text-[9px] text-muted-foreground font-medium"><span className="font-semibold text-foreground">3</span> posts</span>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4 mb-8 relative z-10">
            <div className="p-3 rounded-2xl bg-white border border-border/50 shadow-sm">
              <p className="text-xs text-muted-foreground mb-1 font-medium">Past events</p>
              <p className="text-xl font-semibold text-foreground">24</p>
            </div>
            <div className="p-3 rounded-2xl bg-white border border-border/50 shadow-sm">
              <p className="text-xs text-muted-foreground mb-1 font-medium">Score</p>
              <p className="text-xl font-semibold text-brand">94/100</p>
            </div>
          </div>

          <div className="relative z-10 flex-1">
            {/* Mini pie chart — mobile only, absolutely positioned */}
            <svg className="absolute right-0 top-0 w-[4.5rem] h-[4.5rem] md:hidden" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#f5e6df" strokeWidth="3.5" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#f97316" strokeWidth="3.5" strokeDasharray="66 22" strokeDashoffset="25" strokeLinecap="round" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#fdba74" strokeWidth="3.5" strokeDasharray="16 72" strokeDashoffset="-41" strokeLinecap="round" />
              <text x="18" y="20.5" textAnchor="middle" className="fill-foreground text-[8px] font-bold">94</text>
            </svg>
            <h5 className="text-[9px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 md:mb-4">Recent Activity</h5>
            <div className="space-y-2 md:space-y-4 relative before:absolute before:inset-y-2 before:left-[7px] md:before:left-[11px] before:w-px before:bg-border">
              
              <div className="flex gap-2 md:gap-4 relative">
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white border border-border shadow-sm flex items-center justify-center shrink-0 z-10">
                  <IconTicketFillDuo18 className="w-2 h-2 md:w-3 md:h-3 text-blue-500" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Purchased VIP Ticket</p>
                  <p className="text-[9px] md:text-xs text-muted-foreground">Odesza Summer Tour • 2h ago</p>
                </div>
              </div>

              <div className="flex gap-2 md:gap-4 relative">
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white border border-border shadow-sm flex items-center justify-center shrink-0 z-10">
                  <IconImageFillDuo18 className="w-2 h-2 md:w-3 md:h-3 text-emerald-500" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">Shared a UGC post</p>
                  <p className="text-[9px] md:text-xs text-muted-foreground">Boston, MA • 1d ago</p>
                </div>
              </div>

              <div className="flex gap-2 md:gap-4 relative">
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-white border border-border shadow-sm flex items-center justify-center shrink-0 z-10">
                  <IconChartActivityFillDuo18 className="w-2 h-2 md:w-3 md:h-3 text-purple-900" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm font-semibold text-foreground">App Engagement</p>
                  <p className="text-[9px] md:text-xs text-muted-foreground">Viewed setlist • 3d ago</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Spend / Attendance / Engagement Indicators (Col 2 & 3, Row 1) */}
        <div className="lg:col-span-2 rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-white md:bg-white/70 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] px-5 py-3 md:p-6 hover:shadow-[0_8px_32px_0_rgba(124,92,252,0.16)] transition-shadow overflow-hidden relative">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-brand/5 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-3 gap-3 md:gap-6 h-full items-center relative z-10">
            
            <div className="flex flex-col border-r border-border/50 pr-3 md:pr-6">
              <div className="flex items-center gap-1 md:gap-2 text-muted-foreground mb-1 md:mb-2">
                <IconUsersFillDuo18 className="w-2.5 h-2.5 md:w-4 md:h-4" />
                <span className="text-[8px] md:text-xs font-semibold uppercase tracking-wider">Addressable</span>
              </div>
              <div className="flex flex-col xl:flex-row xl:items-end gap-1 md:gap-3">
                <span className="text-lg md:text-4xl font-semibold text-foreground leading-none">11k</span>
                <span className="flex items-center w-fit text-[8px] md:text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-1 py-0.5 md:px-1.5 rounded">
                  <IconChartTrendUpFillDuo18 className="w-2 h-2 md:w-3 md:h-3 mr-0.5" /> +12%
                </span>
              </div>
            </div>

            <div className="flex flex-col border-r border-border/50 px-3 md:px-6">
              <div className="flex items-center gap-1 md:gap-2 text-muted-foreground mb-1 md:mb-2">
                <IconImageFillDuo18 className="w-2.5 h-2.5 md:w-4 md:h-4" />
                <span className="text-[8px] md:text-xs font-semibold uppercase tracking-wider">Posts</span>
              </div>
              <div className="flex flex-col xl:flex-row xl:items-end gap-1 md:gap-3">
                <span className="text-lg md:text-4xl font-semibold text-foreground leading-none">185</span>
                <span className="flex items-center w-fit text-[8px] md:text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-1 py-0.5 md:px-1.5 rounded">
                  <IconChartTrendUpFillDuo18 className="w-2 h-2 md:w-3 md:h-3 mr-0.5" /> +8%
                </span>
              </div>
            </div>

            <div className="flex flex-col pl-3 md:pl-6">
              <div className="flex items-center gap-1 md:gap-2 text-muted-foreground mb-1 md:mb-2">
                <IconChartActivityFillDuo18 className="w-2.5 h-2.5 md:w-4 md:h-4" />
                <span className="text-[8px] md:text-xs font-semibold uppercase tracking-wider">30D</span>
              </div>
              <div className="flex items-end gap-1 md:gap-3">
                <span className="text-lg md:text-4xl font-semibold text-foreground leading-none">64%</span>
                <div className="mb-0.5 md:mb-2 h-3 md:h-6 flex items-end gap-0.5 md:gap-1 flex-1 hidden sm:flex">
                  {/* Mini sparkline */}
                  {[30, 45, 25, 60, 40, 80, 75, 100].map((h, i) => (
                    <div key={i} className="w-full bg-brand/30 rounded-t-sm transition-all hover:bg-brand" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Crossover Insights & Top Markets — side by side on mobile */}
        <div className="grid grid-cols-2 md:contents gap-2">
        <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-white md:bg-white/70 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] px-4 py-3 md:p-6 hover:shadow-[0_8px_32px_0_rgba(124,92,252,0.16)] transition-shadow">
          <h4 className="font-semibold text-xs md:text-base text-foreground flex items-center gap-1 md:gap-2 mb-2 md:mb-6">
            <IconChartTrendUpFillDuo18 className="w-3 h-3 md:w-4 md:h-4 text-purple-900" />
            Affinity
          </h4>
          <p className="text-[9px] md:text-xs text-muted-foreground mb-2 md:mb-4">Fans of <strong className="text-foreground">Kygo</strong> also buy:</p>
          <div className="space-y-2.5 md:space-y-4">
            {[
              { name: "Illenium", pct: 68 },
              { name: "Odesza", pct: 42 },
              { name: "VIP Merch", pct: 31 },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 md:gap-3">
                <span className="text-[10px] md:text-sm font-medium w-14 md:w-20 shrink-0 text-foreground truncate">{item.name}</span>
                <div className="flex-1 h-1 md:h-1.5 rounded-full bg-surface overflow-hidden">
                  <div className="h-full bg-purple-700/60 rounded-full" style={{ width: `${item.pct}%` }} />
                </div>
                <span className="text-[9px] md:text-xs font-semibold text-muted-foreground w-6 md:w-8 text-right">{item.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Markets (Col 3, Row 2) */}
        <div className="rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-white md:bg-white/70 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] px-4 py-3 md:p-6 hover:shadow-[0_8px_32px_0_rgba(124,92,252,0.16)] transition-shadow">
          <h4 className="font-semibold text-xs md:text-base text-foreground flex items-center gap-1 md:gap-2 mb-2 md:mb-6">
            <IconGlobeFillDuo18 className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
            Markets
          </h4>
          <div className="space-y-2.5 md:space-y-4">
            {[
              { city: "Los Angeles", pct: 28 },
              { city: "New York", pct: 22 },
              { city: "Chicago", pct: 15 },
              { city: "Miami", pct: 12 },
            ].map((market, i) => (
              <div key={i} className="flex items-center gap-1.5 md:gap-3">
                <span className="text-[10px] md:text-sm font-medium w-14 md:w-24 shrink-0 text-muted-foreground truncate">{market.city}</span>
                <div className="flex-1 h-1.5 md:h-2 rounded-full bg-surface overflow-hidden">
                  <div className="h-full bg-blue-500/60 rounded-full" style={{ width: `${market.pct}%` }} />
                </div>
                <span className="text-[9px] md:text-xs font-semibold text-foreground w-6 md:w-8 text-right">{market.pct}%</span>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Suggested Actions (Col 1, Row 3) */}
        <div className="hidden md:flex rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-white md:bg-white/70 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] p-4 md:p-6 hover:shadow-[0_8px_32px_0_rgba(124,92,252,0.16)] transition-shadow flex-col justify-center">
          <h4 className="font-semibold text-sm md:text-base text-foreground flex items-center gap-1.5 md:gap-2 mb-3 md:mb-5">
            <IconBoltFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500" />
            Suggested Actions
          </h4>
          <div className="space-y-2 md:space-y-3">
            <div className="p-2.5 md:p-3 rounded-xl bg-surface border border-border hover:border-amber-500/30 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-0.5 md:mb-1">
                <p className="text-xs md:text-sm font-semibold text-foreground group-hover:text-brand transition-colors">VIP Presale</p>
                <span className="text-[9px] md:text-[10px] font-semibold text-amber-600 bg-amber-50 px-1.5 md:px-2 py-0.5 rounded-full">Create segment</span>
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground">Target repeat fans</p>
            </div>
            <div className="p-2.5 md:p-3 rounded-xl bg-surface border border-border hover:border-brand/30 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-0.5 md:mb-1">
                <p className="text-xs md:text-sm font-semibold text-foreground group-hover:text-brand transition-colors">Message early birds</p>
                <span className="text-[9px] md:text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 md:px-2 py-0.5 rounded-full">127 fans</span>
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground">Target fans that get there early</p>
            </div>
          </div>
        </div>

        {/* Top Segments (Col 2 & 3, Row 3) */}
        <div className="hidden md:flex lg:col-span-2 rounded-[1.5rem] md:rounded-[2rem] border border-border/50 bg-white md:bg-white/70 md:backdrop-blur-xl shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] p-4 md:p-6 hover:shadow-[0_8px_32px_0_rgba(124,92,252,0.16)] transition-shadow flex-col">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h4 className="font-semibold text-sm md:text-base text-foreground flex items-center gap-1.5 md:gap-2">
              <IconTargetFillDuo18 className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand" />
              Top Growth Segments
            </h4>
            <button className="text-[10px] md:text-xs font-semibold text-brand hover:text-brand-dark flex items-center gap-1 transition-colors">
              View All <IconArrowRightFillDuo18 className="w-2.5 h-2.5 md:w-3 md:h-3" />
            </button>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 md:gap-y-5">
            {[
              { name: "Repeat attendees", count: "750", trend: "+14%", color: "bg-brand" },
              { name: "Frequent posters", count: "120", trend: "+8%", color: "bg-emerald-500" },
              { name: "Following 10+ other fans", count: "890", trend: "+11%", color: "bg-blue-500" },
              { name: "First-time fans", count: "200", trend: "+24%", color: "bg-purple-700" },
              { name: "Single sport fans", count: "140", trend: "-2%", color: "bg-amber-500" },
              { name: "Goes with groups", count: "1,300", trend: "+5%", color: "bg-pink-500" },
            ].map((segment, i) => (
              <div key={i} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${segment.color}`} />
                  <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{segment.name}</span>
                </div>
                <div className="text-right flex items-center sm:block gap-2">
                  <p className="text-xs md:text-sm font-semibold text-foreground">{segment.count}</p>
                  <p className="text-[9px] md:text-[10px] font-medium text-emerald-500">{segment.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
