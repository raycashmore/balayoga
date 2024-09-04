import Facebook from "@/app/_components/facebook";
import Instagram from "@/app/_components/instagram";

export default function Socials() {
	return (
		<div className="flex gap-2">
			<a href="https://www.facebook.com/balayogamindfulnessandwellbeing" target="_blank">
				<Facebook />
			</a>
			<a href="https://www.instagram.com/balayoga_mindfulnesswellbeing" target="_blank">
				<Instagram />
			</a>
		</div>
	);
}
