import { gql } from 'apollo-server-express';

const Category = gql`
  type Category {
    name:String
  }
`

export default Category;