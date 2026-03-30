export function CharacterPortrait() {
  return (
    <svg viewBox="0 0 320 320" className="h-full w-full" role="img" aria-label="Cute birthday character">
      <defs>
        <linearGradient id="bgGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#fff1f2" />
          <stop offset="100%" stopColor="#fecdd3" />
        </linearGradient>
      </defs>
      <circle cx="160" cy="160" r="150" fill="url(#bgGradient)" />
      <path d="M85 118c18-45 57-67 91-67s75 24 86 73c-18-10-40-16-60-16-50 0-84 16-117 10Z" fill="#3f1d2d" />
      <ellipse cx="160" cy="165" rx="78" ry="88" fill="#ffe4e6" />
      <circle cx="131" cy="158" r="9" fill="#1f2937" />
      <circle cx="191" cy="158" r="9" fill="#1f2937" />
      <path d="M138 206c11 10 31 10 43 0" fill="none" stroke="#be123c" strokeLinecap="round" strokeWidth="7" />
      <circle cx="109" cy="187" r="14" fill="#fda4af" opacity="0.7" />
      <circle cx="212" cy="187" r="14" fill="#fda4af" opacity="0.7" />
      <path d="M104 108c6-35 32-58 57-58 29 0 54 20 60 57-17-9-34-13-58-13-22 0-39 4-59 14Z" fill="#4c1d2f" />
      <path d="M123 250c17 18 57 24 79 0l12 41H111l12-41Z" fill="#fb7185" />
      <path d="M76 94l24-28 21 22-19 27Z" fill="#f43f5e" />
      <path d="M244 94l-24-28-21 22 19 27Z" fill="#f43f5e" />
      <circle cx="74" cy="79" r="12" fill="#fecdd3" />
      <circle cx="247" cy="79" r="12" fill="#fecdd3" />
      <path d="M158 24l10 17 18 4-13 14 2 19-17-9-17 9 2-19-13-14 18-4Z" fill="#facc15" />
    </svg>
  )
}

export function GiftPhoto() {
  return (
    <svg viewBox="0 0 420 280" className="h-full w-full" role="img" aria-label="Gift reveal illustration">
      <rect width="420" height="280" rx="28" fill="#fff1f2" />
      <rect x="30" y="30" width="360" height="220" rx="24" fill="#ffffff" />
      <rect x="55" y="58" width="310" height="116" rx="18" fill="#fecdd3" />
      <circle cx="104" cy="116" r="24" fill="#ffffff" opacity="0.9" />
      <path d="M212 90c27-32 82-12 82 28 0 38-45 64-82 89-37-25-82-51-82-89 0-40 55-60 82-28Z" fill="#f43f5e" />
      <text x="210" y="214" textAnchor="middle" fill="#9f1239" fontSize="28" fontWeight="700" fontFamily="Nunito, sans-serif">
        Surprise Gift
      </text>
      <text x="210" y="240" textAnchor="middle" fill="#475569" fontSize="18" fontFamily="Nunito, sans-serif">
        Dessert date + tiny mystery outing
      </text>
    </svg>
  )
}
