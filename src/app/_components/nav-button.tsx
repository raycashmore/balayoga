import React from 'react';

interface NavButtonProps {
	direction: 'prev' | 'next';
	onClick: () => void;
	disabled?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({ direction, onClick, disabled = false }) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			aria-label={direction === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
			className={`flex h-10 w-10 items-center justify-center rounded-full ${
				disabled
					? 'cursor-not-allowed bg-gray-200 text-gray-400 opacity-0 hover:opacity-0'
					: 'bg-purple-100 text-purple-700 opacity-50 hover:bg-purple-200 active:bg-purple-300'
			} transition-all duration-200 hover:opacity-100 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none`}
		>
			{direction === 'prev' ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="15 18 9 12 15 6"></polyline>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			)}
		</button>
	);
};
