import React, { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { ErrorBoundary } from 'react-error-boundary';
import Header from '../components/header/Header';
import AppDrawer from '../components/drawer/Drawer';
import ErrorFallback from '../components/common/ErrorFallback';

export default function MainLayout() {
  const location = useLocation();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header isDrawerOpen={isDrawerOpen} onDrawerToggle={handleDrawerToggle} />
      </ErrorBoundary>
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppDrawer isDrawerOpen={isDrawerOpen} onDrawerToggle={handleDrawerToggle} />
        </ErrorBoundary>
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
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Outlet />
              {/* We don't have the index route, so I've temporarily added this code */}
              {location.pathname === '/' && <Navigate to="shipment/walmart" replace />}
            </ErrorBoundary>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
