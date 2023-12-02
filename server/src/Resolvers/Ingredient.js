import cocktailData from "../data/cocktailData.js";

const IngredientResolver = {
  Query: {
    Ingredients: () => cocktailData.ingredients_data,
  },
};

export default IngredientResolver;