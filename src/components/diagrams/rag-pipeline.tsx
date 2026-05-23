import { Figure } from "@/components/diagrams/figure";

export function RagPipelineDiagram() {
  return (
    <Figure caption="Hybrid retrieval pipeline. The LLM picks from a constrained set; it never invents the set.">
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 760 280"
          className="w-full min-w-[720px] text-foreground"
          role="img"
          aria-label="RAG pipeline: Query goes through HyDE rewrite, then in parallel through dense and sparse retrieval, merged via RRF, then handed to a constrained LLM, producing a recommendation."
        >
          <defs>
            <marker
              id="arrow"
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
              .box { fill: var(--color-surface); stroke: var(--color-border); stroke-width: 1; }
              .box-accent { fill: color-mix(in srgb, var(--color-accent) 10%, transparent); stroke: var(--color-accent); stroke-width: 1; }
              .label { fill: var(--color-foreground); font: 500 13px var(--font-sans, sans-serif); }
              .sublabel { fill: var(--color-muted); font: 400 11px var(--font-sans, sans-serif); }
              .wire { stroke: var(--color-muted); stroke-width: 1.2; fill: none; }
            `}</style>
          </defs>

          {/* Query */}
          <rect className="box" x="10" y="120" width="110" height="56" rx="8" />
          <text className="label" x="65" y="148" textAnchor="middle">Query</text>
          <text className="sublabel" x="65" y="164" textAnchor="middle">user intent</text>

          {/* HyDE */}
          <rect className="box-accent" x="150" y="120" width="130" height="56" rx="8" />
          <text className="label" x="215" y="148" textAnchor="middle">HyDE rewrite</text>
          <text className="sublabel" x="215" y="164" textAnchor="middle">hypothetical doc</text>

          {/* Dense */}
          <rect className="box" x="320" y="50" width="160" height="56" rx="8" />
          <text className="label" x="400" y="78" textAnchor="middle">Dense retrieval</text>
          <text className="sublabel" x="400" y="94" textAnchor="middle">embeddings · top-k</text>

          {/* Sparse */}
          <rect className="box" x="320" y="190" width="160" height="56" rx="8" />
          <text className="label" x="400" y="218" textAnchor="middle">Sparse retrieval</text>
          <text className="sublabel" x="400" y="234" textAnchor="middle">BM25 · top-k</text>

          {/* RRF */}
          <rect className="box-accent" x="510" y="120" width="100" height="56" rx="8" />
          <text className="label" x="560" y="148" textAnchor="middle">RRF</text>
          <text className="sublabel" x="560" y="164" textAnchor="middle">rank fusion</text>

          {/* LLM */}
          <rect className="box-accent" x="640" y="120" width="110" height="56" rx="8" />
          <text className="label" x="695" y="148" textAnchor="middle">LLM</text>
          <text className="sublabel" x="695" y="164" textAnchor="middle">constrained gen</text>

          {/* Arrows */}
          <path className="wire" d="M120 148 L150 148" markerEnd="url(#arrow)" />
          <path className="wire" d="M280 148 C 300 148, 310 78, 320 78" markerEnd="url(#arrow)" />
          <path className="wire" d="M280 148 C 300 148, 310 218, 320 218" markerEnd="url(#arrow)" />
          <path className="wire" d="M480 78 C 500 78, 500 148, 510 148" markerEnd="url(#arrow)" />
          <path className="wire" d="M480 218 C 500 218, 500 148, 510 148" markerEnd="url(#arrow)" />
          <path className="wire" d="M610 148 L640 148" markerEnd="url(#arrow)" />
        </svg>
      </div>
    </Figure>
  );
}
