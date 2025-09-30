'use client';

import ContactForm from '@/app/_components/contact-form';

export type ContactDialogProps = {
	visible: boolean;
	onClose?: () => void;
};

export function ContactCard({ visible, onClose }: ContactDialogProps) {
	return (
		<div
			tabIndex={-1}
			className="w-full max-w-md self-center overflow-y-auto rounded-lg bg-white p-4 py-8 shadow-lg lg:p-8"
			onClick={(e) => e.stopPropagation()}
		>
			<div className="relative max-h-full w-full max-w-md px-4 py-2">
				{onClose && (
					<button className="absolute top-[-5px] right-3 rounded-full bg-gray-100 p-2 hover:bg-gray-300" onClick={onClose}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 text-gray-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				)}
				<ContactForm isOpen={visible} />
			</div>
		</div>
	);
}
