'use client';

import { isNavItemActive, mobileNavLinkClassName } from '@/app/_components/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export type MobileNavPost = {
	title: string;
	slug?: string | null;
};

export function MobileNavBlogItem({ label, posts }: { label: string; posts: MobileNavPost[] }) {
	const [isExpanded, setIsExpanded] = useState(true);
	const pathname = usePathname();

	return (
		<>
			<div className="flex items-center gap-3">
				<Link href="/blog" className={mobileNavLinkClassName(isNavItemActive(pathname, '/blog'))}>
					{label}
				</Link>
				<button
					type="button"
					onClick={() => setIsExpanded((expanded) => !expanded)}
					aria-expanded={isExpanded}
					aria-label={isExpanded ? 'Hide blog posts' : 'Show blog posts'}
					className="-m-1 p-1 text-white/80"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className={`transition-transform duration-200 ease-out ${isExpanded ? 'rotate-180' : ''}`}
					>
						<polyline points="6 9 12 15 18 9" />
					</svg>
				</button>
			</div>
			{isExpanded && (
				<ul className="mt-3 flex flex-col gap-2.5 border-l border-white/15 pl-4 text-sm">
					{posts.map((post) => (
						<li key={post.slug}>
							<Link href={`/blog/${post.slug}`} className={mobileNavLinkClassName(pathname === `/blog/${post.slug}`)}>
								{post.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
