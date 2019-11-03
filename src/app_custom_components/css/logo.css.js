import styled, { css } from 'styled-components';

const LogoIsTitle = css`
  font-size: 8vw;
`;

const LogoIsNotTitle = css`
  font-size: 2.5vw;
  @media screen and (max-width: 800px) {
    font-size: 4.5vw;
  }
`;

const isLogoTitle = props => {
  if (props.asTitle) {
    return LogoIsTitle;
  }

  return LogoIsNotTitle;
};

export const LogoStyle = styled.div`
  font-family: Death Star;
  text-align: center;
  color: #ffe300;
  cursor: pointer;
  ${isLogoTitle}
`;
