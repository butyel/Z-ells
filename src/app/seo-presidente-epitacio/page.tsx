import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { ContactCTA } from "@/components/ContactCTA";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";
import { CITY, SITE_URL, STATE } from "@/config/site";

const PAGE_TITLE = "SEO Local em Presidente Epitácio";
const PAGE_DESCRIPTION =
  `SEO Local em ${CITY}, ${STATE}: posicionamento da sua empresa no Google e no Google Maps, com o Perfil da Empresa no Google otimizado e estratégia baseada em evidências. A Z'ells tem base estratégica em ${CITY}.`;

export const metadata = createMetadata({
  title: `${PAGE_TITLE} | Z'ells`,
  description: PAGE_DESCRIPTION,
  path: "/seo-presidente-epitacio/",
});

export default function SeoPresidenteEpitacioPage() {
  const url = `${SITE_URL}/seo-presidente-epitacio/`;

  return (
    <>
      <Breadcrumbs
        path="/seo-presidente-epitacio/"
        items={[
          { name: "Início", href: "/" },
          { name: `SEO Local em ${CITY}` },
        ]}
      />
      <PageHero
        eyebrow="Presença local"
        title={`SEO Local em ${CITY}`}
        description={`Sua empresa precisa aparecer quando o cliente da região procura. Em ${CITY}, essa busca começa no Google e no Google Maps — e a Z'ells sabe como posicionar negócios locais lá.`}
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-14">
            <ContentSection
              eyebrow={`${CITY} · ${STATE}`}
              title="A busca local em Presidente Epitácio"
              paragraphs={[
                `Em ${CITY}, a decisão de contratar um serviço costuma começar na pesquisa. Quem procura por uma clínica, um escritório, uma oficina ou um comércio perto de si abre o Google e o Google Maps, vê quem aparece e escolhe a partir daí.`,
                `Empresas que aparecem nesse momento capturam a decisão. As que não aparecem simplesmente ficam de fora — mesmo oferecendo o melhor serviço da cidade.`,
              ]}
            />

            <ContentSection
              title="Como as empresas de Presidente Epitácio aparecem"
              paragraphs={[
                `O Google organiza a busca local em três grandes fatores: relevância, distância e notoriedade. Para uma empresa de ${CITY}, isso significa:`,
              ]}
              list={[
                "Relevância: categorias e serviços alinhados ao que o cliente procura;",
                "Distância: a proximidade da empresa em relação a quem pesquisa;",
                "Notoriedade: avaliações, citações e reconhecimento construídos ao longo do tempo.",
              ]}
            />

            <ContentSection
              eyebrow="Google Business Profile"
              title="O Perfil da Empresa no Google"
              paragraphs={[
                `No contexto de ${CITY}, o Perfil da Empresa no Google é o principal ativo de visibilidade local. Ele define se o negócio aparece no Local Pack, no Google Maps e nas fichas de resultado quando alguém pesquisa pelo serviço na cidade.`,
                "Categorias corretas, informações consistentes, fotos, avaliações e conteúdo gerido fazem o perfil se tornar a resposta certa para as buscas locais.",
              ]}
            />

            <ContentSection
              eyebrow="Concorrência"
              title="Concorrência e presença digital"
              paragraphs={[
                `A concorrência em ${CITY} se decide no detalhe. Muitas empresas locais têm perfil incompleto, informações desatualizadas ou nenhuma estratégia de conteúdo. Isso é uma janela real para quem investe em presença digital.`,
                "Trabalhamos a partir de evidências: quem aparece hoje, por quê, e o que a sua empresa precisa para competir nesse espaço.",
              ]}
            />

            <ContentSection
              eyebrow="Comportamento"
              title="Como o cliente da região pesquisa"
              paragraphs={[
                "O comportamento de busca local segue padrões claros: busca pelo serviço + cidade ou \"perto de mim\", comparação de avaliações, checagem de horário e telefone, e decisão rápida.",
                "A estratégia da Z'ells cobre esse comportamento: a empresa aparece na busca, apresenta uma ficha confiável e converte o clique em contato.",
              ]}
            />

            <ContentSection
              eyebrow="A Z'ells"
              title="Uma agência com base estratégica em Presidente Epitácio"
              paragraphs={[
                `A Z'ells tem base estratégica em ${CITY}, ${STATE}. Isso significa que conhecemos de perto o contexto das empresas locais — e usamos essa operação como laboratório real do nosso próprio método de SEO Local.`,
                `O atendimento, porém, é nacional: o mesmo método que posiciona negócios em ${CITY} é aplicado para empresas de qualquer cidade do Brasil.`,
              ]}
            />
          </div>
        </div>
      </section>

      <ContactCTA
        title={`Sua empresa aparece quando alguém pesquisa em ${CITY}?`}
        text="Vamos analisar a presença atual do seu negócio no Google e no Google Maps e definir as prioridades."
      />

      <SchemaGraph
        nodes={[
          webPageNode(url, `${PAGE_TITLE} | Z'ells`, PAGE_DESCRIPTION),
        ]}
      />
    </>
  );
}