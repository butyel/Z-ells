export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://zells.com.br";

export const SITE_NAME = "Z'ells";
export const SITE_LOCALE = "pt-BR";
export const SITE_OG_LOCALE = "pt_BR";
export const SITE_TAGLINE = "SEO Local, Google Maps e Posicionamento no Google";

export const SITE_DESCRIPTION =
  "Apareça no Google e no Google Maps com SEO Local estratégico. A Z'ells ajuda empresas a conquistar visibilidade, autoridade e mais clientes.";

export const CITY = "Presidente Epitácio";
export const STATE = "SP";
export const COUNTRY = "Brasil";

export const PHONE_DISPLAY = "(18) 99649-4348";
export const PHONE_INTL = "+5518996494348";
export const TEL_URL = `tel:${PHONE_INTL}`;

export const WHATSAPP_NUMBER = "5518996494348";

export const WHATSAPP_MESSAGE =
  "Olá! Encontrei a Z'ells pelo site e gostaria de entender como vocês podem melhorar o posicionamento da minha empresa no Google.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const AUTHOR = {
  name: "Raphael Fernandes",
  slug: "raphael-fernandes",
  role: "Responsável pela Z'ells",
  url: `${SITE_URL}/autor/raphael-fernandes/`,
} as const;

export const OG_IMAGE_URL = `${SITE_URL}/opengraph-image`;
export const LOGO_URL = `${SITE_URL}/icon.svg`;