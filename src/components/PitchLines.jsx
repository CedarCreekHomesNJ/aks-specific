export default function PitchLines() {
  const stroke = 'rgba(255,255,255,0.55)'
  const sw = 0.6

  return (
    <svg
      viewBox="0 0 100 140"
      preserveAspectRatio="none"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    >
      {/* outer boundary */}
      <rect x="4" y="4" width="92" height="132" fill="none" stroke={stroke} strokeWidth={sw} />

      {/* halfway line */}
      <line x1="4" y1="70" x2="96" y2="70" stroke={stroke} strokeWidth={sw} />

      {/* center circle and spot */}
      <circle cx="50" cy="70" r="11" fill="none" stroke={stroke} strokeWidth={sw} />
      <circle cx="50" cy="70" r="0.7" fill={stroke} />

      {/* bottom penalty box, six-yard box, spot, arc */}
      <rect x="26" y="112" width="48" height="24" fill="none" stroke={stroke} strokeWidth={sw} />
      <rect x="38" y="128" width="24" height="8" fill="none" stroke={stroke} strokeWidth={sw} />
      <circle cx="50" cy="122" r="0.7" fill={stroke} />
      <path d="M 45.4 112 A 11 11 0 0 1 54.6 112" fill="none" stroke={stroke} strokeWidth={sw} />

      {/* top penalty box, six-yard box, spot, arc */}
      <rect x="26" y="4" width="48" height="24" fill="none" stroke={stroke} strokeWidth={sw} />
      <rect x="38" y="4" width="24" height="8" fill="none" stroke={stroke} strokeWidth={sw} />
      <circle cx="50" cy="18" r="0.7" fill={stroke} />
      <path d="M 45.4 28 A 11 11 0 0 0 54.6 28" fill="none" stroke={stroke} strokeWidth={sw} />

      {/* corner arcs */}
      <path d="M 4 7 A 3 3 0 0 1 7 4" fill="none" stroke={stroke} strokeWidth={sw} />
      <path d="M 93 4 A 3 3 0 0 1 96 7" fill="none" stroke={stroke} strokeWidth={sw} />
      <path d="M 4 133 A 3 3 0 0 0 7 136" fill="none" stroke={stroke} strokeWidth={sw} />
      <path d="M 93 136 A 3 3 0 0 0 96 133" fill="none" stroke={stroke} strokeWidth={sw} />

      {/* goal frames */}
      <rect x="44" y="1.3" width="12" height="2.7" fill="none" stroke={stroke} strokeWidth={sw} />
      <rect x="44" y="136" width="12" height="2.7" fill="none" stroke={stroke} strokeWidth={sw} />
    </svg>
  )
}
