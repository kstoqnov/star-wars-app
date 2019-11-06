import React from 'react';
import CharacterDetailsComponent from '../style_components/CharacterDetailsComponent';
import SpinnerComponent from '../../app_custom_components/style_components/SpinnerComponent';

import { loader } from 'graphql.macro';
import { useQuery } from 'react-apollo';
 

const GET_PERSON = loader('../../app_graphql_schemas/getPerson.gql');


const CharacterDetailsContainerComponent = ({ match }) => {

  const { data, loading, error } = useQuery(GET_PERSON, {
    variables: { id: match.params.characterId },
  });

  if (loading) return <SpinnerComponent/>;
  if (error) return `Error! ${error}`;

  return <CharacterDetailsComponent person={data.person} />;
  
};

export default CharacterDetailsContainerComponent;

