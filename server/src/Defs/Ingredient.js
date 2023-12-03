import { gql } from 'apollo-server-express';

const Ingredient = gql`
  type Ingredient {
    name:String
    category:String
  }
`

export default Ingredient;