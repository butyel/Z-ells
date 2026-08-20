import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { CITY, STATE } from "@/config/site";

export function LocalPresence() {
  return (
    <section className="section-pad border-t border-line/60">
      <div className="container-site">
        <Reveal className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
              Presença local
            </span>
            <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              SEO Local em {CITY}, {STATE} e em todo o Brasil
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              A base estratégica da Z&rsquo;ells está em {CITY}. Acreditamos que
              dominar a busca local onde operamos, Google, Google Maps e Local
              Pack, é a prova real do que entregamos. O mesmo método é aplicado
              para empresas em qualquer cidade do Brasil.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/seo-presidente-epitacio/" variant="primary" size="lg">
                SEO em Presidente Epitácio
              </ButtonLink>
              <ButtonLink href="/metodo/" variant="ghost" size="lg">
                Conhecer o Método Z&rsquo;ells
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <ul className="space-y-5">
              {[
                { label: "Google Maps", text: "Aparecer no mapa quando o cliente procura na região." },
                { label: "Perfil da Empresa no Google", text: "A ficha do seu negócio otimizada e coerente." },
                { label: "Entity SEO", text: "O Google entender quem você é, o que oferece e onde atua." },
                { label: "AI Visibility", text: "Preparação para as novas experiências de busca." },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}