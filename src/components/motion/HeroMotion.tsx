"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, EASE, DUR } from "@/lib/gsap";
import { useMotion } from "./MotionProvider";

type Props = {
  children: ReactNode;
};

export function HeroMotion({ children }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { reduced } = useMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current) return;

    const section = sectionRef.current;
    const ctx = gsap.context(() => {
      // -- entrance timeline --
      const tl = gsap.timeline({ delay: 0.15 });

      // eyebrow
      const eyebrow = section.querySelector("[data-hero='eyebrow']");
      if (eyebrow) {
        gsap.set(eyebrow, { opacity: 0, y: 12 });
        tl.to(eyebrow, { opacity: 1, y: 0, duration: DUR.reveal, ease: EASE.reveal }, 0);
      }

      // headline
      const headline = section.querySelector("[data-hero='headline']");
      if (headline) {
        gsap.set(headline, { opacity: 0, y: 18 });
        tl.to(headline, { opacity: 1, y: 0, duration: DUR.hero, ease: EASE.reveal }, 0.08);
      }

      // description
      const desc = section.querySelector("[data-hero='description']");
      if (desc) {
        gsap.set(desc, { opacity: 0, y: 14 });
        tl.to(desc, { opacity: 1, y: 0, duration: DUR.reveal, ease: EASE.reveal }, 0.18);
      }

      // lime line
      const line = section.querySelector("[data-hero='line']");
      if (line) {
        gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
        tl.to(line, { scaleX: 1, duration: 0.5, ease: EASE.reveal }, 0.28);
      }

      // CTAs
      const ctas = section.querySelector("[data-hero='ctas']");
      if (ctas) {
        gsap.set(ctas, { opacity: 0, y: 10 });
        tl.to(ctas, { opacity: 1, y: 0, duration: DUR.reveal, ease: EASE.reveal }, 0.34);
      }

      // search mock — enters from right with subtle rotate + scale
      const searchMock = section.querySelector("[data-hero='search-mock']");
      if (searchMock) {
        gsap.set(searchMock, { opacity: 0, x: 40, rotate: 1.5, scale: 0.96 });
        tl.to(
          searchMock,
          { opacity: 1, x: 0, rotate: 0, scale: 1, duration: DUR.hero, ease: EASE.reveal },
          0.2,
        );
      }

      // tags cascade
      const tags = section.querySelectorAll("[data-hero='tag']");
      if (tags.length) {
        gsap.set(tags, { opacity: 0, y: 8 });
        tl.to(tags, { opacity: 1, y: 0, duration: 0.35, ease: EASE.micro, stagger: 0.06 }, 0.45);
      }

      // steps bar
      const steps = section.querySelectorAll("[data-hero='step']");
      if (steps.length) {
        gsap.set(steps, { opacity: 0, y: 6 });
        tl.to(steps, { opacity: 1, y: 0, duration: 0.3, ease: EASE.micro, stagger: 0.08 }, 0.55);
      }

      // -- scroll parallax --
      const h1 = section.querySelector("[data-hero='headline']");
      if (h1) {
        gsap.to(h1, {
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

      // particles parallax
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
  }, [reduced]);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
}
