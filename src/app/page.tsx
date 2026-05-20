import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { caseStudies } from "@/lib/work";

export default function HomePage() {
  return (
    <>
      <section className="container-page pt-20 pb-24 sm:pt-28 sm:pb-32">
        <p className="text-sm uppercase tracking-[0.2em] text-muted mb-6">
          {site.role} · {site.location}
        </p>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] max-w-3xl">
          I design and ship resilient web platforms — from{" "}
          <span className="text-accent">backend architecture</span> to{" "}
          <span className="text-accent">AI-augmented product surfaces</span>.
        </h1>
        <p className="mt-8 text-lg text-muted max-w-2xl leading-relaxed">
          {site.tagline} Currently focused on architecture, GenAI integration, and
          frontend performance at scale.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded font-medium hover:opacity-90 transition-opacity"
          >
            View selected work
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-3 rounded font-medium hover:bg-surface transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Selected work
          </h2>
          <Link
            href="/work"
            className="text-sm text-muted hover:text-accent inline-flex items-center gap-1"
          >
            All projects
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid gap-px bg-border rounded-lg overflow-hidden border border-border">
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
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                      {cs.title}
                    </h3>
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
    </>
  );
}
