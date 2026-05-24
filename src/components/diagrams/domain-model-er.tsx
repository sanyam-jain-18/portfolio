export function DomainModelEr() {
  return (
    <svg
      viewBox="0 0 260 180"
      className="w-full h-auto"
      role="img"
      aria-label="Domain model with User, Profile, Post entities and their relationships"
    >
      <defs>
        <marker
          id="er-arrow"
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

      {/* User */}
      <g>
        <rect
          x="14"
          y="60"
          width="80"
          height="46"
          rx="6"
          fill="var(--color-accent)"
          fillOpacity="0.1"
          stroke="var(--color-accent)"
          strokeOpacity="0.5"
        />
        <text
          x="54"
          y="80"
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fontFamily="ui-monospace, monospace"
          fill="var(--color-accent)"
        >
          User
        </text>
        <text
          x="54"
          y="96"
          textAnchor="middle"
          fontSize="9"
          fill="var(--color-muted)"
        >
          JWT · bcrypt
        </text>
      </g>

      {/* Profile */}
      <g>
        <rect
          x="138"
          y="14"
          width="108"
          height="60"
          rx="6"
          fill="var(--color-surface)"
          stroke="var(--color-border-strong)"
        />
        <text
          x="192"
          y="33"
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fontFamily="ui-monospace, monospace"
          fill="var(--color-foreground)"
        >
          Profile
        </text>
        <text
          x="192"
          y="48"
          textAnchor="middle"
          fontSize="8"
          fill="var(--color-muted)"
        >
          experience[]
        </text>
        <text
          x="192"
          y="60"
          textAnchor="middle"
          fontSize="8"
          fill="var(--color-muted)"
        >
          education[] · social
        </text>
      </g>

      {/* Post */}
      <g>
        <rect
          x="138"
          y="100"
          width="108"
          height="60"
          rx="6"
          fill="var(--color-surface)"
          stroke="var(--color-border-strong)"
        />
        <text
          x="192"
          y="120"
          textAnchor="middle"
          fontSize="11"
          fontWeight="600"
          fontFamily="ui-monospace, monospace"
          fill="var(--color-foreground)"
        >
          Post
        </text>
        <text
          x="192"
          y="134"
          textAnchor="middle"
          fontSize="8"
          fill="var(--color-muted)"
        >
          comments[]
        </text>
        <text
          x="192"
          y="146"
          textAnchor="middle"
          fontSize="8"
          fill="var(--color-muted)"
        >
          likes · author ref
        </text>
      </g>

      {/* Edges */}
      <line
        x1="94"
        y1="70"
        x2="138"
        y2="40"
        stroke="var(--color-accent)"
        strokeOpacity="0.5"
        strokeWidth="1.2"
        markerEnd="url(#er-arrow)"
      />
      <text x="106" y="48" fontSize="8" fill="var(--color-muted)">
        1:1
      </text>

      <line
        x1="94"
        y1="92"
        x2="138"
        y2="124"
        stroke="var(--color-accent)"
        strokeOpacity="0.5"
        strokeWidth="1.2"
        markerEnd="url(#er-arrow)"
      />
      <text x="100" y="120" fontSize="8" fill="var(--color-muted)">
        1:N
      </text>

      {/* GitHub external badge */}
      <g>
        <rect
          x="14"
          y="130"
          width="80"
          height="24"
          rx="4"
          fill="var(--color-surface-2)"
          stroke="var(--color-border-strong)"
        />
        <text
          x="54"
          y="146"
          textAnchor="middle"
          fontSize="9"
          fontFamily="ui-monospace, monospace"
          fill="var(--color-muted)"
        >
          GitHub API
        </text>
      </g>
      <line
        x1="54"
        y1="130"
        x2="54"
        y2="106"
        stroke="var(--color-muted)"
        strokeOpacity="0.4"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
}
