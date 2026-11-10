import type { ReactNode } from 'react';

const TONES = {
	white: 'bg-white',
	olive: 'bg-[var(--color-olive-50)]',
	blue: 'bg-[var(--color-blue-100)]'
} as const;

type ClassCardProps = {
	id: string;
	tone: keyof typeof TONES;
	heading: ReactNode;
	children: ReactNode;
};

export function ClassCard({ id, tone, heading, children }: ClassCardProps) {
	return (
		<section
			id={id}
			className={`${TONES[tone]} flex scroll-mt-24 flex-col gap-6 rounded-[32px] p-6 pb-8 text-base leading-relaxed text-gray-900 md:gap-8 md:p-12`}
		>
			{heading}
			{children}
		</section>
	);
}
