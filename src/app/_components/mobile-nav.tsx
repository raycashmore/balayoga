'use client';

import { HamburgerIcon } from '@/app/_components/hamburger-icon';
import LogoSimple from '@/app/_components/logo-simple';
import Socials from '@/app/_components/socials';
import { logoFont } from '@/styles/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type CSSProperties, type MouseEvent, useEffect, useState } from 'react';

export type MobileNavPost = {
	title: string;
	slug?: string | null;
};

// The panel is revealed by a circle growing from the menu button's centre (panel-relative).
const BUTTON_CENTRE = '33px 33px';

export function MobileNav({ posts }: { posts: MobileNavPost[] }) {
	const [isOpen, setIsOpen] = useState(false);
	const [isBlogOpen, setIsBlogOpen] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		if (!isOpen) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setIsOpen(false);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [isOpen]);

	const isActive = (path: string) => (path === '/' ? pathname === path : pathname.startsWith(path));
	const linkClassName = (path: string) => `text-white transition-opacity ${isActive(path) ? 'font-bold' : 'font-normal opacity-85'}`;

	// Any link inside the panel navigates, so close on click rather than watching the pathname.
	const closeOnLinkClick = (event: MouseEvent<HTMLElement>) => {
		if ((event.target as HTMLElement).closest('a')) setIsOpen(false);
	};

	const panelStyle = {
		clipPath: isOpen ? `circle(150% at ${BUTTON_CENTRE})` : `circle(24px at ${BUTTON_CENTRE})`
	} satisfies CSSProperties;

	return (
		<div className="lg:hidden">
			<button
				type="button"
				onClick={() => setIsOpen((open) => !open)}
				aria-expanded={isOpen}
				aria-controls="mobile-nav-panel"
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
				className={`fixed top-8 left-8 z-50 grid h-[50px] w-[50px] cursor-pointer place-items-center rounded-full border text-white transition-colors duration-200 ${
					isOpen ? 'border-white/20 bg-white/10' : 'border-bala-purple-dark bg-black'
				}`}
			>
				<HamburgerIcon
					className={`col-start-1 row-start-1 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-opacity ${
						isOpen ? 'scale-75 -rotate-45 opacity-0' : 'opacity-100'
					}`}
				/>
				<svg
					viewBox="0 0 24 24"
					width="22"
					height="22"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					aria-hidden="true"
					className={`col-start-1 row-start-1 transition-[opacity,transform] duration-200 ease-out motion-reduce:transition-opacity ${
						isOpen ? 'opacity-100' : 'scale-75 rotate-45 opacity-0'
					}`}
				>
					<path d="M6 6l12 12M18 6L6 18" />
				</svg>
			</button>

			<div
				aria-hidden="true"
				onClick={() => setIsOpen(false)}
				className={`fixed inset-0 z-30 bg-black/20 transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
			/>

			<div
				id="mobile-nav-panel"
				inert={!isOpen}
				style={panelStyle}
				className={`bg-bala-purple-dark fixed top-6 left-6 z-40 h-[85dvh] w-[min(400px,calc(100vw-48px))] overflow-hidden rounded-[28px] text-white shadow-2xl motion-reduce:[transition:opacity_200ms_var(--ease-out)] ${
					isOpen
						? 'opacity-100 [transition:clip-path_450ms_var(--ease-out),opacity_150ms_var(--ease-out)]'
						: 'opacity-0 [transition:clip-path_300ms_var(--ease-out),opacity_300ms_var(--ease-out)]'
				}`}
			>
				<nav className="flex h-full flex-col p-6" aria-label="Mobile navigation" onClick={closeOnLinkClick}>
					<div className={`${logoFont.className} flex items-center justify-end gap-2 text-2xl`}>
						<LogoSimple width={28} height={28} />
						<span>BALA YOGA</span>
					</div>

					<div className="flex flex-1 flex-col justify-between pt-14">
						<ul className="flex flex-col gap-4 text-xl">
							{(
								[
									['/', 'Home'],
									['/yoga', 'Yoga'],
									['/blog', 'Blog'],
									['/contact', 'Contact']
								] as const
							).map(([href, label], index) => (
								<li
									key={href}
									style={{ transitionDelay: isOpen ? `${120 + index * 40}ms` : '0ms' }}
									className={`transition-[opacity,transform] duration-300 ease-out motion-reduce:translate-y-0 motion-reduce:transition-opacity ${
										isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
									}`}
								>
									{href === '/blog' ? (
										<>
											<div className="flex items-center gap-3">
												<Link href={href} className={linkClassName(href)}>
													{label}
												</Link>
												<button
													type="button"
													onClick={() => setIsBlogOpen((open) => !open)}
													aria-expanded={isBlogOpen}
													aria-label={isBlogOpen ? 'Hide blog posts' : 'Show blog posts'}
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
														className={`transition-transform duration-200 ease-out ${isBlogOpen ? 'rotate-180' : ''}`}
													>
														<polyline points="6 9 12 15 18 9" />
													</svg>
												</button>
											</div>
											{isBlogOpen && (
												<ul className="mt-3 flex flex-col gap-2.5 border-l border-white/15 pl-4 text-sm">
													{posts.map((post) => (
														<li key={post.slug}>
															<Link
																href={`/blog/${post.slug}`}
																className={linkClassName(`/blog/${post.slug}`)}
															>
																{post.title}
															</Link>
														</li>
													))}
												</ul>
											)}
										</>
									) : (
										<Link href={href} className={linkClassName(href)}>
											{label}
										</Link>
									)}
								</li>
							))}
						</ul>
						<Socials />
					</div>
				</nav>
			</div>
		</div>
	);
}
