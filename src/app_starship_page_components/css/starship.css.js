import styled from 'styled-components';

export const ShipDetailsWrapper = styled.main`
  margin: 1em 10em;
  
  h1,
  h2 {
    margin: 0;
    text-align: center;
  }
  & > h1 {
    font-family: 'SF Distant Galaxy Outline';
    color: ${({ theme }) => theme.headingFontColor};
    font-size: 3.5vw;
  }

  & > h2 {
    font-size: 2.8vw;
    font-weight: bold;
    position: relative;
    color: ${({ theme }) => theme.titleFontColor};
    padding-bottom: 0.8em;

    &:after {
      display: block;
      content: '';
      width: 100%;
      height: 1.5px;
      background: ${({ theme }) => theme.text};
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }

  @media screen and (max-width: 800px) {
    margin: 2em;
    & > h1 {
      font-size: 6vw;
    }
    & > h2 {
      font-size: 4.4vw;
    }
  }
`;

export const ShipDetailsContainer = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;