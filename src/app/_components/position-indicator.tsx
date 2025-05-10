import React from "react";

interface PositionIndicatorProps {
	total: number;
	current: number;
	onSelect: (index: number) => void;
}

export const PositionIndicator: React.FC<PositionIndicatorProps> = ({ total, current, onSelect }) => {
	return (
		<div className="flex items-center justify-center space-x-2">
			{Array.from({ length: total }, (_, i) => (
				<button
					key={i}
					onClick={() => onSelect(i)}
					aria-label={`Go to testimonial ${i + 1}`}
					aria-current={i === current ? "true" : "false"}
					className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
						i === current ? "w-6 bg-purple-600" : "bg-purple-200 hover:bg-purple-300"
					} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1`}
				/>
			))}
		</div>
	);
};
