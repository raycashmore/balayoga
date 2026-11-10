const BOOKING_URL = 'https://app.squareup.com/appointments/book/classes/bro8gvstcef3zz/L2Y5ECFR9ASJT/classes';

export function BookNowButton() {
	return (
		<a
			href={BOOKING_URL}
			target="_blank"
			rel="noopener"
			className="hover:bg-bala-purple-dark inline-flex h-11 items-center justify-center rounded-full bg-[#6b4ec1] px-6 text-sm font-semibold text-white !no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6b4ec1]"
		>
			Book now
		</a>
	);
}
