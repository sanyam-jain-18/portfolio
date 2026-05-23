import { Figure } from "@/components/diagrams/figure";

export type StackRow = {
  layer: string;
  choice: string;
  note?: string;
};

export function StackCard({
  rows,
  title = "Stack",
  caption,
}: {
  rows: StackRow[];
  title?: string;
  caption?: string;
}) {
  return (
    <Figure caption={caption}>
      <p className="text-xs uppercase tracking-[0.22em] text-accent mb-5 font-mono">
        {title}
      </p>
      <ul className="grid gap-px bg-border rounded-lg overflow-hidden border border-border">
        {rows.map((row) => (
          <li
            key={row.layer}
            className="bg-background grid grid-cols-[minmax(0,140px)_1fr] sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)_minmax(0,1fr)] gap-3 sm:gap-6 p-4 sm:p-5"
          >
            <span className="text-xs uppercase tracking-[0.16em] text-muted-2 font-mono">
              {row.layer}
            </span>
            <span className="text-sm text-foreground font-medium">
              {row.choice}
            </span>
            {row.note && (
              <span className="text-xs text-muted sm:text-right">
                {row.note}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Figure>
  );
}
