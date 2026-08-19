import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-grid hero-glow section-anchor">
      <div className="container-site pt-10 pb-14 sm:pb-16 lg:pb-20">
        {eyebrow && (
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-balance font-display text-[2.2rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}