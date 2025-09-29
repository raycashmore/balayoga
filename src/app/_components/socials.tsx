import Facebook from '@/app/_components/facebook';
import Instagram from '@/app/_components/instagram';

export default function Socials() {
	return (
		<div className="mt-6 flex justify-center gap-2 md:justify-start">
			<a href="https://www.facebook.com/balayogamindfulnessandwellbeing" target="_blank">
				<Facebook />
			</a>
			<a href="https://www.instagram.com/balayoga_mindfulnesswellbeing" target="_blank">
				<Instagram />
			</a>
		</div>
	);
}
