import Image from "next/image";
import { type ReactNode } from "react";

export default function BannerImage({ imgSrc }: { imgSrc: string }) {
	return (
		<div className="lg:flex-grow-1 relative flex min-h-[300px] lg:w-1/2">
			<Image src={imgSrc} alt="Banner" fill style={{ objectFit: "cover", objectPosition: "right" }} />
		</div>
	);
}
