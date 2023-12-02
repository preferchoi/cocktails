import cocktailData from "../data/cocktailData.js";

const DrinkResolver = {
  Query: {
    Drinks: (_, { CategoryName, GlassName, IngredientName }) => {
      if (CategoryName) {
        return cocktailData.drinks.filter(drink => drink.category == CategoryName)
      } else if (GlassName) {
        return cocktailData.drinks.filter(drink => drink.glass == GlassName)
      } else if (IngredientName) {
        return cocktailData.drinks.filter(drink => drink.ingredients.some(ingredient => ingredient[0] == IngredientName))
      } else {
        return cocktailData.drinks
      }
    },
    Drink: (_, { DrinkName }) => cocktailData.drinks.find(drink => drink.name === DrinkName),
  },
};

export default DrinkResolver;