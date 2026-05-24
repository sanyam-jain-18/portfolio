import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";
import { Reveal } from "@/components/reveal";
import { StaggerList, StaggerItem } from "@/components/stagger";
import { ResumeSection } from "@/components/resume-section";

export const metadata: Metadata = {
  title: "About & Contact",
  description: `About ${site.name} — senior full-stack engineer with a frontend center of gravity.`,
};

const skills = [
  {
    group: "Frontend (web)",
    items: [
      "React · Next.js",
      "TypeScript",
      "Design systems & component libraries",
      "Core Web Vitals & performance budgets",
      "Accessibility (WCAG AA)",
    ],
  },
  {
    group: "Mobile",
    items: [
      "Capacitor hybrid apps (iOS + Android)",
      "Native iOS in Swift — modules & extensions",
      "Native and webview state contracts",
      "App shell, deep links, push notifications",
    ],
  },
  {
    group: "Backend & infra",
    items: [
      "Node.js · TypeScript",
      "Microservices · event-driven systems (NATS, queues)",
      "Docker · CI/CD pipelines",
      "Observability — OpenSearch · New Relic",
    ],
  },
  {
    group: "AI / GenAI",
    items: [
      "Retrieval-augmented generation (RAG)",
      "Hybrid retrieval — dense + sparse + RRF",
      "HyDE query rewriting",
    ],
  },
  {
    group: "Working knowledge",
    items: [
      "Java · Spring Boot",
      "Python",
      "Data pipelines (BigQuery)",
    ],
  },
];

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: Mail,
    note: "Fastest path",
  },
  {
    label: "LinkedIn",
    value: "in/sanyam-jain-o98",
    href: site.socials.linkedin,
    Icon: LinkedinIcon,
    note: "Recruiters & long-form intros",
  },
  {
    label: "GitHub",
    value: "sanyam-jain-18",
    href: site.socials.github,
    Icon: GithubIcon,
    note: "Code & side projects",
  },
  {
    label: "Twitter",
    value: "@sanyamsj",
    href: site.socials.twitter,
    Icon: TwitterIcon,
    note: "Half-formed thoughts",
  },
];

export default function AboutPage() {
  return (
    <section className="container-page pt-20 sm:pt-24 pb-12">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.22em] text-accent mb-4">
          About
        </p>
      </Reveal>
      <Reveal delay={0.08} y={20}>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
          Full-stack engineer with a frontend center of gravity.
        </h1>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        <Reveal delay={0.16} className="md:col-span-2">
          <div className="prose prose-invert prose-p:text-muted prose-p:leading-relaxed prose-p:text-lg max-w-none">
            <p>
              Seven-plus years of shipping product across web, hybrid, and
              native mobile. The bit I keep returning to: design-system
              contracts, performance work, and the unglamorous infrastructure
              that decides whether a team is actually fast.
            </p>
            <p>
              Full-stack by practice, not by job title. I write the backend
              when the backend needs it, design APIs end-to-end, and have
              spent the last year wiring retrieval-augmented LLMs into real
              product flows — not chat demos. What I enjoy most is owning a
              feature from data layer to pixel, and being responsible for how
              it feels in the user&apos;s hand.
            </p>
            <p>
              Outside the day job I tinker with hybrid app patterns, write
              about the frontend infrastructure that keeps teams shipping,
              and keep an eye on where AI-augmented surfaces are actually
              moving the needle.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <aside className="md:border-l md:border-border md:pl-8">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-2 mb-5">
              Quick facts
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-muted-2 text-xs uppercase tracking-wider">
                  Currently
                </dt>
                <dd className="mt-1 text-foreground">
                  {site.role} at {site.company}
                </dd>
              </div>
              <div>
                <dt className="text-muted-2 text-xs uppercase tracking-wider">
                  Based in
                </dt>
                <dd className="mt-1 text-foreground">{site.city}</dd>
              </div>
              <div>
                <dt className="text-muted-2 text-xs uppercase tracking-wider">
                  Experience
                </dt>
                <dd className="mt-1 text-foreground">Seven years</dd>
              </div>
              <div>
                <dt className="text-muted-2 text-xs uppercase tracking-wider">
                  Focus
                </dt>
                <dd className="mt-1 text-foreground">{site.focus}</dd>
              </div>
            </dl>
          </aside>
        </Reveal>
      </div>

      {/* Resume */}
      <section id="resume" className="mt-24 scroll-mt-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
            Resume
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Read it here, or take it with you.
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
            Senior engineer, frontend-leaning, full-stack capable. Preview
            below or grab the PDF for your records.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <ResumeSection />
        </Reveal>
      </section>

      {/* Skills */}
      <section className="mt-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
            Working knowledge
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-10">
            The toolkit I reach for.
          </h2>
        </Reveal>
        <StaggerList className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((s) => (
            <StaggerItem
              key={s.group}
              className="rounded-lg border border-border bg-background p-6 sm:p-7 card-hover hover:border-accent/40"
            >
              <h3 className="text-sm uppercase tracking-[0.18em] text-accent mb-4 font-mono">
                {s.group}
              </h3>
              <ul className="space-y-2 text-foreground">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm flex items-baseline gap-2.5 text-foreground/90"
                  >
                    <span className="text-accent text-xs" aria-hidden="true">
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-24 scroll-mt-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
            Email lands fastest. LinkedIn works too if that&apos;s easier.
          </p>
        </Reveal>

        <StaggerList className="mt-10 grid gap-px bg-border rounded-xl overflow-hidden border border-border">
          {channels.map(({ label, value, href, Icon, note }) => (
            <StaggerItem key={label} className="bg-background">
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="flex items-center gap-5 p-5 sm:p-7 hover:bg-surface/60 transition-colors group"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-border group-hover:border-accent/40 group-hover:bg-accent/5 transition-colors flex-shrink-0">
                  <Icon
                    className="w-5 h-5 text-muted group-hover:text-accent transition-colors"
                    aria-hidden="true"
                  />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-2 mb-1">
                    {label}
                  </p>
                  <p className="text-foreground group-hover:text-accent transition-colors truncate font-medium">
                    {value}
                  </p>
                </div>
                <p className="hidden sm:block text-xs text-muted-2 font-mono whitespace-nowrap">
                  {note}
                </p>
              </a>
            </StaggerItem>
          ))}
        </StaggerList>
      </section>
    </section>
  );
}
