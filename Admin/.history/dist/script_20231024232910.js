const body = document.querySelector("body");
const modeTogger = document.querySelector(".menu__toggle");
const sideBarToggle = body.querySelector(".top__bar");

modeTogger.addEventListener("click", () => {
    body.classList.toggle("dark")
})
