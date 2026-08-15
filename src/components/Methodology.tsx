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

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((m, i) => (
            <Reveal
              key={m.step}
              delay={i * 70}
              className="relative rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-purple/50 sm:p-7"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-lime">
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
    </section>
  );
}
