import { ClassCard } from '@/app/_components/class-card';
import { SectionTitle } from '@/app/_components/section-title';
import type { KidsYogaBlockProps } from '@/payload-types';
import { YogaClassRow } from '@/payload/blocks/KidsYoga/YogaClassRow';
import { FEATURE_FLAGS, getBooleanFeatureFlag } from '@/server/feature-flags';
import Image from 'next/image';

export async function KidsYogaBlock(props: KidsYogaBlockProps) {
	const isKidsEnabled = await getBooleanFeatureFlag(FEATURE_FLAGS.KIDS_YOGA_BLOCK, false);

	return <KidsYogaBlockContent {...props} isKidsEnabled={isKidsEnabled} />;
}

function KidsYogaBlockContent({ kids, teens, title, isKidsEnabled }: KidsYogaBlockProps & { isKidsEnabled: boolean }) {
	return (
		<ClassCard
			id="kids-yoga"
			tone="white"
			heading={
				<div className="flex items-center gap-4 md:gap-6">
					<SectionTitle>{title}</SectionTitle>
					<Image
						src="/activekids-logo.webp"
						alt="Active kids approved provider"
						width={100}
						height={100}
						className="h-16 w-16 md:h-20 md:w-20"
					/>
				</div>
			}
		>
			{isKidsEnabled && kids && <YogaClassRow image="/kids-yoga.webp" content={kids} />}
			{teens && <YogaClassRow image="/teens-yoga.webp" content={teens} />}
		</ClassCard>
	);
}
