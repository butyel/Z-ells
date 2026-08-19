export type TrackEvent =
  | "whatsapp_click"
  | "phone_click"
  | "diagnostico_click"
  | "diagnostico_submit"
  | "service_view"
  | "case_view"
  | "article_view"
  | "scroll_50"
  | "scroll_90";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: TrackEvent, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    window.dispatchEvent(
      new CustomEvent("zells:track", {
        detail: { event, payload },
      }),
    );
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event, ...payload });
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", event, payload);
    }
  } catch {
    /* tracking must never break the site */
  }
}