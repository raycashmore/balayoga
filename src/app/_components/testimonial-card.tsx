import { type Testimonial } from "@/app/testimonials";
import { headerFont } from "@/styles/fonts";
import React, { useState } from "react";

type TestimonialCardProps = {
	testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	const { truncatedContent, fullContent, quote } = testimonial;
	const [isExpanded, setIsExpanded] = useState(false);
	return (
		<div
			className={`relative overflow-hidden rounded-[32px] bg-gradient-to-bl from-transparent from-25% via-[#DBE2F0]/10 to-[#DBE2F0]/20 px-12 py-6 backdrop-blur-sm transition-all duration-300`}
		>
			<div className="mb-6 mt-3">
				<h3 className={`${headerFont.className} mb-6 text-xl font-bold text-white md:text-xl`}>&quot;{quote}&quot;</h3>

				<div className="relative z-10 leading-relaxed text-white/90">{isExpanded ? fullContent : truncatedContent}</div>

				<div className="flex justify-end">
					<button
						onClick={() => setIsExpanded((value) => !value)}
						className="mt-2 rounded-md px-2 font-medium text-white transition-colors hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-purple-600"
					>
						{isExpanded ? "Read less" : "Read more"}
					</button>
				</div>
			</div>
		</div>
	);
}
