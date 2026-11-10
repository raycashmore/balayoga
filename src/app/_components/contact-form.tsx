'use client';

import { PRIMARY_BUTTON_CLASS_NAME } from '@/app/_components/button-styles';
import { useFormspark } from '@formspark/use-formspark';
import { type FormEvent, useState } from 'react';

const FORMSPARK_FORM_ID = 'G9aAoos7Y';

const LABEL_CLASS_NAME = 'text-ink mb-2 block text-sm font-semibold';
const FIELD_CLASS_NAME =
	'border-rule text-ink focus:border-bala-purple focus:ring-bala-purple/20 block w-full rounded-xl border bg-white px-4 py-3 text-base transition-colors focus:ring-4 focus:outline-none';

export function ContactForm() {
	const [submit, submitting] = useFormspark({
		formId: FORMSPARK_FORM_ID
	});

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [sent, setSent] = useState(false);

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		await submit({ name: name.trim(), email: email.trim(), message: message.trim() });
		setSent(true);
	};

	return sent ? (
		<p role="status" className="text-ink m-0 text-lg">
			Message sent, thank you.
		</p>
	) : (
		<form onSubmit={onSubmit} className="flex flex-col gap-5">
			<div>
				<label htmlFor="name" className={LABEL_CLASS_NAME}>
					Your name
				</label>
				<input
					type="text"
					id="name"
					autoComplete="name"
					className={FIELD_CLASS_NAME}
					required
					maxLength={100}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="email" className={LABEL_CLASS_NAME}>
					Your email
				</label>
				<input
					type="email"
					id="email"
					autoComplete="email"
					className={FIELD_CLASS_NAME}
					required
					maxLength={100}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>

			<div>
				<label htmlFor="message" className={LABEL_CLASS_NAME}>
					Message
				</label>
				<textarea
					id="message"
					rows={5}
					maxLength={500}
					className={`${FIELD_CLASS_NAME} resize-y`}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</div>

			<button type="submit" disabled={submitting} className={`${PRIMARY_BUTTON_CLASS_NAME} mt-1 disabled:opacity-60`}>
				{submitting ? 'Sending…' : 'Send message'}
			</button>
		</form>
	);
}
