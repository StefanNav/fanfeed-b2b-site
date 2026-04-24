import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  IconCameraFillDuo18,
  IconLinkFillDuo18,
  IconSparkleFillDuo18,
  IconRocketFillDuo18,
  IconCoinsFillDuo18,
  IconHandshakeFillDuo18,
  IconChartTrendDownFillDuo18,
  IconUsersStarFillDuo18,
  IconOfficeFillDuo18,
  IconGraduationCapFillDuo18,
  IconShieldCheckFillDuo18,
  IconBoltLightningFillDuo18,
  IconMoneyDollarFillDuo18,
  IconDatabaseFillDuo18,
  IconCirclePlusFillDuo18,
  IconArrowRightFillDuo18,
  IconUserFillDuo18
} from "nucleo-ui-fill-duo-18";
import { SpecialButton } from "@/components/ui/special-button";

export const metadata: Metadata = {
  title: "Executive Brief | FanFeed",
  description: "Fan data infrastructure for sports, live events, and entertainment organizations.",
  robots: "noindex, nofollow" // Hidden route
};

export default function OnePager() {
  return (
    <div className="min-h-screen bg-[#fafafc] text-[#413149] font-sans selection:bg-[#7c5cfc]/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fafafc]/95 backdrop-blur-sm border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] px-6 py-4 grid grid-cols-3 items-center">
          <Link href="/" className="justify-self-start">
            <Image
              src="/svg/fanfeed-logo.svg"
              alt="FanFeed"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="hidden sm:flex text-sm font-medium text-gray-400 uppercase tracking-widest items-center gap-2 justify-self-center">
            <span>Executive Brief</span>
            <span className="text-gray-300">|</span>
            <span>Q2 2026</span>
          </div>
          <div className="justify-self-end col-start-3">
            <SpecialButton href="/">
              View Full Website
            </SpecialButton>
          </div>
        </div>
      </header>

      {/* Hero Section Container (Full width for border) */}
      <div className="w-full border-b md:-mt-20 border-gray-200 relative bg-gradient-to-b from-[#f5f5f5] to-[#f9f8f6] z-10 overflow-hidden">
        {/* Orbs Image Background — hidden on mobile for GPU perf */}
        <div className="pointer-events-none absolute inset-0 z-0 h-[220rem] w-full overflow-hidden hidden md:block">
          <img
            src="/img/bg.jpg"
            alt=""
            className="absolute left-1/2 top-0 z-0 h-auto w-[180rem] max-w-none -translate-x-1/2 opacity-80"
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto max-w-[1200px] px-6 pt-10 lg:pt-16 pb-0 relative z-10">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 items-end">
            <div className="flex-1 space-y-4 lg:space-y-5 lg:pr-8 pb-12 lg:pb-16 w-full">
              <span className="inline-block text-[#7c5cfc] font-bold tracking-widest text-[11px] uppercase">
                Fan Intelligence Platform
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-[1.15] tracking-tight text-[#2d2133] lg:max-w-2xl">
                You Know the Ticket Buyer.<br className="hidden lg:block" />
                <span className="text-gray-500">You Don't Know the Fan.</span>
              </h1>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-2xl pt-2">
                FanFeed is the fan data infrastructure for sports, live events, and
                entertainment organizations ready to own their audience.
              </p>
            </div>
            <div className="relative shrink-0 flex justify-center lg:justify-end w-full lg:w-auto -mb-px">
              {/* App Image */}
              <div className="relative w-[320px] h-[200px] sm:w-[400px] sm:h-[400px] lg:h-[420px] z-10">
                <Image 
                  src="/img/one-pager/one-pager.png" 
                  alt="FanFeed B2B Overview" 
                  fill 
                  className="object-contain object-bottom lg:object-right-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="mx-auto max-w-[1200px] px-6 pt-12">
        {/* Flow Diagram Horizontal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-6 relative z-0 w-full mb-16">
          
          {/* Top Row on Mobile, First Two Cards on Desktop */}
          <div className="flex flex-row items-stretch md:items-center justify-between gap-2 md:gap-6 w-full md:w-[65%] xl:w-[58%] shrink-0">
            <div className="bg-[#f0edff] rounded-xl md:rounded-2xl p-3 md:p-6 lg:p-5 border border-[#7c5cfc]/20 shadow-[0_4px_24px_0_rgba(124,92,252,0.05)] w-[55%] md:w-[60%] flex flex-col justify-center">
              <div className="flex items-center gap-1.5 md:gap-3 mb-2 md:mb-5 text-[#7c5cfc]">
                <IconMoneyDollarFillDuo18 className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
                <span className="font-bold text-[8.5px] md:text-[11px] lg:text-xs tracking-wider uppercase">FanFeed Proprietary Intelligence</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-6 text-[9.5px] md:text-xs lg:text-[13px] text-gray-500 leading-relaxed">
                <ul className="space-y-1.5 md:space-y-3 flex-1 list-disc pl-4 marker:text-[#7c5cfc]/40">
                  <li><span className="font-semibold text-[#2d2133]">10+ years</span> of event history</li>
                  <li>Preferences and interests</li>
                </ul>
                <ul className="space-y-1.5 md:space-y-3 flex-1 list-disc pl-4 marker:text-[#7c5cfc]/40">
                  <li>Behavioral patterns</li>
                  <li>Social engagement signals</li>
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center my-auto text-[#7c5cfc]/40 z-10 relative shrink-0">
              <div className="bg-white rounded-full p-1 shadow-sm border border-[#7c5cfc]/10 text-[#7c5cfc]">
                <IconCirclePlusFillDuo18 className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
            
            <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 lg:p-8 border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.05)] w-[40%] md:w-[35%] flex flex-col justify-center">
              <div className="flex items-center gap-1.5 md:gap-3 mb-2 md:mb-5 text-gray-600">
                <IconDatabaseFillDuo18 className="w-3.5 h-3.5 md:w-5 md:h-5 shrink-0" />
                <span className="font-bold text-[8.5px] md:text-[11px] lg:text-xs tracking-wider uppercase">Your Data Sources</span>
              </div>
              <div className="text-[9.5px] md:text-xs lg:text-[13px] text-gray-500 leading-relaxed">CRM, ticketing, merch, email, loyalty</div>
            </div>
          </div>
          
          <div className="flex justify-center -my-1 md:my-0 text-[#7c5cfc] shrink-0">
            <IconArrowRightFillDuo18 className="rotate-90 md:rotate-0 w-4 h-4 md:w-6 md:h-6" />
          </div>
          
          <div className="bg-[#8b5cf6] rounded-[1.25rem] md:rounded-2xl p-4 md:p-6 xl:p-8 w-full md:w-[30%] xl:w-[38%] flex-1 md:flex-none flex flex-row items-center justify-between gap-4 text-white shadow-[0_4px_24px_0_rgba(124,92,252,0.2)] shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0">
              <div className="bg-white/20 p-2 md:p-3 rounded-full shrink-0 text-white hidden sm:block">
                <IconUserFillDuo18 className="w-4 h-4 md:w-6 md:h-6" />
              </div>
              <div>
                <div className="font-semibold text-xs sm:text-sm md:text-lg lg:text-xl mb-0.5 md:mb-1 whitespace-nowrap">Fan Profile</div>
                <div className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-xs text-white/80 whitespace-nowrap">Complete + Unified</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 text-white shrink-0">
              <div className="flex flex-col items-center">
                <span className="font-bold text-[10px] sm:text-[13px] lg:text-base leading-none">54</span>
                <span className="text-[6px] sm:text-[8px] lg:text-[10px] text-white/70 uppercase tracking-wide mt-1">Events</span>
              </div>
              <div className="w-px h-4 sm:h-6 lg:h-8 bg-white/20"></div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[10px] sm:text-[13px] lg:text-base leading-none">4</span>
                <span className="text-[6px] sm:text-[8px] lg:text-[10px] text-white/70 uppercase tracking-wide mt-1">Teams</span>
              </div>
              <div className="w-px h-4 sm:h-6 lg:h-8 bg-white/20"></div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-[10px] sm:text-[13px] lg:text-base leading-none">12</span>
                <span className="text-[6px] sm:text-[8px] lg:text-[10px] text-white/70 uppercase tracking-wide mt-1">Artists</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <section className="grid md:grid-cols-3 gap-12 lg:gap-20 py-12 border-t border-b border-gray-200 mb-20">
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-[#2d2133] mb-4">The Challenge</h3>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
              Most fans in your venue are invisible. You know the ticket buyer, <strong>you don't know the audience.</strong> No identity, behavior, or way to reach them again.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-[#2d2133] mb-4">The Pressure</h3>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed mb-2">
              Yet teams are expected to:
            </p>
            <ul className="text-gray-500 text-sm lg:text-base leading-relaxed space-y-1 list-disc pl-5 marker:text-gray-400">
              <li>Sell more tickets with attribution</li>
              <li>Prove sponsor ROI with real data</li>
              <li>Build lifetime value beyond events</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg md:text-xl font-semibold text-[#2d2133] mb-4">The Opportunity</h3>
            <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
              Every event generates millions of signals—photos, videos, social behavior. But that data disappears into platforms you don't own. <strong>It never compounds.</strong>
            </p>
          </div>
        </section>

        {/* The FanFeed Solution */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Title, Description, and Instant Sync */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#2d2133] mb-6">The FanFeed Solution</h2>
                <p className="text-gray-500 text-[15px] lg:text-base leading-relaxed max-w-lg">
                  FanFeed unifies and enriches fan intelligence, turning fragmented signals
                  into a complete fan profile you can activate in real time.
                </p>
              </div>

              <div className="bg-white rounded-[2rem] border border-border/50 p-8 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] flex flex-col gap-4 relative">
                <span className="absolute -top-3 right-6 text-[10px] font-semibold bg-[#7c5cfc] text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Patented
                </span>
                
                <div className="flex items-center gap-3">
                  <IconBoltLightningFillDuo18 className="w-8 h-8 text-[#7c5cfc]" />
                  <h4 className="font-semibold text-lg text-[#2d2133]">Instant Sync</h4>
                </div>

                <div className="flex flex-col sm:flex-row gap-8 items-center">
                  <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed flex-1">
                    Fans download the app, sync once, and FanFeed reads their content trail going back 10+ years in seconds - providing an unprecedented look into each <strong>fan</strong>.
                  </p>
                  
                  <div className="flex items-center text-[11px] text-gray-400 whitespace-nowrap shrink-0">
                    <span className="mr-3 text-right leading-snug">
                      Every<br/>interaction<br/>becomes
                    </span>
                    
                    {/* Connection lines */}
                    <div className="flex items-center mr-3">
                      <div className="w-3 sm:w-4 h-px bg-[#e5e0ff]"></div>
                      <div className="w-px h-[72px] bg-[#e5e0ff] relative">
                        {/* Dots */}
                        <div className="absolute -left-[3px] -top-[3px] w-[7px] h-[7px] rounded-full bg-[#dcd6ff]"></div>
                        <div className="absolute -left-[3px] top-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#dcd6ff]"></div>
                        <div className="absolute -left-[3px] -bottom-[3px] w-[7px] h-[7px] rounded-full bg-[#dcd6ff]"></div>
                        
                        {/* Branches to the right */}
                        <div className="absolute top-0 left-0 w-3 sm:w-4 h-px bg-[#e5e0ff]"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3 sm:w-4 h-px bg-[#e5e0ff]"></div>
                        <div className="absolute bottom-0 left-0 w-3 sm:w-4 h-px bg-[#e5e0ff]"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-[#f5f3ff] text-[#7c5cfc] px-6 py-1.5 text-xs rounded-full font-medium text-center border border-[#e5e0ff] min-w-[120px]">Identifiable</div>
                      <div className="bg-[#f5f3ff] text-[#7c5cfc] px-6 py-1.5 text-xs rounded-full font-medium text-center border border-[#e5e0ff] min-w-[120px]">Actionable</div>
                      <div className="bg-[#7c5cfc] text-white px-6 py-1.5 text-xs rounded-full font-medium text-center shadow-md min-w-[120px]">Monetizable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Features */}
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-12 sm:gap-y-16 lg:pt-16">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[13px] sm:text-base lg:text-lg text-[#2d2133]">Capture</h4>
                  <IconCameraFillDuo18 className="w-5 h-5 sm:w-8 sm:h-8 text-[#7c5cfc]" />
                </div>
                <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                  Fan UGC turns into verified attendance history, behavioral patterns, and identity signals, all opted in at the source.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[13px] sm:text-base lg:text-lg text-[#2d2133]">Unify</h4>
                  <IconLinkFillDuo18 className="w-5 h-5 sm:w-8 sm:h-8 text-[#7c5cfc]" />
                </div>
                <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                  Resolve identities across touchpoints & data sources into complete profiles.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[13px] sm:text-base lg:text-lg text-[#2d2133]">Enrich</h4>
                  <IconSparkleFillDuo18 className="w-5 h-5 sm:w-8 sm:h-8 text-[#7c5cfc]" />
                </div>
                <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                  Add behavioral, demographic, and consumer intelligence collected from the app.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[13px] sm:text-base lg:text-lg text-[#2d2133]">Activate</h4>
                  <IconRocketFillDuo18 className="w-5 h-5 sm:w-8 sm:h-8 text-[#7c5cfc]" />
                </div>
                <p className="text-[11px] sm:text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                  Segment, target, and monetize with precision campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How FanFeed Fits */}
        <div className="mb-20">
          <h2 className="text-xl md:text-2xl font-semibold text-[#2d2133] mb-6">How FanFeed Fits</h2>
          <div className="flex flex-col sm:flex-row items-stretch gap-4">
            <div className="flex-1 bg-white rounded-[1.5rem] border border-border/50 p-6 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-2">
              <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">Standalone App</h4>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">A direct line to your fans, on your terms.</p>
            </div>
            <div className="flex-1 bg-white rounded-[1.5rem] border border-border/50 p-6 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-2">
              <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">Embedded in Your App</h4>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">Drop FanFeed into your existing app with our SDK.</p>
            </div>
            <div className="flex-1 bg-white rounded-[1.5rem] border border-border/50 p-6 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-2">
              <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">Web + Widget (UGC-Only)</h4>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">Capture fan content through a lightweight web embed.</p>
            </div>
          </div>
        </div>

        {/* What This Changes */}
        <section className="mb-20">
          <h2 className="text-xl md:text-2xl font-semibold text-[#2d2133] mb-6">What This Changes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-[1.5rem] border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#7c5cfc] w-12 h-12 rounded-[1rem] flex items-center justify-center text-white shadow-sm">
                  <IconCoinsFillDuo18 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">More Revenue</h4>
              </div>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                Convert engagement into verified ticket sales. Turn anonymous fans into known customers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-[1.5rem] border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#7c5cfc] w-12 h-12 rounded-[1rem] flex items-center justify-center text-white shadow-sm">
                  <IconHandshakeFillDuo18 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">Better Sponsorships</h4>
              </div>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                Prove and improve ROI with real fan intelligence your sponsors can trust.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[1.5rem] border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#7c5cfc] w-12 h-12 rounded-[1rem] flex items-center justify-center text-white shadow-sm">
                  <IconChartTrendDownFillDuo18 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">Lower CAC</h4>
              </div>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                Build and activate owned audiences. Stop paying to reach fans you already have.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[1.5rem] border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#7c5cfc] w-12 h-12 rounded-[1rem] flex items-center justify-center text-white shadow-sm">
                  <IconUsersStarFillDuo18 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">Fan Equity</h4>
              </div>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                Unlock value from fans who never purchased a ticket directly. Every event makes the profile stronger.
              </p>
            </div>
          </div>
        </section>

        {/* Why FanFeed / Market Shift */}
        <section className="grid lg:grid-cols-2 gap-16 mb-24 pt-10 border-t border-gray-200">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#2d2133] mb-6">Why FanFeed</h2>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-[1.5rem] border border-border/50 flex items-center gap-4 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)]">
                <IconOfficeFillDuo18 className="w-5 h-5 text-[#7c5cfc]" />
                <span className="text-sm lg:text-base font-medium text-gray-600">Built by operators who scaled a $4B ticketing platform</span>
              </div>
              <div className="bg-white p-4 rounded-[1.5rem] border border-border/50 flex items-center gap-4 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)]">
                <IconGraduationCapFillDuo18 className="w-5 h-5 text-[#7c5cfc]" />
                <span className="text-sm lg:text-base font-medium text-gray-600">MIT / Palantir / Google engineering team</span>
              </div>
              <div className="bg-white p-4 rounded-[1.5rem] border border-border/50 flex items-center gap-4 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)]">
                <IconShieldCheckFillDuo18 className="w-5 h-5 text-[#7c5cfc]" />
                <span className="text-sm lg:text-base font-medium text-gray-600">Designed for events, not adapted from other industries</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-[#2d2133] mb-6">The Market Shift</h2>
            <p className="text-sm lg:text-base text-gray-600 mb-4">
              The next generation of sports and entertainment brands will:
            </p>
            <ul className="text-sm lg:text-base text-gray-600 space-y-2 list-disc pl-5 mb-6 marker:text-gray-400">
              <li><strong>Own their audience</strong> — not rent from platforms</li>
              <li><strong>Activate first-party intelligence</strong> — compliant and durable</li>
              <li><strong>Monetize engagement</strong> — not just transactions</li>
            </ul>
            <p className="text-sm lg:text-base font-semibold text-[#2d2133] mb-6">
              FanFeed is the infrastructure that makes this possible.
            </p>
          </div>
        </section>
      </div>

      {/* Footer CTA Area */}
      <footer className="bg-[#f0edff] relative overflow-hidden">
        
        {/* Full-width Logo Mask with Gradient Orbs Background */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <div 
            className="w-[200%] md:w-[120%] h-[80%] md:h-[120%] opacity-80 md:opacity-100 relative"
            style={{
              maskImage: 'url(/svg/fanfeed-logo.svg)',
              maskSize: 'contain',
              maskPosition: 'center',
              maskRepeat: 'no-repeat',
              WebkitMaskImage: 'url(/svg/fanfeed-logo.svg)',
              WebkitMaskSize: 'contain',
              WebkitMaskPosition: 'center',
              WebkitMaskRepeat: 'no-repeat',
            }}
          >
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-0 w-[50%] h-[100%] bg-[#E9E4FB] rounded-full filter blur-2xl md:blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[#FCDEF7] rounded-full filter blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-[25%] w-[50%] h-[100%] bg-[#F2EFF0] rounded-full filter blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
          <div className="w-full md:w-auto">
            <h2 className="text-2xl font-semibold text-[#2d2133] mb-2 mx-auto md:mx-0 max-w-sm">Get to know your fans. Starting today.</h2>
            <p className="text-gray-500 text-sm">Start converting engagement into owned revenue</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-8 w-full md:w-auto mt-4 md:mt-0">
            <SpecialButton href="/contact" size="default">
              Request Demo
            </SpecialButton>
            <div className="text-sm text-center md:text-left">
              <span className="text-gray-500 block mb-1">Contact</span>
              <a href="mailto:support@fanfeed.ai" className="text-[#7c5cfc] font-medium hover:underline">
                support@fanfeed.ai
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-[#7c5cfc]/10 relative z-10">
          <div className="mx-auto max-w-[1200px] px-6 py-6 flex items-center justify-between text-xs text-gray-400">
            <span>Confidential</span>
            <span>fanfeed.ai</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
