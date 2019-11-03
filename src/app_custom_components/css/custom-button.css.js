import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  font-size: 1.5vw;
  font-weight: bolder;
  color: ${({ theme }) => theme.btnFontColor};
  background: ${({ theme }) => theme.btnBackground};
  border: 2px ${({ theme }) => theme.btnBorderColor};
  border-radius: 5px;
  padding: 10px 25px;

  @media screen and (max-width: 800px) {
    padding: 5px 15px;
    font-size: 3.5vw;
    margin: 15px;
  }
`;
