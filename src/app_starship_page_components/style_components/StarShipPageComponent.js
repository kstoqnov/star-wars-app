import React from 'react';
import StarShipDetailsComponent from '../style_components/StarShipDetailsComponent';
import RadarComponent from '../style_components/RadarComponent';

import { ShipDetailsWrapper, ShipDetailsContainer } from '../css/starship.css';

const StarShipPageComponent = ({ starship, data }) => {
  return (
    <ShipDetailsWrapper>
      <h1>{starship.name}</h1>
      <h2>({starship.model})</h2>
      <ShipDetailsContainer>
        <StarShipDetailsComponent starship={starship} />
        <RadarComponent data={data} />
      </ShipDetailsContainer>
    </ShipDetailsWrapper>
  );
};

export default StarShipPageComponent;
