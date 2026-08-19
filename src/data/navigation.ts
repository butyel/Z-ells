import { SERVICES } from "@/data/services";

export type NavChild = { label: string; href: string };
export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const SERVICE_NAV: NavChild[] = SERVICES.map((service) => ({
  label: service.shortName,
  href: service.path,
}));

export const MAIN_NAV: NavLink[] = [
  { label: "Início", href: "/" },
  {
    label: "Serviços",
    href: "/servicos/",
    children: [
      { label: "Todos os serviços", href: "/servicos/" },
      ...SERVICE_NAV,
    ],
  },
  { label: "Método", href: "/metodo/" },
  { label: "Sobre", href: "/sobre/" },
  { label: "Cases", href: "/cases/" },
  { label: "Blog", href: "/blog/" },
];

export const FOOTER_SERVICES = SERVICE_NAV;

export const FOOTER_INSTITUTIONAL: NavChild[] = [
  { label: "Sobre a Z'ells", href: "/sobre/" },
  { label: "Método Z'ells", href: "/metodo/" },
  { label: "Cases", href: "/cases/" },
  { label: "Diagnóstico de SEO", href: "/diagnostico-seo/" },
  { label: "SEO em Presidente Epitácio", href: "/seo-presidente-epitacio/" },
  { label: "Central de Conhecimento", href: "/blog/" },
];

export const FOOTER_LEGAL: NavChild[] = [
  { label: "Política de Privacidade", href: "/politica-de-privacidade/" },
  { label: "Termos de Uso", href: "/termos-de-uso/" },
];