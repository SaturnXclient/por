import React from 'react';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;