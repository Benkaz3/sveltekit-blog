export function formatDate(date) {
	const formattedDate = new Date(date).toLocaleDateString('vi-VN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
	return formattedDate.replace(/^(\d+)\s+tháng/, '$1 tháng');
}
