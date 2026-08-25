import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { WHATSAPP_URL } from "@/config/site";

type ContactCTAProps = {
  title: string;
  text: string;
};

export function ContactCTA({ title, text }: ContactCTAProps) {
  return (
    <section className="section-pad border-t border-line/60">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-xl border border-line bg-surface px-6 py-12 text-center sm:px-12 sm:py-14">
          <div className="absolute inset-0 glow-card" />
          <div className="relative z-10">
            <span className="brand-eyebrow mb-5">
              Próximo passo
            </span>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {text}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href="/diagnostico-seo/"
                size="lg"
                variant="primary"
                data-track="diagnostico_click"
                data-track-label="service-cta"
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
                data-track-label="service-cta"
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
