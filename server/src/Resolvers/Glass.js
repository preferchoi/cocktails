import cocktailData from "../data/cocktailData.js";

const GlassResolver = {
  Query: {
    Glasses: () => cocktailData.glass_data,
    Glass: (_, { GlassName }) => cocktailData.glass_data.find(glass => glass.name === GlassName),
  },
};

export default GlassResolver;