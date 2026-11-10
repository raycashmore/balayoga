import Facebook from '@/app/_components/facebook';
import Instagram from '@/app/_components/instagram';

const LINK_CLASS_NAME =
	'text-white opacity-90 transition-opacity hover:opacity-100 focus-visible:rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export function Socials() {
	return (
		<div className="mt-6 flex justify-center gap-3 md:justify-start">
			<a
				href="https://www.facebook.com/balayogamindfulnessandwellbeing"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Bala Yoga on Facebook"
				className={LINK_CLASS_NAME}
			>
				<Facebook />
			</a>
			<a
				href="https://www.instagram.com/balayoga_mindfulnesswellbeing"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Bala Yoga on Instagram"
				className={LINK_CLASS_NAME}
			>
				<Instagram />
			</a>
		</div>
	);
}
