import { BookNowButton } from '@/app/_components/book-now-button';
import type { AdultsYogaBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { headerFont } from '@/styles/fonts';
import Image from 'next/image';

export function AdultsYogaBlock({ richText, title }: AdultsYogaBlockProps) {
	return (
		<section className="bg-opacity-80 flex flex-col gap-4 rounded-[32px] p-6 pb-12 md:px-12" style={{ backgroundColor: 'var(--color-blue-100)', color: 'var(--color-gray-900)' }}>
			<a id="adults-yoga" />
			<h2 className={`headline ${headerFont.className} pb-4 text-center leading-none md:text-left`}>{title}</h2>

			<div className="flex flex-col gap-8 sm:flex-row">
				<aside className="flex justify-center sm:justify-start">
					<Image src="/s2.webp" alt="" width={200} height={200} className="h-auto w-48 rounded-xl object-cover" />
				</aside>
				<div className="flex-[1]">
					{richText && <RichText data={richText} enableGutter={false} />}
					<div className="flex justify-center sm:justify-start">
						<BookNowButton />
					</div>
				</div>
			</div>
		</section>
	);
}
