import type { Post } from '@/payload-types';
import Link from 'next/link';
import type { PaginatedDocs } from 'payload';
import React from 'react';

export default function PostsList({ posts }: { posts: PaginatedDocs }) {
	return (
		<div className="flex flex-col gap-4">
			{posts?.docs?.map((result, index) => {
				if (typeof result === 'object' && result !== null) {
					const doc = result as Pick<Post, 'slug' | 'meta' | 'title'>;
					return (
						<div key={index} className="hover:text-bala-purple cursor-pointer text-base text-black transition-colors">
							<Link href={`blog/${doc.slug}`} className="mb-0 text-sm">
								{doc.title}
							</Link>
						</div>
					);
				}
				return null;
			})}
		</div>
	);
}
