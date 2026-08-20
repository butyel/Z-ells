export type ArticleSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  directAnswer: string;
  intro: string;
  sections: ArticleSection[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const BLOG_CLUSTERS: {
  slug: string;
  name: string;
  description: string;
  planned: string[];
}[] = [
  {
    slug: "seo-local",
    name: "SEO Local",
    description:
      "Conceitos e estratégias para a sua empresa aparecer no Google e no Google Maps.",
    planned: [
      "o-que-e-seo-local",
      "como-funciona-seo-local",
      "fatores-de-ranqueamento-seo-local",
      "seo-local-para-pequenas-empresas",
      "quanto-tempo-seo-local-demora",
    ],
  },
  {
    slug: "google-business-profile",
    name: "Perfil da Empresa no Google",
    description:
      "Como otimizar o perfil do seu negócio no Google e aparecer no Maps.",
    planned: [
      "o-que-e-google-business-profile",
      "como-otimizar-google-business-profile",
      "categorias-google-business-profile",
      "servicos-google-business-profile",
      "avaliacoes-google-maps",
      "como-aparecer-google-maps",
    ],
  },
  {
    slug: "entity-seo",
    name: "Entity SEO",
    description:
      "Entidades, Knowledge Graph e consistência de informações.",
    planned: [
      "o-que-e-entity-seo",
      "como-google-entende-entidades",
      "knowledge-graph-empresas",
      "consistencia-nap",
      "schema-negocios-locais",
    ],
  },
  {
    slug: "ia-aeo-geo",
    name: "IA, AEO e GEO",
    description:
      "Como se preparar para a busca por inteligência artificial e respostas diretas.",
    planned: [
      "como-aparecer-no-chatgpt",
      "como-ser-citado-por-inteligencia-artificial",
      "o-que-e-aeo",
      "o-que-e-geo",
      "seo-para-ai-overviews",
      "seo-para-chatgpt-e-gemini",
    ],
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "o-que-e-seo-local",
    title: "O que é SEO Local?",
    description:
      "SEO Local é o conjunto de estratégias para a sua empresa aparecer no Google e no Google Maps quando alguém procura pelo seu serviço na sua cidade.",
    category: "SEO Local",
    publishedAt: "2026-07-02",
    updatedAt: "2026-08-10",
    directAnswer:
      "SEO Local é o conjunto de estratégias para fazer a sua empresa aparecer no Google e no Google Maps quando alguém pesquisa pelo seu serviço na sua cidade. Ele combina o Perfil da Empresa no Google, o site e sinais de autoridade, como avaliações e citações.",
    intro:
      "Se o seu negócio depende de clientes na própria cidade ou região, SEO Local é a estratégia que conecta a sua empresa a quem já está procurando por ela. Este artigo explica o conceito, por que ele importa e como ele funciona na prática.",
    sections: [
      {
        heading: "A diferença entre SEO tradicional e SEO Local",
        paragraphs: [
          "O SEO tradicional disputa buscas em escala nacional ou global: alguém pesquisa \"como fazer bolo de cenoura\" e recebe conteúdo de qualquer lugar do país. O SEO Local trabalha as buscas em que a localização faz parte da intenção: \"confeitaria em Presidente Epitácio\" ou \"oficina mecânica perto de mim\".",
          "A diferença prática é enorme. Em buscas locais, o cliente está perto de decidir onde contratar. Estar presente nesse momento é o que transforma visibilidade em movimento.",
        ],
      },
      {
        heading: "Os pilares do SEO Local",
        paragraphs: [
          "O SEO Local funciona sobre três pilares que se reforçam entre si:",
        ],
        list: [
          "Perfil da Empresa no Google: a ficha do negócio que define a presença no Maps e no Local Pack;",
          "Site: a estrutura técnica e o conteúdo que confirmam o que o perfil diz;",
          "Autoridade: avaliações, citações e menções consistentes que constroem confiança.",
        ],
      },
      {
        heading: "Relevância, distância e notoriedade",
        paragraphs: [
          "O Google define quem aparece nas buscas locais combinando três grupos de fatores. Relevância é o quanto o negócio corresponde à intenção da busca. Distância é a proximidade entre cliente e empresa. Notoriedade é o quanto o negócio é conhecido, avaliado e citado.",
          "Nenhum fator sozinho posiciona. É a combinação, trabalhada com constância, que faz a diferença ao longo do tempo.",
        ],
      },
      {
        heading: "Para quem o SEO Local é indicado",
        paragraphs: [
          "O SEO Local é indicado para clínicas, consultórios, escritórios, comércios, oficinas, restaurantes e prestadores de serviço que dependem de clientes na própria região. Também é relevante para negócios com múltiplas unidades, que precisam de estratégia por localidade.",
        ],
      },
    ],
    faqs: [
      {
        q: "SEO Local funciona para negócios pequenos?",
        a: "Sim. As buscas locais têm concorrência menor que as buscas nacionais e a intenção de compra é alta. Para negócios pequenos e médios, o SEO Local costuma ser a estratégia com melhor custo-benefício.",
      },
      {
        q: "Quanto tempo leva para aparecer no Google com SEO Local?",
        a: "Depende do segmento, da concorrência e do estado atual da presença digital. Ajustes no Perfil da Empresa no Google costumam gerar resultados mais rápidos; a consolidação acontece com o trabalho contínuo.",
      },
    ],
    related: ["como-funciona-seo-local", "fatores-de-ranqueamento-seo-local"],
  },
  {
    slug: "como-funciona-seo-local",
    title: "Como funciona o SEO Local na prática",
    description:
      "Entenda como o SEO Local funciona: Perfil da Empresa no Google, site, avaliações e citações trabalhados juntos para posicionar o seu negócio.",
    category: "SEO Local",
    publishedAt: "2026-07-09",
    updatedAt: "2026-08-10",
    directAnswer:
      "O SEO Local funciona combinando três frentes: um Perfil da Empresa no Google completo e otimizado, um site rápido e com conteúdo claro, e sinais de autoridade como avaliações e citações consistentes. Essas frentes se reforçam e aumentam a chance de a empresa aparecer nas buscas locais.",
    intro:
      "Entender o funcionamento do SEO Local ajuda a saber o que esperar de cada etapa. Este artigo mostra como as peças se encaixam: o perfil, o site, a autoridade e o que acontece depois que o trabalho começa.",
    sections: [
      {
        heading: "O ponto de partida: o Perfil da Empresa no Google",
        paragraphs: [
          "O Perfil da Empresa no Google é a peça central do SEO Local. É ele que alimenta o Google Maps, o Local Pack e as fichas de negócio. Um perfil otimizado tem categorias corretas, informações consistentes, fotos, serviços e avaliações geridas.",
          "Perfil otimizado é a base. Sem ele, o restante do trabalho perde força.",
        ],
      },
      {
        heading: "O site como confirmador da entidade",
        paragraphs: [
          "O site diz ao Google o que o perfil confirma. Quando as informações batem, com o mesmo nome, endereço, telefone e serviços, o Google entende que se trata da mesma empresa. Um site com páginas de serviço e conteúdo local reforça essa compreensão.",
        ],
      },
      {
        heading: "Autoridade: avaliações e citações",
        paragraphs: [
          "Avaliações reais e bem geridas são um dos sinais mais fortes para a decisão do cliente e para o posicionamento. Citações consistentes, com o NAP (nome, endereço e telefone) igual em todas as fontes, reforçam a entidade e a confiança.",
        ],
      },
      {
        heading: "O que acontece depois do trabalho começar",
        paragraphs: [
          "Os primeiros ajustes de perfil costumam gerar movimento em poucas semanas. A consolidação de posições, porém, é um processo contínuo: o Google avalia o comportamento dos usuários, as novas avaliações e a evolução do conteúdo. Por isso o acompanhamento é parte da estratégia.",
        ],
      },
    ],
    faqs: [
      {
        q: "O SEO Local precisa de anúncios?",
        a: "Não. O SEO Local trabalha a presença orgânica. Anúncios podem ser um complemento, mas a base do SEO Local é o perfil, o site e a autoridade construída de forma natural.",
      },
      {
        q: "Todas as empresas aparecem no Local Pack?",
        a: "Não. O Local Pack mostra um número limitado de empresas para cada busca. A otimização aumenta as chances, mas não existe garantia de posição.",
      },
    ],
    related: ["o-que-e-seo-local", "o-que-e-google-business-profile"],
  },
  {
    slug: "fatores-de-ranqueamento-seo-local",
    title: "Fatores de ranqueamento do SEO Local",
    description:
      "Relevância, distância e notoriedade: entenda os fatores que o Google considera para posicionar empresas nas buscas locais.",
    category: "SEO Local",
    publishedAt: "2026-07-16",
    updatedAt: "2026-08-10",
    directAnswer:
      "Os fatores de ranqueamento do SEO Local são agrupados em relevância (o quanto o negócio corresponde à busca), distância (a proximidade do cliente) e notoriedade (avaliações, citações e reconhecimento). Trabalhar esses três grupos é o que posiciona uma empresa nas buscas locais.",
    intro:
      "Quem aparece no topo das buscas locais não está lá por acaso. Existem fatores mensuráveis que o Google considera. Conhecer esses fatores ajuda a entender por que a concorrência aparece primeiro e o que fazer para evoluir.",
    sections: [
      {
        heading: "Relevância: o quanto você corresponde à busca",
        paragraphs: [
          "Relevância é a conexão entre o que o usuário procura e o que a sua empresa oferece. Ela é construída com categorias corretas no Perfil da Empresa no Google, serviços bem descritos, conteúdo no site que cobre as buscas do público e estrutura que deixa claro o que o negócio faz.",
        ],
      },
      {
        heading: "Distância: a proximidade como fator",
        paragraphs: [
          "Para buscas locais, a localização da empresa em relação ao usuário é determinante. A distância não é controlável, mas entender que o seu negócio compete primeiro com empresas próximas muda a forma de planejar a estratégia.",
        ],
      },
      {
        heading: "Notoriedade: o reconhecimento do negócio",
        paragraphs: [
          "Notoriedade é a soma do que o mercado diz sobre a sua empresa: avaliações com volume e qualidade, citações em diretórios, menções em imprensa e links de fontes relevantes. É o fator que mais cresce com o tempo e o mais difícil de copiar.",
        ],
      },
      {
        heading: "Consistência: o que une todos os fatores",
        paragraphs: [
          "Informações iguais em todas as fontes, como nome, endereço e telefone, eliminam a ambiguidade. Um negócio consistente é compreendido com clareza, e compreensão clara é a base de tudo: relevância, notoriedade e entidade.",
        ],
      },
    ],
    faqs: [
      {
        q: "Qual fator é mais importante no SEO Local?",
        a: "Não existe um fator isolado que posicione. A combinação de relevância, distância e notoriedade, mantida com consistência, é o que define o resultado para cada busca.",
      },
      {
        q: "Avaliações são o fator mais importante?",
        a: "Avaliações são importantes, mas não são o único fator. Volume e qualidade ajudam a notoriedade; no entanto, um perfil otimizado e um site coerente são igualmente necessários.",
      },
    ],
    related: ["o-que-e-seo-local", "como-funciona-seo-local"],
  },
  {
    slug: "o-que-e-google-business-profile",
    title: "O que é o Perfil da Empresa no Google?",
    description:
      "O Perfil da Empresa no Google (antigo Google Meu Negócio) é a ficha do seu negócio no Google. Entenda como ele funciona e por que otimizá-lo.",
    category: "Perfil da Empresa no Google",
    publishedAt: "2026-07-23",
    updatedAt: "2026-08-10",
    directAnswer:
      "O Perfil da Empresa no Google, antes chamado de Google Meu Negócio, é a ficha gratuita do seu negócio no Google, onde aparecem endereço, telefone, horários, fotos e avaliações. Bem otimizado, ele faz a empresa aparecer no Google Maps e nas buscas locais.",
    intro:
      "Se alguém pesquisa pelo seu serviço e acha uma ficha do seu negócio com endereço, horário e avaliações, está vendo o seu Perfil da Empresa no Google. Este artigo explica o que é, como funciona e por que a otimização faz diferença.",
    sections: [
      {
        heading: "O que é e para que serve",
        paragraphs: [
          "O Perfil da Empresa no Google é a forma como o seu negócio aparece no Google Maps, no Local Pack e na aba lateral das buscas. Ele reúne as informações que o cliente precisa para decidir: onde fica, quando funciona, como contatar e o que os outros clientes dizem.",
          "O nome Google Meu Negócio ainda é usado por muita gente, mas a ferramenta hoje se chama oficialmente Google Business Profile, ou Perfil da Empresa no Google.",
        ],
      },
      {
        heading: "O que compõe um bom perfil",
        list: [
          "Categorias corretas: principal e secundárias alinhadas às buscas do cliente;",
          "Informações completas: endereço, telefone, horários e site;",
          "Fotos reais: do espaço, da equipe e dos serviços;",
          "Serviços e produtos descritos;",
          "Avaliações geridas e respondidas;",
          "Perguntas e respostas ativas.",
        ],
      },
      {
        heading: "Por que otimizar o perfil",
        paragraphs: [
          "Um perfil preenchido às pressas aparece para as buscas erradas ou não aparece para as certas. A otimização alinha cada campo com a forma como os clientes procuram. É um trabalho que combina ajuste técnico e conteúdo, feito uma vez e mantido com acompanhamento.",
        ],
      },
      {
        heading: "Perfil e site trabalham juntos",
        paragraphs: [
          "O perfil e o site precisam contar a mesma história. Informações consistentes entre eles fortalecem a entidade do negócio e a confiança do Google. Perfil otimizado sem site coerente limita o resultado, e o inverso também.",
        ],
      },
    ],
    faqs: [
      {
        q: "O Perfil da Empresa no Google é gratuito?",
        a: "Sim. A criação e a gestão básica são gratuitas. O que se contrata é a otimização estratégica: categorias, conteúdo, avaliações e consistência para o perfil performar melhor.",
      },
      {
        q: "Google Meu Negócio e Perfil da Empresa são a mesma coisa?",
        a: "Sim. Google Meu Negócio foi o nome antigo da ferramenta, hoje chamada oficialmente de Perfil da Empresa no Google (Google Business Profile).",
      },
    ],
    related: ["fatores-de-ranqueamento-seo-local", "como-funciona-seo-local"],
  },
  {
    slug: "como-google-entende-entidades",
    title: "Como o Google entende entidades",
    description:
      "Entenda como o Google constrói conhecimento sobre empresas, pessoas e lugares, e por que a consistência de informações fortalece a sua entidade.",
    category: "Entity SEO",
    publishedAt: "2026-07-30",
    updatedAt: "2026-08-10",
    directAnswer:
      "O Google entende entidades como coisas distintas, por exemplo uma empresa, uma pessoa ou um lugar, e as relações entre elas. Ele conecta informações de várias fontes: site, perfil no Google, diretórios e menções. Quando essas fontes são consistentes, a entidade da empresa fica clara e confiável.",
    intro:
      "Palavras-chave mudam, mas entidades permanecem. Entender como o Google enxerga o mundo por meio de entidades é a chave para uma presença digital que se sustenta no tempo e que também alimenta as buscas por inteligência artificial.",
    sections: [
      {
        heading: "O que é uma entidade para o Google",
        paragraphs: [
          "Uma entidade é algo distinto e identificável: uma empresa, uma marca, uma pessoa, um lugar, um serviço. O Google organiza o conhecimento do mundo como uma rede de entidades conectadas, o Knowledge Graph.",
          "Quando o Google entende que \"a clínica X em Presidente Epitácio\" e \"o site X\" são a mesma entidade, ele pode apresentar a empresa como resposta com segurança.",
        ],
      },
      {
        heading: "De onde o Google tira as informações",
        paragraphs: [
          "O Google reúne informações sobre uma entidade a partir de múltiplas fontes: o site da empresa, o Perfil da Empresa no Google, diretórios, imprensa e menções. Quanto mais fontes concordam entre si, mais confiável é a entidade.",
        ],
      },
      {
        heading: "Consistência é o coração da entidade",
        paragraphs: [
          "Se o seu negócio aparece como \"Z'ells\" em um lugar, \"Zells Agência\" em outro e com telefone diferente em um terceiro, o Google precisa decidir se são entidades diferentes. Consistência elimina a ambiguidade e concentra a autoridade em uma única entidade.",
        ],
      },
      {
        heading: "Entidade e busca por IA",
        paragraphs: [
          "As ferramentas de busca por inteligência artificial também dependem de entidades claras. Elas citam informações sobre empresas que conseguem identificar com segurança. Uma entidade bem construída hoje prepara o negócio para os mecanismos de amanhã.",
        ],
      },
    ],
    faqs: [
      {
        q: "O que é o Knowledge Graph?",
        a: "É a base de conhecimento que o Google constrói sobre pessoas, empresas, lugares e coisas, e as relações entre eles. Uma entidade clara fortalece a presença nesse grafo.",
      },
      {
        q: "Como saber se o Google entende a minha empresa?",
        a: "Um bom sinal é a empresa aparecer em buscas pelo próprio nome com informações consistentes. Uma análise de entidade, que a Z'ells faz na auditoria, mostra como o Google enxerga o seu negócio hoje.",
      },
    ],
    related: ["o-que-e-seo-local", "como-aparecer-no-chatgpt"],
  },
  {
    slug: "como-aparecer-no-chatgpt",
    title: "Como aparecer no ChatGPT e nas buscas por IA",
    description:
      "Estrutura de conteúdo, entidade e autoridade para a sua empresa ser compreendida e citada pelo ChatGPT e por mecanismos de busca generativa.",
    category: "IA, AEO e GEO",
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-10",
    directAnswer:
      "Para ser citado pelo ChatGPT, a empresa precisa ser uma entidade clara e confiável: informações consistentes, site estruturado, conteúdo que responde perguntas e autoridade construída com fontes. Não existe controle direto sobre o que a IA responde, mas a estruturação aumenta a probabilidade de citação.",
    intro:
      "O ChatGPT e outras ferramentas de inteligência artificial estão se tornando ponto de partida para pesquisas. Este artigo explica o que realmente influencia a citação de uma empresa por mecanismos generativos, sem promessas mágicas.",
    sections: [
      {
        heading: "Como o ChatGPT escolhe o que citar",
        paragraphs: [
          "Mecanismos generativos como o ChatGPT não têm uma lista de resultados. Eles montam respostas a partir de informações públicas que conseguem identificar e considerar confiáveis. Empresas com presença digital consistente, incluindo site, perfil, avaliações e citações, são mais fáceis de identificar e mais plausíveis de serem citadas.",
        ],
      },
      {
        heading: "Conteúdo que responde perguntas",
        paragraphs: [
          "Perguntas diretas recebem respostas diretas. Conteúdo que responde claramente o que a empresa faz, onde atua e o que oferece é o mais compatível com a forma como as IAs processam informação.",
        ],
      },
      {
        heading: "Entidade e autoridade",
        paragraphs: [
          "As IAs citam entidades que conseguem compreender. Consistência de informações, avaliações reais, menções em fontes relevantes e produção contínua de conteúdo são os sinais que constroem essa confiança ao longo do tempo.",
        ],
      },
      {
        heading: "O que não funciona",
        paragraphs: [
          "Não existe atalho para ser citado por uma IA. Textos gerados em massa, conteúdo duplicado e tentativas de enganar os mecanismos tendem a ser ignorados ou, pior, prejudicar a percepção de autoridade.",
        ],
      },
      {
        heading: "O que fazer hoje",
        list: [
          "Manter o Perfil da Empresa no Google completo e consistente;",
          "Ter um site rápido com conteúdo que responde perguntas;",
          "Publicar conteúdo original e útil com regularidade;",
          "Gerir avaliações e construir citações consistentes;",
          "Estruturar dados (Schema) que descrevam o negócio com clareza.",
        ],
      },
    ],
    faqs: [
      {
        q: "Dá para garantir que o ChatGPT vai citar minha empresa?",
        a: "Não. Ninguém controla o que uma IA responde. O que é possível é estruturar a presença da empresa para que ela seja uma fonte identificável, confiável e plausível de citação.",
      },
      {
        q: "O que é SEO para IA?",
        a: "É o conjunto de práticas de conteúdo, entidade e autoridade que aumenta a probabilidade de uma empresa ser compreendida e citada por mecanismos de busca generativa, como ChatGPT, Gemini e AI Overviews.",
      },
    ],
    related: ["como-google-entende-entidades", "o-que-e-seo-local"],
  },
];

export const getArticleBySlug = (slug: string) =>
  ARTICLES.find((article) => article.slug === slug);

export const getArticlePath = (slug: string) => `/blog/${slug}/`;

export function relatedArticles(article: Article): Article[] {
  return article.related
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is Article => Boolean(item));
}

export function clusterArticles(clusterSlug: string): Article[] {
  const cluster = BLOG_CLUSTERS.find((c) => c.slug === clusterSlug);
  if (!cluster) return [];
  return cluster.planned
    .map((slug) => getArticleBySlug(slug))
    .filter((item): item is Article => Boolean(item));
}