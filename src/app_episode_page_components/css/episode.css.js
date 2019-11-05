import styled from 'styled-components';

export const EpisodeContainer = styled.main`
  margin: 2em 8em;

  @media screen and (max-width: 800px) {
    margin: 0 1em;
  }
`;

export const ImgCard = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border: 0.1em solid #ccc;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  background: ${({ theme }) => theme.cardBackground};
  margin: 0 3rem;

  img {
    display: block;
    max-width: 30%;
    height: auto;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
  }

  @media screen and (max-width: 800px) {
    margin: 0;
    flex-direction: column;

    img {
      display: block;
      max-width: 100%;
      height: auto;
      border-top-left-radius: 0.5em;
      border-top-right-radius: 0.5em;
      border-bottom-left-radius: none;
    }
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h1,
  h2 {
    margin: 0;
  }

  h1 {
    font-family: 'SF Distant Galaxy Outline';
    color: ${({ theme }) => theme.headingFontColor};
    font-size: 3.5vw;
    
  }

  h2 {
    font-size: 1.8vw;
    font-weight: bold;
    color: ${({ theme }) => theme.titleFontColor};
  }

  @media screen and (max-width: 800px) {
    margin: 1em;
    h1 {
      font-size: 5vw;
    }
    h2 {
      font-size: 4.4vw;
    }
  }
`;

export const Info = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 1px 20px;
  margin: 2em 3em;

  p {
    font-size: 1.2vw;

    span {
      font-weight: bold;
    }
    #pointer {
      color: ${({ theme }) => theme.titleFontColor};
    }
    #content {
      color: ${({ theme }) => theme.headingFontColor};
    }
  }

  @media screen and (max-width: 800px) {
    margin: 1.5em 0;
    p {
      font-size: 3.5vw;
    }
  }
`;
