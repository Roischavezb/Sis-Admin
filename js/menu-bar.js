export default function menuBars(panelBtn, sidebar) {
	const d = document;

	d.addEventListener("click", (e) => {
		if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
			d.querySelector(sidebar).classList.toggle("is-active");
			console.log(e.target);
		}
	});
}
