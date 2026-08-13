import './global.css';
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { HashRouter, Routes, Route } from 'react-router';
import { Home } from './pages/Home';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';

const App = () => (
  <HashRouter>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </HashRouter>
);

export default App;
