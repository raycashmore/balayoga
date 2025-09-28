export const formatDateTime = (timestamp: string): string => {
	let date = new Date();
	if (timestamp) date = new Date(timestamp);

	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	const days = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	return `${days} ${months[monthIndex]} ${year}`;
};
