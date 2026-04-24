const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export function AboutHero() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#f5f5f5] to-[#faf9f7]">
      {/* Orbs Image Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="/img/bg.jpg"
          alt=""
          className="absolute left-1/2 top-0 z-0 h-auto w-[240rem] max-w-none -translate-x-1/2 mix-blend-multiply"
          style={{ width: "240rem", animation: `hero-bg-in 1s ease both` }}
          aria-hidden="true"
        />
      </div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">

            <h1
              className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-[4.5rem] lg:leading-[1.05]"
              style={{ animation: `hero-fade-in 0.8s ${EASE} 0.1s both` }}
            >
              We're shaping the future of <br className="hidden md:block" />
              <span className="text-brand">fan intelligence</span>
            </h1>

            <p
              className="mx-auto mt-3 max-w-2xl text-xl leading-relaxed text-muted"
              style={{ animation: `hero-fade-in 0.8s ${EASE} 0.2s both` }}
            >
              FanFeed helps modern sports and
              live entertainment organizations better understand and activate
              their audiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
