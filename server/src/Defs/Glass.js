import { gql } from 'apollo-server-express';

const Glass = gql`
  type Glass {
    name:String
    drinks:[Drink]
  }
`

export default Glass;