const pieces = [
  { label: "Attributes<T>", note: "typed state" },
  { label: "ApiSync<T>", note: "HTTP I/O" },
  { label: "Eventing", note: "pub/sub" },
];

export function CompositionDiagram() {
  return (
    <svg
      viewBox="0 0 280 220"
      className="w-full h-auto"
      role="img"
      aria-label="Model composes Attributes, ApiSync, and Eventing"
    >
      <defs>
        <marker
          id="comp-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path
            d="M0,0 L10,5 L0,10 z"
            fill="var(--color-accent)"
            opacity="0.7"
          />
        </marker>
      </defs>

      {/* Three composed pieces */}
      {pieces.map((p, i) => {
        const x = 14 + i * 90;
        return (
          <g key={p.label}>
            <rect
              x={x}
              y="20"
              width="76"
              height="46"
              rx="6"
              fill="var(--color-surface)"
              stroke="var(--color-border-strong)"
            />
            <text
              x={x + 38}
              y="40"
              textAnchor="middle"
              fontSize="9"
              fontFamily="ui-monospace, monospace"
              fill="var(--color-accent)"
            >
              {p.label}
            </text>
            <text
              x={x + 38}
              y="56"
              textAnchor="middle"
              fontSize="8"
              fill="var(--color-muted)"
            >
              {p.note}
            </text>
            <line
              x1={x + 38}
              y1="66"
              x2={140}
              y2="118"
              stroke="var(--color-accent)"
              strokeOpacity="0.4"
              strokeWidth="1.2"
              markerEnd="url(#comp-arrow)"
            />
          </g>
        );
      })}

      {/* Model<T> result */}
      <rect
        x="64"
        y="120"
        width="152"
        height="56"
        rx="8"
        fill="var(--color-accent)"
        fillOpacity="0.1"
        stroke="var(--color-accent)"
        strokeOpacity="0.5"
      />
      <text
        x="140"
        y="143"
        textAnchor="middle"
        fontSize="13"
        fontWeight="600"
        fontFamily="ui-monospace, monospace"
        fill="var(--color-accent)"
      >
        Model&lt;T&gt;
      </text>
      <text
        x="140"
        y="160"
        textAnchor="middle"
        fontSize="9"
        fill="var(--color-muted)"
      >
        composition · generics · zero deps
      </text>

      <text
        x="140"
        y="200"
        textAnchor="middle"
        fontSize="9"
        fill="var(--color-muted-2)"
      >
        what frameworks do, under the hood
      </text>
    </svg>
  );
}
