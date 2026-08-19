import { FaqAccordion } from "./FaqAccordion";
import type { Article } from "@/data/articles";

export function ArticleFAQ({ article }: { article: Article }) {
  if (article.faqs.length === 0) return null;

  return (
    <section id="perguntas-frequentes" className="mt-12">
      <h2 className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        Perguntas frequentes
      </h2>
      <FaqAccordion items={article.faqs} idPrefix={`article-faq-${article.slug}`} />
    </section>
  );
}