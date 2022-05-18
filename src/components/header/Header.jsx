import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, AppBar, Toolbar, Grid, IconButton, Link, Fade } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AutocompleteField from '../form-fields/AutocompleteField';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export default function Header({ loaded, routes, isDrawerOpen, onDrawerToggle }) {
  return (
    <AppBar
      position="static"
      /* eslint-disable-next-line react/no-unstable-nested-components */
      sx={(theme) => ({
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
      })}
    >
      <Toolbar
        sx={(theme) => ({
          minHeight: '130px !important',
          '@media(max-width: 695px)': {
            minHeight: 'auto !important',
          },
          p: theme.spacing(3),
          [theme.breakpoints.up('sm')]: {
            p: theme.spacing(5),
          },
        })}
      >
        <Grid
          container
          alignItems="center"
          rowSpacing={{ xs: 3, sm: 0 }}
          columnSpacing={{ xs: 0, sm: 3, md: '108px' }}
        >
          <Grid item>
            <Fade in>
              <Link component={RouterLink} to="shipment/walmart" underline="none">
                <Box
                  component={Logo}
                  sx={{
                    display: 'flex',
                    '@media (max-width: 375px)': {
                      width: '152px',
                      height: '30px',
                    },
                  }}
                />
              </Link>
            </Fade>
          </Grid>
          <Grid
            item
            xs={12}
            sm
            sx={{
              '@media(min-width: 695px)': {
                display: isDrawerOpen ? 'none' : 'block',
              },
              '@media(max-width: 695px)': {
                order: 3,
                display: 'none',
              },
            }}
          >
            <AutocompleteField loading={loaded} options={routes} />
          </Grid>
          <Grid
            item
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <div>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={onDrawerToggle}
                size="large"
                sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }}
              >
                {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
