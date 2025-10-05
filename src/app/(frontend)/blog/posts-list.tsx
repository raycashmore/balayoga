'use client';

import type { Post } from '@/payload-types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { PaginatedDocs } from 'payload';
import React from 'react';

export default function PostsList({ posts }: { posts: PaginatedDocs }) {
	const pathname = usePathname();
	return (
		<div className="flex flex-col gap-4">
			{posts?.docs?.map((result, index) => {
				if (typeof result === 'object' && result !== null) {
					const doc = result as Pick<Post, 'slug' | 'meta' | 'title' | 'id'>;
					const href = `/blog/${doc.slug}`;
					const isSelected = pathname === href || (pathname === '/blog' && index === 0);
					return (
						<div
							key={doc.id}
							className={`cursor-pointer border-l-2 py-1 pl-4 text-base transition-colors ${
								isSelected ? 'border-bala-purple text-bala-purple' : 'hover:text-bala-purple border-transparent text-black'
							}`}
						>
							<Link href={href} className="mb-0 text-sm">
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
