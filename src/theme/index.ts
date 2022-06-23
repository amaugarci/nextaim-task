import { createTheme } from '@mui/material/styles';

import themeTypography from "./typography";
import themePalette from "./palette";
import themeComponents from "./components";

const theme = createTheme({
  palette: themePalette(),
  typography: themeTypography(),
  components: themeComponents()
});

export default theme;