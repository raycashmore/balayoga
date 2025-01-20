"use client";

import ContactForm from "@/app/_components/contact-form";
import Socials from "@/app/_components/socials";
import { headerFont } from "@/styles/fonts";
import { useEffect, useState } from "react";

export function Contact() {
	const [contactDialogVisible, setContactDialogVisible] = useState(false);

	const handleSendMessage = () => {
		setContactDialogVisible(true);
	};

	const handleCloseModal = () => {
		setContactDialogVisible(false);
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setContactDialogVisible(false);
			}
		};
		if (contactDialogVisible) {
			window.addEventListener("keydown", handleKeyDown);
		}
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [contactDialogVisible]);

	return (
		<>
			<div className="flex flex-col justify-center gap-8 p-8 text-[#fff] opacity-80">
				<a id="contact" />
				<h2 className={`${headerFont.className} text-center text-[32px]`}>Get in touch</h2>

				<div className="flex max-w-[600px] flex-col gap-2 text-center">
					<p>If you would like to find out more about what I offer, please send me a message.</p>
					<p>I would love to be part of your yoga journey!</p>
				</div>

				<button
					onClick={handleSendMessage}
					type="submit"
					className="self-center rounded-md bg-[#2B80E9] px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
				>
					Send a message
				</button>
			</div>

			{contactDialogVisible && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
					onClick={handleCloseModal}
				>
					<div
						tabIndex={-1}
						aria-hidden="true"
						className="w-full max-w-md self-stretch bg-white p-8 shadow-lg sm:self-center sm:rounded-lg"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="relative max-h-full w-full max-w-md p-4 pb-0">
							<button
								className="absolute right-3 top-[-5px] rounded-full bg-gray-100 p-2 hover:bg-gray-300"
								onClick={handleCloseModal}
							>
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
							<ContactForm isOpen={contactDialogVisible} />
						</div>
					</div>
				</div>
			)}

			<Socials />
		</>
	);
}
