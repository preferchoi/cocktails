import cocktailData from "../data/cocktailData.js";

const GlassResolver = {
  Query: {
    Glasses: () => cocktailData.glass_data,
    Glass: (_, { GlassName }) => {
      const glass = cocktailData.glass_data.find(glass => glass.name === GlassName)
      const drinks = cocktailData.drinks.filter(drink => drink.glass == GlassName)
      return {
        name: glass.name,
        drinks
      }
    },
  },
};

export default GlassResolver;