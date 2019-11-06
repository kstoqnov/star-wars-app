import React from 'react';
import EpisodesPageComponent from '../style_components/EpisodesPageComponent';
import SpinnerComponent from '../../app_custom_components/style_components/SpinnerComponent';

import { loader } from 'graphql.macro';
import { ALL_EPISODES } from '../../app_utils/js/constants';
import { useQuery } from '@apollo/react-hooks';

const GET_ALL_EPISODES = loader('../../app_utils/js/getAllEpisodes.gql');

const EpisodesPageContainerComponent = () => {
  const { loading, error, data } = useQuery(GET_ALL_EPISODES, {
    variables: { first: ALL_EPISODES },
  });

  if (loading) return <SpinnerComponent/>;
  if (error) return `Error! ${error}`;

  return <EpisodesPageComponent allEpisodes={data.allEpisodes} />;
};

export default EpisodesPageContainerComponent;
