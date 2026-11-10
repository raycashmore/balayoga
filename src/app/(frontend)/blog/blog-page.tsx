import { Authors } from '@/app/_components/authors';
import type { Post } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { formatDateTime } from '@/payload/utils/formatDateTime';
import { getMediaUrl } from '@/payload/utils/getMediaUrl';
import { estimateReadingMinutes } from '@/payload/utils/estimateReadingMinutes';
import Image from 'next/image';
import React from 'react';

// Rich text arrives as raw HTML elements, so its reading rhythm is set from the wrapper.
const bodyClassName = [
	'content text-ink text-[17px] leading-[29px] lg:text-lg lg:leading-[31px]',
	'[&_p]:my-0 [&_p+p]:mt-5',
	'[&_h2]:text-ink [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-[26px] [&_h2]:leading-[32px] lg:[&_h2]:text-[30px] lg:[&_h2]:leading-[38px]',
	'[&_h3]:text-ink [&_h3]:mt-10 [&_h3]:mb-3',
	'[&_strong]:font-semibold',
	'[&_blockquote]:text-ink-soft [&_blockquote]:my-8 [&_blockquote]:border-l-[3px] [&_blockquote]:pl-6 [&_blockquote]:opacity-100'
].join(' ');

export function BlogPage({ post }: { post: Post }) {
	const { populatedAuthors, publishedAt, title, subtitle, content, heroImage } = post;

	const readingMinutes = estimateReadingMinutes(content);
	const heroImageUrl = heroImage && typeof heroImage === 'object' ? getMediaUrl(heroImage.url) : '';
	const heroImageAlt = heroImage && typeof heroImage === 'object' ? (heroImage.alt ?? '') : '';
	const author = populatedAuthors?.find(({ name }) => name);

	return (
		<>
			<header className="border-rule flex flex-col gap-4 border-b pb-7 lg:gap-5 lg:pb-9">
				<p className="text-bala-purple m-0 text-xs font-semibold tracking-[0.14em] uppercase">
					{publishedAt && <time dateTime={publishedAt}>{formatDateTime(publishedAt)}</time>}
					{publishedAt && ' · '}
					{readingMinutes} min read
				</p>
				<h1 className="text-ink m-0 text-[36px] leading-[40px] tracking-[-0.01em] lg:text-[52px] lg:leading-[56px]">{title}</h1>
				{subtitle && <p className="text-ink-soft m-0 text-lg leading-[27px] lg:text-xl lg:leading-[30px]">{subtitle}</p>}
				{author && <Authors name={author.name} thumbnail={author.thumbnail} />}
			</header>

			{heroImageUrl && (
				<div className="relative -mt-2 aspect-[16/9] overflow-hidden rounded-2xl">
					<Image
						src={heroImageUrl}
						alt={heroImageAlt}
						fill
						priority
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 680px"
					/>
				</div>
			)}

			<RichText className={bodyClassName} data={content} enableGutter={false} />
		</>
	);
}
