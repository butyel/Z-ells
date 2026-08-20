import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleCard } from "@/components/ArticleCard";
import { ContactCTA } from "@/components/ContactCTA";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";
import { BLOG_CLUSTERS, clusterArticles } from "@/data/articles";
import { SITE_URL } from "@/config/site";

const PAGE_TITLE = "Central de Conhecimento";
const PAGE_DESCRIPTION =
  "Artigos sobre SEO Local, Perfil da Empresa no Google, Google Maps, Entity SEO e otimização para inteligência artificial. Conteúdo útil e aprofundado da Z'ells.";

export const metadata = createMetadata({
  title: `${PAGE_TITLE} | Z'ells`,
  description: PAGE_DESCRIPTION,
  path: "/blog/",
});

export default function BlogPage() {
  const url = `${SITE_URL}/blog/`;

  return (
    <>
      <Breadcrumbs
        path="/blog/"
        items={[{ name: "Início", href: "/" }, { name: "Central de Conhecimento" }]}
      />
      <PageHero
        eyebrow="Blog da Z'ells"
        title={PAGE_TITLE}
        description="Conhecimento prático sobre SEO Local, Google Maps, Perfil da Empresa no Google, Entity SEO e a busca por inteligência artificial, explicado com profundidade e sem enrolação."
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site space-y-16">
          {BLOG_CLUSTERS.map((cluster) => {
            const articles = clusterArticles(cluster.slug);
            if (articles.length === 0) return null;
            return (
              <div key={cluster.slug}>
                <h2 className="mb-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {cluster.name}
                </h2>
                <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted">
                  {cluster.description}
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <ArticleCard key={article.slug} article={article} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ContactCTA
        title="Tem uma dúvida específica sobre o seu negócio?"
        text="Conte a sua situação e receba uma orientação direta da Z'ells."
      />

      <SchemaGraph
        nodes={[
          webPageNode(url, `${PAGE_TITLE} | Z'ells`, PAGE_DESCRIPTION),
        ]}
      />
    </>
  );
}