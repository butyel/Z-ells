import { Reveal } from "./Reveal";
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

        <div className="grid gap-4 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 70}
              className="flex gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-lime/50 sm:p-7"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-lime">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3l2.7 2.1 3.3-.5.5 3.3L21 10l-2 2.8.2 3.3-3.2 1-1.3 3-3.7-1.4-3.7 1.4-1.3-3-3.2-1 .2-3.3L3 10l1.5-2.1.5-3.3 3.3.5L12 3z" fill="#d8ff66" />
                </svg>
              </span>
              <div>
                <h3 className="mb-1.5 text-lg font-semibold text-foreground">
                  {d.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">{d.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
