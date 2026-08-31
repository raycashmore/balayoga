'use client';

import { logoFont } from '@/styles/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
	{ href: '/', label: 'Home' },
	{ href: '/yoga', label: 'Yoga' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/contact', label: 'Contact' }
] as const;

const BOOKING_URL = 'https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes';

export function DesktopNav() {
	const pathname = usePathname();
	const isActive = (path: string) => (path === '/' ? pathname === path : pathname.startsWith(path));

	return (
		<header className="fixed top-3 left-1/2 z-[100] hidden w-[min(984px,calc(100%-48px))] -translate-x-1/2 lg:block">
			<div className="flex h-[58px] items-center gap-3 rounded-[34px] bg-[#fffdf0]/72 py-1 pr-2 pl-6 shadow-[0_7px_20px_#392c662b] backdrop-blur-[14px]">
				<Link
					href="/"
					className={`${logoFont.className} flex w-[178px] shrink-0 items-center gap-2 text-[19px] leading-none font-medium tracking-[0.08em] whitespace-nowrap text-[#3e3551] focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b4ec1]`}
				>
					<span>BALA YOGA</span>
				</Link>

				<nav className="flex flex-1 justify-center" aria-label="Primary navigation">
					<ul className="flex items-center gap-1">
						{NAV_ITEMS.map(({ href, label }) => (
							<li key={href}>
								<Link
									href={href}
									aria-current={isActive(href) ? 'page' : undefined}
									className={[
										'inline-flex h-[38px] items-center rounded-full px-4 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b4ec1]',
										isActive(href)
											? 'border border-white/45 bg-[#6b4ec1]/72 text-white'
											: 'text-[#3e3551] hover:bg-white/60'
									].join(' ')}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<a
					href={BOOKING_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex h-[46px] w-[146px] shrink-0 items-center justify-center rounded-full border border-white/45 bg-[#6b4ec1]/72 px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#6b4ec1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b4ec1]"
				>
					Book a class
				</a>
			</div>
		</header>
	);
}
