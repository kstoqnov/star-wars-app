import React from 'react';

import { withRouter } from 'react-router-dom';
import { MISSING_IMG } from '../../app_utils/js/constants';
import { Card } from '../css/character-card.css';

const CharacterCardComponent = ({ character, history }) => {
  const { id, name, image } = character;
  return (
    <Card onClick={() => history.push(`/characters/${id}`)}>
      {image ? (
        <img src={image} alt={name} />
      ) : (
        <img src={MISSING_IMG} alt={name} />
      )}
      <h2>{name}</h2>
    </Card>
  );
};

export default withRouter(CharacterCardComponent);
