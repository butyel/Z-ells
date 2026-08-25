"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  idPrefix?: string;
  className?: string;
};

export function FaqAccordion({
  items,
  idPrefix = "faq",
  className = "",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((faq, i) => {
        const id = `${idPrefix}-${i}`;
        const open = openIndex === i;
        return (
          <div
            key={faq.q}
            className="rounded-xl border border-line bg-surface transition-colors duration-250 hover:border-lime/25"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                aria-controls={`${id}-painel`}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
              >
                <span className="text-sm font-semibold text-foreground sm:text-base">
                  {faq.q}
                </span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-foreground transition-all duration-250 ${
                    open ? "rotate-45 border-lime/50 text-lime bg-lime/5" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`${id}-painel`}
              role="region"
              className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm leading-relaxed text-muted sm:px-6">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
