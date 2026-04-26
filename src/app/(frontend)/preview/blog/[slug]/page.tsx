import Post from '@/app/(frontend)/blog/post';
import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import { notFound, redirect } from 'next/navigation';
import { getPayload } from 'payload';

type Args = {
	params: Promise<{
		slug?: string;
	}>;
};

export default async function PreviewBlogPostPage({ params: paramsPromise }: Args) {
	const { isEnabled } = await draftMode();
	if (!isEnabled) {
		redirect('/blog');
	}

	const { slug = '' } = await paramsPromise;
	const payload = await getPayload({ config: configPromise });

	const postResult = await payload.find({
		collection: 'posts',
		depth: 1,
		draft: true,
		limit: 1,
		overrideAccess: true,
		pagination: false,
		where: {
			slug: {
				equals: slug
			}
		}
	});

	const post = postResult.docs?.[0] ?? null;
	if (!post) {
		notFound();
	}

	const allPosts = await payload.find({
		collection: 'posts',
		depth: 1,
		limit: 12,
		sort: '-publishedAt',
		draft: false,
		overrideAccess: false,
		select: {
			title: true,
			slug: true,
			meta: true
		},
		where: {
			_status: {
				equals: 'published'
			}
		}
	});

	return <Post post={post} allPosts={allPosts} isPreview={true} />;
}
