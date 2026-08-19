import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleMeta } from "@/components/ArticleMeta";
import { ArticleTOC } from "@/components/ArticleTOC";
import { ArticleFAQ } from "@/components/ArticleFAQ";
import { AuthorBox } from "@/components/AuthorBox";
import { ArticleCard } from "@/components/ArticleCard";
import { ContactCTA } from "@/components/ContactCTA";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import {
  articleNode,
  faqNode,
  personNode,
  webPageNode,
} from "@/lib/schema";
import {
  ARTICLES,
  getArticleBySlug,
  getArticlePath,
  relatedArticles,
} from "@/data/articles";
import { SITE_URL } from "@/config/site";
import { slugify } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return createMetadata({
    title: `${article.title} | Z'ells`,
    description: article.description,
    path: getArticlePath(article.slug),
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    authors: [SITE_URL],
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const path = getArticlePath(article.slug);
  const url = `${SITE_URL}${path}`;
  const breadcrumbs = [
    { name: "Início", href: "/" },
    { name: "Central de Conhecimento", href: "/blog/" },
    { name: article.title },
  ];

  const related = relatedArticles(article);

  return (
    <>
      <Breadcrumbs path={path} items={breadcrumbs} />

      <div className="container-site pt-8 pb-16 sm:pb-20">
        <header className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
            {article.category}
          </span>
          <h1 className="text-balance font-display text-[2.1rem] font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-5">
            <ArticleMeta article={article} />
          </div>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="max-w-3xl">
            <div className="rounded-2xl border border-lime/30 bg-lime/5 p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-lime">
                Resposta direta
              </p>
              <p className="mt-2 text-lg leading-relaxed text-foreground">
                {article.directAnswer}
              </p>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-muted">
              {article.intro}
            </p>

            <div className="mt-12 space-y-12">
              {article.sections.map((section) => (
                <section
                  key={section.heading}
                  id={slugify(section.heading)}
                  className="scroll-mt-28"
                >
                  <h2 className="mb-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mb-4 text-base leading-relaxed text-muted sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-4 space-y-3">
                      {section.list.map((item) => (
                        <li
                          key={item.slice(0, 40)}
                          className="flex items-start gap-3 text-base leading-relaxed text-foreground/85 sm:text-lg"
                        >
                          <svg
                            className="mt-1.5 shrink-0"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 12.5l4.5 4.5L19 7.5"
                              stroke="#d8ff66"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <ArticleFAQ article={article} />

            <div className="mt-12">
              <AuthorBox />
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <ArticleTOC article={article} />
              <div className="rounded-2xl border border-line bg-surface p-5">
                <p className="text-sm leading-relaxed text-muted">
                  Prefere conversar? Conte a sua situação no{" "}
                  <a
                    href="/diagnostico-seo/"
                    className="font-semibold text-lime transition-colors hover:text-foreground"
                  >
                    diagnóstico de SEO
                  </a>
                  .
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section-pad border-t border-line/60">
          <div className="container-site">
            <h2 className="mb-10 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Leia a seguir
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA
        title="Quer aplicar isso na sua empresa?"
        text="O caminho começa com um diagnóstico da sua presença atual no Google."
      />

      <SchemaGraph
        nodes={[
          personNode(),
          webPageNode(url, `${article.title} | Z'ells`, article.description),
          articleNode(article),
          faqNode(url, article.faqs),
        ]}
      />
    </>
  );
}