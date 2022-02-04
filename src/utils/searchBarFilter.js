import recipes from "../data/recipes";
import { searchBar } from "../pages/homepage";

function filterbySearchBar(recipes) {
    const filteredArray = []
    
    for (let i = recipes.length; i > 0; i--) {
        let containsName = false
        let containsDescription = false 
        let containsIngredients = false 
        if (recipes[i]?.name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            
            containsName = true 
        }
        if (recipes[i]?.description.toLowerCase().includes(searchBar.value.toLowerCase())) {
            containsDescription = true 
        }
        for (let y = 0; y < recipes[i]?.ingredients[y]?.ingredient.length; y++) {
            if (recipes[i].ingredients[y]?.ingredient?.toLowerCase().includes(searchBar.value.toLowerCase())){
              containsIngredients = true;
            }
          }
        if (containsName || containsDescription || containsIngredients){
            filteredArray.push(recipes[i])
        }
    }
    return filteredArray
}
export default filterbySearchBar