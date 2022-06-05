import React, { Suspense } from 'react';
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/common/ErrorFallback';
import Loading from './components/common/Loading';
import getTheme from './theme/theme';
import ShipmentsProvider from './context/shipments-context';
import RoutesContainer from './containers/RoutesContainer';

const theme = responsiveFontSizes(createTheme(getTheme()));

function App(): JSX.Element {
  // console.log('theme', theme);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading height="100vh" />}>
            <ShipmentsProvider>
              <RoutesContainer />
            </ShipmentsProvider>
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
