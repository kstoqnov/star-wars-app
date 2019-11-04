import styled from 'styled-components';

export const ErrorMessage = styled.div`
  color: red;
`;

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 4em auto;
  padding: 0 2em 1.5em;
  background: #000;

  & > p {
    margin: 0.4em auto;
    color: ${({ theme }) => theme.headingFontColor};
    font-size: 20px;
    line-height: 20px;
   

    & > span {
      color: ${({ theme }) => theme.credentials};
    }
  } 

  @media screen and (max-width: 800px) {
    padding: 0;
    font-size: 3vw;
  }
`;

export const FormContainer = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  display: block;
  padding: 3em 4em 1em;
  border-radius: 6px;

  #form-button {
    float: right;
  }

  @media screen and (max-width: 800px) {
    padding: 10px 3px;
  }
`;
