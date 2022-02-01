import recipiceFactory from '../factories/recipiceFactory'
import recipes from '../data/recipes';

const arrayfiltered = recipes

function diplayRecipices(recipices) {

    const recipicesContainer = document.getElementById('container-recipices')

    recipes.forEach(recipe => {
        const recipeModel =  recipiceFactory(recipe)
        const recipeCard = recipeModel.getRecipeCard()
        recipicesContainer.appendChild(recipeCard)
    });
}


 function initHomepage(){
        diplayRecipices(arrayfiltered)
    }

export default initHomepage
