import { gql } from 'apollo-boost';

export const GET_PERSON = gql`
  query Person($id: ID!) {
    person(id: $id) {
      name
      image
      height
      mass
      species {
        name
      }
      homeworld {
        name
      }
      starships {
        edges {
          node {
            id
            name
            image
          }
        }
      }
    }
  }
`;