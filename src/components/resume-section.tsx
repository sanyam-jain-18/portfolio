"use client";

import { useState } from "react";
import { Download, Eye, EyeOff, FileText, ExternalLink } from "lucide-react";
import { resume } from "@/lib/resume";
import { site } from "@/lib/site";

export function ResumeSection() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <a
          href={resume.fileName}
          download={resume.downloadName}
          className="group inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-md font-medium hover:bg-accent-soft transition-colors"
        >
          <Download
            className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
            aria-hidden="true"
          />
          Download PDF
        </a>
        <button
          type="button"
          onClick={() => setShowPreview((v) => !v)}
          aria-expanded={showPreview}
          aria-controls="resume-preview"
          className="inline-flex items-center gap-2 border border-border-strong text-foreground px-5 py-3 rounded-md font-medium hover:bg-surface hover:border-accent/60 transition-colors"
        >
          {showPreview ? (
            <>
              <EyeOff className="w-4 h-4" aria-hidden="true" />
              Hide preview
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" aria-hidden="true" />
              View resume here
            </>
          )}
        </button>
        <a
          href={resume.fileName}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
        >
          Open PDF in new tab
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>

      <p className="mt-3 text-xs text-muted-2 font-mono">
        Last updated · {resume.lastUpdated}
      </p>

      {showPreview && (
        <div
          id="resume-preview"
          className="mt-8 rounded-xl border border-border bg-surface/30 overflow-hidden"
        >
          {/* Doc-style preview header */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-3 border-b border-border bg-background/50">
            <p className="inline-flex items-center gap-2 text-xs text-muted-2 font-mono">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              {resume.downloadName}
            </p>
            <p className="text-xs text-muted-2 font-mono hidden sm:block">
              Preview · live HTML version
            </p>
          </div>

          <div className="p-6 sm:p-10 bg-background">
            <header className="border-b border-border pb-6">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                {site.name}
              </h3>
              <p className="mt-1 text-muted">
                {site.role} · {site.company} · {site.city}
              </p>
              <p className="mt-2 text-sm text-muted-2 font-mono">
                {site.email} ·{" "}
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  github/micScofield
                </a>{" "}
                ·{" "}
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  in/sanyam-jain-o98
                </a>
              </p>
            </header>

            <section className="mt-6">
              <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">
                Summary
              </h4>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {resume.summary}
              </p>
            </section>

            <section className="mt-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-4">
                Experience
              </h4>
              <ul className="space-y-7">
                {resume.experience.map((exp) => (
                  <li key={`${exp.role}-${exp.company}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <p className="font-semibold text-foreground">
                        {exp.role}
                        <span className="text-muted font-normal"> · {exp.company}</span>
                      </p>
                      <p className="text-xs text-muted-2 font-mono">
                        {exp.period}
                      </p>
                    </div>
                    <p className="text-xs text-muted-2 mt-0.5">{exp.location}</p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-sm text-foreground/85 leading-relaxed flex gap-2.5"
                        >
                          <span className="text-accent text-xs mt-1.5 flex-shrink-0" aria-hidden="true">
                            ▸
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-4">
                Skills
              </h4>
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {resume.skillBlocks.map((block) => (
                  <div key={block.heading}>
                    <dt className="text-sm font-semibold text-foreground mb-1">
                      {block.heading}
                    </dt>
                    <dd className="text-sm text-muted">
                      {block.items.join(" · ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="mt-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-mono mb-3">
                Education
              </h4>
              <ul className="space-y-2">
                {resume.education.map((ed) => (
                  <li key={ed.degree} className="text-sm">
                    <p className="text-foreground font-medium">{ed.degree}</p>
                    <p className="text-muted">
                      {ed.school}{" "}
                      <span className="text-muted-2 font-mono text-xs">
                        · {ed.period}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-10 pt-4 border-t border-border text-xs text-muted-2 italic">
              Placeholder content — real resume content lands in a follow-up
              pass.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
