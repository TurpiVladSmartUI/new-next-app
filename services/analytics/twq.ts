declare global {
	interface Window {
		twq?: (event: string, name: string, options?: Record<string, unknown>) => void;
	}
}

export const twqEvent = (event: string, options = {}) => {
	if (typeof window !== 'undefined' && typeof window.twq !== 'undefined') {
		window.twq('event', event, options);
	}
};