'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export function Nav() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = useCallback(() => {
		setScrolled(window.scrollY > 50);
	}, []);

	useEffect(() => {
		window?.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window?.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	const isHome = pathname === '/';
	const transparentBg = !scrolled && isHome;
	const staticHeight = !scrolled && pathname === '/blog';

	const enableSignIn = false;

	const getLinkClassName = (path: string) => {
		const isActive = path === '/' ? pathname === path : pathname.startsWith(path);
		return [
			'hover:bg-bala-purple-dark px-4 py-1 font-medium whitespace-nowrap transition-all duration-300 hover:rounded-full',
			isActive ? 'bg-bala-purple-dark rounded-full' : ''
		].join(' ');
	};

	return (
		<header
			className={[
				'fixed top-0 left-0 z-10 hidden w-full lg:block',
				'transition-[height,background-color,opacity,transform] duration-500 ease-out',
				scrolled ? 'h-14 backdrop-blur-xs' : staticHeight ? 'h-14 backdrop-blur-xs' : 'h-20',
				transparentBg ? 'bg-bala-purple/0' : 'bg-bala-purple/85'
			].join(' ')}
		>
			<div className="mx-auto grid h-full max-w-[1280px] grid-cols-3 items-center px-6">
				<div className="justify-self-start">
					{(scrolled || !isHome || staticHeight) && (
						<Link href="/" className="text-xl leading-none font-medium whitespace-nowrap text-white">
							BALA YOGA
						</Link>
					)}
				</div>

				<nav className="justify-self-center">
					<ul className="flex items-center gap-2 text-base font-normal text-white">
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
							<Link href="/blog" className={getLinkClassName('/blog')}>
								Blog
							</Link>
						</li>
						<li>
							<Link href="/contact" className={getLinkClassName('/contact')}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				<div className="justify-self-end">
					{enableSignIn && (
						<Link
							href="/admin"
							className="bg-bala-blue hover:bg-bala-blue/90 inline-flex items-center rounded-md px-4 py-2 text-base font-semibold text-white transition-colors focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
						>
							Sign in
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
