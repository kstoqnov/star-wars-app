import styled from 'styled-components';

export const InputStyle = styled.input`
  background: #E8F0FD;
  width: 100%;
  padding: 8px 12px;
  margin: 5px 0 25px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  @media screen and (max-width: 800px) {
    padding: 2px;
    margin: 5px;
    width: 95%;
  }
`;