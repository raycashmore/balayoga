import { SectionTitle } from '@/app/_components/section-title';
import Link from 'next/link';

export function GetInTouch() {
	return (
		<div id="contact" className="flex flex-col items-center text-center text-white md:items-start md:text-left">
			<SectionTitle>Get in touch</SectionTitle>
			<div className="mt-4 max-w-[420px] text-base leading-relaxed text-white/90 [&_p]:my-0 [&_p+p]:mt-2">
				<p>If you would like to find out more about what I offer, please send me a message.</p>
				<p>I would love to be part of your yoga journey!</p>
			</div>
			<Link
				href="/contact"
				className="text-bala-purple-dark hover:bg-bala-purple-light mt-6 inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
			>
				Send a message
			</Link>
		</div>
	);
}
