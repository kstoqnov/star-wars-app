import React from 'react';
import EpisodesPageComponent from '../style_components/EpisodesPageComponent';
import SpinnerComponent from '../../app_custom_components/style_components/SpinnerComponent';

import { ALL_EPISODES } from '../../app_utils/js/constants';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_EPISODES } from '../../app_utils/js/getAllEpisodes';

const EpisodesPageContainerComponent = () => {
  const { loading, error, data } = useQuery(GET_ALL_EPISODES, {
    variables: { first: ALL_EPISODES },
  });

  if (loading) return <SpinnerComponent/>;
  if (error) return `Error! ${error}`;

  return <EpisodesPageComponent allEpisodes={data.allEpisodes} />;
};

export default EpisodesPageContainerComponent;
