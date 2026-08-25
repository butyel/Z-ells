"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useMotion } from "./MotionProvider";

type Props = {
  count: number;
};

export function MethodProgress({ count }: Props) {
  const lineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { ready, reduced } = useMotion();

  useEffect(() => {
    if (!ready || reduced || !lineRef.current || !containerRef.current) return;

    const section = containerRef.current.closest("#metodo");
    if (!section) return;

    const dots = containerRef.current.querySelectorAll<HTMLDivElement>("[data-method-dot]");
    const total = dots.length;
    if (total === 0) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 70%",
        end: "bottom 35%",
        scrub: 0.3,
        onUpdate: (self) => {
          gsap.to(lineRef.current!, { scaleX: self.progress, duration: 0, overwrite: true });
          const active = Math.min(Math.floor(self.progress * total), total - 1);
          dots.forEach((dot, i) => {
            if (i <= active) {
              dot.classList.add("is-active");
              dot.classList.remove("is-inactive");
            } else {
              dot.classList.remove("is-active");
              dot.classList.add("is-inactive");
            }
          });
        },
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [ready, reduced]);

  if (reduced) return null;

  return (
    <div ref={containerRef} className="absolute left-0 right-0 top-[2.75rem] hidden h-px lg:block" aria-hidden="true">
      <div
        ref={lineRef}
        className="absolute inset-0 h-full origin-left"
        style={{
          background: "linear-gradient(90deg, #d8ff66, #6f61ff)",
        }}
      />
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          data-method-dot
          className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-line/40 transition-colors duration-300"
          style={{ left: `${(i / (count - 1)) * 100}%` }}
        />
      ))}
      <style>{`
        .is-active { background-color: #d8ff66 !important; }
        .is-inactive { background-color: rgba(41,46,33,0.4) !important; }
      `}</style>
    </div>
  );
}
