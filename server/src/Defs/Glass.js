import { gql } from 'apollo-server-express';
import Drink from "./Drink.js";

const Glass = gql`
  type Glass {
    name:String
    drinks:[Drink]
  }
`

export default Glass;