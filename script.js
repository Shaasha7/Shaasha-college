// ===============================
// Dropdown Menu
// ===============================

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("mouseenter", () => {
        const dropdown = item.querySelector(".dropdown");

        if (dropdown) {
            dropdown.style.display = "block";
        }
    });

    item.addEventListener("mouseleave", () => {
        const dropdown = item.querySelector(".dropdown");

        if (dropdown) {
            dropdown.style.display = "none";
        }
    });

});

// ===============================
// Theme Toggle
// ===============================

const toggle = document.getElementById("theme-toggle");

if (toggle) {

    const icon = toggle.querySelector("i");
    const text = toggle.querySelector("span");

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark-mode");
        icon.className = "fa-solid fa-moon";
        text.textContent = "Dark";

    } else {

        document.body.classList.remove("dark-mode");
        icon.className = "fa-solid fa-sun";
        text.textContent = "Light";

    }

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");
            icon.className = "fa-solid fa-moon";
            text.textContent = "Dark";

        } else {

            localStorage.setItem("theme", "light");
            icon.className = "fa-solid fa-sun";
            text.textContent = "Light";

        }

    });

}