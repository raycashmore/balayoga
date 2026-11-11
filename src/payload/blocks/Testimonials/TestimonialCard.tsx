'use client';

import type { TestimonialsBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { headerFont } from '@/styles/fonts';
import { useEffect, useId, useRef, useState } from 'react';

type TestimonialCardProps = {
	testimony: NonNullable<TestimonialsBlockProps['testimonials']>[number];
};

const COLLAPSED_LINES = 7;

export function TestimonialCard({ testimony }: TestimonialCardProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const bodyId = useId();
	const quoteId = useId();
	const bodyRef = useRef<HTMLDivElement>(null);
	// Height can't transition to `auto`, so the wrapper height is computed from the body's measurements.
	const [measurements, setMeasurements] = useState<{ full: number; collapsed: number }>();

	useEffect(() => {
		const body = bodyRef.current;
		if (!body) return;
		const observer = new ResizeObserver(() => {
			const lineHeight = parseFloat(getComputedStyle(body).lineHeight);
			setMeasurements({ full: body.offsetHeight, collapsed: lineHeight * COLLAPSED_LINES });
		});
		observer.observe(body);
		return () => observer.disconnect();
	}, []);

	const isClippable = measurements ? measurements.full > measurements.collapsed : false;
	const isClipped = isClippable && !isExpanded;
	const wrapperHeight = measurements && (isClipped ? measurements.collapsed : measurements.full);

	return (
		<div className="relative flex h-full flex-col overflow-hidden rounded-[32px] bg-gradient-to-bl from-transparent from-25% via-[#DBE2F0]/10 to-[#DBE2F0]/20 p-6 backdrop-blur-sm md:p-10">
			<h3 id={quoteId} className={`${headerFont.className} mt-0 mb-4 text-[22px] leading-[1.25] font-normal text-white`}>
				&ldquo;{testimony.quote}&rdquo;
			</h3>

			<div
				id={bodyId}
				style={{ height: wrapperHeight }}
				className={`overflow-hidden transition-[height] duration-250 ease-out motion-reduce:transition-none ${
					isClipped ? 'mask-b-from-60%' : ''
				}`}
			>
				<div ref={bodyRef} className="text-[15px] leading-relaxed text-white/90">
					<RichText data={testimony.body} enableGutter={false} />
				</div>
			</div>

			{isClippable && (
				<div className="mt-auto pt-4">
					<button
						type="button"
						onClick={() => setIsExpanded((value) => !value)}
						aria-expanded={isExpanded}
						aria-controls={bodyId}
						aria-describedby={quoteId}
						className="-ml-2 inline-flex items-center gap-1 rounded-md px-2 py-1 font-semibold text-white transition-colors hover:text-white/80 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
					>
						{isExpanded ? 'Read less' : 'Read more'}
						<svg
							aria-hidden="true"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							className={`transition-transform duration-250 ease-out motion-reduce:transition-none ${
								isExpanded ? 'rotate-180' : ''
							}`}
						>
							<path d="m6 9 6 6 6-6" />
						</svg>
					</button>
				</div>
			)}
		</div>
	);
}
