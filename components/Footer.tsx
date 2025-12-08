import React from 'react';
import { COMPANY_INFO, Logo } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
             <div className="bg-white/10 p-2 rounded-lg">
                <Logo />
             </div>
             <div>
                <h2 className="text-xl font-bold">{COMPANY_INFO.name}</h2>
                <p className="text-sm text-gray-400">Ihr Immobilienpartner</p>
             </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Impressum</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">AGB</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Alle Rechte vorbehalten.</p>
          <p className="mt-2">Erstellt für den Verkauf und die Vermietung von Immobilien in {COMPANY_INFO.city}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
