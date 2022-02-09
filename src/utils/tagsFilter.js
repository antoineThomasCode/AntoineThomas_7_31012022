import { recipes, activesTag } from "../pages/homepage";

function filterByTags (array) {
    const filteredArray = []
    
    array.forEach(element => { 
        activesTag.forEach(tag => {
            if ( element.name.toLowerCase().includes(tag.toLowerCase()) ||
                 element.description.toLowerCase().includes(tag.toLowerCase()) ||
                 element.ingredients.includes((ingredient) => ingredient.ingredient.toLowerCase().includes(tag.toLowerCase()))){
                filteredArray.push(element)
            }
        })
    });
    return filteredArray
}   
export default filterByTags