import { gql } from "@apollo/client";

const createBlog = gql`
  mutation createBlog($title: String, $description: String, $content: String) {
    createBlog(title: $title, description: $description, content: $content) {
      id
      title
      description
      content
    }
  }
`;

export { createBlog };
