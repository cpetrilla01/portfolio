import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/global.css';
import {theme} from './styles/theme';
import {ThemeProvider, createTheme, CssBaseline} from '@mui/material';
import {Header, Footer} from './components';
import {Home} from './views/home';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={createTheme(theme)}>
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
