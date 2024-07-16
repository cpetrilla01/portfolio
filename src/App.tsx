import React from 'react';
import './global.css';
import {theme} from './theme';
import {ThemeProvider, CssBaseline} from "@mui/material";
import {
  Header,
  Hero,
  Skills,
  About,
  Footer
} from './components';

const App = () => (
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

export default App;
