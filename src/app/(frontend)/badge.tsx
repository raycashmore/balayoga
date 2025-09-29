import Image from 'next/image';

export function Badge() {
	return (
		<Image
			src="/badges.webp"
			alt="Yoga Australia Registered Level 1 Teacher Badge and Yoga Australia Registered Children's Yoga Teacher Badge"
			width={180}
			height={180}
			className="h-auto w-full"
			unoptimized
		/>
	);
}
