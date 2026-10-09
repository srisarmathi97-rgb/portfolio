const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// Smooth reveal animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(sec=>{

const top = window.scrollY;
const offset = sec.offsetTop - 300;

if(top > offset){
sec.style.opacity = "1";
sec.style.transform = "translateY(0)";
}

});

});

sections.forEach(sec=>{
sec.style.opacity="0";
sec.style.transform="translateY(50px)";
sec.style.transition="1s";
});