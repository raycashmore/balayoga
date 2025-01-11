import Image from "next/image";

export type BannerImageProps = {
	imgSrc: string;
};

export default function BannerImage({ imgSrc }: BannerImageProps) {
	return (
		<div className="relative h-[360px] w-full overflow-hidden md:h-[680px]">
			<Image
				src={imgSrc}
				alt="Image of children and their yoga teacher"
				layout="fill"
				objectFit="cover"
				objectPosition="bottom"
				unoptimized={true}
				priority
			/>
		</div>
	);
}
