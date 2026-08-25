import { SectionReveal } from "./motion/SectionReveal";
import { SectionHeading } from "./SectionHeading";

const differentiators = [
  {
    title: "Foco em presença orgânica",
    text: "Construímos algo que fica. Diferente de tráfego pago, o resultado orgânico acumula valor com o tempo.",
  },
  {
    title: "SEO local de verdade",
    text: "Trabalhamos o Google, o Google Maps e o Perfil da Empresa no Google, onde o cliente da sua região procura.",
  },
  {
    title: "Preparado para inteligência artificial",
    text: "Estruturamos seu negócio para as buscas por IA, garantindo presença também no próximo formato de busca.",
  },
  {
    title: "Agência boutique, atendimento direto",
    text: "Você fala direto com quem executa. Sem intermediários e sem fórmulas prontas para todo mundo.",
  },
];

export function Differentiators() {
  return (
    <section
      id="diferenciais"
      className="section-anchor section-pad border-t border-line/60"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que a Z'ells"
          description="Uma agência que entende que posicionamento é mais do que links e palavras-chave: é autoridade e confiança."
        />

        <div className="grid gap-3 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <SectionReveal
              key={d.title}
              direction={i % 2 === 0 ? "left" : "right"}
              delay={i * 0.07}
              className={`group flex gap-3.5 rounded-xl border bg-surface p-5 transition-all duration-250 sm:p-6 ${
                i % 2 === 0
                  ? "border-line hover:border-lime/30"
                  : "border-purple/20 hover:border-purple/40"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-250 ${
                  i % 2 === 0
                    ? "border-line bg-surface-2 text-lime group-hover:border-lime/30"
                    : "border-purple/20 bg-purple/5 text-purple group-hover:border-purple/30"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3l2.7 2.1 3.3-.5.5 3.3L21 10l-2 2.8.2 3.3-3.2 1-1.3 3-3.7-1.4-3.7 1.4-1.3-3-3.2-1 .2-3.3L3 10l1.5-2.1.5-3.3 3.3.5L12 3z" fill={i % 2 === 0 ? "#d8ff66" : "#6f61ff"} />
                </svg>
              </span>
              <div>
                <h3 className="mb-1 text-base font-semibold text-foreground">
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{d.text}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
