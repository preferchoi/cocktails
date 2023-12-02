import { gql } from 'apollo-server-express';
import Drink from "./Drink.js";
import Category from "./Category.js";
import Glass from "./Glass.js";
import Ingredient from "./Ingredient.js";

const Query = gql`
  type Query {
    Drinks(CategoryName: String, GlassName: String, IngredientName:String):[Drink]
    Categories:[Category]
    Glasses:[Glass]
    Ingredients:[Ingredient]
    
    Drink(DrinkName: String!): Drink
  }
`
const typeDefs = [
  Query,
  Drink,
  Category,
  Glass,
  Ingredient,
]

export default typeDefs;