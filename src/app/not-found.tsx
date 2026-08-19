import { ButtonLink } from "@/components/Button";
import { SchemaGraph } from "@/components/SchemaGraph";
import { webPageNode } from "@/lib/schema";
import { SITE_NAME, SITE_URL } from "@/config/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-grid hero-glow section-anchor">
      <div className="container-site flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
          Erro 404
        </span>
        <h1 className="text-balance font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Página não encontrada
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          O conteúdo que você procura pode ter mudado de lugar. Volte para o
          início e continue a explorar o site da {SITE_NAME}.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" variant="primary">
            Voltar para o início
          </ButtonLink>
          <ButtonLink href="/diagnostico-seo/" size="lg" variant="secondary">
            Receber diagnóstico de SEO
          </ButtonLink>
        </div>
      </div>

      <SchemaGraph
        nodes={[
          webPageNode(
            `${SITE_URL}/404`,
            "Página não encontrada | Z'ells",
            "A página procurada não foi encontrada.",
          ),
        ]}
      />
    </section>
  );
}