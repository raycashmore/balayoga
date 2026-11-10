import { headerFont } from '@/styles/fonts';
import type { ReactNode } from 'react';

type SectionTitleProps = {
	as?: 'h1' | 'h2';
	className?: string;
	children: ReactNode;
};

export function SectionTitle({ as: Tag = 'h2', className = '', children }: SectionTitleProps) {
	return (
		<Tag className={`${headerFont.className} m-0 text-[36px] leading-[1.05] tracking-[-0.01em] md:text-[42px] ${className}`}>
			{children}
		</Tag>
	);
}
