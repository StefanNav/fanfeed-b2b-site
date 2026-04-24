export function LogoCloud() {
  const logos = [
    "ZenZap",
    "Sparkle",
    "Pulse",
    "SwiftOS",
    "TrendLyft",
    "LumoLabs",
    "Craftgram",
    "Zenith",
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Trusted by forward-thinking sports and entertainment organizations
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-base font-semibold tracking-tight text-muted-foreground/50"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
