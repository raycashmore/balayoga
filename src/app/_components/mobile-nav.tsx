'use client';

import { HamburgerIcon } from '@/app/_components/hamburger-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export type MobileNavPost = {
	title: string;
	slug?: string | null;
};

export function MobileNav({ posts }: { posts: MobileNavPost[] }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isBlogOpen, setIsBlogOpen] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	const getLinkClassName = (path: string) => {
		const isActive = path === '/' ? pathname === path : pathname.startsWith(path);
		return `text-white ${isActive ? 'font-bold' : 'font-normal'}`;
	};

	return (
		<div className="lg:hidden">
			<button
				onClick={() => setIsOpen(true)}
				className="fixed top-3 left-8 z-20 cursor-pointer rounded-md bg-black/50 p-1 text-white"
				aria-label="Open menu"
			>
				<HamburgerIcon />
			</button>

			<div
				className={`fixed top-0 left-0 z-30 h-full w-full bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
				onClick={() => setIsOpen(false)}
			></div>

			<div
				className={`bg-bala-purple-dark fixed top-0 left-0 z-40 h-full w-80 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<div className="flex h-full flex-col p-6">
					<div className="flex items-center justify-between">
						<Link href="/" className="text-xl leading-none font-medium whitespace-nowrap text-white">
							BALA YOGA
						</Link>
						<button onClick={() => setIsOpen(false)} className="text-white" aria-label="Close menu">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</button>
					</div>

					<nav className="mt-8 flex-grow">
						<ul className="flex flex-col gap-4">
							<li>
								<Link href="/" className={getLinkClassName('/')}>
									Home
								</Link>
							</li>
							<li>
								<Link href="/yoga" className={getLinkClassName('/yoga')}>
									Yoga
								</Link>
							</li>
							<li>
								<div className="flex items-center justify-between">
									<Link href="/blog" className={getLinkClassName('/blog')}>
										Blog
									</Link>
									<button onClick={() => setIsBlogOpen(!isBlogOpen)} className="text-white">
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
											className={`transition-transform ${isBlogOpen ? 'rotate-180' : ''}`}
										>
											<polyline points="6 9 12 15 18 9" />
										</svg>
									</button>
								</div>
								{isBlogOpen && (
									<ul className="mt-2 flex flex-col gap-2 pl-4">
										{posts.map((post) => (
											<li key={post.slug}>
												<Link href={`/blog/${post.slug}`} className={getLinkClassName(`/blog/${post.slug}`)}>
													{post.title}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
							<li>
								<Link href="/contact" className={getLinkClassName('/contact')}>
									Contact
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}
