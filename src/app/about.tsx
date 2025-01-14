import Image from "next/image";

export function About() {
	return (
		<section className="gap-8 pb-6 md:flex md:flex-row lg:px-8">
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
					My name is Romana, and I have been practising yoga for over twenty years. Initially drawn to asanas for the physical
					challenge, I soon discovered the deeper benefits of pranayama and meditation. Yoga has become a vital tool for finding
					inner peace, helping me manage the demands of a corporate career and motherhood while becoming the best version of
					myself.
				</p>
				<p className="pb-4">
					Bala, a Sanskrit word meaning young, powerful, and childlike, reflects the essence of my yoga practice. I share yoga
					with both children and adults, fostering strong bodies, curious minds, and inner balance. My mission is to empower
					children with tools to navigate life’s challenges with resilience, calm, and strength, equipping them to thrive in all
					areas of life.
				</p>
				<p>
					To support this vision, I completed 350 hours of Yoga Teacher Training with Inspire Yoga and Wellbeing in 2023, followed
					by Zenergy Kids Yoga Teacher Training, Foundation, and Advanced courses. I am now expanding my expertise through Yoga
					Therapy Training for children, continually refining my ability to guide others on their yoga journey.
				</p>
			</div>
		</section>
	);
}
