/**
 * Hero visual: a continuous "work in progress" scene, not tied to scroll —
 * a workflow graph of nodes (discover → design → build → launch) connected
 * by a marching dashed line, with a drafting grid, a slow-turning gear and
 * softly bobbing panels. Everything loops indefinitely via CSS animation.
 */
export function BuildScene() {
  return (
    <svg className="build-scene" viewBox="0 0 620 560" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="bs-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0H0V28" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.16" />
        </pattern>
        <linearGradient id="bs-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0" />
          <stop offset="0.15" stopColor="#000" stopOpacity="1" />
          <stop offset="0.85" stopColor="#000" stopOpacity="1" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <mask id="bs-mask"><rect x="0" y="0" width="620" height="560" fill="url(#bs-fade)" /></mask>
      </defs>

      <g className="bs-ink" mask="url(#bs-mask)">
        <circle cx="310" cy="280" r="230" fill="url(#bs-grid)" />
      </g>

      {/* orbit ring + slow-turning gear, top right: "always in motion" */}
      <g className="bs-orbit">
        <circle cx="466" cy="120" r="58" fill="none" className="bs-ink2" strokeWidth="1.5" strokeDasharray="3 7" />
        <circle cx="466" cy="62" r="5" fill="var(--gold)" />
      </g>
      <g className="bs-gear">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((ang) => (
          <rect key={ang} x="461.5" y="100" width="9" height="8" rx="2" className="bs-gear-tooth" transform={`rotate(${ang} 466 130)`} />
        ))}
        <circle cx="466" cy="130" r="22" className="bs-gear-body" strokeWidth="2.5" />
        <circle cx="466" cy="130" r="9" className="bs-gear-hole" strokeWidth="2.5" />
      </g>

      {/* workflow path: discover -> design -> build -> launch */}
      <path className="bs-path" d="M92 232 C 150 176, 214 176, 246 226 S 372 300, 420 250 S 512 176, 552 214" fill="none" strokeWidth="2.5" strokeLinecap="round" />

      {[
        { x: 92, y: 232, fill: 'teal' },
        { x: 246, y: 226, fill: 'navy' },
        { x: 420, y: 250, fill: 'teal' },
        { x: 552, y: 214, fill: 'gold' },
      ].map((n, i) => (
        <g key={n.x} className="bs-node" style={{ ['--d' as string]: `${i * 0.35}s` }}>
          <circle cx={n.x} cy={n.y} r="9" className={`bs-dot bs-dot-${n.fill}`} />
          <circle cx={n.x} cy={n.y} r="9" className={`bs-ring bs-dot-${n.fill}`} fill="none" strokeWidth="1.5" />
        </g>
      ))}

      {/* floating panels: code, layout, chart — bobbing at different phases */}
      <g className="bs-card bs-card-1">
        <rect x="52" y="300" width="150" height="104" rx="12" className="bs-panel" />
        <rect x="70" y="322" width="60" height="7" rx="3.5" className="bs-ink3" />
        <rect x="70" y="340" width="94" height="6" rx="3" className="bs-ink4" />
        <rect x="70" y="354" width="76" height="6" rx="3" className="bs-ink4" />
        <rect x="70" y="368" width="86" height="6" rx="3" className="bs-ink4" />
        <circle cx="178" cy="322" r="5" fill="var(--teal)" />
      </g>

      <g className="bs-card bs-card-2">
        <rect x="234" y="334" width="146" height="116" rx="12" className="bs-panel" />
        <rect x="250" y="350" width="46" height="6" rx="3" className="bs-ink4" />
        <path d="M250 424 L280 398 L306 410 L336 372 L360 388" fill="none" className="bs-ink2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="360" cy="388" r="4" fill="var(--gold)" />
      </g>

      <g className="bs-card bs-card-3">
        <rect x="408" y="280" width="150" height="96" rx="12" className="bs-panel" />
        <rect x="424" y="298" width="52" height="6" rx="3" className="bs-ink4" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={424 + i * 24} y={342 - [14, 22, 18, 30, 26][i]} width="14" height={[14, 22, 18, 30, 26][i]} rx="3" className={i > 2 ? 'bs-bar-a' : 'bs-bar-b'} />
        ))}
      </g>

      {/* drafting corner marks, bottom: blueprint feel */}
      <g className="bs-corners bs-ink2" strokeWidth="1.5">
        <path d="M40 500 v28 h28" fill="none" />
        <path d="M580 500 v28 h-28" fill="none" />
      </g>
      <line className="bs-baseline" x1="40" y1="528" x2="580" y2="528" strokeWidth="1.5" strokeDasharray="2 8" />
    </svg>
  );
}
