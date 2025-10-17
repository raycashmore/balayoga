import { BookNowButton } from '@/app/_components/book-now-button';
import type { FamilyYogaBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { headerFont } from '@/styles/fonts';
import Image from 'next/image';

export function FamilyYogaBlock({ details, description, title }: FamilyYogaBlockProps) {
	return (
		<section className="bg-opacity-80 flex flex-col gap-4 rounded-[32px] bg-[#F0F9F7] p-6 pb-8 text-[#1A1A1A] md:px-12">
			<a id="adults-yoga" />
			<h2 className={`${headerFont.className} pb-4 text-center leading-none md:text-left`}>{title}</h2>

			<div className="flex flex-col lg:flex-row lg:gap-8">
				<div>
					<div className="flex justify-center sm:justify-start">
						<Image
							src="/IMG_3554.webp"
							alt=""
							width={800}
							height={402}
							className="h-auto w-auto rounded-xl object-cover md:w-[420px]"
						/>
					</div>
					<div>{details && <RichText data={details} enableGutter={false} />}</div>
				</div>
				<div className="flex-[1]">
					{description && <RichText data={description} enableGutter={false} />}
					<span className="flex justify-center">
						<BookNowButton />
					</span>
				</div>
			</div>
		</section>
	);
}
