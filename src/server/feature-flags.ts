import 'server-only';

import { env } from '@/env';
import { init, type LDClient, type LDContext } from '@launchdarkly/node-server-sdk';
import { unstable_noStore as noStore } from 'next/cache';

export const FEATURE_FLAGS = {
	KIDS_YOGA_BLOCK: 'kids-yoga'
} as const;

const DEFAULT_CONTEXT: LDContext = {
	kind: 'user',
	key: 'balayoga-site',
	anonymous: true
};

const INITIALIZATION_TIMEOUT_SECONDS = 5;

declare global {
	var launchDarklyClient: LDClient | undefined;
}

function getLaunchDarklyClient(): LDClient | null {
	if (!env.LAUNCHDARKLY_SDK_KEY) {
		return null;
	}

	globalThis.launchDarklyClient ??= init(env.LAUNCHDARKLY_SDK_KEY);

	return globalThis.launchDarklyClient;
}

export async function getBooleanFeatureFlag(
	flagKey: string,
	fallbackValue: boolean,
	context: LDContext = DEFAULT_CONTEXT
): Promise<boolean> {
	noStore();

	const client = getLaunchDarklyClient();

	if (!client) {
		console.warn(`[feature-flags] Missing LaunchDarkly SDK key, using fallback for "${flagKey}"`, {
			fallbackValue
		});
		return fallbackValue;
	}

	try {
		await client.waitForInitialization({ timeout: INITIALIZATION_TIMEOUT_SECONDS });
		const value = await client.boolVariation(flagKey, context, fallbackValue);

		console.info(`[feature-flags] Evaluated "${flagKey}"`, {
			contextKey: context.key,
			value,
			fallbackValue
		});

		return value;
	} catch (error) {
		console.error(`LaunchDarkly flag evaluation failed for "${flagKey}"`, error);
		return fallbackValue;
	}
}
