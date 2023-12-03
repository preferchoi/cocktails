import cocktailData from "../data/cocktailData.js";

const IngredientCategoryResolver = {
  Query: {
    IngredientCategories: () => cocktailData.ingredient_category,
    IngredientCategory: (_, { IngredientCategoryName }) => {
      const IngredientCategory = cocktailData.ingredient_category.find(category => category.name === IngredientCategoryName)
      const Ingredients = cocktailData.ingredients_data.filter(ingredient => ingredient.category == IngredientCategoryName)
      return { IngredientCategory, Ingredients }
    }
  },
};

export default IngredientCategoryResolver;