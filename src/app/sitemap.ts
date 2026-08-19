import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { SERVICES } from "@/data/services";
import { ARTICLES } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/sobre/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/metodo/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/servicos/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/cases/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/diagnostico-seo/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/seo-presidente-epitacio/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/blog/`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/autor/raphael-fernandes/`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/politica-de-privacidade/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/termos-de-uso/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${SITE_URL}${service.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articlePages: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}/`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...articlePages];
}