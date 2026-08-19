import type { Article } from "@/data/articles";
import { slugify } from "@/lib/utils";

export function ArticleTOC({ article }: { article: Article }) {
  if (article.sections.length === 0) return null;

  return (
    <nav
      aria-label="Neste artigo"
      className="rounded-2xl border border-line bg-surface p-5 sm:p-6"
    >
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
        Neste artigo
      </h2>
      <ol className="space-y-2.5">
        {article.sections.map((section, index) => (
          <li key={section.heading}>
            <a
              href={`#${slugify(section.heading)}`}
              className="flex items-start gap-2 text-sm text-muted transition-colors hover:text-lime"
            >
              <span className="font-semibold text-lime/60">{index + 1}.</span>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}