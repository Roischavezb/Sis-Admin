import menuBars from "./menu-bar.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
	menuBars(".btn-menu", ".sidebar");
});
