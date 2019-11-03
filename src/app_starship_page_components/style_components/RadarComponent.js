import React from 'react';
import RadarChart from 'react-svg-radar-chart';

import { RadarWrapper, RadarContainer } from '../css/radar.css';
const captions = {
  maxAtmosphericSpeed: 'Max Atm. Speed',
  maxMLPerHour: 'Max ML/h',
  hyperdriveRating: 'HyperD Rat.',
  crew: 'Crew',
  cost: 'Cost',
};

const RadarComponent = ({data}) => {
  return (
    <RadarContainer>
      <h2>Compared to Starship Class Max</h2>
      <RadarWrapper>
        <RadarChart
          captions={captions}
          data={[
            data
          ]}
          options={{ axes: false, scales: 5, dots: true }}
        />
      </RadarWrapper>
    </RadarContainer>
  );
};

export default RadarComponent;
