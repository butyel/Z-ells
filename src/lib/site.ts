export const SITE_URL = "https://zells.com.br";

export const SITE_NAME = "Z'ells";
export const SITE_TAGLINE = "SEO Local, Google Maps e Posicionamento no Google";

export const SITE_TITLE = `${SITE_NAME} | SEO Local, Google Maps e Posicionamento no Google`;
export const SITE_DESCRIPTION =
  "Faça sua empresa aparecer quando seus clientes pesquisarem no Google, no Google Maps e nas buscas por inteligência artificial. SEO Local, sites, Perfil da Empresa no Google e estratégia de posicionamento com a Z'ells.";

export const PHONE_DISPLAY = "(18) 99649-4348";
export const PHONE_INTL = "+5518996494348";

export const WHATSAPP_MESSAGE =
  "Olá! Encontrei a Z'ells pelo site e gostaria de entender como vocês podem melhorar o posicionamento da minha empresa no Google.";

export const WHATSAPP_URL = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Problema", href: "#problema" },
  { label: "Serviços", href: "#servicos" },
  { label: "Método", href: "#metodo" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;
