"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useMotion } from "./MotionProvider";

type Props = {
  count: number;
};

export function MethodProgress({ count }: Props) {
  const lineRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const { reduced } = useMotion();

  useEffect(() => {
    if (reduced || !lineRef.current || !dotsRef.current) return;

    const ctx = gsap.context(() => {
      const dots = dotsRef.current!.children;
      const total = dots.length;

      gsap.set(lineRef.current!, { scaleX: 0, transformOrigin: "left center" });

      ScrollTrigger.create({
        trigger: dotsRef.current!,
        start: "top 60%",
        end: "bottom 40%",
        scrub: 0.3,
        onUpdate: (self) => {
          gsap.to(lineRef.current!, { scaleX: self.progress, duration: 0, overwrite: true });
          const active = Math.min(Math.floor(self.progress * total), total - 1);
          Array.from(dots).forEach((dot, i) => {
            const el = dot as HTMLElement;
            if (i <= active) {
              el.classList.add("is-active");
              el.classList.remove("is-inactive");
            } else {
              el.classList.remove("is-active");
              el.classList.add("is-inactive");
            }
          });
        },
      });
    }, dotsRef.current);

    return () => ctx.revert();
  }, [reduced]);

  if (reduced) return null;

  return (
    <div ref={dotsRef} className="absolute left-0 right-0 top-[2.75rem] hidden h-px lg:block" aria-hidden="true">
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
