import React from 'react';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

function Loading({ height = '100%', size = 40 }) {
  return (
    <Box
      sx={{
        height,
        p: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
}

export default Loading;
