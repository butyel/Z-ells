"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track, type TrackEvent } from "@/lib/tracking";

const EVENT_LABEL = "data-track";
const LABEL_ATTR = "data-track-label";

function eventFromPath(pathname: string): TrackEvent | null {
  if (pathname.startsWith("/servicos/")) return "service_view";
  if (pathname.startsWith("/cases/")) return "case_view";
  if (pathname.startsWith("/blog/")) return "article_view";
  return null;
}

export function Tracker() {
  const pathname = usePathname();
  const lastPathRef = useRef<string | null>(null);
  const scrollFiredRef = useRef({ 50: false, 90: false });

  useEffect(() => {
    if (lastPathRef.current === pathname) return;
    lastPathRef.current = pathname;
    scrollFiredRef.current = { 50: false, 90: false };

    const event = eventFromPath(pathname);
    if (event) {
      track(event, { path: pathname });
    }
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(
        `[${EVENT_LABEL}]`,
      ) as HTMLElement | null;
      if (!target) return;
      const event = target.getAttribute(EVENT_LABEL) as TrackEvent;
      const label = target.getAttribute(LABEL_ATTR) ?? undefined;
      if (!event) return;
      track(event, { label, path: pathname });
    };

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const depth = window.scrollY / max;
      if (depth >= 0.9 && !scrollFiredRef.current[90]) {
        scrollFiredRef.current[90] = true;
        track("scroll_90", { path: pathname });
      } else if (depth >= 0.5 && !scrollFiredRef.current[50]) {
        scrollFiredRef.current[50] = true;
        track("scroll_50", { path: pathname });
      }
    };

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}