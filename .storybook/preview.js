import React from 'react';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from '@mui/material/styles';

import theme from "../src/theme/index";

export const decorators = [
  Story => (
    <ThemeProvider theme={ theme }>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}