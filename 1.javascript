// Fonction pour afficher la section correspondante au clic
function showSection(sectionId) {
    // Masque toutes les sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none'; // Masque chaque section
    });

    // Affiche la section demandée
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}

// Afficher la section d'accueil par défaut lorsque la page charge
window.onload = function() {
    showSection('accueil');
};
