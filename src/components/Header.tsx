"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

function Logo() {
  return (
    <a
      href="#inicio"
      className="group inline-flex items-baseline gap-1 font-display text-xl font-bold tracking-tight"
      aria-label="Z'ells, ir para o início"
    >
      <span className="text-foreground">Z&rsquo;ells</span>
      <span className="h-1.5 w-1.5 self-center rounded-full bg-lime transition-transform duration-200 group-hover:scale-150" />
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between lg:h-[72px]">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-full bg-lime px-5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e2ff85]"
          >
            Fale conosco
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-foreground lg:hidden"
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
          className="fixed inset-0 top-16 z-40 bg-ink/98 lg:hidden"
        >
          <nav aria-label="Navegação móvel">
            <ul className="flex flex-col gap-1 px-5 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3.5 text-lg font-medium text-foreground/80 transition-colors hover:bg-surface-2 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-4 px-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-13 w-full items-center justify-center rounded-full bg-lime px-6 text-[15px] font-semibold text-ink"
                >
                  Fale conosco
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
