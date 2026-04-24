export function CACIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cac-fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="72%"  stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="cac-fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
          <stop offset="28%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/*
        6 rows, each at y = 8, 24, 40, 56, 72, 88
        Columns: label pill | score bar | check | match dot
        Row 5 is dimmer (unverified) for contrast
      */}

      {/* ── Row 1 ── */}
      {/* label pill */}
      <rect x="28" y="6"  width="38" height="8" rx="4" fill="#C4B8F8" opacity="0.18" />
      {/* score bar */}
      <rect x="72" y="7"  width="28" height="6" rx="3" fill="#C4B8F8" opacity="0.25" />
      {/* check circle */}
      <circle cx="112" cy="10" r="5" fill="#C4B8F8" opacity="0.20" />
      <path d="M 109.5 10 L 111.2 11.8 L 114.5 8.2" stroke="#C4B8F8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.70" />
      {/* match dot */}
      <circle cx="128" cy="10" r="3.5" fill="#F0B4E4" opacity="0.35" />

      {/* ── Row 2 ── */}
      <rect x="28" y="22" width="44" height="8" rx="4" fill="#C4B8F8" opacity="0.18" />
      <rect x="78" y="23" width="20" height="6" rx="3" fill="#C4B8F8" opacity="0.25" />
      <circle cx="112" cy="26" r="5" fill="#C4B8F8" opacity="0.20" />
      <path d="M 109.5 26 L 111.2 27.8 L 114.5 24.2" stroke="#C4B8F8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.70" />
      <circle cx="128" cy="26" r="3.5" fill="#F0B4E4" opacity="0.35" />

      {/* ── Row 3 ── */}
      <rect x="28" y="38" width="32" height="8" rx="4" fill="#C4B8F8" opacity="0.18" />
      <rect x="66" y="39" width="34" height="6" rx="3" fill="#C4B8F8" opacity="0.25" />
      <circle cx="112" cy="42" r="5" fill="#C4B8F8" opacity="0.20" />
      <path d="M 109.5 42 L 111.2 43.8 L 114.5 40.2" stroke="#C4B8F8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.70" />
      <circle cx="128" cy="42" r="3.5" fill="#D4CAFC" opacity="0.35" />

      {/* ── Row 4 ── */}
      <rect x="28" y="54" width="40" height="8" rx="4" fill="#C4B8F8" opacity="0.18" />
      <rect x="74" y="55" width="24" height="6" rx="3" fill="#C4B8F8" opacity="0.25" />
      <circle cx="112" cy="58" r="5" fill="#C4B8F8" opacity="0.20" />
      <path d="M 109.5 58 L 111.2 59.8 L 114.5 56.2" stroke="#C4B8F8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.70" />
      <circle cx="128" cy="58" r="3.5" fill="#F0B4E4" opacity="0.35" />

      {/* ── Row 5 – unverified, dimmer ── */}
      <rect x="28" y="70" width="36" height="8" rx="4" fill="#D4CAFC" opacity="0.10" />
      <rect x="70" y="71" width="18" height="6" rx="3" fill="#D4CAFC" opacity="0.12" />
      {/* no check – open circle only */}
      <circle cx="112" cy="74" r="5" stroke="#D4CAFC" strokeWidth="1.2" opacity="0.25" />
      <circle cx="128" cy="74" r="3.5" fill="#D4CAFC" opacity="0.18" />

      {/* ── Row 6 – verified ── */}
      <rect x="28" y="86" width="42" height="8" rx="4" fill="#C4B8F8" opacity="0.14" />
      <rect x="76" y="87" width="26" height="6" rx="3" fill="#C4B8F8" opacity="0.20" />
      <circle cx="112" cy="90" r="5" fill="#C4B8F8" opacity="0.18" />
      <path d="M 109.5 90 L 111.2 91.8 L 114.5 88.2" stroke="#C4B8F8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.60" />
      <circle cx="128" cy="90" r="3.5" fill="#F0B4E4" opacity="0.28" />

      {/* ── Divider lines between rows ── */}
      {[18, 34, 50, 66, 82].map((y, i) => (
        <line key={i} x1="28" y1={y} x2="136" y2={y} stroke="#C4B8F8" strokeWidth="0.5" opacity="0.10" />
      ))}

      {/* ── Fade overlays ── */}
      <rect x="0" y="0" width="180" height="110" fill="url(#cac-fade-right)" />
      <rect x="0" y="0" width="180" height="110" fill="url(#cac-fade-left)" />
    </svg>
  );
}
