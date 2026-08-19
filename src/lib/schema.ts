import {
  AUTHOR,
  CITY,
  COUNTRY,
  LOGO_URL,
  OG_IMAGE_URL,
  PHONE_INTL,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  STATE,
} from "@/config/site";
import type { Article } from "@/data/articles";
import type { Service } from "@/data/services";

export type SchemaNode = Record<string, unknown>;

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/autor/raphael-fernandes/#person`;
export const webPageId = (url: string) => `${url}#webpage`;
export const breadcrumbId = (url: string) => `${url}#breadcrumb`;
export const serviceId = (url: string) => `${url}#service`;

export const knowsAbout = [
  "SEO Local",
  "Google Business Profile",
  "Google Maps",
  "Entity SEO",
  "Answer Engine Optimization",
  "SEO para Inteligência Artificial",
  "Sites preparados para SEO",
  "Posicionamento orgânico no Google",
] as const;

export function organizationNode(): SchemaNode {
  return {
    "@id": ORG_ID,
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    slogan: SITE_TAGLINE,
    telephone: PHONE_INTL,
    areaServed: [
      { "@type": "Country", name: COUNTRY },
      { "@type": "City", name: CITY },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: CITY,
      addressRegion: STATE,
      addressCountry: "BR",
    },
    logo: { "@type": "ImageObject", url: LOGO_URL },
    image: { "@type": "ImageObject", url: OG_IMAGE_URL },
    knowsAbout: [...knowsAbout],
    founder: { "@type": "Person", "@id": PERSON_ID, name: AUTHOR.name },
  };
}

export function websiteNode(): SchemaNode {
  return {
    "@id": WEBSITE_ID,
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LOCALE,
    publisher: { "@id": ORG_ID },
  };
}

export function webPageNode(
  url: string,
  title: string,
  description: string,
): SchemaNode {
  return {
    "@id": webPageId(url),
    "@type": "WebPage",
    url,
    name: title,
    description,
    inLanguage: SITE_LOCALE,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    primaryImageOfPage: OG_IMAGE_URL,
    breadcrumb: { "@id": breadcrumbId(url) },
  };
}

export function breadcrumbNode(
  url: string,
  items: { name: string; href?: string }[],
): SchemaNode {
  return {
    "@id": breadcrumbId(url),
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

export function serviceNode(service: Service): SchemaNode {
  const url = `${SITE_URL}${service.path}`;
  return {
    "@id": serviceId(url),
    "@type": "Service",
    name: service.name,
    url,
    description: service.description,
    serviceType: service.name,
    inLanguage: SITE_LOCALE,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: COUNTRY },
  };
}

export function personNode(): SchemaNode {
  return {
    "@id": PERSON_ID,
    "@type": "Person",
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.role,
    worksFor: { "@id": ORG_ID },
    knowsAbout: [...knowsAbout],
  };
}

export function faqNode(
  url: string,
  faqs: { q: string; a: string }[],
): SchemaNode {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
    isPartOf: { "@id": webPageId(url) },
  };
}

export function articleNode(article: Article): SchemaNode {
  const url = `${SITE_URL}/blog/${article.slug}/`;
  return {
    "@id": url,
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url,
    inLanguage: SITE_LOCALE,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@id": webPageId(url) },
    image: OG_IMAGE_URL,
    articleSection: article.category,
  };
}

export function servicesItemListNode(
  url: string,
  services: Service[],
): SchemaNode {
  return {
    "@type": "ItemList",
    "@id": `${url}#services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@id": serviceId(`${SITE_URL}${service.path}`) },
    })),
  };
}

export function schemaGraph(nodes: SchemaNode[]): SchemaNode {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function baseGraphNodes(): SchemaNode[] {
  return [organizationNode(), websiteNode()];
}