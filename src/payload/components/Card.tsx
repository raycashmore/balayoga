'use client';

import type { Post } from '@/payload-types';
import { Media } from '@/payload/components/Media';
import { cn } from '@/payload/utils/ui';
import Link from 'next/link';
import React from 'react';

export type CardPostData = Pick<Post, 'slug' | 'meta' | 'title'>;

export const Card: React.FC<{
	alignItems?: 'center';
	className?: string;
	doc?: CardPostData;
	relationTo?: 'posts';
	title?: string;
}> = (props) => {
	const { className, doc, relationTo, title: titleFromProps } = props;

	const { slug, meta, title } = doc || {};
	const { description, image: metaImage } = meta || {};

	const titleToUse = titleFromProps || title;
	const sanitizedDescription = description?.replace(/\s/g, ' '); // replace non-breaking space with white space
	const href = `/cms/${relationTo}/${slug}`;

	return (
		<article className={cn('border-border bg-card overflow-hidden rounded-lg border hover:cursor-pointer', className)}>
			<div className="relative w-full">
				{!metaImage && <div className="">No image</div>}
				{metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} size="33vw" />}
			</div>
			<div className="p-4">
				{titleToUse && (
					<div className="prose">
						<h3>
							<Link className="not-prose" href={href}>
								{titleToUse}
							</Link>
						</h3>
					</div>
				)}
				{description && <div className="mt-2">{description && <p>{sanitizedDescription}</p>}</div>}
			</div>
		</article>
	);
};
