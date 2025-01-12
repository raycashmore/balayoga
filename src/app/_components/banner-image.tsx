import Image from "next/image";

export type BannerImageProps = {
	imgSrc: string;
};

export default function BannerImage({ imgSrc }: BannerImageProps) {
	return (
		<div className="relative h-[360px] w-[100vw] overflow-hidden md:h-[680px] xl:h-[800px]">
			{/*<img*/}
			{/*	src={imgSrc}*/}
			{/*	alt="Image of children and their yoga teacher"*/}
			{/*	className="layout-fill object-cover object-bottom lg:object-bottom"*/}
			{/*/>*/}

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
