import Image from "next/image";

export type BannerImageProps = {
	imgSrc: string;
	align?: "left" | "center" | "right";
};

export default function BannerImage({ imgSrc, align }: BannerImageProps) {
	return (
		<div className="lg:flex-grow-1 relative flex min-h-[300px] lg:w-1/2">
			<Image src={imgSrc} alt="Banner" fill style={{ objectFit: "cover", objectPosition: align ?? "center" }} />
		</div>
	);
}
