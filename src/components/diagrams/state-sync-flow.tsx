import { Figure } from "@/components/diagrams/figure";

const entries = [
  {
    label: "SPA route change",
    detail: "Soft re-entry — hydrate from in-memory store, skip native handshake",
    color: "text-foreground",
  },
  {
    label: "Full reload",
    detail: "Cold re-entry — re-request session from native singleton",
    color: "text-accent",
  },
  {
    label: "Background return",
    detail: "Resume — diff native state against last-seen snapshot",
    color: "text-foreground",
  },
];

export function StateSyncFlow() {
  return (
    <Figure caption="Three re-entry points, three handlers. The bug was treating them as one.">
      <ol className="grid gap-3 sm:gap-4 sm:grid-cols-3">
        {entries.map((entry, i) => (
          <li
            key={entry.label}
            className="rounded-lg border border-border bg-background p-5"
          >
            <p className="font-mono text-xs text-muted-2 mb-2">
              /{String(i + 1).padStart(2, "0")}
            </p>
            <p className={`text-sm font-semibold ${entry.color} mb-2`}>
              {entry.label}
            </p>
            <p className="text-xs text-muted leading-relaxed">
              {entry.detail}
            </p>
          </li>
        ))}
      </ol>
    </Figure>
  );
}
