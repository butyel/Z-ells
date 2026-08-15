# Z'ells — Site institucional

Site institucional da **Z'ells**, agência boutique de SEO Local, Google Maps e
posicionamento no Google e nas buscas por inteligência artificial (GEO / AI
Search).

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Fonte: Inter (texto) e Space Grotesk (display), auto-hospedadas via `next/font`

## Estrutura

```
src/
  app/
    layout.tsx          # Root layout, fontes, metadata e JSON-LD
    page.tsx            # Página inicial (Home)
    globals.css         # Tema, tokens de cor e utilitários
    icon.svg            # Favicon
    opengraph-image.tsx # Imagem Open Graph gerada
    robots.ts           # robots.txt
    sitemap.ts          # sitemap.xml
    manifest.ts         # Web App Manifest
  assets/               # Fontes estáticas usadas na geração do OG
  components/           # Componentes da Home
  lib/
    site.ts             # Constantes do site (URL, WhatsApp, navegação)
    schema.ts           # Schemas JSON-LD (schema.org)
```

## Comandos

```bash
npm run dev      # Ambiente de desenvolvimento
npm run build    # Build de produção
npm run start    # Servir build de produção
npm run lint     # ESLint
```

## SEO

- Um único `H1` por página, hierarquia semântica de `H2`/`H3`
- Metadata completa (title, description, Open Graph, Twitter Card, canonical)
- Schemas JSON-LD: `ProfessionalService`, `WebSite`, `WebPage`, `ItemList`/
  `Service` e `FAQPage`
- `robots.txt` e `sitemap.xml` gerados dinamicamente
- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`)

## Arquitetura para expansão

O projeto está preparado para receber futuras páginas de serviço e conteúdo,
como `/seo-local`, `/google-maps`, `/perfil-empresa-google`, `/sites-para-seo`,
`/geo`, `/blog` e `/cases`, seguindo as convenções do App Router.
