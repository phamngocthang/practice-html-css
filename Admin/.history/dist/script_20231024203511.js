const body = document.querySelector("body");
const modeTogger = document.querySelector(".menu__toggle");

modeTogger.addEventListener("click", () => {
    body.classList.toggle("dark")
})
