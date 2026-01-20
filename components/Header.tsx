import React, { useState } from 'react';
import { Logo, Icons } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16">
              <Logo />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-brand-dark leading-none tracking-tight">KUMAR</h1>
              <p className="text-sm font-medium text-brand-light tracking-widest uppercase">Immobilien</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, 'home')}
              className="text-gray-600 hover:text-brand-dark font-medium transition-colors"
            >
              Startseite
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleScroll(e, 'services')}
              className="text-gray-600 hover:text-brand-dark font-medium transition-colors"
            >
              Dienstleistungen
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="text-gray-600 hover:text-brand-dark font-medium transition-colors"
            >
              Über Uns
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-gradient-to-r from-brand-dark to-brand-light text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all transform hover:-translate-y-1 shadow-md flex items-center gap-2"
            >
              <Icons.Phone />
              <span>Kontakt</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <Icons.X /> : <Icons.Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <a href="#home" className="text-gray-700 hover:text-brand-dark font-medium p-2" onClick={(e) => handleScroll(e, 'home')}>Startseite</a>
            <a href="#services" className="text-gray-700 hover:text-brand-dark font-medium p-2" onClick={(e) => handleScroll(e, 'services')}>Dienstleistungen</a>
            <a href="#about" className="text-gray-700 hover:text-brand-dark font-medium p-2" onClick={(e) => handleScroll(e, 'about')}>Über Uns</a>
            <a href="#contact" className="bg-brand-dark text-white text-center py-3 rounded-lg font-medium" onClick={(e) => handleScroll(e, 'contact')}>
              Kontaktieren
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;