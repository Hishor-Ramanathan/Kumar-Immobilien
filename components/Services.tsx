import React from 'react';
import { Icons } from '../constants';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Verkauf",
    description: "Wir vermarkten Ihre Immobilie professionell und finden den passenden Käufer für Sie. Von der Bewertung bis zum Notartermin.",
    icon: <Icons.Home />
  },
  {
    title: "Vermietung",
    description: "Wir suchen zuverlässige Mieter für Ihre Wohnung oder Ihr Haus und kümmern uns um alle Formalitäten.",
    icon: <Icons.Key />
  },
  {
    title: "Bewertung",
    description: "Was ist Ihre Immobilie wert? Wir erstellen marktgerechte Schätzungen basierend auf aktuellen Daten.",
    icon: <Icons.TrendingUp />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-brand-light font-bold text-sm tracking-widest uppercase mb-2">Kompetenz</h3>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark">Unsere Dienstleistungen</h2>
          <div className="w-24 h-1 bg-brand-light mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;