import { Authors } from '@/app/_components/authors';
import type { Post } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { formatAuthors } from '@/payload/utils/formatAuthors';
import { formatDateTime } from '@/payload/utils/formatDateTime';
import { getMediaUrl } from '@/payload/utils/getMediaUrl';
import Image from 'next/image';
import React from 'react';

export function BlogPage({ post }: { post: Post }) {
	const { populatedAuthors, publishedAt, title, subtitle, content, heroImage } = post;

	const publishedDate = publishedAt ? formatDateTime(publishedAt) : null;
	const authors = formatAuthors(populatedAuthors);
	const hasAuthors = authors && authors !== '';
	const heroImageUrl = (
		heroImage && typeof heroImage === 'object' && 'url' in heroImage
			? getMediaUrl(heroImage.url)
			: ''
	) || '/blog-banner-3.jpg';

	return (
		<div className="relative overflow-hidden rounded-[32px] bg-[rgba(251,249,245,0.9)] px-6 pb-12 md:px-8 lg:px-20">
			<div className="relative isolate -mx-6 md:-mx-8 lg:-mx-20">
				<div className="pointer-events-none absolute inset-0 z-0">
					<Image
						src={heroImageUrl}
						alt=""
						fill
						className="object-cover opacity-50"
						priority={true}
						sizes="(max-width: 1024px) 100vw, 1024px"
					/>
				</div>
				<div className="relative z-10 flex flex-col justify-center gap-6 px-6 py-8 pt-16 text-black md:px-8 md:pt-8 lg:px-20">
					<h1 className="mb-0 text-4xl">{title}</h1>
					{subtitle && <h2 className="mt-[-8px] text-2xl">{subtitle}</h2>}
					{hasAuthors && <Authors publishedAt={publishedDate} authors={authors} thumbnail={populatedAuthors?.at(0)?.thumbnail} />}
				</div>
			</div>

			<div className="pt-8 text-[1rem] leading-relaxed font-normal text-neutral-900">
				<RichText className="mx-auto" data={content} enableGutter={false} />
			</div>
		</div>
	);
}
