import styled from 'styled-components';

export const EpisodesContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 6rem;
  margin: 1rem 6rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    margin: 0.5rem 2rem;
  }
`;
