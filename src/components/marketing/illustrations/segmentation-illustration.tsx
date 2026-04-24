export function SegmentationIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Right-edge fade to white */}
        <linearGradient id="seg-fade-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0" />
          <stop offset="40%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="72%"  stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
        {/* Left-edge fade to white */}
        <linearGradient id="seg-fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="1" />
          <stop offset="30%"  stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Cluster A – top-left, light violet ── */}
      <circle cx="38" cy="18" r="3.5" fill="#D4CAFC" opacity="0.55" />
      <circle cx="50" cy="12" r="2.5" fill="#D4CAFC" opacity="0.45" />
      <circle cx="58" cy="22" r="3"   fill="#D4CAFC" opacity="0.50" />
      <circle cx="44" cy="28" r="2"   fill="#D4CAFC" opacity="0.38" />
      <circle cx="64" cy="14" r="2"   fill="#D4CAFC" opacity="0.35" />

      {/* ── Cluster B – top-right, brand purple ── */}
      <circle cx="100" cy="14" r="3"   fill="#C4B8F8" opacity="0.55" />
      <circle cx="112" cy="8"  r="2.5" fill="#C4B8F8" opacity="0.45" />
      <circle cx="120" cy="20" r="3.5" fill="#C4B8F8" opacity="0.50" />
      <circle cx="108" cy="24" r="2"   fill="#C4B8F8" opacity="0.40" />
      <circle cx="128" cy="12" r="2"   fill="#C4B8F8" opacity="0.32" />
      <circle cx="134" cy="22" r="2.5" fill="#C4B8F8" opacity="0.28" />

      {/* ── Cluster C – mid, orange, selected/highlighted ── */}
      <circle cx="68"  cy="58" r="3.5" fill="#F0B4E4" opacity="0.65" />
      <circle cx="80"  cy="50" r="2.5" fill="#F0B4E4" opacity="0.55" />
      <circle cx="90"  cy="62" r="3"   fill="#F0B4E4" opacity="0.60" />
      <circle cx="76"  cy="68" r="2"   fill="#F0B4E4" opacity="0.45" />
      <circle cx="98"  cy="54" r="2.5" fill="#F0B4E4" opacity="0.50" />
      <circle cx="88"  cy="72" r="2"   fill="#F0B4E4" opacity="0.38" />
      <circle cx="106" cy="64" r="3"   fill="#F0B4E4" opacity="0.42" />

      {/* ── Selection ring around cluster C ── */}
      <ellipse
        cx="87" cy="61"
        rx="28" ry="18"
        stroke="#F0B4E4"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.45"
      />

      {/* ── Cluster D – bottom-right, lighter purple ── */}
      <circle cx="118" cy="72" r="3"   fill="#D4CAFC" opacity="0.40" />
      <circle cx="130" cy="66" r="2.5" fill="#D4CAFC" opacity="0.32" />
      <circle cx="140" cy="76" r="2"   fill="#D4CAFC" opacity="0.28" />
      <circle cx="126" cy="80" r="2.5" fill="#D4CAFC" opacity="0.25" />
      <circle cx="148" cy="68" r="2"   fill="#D4CAFC" opacity="0.20" />

      {/* ── Light linking lines between clusters ── */}
      {/* A → C */}
      <line x1="52" y1="24" x2="72" y2="54" stroke="#D4CAFC" strokeWidth="1" strokeDasharray="3 4" opacity="0.25" />
      {/* B → C */}
      <line x1="104" y1="22" x2="96" y2="52" stroke="#C4B8F8" strokeWidth="1" strokeDasharray="3 4" opacity="0.22" />
      {/* C → D */}
      <line x1="104" y1="64" x2="118" y2="72" stroke="#F0B4E4" strokeWidth="1" strokeDasharray="3 4" opacity="0.28" />

      {/* ── Fade overlays ── */}
      <rect x="0" y="0" width="180" height="110" fill="url(#seg-fade-right)" />
      <rect x="0" y="0" width="180" height="110" fill="url(#seg-fade-left)" />
    </svg>
  );
}
