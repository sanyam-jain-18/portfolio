const layers = [
  { y: 18, label: "React UI", note: "components · routing", accent: false },
  { y: 56, label: "Capacitor shell", note: "bridge · lifecycle", accent: true },
  { y: 94, label: "Native iOS · Swift", note: "image · camera · share", accent: false },
];

export function HybridStackCard() {
  return (
    <svg
      viewBox="0 0 200 140"
      className="w-full h-auto"
      role="img"
      aria-label="Three-layer hybrid stack: React UI on top, Capacitor shell, native iOS Swift modules"
    >
      {layers.map((l) => (
        <g key={l.label}>
          <rect
            x="14"
            y={l.y}
            width="172"
            height="30"
            rx="5"
            fill={
              l.accent
                ? "color-mix(in srgb, var(--color-accent) 14%, transparent)"
                : "var(--color-surface)"
            }
            stroke={
              l.accent ? "var(--color-accent)" : "var(--color-border-strong)"
            }
            strokeOpacity={l.accent ? 0.6 : 1}
          />
          <text
            x="22"
            y={l.y + 14}
            fontSize="10"
            fontWeight="600"
            fontFamily="ui-monospace, monospace"
            fill={l.accent ? "var(--color-accent)" : "var(--color-foreground)"}
          >
            {l.label}
          </text>
          <text
            x="22"
            y={l.y + 25}
            fontSize="8"
            fill="var(--color-muted)"
          >
            {l.note}
          </text>
        </g>
      ))}
      <line
        x1="100"
        y1="48"
        x2="100"
        y2="56"
        stroke="var(--color-accent)"
        strokeOpacity="0.5"
        strokeDasharray="2 2"
      />
      <line
        x1="100"
        y1="86"
        x2="100"
        y2="94"
        stroke="var(--color-accent)"
        strokeOpacity="0.5"
        strokeDasharray="2 2"
      />
    </svg>
  );
}
