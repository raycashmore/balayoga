import { Badge } from '@/app/_components/badge';
import { GetInTouch } from '@/app/_components/get-in-touch';
import { Socials } from '@/app/_components/socials';

export function Footer() {
	return (
		<div className="page-track flex flex-col items-center gap-10 px-6 py-14 md:flex-row md:justify-between md:px-12 md:py-16">
			<div className="flex flex-col items-center md:items-start">
				<GetInTouch />
				<Socials />
			</div>
			<Badge />
		</div>
	);
}
