import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleCard } from "@/components/ArticleCard";
import { ContentSection } from "@/components/ContentSection";
import { ContactCTA } from "@/components/ContactCTA";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import { personNode, webPageNode } from "@/lib/schema";
import { ARTICLES } from "@/data/articles";
import { AUTHOR, SITE_URL } from "@/config/site";

const PAGE_TITLE = "Raphael Fernandes";
const PAGE_DESCRIPTION =
  "Raphael Fernandes é o responsável pela Z'ells, agência boutique de SEO Local. Conheça a abordagem e os conteúdos publicados.";

export const metadata = createMetadata({
  title: `${PAGE_TITLE} | Z'ells`,
  description: PAGE_DESCRIPTION,
  path: "/autor/raphael-fernandes/",
});

const focusAreas = [
  "SEO Local",
  "Google Business Profile",
  "Google Maps e Local Pack",
  "Entity SEO",
  "Sites preparados para SEO",
  "Answer Engine Optimization (AEO)",
  "SEO para Inteligência Artificial",
];

export default function AuthorPage() {
  const url = `${SITE_URL}/autor/raphael-fernandes/`;
  const authorArticles = ARTICLES;

  return (
    <>
      <Breadcrumbs
        path="/autor/raphael-fernandes/"
        items={[
          { name: "Início", href: "/" },
          { name: "Autor" },
          { name: AUTHOR.name },
        ]}
      />
      <PageHero
        eyebrow="Autor"
        title={AUTHOR.name}
        description={`${AUTHOR.role}. Especializado em posicionar empresas no Google, no Google Maps e nas novas experiências de busca por inteligência artificial.`}
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lime font-display text-2xl font-bold text-ink">
                RF
              </span>
              <h2 className="mt-4 font-display text-xl font-semibold text-foreground">
                {AUTHOR.name}
              </h2>
              <p className="mt-1 text-sm text-muted">{AUTHOR.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Escreve sobre SEO Local, Google Maps, Entity SEO e o futuro da
                busca por inteligência artificial.
              </p>
            </div>
          </aside>

          <div className="space-y-14">
            <ContentSection
              eyebrow="Apresentação"
              title="Quem escreve"
              paragraphs={[
                "Raphael Fernandes é o responsável pela Z'ells e por todo o trabalho técnico da agência: estratégia de SEO Local, otimização do Perfil da Empresa no Google, estrutura de sites, entidade e preparação para a busca por inteligência artificial.",
                "A abordagem de trabalho é a mesma que aparece no Método Z'ells: tudo começa pela evidência, passa pelo diagnóstico, prioriza o impacto e termina em correção medida. Nada de receitas prontas ou promessas que não se sustentam.",
              ]}
            />

            <ContentSection
              eyebrow="Especialidades"
              title="Áreas de atuação"
              list={focusAreas.map((area) => `${area};`)}
            />

            <ContentSection
              eyebrow="Produção"
              title="Conteúdos publicados"
              paragraphs={[
                "Os artigos abaixo são escritos pelo autor e fazem parte da Central de Conhecimento da Z'ells.",
              ]}
            />
          </div>
        </div>
      </section>

      {authorArticles.length > 0 && (
        <section className="section-pad border-t border-line/60">
          <div className="container-site">
            <h2 className="mb-10 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Artigos do autor
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {authorArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA
        title="Vamos falar sobre o seu negócio?"
        text="Conte a sua situação e receba uma orientação direta, sem compromisso."
      />

      <SchemaGraph
        nodes={[
          personNode(),
          webPageNode(url, `${PAGE_TITLE} | Z'ells`, PAGE_DESCRIPTION),
        ]}
      />
    </>
  );
}