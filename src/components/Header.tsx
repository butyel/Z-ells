"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV } from "@/data/navigation";
import { WHATSAPP_URL } from "@/config/site";
import { BrandLogo } from "./BrandLogo";

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group relative py-1.5 text-[13px] font-medium transition-colors hover:text-foreground ${
        active ? "text-foreground" : "text-foreground/65"
      }`}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-px w-0 bg-lime transition-all duration-250 group-hover:w-full" />
    </Link>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/servicos/") return pathname.startsWith("/servicos");
  return pathname.startsWith(href);
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-250 ${
        scrolled
          ? "border-b border-line/60 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-14 items-center justify-between lg:h-16">
        <BrandLogo onClick={() => setOpen(false)} compact />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {MAIN_NAV.map((link) => (
              <li key={link.href} className="relative">
                {link.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(openMenu === link.href ? null : link.href)
                      }
                      aria-expanded={openMenu === link.href}
                      aria-haspopup="true"
                      className={`group relative inline-flex items-center gap-1.5 py-1.5 text-[13px] font-medium transition-colors hover:text-foreground ${
                        isActive(pathname, link.href)
                          ? "text-foreground"
                          : "text-foreground/65"
                      }`}
                    >
                      {link.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          openMenu === link.href ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M6 9l6 6 6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="absolute bottom-0 left-0 h-px w-0 bg-lime transition-all duration-250 group-hover:w-full" />
                    </button>
                    {openMenu === link.href && (
                      <ul
                        className="absolute left-0 top-full w-64 rounded-xl border border-line bg-surface p-1.5 shadow-[0_20px_50px_-16px_rgba(0,0,0,0.6)]"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setOpenMenu(null)}
                              className="block rounded-lg px-3.5 py-2 text-sm text-foreground/80 transition-colors hover:bg-surface-2 hover:text-foreground"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    href={link.href}
                    active={isActive(pathname, link.href)}
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href="/diagnostico-seo/"
            data-track="diagnostico_click"
            data-track-label="header"
            className="inline-flex h-9 items-center rounded-full bg-lime px-4 text-[13px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_-4px_rgba(216,255,102,0.3)]"
          >
            Receber diagnóstico de SEO
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-foreground lg:hidden"
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-0 top-14 z-40 overflow-y-auto bg-ink/98 lg:hidden"
        >
          <nav aria-label="Navegação móvel">
            <ul className="flex flex-col gap-1 px-5 py-6">
              {MAIN_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground/80 transition-colors hover:bg-surface-2 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="mt-1 space-y-0.5 border-l border-line/60 pl-4">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-4 flex flex-col gap-2 px-3">
                <a
                  href="/diagnostico-seo/"
                  data-track="diagnostico_click"
                  data-track-label="menu-mobile"
                  onClick={() => setOpen(false)}
                  className="flex h-12 w-full items-center justify-center rounded-full bg-lime px-6 text-[15px] font-semibold text-ink"
                >
                  Receber diagnóstico de SEO
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp_click"
                  data-track-label="menu-mobile"
                  onClick={() => setOpen(false)}
                  className="flex h-12 w-full items-center justify-center rounded-full border border-line bg-surface px-6 text-[15px] font-semibold text-foreground"
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
