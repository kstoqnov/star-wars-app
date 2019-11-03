import { gql } from 'apollo-boost';


export const GET_ALL_CHARACTERS = gql`
  query AllPeople($first: Int!, $cursor: String) {
    allPeople(first: $first, after: $cursor) {
      edges {
        node {
          id
          name
          image
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;


