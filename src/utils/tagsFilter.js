import { recipes, activesTag } from "../pages/homepage";

function filterByTags (array) {
    const filteredArray = []
    
    array.forEach(element => { 
        activesTag.forEach(tag => {
            if ( element.name.toLowerCase().includes(tag.toLowerCase()) ||
                 element.description.toLowerCase().includes(tag.toLowerCase()) ||
                 element.ingredients.includes((ingredient) => ingredient.ingredients.toLowerCase().includes(tag.toLowerCase())) ||
                 element.ustensils.includes((usten) => usten.ustensils.toLowerCase().includes(tag.toLowerCase())) ||
                element.appliance.includes(tag.toLowerCase())){
                filteredArray.push(element)
            }
        })
    });
    return filteredArray
}   
export default filterByTags