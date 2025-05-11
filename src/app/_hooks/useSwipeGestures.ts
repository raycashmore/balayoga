import { useEffect, useRef, useState } from "react";

interface SwipeGestureConfig {
	onSwipeLeft?: () => void;
	onSwipeRight?: () => void;
	threshold?: number;
}

export function useSwipeGestures({ onSwipeLeft, onSwipeRight, threshold = 50 }: SwipeGestureConfig) {
	const touchStartX = useRef<number | null>(null);
	const touchEndX = useRef<number | null>(null);
	const [isDragging, setIsDragging] = useState(false);

	useEffect(() => {
		const handleTouchStart = (e: TouchEvent) => {
			touchStartX.current = e.touches[0]?.clientX ?? 0;
			setIsDragging(true);
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (!touchStartX.current) return;
			touchEndX.current = e.touches[0]?.clientX ?? 0;
		};

		const handleTouchEnd = () => {
			setIsDragging(false);
			if (!touchStartX.current || !touchEndX.current) return;

			const swipeDistance = touchEndX.current - touchStartX.current;

			if (Math.abs(swipeDistance) > threshold) {
				if (swipeDistance > 0 && onSwipeRight) {
					onSwipeRight();
				} else if (swipeDistance < 0 && onSwipeLeft) {
					onSwipeLeft();
				}
			}

			touchStartX.current = null;
			touchEndX.current = null;
		};

		const handleMouseDown = (e: MouseEvent) => {
			touchStartX.current = e.clientX;
			setIsDragging(true);
		};

		const handleMouseMove = (e: MouseEvent) => {
			if (!touchStartX.current) return;
			touchEndX.current = e.clientX;
		};

		const handleMouseUp = () => {
			setIsDragging(false);
			if (!touchStartX.current || !touchEndX.current) return;

			const swipeDistance = touchEndX.current - touchStartX.current;

			if (Math.abs(swipeDistance) > threshold) {
				if (swipeDistance > 0 && onSwipeRight) {
					onSwipeRight();
				} else if (swipeDistance < 0 && onSwipeLeft) {
					onSwipeLeft();
				}
			}

			touchStartX.current = null;
			touchEndX.current = null;
		};

		document.addEventListener("touchstart", handleTouchStart);
		document.addEventListener("touchmove", handleTouchMove);
		document.addEventListener("touchend", handleTouchEnd);
		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("touchstart", handleTouchStart);
			document.removeEventListener("touchmove", handleTouchMove);
			document.removeEventListener("touchend", handleTouchEnd);
			document.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
	}, [onSwipeLeft, onSwipeRight, threshold]);

	return { isDragging };
}
