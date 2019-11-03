import React from 'react';

import { Card } from '../css/starship.card.css';

const StarShipCardComponent = ({ starship, onClick }) => {
  return (
    <Card onClick={onClick}>
      <img src={starship.image} alt={starship.name}/>
      <h2>{starship.name}</h2>
    </Card>
  );
};

export default StarShipCardComponent;
