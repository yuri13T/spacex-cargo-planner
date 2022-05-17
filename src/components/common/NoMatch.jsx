import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NoMatch() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
      }}
    >
      <Typography variant="h4" gutterBottom>
        There is nothing here!
      </Typography>
      <Typography variant="h6">
        <Link to="/">Go to the home page</Link>
      </Typography>
    </Box>
  );
}
