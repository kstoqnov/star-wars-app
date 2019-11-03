import { gql } from 'apollo-boost';

export const GET_STAR_SHIPS = gql`
  query StarshipAndAllShips($id: ID!, $first: Int!, $filter: StarshipFilter) {
    starship(id: $id) {
      id
      name
      image
      model
      starshipClass
      cost
      maxAtmosphericSpeed
      maxMLPerHour
      hyperdriveRating
      crew
    }
    allStarships(first: $first, filter: $filter) {
      edges {
        node {
          id
          cost
          maxAtmosphericSpeed
          maxMLPerHour
          hyperdriveRating
          crew
          starshipClass
        }
      }
    }
  }
`;