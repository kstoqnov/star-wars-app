import React from 'react';
import renderer from 'react-test-renderer';

import { lightTheme } from '../css/theme.css';
import { ThemeProvider } from 'styled-components';

export default function RenderWithThemeForTest(component) {
  return renderer.create(
    <ThemeProvider theme={lightTheme}>
      {component}
    </ThemeProvider>
  );
};