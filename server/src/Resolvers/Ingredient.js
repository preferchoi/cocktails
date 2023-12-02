import cocktailData from "../data/cocktailData.js";

const IngredientResolver = {
  Query: {
    Ingredients: () => cocktailData.ingredients_data,
    Ingredient: (_, { IngredientName }) => cocktailData.ingredients_data.find(ingredients => ingredients.name === IngredientName)
  },
};

export default IngredientResolver;