import { site } from "@/lib/site";

export function StatusPill() {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs text-muted backdrop-blur">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent/40 animate-pulse-dot" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="text-foreground/90">{site.pillLabel}</span>
    </div>
  );
}
