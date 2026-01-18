import * as Sentry from '@sentry/nextjs';

export const onRequestError = Sentry.captureRequestError;

export function register() {
	const environment = process.env.SENTRY_ENVIRONMENT ?? process.env.VERCEL_ENV ?? process.env.NODE_ENV;

	Sentry.init({
		dsn: process.env.SENTRY_DSN,
		environment,
		release: process.env.SENTRY_RELEASE ?? process.env.VERCEL_GIT_COMMIT_SHA,
		sendDefaultPii: false,
		tracesSampleRate: environment === 'production' ? 0.05 : environment === 'preview' ? 0.2 : 1,
		beforeSend(event) {
			if (event.request) {
				event.request.cookies = undefined;
				event.request.data = undefined;
				event.request.headers = undefined;
			}

			return event;
		}
	});
}
