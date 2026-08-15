import { NAV_LINKS, PHONE_DISPLAY, PHONE_INTL, WHATSAPP_URL } from "@/lib/site";

const servicesLinks = [
  { label: "SEO Local", href: "#servicos" },
  { label: "Perfil da Empresa no Google", href: "#servicos" },
  { label: "Sites preparados para SEO", href: "#servicos" },
  { label: "GEO e otimização para IA", href: "#servicos" },
];

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-ink">
      <div className="container-site py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <a
              href="#inicio"
              className="inline-flex items-baseline gap-1 font-display text-xl font-bold tracking-tight"
            >
              <span className="text-foreground">Z&rsquo;ells</span>
              <span className="h-1.5 w-1.5 self-center rounded-full bg-lime" />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Agência boutique de SEO Local. Posicionamos empresas no Google, no
              Google Maps e nas buscas por inteligência artificial &mdash; para
              que você seja encontrado, reconhecido e escolhido.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Serviços
            </h3>
            <ul className="space-y-2.5">
              {servicesLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Contato
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:+${PHONE_INTL}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-sm text-muted">Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line/70 pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Z&rsquo;ells. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted">
            SEO Local · Google · Google Maps · Perfil da Empresa no Google · GEO
          </p>
        </div>
      </div>
    </footer>
  );
}
