import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentSection } from "@/components/ContentSection";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/config/site";

const PAGE_TITLE = "Política de Privacidade";
const PAGE_DESCRIPTION =
  `Como o site da ${SITE_NAME} trata os dados informados no formulário de diagnóstico e na navegação. Transparência sobre coleta, uso e contato.`;

export const metadata = createMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: "/politica-de-privacidade/",
});

export default function PrivacidadePage() {
  const url = `${SITE_URL}/politica-de-privacidade/`;

  return (
    <>
      <Breadcrumbs
        path="/politica-de-privacidade/"
        items={[
          { name: "Início", href: "/" },
          { name: "Política de Privacidade" },
        ]}
      />
      <PageHero
        eyebrow="Privacidade"
        title="Política de Privacidade"
        description="Esta página explica, de forma clara, como tratamos os dados que você compartilha com a Z'ells ao usar este site."
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site">
          <div className="mx-auto max-w-3xl space-y-14">
            <ContentSection
              title="Dados do formulário de diagnóstico"
              paragraphs={[
                "Ao preencher o formulário de diagnóstico de SEO, você informa dados como nome, empresa, site, cidade, segmento e WhatsApp. Esses dados são usados exclusivamente para analisar o seu caso, responder à sua solicitação e estabelecer contato para dar continuidade ao atendimento.",
                "Os dados são enviados pelo WhatsApp para a Z'ells, no número oficial informado no site. O envio ocorre somente após você acionar o botão de solicitação.",
              ]}
            />

            <ContentSection
              title="Armazenamento e integrações"
              paragraphs={[
                "Este site, por padrão, não armazena os dados do formulário em servidores próprios. Caso futuramente seja configurada uma integração com ferramentas de análise (como GA4, GTM ou Clarity) ou com um sistema de captura de leads, esta política será atualizada para refletir o uso.",
              ]}
            />

            <ContentSection
              title="Navegação e cookies"
              paragraphs={[
                "O site pode utilizar tecnologias de análise para entender como as páginas são usadas e melhorar a experiência. Preferimos soluções leves e que não comprometam a privacidade. Caso cookies analíticos sejam ativados em algum momento, o consentimento será tratado de acordo com a legislação aplicável.",
              ]}
            />

            <ContentSection
              title="Compartilhamento"
              paragraphs={[
                "Não vendemos e não compartilhamos os seus dados com terceiros para fins de marketing. Os dados são usados somente pela Z'ells para o atendimento da sua solicitação.",
              ]}
            />

            <ContentSection
              title="Contato"
              paragraphs={[
                "Para dúvidas sobre esta política ou sobre o tratamento dos seus dados, fale com a Z'ells pelo WhatsApp ou telefone disponíveis no rodapé do site.",
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