import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { CaseStudy } from "@/lib/work";

export function CaseStudyLayout({
  study,
  children,
}: {
  study: CaseStudy;
  children: React.ReactNode;
}) {
  return (
    <article className="container-page pt-12 sm:pt-16 pb-20 max-w-3xl">
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Back to all work
      </Link>

      <header className="mb-12 pb-12 border-b border-border">
        <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">
          {study.period} · {study.role}
        </p>
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
          {study.title}
        </h1>
        <p className="mt-6 text-lg text-muted leading-relaxed">
          {study.summary}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs px-2 py-1 rounded-sm border border-border text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div
        className="prose prose-invert max-w-none
          prose-headings:tracking-tight prose-headings:font-semibold
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-foreground prose-p:leading-relaxed
          prose-li:text-foreground prose-li:leading-relaxed
          prose-strong:text-accent prose-strong:font-semibold
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-code:text-accent prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal prose-code:before:hidden prose-code:after:hidden
          prose-blockquote:border-l-accent prose-blockquote:text-muted prose-blockquote:not-italic
          prose-hr:border-border"
      >
        {children}
      </div>
    </article>
  );
}
