document.addEventListener("DOMContentLoaded", () => {
    const buttonMenuIcon = document.getElementById("button-menu") as HTMLButtonElement;
    const menu = document.getElementById("menu") as HTMLUListElement;
    const heroBgMenu = document.getElementById("hero-bg-menu") as unknown as SVGElement;

    
    
    const menuIcon = ' <svg class="md:hidden size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-right-icon lucide-align-right"><path d="M21 12H9"/><path d="M21 18H7"/><path d="M21 6H3"/></svg>';
    const closeIcon = '<svg class="md:hidden size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'

    buttonMenuIcon.innerHTML = menuIcon;



    buttonMenuIcon.addEventListener("click", () => {
        if (heroBgMenu.classList.contains("hidden")) {
            heroBgMenu.classList.remove("hidden");
            heroBgMenu.classList.add("flex");
            buttonMenuIcon.innerHTML = closeIcon;
        } else {
            heroBgMenu.classList.remove("flex");
            heroBgMenu.classList.add("hidden");
            buttonMenuIcon.innerHTML = menuIcon;
        }

        if (menu.classList.contains("hidden")) {
            menu.classList.remove("hidden");
            menu.classList.add("flex");
            return;
        }

        if (menu.classList.contains("flex")) {
            menu.classList.remove("flex");
            menu.classList.add("hidden");
            return;
        }
    });
})