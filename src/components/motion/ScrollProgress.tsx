"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useMotion } from "./MotionProvider";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const { ready, reduced } = useMotion();

  useEffect(() => {
    if (!ready || reduced || !barRef.current) return;

    const tween = gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        transformOrigin: "left center",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ready, reduced]);

  if (reduced) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full origin-left"
        style={{
          background: "linear-gradient(90deg, #d8ff66, #6f61ff)",
        }}
      />
    </div>
  );
}
