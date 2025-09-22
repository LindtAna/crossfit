//Burger-Button in der mobilen Version der Website
//öffnet und schließt das Menü durch Umschalten von CSS-Klassen und aktualisiert relevante Attribute für Barrierefreiheit.


document.addEventListener('DOMContentLoaded', () => {
    //sucht DOM-Elemente für den Burger-Button, das Menü und den Close-Button
    const burgerButton = document.querySelector('.header-burger-button');
    const headerMenu = document.querySelector('.header-menu');
    const closeButton = document.querySelector('.header-close-button');


    function updateBurgerAccessibility(isOpen) {
        burgerButton.setAttribute('aria-expanded', isOpen);
        //isOpen{boolean} - Gibt an, ob das Menü geöffnet ist
        burgerButton.setAttribute('title', isOpen ? 'Close menu' : 'Open menu');
        const visuallyHidden = burgerButton.querySelector('.visually-hidden');
        if (visuallyHidden) {
            visuallyHidden.textContent = isOpen ? 'Close menu' : 'Open menu';
        }
    }

    // Prüft, ob die benötigten Elemente vorhanden sind und fügt Event-Listener hinzu(Menu wird geöffnet)
    if (burgerButton && headerMenu) {
        burgerButton.addEventListener('click', () => {
            const isOpen = headerMenu.classList.toggle('is-open');
            burgerButton.classList.toggle('is-active', isOpen);
            document.body.classList.toggle('no-scroll', isOpen);
            updateBurgerAccessibility(isOpen);
        });
    }

// Prüft, ob der Schließen-Button vorhanden ist und fügt Event-Listener hinzu(Menu wird geschlossen)
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            headerMenu.classList.remove('is-open');
            burgerButton.classList.remove('is-active');
            document.body.classList.remove('no-scroll');
            updateBurgerAccessibility(false);
        });
    }
});