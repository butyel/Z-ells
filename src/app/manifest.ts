import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Z'ells — SEO Local, Google Maps e Posicionamento no Google",
    short_name: "Z'ells",
    description:
      "Agência de SEO Local. Posiciona empresas no Google, no Google Maps e nas buscas por inteligência artificial.",
    start_url: "/",
    display: "standalone",
    background_color: "#11130f",
    theme_color: "#11130f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
