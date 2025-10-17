import type { AdultsYogaBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { headerFont } from '@/styles/fonts';
import Image from 'next/image';

export function AdultsYogaBlock({ richText, title }: AdultsYogaBlockProps) {
	return (
		<section className="bg-opacity-80 flex flex-col gap-4 rounded-[32px] bg-[#DBE2F0] p-6 pb-12 text-[#1A1A1A] md:px-12">
			<a id="adults-yoga" />
			<h2 className={`${headerFont.className} pb-4 text-center leading-none md:text-left`}>{title}</h2>

			<div className="flex flex-col gap-8 sm:flex-row">
				<aside className="flex justify-center sm:justify-start">
					<Image src="/s2.webp" alt="" width={200} height={200} className="h-auto w-48 rounded-xl object-cover" />
				</aside>
				<div className="flex-[1]">
					{richText && <RichText data={richText} enableGutter={false} />}
					<form
						action="https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes"
						className="flex justify-center sm:justify-start"
					>
						<button
							type="submit"
							className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 focus:outline-none disabled:opacity-50 sm:w-auto"
						>
							Book now
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
