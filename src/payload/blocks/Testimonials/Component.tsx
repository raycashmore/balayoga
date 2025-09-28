'use client';

import { NavButton } from '@/app/_components/nav-button';
import { PositionIndicator } from '@/app/_components/position-indicator';
import { useSwipeGestures } from '@/app/_hooks/useSwipeGestures';
import type { TestimonialsBlockProps } from '@/payload-types';
import { TestimonialCard } from '@/payload/blocks/Testimonials/TestimonialCard';
import { headerFont } from '@/styles/fonts';
import React, { useState } from 'react';

type Props = {
	className?: string;
} & TestimonialsBlockProps;

export function TestimonialsBlock({ title, testimonials }: Props) {
	const [activeIndex, setActiveIndex] = useState(0);

	useSwipeGestures({
		onSwipeLeft: () => {
			if (!testimonials) return;
			if (activeIndex < testimonials?.length - 1) {
				handleNext();
			}
		},
		onSwipeRight: () => {
			if (activeIndex > 0) {
				handlePrev();
			}
		},
		threshold: 50
	});

	const handlePrev = () => {
		setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
	};

	const handleNext = () => {
		if (!testimonials) return;
		setActiveIndex((prev) => (prev < testimonials?.length - 1 ? prev + 1 : prev));
	};

	const handleSelect = (index: number) => {
		setActiveIndex(index);
	};

	if (!testimonials || testimonials.length === 0) return null;

	return (
		<section className="">
			<a id="testimonials" />
			<div className="pb-4 text-center text-white sm:text-left">
				<h2 className={`${headerFont.className} py-4 pb-2 pl-6 leading-tight md:pl-12`}>{title}</h2>
			</div>
			<div className="mx-auto max-w-7xl">
				<div className="relative">
					<div className="overflow-visible">
						<div
							className="transform-testimonial gap-8 transition-transform duration-500 ease-in-out md:flex"
							style={
								{
									'--active-index': activeIndex,
									transform: `translateX(-${activeIndex * 100}%)`
								} as React.CSSProperties
							}
						>
							{testimonials.map((testimonial) => (
								<div key={testimonial.id} className="mb-4 w-full md:mb-0 md:w-[70%] md:flex-shrink-0">
									<TestimonialCard testimony={testimonial}></TestimonialCard>
								</div>
							))}
						</div>
					</div>

					<div className="mt-8 hidden items-center justify-center gap-8 md:flex">
						<NavButton direction="prev" onClick={handlePrev} disabled={activeIndex === 0} />
						<PositionIndicator total={testimonials.length} current={activeIndex} onSelect={handleSelect} />
						<NavButton direction="next" onClick={handleNext} disabled={activeIndex === testimonials.length - 1} />
					</div>
				</div>
			</div>
		</section>
	);
}
