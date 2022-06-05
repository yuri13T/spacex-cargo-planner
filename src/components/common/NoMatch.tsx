import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link } from '@mui/material';

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
        <Link component={RouterLink} to="shipment/walmart" color="secondary">
          Go to the first shipment item.
        </Link>
      </Typography>
    </Box>
  );
}
