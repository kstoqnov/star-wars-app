import styled from 'styled-components';

export const Card = styled.div`
  padding: 0.2em;
  cursor: pointer;
`;

export const CardInner = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  border: 0.1em solid #ccc;
  background: #fff;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5em;

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    top: -2px;
    box-shadow: 1px 1px 15px 1px ${({ theme }) => theme.cardBorderColor};
  }
`;

export const CardMedia = styled.span`
  min-height: 5em;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
  }
`;

export const CardMeta = styled.span`
  padding: 1em;
  background: ${({ theme }) => theme.cardBackground};
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.headingFontColor};
`;
export const Description = styled.p``;
