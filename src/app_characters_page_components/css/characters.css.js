import styled from 'styled-components';

export const CharContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  margin: 2rem 3rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    margin: 0.5rem 2rem;
  }
`;

export const CharWrapper = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;
