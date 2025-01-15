"use client";

import ContactForm from "@/app/_components/contact-form";
import { headerFont } from "@/styles/fonts";
import { useState } from "react";

export function Contact() {
	const [contactDialogVisible, setContactDialogVisible] = useState(false);

	const handleSendMessage = () => {
		setContactDialogVisible(true);
	};

	return (
		<>
			<section className="flex flex-col gap-4 bg-[#402B87] p-8 text-[#fff] opacity-80">
				<h2 className={headerFont.className}>Get in touch</h2>
				<button
					onClick={handleSendMessage}
					type="submit"
					className="rounded-md bg-[#8C52FF] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
				>
					Send a message
				</button>
			</section>

			{contactDialogVisible && (
				<div
					tabIndex={-1}
					aria-hidden="true"
					className="fixed left-0 right-0 top-0 z-50 h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
				>
					<div className="relative max-h-full w-full max-w-md p-4">
						<ContactForm />
					</div>
				</div>
			)}
		</>
	);
}
