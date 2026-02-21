import { withPayload } from '@payloadcms/next/withPayload';
import { withSentryConfig } from '@sentry/nextjs';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.js');

/** @type {import("next").NextConfig} */
// eslint-disable-next-line no-unused-vars
const config = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'bala-yoga.b-cdn.net'
			}
		]
	},
	async redirects() {
		return [
			{
				source: '/register-interest',
				destination: '/yoga',
				permanent: true
			},
			{
				source: '/about',
				destination: '/#about',
				permanent: true
			},
			{
				source: '/adults-yoga',
				destination: '/yoga',
				permanent: true
			},
			{
				source: '/kids-yoga',
				destination: '/yoga',
				permanent: true
			}
		];
	}
};

const payloadConfig = withPayload(config);

export default withSentryConfig(payloadConfig, {
	authToken: process.env.SENTRY_AUTH_TOKEN,
	org: process.env.SENTRY_ORG,
	project: process.env.SENTRY_PROJECT,
	silent: true,
	widenClientFileUpload: true,
	sourcemaps: {
		disable: false,
		deleteSourcemapsAfterUpload: true
	}
});
