import { Authors } from '@/app/_components/authors';
import type { Post } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { formatAuthors } from '@/payload/utils/formatAuthors';
import { formatDateTime } from '@/payload/utils/formatDateTime';
import { headerFont } from '@/styles/fonts';
import React from 'react';

export function BlogPage({ post }: { post: Post }) {
	const { populatedAuthors, publishedAt, title, content } = post;

	const publishedDate = publishedAt ? formatDateTime(publishedAt) : null;
	const authors = formatAuthors(populatedAuthors);
	const hasAuthors = authors && authors !== '';

	return (
		<div className="relative overflow-hidden rounded-2xl bg-[rgba(251,249,245,0.9)] px-6 md:px-8 lg:px-20">
			<img
				src="/blog-banner-3.jpg"
				alt="Blog Banner"
				className="absolute top-0 left-0 z-0 h-[280px] w-full object-cover opacity-50"
			/>
			<div className="relative flex min-h-[280px] flex-col justify-center gap-6 py-8">
				<h3 className={`${headerFont.className} mb-0 text-4xl text-black`}>{title}</h3>
				{hasAuthors && <Authors publishedAt={publishedDate} authors={authors} thumbnail={populatedAuthors?.at(0)?.thumbnail} />}
			</div>

			<div className="pt-8 text-[1rem] leading-relaxed font-normal text-neutral-900">
				<RichText className="mx-auto" data={content} enableGutter={false} />
			</div>
		</div>
	);
}
