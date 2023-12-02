import { gql } from 'apollo-server-express';

const Glass = gql`
  type Glass {
    name:String
  }
`

export default Glass;