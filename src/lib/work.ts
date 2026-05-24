import type { ComponentType } from "react";
import { HybridStackCard } from "@/components/diagrams/hybrid-stack-card";
import { RagRecallCard } from "@/components/diagrams/rag-recall-card";
import { AdsRevenueCard } from "@/components/diagrams/ads-revenue-card";
import { PerfLcpCard } from "@/components/diagrams/perf-lcp-card";
import { ServiceConstellation } from "@/components/diagrams/service-constellation";
import { ContentfulFlowCard } from "@/components/diagrams/contentful-flow-card";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  period: string;
  tags: string[];
  isLearning?: boolean;
  isSelfDirected?: boolean;
  repoUrl?: string;
  cardVisual?: ComponentType;
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
    cardVisual: HybridStackCard,
  },
  {
    slug: "rag-conversational-commerce",
    title: "RAG-powered conversational commerce widget",
    summary:
      "Built a streaming React widget on top of a hybrid retrieval pipeline — dense + sparse + RRF, HyDE rewriting, constrained generation — that turns vague shopping intent into a curated, explainable product set.",
    role: "Senior Engineer · GenAI / Frontend",
    period: "2025",
    tags: ["GenAI", "RAG", "React", "Streaming UI", "Embeddings"],
    cardVisual: RagRecallCard,
  },
  {
    slug: "ads-delivery-sdk",
    title: "Rebuilding an ads delivery SDK around Prebid",
    summary:
      "Owned the rebuild of a multi-surface ads delivery layer — modular partner adapters, Prebid header bidding, consent integration, and the instrumentation taxonomy that ties revenue movement to specific code changes.",
    role: "Senior Engineer · Ads / Frontend",
    period: "2024 – 2025",
    tags: ["Ads", "Prebid", "Header bidding", "Revenue", "Performance"],
    cardVisual: AdsRevenueCard,
  },
  {
    slug: "frontend-performance",
    title: "Cutting frontend load time across a multi-brand publisher",
    summary:
      "Owned the perf work across a portfolio of consumer surfaces — image pipeline, render-blocking audits, hybrid app state-sync, and the Lighthouse-CI budgets that keep it from regressing.",
    role: "Senior Engineer · Frontend",
    period: "2024 – 2025",
    tags: ["Core Web Vitals", "React", "Hybrid apps", "Performance", "RUM"],
    cardVisual: PerfLcpCard,
  },
  {
    slug: "microservices-ticketing",
    title: "Event-driven ticketing on Kubernetes",
    summary:
      "A self-directed build I took seriously: six TypeScript services on GKE coordinating through NATS Streaming, with per-service Mongo, optimistic concurrency, Stripe in the loop, and a CI/CD pipeline that actually deploys.",
    role: "Self-directed · Distributed systems",
    period: "2022 – 2023",
    tags: [
      "TypeScript",
      "Kubernetes",
      "NATS",
      "MongoDB",
      "Stripe",
      "Event-driven",
    ],
    isSelfDirected: true,
    repoUrl: "https://github.com/sanyam-jain-18/microservices-kubernetes-gcloud",
    cardVisual: ServiceConstellation,
  },
  {
    slug: "contentful-cms-pipeline",
    title: "A headless CMS pipeline, end-to-end",
    summary:
      "A learning project: built a Contentful + Next.js content pipeline from scratch — schema-in-code, a CLI that provisions the space, SSG + on-demand ISR, draft preview mode, and a custom rich-text renderer.",
    role: "Self-directed · Learning project",
    period: "2023",
    tags: ["Contentful", "Next.js", "Headless CMS", "ISR", "Tailwind"],
    isLearning: true,
    cardVisual: ContentfulFlowCard,
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
