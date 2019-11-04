import React from 'react';
import CharacterDetailsComponent from '../style_components/CharacterDetailsComponent';
import SpinnerComponent from '../../app_custom_components/style_components/SpinnerComponent';

import { useQuery } from 'react-apollo';
import { GET_PERSON } from '../../app_utils/js/getPerson';
 

const CharacterDetailsContainerComponent = ({ match }) => {

  const { data, loading, error } = useQuery(GET_PERSON, {
    variables: { id: match.params.characterId },
  });

  if (loading) return <SpinnerComponent/>;
  if (error) return `Error! ${error}`;

  return <CharacterDetailsComponent person={data.person} />;
  
};

export default CharacterDetailsContainerComponent;

