import cocktailData from "../data/cocktailData.js";

const IngredientResolver = {
  Query: {
    Ingredients: () => cocktailData.ingredients_data,
    Ingredient: (_, { IngredientName }) => {
      const Ingredient = cocktailData.ingredients_data.find(ingredients => ingredients.name === IngredientName)
      const Drinks = cocktailData.drinks.filter(drink => drink.ingredients.some(ingredient => ingredient[0] == IngredientName))
      return { Ingredient, Drinks }
    }
  },
};

export default IngredientResolver;