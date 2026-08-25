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
    <div className={`space-y-3 ${className}`}>
      {items.map((faq, i) => {
        const id = `${idPrefix}-${i}`;
        const open = openIndex === i;
        return (
          <div
            key={faq.q}
            className="rounded-[20px] border border-line bg-surface transition-all duration-300 hover:border-lime/28"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                aria-controls={`${id}-painel`}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="text-base font-semibold text-foreground sm:text-lg">
                  {faq.q}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-foreground transition-all duration-300 ${
                    open ? "rotate-45 border-lime/50 text-lime bg-lime/5" : ""
                  }`}
                  aria-hidden="true"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={`${id}-painel`}
              role="region"
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted sm:px-6">
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
