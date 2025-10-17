import { AboutBlock } from '@/payload/blocks/About/Component';
import { AdultsYogaBlock } from '@/payload/blocks/AdultsYoga/Component';
import { ContentBlock } from '@/payload/blocks/Content/Component';
import { FamilyYogaBlock } from '@/payload/blocks/FamilyYoga/Component';
import { KidsYogaBlock } from '@/payload/blocks/KidsYoga/Component';
import { TestimonialsBlock } from '@/payload/blocks/Testimonials/Component';

export const blockComponents = {
	content: ContentBlock,
	about: AboutBlock,
	testimonials: TestimonialsBlock,
	kids: KidsYogaBlock,
	family: FamilyYogaBlock,
	adults: AdultsYogaBlock
};
