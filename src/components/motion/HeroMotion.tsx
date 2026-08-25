"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, EASE, DUR } from "@/lib/gsap";
import { useMotion } from "./MotionProvider";

type Props = {
  children: ReactNode;
};

export function HeroMotion({ children }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ready, reduced } = useMotion();

  useEffect(() => {
    if (!ready || reduced || !sectionRef.current) return;

    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      const eyebrow = section.querySelector("[data-hero='eyebrow']");
      if (eyebrow) {
        tl.from(eyebrow, { opacity: 0, y: 12, duration: DUR.reveal, ease: EASE.reveal }, 0);
      }

      const headline = section.querySelector("[data-hero='headline']");
      if (headline) {
        tl.from(headline, { opacity: 0, y: 18, duration: DUR.hero, ease: EASE.reveal }, 0.08);
      }

      const desc = section.querySelector("[data-hero='description']");
      if (desc) {
        tl.from(desc, { opacity: 0, y: 14, duration: DUR.reveal, ease: EASE.reveal }, 0.18);
      }

      const line = section.querySelector("[data-hero='line']");
      if (line) {
        tl.from(line, { scaleX: 0, transformOrigin: "left center", duration: 0.5, ease: EASE.reveal }, 0.28);
      }

      const ctas = section.querySelector("[data-hero='ctas']");
      if (ctas) {
        tl.from(ctas, { opacity: 0, y: 10, duration: DUR.reveal, ease: EASE.reveal }, 0.34);
      }

      const searchMock = section.querySelector("[data-hero='search-mock']");
      if (searchMock) {
        tl.from(searchMock, { opacity: 0, x: 40, rotate: 1.5, scale: 0.96, duration: DUR.hero, ease: EASE.reveal }, 0.2);
      }

      const tags = section.querySelectorAll("[data-hero='tag']");
      if (tags.length) {
        tl.from(tags, { opacity: 0, y: 8, duration: 0.35, ease: EASE.micro, stagger: 0.06 }, 0.45);
      }

      const steps = section.querySelectorAll("[data-hero='step']");
      if (steps.length) {
        tl.from(steps, { opacity: 0, y: 6, duration: 0.3, ease: EASE.micro, stagger: 0.08 }, 0.55);
      }

      // scroll parallax
      if (headline) {
        gsap.to(headline, {
          yPercent: -5,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.4 },
        });
      }

      if (searchMock) {
        gsap.to(searchMock, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.4 },
        });
      }

      const particles = section.querySelector("[data-hero='particles']");
      if (particles) {
        gsap.to(particles, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: 0.5 },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [ready, reduced]);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
}
