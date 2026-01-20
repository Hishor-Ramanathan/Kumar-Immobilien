import React from 'react';
import { COMPANY_INFO, Icons } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark text-white relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Kontaktieren Sie uns</h2>
            <p className="text-brand-light text-lg mb-10 max-w-md">
              Wir freuen uns darauf, von Ihnen zu hören. Vereinbaren Sie noch heute einen unverbindlichen Beratungstermin.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10">
                <div className="text-brand-light mt-1">
                  <Icons.MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Adresse</h4>
                  <p className="text-gray-300">{COMPANY_INFO.address}</p>
                  <p className="text-gray-300">{COMPANY_INFO.city}</p>
                </div>
              </div>

              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 group">
                <div className="text-brand-light mt-1 group-hover:scale-110 transition-transform">
                  <Icons.Phone />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefon</h4>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{COMPANY_INFO.phone}</p>
                  <span className="text-xs text-brand-light/70 uppercase tracking-widest">{COMPANY_INFO.role}</span>
                </div>
              </a>

              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10 group">
                <div className="text-brand-light mt-1 group-hover:scale-110 transition-transform">
                  <Icons.Mail />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-gray-300 group-hover:text-white transition-colors break-all">{COMPANY_INFO.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Interactive Map (Placeholder) & Form */}
          <div className="bg-white text-gray-800 rounded-3xl p-10 shadow-2xl border-2 border-gray-50">
            <h3 className="text-3xl font-bold mb-8 text-brand-dark">Nachricht senden</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 text-brand-dark">Name *</label>
                <input type="text" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent transition-all" placeholder="Ihr Name" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 text-brand-dark">Email *</label>
                <input type="email" className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent transition-all" placeholder="ihre.email@beispiel.ch" required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 text-brand-dark">Nachricht *</label>
                <textarea rows={5} className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent transition-all resize-none" placeholder="Wie können wir Ihnen helfen?" required></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-brand-dark to-brand-light text-white font-bold py-5 rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 shadow-lg text-lg">
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;