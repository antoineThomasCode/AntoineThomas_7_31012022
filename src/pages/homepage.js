import recipiceFactory from '../factories/recipiceFactory'
import recipes from '../data/recipes';
import filterbySearchBar from '../utils/searchBarFilter';
import filterByTags from '../utils/tagsFilter';
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
const tagContainer = document.getElementById('tagContainer')
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
let activesTag = []
// envent listener for advanced inputs filters function 
function inputFiltersEvent  (input, array, container) {
    if (input.value.length >= 3) {
        const newFilterArray = array.filter(item =>  item.toLowerCase().includes(input.value.toLowerCase()))
        container.innerHTML = ""
        createFilters(newFilterArray, container)
        
    }
    else {
        createFilters(array, container)
    }
}

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
const createFilters = (array, container) => {
    container.innerHTML = ""
    array.forEach(item => {
        const li = document.createElement('li')
        li.innerHTML = `${item} <i class="fa-solid fa-x"></i>`
        li.addEventListener('click', function() {
            if(activesTag.indexOf(item) === -1) {
                const tag = document.createElement('span')
                const close = document.createElement('i')
                close.className = 'fa-solid fa-circle-x'
                activesTag.push(item)
        
                tag.innerHTML = `${item}`
                tag.addEventListener('click', function() {
                    activesTag = activesTag.filter(function(f) { return f !== item })
                    tagContainer.removeChild(tag)
                    initHomepage()
                })
                tag.appendChild(close)
                tagContainer.appendChild(tag)
                initHomepage()
                }
        })
        container.appendChild(li)
    })
    if (array.length === 0) {
        const errorMessage = document.createElement('li')
        errorMessage.className = 'errorMessage'
        errorMessage.innerHTML = "Aucun Résultat"
        container.appendChild(errorMessage)
    }
} 
// add envent lister on 3 filters inputs
inputApplianceFilter.addEventListener('input', function(){
    inputFiltersEvent(inputApplianceFilter, appliancesList, containerAppliances)
})
inputIngredientFilter.addEventListener('input', function(){
    inputFiltersEvent(inputIngredientFilter, ingredientsList, containerIngredients)
})
inputUstensilFilter.addEventListener('input', function(){
    inputFiltersEvent(inputUstensilFilter, ustensilsList, containerUstensils)
})

///////////////////////////////////////
// INIT HOMEPAGE --> called in index.js
function initHomepage(){
   
    if (searchBar.value.length < 3) {
        clearCards()
        clearFilters()
        if (activesTag.length > 0) {
            diplayRecipes(filterByTags(recipes))
        } else {
            diplayRecipes(recipes)
        }
        createFilters(appliancesList, containerAppliances)
        createFilters(ingredientsList, containerIngredients)
        createFilters(ustensilsList, containerUstensils)
    } else {
        recipesFiltered = filterbySearchBar(recipes)
        if (activesTag.length > 0) {
            recipesFiltered = filterByTags(recipesFiltered)
        }
        clearFilters()
        clearCards()
        // --> DSIPLAY RECIPES WHICH MATCH WITH FUNCTION FILTER -- SEARCHBAR
        diplayRecipes(recipesFiltered)
        createFilters(appliancesList, containerAppliances)
        createFilters(ingredientsList, containerIngredients)
        createFilters(ustensilsList, containerUstensils)
    }
}

export { initHomepage, searchBar, appliancesList, ingredientsList, ustensilsList, activesTag }
