"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, EASE, DUR } from "@/lib/gsap";
import { useMotion } from "./MotionProvider";

type Props = {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  id?: string;
};

export function SectionReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  id,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { ready, reduced } = useMotion();

  useEffect(() => {
    if (!ready || reduced || !ref.current) return;

    const el = ref.current;
    const dirs = {
      up: { y: 18, x: 0 },
      left: { y: 0, x: -20 },
      right: { y: 0, x: 20 },
    };
    const d = dirs[direction];

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          el,
          { opacity: 0, x: d.x, y: d.y },
          { opacity: 1, x: 0, y: 0, duration: DUR.reveal, ease: EASE.reveal, delay },
        );
      },
    });

    return () => st.kill();
  }, [ready, reduced, direction, delay]);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}
