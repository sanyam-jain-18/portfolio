import { Figure } from "@/components/diagrams/figure";

const layers = [
  {
    label: "React UI",
    sub: "Components · routing · streaming surfaces",
    items: ["Screens", "Design system", "API client"],
    accent: false,
  },
  {
    label: "Capacitor shell",
    sub: "Plugin runtime · state-sync contract · lifecycle",
    items: ["Bridge", "Lifecycle", "Storage"],
    accent: true,
  },
  {
    label: "Native iOS · Swift",
    sub: "First-class modules behind clean contracts",
    items: ["Image", "Camera", "Share", "Secure storage"],
    accent: false,
  },
];

export function HybridStackDiagram() {
  return (
    <Figure
      caption="Three-layer app stack. The Capacitor shell is the contract — not a bag of glue."
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        {layers.map((layer, idx) => (
          <div key={layer.label} className="relative">
            <div
              className={`relative rounded-lg border bg-surface/40 p-4 sm:p-5 ${
                layer.accent
                  ? "border-accent/60 bg-accent/5"
                  : "border-border"
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-3">
                <div>
                  <p className="text-xs font-mono text-muted-2 mb-1">
                    L{layers.length - idx}
                  </p>
                  <p className="text-base font-semibold text-foreground">
                    {layer.label}
                  </p>
                </div>
                <p className="text-xs text-muted text-right max-w-[60%] hidden sm:block">
                  {layer.sub}
                </p>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs px-2 py-1 rounded border border-border bg-background text-muted-2 font-mono"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {idx < layers.length - 1 && (
              <div className="flex justify-center my-1" aria-hidden="true">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  className="text-muted-2"
                >
                  <path
                    d="M6 0 L6 12 M2 8 L6 12 L10 8"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    fill="none"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Figure>
  );
}
