import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles/global.css';
import {theme} from './styles/theme';
import {ThemeProvider, CssBaseline} from '@mui/material';
import {
  Header,
  Hero,
  Skills,
  About,
  Footer
} from './components';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Hero />
        <Skills />
        <About />
        <Footer />
      </ThemeProvider>
    </>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
