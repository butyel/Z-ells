import Link from "next/link";
import { Reveal } from "./Reveal";

type ServiceCardProps = {
  title: string;
  description: string;
  items: string[];
  tag?: string;
  accent?: "lime" | "purple";
  href?: string;
};

export function ServiceCard({
  title,
  description,
  items,
  tag,
  accent = "lime",
  href,
}: ServiceCardProps) {
  const isPurple = accent === "purple";
  const content = (
    <div
      className={`group flex h-full flex-col rounded-2xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${
        isPurple
          ? "border-purple/40 hover:border-purple/70"
          : "border-line hover:border-lime/50 hover:bg-surface-2"
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
            isPurple ? "bg-purple/10 text-purple" : "bg-lime/10 text-lime"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {tag && (
          <span
            className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${
              isPurple
                ? "border-purple/40 bg-purple/5 text-purple"
                : "border-lime/40 bg-lime/5 text-lime"
            }`}
          >
            {tag}
          </span>
        )}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-5 text-[15px] leading-relaxed text-muted">{description}</p>

      <ul className="mt-auto space-y-2.5 border-t border-line/70 pt-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/80">
            <svg className="mt-0.5 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12.5l4.5 4.5L19 7.5"
                stroke={isPurple ? "#6f61ff" : "#d8ff66"}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>
      {href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-lime">
          Conhecer o serviço
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </div>
  );

  return (
    <Reveal className="h-full">
      {href ? (
        <Link href={href} className="block h-full">
          {content}
        </Link>
      ) : (
        content
      )}
    </Reveal>
  );
}