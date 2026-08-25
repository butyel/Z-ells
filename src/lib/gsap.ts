import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGSAP() {
  if (registered) return;
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };

export const EASE = {
  reveal: "power3.out",
  micro: "power2.out",
  float: "sine.inOut",
} as const;

export const DUR = {
  micro: 0.2,
  hover: 0.3,
  reveal: 0.625,
  hero: 0.85,
} as const;
