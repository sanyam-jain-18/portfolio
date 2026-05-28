export const resume = {
  fileName: "/api/resume",
  downloadName: "sanyam-jain-resume.pdf",
  lastUpdated: "May 2026",
  phone: "+91-9636704769",
  location: "Begun, Rajasthan, India",
  summary:
    "Senior full-stack engineer with 7 years building production product surfaces across web, hybrid mobile, and native iOS. Frontend center of gravity (React, Next.js, TypeScript) with backend, REST API design, and AI / GenAI integration to ship the whole thing.",
  experience: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Material+ (formerly Srijan Technologies)",
      location: "Gurgaon, India (Remote)",
      period: "Jun 2021 to Present",
      bullets: [
        "Lead engineer on a multi-brand publisher platform powering consumer-facing news and lifestyle surfaces on React + Next.js; own frontend architecture and performance budgets, and mentor across squads.",
        "Shipped a hybrid mobile app live on the App Store (Capacitor + native iOS Swift modules); owned the app shell, native module surface, and state-sync contract between native and webview across multiple publisher brands.",
        "Led the rebuild of the ads delivery SDK around Prebid.js header bidding: modular adapter surface for multiple demand partners, consent integration, and instrumentation tying revenue movement to specific code changes; now the platform's primary monetisation path.",
        "Designed and prototyped a retrieval-augmented (RAG) commerce widget with hybrid retrieval and HyDE query rewriting over an 18K-product pgvector index, MiniLM embeddings, and a locally-hosted qwen3:8b LLM (~25ms p50); production target: Claude (Anthropic).",
        "Drove Core Web Vitals and performance optimization: image pipeline, render-blocking audits, and Lighthouse-CI gates that fail the build on regression; moved p75 LCP into the green band on key consumer surfaces.",
        "Built and lead adoption of a shared Claude Code (AI assistant) toolkit (20+ skills, 10 agents, 20+ commands) covering Jira MCP, GitHub workflows, the ticket-to-PR loop, and code reviews; defines how the engineering team uses AI-assisted development.",
      ],
    },
    {
      role: "Software Development Associate",
      company: "Accenture",
      location: "Pune, India",
      period: "Aug 2019 to Jun 2021",
      bullets: [
        "Shipped React + Next.js features for enterprise clients in agile pods; owned UI implementation end-to-end from spec to production and consistently landed sprint commitments on time.",
        "Drove front-end performance on a flagship client surface: cut LCP from ~4.1s to ~2.3s (Lighthouse) via code-splitting, image-loading audits, and render-blocking JS cleanup; trimmed initial bundle by ~22%.",
        "Contributed core components to a shared design system (Storybook) adopted across 5+ project teams; ran onboarding sessions and documented usage patterns to speed up new-squad integration.",
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
      items: ["Node.js", "REST APIs", "Microservices", "Event-driven systems (NATS, queues)", "Docker", "CI/CD", "Observability (OpenSearch, New Relic)"],
    },
    {
      heading: "AI",
      items: ["LLM integration", "Retrieval-Augmented Generation (RAG)", "Hybrid retrieval (dense + sparse + RRF)", "Claude (Anthropic)", "pgvector"],
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
      period: "2015 to 2019",
    },
  ],
} as const;
