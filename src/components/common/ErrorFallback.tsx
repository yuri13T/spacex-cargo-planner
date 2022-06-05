import React from 'react';
import { Box, Typography } from '@mui/material';

type ErrorFallbackProps = {
  error: Error;
}

export default function ErrorFallback({ error /* , resetErrorBoundary */ }: ErrorFallbackProps) {
  return (
    <Box role="alert" sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h6">Something went wrong:</Typography>
      <pre>{error.message}</pre>
      {/* <button onClick={resetErrorBoundary}>Try again</button> */}
    </Box>
  );
}
