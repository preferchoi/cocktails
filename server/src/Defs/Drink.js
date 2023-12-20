import { gql } from 'apollo-server-express';

const Drink = gql`
  type Drink {
    id:Int
    name:String
    img_path:String
    alcoholic:String
    ingredients:[[String]]
    instructions:String
    category:String
    glass:String
  }
`

export default Drink;