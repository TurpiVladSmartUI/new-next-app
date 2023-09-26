declare global {
  interface Window {
    gtag?: (action: string, name: string, options?: Record<string, unknown>) => void;
  }
}

export const gaEvent = (event: string, options = {}): void => {
  if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
    window.gtag("event", event, options);
  }
};