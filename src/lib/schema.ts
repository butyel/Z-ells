import { PHONE_INTL, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_TITLE, SITE_URL } from "./site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  slogan: SITE_TAGLINE,
  areaServed: {
    "@type": "Place",
    name: "Brasil",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${PHONE_INTL}`,
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
} as const;

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "pt-BR",
  publisher: {
    "@type": "ProfessionalService",
    name: SITE_NAME,
  },
} as const;

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: SITE_TITLE,
  url: `${SITE_URL}/#inicio`,
  description: SITE_DESCRIPTION,
  inLanguage: "pt-BR",
  isPartOf: {
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  },
} as const;

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "SEO Local",
      description:
        "Posicionamento orgânico da sua empresa no Google para buscas relacionadas ao seu serviço na sua cidade.",
      provider: { "@type": "ProfessionalService", name: SITE_NAME },
      areaServed: { "@type": "Place", name: "Brasil" },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Otimização e gestão do Perfil da Empresa no Google",
      description:
        "Otimização do perfil para aparecer no Google Maps e no Local Pack, com informações corretas, categorias e conteúdo.",
      provider: { "@type": "ProfessionalService", name: SITE_NAME },
      areaServed: { "@type": "Place", name: "Brasil" },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Sites preparados para SEO",
      description:
        "Sites rápidos, com estrutura técnica e conteúdo organizado para o Google entender e posicionar o seu negócio.",
      provider: { "@type": "ProfessionalService", name: SITE_NAME },
      areaServed: { "@type": "Place", name: "Brasil" },
    },
    {
      "@type": "Service",
      position: 4,
      name: "GEO — Otimização para inteligência artificial",
      description:
        "Estratégia para a sua empresa ser citada nas respostas de ferramentas de busca por inteligência artificial.",
      provider: { "@type": "ProfessionalService", name: SITE_NAME },
      areaServed: { "@type": "Place", name: "Brasil" },
    },
  ],
} as const;

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que é SEO Local?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO Local é o conjunto de estratégias para fazer a sua empresa aparecer no Google quando alguém pesquisa pelo seu serviço na sua cidade. Envolve o Perfil da Empresa no Google, o site, o conteúdo e a autoridade do negócio.",
      },
    },
    {
      "@type": "Question",
      name: "O que é o Perfil da Empresa no Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "É a ficha gratuita do seu negócio no Google, onde aparecem informações como endereço, telefone, horário e fotos. Quando otimizada e bem gerida, ela faz a empresa aparecer no Google Maps e no topo do Google.",
      },
    },
    {
      "@type": "Question",
      name: "A Z'ells trabalha com tráfego pago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. O foco da Z'ells é a presença orgânica: SEO Local, Google Maps, Perfil da Empresa no Google, sites e otimização para inteligência artificial. O objetivo é a empresa ser encontrada de forma natural quando o cliente procura.",
      },
    },
    {
      "@type": "Question",
      name: "O que é GEO e otimização para inteligência artificial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GEO (Generative Engine Optimization) é a estratégia para a sua empresa ser citada nas respostas das ferramentas de busca por inteligência artificial. Com estrutura e conteúdo corretos, o negócio se torna uma referência que essas ferramentas indicam.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva para a minha empresa aparecer no Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende do segmento, da concorrência e do estado atual da presença digital. Os primeiros resultados costumam aparecer nas primeiras semanas, e a consolidação de posições acontece com o acompanhamento contínuo.",
      },
    },
    {
      "@type": "Question",
      name: "Para quais segmentos a Z'ells trabalha?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Z'ells atende empresas locais que dependem de clientes na própria cidade ou região: clínicas, consultórios, oficinas, comércios, prestadores de serviço e negócios com atuação local.",
      },
    },
  ],
} as const;
