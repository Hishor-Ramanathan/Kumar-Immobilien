import React from 'react';
import { COMPANY_INFO, Icons } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-accent/30 relative overflow-hidden scroll-mt-24">
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
          </div>

          {/* Map Content */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[450px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.189568282909!2d8.167825277150117!3d47.394553502931215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790176867078345%3A0x643644f77c3a033b!2sDorfrain%2010%2C%205702%20Niederlenz!5e0!3m2!1sde!2sch!4v1716383000000!5m2!1sde!2sch" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Kumar Immobilien"
              ></iframe>
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg hidden md:block">
                 <p className="text-brand-dark font-bold flex items-center gap-2 text-sm">
                   <Icons.MapPin />
                   Dorfrain 10, 5702 Niederlenz
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