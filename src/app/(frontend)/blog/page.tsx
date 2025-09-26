import { BlogPage } from '@/app/_components/blog-page';
import type { Post } from '@/payload-types';
import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import type { Metadata } from 'next/types';
import { getPayload } from 'payload';
import React, { cache } from 'react';

// export const dynamic = 'force-static';
// export const revalidate = 600;

export function generateMetadata(): Metadata {
	return {
		title: `Bala Yoga: Blog`
	};
}

export default async function Page() {
	const payload = await getPayload({ config: configPromise });

	const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
		const { isEnabled: draft } = await draftMode();

		const payload = await getPayload({ config: configPromise });

		const result = await payload.find({
			collection: 'posts',
			draft,
			limit: 1,
			overrideAccess: draft,
			pagination: false,
			where: {
				slug: {
					equals: slug
				}
			}
		});

		return result.docs?.[0] || null;
	});

	const posts = await payload.find({
		collection: 'posts',
		depth: 1,
		limit: 12,
		overrideAccess: false,
		select: {
			title: true,
			slug: true,
			meta: true
		},
		sort: 'createdAt'
	});

	const latestPost = posts?.docs.at(0) as Post;
	let latestPostBody = null;
	if (latestPost?.slug) {
		latestPostBody = await queryPostBySlug({ slug: latestPost.slug });
	}

	return (
		<div className="relative min-h-screen bg-[#EEEBF7]">
			<div className="relative mx-auto hidden max-w-screen-2xl lg:block">
				<div className="absolute top-36 left-12 hidden w-72 lg:block">
					<div className="mb-8 text-6xl text-black">
						<p className="leading-[normal] whitespace-pre">Blog</p>
					</div>
					<div className="space-y-6">
						{posts?.docs?.map((result, index) => {
							if (typeof result === 'object' && result !== null) {
								const doc = result as Pick<Post, 'slug' | 'meta' | 'title'>;
								return (
									<div
										key={index}
										className="hover:text-bala-purple w-64 cursor-pointer text-base font-bold text-black transition-colors"
									>
										<Link href={`blog/${doc.slug}`} className="mb-0">
											{doc.title}
										</Link>
									</div>
								);
							}
							return null;
						})}
					</div>
				</div>

				{latestPostBody && <BlogPage post={latestPostBody} />}

				<div className="absolute bottom-24 left-12">
					<div className="bg-bala-purple relative h-20 w-72 rounded-lg">
						<div className="absolute top-[20px] left-[78px] font-['Inter:Regular',_sans-serif] text-[12px] leading-[0] font-normal text-nowrap text-white">
							<p className="leading-[normal] whitespace-pre">Explore our program</p>
						</div>
						<div className="absolute top-[41px] left-[78px] font-['Inter:Bold',_sans-serif] text-[18px] leading-[0] font-bold text-nowrap text-white">
							<p className="leading-[normal] whitespace-pre">{`Anxious & Assured`}</p>
						</div>
						<div className="absolute top-[20px] left-[17px] size-[44px]">
							<svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
								<circle cx="22" cy="22" fill="var(--fill-0, black)" fillOpacity="0.3" id="Ellipse 10" r="22" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
