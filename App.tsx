
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Differentials from './components/Differentials';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Differentials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
