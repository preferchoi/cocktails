import cocktailData from "../data/cocktailData.js";

const GlassResolver = {
  Query: {
    Glasses: () => cocktailData.glass_data,
  },
};

export default GlassResolver;