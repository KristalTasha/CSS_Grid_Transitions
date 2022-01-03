const container = document.querySelector('.search');
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', () => {
    container.classList.toggle('active')

})


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menuitems");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".navlink");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}