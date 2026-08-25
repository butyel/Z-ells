import { SectionReveal } from "./motion/SectionReveal";
import { ServiceCard } from "./ServiceCard";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "@/data/services";

const featuredSlugs = [
  "seo-local",
  "google-business-profile",
  "sites-para-seo",
  "seo-para-inteligencia-artificial",
];

const featured = SERVICES.filter((service) =>
  featuredSlugs.includes(service.slug),
);

export function Services() {
  return (
    <section
      id="servicos"
      className="section-anchor section-pad border-t border-line/60"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Serviços"
          title="Visibilidade, autoridade e intenção de busca, do começo ao fim"
          description="Tudo o que a Z'ells faz caminha para uma única direção: a sua empresa ser encontrada, compreendida e escolhida."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s, i) => (
            <SectionReveal
              key={s.slug}
              direction="up"
              delay={i * 0.08}
              className="h-full"
            >
              <ServiceCard
                title={s.shortName}
                description={s.description}
                items={s.sections.flatMap((sec) => sec.list ?? []).slice(0, 3)}
                tag={s.tag}
                accent={s.accent}
                href={s.path}
                index={i + 1}
              />
            </SectionReveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <ButtonLink href="/servicos/" variant="secondary" size="lg">
              Ver todos os serviços
            </ButtonLink>
            <ButtonLink
              href="/diagnostico-seo/"
              size="lg"
              variant="primary"
              data-track="diagnostico_click"
              data-track-label="services"
            >
              Receber diagnóstico de SEO
            </ButtonLink>
          </div>
          <p className="max-w-xl text-sm text-muted">
            Não sabe por onde começar? Analisamos como o seu negócio está hoje no
            Google e apontamos as prioridades, sem compromisso.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
