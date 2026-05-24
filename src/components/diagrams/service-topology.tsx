import { Figure } from "@/components/diagrams/figure";

type Service = {
  x: number;
  label: string;
  hasMongo: boolean;
  onBus: boolean;
};

const SERVICES: Service[] = [
  { x: 60, label: "auth", hasMongo: true, onBus: false },
  { x: 200, label: "tickets", hasMongo: true, onBus: true },
  { x: 340, label: "orders", hasMongo: true, onBus: true },
  { x: 480, label: "payments", hasMongo: true, onBus: true },
  { x: 620, label: "expiration", hasMongo: false, onBus: true },
];

const SERVICE_W = 110;
const SERVICE_H = 60;
const SERVICE_Y = 110;
const MONGO_Y = 210;
const NATS_Y = 310;

export function ServiceTopology() {
  return (
    <Figure caption="Six services on GKE behind ingress-nginx. NATS Streaming carries domain events between the four services that need to coordinate; auth stays stateless and JWT-only. Each service owns its own Mongo — no shared database.">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 760 460"
          className="w-full min-w-[720px] text-foreground"
          role="img"
          aria-label="Service topology: ingress-nginx routes to six services on GKE, four of which communicate via NATS Streaming"
        >
          <defs>
            <marker
              id="topo-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="currentColor" opacity="0.5" />
            </marker>
            <style>{`
              .topo-box { fill: var(--color-surface); stroke: var(--color-border-strong); stroke-width: 1; }
              .topo-accent { fill: color-mix(in srgb, var(--color-accent) 12%, transparent); stroke: var(--color-accent); stroke-width: 1; }
              .topo-label { fill: var(--color-foreground); font: 600 12px ui-monospace, monospace; }
              .topo-sublabel { fill: var(--color-muted); font: 400 10px ui-sans-serif, sans-serif; }
              .topo-wire { stroke: var(--color-muted); stroke-width: 1; fill: none; opacity: 0.5; }
              .topo-wire-event { stroke: var(--color-accent); stroke-width: 1.4; fill: none; opacity: 0.75; }
              .topo-pill { fill: color-mix(in srgb, var(--color-accent) 8%, transparent); stroke: var(--color-accent); stroke-opacity: 0.4; }
            `}</style>
          </defs>

          {/* GKE wrapper */}
          <rect
            x="10"
            y="10"
            width="740"
            height="380"
            rx="14"
            fill="none"
            stroke="var(--color-border)"
            strokeDasharray="4 4"
          />
          <text
            x="22"
            y="28"
            className="topo-sublabel"
            style={{ fontFamily: "ui-monospace, monospace" }}
          >
            Google Kubernetes Engine · ingress-nginx · Skaffold dev loop
          </text>

          {/* ingress-nginx */}
          <rect className="topo-accent" x="60" y="44" width="640" height="40" rx="8" />
          <text className="topo-label" x="380" y="68" textAnchor="middle">
            ingress-nginx
          </text>
          <text className="topo-sublabel" x="380" y="80" textAnchor="middle">
            host-based routing · TLS termination
          </text>

          {/* Routing wires from ingress to each service */}
          {SERVICES.map((s) => (
            <line
              key={`wire-${s.label}`}
              className="topo-wire"
              x1={s.x + SERVICE_W / 2}
              y1="84"
              x2={s.x + SERVICE_W / 2}
              y2={SERVICE_Y}
              markerEnd="url(#topo-arrow)"
            />
          ))}

          {/* Services */}
          {SERVICES.map((s) => (
            <g key={`svc-${s.label}`}>
              <rect
                className="topo-box"
                x={s.x}
                y={SERVICE_Y}
                width={SERVICE_W}
                height={SERVICE_H}
                rx="8"
              />
              <text
                className="topo-label"
                x={s.x + SERVICE_W / 2}
                y={SERVICE_Y + 26}
                textAnchor="middle"
              >
                {s.label}
              </text>
              <text
                className="topo-sublabel"
                x={s.x + SERVICE_W / 2}
                y={SERVICE_Y + 44}
                textAnchor="middle"
              >
                Express · TS
              </text>
            </g>
          ))}

          {/* Mongo per service */}
          {SERVICES.filter((s) => s.hasMongo).map((s) => {
            const cx = s.x + SERVICE_W / 2;
            const top = MONGO_Y;
            const w = 56;
            const h = 36;
            return (
              <g key={`db-${s.label}`}>
                <line
                  className="topo-wire"
                  x1={cx}
                  y1={SERVICE_Y + SERVICE_H}
                  x2={cx}
                  y2={top}
                />
                {/* DB cylinder: two ellipses + a rect */}
                <ellipse
                  cx={cx}
                  cy={top}
                  rx={w / 2}
                  ry={6}
                  fill="var(--color-surface)"
                  stroke="var(--color-border-strong)"
                />
                <rect
                  x={cx - w / 2}
                  y={top}
                  width={w}
                  height={h - 12}
                  fill="var(--color-surface)"
                  stroke="var(--color-border-strong)"
                />
                <ellipse
                  cx={cx}
                  cy={top + h - 12}
                  rx={w / 2}
                  ry={6}
                  fill="var(--color-surface)"
                  stroke="var(--color-border-strong)"
                />
                <text
                  className="topo-sublabel"
                  x={cx}
                  y={top + h - 16}
                  textAnchor="middle"
                  style={{ fontFamily: "ui-monospace, monospace" }}
                >
                  mongo
                </text>
              </g>
            );
          })}

          {/* NATS bus */}
          <rect className="topo-accent" x="200" y={NATS_Y} width="500" height="36" rx="8" />
          <text className="topo-label" x="450" y={NATS_Y + 22} textAnchor="middle">
            NATS Streaming
          </text>

          {/* Bus wires to event-driven services */}
          {SERVICES.filter((s) => s.onBus).map((s) => {
            const cx = s.x + SERVICE_W / 2;
            return (
              <g key={`bus-${s.label}`}>
                <line
                  className="topo-wire-event"
                  x1={cx}
                  y1={s.hasMongo ? MONGO_Y + 36 : SERVICE_Y + SERVICE_H}
                  x2={cx}
                  y2={NATS_Y}
                />
              </g>
            );
          })}

          {/* Bus subtitle */}
          <text
            x="450"
            y={NATS_Y + 56}
            textAnchor="middle"
            className="topo-sublabel"
            style={{ fontFamily: "ui-monospace, monospace" }}
          >
            durable subscriptions · queue groups · ack on commit
          </text>

          {/* Stripe (external) */}
          <rect
            x="640"
            y="160"
            width="100"
            height="40"
            rx="8"
            fill="var(--color-surface-2)"
            stroke="var(--color-border-strong)"
          />
          <text className="topo-label" x="690" y="178" textAnchor="middle">
            Stripe
          </text>
          <text className="topo-sublabel" x="690" y="192" textAnchor="middle">
            external
          </text>
          <path
            className="topo-wire"
            d={`M ${480 + SERVICE_W} ${SERVICE_Y + 20} Q ${600} ${SERVICE_Y + 20} 640 180`}
            markerEnd="url(#topo-arrow)"
          />

          {/* Client SSR box */}
          <rect
            x="60"
            y="404"
            width="120"
            height="36"
            rx="8"
            fill="var(--color-surface-2)"
            stroke="var(--color-border-strong)"
          />
          <text className="topo-label" x="120" y="422" textAnchor="middle">
            client (SSR)
          </text>
          <text className="topo-sublabel" x="120" y="434" textAnchor="middle">
            Next.js
          </text>
          <path
            className="topo-wire"
            d={`M 120 404 Q 120 44 60 44`}
            markerEnd="url(#topo-arrow)"
            opacity="0"
          />
          <path
            className="topo-wire"
            d={`M 120 404 L 120 84`}
            markerEnd="url(#topo-arrow)"
          />
        </svg>
      </div>
    </Figure>
  );
}
