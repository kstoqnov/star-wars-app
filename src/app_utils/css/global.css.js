import SFDistantGalaxy from '../../app_fonts/SFDistantGalaxy.ttf';


import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'SF Distant Galaxy';
    src: url(${SFDistantGalaxy}) format('truetype');
  }


  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: 'SF Distant Galaxy', sans-serif;
  }

  button {
    cursor: pointer;
  }

	a {
		text-decoration: none;
	}
`;
