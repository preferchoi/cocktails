import { gql } from 'apollo-server-express';

const IngredientCategory = gql`
  type IngredientCategory {
    name:String
  }
`

export default IngredientCategory;