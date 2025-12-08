import React from 'react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Modern Real Estate" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <div className="max-w-3xl">
          <h2 className="text-brand-light font-bold text-lg mb-4 tracking-wider uppercase animate-fade-in-up">
            Willkommen bei {COMPANY_INFO.name}
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight drop-shadow-lg">
            Ihr Zuhause.<br />Unsere Leidenschaft.
          </h1>
          <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed">
            Kompetente Beratung und persönliche Betreuung für Ihre Immobilie in Niederlenz und Umgebung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#services" 
              className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl"
            >
              Unsere Leistungen
            </a>
            <a 
              href="#contact" 
              className="bg-brand-light/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-brand-dark transition-all transform hover:-translate-y-1"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Wave at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
