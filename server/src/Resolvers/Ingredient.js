import cocktailData from "../data/cocktailData.js";

const IngredientResolver = {
  Query: {
    Ingredients: () => cocktailData.ingredients_data,
    Ingredient: (_, { IngredientName }) => {
      const category = cocktailData.ingredients_data.find(ingredients => ingredients.name === IngredientName)
      const drinks = cocktailData.drinks.filter(drink => drink.ingredients.some(ingredient => ingredient[0] == IngredientName))
      return {
        name: category.name,
        drinks
      }
    },
  },
};

export default IngredientResolver;