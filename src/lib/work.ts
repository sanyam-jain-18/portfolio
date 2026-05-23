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
    slug: "hybrid-mobile-app",
    title: "A hybrid mobile app that doesn’t feel like one",
    summary:
      "Built the app shell, native iOS modules in Swift, and the state-sync contract between native and webview — turning a WebView-in-a-trenchcoat into something that feels like a real app.",
    role: "Senior Engineer · Mobile / Frontend",
    period: "2024 – 2025",
    tags: ["Capacitor", "iOS / Swift", "React", "Mobile", "Native bridges"],
  },
  {
    slug: "rag-conversational-commerce",
    title: "RAG-powered conversational commerce widget",
    summary:
      "Built a streaming React widget on top of a hybrid retrieval pipeline — dense + sparse + RRF, HyDE rewriting, constrained generation — that turns vague shopping intent into a curated, explainable product set.",
    role: "Senior Engineer · GenAI / Frontend",
    period: "2025",
    tags: ["GenAI", "RAG", "React", "Streaming UI", "Embeddings"],
  },
  {
    slug: "ads-delivery-sdk",
    title: "Rebuilding an ads delivery SDK around Prebid",
    summary:
      "Owned the rebuild of a multi-surface ads delivery layer — modular partner adapters, Prebid header bidding, consent integration, and the instrumentation taxonomy that ties revenue movement to specific code changes.",
    role: "Senior Engineer · Ads / Frontend",
    period: "2024 – 2025",
    tags: ["Ads", "Prebid", "Header bidding", "Revenue", "Performance"],
  },
  {
    slug: "frontend-performance",
    title: "Cutting frontend load time across a multi-brand publisher",
    summary:
      "Owned the perf work across a portfolio of consumer surfaces — image pipeline, render-blocking audits, hybrid app state-sync, and the Lighthouse-CI budgets that keep it from regressing.",
    role: "Senior Engineer · Frontend",
    period: "2024 – 2025",
    tags: ["Core Web Vitals", "React", "Hybrid apps", "Performance", "RUM"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAdjacentCaseStudies(slug: string): {
  prev: CaseStudy | null;
  next: CaseStudy | null;
} {
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? caseStudies[idx - 1] : null,
    next: idx < caseStudies.length - 1 ? caseStudies[idx + 1] : null,
  };
}
