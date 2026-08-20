import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { ContactCTA } from "@/components/ContactCTA";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";
import { SITE_URL } from "@/config/site";

const PAGE_TITLE = "Sobre a agência";
const PAGE_DESCRIPTION =
  "A Z'ells é uma agência boutique de SEO Local. Conheça a abordagem, o método e os diferenciais de quem posiciona empresas no Google, no Maps e nas buscas por IA.";

export const metadata = createMetadata({
  title: `${PAGE_TITLE} | Z'ells`,
  description: PAGE_DESCRIPTION,
  path: "/sobre/",
});

export default function SobrePage() {
  const url = `${SITE_URL}/sobre/`;

  return (
    <>
      <Breadcrumbs
        path="/sobre/"
        items={[{ name: "Início", href: "/" }, { name: "Sobre" }]}
      />
      <PageHero
        eyebrow="Sobre a Z'ells"
        title="Uma agência boutique de SEO Local"
        description="A Z'ells existe para uma única missão: ajudar empresas a serem encontradas, compreendidas e escolhidas no momento da busca, no Google, no Google Maps e nas novas experiências de busca por inteligência artificial."
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav
              aria-label="Nesta página"
              className="rounded-2xl border border-line bg-surface p-5"
            >
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
                Nesta página
              </h2>
              <ol className="space-y-2.5">
                {[
                  "O que é a Z'ells",
                  "Foco em SEO Local",
                  "Abordagem boutique",
                  "O Método Z'ells",
                  "Diferenciais",
                  "Segmentos atendidos",
                ].map((item, index) => (
                  <li key={item}>
                    <a
                      href={`#${item
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/[^a-z0-9\s-]/g, "")
                        .trim()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-start gap-2 text-sm text-muted transition-colors hover:text-lime"
                    >
                      <span className="font-semibold text-lime/60">{index + 1}.</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-14">
            <ContentSection
              title="O que é a Z'ells"
              paragraphs={[
                "A Z'ells é uma agência boutique especializada em SEO Local e em tudo o que envolve a presença de uma empresa nas buscas: o Perfil da Empresa no Google, o Google Maps, o site, a entidade, a autoridade e a preparação para a busca por inteligência artificial.",
                "Trabalhamos com poucos clientes por vez, de perto, com estratégia sob medida. Não somos uma operação de volume. Somos especialistas no que fazemos, e isso se reflete no método e no cuidado com cada detalhe.",
              ]}
            />

            <ContentSection
              eyebrow="Posicionamento"
              title="Foco em SEO Local"
              paragraphs={[
                "Empresas locais dependem de uma verdade simples: quando o cliente procura, o negócio precisa estar lá. O foco da Z'ells é exatamente esse: posicionar empresas nas buscas onde a localização decide a contratação.",
                "Isso significa trabalhar o Google e o Google Maps com profundidade, gerir o Perfil da Empresa no Google, estruturar sites preparados para SEO e construir a entidade e a autoridade que sustentam o resultado.",
              ]}
            />

            <ContentSection
              eyebrow="Atendimento"
              title="Abordagem boutique, atendimento direto"
              paragraphs={[
                "Na Z'ells você fala diretamente com quem executa. Sem intermediários, sem camadas de atendimento e sem fórmulas prontas aplicadas em todo mundo.",
                "Cada empresa é um projeto. O diagnóstico é individual, o plano é individual e o acompanhamento é individual. Isso é o que chamamos de abordagem boutique: menos clientes, mais profundidade.",
              ]}
            />

            <ContentSection
              eyebrow="Metodologia"
              title="O Método Z'ells"
              paragraphs={[
                "O trabalho da Z'ells segue um método em cinco camadas, sempre guiado pelo ciclo Evidência → Diagnóstico → Impacto → Correção → Medição:",
              ]}
              list={[
                "Google Business Profile: a base da presença local;",
                "Site: a estrutura técnica e o conteúdo que sustentam a visibilidade;",
                "Entidade: o Google entendendo claramente quem é a empresa;",
                "Autoridade externa: citações, avaliações e fontes que confirmam;",
                "AI Visibility: preparação para as buscas por inteligência artificial.",
              ]}
            />

            <ContentSection
              eyebrow="Diferenciais"
              title="Diferenciais"
              list={[
                "Foco em presença orgânica, que acumula valor com o tempo;",
                "SEO local de verdade, onde o seu cliente procura;",
                "Estrutura preparada para a busca por inteligência artificial;",
                "Atendimento direto com quem executa;",
                "Promessas honestas, sem garantias que não existem;",
                "Decisões baseadas em evidências, não em achismo.",
              ]}
            />

            <ContentSection
              eyebrow="Segmentos"
              title="Segmentos atendidos"
              paragraphs={[
                "A Z'ells atende negócios que dependem de clientes na própria cidade ou região: clínicas, consultórios, escritórios, comércios, oficinas, restaurantes, prestadores de serviço e empresas com operação local.",
                "Se o seu cliente pesquisa, compara e escolhe onde ir, a Z'ells pode ajudar.",
              ]}
            />

            <ContentSection
              eyebrow="Responsável"
              title="Quem está por trás"
              paragraphs={[
                "A Z'ells é conduzida por Raphael Fernandes, responsável pela estratégia e pela execução dos projetos. Conheça mais sobre a abordagem e os conteúdos publicados na página do autor.",
              ]}
            >
              <a
                href="/autor/raphael-fernandes/"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lime transition-colors hover:text-foreground"
              >
                Conhecer Raphael Fernandes
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </ContentSection>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Vamos conversar sobre o seu negócio?"
        text="Conte como a sua empresa está hoje no Google e entenda o que pode ser feito para evoluir."
      />

      <SchemaGraph
        nodes={[
          webPageNode(
            url,
            `${PAGE_TITLE} | Z'ells`,
            PAGE_DESCRIPTION,
          ),
        ]}
      />
    </>
  );
}