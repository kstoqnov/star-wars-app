import React from 'react';
import StarShipCardComponent from '../../app_starship_page_components/style_components/StarShipCardComponent';

import { MISSING_IMG } from '../../app_utils/js/constants';
import { withRouter } from 'react-router-dom';
import {
  CharDetailsWrapper,
  CharDetailsCard,
  CharShips,
  CharDetailsContainer,
} from '../css/character-details.css';

const CharacterDetailsComponent = ({ person, history }) => {
  const { name, image, height, mass, species, homeworld, starships } = person;
  return (
    <CharDetailsWrapper>
      <h1>{name}</h1>
      <CharDetailsContainer>
        <CharDetailsCard>
          <h2>{name}</h2>
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <img src={MISSING_IMG} alt={name} />
          )}
          {height ? (
            <p>
              <span id="pointer">Height: </span>
              <span id="content">{height}</span>
            </p>
          ) : null}
          {mass ? (
            <p>
              <span id="pointer">Weight: </span>
              <span id="content">{mass}</span>
            </p>
          ) : null}
          {species ? (
            <p>
              <span id="pointer">Species: </span>
              <span id="content">{species.name}</span>
            </p>
          ) : null}
          {homeworld ? (
            <p>
              <span id="pointer">Home World: </span>
              <span id="content">{homeworld.name}</span>
            </p>
          ) : null}
        </CharDetailsCard>
        <CharShips>
          <h2>Piloted Starships</h2>
          {starships.edges.map(edge => (
            <StarShipCardComponent
              key={edge.node.id}
              starship={edge.node}
              onClick={() => history.push(`/starships/${edge.node.id}`)}
            />
          ))}
        </CharShips>
      </CharDetailsContainer>
    </CharDetailsWrapper>
  );
};

export default withRouter(CharacterDetailsComponent);
