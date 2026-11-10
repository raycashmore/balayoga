import { Badge } from '@/app/_components/badge';
import { GetInTouch } from '@/app/_components/get-in-touch';
import Socials from '@/app/_components/socials';

export default function Footer() {
	return (
		<div className="flex w-[calc(100%-16px)] max-w-[984px] flex-col items-center gap-10 px-6 py-14 md:flex-row md:justify-between md:px-12 md:py-16 lg:w-[calc(100%-48px)]">
			<div className="flex flex-col items-center md:items-start">
				<GetInTouch />
				<Socials />
			</div>
			<Badge />
		</div>
	);
}
