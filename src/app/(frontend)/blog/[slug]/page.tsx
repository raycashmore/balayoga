import Post from '@/app/(frontend)/blog/post';
import configPromise from '@payload-config';
import type { Metadata } from 'next/types';
import { getPayload } from 'payload';
import React, { cache } from 'react';

export async function generateStaticParams() {
	const payload = await getPayload({ config: configPromise });
	const posts = await payload.find({
		collection: 'posts',
		draft: false,
		limit: 1000,
		overrideAccess: false,
		pagination: false,
		select: {
			slug: true
		}
	});

	return posts.docs.map(({ slug }) => {
		return { slug };
	});
}

type Args = {
	params: Promise<{
		slug?: string;
	}>;
};

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
	const payload = await getPayload({ config: configPromise });

	const result = await payload.find({
		collection: 'posts',
		depth: 1,
		draft: false,
		limit: 1,
		overrideAccess: false,
		pagination: false,
		where: {
			and: [
				{
					slug: {
						equals: slug
					}
				},
				{
					_status: {
						equals: 'published'
					}
				}
			]
		}
	});

	return result.docs?.[0] || null;
});

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
	const { slug = '' } = await paramsPromise;
	const post = await queryPostBySlug({ slug });

	if (!post) return { title: 'Blog' };

	return {
		title: post.meta?.title || post.title || 'Blog',
		description: post.meta?.description || undefined
	};
}

export default async function Page({ params: paramsPromise }: Args) {
	const { slug = '' } = await paramsPromise;
	const post = await queryPostBySlug({ slug });

	if (!post) return null;

	const payload = await getPayload({ config: configPromise });

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

	return <Post post={post} allPosts={allPosts} />;
}
