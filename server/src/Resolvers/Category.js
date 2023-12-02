import cocktailData from "../data/cocktailData.js";

const CategoryResolver = {
  Query: {
    Categories: () => cocktailData.category_data,
  },
};

export default CategoryResolver;