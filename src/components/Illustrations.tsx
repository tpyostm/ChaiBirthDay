export function CharacterPortrait() {
  return (
    <svg viewBox="0 0 320 320" className="h-full w-full" role="img" aria-label="Cute birthday character">
      <defs>
        <linearGradient id="paperGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="100%" stopColor="#ffe1b8" />
        </linearGradient>
        <filter id="roughShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#b98f68" floodOpacity="0.25" />
        </filter>
      </defs>
      <rect x="18" y="18" width="284" height="284" rx="42" fill="url(#paperGlow)" stroke="#7a6144" strokeWidth="5" strokeDasharray="8 10" />
      <g filter="url(#roughShadow)">
        <path d="M98 118c17-43 53-65 86-65c35 0 72 24 83 70c-18-10-38-15-62-15c-43 0-83 13-107 10Z" fill="#6b4e3d" />
        <path d="M109 122c5-38 31-62 58-62c31 0 54 23 62 61c-16-8-37-12-62-12c-21 0-42 4-58 13Z" fill="#50392d" />
        <ellipse cx="161" cy="169" rx="79" ry="89" fill="#ffe6c7" stroke="#7a6144" strokeWidth="4" />
        <path d="M120 254c24 17 61 19 84 0l10 33H111l9-33Z" fill="#ff9f68" stroke="#7a6144" strokeWidth="4" />
        <path d="M136 204c10 12 37 12 48 0" fill="none" stroke="#cb5a5e" strokeLinecap="round" strokeWidth="6" />
        <path d="M122 152c8-7 17-9 26-5" fill="none" stroke="#7a6144" strokeLinecap="round" strokeWidth="4" />
        <path d="M176 148c9-5 18-3 25 4" fill="none" stroke="#7a6144" strokeLinecap="round" strokeWidth="4" />
        <circle cx="133" cy="161" r="8" fill="#3f3425" />
        <circle cx="190" cy="161" r="8" fill="#3f3425" />
        <circle cx="114" cy="188" r="15" fill="#ffa7b6" fillOpacity="0.75" />
        <circle cx="210" cy="188" r="15" fill="#ffa7b6" fillOpacity="0.75" />
        <path d="M89 93l22-23l17 18l-18 24Z" fill="#ff7f50" stroke="#7a6144" strokeWidth="4" />
        <path d="M233 93l-22-23l-17 18l18 24Z" fill="#ff7f50" stroke="#7a6144" strokeWidth="4" />
      </g>
      <path d="M58 78c11-7 20-7 30 0" fill="none" stroke="#8ecae6" strokeLinecap="round" strokeWidth="6" />
      <path d="M235 63c9 3 16 9 20 18" fill="none" stroke="#ff9f68" strokeLinecap="round" strokeWidth="6" />
      <path d="M47 220c8 10 17 16 29 18" fill="none" stroke="#9ed37a" strokeLinecap="round" strokeWidth="6" />
      <path d="M160 33l8 15l17 2l-12 11l3 16l-16-8l-15 8l3-16l-12-11l17-2Z" fill="#ffd166" stroke="#7a6144" strokeWidth="4" />
      <path d="M240 247c7-10 16-14 28-13" fill="none" stroke="#ff8fab" strokeLinecap="round" strokeWidth="6" />
    </svg>
  )
}

export function GiftPhoto() {
  return (
    <svg viewBox="0 0 420 280" className="h-full w-full" role="img" aria-label="Gift reveal illustration">
      <rect width="420" height="280" rx="28" fill="#fff6e8" stroke="#7a6144" strokeWidth="4" strokeDasharray="8 10" />
      <rect x="28" y="28" width="364" height="224" rx="24" fill="#fffdf8" stroke="#8d7252" strokeWidth="3" />
      <rect x="55" y="50" width="310" height="124" rx="28" fill="#ffd8cf" stroke="#8d7252" strokeWidth="3" />
      <path d="M91 92c12-10 26-12 40-6c-8 7-12 17-12 28c-12-1-22-8-28-22Z" fill="#8ecae6" fillOpacity="0.9" />
      <path d="M214 92c27-32 82-12 82 28c0 38-45 64-82 89c-37-25-82-51-82-89c0-40 55-60 82-28Z" fill="#ff7f7f" stroke="#7a6144" strokeWidth="4" />
      <path d="M151 64c18-6 34-2 50 11" fill="none" stroke="#ffd166" strokeLinecap="round" strokeWidth="8" />
      <path d="M299 69c12 5 20 13 25 26" fill="none" stroke="#9ed37a" strokeLinecap="round" strokeWidth="8" />
      <circle cx="101" cy="117" r="26" fill="#fff8ef" stroke="#8d7252" strokeWidth="3" />
      <path d="M88 117h26M101 104v26" stroke="#ff9f68" strokeLinecap="round" strokeWidth="5" />
      <text x="210" y="214" textAnchor="middle" fill="#8a3b2d" fontSize="28" fontWeight="700" fontFamily="Short Stack, cursive">
        Surprise Gift
      </text>
      <text x="210" y="240" textAnchor="middle" fill="#5a4632" fontSize="18" fontFamily="Patrick Hand, cursive">
        Dessert date + tiny mystery outing
      </text>
      <path d="M308 197c12 8 19 16 22 26" fill="none" stroke="#8ecae6" strokeLinecap="round" strokeWidth="5" />
      <path d="M80 200c6 12 14 20 25 24" fill="none" stroke="#ff8fab" strokeLinecap="round" strokeWidth="5" />
    </svg>
  )
}
