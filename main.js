/* nav bar manu operation */
const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
    e.name = e.name == "menu" ? "close" : "menu";
    navLinks.classList.toggle("top-[12%]");
}
/* test */

/* test */