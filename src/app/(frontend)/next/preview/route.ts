import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import type { CollectionSlug } from 'payload';
import { getPayload } from 'payload';

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
	posts: '/blog',
	pages: ''
};

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const slug = searchParams.get('slug');
	const collection = searchParams.get('collection') as CollectionSlug;
	const previewSecret = searchParams.get('previewSecret');

	// Validate the preview secret
	if (previewSecret !== process.env.PREVIEW_SECRET) {
		return new Response('Invalid token', { status: 401 });
	}

	// Validate required parameters
	if (!slug || !collection) {
		return new Response('Missing slug or collection', { status: 400 });
	}

	const payload = await getPayload({ config: configPromise });

	// Fetch the document to verify it exists
	const docs = await payload.find({
		collection,
		where: {
			slug: {
				equals: slug
			}
		},
		limit: 1,
		draft: true
	});

	if (!docs.docs.length) {
		return new Response('Document not found', { status: 404 });
	}

	// Enable draft mode
	const draft = await draftMode();
	draft.enable();

	// Redirect to the path
	const path = `${collectionPrefixMap[collection]}/${slug}`;
	redirect(path);
}
