import { Adults } from '@/app/(frontend)/adults';
import { Family } from '@/app/(frontend)/family';
import { Kids } from '@/app/(frontend)/kids';

export default function Page() {
	return (
		<main className="m-2 flex max-w-[1000px] flex-col justify-center gap-8 pt-14 pb-8 md:m-4 lg:gap-12 lg:pt-24 mx-auto">
			<Kids />
			<Family />
			<Adults />
		</main>
	);
}
