const btn = document.querySelector(".burger");
const menu = document.querySelector(".menu__list");



btn.addEventListener("click", function () {
    menu.classList.toggle("show")
});