'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export function Nav() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = useCallback(() => {
		console.log('handleScroll');
		setScrolled(window.scrollY > 50);
	}, []);

	useEffect(() => {
		window?.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window?.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll, pathname]);

	const isHome = pathname === '/';
	const transparentBg = !scrolled && isHome;
	const staticHeight = !scrolled && pathname === '/blog';

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
					<ul className="flex items-center gap-8 text-base font-normal text-white">
						<li>
							<Link href="/" className="whitespace-nowrap transition-opacity hover:opacity-80">
								Home
							</Link>
						</li>
						<li>
							<Link href="/yoga" className="whitespace-nowrap transition-opacity hover:opacity-80">
								Yoga
							</Link>
						</li>
						<li>
							<Link href="/program" className="whitespace-nowrap transition-opacity hover:opacity-80">
								{`Anxious & Assured`}
							</Link>
						</li>
						<li>
							<Link href="/blog" className="whitespace-nowrap transition-opacity hover:opacity-80">
								Blog
							</Link>
						</li>
						<li>
							<Link href="/resources" className="whitespace-nowrap transition-opacity hover:opacity-80">
								Resources
							</Link>
						</li>
						<li>
							<Link href="/contact" className="whitespace-nowrap transition-opacity hover:opacity-80">
								Contact
							</Link>
						</li>
					</ul>
				</nav>

				<div className="justify-self-end">
					<Link
						href="/admin"
						className="bg-bala-blue hover:bg-bala-blue/90 inline-flex items-center rounded-md px-4 py-2 text-base font-semibold text-white transition-colors focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
					>
						Sign in
					</Link>
				</div>
			</div>
		</header>
	);
}
