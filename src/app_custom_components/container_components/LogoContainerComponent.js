import React from 'react';
import LogoComponent from '../style_components/LogoComponent';

import { useApolloClient, useQuery } from 'react-apollo';
import { GET_THEME } from '../../app_utils/js/getTheme';

const LogoContainerComponent = ({asTitle}) => {
  const {data: {theme}} = useQuery(GET_THEME);
  const client = useApolloClient();

  const setMode = mode => {
    localStorage.setItem('theme', mode)
    client.writeData({ data: { theme: mode } });
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  };

  return <LogoComponent asTitle={asTitle} onClick={() => toggleTheme()}/>
}

export default LogoContainerComponent;