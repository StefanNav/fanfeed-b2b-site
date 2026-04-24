import React from "react";
import {
  IconHistoryFillDuo18,
  IconHeartFillDuo18,
  IconChartActivityFillDuo18,
  IconShareRightFillDuo18,
  IconTicketFillDuo18,
  IconBagShoppingFillDuo18,
  IconMessageFillDuo18,
  IconArrowRightFillDuo18,
  IconCrownFillDuo18,
  IconRepeat2FillDuo18,
  IconVipBadgeFillDuo18,
  IconChartTrendUpFillDuo18,
  IconSparkleFillDuo18,
  IconShirtSportFillDuo18,
  IconImageSparkle3FillDuo18,
  IconStarFillDuo18,
} from "nucleo-ui-fill-duo-18";
import Image from "next/image";

export function FanToSegments() {
  return (
    <div className="w-full max-w-7xl mx-auto py-4 md:py-12 px-4 sm:px-6 relative flex flex-col lg:flex-row items-center justify-between gap-3 md:gap-5 lg:gap-0" aria-hidden="true" role="img">

      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-brand/10 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-peach/10 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2" />

      {/* 1. Left: Data Sources */}
      <div 
        className="relative z-10 grid grid-cols-2 lg:grid-cols-1 gap-2.5 md:gap-6 w-full max-w-sm md:max-w-[280px] shrink-0"
        style={{ animation: "hero-slide-left 1.0s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
      >
        {/* FanFeed Proprietary Data */}
        <div className="rounded-xl md:rounded-2xl border border-black/5 bg-white md:bg-white/80 md:backdrop-blur-xl p-2.5 md:p-5 shadow-xl shadow-violet-300/20 relative -rotate-1">
          <h3 className="text-[0.55rem] md:text-[0.65rem] font-semibold uppercase tracking-widest text-[#8780ff] mb-1.5 md:mb-4 flex items-center gap-1">
            <IconSparkleFillDuo18 className="w-2.5 h-2.5 md:w-3 md:h-3" />
            Our app data
          </h3>
          <ul className="space-y-1.5 md:space-y-3.5">
            {[
              { text: "10+ years of event history", icon: IconHistoryFillDuo18 },
              { text: "Preferences and interests", icon: IconHeartFillDuo18 },
              { text: "Behavioral patterns", icon: IconChartActivityFillDuo18 },
              { text: "Social engagement signals", icon: IconShareRightFillDuo18, mobileHidden: true }
            ].map((item, i) => (
              <li key={i} className={`${item.mobileHidden ? 'hidden md:flex' : 'flex'} items-center gap-1.5 md:gap-3 text-[0.65rem] md:text-sm text-[#333333]`}>
                <div className="flex h-4 w-4 md:h-6 md:w-6 shrink-0 items-center justify-center rounded-full bg-[#8780ff]/10">
                  <item.icon className="h-2 w-2 md:h-3 md:w-3 text-[#8780ff]" />
                </div>
                <span className="leading-tight font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Your Data Sources */}
        <div className="rounded-xl md:rounded-2xl border border-black/5 bg-white md:bg-white/80 md:backdrop-blur-xl p-2.5 md:p-5 shadow-xl shadow-violet-300/20 relative rotate-1">
          <h3 className="text-[0.55rem] md:text-[0.65rem] font-semibold uppercase tracking-widest text-foreground mb-1.5 md:mb-4">
            Your Data
          </h3>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {["CRM", "Ticketing", "Merch", "Email", "Loyalty"].map((tag, i) => (
              <span key={i} className="inline-flex items-center rounded-full bg-[#f4f4f5] border border-black/5 px-2 py-0.5 md:px-3 md:py-1.5 text-[0.6rem] md:text-[0.7rem] font-medium text-[#212123]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Connection Lines — Mobile (vertical) */}
      <div
        className="flex lg:hidden w-full justify-center h-8 relative pointer-events-none z-10 -my-1 -mt-4"
        style={{ animation: "hero-fade-only 1.2s ease 0.4s both" }}
      >
        <svg className="w-24 h-full overflow-visible" viewBox="0 0 100 32" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="line-gradient-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e5e5e5" />
              <stop offset="100%" stopColor="#8780ff" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path d="M 30 0 C 30 16, 50 16, 50 32" fill="none" stroke="url(#line-gradient-mobile)" strokeWidth="1.5" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" className="animate-[dash_20s_linear_infinite]" />
          <path d="M 70 0 C 70 16, 50 16, 50 32" fill="none" stroke="url(#line-gradient-mobile)" strokeWidth="1.5" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" className="animate-[dash_20s_linear_infinite]" />
          <circle cx="50" cy="32" r="2.5" fill="#8780ff" />
          <circle cx="50" cy="32" r="5" fill="#8780ff" fillOpacity="0.2" className="animate-pulse" />
        </svg>
      </div>

      {/* Connection Lines 1 (Desktop only) */}
      <div 
        className="hidden lg:block flex-1 h-[400px] min-w-[40px] relative pointer-events-none z-0 -mx-2"
        style={{ animation: "hero-fade-only 1.2s ease 0.4s both" }}
      >
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e5e5e5" />
              <stop offset="100%" stopColor="#8780ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          
          {/* Main lines */}
          <path d="M 0 35 C 50 35, 50 50, 100 50" fill="none" stroke="url(#line-gradient-1)" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-dash" />
          <path d="M 0 75 C 50 75, 50 50, 100 50" fill="none" stroke="url(#line-gradient-1)" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-dash" />
          
          {/* Inner fanning lines (thinner, fainter) */}
          <path d="M 0 43 C 50 43, 50 50, 100 50" fill="none" stroke="url(#line-gradient-1)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />
          <path d="M 0 51 C 50 51, 50 50, 100 50" fill="none" stroke="url(#line-gradient-1)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />
          <path d="M 0 59 C 50 59, 50 50, 100 50" fill="none" stroke="url(#line-gradient-1)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />
          <path d="M 0 67 C 50 67, 50 50, 100 50" fill="none" stroke="url(#line-gradient-1)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />

          <circle cx="100" cy="50" r="3" fill="#8780ff" />
          <circle cx="100" cy="50" r="6" fill="#8780ff" fillOpacity="0.2" className="animate-pulse" />
        </svg>
      </div>

      {/* 2. Middle: Unified Fan Profile */}
      <div 
        className="relative z-10 w-full max-w-sm md:max-w-[340px] shrink-0"
        style={{ animation: "hero-fade-in-lg 1.0s cubic-bezier(0.16,1,0.3,1) 0.2s both" }}
      >
        {/* Overhanging Badge */}
        <div className="absolute -top-2 right-4 md:-top-3 md:right-6 z-30">
          <span className="inline-flex items-center rounded-full bg-[#8780ff] px-2 py-0.5 md:px-3 md:py-1 text-[0.6rem] md:text-xs font-medium text-white shadow-sm border border-white/20">
            <Image src="/svg/fanfeed-icon.svg" alt="FanFeed" width={12} height={12} className="mr-1 md:mr-1.5 h-2.5 w-2.5 md:h-3 md:w-3 brightness-0 invert" />
            Fan profile
          </span>
        </div>

        <div className="rounded-[1.25rem] md:rounded-[2rem] border border-border/50 bg-white md:bg-white/80 md:backdrop-blur-xl shadow-xl shadow-violet-300/40 p-3 md:p-6 relative overflow-hidden group">
          {/* Decorative gradient top */}
          <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-brand/5 to-transparent" />

          <div className="relative flex flex-col">
            {/* Avatar & Name Row */}
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-md overflow-hidden">
                  <Image src="/img/ugc/ugc3.png" alt="Sarah" width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-brand-dark text-white text-[7px] md:text-[9px] font-semibold px-1 py-0.5 rounded-full border-[1.5px] border-white shadow-sm flex items-center gap-0.5">
                  <IconStarFillDuo18 className="w-2 h-2 md:w-2.5 md:h-2.5 fill-current" />
                  94
                </div>
              </div>
              <div>
                <h3 className="text-sm md:text-base font-semibold text-foreground leading-tight">Sarah</h3>
                <p className="text-[9px] md:text-xs font-medium text-muted uppercase tracking-wider">31F - Boston, MA</p>
              </div>
            </div>

            {/* UGC Image Grid */}
            <div className="flex items-center gap-1.5 md:gap-2 mt-3 md:mt-4">
              <div className="w-1/4 aspect-[3/4] rounded-lg md:rounded-xl overflow-hidden border-2 border-white shadow-sm -rotate-2">
                <Image src="/img/ugc/ugc1.png" alt="Fan content 1" width={120} height={160} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/4 aspect-square rounded-lg md:rounded-xl overflow-hidden border-2 border-white shadow-sm rotate-1">
                <Image src="/img/ugc/ugc2.png" alt="Fan content 2" width={120} height={120} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/4 aspect-[4/5] rounded-lg md:rounded-xl overflow-hidden border-2 border-white shadow-sm -rotate-1">
                <Image src="/img/ugc/ugc3.png" alt="Fan content 3" width={120} height={150} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/4 aspect-[3/4] rounded-lg md:rounded-xl overflow-hidden border-2 border-white shadow-sm rotate-2">
                <Image src="/img/ugc/ugc4.png" alt="Fan content 4" width={120} height={160} className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Metadata Badges */}
            <div className="hidden md:flex flex-wrap mx-auto gap-1 md:gap-1.5 mt-3 md:mt-4">
              <div className="flex items-center gap-0.5 md:gap-1 px-1.5 md:px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[8px] md:text-[10px] font-medium">
                <IconTicketFillDuo18 className="w-2 h-2 md:w-2.5 md:h-2.5" />
                Prem. seats
              </div>
              <div className="flex items-center gap-0.5 md:gap-1 px-1.5 md:px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[8px] md:text-[10px] font-medium">
                <IconBagShoppingFillDuo18 className="w-2 h-2 md:w-2.5 md:h-2.5" />
                Concessions
              </div>
              <div className="flex items-center gap-0.5 md:gap-1 px-1.5 md:px-2 py-0.5 rounded-full bg-purple-200/50/50 border border-purple-200 text-purple-900 text-[8px] md:text-[10px] font-medium">
                <IconHeartFillDuo18 className="w-2 h-2 md:w-2.5 md:h-2.5" />
                3 teams
              </div>
            </div>
            <div className="hidden md:flex border bg-surface/30 border-border/70 mt-4 rounded-md px-3 py-2 text-xs flex-row items-center justify-between">
              <div className="flex items-center gap-1">
                <IconMessageFillDuo18 className="w-2 h-2 md:w-3 md:h-3" />
                <p className='font-medium'>
                  Asked about Kygo event
                </p>
              </div>
              <p className='font-medium'>
                View concierge
              </p>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 w-full mt-2 md:mt-4 pt-2 md:pt-4 border-t border-border/50">
              <div className="text-center">
                <p className="text-[9px] md:text-xs text-muted-foreground font-medium mb-0.5 md:mb-1">Events</p>
                <p className="text-sm md:text-lg font-semibold text-foreground">12</p>
              </div>
              <div className="text-center border-l border-border/50">
                <p className="text-[9px] md:text-xs text-muted-foreground font-medium mb-0.5 md:mb-1">Favorite</p>
                <p className="text-sm md:text-lg font-semibold text-foreground">Festival</p>
              </div>
              <div className="text-center border-l border-border/50">
                <p className="text-[9px] md:text-xs text-muted-foreground font-medium mb-0.5 md:mb-1">LTV</p>
                <p className="text-sm md:text-lg font-semibold text-foreground">$1.4k</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Node Left (Desktop) */}
        <div className="hidden lg:flex absolute top-1/2 -left-4 w-8 h-8 rounded-full border-4 border-white bg-brand-dark shadow-lg shadow-violet-300/20 items-center justify-center -translate-y-1/2 z-20">
          <IconArrowRightFillDuo18 className="w-4 h-4 text-white" />
        </div>

        {/* Connection Node Right (Desktop) */}
        <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 rounded-full border-4 border-white bg-brand-dark shadow-lg shadow-violet-300/20 items-center justify-center -translate-y-1/2 z-20">
          <IconArrowRightFillDuo18 className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Connection Lines 2 (Desktop only) */}
      <div 
        className="hidden lg:block flex-1 h-[400px] min-w-[40px] relative pointer-events-none z-0 -mx-2"
        style={{ animation: "hero-fade-only 1.2s ease 0.4s both" }}
      >
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8780ff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#e5e5e5" />
            </linearGradient>
          </defs>
          
          {/* Main output lines */}
          <path d="M 0 50 C 30 50, 50 15, 100 15" fill="none" stroke="url(#line-gradient-2)" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-dash" />
          <path d="M 0 50 C 40 50, 60 50, 100 50" fill="none" stroke="url(#line-gradient-2)" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-dash" />
          <path d="M 0 50 C 30 50, 50 85, 100 85" fill="none" stroke="url(#line-gradient-2)" strokeWidth="2" strokeDasharray="6 6" vectorEffect="non-scaling-stroke" className="animate-dash" />
          
          {/* Inner fanning output lines (thinner, fainter) */}
          <path d="M 0 50 C 35 50, 50 23, 100 23" fill="none" stroke="url(#line-gradient-2)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />
          <path d="M 0 50 C 35 50, 50 32, 100 32" fill="none" stroke="url(#line-gradient-2)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />
          <path d="M 0 50 C 35 50, 50 41, 100 41" fill="none" stroke="url(#line-gradient-2)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />
          <path d="M 0 50 C 35 50, 50 59, 100 59" fill="none" stroke="url(#line-gradient-2)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />
          <path d="M 0 50 C 35 50, 50 68, 100 68" fill="none" stroke="url(#line-gradient-2)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />
          <path d="M 0 50 C 35 50, 50 77, 100 77" fill="none" stroke="url(#line-gradient-2)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="8 4" vectorEffect="non-scaling-stroke" className="animate-dash2" />

          <circle cx="0" cy="50" r="3" fill="#8780ff" />
          <circle cx="0" cy="50" r="6" fill="#8780ff" fillOpacity="0.2" className="animate-pulse" />
        </svg>
      </div>

      {/* 3. Right: Segments */}
      <div 
        className="relative z-10 w-full max-w-[300px] hidden lg:flex flex-col gap-2.5 md:gap-4 mt-2 md:mt-0 shrink-0"
        style={{ animation: "hero-slide-right 1.0s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
      >

        {/* Top pair */}
        <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 lg:translate-x-8">
          <div className="flex-1 rounded-xl md:rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-3 shadow-lg shadow-violet-300/20 hover:shadow-md hover:border-brand/30 transition-all group flex flex-col items-start gap-2 cursor-pointer -rotate-1">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full md:rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <IconCrownFillDuo18 className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-xs md:text-sm">Premium buyers</p>
            </div>
          </div>
          <div className="flex-1 rounded-xl md:rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-3 shadow-lg shadow-violet-300/20 hover:shadow-md hover:border-brand/30 transition-all group flex flex-col items-start gap-2 cursor-pointer rotate-1">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full md:rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <IconRepeat2FillDuo18 className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-xs md:text-sm">Repeat attendees</p>
            </div>
          </div>
        </div>

        {/* Middle pair */}
        <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 lg:-translate-x-4 z-10 relative">

          <div className="flex-1 rounded-xl md:rounded-2xl border border-border/50 bg-white p-4 shadow-lg shadow-violet-300/20 hover:shadow-lg border-brand/20 transition-all group flex flex-col items-start gap-2 cursor-pointer rotate-1">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-dark/10 text-brand-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <IconVipBadgeFillDuo18 className="w-4 h-4 md:w-6 md:h-6" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-xs md:text-sm">VIP candidates</p>
            </div>
          </div>
          <div className="flex-1 rounded-xl md:rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-3 shadow-lg shadow-violet-300/20 hover:shadow-md hover:border-brand/30 transition-all group flex flex-col items-start gap-2 cursor-pointer -rotate-1">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full md:rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <IconChartTrendUpFillDuo18 className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-xs md:text-sm">Likely to convert</p>
            </div>
          </div>
        </div>

        {/* Bottom pair */}
        <div className="flex flex-col sm:flex-row gap-2.5 md:gap-4 lg:translate-x-8">
          <div className="flex-1 rounded-xl md:rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-3 shadow-lg shadow-violet-300/20 hover:shadow-md hover:border-brand/30 transition-all group flex flex-col items-start gap-2 cursor-pointer rotate-1">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full md:rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <IconShirtSportFillDuo18 className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-xs md:text-sm">Merch loyalists</p>
            </div>
          </div>
          <div className="flex-1 rounded-xl md:rounded-2xl border border-border/50 bg-white/80 backdrop-blur-sm p-3 shadow-lg shadow-violet-300/20 hover:shadow-md hover:border-brand/30 transition-all group flex flex-col items-start gap-2 cursor-pointer -rotate-1">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full md:rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <IconImageSparkle3FillDuo18 className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-xs md:text-sm">UGC potential</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
