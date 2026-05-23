import { Figure } from "@/components/diagrams/figure";

export function PrebidFlowDiagram() {
  return (
    <Figure caption="A header-bidding auction runs in parallel on the page before the ad server is called. Winning bid becomes a key-value targeting param; the ad server runs its own auction on top.">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 800 360"
          className="w-full min-w-[720px] text-foreground"
          role="img"
          aria-label="Prebid auction flow: page load triggers parallel SSP bid requests, top bid is selected within the timeout window, then passed to the ad server for final auction and creative delivery."
        >
          <defs>
            <marker
              id="prebid-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
            </marker>
            <style>{`
              .pb-box { fill: var(--color-surface); stroke: var(--color-border); stroke-width: 1; }
              .pb-box-accent { fill: color-mix(in srgb, var(--color-accent) 12%, transparent); stroke: var(--color-accent); stroke-width: 1; }
              .pb-box-soft { fill: var(--color-surface); stroke: var(--color-border); stroke-width: 1; stroke-dasharray: 3 3; }
              .pb-label { fill: var(--color-foreground); font: 500 13px var(--font-sans, sans-serif); }
              .pb-sublabel { fill: var(--color-muted); font: 400 11px var(--font-sans, sans-serif); }
              .pb-meta { fill: var(--color-accent); font: 500 10px var(--font-mono, monospace); letter-spacing: 0.1em; }
              .pb-wire { stroke: var(--color-muted); stroke-width: 1.2; fill: none; }
              .pb-wire-accent { stroke: var(--color-accent); stroke-width: 1.4; fill: none; }
            `}</style>
          </defs>

          {/* Page Load */}
          <rect className="pb-box" x="12" y="155" width="110" height="50" rx="8" />
          <text className="pb-label" x="67" y="180" textAnchor="middle">Page load</text>
          <text className="pb-sublabel" x="67" y="196" textAnchor="middle">slots defined</text>

          {/* Prebid box */}
          <rect className="pb-box-accent" x="160" y="55" width="280" height="250" rx="10" />
          <text className="pb-meta" x="300" y="80" textAnchor="middle">PREBID AUCTION</text>
          <text className="pb-sublabel" x="300" y="96" textAnchor="middle">parallel · 1500 ms timeout</text>

          {/* SSPs */}
          <rect className="pb-box" x="185" y="115" width="110" height="38" rx="6" />
          <text className="pb-label" x="240" y="139" textAnchor="middle">SSP A</text>

          <rect className="pb-box" x="305" y="115" width="110" height="38" rx="6" />
          <text className="pb-label" x="360" y="139" textAnchor="middle">SSP B</text>

          <rect className="pb-box" x="185" y="165" width="110" height="38" rx="6" />
          <text className="pb-label" x="240" y="189" textAnchor="middle">SSP C</text>

          <rect className="pb-box" x="305" y="165" width="110" height="38" rx="6" />
          <text className="pb-label" x="360" y="189" textAnchor="middle">SSP D</text>

          <rect className="pb-box-soft" x="185" y="215" width="230" height="38" rx="6" />
          <text className="pb-sublabel" x="300" y="239" textAnchor="middle">…N more adapters, gated by consent</text>

          <rect className="pb-box-accent" x="195" y="265" width="210" height="32" rx="6" />
          <text className="pb-label" x="300" y="287" textAnchor="middle">Top bid selected</text>

          {/* Ad Server */}
          <rect className="pb-box" x="480" y="120" width="150" height="58" rx="8" />
          <text className="pb-label" x="555" y="145" textAnchor="middle">Ad server (GAM)</text>
          <text className="pb-sublabel" x="555" y="161" textAnchor="middle">final auction</text>
          <text className="pb-sublabel" x="555" y="173" textAnchor="middle">direct · exchange · AdX</text>

          {/* Creative */}
          <rect className="pb-box-accent" x="670" y="155" width="120" height="50" rx="8" />
          <text className="pb-label" x="730" y="180" textAnchor="middle">Creative</text>
          <text className="pb-sublabel" x="730" y="196" textAnchor="middle">rendered in slot</text>

          {/* Wires */}
          <path className="pb-wire" d="M122 180 L160 180" markerEnd="url(#prebid-arrow)" />
          <path className="pb-wire-accent" d="M405 281 C 440 281, 460 150, 480 150" markerEnd="url(#prebid-arrow)" />
          <path className="pb-wire" d="M630 180 L670 180" markerEnd="url(#prebid-arrow)" />

          {/* Bottom annotations */}
          <text className="pb-meta" x="67" y="325" textAnchor="middle">CLIENT</text>
          <text className="pb-meta" x="300" y="325" textAnchor="middle">CLIENT</text>
          <text className="pb-meta" x="555" y="325" textAnchor="middle">SERVER</text>
          <text className="pb-meta" x="730" y="325" textAnchor="middle">CLIENT</text>
        </svg>
      </div>
    </Figure>
  );
}
