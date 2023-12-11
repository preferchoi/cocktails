import { gql } from 'apollo-server-express';

const User = gql`
  type User {
    id:Int
    username:String
    email:String
    password:String
    createAt:String
    updateAt:String
  }

  input SignUpInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`

export default User;