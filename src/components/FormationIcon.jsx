export default function FormationIcon({ type }) {
  const stroke = 'currentColor'
  const common = { width: 30, height: 30, viewBox: '0 0 44 44' }

  switch (type) {
    case 'grid':
      return (
        <svg {...common}>
          {[10, 22, 34].map((x) => [10, 22, 34].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" fill={stroke} />
          )))}
        </svg>
      )
    case 'gates':
      return (
        <svg {...common}>
          <circle cx="10" cy="14" r="2.4" fill={stroke} /><circle cx="16" cy="14" r="2.4" fill={stroke} />
          <circle cx="28" cy="24" r="2.4" fill={stroke} /><circle cx="34" cy="24" r="2.4" fill={stroke} />
          <circle cx="14" cy="34" r="2.4" fill={stroke} /><circle cx="20" cy="34" r="2.4" fill={stroke} />
        </svg>
      )
    case 'circle':
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="13" fill="none" stroke={stroke} strokeWidth="2" />
          <circle cx="22" cy="9" r="2.4" fill={stroke} />
          <circle cx="34" cy="27" r="2.4" fill={stroke} />
          <circle cx="10" cy="27" r="2.4" fill={stroke} />
          <circle cx="22" cy="22" r="2" fill={stroke} opacity="0.5" />
        </svg>
      )
    case 'box':
      return (
        <svg {...common}>
          <rect x="7" y="7" width="30" height="30" rx="4" fill="none" stroke={stroke} strokeWidth="2" />
          <circle cx="7" cy="7" r="2.4" fill={stroke} /><circle cx="37" cy="7" r="2.4" fill={stroke} />
          <circle cx="7" cy="37" r="2.4" fill={stroke} /><circle cx="37" cy="37" r="2.4" fill={stroke} />
        </svg>
      )
    case 'goal':
      return (
        <svg {...common}>
          <rect x="10" y="8" width="24" height="12" fill="none" stroke={stroke} strokeWidth="2" />
          <circle cx="22" cy="34" r="2.8" fill={stroke} />
          <line x1="22" y1="31" x2="22" y2="20" stroke={stroke} strokeWidth="1.6" strokeDasharray="2 2" />
        </svg>
      )
    case 'zones':
      return (
        <svg {...common}>
          <line x1="15" y1="6" x2="15" y2="38" stroke={stroke} strokeWidth="1.6" />
          <line x1="29" y1="6" x2="29" y2="38" stroke={stroke} strokeWidth="1.6" />
          <rect x="6" y="6" width="32" height="32" fill="none" stroke={stroke} strokeWidth="2" />
        </svg>
      )
    case 'line':
      return (
        <svg {...common}>
          {[10, 18, 26, 34].map((x) => (
            <circle key={x} cx={x} cy="22" r="2.4" fill={stroke} />
          ))}
          <line x1="8" y1="22" x2="36" y2="22" stroke={stroke} strokeWidth="1.4" strokeDasharray="1 3" />
        </svg>
      )
    case 'pairs':
      return (
        <svg {...common}>
          <circle cx="14" cy="22" r="3.4" fill={stroke} />
          <circle cx="30" cy="22" r="3.4" fill="none" stroke={stroke} strokeWidth="2" />
          <line x1="18" y1="22" x2="26" y2="22" stroke={stroke} strokeWidth="1.4" strokeDasharray="1 2" />
        </svg>
      )
    default:
      return <svg {...common} />
  }
}
