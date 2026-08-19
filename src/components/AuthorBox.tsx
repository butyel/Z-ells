import Link from "next/link";
import { AUTHOR } from "@/config/site";

export function AuthorBox({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-lime font-display text-lg font-bold text-ink">
        RF
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-lime">
          Escrito por
        </p>
        <Link
          href={AUTHOR.url}
          className="mt-0.5 block font-display text-lg font-semibold text-foreground transition-colors hover:text-lime"
        >
          {AUTHOR.name}
        </Link>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          {AUTHOR.role}. Especializado em SEO Local, Google Business Profile,
          Entity SEO e otimização para buscas por inteligência artificial.
        </p>
        {!compact && (
          <Link
            href={AUTHOR.url}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-lime transition-colors hover:text-foreground"
          >
            Conhecer o autor
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}