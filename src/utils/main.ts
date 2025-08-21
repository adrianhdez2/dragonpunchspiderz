import { LINK_NAV } from "./constants";

const LINK_URLS = LINK_NAV.map(item => item.url);

const links = document.querySelectorAll<HTMLAnchorElement>("a[data-url]");

function handleLinkClick(e: Event) {
    const link = e.currentTarget as HTMLAnchorElement;
    const url = link.getAttribute("data-url");

    if (url === "/") { // Si es el enlace de inicio ("/")
        e.preventDefault(); // Prevenir la recarga
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll suave al top

        window.history.pushState({}, "", "/"); // Actualizar la URL sin recargar (opcional)

        updateActiveLink(); // Forzar la actualización de los enlaces activos
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

        // Para enlaces que empiezan con #
        if (url && url.startsWith("#")) {
            if (currentHash === url) {
                if (!LINK_URLS.includes(url)) {
                    link.classList.add("text-yellow-400");
                }
                if (span?.classList.contains("scale-x-0")) {
                    setActiveLink(span);
                }
            } else {
                if (!LINK_URLS.includes(url)) {
                    link.classList.remove("text-yellow-400");
                }
                if (span?.classList.contains("scale-x-100")) {
                    setInactiveLink(span);
                }
            }
        } else if (url === "/" && currentPath === "/" && !currentHash) { // Para enlaces que son rutas (como "/")
            if (span?.classList.contains("scale-x-0")) {
                setActiveLink(span);
            }

        } else { // Para enlaces que no son hashes
            if (span?.classList.contains("scale-x-100")) {
                setInactiveLink(span);
            }
        }
    });

    function setActiveLink(span: HTMLSpanElement) {
        span?.classList.remove("scale-x-0");
        span?.classList.add("scale-x-100");
    }

    function setInactiveLink(span: HTMLSpanElement) {
        span?.classList.remove("scale-x-100");
        span?.classList.add("scale-x-0");
    }
}

// Detectar cambios en el hash
window.addEventListener("hashchange", updateActiveLink);
window.addEventListener("popstate", updateActiveLink);

// También ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateActiveLink();

    const menuDropdown = document.getElementById("submenu-dropdown") as HTMLDivElement;
    const buttonMenu = document.getElementById("button-submenu") as HTMLButtonElement;
    const iconChevron = buttonMenu?.querySelector("svg") as SVGElement;

    buttonMenu?.addEventListener("mouseenter", (event) => {
        event.stopPropagation();
        if (menuDropdown.classList.contains("hidden")) return showMenuDropdown();
        if (menuDropdown.classList.contains("flex")) return hiddenMenuDropdown();
    });

    menuDropdown?.addEventListener("mouseenter", showMenuDropdown);
    menuDropdown?.addEventListener("mouseleave", hiddenMenuDropdown);

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        menuDropdown?.addEventListener("click", hiddenMenuDropdown);
    }
    

    function hiddenMenuDropdown() {
        menuDropdown.classList.remove("flex");
        menuDropdown.classList.add("hidden");
        iconChevron.style.rotate = "0deg";
    }

    function showMenuDropdown() {
        menuDropdown.classList.remove("hidden");
        menuDropdown.classList.add("flex");
        iconChevron.style.rotate = "180deg";
    }
});