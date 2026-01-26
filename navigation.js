// navigation.js - Keyboard/Remote Navigation Logic

let currentFocusIndex = 0;
let navigationItems = [];

function refreshNavigationItems() {
    navigationItems = Array.from(document.querySelectorAll('.icon-item, .app-icon'));
}

function updateVisualFocus() {
    navigationItems.forEach(item => {
        item.style.outline = "none";
        item.style.transform = "scale(1)";
        item.style.boxShadow = "none";
    });

    const activeItem = navigationItems[currentFocusIndex];
    if (activeItem) {
        activeItem.style.outline = "5px solid white";
        activeItem.style.transform = "scale(1.1)";
        activeItem.style.zIndex = "100";
        activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });

        activeItem.dispatchEvent(new Event('mouseover'));
    }
}

document.addEventListener('keydown', (e) => {
    refreshNavigationItems();

    if (navigationItems.length === 0) return;

    const rowItems = 5;

    switch (e.key) {
        case "ArrowRight":
            if (currentFocusIndex < navigationItems.length - 1) {
                currentFocusIndex++;
            }
            break;
        case "ArrowLeft":
            if (currentFocusIndex > 0) {
                currentFocusIndex--;
            }
            break;
        case "ArrowDown":
            if (currentFocusIndex + rowItems < navigationItems.length) {
                currentFocusIndex += rowItems;
            } else if (currentFocusIndex < navigationItems.length - 1) {
                currentFocusIndex = navigationItems.length - 1;
            }
            break;
        case "ArrowUp":
            if (currentFocusIndex - rowItems >= 0) {
                currentFocusIndex -= rowItems;
            }
            break;
        case "Enter":
            if (navigationItems[currentFocusIndex]) {
                navigationItems[currentFocusIndex].click();
            }
            break;
    }

    updateVisualFocus();
});

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        refreshNavigationItems();
        updateVisualFocus();
    }, 1000);
});


