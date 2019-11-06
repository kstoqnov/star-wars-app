import React from 'react';
import HeaderPageComponent from '../../app_header_components/style_components/HeaderPageComponent';
import ErrorBoundaryComponent from '../../app_custom_components/style_components/ErrorBoundaryComponent';
import LoginContainerComponent from '../../app_login_page_components/container_components/LoginContainerComponent';
import EpisodesPageContainerComponent from '../../app_episodes_page_components/container_components/EpisodesPageContainerComponent';
import EpisodePageContainerComponent from '../../app_episode_page_components/container_components/EpisodePageContainerComponent';
import CharactersPageContainerComponent from '../../app_characters_page_components/container_components/CharactersPageContainerComponent';
import CharacterDetailsContainerComponent from '../../app_characters_page_components/container_components/CharacterDetailsContainerComponent';
import StarShipPageContainerComponent from '../../app_starship_page_components/container_components/StarShipPageContainerComponent';

import { GlobalStyles } from '../../app_utils/css/global.css';
import { ProtectedRoute } from '../../app_utils/container_components/ProtectedRoute';
import { ThemeProvider } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { lightTheme, darkTheme } from '../../app_utils/css/theme.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { GET_THEME } from '../../app_utils/js/getTheme';
import { IS_LOGGED_IN } from '../../app_utils/js/isLoggedIn';



const AppContainerComponent = () => {

  const { data } = useQuery(IS_LOGGED_IN);
  const { data: {theme} } = useQuery(GET_THEME);
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  return (
     
    <ThemeProvider theme={themeMode}>
     
      <GlobalStyles />

      <Switch>

        <Route
          exact
          path={ ['/', '/login'] }
          render={ () =>
            data.isLoggedIn ? <Redirect to="/episodes" /> : <LoginContainerComponent />
          }
        />
          
        <ErrorBoundaryComponent>

          <HeaderPageComponent />

          <ProtectedRoute
            exact
            path="/episodes"
            component={EpisodesPageContainerComponent}
          />

          <ProtectedRoute
            path={'/episodes/:episodeId'}
            component={EpisodePageContainerComponent}
          />

          <ProtectedRoute
            exact
            path={'/characters'}
            component={CharactersPageContainerComponent}
          />

          <ProtectedRoute
            path={'/characters/:characterId'}
            component={CharacterDetailsContainerComponent}
          />

          <ProtectedRoute
            path={'/starships/:starshipId'}
            component={StarShipPageContainerComponent}
          />

        </ErrorBoundaryComponent>

      </Switch>

    </ThemeProvider>

  );
}

export default AppContainerComponent;
