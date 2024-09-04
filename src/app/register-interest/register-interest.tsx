"use client";

import { useFormspark } from "@formspark/use-formspark";
import { type ChangeEvent, type FormEvent, useState } from "react";

const FORMSPARK_FORM_ID = "13dB2uftq";

const days = [
	{ id: "mon", label: "Monday  4 - 5 pm" },
	{ id: "tue", label: "Tuesday 4 - 5 pm" },
	{ id: "wed", label: "Wednesday 4 - 5 pm" },
	{ id: "thu", label: "Thursday 4 - 5 pm" },
	{ id: "fri", label: "Friday 4 - 5 pm" },
];

export default function RegisterInterest() {
	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID,
	});

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sent, setSent] = useState(false);
	const [selectedDays, setSelectedDays] = useState<string[]>([]);

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = event.target;
		setSelectedDays((prevSelected) => (checked ? [...prevSelected, value] : prevSelected.filter((item) => item !== value)));
	};

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await submit({ name: name.trim(), email: email.trim(), message: message.trim(), selectedDays: selectedDays.join(", ") });
		setSent(true);
	};

	return sent ? (
		<div className="text-xl font-extralight text-white">Message sent, thank you.</div>
	) : (
		<form onSubmit={onSubmit} className="flex min-w-[200px] max-w-[400px] flex-col gap-4">
			<div>
				<label htmlFor="name" className="text-md mb-2 text-sm leading-8 text-white">
					Your name
				</label>
				<input
					type="text"
					id="name"
					className="focus:text-red-60 text-md block w-full rounded-md border p-2.5 text-black opacity-80 focus:border-blue-500 focus:ring-blue-500"
					required
					maxLength={100}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="email" className="text-md mb-2 text-sm leading-8 text-white">
					Your email
				</label>
				<input
					type="email"
					id="email"
					className="focus:text-red-60 text-md block w-full rounded-md border p-2.5 text-black opacity-80 focus:border-blue-500 focus:ring-blue-500"
					required
					maxLength={100}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="email" className="text-md mb-2 text-sm leading-8 text-white">
					Select your preferred day(s) for Kids yoga in Term 4:
				</label>
				<ul className="divide-y rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 opacity-80">
					{days.map((day) => (
						<li key={day.id} className="w-full rounded-t-lg">
							<div className="flex items-center ps-3">
								<input
									id={day.id + "-checkbox"}
									type="checkbox"
									value={day.label}
									className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
									onChange={handleCheckboxChange}
									checked={selectedDays.includes(day.label)}
								/>
								<label htmlFor={day.id + "-checkbox"} className="ms-2 w-full py-3 text-sm text-black">
									{day.label}
								</label>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div>
				<label htmlFor="message" className="text-md mb-2 text-sm leading-8 text-white">
					Message
				</label>
				<textarea
					id="message"
					rows={3}
					maxLength={500}
					className="focus:text-red-60 text-md block w-full rounded-md border p-2.5 text-black opacity-80 focus:border-blue-500 focus:ring-blue-500"
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Optional"
				/>
			</div>

			<button
				type="submit"
				disabled={submitting}
				className="rounded-md bg-[#ACA1DE] px-5 py-2.5 text-center text-sm font-medium opacity-80 hover:opacity-100 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 sm:w-auto"
			>
				SEND
			</button>
		</form>
	);
}
