import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { WHATSAPP_URL } from "@/config/site";
import { BrandZ } from "./BrandZ";
import { BrandParticles } from "./BrandParticles";

export function FinalCTA() {
  return (
    <section id="contato" className="section-anchor section-pad relative overflow-hidden">
      <BrandParticles density="sparse" className="!opacity-20" />
      <BrandZ variant="medium" color="purple" className="!-right-10 !top-10 !opacity-[0.02]" />

      <div className="container-site relative z-10">
        <Reveal className="relative overflow-hidden rounded-xl border border-line bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute inset-0 glow-card" />
          <div className="relative z-10">
            <span className="brand-eyebrow mb-5">
              Vamos conversar
            </span>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Sua empresa pode ser{" "}
              <span className="text-lime">encontrada</span>{" "}
              antes da concorrência.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Descubra, com base em evidências, como posicionar a sua empresa no
              Google, no Google Maps e nas buscas por inteligência artificial.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href="/diagnostico-seo/"
                size="lg"
                variant="primary"
                data-track="diagnostico_click"
                data-track-label="final-cta"
              >
                Receber diagnóstico de SEO
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ButtonLink>
              <ButtonLink
                href={WHATSAPP_URL}
                size="lg"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                data-track="whatsapp_click"
                data-track-label="final-cta"
              >
                Falar no WhatsApp
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
