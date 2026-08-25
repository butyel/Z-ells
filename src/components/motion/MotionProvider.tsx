"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { registerGSAP } from "@/lib/gsap";

const MotionCtx = createContext({ reduced: false, ready: false });

export function useMotion() {
  return useContext(MotionCtx);
}

function subscribe(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot() {
  return false;
}

export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    if (!reduced) registerGSAP();
  }, [reduced]);

  return (
    <MotionCtx value={{ reduced, ready: true }}>
      {children}
    </MotionCtx>
  );
}
