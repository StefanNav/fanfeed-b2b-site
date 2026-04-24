export function OutreachIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="out-b1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F0B4E4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#F0B4E4" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="out-b2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C4B8F8" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#C4B8F8" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="out-b3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4CAFC" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D4CAFC" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="out-trunk" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C4B8F8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C4B8F8" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="out-fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="72%"  stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="out-fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
          <stop offset="35%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Trunk ── */}
      <path d="M 10 68 C 30 68 38 54 54 50" stroke="url(#out-trunk)" strokeWidth="2.2" strokeLinecap="round" />

      {/* ── Branch 1 – bottom, orange ── */}
      <path d="M 54 50 C 72 50 90 58 114 66" stroke="url(#out-b1)" strokeWidth="2" strokeLinecap="round" />
      <line x1="114" y1="74" x2="114" y2="58" stroke="#F0B4E4" strokeWidth="3.2" strokeLinecap="round" opacity="0.68" />
      <line x1="125" y1="76" x2="125" y2="60" stroke="#F0B4E4" strokeWidth="3.2" strokeLinecap="round" opacity="0.50" />
      <line x1="136" y1="78" x2="136" y2="62" stroke="#F0B4E4" strokeWidth="3"   strokeLinecap="round" opacity="0.32" />
      <line x1="147" y1="80" x2="147" y2="64" stroke="#F0B4E4" strokeWidth="2.8" strokeLinecap="round" opacity="0.18" />
      <line x1="158" y1="82" x2="158" y2="66" stroke="#F0B4E4" strokeWidth="2.5" strokeLinecap="round" opacity="0.09" />
      <line x1="169" y1="84" x2="169" y2="68" stroke="#F0B4E4" strokeWidth="2.5" strokeLinecap="round" opacity="0.04" />

      {/* ── Branch 2 – mid, purple ── */}
      <path d="M 54 50 C 70 38 88 32 114 30" stroke="url(#out-b2)" strokeWidth="2" strokeLinecap="round" />
      <line x1="114" y1="40" x2="114" y2="20" stroke="#C4B8F8" strokeWidth="3.2" strokeLinecap="round" opacity="0.72" />
      <line x1="125" y1="42" x2="125" y2="22" stroke="#C4B8F8" strokeWidth="3.2" strokeLinecap="round" opacity="0.54" />
      <line x1="136" y1="44" x2="136" y2="24" stroke="#C4B8F8" strokeWidth="3"   strokeLinecap="round" opacity="0.35" />
      <line x1="147" y1="46" x2="147" y2="26" stroke="#C4B8F8" strokeWidth="2.8" strokeLinecap="round" opacity="0.20" />
      <line x1="158" y1="48" x2="158" y2="28" stroke="#C4B8F8" strokeWidth="2.5" strokeLinecap="round" opacity="0.10" />
      <line x1="169" y1="50" x2="169" y2="30" stroke="#C4B8F8" strokeWidth="2.5" strokeLinecap="round" opacity="0.05" />

      {/* ── Branch 3 – top, light violet ── */}
      <path d="M 54 50 C 68 30 84 16 114 8" stroke="url(#out-b3)" strokeWidth="2" strokeLinecap="round" />
      <line x1="114" y1="18" x2="114" y2="-2"  stroke="#D4CAFC" strokeWidth="3.2" strokeLinecap="round" opacity="0.75" />
      <line x1="125" y1="20" x2="125" y2="0"   stroke="#D4CAFC" strokeWidth="3.2" strokeLinecap="round" opacity="0.56" />
      <line x1="136" y1="22" x2="136" y2="2"   stroke="#D4CAFC" strokeWidth="3"   strokeLinecap="round" opacity="0.36" />
      <line x1="147" y1="24" x2="147" y2="4"   stroke="#D4CAFC" strokeWidth="2.8" strokeLinecap="round" opacity="0.21" />
      <line x1="158" y1="26" x2="158" y2="6"   stroke="#D4CAFC" strokeWidth="2.5" strokeLinecap="round" opacity="0.11" />
      <line x1="169" y1="28" x2="169" y2="8"   stroke="#D4CAFC" strokeWidth="2.5" strokeLinecap="round" opacity="0.05" />

      {/* ── Origin dot ── */}
      <circle cx="10" cy="68" r="2.8" fill="#C4B8F8" opacity="0.35" />
      {/* ── Fork dot ── */}
      <circle cx="54" cy="50" r="2.8" fill="#C4B8F8" opacity="0.60" />

      <rect x="0" y="0" width="180" height="110" fill="url(#out-fade-right)" />
      <rect x="0" y="0" width="180" height="110" fill="url(#out-fade-left)" />
    </svg>
  );
}
