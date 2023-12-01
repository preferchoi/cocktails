import { gql } from 'apollo-server-express';
import Drink from "./Drink.js";
import Category from "./Category.js";
import Glass from "./Glass.js";
import Ingredient from "./Ingredient.js";

const Query = gql`
  type Query {
    Drinks:[Drink]
    Categories:[Category]
    Glasses:[Glass]
    Ingredients:[Ingredient]
    
    Drink(DrinkName: String!): Drink
    Category(CategoryName: String!):Category
    Glass(GlassName: String!):Glass
    Ingredient(IngredientName: String!):Ingredient
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