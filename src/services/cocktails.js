import axios from 'axios';

const instance = axios.create({ baseURL: 'https://www.thecocktaildb.com/api/json/v1/1' });

// Service to find all cocktails from the API
const findAllCocktails = async () => {
  const result = await instance.get(`/filter.php?a=Alcoholic`);
  let cocktails = result.data.drinks;
  return cocktails;
};

// Service to find one specific cocktail by its ID
const findOneCocktail = async (id) => {
  const result = await instance.get(`/lookup.php?i=${id}`);
  const cocktail = result.data.drinks[0];
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const eachIngredient = cocktail['strIngredient' + i];
    if (eachIngredient) {
      ingredients.push(eachIngredient);
    }
  }
  return { cocktail, ingredients };
};

// Service to get a random ingredient
const findRandomCocktail = async () => {
  const result = await instance.get('/random.php');
  const cocktail = result.data.drinks[0];
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const eachIngredient = cocktail['strIngredient' + i];
    if (eachIngredient) {
      ingredients.push(eachIngredient);
    }
  }
  return { cocktail, ingredients };
};

export { findAllCocktails, findOneCocktail, findRandomCocktail };
