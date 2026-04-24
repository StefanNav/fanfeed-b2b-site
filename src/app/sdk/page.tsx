import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  IconFeatherFillDuo18,
  IconShieldKeyFillDuo18,
  IconWindowPointerFillDuo18,
  IconGamingBlocksFillDuo18,
  IconClockFillDuo18,
  IconCubeFillDuo18,
  IconChartTrendUpFillDuo18,
  IconSparkleFillDuo18,
} from "nucleo-ui-fill-duo-18";
import { SpecialButton } from "@/components/ui/special-button";

export const metadata: Metadata = {
  title: "SDK Brief | FanFeed",
  description: "FanFeed plugs directly into your app. Lightweight SDK, no rebuild, live in days.",
  robots: "noindex, nofollow"
};

export default function SdkOnePager() {
  return (
    <div className="min-h-screen bg-[#fafafc] text-[#413149] font-sans selection:bg-[#7c5cfc]/20">
      {/* ── Header ── */}
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
            <span>SDK Brief</span>
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

      {/* ── Hero ── */}
      <div className="w-full border-b border-gray-200 relative bg-gradient-to-b from-[#f5f5f5] to-[#f9f8f6] z-10 overflow-hidden">
        {/* Orbs Background */}
        <div className="pointer-events-none absolute inset-0 z-0 h-[220rem] w-full overflow-hidden hidden md:block">
          <img
            src="/img/bg.jpg"
            alt=""
            className="absolute left-1/2 top-0 z-0 h-auto w-[180rem] max-w-none -translate-x-1/2 opacity-80"
            aria-hidden="true"
          />
        </div>
        <div className="mx-auto max-w-[1200px] px-6 pt-10 lg:pt-16 pb-0 relative z-10">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-12 items-center">
            {/* Text */}
            <div className="flex-1 space-y-4 lg:space-y-5 lg:pr-8 pb-12 lg:pb-16 w-full">
              <span className="inline-block text-[#7c5cfc] font-bold tracking-widest text-[11px] uppercase">
                Embedded SDK
              </span>
              <p className="text-base lg:text-lg text-gray-500 leading-relaxed max-w-xl">
                You have an app, but it doesn't capture who your fans are.
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-semibold leading-[1.15] tracking-tight text-[#2d2133] lg:max-w-2xl">
                FanFeed plugs directly into your app. No rebuild.
              </h1>
            </div>
            {/* Visual */}
            <div className="relative shrink-0 flex justify-center lg:justify-end w-full lg:w-auto -mb-px mt-[-10px] sm:mt-[-20px] lg:mt-[-30px]">
              <div className="relative w-[280px] h-[185px] sm:w-[400px] sm:h-[300px] lg:w-[470px] lg:h-[370px] z-10">
                <Image
                  src="/img/SDK_Hero2.png"
                  alt="FanFeed embedded inside a partner app"
                  fill
                  className="object-contain object-bottom lg:object-right-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content Container ── */}
      <div className="mx-auto max-w-[1200px] px-6 pt-16">

        {/* ── Section: What You Get ── */}
        <section className="mb-20">
          <h2 className="text-xl md:text-2xl font-semibold text-[#2d2133] mb-8">What You Get</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Product */}
            <div className="bg-white rounded-2xl border border-border/50 p-6 lg:p-8 shadow-[0_4px_24px_0_rgba(124,92,252,0.08)] space-y-5">
              <span className="inline-flex items-center gap-2 text-[#7c5cfc] bg-[#f0edff] border border-[#7c5cfc]/20 font-bold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full">
                <IconCubeFillDuo18 className="w-4 h-4" />
                Product
              </span>
              <ul className="space-y-4 text-sm lg:text-[15px] text-gray-500 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7c5cfc] shrink-0"></span>
                  Complete fan timelines going back 10+ years
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7c5cfc] shrink-0"></span>
                  Verified event attendance history
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7c5cfc] shrink-0"></span>
                  Content engagement and social behavior signals
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#7c5cfc] shrink-0"></span>
                  Team and artist affinity scoring
                </li>
              </ul>
            </div>

            {/* Business */}
            <div className="bg-white rounded-2xl border border-border/50 p-6 lg:p-8 shadow-[0_4px_24px_0_rgba(124,92,252,0.08)] space-y-5">
              <span className="inline-flex items-center gap-2 text-[#0d9488] bg-[#e6f7f5] border border-[#0d9488]/20 font-bold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full">
                <IconChartTrendUpFillDuo18 className="w-4 h-4" />
                Business
              </span>
              <ul className="space-y-4 text-sm lg:text-[15px] text-gray-500 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0d9488] shrink-0"></span>
                  Richer, unified profiles beyond the ticket buyer
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0d9488] shrink-0"></span>
                  Smart segmentation by behavior, LTV, and loyalty
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0d9488] shrink-0"></span>
                  Sponsor ROI data you can actually stand behind
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0d9488] shrink-0"></span>
                  First-party intelligence you own, not rented
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-2xl border border-border/50 p-6 lg:p-8 shadow-[0_4px_24px_0_rgba(124,92,252,0.08)] space-y-5">
              <span className="inline-flex items-center gap-2 text-[#22c55e] bg-[#edfcf2] border border-[#22c55e]/20 font-bold text-[11px] uppercase tracking-wider px-4 py-1.5 rounded-full">
                <IconSparkleFillDuo18 className="w-4 h-4" />
                Experience
              </span>
              <ul className="space-y-4 text-sm lg:text-[15px] text-gray-500 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0"></span>
                  Fully branded, fans never leave your app
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0"></span>
                  Native module, your design system
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0"></span>
                  Modular rollout, start with what makes sense
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#22c55e] shrink-0"></span>
                  Opt-in by design, fans choose to share
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Section: Integration (Key Section) ── */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block text-[#7c5cfc] font-bold tracking-widest text-[11px] uppercase mb-3">
              Integration
            </span>
            <h2 className="text-xl md:text-2xl font-semibold text-[#2d2133] mb-3">
              Built to drop in, not disrupt.
            </h2>
            <p className="text-gray-500 text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
              FanFeed is designed to work inside your existing app architecture.<br />
              No forks, no rewrites, no new login flows.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-[1.5rem] border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#7c5cfc] w-12 h-12 rounded-[1rem] flex items-center justify-center text-white shadow-sm">
                  <IconFeatherFillDuo18 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">Lightweight SDK</h4>
              </div>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                Small footprint, no bloat. Installs in minutes, runs without overhead.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[1.5rem] border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#7c5cfc] w-12 h-12 rounded-[1rem] flex items-center justify-center text-white shadow-sm">
                  <IconShieldKeyFillDuo18 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">Works with Existing Auth</h4>
              </div>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                No new login flow. Hooks into your current authentication seamlessly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[1.5rem] border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#7c5cfc] w-12 h-12 rounded-[1rem] flex items-center justify-center text-white shadow-sm">
                  <IconWindowPointerFillDuo18 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">No UX Disruption</h4>
              </div>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                Drops in as a native module. Your users won't feel a seam.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[1.5rem] border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#7c5cfc] w-12 h-12 rounded-[1rem] flex items-center justify-center text-white shadow-sm">
                  <IconGamingBlocksFillDuo18 className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-base lg:text-lg text-[#2d2133]">Modular Rollout</h4>
              </div>
              <p className="text-[13px] lg:text-[15px] text-gray-500 leading-relaxed">
                Ship one feature at a time. Start small, expand when ready.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section: Time to Value ── */}
        <section className="mb-20">
          <div className="bg-white rounded-[2rem] border border-border/50 shadow-[0_4px_24px_0_rgba(124,92,252,0.10)] py-14 px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <IconClockFillDuo18 className="w-6 h-6 text-[#7c5cfc]" />
              <span className="text-[#7c5cfc] font-bold tracking-widest text-[11px] uppercase">
                Time to Value
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2d2133] mb-4 tracking-tight">
              Live in 2-4 days
            </h2>
            <p className="text-gray-500 text-base lg:text-lg max-w-md mx-auto leading-relaxed">
              From SDK install to first fan profile. No months long integration cycles.
            </p>
          </div>
        </section>

      </div>

      {/* ── Footer CTA ── */}
      <footer className="bg-[#f0edff] relative overflow-hidden">
        {/* Logo Mask with Gradient Orbs Background */}
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
            <div className="absolute top-0 left-0 w-[50%] h-[100%] bg-[#E9E4FB] rounded-full filter blur-2xl md:blur-3xl animate-pulse"></div>
            <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[#FCDEF7] rounded-full filter blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 left-[25%] w-[50%] h-[100%] bg-[#F2EFF0] rounded-full filter blur-2xl md:blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">
          <div className="w-full md:w-auto">
            <h2 className="text-2xl font-semibold text-[#2d2133] mb-2 mx-auto md:mx-0 max-w-sm">
              Keep your app. Add the missing layer.
            </h2>
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
