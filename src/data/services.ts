import { SITE_URL } from "@/config/site";

export type ServiceSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type Service = {
  slug: string;
  path: string;
  name: string;
  shortName: string;
  tag: string;
  accent?: "lime" | "purple";
  eyebrow: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  faqs: { q: string; a: string }[];
  relatedServiceSlugs: string[];
  relatedArticleSlugs: string[];
  ctaTitle: string;
  ctaText: string;
};

export const SERVICES: Service[] = [
  {
    slug: "seo-local",
    path: "/servicos/seo-local/",
    name: "SEO Local",
    shortName: "SEO Local",
    tag: "Google",
    accent: "lime",
    eyebrow: "Serviço",
    title: "SEO Local para empresas",
    description:
      "SEO Local para a sua empresa aparecer no Google e no Google Maps quando o cliente da sua região procura. Otimização local com estratégia e acompanhamento.",
    h1: "SEO Local para empresas",
    intro:
      "SEO Local é o trabalho de posicionar a sua empresa nas buscas que importam para o seu negócio: aquelas feitas por pessoas próximas, na sua cidade ou região, no momento em que decidem onde contratar. É o conjunto de estratégias que conecta o seu negócio a quem já está procurando por ele.",
    sections: [
      {
        heading: "O que é SEO Local?",
        paragraphs: [
          "SEO Local é o conjunto de estratégias para fazer a sua empresa aparecer quando alguém pesquisa pelo seu serviço na sua cidade. Diferente do SEO tradicional, que disputa buscas em nível nacional, o SEO Local trabalha a presença do negócio onde ele realmente atua.",
          "As buscas locais são parte importante das decisões de compra: quem procura por \"clínica odontológica perto de mim\" ou \"oficina mecânica em Presidente Epitácio\" está com uma intenção clara de contratar. Estar presente nesse momento é o objetivo do SEO Local.",
        ],
      },
      {
        heading: "Como funciona o SEO Local?",
        paragraphs: [
          "O SEO Local funciona a partir da combinação de três frentes que se reforçam: o Perfil da Empresa no Google, o site e a autoridade do negócio. Juntas, elas dizem ao Google o que a empresa faz, onde ela atua e por que ela é uma boa resposta para aquela busca.",
        ],
        list: [
          "Perfil da Empresa no Google completo, otimizado e consistente;",
          "Site com estrutura técnica, conteúdo e páginas alinhadas às buscas locais;",
          "Sinais de autoridade como avaliações, citações e menções consistentes.",
        ],
      },
      {
        heading: "O que influencia o posicionamento local?",
        paragraphs: [
          "O Google considera três grandes grupos de fatores no posicionamento local: relevância, distância e notoriedade. Relevância é o quanto o seu negócio corresponde à intenção da busca. Distância é a proximidade entre o cliente e a sua empresa. Notoriedade é o quanto o seu negócio é conhecido, citado e avaliado.",
        ],
        list: [
          "Relevância: categorias, serviços, palavras-chave e conteúdo alinhados;",
          "Distância: localização da empresa em relação a quem pesquisa;",
          "Notoriedade: avaliações, citações, links e consistência das informações.",
        ],
      },
      {
        heading: "Perfil da Empresa no Google",
        paragraphs: [
          "O Perfil da Empresa no Google é a base do SEO Local. É ele que define se a sua empresa aparece no Google Maps, no Local Pack e nas fichas de resultado quando alguém busca pelo seu serviço na cidade.",
          "Um perfil bem trabalhado tem categorias corretas, informações consistentes, fotos, serviços, horários e avaliações geridas. Mais do que preencher a ficha, é preciso mantê-la viva e coerente com o site e com a realidade do negócio.",
        ],
      },
      {
        heading: "Site e SEO Local",
        paragraphs: [
          "O site é o que confirma e aprofunda o que o perfil no Google diz sobre a sua empresa. Páginas de serviço, páginas de cidade ou região, conteúdo que responde às dúvidas do cliente e estrutura técnica saudável: tudo isso aumenta a chance de a empresa ser compreendida e posicionada.",
          "Um site rápido, semântico e com conteúdo real transforma visitantes em contatos. Ele é o ativo que a empresa controla, enquanto o perfil no Google é uma vitrine que pode ser otimizada.",
        ],
      },
      {
        heading: "Autoridade e avaliações",
        paragraphs: [
          "Avaliações reais são um dos sinais mais fortes para o posicionamento local. Elas influenciam a decisão do cliente e mostram ao Google que o negócio gera satisfação. Mais do que pedir avaliações, é preciso geri-las: responder, entender o que os clientes dizem e usar isso para melhorar.",
          "A autoridade também vem de citações consistentes: o nome, endereço e telefone da empresa aparecendo da mesma forma em todos os lugares, além de menções em fontes relevantes.",
        ],
      },
      {
        heading: "Como a Z'ells trabalha",
        paragraphs: [
          "Trabalhamos com o método Evidência → Diagnóstico → Impacto → Correção. Primeiro levantamos como a sua empresa está hoje no Google, no Maps e no site. Depois identificamos o que está travando a visibilidade e o que pode gerar impacto mais rápido.",
          "A partir daí executamos a correção: perfil otimizado, estrutura do site, conteúdo e sinais de autoridade. E acompanhamos com medição, ajustando o que for necessário.",
        ],
      },
      {
        heading: "Para quem o SEO Local é indicado?",
        paragraphs: [
          "O SEO Local é indicado para negócios que dependem de clientes na própria cidade ou região: clínicas, consultórios, escritórios, comércios, oficinas, restaurantes, prestadores de serviço e empresas com operação local. Se o seu cliente pesquisa e escolhe onde ir, o SEO Local importa para você.",
        ],
      },
    ],
    faqs: [
      {
        q: "Quanto tempo leva para aparecer no Google com SEO Local?",
        a: "Depende do segmento, da concorrência e do estado atual da presença digital. Melhorias no Perfil da Empresa no Google costumam gerar resultados mais rápidos, enquanto a consolidação de posições acontece com o trabalho contínuo.",
      },
      {
        q: "SEO Local funciona para negócios pequenos?",
        a: "Sim. O SEO Local é especialmente relevante para negócios pequenos e médios, porque disputa buscas locais, onde a concorrência é menor e a intenção de compra é alta.",
      },
      {
        q: "A Z'ells garante a primeira posição no Google?",
        a: "Não. Nenhuma agência séria pode garantir posições, porque o resultado depende de fatores que mudam constantemente. O que oferecemos é trabalho técnico, conteúdo e autoridade com acompanhamento contínuo, para evoluir de forma consistente.",
      },
    ],
    relatedServiceSlugs: ["google-business-profile", "google-maps", "auditoria-seo-local"],
    relatedArticleSlugs: ["o-que-e-seo-local", "fatores-de-ranqueamento-seo-local"],
    ctaTitle: "A sua empresa aparece quando o cliente procura?",
    ctaText:
      "Vamos analisar como o seu negócio está hoje no Google e no Google Maps e definir o que pode gerar mais impacto.",
  },
  {
    slug: "google-business-profile",
    path: "/servicos/google-business-profile/",
    name: "Perfil da Empresa no Google",
    shortName: "Perfil da Empresa no Google",
    tag: "Maps",
    accent: "lime",
    eyebrow: "Serviço",
    title: "Otimização do Perfil da Empresa no Google",
    description:
      "Otimização e gestão do Perfil da Empresa no Google (Google Meu Negócio) para aparecer no Google Maps e no Local Pack com categorias, conteúdo e avaliações corretas.",
    h1: "Otimização do Perfil da Empresa no Google",
    intro:
      "O Perfil da Empresa no Google, que muitos ainda conhecem como Google Meu Negócio, é a ficha gratuita que define boa parte da sua presença nas buscas locais. Bem trabalhado, ele transforma o seu negócio em uma resposta clara para quem procura pelo que você oferece na sua cidade.",
    sections: [
      {
        heading: "O que é o Perfil da Empresa no Google?",
        paragraphs: [
          "É a página do seu negócio no Google, onde aparecem informações como nome, endereço, telefone, horários, fotos, avaliações e publicações. Quando alguém pesquisa pelo seu serviço no Google ou abre o Google Maps, é esse perfil que define se a empresa aparece e como ela é apresentada.",
          "Chamado oficialmente de Google Business Profile, o Perfil da Empresa no Google é gratuito. O que não é automático é a otimização: informações, categorias e conteúdo precisam ser trabalhados para que o perfil represente bem o negócio.",
        ],
      },
      {
        heading: "Categorias",
        paragraphs: [
          "A categoria é um dos principais sinais de relevância do perfil. Ela diz ao Google o que a sua empresa é. A escolha errada, ou genérica, faz o negócio aparecer para as buscas erradas e perder oportunidades nas buscas certas.",
          "Trabalhamos a categoria principal e as categorias secundárias para cobrir a forma como os clientes realmente procuram pelo seu serviço.",
        ],
      },
      {
        heading: "Serviços e produtos",
        paragraphs: [
          "A seção de serviços permite listar exatamente o que o negócio oferece, com preços quando fizer sentido. É conteúdo indexável que ajuda o Google a entender a sua oferta e a conectar o perfil às buscas específicas.",
        ],
      },
      {
        heading: "Descrição",
        paragraphs: [
          "A descrição é a oportunidade de dizer, com clareza, o que a empresa faz, onde atua e por que é uma boa escolha. Deve ser útil para o cliente e escrita de forma natural, sem exageros e sem repetição de palavras-chave.",
        ],
      },
      {
        heading: "Fotos",
        paragraphs: [
          "Perfis com fotos recebem mais atenção e transmitem confiança. Fotos reais do espaço, da equipe, dos serviços e dos produtos mostram ao cliente o que esperar e ajudam o Google a entender o negócio.",
        ],
      },
      {
        heading: "Avaliações",
        paragraphs: [
          "Avaliações são um dos sinais mais relevantes para o posicionamento local e para a decisão do cliente. A gestão correta envolve estimular avaliações de clientes satisfeitos, responder de forma profissional e aprender com o que os clientes dizem.",
        ],
      },
      {
        heading: "Perguntas e respostas",
        paragraphs: [
          "A seção de perguntas e respostas aparece para os clientes e pode ser trabalhada ativamente. Responder perguntas frequentes com clareza melhora a experiência e cobre intenções de busca importantes.",
        ],
      },
      {
        heading: "Horários, endereço e publicações",
        paragraphs: [
          "Informações consistentes de horário, endereço e telefone são a base da confiança. Publicações periódicas mantêm o perfil ativo e informativo, sempre com conteúdo útil para o cliente.",
        ],
      },
      {
        heading: "Consistência",
        paragraphs: [
          "As informações do perfil precisam ser iguais às do site e às de todas as outras fontes onde o negócio aparece. Inconsistências confundem o Google e enfraquecem a entidade da empresa.",
        ],
      },
      {
        heading: "Como a Z'ells trabalha",
        paragraphs: [
          "Analisamos o perfil atual, corrigimos o que está inconsistente, otimizamos categorias, conteúdo e estrutura e acompanhamos o desempenho. O objetivo é o perfil se tornar a resposta certa para as buscas que interessam ao seu negócio.",
        ],
      },
    ],
    faqs: [
      {
        q: "O que é Google Meu Negócio?",
        a: "Google Meu Negócio era o nome antigo da ferramenta que hoje se chama Perfil da Empresa no Google (Google Business Profile). É a mesma ficha gratuita do negócio no Google, usada no Maps e nas buscas locais.",
      },
      {
        q: "O Perfil da Empresa no Google é gratuito?",
        a: "Sim. A criação e a gestão básica do perfil são gratuitas. O que vendemos é a otimização estratégica: categorias, conteúdo, fotos, avaliações e consistência para o perfil performar melhor.",
      },
      {
        q: "Posso otimizar o meu próprio perfil?",
        a: "Pode, e muitas empresas fazem isso. O trabalho da Z'ells é complementar: estratégia, consistência entre perfil e site, gestão de avaliações e acompanhamento para que o esforço gere resultado.",
      },
    ],
    relatedServiceSlugs: ["google-maps", "seo-local", "auditoria-seo-local"],
    relatedArticleSlugs: ["o-que-e-google-business-profile", "o-que-e-seo-local"],
    ctaTitle: "Seu perfil no Google representa bem o seu negócio?",
    ctaText:
      "Analisamos o Perfil da Empresa no Google e apontamos o que está limitando a sua visibilidade no Maps e nas buscas locais.",
  },
  {
    slug: "google-maps",
    path: "/servicos/google-maps/",
    name: "Posicionamento no Google Maps",
    shortName: "Google Maps",
    tag: "Local Pack",
    accent: "lime",
    eyebrow: "Serviço",
    title: "Google Maps e Local Pack",
    description:
      "Aparecer no Google Maps e no Local Pack exige relevância, distância e notoriedade. Veja como a Z'ells estrutura essa estratégia para o seu negócio.",
    h1: "Aparecer no Google Maps e no Local Pack",
    intro:
      "Quando alguém pesquisa por um serviço no Google, uma das primeiras coisas que aparece é o Local Pack: o bloco de empresas no mapa com avaliação, endereço e botão de ligação. Para negócios locais, essa é uma das posições mais valiosas da busca. O objetivo deste trabalho é a empresa se tornar uma resposta natural para essas buscas.",
    sections: [
      {
        heading: "O que é o Local Pack?",
        paragraphs: [
          "O Local Pack é o bloco de resultados com mapa que aparece no topo de muitas buscas locais. Ele mostra geralmente três empresas, com nome, avaliação, categoria, endereço e um botão para chamar ou traçar rota.",
          "Por estar no topo, o Local Pack captura uma parte grande da atenção de quem pesquisa. Estar nele não é sorte: é resultado de um conjunto de fatores que o Google considera.",
        ],
      },
      {
        heading: "Como o Google decide quem aparece no Maps?",
        paragraphs: [
          "O Google usa três grupos principais de fatores para definir quem aparece: relevância, distância e notoriedade. Nenhum deles sozinho define o resultado: é a combinação que importa.",
        ],
      },
      {
        heading: "Relevância",
        paragraphs: [
          "Relevância é o quanto a empresa corresponde à intenção da busca. Categorias corretas, serviços listados, descrição clara e conteúdo que cobre o que os clientes procuram aumentam a relevância para as buscas certas.",
        ],
      },
      {
        heading: "Distância",
        paragraphs: [
          "Distância é a proximidade entre quem pesquisa e a empresa. É um fator que a empresa não controla diretamente, mas entende: o posicionamento geográfico da operação importa para as buscas locais.",
        ],
      },
      {
        heading: "Notoriedade",
        paragraphs: [
          "Notoriedade é o quanto o negócio é conhecido, citado e avaliado. Avaliações com volume e qualidade, citações consistentes em diretórios e menções em fontes relevantes constroem essa notoriedade ao longo do tempo.",
        ],
      },
      {
        heading: "Avaliações",
        paragraphs: [
          "Avaliações influenciam o clique, a decisão e o posicionamento. A gestão envolve estimular avaliações de clientes satisfeitos, responder profissionalmente e manter a média representativa da qualidade real do serviço.",
        ],
      },
      {
        heading: "Conteúdo e fotos",
        paragraphs: [
          "Publicações, fotos e perguntas respondidas mantêm o perfil ativo e informativo. Perfis vivos transmitem cuidado e ajudam o Google a entender a operação.",
        ],
      },
      {
        heading: "Site e consistência de entidade",
        paragraphs: [
          "O site e o perfil precisam contar a mesma história. Informações iguais em todos os lugares, páginas de serviço bem estruturadas e dados consistentes fortalecem a entidade do negócio e a confiança do Google na resposta.",
        ],
      },
      {
        heading: "Como a Z'ells trabalha",
        paragraphs: [
          "Analisamos o posicionamento atual da empresa no Maps e no Local Pack, identificamos os fatores que estão limitando a visibilidade e trabalhamos cada um deles: perfil, conteúdo, avaliações e consistência.",
          "Não prometemos a primeira posição. O que entregamos é um trabalho estruturado, mensurável e contínuo para evoluir a presença da empresa no mapa.",
        ],
      },
    ],
    faqs: [
      {
        q: "Como aparecer no Google Maps?",
        a: "É preciso ter um Perfil da Empresa no Google verificado, completo e otimizado, com categorias, conteúdo, fotos e avaliações. A consistência entre perfil, site e citações também conta. É um trabalho contínuo de otimização e acompanhamento.",
      },
      {
        q: "Dá para aparecer no Local Pack?",
        a: "Sim, quando a empresa reúne relevância, proximidade e notoriedade suficientes para a busca. Não existe garantia de posição, mas a otimização estruturada aumenta de forma consistente as chances.",
      },
      {
        q: "Avaliações influenciam o posicionamento no Maps?",
        a: "Influenciam. Volume, qualidade e consistência das avaliações são sinais de notoriedade. Mas avaliações sozinhas não posicionam: é a combinação com os demais fatores que importa.",
      },
    ],
    relatedServiceSlugs: ["google-business-profile", "seo-local", "entity-seo"],
    relatedArticleSlugs: ["o-que-e-google-business-profile", "fatores-de-ranqueamento-seo-local"],
    ctaTitle: "Sua empresa aparece quando alguém procura no mapa?",
    ctaText:
      "Analisamos a sua presença no Google Maps e no Local Pack e definimos o que pode ser feito para evoluir.",
  },
  {
    slug: "auditoria-seo-local",
    path: "/servicos/auditoria-seo-local/",
    name: "Auditoria de SEO Local",
    shortName: "Auditoria de SEO Local",
    tag: "Diagnóstico",
    accent: "purple",
    eyebrow: "Serviço",
    title: "Auditoria de SEO Local",
    description:
      "Auditoria de SEO Local com o método Evidência, Diagnóstico, Impacto e Correção. Análise do seu negócio no Google, no Maps, no site e na concorrência.",
    h1: "Auditoria de SEO Local",
    intro:
      "Antes de qualquer estratégia, é preciso saber onde a empresa está. A auditoria de SEO Local da Z'ells usa o método Evidência → Diagnóstico → Impacto → Correção para transformar dados em um plano claro de ação, sem achismo e sem promessas.",
    sections: [
      {
        heading: "Evidência",
        paragraphs: [
          "Tudo começa pelos dados. Levantamos como o seu negócio está hoje: perfil no Google, site, avaliações, citações, concorrência e as buscas que importam para você. Evidência é a base de qualquer decisão.",
        ],
      },
      {
        heading: "Diagnóstico",
        paragraphs: [
          "Com as evidências em mãos, identificamos o que está funcionando, o que está travando a visibilidade e quais oportunidades existem. O diagnóstico aponta a causa dos problemas, não apenas os sintomas.",
        ],
      },
      {
        heading: "Impacto",
        paragraphs: [
          "Nem toda correção gera o mesmo resultado. Priorizamos as ações pelo impacto potencial: o que pode trazer mais visibilidade e mais clientes primeiro, e o que pode esperar.",
        ],
      },
      {
        heading: "Correção",
        paragraphs: [
          "Executamos as correções priorizadas, com método: perfil otimizado, estrutura do site, conteúdo e autoridade. Sem intervenções aleatórias: cada ação tem uma razão apontada pelo diagnóstico.",
        ],
      },
      {
        heading: "O que analisamos na auditoria",
        list: [
          "Perfil da Empresa no Google: categorias, informações, conteúdo, avaliações e consistência;",
          "Site: estrutura técnica, velocidade, conteúdo, páginas e conversão;",
          "Concorrência: quem aparece hoje e por quê;",
          "Palavras-chave: as buscas que realmente geram clientes para o seu segmento;",
          "Entidade: como o Google compreende a sua empresa, seus serviços e sua área de atuação;",
          "Conteúdo: o que existe, o que falta e o que precisa ser melhorado;",
          "Autoridade: avaliações, citações e menções consistentes;",
          "Conversão: como o tráfego se transforma em contatos.",
        ],
      },
      {
        heading: "O que você recebe",
        paragraphs: [
          "Ao final, você recebe um diagnóstico claro, com as evidências encontradas, os problemas identificados, o impacto potencial de cada correção e um plano de prioridades. Sem jargão desnecessário: informações que você pode entender e usar.",
        ],
      },
      {
        heading: "Como solicitar",
        paragraphs: [
          "A auditoria começa com uma conversa e com os dados do seu negócio. Use a página de diagnóstico para enviar as informações e falar com a Z'ells pelo WhatsApp.",
        ],
      },
    ],
    faqs: [
      {
        q: "O que é uma auditoria de SEO Local?",
        a: "É a análise da presença digital local de uma empresa: Perfil da Empresa no Google, site, avaliações, citações e concorrência. O resultado é um diagnóstico com prioridades de ação.",
      },
      {
        q: "Quanto custa uma auditoria de SEO Local?",
        a: "O custo varia conforme o tamanho e a complexidade da análise. O primeiro passo é conversar: envie as informações do seu negócio e a Z'ells apresenta o escopo e o investimento.",
      },
      {
        q: "A auditoria inclui a correção dos problemas?",
        a: "A auditoria entrega o diagnóstico e as prioridades. A correção pode ser executada pela Z'ells como uma etapa seguinte, conforme o plano definido.",
      },
    ],
    relatedServiceSlugs: ["seo-local", "google-business-profile", "sites-para-seo"],
    relatedArticleSlugs: ["como-funciona-seo-local", "fatores-de-ranqueamento-seo-local"],
    ctaTitle: "Solicitar auditoria de SEO Local",
    ctaText:
      "Descubra, com base em evidências, o que está limitando a visibilidade da sua empresa no Google.",
  },
  {
    slug: "sites-para-seo",
    path: "/servicos/sites-para-seo/",
    name: "Sites preparados para SEO",
    shortName: "Sites para SEO",
    tag: "Site",
    accent: "lime",
    eyebrow: "Serviço",
    title: "Sites preparados para SEO",
    description:
      "Sites rápidos, semânticos e preparados para SEO: HTML, SSR, Core Web Vitals, schema, sitemap e conversão. Desenvolvidos para o Google entender e o cliente agir.",
    h1: "Sites preparados para SEO",
    intro:
      "Um bom site não é apenas bonito: ele precisa ser compreendido pelo Google, carregar rápido e conduzir o visitante à ação. A Z'ells desenvolve sites com uma base técnica que respeita os requisitos de SEO, performance e conversão.",
    sections: [
      {
        heading: "HTML semântico",
        paragraphs: [
          "Estrutura semântica significa usar as tags certas para os elementos certos: um único H1 por página, hierarquia de headings, seções, artigos, navegação e rodapé bem definidos. Isso ajuda o Google a entender o que cada parte da página significa.",
        ],
      },
      {
        heading: "Renderização e SSR",
        paragraphs: [
          "Sites renderizados no servidor entregam conteúdo pronto para o visitante e para os mecanismos de busca. Tecnologias como Next.js permitem páginas rápidas, com conteúdo indexável no HTML e boa experiência de navegação.",
        ],
      },
      {
        heading: "Core Web Vitals",
        paragraphs: [
          "Velocidade é experiência e é fator de ranqueamento. Trabalhamos para que o site carregue rápido (LCP), responda rapidamente às interações (INP) e não cause saltos de layout (CLS).",
        ],
      },
      {
        heading: "Headings e conteúdo",
        paragraphs: [
          "Cada página tem um título principal claro e uma hierarquia de subtítulos que organiza a leitura. O conteúdo é escrito para o cliente, com intenção de busca em mente: útil para pessoas e claro para máquinas.",
        ],
      },
      {
        heading: "URLs e arquitetura",
        paragraphs: [
          "URLs limpas e bem estruturadas ajudam o usuário e o Google a entender onde está. A arquitetura do site define como as páginas se conectam e como a autoridade flui entre elas.",
        ],
      },
      {
        heading: "Schema e dados estruturados",
        paragraphs: [
          "Dados estruturados ajudam o Google a compreender a entidade por trás do site: quem é a empresa, o que ela oferece, onde atua. Usamos schema de forma honesta, para descrever a realidade do negócio.",
        ],
      },
      {
        heading: "Sitemap, canonical e crawlability",
        paragraphs: [
          "Um sitemap atualizado, canônicas corretas e uma estrutura rastreável garantem que o Google encontre e entenda as páginas importantes e ignore o que não deve ser indexado.",
        ],
      },
      {
        heading: "Acessibilidade",
        paragraphs: [
          "Um site acessível é um site melhor para todos: navegação por teclado, contraste adequado, textos alternativos e HTML semântico. Acessibilidade e SEO caminham juntos.",
        ],
      },
      {
        heading: "Conversão",
        paragraphs: [
          "O site existe para gerar resultado. Cada página tem um objetivo claro e um chamado para ação: WhatsApp, formulário, ligação. Estrutura de conversão bem pensada transforma visibilidade em contatos.",
        ],
      },
    ],
    faqs: [
      {
        q: "Vocês criam o design do site?",
        a: "Sim. A Z'ells desenvolve sites com design autoral e base técnica de SEO. O processo une estética, performance e estrutura pensada para posicionamento.",
      },
      {
        q: "O site precisa ser rápido para rankear?",
        a: "Velocidade é um fator importante, mas não é o único. Um site rápido, semântico e com conteúdo relevante forma a base de uma boa presença orgânica.",
      },
      {
        q: "Vocês usam WordPress?",
        a: "Trabalhamos com tecnologia moderna de renderização no servidor, como Next.js, que entrega performance e controle total da estrutura. A escolha depende do objetivo do projeto.",
      },
    ],
    relatedServiceSlugs: ["seo-local", "entity-seo", "seo-para-inteligencia-artificial"],
    relatedArticleSlugs: ["como-funciona-seo-local", "o-que-e-seo-local"],
    ctaTitle: "Seu site ajuda ou atrapalha o seu SEO?",
    ctaText:
      "Analisamos a estrutura, a velocidade e o conteúdo do seu site e mostramos o que precisa mudar para ele posicionar melhor.",
  },
  {
    slug: "entity-seo",
    path: "/servicos/entity-seo/",
    name: "Entity SEO",
    shortName: "Entity SEO",
    tag: "Entidade",
    accent: "purple",
    eyebrow: "Serviço",
    title: "Entity SEO",
    description:
      "Entity SEO ajuda mecanismos de busca a entenderem claramente quem é a empresa, o que ela oferece e onde atua. Estrutura de entidade, consistência e dados estruturados.",
    h1: "Entity SEO",
    intro:
      "Entity SEO ajuda mecanismos de busca a entenderem claramente quem é a empresa, o que ela oferece, onde atua e como ela se relaciona com outras entidades relevantes. Em vez de otimizar apenas palavras, o trabalho de entidade organiza o significado por trás do seu negócio.",
    sections: [
      {
        heading: "O que é uma entidade?",
        paragraphs: [
          "No contexto de busca, uma entidade é uma coisa distinta e bem definida: uma empresa, uma marca, uma pessoa, um local, um serviço. O Google constrói uma base de conhecimento sobre entidades e as relações entre elas, o que chamamos de Knowledge Graph.",
        ],
      },
      {
        heading: "Por que entidade importa para o SEO?",
        paragraphs: [
          "Quando o Google entende claramente o que é a sua empresa, ele consegue conectá-la às buscas certas e às outras entidades relevantes. Uma empresa bem compreendida tem mais chances de ser apresentada como resposta, inclusive em buscas por inteligência artificial.",
        ],
      },
      {
        heading: "O que forma a entidade de uma empresa",
        list: [
          "Nome, endereço e telefone consistentes em todas as fontes;",
          "Site com estrutura e conteúdo claros sobre o negócio;",
          "Perfil da Empresa no Google completo e alinhado;",
          "Citações em diretórios e menções em fontes relevantes;",
          "Dados estruturados que descrevem a empresa de forma honesta.",
        ],
      },
      {
        heading: "Consistência",
        paragraphs: [
          "A consistência é o pilar da entidade. Se o seu negócio aparece de formas diferentes em lugares diferentes, com nome abreviado aqui e telefone errado ali, o Google precisa adivinhar se é a mesma empresa. Consistência elimina essa ambiguidade.",
        ],
      },
      {
        heading: "Dados estruturados",
        paragraphs: [
          "Dados estruturados (Schema.org) ajudam o Google a entender o conteúdo de forma explícita. Não são um hack: são uma descrição clara da realidade. Usados com coerência, eles fortalecem a compreensão da entidade.",
        ],
      },
      {
        heading: "Relações entre fontes",
        paragraphs: [
          "Cada fonte que menciona a sua empresa, como site, perfil no Google, diretórios e imprensa, é uma confirmação da entidade. Quanto mais coerentes e relevantes são essas fontes, mais clara fica a imagem do negócio.",
        ],
      },
      {
        heading: "Como a Z'ells trabalha",
        paragraphs: [
          "Mapeamos a sua entidade atual, identificamos inconsistências e construímos a estrutura para o Google entender quem você é: site, perfil, citações e dados estruturados trabalhados em conjunto.",
        ],
      },
    ],
    faqs: [
      {
        q: "Entity SEO é para empresas grandes?",
        a: "Não. Qualquer empresa com atuação local ou nacional se beneficia de ser bem compreendida. Entidade é a base para aparecer nas buscas certas, no Knowledge Graph e nas respostas de IA.",
      },
      {
        q: "Entity SEO é a mesma coisa que schema?",
        a: "Não. Schema (dados estruturados) é uma das ferramentas do Entity SEO. A entidade é construída com consistência de informações, conteúdo e fontes ao longo do tempo.",
      },
      {
        q: "O que é o Knowledge Graph?",
        a: "É a base de conhecimento que o Google constrói sobre pessoas, empresas, lugares e coisas. Quanto mais clara é a sua entidade, mais forte é a sua presença nesse grafo.",
      },
    ],
    relatedServiceSlugs: ["seo-local", "seo-para-inteligencia-artificial", "sites-para-seo"],
    relatedArticleSlugs: ["como-google-entende-entidades", "o-que-e-seo-local"],
    ctaTitle: "O Google entende claramente o que a sua empresa faz?",
    ctaText:
      "Analisamos como a sua empresa é compreendida nas buscas e estruturamos a entidade para ela ser encontrada com mais precisão.",
  },
  {
    slug: "aeo",
    path: "/servicos/aeo/",
    name: "AEO: Answer Engine Optimization",
    shortName: "AEO",
    tag: "Respostas",
    accent: "purple",
    eyebrow: "Serviço",
    title: "AEO: Answer Engine Optimization",
    description:
      "Answer Engine Optimization (AEO) é a estratégia para a sua empresa ser a resposta a perguntas no Google e nas ferramentas de busca por IA. Estrutura, clareza e fontes.",
    h1: "AEO: Answer Engine Optimization",
    intro:
      "Cada vez mais, as pessoas não buscam sites: buscam respostas. AEO, ou Answer Engine Optimization, é a prática de estruturar conteúdo para que a sua empresa apareça como resposta nas respostas diretas do Google, nos AI Overviews e nas ferramentas de busca por inteligência artificial.",
    sections: [
      {
        heading: "O que é AEO?",
        paragraphs: [
          "AEO é a otimização para mecanismos de resposta. Enquanto o SEO tradicional posiciona páginas, o AEO posiciona respostas: trechos de conteúdo objetivos, verificáveis e bem estruturados que as ferramentas de busca extraem para responder ao usuário.",
        ],
      },
      {
        heading: "Perguntas",
        paragraphs: [
          "A base do AEO são as perguntas reais que as pessoas fazem. Mapear como o seu cliente pergunta, no Google, no ChatGPT ou no assistente de voz, define que conteúdo precisa existir e como ele deve ser organizado.",
        ],
      },
      {
        heading: "Respostas objetivas",
        paragraphs: [
          "Uma boa resposta é curta, direta e aparece logo no início do conteúdo. Estruturas como \"definição + contexto\" respondem a pergunta em poucas palavras e depois aprofundam. Clareza favorece a extração da resposta.",
        ],
      },
      {
        heading: "Estrutura",
        paragraphs: [
          "Pergunta no heading, resposta no primeiro parágrafo, desenvolvimento em subtítulos. Essa estrutura é fácil de ler para pessoas e fácil de processar para mecanismos.",
        ],
      },
      {
        heading: "Intenção",
        paragraphs: [
          "Entender a intenção por trás da pergunta evita conteúdo que não responde. Quem pergunta \"quanto custa\" espera uma faixa de preço; quem pergunta \"como funciona\" espera um processo. Cada pergunta exige o formato certo de resposta.",
        ],
      },
      {
        heading: "Conteúdo verificável",
        paragraphs: [
          "Respostas verificáveis, com dados, fontes e exemplos reais, geram mais confiança. Mecanismos de resposta preferem informações que podem ser confirmadas em múltiplas fontes.",
        ],
      },
      {
        heading: "Fontes e entidades",
        paragraphs: [
          "Quanto mais consistente é a presença da sua empresa em fontes relevantes, mais confiança os mecanismos têm ao citá-la. AEO trabalha junto com Entity SEO e autoridade: resposta precisa vir de uma entidade compreendida.",
        ],
      },
      {
        heading: "Como a Z'ells trabalha",
        paragraphs: [
          "Mapeamos as perguntas do seu público, estruturamos o conteúdo para respondê-las com clareza e alinhamos a presença da sua empresa nas fontes que os mecanismos consultam.",
        ],
      },
    ],
    faqs: [
      {
        q: "AEO é a mesma coisa que SEO?",
        a: "Não. SEO posiciona páginas nos resultados; AEO posiciona respostas dentro desses resultados e nas ferramentas de busca por IA. São complementares.",
      },
      {
        q: "AEO funciona para empresas locais?",
        a: "Funciona. Muitas perguntas locais, como \"qual a melhor clínica perto de mim\", são respondidas com base em conteúdo e entidade. Empresas com estrutura clara têm mais chance de aparecer nessas respostas.",
      },
      {
        q: "A Z'ells garante que minha empresa será citada pelo ChatGPT?",
        a: "Não. Nenhuma ferramenta de IA pode ser controlada diretamente. O que fazemos é estruturar conteúdo, entidade e autoridade para aumentar a probabilidade de a sua empresa ser compreendida e citada.",
      },
    ],
    relatedServiceSlugs: ["seo-para-inteligencia-artificial", "entity-seo", "seo-local"],
    relatedArticleSlugs: ["como-aparecer-no-chatgpt", "como-funciona-seo-local"],
    ctaTitle: "Sua empresa responde às perguntas que os clientes fazem?",
    ctaText:
      "Estruturamos o seu conteúdo para responder com clareza as perguntas do seu público, no Google e nas buscas por IA.",
  },
  {
    slug: "seo-para-inteligencia-artificial",
    path: "/servicos/seo-para-inteligencia-artificial/",
    name: "SEO para Inteligência Artificial",
    shortName: "SEO para IA",
    tag: "AI Search",
    accent: "purple",
    eyebrow: "Serviço",
    title: "SEO para Inteligência Artificial e AI Search",
    description:
      "SEO para Inteligência Artificial: estruturamos conteúdo, entidades e sinais de autoridade para a sua empresa ser compreendida e citada por mecanismos de busca baseados em IA.",
    h1: "SEO para Inteligência Artificial",
    intro:
      "A busca está mudando. AI Overviews, ChatGPT, Gemini e outros mecanismos baseados em inteligência artificial respondem perguntas diretamente, em vez de listar links. Estruturamos conteúdo, entidades e sinais de autoridade para aumentar a probabilidade de a empresa ser compreendida, encontrada e eventualmente citada por esses mecanismos.",
    sections: [
      {
        heading: "Como funciona a busca por IA",
        paragraphs: [
          "Em vez de retornar uma lista de resultados, a busca generativa resume informações de várias fontes para responder à pergunta do usuário. Isso muda o que significa ser encontrado: a empresa não precisa apenas rankear, precisa ser uma fonte confiável para a resposta.",
        ],
      },
      {
        heading: "AI Overviews",
        paragraphs: [
          "As AI Overviews são respostas geradas que aparecem no topo do Google. Elas citam fontes confiáveis e relevantes. Empresas com conteúdo claro, estruturado e bem estabelecido têm mais chances de serem consideradas nesses resumos.",
        ],
      },
      {
        heading: "AI Search, ChatGPT e Gemini",
        paragraphs: [
          "Ferramentas como ChatGPT e Gemini, quando usadas como busca, recorrem a informações públicas sobre entidades. Presença consistente, conteúdo verificável e autoridade aumentam a probabilidade de a sua empresa ser mencionada como resposta.",
        ],
      },
      {
        heading: "Resposta direta",
        paragraphs: [
          "Conteúdo que responde perguntas de forma direta e objetiva é o mais adequado para a extração por IA. A resposta clara no início, seguida de desenvolvimento, é o formato mais compatível com esses mecanismos.",
        ],
      },
      {
        heading: "Conteúdo original",
        paragraphs: [
          "Conteúdo original e útil, que não repete o que já existe, é valorizado pelos mecanismos e pelas IAs. Originalidade constrói autoridade e reduz a chance de ser ignorado como duplicado.",
        ],
      },
      {
        heading: "Dados estruturados",
        paragraphs: [
          "Schema ajuda os mecanismos a entenderem o contexto do conteúdo: o que é, de quem é, sobre o que fala. Uma base de dados estruturados coerente aumenta a confiabilidade da informação.",
        ],
      },
      {
        heading: "Autoridade e entidade",
        paragraphs: [
          "As IAs citam fontes que consideram confiáveis. Autoridade se constrói com consistência de entidade, citações, avaliações, links e produção contínua de conteúdo. É um trabalho de longo prazo, não um atalho.",
        ],
      },
      {
        heading: "O que a Z'ells não promete",
        paragraphs: [
          "Não garantimos que a sua empresa será recomendada pelo ChatGPT, pelo Gemini ou por qualquer ferramenta de IA. Essas decisões dependem de sistemas que nenhuma empresa controla. O que oferecemos é a estrutura técnica e de conteúdo para maximizar as chances, de forma honesta e mensurável.",
        ],
      },
    ],
    faqs: [
      {
        q: "Dá para aparecer no ChatGPT?",
        a: "Ninguém pode controlar diretamente o que o ChatGPT responde. O que é possível é estruturar a presença da empresa, com site, conteúdo, entidade e autoridade, para que ela seja uma fonte compreendida e plausível de ser citada.",
      },
      {
        q: "O que é GEO?",
        a: "GEO (Generative Engine Optimization) é o nome dado à otimização para mecanismos de busca generativa. Na prática, é um conjunto de práticas de conteúdo, estrutura e autoridade muito próximas do que a Z'ells chama de SEO para IA.",
      },
      {
        q: "SEO para IA substitui o SEO tradicional?",
        a: "Não. SEO para IA complementa o SEO tradicional. A base continua sendo site rápido, conteúdo útil, entidade clara e autoridade. O que muda é a forma como esse trabalho é compreendido pelos novos mecanismos.",
      },
    ],
    relatedServiceSlugs: ["aeo", "entity-seo", "sites-para-seo"],
    relatedArticleSlugs: ["como-aparecer-no-chatgpt", "como-google-entende-entidades"],
    ctaTitle: "Sua empresa está preparada para a busca por IA?",
    ctaText:
      "Estruturamos a sua presença digital para que os mecanismos de busca por inteligência artificial compreendam o seu negócio.",
  },
];

export const SERVICES_INDEX = SERVICES.map((service) => ({
  slug: service.slug,
  path: service.path,
  name: service.name,
  shortName: service.shortName,
  description: service.description,
  tag: service.tag,
  accent: service.accent,
}));

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((service) => service.slug === slug);

export const getServicePath = (slug: string) =>
  `${SITE_URL}${getServiceBySlug(slug)?.path ?? "/servicos/"}`;

export function relatedServices(service: Service): Service[] {
  return service.relatedServiceSlugs
    .map(getServiceBySlug)
    .filter((item): item is Service => Boolean(item));
}