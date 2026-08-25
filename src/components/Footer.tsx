import Link from "next/link";
import {
  FOOTER_INSTITUTIONAL,
  FOOTER_LEGAL,
  FOOTER_SERVICES,
  MAIN_NAV,
} from "@/data/navigation";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/config/site";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="border-t border-line/60 bg-ink">
      <div className="container-site py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">
          <div>
            <BrandLogo compact />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Agência boutique de SEO Local. Posicionamos empresas no Google, no
              Google Maps e nas buscas por inteligência artificial. Para que você
              seja encontrado, compreendido e escolhido.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER_LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {MAIN_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Serviços
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Z&rsquo;ells
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_INSTITUTIONAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wide text-foreground">
              Contato
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={TEL_URL}
                  data-track="phone_click"
                  data-track-label="footer"
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
                  data-track="whatsapp_click"
                  data-track-label="footer"
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-sm text-muted">
                  Base estratégica em Presidente Epitácio, SP · Atendimento em
                  todo o Brasil
                </span>
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
            SEO Local · Google Maps · Perfil da Empresa no Google · Entity SEO ·
            AEO · IA
          </p>
        </div>
      </div>
    </footer>
  );
}
