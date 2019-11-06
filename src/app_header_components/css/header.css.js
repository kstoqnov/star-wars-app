import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ReactComponent as LogOutImage } from '../../app_images/logOut.svg';

export const HeaderContainer = styled.header`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background: ${({theme}) => theme.barBackground};
  border-color: ${({theme}) => theme.barBorderColor};

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoStyleContainer = styled.div`
  height: 100%;
  width: 70px;
  padding: 20px 30px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 12px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 10px;
  color: ${({theme}) => theme.barFontColor};
  font-size: 2vw;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    font-size: 4vw;
  }
`;

export const LogoWrapper = styled.div`
  border-radius: 3px;
  border: 1px solid #4BD5EE;
  background: ${({theme}) => theme.cardBackground};
  margin-right: 15px;
  @media screen and (max-width: 800px) {
    margin-right: 5px;
  }
`;

export const LogoutStyle = styled(LogOutImage)`
  fill: #4bd5ee;
  width: 54px;
  height: 42px;
  vertical-align: sub;
`;
