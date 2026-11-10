export const BOOKING_URL = 'https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes';

export const NAV_ITEMS = [
	{ href: '/', label: 'Home' },
	{ href: '/yoga', label: 'Yoga' },
	{ href: '/blog', label: 'Blog' },
	{ href: '/contact', label: 'Contact' }
] as const;

export type NavHref = (typeof NAV_ITEMS)[number]['href'];

export const NAV_PILL_ACTIVE_CLASS_NAME = 'border-white/45 bg-accent/72 text-white';
export const NAV_PILL_INACTIVE_CLASS_NAME = 'border-transparent text-nav-ink hover:bg-white/60';

export function isNavItemActive(pathname: string, href: string) {
	return href === '/' ? pathname === href : pathname.startsWith(href);
}

export function mobileNavLinkClassName(isActive: boolean) {
	return `text-white transition-opacity ${isActive ? 'font-bold' : 'font-normal opacity-85'}`;
}
