import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { caseStudies } from "@/lib/work";
import { projects } from "@/lib/projects";
import { StatusPill } from "@/components/status-pill";
import { Reveal } from "@/components/reveal";
import { StaggerList, StaggerItem } from "@/components/stagger";
import { OtherWorkCard } from "@/components/other-work-card";

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
        <div className="container-page relative pt-24 sm:pt-32 pb-16 sm:pb-20">
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
          {caseStudies.map((cs, i) => {
            const Visual = cs.cardVisual;
            return (
            <StaggerItem key={cs.slug} className="bg-background">
              <Link
                href={`/work/${cs.slug}`}
                className="block p-6 sm:p-9 hover:bg-surface/60 transition-colors group relative"
              >
                <div className="grid gap-6 sm:gap-8 sm:grid-cols-[1fr_minmax(0,220px)_auto] items-start">
                  <div className="min-w-0 order-2 sm:order-1">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="text-xs font-mono text-muted-2">
                        {String(i + 1).padStart(2, "0")} ·
                      </span>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">
                        {cs.period} · {cs.role}
                      </p>
                      {cs.isSelfDirected && (
                        <span className="text-[10px] uppercase tracking-[0.18em] font-mono px-2 py-0.5 rounded-sm border border-accent/40 text-accent">
                          Self-directed build
                        </span>
                      )}
                      {cs.isLearning && (
                        <span className="text-[10px] uppercase tracking-[0.18em] font-mono px-2 py-0.5 rounded-sm border border-accent/40 text-accent">
                          Learning project
                        </span>
                      )}
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
                  {Visual && (
                    <div className="order-1 sm:order-2 w-full sm:w-[220px] flex items-center justify-center rounded-md bg-surface/40 border border-border/70 p-3 min-h-[8.5rem]">
                      <Visual />
                    </div>
                  )}
                  <ArrowUpRight
                    className="order-3 w-5 h-5 sm:w-6 sm:h-6 text-muted-2 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1 hidden sm:block"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </StaggerItem>
            );
          })}
        </StaggerList>
      </section>

      {/* Other work */}
      <section
        id="other-work"
        className="border-t border-border/70 bg-surface/30 scroll-mt-20"
      >
        <div className="container-page py-24 sm:py-28">
          <Reveal>
            <div className="mb-10 sm:mb-14">
              <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
                Other things I&apos;ve built
              </p>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">
                Side projects that taught me something specific.
              </h2>
              <p className="mt-4 text-muted max-w-2xl leading-relaxed">
                Smaller surfaces than the case studies above — built to
                explore one idea each. Source is up if you want to dig in.
              </p>
            </div>
          </Reveal>
          <StaggerList className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <StaggerItem key={p.slug} className="min-w-0">
                <OtherWorkCard project={p} />
              </StaggerItem>
            ))}
          </StaggerList>
        </div>
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
