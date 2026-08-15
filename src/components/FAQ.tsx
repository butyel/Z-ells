"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

const faqs = [
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
    q: "O que é GEO e otimização para inteligência artificial?",
    a: "GEO (Generative Engine Optimization) é a estratégia para a sua empresa ser citada nas respostas das ferramentas de busca por inteligência artificial. Com estrutura e conteúdo corretos, o negócio se torna uma referência que essas ferramentas indicam.",
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

function FaqItem({
  question,
  answer,
  open,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-lime/40">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-painel`}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        >
          <span className="text-base font-semibold text-foreground sm:text-lg">
            {question}
          </span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-foreground transition-transform duration-300 ${
              open ? "rotate-45 border-lime/50 text-lime" : ""
            }`}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`${id}-painel`}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted sm:px-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="section-anchor section-pad border-t border-line/60"
    >
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
            Perguntas frequentes
          </span>
          <h2 className="text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Respostas diretas para quem quer aparecer no Google
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Alguma outra dúvida? Fale com a gente no WhatsApp e tiramos em
            poucos minutos.
          </p>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 40}>
              <FaqItem
                id={`faq-${i}`}
                question={faq.q}
                answer={faq.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
