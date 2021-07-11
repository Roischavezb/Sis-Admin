const btnEnlace = document.querySelectorAll(".sidebar__enlace");

btnEnlace.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (item.className == "active") {
			removerClase();
		} else {
			removerClase();
			item.classList.add("active");
			item.classList.toggle("up-arrow");
			const collapse__menu = item.nextElementSibling;
			collapse__menu.classList.toggle("d-block");
		}
	});
});

function removerClase() {
	btnEnlace.forEach((item) => {
		item.classList.remove("active");
	});
}
