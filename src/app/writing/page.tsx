import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on architecture, GenAI, performance, and the patterns I keep coming back to.",
};

export default function WritingPage() {
  return (
    <section className="container-page pt-16 sm:pt-20 pb-20 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.2em] text-muted mb-4">Writing</p>
      <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
        Notes from the work.
      </h1>
      <p className="mt-6 text-lg text-muted leading-relaxed">
        Long-form pieces on architecture, retrieval-augmented systems,
        frontend performance, and the lessons I keep coming back to. Curated —
        not a stream.
      </p>

      <div className="mt-16 border border-dashed border-border rounded-lg p-10 text-center">
        <p className="text-muted">
          The first pieces are being polished. Check back soon, or follow along
          on{" "}
          <a
            href="https://github.com/micScofield"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
