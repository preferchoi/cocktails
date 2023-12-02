import { gql } from 'apollo-server-express';

const Ingredient = gql`
  type Ingredient {
    name:String
  }
`

export default Ingredient;