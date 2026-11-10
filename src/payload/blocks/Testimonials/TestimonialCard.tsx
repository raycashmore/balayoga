'use client';

import type { TestimonialsBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { headerFont } from '@/styles/fonts';
import { useEffect, useId, useRef, useState } from 'react';

type TestimonialCardProps = {
	testimony: NonNullable<TestimonialsBlockProps['testimonials']>[number];
};

export function TestimonialCard({ testimony }: TestimonialCardProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const bodyId = useId();
	const bodyRef = useRef<HTMLDivElement>(null);
	// Height can't transition to `auto`, so the wrapper follows the body's measured height.
	const [bodyHeight, setBodyHeight] = useState<number>();

	useEffect(() => {
		const body = bodyRef.current;
		if (!body) return;
		const observer = new ResizeObserver(() => setBodyHeight(body.offsetHeight));
		observer.observe(body);
		return () => observer.disconnect();
	}, []);

	return (
		<div className="relative overflow-hidden rounded-[32px] bg-gradient-to-bl from-transparent from-25% via-[#DBE2F0]/10 to-[#DBE2F0]/20 p-6 backdrop-blur-sm md:p-10">
			<h3 className={`${headerFont.className} mt-0 mb-4 text-[22px] leading-[1.25] font-normal text-white`}>
				&ldquo;{testimony.quote}&rdquo;
			</h3>

			<div
				id={bodyId}
				style={{ height: bodyHeight }}
				className="overflow-hidden transition-[height] duration-250 ease-out motion-reduce:transition-none"
			>
				<div ref={bodyRef}>
					<RichText
						key={isExpanded ? 'body' : 'short'}
						data={isExpanded ? testimony.body : testimony.shortBody}
						enableGutter={false}
						className="text-[15px] leading-relaxed text-white/90 transition-opacity duration-250 ease-out starting:opacity-0"
					/>
				</div>
			</div>

			<div className="flex justify-end">
				<button
					type="button"
					onClick={() => setIsExpanded((value) => !value)}
					aria-expanded={isExpanded}
					aria-controls={bodyId}
					className="mt-4 -mr-2 rounded-md px-2 py-1 font-semibold text-white transition-colors hover:text-white/80 focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:outline-none"
				>
					{isExpanded ? 'Read less' : 'Read more'}
				</button>
			</div>
		</div>
	);
}
