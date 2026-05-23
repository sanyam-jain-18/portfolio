import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { site, currently } from "@/lib/site";
import { caseStudies } from "@/lib/work";
import { StatusPill } from "@/components/status-pill";
import { Reveal } from "@/components/reveal";
import { StaggerList, StaggerItem } from "@/components/stagger";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid mask-fade-radial pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-hero-glow pointer-events-none"
        />
        <div className="container-page relative pt-24 sm:pt-32 pb-28 sm:pb-36">
          <Reveal>
            <StatusPill />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-muted">
              {site.role} · {site.company}
            </p>
          </Reveal>
          <Reveal delay={0.16} y={24}>
            <h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] max-w-4xl">
              I build{" "}
              <span className="text-gradient-accent">product surfaces</span>{" "}
              — for the web, mobile, and the places they meet.
            </h1>
          </Reveal>
          <Reveal delay={0.28}>
            <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
              {site.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.36}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#selected-work"
                className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md font-medium hover:bg-accent-soft transition-colors"
              >
                See selected work
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-border-strong text-foreground px-5 py-3 rounded-md font-medium hover:bg-surface hover:border-accent/60 transition-colors"
              >
                About me
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Currently */}
      <section className="border-t border-border/70 bg-surface/30">
        <div className="container-page py-20 sm:py-24">
          <Reveal>
            <div className="flex items-center gap-2 text-accent text-xs uppercase tracking-[0.22em] mb-4">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Currently
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-2xl">
              Three threads I&apos;m pulling on right now.
            </h2>
          </Reveal>
          <StaggerList className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currently.map((thread, i) => (
              <StaggerItem
                key={thread.title}
                className="group relative rounded-lg border border-border bg-background p-6 sm:p-7 card-hover hover:border-accent/40 hover:-translate-y-0.5"
              >
                <div className="text-xs font-mono text-muted-2 mb-4">
                  / {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug">
                  {thread.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {thread.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
      </section>

      {/* Selected work */}
      <section id="selected-work" className="container-page py-24 sm:py-28 scroll-mt-20">
        <Reveal>
          <div className="mb-10 sm:mb-14">
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
              Selected work
            </p>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
              Case studies, not screenshots.
            </h2>
          </div>
        </Reveal>
        <StaggerList className="grid gap-px bg-border rounded-xl overflow-hidden border border-border">
          {caseStudies.map((cs, i) => (
            <StaggerItem key={cs.slug} className="bg-background">
              <Link
                href={`/work/${cs.slug}`}
                className="block p-6 sm:p-9 hover:bg-surface/60 transition-colors group relative"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-muted-2">
                        {String(i + 1).padStart(2, "0")} ·
                      </span>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">
                        {cs.period} · {cs.role}
                      </p>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                      {cs.title}
                    </h3>
                    <p className="mt-3 text-muted leading-relaxed max-w-2xl">
                      {cs.summary}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <li
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-sm border border-border text-muted-2"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 sm:w-6 sm:h-6 text-muted-2 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* CTA strip */}
      <section className="border-t border-border/70">
        <div className="container-page py-20 sm:py-24 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">
              Let&apos;s build something
            </p>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">
              Got an interesting problem?
            </h2>
            <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              I&apos;m always happy to talk frontend, mobile, GenAI surfaces, or
              full-stack delivery.
            </p>
            <Link
              href="/about#contact"
              className="mt-10 inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-medium hover:bg-accent-soft transition-colors group"
            >
              Reach out
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
