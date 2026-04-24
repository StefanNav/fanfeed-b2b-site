import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroDashboard({ className }: { className?: string }) {
  const segments = 22;
  const filled = 17;

  return (
    <div className={cn("relative flex items-center justify-center w-full h-[320px] sm:h-[540px] overflow-hidden sm:overflow-visible", className)} aria-hidden="true" role="img">
      <video
        ref={null}
        src={'/mp4/sparkle.mp4'}
        preload="metadata"
        muted
        loop
        playsInline
        autoPlay
        className="absolute z-0 -top-12 left-2 -rotate-[20deg] w-48 h-48 md:w-80 md:h-80 hue-rotate-[300deg] brightness-50 saturate-75 object-contain transition-transform duration-700 group-hover:scale-105"
      />
      <video
        ref={null}
        src={'/mp4/sparkle.mp4'}
        preload="metadata"
        muted
        loop
        playsInline
        autoPlay
        className="absolute z-0 -bottom-2 right-2 rotate-[20deg] w-48 h-48 md:w-80 md:h-80 hue-rotate-[300deg] brightness-50 saturate-75 object-contain transition-transform duration-700 group-hover:scale-105"
      />
      <div className="relative w-[520px] h-[540px] scale-[0.55] sm:scale-100 origin-center">
        {/* ═══ Blue / teal glow blob — behind everything ═══ */}
        {/* <div className="absolute right-[10%] bottom-[10%] z-0 h-[320px] w-[420px] rounded-full bg-[#14b8a600] blur-[100px]" /> */}

        {/* ═══ Back card — "Fan report", tilted, upper-right ═══ */}
        <div
          className="absolute -top-1 right-[-40px] z-10 w-[370px] rounded-2xl border border-white/40 bg-white/80 p-5 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.10)] backdrop-blur-xl transition-all hover:scale-105 hover:shadow-[0_16px_60px_-10px_rgba(0,0,0,0.15)]"
          style={{ transform: "rotate(3deg)" }}
        >
          {/* Header row */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-1">
                <p className="text-sm font-semibold text-foreground">Fan report</p>
                <span className="mt-0.5 rounded-full bg-brand-muted px-2.5 py-0.5 text-[10px] font-semibold text-brand">
                  Daily
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">Your daily analytics & UGC report</p>
            </div>
            <Image src="/img/people.png" alt="Fan content 4" width={80} height={80} className="w-20 h-20 -mb-20 hue-rotate-[300deg] brightness-50 saturate-75 object-cover" />

          </div>

          {/* Stat pills */}
          <div className="mt-4 flex gap-2">
            {[
              { val: "122 uploads", bg: "bg-brand/10", fg: "text-brand" },
              { val: "+12% new", bg: "bg-success/10", fg: "text-success" },
            ].map((p) => (
              <div key={p.val} className={cn("rounded-lg px-3 py-1.5 shadow-sm ring-1 ring-inset ring-black/5", p.bg)}>
                <span className={cn("text-xs font-semibold", p.fg)}>{p.val}</span>
              </div>
            ))}
          </div>

          {/* Striped data rows */}
          <div className="mt-4 space-y-[6px]">
            {[80, 60, 90, 50, 72].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                {/* Avatar circle */}
                <div className="h-5 w-5 shrink-0 rounded-full bg-gradient-to-br from-brand-light to-brand shadow-inner" />
                <div className="h-[6px] flex-1 rounded-full bg-surface">
                  <div
                    className="h-[6px] rounded-full bg-gradient-to-r from-brand to-brand-dark"
                    style={{ width: `${w}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ═══ Front card — "User Profile" styled like fan-to-segments ═══ */}
        <div className="absolute top-[90px] left-0 z-20 w-[400px] rounded-[2rem] border border-border/50 bg-white p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all hover:scale-[1.02] overflow-hidden group">
          {/* Decorative gradient top */}
          {/* <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand/5 to-transparent" /> */}

          <div className="relative flex flex-col">
            {/* Avatar & Name Row */}
            <div className="flex items-center gap-3">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full border-2 border-white shadow-md overflow-hidden bg-surface flex items-center justify-center">
                  <Image src="/img/ugc/ugc4.png" alt="Mike" width={48} height={48} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-brand-dark text-white text-[9px] font-semibold px-1 py-0.5 rounded-full border-[1.5px] border-white shadow-sm flex items-center gap-0.5">
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  88
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground leading-tight">Mike</h3>
                <p className="text-xs font-medium text-muted uppercase tracking-wider">28M - Chicago, IL</p>
              </div>
            </div>

            {/* UGC Image Grid */}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-1/4 aspect-[3/4] rounded-xl overflow-hidden border-2 border-white shadow-sm -rotate-2">
                <Image src="/img/ugc/ugc2.png" alt="Fan content 1" width={120} height={160} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/4 aspect-square rounded-xl overflow-hidden border-2 border-white shadow-sm rotate-1">
                <Image src="/img/ugc/ugc4.png" alt="Fan content 2" width={120} height={120} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/4 aspect-[4/5] rounded-xl overflow-hidden border-2 border-white shadow-sm -rotate-1">
                <Image src="/img/ugc/ugc1.png" alt="Fan content 3" width={120} height={150} className="w-full h-full object-cover" />
              </div>
              <div className="w-1/4 aspect-[3/4] rounded-xl overflow-hidden border-2 border-white shadow-sm rotate-2">
                <Image src="/img/ugc/ugc3.png" alt="Fan content 4" width={120} height={160} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Metadata Badges */}
            <div className="flex flex-wrap mx-auto gap-1.5 mt-4">
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-dark/10 border border-brand-dark/20 text-brand-dark text-[10px] font-medium">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" /></svg>
                VIP Access
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-success/10 border border-success/20 text-success text-[10px] font-medium">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                High spender
              </div>
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-purple-200/50/50 border border-purple-200 text-purple-900 text-[10px] font-medium">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
                Loyal fan
              </div>
            </div>

            <div className="border bg-surface/30 border-border/70 mt-4 rounded-md px-3 py-2 text-xs flex flex-row items-center justify-between">
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                <p className='font-medium'>
                  Looking for playoff tickets
                </p>
              </div>
              <p className='font-medium text-brand'>
                View concierge
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 w-full mt-4 pt-4 border-t border-border/50">
              <div className="text-center">
                <p className="text-xs text-muted-foreground font-medium mb-1">Events</p>
                <p className="text-lg font-semibold text-foreground">8</p>
              </div>
              <div className="text-center border-l border-border/50">
                <p className="text-xs text-muted-foreground font-medium mb-1">Favorite</p>
                <p className="text-lg font-semibold text-foreground">Playoffs</p>
              </div>
              <div className="text-center border-l border-border/50">
                <p className="text-xs text-muted-foreground font-medium mb-1">LTV</p>
                <p className="text-lg font-semibold text-foreground">$2.1k</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ Avatar card — bottom-right, floating ═══ */}
        <div className="absolute right-14 bottom-12 z-30 flex h-[90px] w-[90px] items-center justify-center overflow-hidden rounded-2xl border border-white/40 bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl transition-transform hover:-translate-y-1">
            <Image src="/img/world.png" alt="Fan content 4" width={80} height={80} className="w-20 h-20 hue-rotate-[300deg] brightness-50 saturate-75 object-cover" />
        </div>
      </div>
    </div>
  );
}
