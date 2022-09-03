import React from 'react';
import {createRoot} from 'react-dom/client';
import 'normalize.css';
import './styles/global.css';
import {ThemeProvider, createTheme} from '@mui/material';
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
    fontFamily: '"Source Sans 3", arial, sans-serif'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
