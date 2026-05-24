const nodes = [
  { x: 14, label: "CLI", note: "provisioner" },
  { x: 80, label: "Space", note: "schema", accent: true },
  { x: 146, label: "Next.js", note: "SSG + ISR" },
];

export function ContentfulFlowCard() {
  return (
    <svg
      viewBox="0 0 200 120"
      className="w-full h-auto"
      role="img"
      aria-label="Contentful pipeline: CLI provisions space, Next.js builds static pages"
    >
      <defs>
        <marker
          id="cf-card-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path
            d="M0,0 L10,5 L0,10 z"
            fill="var(--color-accent)"
            opacity="0.6"
          />
        </marker>
      </defs>

      {nodes.map((n, i) => (
        <g key={n.label}>
          <rect
            x={n.x}
            y="42"
            width="40"
            height="40"
            rx="5"
            fill={
              n.accent
                ? "color-mix(in srgb, var(--color-accent) 14%, transparent)"
                : "var(--color-surface)"
            }
            stroke={
              n.accent ? "var(--color-accent)" : "var(--color-border-strong)"
            }
            strokeOpacity={n.accent ? 0.6 : 1}
          />
          <text
            x={n.x + 20}
            y="60"
            textAnchor="middle"
            fontSize="9"
            fontWeight="600"
            fontFamily="ui-monospace, monospace"
            fill={n.accent ? "var(--color-accent)" : "var(--color-foreground)"}
          >
            {n.label}
          </text>
          <text
            x={n.x + 20}
            y="74"
            textAnchor="middle"
            fontSize="7"
            fill="var(--color-muted)"
          >
            {n.note}
          </text>
          {i < nodes.length - 1 && (
            <line
              x1={n.x + 42}
              y1="62"
              x2={nodes[i + 1].x - 2}
              y2="62"
              stroke="var(--color-muted)"
              strokeOpacity="0.5"
              strokeWidth="1"
              markerEnd="url(#cf-card-arrow)"
            />
          )}
        </g>
      ))}

      {/* Webhook curve back */}
      <path
        d="M 166 42 Q 166 18 100 18 Q 80 18 80 42"
        fill="none"
        stroke="var(--color-accent)"
        strokeOpacity="0.5"
        strokeWidth="1"
        strokeDasharray="2 3"
        markerEnd="url(#cf-card-arrow)"
      />
      <text
        x="100"
        y="14"
        textAnchor="middle"
        fontSize="7"
        fill="var(--color-muted)"
        fontFamily="ui-monospace, monospace"
      >
        webhook revalidate
      </text>

      <text
        x="100"
        y="104"
        textAnchor="middle"
        fontSize="8"
        fill="var(--color-muted-2)"
      >
        schema-in-code · static + on-demand
      </text>
    </svg>
  );
}
