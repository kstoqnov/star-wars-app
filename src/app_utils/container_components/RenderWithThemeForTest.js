import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter} from 'react-router-dom';
import { MockedProvider } from '@apollo/react-testing';

import { lightTheme } from '../css/theme.css';
import { ThemeProvider } from 'styled-components';

export default function RenderWithThemeForTest(component) {

  return renderer.create(
    
    <MockedProvider  addTypename={false}>

      <BrowserRouter>

        <ThemeProvider theme={lightTheme}>

            {component}

        </ThemeProvider> 

      </BrowserRouter>

    </MockedProvider>

  );

};