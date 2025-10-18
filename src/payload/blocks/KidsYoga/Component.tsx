import { BookNowButton } from '@/app/_components/book-now-button';
import type { KidsYogaBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { headerFont } from '@/styles/fonts';
import Image from 'next/image';

export function KidsYogaBlock({ kids, teens, title }: KidsYogaBlockProps) {
	return (
		<section className="bg-opacity-70 flex flex-col gap-10 rounded-[32px] bg-[#fff] p-6 pt-2 text-[#1A1A1A] md:gap-2 md:px-12">
			<a id="kids-yoga" />
			<div className="flex items-center gap-6">
				<h2 className={`${headerFont.className} pb-2 text-center leading-tight sm:text-left`}>{title}</h2>
				<Image src="/activekids-logo.webp" alt="Active kids approved provider" width={100} height={100} />
			</div>

			<div>
				<Image
					src="/kids-yoga.webp"
					alt=""
					width={350}
					height={350}
					className="float-none m-0 mt-0 justify-self-center rounded-xl sm:justify-self-start md:float-right md:m-8 md:mt-2 md:pb-0"
				/>
				{kids && <RichText data={kids} enableGutter={false} />}

				<div className="flex justify-center sm:justify-start">
					<BookNowButton />
				</div>
			</div>

			<div className="mt-4 md:mt-0">
				<Image
					src="/teens-yoga.webp"
					alt=""
					width={350}
					height={350}
					className="float-none m-0 mt-0 justify-self-center rounded-xl sm:justify-self-start md:float-right md:m-8 md:mt-2 md:pb-0"
				/>
				{teens && <RichText data={teens} enableGutter={false} />}
				<div className="flex justify-center sm:justify-start">
					<BookNowButton />
				</div>
			</div>
		</section>
	);
}
