import { gql } from 'apollo-boost';

export const GET_THEME = gql`
  query GetTheme {
    theme @client
  }
`;