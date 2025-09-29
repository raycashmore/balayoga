'use client';

import { ContactCard } from '@/app/_components/contact-card';
import { useEffect } from 'react';

export type ContactDialogProps = {
	visible: boolean;
	onClose?: () => void;
};

export function ContactDialog({ visible, onClose }: ContactDialogProps) {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose?.();
			}
		};
		if (visible) {
			window.addEventListener('keydown', handleKeyDown);
		}
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose, visible]);

	if (!visible) return null;

	return (
		<div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm" onClick={onClose}>
			<ContactCard visible={visible} onClose={onClose} />
		</div>
	);
}
