import { ContactForm } from '@/app/_components/contact-form';
import { SectionTitle } from '@/app/_components/section-title';

export function ContactCard() {
	return (
		<div className="bg-sheet shadow-float w-full rounded-[32px] p-6 pb-8 md:p-10">
			<SectionTitle as="h1" className="text-ink">
				Get in touch
			</SectionTitle>
			<p className="text-ink-soft mt-3 mb-8 text-base leading-relaxed">
				If you would like to find out more about what I offer, please send me a message.
			</p>
			<ContactForm />
		</div>
	);
}
