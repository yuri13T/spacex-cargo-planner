import React, { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from '../components/header/Header';
import AppDrawer from '../components/drawer/Drawer';

export default function MainLayout() {
  const location = useLocation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
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
            <Outlet />
            {/* We don't have the index route, so I've temporarily added this code */}
            {location.pathname === '/' && <Navigate to="/walmart" replace />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
