export const resume = {
  fileName: "/sanyam-jain-resume.pdf",
  downloadName: "sanyam-jain-resume.pdf",
  lastUpdated: "May 2026",
  summary:
    "Senior software engineer with 7+ years shipping product surfaces across web, hybrid, and native mobile. Frontend center of gravity with the backend and AI integration to ship the whole thing.",
  experience: [
    {
      role: "Senior Full-Stack Engineer",
      company: "Material+",
      location: "Gurgaon, India",
      period: "2023 — Present",
      bullets: [
        "Lead engineer on a multi-surface frontend platform serving millions of monthly users.",
        "Owned a hybrid mobile app refactor — app shell, native iOS modules, and the native ↔ webview state-sync contract.",
        "Designed and prototyped a retrieval-augmented commerce widget — hybrid retrieval, HyDE rewriting, streaming UI, evaluation harness.",
        "Drove Core Web Vitals improvements across consumer surfaces; landed Lighthouse-CI gates that broke builds on regression.",
      ],
    },
    {
      role: "Senior Software Engineer",
      company: "Previous Role — placeholder",
      location: "Remote",
      period: "2020 — 2023",
      bullets: [
        "Replace with prior role highlights once the final resume is drafted.",
        "Each bullet should be one shipped outcome with measurable impact.",
      ],
    },
  ],
  skillBlocks: [
    {
      heading: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Design systems", "Core Web Vitals", "Accessibility (WCAG AA)"],
    },
    {
      heading: "Mobile",
      items: ["Capacitor", "Native iOS (Swift)", "React Native", "Native ↔ webview state contracts"],
    },
    {
      heading: "Backend & infra",
      items: ["Node.js", "Java · Spring Boot", "REST / GraphQL / streaming", "Microservices", "Docker · CI/CD"],
    },
    {
      heading: "AI / GenAI",
      items: ["RAG", "Hybrid retrieval (dense + sparse + RRF)", "HyDE", "Streaming LLM UIs", "Evaluation harnesses"],
    },
  ],
  education: [
    {
      degree: "B.Tech, Computer Science",
      school: "Placeholder — replace with your institution",
      period: "Year — Year",
    },
  ],
} as const;
