import { gql } from 'apollo-server-express';

const Ingredient = gql`
  type Ingredient {
    id:Int
    name:String
    category:String
  }
`

export default Ingredient;