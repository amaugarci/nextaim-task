import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import Routes from "@routes/index";
import theme from "@theme/index";

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={ theme }>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
