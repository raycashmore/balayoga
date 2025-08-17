import Badge from '@/payload/blocks/Badge/Component';
import Contact from '@/payload/blocks/Contact/Component';
import { ContentBlock } from '@/payload/blocks/Content/Component';
import CTAButton from '@/payload/blocks/CTAButton/Component';
import FamilyYoga from '@/payload/blocks/FamilyYoga/Component';
import FeatureList from '@/payload/blocks/FeatureList/Component';
import Hero from '@/payload/blocks/Hero/Component';
import ImageComponent from '@/payload/blocks/Image/Component';
import RichText from '@/payload/blocks/RichText/Component';
import { TwoColumn } from '@/payload/blocks/TwoColumn/Component';

export const blockComponents = {
	hero: Hero,
	richText: RichText,
	image: ImageComponent,
	ctaButton: CTAButton,
	featureList: FeatureList,
	twoColumn: TwoColumn,
	contact: Contact,
	badge: Badge,
	familyYoga: FamilyYoga,
	content: ContentBlock
};
