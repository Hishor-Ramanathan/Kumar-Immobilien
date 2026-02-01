import React from 'react';
import { COMPANY_INFO, Icons } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-brand-dark to-brand-dark/95 text-white relative scroll-mt-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-light/3 rounded-full blur-3xl -ml-40 -mb-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-white to-brand-light bg-clip-text text-transparent">
            Kontaktieren Sie uns
          </h2>
          <p className="text-brand-light text-lg max-w-2xl mx-auto">
            Wir freuen uns auf Ihre Nachricht. Nutzen Sie einen der folgenden Kanäle, um mit uns in Kontakt zu treten.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Address Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-light/20 to-brand-light/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-brand-light/30 transition-all duration-300 h-full flex flex-col items-center text-center">
              <div className="text-brand-light mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl">
                  <Icons.MapPin />
                </div>
              </div>
              <h4 className="font-bold text-xl mb-3">Adresse</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{COMPANY_INFO.address}</p>
              <p className="text-gray-300 text-sm">{COMPANY_INFO.city}</p>
            </div>
          </div>

          {/* Phone Card */}
          <a href={`tel:${COMPANY_INFO.phone}`} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-light/20 to-brand-light/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-brand-light/30 transition-all duration-300 h-full flex flex-col items-center text-center cursor-pointer">
              <div className="text-brand-light mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl">
                  <Icons.Phone />
                </div>
              </div>
              <h4 className="font-bold text-xl mb-3">Telefon</h4>
              <p className="text-gray-300 font-semibold group-hover:text-brand-light transition-colors">{COMPANY_INFO.phone}</p>
              <span className="text-xs text-brand-light/70 uppercase tracking-widest mt-2">{COMPANY_INFO.role}</span>
            </div>
          </a>

          {/* Email Card */}
          <a href={`mailto:${COMPANY_INFO.email}`} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-light/20 to-brand-light/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-brand-light/30 transition-all duration-300 h-full flex flex-col items-center text-center cursor-pointer">
              <div className="text-brand-light mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <div className="text-4xl">
                  <Icons.Mail />
                </div>
              </div>
              <h4 className="font-bold text-xl mb-3">Email</h4>
              <p className="text-gray-300 font-semibold group-hover:text-brand-light transition-colors break-all text-sm">{COMPANY_INFO.email}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;