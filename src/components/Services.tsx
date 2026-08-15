import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "@/lib/site";

type ServiceItem = {
  title: string;
  description: string;
  items: string[];
  tag: string;
  accent?: "lime" | "purple";
};

const services: ServiceItem[] = [
  {
    title: "SEO Local",
    description:
      "Posicionamento orgânico para a sua empresa aparecer quando alguém procura pelo seu serviço na sua cidade.",
    items: [
      "Otimização do Perfil da Empresa no Google",
      "Aparecer no Google Maps e no Local Pack",
      "Conteúdo alinhado às buscas locais",
      "Acompanhamento de posições",
    ],
    tag: "Google",
  },
  {
    title: "Perfil da Empresa no Google",
    description:
      "Gestão completa da ficha do seu negócio para ela se tornar a resposta certa na busca local.",
    items: [
      "Informações corretas e categorias certas",
      "Fotos, horários e publicações otimizadas",
      "Resposta e estímulo a avaliações",
      "Monitoramento de dados e perguntas",
    ],
    tag: "Maps",
  },
  {
    title: "Sites preparados para SEO",
    description:
      "Sites rápidos, com estrutura técnica e conteúdo que o Google entende e posiciona.",
    items: [
      "HTML semântico e páginas otimizadas",
      "Performance e Core Web Vitals",
      "Conteúdo orientado a intenção de busca",
      "Base técnica para crescer em resultados",
    ],
    tag: "Site",
  },
  {
    title: "GEO — Otimização para IA",
    description:
      "Estratégia para a sua empresa ser citada nas respostas das ferramentas de busca por inteligência artificial.",
    items: [
      "Estrutura que as IAs compreendem",
      "Entidades e autoridade do negócio",
      "Presença em AI Search e GEO",
      "Preparação para o futuro da busca",
    ],
    tag: "IA",
    accent: "purple",
  },
];

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
          description="Tudo o que a Z'ells faz caminha para uma única direção: a sua empresa ser encontrada, reconhecida e escolhida."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-base text-muted">
            Não sabe por onde começar? Vamos analisar o posicionamento atual do
            seu negócio no Google.
          </p>
          <ButtonLink
            href={WHATSAPP_URL}
            variant="secondary"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedir diagnóstico no WhatsApp
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
