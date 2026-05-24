export const resume = {
  fileName: "/api/resume",
  downloadName: "sanyam-jain-resume.pdf",
  lastUpdated: "May 2026",
  summary:
    "Senior full-stack engineer with 7 years building production product surfaces across web, hybrid mobile, and native iOS. Frontend center of gravity (React, Next.js, TypeScript) with the backend and AI integration to ship the whole thing.",
  experience: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Material+ (formerly Srijan Technologies)",
      location: "Gurgaon, India",
      period: "Jun 2021 — Present",
      bullets: [
        "Lead engineer on a multi-brand publisher platform powering consumer-facing news and lifestyle surfaces on React + Next.js; own frontend architecture and performance budgets, and mentor across squads.",
        "Shipped a hybrid mobile app live on the App Store (Capacitor + native iOS Swift modules) — owned the app shell, native module surface, and the state-sync contract between native and webview; powers consumer surfaces across multiple publisher brands.",
        "Led the rebuild of the ads delivery SDK around Prebid.js header bidding — integrated multiple demand partners via a modular adapter surface, consent integration, and instrumentation that ties revenue movement to specific code changes; now the platform's primary monetisation path.",
        "Designed and prototyped a retrieval-augmented commerce widget — hybrid retrieval + HyDE query rewriting over an 18K-product PostgreSQL + pgvector index with all-MiniLM-L6-v2 embeddings and a locally-hosted qwen3:8b LLM via Ollama; ~25ms p50 retrieval. Production target uses Claude (Anthropic) for structured-output compliance.",
        "Drove Core Web Vitals work — image pipeline, render-blocking audits, and Lighthouse-CI gates that fail the build on regression; moved p75 LCP into the green band on key consumer surfaces.",
        "Built and lead adoption of a shared Claude Code toolkit (20+ skills, 10 agents, 20+ commands, plus rules and guides) covering Jira MCP, GitHub workflows, the ticket-to-PR loop, and code reviews — defines how the engineering team uses AI-assisted development; symlink-sync propagates updates across every engineer's setup instantly.",
      ],
    },
    {
      role: "Software Development Associate",
      company: "Accenture",
      location: "Pune, India",
      period: "Aug 2019 — Jun 2021",
      bullets: [
        "Built React + Next.js features for enterprise clients in agile pods with designers, PMs, and backend engineers; owned UI implementation end-to-end from spec to production.",
        "Contributed to shared design system / component library work used across multiple project teams.",
      ],
    },
  ],
  skillBlocks: [
    {
      heading: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Design systems", "Core Web Vitals", "Accessibility (WCAG AA)"],
    },
    {
      heading: "Mobile",
      items: ["Capacitor", "Native iOS (Swift)", "Native and webview state contracts"],
    },
    {
      heading: "Backend & infra",
      items: ["Node.js", "Microservices", "Event-driven systems (NATS, queues)", "Docker", "CI/CD", "Observability — OpenSearch · New Relic"],
    },
    {
      heading: "AI / GenAI",
      items: ["RAG", "Hybrid retrieval (dense + sparse + RRF)", "HyDE query rewriting", "Claude (Anthropic)", "pgvector", "ONNX embeddings"],
    },
    {
      heading: "Working knowledge",
      items: ["Java", "Spring Boot", "Python", "Data pipelines (BigQuery)"],
    },
  ],
  education: [
    {
      degree: "B.Tech, Computer Science & Engineering",
      school: "JECRC Foundation, Jaipur",
      period: "2015 — 2019",
    },
  ],
} as const;
