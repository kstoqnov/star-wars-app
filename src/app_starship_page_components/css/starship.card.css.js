import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border: 0.1em solid #ccc;
  margin-bottom: 1.5em;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;
  background: ${({ theme }) => theme.cardBackground};
  cursor: pointer;

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    top: -2px;
    box-shadow: 1px 1px 15px 1px ${({ theme }) => theme.cardBorderColor};
  }

  img {
    display: block;
    width: 20%;
    height: auto;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;

    @media screen and (max-width: 800px) {
      height: 5em;
    }
  }

  h2 {
    font-family: 'SF Distant Galaxy Outline';
    margin: auto;
    color: ${({ theme }) => theme.headingFontColor};
    padding: 8px;
  }
`;