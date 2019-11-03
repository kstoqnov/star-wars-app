import styled from 'styled-components';

export const RadarContainer = styled.div`
  width: 50%;
  margin-top: 4em;
  & > h2 {
    color: ${({ theme }) => theme.titleFontColor};
    padding-bottom: 0.8em;
    font-size: 2vw;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-top: 1em;
    & > h2 {
      font-size: 5vw;
    }
  }
`

export const RadarWrapper = styled.div`
padding: 6em 2em;
text-align: center;
vertical-align: middle;
background: black;

  .shape {
    fill: ${({ theme }) => theme.radarFontColor};
    stroke: ${({ theme }) => theme.radarFontColor};
    stroke-width: 3;
    fill-opacity: 0.3;
  }

  .shape:hover {
    fill-opacity: 0.65;
    z-index: 100;
  }

  .scale {
    stroke: #999;
  }

  .dot {
    fill: ${({ theme }) => theme.radarFontColor};
    r: 5;
    -webkit-transition: r 0.2s;
    -o-transition: r 0.2s;
    transition: r 0.2s;
  }

  .dot:hover {
    r: 8;
  }

  .caption {
    fill: ${({ theme }) => theme.headingFontColor};
    font-weight: 400;
    font-size: 12pt;
  }

  svg {
    width: 280px;
    height: 280px;
  }
`;
