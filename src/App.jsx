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
import RoutesProvider from './context/routes-context';

const theme = responsiveFontSizes(createTheme(getTheme()));

function App() {
  // console.log('theme', theme);
  return (
    <Suspense fallback={<Loading height="100vh" />}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ShipmentsProvider>
            <RoutesProvider />
          </ShipmentsProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
}

export default App;
