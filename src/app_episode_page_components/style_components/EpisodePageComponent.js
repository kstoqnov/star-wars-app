import React from 'react';
import CharacterCardComponent from './CharacterCardComponent';
import CustomButtonComponent from '../../app_custom_components/style_components/CustomButtonComponent';

import { CharWrapper, CharContainer } from '../../app_characters_page_components/css/characters.css';
import { EpisodeContainer, ImgCard, Info, TitleContainer } from '../css/episode.css';
import { numToRomanNum } from '../../app_utils/js/numToRomanNum';
import { MISSING_IMG } from '../../app_utils/js/constants';
import {ImageContainer} from '../../app_utils/container_components/ImageContainer';

const EpisodePageComponent = ({ episode, onLoadMore }) => {
  const {
    episodeId,
    title,
    openingCrawl,
    image,
    director,
    releaseDate,
    people,
  } = episode;

  return (
    <EpisodeContainer>
      <ImgCard>
        <ImageContainer src={image} fallback={MISSING_IMG} alt={title} />
        <TitleContainer>
          <h1>Star Wars: Episode {numToRomanNum[episodeId]}</h1>
          <h2>{title}</h2>
        </TitleContainer>
      </ImgCard>
      <Info>
        <p>{openingCrawl}</p>
        <p><span id="pointer">Director:</span> <span id="content">{director}</span></p>
        <p><span id="pointer">Release Date: </span><span id="content">{releaseDate}</span></p>
      </Info>
      <CharWrapper>
        <CharContainer>
          {people.edges.map(edge => {
            return <CharacterCardComponent key={edge.node.id} character={edge.node} />;
          })}
        </CharContainer>
        {people.pageInfo.hasNextPage ? (
          <CustomButtonComponent onClick={onLoadMore}> Load More </CustomButtonComponent>
        ) : null}
      </CharWrapper>
    </EpisodeContainer>
  );
};

export default EpisodePageComponent;
