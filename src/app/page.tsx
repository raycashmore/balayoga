import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="flex h-screen flex-col lg:flex-row-reverse">
			<div className="flex-grow-1 relative flex w-1/2">
				<Image src="/banner.webp" alt="Banner" fill style={{ objectFit: "cover", objectPosition: "right" }} />
			</div>
			<main className="flex-grow-1 flex w-1/2 flex-col justify-center px-16">
				<div className="flex flex-col">
					<Link href="/adults-yoga">Adults</Link>
					<Link href="/kids-yoga">Kids</Link>
					<Link href="/register-interest">Register interest</Link>
				</div>
			</main>
		</div>
	);
}
