import Back from "@/app/_components/back";
import BannerImage from "@/app/_components/banner-image";
import MainContent from "@/app/_components/main-content";

export default function Page() {
	return (
		<>
			<BannerImage imgSrc="/IMG_3751.webp" align="center" />
			<MainContent>
				<Back />
				<p>
					I have been practising yoga for over twenty years. Initially drawn to asanas for the physical challenge, eventually
					discovering the wholesome world of yoga through pranayama and meditation. Yoga became a vital tool for managing
					demanding corporate job and later motherhood. Yoga helps me to find inner peace allowing me to be the best version of
					myself.
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
			</MainContent>
		</>
	);
}
