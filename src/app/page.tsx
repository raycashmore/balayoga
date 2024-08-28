import Image from "next/image";

export default function HomePage() {
	return (
		<main className="flex h-screen flex-col lg:flex-row">
			<div className="relative flex flex-1">
				<Image src="/banner.webp" alt="Banner" layout="fill" objectFit="cover" objectPosition="right" />
			</div>
			<div className="flex flex-1"></div>
		</main>
	);
}
