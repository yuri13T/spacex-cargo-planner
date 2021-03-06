import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  Toolbar,
  Drawer,
  Typography,
  Stack,
  MenuList,
  MenuItem,
  Link,
  Skeleton,
} from '@mui/material';
import { RouteType } from '../../context/routes-context';

const drawerWidth = 336;

type AppDrawerProps = {
  loaded: boolean;
  routes: RouteType[];
  isDrawerOpen: boolean;
  onDrawerToggle: () => void;
}

export default function AppDrawer({ loaded, routes, isDrawerOpen, onDrawerToggle }: AppDrawerProps) {
  const location = useLocation();

  const renderLinkMenuItem = (list: (RouteType & { id?: number })[]) =>
    list.map(({ id, name, path }) => (
      <Link
        key={id + name}
        component={RouterLink}
        to={path}
        underline="none"
        sx={{ pointerEvents: loaded ? 'none' : 'auto' }}
      >
        <MenuItem
          selected={location.pathname === path}
          sx={(theme) => ({
            pl: 0,
            borderRadius: '10px',
            '&.Mui-selected': {
              background: theme.palette.background.selected,
              '& .MuiTypography-root': {
                color: theme.palette.common.white,
              },
            },
            '&:hover': {
              background: theme.palette.background.selected,
              '& .MuiTypography-root': {
                color: theme.palette.common.white,
              },
            },
          })}
        >
          <Typography color="secondary" sx={{ width: '100%' }}>
            {loaded ? <Skeleton /> : name}
          </Typography>
        </MenuItem>
      </Link>
    ));

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
          px: 3,
          pt: 2,
          pb: 0,
          mb: 3,
          flexGrow: 1,
          overflowY: 'auto',
          [theme.breakpoints.up('sm')]: {
            pt: 0,
            pr: 3,
            pl: 5,
          },
        })}
      >
        <Typography
          variant="h6"
          sx={{ textTransform: 'uppercase', mb: 2 }}
          color="secondary"
        >
          Shipment list
        </Typography>
        <MenuList>
          <Stack spacing={1.25}>
            {loaded
              ? renderLinkMenuItem(
                  Array.from(new Array(10), (v, i) => ({
                    id: i + 1,
                    name: '',
                    email: '',
                    path: '',
                  }))
                )
              : renderLinkMenuItem(routes)}
          </Stack>
        </MenuList>
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
            overflowY: 'unset',
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
            overflowY: 'unset',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
