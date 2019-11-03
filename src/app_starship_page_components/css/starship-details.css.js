import styled from 'styled-components';

export const ShipDetailsCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  width: 50%;
  border-radius: 10px;
  margin: 3em 3em 5em 0;

  & > h2 {
    text-align: center;
    color: ${({ theme }) => theme.headingFontColor};
    font-weight: bold;
    font-size: 2.3vw;
    padding: 0.3em;
  }

  & > img {
    width: 100%;
    padding: 0 3em;
  }

  & > p {
    margin: 0.2em 3em;
    font-weight: bold;

    #pointer {
      color: ${({ theme }) => theme.titleFontColor};
    }
    #content {
      color: ${({ theme }) => theme.headingFontColor};
    }

    &:last-child {
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
    & > h2 {
      font-size: 6vw;
    }

    & > img {
      padding: 0 1.5em;
    }
    & > p {
      margin: 0.2em 1.5em;
    }
  }
`;