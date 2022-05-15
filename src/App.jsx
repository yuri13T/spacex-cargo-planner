import React, { Suspense } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Loading from './components/common/Loading';
import getTheme from './theme/theme';
import MainLayout from './layouts/MainLayout';

const theme = responsiveFontSizes(createTheme(getTheme()));

function App() {
  // console.log('theme', theme);
  return (
    <Suspense fallback={<Loading height="100vh" />}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <div>Routes</div>
          </MainLayout>
        </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
}

export default App;
