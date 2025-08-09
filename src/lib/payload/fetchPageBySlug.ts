import 'server-only';
import { getPayloadClient } from './getPayloadClient';

export async function fetchPageBySlug(slug: string) {
	const payload = await getPayloadClient();
	const result = await payload.find({
		collection: 'pages' as const,
		limit: 1,
		where: {
			slug: { equals: slug }
		},
		depth: 2
	});

	const doc = result.docs?.[0] ?? null;
	return doc;
}
