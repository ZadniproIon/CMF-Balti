function toggleDropdown(event) {
    let dropdown = event.currentTarget.parentElement;
    let content = dropdown.querySelector(".dropdown-content");
    let arrow = dropdown.querySelector(".fa-chevron-down");

    content.classList.toggle("show");
    arrow.style.transform = content.classList.contains("show") ? "rotate(180deg)" : "rotate(0deg)";
}



// Attach event listeners to all dropdown headers
document.querySelectorAll(".dropdown-header").forEach(header => {
    header.addEventListener("click", toggleDropdown);
});
