import React from 'react';
import { Box, Typography } from '@mui/material';

export default function ErrorFallback({ error /* , resetErrorBoundary */ }) {
  return (
    <Box role="alert" sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h6">Something went wrong:</Typography>
      <pre>{error.message}</pre>
      {/* <button onClick={resetErrorBoundary}>Try again</button> */}
    </Box>
  );
}
