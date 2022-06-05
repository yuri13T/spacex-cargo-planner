import { createTheme, Theme } from '@mui/material/styles';
import LatoWoff2 from '../assets/fonts/lato-v23-latin/lato-v23-latin-regular.woff2';
import LatoWoff from '../assets/fonts/lato-v23-latin/lato-v23-latin-regular.woff';

declare module '@mui/material/styles' {
  interface TypeBackground {
    main: string;
    selected: string;
  }
}

const theme = createTheme();

export default function getTheme(): Theme {
  const { white } = theme.palette.common;

  return {
    ...theme,
    // direction,
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            src: local(''),
                 url(${LatoWoff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
                 url(${LatoWoff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
          }
          body {
            background: #1B1D22;
          }
        `,
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            minWidth: '320px',
            '@media(max-width: 695px)': {
              minWidth: '100%',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: white,
            paddingLeft: `${theme.spacing(2)} !important`,
            paddingRight: `${theme.spacing(2)} !important`,
            borderRadius: '10px',
            transition: theme.transitions.create('width'),
            padding: '9px',
            [theme.breakpoints.down('sm')]: {
              paddingTop: '10px !important',
              paddingBottom: '10px !important',
            },
          },
          input: {
            padding: '4px 0px 4px 0px !important',
            height: '1.5em',
            color: '#000',
            [theme.breakpoints.down('sm')]: {
              padding: '0px !important',
              height: '1.25em',
            },
          },
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          loading: {
            color: theme.palette.common.white,
          },
          noOptions: {
            color: theme.palette.common.white,
          },
          endAdornment: {
            position: 'relative',
            right: 'unset !important',
            top: 'unset',
          },
        },
      },
      MuiSkeleton: {
        defaultProps: {
          animation: 'wave',
        },
      },
    },
    typography: {
      ...theme.typography,
      fontFamily: ['Roboto', 'Helvetica', 'Arial', 'Lato', 'sans-serif'].join(','),
      // fontSize: 16,
      // h1: {},
      h2: {
        fontSize: '64px',
        fontWeight: 400,
      },
      h3: {
        fontSize: '56px',
      },
      h4: {
        // fontSize: '34px',
      },
      // h5: {},
      h6: {
        fontFamily: 'Lato, Roboto, "sans-serif"',
      },
      // subtitle1: {},
      // subtitle2: {},
      // body1: {},
      // body2: {},
      // caption: {},
      // button: {},
      // overline: {},
    },
    // shadows: [
    //   // ...theme.shadows,
    // ],
    palette: {
      ...theme.palette,
      // mode: 'dark',
      // TODO: Find out how to fix the below ts errors
      // @ts-ignore
      background: {
        paper: '#1B1D22',
        main: 'linear-gradient(124.01deg, #2D3038 0%, rgba(45, 48, 56, 0) 100%)',
        selected: 'linear-gradient(90deg, rgba(45, 48, 56, 0) 22.92%, #2D3038 100%)',
      },
      // @ts-ignore
      primary: {
        main: '#1B1D22',
      },
      // @ts-ignore
      secondary: {
        main: '#979797',
      },
      // @ts-ignore
      text: {
        primary: '#fff',
        // secondary: '#979797',
      },
      // @ts-ignore
      action: {
        active: '#000',
      },
    },
  };
}
