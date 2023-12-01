import cocktailData from "../data/cocktailData.js";

const IngredientResolver = {
  Query: {
    Ingredients: () => cocktailData.ingredients_data.find(ingredient => ingredient.name === IngredientName),
    Ingredient: (_, { IngredientName }) => cocktailData.ingredients_data.find(ingredient => ingredient.name === IngredientName),
  },
};

export default IngredientResolver;