import Link from "next/link";
import { getArticlePath, type Article } from "@/data/articles";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={getArticlePath(article.slug)}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 hover:bg-surface-2 sm:p-7"
    >
      <span className="mb-4 w-fit rounded-full border border-lime/40 bg-lime/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-lime">
        {article.category}
      </span>
      <h3 className="mb-2 font-display text-lg font-semibold leading-snug text-foreground group-hover:text-lime">
        {article.title}
      </h3>
      <p className="mb-5 text-[15px] leading-relaxed text-muted">
        {article.description}
      </p>
      <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-lime">
        Ler artigo
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="mt-4 text-xs text-muted">
        Publicado em {formatDate(article.publishedAt)}
      </span>
    </Link>
  );
}