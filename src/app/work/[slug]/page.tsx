import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { caseStudies, getCaseStudy, getAdjacentCaseStudies } from "@/lib/work";
import { CaseStudyLayout } from "@/components/case-study-layout";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const { default: Content } = await import(`@/content/work/${slug}.mdx`);
  const rawContent = await readFile(
    join(process.cwd(), "src", "content", "work", `${slug}.mdx`),
    "utf8"
  );
  const { prev, next } = getAdjacentCaseStudies(slug);

  return (
    <CaseStudyLayout
      study={study}
      rawContent={rawContent}
      prev={prev}
      next={next}
    >
      <Content />
    </CaseStudyLayout>
  );
}
