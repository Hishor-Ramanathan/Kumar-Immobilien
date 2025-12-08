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
              Unser Ziel ist es, Ihnen den Immobilienprozess so angenehm wie möglich zu gestalten – egal ob Sie kaufen oder verkaufen. Wir kennen den Markt in 5702 Niederlenz wie unsere Westentasche.
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

          {/* Google Maps Integration */}
          <div className="lg:w-1/2 relative w-full h-[400px]">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-64 h-64 bg-brand-dark/10 rounded-full blur-3xl"></div>
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                style={{border:0}} 
                src="https://maps.google.com/maps?q=Dorfrain%2010%2C%205702%20Niederlenz&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                allowFullScreen
                title="Kumar Immobilien Standort"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-lg shadow-lg pointer-events-none">
                 <p className="text-brand-dark font-medium flex items-center gap-2 text-sm">
                   <Icons.MapPin />
                   {COMPANY_INFO.address}, {COMPANY_INFO.city}
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