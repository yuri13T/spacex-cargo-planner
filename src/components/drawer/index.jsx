import React from 'react';
import { Box, Toolbar, Drawer } from '@mui/material';

const drawerWidth = 336;

export default function AppDrawer({ isDrawerOpen, onDrawerToggle }) {
  const drawer = (
    <>
      <Toolbar
        sx={(theme) => ({
          minHeight: '130px !important',
          '@media(max-width: 695px)': {
            minHeight: '128px !important',
          },
          [theme.breakpoints.down('sm')]: {
            minHeight: '96px !important',
          },
        })}
      />
      <Box
        sx={(theme) => ({
          p: 3,
          pt: 2,
          flexGrow: 1,
          [theme.breakpoints.up('sm')]: {
            pt: 0,
            pr: 3,
            pb: 4,
            pl: 5,
          },
        })}
      >
        Drawer
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="shipment list"
    >
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={onDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: 'none',
            '@media(max-width: 375px)': {
              width: '100%',
            },
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: 'none',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
