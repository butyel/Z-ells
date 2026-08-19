import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { slugify } from "@/lib/utils";

type ContentSectionProps = {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  list?: string[];
  children?: ReactNode;
  id?: string;
};

export function ContentSection({
  eyebrow,
  title,
  paragraphs,
  list,
  children,
  id,
}: ContentSectionProps) {
  const sectionId = id ?? (title ? slugify(title) : undefined);
  return (
    <Reveal id={sectionId} className="scroll-mt-28">
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-lime">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="mb-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
      )}
      {paragraphs?.map((paragraph) => (
        <p
          key={paragraph.slice(0, 40)}
          className="mb-4 text-base leading-relaxed text-muted sm:text-lg"
        >
          {paragraph}
        </p>
      ))}
      {list && (
        <ul className="mt-4 space-y-3">
          {list.map((item) => (
            <li
              key={item.slice(0, 40)}
              className="flex items-start gap-3 text-base leading-relaxed text-foreground/85 sm:text-lg"
            >
              <svg
                className="mt-1.5 shrink-0"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12.5l4.5 4.5L19 7.5"
                  stroke="#d8ff66"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      )}
      {children}
    </Reveal>
  );
}