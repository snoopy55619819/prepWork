// Nikhil Tallapureddy
// Question:
/*
 We need to complete a function called chooseRecipe(), which will receive three parameters: 
 - An array of ingredients in stock at Bakery A 
 - An array of ingredients in stock at Bakery B 
 - An array of recipe objects. 
 Each recipe has a name property(string) and an ingredient property(array)

 We are limiting our search to two ingredient recipes. 
 We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.
 Our chooseRecipe() function should return the name of the correct recipe.
*/

//Checks in any receipe ingredient is in the bakery ingredients. 
const ingredientCheck = function (bakery ,recipe) {
  for (let i = 0; i < recipe.length; i++) {
    if (bakery.indexOf(recipe[i]) !== -1) {
      return true;
    }
  }
  return false;
}
//console.log(ingredientCheck(['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'], ['apples', 'tomato', 'coconut'])); 
//Output: true

//Check if both bakeries contain an ingredient of a receipe and return the name of that receipe.
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let i = 0; i < recipes.length; i++) {
    if (ingredientCheck(bakeryA, recipes[i].ingredients) && ingredientCheck(bakeryB, recipes[i].ingredients)) {
      return recipes[i].name;
    }
  }
}


//Tests:
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); //Output: Persian Cheesecake

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); //Output: Nima's Famous Dijon Raisins
