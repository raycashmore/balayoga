'use client';

import { BlogIcon } from '@/app/_components/icons/blog-icon';
import { ContactIcon } from '@/app/_components/icons/contact-icon';
import { YogaIcon } from '@/app/_components/icons/yoga-icon';
import { isNavItemActive, NAV_PILL_ACTIVE_CLASS_NAME, NAV_PILL_INACTIVE_CLASS_NAME, type NavHref } from '@/app/_components/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentType } from 'react';

type NavigationItem = {
	href: NavHref;
	label: string;
	Icon: ComponentType;
};

const QUICK_NAV_ITEMS = [
	{ href: '/yoga', label: 'Yoga', Icon: YogaIcon },
	{ href: '/blog', label: 'Blog', Icon: BlogIcon },
	{ href: '/contact', label: 'Contact', Icon: ContactIcon }
] satisfies NavigationItem[];

export function MobileHomeNav() {
	const pathname = usePathname();

	return (
		<nav className="relative z-20 -mt-8 w-full px-7 lg:hidden" aria-label="Quick navigation">
			<ul className="bg-cream/50 shadow-float flex h-[62px] items-stretch gap-1 rounded-full p-1.5 backdrop-blur-[14px]">
				{QUICK_NAV_ITEMS.map(({ href, label, Icon }) => {
					const isActive = isNavItemActive(pathname, href);

					return (
						<li key={href} className="min-w-0 flex-1">
							<Link
								href={href}
								aria-current={isActive ? 'page' : undefined}
								className={[
									'focus-visible:outline-accent flex h-full w-full flex-col items-center justify-center gap-0.5 rounded-full border text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
									isActive ? NAV_PILL_ACTIVE_CLASS_NAME : NAV_PILL_INACTIVE_CLASS_NAME
								].join(' ')}
							>
								<span className="h-[26px] w-[26px] [&_svg]:h-full [&_svg]:w-full">
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
