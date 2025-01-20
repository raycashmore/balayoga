import Image from "next/image";

export function About() {
	return (
		<section className="gap-8 pb-6 md:flex md:flex-row lg:px-8">
			<a id="about" />
			<aside className="float-left md:basis-1/3">
				<Image
					src="/IMG_3751.webp"
					alt="Romana in a yoga pose"
					width={200}
					height={200}
					unoptimized={true}
					className="mb-4 mr-6 rounded-lg md:mb-0 md:mr-0 md:h-full md:w-full md:rounded-[32px] md:object-cover"
				/>
			</aside>
			<div className="text-lg md:basis-2/3">
				<p className="pb-4">
					My name is Romana and I have been practising yoga for over twenty years. Initially drawn to asanas for the physical
					challenge, eventually discovering the wholesome world of yoga through pranayama and meditation. Yoga has become a vital
					tool for finding inner peace in this busy world, helping me to be the best version of myself.
				</p>
				<p className="pb-4">
					Bala is a Sanskrit word meaning young, powerful, strength of mind, and child-like, among other things. Embracing the
					essence of bala, I share the transformative practice of yoga with both kids and adults, fostering strong bodies and a
					mindset of curiosity and inner balance.
				</p>
				<p className="pb-4">
					Inspired to teach yoga more than a decade ago, I completed 350 hours of Yoga Teacher Training with Inspire Yoga and
					Wellbeing in 2023 and later, the Zenergy Kids Yoga Teacher Training, Foundation and Advanced, as well as Yoga Therapy
					Training for kids.
				</p>
				<p>
					My mission is to cultivate self-belief and a strong sense of self in children through the practice of yoga. By providing
					them with tools to empower them to navigate life’s challenges with resilience, inner calm and strength. Through yoga,
					children can develop the skills needed to cope with stress and thrive in all areas of life.
				</p>
			</div>
		</section>
	);
}
