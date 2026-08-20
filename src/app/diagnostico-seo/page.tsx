import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DiagnosticoForm } from "@/components/DiagnosticoForm";
import { Reveal } from "@/components/Reveal";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";
import { SITE_URL } from "@/config/site";

const PAGE_TITLE = "Diagnóstico de SEO Local";
const PAGE_DESCRIPTION =
  "Solicite um diagnóstico de SEO Local para a sua empresa. Analisamos como você aparece hoje no Google e no Google Maps e apontamos prioridades com base em evidências.";

export const metadata = createMetadata({
  title: `${PAGE_TITLE} | Z'ells`,
  description: PAGE_DESCRIPTION,
  path: "/diagnostico-seo/",
});

const whatYouGet = [
  {
    title: "Visão real da sua presença",
    text: "Como a sua empresa aparece hoje no Google, no Google Maps e no Local Pack.",
  },
  {
    title: "Prioridades claras",
    text: "O que pode gerar mais impacto primeiro, com base em evidências, não em opiniões.",
  },
  {
    title: "Sem compromisso",
    text: "O diagnóstico é o começo de uma conversa. Você decide os próximos passos.",
  },
];

export default function DiagnosticoPage() {
  const url = `${SITE_URL}/diagnostico-seo/`;

  return (
    <>
      <Breadcrumbs
        path="/diagnostico-seo/"
        items={[{ name: "Início", href: "/" }, { name: "Diagnóstico de SEO" }]}
      />
      <PageHero
        eyebrow="Diagnóstico"
        title={PAGE_TITLE}
        description="Descubra, com base em evidências, como a sua empresa está no Google e o que pode ser feito para ela aparecer quando o cliente procura."
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="space-y-6 lg:sticky lg:top-28">
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              O que você recebe
            </h2>
            <div className="space-y-4">
              {whatYouGet.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 60}
                  className="rounded-2xl border border-line bg-surface p-5 sm:p-6"
                >
                  <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-2 font-display text-sm font-bold text-lime">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </div>
            <p className="rounded-2xl border border-line bg-surface p-5 text-sm leading-relaxed text-muted sm:p-6">
              Sem análise automática falsa: o diagnóstico da Z&rsquo;ells é feito
              por pessoas que entendem de SEO Local, olhando para o seu caso
              específico.
            </p>
          </div>

          <DiagnosticoForm />
        </div>
      </section>

      <SchemaGraph
        nodes={[
          webPageNode(url, `${PAGE_TITLE} | Z'ells`, PAGE_DESCRIPTION),
        ]}
      />
    </>
  );
}