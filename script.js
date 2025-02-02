function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    const body = document.body;
    
    menu.classList.toggle("menu-open");
    body.classList.toggle("menu-lock");
}