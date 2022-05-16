import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../components/header';
import AppDrawer from '../components/drawer';
import ShipmentsProvider from '../context/shipments-context';

export default function MainLayout({ children }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ShipmentsProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header isDrawerOpen={isDrawerOpen} onDrawerToggle={handleDrawerToggle} />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <AppDrawer isDrawerOpen={isDrawerOpen} onDrawerToggle={handleDrawerToggle} />
          <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 0 }}>
            <Box
              sx={(theme) => ({
                background: theme.palette.background.main,
                borderRadius: '30px',
                height: '100%',
                py: 4,
                px: 6,
                [theme.breakpoints.down('sm')]: {
                  p: 3,
                },
                '@media(max-width: 375px)': {
                  px: 2,
                  py: 3,
                },
              })}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </ShipmentsProvider>
  );
}
