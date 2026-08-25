import { SectionReveal } from "./motion/SectionReveal";
import { FaqAccordion } from "./FaqAccordion";

export const HOME_FAQS = [
  {
    q: "O que é SEO Local?",
    a: "SEO Local é o conjunto de estratégias para fazer a sua empresa aparecer no Google quando alguém pesquisa pelo seu serviço na sua cidade. Envolve o Perfil da Empresa no Google, o site, o conteúdo e a autoridade do negócio.",
  },
  {
    q: "O que é o Perfil da Empresa no Google?",
    a: "É a ficha gratuita do seu negócio no Google, onde aparecem informações como endereço, telefone, horário e fotos. Quando otimizada e bem gerida, ela faz a empresa aparecer no Google Maps e no topo do Google.",
  },
  {
    q: "A Z'ells trabalha com tráfego pago?",
    a: "Não. O foco da Z'ells é a presença orgânica: SEO Local, Google Maps, Perfil da Empresa no Google, sites e otimização para inteligência artificial. O objetivo é a empresa ser encontrada de forma natural quando o cliente procura.",
  },
  {
    q: "O que é SEO para inteligência artificial?",
    a: "É a estratégia para a sua empresa ser compreendida, encontrada e eventualmente citada pelas ferramentas de busca por inteligência artificial. Com estrutura e conteúdo corretos, o negócio se torna uma referência que essas ferramentas indicam.",
  },
  {
    q: "Quanto tempo leva para a minha empresa aparecer no Google?",
    a: "Depende do segmento, da concorrência e do estado atual da presença digital. Os primeiros resultados costumam aparecer nas primeiras semanas, e a consolidação de posições acontece com o acompanhamento contínuo.",
  },
  {
    q: "Para quais segmentos a Z'ells trabalha?",
    a: "A Z'ells atende empresas locais que dependem de clientes na própria cidade ou região: clínicas, consultórios, oficinas, comércios, prestadores de serviço e negócios com atuação local.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-anchor section-pad border-t border-line/60">
      <div className="container-site grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <SectionReveal direction="left" className="flex flex-col gap-3 lg:sticky lg:top-24 lg:self-start">
          <span className="brand-eyebrow w-fit">
            Perguntas frequentes
          </span>
          <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Respostas diretas para quem quer aparecer no Google
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Alguma outra dúvida? Fale com a gente no WhatsApp e tiramos em
            poucos minutos.
          </p>
        </SectionReveal>

        <FaqAccordion items={HOME_FAQS} idPrefix="home-faq" />
      </div>
    </section>
  );
}
