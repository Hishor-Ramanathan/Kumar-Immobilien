import React from 'react';
import { COMPANY_INFO, Logo } from '../constants';

interface FooterProps {
  onOpenLegal?: (type: 'impressum' | 'datenschutz' | 'agb') => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
             <div className="bg-gradient-to-br from-brand-light to-brand-dark p-3 rounded-xl w-16 h-16 shadow-lg">
                <Logo />
             </div>
             <div>
                <h2 className="text-2xl font-bold text-white">{COMPANY_INFO.name}</h2>
                <p className="text-sm text-gray-300 font-light">Ihr Immobilienpartner in Niederlenz</p>
             </div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => onOpenLegal?.('impressum')} 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Impressum
            </button>
            <button 
              onClick={() => onOpenLegal?.('datenschutz')} 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Datenschutz
            </button>
            <button 
              onClick={() => onOpenLegal?.('agb')} 
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              AGB
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;