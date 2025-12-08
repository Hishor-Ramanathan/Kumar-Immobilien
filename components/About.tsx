import React from 'react';
import { COMPANY_INFO, Icons } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-accent/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h3 className="text-brand-dark font-bold text-sm tracking-widest uppercase mb-2">Über Uns</h3>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Persönlich und Nah</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Als Ihr lokaler Partner in Niederlenz stehen wir für Vertrauen, Transparenz und Fachkompetenz. 
              {COMPANY_INFO.name} verbindet traditionelle Werte mit modernen Vermarktungsstrategien.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Unser Ziel ist es, Ihnen den Immobilienprozess so angenehm wie möglich zu gestalten – egal ob Sie kaufen oder verkaufen.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-light/20 inline-block">
              <div className="flex items-center gap-4">
                <div className="bg-brand-dark text-white p-3 rounded-full">
                   <span className="font-serif text-xl font-bold">K</span>
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">{COMPANY_INFO.name}</h4>
                  <p className="text-brand-light font-medium">{COMPANY_INFO.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="lg:w-1/2 relative">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-64 h-64 bg-brand-dark/10 rounded-full blur-3xl"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
              <img 
                src="https://picsum.photos/800/600" 
                alt="Beratungssgespräch" 
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                 <p className="text-white font-medium flex items-center gap-2">
                   <Icons.MapPin />
                   {COMPANY_INFO.city}
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
