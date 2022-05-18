import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Autocomplete, Link, TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
import { getRouteByName } from '../../context/routes-context';

const AutocompleteField = React.forwardRef((props, ref) => {
  const { options = [] } = props;
  const navigate = useNavigate();

  return (
    <Autocomplete
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
      ref={ref}
      id="cargo-planner-search"
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
          // TODO: Find out why this didn't work properly in the Autocomplete.
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <SearchIcon />
          //     </InputAdornment>
          //   ),
          // }}
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
