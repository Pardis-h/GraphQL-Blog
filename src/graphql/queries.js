import { gql } from '@apollo/client';

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
            field
            id
            name
            slug
            avatar {
            url
            }
        }
    }
`;

export {GET_BLOGS_INFO, GET_AUTHORS_INFO};