import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactCTA } from "@/components/ContactCTA";
import { SchemaGraph } from "@/components/SchemaGraph";
import { createMetadata } from "@/lib/seo";
import {
  servicesItemListNode,
  webPageNode,
} from "@/lib/schema";
import { SERVICES } from "@/data/services";
import { SITE_URL } from "@/config/site";

const PAGE_TITLE = "Serviços de SEO Local";
const PAGE_DESCRIPTION =
  "SEO Local, Perfil da Empresa no Google, Google Maps, auditoria, sites para SEO, Entity SEO, AEO e SEO para inteligência artificial. Conheça os serviços da Z'ells.";

export const metadata = createMetadata({
  title: `${PAGE_TITLE} | Z'ells`,
  description: PAGE_DESCRIPTION,
  path: "/servicos/",
});

export default function ServicosPage() {
  return (
    <>
      <Breadcrumbs
        path="/servicos/"
        items={[{ name: "Início", href: "/" }, { name: "Serviços" }]}
      />
      <PageHero
        eyebrow="Serviços"
        title={PAGE_TITLE}
        description="Estratégias que trabalham juntas para a sua empresa ser encontrada, compreendida e escolhida no momento da busca."
      />

      <section className="section-pad border-t border-line/60">
        <div className="container-site grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.shortName}
              description={service.description}
              items={service.sections.flatMap((sec) => sec.list ?? []).slice(0, 3)}
              tag={service.tag}
              accent={service.accent}
              href={service.path}
            />
          ))}
        </div>
      </section>

      <ContactCTA
        title="Não sabe por onde começar?"
        text="Vamos analisar a presença atual do seu negócio no Google e indicar o caminho com mais impacto. Sem compromisso."
      />

      <SchemaGraph
        nodes={[
          webPageNode(
            `${SITE_URL}/servicos/`,
            `${PAGE_TITLE} | Z'ells`,
            PAGE_DESCRIPTION,
          ),
          servicesItemListNode(`${SITE_URL}/servicos/`, SERVICES),
        ]}
      />
    </>
  );
}