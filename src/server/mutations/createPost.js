import gql from 'graphql-tag';

export default gql`
  mutation createPost($title: String, $content: String) {
    createPost(title: $title, content: $content) {
      id,
      title,
      content
    }
  }
`;
