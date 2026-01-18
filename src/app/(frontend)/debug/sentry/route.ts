import * as Sentry from '@sentry/nextjs';

const isProd = process.env.VERCEL_ENV === 'production';

export async function GET() {
	if (isProd) {
		return Response.json({ error: 'Not found' }, { status: 404 });
	}

	Sentry.captureMessage('Sentry debug route hit', {
		level: 'info',
		tags: {
			debug: 'true'
		},
		extra: {
			vercelEnv: process.env.VERCEL_ENV,
			nodeEnv: process.env.NODE_ENV,
			release: process.env.SENTRY_RELEASE ?? process.env.VERCEL_GIT_COMMIT_SHA
		}
	});

	try {
		throw new Error('Sentry debug error (non-prod)');
	} catch (error) {
		Sentry.captureException(error);
	}

	await Sentry.flush(2000);

	return Response.json({ ok: true });
}
