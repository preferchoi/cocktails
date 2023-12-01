import { gql } from 'apollo-server-express';

const Drink = gql`
  type Drink {
    name:String
    img_path:String
    alcoholic:String
    ingredients:[[String]]
    instructions:String
  }
`

export default Drink;