import './App.css';

// src/App.js
import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Add any global styles here

const App = () => {
  return (
    <div>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
};

export default App;
