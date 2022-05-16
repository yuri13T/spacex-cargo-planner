import React from 'react';
import { Stack, Typography, TextField } from '@mui/material';

export default function Shipment() {
  return (
    <section>
      <Stack spacing={3.75}>
        <div>
          <Typography variant="h2">Amazon</Typography>
          <Typography color="secondary">contact@amazon.com</Typography>
        </div>
        <div>
          <Typography color="secondary" sx={{ textTransform: 'uppercase', mb: 1.25 }}>
            Cargo boxes
          </Typography>
          <TextField size="large" />
        </div>
        <div>
          <Typography variant="h4" color="secondary">
            Number of required cargo bays
          </Typography>
          <Typography variant="h3">5</Typography>
        </div>
      </Stack>
    </section>
  );
}
