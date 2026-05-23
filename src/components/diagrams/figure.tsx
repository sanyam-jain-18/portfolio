import type { ReactNode } from "react";

export function Figure({
  caption,
  children,
}: {
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="not-prose my-10 rounded-xl border border-border bg-surface/30 p-6 sm:p-8">
      <div>{children}</div>
      {caption && (
        <figcaption className="mt-5 text-xs text-muted-2 italic leading-relaxed text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
