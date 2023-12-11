import { gql } from 'apollo-server-express';

const User = gql`
  type User {
    id:Int
    username:String
    email:String
    # password:String
    createAt:String
    updateAt:String
  }
`

export default User;