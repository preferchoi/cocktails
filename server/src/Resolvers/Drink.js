import cocktailData from "../data/cocktailData.js";

const DrinkResolver = {
  Query: {
    Drinks: () => cocktailData.drinks,
    Drink: (_, { DrinkName }) => cocktailData.drinks.find(drink => drink.name === DrinkName),
  },
};

export default DrinkResolver;