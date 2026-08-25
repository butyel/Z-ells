import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const methodSteps = [
  {
    step: "01",
    title: "Diagnóstico",
    text: "Analisamos a presença atual do seu negócio: site, Perfil da Empresa no Google, concorrência e as buscas que importam para você.",
  },
  {
    step: "02",
    title: "Estratégia",
    text: "Definimos quais posições conquistar primeiro e o plano para chegar lá, sempre com foco em intenção de busca local.",
  },
  {
    step: "03",
    title: "Execução",
    text: "Colocamos o plano em prática: perfil otimizado, estrutura técnica do site, conteúdo e sinais de autoridade.",
  },
  {
    step: "04",
    title: "Acompanhamento",
    text: "Monitoramos os resultados, ajustamos o que precisa e seguimos evoluindo sua presença no Google e nas buscas por IA.",
  },
];

export function Methodology() {
  return (
    <section
      id="metodo"
      className="section-anchor section-pad border-t border-line/60"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Método"
          title="Um processo claro para posicionar e evoluir"
          description="Sem promessas mágicas. Um método objetivo que transforma visibilidade em reconhecimento e escolha."
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-[2.75rem] hidden h-px bg-line/40 lg:block" />

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((m, i) => (
              <Reveal
                key={m.step}
                delay={i * 70}
                className="group relative rounded-xl border border-line bg-surface p-5 transition-all duration-250 sm:p-6"
              >
                <div
                  className={`absolute left-5 right-5 top-0 h-px transition-all duration-250 ${
                    i % 2 === 0
                      ? "bg-lime/25 group-hover:bg-lime/50"
                      : "bg-purple/25 group-hover:bg-purple/50"
                  }`}
                />

                <span
                  className="pointer-events-none absolute -right-1 -top-3 font-display font-bold leading-none select-none"
                  style={{
                    fontSize: "clamp(4rem, 6vw, 5.5rem)",
                    opacity: 0.03,
                    color: i % 2 === 0 ? "#d8ff66" : "#6f61ff",
                  }}
                  aria-hidden="true"
                >
                  {m.step}
                </span>

                <div className="relative mb-4 flex items-center gap-2.5">
                  <span className={`font-display text-2xl font-bold transition-colors duration-250 ${
                    i % 2 === 0 ? "text-lime" : "text-purple"
                  }`}>
                    {m.step}
                  </span>
                  <span className="h-px flex-1 bg-line/60" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
