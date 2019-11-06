import SFDistantGalaxyRegular from '../../app_fonts/SFDistantGalaxyRegular.ttf';


import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'SF Distant Galaxy Regular';
    src: url(${SFDistantGalaxyRegular}) format('truetype');
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
    font-family: "Times New Roman", serif;
    
  }

  button {
    cursor: pointer;
  }

	a {
		text-decoration: none;
	}
`;
