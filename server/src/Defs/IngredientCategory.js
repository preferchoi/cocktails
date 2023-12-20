import { gql } from 'apollo-server-express';

const IngredientCategory = gql`
  type IngredientCategory {
    id:Int
    name:String
  }
`

export default IngredientCategory;