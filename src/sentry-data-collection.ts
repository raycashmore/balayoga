import type * as Sentry from '@sentry/nextjs';

type DataCollection = NonNullable<NonNullable<Parameters<typeof Sentry.init>[0]>['dataCollection']>;

// Sentry 11 collects request data by default; keep the previous `sendDefaultPii: false` posture.
export const sentryDataCollection = {
	userInfo: false,
	cookies: false,
	httpHeaders: false,
	httpBodies: [],
	urlQueryParams: false,
	databaseQueryData: false,
	stackFrameVariables: false
} satisfies DataCollection;
