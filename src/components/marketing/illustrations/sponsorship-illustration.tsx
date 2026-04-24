export function SponsorshipIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sp-fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="72%"  stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="sp-fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
          <stop offset="28%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        {/* Score bar fill gradient */}
        <linearGradient id="sp-bar-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#C4B8F8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D4CAFC" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="sp-bar-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#C4B8F8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D4CAFC" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="sp-bar-3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#F0B4E4" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#F0B4E4" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* ── Card outline ── */}
      <rect x="24" y="6" width="118" height="98" rx="8"
        fill="#ffffff" stroke="#C4B8F8" strokeWidth="1" strokeOpacity="0.15" />

      {/* ── Header row: sponsor logo placeholder + audience badge ── */}
      {/* Sponsor block */}
      <rect x="34" y="16" width="36" height="10" rx="5" fill="#C4B8F8" opacity="0.18" />
      <rect x="34" y="16" width="36" height="10" rx="5" stroke="#C4B8F8" strokeWidth="0.8" strokeOpacity="0.30" />
      {/* "×" connector */}
      <text x="77" y="24" fontSize="8" fill="#D4CAFC" opacity="0.55" fontFamily="system-ui">×</text>
      {/* Audience badge */}
      <rect x="86" y="16" width="44" height="10" rx="5" fill="#F0B4E4" opacity="0.12" />
      <rect x="86" y="16" width="44" height="10" rx="5" stroke="#F0B4E4" strokeWidth="0.8" strokeOpacity="0.30" />

      {/* ── Divider ── */}
      <line x1="34" y1="34" x2="132" y2="34" stroke="#C4B8F8" strokeWidth="0.5" strokeOpacity="0.15" />

      {/* ── Match score headline ── */}
      {/* label */}
      <rect x="34" y="40" width="30" height="5" rx="2.5" fill="#D4CAFC" opacity="0.20" />
      {/* big score pill */}
      <rect x="96" y="37" width="36" height="11" rx="5.5" fill="#C4B8F8" opacity="0.15" />
      <rect x="96" y="37" width="36" height="11" rx="5.5" stroke="#C4B8F8" strokeWidth="0.8" strokeOpacity="0.35" />
      {/* score text stand-in: two tiny rects */}
      <rect x="102" y="41" width="8"  height="3" rx="1.5" fill="#C4B8F8" opacity="0.55" />
      <rect x="113" y="41" width="12" height="3" rx="1.5" fill="#C4B8F8" opacity="0.40" />

      {/* ── Fit metrics: 3 rows with label + bar + % pill ── */}

      {/* Metric 1 – Demographic fit, 88% */}
      <rect x="34" y="56" width="26" height="5" rx="2.5" fill="#D4CAFC" opacity="0.18" />
      {/* bar track */}
      <rect x="66" y="57" width="44" height="3" rx="1.5" fill="#D4CAFC" opacity="0.10" />
      {/* bar fill 88% */}
      <rect x="66" y="57" width="39" height="3" rx="1.5" fill="url(#sp-bar-1)" />
      {/* % pill */}
      <rect x="115" y="54.5" width="16" height="7" rx="3.5" fill="#C4B8F8" opacity="0.14" />
      <rect x="117" y="57"   width="12" height="3" rx="1.5" fill="#C4B8F8" opacity="0.40" />

      {/* Metric 2 – Interest overlap, 74% */}
      <rect x="34" y="70" width="32" height="5" rx="2.5" fill="#D4CAFC" opacity="0.18" />
      <rect x="72" y="71" width="38" height="3" rx="1.5" fill="#D4CAFC" opacity="0.10" />
      <rect x="72" y="71" width="28" height="3" rx="1.5" fill="url(#sp-bar-2)" />
      <rect x="115" y="68.5" width="16" height="7" rx="3.5" fill="#C4B8F8" opacity="0.14" />
      <rect x="117" y="71"   width="12" height="3" rx="1.5" fill="#C4B8F8" opacity="0.35" />

      {/* Metric 3 – Purchase intent, 91%, orange accent */}
      <rect x="34" y="84" width="28" height="5" rx="2.5" fill="#F0B4E4" opacity="0.18" />
      <rect x="68" y="85" width="42" height="3" rx="1.5" fill="#F0B4E4" opacity="0.10" />
      <rect x="68" y="85" width="38" height="3" rx="1.5" fill="url(#sp-bar-3)" />
      <rect x="115" y="82.5" width="16" height="7" rx="3.5" fill="#F0B4E4" opacity="0.14" />
      <rect x="117" y="85"   width="12" height="3" rx="1.5" fill="#F0B4E4" opacity="0.45" />

      {/* ── Fade overlays ── */}
      <rect x="0" y="0" width="180" height="110" fill="url(#sp-fade-right)" />
      <rect x="0" y="0" width="180" height="110" fill="url(#sp-fade-left)" />
    </svg>
  );
}
