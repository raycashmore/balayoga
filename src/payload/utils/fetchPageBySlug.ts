import 'server-only';
import { getPayloadClient } from './getPayloadClient';

type FetchPageBySlugOptions = {
	draft?: boolean;
};

export async function fetchPageBySlug(slug: string, { draft = false }: FetchPageBySlugOptions = {}) {
	const payload = await getPayloadClient();
	const result = await payload.find({
		collection: 'pages' as const,
		draft,
		limit: 1,
		overrideAccess: draft,
		where: {
			and: [
				{
					slug: { equals: slug }
				},
				...(draft
					? []
					: [
							{
								_status: { equals: 'published' }
							}
						])
			]
		},
		depth: 2
	});

	const doc = result.docs?.[0] ?? null;
	return doc;
}
