import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Autocomplete,
  Link,
  TextField,
  InputAdornment,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { getRouteByName } from '../../context/routes-context';

const AutocompleteField = React.forwardRef((props, ref) => {
  const { loading, options = [] } = props;
  const navigate = useNavigate();

  return (
    <Autocomplete
      ref={ref}
      id="cargo-planner-search"
      loading={loading}
      options={options}
      getOptionLabel={(option) => option.name}
      onKeyDown={(event) => {
        if (event.key === 'Enter') {
          const { value } = event.target;
          const routeByName = getRouteByName(options, value);
          if (routeByName?.path) {
            navigate(routeByName.path);
          }
        }
      }}
      renderOption={(props, option) => {
        return (
          <Link
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...props}
            // key={id + name}
            component={RouterLink}
            to={option.path}
            underline="none"
            color="secondary"
            sx={(theme) => ({
              '&:hover, &.Mui-focusVisible': {
                background: theme.palette.background.selected,
                color: theme.palette.common.white,
              },
            })}
          >
            {option.name}
          </Link>
        );
      }}
      renderInput={(params) => (
        <TextField
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...params}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {loading ? <CircularProgress size={24} /> : null}
                {params.InputProps.endAdornment}
              </InputAdornment>
            ),
          }}
          placeholder="Search"
          sx={{
            width: '320px',
            '@media(max-width: 695px)': {
              minWidth: '100%',
            },
            '@media(max-width: 375px)': {
              width: '100%',
            },
          }}
        />
      )}
    />
  );
});

export default AutocompleteField;
