import { getPayload } from 'payload';
import config from '@/payload.config';

export async function getPayloadClient() {
	// getPayload will memoize an instance per config in v3
	const payload = await getPayload({ config });
	return payload;
}
