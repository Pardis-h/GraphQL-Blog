import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      title
      slug
      id
      author {
        ... on Author {
          avatar {
            url
          }
          name
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
    query getAuthorInfo($slug: String!) {
        author(where: {slug: $slug}) {
            name
            field
            description {
                html
            }
            avatar {
                url
            }
            posts {
                title
                id
                slug
                coverPhoto {
                    url
                }
            }
        }
}
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO };
