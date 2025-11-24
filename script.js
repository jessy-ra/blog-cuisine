// Fonction pour afficher la section correspondante au clic
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}

// Afficher la section d'accueil par défaut
window.onload = function() {
    showSection('accueil');
};

// ----------------------
// Modal pour les recettes
// ----------------------
function openModal(element) {
    const modal = document.getElementById('recipeModal');
    const title = element.querySelector('h4 a').innerText;
    const description = element.querySelector('.recipe-full').innerHTML;

    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerHTML = description;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('recipeModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('recipeModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
// ------------------------
// Navigation entre sections
// ------------------------
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}

// Afficher la section d'accueil par défaut
window.onload = function() {
    showSection('accueil');
};

// ------------------------
// Barre de recherche des recettes
// ------------------------
function searchRecipe() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const recipes = document.querySelectorAll('#recettes .recipe');

    recipes.forEach(recipe => {
        const title = recipe.querySelector('h4 a').innerText.toLowerCase();
        if (title.includes(input)) {
            recipe.style.display = 'inline-block';
        } else {
            recipe.style.display = 'none';
        }
    });
}

// ------------------------
// Mini-page détail recette
// ------------------------
function showDetail(element) {
    // Masquer toutes les sections
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');

    // Remplir la section détail
    document.getElementById('detailTitle').innerText = element.querySelector('h4 a').innerText;
    document.getElementById('detailImage').src = element.querySelector('img').src;
    document.getElementById('detailImage').alt = element.querySelector('img').alt;
    document.getElementById('detailDescription').innerHTML = element.querySelector('.recipe-full').innerHTML;

    // Afficher la section détail
    document.getElementById('detailRecette').style.display = 'block';
}

// Bouton retour aux recettes
function backToRecettes() {
    document.getElementById('detailRecette').style.display = 'none';
    document.getElementById('recettes').style.display = 'block';
}
