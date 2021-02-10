import React from 'react'
import './App.css';
import About from './components/About/About';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
