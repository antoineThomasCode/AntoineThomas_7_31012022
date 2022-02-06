import { appliances, appliancesList, ingredientsList, ustensilsList  } from "../pages/homepage";
function recipiceFactory(data) {
    const {id, name, servings, ingredients, time, description, appliance, ustensils} = data; 

    function getRecipeCard() {
        
        /* ---> HTML pattern for tge card
        <article>
            <figure>
              <img src="" alt="">
            </figure>
            <div>
              <div>
                <h3>**TITLE**</h3>
                <span><i class="far fa-clock"></i>**TIME**</span>
              </div>
              <div>
                <ul>
                  <li><span></span></li> --> foreach(ingredients)
                  ++
                </ul>
                <p>**DESCRIPTION**</p>
              </div>
            </div>
          </article>
        */
       // element we need to create recipe card 
        const article = document.createElement('article')
        article.className = 'recipeCard'
        const figure = document.createElement('figure')
        const img = document.createElement('img')
        img.src = 'assets/img/recipesImg/tartiflette.jpg'
        const informationsContainer = document.createElement('div')
        const nameTimeContainer = document.createElement('div')
        const h3 = document.createElement('h3')
        h3.textContent = name
        const timeToPrepare = document.createElement('span')
        timeToPrepare.innerHTML = `<i class="far fa-clock"></i> ${time} min`
        const infosToPrepareContainer = document.createElement('div')
        const ul = document.createElement('ul')
        //create list for each ingredient in ingredients 
        ingredients.forEach(ingredient => {
            const li = document.createElement('li')
            let unit = ''
            if (ingredient.unit) {
                 unit = ingredient.unit
            } 
            li.innerHTML = `<span class="fw-bold">${ingredient.ingredient}</span> : ${ingredient.quantity} ${unit}`
            ul.appendChild(li)
        })
        const p = document.createElement('p')
        p.textContent = description.substr(0, 200) + '...'
        // add elements in DOM 
        nameTimeContainer.append(h3, timeToPrepare)
        infosToPrepareContainer.append(ul, p)
        informationsContainer.append(nameTimeContainer ,infosToPrepareContainer)
        figure.appendChild(img)
        article.append(figure, informationsContainer)
        // push values in filters Arrays 
        if (appliancesList.indexOf(appliance) === -1) {
          appliancesList.push(appliance)
        }
        ustensils.forEach(ustensil => {
          if (ustensilsList.indexOf(ustensil) === -1){
            ustensilsList.push(ustensil)
          }
        })
        ingredients.forEach(ingredientSelect => {
          if (ingredientsList.indexOf(ingredientSelect.ingredient) === -1) {
            ingredientsList.push(ingredientSelect.ingredient)
          }
        })
        
        return article 
    }

    return {getRecipeCard}
}
export default recipiceFactory
