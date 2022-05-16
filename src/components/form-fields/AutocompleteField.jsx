import React from 'react';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const AutocompleteField = React.forwardRef((props, ref) => (
  <Autocomplete
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    {...props}
    ref={ref}
    id="free-solo-demo"
    freeSolo
    options={[]}
    renderInput={(params) => (
      <TextField
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...params}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
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
));

export default AutocompleteField;
