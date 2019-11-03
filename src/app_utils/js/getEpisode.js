import { gql } from 'apollo-boost';

export const GET_EPISODE = gql`
  query Episode($id: ID!, $first: Int!, $cursor: String) {
    episode(id: $id) {
      id
      title
      episodeId
      openingCrawl
      image
      director
      releaseDate
      people(first: $first, after: $cursor) {
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
  }
`;