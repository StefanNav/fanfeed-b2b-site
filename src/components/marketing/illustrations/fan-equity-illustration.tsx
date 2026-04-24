export function FanEquityIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Right-edge fade */}
        <linearGradient id="feq-fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="72%"  stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        {/* Left-edge fade */}
        <linearGradient id="feq-fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
          <stop offset="28%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Per-figure bottom fades – vertical, color → transparent */}
        <linearGradient id="feq-g4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#D4CAFC" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#D4CAFC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="feq-g3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#D4CAFC" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#D4CAFC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="feq-g2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#D4CAFC" stopOpacity="0.40" />
          <stop offset="100%" stopColor="#D4CAFC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="feq-g1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#C4B8F8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C4B8F8" stopOpacity="0" />
        </linearGradient>

        {/* Clip paths – one per figure silhouette (head + open shoulder region) */}
        <clipPath id="feq-clip4">
          <circle cx="114" cy="28" r="10" />
          <path d="M 104 38 C 93 43, 96 68, 114 68 C 132 68, 135 43, 124 38 Z" />
        </clipPath>
        <clipPath id="feq-clip3">
          <circle cx="94" cy="30" r="10" />
          <path d="M 84 40 C 73 45, 76 70, 94 70 C 112 70, 115 45, 104 40 Z" />
        </clipPath>
        <clipPath id="feq-clip2">
          <circle cx="76" cy="32" r="11" />
          <path d="M 65 43 C 52 48, 56 74, 76 74 C 96 74, 100 48, 87 43 Z" />
        </clipPath>
        <clipPath id="feq-clip1">
          <circle cx="56" cy="34" r="13" />
          <path d="M 43 47 C 28 52, 32 80, 56 80 C 80 80, 84 52, 69 47 Z" />
        </clipPath>
      </defs>

      {/* Figures drawn back-to-front.
          Each = white knockout rect (clips out figure behind) + gradient rect clipped to silhouette */}

      {/* Figure 4 – farthest, lightest */}
      <rect x="92" y="18" width="46" height="50" fill="#ffffff" clipPath="url(#feq-clip4)" />
      <rect x="92" y="18" width="46" height="50" fill="url(#feq-g4)" clipPath="url(#feq-clip4)" />

      {/* Figure 3 */}
      <rect x="72" y="20" width="44" height="50" fill="#ffffff" clipPath="url(#feq-clip3)" />
      <rect x="72" y="20" width="44" height="50" fill="url(#feq-g3)" clipPath="url(#feq-clip3)" />

      {/* Figure 2 */}
      <rect x="51" y="21" width="50" height="53" fill="#ffffff" clipPath="url(#feq-clip2)" />
      <rect x="51" y="21" width="50" height="53" fill="url(#feq-g2)" clipPath="url(#feq-clip2)" />

      {/* Figure 1 – primary, front */}
      <rect x="27" y="21" width="58" height="59" fill="#ffffff" clipPath="url(#feq-clip1)" />
      <rect x="27" y="21" width="58" height="59" fill="url(#feq-g1)" clipPath="url(#feq-clip1)" />

      {/* ── Fade overlays ── */}
      <rect x="0" y="0" width="180" height="110" fill="url(#feq-fade-right)" />
      <rect x="0" y="0" width="180" height="110" fill="url(#feq-fade-left)" />
    </svg>
  );
}
