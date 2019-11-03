
import { gql } from 'apollo-boost';

export const GET_ALL_EPISODES = gql`
  query allEpisodes($first: Int!) {
    allEpisodes(first: $first) {
      edges {
        node {
          id
          title
          episodeId
          openingCrawl
          image
        }
      }
    }
  }
`;