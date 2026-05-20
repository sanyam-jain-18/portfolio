import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — senior software engineer working across architecture, GenAI, and frontend performance.`,
};

const skills = [
  {
    group: "Architecture & Backend",
    items: [
      "Java / Spring Boot",
      "Node.js / TypeScript",
      "Microservices & event-driven systems",
      "Domain-driven design",
      "Drupal / headless CMS",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React / Next.js",
      "TypeScript",
      "Core Web Vitals & performance budgets",
      "Hybrid apps (WebView / Capacitor)",
      "Design systems & accessibility",
    ],
  },
  {
    group: "AI / GenAI",
    items: [
      "Retrieval-augmented generation (RAG)",
      "Hybrid retrieval (dense + sparse + RRF)",
      "Embeddings & vector stores",
      "Prompt engineering & evaluation",
      "LLM tool-use patterns",
    ],
  },
  {
    group: "Practice",
    items: [
      "Tech leadership & mentoring",
      "Architecture decision records",
      "Incident response & post-mortems",
      "Code review at scale",
      "Cross-team technical strategy",
    ],
  },
];

export default function AboutPage() {
  return (
    <section className="container-page pt-16 sm:pt-20 pb-16">
      <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">About</p>
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
        Engineer first, architect by practice.
      </h1>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 prose prose-invert prose-p:text-muted prose-p:leading-relaxed max-w-none">
          <p>
            I&apos;m a senior software engineer with seven-plus years of building
            production web platforms — most of that time inside teams shipping at
            scale to millions of monthly users. My current focus is the seam
            between sound system architecture and the AI-shaped surfaces that are
            reshaping how products get built.
          </p>
          <p>
            I lean toward small, well-modelled domains; clear contracts between
            services; observability as a first-class concern; and a relentless
            bias toward measuring what users actually feel. I&apos;ve been the
            person writing the ADR, the person walking the on-call channel
            through an incident, and the person debugging a stale closure in a
            WebView at 2am.
          </p>
          <p>
            Outside the day job I keep an architecture journal, write about
            patterns I&apos;ve seen succeed and fail, and tinker with
            retrieval-augmented systems that move beyond chat into product
            surfaces people actually use.
          </p>
        </div>
        <aside className="md:border-l md:border-border md:pl-8">
          <p className="text-xs uppercase tracking-[0.18em] text-muted mb-4">
            Quick facts
          </p>
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-muted">Based in</dt>
              <dd className="text-foreground">{site.location}</dd>
            </div>
            <div>
              <dt className="text-muted">Experience</dt>
              <dd className="text-foreground">7+ years</dd>
            </div>
            <div>
              <dt className="text-muted">Open to</dt>
              <dd className="text-foreground">
                Architecture, GenAI integration, technical leadership
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">
          Working knowledge
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((s) => (
            <div key={s.group}>
              <h3 className="text-sm uppercase tracking-[0.18em] text-accent mb-3">
                {s.group}
              </h3>
              <ul className="space-y-1.5 text-foreground">
                {s.items.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
