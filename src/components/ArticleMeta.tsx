import type { Article } from "@/data/articles";
import { formatDate, readingTime } from "@/lib/utils";

export function ArticleMeta({ article }: { article: Article }) {
  const bodyText = [
    article.directAnswer,
    article.intro,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...(section.paragraphs ?? []),
      ...(section.list ?? []),
    ]),
    ...article.faqs.flatMap((faq) => [faq.q, faq.a]),
  ].join(" ");

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
      <span>
        Publicado em{" "}
        <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
      </span>
      <span aria-hidden="true" className="text-line">
        ·
      </span>
      <span>
        Atualizado em{" "}
        <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
      </span>
      <span aria-hidden="true" className="text-line">
        ·
      </span>
      <span>{readingTime(bodyText)} min de leitura</span>
    </div>
  );
}