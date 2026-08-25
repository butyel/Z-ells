"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, EASE, DUR } from "@/lib/gsap";
import { useMotion } from "./MotionProvider";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  stagger?: number;
  delay?: number;
  id?: string;
};

export function SectionReveal({
  children,
  className = "",
  direction = "up",
  stagger = 0,
  delay = 0,
  id,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { reduced } = useMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;

    const el = ref.current;
    const dirs = {
      up: { y: 18, x: 0 },
      left: { y: 0, x: -20 },
      right: { y: 0, x: 20 },
    };
    const d = dirs[direction];

    gsap.set(el, { opacity: 0, x: d.x, y: d.y });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: DUR.reveal,
          ease: EASE.reveal,
          delay,
        });
        if (stagger) {
          const children = el.querySelectorAll("[data-reveal-child]");
          if (children.length) {
            gsap.set(children, { opacity: 0, y: 12 });
            gsap.to(children, {
              opacity: 1,
              y: 0,
              duration: DUR.reveal,
              ease: EASE.reveal,
              stagger,
              delay: delay + 0.1,
            });
          }
        }
      },
    });

    return () => st.kill();
  }, [reduced, direction, stagger, delay]);

  if (reduced) {
    return (
      <div ref={ref} id={id} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
}
