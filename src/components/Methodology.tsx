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
          {/* Desktop timeline connector */}
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-line/50 lg:block" />

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {methodSteps.map((m, i) => (
              <Reveal
                key={m.step}
                delay={i * 70}
                className="group relative rounded-[20px] border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-lime/28 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.3)] sm:p-7"
              >
                {/* Top accent line */}
                <div
                  className={`absolute left-6 right-6 top-0 h-px transition-all duration-300 ${
                    i % 2 === 0
                      ? "bg-lime/30 group-hover:bg-lime/60"
                      : "bg-purple/30 group-hover:bg-purple/60"
                  }`}
                />

                {/* Number background */}
                <span
                  className="pointer-events-none absolute -right-2 -top-4 font-display font-bold leading-none select-none"
                  style={{
                    fontSize: "clamp(5rem, 8vw, 7rem)",
                    opacity: 0.03,
                    color: i % 2 === 0 ? "#d8ff66" : "#6f61ff",
                  }}
                  aria-hidden="true"
                >
                  {m.step}
                </span>

                <div className="relative mb-5 flex items-center gap-3">
                  <span className={`font-display text-3xl font-bold transition-colors duration-300 ${
                    i % 2 === 0 ? "text-lime group-hover:text-lime" : "text-purple group-hover:text-purple"
                  }`}>
                    {m.step}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {m.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">{m.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
