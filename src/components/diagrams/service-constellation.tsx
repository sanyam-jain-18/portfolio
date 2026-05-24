const services = [
  { label: "auth", angle: -90 },
  { label: "tickets", angle: -30 },
  { label: "orders", angle: 30 },
  { label: "payments", angle: 90 },
  { label: "expiration", angle: 150 },
  { label: "client", angle: 210 },
];

const RADIUS = 78;
const CENTER_X = 120;
const CENTER_Y = 110;

function polarToCartesian(angleDeg: number, r: number) {
  const a = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CENTER_X + r * Math.cos(a), y: CENTER_Y + r * Math.sin(a) };
}

export function ServiceConstellation() {
  return (
    <svg
      viewBox="0 0 240 220"
      className="w-full h-auto"
      role="img"
      aria-label="Six microservices arranged around a central NATS event bus"
    >
      {/* Connectors */}
      {services.map((s) => {
        const p = polarToCartesian(s.angle, RADIUS);
        return (
          <line
            key={`line-${s.label}`}
            x1={CENTER_X}
            y1={CENTER_Y}
            x2={p.x}
            y2={p.y}
            stroke="var(--color-accent)"
            strokeOpacity="0.25"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
        );
      })}

      {/* Central NATS bus */}
      <circle
        cx={CENTER_X}
        cy={CENTER_Y}
        r="26"
        fill="var(--color-accent)"
        fillOpacity="0.12"
        stroke="var(--color-accent)"
        strokeOpacity="0.6"
      />
      <text
        x={CENTER_X}
        y={CENTER_Y - 2}
        textAnchor="middle"
        fontSize="10"
        fontFamily="ui-monospace, monospace"
        fill="var(--color-accent)"
      >
        NATS
      </text>
      <text
        x={CENTER_X}
        y={CENTER_Y + 10}
        textAnchor="middle"
        fontSize="8"
        fill="var(--color-muted)"
      >
        event bus
      </text>

      {/* Service nodes */}
      {services.map((s) => {
        const p = polarToCartesian(s.angle, RADIUS);
        return (
          <g key={s.label}>
            <circle
              cx={p.x}
              cy={p.y}
              r="14"
              fill="var(--color-surface)"
              stroke="var(--color-border-strong)"
            />
            <text
              x={p.x}
              y={p.y + 3}
              textAnchor="middle"
              fontSize="8"
              fontFamily="ui-monospace, monospace"
              fill="var(--color-foreground)"
            >
              {s.label}
            </text>
          </g>
        );
      })}

      {/* Caption row */}
      <text
        x={CENTER_X}
        y="208"
        textAnchor="middle"
        fontSize="9"
        fill="var(--color-muted)"
      >
        6 services · per-service Mongo · NATS pub/sub
      </text>
    </svg>
  );
}
