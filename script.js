function showSection(sectionId){
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display='none');
    document.getElementById(sectionId).style.display='block';
}
window.onload=function(){ showSection('accueil'); }

function showDetail(element){
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display='none');
    document.getElementById('detailTitle').innerText = element.querySelector('h4 a').innerText;
    document.getElementById('detailImage').src = element.querySelector('img').src;
    document.getElementById('detailImage').alt = element.querySelector('img').alt;
    document.getElementById('detailDescription').innerHTML = element.querySelector('.recipe-full').innerHTML;
    document.getElementById('detailRecette').style.display='block';
}

function backToRecettes(){
    document.getElementById('detailRecette').style.display='none';
    document.getElementById('recettes').style.display='block';
}

function searchRecipe(){
    let input = document.getElementById('searchBar').value.toLowerCase();
    document.querySelectorAll('.recipe').forEach(recipe=>{
        let name=recipe.querySelector('h4 a').innerText.toLowerCase();
        recipe.style.display=name.includes(input)?'inline-block':'none';
    });
}
