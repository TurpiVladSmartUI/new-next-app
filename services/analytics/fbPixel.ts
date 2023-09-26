declare global {
	interface Window {
		fbq?: (event: string, name: string, options?: Record<string, unknown>) => void;
	}
}

export const fbEvent = (event: string, options = {}) => {
	if (typeof window !== "undefined" && typeof window.fbq !== "undefined") {
		window.fbq('track', event, options);
	}
};