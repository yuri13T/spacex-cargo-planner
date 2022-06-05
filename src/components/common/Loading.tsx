import React from 'react';
import Box from '@mui/material/Box';
import { CircularProgress } from '@mui/material';

type LoadingProps = { height?: string; size?: number } & typeof defaultProps;

const defaultProps = {
  height: '100%',
  size: 40
}

function Loading({ height, size }: LoadingProps) {
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
      <CircularProgress
        size={size}
        sx={(theme) => ({ color: theme.palette.common.white })}
      />
    </Box>
  );
}

Loading.defaultProps = defaultProps;

export default Loading;
