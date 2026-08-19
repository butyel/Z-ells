import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactCTA } from "@/components/ContactCTA";
import { ArticleCard } from "@/components/ArticleCard";
import { ServiceCard } from "@/components/ServiceCard";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import {
  faqNode,
  serviceNode,
  webPageNode,
} from "@/lib/schema";
import { SERVICES, getServiceBySlug, relatedServices } from "@/data/services";
import { getArticleBySlug } from "@/data/articles";
import { SITE_URL } from "@/config/site";
import { slugify } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} | Z'ells`,
    description: service.description,
    path: service.path,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const url = `${SITE_URL}${service.path}`;
  const breadcrumbs = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos/" },
    { name: service.shortName },
  ];

  const relatedServicesList = relatedServices(service);

  const relatedArticles = service.relatedArticleSlugs
    .map(getArticleBySlug)
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      <Breadcrumbs path={service.path} items={breadcrumbs} />

      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        description={service.intro}
      />

      <div className="section-pad border-t border-line/60">
        <div className="container-site grid gap-16 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="space-y-14">
              {service.sections.map((section, i) => (
                <Reveal
                  key={section.heading}
                  delay={Math.min(i * 40, 160)}
                  className="scroll-mt-28"
                  id={`${slugify(section.heading)}`}
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
                              stroke={service.accent === "purple" ? "#6f61ff" : "#d8ff66"}
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
                </Reveal>
              ))}
            </div>

            <div className="mt-16">
              <FaqAccordion items={service.faqs} idPrefix={`service-faq-${service.slug}`} />
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <nav
                aria-label="Neste serviço"
                className="rounded-2xl border border-line bg-surface p-5"
              >
                <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                  Neste serviço
                </h2>
                <ol className="space-y-2.5">
                  {service.sections.map((section, index) => (
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
            </div>
          </aside>
        </div>
      </div>

      {relatedServicesList.length > 0 && (
        <section className="section-pad border-t border-line/60">
          <div className="container-site">
            <h2 className="mb-10 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Serviços que se conectam
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServicesList.map((related) => (
                <ServiceCard
                  key={related.slug}
                  title={related.shortName}
                  description={related.description}
                  items={related.sections.flatMap((sec) => sec.list ?? []).slice(0, 3)}
                  tag={related.tag}
                  accent={related.accent}
                  href={related.path}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedArticles.length > 0 && (
        <section className="section-pad border-t border-line/60">
          <div className="container-site">
            <h2 className="mb-10 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Aprofunde no assunto
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA title={service.ctaTitle} text={service.ctaText} />

      <SchemaGraph
        nodes={[
          webPageNode(url, `${service.title} | Z'ells`, service.description),
          serviceNode(service),
          faqNode(url, service.faqs),
        ]}
      />
    </>
  );
}