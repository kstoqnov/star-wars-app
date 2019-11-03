import React from 'react';
import EpisodePageComponent from '../style_components/EpisodePageComponent';
import SpinnerComponent from '../../app_custom_components/style_components/SpinnerComponent';

import { FIVE_CHARACTERS } from '../../app_utils/js/constants';
import { useQuery } from '@apollo/react-hooks';
import { GET_EPISODE } from '../../app_utils/js/getEpisode';

const EpisodePageContainerComponent = ({ match }) => {
  const { loading, error, data, fetchMore } = useQuery(GET_EPISODE, {
    variables: { id: match.params.episodeId, first: FIVE_CHARACTERS },
  });

  if (loading) return <SpinnerComponent/>;
  if (error) return `Error! ${error}`;

  const people = data.episode.people;

  return (
    <EpisodePageComponent
      episode={data.episode}
      onLoadMore={() =>
        fetchMore({
          variables: {
            cursor: people.pageInfo.endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newEdges = fetchMoreResult.episode.people.edges;
            const pageInfo = fetchMoreResult.episode.people.pageInfo;

            return newEdges.length
              ? {
                  episode: {
                    ...previousResult.episode,
                    people: {
                      __typename: previousResult.episode.people.__typename,
                      edges: [
                        ...previousResult.episode.people.edges,
                        ...newEdges,
                      ],
                      pageInfo,
                    },
                  },
                }
              : previousResult;
          },
        })
      }
    />
  );
};

export default EpisodePageContainerComponent;
