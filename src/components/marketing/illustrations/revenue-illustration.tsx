export function RevenueIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Per-bar vertical gradients: color at bottom, lighter at top */}
        <linearGradient id="rev-bar1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D4CAFC" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#D4CAFC" stopOpacity="0.20" />
        </linearGradient>
        <linearGradient id="rev-bar2" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C4B8F8" stopOpacity="0.60" />
          <stop offset="100%" stopColor="#C4B8F8" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="rev-bar3" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C4B8F8" stopOpacity="0.70" />
          <stop offset="100%" stopColor="#D4CAFC" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="rev-bar4" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#F0B4E4" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#F0B4E4" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="rev-fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="72%"  stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="rev-fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
          <stop offset="35%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Baseline */}
      <line x1="28" y1="96" x2="148" y2="96" stroke="#C4B8F8" strokeWidth="1" strokeOpacity="0.15" strokeLinecap="round" />

      {/*
        4 bars ascending left→right.
        Bar width=22, gap=8. Starting x=32.
        Heights: 36, 52, 68, 82 (ascending). All bottom at y=96.
      */}

      {/* Bar 1 – shortest, light violet */}
      <rect x="32"  y="60" width="22" height="36" rx="4" fill="url(#rev-bar1)" />

      {/* Bar 2 – medium-low, purple */}
      <rect x="62"  y="44" width="22" height="52" rx="4" fill="url(#rev-bar2)" />

      {/* Bar 3 – medium-high, purple→violet */}
      <rect x="92"  y="28" width="22" height="68" rx="4" fill="url(#rev-bar3)" />

      {/* Bar 4 – tallest, orange accent */}
      <rect x="122" y="10" width="22" height="86" rx="4" fill="url(#rev-bar4)" />

      {/* Fade overlays */}
      <rect x="0" y="0" width="180" height="110" fill="url(#rev-fade-right)" />
      <rect x="0" y="0" width="180" height="110" fill="url(#rev-fade-left)" />
    </svg>
  );
}
