import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { ContactCTA } from "@/components/ContactCTA";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";
import { SITE_URL } from "@/config/site";

const PAGE_TITLE = "Método: SEO Local, Entidade e AI Visibility";
const PAGE_DESCRIPTION =
  "O Método Z'ells organiza o posicionamento em cinco camadas: Google Business Profile, site, entidade, autoridade externa e AI Visibility, guiadas pelo ciclo Evidência, Diagnóstico, Impacto, Correção e Medição.";

export const metadata = createMetadata({
  title: `${PAGE_TITLE} | Z'ells`,
  description: PAGE_DESCRIPTION,
  path: "/metodo/",
});

const layers = [
  {
    number: "01",
    title: "Google Business Profile",
    text: "O Perfil da Empresa no Google é a base da presença local. Camada trabalhada com categorias, conteúdo, fotos, avaliações e consistência para a empresa ser a resposta certa no Maps e nas buscas locais.",
  },
  {
    number: "02",
    title: "Site",
    text: "O site é o ativo que a empresa controla. Estrutura técnica, conteúdo e conversão trabalhados para que o Google entenda, posicione e o visitante aja.",
  },
  {
    number: "03",
    title: "Entidade",
    text: "O Google precisa entender claramente quem é a empresa, o que ela oferece, onde atua e como se relaciona com outras entidades. Consistência e dados estruturados constroem essa compreensão.",
  },
  {
    number: "04",
    title: "Autoridade externa",
    text: "Citações, avaliações, menções e fontes relevantes que confirmam, do lado de fora, o que a empresa diz sobre si mesma. Autoridade se constrói com evidência e tempo.",
  },
  {
    number: "05",
    title: "AI Visibility",
    text: "Conteúdo, entidade e autoridade preparados para as novas experiências de busca por inteligência artificial, para a empresa ser compreendida e eventualmente citada.",
  },
];

const cycle = [
  {
    step: "Evidência",
    text: "Tudo começa pelos dados: como a empresa está hoje no Google, no Maps, no site e nas fontes externas.",
  },
  {
    step: "Diagnóstico",
    text: "Com as evidências, identificamos as causas dos problemas e as oportunidades com maior potencial.",
  },
  {
    step: "Impacto",
    text: "Priorizamos as ações pelo impacto real que podem gerar, evitando esforço disperso.",
  },
  {
    step: "Correção",
    text: "Executamos cada correção com método, com a razão apontada pelo diagnóstico.",
  },
  {
    step: "Medição",
    text: "Medimos os resultados, ajustamos o que precisa e seguimos evoluindo a presença.",
  },
];

export default function MetodoPage() {
  const url = `${SITE_URL}/metodo/`;

  return (
    <>
      <Breadcrumbs
        path="/metodo/"
        items={[{ name: "Início", href: "/" }, { name: "Método Z'ells" }]}
      />
      <PageHero
        eyebrow="Metodologia"
        title="Método Z'ells"
        description="Um método próprio para posicionar empresas: cinco camadas que se reforçam, guiadas por um ciclo que nunca para de medir e evoluir."
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {layers.map((layer, i) => (
              <Reveal
                key={layer.number}
                delay={i * 70}
                className="relative flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-lime/50 sm:p-7"
              >
                <span className="mb-5 font-display text-3xl font-bold text-lime">
                  {layer.number}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {layer.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">
                  {layer.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line/60">
        <div className="container-site">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
              O ciclo
            </span>
            <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Toda camada passa pelo mesmo ciclo
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Não aplicamos nada no piloto automático. Cada decisão do Método
              Z&rsquo;ells passa pelas cinco etapas abaixo.
            </p>
          </div>

          <ol className="mx-auto max-w-3xl space-y-4">
            {cycle.map((item, i) => (
              <Reveal
                key={item.step}
                delay={i * 50}
                className="flex items-start gap-5 rounded-2xl border border-line bg-surface p-6 sm:p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime font-display text-sm font-bold text-ink">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.step}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad border-t border-line/60">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
              Princípio
            </span>
            <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Sem promessas mágicas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              O Método Z&rsquo;ells não promete a primeira posição, não vende
              atalhos e não depende de hacks. Ele constrói o posicionamento
              sobre evidência, trabalho técnico e conteúdo útil, o único
              caminho que se sustenta.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA
        title="Aplicar o método no seu negócio"
        text="O método começa com um diagnóstico: como a sua empresa está hoje no Google e o que pode ser feito para evoluir."
      />

      <SchemaGraph
        nodes={[
          webPageNode(url, `${PAGE_TITLE} | Z'ells`, PAGE_DESCRIPTION),
        ]}
      />
    </>
  );
}