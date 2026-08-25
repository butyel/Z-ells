import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ButtonLink } from "./Button";

const segments = [
  { title: "Odontologia e saúde", text: "Clínicas e consultórios que dependem de pacientes da região." },
  { title: "Veterinária", text: "Clínicas e petshops que precisam aparecer para tutores próximos." },
  { title: "Barbearias e beleza", text: "Negócios que disputam clientes pela localização e avaliações." },
  { title: "Oficinas e mecânicas", text: "Serviços procurados no momento de urgência." },
  { title: "Serviços locais", text: "Prestadores que precisam ser encontrados na hora da busca." },
  { title: "Controle de pragas", text: "Empresas que vendem serviço essencial com busca muito local." },
];

export function Segments() {
  return (
    <section className="section-pad border-t border-line/60">
      <div className="container-site">
        <SectionHeading
          eyebrow="Cases"
          title="SEO aplicado em negócios reais"
          description="A Z'ells trabalha com segmentos onde a busca local decide a contratação. Conheça os segmentos que atendemos e como documentamos cada trabalho."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {segments.map((segment, i) => (
            <Reveal
              key={segment.title}
              delay={i * 60}
              className="group rounded-[20px] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime/28 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] sm:p-7"
            >
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {segment.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">
                {segment.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="max-w-xl text-sm text-muted">
            Casos e resultados são publicados somente com autorização dos
            clientes e com dados reais.
          </p>
          <ButtonLink href="/cases/" variant="secondary" size="lg">
            Ver como documentamos os cases
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
