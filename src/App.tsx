import './global.css';
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';

const App = () => (
  <>
    <div>test build</div>
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
