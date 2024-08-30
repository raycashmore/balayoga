import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<main className="flex h-screen flex-col lg:flex-row-reverse">
			<div className="relative flex flex-1">
				{/*<Image src="/banner.webp" alt="Banner" style={{ objectFit: "cover" }} objectPosition="right" />*/}
			</div>
			<div className="flex flex-1">
				<h1>Adults Yoga</h1>
				<Link href="/">Home</Link>
			</div>
		</main>
	);
}
