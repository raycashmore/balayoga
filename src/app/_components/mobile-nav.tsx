'use client';

import { HamburgerIcon } from '@/app/_components/hamburger-icon';
import LogoSimple from '@/app/_components/logo-simple';
import { MobileNavBlogItem, type MobileNavPost } from '@/app/_components/mobile-nav-blog-item';
import { isNavItemActive, mobileNavLinkClassName, NAV_ITEMS } from '@/app/_components/navigation';
import { Socials } from '@/app/_components/socials';
import { logoFont } from '@/styles/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type CSSProperties, type MouseEvent, useEffect, useRef, useState } from 'react';

// The panel is revealed by a circle growing from the menu button's centre (panel-relative).
const BUTTON_CENTRE = '33px 33px';

export function MobileNav({ posts }: { posts: MobileNavPost[] }) {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const buttonRef = useRef<HTMLButtonElement>(null);
	const panelRef = useRef<HTMLDivElement>(null);

	const close = () => {
		// The panel goes inert when closed, so hand focus back to the button rather than lose it
		if (panelRef.current?.contains(document.activeElement)) buttonRef.current?.focus();
		setIsOpen(false);
	};

	// While open: focus the first link, lock page scroll, and close on Escape.
	useEffect(() => {
		if (!isOpen) return;

		panelRef.current?.querySelector('a')?.focus({ preventScroll: true });

		const root = document.documentElement;
		const previousOverflow = root.style.overflow;
		root.style.overflow = 'hidden';

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key !== 'Escape') return;
			buttonRef.current?.focus();
			setIsOpen(false);
		};
		window.addEventListener('keydown', onKeyDown);

		return () => {
			root.style.overflow = previousOverflow;
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen]);

	// Any link inside the panel navigates, so close on click rather than watching the pathname.
	const closeOnLinkClick = (event: MouseEvent<HTMLElement>) => {
		if ((event.target as HTMLElement).closest('a')) close();
	};

	const panelStyle = {
		clipPath: isOpen ? `circle(150% at ${BUTTON_CENTRE})` : `circle(24px at ${BUTTON_CENTRE})`
	} satisfies CSSProperties;

	return (
		<div className="lg:hidden">
			<button
				ref={buttonRef}
				type="button"
				onClick={() => (isOpen ? close() : setIsOpen(true))}
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
				onClick={close}
				className={`fixed inset-0 z-30 bg-black/20 transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
			/>

			<div
				ref={panelRef}
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
							{NAV_ITEMS.map(({ href, label }, index) => (
								<li
									key={href}
									style={{ transitionDelay: isOpen ? `${120 + index * 40}ms` : '0ms' }}
									className={`transition-[opacity,transform] duration-300 ease-out motion-reduce:translate-y-0 motion-reduce:transition-opacity ${
										isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
									}`}
								>
									{href === '/blog' ? (
										<MobileNavBlogItem label={label} posts={posts} />
									) : (
										<Link href={href} className={mobileNavLinkClassName(isNavItemActive(pathname, href))}>
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
