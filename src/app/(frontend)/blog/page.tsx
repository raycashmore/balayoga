import Post from '@/app/(frontend)/blog/post';
import configPromise from '@payload-config';
import type { Metadata } from 'next/types';
import { getPayload } from 'payload';
import React from 'react';

export const dynamic = 'force-static';
export const revalidate = 600;

export function generateMetadata(): Metadata {
	return {
		title: 'Blog'
	};
}

export default async function Page() {
	const payload = await getPayload({ config: configPromise });

	const posts = await payload.find({
		collection: 'posts',
		depth: 1,
		limit: 12,
		sort: '-publishedAt',
		draft: false,
		overrideAccess: false,
		select: {
			title: true,
			subtitle: true,
			slug: true,
			heroImage: true,
			meta: true,
			content: true,
			updatedAt: true,
			createdAt: true,
			publishedAt: true,
			authors: true
		},
		where: {
			_status: {
				equals: 'published'
			}
		}
	});

	const latestPostBody = posts.docs?.[0] ?? null;

	return <Post post={latestPostBody} allPosts={posts} />;
}
