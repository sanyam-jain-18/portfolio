import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies — architecture, GenAI, and performance.",
};

export default function WorkPage() {
  return (
    <section className="container-page pt-16 sm:pt-20 pb-16">
      <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">Work</p>
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
        Things I&apos;ve led, built, or rescued.
      </h1>
      <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl">
        Three case studies that cut across architecture, GenAI, and performance —
        the threads that define how I work today.
      </p>

      <ul className="mt-16 grid gap-px bg-border rounded-lg overflow-hidden border border-border">
        {caseStudies.map((cs) => (
          <li key={cs.slug} className="bg-background">
            <Link
              href={`/work/${cs.slug}`}
              className="block p-6 sm:p-8 hover:bg-surface transition-colors group"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted mb-3">
                    {cs.period} · {cs.role}
                  </p>
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                    {cs.title}
                  </h2>
                  <p className="mt-3 text-muted leading-relaxed max-w-2xl">
                    {cs.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {cs.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs px-2 py-1 rounded-sm border border-border text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 text-muted group-hover:text-accent flex-shrink-0 mt-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
