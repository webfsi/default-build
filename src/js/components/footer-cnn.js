export default () => {
	const dataCurrentYear = document.querySelectorAll('[data-current-year]');
	dataCurrentYear.forEach(el => {
		el.innerHTML = new Date().getFullYear();
	});
}