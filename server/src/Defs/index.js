import { gql } from 'apollo-server-express';
import Drink from "./Drink.js";
import Category from "./Category.js";
import Glass from "./Glass.js";
import Ingredient from "./Ingredient.js";

const Query = gql`
  type Query {
    Drinks(CategoryName: String, GlassName: String, IngredientName:String, limit: Int, cursor: Int):DrinksResponse
    Categories:[Category]
    Glasses:[Glass]
    Ingredients:[Ingredient]
    
    Drink(DrinkName: String!): Drink
    Category(CategoryName: String!):Category
    Glass(GlassName: String!):Glass
    Ingredient(IngredientName: String!):Ingredient
  }

  type DrinksResponse {
    cursor:Int
    Drinks:[Drink]
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