import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Services } from "@/components/Services";
import { Methodology } from "@/components/Methodology";
import { LocalPresence } from "@/components/LocalPresence";
import { Segments } from "@/components/Segments";
import { Differentiators } from "@/components/Differentiators";
import { FAQ, HOME_FAQS } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import {
  breadcrumbNode,
  faqNode,
  servicesItemListNode,
  webPageNode,
} from "@/lib/schema";
import { SERVICES } from "@/data/services";
import { SITE_DESCRIPTION, SITE_URL } from "@/config/site";

const HOME_TITLE = "Agência de SEO Local | Google Maps e IA | Z'ells";
const HOME_DESCRIPTION = SITE_DESCRIPTION;

export const metadata = createMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Services />
      <Methodology />
      <LocalPresence />
      <Segments />
      <Differentiators />
      <FAQ />
      <FinalCTA />

      <SchemaGraph
        nodes={[
          webPageNode(SITE_URL, HOME_TITLE, HOME_DESCRIPTION),
          breadcrumbNode(SITE_URL, [{ name: "Início" }]),
          servicesItemListNode(SITE_URL, SERVICES),
          faqNode(SITE_URL, HOME_FAQS),
        ]}
      />
    </>
  );
}