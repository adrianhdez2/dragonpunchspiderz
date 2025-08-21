document.addEventListener("DOMContentLoaded", () => {
    const buttonMenuIcon = document.getElementById("button-menu") as HTMLButtonElement;
    const menu = document.getElementById("menu") as HTMLUListElement;
    const heroBgMenu = document.getElementById("hero-bg-menu") as unknown as SVGElement;
    const menuDropdown = document.getElementById("submenu-dropdown") as HTMLDivElement;
    const iconChevron = document.querySelector("#button-submenu svg") as SVGElement;

    const menuIcon = ' <svg class="md:hidden size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-right-icon lucide-align-right"><path d="M21 12H9"/><path d="M21 18H7"/><path d="M21 6H3"/></svg>';
    const closeIcon = '<svg class="md:hidden size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'

    buttonMenuIcon.innerHTML = menuIcon;

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        const links = document.querySelectorAll<HTMLAnchorElement>("a[data-url]");
        console.log(links);
        
        links.forEach(link => {
            link.addEventListener("click", (event) => {
                if(heroBgMenu.classList.contains("flex")) {
                    hide(heroBgMenu);
                    buttonMenuIcon.innerHTML = menuIcon;
                }

                if (menu.classList.contains("flex")) {
                    hide(menu);
                    iconChevron.style.rotate = "0deg";
                    return;
                }
            });
        });
    }

    buttonMenuIcon.addEventListener("click", () => {
        if (heroBgMenu.classList.contains("hidden")) {
            show(heroBgMenu);
            buttonMenuIcon.innerHTML = closeIcon;
        } else {
            hide(heroBgMenu);
            buttonMenuIcon.innerHTML = menuIcon;
        }

        if (menu.classList.contains("hidden")) {
            show(menu);
            hide(menuDropdown);
            return;
        }

        if (menu.classList.contains("flex")) {
            hide(menu);
            iconChevron.style.rotate = "0deg";
            return;
        }
    });

    function hide(element: HTMLUListElement | HTMLDivElement | SVGElement) {
        element.classList.remove("flex");
        element.classList.add("hidden");
    }

    function show(element: HTMLUListElement | HTMLDivElement | SVGElement) {
        element.classList.remove("hidden");
        element.classList.add("flex");
    }
})