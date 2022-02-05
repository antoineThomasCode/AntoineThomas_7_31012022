import recipiceFactory from '../factories/recipiceFactory'
import recipes from '../data/recipes';
import filterbySearchBar from '../utils/searchBarFilter';
///////////////
// DOM elements 
const searchBar = document.getElementById('search-bar')
const containerIngredients = document.getElementById('container-ingredients')
const containerAppliances = document.getElementById('container-appliances')
const containerUstensils = document.getElementById('container-ustensils')
const recipeContainer = document.getElementById('container-recipices')
// LISTENERS
// listen input's search Bar 
searchBar.addEventListener("input", function(){
    clearDom()
    initHomepage()
})
// ARRAYS 
let recipesFiltered = recipes
const ingredients = []
const appliances = []
const ustensils = []
// FUNCTIONS USED TO GENERATE ELEMENTS
// clear recipeCards in DOM
function clearDom(){
   
    recipeContainer.innerHTML = ''
}
function clearFilters(){
    containerIngredients.innerHTML = ""
    containerAppliances.innerHTML = ""
    containerUstensils.innerHTML = ""
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
        recipesFiltered = filterbySearchBar(recipes)
        // --> DSIPLAY RECIPES WHICH MATCH WITH FUNCTION FILTER -- SEARCHBAR
        diplayRecipes(recipesFiltered)
        
    }
}

export { initHomepage, searchBar }
