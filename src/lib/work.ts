export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ads-sdk-architecture",
    title: "Architecting a modular ads delivery SDK",
    summary:
      "Led the architectural refactor of a multi-surface ads SDK serving hundreds of millions of monthly impressions — splitting a monolithic delivery pipeline into composable, testable units.",
    role: "Senior Engineer / Architect",
    period: "2024 – 2025",
    tags: ["Architecture", "SDK", "TypeScript", "Performance"],
  },
  {
    slug: "rag-conversational-commerce",
    title: "RAG-powered conversational commerce widget",
    summary:
      "Designed and prototyped a retrieval-augmented shopping assistant that turns natural-language intent into a curated product set — hybrid retrieval (dense + sparse), HyDE query rewriting, and reciprocal rank fusion.",
    role: "Senior Engineer / GenAI lead",
    period: "2025",
    tags: ["GenAI", "RAG", "Embeddings", "React", "Product"],
  },
  {
    slug: "frontend-performance",
    title: "Cutting frontend load time across a multi-brand publisher",
    summary:
      "Reduced LCP and CLS regressions across a portfolio of news and commerce sites — image scaling, critical CSS, render-blocking audits, and a hybrid app state-sync model that survived WebView reloads.",
    role: "Senior Engineer",
    period: "2024 – 2025",
    tags: ["Performance", "Core Web Vitals", "React", "Hybrid apps"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
