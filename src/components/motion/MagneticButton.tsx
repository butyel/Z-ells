"use client";

import { useRef, useCallback, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticButton({ children, className = "", strength = 4 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      const el = ref.current;
      if (!el || !window.matchMedia("(pointer: fine)").matches) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`;
    },
    [strength],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate3d(0,0,0)";
    el.style.transition = "transform 0.3s cubic-bezier(0.33,1,0.68,1)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 300);
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
