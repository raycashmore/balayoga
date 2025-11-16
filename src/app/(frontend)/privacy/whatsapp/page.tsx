export const metadata = {
	robots: {
		index: false,
		follow: false,
		nocache: true
	}
};

export default function Page() {
	return (
		<div className="flex h-screen w-full max-w-[960px] min-w-[300px] flex-col items-center justify-center px-2 py-4 pt-16 sm:px-4 lg:py-24">
			<div className="w-full self-center overflow-y-auto rounded-lg bg-white p-4 py-8 shadow-lg lg:p-8">
				<h1>Privacy Policy</h1>
				<p>
					<strong>Effective Date:</strong> Nov 2025
				</p>

				<p>
					Your privacy is important to us. This privacy policy explains how we handle the information you share with us via
					WhatsApp.
				</p>

				<h2>1. Information We Collect</h2>
				<p>We only collect information necessary to communicate with you via WhatsApp, including:</p>
				<ul>
					<li>Your phone number</li>
					<li>Messages you send to us</li>
				</ul>
				<p>
					We do <strong>not</strong> collect additional personal information or share your data with third parties.
				</p>

				<h2>2. How We Use Your Information</h2>
				<p>We use your information solely to respond to your messages and provide the services you request.</p>

				<h2>3. Data Retention</h2>
				<p>
					We retain your messages only as long as necessary to respond to your inquiries. You can request deletion of your data at
					any time by contacting us.
				</p>

				<h2>4. Security</h2>
				<p>
					We take reasonable measures to protect your information, but please note that no method of communication over the
					internet is completely secure.
				</p>

				<h2>5. Your Rights</h2>
				<p>You may contact us to access, correct, or delete the information you have shared with us.</p>

				<h2>6. Contact</h2>
				<p>If you have any questions about this privacy policy, you can contact us at: romana@balayoga.com.au</p>
			</div>
		</div>
	);
}
