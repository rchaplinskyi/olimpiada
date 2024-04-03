
const toTop = document.querySelector(".to-top");

function handleScroll() {
    window.scrollY > 100
        ? toTop.classList.add("active")
        : toTop.classList.remove("active");
}
window.addEventListener("scroll", handleScroll);

