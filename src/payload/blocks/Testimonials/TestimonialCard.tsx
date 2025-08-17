'use client';

import type { TestimonialsBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { headerFont } from '@/styles/fonts';
import React, { useState } from 'react';

type TestimonialCardProps = {
	testimony: NonNullable<TestimonialsBlockProps['testimonials']>[number];
};

export function TestimonialCard({ testimony }: TestimonialCardProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div
			className={`relative overflow-hidden rounded-[32px] bg-gradient-to-bl from-transparent from-25% via-[#DBE2F0]/10 to-[#DBE2F0]/20 px-6 py-6 backdrop-blur-sm transition-all duration-300 md:px-12`}
		>
			<div className="my-3">
				<h3 className={`${headerFont.className} mb-6 text-xl font-bold text-white md:text-xl`}>&quot;{testimony.quote}&quot;</h3>

				<div className="relative z-10 leading-relaxed text-white/90">
					<RichText data={isExpanded ? testimony.body : testimony.shortBody} enableGutter={false} />
				</div>

				<div className="flex justify-end">
					<button
						onClick={() => setIsExpanded((value) => !value)}
						className="mt-2 rounded-md px-2 font-medium text-white transition-colors hover:text-white/80 focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-600 focus:outline-none"
					>
						{isExpanded ? 'Read less' : 'Read more'}
					</button>
				</div>
			</div>
		</div>
	);
}
