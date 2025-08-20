const links = document.querySelectorAll<HTMLAnchorElement>("a[data-url]");

function updateActiveLink() {
    links.forEach((link) => {
        const url = link.getAttribute("data-url");
        if (url && window.location.hash === url) {
            link.classList.add("text-yellow-400");
        } else {
            link.classList.remove("text-yellow-400");
        }
    });
}

// Detectar cambios en el hash
window.addEventListener("hashchange", updateActiveLink);

// También ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateActiveLink();

    const menuDropdown = document.getElementById("menu-dropdown") as HTMLDivElement;
    const buttonMenu = document.getElementById("button-menu") as HTMLButtonElement;

    console.log(menuDropdown);


    buttonMenu?.addEventListener("mouseenter", (event) => {
        event.stopPropagation();

        if (menuDropdown.classList.contains("hidden")) {
            menuDropdown.classList.remove("hidden");
            menuDropdown.classList.add("flex");

            return;
        }

        if (menuDropdown.classList.contains("flex")) {
            menuDropdown.classList.remove("flex");
            menuDropdown.classList.add("hidden");

            return;
        }
    });

    menuDropdown.addEventListener("mouseenter", () => {
        menuDropdown.classList.remove("hidden");
        menuDropdown.classList.add("flex");
    });

    menuDropdown.addEventListener("mouseleave", () => {
        menuDropdown.classList.remove("flex");
        menuDropdown.classList.add("hidden");
    });

});

