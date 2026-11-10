'use client';

import {
	BOOKING_URL,
	isNavItemActive,
	NAV_ITEMS,
	NAV_PILL_ACTIVE_CLASS_NAME,
	NAV_PILL_INACTIVE_CLASS_NAME
} from '@/app/_components/navigation';
import { logoFont } from '@/styles/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DesktopNav() {
	const pathname = usePathname();
	const isActive = (href: string) => isNavItemActive(pathname, href);

	return (
		<header className="page-track fixed top-3 left-1/2 z-[100] hidden -translate-x-1/2 lg:block">
			<div className="bg-cream/72 shadow-float flex h-[58px] items-center gap-3 rounded-[34px] py-1 pr-2 pl-6 backdrop-blur-[14px]">
				<Link
					href="/"
					className={`${logoFont.className} text-nav-ink focus-visible:outline-accent flex w-[178px] shrink-0 items-center gap-2 text-[19px] leading-none font-medium tracking-[0.08em] whitespace-nowrap focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-4`}
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
										'focus-visible:outline-accent inline-flex h-[38px] items-center rounded-full border px-4 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
										isActive(href) ? NAV_PILL_ACTIVE_CLASS_NAME : NAV_PILL_INACTIVE_CLASS_NAME
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
					className="bg-accent/72 hover:bg-accent focus-visible:outline-accent inline-flex h-[46px] w-[146px] shrink-0 items-center justify-center rounded-full border border-white/45 px-4 text-[13px] font-semibold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
				>
					Book a class
				</a>
			</div>
		</header>
	);
}
