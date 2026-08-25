"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import { registerGSAP } from "@/lib/gsap";

const MotionCtx = createContext({ reduced: false, ready: false });

export function useMotion() {
  return useContext(MotionCtx);
}

// --- reduced-motion store ---
function subscribeReduced(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// --- ready store ---
let _ready = false;
const _readyListeners = new Set<() => void>();

function markReady() {
  if (_ready) return;
  _ready = true;
  _readyListeners.forEach((l) => l());
}

function subscribeReady(cb: () => void) {
  _readyListeners.add(cb);
  if (_ready) cb();
  return () => _readyListeners.delete(cb);
}

function getReadySnapshot() {
  return _ready;
}

// --- provider ---
export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useSyncExternalStore(subscribeReduced, getReducedSnapshot, () => false);
  const ready = useSyncExternalStore(subscribeReady, getReadySnapshot, () => false);

  useEffect(() => {
    if (!reduced) registerGSAP();
    markReady();
  }, [reduced]);

  return (
    <MotionCtx value={{ reduced, ready }}>
      {children}
    </MotionCtx>
  );
}
