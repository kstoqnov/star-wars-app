import React from 'react';
import CustomButtonComponent from '../../app_custom_components/style_components/CustomButtonComponent';
import CharacterCardComponent from './CharacterCardComponent';

import { CharWrapper, CharContainer } from '../css/characters.css';

const CharactersPageComponent = ({ people, onLoadMore }) => {
  const { edges } = people;
  return (
    <CharWrapper>
      <CharContainer>
        {edges.map(edge => (
          <CharacterCardComponent key={edge.node.id} character={edge.node} />
        ))}
      </CharContainer>
      {people.pageInfo.hasNextPage ? <CustomButtonComponent onClick={onLoadMore}> Load More </CustomButtonComponent> : null}
    </CharWrapper>
  );
};

export default CharactersPageComponent;
