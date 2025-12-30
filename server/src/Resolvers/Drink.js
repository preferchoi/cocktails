import cocktailData from "../data/cocktailData.js";

const DrinkResolver = {
  Query: {
    Drinks: (_, { CategoryName, GlassName, IngredientName, limit = 6, cursor}) => {
      let drinks = cocktailData.drinks

      if (cursor == null) {
        return { cursor, Drinks: [] }
      }

      if (CategoryName) {
        drinks = drinks.filter(drink => drink.category == CategoryName)
      }
      if (GlassName) {
        drinks = drinks.filter(drink => drink.glass == GlassName)
      }
      if (IngredientName) {
        drinks = drinks.filter(drink => drink.ingredients.some(ingredient => ingredient[0] == IngredientName))
      }

      const startIndex = cursor * limit;
      const nextCursor = (startIndex + limit) < drinks.length ? cursor + 1 : null
      const paginatedDrinks = drinks.slice(startIndex, startIndex + limit);
      
      return { cursor: nextCursor, Drinks: paginatedDrinks }

    },
    Drink: (_, { DrinkName }) => cocktailData.drinks.find(drink => drink.name === DrinkName),
  },
};

export default DrinkResolver;
