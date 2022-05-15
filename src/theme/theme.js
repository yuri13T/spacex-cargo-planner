import { createTheme } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';

const theme = createTheme();

export default function getTheme() {
  const { white } = theme.palette.common;
  // const { fontWeightBold, fontWeightMedium } = theme.typography;

  return {
    ...theme,
    // direction,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            background: '#1B1D22',
          },
        },
      },
      // MuiButtonBase: {
      //   styleOverrides: {
      //     root: {
      //       display: 'flex !important',
      //     },
      //   },
      // },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            backgroundColor: white,
            paddingLeft: `${theme.spacing(2)} !important`,
            paddingRight: `${theme.spacing(2)} !important`,
            borderRadius: '10px',
            transition: theme.transitions.create('width'),
            width: '320px',
            '@media(max-width: 695px)': {
              minWidth: '100%',
            },
            [theme.breakpoints.down('sm')]: {
              paddingTop: '10px !important',
              paddingBottom: '10px !important',
            },
            '@media(max-width: 280px)': {
              width: '100%',
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
      // MuiInputBase: {
      //   defaultProps: {},
      //   styleOverrides: {},
      // },
    },
    typography: {
      ...theme.typography,
      // fontFamily: '',
      // fontSize: 16,
      // h1: {},
      // h2: {
      //   fontWeight: fontWeightBold,
      // },
      // h3: {
      //   fontWeight: fontWeightBold,
      // },
      // h4: {
      //   fontWeight: fontWeightBold,
      // },
      // h5: {
      //   fontWeight: fontWeightBold,
      // },
      // h6: {
      //   fontWeight: fontWeightBold,
      // },
      // subtitle1: {
      //   fontWeight: fontWeightMedium,
      // },
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
      background: {
        paper: '#1B1D22',
      },
      primary: {
        main: '#1B1D22',
      },
      // secondary: {
      //   main: '#979797',
      // },
      text: {
        primary: '#fff',
        secondary: '#979797',
      },
      action: {
        active: '#000',
      },
    },
  };
}
