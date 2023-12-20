import { gql } from 'apollo-server-express';

const Category = gql`
  type Category {
    id:Int
    name:String
  }
`

export default Category;