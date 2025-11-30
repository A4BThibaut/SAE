// Récupération des éléments
const menuBtn = document.getElementById('openMenu');
const navSidebar = document.getElementById('navSidebar');

// Fonction pour toggle (ouvrir/fermer) le menu
function toggleMenu() {
    navSidebar.classList.toggle('active');
}

// Événement sur le bouton
menuBtn.addEventListener('click', toggleMenu);