// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-menu");
const menuBranding = document.querySelector(".brand-logo");
const navItems = document.querySelectorAll(".nav-menu li");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close-btn");
        menu.classList.add("active");
        menuBranding.classList.add("active");
        navItems.forEach(item => item.classList.add("active"));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove("close-btn");
        menu.classList.remove("active");
        menuBranding.classList.remove("active");
        navItems.forEach(item => item.classList.remove("active"));

        // Set Menu State
        showMenu = false;
    }
}

// Sticky Navigation Bar
window.addEventListener("scroll", function () {
    let header = document.querySelector("nav");
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("sticky", windowPosition);
});

