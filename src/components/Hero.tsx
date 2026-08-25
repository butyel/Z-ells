import { ButtonLink } from "./Button";
import { WHATSAPP_URL } from "@/config/site";
import { BrandZ } from "./BrandZ";
import { BrandParticles } from "./BrandParticles";

const steps = ["ENCONTRADA", "RECONHECIDA", "ESCOLHIDA", "CONTRATADA"];

function SearchMock() {
  return (
    <div className="animate-float relative w-full rounded-xl border border-line bg-surface/90 p-4 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.6)] sm:p-5">
      <div className="flex items-center gap-2 rounded-lg bg-ink px-3 py-2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="#a8ad9b" strokeWidth="2" />
          <path d="M21 21l-4.5-4.5" stroke="#a8ad9b" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-xs text-foreground/90 sm:text-sm">
          melhor clínica odontológica em Presidente Epitácio
        </span>
        <span className="ml-auto rounded bg-lime px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-ink">
          Google
        </span>
      </div>

      <div className="mt-2.5 flex items-center gap-3 rounded-lg border border-line bg-surface-2 p-2.5 sm:p-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-xs font-bold text-ink sm:h-9 sm:w-9">
          C
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="truncate text-xs font-semibold text-foreground sm:text-sm">
              Clínica Santorini
            </span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3l2.7 2.1 3.3-.5.5 3.3L21 10l-2 2.8.2 3.3-3.2 1-1.3 3-3.7-1.4-3.7 1.4-1.3-3-3.2-1 .2-3.3L3 10l1.5-2.1.5-3.3 3.3.5L12 3z"
                fill="#d8ff66"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-muted">
            <span className="text-lime font-semibold">4,9 ★</span>
            <span>· 128 avaliações</span>
          </div>
        </div>
        <span className="rounded-md border border-line px-2 py-0.5 text-[10px] font-medium text-muted sm:px-2.5">
          Ver no mapa
        </span>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-2">
        <div className="rounded-lg border border-line bg-surface-2 p-2">
          <p className="truncate text-[11px] font-semibold text-foreground">Próximo</p>
          <p className="truncate text-[10px] text-muted">1,2 km</p>
        </div>
        <div className="rounded-lg border border-line bg-surface-2 p-2">
          <p className="truncate text-[11px] font-semibold text-foreground">Aberto</p>
          <p className="truncate text-[10px] text-muted">Até 19h</p>
        </div>
        <div className="rounded-lg border border-line bg-surface-2 p-2">
          <p className="truncate text-[11px] font-semibold text-foreground">Agendar</p>
          <p className="truncate text-[10px] text-muted">WhatsApp</p>
        </div>
      </div>

      <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5">
        {["SEO", "SEO LOCAL", "GOOGLE", "IA"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-lime/20 bg-lime/5 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-lime/80"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-2 text-center text-[10px] uppercase tracking-wide text-muted/60">
        Exemplo ilustrativo de resultado no Google Maps
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="section-anchor relative overflow-hidden bg-grid hero-glow"
    >
      <div className="bg-grid-mask absolute inset-0" />

      <div className="container-site relative grid items-center gap-10 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:grid-cols-[55fr_45fr] lg:pt-28 lg:pb-16">
        <div className="relative z-10">
          <span className="brand-eyebrow mb-4 sm:mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            SEO LOCAL · GOOGLE · MAPS · IA
          </span>

          <h1 className="max-w-[52ch] text-balance font-display font-bold leading-[1.05] tracking-tight text-foreground" style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}>
            SEO Local para sua empresa aparecer quando o cliente{" "}
            <span className="text-lime">procura</span>.
          </h1>

          <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-muted sm:text-lg">
            A Z&rsquo;ells ajuda empresas a conquistar visibilidade no Google, no
            Google Maps e nas novas experiências de busca por inteligência
            artificial. Para que você seja encontrado, compreendido e escolhido.
          </p>

          <div className="mt-1.5 h-px w-12 bg-lime/40" />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href="/diagnostico-seo/"
              size="lg"
              variant="primary"
              data-track="diagnostico_click"
              data-track-label="hero"
            >
              Receber diagnóstico de SEO
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonLink>
            <ButtonLink href={WHATSAPP_URL} size="lg" variant="secondary" target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-label="hero">
              Falar no WhatsApp
            </ButtonLink>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <BrandZ variant="huge" color="outline" className="!-right-16 !-top-24 !opacity-[0.03] !font-bold" />
          <BrandParticles density="sparse" className="!opacity-40" />
          <div className="glow-card absolute -inset-6 -z-10 rounded-[1.5rem]" />
          <SearchMock />
        </div>
      </div>

      <div className="container-site relative z-10 border-t border-line/70 py-6 sm:py-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2.5">
              <span className="font-display text-xl font-bold text-lime/40 sm:text-2xl">
                0{i + 1}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground/70 sm:text-sm">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
