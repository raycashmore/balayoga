import Image from 'next/image';

export function About() {
	return (
		<section className="px-2 pb-6 md:flex md:flex-row md:px-12">
			<a id="about" />
			<aside className="float-left pt-2 md:basis-1/3 md:pt-0">
				<Image
					src="/IMG_3751.webp"
					alt="Romana in a yoga pose"
					width={200}
					height={200}
					unoptimized={true}
					priority
					className="mr-6 mb-4 rounded-lg md:mr-0 md:mb-0 md:h-full md:w-full md:rounded-[32px] md:object-cover"
				/>
			</aside>
			<div className="text-[1rem] text-white md:basis-2/3 md:pl-8 md:text-white">
				<p>
					My name is Romana and I have been practising yoga for over twenty years. Initially drawn to asanas for the physical
					challenge, eventually discovering the wholesome world of yoga through pranayama and meditation. Yoga has become a vital
					tool for finding inner peace in this busy world.
				</p>
				<p>
					Bala is a Sanskrit word meaning young, powerful, strength of mind, and child-like, among other things. Embracing the
					essence of bala, I share the transformative practice of yoga with both kids and adults, fostering strong bodies and a
					mindset of curiosity and inner balance.
				</p>
				<p>
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
