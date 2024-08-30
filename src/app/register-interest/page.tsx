import Image from "next/image";

export default function Page() {
	return (
		<div className="flex h-screen flex-col lg:flex-row-reverse">
			<div className="relative flex flex-1">
				<Image src="/banner.webp" alt="Banner" fill style={{ objectFit: "cover", objectPosition: "right" }} />
			</div>
			<main className="flex flex-1 flex-col justify-center p-8">
				<div className="flex flex-col">
					<h1>Register interest</h1>
				</div>
			</main>
		</div>
	);
}
