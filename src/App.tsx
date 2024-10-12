import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';  // Importing CSS file

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="section"><Home /></div>
      <div id="about" className="section"><About /></div>
      <div id="projects" className="section"><Projects /></div>
      <div id="contact" className="section"><Contact /></div>
    </>
  );
}

export default App;
