import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/config/site";

const PAGE_TITLE = "Termos de Uso";
const PAGE_DESCRIPTION =
  `Termos de uso do site da ${SITE_NAME}: condições para o uso do conteúdo, serviços e contato.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/termos-de-uso/",
});

export default function TermosPage() {
  const url = `${SITE_URL}/termos-de-uso/`;

  return (
    <>
      <Breadcrumbs
        path="/termos-de-uso/"
        items={[{ name: "Início", href: "/" }, { name: "Termos de Uso" }]}
      />
      <PageHero
        eyebrow="Legal"
        title="Termos de Uso"
        description="As condições de uso deste site e dos serviços apresentados pela Z'ells."
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-14">
            <ContentSection
              title="Uso do site"
              paragraphs={[
                `Ao acessar este site, você concorda com os termos descritos nesta página. O conteúdo é oferecido para fins informativos e de apresentação dos serviços da ${SITE_NAME}.`,
              ]}
            />

            <ContentSection
              title="Conteúdo"
              paragraphs={[
                "Os conteúdos publicados, como textos, artigos e materiais, são de autoria da Z'ells e não podem ser reproduzidos sem autorização. As informações técnicas sobre SEO são apresentadas com responsabilidade e não constituem garantia de resultados específicos.",
              ]}
            />

            <ContentSection
              title="Serviços e resultados"
              paragraphs={[
                "Os serviços de SEO trabalham para aumentar a visibilidade e a autoridade de uma empresa nos mecanismos de busca. Nenhum serviço de SEO sério pode garantir posições específicas, uma vez que o resultado depende de fatores que estão fora do controle de qualquer prestador.",
              ]}
            />

            <ContentSection
              title="Contato e solicitações"
              paragraphs={[
                "Solicitações de diagnóstico e contato realizadas pelo site serão atendidas pelos canais oficiais da Z'ells. O preenchimento do formulário não gera qualquer obrigação de contratação.",
              ]}
            />

            <ContentSection
              title="Alterações"
              paragraphs={[
                "Estes termos podem ser atualizados periodicamente. A versão publicada nesta página é sempre a vigente.",
              ]}
            />
          </div>
        </div>
      </section>

      <SchemaGraph
        nodes={[
          webPageNode(url, `${PAGE_TITLE} | ${SITE_NAME}`, PAGE_DESCRIPTION),
        ]}
      />
    </>
  );
}