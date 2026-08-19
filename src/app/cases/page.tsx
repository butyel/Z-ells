import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";
import { SITE_URL } from "@/config/site";

const PAGE_TITLE = "Cases e resultados";
const PAGE_DESCRIPTION =
  "Como a Z'ells documenta o trabalho real de SEO Local: desafio, diagnóstico, estratégia, execução e resultados. Publicamos somente cases com dados reais e autorizados.";

export const metadata = createMetadata({
  title: `${PAGE_TITLE} | Z'ells`,
  description: PAGE_DESCRIPTION,
  path: "/cases/",
});

const caseSections = [
  {
    step: "Desafio",
    text: "A situação inicial da empresa: onde estava, o que a limitava e qual era o objetivo de negócio.",
  },
  {
    step: "Diagnóstico",
    text: "As evidências levantadas: perfil no Google, site, concorrência e as causas dos problemas encontrados.",
  },
  {
    step: "Estratégia",
    text: "O plano definido a partir do diagnóstico, com prioridades pelo impacto potencial.",
  },
  {
    step: "Execução",
    text: "O que foi feito na prática: otimização do perfil, estrutura do site, conteúdo e autoridade.",
  },
  {
    step: "Resultados",
    text: "Os números e sinais medidos, apresentados com transparência — incluindo o que não funcionou.",
  },
  {
    step: "Conclusão",
    text: "O que o caso ensina e o que foi mantido como acompanhamento contínuo.",
  },
];

export default function CasesPage() {
  const url = `${SITE_URL}/cases/`;

  return (
    <>
      <Breadcrumbs
        path="/cases/"
        items={[{ name: "Início", href: "/" }, { name: "Cases" }]}
      />
      <PageHero
        eyebrow="Cases"
        title={PAGE_TITLE}
        description="Acreditamos que a melhor prova de um trabalho de SEO é o trabalho real, documentado com honestidade. É assim que construímos nossos cases."
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
              Modelo de documentação
            </span>
            <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Como documentamos cada trabalho
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Cada case segue a mesma estrutura, do desafio ao resultado — sem
              números inventados e sem cases sem consentimento.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseSections.map((section, i) => (
              <Reveal
                key={section.step}
                delay={i * 60}
                className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-lime/50 sm:p-7"
              >
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-2 font-display text-sm font-bold text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                  {section.step}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">
                  {section.text}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-14 max-w-2xl rounded-2xl border border-line bg-surface p-6 text-center sm:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              Cases serão publicados conforme autorização
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Resultados de SEO são ativos sensíveis para os clientes. Por isso,
              publicamos somente cases com dados reais, revisados e autorizados.
              Enquanto novos cases são documentados, os segmentos que atendemos
              estão na página inicial.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTA
        title="Seu negócio pode ser o próximo case?"
        text="O primeiro passo é um diagnóstico honesto: como a sua empresa está hoje e o que pode ser feito."
      />

      <SchemaGraph
        nodes={[
          webPageNode(url, `${PAGE_TITLE} | Z'ells`, PAGE_DESCRIPTION),
        ]}
      />
    </>
  );
}