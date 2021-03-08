import React from 'react';
import {render} from 'react-dom';
import 'normalize.css';
import './styles/global.css';
import Header from './components/header/Header';
import HeroSection from './components/hero-section/HeroSection';
import AboutSection from './components/about-section/AboutSection';
import SkillsSection from './components/skills-section/SkillsSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <Footer />
    </>
  );
}

render(<App/>, document.getElementById('root'));