import Image from "next/image";

export type BannerImageProps = {
	imgSrc: string;
	align?: "left" | "center" | "right";
	className?: string;
};

export default function BannerImage({ imgSrc, align, className }: BannerImageProps) {
	return (
		<div className={`lg:flex-grow-1 relative flex min-h-[240px] lg:w-1/2 ${className}`}>
			<Image src={imgSrc} alt="Banner" fill style={{ objectFit: "cover", objectPosition: align ?? "center" }} />
		</div>
	);
}
