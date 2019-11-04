import React from 'react';
import { withRouter } from 'react-router-dom';

import { Card, CardInner, CardMedia, CardMeta, Title, Description } from '../css/episode-card.css';
import { MISSING_IMG } from '../../app_utils/js/constants';
import {ImageContainer} from '../../app_utils/container_components/ImageContainer';

const EpisodeCardComponent = ({ episode, history, match }) => {
  const { id, title, openingCrawl, image } = episode;

  return (
    <Card onClick={() => history.push(`${match.path}/${id}`)}>
      <CardInner>
        <CardMedia>
          <ImageContainer src={image} fallback={MISSING_IMG} alt={title} />
        </CardMedia>
        <CardMeta>
          <Title>{title}</Title>
          <Description>{openingCrawl}</Description>
        </CardMeta>
      </CardInner>
    </Card>
  );
};

export default withRouter(EpisodeCardComponent);
