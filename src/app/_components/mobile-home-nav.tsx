'use client';

import { BlogIcon } from '@/app/_components/icons/blog-icon';
import { ContactIcon } from '@/app/_components/icons/contact-icon';
import { YogaIcon } from '@/app/_components/icons/yoga-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentType } from 'react';

type NavigationItem = {
	href: '/yoga' | '/blog' | '/contact';
	label: string;
	Icon: ComponentType;
};

const NAV_ITEMS: NavigationItem[] = [
	{ href: '/yoga', label: 'Yoga', Icon: YogaIcon },
	{ href: '/blog', label: 'Blog', Icon: BlogIcon },
	{ href: '/contact', label: 'Contact', Icon: ContactIcon }
];

export function MobileHomeNav() {
	const pathname = usePathname();

	return (
		<nav className="relative z-20 -mt-8 w-full px-7 lg:hidden" aria-label="Quick navigation">
			<ul className="flex h-[62px] items-stretch gap-1 rounded-full bg-[#fffdf0]/50 p-1.5 shadow-[0_7px_20px_#392c662b] backdrop-blur-[14px]">
				{NAV_ITEMS.map(({ href, label, Icon }) => {
					const isActive = pathname.startsWith(href);

					return (
						<li key={href} className="min-w-0 flex-1">
							<Link
								href={href}
								aria-current={isActive ? 'page' : undefined}
								className={[
									'flex h-full w-full flex-col items-center justify-center gap-0.5 rounded-full border text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b4ec1]',
									isActive
										? 'border-white/45 bg-[#6b4ec1]/72 text-white'
										: 'border-transparent text-[#3e3551] hover:bg-white/60'
								].join(' ')}
							>
								<span className="h-[22px] w-[22px] [&_svg]:h-full [&_svg]:w-full">
									<Icon />
								</span>
								{label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
