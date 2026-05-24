import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import type { CaseStudy } from "@/lib/work";
import { Reveal } from "@/components/reveal";

function readingMinutes(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.max(2, Math.round(words / 220));
}

export function CaseStudyLayout({
  study,
  rawContent,
  prev,
  next,
  children,
}: {
  study: CaseStudy;
  rawContent: string;
  prev: CaseStudy | null;
  next: CaseStudy | null;
  children: React.ReactNode;
}) {
  const minutes = readingMinutes(rawContent);

  return (
    <>
      <article className="container-page pt-10 sm:pt-14 pb-16 max-w-3xl">
        <Reveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10 group"
          >
            <ArrowLeft
              className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Back to home
          </Link>
        </Reveal>

        <header className="mb-12 pb-12 border-b border-border">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">
              {study.period} · {study.role}
            </p>
          </Reveal>
          <Reveal delay={0.1} y={24}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              {study.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-muted leading-relaxed">
              {study.summary}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-2 font-mono">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                {minutes} min read
              </span>
              <span className="text-xs text-muted-2">·</span>
              <ul className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-sm border border-border text-muted-2"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              {study.repoUrl && (
                <a
                  href={study.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-sm border border-accent/40 text-accent hover:bg-accent/10 transition-colors font-mono"
                >
                  Source
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        </header>

        <Reveal delay={0.1}>
          <div
            className="prose prose-invert max-w-none
              prose-headings:tracking-tight prose-headings:font-semibold
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:text-foreground
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-foreground
              prose-p:text-foreground/90 prose-p:leading-[1.75] prose-p:text-lg
              prose-li:text-foreground/90 prose-li:leading-[1.75]
              prose-strong:text-accent prose-strong:font-semibold
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-code:text-accent prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal prose-code:before:hidden prose-code:after:hidden
              prose-blockquote:border-l-2 prose-blockquote:border-l-accent prose-blockquote:bg-surface/40 prose-blockquote:pl-6 prose-blockquote:py-3 prose-blockquote:rounded-r-md prose-blockquote:text-foreground prose-blockquote:not-italic prose-blockquote:font-medium
              prose-hr:border-border"
          >
            {children}
          </div>
        </Reveal>
      </article>

      {/* Next / prev navigation */}
      <section className="border-t border-border/60 mt-10 bg-surface/20">
        <div className="container-page py-14">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-6">
            Keep reading
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group rounded-lg border border-border bg-background p-6 card-hover hover:border-accent/40"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-2 mb-3">
                  <ArrowLeft
                    className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5"
                    aria-hidden="true"
                  />
                  Previous
                </div>
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
                  {prev.title}
                </h3>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group rounded-lg border border-border bg-background p-6 card-hover hover:border-accent/40 sm:text-right"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-2 mb-3 sm:justify-end">
                  Next
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
                  {next.title}
                </h3>
              </Link>
            ) : (
              <Link
                href="/"
                className="group rounded-lg border border-border bg-background p-6 card-hover hover:border-accent/40 sm:text-right"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-2 mb-3 sm:justify-end">
                  Home
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
                  Browse the full set
                </h3>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
