import React from 'react';

import { Card } from '../css/starship.card.css';
import { MISSING_IMG } from '../../app_utils/js/constants';
import {ImageContainer} from '../../app_utils/container_components/ImageContainer';

const StarShipCardComponent = ({ starship, onClick }) => {
  return (
    <Card onClick={onClick}>
      <ImageContainer src={starship.image} fallback={MISSING_IMG} alt={starship.name} />
      <h2>{starship.name}</h2>
    </Card>
  );
};

export default StarShipCardComponent;
