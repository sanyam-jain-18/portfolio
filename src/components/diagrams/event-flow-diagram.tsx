import { Figure } from "@/components/diagrams/figure";

const LANES = [
  { x: 60, label: "client" },
  { x: 200, label: "orders" },
  { x: 340, label: "tickets" },
  { x: 480, label: "NATS", accent: true },
  { x: 620, label: "payments" },
];

type Step = {
  y: number;
  from: number;
  to: number;
  label: string;
  kind: "rest" | "event";
};

const STEPS: Step[] = [
  { y: 80, from: 0, to: 1, label: "POST /api/orders", kind: "rest" },
  { y: 120, from: 1, to: 3, label: "publish: order:created", kind: "event" },
  { y: 160, from: 3, to: 2, label: "deliver: order:created", kind: "event" },
  { y: 200, from: 3, to: 4, label: "deliver: order:created", kind: "event" },
  { y: 240, from: 0, to: 4, label: "POST /api/payments (token)", kind: "rest" },
  { y: 280, from: 4, to: 3, label: "publish: payment:created (→ NATS)", kind: "event" },
  { y: 320, from: 3, to: 1, label: "deliver: payment:created → status=complete", kind: "event" },
];

export function EventFlowDiagram() {
  return (
    <Figure caption="The happy-path purchase flow. Solid lines are HTTP; dashed lines are NATS events. The orders service never calls the tickets or payments services directly — every cross-service step travels through the bus, so each consumer can be rebuilt or replayed independently.">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 720 380"
          className="w-full min-w-[680px] text-foreground"
          role="img"
          aria-label="Sequence diagram of an order purchase across client, orders, tickets, NATS, and payments"
        >
          <defs>
            <marker
              id="flow-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="currentColor" opacity="0.7" />
            </marker>
            <style>{`
              .lane-label { fill: var(--color-foreground); font: 600 11px ui-monospace, monospace; }
              .lane-label-accent { fill: var(--color-accent); font: 600 11px ui-monospace, monospace; }
              .lane-line { stroke: var(--color-border); stroke-width: 1; stroke-dasharray: 2 4; }
              .step-rest { stroke: var(--color-muted); stroke-width: 1.3; fill: none; }
              .step-event { stroke: var(--color-accent); stroke-width: 1.4; fill: none; stroke-dasharray: 4 3; }
              .step-label { fill: var(--color-muted); font: 400 10px ui-sans-serif, sans-serif; }
              .step-bg { fill: var(--color-background); }
              .lane-box { fill: var(--color-surface); stroke: var(--color-border-strong); }
              .lane-box-accent { fill: color-mix(in srgb, var(--color-accent) 12%, transparent); stroke: var(--color-accent); }
            `}</style>
          </defs>

          {/* Lane headers + dotted vertical lines */}
          {LANES.map((lane) => (
            <g key={lane.label}>
              <rect
                className={lane.accent ? "lane-box-accent" : "lane-box"}
                x={lane.x - 40}
                y="14"
                width="80"
                height="30"
                rx="6"
              />
              <text
                className={lane.accent ? "lane-label-accent" : "lane-label"}
                x={lane.x}
                y="34"
                textAnchor="middle"
              >
                {lane.label}
              </text>
              <line
                className="lane-line"
                x1={lane.x}
                y1="50"
                x2={lane.x}
                y2="360"
              />
            </g>
          ))}

          {/* Steps */}
          {STEPS.map((step, i) => {
            const fromX = LANES[step.from].x;
            const toX = LANES[step.to].x;
            const minX = Math.min(fromX, toX);
            const maxX = Math.max(fromX, toX);
            const midX = (fromX + toX) / 2;
            return (
              <g key={`step-${i}`}>
                <line
                  className={step.kind === "event" ? "step-event" : "step-rest"}
                  x1={fromX}
                  y1={step.y}
                  x2={toX}
                  y2={step.y}
                  markerEnd="url(#flow-arrow)"
                />
                {/* label sits above the line on a bg-coloured pill so it stays readable */}
                <rect
                  className="step-bg"
                  x={minX + 6}
                  y={step.y - 14}
                  width={maxX - minX - 12}
                  height={12}
                />
                <text className="step-label" x={midX} y={step.y - 4} textAnchor="middle">
                  {step.label}
                </text>
              </g>
            );
          })}

          {/* Legend */}
          <g transform="translate(60, 350)">
            <line x1="0" y1="0" x2="24" y2="0" className="step-rest" />
            <text x="30" y="3" className="step-label">
              HTTP / REST
            </text>
            <line x1="120" y1="0" x2="144" y2="0" className="step-event" />
            <text x="150" y="3" className="step-label">
              NATS event
            </text>
          </g>
        </svg>
      </div>
    </Figure>
  );
}
