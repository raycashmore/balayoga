import { BookNowButton } from '@/app/_components/book-now-button';
import type { KidsYogaBlockProps } from '@/payload-types';
import RichText from '@/payload/components/RichText';
import { FEATURE_FLAGS, getBooleanFeatureFlag } from '@/server/feature-flags';
import { headerFont } from '@/styles/fonts';
import Image from 'next/image';

export async function KidsYogaBlock(props: KidsYogaBlockProps) {
	const isKidsEnabled = await getBooleanFeatureFlag(FEATURE_FLAGS.KIDS_YOGA_BLOCK, false);

	return <KidsYogaBlockContent {...props} isKidsEnabled={isKidsEnabled} />;
}

function KidsYogaBlockContent({ kids, teens, title, isKidsEnabled }: KidsYogaBlockProps & { isKidsEnabled: boolean }) {
	return (
		<section
			className="bg-opacity-70 flex flex-col gap-4 rounded-[32px] bg-white p-6 pt-12 md:gap-2 md:px-12 md:pt-2"
			style={{ color: 'var(--color-gray-900)' }}
		>
			<a id="kids-yoga" />
			<div className="flex items-center gap-6">
				<h2 className={`headline ${headerFont.className} pb-2 text-center leading-tight sm:text-left`}>{title}</h2>
				<Image src="/activekids-logo.webp" alt="Active kids approved provider" width={100} height={100} />
			</div>

			{isKidsEnabled ? (
				<div>
					<Image
						src="/kids-yoga.webp"
						alt=""
						width={350}
						height={350}
						className="float-none m-0 mt-0 justify-self-center rounded-xl sm:justify-self-start md:float-right md:m-8 md:mt-2 md:pb-0"
					/>
					{kids && <RichText data={kids} enableGutter={false} />}

					<div className="flex justify-center">
						<BookNowButton />
					</div>
				</div>
			) : null}

			<div>
				<Image
					src="/teens-yoga.webp"
					alt=""
					width={350}
					height={350}
					className="float-none m-0 mt-0 justify-self-center rounded-xl sm:justify-self-start md:float-right md:m-8 md:mt-2 md:pb-0"
				/>
				{teens && <RichText data={teens} enableGutter={false} />}
				<div className="flex justify-center">
					<BookNowButton />
				</div>
			</div>
		</section>
	);
}
