import React from 'react';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    sectionHeader: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    sectionHeader?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    sectionHeader: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#0A72BA',
    },
    secondary: {
      main: '#033558',
    },
    text: {
      primary: '#444444',
    },
  },
  typography: {
    allVariants: {
      color: '#444444',
    },
    body1: {
      fontSize: '1.25rem',
      marginBottom: '1rem',
    },
    body2: {
      fontSize: '1rem',
    },
    fontFamily: '"Source Sans 3", arial, sans-serif',
    subtitle1: {
      fontSize: '3rem',
    },
  },
});

theme = createTheme(theme, {
  typography: {
    sectionHeader: {
      color: theme.palette.text.primary,
      fontFamily: theme.typography.fontFamily,
      fontSize: '3.75rem',
      fontWeight: '400',
      lineHeight: '1.2',
      marginBottom: '2rem',
      textAlign: 'center',
    },
  },
});

export default theme;
