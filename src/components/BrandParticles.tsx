"use client";

import { useMemo } from "react";

type BrandParticlesProps = {
  density?: "sparse" | "normal" | "dense";
  className?: string;
};

export function BrandParticles({ density = "normal", className = "" }: BrandParticlesProps) {
  const dots = useMemo(() => {
    const count = density === "sparse" ? 40 : density === "dense" ? 100 : 65;
    const result: { x: number; y: number; size: number; opacity: number; hue: "lime" | "purple" }[] = [];
    for (let i = 0; i < count; i++) {
      const seed = i * 7919;
      const x = (seed * 13) % 100;
      const y = (seed * 17) % 100;
      const size = 1.5 + ((seed * 3) % 30) / 10;
      const opacity = 0.08 + ((seed * 11) % 20) / 100;
      const hue = i % 8 === 0 ? "purple" : "lime";
      result.push({ x, y, size, opacity, hue });
    }
    return result;
  }, [density]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <svg
        width="100%"
        height="100%"
        className="absolute inset-0 dot-wave-animate"
        style={{ opacity: 0.6 }}
      >
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={`${dot.x}%`}
            cy={`${dot.y}%`}
            r={dot.size}
            fill={dot.hue === "purple" ? "#6f61ff" : "#d8ff66"}
            opacity={dot.opacity}
          />
        ))}
      </svg>
    </div>
  );
}
