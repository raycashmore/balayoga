'use client';

import { type ComponentProps, type FC } from 'react';

export const HamburgerIcon: FC<ComponentProps<'svg'>> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 30 30"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="m5 7.5 20 0" strokeWidth="2"></path>
			<path d="m5 15 20 0" strokeWidth="2"></path>
			<path d="m5 22.5 10 0" strokeWidth="2"></path>
		</svg>
	);
};
