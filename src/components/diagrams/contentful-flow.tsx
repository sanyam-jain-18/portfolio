import { Figure } from "@/components/diagrams/figure";

export function ContentfulFlow() {
  return (
    <Figure caption="The pipeline: a CLI provisioner stands up the Contentful space programmatically, the Next.js build pulls structured content, and pages ship as static HTML with on-demand revalidation for editor updates.">
      <svg
        viewBox="0 0 720 240"
        className="w-full h-auto text-foreground"
        role="img"
        aria-label="Contentful content pipeline: provisioner, space, build, page"
      >
        <defs>
          <marker
            id="cf-arrow"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="8"
            markerHeight="8"
            orient="auto"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="currentColor" opacity="0.5" />
          </marker>
        </defs>

        {/* Stage 1: CLI */}
        <g>
          <rect
            x="20"
            y="80"
            width="140"
            height="80"
            rx="10"
            fill="var(--color-surface)"
            stroke="var(--color-border-strong)"
          />
          <text
            x="90"
            y="108"
            textAnchor="middle"
            fontSize="11"
            fontFamily="ui-monospace, monospace"
            fill="var(--color-accent)"
          >
            scripts/setup.js
          </text>
          <text
            x="90"
            y="132"
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill="currentColor"
          >
            CLI provisioner
          </text>
          <text
            x="90"
            y="148"
            textAnchor="middle"
            fontSize="10"
            fill="var(--color-muted)"
          >
            inquirer · mgmt API
          </text>
        </g>

        <line
          x1="160"
          y1="120"
          x2="218"
          y2="120"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.5"
          markerEnd="url(#cf-arrow)"
        />

        {/* Stage 2: Contentful space */}
        <g>
          <rect
            x="220"
            y="60"
            width="150"
            height="120"
            rx="10"
            fill="var(--color-accent)"
            fillOpacity="0.08"
            stroke="var(--color-accent)"
            strokeOpacity="0.5"
          />
          <text
            x="295"
            y="86"
            textAnchor="middle"
            fontSize="11"
            fontFamily="ui-monospace, monospace"
            fill="var(--color-accent)"
          >
            contentful space
          </text>
          <text
            x="295"
            y="108"
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill="currentColor"
          >
            Content model
          </text>
          {[
            { y: 124, label: "Post" },
            { y: 140, label: "Author" },
            { y: 156, label: "Category" },
          ].map((row) => (
            <g key={row.label}>
              <circle
                cx="246"
                cy={row.y}
                r="2"
                fill="var(--color-accent)"
              />
              <text
                x="256"
                y={row.y + 3}
                fontSize="10"
                fill="var(--color-muted)"
              >
                {row.label}
              </text>
            </g>
          ))}
        </g>

        <line
          x1="370"
          y1="120"
          x2="428"
          y2="120"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.5"
          markerEnd="url(#cf-arrow)"
        />

        {/* Stage 3: Next.js build */}
        <g>
          <rect
            x="430"
            y="80"
            width="140"
            height="80"
            rx="10"
            fill="var(--color-surface)"
            stroke="var(--color-border-strong)"
          />
          <text
            x="500"
            y="108"
            textAnchor="middle"
            fontSize="11"
            fontFamily="ui-monospace, monospace"
            fill="var(--color-accent)"
          >
            getStaticProps
          </text>
          <text
            x="500"
            y="132"
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill="currentColor"
          >
            Next.js build
          </text>
          <text
            x="500"
            y="148"
            textAnchor="middle"
            fontSize="10"
            fill="var(--color-muted)"
          >
            SSG + ISR · rich text
          </text>
        </g>

        <line
          x1="570"
          y1="120"
          x2="628"
          y2="120"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.5"
          markerEnd="url(#cf-arrow)"
        />

        {/* Stage 4: Rendered page */}
        <g>
          <rect
            x="630"
            y="80"
            width="70"
            height="80"
            rx="10"
            fill="var(--color-surface)"
            stroke="var(--color-border-strong)"
          />
          <text
            x="665"
            y="118"
            textAnchor="middle"
            fontSize="11"
            fontFamily="ui-monospace, monospace"
            fill="var(--color-muted)"
          >
            HTML
          </text>
          <text
            x="665"
            y="136"
            textAnchor="middle"
            fontSize="10"
            fill="var(--color-muted)"
          >
            edge-cached
          </text>
        </g>

        {/* Webhook arrow back */}
        <path
          d="M 665 80 Q 665 30 295 30 Q 220 30 220 60"
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity="0.4"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          markerEnd="url(#cf-arrow)"
        />
        <text
          x="450"
          y="22"
          fontSize="10"
          fill="var(--color-muted)"
          fontFamily="ui-monospace, monospace"
        >
          webhook → on-demand revalidate
        </text>
      </svg>
    </Figure>
  );
}
