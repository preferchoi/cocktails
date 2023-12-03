import DrinkResolver from "./Drink.js";
import GlassResolver from "./Glass.js";
import CategoryResolver from "./Category.js";
import IngredientResolver from "./Ingredient.js";
import IngredientCategoryResolver from "./IngredientCategory.js";


const resolvers = {
  Query: {
    ...DrinkResolver.Query,
    ...GlassResolver.Query,
    ...CategoryResolver.Query,
    ...IngredientResolver.Query,
    ...IngredientCategoryResolver.Query
  }
}

export default resolvers;