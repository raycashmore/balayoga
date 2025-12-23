import { Authors } from '@/app/_components/authors';
import type { Post } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { formatAuthors } from '@/payload/utils/formatAuthors';
import { formatDateTime } from '@/payload/utils/formatDateTime';
import { headerFont } from '@/styles/fonts';
import Image from 'next/image';
import React from 'react';

export function BlogPage({ post }: { post: Post }) {
	const { populatedAuthors, publishedAt, title, content } = post;

	const publishedDate = publishedAt ? formatDateTime(publishedAt) : null;
	const authors = formatAuthors(populatedAuthors);
	const hasAuthors = authors && authors !== '';

	return (
		<div className="relative overflow-hidden rounded-[32px] bg-[rgba(251,249,245,0.9)] px-6 pb-12 md:px-8 lg:px-20">
			<div className="relative isolate -mx-6 md:-mx-8 lg:-mx-20">
				<div className="pointer-events-none absolute inset-0 z-0">
					<Image
						src="/blog-banner-3.jpg"
						alt="Blog Banner"
						fill
						className="object-cover opacity-50"
						priority={true}
						sizes="(max-width: 1024px) 100vw, 1024px"
					/>
				</div>
				<div className="relative z-10 flex flex-col justify-center gap-6 px-6 py-8 pt-16 md:px-8 md:pt-8 lg:px-20">
					<h1 className={`${headerFont.className} mb-0 text-4xl text-black`}>{title}</h1>
					{hasAuthors && <Authors publishedAt={publishedDate} authors={authors} thumbnail={populatedAuthors?.at(0)?.thumbnail} />}
				</div>
			</div>

			<div className="pt-8 text-[1rem] leading-relaxed font-normal text-neutral-900">
				<RichText className="mx-auto" data={content} enableGutter={false} />
			</div>
		</div>
	);
}
