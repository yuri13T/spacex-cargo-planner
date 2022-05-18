import React, { Suspense } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Loading from './components/common/Loading';
import getTheme from './theme/theme';
import ShipmentsProvider from './context/shipments-context';
import RoutesContainer from './containers/RoutesContainer';

const theme = responsiveFontSizes(createTheme(getTheme()));

function App() {
  // console.log('theme', theme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Loading height="100vh" />}>
          <ShipmentsProvider>
            <RoutesContainer />
          </ShipmentsProvider>
        </Suspense>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
