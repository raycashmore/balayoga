'use client';

import { ContactDialog } from '@/app/_components/contact-dialog';
import { headerFont } from '@/styles/fonts';
import Link from 'next/link';
import { useState } from 'react';

export function GetInTouch() {
	const [contactDialogVisible, setContactDialogVisible] = useState(false);

	return (
		<>
			<div className="flex flex-col justify-center gap-2 pt-4 text-[#fff] md:justify-start">
				<a id="contact" />
				<h2 className={`headline ${headerFont.className} text-center text-[32px] md:text-left`}>Get in touch</h2>

				<div className="max-w-[600px] text-center md:text-left">
					<p>If you would like to find out more about what I offer, please send me a message.</p>
					<p>I would love to be part of your yoga journey!</p>
				</div>

				<Link
					href="/contact"
					className="self-center rounded-md bg-[#2B80E9] px-5 py-2.5 text-sm font-medium text-white focus:ring-4 focus:ring-blue-300 focus:outline-none disabled:opacity-50 sm:w-auto md:self-start"
				>
					Send a message
				</Link>
			</div>

			<ContactDialog visible={contactDialogVisible} onClose={() => setContactDialogVisible(false)} />
		</>
	);
}
