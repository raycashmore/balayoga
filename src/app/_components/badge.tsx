import Image from 'next/image';

export function Badge() {
	return (
		<Image
			src="/badges.webp"
			alt="Yoga Australia Registered Level 1 Teacher Badge and Yoga Australia Registered Children's Yoga Teacher Badge"
			width={180}
			height={180}
			className="h-auto w-full max-w-[300px] shrink-0 md:max-w-[360px]"
			unoptimized
		/>
	);
}
