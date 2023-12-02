import cocktailData from "../data/cocktailData.js";

const CategoryResolver = {
  Query: {
    Categories: () => cocktailData.category_data,
    Category: (_, { CategoryName }) => category = cocktailData.category_data.find(category => category.name === CategoryName)
  },
};

export default CategoryResolver;