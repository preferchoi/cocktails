import { gql } from 'apollo-server-express';
import Drink from "./Drink.js";
import Category from "./Category.js";
import Glass from "./Glass.js";
import Ingredient from "./Ingredient.js";
import IngredientCategory from "./IngredientCategory.js";
import User from "./User.js";

const Query = gql`
  type Query {
    Drinks(CategoryName: String, GlassName: String, IngredientName:String, limit: Int, cursor: Int):DrinksResponse
    Categories:[Category]
    Glasses:[Glass]
    Ingredients:[Ingredient]
    IngredientCategories:[IngredientCategory]
    
    Drink(DrinkName: String!): Drink
    Category(CategoryName: String!):Category
    Glass(GlassName: String!):Glass
    Ingredient(IngredientName: String!):IngredientResponse
    IngredientCategory(IngredientCategoryName: String!):IngredientCategoryResponse

    Me:User
  }

  type Mutation {
    SignUp(input: SignUpInput!):User
    LogIn(input: LoginInput!):LogInResponse
    RefreshAccessToken:AccessTokenResponse
    LogOut:Boolean
  }

  type AccessTokenResponse {
    accessToken:String
    errors:[Error]
  }

  type LogInResponse {
    accessToken:String
    user:User
    errors:[Error]
  }

  type Error {
    field:String
    message:String
  }

  type DrinksResponse {
    cursor:Int
    Drinks:[Drink]
  }

  type IngredientResponse {
    Ingredient: Ingredient
    Drinks:[Drink]
  }

  type IngredientCategoryResponse {
    IngredientCategory:IngredientCategory
    Ingredients: [Ingredient]
  }
`
const typeDefs = [
  Query,
  Drink,
  Category,
  Glass,
  Ingredient,
  IngredientCategory,
  User
]

export default typeDefs;