import 'server-only';
import { draftMode } from 'next/headers';
import { getPayloadClient } from './getPayloadClient';

export async function fetchPageBySlug(slug: string) {
	const { isEnabled: draft } = await draftMode();
	const payload = await getPayloadClient();
	const result = await payload.find({
		collection: 'pages' as const,
		draft,
		limit: 1,
		overrideAccess: draft,
		where: {
			slug: { equals: slug }
		},
		depth: 2
	});

	const doc = result.docs?.[0] ?? null;
	return doc;
}
