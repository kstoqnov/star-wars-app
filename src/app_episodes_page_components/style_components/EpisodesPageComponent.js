import React from 'react';

import EpisodeCardComponent from './EpisodeCardComponent';

import { EpisodesContainer } from '../css/episodes.css';

const EpisodesPageComponent = ({ allEpisodes }) => {
  const { edges } = allEpisodes;
  return (
    <EpisodesContainer>
      {edges
        .sort((a, b) => a.node.episodeId - b.node.episodeId)
        .map(edge => (
          <EpisodeCardComponent key={edge.node.episodeId} episode={edge.node} />
        ))}
    </EpisodesContainer>
  );
};

export default EpisodesPageComponent;
