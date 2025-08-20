import { LINK_NAV } from "./constants";

const LINK_URLS = LINK_NAV.map(item => item.url);

const links = document.querySelectorAll<HTMLAnchorElement>("a[data-url]");

function handleLinkClick(e: Event) {
    const link = e.currentTarget as HTMLAnchorElement;
    const url = link.getAttribute("data-url");

    // Si es el enlace de inicio ("/")
    if (url === "/") {
        e.preventDefault(); // Prevenir la recarga
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll suave al top

        // Actualizar la URL sin recargar (opcional)
        window.history.pushState({}, "", "/");

        // Forzar la actualización de los enlaces activos
        updateActiveLink();
    }
}

links.forEach(link => {
    link.addEventListener("click", handleLinkClick);
});

function updateActiveLink() {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;

    links.forEach((link) => {
        const url = link.getAttribute("data-url");
        const span = link.querySelector("span");

        if (!url) return;

        // Para enlaces que son hashes (empiezan con #)
        if (url && url.startsWith("#")) {
            if (currentHash === url) {
                if (!LINK_URLS.includes(url)) {
                    link.classList.add("text-yellow-400");
                }
                if (span?.classList.contains("scale-x-0")) {
                    span?.classList.remove("scale-x-0");
                    span?.classList.add("scale-x-100");
                }
            } else {
                if (!LINK_URLS.includes(url)) {
                    link.classList.remove("text-yellow-400");
                }
                if (span?.classList.contains("scale-x-100")) {
                    span?.classList.remove("scale-x-100");
                    span?.classList.add("scale-x-0");
                }
            }

        }
        // Para enlaces que son rutas (como "/")
        else if (url === "/" && currentPath === "/" && !currentHash) {
            // link.classList.add("text-yellow-400");
            if (span?.classList.contains("scale-x-0")) {
                span?.classList.remove("scale-x-0");
                span?.classList.add("scale-x-100");
            }

        } else {
            // link.classList.remove("text-yellow-400");
            if (span?.classList.contains("scale-x-100")) {
                span?.classList.remove("scale-x-100");
                span?.classList.add("scale-x-0");
            }
        }
    });
}

// Detectar cambios en el hash
window.addEventListener("hashchange", updateActiveLink);
window.addEventListener("popstate", updateActiveLink);

// También ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateActiveLink();

    const menuDropdown = document.getElementById("submenu-dropdown") as HTMLDivElement;
    const buttonMenu = document.getElementById("button-submenu") as HTMLButtonElement;

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

