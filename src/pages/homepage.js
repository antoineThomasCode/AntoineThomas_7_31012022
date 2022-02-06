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
const inputIngredientFilter = document.getElementById('ingredient-input')
const inputApplianceFilter = document.getElementById('appliance-input')
const inputUstensilFilter = document.getElementById('ustensil-input')
// LISTENERS
// listen input's search Bar 
searchBar.addEventListener("input", function(){
    initHomepage()
})
// ARRAYS 
let recipesFiltered = recipes
let ingredientsList = []
let appliancesList = []
let ustensilsList = []
// listen input ingredients 
inputIngredientFilter.addEventListener('input', function(){
    if (inputIngredientFilter.value.length >= 3) {
        containerIngredients.innerHTML = ""
    }
    else {
        initHomepage()
    }
})
// Listen input appliance
inputApplianceFilter.addEventListener('input', function(){
    if (inputApplianceFilter.value.length >= 3) {
        containerAppliances.innerHTML = ""
        
        
    }
    else {
        initHomepage()
    }
})
// Listen input ustensil
inputUstensilFilter.addEventListener('input', function(){
    if (inputUstensilFilter.value.length >= 3) {
        containerUstensils.innerHTML = ""
    }
    else {
        initHomepage()
    }
})
// FUNCTIONS USED TO GENERATE ELEMENTS
// clear recipeCards in DOM
function clearCards(){
    recipeContainer.innerHTML = ''
}
function clearFilters(){
    appliancesList = []
    ingredientsList = []
    ustensilsList = []
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
//create filters width Lists 
function createFilters () {
    appliancesList.forEach(appliance => {
        const li = document.createElement('li')
        li.innerHTML = appliance
        containerAppliances.appendChild(li)
    })
    ingredientsList.forEach(ingredient => {
        const li = document.createElement('li')
        li.innerHTML = ingredient
        containerIngredients.appendChild(li)
    })
    ustensilsList.forEach(ustensil => {
        const li = document.createElement('li')
        li.innerHTML = ustensil
        containerUstensils.appendChild(li)
    })
}
///////////////////////////////////////
// INIT HOMEPAGE --> called in index.js
function initHomepage(){
   
    if (searchBar.value.length < 3) {
        clearCards()
        clearFilters()
        diplayRecipes(recipes)
        createFilters()
    } else {
        recipesFiltered = filterbySearchBar(recipes)
        clearFilters()
        clearCards()
        // --> DSIPLAY RECIPES WHICH MATCH WITH FUNCTION FILTER -- SEARCHBAR
        diplayRecipes(recipesFiltered)
        createFilters()
        
    }
}

export { initHomepage, searchBar, appliancesList, ingredientsList, ustensilsList }
