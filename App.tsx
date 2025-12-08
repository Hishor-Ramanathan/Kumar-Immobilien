import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default App;
