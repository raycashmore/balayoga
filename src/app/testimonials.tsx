"use client";

import { NavButton } from "@/app/_components/nav-button";
import { PositionIndicator } from "@/app/_components/position-indicator";
import { TestimonialCard } from "@/app/_components/testimonial-card";
import { useSwipeGestures } from "@/app/_hooks/useSwipeGestures";
import { headerFont } from "@/styles/fonts";
import React, { type ReactNode, useState } from "react";

export type Testimonial = {
	id: number;
	quote: string;
	truncatedContent: ReactNode;
	fullContent: ReactNode;
};

export function Testimonials() {
	const [activeIndex, setActiveIndex] = useState(0);

	const { isDragging } = useSwipeGestures({
		onSwipeLeft: () => {
			if (activeIndex < testimonials.length - 1) {
				handleNext();
			}
		},
		onSwipeRight: () => {
			if (activeIndex > 0) {
				handlePrev();
			}
		},
		threshold: 50,
	});

	const testimonials: Testimonial[] = [
		{
			id: 1,
			quote: "My daughter found ways to release stress",
			truncatedContent: (
				<>
					<p>
						I truly feel that it was a wonderful decision for my 10-year-old daughter to start attending Romana’s yoga classes.
						My daughter has a busy schedule filled with school, tutoring, and studying, and I hoped that yoga would help her
						release some of her stress. She has always found it difficult to express her emotions and tends to hold a lot
						inside, often struggling with self-confidence. We even tried counseling in the past, but unfortunately, it didn’t
						help at all.
					</p>
					<p>
						However, ever since she started going to Romana’s classes, it’s clear to me that she is slowly but surely growing...
					</p>
				</>
			),
			fullContent: (
				<>
					<p>
						I truly feel that it was a wonderful decision for my 10-year-old daughter to start attending Romana’s yoga classes.
						My daughter has a busy schedule filled with school, tutoring, and studying, and I hoped that yoga would help her
						release some of her stress. She has always found it difficult to express her emotions and tends to hold a lot
						inside, often struggling with self-confidence. We even tried counseling in the past, but unfortunately, it didn’t
						help at all.
					</p>
					<p>
						However, ever since she started going to Romana’s classes, it’s clear to me that she is slowly but surely growing
						and changing in a positive way.
					</p>
					<p>
						She is learning how to control her emotions calmly and seems to have found ways to release stress, which has
						significantly reduced her irritability.
					</p>
					<p>
						Romana is such a kind and warm person who sincerely listens to and supports my concerns about my daughter. I am
						truly grateful to have met her.
					</p>
					<p>- Chiharu</p>
				</>
			),
		},
		{
			id: 2,
			quote: "She always comes out with a smile on her face",
			truncatedContent: (
				<>
					<p>
						My daughter has been attending the Yoga for Teens, weekly sessions, with Romana of Bala Yoga, since the beginning of
						this year.
					</p>
					<p>
						Romana is an outstanding, kind and thoughtful yoga teacher who makes her students feel welcome and respected during
						the classes. Whilst including a variety of challenging poses and activities, her sessions are always fun and
						enjoyable (for all students). She has my taught my daughter many useful techniques on how to relieve stress, how to
						improve memory and how to remain calm and focused. She always ensures that her students thrive to achieve their
						personal best and sets a wide range of opportunities for them....
					</p>
				</>
			),
			fullContent: (
				<>
					<p>
						My daughter has been attending the Yoga for Teens, weekly sessions, with Romana of Bala Yoga, since the beginning of
						this year.
					</p>
					<p>
						Romana is an outstanding, kind and thoughtful yoga teacher who makes her students feel welcome and respected during
						the classes. Whilst including a variety of challenging poses and activities, her sessions are always fun and
						enjoyable (for all students). She has my taught my daughter many useful techniques on how to relieve stress, how to
						improve memory and how to remain calm and focused. She always ensures that her students thrive to achieve their
						personal best and sets a wide range of opportunities for them.
					</p>
					<p>Romana is also very engaging with parents providing and encouraging feedback for her sessions.</p>
					<p>
						My daughter thoroughly enjoys and looks forward to her weekly yoga classes with Romana and always comes out with a
						smile on her face.
					</p>
					<p>
						I would highly recommend Romana’s yoga classes to all kids/teens as they are extremely beneficial and additionally,
						fun.
					</p>
					<p>- Sandhya</p>
				</>
			),
		},
	];

	const handlePrev = () => {
		setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
	};

	const handleNext = () => {
		setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : prev));
	};

	const handleSelect = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<section className="">
			<a id="testimonials" />
			<div className="pb-4 text-center text-white sm:text-left">
				<h2 className={`${headerFont.className} py-4 pb-2 pl-6 leading-tight md:pl-12`}>Testimonials</h2>
			</div>
			<div className="mx-auto max-w-7xl">
				<div className="relative">
					<div className="overflow-visible">
						<div
							className="transform-testimonial gap-8 transition-transform duration-500 ease-in-out md:flex"
							style={
								{
									"--active-index": activeIndex,
									transform: `translateX(-${activeIndex * 100}%)`,
								} as React.CSSProperties
							}
						>
							{testimonials.map((testimonial) => (
								<div key={testimonial.id} className="mb-4 w-full md:mb-0 md:w-[70%] md:flex-shrink-0">
									<TestimonialCard testimonial={testimonial}></TestimonialCard>
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
