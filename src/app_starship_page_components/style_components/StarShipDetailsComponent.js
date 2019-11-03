import React from 'react';

import { ShipDetailsCard } from '../css/starship-details.css';

const StarShipDetailsComponent = ({ starship }) => {
  const {
    name,
    image,
    starshipClass,
    cost,
    maxAtmosphericSpeed,
    hyperdriveRating,
    crew,
  } = starship;

  return (
    <ShipDetailsCard>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      {starshipClass ? (
        <p>
          <span id="pointer">Class: </span>
          <span id="content">{starshipClass}</span>
        </p>
      ) : null}
      {cost ? (
        <p>
          <span id="pointer">Cost: </span>
          <span id="content">{cost} credits</span>
        </p>
      ) : (
        <p>
          <span id="pointer">Cost: </span>
          <span id="content">0 credits</span>
        </p>
      )}
      {crew ? (
        <p>
          <span id="pointer">Crew: </span>
          <span id="content">{crew}</span>
        </p>
      ) : null}
      {maxAtmosphericSpeed ? (
        <p>
          <span id="pointer">Max Atmospheric Speed: </span>
          <span id="content">{maxAtmosphericSpeed}</span>
        </p>
      ) : null}
      {hyperdriveRating ? (
        <p>
          <span id="pointer">Hyperdrive Rating: </span>
          <span id="content">{hyperdriveRating}</span>
        </p>
      ) : null}
    </ShipDetailsCard>
  );
};

export default StarShipDetailsComponent;
