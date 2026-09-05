export function DigitalGenieMark({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="The Digital Genie Mark"
    >
      {/* Left 'r' / 'T' bracket in Blue */}
      <path
        d="M20 72V30C20 27.8 21.8 26 24 26H42"
        stroke="#2563EB"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center 'i' dot in Gray */}
      <circle cx="48" cy="12" r="4.5" fill="#6B7280" />

      {/* Center 'i' upper stem in Blue */}
      <path
        d="M48 18V50"
        stroke="#2563EB"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Center 'i' lower stem in Gray */}
      <path
        d="M48 50V84C48 86.2 49.8 88 52 88"
        stroke="#6B7280"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Top Green Arc for 'G' */}
      <path
        d="M52 24C68 24 78 34 78 50"
        stroke="#22C55E"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Middle Gray Crossbar for 'G' */}
      <path
        d="M56 58H78"
        stroke="#6B7280"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Bottom Gray Arc for 'G' */}
      <path
        d="M78 58C78 74 66 88 50 88"
        stroke="#6B7280"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DigitalGenieLogo({ size = 38, showSubtitle = true, className = '', light = false }) {
  return (
    <div className={`dg-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <DigitalGenieMark size={size} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span
          style={{
            fontFamily: 'var(--font-heading, "Montserrat", sans-serif)',
            fontSize: '1.15rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: light ? '#FFFFFF' : 'var(--dg-dark, #0F172A)',
            textTransform: 'uppercase',
          }}
        >
          The Digital Genie
        </span>
        {showSubtitle && (
          <span
            style={{
              fontFamily: 'var(--font-body, "Inter", sans-serif)',
              fontSize: '0.68rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: light ? 'rgba(255, 255, 255, 0.7)' : 'var(--color-text-secondary, #64748B)',
              textTransform: 'uppercase',
              marginTop: '3px',
            }}
          >
            Creative Growth House
          </span>
        )}
      </div>
    </div>
  );
}

export function BloomMark({ size = 32, className = '', color = '#442913' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Bloom Interiors Mark"
    >
      {/* Outer Geometric Architectural Frame */}
      <path
        d="M26 48V26H74V74H26V68"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="square"
      />

      {/* Stylized 'B' */}
      <path
        d="M42 36H56C60.4 36 64 38.6 64 43C64 47.4 60.4 50 56 50M42 50H58C62.4 50 66 53.6 66 58C66 62.4 62.4 65 58 65H42V36Z"
        fill={color}
      />

      {/* Registered Trademark symbol ® */}
      <circle cx="82" cy="74" r="5" stroke={color} strokeWidth="1.5" />
      <text
        x="82"
        y="76.5"
        fontSize="6"
        fontFamily="sans-serif"
        fontWeight="bold"
        fill={color}
        textAnchor="middle"
      >
        R
      </text>
    </svg>
  );
}

export function BloomInteriorsLogo({ size = 36, showSubtitle = true, className = '', color = 'var(--bloom-secondary, #442913)' }) {
  return (
    <div className={`bloom-logo ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <BloomMark size={size} color={color} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <span
          style={{
            fontFamily: 'var(--font-heading, "Montserrat", sans-serif)',
            fontSize: '1.15rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: color,
            textTransform: 'uppercase',
          }}
        >
          Bloom Interiors
        </span>
        {showSubtitle && (
          <span
            style={{
              fontFamily: 'var(--font-body, "Inter", sans-serif)',
              fontSize: '0.68rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              color: 'var(--bloom-primary, #98755B)',
              textTransform: 'uppercase',
              marginTop: '3px',
            }}
          >
            Interior Design & Styling
          </span>
        )}
      </div>
    </div>
  );
}
