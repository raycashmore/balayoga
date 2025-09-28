'use client';

import { BlogIcon } from '@/app/_components/icons/blog-icon';
import { ContactIcon } from '@/app/_components/icons/contact-icon';
import { YogaIcon } from '@/app/_components/icons/yoga-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileHomeNav() {
	const pathname = usePathname();

	const getLinkClassName = (path: string) => {
		const isActive = path === '/' ? pathname === path : pathname.startsWith(path);
		return `flex flex-col items-center gap-1 text-white text-sm ${isActive ? 'font-bold' : 'font-normal'}`;
	};

	return (
		<nav className="bg-bala-purple/60 w-full py-2 lg:hidden">
			<ul className="flex items-center justify-around p-1">
				<li>
					<Link href="/yoga" className={getLinkClassName('/yoga')}>
						<YogaIcon />
						Yoga
					</Link>
				</li>
				<li>
					<Link href="/blog" className={getLinkClassName('/blog')}>
						<BlogIcon />
						Blog
					</Link>
				</li>
				<li>
					<Link href="/contact" className={getLinkClassName('/contact')}>
						<ContactIcon />
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
