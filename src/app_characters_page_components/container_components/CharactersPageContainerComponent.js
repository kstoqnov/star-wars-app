import React from 'react';
import CharactersPageComponent from '../style_components/CharactersPageComponent';
import SpinnerComponent from '../../app_custom_components/style_components/SpinnerComponent';

import { loader } from 'graphql.macro';
import { TWELVE_CHARACTERS } from '../../app_utils/js/constants';
import { useQuery } from '@apollo/react-hooks';
 


const GET_ALL_PEOPLE = loader('../../app_graphql_schemas/getAllPeople.gql');

const CharactersPageContainerComponent = () => {

  const { data, loading, error, fetchMore } = useQuery(GET_ALL_PEOPLE, {
    variables: { first: TWELVE_CHARACTERS },
  });

  if (loading) return <SpinnerComponent/>;
  if (error) return `Error! ${error}`;

  const allPeople = data.allPeople;

  return (
    <CharactersPageComponent
      people={allPeople}
      onLoadMore={() =>
        fetchMore({
          variables: {
            cursor: allPeople.pageInfo.endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newEdges = fetchMoreResult.allPeople.edges;
            const pageInfo = fetchMoreResult.allPeople.pageInfo;

            return newEdges.length
              ? {
                  allPeople: {
                    __typename: previousResult.allPeople.__typename,
                    edges: [...previousResult.allPeople.edges, ...newEdges],
                    pageInfo,
                  },
                }
              : previousResult;
          },
        })
      }
    />
  );
};

export default CharactersPageContainerComponent;
