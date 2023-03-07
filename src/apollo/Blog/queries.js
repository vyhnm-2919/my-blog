import { gql } from "@apollo/client";

const getBlogs = gql`
  query getBlogs {
    blogs {
      id
      title
      description
      content
    }
  }
`;

export { getBlogs };
