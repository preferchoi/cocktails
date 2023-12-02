import cocktailData from "../data/cocktailData.js";

const DrinkResolver = {
  Query: {
    Drinks: (_, { CategoryName, GlassName, IngredientName }) => {
      console.log(CategoryName, GlassName, IngredientName);
      let drinks = cocktailData.drinks
      if (CategoryName) {
        drinks = drinks.filter(drink => drink.category == CategoryName)
      }
      if (GlassName) {
        drinks = drinks.filter(drink => drink.glass == GlassName)
      }
      if (IngredientName) {
        drinks = drinks.filter(drink => drink.ingredients.some(ingredient => ingredient[0] == IngredientName))
      }
      return drinks
    },
    Drink: (_, { DrinkName }) => cocktailData.drinks.find(drink => drink.name === DrinkName),
  },
};

export default DrinkResolver;