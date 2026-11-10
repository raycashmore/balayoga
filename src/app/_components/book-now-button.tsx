import { PRIMARY_BUTTON_CLASS_NAME } from '@/app/_components/button-styles';
import { BOOKING_URL } from '@/app/_components/navigation';

export function BookNowButton() {
	return (
		<a href={BOOKING_URL} target="_blank" rel="noopener" className={`${PRIMARY_BUTTON_CLASS_NAME} !no-underline`}>
			Book now
		</a>
	);
}
