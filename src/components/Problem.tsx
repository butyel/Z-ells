import { Reveal } from "./Reveal";

const problems = [
  {
    title: "Seu cliente pesquisa, mas não acha você",
    text: "Quem procura o seu serviço na cidade vai encontrar a concorrência primeiro. Enquanto isso, seu negócio fica invisível no momento em que a decisão acontece.",
  },
  {
    title: "Dependência de tráfego pago",
    text: "Anúncios funcionam enquanto você paga. No dia em que o investimento para, a visibilidade some. Presença orgânica constrói algo que fica e acumula.",
  },
  {
    title: "Perfil no Google abandonado",
    text: "Informação errada, fotos desatualizadas e horários incorretos afastam clientes. Um Perfil da Empresa no Google mal cuidado custa oportunidades todos os dias.",
  },
  {
    title: "O Google e a IA não entendem seu negócio",
    text: "Sem estrutura e conteúdo claros, nem o Google nem as buscas por inteligência artificial conseguem confirmar o que você faz, onde atende e por que escolher você.",
  },
];

export function Problem() {
  return (
    <section
      id="problema"
      className="section-anchor section-pad border-t border-line/60"
    >
      <div className="container-site">
        <Reveal className="mb-14 flex flex-col items-center gap-4 text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
            O problema
          </span>
          <h2 className="max-w-2xl text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            A escolha acontece na pesquisa. E se você não está lá, perdeu.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Antes de comparar preço, o cliente decide entre quem aparece. A Z&rsquo;ells
            existe para que a sua empresa seja essa escolha.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 70}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-lime/50 sm:p-7"
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface-2 font-display text-sm font-bold text-lime">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
