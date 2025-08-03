import Image from 'next/image';

export type BannerImageProps = {
	imgSrc: string;
};

export default function BannerImage({ imgSrc }: BannerImageProps) {
	return (
		<div className="relative h-[360px] w-[100vw] overflow-hidden md:h-[680px] xl:h-[800px]">
			<Image
				src={imgSrc}
				alt="Image of children and their yoga teacher"
				fill
				style={{
					objectFit: 'cover',
					objectPosition: 'bottom'
				}}
				priority
			/>
		</div>
	);
}
