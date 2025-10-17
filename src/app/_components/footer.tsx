import { Badge } from '@/app/_components/badge';
import { GetInTouch } from '@/app/_components/get-in-touch';
import Socials from '@/app/_components/socials';

export default function Footer() {
	return (
		<div className="space-between my-12 flex max-w-[1000px] flex-col gap-4 px-8 md:flex-row md:px-12">
			<div className="flex-1">
				<GetInTouch />
				<Socials />
			</div>
			<div className="basis-1/2 pt-6">
				<Badge />
			</div>
		</div>
	);
}
