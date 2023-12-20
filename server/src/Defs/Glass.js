import { gql } from 'apollo-server-express';

const Glass = gql`
  type Glass {
    id:Int
    name:String
  }
`

export default Glass;