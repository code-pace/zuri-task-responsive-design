const btn = document.querySelector(".btn-hold");
const myLinks = document.querySelector(".nav-links");
function myFunction() {
    myLinks.classList.toggle("new-links");
}
btn.addEventListener("click", myFunction);