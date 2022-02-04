import recipiceFactory from '../factories/recipiceFactory'
import recipes from '../data/recipes';
import filterbySearchBar from '../utils/searchBarFilter';
///////////////
// DOM elements 

const searchBar = document.getElementById('search-bar')
// LISTENERS
// listen input's search Bar 
searchBar.addEventListener("input", function(){
    clearDom()
    initHomepage()
})
// FUNCTIONS USED TO GENERATE ELEMENTS
// clear recipeCards in DOM
function clearDom(){
    const recipeContainer = document.getElementById('container-recipices')
    recipeContainer.innerHTML = ''
}

// create recipeCards in DOM (find model in ../RecipeFactory)
function diplayRecipes(arrayToDisplay) {
    const recipicesContainer = document.getElementById('container-recipices')
    arrayToDisplay.forEach(item => {
        const recipeModel =  recipiceFactory(item)
        const recipeCard = recipeModel.getRecipeCard()
        recipicesContainer.appendChild(recipeCard)
    });
}
///////////////////////////////////////
// INIT HOMEPAGE --> called in index.js
 function initHomepage(){
    if (searchBar.value.length < 3) {
        clearDom()
        diplayRecipes(recipes)
    } else {
        // --> RECIPICES WHICH MATCH WITH FUNCTION FILTER -- SEARCHBAR
        diplayRecipes(filterbySearchBar(recipes))
        
    }
}

export { initHomepage, searchBar }
