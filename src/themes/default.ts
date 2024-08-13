import { createTheme, ThemeOptions } from '@mui/material/styles';

// Extend the default theme declaration
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      glowingText: string;
      glowingShadow: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      glowingText?: string;
      glowingShadow?: string;
    };
  }
}

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#0a192f',
      light: '#112240',
    },
    secondary: {
      main: '#64ffda',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#e6f1ff',
      secondary: '#8892b0',
    },
    custom: {
      glowingText: '#64ffda',
      glowingShadow: 'rgba(0, 255, 204, 0.5)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;