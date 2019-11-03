import React from 'react';
import LogoContainerComponent from '../../app_custom_components/container_components/LogoContainerComponent';

import { withRouter } from 'react-router-dom';
import { useApolloClient } from 'react-apollo';
import {
  HeaderContainer,
  OptionsContainer,
  LogoStyleContainer,
  OptionLink,
  LogoutStyle,
  LogoWrapper,
} from '../css/header.css';

const HeaderPageComponent = ({ history }) => {
  const client = useApolloClient();
  return (
    <HeaderContainer>
      <LogoStyleContainer>
        <LogoContainerComponent asTitle={false} />
      </LogoStyleContainer>
      <OptionsContainer>
        <OptionLink to="/episodes">Episodes</OptionLink>
        <OptionLink to="/characters">Characters</OptionLink>
        <OptionLink
          to="/login"
          onClick={() => {
            client.writeData({ data: { isLoggedIn: false } });
            localStorage.clear();
            history.push('/login');
          }}
        >
          <LogoWrapper>
            <LogoutStyle />
          </LogoWrapper>
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default withRouter(HeaderPageComponent);