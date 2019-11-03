import styled from 'styled-components';

export const CharDetailsWrapper = styled.div`
  margin: 1em 10em;

  & > h1 {
    font-family: 'SF Distant Galaxy Outline';
    color: ${({ theme }) => theme.headingFontColor};
    text-align: center;
    position: relative;
    padding-bottom: 0.8em;
    font-size: 3vw;

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
  }
`;

export const CharDetailsContainer = styled.div`
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CharDetailsCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  width: 50%;
  border-radius: 10px;
  margin-right: 3em;
  margin-bottom: 5rem;

  & > h2 {
    text-align: center;
    color: ${({ theme }) => theme.headingFontColor};
    font-weight: bold;
    font-size: 2.3vw;
    margin: 0.3em;
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

export const CharShips = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  & > h2 {
    font-family: 'SF Distant Galaxy Outline';
    color: ${({ theme }) => theme.titleFontColor};
    text-align: center;
    position: relative;
    padding-bottom: 0.8em;
    font-size: 2.5vw;

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
    width: 100%;
    & > h2 {
      font-size: 6vw;
      margin-top: 1.5em;
    }
  }
`;
