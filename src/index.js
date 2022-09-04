import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/global.css';
import {ThemeProvider, createTheme, CssBaseline} from '@mui/material';
import {Header, Footer} from './components';
import {Home} from './views/home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A72BA',
      contrastText: '#fff',
    },
    secondary: {
      main: '#033558',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: '"Source Sans 3", arial, sans-serif',
    allVariants: {
      color: '#444444',
    },
    body1: {
      fontSize: '1.25rem',
      marginBottom: '1rem',
    },
    h2: {
      paddingBottom: '2rem',
      textAlign: 'center',
    },
    subtitle1: {
      fontSize: '3rem',
    },
  }
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
