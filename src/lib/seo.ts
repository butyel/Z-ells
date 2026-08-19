import type { Metadata } from "next";
import {
  SITE_NAME,
  SITE_OG_LOCALE,
  SITE_URL,
  OG_IMAGE_URL,
} from "@/config/site";

type CreateMetadataArgs = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noindex = false,
}: CreateMetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = {
    url: OG_IMAGE_URL,
    width: 1200,
    height: 630,
    alt: title,
  };

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: SITE_OG_LOCALE,
      type,
      images: [image],
      ...(type === "article" && publishedTime
        ? {
            publishedTime,
            modifiedTime,
            authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}