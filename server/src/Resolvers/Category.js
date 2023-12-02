import cocktailData from "../data/cocktailData.js";

const CategoryResolver = {
  Query: {
    Categories: () => cocktailData.category_data,
    Category: (_, { CategoryName }) => {
      const category = cocktailData.category_data.find(category => category.name === CategoryName)
      const drinks = cocktailData.drinks.filter(drink => drink.category == CategoryName)
      return {
        name: category.name,
        drinks
      }
    }
  },
};

export default CategoryResolver;