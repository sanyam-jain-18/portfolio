import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function OtherWorkCard({ project }: { project: Project }) {
  const Visual = project.visual;

  return (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col rounded-lg border border-border bg-background p-6 sm:p-7 card-hover hover:border-accent/40 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <ArrowUpRight
          className="w-5 h-5 text-muted-2 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
          aria-hidden="true"
        />
      </div>

      <div className="flex-1 flex items-center justify-center min-h-[8rem] mb-5 rounded-md bg-surface/40 border border-border/70 p-3">
        <Visual />
      </div>

      <p className="text-sm text-muted leading-relaxed mb-4">
        {project.blurb}
      </p>

      <ul className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="text-[11px] px-2 py-0.5 rounded-sm border border-border text-muted-2"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[11px] font-mono text-muted-2 truncate">
        {project.repoUrl.replace("https://", "")}
      </p>
    </a>
  );
}
