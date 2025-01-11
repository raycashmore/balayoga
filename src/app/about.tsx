import Image from "next/image";

export function About() {
	return (
		<section className="flex flex-col gap-8 lg:flex-row lg:px-8">
			<div className="flex basis-2/3 flex-col gap-4 text-lg">
				<p>
					My name is Romana and I have been practising yoga for over twenty years. Initially drawn to asanas for the physical
					challenge, eventually discovering the wholesome world of yoga through pranayama and meditation. Yoga became a vital tool
					for managing demanding corporate job and later motherhood. Yoga helps me to find inner peace allowing me to be the best
					version of myself.
				</p>
				<p>
					Bala is a Sanskrit word meaning <strong>young</strong>, <strong>powerful</strong>, <strong>strength of mind</strong>,
					and <strong>child-like</strong>, among other things. Embracing the essence of bala, I share the transformative practice
					of yoga with both kids and adults, fostering strong bodies and a mindset of curiosity and inner balance.
				</p>
				<p>
					Inspired to teach children a decade ago, I completed 350 hours of Yoga Teacher Training with Inspire Yoga and Wellbeing
					in 2023 and later, the Zenergy Kids Yoga Teacher Training, Foundation and Advanced. As part of my ongoing education I am
					undertaking Yoga Therapy Training for kids as well.
				</p>
				<p>
					My mission is to cultivate self-belief and a strong sense of self in children through the practice of yoga. By providing
					them with tools to empower them to navigate life’s challenges with resilience, inner calm and strength. Through yoga,
					children can develop the skills needed to cope with stress and thrive in all aspects of life.
				</p>
			</div>
			<aside className="basis-1/3">
				<Image
					src="/IMG_3751.webp"
					alt="Romana in a yoga pose"
					width={200}
					height={200}
					style={{ width: "100%", height: "100%", borderRadius: "32px", objectFit: "cover" }}
					unoptimized={true}
				/>
			</aside>
		</section>
	);
}
