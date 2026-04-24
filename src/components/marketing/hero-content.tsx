import { SpecialButton } from "@/components/ui/special-button";
import { FanToSegments } from "@/components/marketing/fan-to-segments";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl px-6 mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 lg:gap-8 pb-8 md:pb-12">

        {/* Left Column: Headline */}
        <div className="w-full lg:w-1/2">
          <div
            className="mb-3 flex justify-center lg:justify-start"
            style={{ animation: `hero-badge-in 0.7s ${EASE} both` }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#8780ff]/10 pl-3 pr-1.5 py-1.5 text-sm font-semibold text-[#8780ff]">
              FanFeedOS
              <span className="rounded-full bg-[#8780ff] px-1.5 pt-[2px] pb-[1px] text-[9px] font-bold uppercase tracking-wide text-white">BETA</span>
            </span>
          </div>
          <h1
            className="text-[#212123] font-semibold tracking-[-2px] md:tracking-[-3px] text-[2.75rem] leading-[3rem] sm:text-[4rem] sm:leading-[4rem] md:text-[5.5rem] md:leading-[5.5rem] lg:text-[5rem] lg:leading-[5rem] m-0 text-center lg:text-left"
            style={{ animation: `hero-fade-in-lg 1.0s ${EASE} both` }}
          >
            A richer picture of your audience
          </h1>
        </div>

        {/* Right Column: Copy & CTA */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-16 xl:pl-24">
          <p
            className="text-lg leading-relaxed text-muted md:text-xl mb-5 md:mb-8 font-normal max-w-[28rem] text-center lg:text-left"
            style={{ animation: `hero-fade-in-lg 1.0s ${EASE} 0.1s both` }}
          >
            FanFeed gives teams and performers access to richer fan profiles today, while building broader audience intelligence over time.
          </p>

          {/* CTA Button with Tight Gradient Border and Glow */}
          <div style={{ animation: `hero-fade-in-lg 1.0s ${EASE} 0.15s both` }}>
            <SpecialButton href="/contact" className="mb-3">
              Book a demo
            </SpecialButton>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto relative">
        <FanToSegments />
      </div>
    </div>
  );
}
