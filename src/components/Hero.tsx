import { ButtonLink } from "./Button";
import { WHATSAPP_URL } from "@/config/site";
import { BrandZ } from "./BrandZ";
import { BrandParticles } from "./BrandParticles";

const steps = ["ENCONTRADA", "RECONHECIDA", "ESCOLHIDA", "CONTRATADA"];

function SearchMock() {
  return (
    <div className="animate-float relative w-full rounded-2xl border border-line bg-surface/90 p-4 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7)] sm:p-5">
      <div className="flex items-center gap-2 rounded-lg bg-ink px-3.5 py-2.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="7" stroke="#a8ad9b" strokeWidth="2" />
          <path d="M21 21l-4.5-4.5" stroke="#a8ad9b" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-sm text-foreground/90">
          melhor clínica odontológica em Presidente Epitácio
        </span>
        <span className="ml-auto rounded bg-lime px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-ink">
          Google
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3 rounded-lg border border-line bg-surface-2 p-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime text-sm font-bold text-ink">
          C
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-sm font-semibold text-foreground">
              Clínica Santorini
            </span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3l2.7 2.1 3.3-.5.5 3.3L21 10l-2 2.8.2 3.3-3.2 1-1.3 3-3.7-1.4-3.7 1.4-1.3-3-3.2-1 .2-3.3L3 10l1.5-2.1.5-3.3 3.3.5L12 3z"
                fill="#d8ff66"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="text-lime font-semibold">4,9 ★</span>
            <span>· 128 avaliações</span>
          </div>
        </div>
        <span className="rounded-md border border-line px-2.5 py-1 text-[11px] font-medium text-muted">
          Ver no mapa
        </span>
      </div>

      <div className="mt-2.5 grid grid-cols-3 gap-2.5">
        <div className="rounded-lg border border-line bg-surface-2 p-2.5">
          <p className="truncate text-xs font-semibold text-foreground">Próximo de você</p>
          <p className="mt-0.5 truncate text-[11px] text-muted">1,2 km</p>
        </div>
        <div className="rounded-lg border border-line bg-surface-2 p-2.5">
          <p className="truncate text-xs font-semibold text-foreground">Aberto agora</p>
          <p className="mt-0.5 truncate text-[11px] text-muted">Até 19h</p>
        </div>
        <div className="rounded-lg border border-line bg-surface-2 p-2.5">
          <p className="truncate text-xs font-semibold text-foreground">Agendar</p>
          <p className="mt-0.5 truncate text-[11px] text-muted">WhatsApp</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {["SEO", "SEO LOCAL", "GOOGLE", "IA"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-lime/20 bg-lime/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-lime/80"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-3 text-center text-[11px] uppercase tracking-wide text-muted/60">
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

      <div className="container-site relative grid items-center gap-14 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:grid-cols-[55fr_45fr] lg:pt-44 lg:pb-28">
        <div className="relative z-10">
          <span className="brand-eyebrow mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
            </span>
            SEO LOCAL · GOOGLE · MAPS · IA
          </span>

          <h1 className="text-balance font-display font-bold leading-[1.05] tracking-tight text-foreground" style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}>
            SEO Local para sua empresa aparecer quando o cliente{" "}
            <span className="text-lime">procura</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            A Z&rsquo;ells ajuda empresas a conquistar visibilidade no Google, no
            Google Maps e nas novas experiências de busca por inteligência
            artificial. Para que você seja encontrado, compreendido e escolhido.
          </p>

          <div className="mt-2 h-px w-16 bg-lime/40" />

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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
          <div className="glow-card absolute -inset-6 -z-10 rounded-[2rem]" />
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-purple/5 blur-3xl" />
          <SearchMock />
        </div>
      </div>

      <div className="container-site relative z-10 border-t border-line/70 pb-10 pt-8 sm:pb-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="font-display text-2xl font-bold text-lime/40">
                0{i + 1}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-foreground/70 sm:text-base">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
